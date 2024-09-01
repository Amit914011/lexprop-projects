import React, { useContext } from "react";
import UserContext from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Service = () => {
   
  const services = [
    {
      title: "Civil Lawyer",
      description:
        "Expert legal assistance in civil matters including property disputes, contract issues, and more.",
      icon: "🏛️",
    },
    {
      title: "Criminal Lawyer",
      description:
        "Experienced defense in criminal cases, ensuring your rights are protected at every step.",
      icon: "⚖️",
    },
    {
      title: "Family Lawyer",
      description:
        "Compassionate guidance in family law, covering divorce, custody, and related matters.",
      icon: "👨‍👩‍👧‍👦",
    },
    {
      title: "Corporate Lawyer",
      description:
        "Providing corporate clients with legal solutions for business operations and compliance.",
      icon: "🏢",
    },
    {
      title: "Immigration Lawyer",
      description:
        "Assisting with visas, residency, and citizenship applications, ensuring smooth processes.",
      icon: "🛂",
    },
    {
      title: "Intellectual Property Lawyer",
      description:
        "Protecting your creations with expertise in patents, trademarks, and copyrights.",
      icon: "💡",
    },
  ];
  let {flag} = useContext(UserContext)
  let navigation=useNavigate()
  function handleClick(){
    if(flag){
        navigation('/')
    }else{
        navigation('/signup')
    }
  }
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4 cursor-pointer" onClick={handleClick}>
      <div className="w-full max-w-6xl bg-white shadow-md rounded-lg p-8">
        <h1 className="text-3xl font-semibold text-gray-800 mb-8 text-center">
          Our Services
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 bg-gray-50 rounded-lg shadow-md hover:shadow-lg transition duration-300"
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {service.title}
              </h2>
              <p className="text-gray-600 text-center">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Service;