import React from "react";

export default function Information() {
  return (
    <div
      className="text-white bg-black w-full h-auto sm:h-screen snap-start flex flex-col sm:flex-row justify-center items-center gap-10 p-10"
      id="aboutMe"
    >
      <div className="w-full sm:w-1/3 ">
        <img src={require("./../assets/images/me.jpg")} alt="me" />
      </div>
      <div className="w-full sm:w-1/3 flex-wrap text-xs sm:text-lg">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa iure
        officiis error modi autem ducimus vero pariatur alias cupiditate rerum?
        Laudantium incidunt, ex veniam doloribus reiciendis accusantium atque
        repellat, placeat et velit hic eaque deserunt unde id assumenda amet
        reprehenderit, nobis impedit error dignissimos. Sed ipsam corporis quia
        soluta necessitatibus!
      </div>
    </div>
  );
}
