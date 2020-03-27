import React from 'react';
import PropTypes from "prop-types";
import styled from 'styled-components';

const DefaultImg = styled.img`
  object-fit: cover;
  width: 100%;
  height: ${props => 
    typeof props.imgHeight === 'number' ? `${props.imgHeight}px` : props.imgHeight};
`;

const CarouselSlide = ({Img, imgUrl, imgHeight, description, attribution, ...rest}) => {
  //console.dir(attribution);
  return (
  <figure {...rest}>
    <Img src={imgUrl} imgHeight={imgHeight} />
    <figcaption>
      <strong>{description}</strong> {attribution}
    </figcaption>  
  </figure>
  )
};

CarouselSlide.propTypes = {
  Img: PropTypes.elementType,
  imgHeight: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  imgUrl: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  attribution: PropTypes.string,
};

CarouselSlide.defaultProps = {
  Img:DefaultImg,
  imgHeight: 500,
}

export default CarouselSlide;