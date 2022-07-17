import { TailSpin } from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { LoaderStyled } from './Loader.styled';

export const Loader = () => {
  return (
    <LoaderStyled>
      <TailSpin height="200" width="200" color="yellow" ariaLabel="loading" />
    </LoaderStyled>
  );
};
