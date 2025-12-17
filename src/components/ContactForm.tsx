import React, { useState } from "react";

type ContactFormProps = {
  onSubmit: (data: {
    name: string;
    phone: string;
    email: string;
    message: string;
    notRobot: boolean;
  }) => void;
  submitting?: boolean;
  statusMessage?: string;
};

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit, submitting = false, statusMessage }) => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
    notRobot: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target;
    const { name, value, type, checked } = target as HTMLInputElement;
    setForm((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
  };

  return (
    <>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <input
          className="w-full h-[45px] border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-md"
          type="text"
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          className="w-full h-[45px] border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-md"
          type="text"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <input
          className="w-full h-[45px] border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-md"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <textarea
          className="w-full h-[120px] border border-gray-300 rounded-lg px-5 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-400 text-md"
          rows={4}
          name="message"
          placeholder="Message"
          value={form.message}
          onChange={handleChange}
          required
        />
        
        <button
          type="submit"
          disabled={submitting}
          className="mt-2 flex justify-center items-center w-full h-[45px] bg-emerald-600 hover:bg-[#19B3B1] text-white py-4 rounded-lg text-md font-semibold transition disabled:opacity-60"
        >
          {submitting ? "Sending..." : "Send"}
        </button>
      </form>
      {statusMessage && (
        <p className="mt-4 text-center text-gray-700">{statusMessage}</p>
      )}
    </>
  );
};

export default ContactForm;
