import React from "react";
import Card from "../card";
import ironman from "../../image/ironman.jpg";
import momo from "../../image/jmomo.jpg";
import kfc from "../../image/kfc.jpg";
import Search from "../search";
import Chowmein from "../../image/chowmein.jpg";

const data = [
  {
    id: "1",
    image: ironman,
    title: "Ironman",
    channelName: "Marvel",
    views: "2M",
    time: "2 hours ago",
  },

  {
    id: "2",
    image: momo,
    title: "Jhol momo",
    channelName: "Sandar momo",
    views: "20M",
    time: "1 hours ago",
  },
  {
    id: "3",
    image: kfc,
    title: "Crunchy chicken",
    channelName: "Amrit",
    views: "5M",
    time: "5 min ago",
  },
  {
    id: "4",
    image: Chowmein,
    title: "Chicken chowmein",
    channelName: "Amrit",
    views: "5M",
    time: "5 min ago",
  },
];

class Product extends React.Component {
  constructor() {
    super();
    this.state = {
      value: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(data) {
    this.setState({
      value: data,
    });
  }

  render() {
    const filteredData = data.filter((item) => {
      if (item.title.toLowerCase().includes(this.state.value.toLowerCase())) {
        return item;
      }
    });
    return (
      <div>
        <Search inputField={this.state.value} onInputChange={this.handleChange}>
          <label>Search product:</label>
        </Search>
        <div className="app-container">
          {filteredData.length > 0
            ? filteredData.map((item) => {
                return (
                  <Card
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    channelName={item.channelName}
                    views={item.views}
                    time={item.time}
                  />
                );
              })
            : data.map((item) => {
                return (
                  <Card
                    key={item.id}
                    image={item.image}
                    title={item.title}
                    channelName={item.channelName}
                    views={item.views}
                    time={item.time}
                  />
                );
              })}
        </div>
      </div>
    );
  }
}

export default Product;
