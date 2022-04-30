import { FC } from 'react';

interface IPeople {
  id: number;
  fullName: string;
  age: number;
  img_url: string;
  bio: string;
}

interface IProps {
  people: IPeople[];
}

const List: FC<IProps> = ({ people }) => {
  return <div>List</div>;
};

export default List;
