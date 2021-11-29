import { useState, useEffect, ReactChild, ReactFragment, ReactPortal } from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link, useParams } from 'react-router-dom';
import api from '../../services/api';
import { Container } from '../Main/styles';
import { ButtonsContainer, FooterActions, IssuesList, Owner } from './styles';

interface IIssues {
  id: number
  title: string
  html_url: string

  user: {
    avatar_url: string,
    login: string
  }

  labels: [
    {
      id: number,
      name: string
    }
  ]
}

export function Repo() {
  const { repository } = useParams<{ repository: string }>();
  const [repo, setRepo] = useState({
    description: '',
    name: '',
    owner: {
      avatar_url: '',
      login: ''
    }
  });
  const [issues, setIssues] = useState<IIssues[]>([]);
  const [loading, setLoading] = useState(true)

  const [page, setPage] = useState(1);
  const [state, setStatus] = useState('open');
  const [child, setChild] = useState('open');

  useEffect(() => {
    (async () => {
      try {
        const repoName = decodeURIComponent(repository);
        const [repositorioData, issuesData] = await Promise.all([
          api.get(`/repos/${repoName}`),
          api.get(`/repos/${repoName}/issues`, {
            params: {
              state: 'open',
              per_page: 5
            }
          }),
        ]);

        setRepo(repositorioData.data);
        setIssues(issuesData.data);
        setLoading(false);
      } catch (error) {
        console.log(error)
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      const repoName = decodeURIComponent(repository);

      const response = await api.get(`/repos/${repoName}/issues`, {
        params: {
          state: state,
          page,
          per_page: 5,
        },
      });

      setIssues(response.data);
    })();
  }, [page, state]);

  function handlePage(action: string) {
    setPage(action === 'back' ? page - 1 : page + 1);
  }

  function handleButtons(state: string) {
    setStatus(state);
    return setChild(state);
  }

  if (loading) {
    return (
      <h1 style={{ textAlign: 'center', margin: '10rem 0 1rem' }}>Loading...</h1>
    )
  }

  return (
    <Container>
      <Link to="/">
        <FaArrowLeft size={30} color="#00abfa" />
      </Link>

      <Owner>
        <h1>Repo: {decodeURIComponent(repository)}</h1>
        <img src={repo.owner.avatar_url} alt={repo.owner.login} />

        <h1>{repo.name}</h1>
        <p>{repo.description}</p>
      </Owner>

      <ButtonsContainer className={child}>
        <button onClick={() => handleButtons('all')}>ALL</button>
        <button onClick={() => handleButtons('open')}>OPEN</button>
        <button onClick={() => handleButtons('closed')}>CLOSE</button>
      </ButtonsContainer>

      <IssuesList>
        {issues.map(issue => (
          <li key={String(issue.id)}>
            <img src={issue.user.avatar_url} alt={issue.user.login} />

            <div>
              <strong>
                <a target="_blank" href={issue.html_url}>{issue.title}</a>

                {
                  issue.labels.map(lab => (
                    <span key={String(lab.id)}>{lab.name}</span>
                  ))
                }

              </strong>

              <p>{issue.user.login}</p>
            </div>
          </li>
        ))}
      </IssuesList>

      <FooterActions>
        <button type="button" onClick={() => handlePage('back')}>Back</button>
        <button type="button" onClick={() => handlePage('next')}>Next</button>
      </FooterActions>
    </Container>
  )
}