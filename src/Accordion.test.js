import { shallow } from "enzyme";
import { configure } from "enzyme";
import toJson from "enzyme-to-json";
import Adapter from "enzyme-adapter-react-16";
import React from "react";
import ReactDOM from "react-dom";
import Accordion from "./Accordion";

configure({ adapter: new Adapter() });

describe("accordion", () => {
  const sections = [
    {
      title: "Section 1",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit."
    },
    {
      title: "Section 2",
      content:
        "Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!"
    },
    {
      title: "Section 3",
      content:
        "Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?"
    }
  ];
  it("renders an empty li when the sections prop is not supplied", () => {
    const wrapper = shallow(<Accordion />);
    console.log(wrapper.debug());
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("renders no sections as active by default", () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("opens a clicked section", () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    wrapper
      .find("button")
      .at(0)
      .simulate("click");
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  it("only opens the last section when multiple sections have been clicked", () => {
    const wrapper = shallow(<Accordion sections={sections} />);
    wrapper
      .find("button")
      .at(0)
      .simulate("click");
    wrapper
      .find("button")
      .at(2)
      .simulate("click");
    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
