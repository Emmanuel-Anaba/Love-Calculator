/* eslint-disable no-undef */
import { useState } from "react";

const App = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let a = [...name1];
    let b = [...name2];
    a.forEach((i) => {
      if (b.includes(i)) {
        a = a.filter((char) => char !== i);
        b = b.filter((char) => char !== i);
      }
    });
    let score = ((a.concat(b).length % 10) / 10) * 100;
    display(name1, name2, score);
  };

  const display = (a, b, score) => {
    alert(
      `The percentage of ${a} and ${b}'s love is ${score} ${
        score < 70 ? "🤐" : "😍"
      }`
    );
    setName1("");
    setName2("");
  };

  return (
    <>
      <div className="myContainer h-[100svh] grid grid-rows-6">
        <div className="row-span-1 grid place-items-center">
          <h1 className="text-center text-2xl md:text-4xl font-medium">
            Love Calculator
          </h1>
        </div>
        <form
          className="grid place-items-center row-span-4"
          onSubmit={handleSubmit}>
          <div className="w-[90%] grid md:grid-flow-col gap-3">
            <input
              type="text"
              placeholder="First Name"
              required
              value={name1}
              onChange={(e) => setName1(e.target.value)}
            />
            <input
              type="text"
              placeholder="Second Name"
              required
              value={name2}
              onChange={(e) => setName2(e.target.value)}
            />
          </div>
          <button
            className="bg-red-600 text-white px-5 py-1 rounded-full m-auto"
            type="submit">
            Calculate
          </button>
        </form>
      </div>
    </>
  );
};

export default App;
// I want to add background image
