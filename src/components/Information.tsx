import React from "react";

export default function Information() {
  return (
    <div
      className="text-white bg-black w-full h-screen snap-start flex flex-row justify-center items-center gap-10 p-10"
      id="aboutMe"
    >
      <div className="w-1/3">
        <img src={require("./../assets/images/me.jpg")} alt="me" />
      </div>
      <div className="w-1/3">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic saepe optio
        eveniet? Dolor, assumenda doloribus. Ab sunt commodi officia, dolorum
        vero veritatis totam magnam a, nobis obcaecati maiores, consectetur non
        ipsam eligendi adipisci quisquam libero similique dignissimos labore
        ipsa quis deleniti? Eum dolor unde corporis reprehenderit ipsum ducimus
        iusto doloribus deserunt saepe voluptate veniam facere voluptatum
        praesentium quidem accusamus, sint, aliquid nesciunt ab sit similique
        magnam reiciendis, vero at et. Reprehenderit ducimus placeat adipisci
        libero saepe id ex neque accusantium quasi nulla, nesciunt ipsa culpa
        quidem, vel rem delectus perferendis sapiente atque? Similique,
        consectetur. Ullam facere dolores eaque natus, recusandae veritatis
        omnis animi, perferendis labore facilis asperiores rerum quisquam
        inventore, maiores aut. Omnis pariatur perferendis, blanditiis tenetur
        fugiat in aperiam corrupti sequi est distinctio reprehenderit. Explicabo
        reprehenderit provident unde nostrum nemo aut alias sed. Pariatur
        repudiandae error architecto sapiente incidunt temporibus, ipsam
        aspernatur quo perspiciatis similique mollitia beatae cumque sunt quae
        soluta reiciendis enim aperiam aut iste esse quaerat, perferendis
        voluptatum? Laborum delectus, reprehenderit nobis perspiciatis ab
        consequuntur libero sint illum eum error praesentium aut provident amet
        tempora consectetur autem esse officiis accusantium harum quidem quo
        ipsum impedit! Eius, quisquam totam provident eaque nisi aut ducimus
        inventore aperiam unde blanditiis.
      </div>
    </div>
  );
}
