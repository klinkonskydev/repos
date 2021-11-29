import { ButtonRemove, Container, Form, List, SubmitButton } from "./styles"
import { FaGithub, FaPlus, FaSpinner, FaBars, FaTrash } from 'react-icons/fa';
import { useMain } from "../../hooks/useMain";
import { Link } from "react-router-dom";

export function Main() {
  const {
    handleInputChange,
    searchInputValue,
    handleSubmit,
    handleRemove,
    repositories,
    loading,
  } = useMain();

  return (
    <Container>
      <h1>
        <FaGithub size={25} />
        My Repository
      </h1>

      <Form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Repositories"
          value={searchInputValue}
          onChange={handleInputChange}
        />

        <SubmitButton loading={loading ? 1 : 0}>
          {loading ? (
            <FaSpinner color="#FFF" size={14} />
          ) : (
            <FaPlus color="#FFF" size={14} />
          )}
        </SubmitButton>
      </Form>

      <List>
        {repositories.map(repo => (
          <li key={repo.name}>

            <span>

              <ButtonRemove onClick={() => handleRemove(repo.name)}>
                <FaTrash size={14} />
              </ButtonRemove>

              {repo.name}
            </span>

            <Link to={`/repo/${encodeURIComponent(repo.name)}`}>
              <FaBars size={20} />
            </Link>

          </li>
        ))}
      </List>
    </Container>
  )
}