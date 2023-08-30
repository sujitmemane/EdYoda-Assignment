import Clock from "../assets/clock.png";
import Course from "../assets/course.png";
import Degree from "../assets/degree.png";
import Live from "../assets/live.png";

const info = [
  {
    id: "1",
    icon: Course,
    title: (
      <p>
        <span style={{ color: "#0048ff" }}>100+ </span> Job relevant courses
      </p>
    ),
  },
  {
    id: "2",
    icon: Clock,
    title: (
      <p>
        {" "}
        <span style={{ color: "#0048ff" }}>20,000+</span> Hours of content
      </p>
    ),
  },
  {
    id: "3",
    icon: Live,
    title: (
      <p>
        <span style={{ color: "#0048ff" }}>Exclusive</span> webinar access
      </p>
    ),
  },
  {
    id: "4",
    icon: Degree,
    title: (
      <p>
        Scholarship worth <span style={{ color: "#0048ff" }}>₹94,500 </span>{" "}
      </p>
    ),
  },

  {
    id: "5",
    icon: Course,
    title: (
      <p>
        {" "}
        <span style={{ color: "#0048ff" }}> Add Free</span> learning Experience
      </p>
    ),
  },
];

const plans = [
  {
    id: "1",
    title: "12 Month Subscription",
    total: "5999",
    value: 5999,
    monthly: "499",
    label: "Offer Expired",
    labelColor: "#F77171",
    disable: true,
  },
  {
    id: "2",
    title: "12 Month Subscription",
    total: "6999",
    value: 6999,
    monthly: "584",
    label: "Recommended",
    labelColor: "#47BA68",

    disable: false,
  },
  {
    id: "3",
    title: "6 Month Subscription",
    total: "2999",
    value: 2999,
    monthly: "499",
    label: null,
    disable: false,
  },
  {
    id: "4",
    title: "3  Month Subscription",
    total: "1999",
    value: 1999,
    monthly: "666",
    label: null,
    disable: false,
  },
];

export { info, plans };
