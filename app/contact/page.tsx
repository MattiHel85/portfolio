import ContactForm from "@/components/ContactForm";

export default function Contact() {
  return (
    <main className="max-w-5xl mx-auto px-6 pt-32 pb-24">
      <div className="max-w-xl">
        <h1 className="text-4xl font-bold text-white mb-4">Get In Touch</h1>
        <p className="text-zinc-400 mb-10">
          Have a project in mind or just want to say hello? Fill out the form
          below and I&apos;ll get back to you as soon as I can.
        </p>
        <ContactForm />
      </div>
    </main>
  );
}
