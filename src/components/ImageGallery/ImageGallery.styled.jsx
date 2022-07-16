import styled from 'styled-components';

export const Gallery = styled.ul`
  display: grid;
  max-width: ${p => p.theme.widths.maxWidth};
  grid-template-columns: ${p => p.theme.widths.gridTemplateColumns};
  grid-gap: ${p => p.theme.space[4]}px;
  margin-top: ${p => p.theme.space[0]};
  margin-bottom: ${p => p.theme.space[0]};
  padding: ${p => p.theme.space[0]};
  list-style: none;
  margin-left: auto;
  margin-right: auto;
`;


export const Item = styled.li`
  border-radius: ${p => p.theme.radii.normal};
  box-shadow: ${p => p.theme.shadows.boxShadow};
`;
