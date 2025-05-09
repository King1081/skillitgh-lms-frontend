
import React from "react";
//import { Card } from "./ui/card";
//import { CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card";

const WorkshopCard = ({ title, date, status, image, description, onClick, view, isRegistered }) => {
  const clickable = view === "upcoming";


  return (
    <div 
    className={`border rounded-lg overflow-hidden shadow-md cursor-${
      clickable ? "pointer" : "default"
    } transition duration-200 hover:shadow-lg`}
    onClick={clickable ? onClick : null}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800 mb-2">{title}</h2>
        <p className="text-sm text-gray-500 mb-2">
          {date} <strong>&bull; {status}</strong>{" "}
          {isRegistered ? (
            <p className="text-green-600 font-medium">You're registered</p>
          ) : (
            <button
              onClick={() => handleRegister(workshop._id)}
              className="bg-blue-600 text-white px-4 py-2 rounded mt-2"
            >
              Register
            </button>
          )}
        </p>{/*
        </p>{/*
        <p className="text-sm text-gray-500">{facilitator}</p>
        <p className="text-sm text-gray-500">{location}</p>*/}
        <p className="text-sm text-gray-500">{description}</p>
      </div>
    </div>
  );
};

export default WorkshopCard;


  
 /* import { Card } from "./ui/card";
import { CardHeader, CardTitle, CardContent, CardFooter } from "./ui/card";

const WorkshopCard = () => {
    return (
    <div className="rounded-xl overflow-hidden shadow-md bg-white">
      <Card className="w-[300px] shadow-md">
        <CardHeader>
          <CardTitle>Course Summary</CardTitle>
        </CardHeader>
        <CardContent>
        <img src={image} alt={title} className="w-full h-48 object-cover" />
        </CardContent>
        <CardFooter>
          <button className="text-blue-600 font-medium">Enroll Now</button>
        </CardFooter>
      </Card>

    </div>
  );
};

export default WorkshopCard;*/