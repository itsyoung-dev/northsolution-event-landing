import {
  FaceSmileIcon,
  ChartBarSquareIcon,
  CursorArrowRaysIcon,
  DevicePhoneMobileIcon,
  AdjustmentsHorizontalIcon,
  SunIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";

const benefitOne = {
  title: "Start your Coding Adventure",
  desc: "North Solution Benefit 1",
  image: benefitOneImg,
  bullets: [
    {
      title: "Understand your customers",
      desc: "We help you with your needs.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Our Stats",
      desc: "50+ projects completed, 7+ years of experience, 11m+ lines writen.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Drive customer retention",
      desc: "We provide vary options for you to get the best experience possible.",
      icon: <CursorArrowRaysIcon />,
    },
  ],
};

const benefitTwo = {
  title: "We can create your Website",
  desc: "You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Mobile Responsive Template",
      desc: "North Solution is designed as a mobile first responsive template.",
      icon: <DevicePhoneMobileIcon />,
    },
    {
      title: "Customizable Request",
      desc: "Your request and wants is what matters to our org.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Reasonable Prices",
      desc: "North comes with a zero-config light & dark mode. ",
      icon: <SunIcon />,
    },
  ],
};


export {benefitOne, benefitTwo};
