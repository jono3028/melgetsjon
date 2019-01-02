import * as React from "react";

export interface ImageProps {
  imagePath: string;
  idx: number;
  setModal?(key: number): void;
}
/* TODO: 
 * - if (setModel == !undefined) make mouse change on hover
*/
export class GalleryImage extends React.PureComponent<ImageProps, {}> {

  render() {

    const attrs = {
      src: this.props.imagePath,
      alt: this.props.imagePath,
      onClick: () => this.props.setModal(this.props.idx)
    }
    return (
      <div className="image_container">
        <img {...attrs}/>
      </div>
    );
  }
};