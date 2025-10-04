import React from "react";

const States = ({progressItemsCount}) => {
  return (
    <section className=" grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Card - 1 */}
      <div className="rounded-lg bg-linear-[125deg] from-[#632EE3] from-5% to-[#9F62F2] to-85% text-center text-white">
        <div className=" bg-contain bg-position-[left,right] bg-no-repeat p-10 bg-[url(./assets/vector1.png),url(./assets/vector2.png)]">
          <h2 className="text-2xl">In-progress</h2>
          <p className="text-6xl">{progressItemsCount}</p>
        </div>
      </div>

        {/* Card - 2 */}
      <div className="rounded-lg bg-linear-[90deg] from-[#54CF68] from-5% to-[#00827A] to-85% text-center text-white">
        <div className=" bg-contain bg-position-[left,right] bg-no-repeat p-10 bg-[url(./assets/vector1.png),url(./assets/vector2.png)]">
          <h2 className="text-2xl">Resolve</h2>
          <p className="text-6xl">{0}</p>
        </div>
      </div>
    </section>
  );
};

export default States;
