import * as S from './styles'
const ComponentExample = () => (
  <S.Wrapper>
    <S.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React avançado ao lado "
    />
    <S.Title> Advanced React </S.Title>
    <S.Description>
      Typescript, React.js, NextJs e Style Components
    </S.Description>
    <S.Ilustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para a tela"
    />
  </S.Wrapper>
)

export default ComponentExample
