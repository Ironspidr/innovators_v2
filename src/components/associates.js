import ERHS from "../assets/img/mustangs.png";
import eSTEM from "../assets/img/eSTEM_acad.png";
import VMM from "../assets/img/VMM Logo.png";

export default function Associates() {
  return (
    <div className="">
      <h1 className="flex justify-center text-3xl font-semibold pt-10">
        In Association With
      </h1>
      <div className="flex justify-center items-center">
        <img src={ERHS} alt="ERHS" className="h-44 px-5" px-10 />
        <img src={eSTEM} alt="eSTEM" className=" h-40 px-10" />
        <img src={VMM} alt="VMM" className="px-5 h-28" />
      </div>
    </div>
  );
}
