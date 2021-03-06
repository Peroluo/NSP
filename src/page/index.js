import React from "react";
import { setInitModel } from "@lib/inject";
import { Tab } from "@src/components";
import { Banner, Channel, Brand, News, Hots } from "@src/container";
import "./index.less";
@setInitModel
export default class Home extends React.PureComponent {
  render() {
    const { errno, data } = this.props;
    if (errno === 0) {
      const { banner, channel, brandList, newGoodsList, hotGoodsList } = data;
      return (
        <div id="homePage">
          <Banner data={banner} />
          <Channel data={channel} />
          <Brand data={brandList} />
          <News data={newGoodsList} />
          <Hots data={hotGoodsList} />
          <Tab active={0}></Tab>
        </div>
      );
    } else {
      return null;
    }
  }
}
