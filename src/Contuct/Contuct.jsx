import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const Contuct = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 1500,
      easing: "ease-in-sine",
    });
  }, []);
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm("service_8ecsdud", "template_995ptah", form.current, {
        publicKey: "e7NqH4B_Wvp9mLajn",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <div
      className="bg-white lg:px-32 md:px-16 px-10 py-20 flex justify-center"
      id="contuct"
    >
      <form
        className="sm:w-[500px] w-[400px] bg-orange-400 sm:p-10 rounded p-5"
        data-aos="zoom-in"
        onSubmit={sendEmail}
        ref={form}
      >
        <p className="text-center py-5 text-3xl">Contuct Me</p>
        <div className="flex sm:justify-between justify-center py-3 sm:gap-5 gap-5">
          <div className="">
            <label htmlFor="Name" className="mb-1">
              Name :
            </label>
            <input
              type="text"
              name="from_name"
              className="ps-1 sm:w-full w-32 border-none outline-none py-1 rounded"
              placeholder="Enter Your Name"
              required
            />
          </div>
          <div className="">
            <label htmlFor="Name" className="mb-2">
              Email :
            </label>
            <input
              type="email"
              name="from_email"
              className="border-none sm:w-full w-32 outline-none ps-1 py-1 rounded"
              placeholder="Enter Your Email"
              required
            />
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="message" className="mb-1">
            Messages :
          </label>
          <textarea
            className="rounded ps-1"
            name="message"
            placeholder="Drop Your Message Here"
          ></textarea>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 hover:bg-transparent mt-5 py-1 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
export default Contuct;
