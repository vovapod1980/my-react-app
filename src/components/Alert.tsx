// import css from './Alert.module.css';

// export default function Alert() {
//   return <p className={css.alert}>This is alert text</p>;
// }

// import clsx from 'clsx';

// const isPrimary = true;
// const isDisabled = false;

// const myClassName = clsx(
//   'btn',
//   isPrimary && 'btn-primary',
//   isDisabled && 'btn-disabled',
// );

// console.log(myClassName); // "btn btn-primary"

// export default function Alert() {
//   return (
//     <p className={clsx('alert', isPrimary && 'alert-primary')}>
//       This is alert text
//     </p>
//   );
// }

//Композиція класів
import clsx from 'clsx';
import css from './Alert.module.css';

interface AlertProps {
  type?: 'success' | 'error';
}

export default function Alert({ type }: AlertProps) {
  return (
    <p className={clsx(css.alert, type && css[type])}>
      This is a default alert text
    </p>
  );
}
