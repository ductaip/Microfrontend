import { useParams } from 'react-router-dom';
import { PrimaryButton } from 'shared/src/lib/shared-button';

export function App() {
  // const { tmp } = useParams();
  // const _value = (tmp as string).length;
  return (
    <div className="h-[70vh]">
      <PrimaryButton>This is shared button</PrimaryButton>
    </div>
  );
}

export default App;
