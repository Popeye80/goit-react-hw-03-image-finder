import styled from 'styled-components';

export const Image = styled.img`
  width: 100%;
  height: ${p => p.theme.sizes.img}px;
  object-fit: cover;
  transition: ${p => p.theme.transition.transition};

  :hover {
    transform: scale(1.03);
    cursor: zoom-in;
  }
`;
