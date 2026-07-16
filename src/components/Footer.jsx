import { TiSocialFacebook, TiSocialTwitter } from "react-icons/ti";
import { IoLogoDribbble, IoLogoGithub } from "react-icons/io";
import { UseAuth } from "../store/UseAuth";
import { aboutCompany, account, bodyText, footerHeading } from "../data/data";
import { NavLink } from "react-router-dom";
import { FaRegClock } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephoneForward } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
const Footer = () => {
  return (
    <>
      <footer className="  bg-Dark ">
        <div className="container">
          <div className="  px-27 pt-35 pb-6.25 **: ">
            <div className=" flex items-start gap-40 pb-35 ">
              <div className="  flex flex-col w-77.5 gap-6.25 ">
                <h3 className="  font-HK font-bold text-[32px] text-white ">
                  Prime<span className=" text-brand ">Kit</span>
                </h3>
                <p className={`${bodyText}`}>
                  Bring a best development experience to designers and
                  developers by offer the tools needed for having a quicks and
                  most web projects.
                </p>
              </div>
              <div className=" flex w-full justify-between ">
                <div className=" flex flex-col gap-7 ">
                  <h3 className={footerHeading}>About Company</h3>
                  <div className="  grid grid-cols-2 grid-flow-col grid-rows-4 gap-x-12.5 gap-y-2.5 ">
                    {aboutCompany.map((item, i) => {
                      return (
                        <NavLink
                          to={""}
                          key={i}
                          className="font-medium font-HK text-[18px] text-[#ADB7C2] "
                        >
                          {item.title}
                        </NavLink>
                      );
                    })}
                  </div>
                </div>
                <div className="flex flex-col gap-7  ">
                  <h3 className={footerHeading}>Account</h3>
                  <div className="  flex flex-col gap-2.5 ">
                    {account.map((item, i) => {
                      return (
                        <p
                          key={i}
                          className="font-medium font-HK text-[18px] text-[#ADB7C2] "
                        >
                          {item.title}
                        </p>
                      );
                    })}
                  </div>
                </div>
                <div className=" flex flex-col gap-7 ">
                  <h3 className={footerHeading}>Get in touch</h3>
                  <div className="  flex flex-col gap-4.25 ">
                    <p className="flex items-center  gap-3 font-HK font-medium text-[18px] text-[#ADB7C2] ">
                      {" "}
                      <FaRegClock />
                      Sun-Fri: 9:00-5:00
                    </p>
                    <p className="flex items-center  gap-3 font-HK font-medium text-[18px] text-[#ADB7C2] ">
                      {" "}
                      <MdOutlineMail />
                      info@example.com
                    </p>
                    <p className="flex items-center  gap-3 font-HK font-medium text-[18px] text-[#ADB7C2] ">
                      {" "}
                      <BsTelephoneForward />
                      0834 3849 9200
                    </p>
                    <p className="flex items-center  gap-3 font-HK font-medium text-[18px] text-[#ADB7C2] ">
                      {" "}
                      <FiMapPin />
                      16/A New York, USA
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col gap-6.25 ">
              <hr className="    text-[#FFFFFF40] " />
              <div className=" flex items-center justify-between ">
                <div className=" flex items-center gap-7.5 text-[24px] text-[#ADB7C2] ">
                  <TiSocialFacebook />
                  <IoLogoDribbble />
                  <IoLogoGithub />
                  <TiSocialTwitter />
                </div>
                <div>
                  <p className="  font-HK font-medium text-[18px] text-[#ADB7C2] ">
                    © 2020 Primekit. All rights reserved
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
