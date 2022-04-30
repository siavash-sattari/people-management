import { useState } from 'react';
import AddPerson from './components/AddPerson';

import List from './components/List';

export interface IPeople {
  id: number;
  fullName: string;
  age: number;
  img_url: string;
  bio: string;
}

const App = () => {
  const [people, setPeople] = useState<IPeople[]>([
    {
      id: 1,
      fullName: 'محمد رضایی',
      age: 29,
      img_url: '',
      bio: 'طراح و توسعه دهنده وب'
    }
  ]);

  return (
    <div className='container'>
      <h4 className='alert alert-info'>مدیریت اشخصاص</h4>
      <List people={people} />
      <AddPerson people={people} setPeople={setPeople} />
    </div>
  );
};

export default App;
