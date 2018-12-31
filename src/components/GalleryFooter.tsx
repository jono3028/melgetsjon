import * as React from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export interface FooterProps {
  currentPage: number;
  totalPages: number;
  setPage(pageNum: number): void;
}

export class GalleryFooter extends React.PureComponent<FooterProps, {}> {

  private setPage = this.props.setPage;

  render() {

    const links = this.getPageNav();
    const last = this.getBack();
    const next = this.getForward();
    return (
      <div className="page_nav">
        <h5>{ last } { links } { next }</h5>
      </div>
    )
  }
  // TODO: Can these three methods below be consolodated?
  private getBack = ():JSX.Element => {

    const currPage = this.props.currentPage;
    const attrs = {
      onClick: () => this.setPage(currPage - 1),
      disabled: currPage == 1
    }
    return (<button {...attrs}><IoIosArrowBack/></button>);
  }

  private getForward = (): JSX.Element => {

    const currPage = this.props.currentPage;
    const attrs = {
      onClick: () => this.setPage(currPage + 1),
      disabled: currPage == this.props.totalPages
    }
    return (<button {...attrs}><IoIosArrowForward/></button>);
  }

  private getPageNav = ():JSX.Element[] => {
    
    const links: JSX.Element[] = [];
    for (let idx = 1; idx <= this.props.totalPages; idx++){
      const attrs = {
        key: idx,
        onClick: () => this.setPage(idx),
        disabled: idx == this.props.currentPage
      };
      const spacer = (idx == this.props.totalPages) ? "" : " | ";
      const link = (<span key={idx}><button {...attrs}>{ idx }</button>{ spacer }</span>);
      links.push(link);
    }
    return links;
  }
}