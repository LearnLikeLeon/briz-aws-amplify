import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BlogSections from "@/components/BlogSections";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <div>
      <Navbar />
      <BlogSections />
      <ContactForm />
      <Footer />
    </div>
  );
}
