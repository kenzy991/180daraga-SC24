import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";


function GroupDetails() {
  const { Group } = useParams();
  const [Person, setPerson] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get(`https://api.180daraga.com/api/events/startcourse/7-12/persons/${Group}`)
      .then((response) => {
        setPerson(response.data.message.sort((a, b) => b.Score - a.Score));
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching group data:", err);
        setError("Failed to load group details.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading...</p>;
  if (error) return <p className="text-center text-red-500">{error}</p>;

  return (
    <div className="flex flex-col items-center justify-center bg-main bg-contain min-h-screen backdrop-blur-md">
      
      <div className=" w-[50%] px-4 ">
        <h1 className="text-white text-3xl font-bold mb-6 text-center">Scoreboard</h1>
        
        {Person.map((e, index) => (
          <div
          key={e.person_id}
          className="relative flex items-center justify-between px-6 py-4 rounded-xl text-white border border-white/50 shadow-colored shadow-[#b7a089]  bg-transparent mb-4">
        
            <span className="absolute -top-3 -left-3 w-7 h-7 flex items-center justify-center font-bold border-1 shadow-md  text-white bg-[#8f8276] rounded-full">
              {index + 1}
            </span>

            <span className="text-lg font-semibold pl-12">{e.name}</span>
            <span className="text-lg font-bold">{e.Score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default GroupDetails;
