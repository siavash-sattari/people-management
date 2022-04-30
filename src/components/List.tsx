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

const List = ({ people }: IProps) => {
  return <div>List</div>;
};

export default List;
