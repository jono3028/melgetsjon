import * as React from "react";
import { ImageSets } from "~/const/enums";
import { GalleryConfig} from "../const/appConfig";
import { RouteComponentProps } from "react-router";
import { GalleryImage, ImageProps } from "./GalleryImage";
import { GalleryFooter, FooterProps } from "./GalleryFooter";
import { Inventory, imageData } from "../images/Inventory";

export interface GalleryProps {
  imageSet: ImageSets;
  currentPage?: string;
}

interface GalleryState {
  modalImage: number;
  pageNum: number;
}

export class GalleryPage extends React.Component<RouteComponentProps<GalleryProps>, GalleryState> {

  private imageSet: string = "";
  private imagesPerPage: number = GalleryConfig.columns * GalleryConfig.rows;

  constructor(props: RouteComponentProps<GalleryProps>) {
    
    super(props);

    const { imageSet, currentPage } = this.props.match.params;
    const pageNum = parseInt(currentPage) | 1;

    this.imageSet = imageSet;

    this.state = {
      modalImage: -1,
      pageNum
    }
  }

  public render() {
    
    const inventory = Inventory[this.imageSet];
    const modalKey = this.state.modalImage;

    const modal: JSX.Element = (modalKey == -1)? null : this.getModal(inventory, modalKey); 
    const images: JSX.Element[] = this.getImages(inventory);
    const galleryProps: FooterProps = {
      currentPage: this.state.pageNum,
      totalPages: this.getPageCount(inventory),
      setPage: this.setPage
    }

    return (
      <section className="gallery_container">
        { modal }
        <div className="gallery_selections">
          { images }
        </div>
        <div className="gallery_footer">
          <GalleryFooter { ...galleryProps }/>
        </div>
      </section>
    )
  }

  private getImages = (inventory: imageData[]): JSX.Element[] => {
    
    const currentPage = this.state.pageNum;
    const images = [];

    const start = (currentPage - 1) * this.imagesPerPage;
    const last = currentPage * this.imagesPerPage;
    const stop = (last > inventory.length) ? inventory.length : last;
    
    for (let idx = start; idx < stop; idx++) {
      const imagePath: ImageProps = {
        imagePath: `${GalleryConfig.imageStore}${this.imageSet}/${inventory[idx].fileName}.JPG`,
        setModal: this.setModal,
        idx,
        key: idx
      };
      const item = <GalleryImage { ...imagePath } />
      images.push(item)
    }
    return images;
  }

  private getPageCount(inventory: imageData[]): number {
    
    return Math.ceil(inventory.length / this.imagesPerPage);
  }
  
  private setPage = (pageNum: number): void => 
    this.setState({pageNum});

  private setModal = (imageKey: number): void =>
    this.setState({modalImage: imageKey});

  private getModal = (inventory: imageData[], imageKey: number): JSX.Element => {
    const imagePath ={
      imagePath: `${GalleryConfig.imageStore}${this.imageSet}/${inventory[imageKey].fileName}.JPG`,
      idx: imageKey
    }

    return <GalleryImage { ...imagePath}/>;
  }

}

/**
 * TODO:
 * - flexbox
 * - styling
 */