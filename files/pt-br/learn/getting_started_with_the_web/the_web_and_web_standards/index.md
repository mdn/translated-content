---
title: A web e seus padrões
slug: Learn/Getting_started_with_the_web/The_web_and_web_standards
---

{{learnsidebar}}

Este artigo fornece algumas informações úteis sobre a Web - como ela surgiu, quais são suas tecnologias padrões, como elas funcionam juntas, porque "desenvolvedor web" é uma grande carreira para escolher e quais são os tipos de boas práticas são coisas que você aprenderá neste curso.

## Breve histórico da web

Seremos breves, já que existem muitos (mais) artigos detalhados do histórico da web por aí, que mostraremos mais tarde (tente também pesquisar por "histórico da web" no seu mecanismo de pesquisa favorito e veja o que você encontra, se estiver interessado em maiores detalhes.)

No fim da década de 1960, os militares dos Estados Unidos desenvolveram uma rede de comunicação chamada [ARPANET](/pt-BR/docs/Glossary/Arpanet). Ela pode ser considerada como precursora da Web, já que trabalhava com [comutação de pacotes](https://pt.wikipedia.org/wiki/Comuta%C3%A7%C3%A3o_de_pacotes) e apresentou a primeira implementação do conjuto de protocolos [TCP/IP](https://pt.wikipedia.org/wiki/TCP/IP). Estas duas tecnologias formaram a base da infraestrutura em que a internet foi construída.

Em 1980, Tim Berners-Lee (frequentemente chamado de TimBL) escreveu um programa de notebook chamado [ENQUIRE](https://pt.wikipedia.org/wiki/ENQUIRE), que apresentava o conceito de links entre diferentes nós. Parece familiar?

Avance para 1989, e TimBL escreveu [Information Management: A Proposal](https://www.w3.org/History/1989/proposal.html) and HyperText and CERN; essas duas publicações juntas forneceram o pano de fundo de como a web funcionaria. Eles receberam uma boa quantidade de juros, o suficiente para convencer os chefes da TimBL a permitir que ele fosse em frente e criasse um sistema de hipertexto global.

No final de 1990, TimBL havia criado todas as coisas necessárias para executar a primeira versão da web - [HTTP](/pt-BR/docs/Web/HTTP) , [HTML](/pt-BR/docs/Web/HTML) , o primeiro navegador da web, que era chamado de [WorldWideWeb](https://en.wikipedia.org/wiki/WorldWideWeb) , um servidor HTTP e algumas páginas da web para olhar.

Nos próximos anos que se seguiram, a web explodiu, com vários navegadores sendo lançados, milhares de servidores da web sendo configurados e milhões de páginas da web sendo criadas. OK, é um resumo muito simples do que aconteceu, mas prometi a você um breve resumo.

Um último dado significativo para compartilhar é que, em 1994, TimBL fundou o [World Wide Web Consortium](https://en.wikipedia.org/wiki/World_Wide_Web_Consortium) (W3C), uma organização que reúne representantes de muitas empresas de tecnologia diferentes para trabalharem juntos na criação de especificações de tecnologia da web. Depois disso, outras tecnologias surgiram, como [CSS](/pt-BR/docs/Web/CSS) e [JavaScript](/pt-BR/docs/Web/JavaScript) , e a web começou a se parecer mais com a que conhecemos hoje.

## Padrões da web

**Os padrões da Web** são as tecnologias que usamos para construir sites. Esses padrões existem como longos documentos técnicos chamados especificações, que detalham exatamente como a tecnologia deve funcionar. Esses documentos não são muito úteis para aprender como usar as tecnologias que eles descrevem (é por isso que temos sites como MDN Web Docs), mas em vez disso, devem ser usados por engenheiros de software para implementar essas tecnologias (geralmente em navegadores da web).

Por exemplo, o [HTML Living Standard](https://html.spec.whatwg.org/multipage/) descreve exatamente como o HTML (todos os elementos HTML e suas APIs associadas e outras tecnologias adjacentes) deve ser implementado.

Os padrões da Web são criados por órgãos de padrões - instituições que convidam grupos de pessoas de diferentes empresas de tecnologia para se reunirem e concordarem sobre como as tecnologias devem funcionar da melhor maneira para cumprir todos os seus casos de uso. O W3C é o órgão de padrões da web mais conhecido, mas existem outros como o [WHATWG](https://whatwg.org/) (que foi responsável pela modernização da linguagem HTML), [ECMA](https://www.ecma-international.org/) (que publicou o padrão para ECMAScript, no qual o JavaScript é baseado), [Khronos](https://www.khronos.org/) (que publica tecnologias para gráficos 3D, como WebGL) e outros.

### Padrões "abertos"

Um dos principais aspectos dos padrões da web, que TimBL e o W3C concordaram desde o início, é que a web (e as tecnologias da web) devem ser livres para contribuir e usar, e não onerada por patentes / licenciamento. Portanto, qualquer pessoa pode escrever o código para construir um site de graça e pode contribuir com o processo de criação de padrões, onde as especificações são escritas.

Como as tecnologias da web são criadas abertamente, em colaboração entre muitas empresas diferentes, isso significa que nenhuma empresa consegue controlá-las, o que é realmente bom. Você não gostaria que uma única empresa repentinamente decidisse colocar toda a web atrás de um acesso pago, ou lançar uma nova versão de HTML que todos precisam comprar para continuar a fazer sites, ou pior ainda, apenas decidir que não estão mais interessados e apenas desligá-lo.

Isso permite que a web continue sendo um recurso público disponível gratuitamente.

### Não quebre a web

Outra frase que você ouvirá sobre os padrões abertos da web é "não quebre a web" - a ideia é que qualquer nova tecnologia da web introduzida deve ser compatível com o que existia antes (ou seja, os sites antigos ainda continuarão a funcionar ), e compatível com as versões futuras (tecnologias futuras, por sua vez, serão compatíveis com o que temos atualmente). Conforme você avança no material de aprendizagem apresentado aqui, você começará a aprender como isso é possível com um projeto muito inteligente e trabalho de implementação.

## Ser um desenvolvedor web é bom

A indústria da web é um mercado muito atraente para se entrar, se você estiver procurando por um emprego. Números publicados recentes dizem que existem atualmente cerca de 19 milhões de desenvolvedores da web no mundo, e esse número deve mais que dobrar na próxima década. E, ao mesmo tempo, há uma escassez de habilidades na indústria - então, que melhor momento para aprender desenvolvimento web?

No entanto, nem tudo é diversão e jogos - construir sites é uma proposta mais complicada do que costumava ser, e você terá que investir algum tempo para estudar todas as diferentes tecnologias que precisa usar, todas as técnicas e melhores práticas que você precisa saber e todos os padrões típicos que você deverá implementar. Você levará alguns meses para realmente começar a entrar no assunto e, em seguida, precisará continuar aprendendo para que seu conhecimento fique atualizado com todas as novas ferramentas e recursos que aparecem na plataforma da web, e continue praticando e refinando seu ofício.

_A única constante é a mudança._

Isso parece difícil? Não se preocupe - nosso objetivo é fornecer a você tudo o que você precisa saber para começar, e as coisas ficarão mais fáceis. Depois de abraçar as constantes mudanças e incertezas da web, você começará a se divertir. Como parte da comunidade web, você terá toda uma rede de contatos e materiais úteis para ajudá-lo, e começará a desfrutar das possibilidades criativas que isso traz.

Você é um criativo digital agora. Aproveite a experiência e o potencial para ganhar a vida.

## Visão geral das tecnologias modernas da web

Existem várias tecnologias para aprender se você quiser ser um desenvolvedor front-end da web. Nesta seção, iremos descrevê-los brevemente. Para uma explicação mais detalhada de como alguns deles funcionam juntos, leia nosso artigo [Como funciona a web](/pt-BR/docs/Learn/Getting_started_with_the_web/How_the_Web_works) .

### Navegadores

Provavelmente, você está lendo essas palavras dentro de um navegador da Web neste exato momento (a menos que as tenha imprimido ou esteja usando tecnologia de assistência, como um leitor de tela para ler para você). Os navegadores da web são os programas de software que as pessoas usam para consumir a web e incluem [Firefox](https://www.mozilla.org/en-US/firefox/) , [Chrome](https://www.google.com/chrome/) , [Opera](https://www.opera.com/) , [Safari](https://www.apple.com/safari/) e [Edge](https://www.microsoft.com/en-us/windows/microsoft-edge) .

### HTTP

O protocolo de transferência de hipertexto, ou [HTTP](/pt-BR/docs/Web/HTTP/Basics_of_HTTP) , é um protocolo de mensagens que permite aos navegadores da web se comunicarem com os servidores da web (onde os sites da web são armazenados). Uma conversa típica é algo como

```
"Hello web server. Can you give me the files I need to render bbc.co.uk"?

"Sure thing web browser — here you go"

[Downloads files and renders web page]
```

A sintaxe real para mensagens HTTP (chamadas de solicitações e respostas) não é legível por humanos, mas isso lhe dá uma ideia básica.

### HTML, CSS e JavaScript

[HTML](/pt-BR/docs/Web/HTML) , [CSS](/pt-BR/docs/Web/CSS) e [JavaScript](/pt-BR/docs/Web/JavaScript) são as três tecnologias principais que você usará para construir um site:

- A linguagem de marcação de hipertexto, ou **HTML** , é uma linguagem de marcação que consiste em diferentes elementos nos quais você pode agrupar (marcar) o conteúdo para dar-lhe significado (semântica) e estrutura. HTML simples se parece com isto:

  ```html
  <h1>This is a top-level heading</h1>

  <p>This is a paragraph of text.</p>

  <img src="cat.jpg" alt="A picture of my cat" />
  ```

  Se adotássemos uma analogia com a construção de uma casa, o HTML seria como as fundações e paredes da casa, que lhe dão estrutura e a mantém unida.

- Cascading Style Sheets ( **CSS** ) é uma linguagem baseada em regras usada para aplicar estilos ao seu HTML, por exemplo, definindo texto e cores de fundo, adicionando bordas, animando coisas ou fazendo o layout de uma página de uma determinada maneira. Como um exemplo simples, o código a seguir tornaria nosso parágrafo HTML em vermelho:

  ```css
  p {
    color: red;
  }
  ```

  Na analogia da casa, CSS é como a pintura, o papel de parede, os tapetes e as pinturas que você usaria para deixar a casa bonita.

- **JavaScript** é a linguagem de programação que usamos para adicionar interatividade aos sites, desde a troca de estilo dinâmico até a obtenção de atualizações do servidor, até gráficos 3D complexos. O seguinte JavaScript simples armazenará uma referência ao nosso parágrafo na memória e mudará o texto dentro dele:

  ```js
  let pElem = document.querySelector("p");
  pElem.textContent = "We changed the text!";
  ```

  Na analogia da casa, o JavaScript é como o fogão, a TV, o microondas ou o secador de cabelo - as coisas que fornecem funcionalidade útil à sua casa

### Ferramental

Depois de aprender as tecnologias "brutas" que podem ser usadas para construir páginas da web (como HTML, CSS e JavaScript), você logo começará a encontrar várias ferramentas que podem ser usadas para tornar seu trabalho mais fácil ou mais eficiente. Exemplos incluem:

- As [ferramentas de desenvolvedor](/pt-BR/docs/Learn/Common_questions/What_are_browser_developer_tools) dentro de navegadores modernos que podem ser usadas para depurar seu código.
- [Ferramentas de teste](/pt-BR/docs/Learn/Tools_and_testing/Cross_browser_testing) que podem ser usadas para executar testes para mostrar se o seu código está se comportando como você deseja.
- Bibliotecas e estruturas construídas com base em JavaScript que permitem a você construir certos tipos de site da Web com muito mais rapidez e eficácia.
- Os chamados "Linters", que pegam um conjunto de regras, olham para o seu código e destacam os lugares onde você não seguiu as regras corretamente.
- Minificadores, que removem todos os espaços em branco dos arquivos de código para torná-los menores e, portanto, fazer o download do servidor mais rapidamente.

### Linguagens e estruturas do lado do servidor

HTML, CSS e JavaScript são linguagens de front-end (ou cliente), o que significa que são executadas pelo navegador para produzir um front-end de site que seus usuários possam usar.

Há outra classe de linguagens chamadas linguagens de back-end (ou do lado do servidor), o que significa que são executadas no servidor antes de o resultado ser enviado ao navegador para exibição. Um uso típico para uma linguagem do lado do servidor é obter alguns dados de um banco de dados e gerar algum HTML para conter os dados, antes de enviar o HTML ao navegador para exibi-lo ao usuário.

Linguagens de servidor de exemplo incluem ASP.NET, Python, PHP e NodeJS.

## Melhores práticas da web

Falamos brevemente sobre as tecnologias que você usará para construir sites. Agora, vamos discutir as melhores práticas que você deve empregar para garantir que está usando essas tecnologias da melhor maneira possível.

Ao fazer o desenvolvimento da web, a principal causa de incerteza vem do fato de que você não sabe qual combinação de tecnologia cada usuário usará para visualizar seu site:

- O usuário 1 pode estar olhando para ele em um iPhone, com uma tela pequena e estreita.
- O usuário 2 pode estar olhando para ele em um laptop Windows com um monitor widescreen conectado a ele.
- O usuário 3 pode ser cego e usar um leitor de tela para ler a página da web para eles.
- O usuário 4 pode estar usando uma máquina de desktop muito antiga que não pode executar navegadores modernos.

Como você não sabe exatamente o que seus usuários usarão, você precisa fazer um design defensivo - tornar seu site o mais flexível possível, de modo que todos os usuários acima possam usá-lo, mesmo que nem todos recebam o mesmo experiência. Resumindo, estamos tentando fazer a web funcionar para todos, tanto quanto possível.

Você encontrará os conceitos abaixo em algum momento de seus estudos.

- **A compatibilidade entre navegadores** é a prática de tentar garantir que sua página da web funcione em tantos dispositivos quanto possível. Isso inclui o uso de tecnologias que todos os navegadores suportam, proporcionando melhores experiências aos navegadores que podem lidar com elas (aprimoramento progressivo) e / ou escrever código para que ele volte a uma experiência mais simples, mas ainda utilizável em navegadores mais antigos (degradação normal). Também envolve muitos testes para ver se algo falha em determinados navegadores e, em seguida, mais trabalho para corrigir essas falhas.
- **Web design responsivo** é a prática de tornar sua funcionalidade e layouts flexíveis para que eles possam se adaptar automaticamente a diferentes navegadores. Um exemplo óbvio é um site que é apresentado de uma maneira em um navegador widescreen na área de trabalho, mas é exibido como um layout mais compacto de coluna única em navegadores de telefones celulares. Tente ajustar a largura da janela do navegador agora e veja o que acontece.
- **Desempenho** significa carregar os sites o mais rápido possível, mas também torná-los intuitivos e fáceis de usar, para que os usuários não fiquem frustrados e vão para outro lugar.
- **Acessibilidade** significa tornar seus sites utilizáveis por tantos tipos diferentes de pessoas quanto possível (conceitos relacionados são diversidade e inclusão e design inclusivo). Isso inclui pessoas com deficiências visuais, auditivas, cognitivas ou físicas. Também vai além das pessoas com deficiência - que tal pessoas jovens ou velhas, pessoas de diferentes culturas, pessoas que usam dispositivos móveis ou pessoas com conexões de rede lentas ou não confiáveis?
- **Internacionalização** significa tornar os sites utilizáveis por pessoas de diferentes culturas, que falam línguas diferentes com a sua. Existem considerações técnicas aqui (como alterar seu layout para que ainda funcione bem para linguagens da direita para a esquerda ou até mesmo verticais) e humanas (como usar uma linguagem simples e sem gíria para que as pessoas que têm sua linguagem já que o segundo ou terceiro idioma deles têm mais probabilidade de entender seu texto).
- **Privacidade e segurança** . Esses dois conceitos estão relacionados, mas são diferentes. Privacidade refere-se a permitir que as pessoas façam seus negócios em particular e não espioná-las ou coletar mais dados do que você absolutamente precisa. Segurança refere-se à construção de seu site de maneira segura, de forma que usuários mal-intencionados não possam roubar informações contidas nele de você ou de seus usuários.

## Veja também

- [História da World Wide Web](https://en.wikipedia.org/wiki/History_of_the_World_Wide_Web)
- [Como funciona a internet?](/pt-BR/docs/Learn/Common_questions/How_does_the_Internet_work)
