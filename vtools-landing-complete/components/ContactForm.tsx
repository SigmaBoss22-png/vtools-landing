'use client';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  shopUrl: z.string().url().optional().or(z.literal('')),
  message: z.string().min(5),
  botField: z.string().max(0).optional(),
});
type FormData = z.infer<typeof schema>;

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      await fetch('/api/lead', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });
      setSent(true);
    } catch (e) {
      console.error(e);
    }
  };

  if (sent) return <p className="text-green-700">Danke! Wir melden uns zeitnah.</p>;

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="grid gap-3">
      <input type="text" placeholder="Ihr Name" className="border rounded-xl px-3 py-2" {...register('name')} />
      {errors.name && <span className="text-red-600 text-sm">{errors.name.message}</span>}

      <input type="email" placeholder="E-Mail" className="border rounded-xl px-3 py-2" {...register('email')} />
      {errors.email && <span className="text-red-600 text-sm">{errors.email.message}</span>}

      <input type="text" placeholder="Firma" className="border rounded-xl px-3 py-2" {...register('company')} />

      <input type="url" placeholder="Shop-URL" className="border rounded-xl px-3 py-2" {...register('shopUrl')} />

      <textarea placeholder="Nachricht" className="border rounded-xl px-3 py-2 min-h-[120px]" {...register('message')} />

      <input type="text" className="hidden" tabIndex={-1} autoComplete="off" {...register('botField')} />

      <button className="btn" disabled={isSubmitting}>{isSubmitting ? 'Senden…' : 'Demo anfragen'}</button>
    </form>
  );
}
