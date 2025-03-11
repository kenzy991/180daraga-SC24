import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function HomePage() {
  const [groups, setGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getGroupImage = (groupName) => {
    const images = {
      "C-1": "src/assets/c-6f5ff2bb.png",
      "CPP-1": "src/assets/cpp-0580f82e.png",
      "PS-1": "src/assets/download (1).png",
      "Python-1": "src/assets/python-da72fccc.png"
    };
    return images[groupName] ;
  };

  useEffect(() => {
    axios.get("https://api.180daraga.com/api/events/startcourse/7-12/groups")
      .then(response => {
        const filteredGroups = (response.data.message ).filter(group => group.group !== "");
        setGroups(filteredGroups);
      })
      .catch(error => {
        console.error("Error fetching data:", error);
        setError("Failed to fetch data.");
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className=" bg-main bg-contain  flex flex-col items-center">
      <div className="backdrop-blur-md min-h-screen min-w-screen px-16 py-8  ">
      <div className="flex justify-between mb-[7%]  ">
        <img src="/public/logo-2e33b7a0.png" className="w-[8%] h-[8%] " alt="Logo" />
        <img src="src/assets/Start course'24-0dc6d85c.png" className="w-[25%]  absolute left-[40%] " alt="Start Course" />
      </div>

      {loading && <p className="text-center text-gray-600">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      <div className="flex flex-wrap w-full h-[100%] gap-[5%]">
        {groups.map((group, index) => {
          
          if (group.group === "CPP-2") return null;

          return (
            <div key={index} className="w-[30%] h-[100%] p-10  rounded-lg border border-white/50 shadow-colored shadow-[#b7a089] bg-transparent backdrop-blur-md flex flex-col items-center">
           
              <img 
                src={getGroupImage(group.group)} 
                 className=" rounded-full mb-[10%]" 
                alt={group.group} 
              />

              <div className="flex flex-col  gap-2">
                <Link to={`/${group.group}`}>
                  <button className="  bg-transparent shadow-colored shadow-[#b7a089]  backdrop-blur-md text-white text-xl text-bold px-10 py-2 rounded-lg  hover:bg-red-900"> Group {group.group}</button>
                </Link>
                
                {group.group === "CPP-1" && (
                  <Link to={`/CPP-2`}>
                    <button className=" bg-transparent shadow-colored shadow-[#b7a089]  backdrop-blur-md text-white text-xl text-bold px-10 py-2 rounded-lg hover:bg-red-900 "> Group CPP-2</button>
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </div>
  );
}

export default HomePage;
