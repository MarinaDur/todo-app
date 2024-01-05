import { styled } from "styled-components";

const StyledThemeImg = styled.svg`
  cursor: pointer;

  &:hover {
    path {
      fill: var(--cl-bright-blue);
      transition: all 0.2s ease-in-out;
    }
  }
`;

function Img({ xmins, width, height, fill, d, fillRule, handleClick }) {
  return (
    <StyledThemeImg
      xmlns={xmins}
      width={width}
      height={height}
      onClick={handleClick}
    >
      <path fill={fill} d={d} fillRule={fillRule} />
    </StyledThemeImg>
  );
}

export default Img;
