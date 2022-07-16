import { Box } from 'components/Box/Box';
import { TailSpin } from 'react-loader-spinner';

export const Loader = () => {
  return (
    <Box width="300px" mx="auto">
      <TailSpin color="yellow" height={200} width={200} />
    </Box>
  );
};
