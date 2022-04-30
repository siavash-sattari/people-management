import { useState } from 'react';

import List from './components/List';

interface IPeople {
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
    </div>
  );
};

export default App;
