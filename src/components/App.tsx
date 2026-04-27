import Product from './Product';
import Mailbox from './Mailbox';
import Book from './Book';
import Alert from './Alert';
import Button from './Button';
//import { HiUser } from 'react-icons/hi';
import UserMenu from './UserMenu';
import { useState } from 'react';
//import ClickCounter from './ClickCounter';

interface Values {
  x: number;
  y: number;
  z: number;
}

export default function App() {
  // 2. Оголошуємо стан clicks та функцію setClicks для його оновлення
  // const [clicks, setClicks] = useState(0);

  //Декілька станів
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   console.log('Clicked!', event);
  //   console.log('Target:', event.target);
  // };

  const handleClick = () => {
    // 3. Використовуємо setClicks для зміни стану clicks
    // setClicks(clicks + 1);
    setCount(count + 1);
  };

  const toggleMessage = () => {
    setIsOpen(!isOpen);
  };

  //Оновлення обʼєктів
  const [values, setValues] = useState<Values>({ x: 0, y: 0, z: 0 });

  // const updateX = () => {
  //   // ❌ Це мутація, так не можна
  //   values.x += 1;
  // };

  //const updateY = () => {};

  // const updateX = () => {
  //   setValues({
  //     ...values,
  //     x: values.x + 1,
  //   });
  // };

  // const updateY = () => {
  //   setValues({
  //     ...values,
  //     y: values.y + 1,
  //   });
  // };

  //Універсальна функція для оновлення будь-якого поля
  const updateValue = (key: keyof Values) => {
    setValues({
      ...values,
      [key]: values[key] + 1,
    });
  };

  return (
    <>
      <h1>Best selling</h1>
      <Product
        name="Tacos With Lime"
        imgUrl="https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?w=640"
        price={10.99}
      />
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?w=640"
        price={14.29}
      />
      {/* <Mailbox
        username="John Doe"
        messages={['Hello, John!', 'How are you?']}
      /> */}
      {/* <Mailbox
        username="John Doe"
        unreadMessages={['Hello, John!', 'How are you?']}
      /> */}
      <Mailbox
        username="John Doe"
        messages={['Hello, John!', 'How are you?']}
      />
      <Book />
      <Alert />
      <Alert type="success" />
      <Alert type="error" />
      <Button text="LLL" />
      <Button variant="primary" text="Login" />
      <Button variant="secondary" text="Follow" />
      <UserMenu name="John Doe" />
      {/* <button onClick={handleClick}>Click me!</button>; */}
      {/* <button onClick={handleClick}>Current: {clicks}</button>;
      <button onClick={event => console.log(event)}>Second button</button>;
      <button onClick={() => alert('Clicked!')}>Click me</button> */}
      {/* <ClickCounter />
      <ClickCounter /> */}
      {/* <ClickCounter value={clicks} onUpdate={handleClick} />
      <ClickCounter value={clicks} onUpdate={handleClick} /> */}
      {/* //Декілька станів */}
      <button onClick={handleClick}>Clicked: {count}</button>
      <button onClick={toggleMessage}>
        {isOpen ? 'Hide message' : 'Show message'}
      </button>
      {isOpen && <p>🎉 Surprise! You toggled me.</p>}
      {/* Оновлення обʼєктів */}
      <div>
        <p>
          x: {values.x}, y: {values.y}, z: {values.z}
        </p>
        {/* <button onClick={updateX}>Update x</button>
        <button onClick={updateY}>Update y</button> */}

        <button onClick={() => updateValue('x')}>Update x</button>
        <button onClick={() => updateValue('y')}>Update y</button>
        <button onClick={() => updateValue('z')}>Update z</button>
      </div>
    </>
  );
}
