import { useCallback, useEffect, useState } from 'react';
import { PokemonCard } from './components/PokemonCard';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
// import { Loader2 } from 'lucide-react';
// import { usePokemon } from './hooks/usePokemon';
import { getPokemon } from './services/getPokemon';
import { Pokemon } from './types/pokemon';

function App() {
  const [current, setCurrent] = useState<Pokemon | null>(null);
  const [search, setSearch] = useState<string>('');

  useEffect(() => {
    const fetchPokemon = async () => {
      const pokemon = await getPokemon(search);
      setCurrent(pokemon);
    };
    if (search === '') return;
    fetchPokemon();
  }, [search]);

  // const { isLoading, isError, data, isPending, error } = usePokemon(search);

  const handleRandomClick = useCallback(() => {
    setSearch((Math.floor(Math.random() * 898) + 1).toString());
  }, []);

  const onSearchChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setSearch(e.target.value);
    },
    [setSearch]
  );

  return (
    <div className="bg-gray-500 h-screen justify-center items-center flex flex-col">
      {current && (
        <PokemonCard
          image={current?.sprites.front_default}
          name={current?.name}
          id={current?.id}
          type={current?.types[0].type.name}
        />
      )}

      {/* {!isLoading && !isPending && !isError && data && (
        <PokemonCard
          image={data?.sprites?.front_default}
          name={data?.name}
          id={data?.id}
          type={data?.types[0]?.type.name}
        />
      )} */}

      <div className="pt-4 pb-2 justify-start space-x-2 flex items-center">
        <Input value={search} onChange={onSearchChange} placeholder="Search" />
        <Button onClick={handleRandomClick}>Random Pokemon</Button>
        {/* {isLoading && <Loader2 className="animate-spin size-10" />} */}
      </div>
      {/* {isError && (
        <div className="text-red-600 font-bold bg-white p-4 rounded-sm">
          Error: {error?.message}
        </div>
      )} */}
    </div>
  );
}

export default App;
