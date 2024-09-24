import { useState } from 'react';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "1. What is React.js and explain the concept of 'components' in React?",
      answer:
        "React.js is a JavaScript library for building user interfaces. Components are independent, reusable pieces of code that represent parts of a UI. They can be functional or class-based, and they allow you to split the UI into smaller parts for easier management."
    },
    {
      question: "2. What is JSX in React, and how does it work?",
      answer:
        "JSX stands for JavaScript XML. It's a syntax extension for JavaScript that looks similar to HTML. JSX is used with React to describe what the UI should look like. Behind the scenes, JSX is compiled into React.createElement calls, creating elements for the UI."
    },
    {
      question: "3. What is the Virtual DOM, and how does React use it to optimize performance?",
      answer:
        "The Virtual DOM is a lightweight, in-memory representation of the actual DOM. React creates a virtual copy of the DOM and updates only the necessary parts of the real DOM based on changes, improving performance by reducing the number of DOM manipulations."
    },
    {
      question: "4. Explain the concept of 'props' in React and how they are used.",
      answer:
        "Props (short for properties) are used to pass data from one component to another, usually from a parent component to a child component. They are read-only and allow components to communicate and render dynamic data."
    },
    {
      question: "5. What is 'state' in React, and how does it differ from props?",
      answer:
        "State is an object that holds data or information about a component that can change over time. Unlike props, which are passed down to a component, state is managed within the component itself. State allows components to respond to user input or events."
    },
    {
      question: "6. Explain the useState hook and provide an example of how it is used.",
      answer:
        "The useState hook is a React hook that allows you to add state to functional components. Example: `const [count, setCount] = useState(0);`. This creates a state variable `count` initialized to 0 and a function `setCount` to update the state."
    },
    {
      question: "7. What is the purpose of the useEffect hook in React, and when would you use it?",
      answer:
        "The useEffect hook is used to perform side effects in React components, such as fetching data, setting up subscriptions, or manually changing the DOM. It runs after the render and can be configured to run only when certain values change."
    }
  ];

  return (
    <div className="container mx-auto my-10 p-5">
      <h1 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h1>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-4">
            <h2
              onClick={() => toggleFAQ(index)}
              className="text-xl font-semibold cursor-pointer"
            >
              {faq.question}
            </h2>
            {openIndex === index && (
              <p className="text-gray-600 mt-2">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
