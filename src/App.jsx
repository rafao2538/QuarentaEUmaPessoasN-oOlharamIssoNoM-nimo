import { useState } from "react";
import ghubLogo from "./assets/github.png";
import sqliteLogo from "./assets/SQLite-Logo.png";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <a href="https://sqlite.org/about.html"><img src={sqliteLogo} alt="" id="sqlite"/></a>
      <section>
        <div><p>O SQLite é um sistema de gerenciamento de banco de dados relacional leve, amplamente utilizado em aplicações que precisam de armazenamento local de dados sem a complexidade de um servidor dedicado. Ele funciona de forma embutida (embedded), ou seja, não requer instalação ou configuração de um servidor separado, pois todo o banco de dados é armazenado em um único arquivo no próprio dispositivo. Por isso, é muito usado em aplicativos móveis, como Android e iOS, navegadores web, sistemas embarcados e até em aplicações desktop. Sua simplicidade e portabilidade tornam o SQLite uma escolha ideal para projetos menores ou que precisam de praticidade e eficiência.</p></div>
        <div><p>Entre as principais funções do SQLite estão a criação, leitura, atualização e exclusão de dados (as operações conhecidas como CRUD), além do suporte à linguagem SQL padrão para manipulação dessas informações. Ele permite a criação de tabelas, índices, triggers e views, oferecendo recursos suficientes para a maioria das aplicações. Apesar de ser leve, o SQLite é bastante confiável e garante integridade dos dados através de transações. No entanto, por não ser projetado para alta concorrência, ele não é a melhor escolha para sistemas com muitos acessos simultâneos. Ainda assim, sua facilidade de uso, desempenho e ampla compatibilidade fazem dele uma ferramenta muito popular no desenvolvimento de software.</p></div>
      </section>

      <footer>
        <a href="https://github.com/rafao2538/CoisoBagulho41-26"><img src={ghubLogo} alt="" id="ghub"/></a>
      </footer>
    </>
  );
}
