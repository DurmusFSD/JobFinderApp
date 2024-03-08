import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaSlack,
  FaTwitter,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#1b1f23] py-20">
        <div className="container mx-auto px-6">
          <h2 className="lg:text-4xl text-white text-center font-semibold">
            Ready For Your Next Hire With Us?
          </h2>
          <p className="lg:w-1/2 mx-auto text-white text-center text-xl py-8">
            Along with conventional advertising & below the line activities &
            organization have come to realize that they need to invest
          </p>
          <div className="flex justify-center my-8">
            <button className="rounded-full bg-primary text-lg text-white font-bold px-8 py-3 outline-none border-none hoverBtn">
              Login to Community
            </button>
          </div>

          <section className="flex flex-wrap pt-16 justify-between gap-8">
            <div className="flex flex-col justify-between">
              <span className="flex items-center lg:text-5xl text-3xl">
                <button className="rounded-full py-1 text-white bg-primary lg:text-5xl text-3xl outline-none border-none">
                  Jo
                </button>
                <p className="font-semibold leading-tight text-white">bline</p>
              </span>
              <p className="text-white text-lg">Call us</p>
              <p className="text-primary text-lg">123 456 789</p>
              <p className="text-white text-lg">
                90 Fifth Avenue, 3rd Floor <br />
                San Francisco, CA 2024 <br /> durmusozgul66@gmail.com
              </p>
            </div>
            <div>
              <h6 className="text-white text-2xl pb-6">Community</h6>
              <ul className="flex flex-col gap-6 text-lg">
                <a
                  href="#"
                  className="text-white no-underline hover:text-primary"
                >
                  Against Discrimination
                </a>
                <a
                  href="#"
                  className="text-white no-underline hover:text-primary"
                >
                  Invite friends
                </a>
                <a
                  href="#"
                  className="text-white no-underline hover:text-primary"
                >
                  Gift cards
                </a>
              </ul>
            </div>
            <div>
              <h6 className="text-white text-2xl pb-6">Booking support</h6>
              <ul className="flex flex-col gap-6 text-lg">
                <a
                  href="# "
                  className="text-white no-underline hover:text-primary"
                >
                  COVID-19
                </a>
                <a
                  href="#"
                  className="text-white no-underline hover:text-primary"
                >
                  Help Center
                </a>
                <a
                  href="#"
                  className="text-white no-underline hover:text-primary"
                >
                  Support
                </a>
                <a
                  href="#"
                  className="text-white no-underline hover:text-primary"
                >
                  Trust & Safety
                </a>
              </ul>
            </div>
            <div>
              <h6 className="text-white text-2xl pb-6">About</h6>
              <ul className="flex flex-col gap-6 text-lg">
                <a
                  href="#"
                  className="text-white no-underline hover:text-primary"
                >
                  How it works
                </a>
                <a
                  href="#"
                  className="text-white no-underline hover:text-primary"
                >
                  Careers
                </a>
                <a
                  href="#"
                  className="text-white no-underline hover:text-primary"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="text-white no-underline hover:text-primary"
                >
                  Media
                </a>
              </ul>
            </div>
            <div>
              <h6 className="text-white text-2xl pb-6">Become an employer</h6>
              <ul className="flex flex-col gap-6 text-lg">
                <a
                  href="#"
                  className="text-white no-underline hover:text-primary"
                >
                  Post your job
                </a>
                <a
                  href="#"
                  className="text-white no-underline hover:text-primary"
                >
                  Business account
                </a>
                <a
                  href="#"
                  className="text-white no-underline hover:text-primary"
                >
                  Resource Center
                </a>
                <a
                  href="#"
                  className="text-white no-underline hover:text-primary"
                >
                  Community
                </a>
              </ul>
            </div>
          </section>
        </div>
      </div>
      <div class="flex items-center justify-center space-x-4">
        <p class="text-center">All rights reserved, Durmuş ÖZGÜL</p>
        <span class="flex space-x-4">
          <FaFacebookF size={20} class="text-blue-500 hover:text-blue-600" />
          <FaTwitter size={20} class="text-blue-500 hover:text-blue-600" />
          <FaSlack size={20} class="text-blue-500 hover:text-blue-600" />
          <FaLinkedinIn size={20} class="text-blue-500 hover:text-blue-600" />
          <FaInstagram size={20} class="text-blue-500 hover:text-blue-600" />
        </span>
      </div>
    </footer>
  );
}
