// 'use client'

// import React, { use, useRef, useState } from "react";
// import Image from "next/image";
// import Contact from "../../public/images/ContactMebrushImage.svg";
// import Socials from "../Components/Socials";
// import Email from "../../public/images/contact/Email.svg";
// import Github from "../../public/images/contact/GitHub.svg";
// import WhatsApp from "../../public/images/contact/WhatsApp.svg";
// import LinkedIn from "../../public/images/contact/LinkedIn.svg";
// import Call from "../../public/images/contact/Call.svg";
// import Link from "next/link";
// import emailjs from "@emailjs/browser"

// const Page = () => {

//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     subject: "",
//     message: "",
//   });

//   const [success, setSuccess] = useState(false);
//   const [error, setError] = useState(false);
//   const form = useRef<HTMLFormElement | null>(null)
//   const sendEmail = (e: React.FormEvent) => {
//     e.preventDefault();
//     setError(false);
//     setSuccess(false);

//     emailjs
//     .sendForm(
//       process.env.NEXT_PUBLIC_SERVICE_ID as string,
//       process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
//       form.current!,
//       process.env.NEXT_PUBLIC_PUBLIC_KEY_ID as string,
//     )
//     .then(
//       (result) => {
//         console.log("Email sent successfully:", result.text);
//         setSuccess(true);
//         form.current?.reset();
//       },
//       (error) => {
//         console.error("Email sending failed:", error);
//         setError(true)
//       }
//     )

//   }

//   return (
//     <div className="bg-contact  lg:bg-no-repeat lg:bg-center h-[100vh] relative text-white">
//       <div className="flex items-center  absolute top-0 w-full h-full bg-overlay bg-opacity-[70%] lg:items-start">
//         <div className="w-[50%] lg:w-[25%] absolute top-[12%] left-[27%] lg:top-[10%] lg:left-[0%]">
//           <Image src={Contact} alt="image" />
//         </div>
//         <div className="flex flex-col-reverse lg:flex lg:flex-row text-white p-10 w-full lg:mt-[13%] mt-[10%]">
//           <div className="lg:w-[40%] flex flex-wrap lg:flex lg:flex-col lg:justify-between">
//             <Link href="#" className="h-[5%] w-[50%]">
//               <Socials image={Call} details="+263 71 131 1050" />
//             </Link>
//             <Link href="#" className="h-[5%] w-[50%]">
//               <Socials image={WhatsApp} details="+263 71 131 1050" />
//             </Link>
//             <Link href="#" className="h-[5%] w-[50%]">
//               <Socials image={Github} details="DerrickDeshoe" />
//             </Link>
//             <Link href="#" className="h-[5%] w-[50%]">
//               <Socials image={LinkedIn} details="Derrick Deshu" />
//             </Link>
//             <Link href="#" className="h-[5%] w-[50%]">
//               <Socials image={Email} details="derrickdeshoe71@gmail.com" />
//             </Link>
//           </div>
//           <div className="lg:w-[50%] flex flex-col justify-end space-y-3">
//             <form onSubmit={sendEmail} ref={form} className="space-y-3 flex flex-col items-end">
//               <div className="flex justify-between space-x-2 w-[100%]">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Name"
//                   className="border border-white p-2 text-xs lg:text-sm outline-none w-[100%]  rounded-lg bg-transparent"
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   className="border border-white p-2 text-xs lg:text-sm  outline-none w-[100%]  rounded-lg bg-transparent"
//                 />
//               </div>
//               <input
//                 type="text"
//                 name="subject"
//                 placeholder="Subject"
//                 className="border border-white p-2 pr-[113px] text-xs lg:text-sm outline-none rounded-lg bg-transparent w-[100%]"
//               />
//               <textarea
//                 name="message"
//                 placeholder="Message"
//                 className="border border-white p-2 pb-[100px] pr-[113px] md:pb-[150px] text-xs lg:text-sm outline-none rounded-lg bg-transparent w-[100%]"
//               />
//               <button
//                 type="submit"
//                 className="bg-red hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-xs "
//               >
//                 Submit
//               </button>
//               {success && (
//                 <span className="text-white font-semibold">
//                   Your message was sent successfully!
//                 </span>
//               )}
//                {error && (
//                 <span className="text-red font-semibold">
//                   Something went wrong!
//                 </span>
//               )}
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Page;

"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import Contact from "../../public/images/ContactMebrushImage.svg";
import Socials from "../Components/Socials";
import Email from "../../public/images/contact/Email.svg";
import Github from "../../public/images/contact/GitHub.svg";
import WhatsApp from "../../public/images/contact/WhatsApp.svg";
import LinkedIn from "../../public/images/contact/LinkedIn.svg";
import Call from "../../public/images/contact/Call.svg";
import Link from "next/link";
import emailjs from "@emailjs/browser";

const Page = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setSuccess(false);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID as string,
        process.env.NEXT_PUBLIC_TEMPLATE_ID as string,
        form.current!,
        process.env.NEXT_PUBLIC_PUBLIC_KEY_ID as string
      )
      .then(
        (result) => {
          console.log("Email sent successfully:", result.text);
          setSuccess(true);
          form.current?.reset();
        },
        (error) => {
          console.error("Email sending failed:", error);
          setError(true);
        }
      );
  };

  return (
    <div className="bg-contact lg:bg-no-repeat lg:bg-center h-[100vh] relative text-white">
      <div className="flex items-center absolute top-0 w-full h-full bg-overlay bg-opacity-[70%] lg:items-center">
        <div className="w-[50%] lg:w-[25%] absolute top-[12%] left-[27%] lg:top-[10%] lg:left-[0%]">
          <Image src={Contact} alt="image" />
        </div>
        <div className="flex flex-col-reverse lg:flex lg:flex-row text-white p-10 w-full lg:mt-[13%] mt-[10%]">
          <div className="lg:w-[40%] flex flex-wrap lg:flex lg:flex-col lg:space-y-[15%] xl:space-y-[10%]">
            <Link href="#" className="h-[5%] w-[50%]">
              <Socials image={Call} details="+263 71 131 1050" />
            </Link>
            <Link href="#" className="h-[5%] w-[50%]">
              <Socials image={WhatsApp} details="+263 71 131 1050" />
            </Link>
            <Link href="#" className="h-[5%] w-[50%]">
              <Socials image={Github} details="DerrickDeshoe" />
            </Link>
            <Link href="#" className="h-[5%] w-[50%]">
              <Socials image={LinkedIn} details="Derrick Deshu" />
            </Link>
            <Link href="#" className="h-[5%] w-[50%]">
              <Socials image={Email} details="derrickdeshoe71@gmail.com" />
            </Link>
          </div>
          <div className="lg:w-[50%] flex flex-col justify-end space-y-3">
            <form
              onSubmit={sendEmail}
              ref={form}
              className="space-y-3 flex flex-col items-end"
            >
              <div className="flex justify-between space-x-2 w-[100%]">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="border border-white p-2 text-xs lg:text-sm outline-none w-[100%] rounded-lg bg-transparent"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="border border-white p-2 text-xs lg:text-sm outline-none w-[100%] rounded-lg bg-transparent"
                  required
                />
              </div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="border border-white p-2 pr-[113px] text-xs lg:text-sm outline-none rounded-lg bg-transparent w-[100%]"
                required
              />
              <textarea
                name="message"
                placeholder="Message"
                className="border border-white p-2 pb-[100px] pr-[113px] md:pb-[150px] text-xs lg:text-sm outline-none rounded-lg bg-transparent w-[100%]"
                required
              />
              <button
                type="submit"
                className="bg-red hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-xs"
              >
                Submit
              </button>
              {success && (
                <span className="text-white font-semibold">
                  Your message was sent successfully!
                </span>
              )}
              {error && (
                <span className="text-red font-semibold">
                  Something went wrong!
                </span>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
