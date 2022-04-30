import { useState } from 'react';

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
    </div>
  );
};

export default App;
