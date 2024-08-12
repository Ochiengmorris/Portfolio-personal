import { useState } from "react";

const Form = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // const newInput = JSON.stringify(inputs, null, 2);

    const { username, email, subject, message } = inputs;

    const mailtoLink = `mailto:your-email@example.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(
      `Name: ${username}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    window.location.href = mailtoLink;
    alert("Complete this process clicking send button to send your message.");
    setInputs({});
  };
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <label className="w-full flex flex-col gap-1">
        Your Name (required):
        <input
          className="bg-gray-300 grow p-2 rounded-md focus:outline-none focus:shadow-sm"
          type="text"
          name="username"
          value={inputs.username || ""}
          onChange={handleChange}
        />
      </label>
      <label className="w-full flex flex-col gap-1">
        Your Email (required):
        <input
          className="bg-gray-300 grow p-2 rounded-md focus:outline-none focus:shadow-sm"
          type="email"
          name="email"
          value={inputs.email || ""}
          onChange={handleChange}
        />
      </label>

      <label className="w-full flex flex-col gap-1">
        Subject:
        <input
          className="bg-gray-300 grow p-2 rounded-md focus:outline-none focus:shadow-sm"
          type="text"
          name="subject"
          value={inputs.subject || ""}
          onChange={handleChange}
        />
      </label>
      <label className="w-full flex flex-col gap-1">
        Your Message:
        <textarea
          rows={8}
          className="bg-gray-300 grow p-2 rounded-md focus:outline-none focus:shadow-sm"
          type="text"
          name="message"
          value={inputs.message || ""}
          onChange={handleChange}
        />
      </label>

      <button
        type="submit"
        className="flex bg-teal-700 bg-opacity-40 w-fit py-2 px-4 rounded-full font-semibold"
      >
        Submit
      </button>
    </form>
  );
};

export default Form;
