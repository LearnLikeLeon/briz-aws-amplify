"use client";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-4">
      <div className="container mx-auto text-center italic font-serif">
        <p>
          ES Consulting - {`© ${new Date().getFullYear()}`} - All rights
          reserved.
        </p>
        <p className="mt-2">Powered by Women Green Cloud.</p>
      </div>
    </footer>
  );
}
