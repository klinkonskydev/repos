import { ChangeEvent, useCallback, useEffect, useState } from "react";
import api from "../services/api";

interface IRepo {
  name: string
}

export function useMain() {
  const [repositories, setRepositories] = useState<IRepo[]>([]);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(false);

  useEffect(() => {
    const reposStorage = localStorage.getItem('repos');

    if (reposStorage) {
      setRepositories(JSON.parse(reposStorage));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('repos', JSON.stringify(repositories));
  }, [repositories]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchInputValue(e.target.value);
  };

  const handleSubmit = useCallback((e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    async function submit() {
      setLoading(true);

      try {
        const response = await api.get(`repos/${searchInputValue}`);
        const hasRepo = repositories.find(repo => repo.name === searchInputValue.trim());

        if (searchInputValue.trim() === '') throw new Error('Você precisa indicar um repositorio')!;
        if (hasRepo) throw new Error('Repositório duplicado')

        const data = {
          name: response.data.full_name,
        }

        setSearchInputValue('');
        setRepositories((prev) => [...prev, data]);
      } catch (error) {
        setAlert(true);
        console.log(error);
      } finally {
        setLoading(false)
      }
    }

    submit();

  }, [searchInputValue, setSearchInputValue, repositories, setRepositories, api, loading]);

  const handleRemove = useCallback((repoName: string) => {
    const find = repositories.filter(repo => repo.name !== repoName);

    setRepositories(find);
  }, [repositories]);

  return {
    handleInputChange,
    searchInputValue,
    repositories,
    handleSubmit,
    handleRemove,
    loading,
  }
}