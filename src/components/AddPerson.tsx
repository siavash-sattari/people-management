import { Dispatch, FC, FormEvent, SetStateAction, useState } from 'react';

import { IPeople } from './../App';

interface IProps {
  people: IPeople[];
  setPeople: Dispatch<SetStateAction<IPeople[]>>;
}

const AddPerson: FC<IProps> = ({ people, setPeople }) => {
  const [fullName, setFullName] = useState<string>('');
  const [age, setAge] = useState<string | number>('');
  const [img_url, setImg_url] = useState<string>('');
  const [bio, setBio] = useState<string>('');

  const handleResetState = (): void => {
    setFullName('');
    setAge('');
    setImg_url('');
    setBio('');
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    if (!fullName) {
      return alert('نام و نام خانوادگی الزامی می باشد');
    }

    if (!age) {
      return alert('سن الزامی می باشد');
    }

    if (!img_url) {
      return alert('آدرس تصویر الزامی می باشد');
    }

    setPeople([
      ...people,
      {
        id: 2,
        fullName,
        age: Number(age),
        img_url,
        bio
      }
    ]);

    handleResetState();
  };

  return (
    <div className='col-md-6 col-lg-6 mx-auto'>
      <form autoComplete='off' onSubmit={e => handleSubmit(e)} className='mt-3'>
        <input
          type='text'
          className='form-control mb-2'
          name='fullName'
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          placeholder='نام و نام خانوادگی'
        />
        <input
          type='number'
          className='form-control mb-2'
          name='age'
          value={age}
          onChange={e => setAge(e.target.value)}
          placeholder='سن'
        />
        <input
          type='text'
          className='form-control mb-2'
          name='img_url'
          value={img_url}
          onChange={e => setImg_url(e.target.value)}
          placeholder='آدرس تصویر پروفایل'
        />
        <textarea
          className='form-control mb-2'
          name='bio'
          value={bio}
          onChange={e => setBio(e.target.value)}
          rows={7}
          placeholder='بیوگرافی'
        />
        <button type='submit' className='btn btn-success'>
          افزودن به لیست
        </button>
      </form>
    </div>
  );
};

export default AddPerson;
