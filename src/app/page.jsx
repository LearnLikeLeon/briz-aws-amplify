import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogSections from "@/components/BlogSections";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="pt-16">
        {/* Blog Section */}
        <section id="blog">
          <BlogSections />
        </section>
        {/* ' Connect with me ' Section */}
        <section id="contact">
          <ContactForm />
        </section>
      </main>

      <Footer />
    </div>
  );
}
