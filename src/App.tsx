import { Container, SxProps, useTheme } from '@mui/material';
import MasterProvider from './contexts/MasterProvider';
import AboutMe from './pages/aboutme/AboutMe';
import Contact from './pages/contact/Contact';
import Projects from './pages/projects/Projects';
import Skills from './pages/skills/Skills';
import Header from './components/app-bar/Header';
import FloatingButtons from './components/floating-buttons/FloatingButtons';
import './App.css';

function App() {
  const theme = useTheme();
  const bodyContainerStyle: SxProps = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '25vh',
    maxWidth: '800px !important',
    paddingInline: '2.5rem !important',
    marginBottom: '35vh',
    [theme.breakpoints.down('sm')]: { marginBottom: '15vh' },
  };

  return (
    <MasterProvider>
      <Header />
      <Container sx={bodyContainerStyle}>
        <AboutMe />
        <Skills />
        <Projects />
        <Contact />
      </Container>
      <FloatingButtons />
    </MasterProvider>
  );
}

export default App;
