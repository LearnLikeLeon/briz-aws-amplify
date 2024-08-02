"use client";

export default function Footer() {
  // const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto text-center">
        {/* &copy; {currentYear} Edwige : The Researcher Analyst */}
        <p>
          Dr. Edwige : The Researcher Analyst -{" "}
          {`© ${new Date().getFullYear()}`} - All rights reserved.
        </p>
        <p className="mt-2">Powered by Women Green Cloud.</p>
      </div>
    </footer>
  );
}
