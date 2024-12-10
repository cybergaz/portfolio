import styled from "styled-components";



export const Container = styled.section`
  padding-top: 8%;
  display: flex;
    flex-direction: column;
  justify-content: center;
align-items: center;
font-size: 2.5rem;
  gap: 1rem;
  background: rgba(0,0,0,0);

.line{
  left: 1.125rem;
  height: 1px;
  width: calc(100% - 2.25rem);
  background: linear-gradient(
    to right,
    rgba(16, 185, 129, 0) 0%, 
    rgba(16, 185, 129, 0.9) 50%, 
    rgba(16, 185, 129, 0) 100%
  );
  transition: opacity 500ms;
}

.link{
color: #23CD6B;
}

  .hero-text{
    & > p{
      font-size: 1.8rem;
    }
    h1{
      font-size: 7rem;
    }

    h3{
      color:var(--green);
      margin: 1rem 0;
    }

    
    p.small-resume {
      margin-bottom: 5rem;
    }
  }

  .button{
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  .hero-image{
    img{
      max-width: 500px;
    }
  }


  @media(max-width: 960px){
    display: block;
    margin-top: 15%;
    .hero-text{

      h1{
        font-size: 5rem;
      }
    }
    
    .hero-image{
      display: none;
    }
  }

  @media(max-width: 600px){
    margin-top: 25%;
  }
  @media(max-width: 480px){
    margin-top: 35%;
  }
`
