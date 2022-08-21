import React from "react";
import Link from "./Link";
import { FiGithub, FiGitlab } from "react-icons/fi";
import { TbBrandLinkedin } from "react-icons/tb";
import { BsFacebook } from "react-icons/bs";

const Card = ({ imageSrc, name, nickname, details }) => {
  return (
    <section className="max-w-[1051px] bg-theme-light-yellow rounded-[29px] p-[42px]">
      <div>
        <div className="w-[304px]">
          <div className="pb-5">
            <img
              src={imageSrc}
              alt=""
              className="w-[100px] h-[100px] rounded-[39px]"
            />
          </div>

          <div className="w-[289px]">
            <h3 className="text-2xl text-theme-blue-700 font-bold leading-9">
              {name}
            </h3>
            <p className="text-theme-blue-700 text-base leading-6 font-semibold pb-2">
              {nickname}
            </p>
            <p className="text-lg text-theme-blue-700 leading-7 font-normal">
              {details}
            </p>
          </div>

          <div className="pt-5 flex gap-4">
            <Link to="#" Icon={FiGithub} />
            <Link to="#" Icon={TbBrandLinkedin} />
            <Link to="#" Icon={FiGitlab} />
            <Link to="#" Icon={BsFacebook} />
          </div>
        </div>
      </div>

      <div></div>
    </section>
  );
};

export default Card;
