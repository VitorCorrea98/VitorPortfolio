function Role() {
  return (
    <section id='Retta-Role'>
        <p className='Texto-mais-pra-esquerda'>Redesenhar o site da empresa focando melhorar a usabilidade e o design. Foi conduzido uma avaliação de<br/>heurísticas no design atual, assim que o alinhamento das expectativas do cliente com objetivo de incorporá-lo em<br/> um design mais moderno.</p>
      <div className='conteudo-centralizado'>
        <p><strong>Role: </strong>UI Designer</p>
        <p><strong>Entregáveis: </strong>User stories, personas, questionários, heurísticas de Design, wireframes,<br/> análise de competidores, Design feito com Figma.</p>
      </div>
      <div className="Pictures-role">
        <img src="/Pictures/RettaSeguros/Role/Picture1.png" alt="" className='imgRole-1'/>
        <img src="/Pictures/RettaSeguros/Role/Picture2.png" alt="" className='imgRole-2'/>
      </div>
    </section>
  )
}

function Pesquisa() {
  return(
    <>
    <section id='Retta-Pesquisa'>
        <p><strong>Pesquisa</strong></p>
      <div id='Pesquisa'>
        <p>O cliente já tinha um site porém ainda não lançado. Ele queria atualizar o design do site conforme o mercado e as<br /> necessidades do mercado de seguros além de promover conteúdo, notícias relacionadas ao mercado de seguros.</p>
      </div>
      <div className="Retta-pesquisa-images">
        <img src="/Pictures/RettaSeguros/Pesquisa/Picture-1.png" alt="Picture1" />
        <img src="/Pictures/RettaSeguros/Pesquisa/Picture-2.png" alt="Picture2" />
      </div>
    </section>
    </>
  )
}

function DesignAtual() {
  return (
    <>
      <section id='Retta-DesignAtual'>
        <p><strong>Design Atual: Retta Seguros</strong></p>
        <div className="Fotos-DesignAtual">
        <img src="/Pictures/RettaSeguros/Design-Atual/Superior-Esquerda.png" alt="Foto" />
        <img src="/Pictures/RettaSeguros/Design-Atual/Superior-Direita.png" alt="" />
        </div>
        <div className="Fotos-DesignAtual">
          <img src="/Pictures/RettaSeguros/Design-Atual/Inferior-Esquerda.png" alt="" /><img src="/Pictures/RettaSeguros/Design-Atual/Inferior-Direita.png" alt="" />
        </div>
      </section>
    </>
  )
}
  
function Avaliacao() {
  return (
    <>
      <section className="Retta-Avaliacao">
        <p><strong>Avaliação de Heurísticas</strong></p>
        <div id="Avaliacao-Estetica">
          <ins>Estética e design minimalista: Ruim</ins>
          <ul>
            <li>
              <p>Muita informação na página inicial</p>
            </li>
          </ul>
        </div>

        <div id="Avaliacao-Consistencia">
          <ins>Consistência e Padronização: Ruim</ins>
          <ul>
            <li><p>Certos itens chamam a atenção do usuário mas não são clicáveis.</p></li>
            <li><p>Problemas na navegação</p></li>
          </ul>
        </div>
      </section>
    </>
  )
}

function Design() {
  return(
    <>
      <section className="Retta-Design">
        <p><strong>Design</strong></p>
        <div className="Pictures-3">
          <img src="/Pictures/RettaSeguros/Design/Superior-Esquerdo.png" alt="Foto1" />
          <img src="/Pictures/RettaSeguros/Design/Superior-Meio.png" alt="Foto2" />
          <img src="/Pictures/RettaSeguros/Design/Superior-Direito.png" alt="Foto3" />
        </div>

        <div>
          <img src="/Pictures/RettaSeguros/Design/Inferior-Esquerdo.png" alt="Foto4" />
          <img src="/Pictures/RettaSeguros/Design/Inferior-Direito.png" alt="Foto5" />
        </div>

        <ul>
          <li>O objetivo desse redesenho foi melhorar a navegação e agilizar o processo de<br /> aquisição de informações.</li>
          <li>O usuário pode pesquisar pelo seguro que deseja diretamente além de obter mais informações<br /> sobre seguros e melhor avaliar qual tipo de seguro contratar.</li>
          <li>A página de informações adicionais foi adicionada, baseada nos objetivos do cliente e no<br /> questionário realizado durante a pesquisa. Assim, os usuários podem consular informações<br /> adicionais relevantes sobre o tipo de seguro que procura no próprio website.</li>
        </ul>
      </section>
    </>
  )
}

function DesignSystem() {
  return(
    <>
      <section className="Retta-Design-System">
        <p><strong>Design System</strong></p>
        <img src="/Pictures/RettaSeguros/Design-System/Picture.png" alt="Picture1" />
        <div>
          <p><strong>O que aprendi e os próximos passos...</strong></p>
          <ul>
            <li>O design atual apresenta mais informações com relação a seguros e sobre o mercado de seguros<br />brasileiro.</li>
            <li>Além disso, o site será atualizado assim que mais seguros forem adicionados de acordo com as<br /> preferências do cliente.</li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default function Main() {
  return(
    <>
        <Role />
        <Pesquisa />
        <DesignAtual />
        <Avaliacao />
        <Design />
        <DesignSystem />
    </>
    )
}