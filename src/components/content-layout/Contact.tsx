import { Github, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "../ui/button";
import { toast } from "sonner";
import { t } from "i18next";
import { Trans } from "react-i18next";

const Contact = () => {
  return (
    <section
      className="grid grid-cols-1 lg:grid-cols-2 mx-[2%] lg:mx-[10%] gap-10"
      id="contact"
    >
      <div className="flex flex-col gap-5">
        <div className="flex flex-col gap-5">
          <h1 className=" text-3xl uppercase">
            <Trans i18nKey="contact.title">
              Me <span className="text-primary">Contact</span>
            </Trans>
          </h1>
          <p>{t("contact.description")}</p>
        </div>
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-5">
            <MapPin />
            <div>
              <h2>{t("label.address")}</h2>
              <p>{t("labelValue.address")}</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Phone />
            <div>
              <h2>{t("label.phone")}</h2>
              <p>+855 15 809 059</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Mail />
            <div>
              <h2>{t("label.email")}</h2>
              <p>sopheak6336@gmail.com</p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Github />
            <div>
              <h2>{t("label.github")}</h2>
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
      <form className="flex flex-col gap-5">
        <h2 className="text-2xl mb-5">{t("label.sendMessage")}</h2>
        <div className="flex flex-col gap-2">
          <label htmlFor="name">{t("label.yourName")}</label>
          <input
            type="text"
            name="name"
            id="name"
            className="border-foreground border-b p-2 text-gray-600"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email">{t("label.email")}</label>
          <input
            type="text"
            name="email"
            id="email"
            className="border-foreground border-b p-2 text-gray-600"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="description">{t("label.message")}</label>
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
