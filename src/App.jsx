/* eslint-disable no-undef */
import { useState } from "react";
import vid from "./video.mp4";

const App = () => {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const x = name1.replaceAll(" ", "");
    const y = name2.replaceAll(" ", "");
    let a = [...x.toLowerCase()];
    let b = [...y.toLowerCase()];
    a.forEach((i) => {
      if (b.includes(i)) {
        a = a.filter((n) => n !== i);
        b = b.filter((n) => n !== i);
      }
    });
    const score = ((a.concat(b).length % 10) / 10) * 100;
    display(x, y, score);
  };

  const display = (a, b, score) => {
    alert(
      `The percentage of ${a} and ${b}'s love is ${score}% ${
        score < 70 ? "🤐" : "😍"
      }`
    );
    setName1("");
    setName2("");
  };

  return (
    <>
      <video
        autoPlay
        muted
        loop
        className="absolute -z-10 w-full h-full object-cover opacity-70"
        src={vid}></video>
      <div className="myContainer h-[100svh] grid grid-rows-4 font-medium">
        <h1 className="m-auto text-center text-red-600 text-2xl md:text-4xl">
          Love Calculator
        </h1>
        <form
          className="grid place-items-center row-span-3"
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
// I want to add background video: A short continuous looping video of love
