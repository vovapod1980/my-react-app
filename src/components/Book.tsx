//Колекції елементів
{
  /* <div>
	{[1, 2, 3].map((item) => {
	  return <p>{item}</p>;
	})}
</div> */
}

interface Book {
  id: string;
  name: string;
}

const books: Book[] = [
  { id: 'id-1', name: 'JS for beginners' },
  { id: 'id-2', name: 'React basics' },
  { id: 'id-3', name: 'React Query overview' },
];

export default function App() {
  return (
    <>
      <h1>Books of the week</h1>

      <ul>
        {/* {books.map(book => (
          <li key={book.id}>{book.name}</li>
        ))} */}

        {/*Якщо у вас немає унікального id, і список не редагується, можна тимчасово використати індекс елемента масиву:*/}
        {books.map((book, index) => (
          <li key={index}>{book.name}</li>
        ))}
      </ul>
      {/**/}
      <p style={{ padding: '12px 16px', color: 'green' }}>
        Please update your email!
      </p>
    </>
  );
}
