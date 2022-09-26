---
title: Aprenda a estilizar HTML utilizando CSS
slug: Learn/CSS
tags:
  - CSS
  - Folha de Estilos
  - Iniciante
  - especificação
translation_of: Learn/CSS
original_slug: Aprender/CSS
---
<p class="summary">Cascading Stylesheets — ou {{glossary("CSS")}} — é a primeira tecnologia que você deve aprender após o {{glossary("HTML")}}. Enquanto o HTML é utilizado para definir a estrutura e semântica do seu conteúdo, o CSS é usado para estilizá-lo e desenhá-lo. Por exemplo, você pode usar o CSS para alterar a fonte, cor, tamanho e espaçamento do seu conteúdo, dividí-lo em multiplas colunas, ou adicionar animações e outros recursos decorativos.</p>

<h2 id="Percurso_de_aprendizagem">Percurso de aprendizagem</h2>

<p>Você deveria aprender o básico de HTML antes de tentar algo com CSS. Nós recomendamos que você comece através da nossa <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML">Introdução ao HTML</a>.Neste módulo você irá aprender sobre:</p>

<ul>
 <li>CSS, começando com a <a href="/pt-BR/docs/Aprender/CSS/Introduction_to_CSS">introdução ao CSS</a></li>
 <li><a href="/en-US/Learn/HTML#Modules">Módulos HTML </a>mais avançados</li>
 <li><a href="/en-US/docs/Learn/JavaScript">JavaScript</a>, e como utiliza-lo para adicionar funcionalidade dinâmica as páginas da web</li>
</ul>

<p>Uma vez que voce entendeu os Fundamentos do HTML, Nós recomendamos que você aprenda HTML e CSS ao mesmo tempo, movendo-se para trás e para frente entre os dois temas. Isso por que HTML é muito mais interessante com CSS e você não pode aprender realmente CSS sem conhecer HTML.</p>

<p>Antes de iniciar este tópico, você também deve ter ao menos familiaridade com o uso de computadores, e utilizar a Web passivamente (isto é, apenas navegando e consumindo conteúdo.) Você deve ter uma configuração básica de ambiente de trabalho, conforme detalhado no <a href="/en-US/docs/Learn/Getting_started_with_the_web/Installing_basic_software">Instalando o software básico</a>, e entender como criar e gerenciar arquivos, conforme detalhado em <a href="/en-US/docs/Learn/Getting_started_with_the_web/Dealing_with_files">Lidando com arquivos</a> — ambos são partes do nosso <a href="/en-US/docs/Learn/Getting_started_with_the_web">Como começar com a web</a> módulo completo de iniciante.</p>

<p>É recomendável que você trabalhe através do <a href="/en-US/docs/Learn/Getting_started_with_the_web">Como começar com a web</a> antes de começar este tema. Contudo, não é absolutamente necessário; ja que muito do que é abordado no artigo básico de CSS também é coberto em nossa <a href="/pt-BR/docs/Aprender/CSS/Introduction_to_CSS">introdução ao CSS</a>, embora com muito mais detalhes.</p>

<h2 id="Módulos">Módulos</h2>

<p>Este tópico contém os seguintes módulos em uma ordem sugerida para trabalhar através deles. Você deve definitivamente começar com o primeiro.</p>

<dl>
 <dt><a href="/pt-BR/docs/Aprender/CSS/Introduction_to_CSS">Introdução ao CSS</a></dt>
 <dd>Este módulo é uma introdução com as noções básicas de como CSS funciona, incluindo seletores e propriedades, escrever regras CSS, aplicando CSS para HTML, como especificar comprimento, cor e outras unidades em CSS, controlar cascatas e heranças, noções básicas de box model e depuração CSS.</dd>
 <dt><a href="/en-US/docs/Learn/CSS/Styling_text">Estilo de texto</a></dt>
 <dd>Aqui nós olhamos os fundamentos do estilos de texto, incluindo a configuração da fonte, negrito, itálico, linha e espaçamento das letras, além de sombras e outros componentes de texto. Nós usamos este módulo para personalizar fontes para sua página, e estilizar listas e links.</dd>
 <dt><a href="/en-US/docs/Learn/CSS/Styling_boxes">Caixas de estilo</a></dt>
 <dd>Próximo, procuramos as caixas de estilo, um dos passos fundamentais para elaborar uma página web. Neste módulo, nós recapitulamos box model para então controlarmos o layout por configuração de padding, borders e margins, configurações personalizada do background colors , imagens e outros componentes, componentes elegantes tais como sombras e filtros das caixas.</dd>
 <dt><a href="/pt-BR/docs/Learn/CSS/CSS_layout">CSS layout</a></dt>
 <dd>Neste ponto, nós olharemos os fundamentos CSS, como estilizar o texto, e como estilizar e manipular as caixas com conteudos alocados. Agora é hora de olhar como pôr suas caixas no lugar certo em relação ao viewport,  e outros. Nós temos cobertos os pré-requisitos necessários para então agora podemos aprofundar no layout CSS, olhar em diferentes configurações de telas, tradicionais métodos envolvendo float e posicionamento, além de novos ferramentas de flanged layouts como flexbox, CSS Grid e posicionamento, alem de algumas tecnicas que voce ainda pode querer conhecer.</dd>
 <dt>Design Responsivo (TBD)</dt>
 <dd>Com tantos tipos diferentes de dispositivos capazes de navegar pela internet nos dias de hoje, <a href="https://developer.mozilla.org/en-US/docs/Web/Guide/Responsive_design">design web responsivo</a> (RWD) se tornou uma habilidade primordial para o desenvolvimento web. Esse módulo irá cobrir os principios básicos e ferramentas do RWD, explicar como aplicar diferentes arquivos CSS à um documento a depender de dos recursos do dispositivo como largura de tela, orientação, e resolução, e explorar tecnologias disponíveis para servir diferentes vídeos e imagens dependendo de tais recursos.</dd>
 <dt>Animações e transformações (TBD)</dt>
 <dd>Duas das áreas mais interessantes do CSS são a habilidade de manipular elementos (ex. mover, rotacionar e inclinação), e animar elementos suavemente (ex. de uma cor ou posição para outra). Esse módulo explora como implementar as transformações e animações.</dd>
</dl>

<h2 id="Resolvendo_problemas_de_CSS_comuns">Resolvendo problemas de CSS comuns</h2>

<p><a href="/en-US/docs/Learn/CSS/Howto">Use CSS para resolver problemas comuns</a> proporcione links para seções de conteúdo explicando como usar CSS para resolver problemas muito comuns na criação de páginas web.</p>

<p>Para começar, primeirmamente você aplicara cores aos elementos HTML e seus backgrounds;  alterará o tamanho, forma e posição dos elementos; definira e adicionara bordas aos elementos. Não há muito o que você não podera fazer depois que tiver uma compreensão solida até mesmo sobre o basico do CSS. Uma das melhores coisas sobre aprender CSS é que uma vez que voce conhece os fundamentos, normalmente voce tera uma boa noção do que pode ou não fazer, mesmo que não saiba como fazer aquilo ainda.</p>

<h2 id="Veja_também">Veja também</h2>

<dl>
 <dt><a href="/en-US/docs/Web/CSS">CSS no MDN</a></dt>
 <dd>O principal ponto de entrada para documentação CSS no MDN, onde voce encontra desde referências detalhadas a tutoriais avançados. Quer saber todos os valores que uma propriedade pode ter? Este é o melhor lugar</dd>
 <dt><a href="/en-US/docs/Web/CSS/Reference">Referência CSS</a></dt>
 <dd>Um guia de referência abrangente para todos os muitos recursos da linguagem CSS - se você quiser saber quais valores uma propriedade pode tomar, por exemplo, este é um ótimo lugar para começar.</dd>
</dl>
