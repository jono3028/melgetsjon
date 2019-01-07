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

    const onClick = (this.props.setModal == undefined) ? null : () => this.props.setModal(this.props.idx);
    const attrs = {
      src: this.props.imagePath,
      alt: this.props.imagePath,
      onClick
    }
    return (
      <div className="image_container">
        <img {...attrs}/>
      </div>
    );
  }
};