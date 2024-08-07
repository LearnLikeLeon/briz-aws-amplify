import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogSections from "@/components/BlogSections";
import ContactForm from "@/components/ContactForm";
import Profile from "@/components/Profile";
import Services from "@/components/Services";

export default function Home() {
  return (
    <div>
      <Navbar />

      <main className="pt-16">
        {/* Profile Section */}
        <section id="about">
          <Profile />
        </section>

        {/* Blog Section */}
        <section id="blog">
          <BlogSections />
        </section>

        {/* Service Section */}
        <section id="services">
          <Services />
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
