import { FC } from 'react';
import { IPeople } from '../App';

interface IProps {
  people: IPeople[];
}

const List: FC<IProps> = ({ people }) => {
  const renderList: JSX.Element[] = people.map(p => (
    <div className='col-12 col-lg-6'>
      <div className='card'>
        <div className='card-body d-flex align-items-center'>
          <img
            className='img-fluid rounded img-thumbnail'
            width={100}
            height={100}
            src={p.img_url}
            alt={p.fullName}
          />
          <div className='mx-3'>
            <p>
              <span className='h2'>{p.fullName}</span>
              <span className='badge bg-primary me-3'>سال {p.age}</span>
            </p>
            <p className='text-muted'>{p.bio}</p>
          </div>
        </div>
      </div>
    </div>
  ));

  return <div className='row'>{renderList}</div>;
};

export default List;
