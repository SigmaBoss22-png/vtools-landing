'use client';
import { useEffect, useRef, useState } from 'react';

export function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{role:'user'|'assistant', content:string}[]>([]);
  const [loading, setLoading] = useState(false);
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(()=>{
    boxRef.current?.scrollTo({ top: boxRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, open]);

  const send = async () => {
    if (!input.trim()) return;
    const userMsg = { role: 'user' as const, content: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);
    try {
      const res = await fetch('/api/chat', { method:'POST', body: JSON.stringify({ messages: [...messages, userMsg] }) });
      if (!res.ok || !res.body) throw new Error('Fehler');
      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let assistant = '';
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        assistant += decoder.decode(value);
        setMessages(prev => {
          const prevAssistantIndex = prev.findLastIndex(m => m.role === 'assistant');
          const arr = [...prev];
          if (prevAssistantIndex !== -1 && prevAssistantIndex === prev.length - 1) {
            arr[prevAssistantIndex] = { role: 'assistant', content: assistant };
            return arr;
          }
          return [...arr, { role: 'assistant', content: assistant }];
        });
      }
    } catch (e) {
      setMessages(prev => [...prev, { role:'assistant', content: 'Entschuldigung, ein Fehler ist aufgetreten.' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      {open && (
        <div className="fixed bottom-24 right-4 w-80 bg-white border shadow-subtle rounded-xl overflow-hidden">
          <div className="px-3 py-2 bg-[color:var(--brand-navy)] text-white">Vtools Chat</div>
          <div className="h-64 overflow-y-auto p-3 space-y-2" ref={boxRef}>
            {messages.map((m, i)=>(
              <div key={i} className={m.role==='user'?'text-right':''}>
                <div className={"inline-block rounded-xl px-3 py-2 "+(m.role==='user'?'bg-black/5':'bg-black/10')}>{m.content}</div>
              </div>
            ))}
            {loading && <div className="text-sm text-black/60">Antwort wird geschrieben…</div>}
          </div>
          <div className="flex gap-2 p-2 border-t">
            <input className="flex-1 border rounded-xl px-2 py-1" value={input} onChange={e=>setInput(e.target.value)} placeholder="Ihre Frage…" />
            <button className="btn" onClick={send} disabled={loading}>Senden</button>
          </div>
        </div>
      )}
      <button onClick={()=>setOpen(v=>!v)} className="fixed bottom-4 right-4 btn rounded-full h-14 w-14">↗</button>
    </div>
  );
}
