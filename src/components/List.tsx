import { Dispatch, FC, SetStateAction } from 'react';
import { AiOutlineUserDelete } from 'react-icons/ai';

import { IPeople } from './../App';
import EditPerson from './EditPerson';

interface IProps {
  people: IPeople[];
  setPeople: Dispatch<SetStateAction<IPeople[]>>;
}

const List: FC<IProps> = ({ people, setPeople }) => {
  const handleDeletePeople = (id: number): void => {
    const persons: IPeople[] = [...people];
    const filtredPeople: IPeople[] = persons.filter(person => person.id !== id);
    setPeople(filtredPeople);
  };

  const renderList: JSX.Element[] = people.map(person => (
    <div key={person.id} className='col-12 col-lg-6 mb-2'>
      <div className='card'>
        <div className='card-body d-flex align-items-center'>
          <img
            className='img-fluid rounded img-thumbnail'
            width={100}
            height={100}
            src={person.img_url}
            alt={person.fullName}
          />
          <div className='mx-3'>
            <p>
              <span className='h2'>{person.fullName}</span>
              <span className='badge bg-primary me-3'>{person.age} سال</span>
            </p>
            <p className='text-muted'>{person.bio}</p>
          </div>
        </div>
        <div className='operation_btns'>
          <EditPerson person={person} people={people} setPeople={setPeople} />
          <AiOutlineUserDelete
            className='text-danger m-1'
            onClick={() => handleDeletePeople(person.id)}
            size={30}
          />
        </div>
      </div>
    </div>
  ));

  return <div className='row'>{renderList}</div>;
};

export default List;
