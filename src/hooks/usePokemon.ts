import { useQuery } from '@tanstack/react-query';
import { getPokemon } from '../services/getPokemon';

export const usePokemon = (term: string) => {
  return useQuery({
    queryKey: ['pokemon', { term }],
    queryFn: () => getPokemon(term),
    enabled: term != '',
  });
};
