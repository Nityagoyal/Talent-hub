import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            Our Services
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            At Tarawati Memorial Hospital, we offer a full range of dental treatments—from routine care to advanced procedures—using modern technology and expert hands.
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard
          icon={icon1}
          title="Fillings & Root Canal"
          text="We restore damaged teeth using tooth-colored and light cure fillings. Our painless Root Canal Treatments (RCTs) help preserve natural teeth effectively."
        />
        <ServicesCard
          icon={icon2}
          title="Implants & Extractions"
          text="From simple extractions to permanent dental implants, we offer safe and lasting solutions for missing or problematic teeth."
        />
        <ServicesCard
          icon={icon3}
          title="Cosmetic Dentistry & Surgery"
          text="Smile design, teeth whitening, and advanced oral surgeries tailored to enhance your dental health and aesthetics."
        />
      </div>
    </div>
  );
};

export default Services;
