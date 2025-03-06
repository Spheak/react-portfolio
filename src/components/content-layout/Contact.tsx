import { Github, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { cn } from "@/lib/utils";
import { error } from "console";

const Contact = () => {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2 mx-[2%] lg:mx-[10%] gap-5"
      id="contact"
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <h1 className=" text-4xl uppercase">
            <span className="text-primary">Contact</span> Me
          </h1>
          <p>
            Have a project in mind or just want to connect? Feel free to reach
            out! I'm always open to discussing new opportunities,
            collaborations, or simply chatting about tech.
          </p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-5">
            <MapPin />
            <div>
              <h2>Address</h2>
              <p>Phnom Penh, Cambodia</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Phone />
            <div>
              <h2>Phone</h2>
              <p>+855 15 809 059</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Mail />
            <div>
              <h2>Email</h2>
              <p>sopheak6336@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Github />
            <div>
              <h2>Github</h2>
              <a
                href="https://github.com/Spheak"
                target="blank"
                className="hover:text-primary  hover:underline"
              >
                https://github.com/Spheak
              </a>
            </div>
          </div>
        </div>
      </div>
      <form className="p-4 flex flex-col gap-5">
        <h2 className="text-2xl mb-5">Send Message</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">Your name</label>
          <input
            type="text"
            name="name"
            id="name"
            className="border-foreground border-b p-2 text-gray-600"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            id="email"
            className="border-foreground border-b p-2 text-gray-600"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">Message</label>
          <textarea
            name="description"
            id="description"
            className="border-foreground border-b p-2 h-[100px]"
          ></textarea>
        </div>
        <Button
          onClick={() => {
            toast.error("Sorry! Feature is under construction.", {
              className: "!bg-primary !text-white !border-white",
              action: {
                label: "Close",
                onClick: () => {},
              },
            });
          }}
          type="button"
          className="mt-5 bg-background hover:bg-background shadow-none border-primary border rounded-none text-foreground cursor-pointer active:bg-primary active:text-white"
        >
          <div className="flex gap-1 items-center justify-center">
            <p>Send</p>
          </div>
        </Button>
      </form>
    </section>
  );
};

export default Contact;
