import React, { useState } from "react";
import { Button } from "./button";
import { Input } from "./input";

const NewsletterSignup: React.FC = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail("");

      // Reset success message after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }, 1000);
  };

  return (
    <div className="bg-[#C1E5D2] p-6 rounded-lg">
      <h3 className="text-xl font-bold mb-3">Stay Updated</h3>
      <p className="mb-4 text-sm">
        Subscribe to our newsletter for the latest updates and resources.
      </p>

      {isSubmitted ? (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4">
          Thank you for subscribing!
        </div>
      ) : null}

      {error ? (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4">
          {error}
        </div>
      ) : null}

      <form onSubmit={handleSubmit} className="flex gap-2">
        <Input
          type="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="flex-grow border-[#397B57]"
        />
        <Button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#397B57] hover:bg-[#2F6D4B]"
        >
          {isSubmitting ? "..." : "Subscribe"}
        </Button>
      </form>
    </div>
  );
};

export default NewsletterSignup;
