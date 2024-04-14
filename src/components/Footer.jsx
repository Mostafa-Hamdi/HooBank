import React from "react";
import { footerLinks, socialMedia } from "../constants";
import styles from "../style";
import { logo } from "../assets";
const Footer = () => (
  <footer className={`${styles.flexCenter} sm:pt-16 pt-6 pb-6 flex-col`}>
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      <div className="flex-[1] flex flex-col justify-start mr-10">
        <img
          src={logo}
          alt="logo"
          className="w-[266px] h-[72.14px] object-contain"
        />
        <p className={`${styles.paragraph} mt-4 max-w-[312px]`}>
          A new way to make the payments easy, reliable and secure.
        </p>
      </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((list) => (
          <div className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {list.title}
            </h4>
            <ul className="list-none mt-4">
              {list.links.map((link, index) => (
                <li
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== list.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  <a href={link.link}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
        Copyright &copy; 2021 HooBank. All Rights Reserved.
      </p>
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((media, index) => (
          <a key={media.id} href={media.link}>
            <img
              src={media.icon}
              alt={media.id}
              className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
              }`}
            />
          </a>
        ))}
      </div>
    </div>
  </footer>
);
export default Footer;
