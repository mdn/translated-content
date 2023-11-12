---
title: "HTML: Boas práticas em acessibilidade"
slug: Learn/Accessibility/HTML
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/Accessibility/What_is_Accessibility","Learn/Accessibility/CSS_and_JavaScript", "Learn/Accessibility")}}

Uma grande parte do conteúdo presente na internet pode se tornar acessível apenas com a utilização correta dos elementos HTML. Esse artigo mostra em detalhes como o HTML pode ser utilizado para garantir o máximo de acessibilidade.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requsitos:</th>
      <td>
        <p>
          Conceitos básicos de computadores, entendimento básico de HTML (veja
          <a href="/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML"
            >Introdução ao HTML</a
          >), e entendimento do
          <a href="/pt-BR/docs/Learn/Accessibility/What_is_accessibility"
            >que é acessibilidade</a
          >.
        </p>
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivos:</th>
      <td>
        <p>
          Ganhar familiaridade com os elementos do HTML que trabalham a favor da
          acessibilidade e utilizá-los de forma apropriada nos seus documentos
          da web.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## HTML e acessibilidade

Na medida que se aprende mais sobre HTML — lendo sobre recursos, observando exemplos, etc. — é normal se deparar com um assunto: a importância de se utilizar a semântica HTML (as vezes chamada de POSH, ou _Plain Old Semantic HTML_). Esse assunto significa utilizar corretamente os elementos HTML, cada qual com seu propósito, o máximo que for possível.

Você deve estar se perguntando porque isso é tão importante. Afinal, é possível usar uma combinação de CSS e JavaScript que faz com que qualquer elemento HTML se comporte da forma que você quiser. Por exemplo, um botão para dar play em um vídeo no seu site pode ser criado dessa forma:

```html
<div>Play vídeo</div>
```

Mas como você com mais detalhes a seguir, faz muito mais sentido utilizar o elemento correto para essa finalidade:

```html
<button>Play vídeo</button>
```

O elemento `<button>` possui vários estilos já aplicados nele mesmo por padrão (o que você provavelmente vai querer sobrescrever), ele já é embutido com padrões de acessibilidade pelo teclado — botões podem ser navegados através da tecla tab do teclado, e ativados utilizando a tecla Enter / Return.

A semântica do HTML não demora mais para escrever do que a versão não-semântica (ruim) se você escrevê-la consistentemente desde o começo do seu projeto. Existem também outros benefícios de utilizá-la, além da acessibilidade:

1. **Mais fácil de ser desenvolvida** — como mencionado acima, você consegue algumas funcionalidades por padrão, também torna o código mais fácil de ser lido e entendido.
2. **Melhor nos dispositivos móveis** — HTML semântico é mais leve que o código não-semântico (aquele código espaguete) em comparação de tamanho de arquivos, também é mais fácil de ser adaptado ao responsivo.
3. **Bom para o SEO** — mecanismos de busca dão mais importância para palavras-chave que são incluidas em títulos, links, etc. do que para palavras-chave incluídas em `<div>`s não semânticas, etc. Então suas páginas serão mais fáceis de serem encontradas pelos seus clientes.

Então vamos dar uma olhada em como fazer o HTML mais acessível.

> **Nota:** É uma boa ideia ter um leitor de tela instalado no seu computador, dessa forma é possível testar os exemplos que serão mostrados abaixo. Veja o nosso [Guia de Leitores de Tela](/pt-BR/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Screenreaders) para mais detalhes.

## Boa semântica

Nós já falamos sobre a importância da boa semântica e porque precisamos utilizar os elementos HTML adequados para cada finalidade. Isso não pode ser ignorado, e é uma das grandes áreas onde a acessibilidade pode ser completamente quebrada se não feito de forma correta.

Em toda a web, é verdade que as pessoas fazem coisas bem estranhas utilizando o HTML. Alguns abusos do HTML são resultado de práticas antigas que ainda não foram completamente esquecidas, e outros são só simples ignorância das boas práticas. Em qualquer um desses casos, é necessário a substituição de códigos ruins por códigos bons, em qualquer local que forem encontrados, se possível.

As vezes você não terá em mãos o poder de jogar fora o código ruim — suas páginas web podem ter sido geradas por algum framework que você não possui controle total, ou você pode ter algum conteúdo de terceiros na sua página (como banners de publicidade) que você não tem controle sobre.

O objetivo aqui não é "tudo ou nada", contudo — qualquer melhoria que você for capaz de fazer irá ajudar a causa da acessibilidade.

### Conteúdo textual

Uma das melhores formas de ajudar um leitor de tela a interpretar sua página é criar uma boa e consistente estrutura de títulos, parágrafos, listas, etc. Um exemplo de boa semântica vai ser parecido com o a seguir:

```html example-good
<h1>Meu título</h1>

<p>Essa é a primeira sessão do meu documento.</p>

<p>Eu vou adicionar outro parágrafo aqui também.</p>

<ol>
  <li>Aqui é</li>
  <li>uma lista para</li>
  <li>você ler</li>
</ol>

<h2>Meu sub-título</h2>

<p>
  Essa é a primeira sub sessão do meu documento. Eu adoro quando as pessoas
  conseguem encontrar meu conteúdo!
</p>

<h2>Meu segundo sub-título</h2>

<p>
  Essa é a primeira sub sessão do meu documento. Eu acho que essa é mais
  interessante que a última.
</p>
```

Nós preparamos uma versão com o texto mais longo para que você tente utilizar um leitor de tela (veja [good-semantics.html](http://mdn.github.io/learning-area/accessibility/html/good-semantics.html)). Se você tentar navegar dentro do documento, vai perceber que é bem fácil:

1. O leitor de tela lê cada título a medida que você progride pelo conteúdo, notificando ao usuário o que é um título, o que é um parágrafo, etc.
2. Ele para depois de cada elemento, deixando você ir na velocidade em que é mais confortável.
3. Você pode pular para o título mais próximo/anterior em muitos leitores de tela.
4. Você também pode fazer uma lista com todos os títulos em muitos leitores de tela, possibilitando a navegação em um sumário para encontrar conteúdos específicos.

As pessoas ás vezes escrevem títulos, parágrafos, etc. utilizando HTML para vizualização e quebras de linha, ás vezes como o seguinte:

```html example-bad
<font size="7">Meu título</font> <br /><br />
Essa é a primeira sessão do meu documento.
<br /><br />
Eu vou adicionar outro parágrafo aqui também.
<br /><br />
1. Aqui é
<br /><br />
2. uma lista para
<br /><br />
3. você ler.
<br /><br />
<font size="5">Meu sub-título</font>
<br /><br />
Essa é a primeira sub sessão do meu documento. Eu adoro quando as pessoas
conseguem encontrar meu conteúdo!
<br /><br />
<font size="5">Meu segundo sub-título</font>
<br /><br />
Essa é a primeira sub sessão do meu documento. Eu acho que essa é mais
interessante que a última.
```

Se você tentar utilizar um leitor de tela na nossa versão mais longa (ver [bad-semantics.html](http://mdn.github.io/learning-area/accessibility/html/bad-semantics.html)), você não terá uma boa experiência — o leitor de tela não encontrará nenhuma sinalização, então você não terá acesso ao conteúdo. A página inteira vai parecer como um único bloco gigante, então será lida de uma vez só, ao mesmo tempo.

Existem também outros problemas além da acessibilidade — é mais difícil estilizar o seu conteúdo com CSS, ou manipulá-lo com JavaScript porque não há elementos para serem utilizados como seletores.

#### Usando linguagem clara

A linguagem que você usa também pode afetar a acessibilidade. No geral, você deve utilizar uma linguagem clara, que não é exageradamente complexa, e que não use jargões ou gírias desnecessárias. Isso não traz somente benefícios para pessoas com deficiência cognitiva, mas também beneficia pessoas que não estão lendo em sua primeira língua, jovens leitores... todo mundo, de fato! Tirando isso, você deve tentar evitar uma linguagem ou caracteres que não podem ser lidos ou entendidos bem por um leitor de tela. Por exemplo:

- Não utilize traços se você pode evitá-los. Ao invés de escrever 5-7, escreva 5 a 7.
- Expanda as abreviações — ao invés de escrever Jan, escreva Janeiro.
- Expanda os acrônimos, pelo menos uma ou duaz vezes. Ao invés de escrever direto HTML, escreva _Hypertext Markup Language_, ou HTML.

### Layouts de páginas

Antigamente, nos dias velhos e ruins, as pessoas costumavam criar layouts para páginas utilizando tabelas HTML — usando as células da tabela para se comportarem como cabeçalho, rodapé, barra lateral, coluna de conteúdo, etc. Essa não é uma boa ideia porque um leitor de tela provavelmente irá retornar umas leituras um pouco confusas, especialmente se o layout é complexo e possui várias tabelas aninhadas dentro das células.

Tente ler o nosso exemplo [table-layout.html](http://mdn.github.io/learning-area/accessibility/html/table-layout.html), que se parece com algo assim:

```html
<table width="1200">
  <!-- linha do título principal -->
  <tr id="titulo">
    <td colspan="6">
      <h1 align="center">Cabeçalho</h1>
    </td>
  </tr>
  <!-- linha do menu de navegação  -->
  <tr id="nav" bgcolor="#ffffff">
    <td width="200">
      <a href="#" align="center">Home</a>
    </td>
    <td width="200">
      <a href="#" align="center">Nossa equipe</a>
    </td>
    <td width="200">
      <a href="#" align="center">Projetos</a>
    </td>
    <td width="200">
      <a href="#" align="center">Contato</a>
    </td>
    <td width="300">
      <form width="300">
        <input
          type="pesquisa"
          name="q"
          placeholder="Pesquisar..."
          width="300" />
      </form>
    </td>
    <td width="100">
      <button width="100">Ir!</button>
    </td>
  </tr>
  <!-- linha de espaçamento -->
  <tr id="espacamento" height="10">
    <td></td>
  </tr>
  <!-- linha do conteúdo principal -->
  <tr id="main">
    <td id="content" colspan="4" bgcolor="#ffffff">
      <!-- conteudo vem aqui -->
    </td>
    <td id="aside" colspan="2" bgcolor="#ff80ff" valign="top">
      <h2>Related</h2>

      <!-- Outro conteúdo vem aqui -->
    </td>
  </tr>
  <!-- linha de espaçamento -->
  <tr id="spacer" height="10">
    <td></td>
  </tr>
  <!-- linha do rodapé -->
  <tr id="footer" bgcolor="#ffffff">
    <td colspan="6">
      <p>©Copyright 2050 por ninguém. Todos os direitos reservados.</p>
    </td>
  </tr>
</table>
```

Se você tentar navegar por esse código utilizando um leitor de texto, provavelmente ele vai te dizer que existe uma tabela que pode ser reconhecida (mesmo que alguns leitores de tela consigam diferenciar entre layouts de tabelas e o conteúdos das tabelas). Você provavelmente (dependendo de qual leitor de tela que está utilizando) terá que entrar na tabela como um objeto e ler as suas características separadamente, para depois precisar sair da tabela novamente e continuar navegando pelo conteúdo.

Layouts feitos com tabela são uma relíquia do passado — fazia sentido utilizá-las lá atrás quando o suporte do CSS não era difundido pelos navegadores, mas esses layouts de tabela criam confusão para os usuários de leitor de tela, além de serem ruins por outros motivos (abuso de tabelas indiscutivelmente precisa de mais marcação e torna o design menos flexível). Não faça dessa forma!

Você pode verificar essas reivindicações ao comparar a última experiência com um [exemplo de estrutura de website mais moderna](http://mdn.github.io/learning-area/html/introduction-to-html/document_and_website_structure/), o que pode se parecer com algo assim:

```html
<header>
  <h1>Cabeçalho</h1>
</header>

<nav>
  <!-- Navegação principal aqui -->
</nav>

<!-- Aqui é o conteúdo principal da página -->
<main>
  <!-- Que contém um artigo -->
  <article>
    <h2>Título do artigo</h2>

    <!-- Conteúdo do artigo aqui -->
  </article>

  <aside>
    <h2>Relacionados</h2>

    <!-- Conteúdo a parte aqui -->
  </aside>
</main>

<!-- E aqui é um rodapé utilizado em todas as páginas do nosso site -->

<footer>
  <!-- Conteúdo do rodapé aqui -->
</footer>
```

Se você experimentar ler esse exemplo de estrutura mais moderna com um leitor de tela, você vai perceber que o layout feito por marcação não atrapalha na hora de retornar o conteúdo do site. Também é muito mais limpo e pequeno em termos de tamanho de código, o que significa um código mais fácil de se dar manutenção e menos uso de banda para o usuário fazer o download (particularmente prevalente para as pessoas com conexão lenta).

Outra consideração que pode ser feita é criar layouts utilizando a semântica HTML5 nos elementos, como visto no exemplo (veja [content sectioning](/pt-BR/docs/Web/HTML/Element#Content_sectioning)) — você pode criar um layout utilizando apenas elementos aninhados {{htmlelement("div")}}, mas é melhor e mais apropriado seccionar elementos de uma forma que eles envelopem a navegação principal ({{htmlelement("nav")}}), rodapé({{htmlelement("footer")}}), unidades de conteúdo repetidas({{htmlelement("article")}}), etc. Eles trazem semânticas extras para os leitores de tela(e outras ferramentas) para dar aos usuários mais dicas sobre o conteúdo no qual eles estão navegando (veja [Screen Reader Support for new HTML5 Section Elements](http://www.weba11y.com/blog/2016/04/22/screen-reader-support-for-new-html5-section-elements/) para uma ideia do que é suporte de leitor de tela).

> **Nota:** Ao mesmo tempo que seu conteúdo deve ter boa semântica e um layout bonito, deve-se fazer sentido que em sua ordem de fonte — você poderá sempre movimentá-la utilizando CSS depois, mas você deve colocar a ordem de fonte de forma correta desde o começo, para que os usuários que utilizam de leitores de tela possam receber uma leitura que faz sentido.

### Controles de UI

Por controles de UI, o que nós queremos dizer é as partes dos documentos web que os usuários interagem com — mais comumente botões, links, e formulários. Nessa seção nós daremos uma olhada em princípios da acessibilidade que deverão ser analisados com cuidado ao criar esses controles de UI. Os artigos mais recentes do WAI-ARIA e multimedia irão olhar para outros aspectos da acessibilidade de UIs.

Um aspecto chave da acessibilidade de controles Ui é que, por padrão, os navegadores premitem que esses controles sejam acessados pelo teclado. Você pode experimentar isso utilizando o nosso exemplo [native-keyboard-accessibility.html](http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html) (ver o [código-fonte](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/accessibility/native-keyboard-accessibility.html)) — abra em uma nova aba e experimente apertar a tecla tab; depois de algumas tecladas, você irá ver o foco da aba se mover entre diferentes elementos que podem ser focados; os elementos focados são dados um estilo de destaque em todos os navegadores (muda levemente entre diferentes navegadores) dessa forma você pode dizer qual elemento está em foco.

![](button-focused-unfocused.png)

Você pode apertar Enter/Return para seguir um link que está focado ou apertar um botão (nós incluimos um pouco de JavaScript para fazer os botões chamarem uma mensagem), ou começar a escrever para inserir um texto em um formulário de texto (outros elementos possuem controles diferentes, por exemplo o elemento {{htmlelement("select")}} pode ter suas opções visíveis e selecionáveis utilizando as teclas de flecha para cima e para baixo.

> **Nota:** Navegadores diferentes podem ter mais opções de controle pelo teclado. Veja [Using native keyboard accessibility](/pt-BR/docs/Learn/Tools_and_testing/Cross_browser_testing/Accessibility#Using_native_keyboard_accessibility) para mais detalhes.

Você essencialmente consegue esse comportamento de graça, só ao utilizar os elementos apropriados, ex.

```html example-good
<h1>Links</h1>

<p>Esse é um link para <a href="https://www.mozilla.org">Mozilla</a>.</p>

<p>
  Outro link, para
  <a href="https://developer.mozilla.org">Mozilla Developer Network</a>.
</p>

<h2>Botões</h2>

<p>
  <button data-message="Esse é do primeiro botão">Clique em mim!</button>
  <button data-message="Esse é do segundo botão">Clique em mim também!</button>
  <button data-message="Esse é do terceiro botão">E em mim!</button>
</p>

<h2>Formulário</h2>

<form>
  <div>
    <label for="name">Preencha com seu nome:</label>
    <input type="text" id="name" name="name" />
  </div>
  <div>
    <label for="age">Preencha com a sua idade:</label>
    <input type="text" id="age" name="age" />
  </div>
  <div>
    <label for="mood">Escolha o seu humor:</label>
    <select id="mood" name="mood">
      <option>Feliz</option>
      <option>Triste</option>
      <option>Bravo</option>
      <option>Preocupado</option>
    </select>
  </div>
</form>
```

Isso significa que utilizar links, botões, elementos de formulário e rótulos adequadamente (incluindo o elemento {{htmlelement("label")}} para controles de formulário).

Contudo, novamente é o caso onde as pessoas ás vezes fazem coisas estranhas utilizando o HTML. Por exemplo, você pode se deparar com botões escritos utilizando o elemento {{htmlelement("div")}}, como a seguir:

```html example-bad
<div data-message="Esse é do primeiro botão">Clique em mim!</div>
<div data-message="Esse é do segundo botão">Clique em mim também!</div>
<div data-message="Esse é do terceiro botão">E em mim!</div>
```

Mas usar esse código não é recomendado - você perde imediatamente a acessibilidade do teclado que você teria se tivesse usado apenas elementos {{htmlelement ("button")}}, além de não obter nenhum estilo padrão de CSS.

#### Aplicando de volta a acessibilidade do teclado

Adicionar tais vantagens de volta leva um pouco de trabalho (você pode ver um exemplo de código no nosso exemplo [fake-div-buttons.html](http://mdn.github.io/learning-area/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html) - e também pode ver o [source code](https://github.com/mdn/learning-area/blob/master/tools-testing/cross-browser-testing/accessibility/fake-div-buttons.html)). Aqui nós acrescentamos aos nossos falsos botões `<div>` a capacidade de serem focados (inclusive via tab) dando a cada um o atributo `tabindex="0"`:

```html
<div data-message="Esse é do primeiro botão" tabindex="0">Clique em mim!</div>
<div data-message="Esse é do segundo botão" tabindex="0">
  Clique em mim também!
</div>
<div data-message="Esse é do terceiro botão" tabindex="0">E em mim!</div>
```

Basicamente, o atributo [`tabindex`](/pt-BR/docs/Web/HTML/Global_attributes#tabindex) destina-se principalmente a permitir que elementos tabulares tenham uma ordem de tabulação personalizada (especificada em ordem numérica positiva), em vez de apenas serem tabulados em sua ordem de origem padrão. Isso é quase sempre uma má ideia, pois pode causar grandes confusões. Use-o somente se você realmente precisar, por exemplo, se o layout mostrar coisas em uma ordem visual muito diferente do código-fonte, e você quiser fazer as coisas funcionarem mais logicamente. Existem duas outras opções para `tabindex`:

- `tabindex="0"` — conforme indicado acima, esse valor permite que elementos que normalmente não podem ser tabulados se tornem tabeláveis. Este é o valor mais útil do `tabindex`.
- `tabindex="-1"` — isso permite que elementos normalmente não tabuláveis recebam foco de maneira programática, por exemplo, via JavaScript, ou como alvo de links.

Embora a adição acima nos permita acessar os botões, ela não nos permite ativá-los através da tecla Enter/Return. Para fazer isso, temos que adicionar o seguinte truque de JavaScript:

```js
document.onkeydown = function (e) {
  if (e.keyCode === 13) {
    // The Enter/Return key
    document.activeElement.click();
  }
};
```

Aqui nós adicionamos um "ouvinte" (listener) ao objeto de documento (`document`) para detectar quando um botão foi pressionado no teclado. Verificamos qual botão foi pressionado por meio da propriedade [`keyCode`](/pt-BR/docs/Web/API/KeyboardEvent/keyCode) do objeto de evento; se for o código que corresponde a Enter/Return, executamos a função armazenada no manipulador `onclick` do botão usando `document.activeElement.click()`. [`activeElement`](/pt-BR/docs/Web/API/Document/activeElement) nos dá o elemento que está atualmente focado na página.

Isso acrescenta um monte de problemas extras para construir a funcionalidade de volta. E não deveríamos ter outros problemas com isso. **É sempre melhor apenas usar o elemento certo.**

#### Rótulos de texto significativos

Os rótulos de texto de controle da interface do usuário são muito úteis para todos os usuários, mas deixá-los claros e simples é particularmente importante para usuários com deficiências.

Você deve certificar-se de que seus rótulos de texto de botão e link sejam compreensíveis e distintos. Não use apenas "Clique aqui" para seus rótulos, pois os usuários de leitores de tela podem utilizar atalhos para exibir/ouvir listas de botões e controles de formulários e não identificá-los adequadamente. A captura de tela a seguir mostra nossos controles sendo listados pelo VoiceOver no Mac.

![](voiceover-formcontrols.png)

Certifique-se de que seus rótulos fazem sentido fora de contexto, lidos individualmente e no contexto do parágrafo em que estão. Por exemplo, este seria um bom exemplo para link:

```html example-good
<p>
  As baleias são criaturas realmente incríveis.
  <a href="whales.html">Saiba mais sobre baleias</a>.
</p>
```

Porém este, é um exemplo ruim para link:

```html example-bad
<p>
  As baleias são criaturas realmente incríveis. Para saber mais sobre baleias,
  <a href="whales.html">clique aqui</a>.
</p>
```

> **Nota:** Você pode encontrar muito mais sobre implementação de link e melhores práticas no artigo [Criando hyperlinks](/pt-BR/docs/Learn/HTML/Introduction_to_HTML/Creating_hyperlinks). Você também pode ver alguns bons e maus exemplos em [good-links.html](http://mdn.github.io/learning-area/accessibility/html/good-links.html) e [bad-links.html](http://mdn.github.io/learning-area/accessibility/html/bad-links.html).

Os rótulos de formulário (labels) também são importantes para dar a você uma ideia sobre o que precisa ser preenchido em cada entrada de formulário. O seguinte exemplo aparentemente é bem razoável:

```html example-bad
Preencha seu nome: <input type="text" id="nome" name="nome" />
```

Entretanto, esse exemplo não é tão útil para usuários com deficiência. Não há nada para associar o rótulo de forma não ambígua à entrada do formulário e deixar claro como preenchê-lo, se você não puder vê-lo. Se você acessar esse item usando um leitor de tela, só irá ouvir uma descrição genérica "editar texto" sem associar corretamente qual o tipo de texto a ser editado.

Já o exemplo a seguir, é bem melhor:

```html example-good
<div>
  <label for="nome">Preencha seu nome:</label>
  <input type="text" id="nome" name="nome" />
</div>
```

Com o código assim, o rótulo será claramente associado à entrada; a descrição será algo como "Preencha seu nome: editar texto".

![](voiceover-good-form-label.png)

Como um bônus adicional, na maioria dos navegadores a associação de um rótulo a uma entrada de formulário significa que você pode clicar no rótulo para selecionar/ativar o elemento de formulário. Isso consequentemente aumenta o tamanho da área clicável dos elementos, facilitando assim a seleção.

> **Nota:** Você pode ver alguns bons e maus exemplos de formulários em [good-form.html](http://mdn.github.io/learning-area/accessibility/html/good-form.html) e [bad-form.html](http://mdn.github.io/learning-area/accessibility/html/bad-form.html).

## Tabelas de dados acessíveis

Uma tabela básica de dados pode ser escrita com uma marcação muito simples, como neste exemplo:

```html
<table>
  <tr>
    <td>Name</td>
    <td>Age</td>
    <td>Gender</td>
  </tr>
  <tr>
    <td>Gabriel</td>
    <td>13</td>
    <td>Male</td>
  </tr>
  <tr>
    <td>Elva</td>
    <td>8</td>
    <td>Female</td>
  </tr>
  <tr>
    <td>Freida</td>
    <td>5</td>
    <td>Female</td>
  </tr>
</table>
```

Mas essa tabela possui alguns problemas - não há como um usuário de leitor de telas associar linhas ou colunas como agrupamentos de dados. Para fazer isso, você precisa saber quais são as linhas de cabeçalho e se elas estão direcionando linhas, colunas etc. Isso só pode ser feito visualmente para a tabela acima (veja o exemplo [bad-table.html](http://mdn.github.io/learning-area/accessibility/html/bad-table.html) e tente navegar pela tabela você mesmo).

Agora dê uma olhada no exemplo da nossa [tabela de bandas punk](https://github.com/mdn/learning-area/blob/master/css/styling-boxes/styling-tables/punk-bands-complete.html) - você pode ver alguns recursos de acessibilidade aqui:

- Os cabeçalhos de tabela são definidos usando elementos {{htmlelement ("th")}} - você também pode especificar se eles são cabeçalhos de linhas ou colunas usando o atributo `scope`. Isso fornece grupos completos de dados que podem ser consumidos pelos leitores de tela como unidades únicas.
- O elemento {{htmlelement ("caption")}} e o atributo de resumo (`<table>` `summary`) executam tarefas semelhantes - eles funcionam como texto alternativo para uma tabela, fornecendo ao usuário de leitor de telas um resumo rápido e útil do conteúdo da tabela. `<caption>` é geralmente mais adequado, pois torna o seu conteúdo acessível para os usuários com visão também, que também poderão achar isso útil. Você não precisa ter os dois.

> **Nota:** Consulte nossos artigos sobre [Recursos avançados de acessibilidade para tabelas em HTML](/pt-BR/docs/Learn/HTML/Tables/Advanced) para obter mais detalhes sobre tabelas de dados acessíveis.

## Alternativas em textos

Considerando que o conteúdo textual é inerentemente acessível, o mesmo não pode necessariamente ser dito para conteúdo multimídia - conteúdo de imagem / vídeo não pode ser visto por pessoas com deficiência visual, e conteúdo de áudio não pode ser ouvido por pessoas com deficiência auditiva. Abordaremos o conteúdo de vídeo e áudio em detalhes no artigo sobre multimídia acessível mais adiante, mas para este artigo veremos a acessibilidade para o elemento {{htmlelement("img")}}.

Temos um exemplo simples escrito, [accessible-image.html](http://mdn.github.io/learning-area/accessibility/html/accessible-image.html), que apresenta quatro cópias da mesma imagem:

```
<img src="dinosaur.png">

<img src="dinosaur.png"
     alt="Um tiranossauro Rex vermelho: Um dinossauro de duas patas em pé como um humano, com braços pequenos e uma cabeça grande com muitos dentes afiados.">

<img src="dinosaur.png"
     alt="Um tiranossauro Rex vermelho: Um dinossauro de duas patas em pé como um humano, com braços pequenos e uma cabeça grande com muitos dentes afiados."
     title="O dinossauro vermelho da Mozilla.">


<img src="dinosaur.png" aria-labelledby="dino-label">

<p id="dino-label">O Tiranossauro Rex: um dinossauro de duas patas de pé como um humano, com braços pequenos e uma cabeça grande com muitos dentes afiados.</p>
```

A primeira imagem, quando visualizada por um leitor de tela, não oferece muita ajuda ao usuário - o VoiceOver, por exemplo, lê "/dinosaur.png, image". Ele lê o nome do arquivo para tentar fornecer alguma ajuda. Neste exemplo, o usuário pelo menos saberá que é um tipo de dinossauro, mas muitas vezes os arquivos podem ser carregados com nomes de arquivos gerados por máquina (por exemplo, de uma câmera digital) e esses nomes provavelmente não fornecem nenhum contexto ao conteúdo da imagem.

> **Nota:** É por isso que você nunca deve incluir conteúdo de texto dentro de uma imagem - os leitores de tela simplesmente não podem acessá-lo. Existem outras desvantagens também - você não pode selecioná-lo e copiá-lo/colá-lo. Apenas não faça isso!

Quando um leitor de tela encontra a segunda imagem, ele lê todo o atributo `alt` - "Um tiranossauro Rex vermelho: Um dinossauro de duas patas em pé como um humano, com braços pequenos e uma cabeça grande com muitos dentes afiados".

Isso destaca a importância de não apenas usar nomes de arquivos significativos, caso o **texto alternativo** não esteja disponível, mas também garantir que o texto alternativo seja fornecido em atributos `alt` sempre que possível. Observe que o conteúdo do atributo `alt` sempre deve fornecer uma representação direta da imagem e o que ela transmite visualmente. Qualquer conhecimento pessoal ou descrição extra não deve ser incluído aqui, já que não é útil para pessoas que não se depararam com a imagem antes.

Uma coisa a considerar é se as imagens possuem algum significado dentro de seu conteúdo ou se elas são puramente decorativas. Se eles são decorativas, é melhor apenas incluí-las na página como imagens de fundo através de CSS.

> **Nota:** Leia [Imagens em HTML](/pt-BR/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML) e [Imagens Responsivas](/pt-BR/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images) para obter mais informações sobre a implementação de imagens e melhores práticas.

Se você quiser fornecer informações contextuais extras, deverá colocá-las no texto ao redor da imagem ou dentro de um atributo de título (`title`), como mostrado acima. Nesse caso, a maioria dos leitores de tela lerá o texto alternativo, o atributo de título e o nome do arquivo. Além disso, os navegadores exibem o texto do título como dicas de ferramentas quando estão sobre o mouse.

![](title-attribute.png)

Vamos dar uma olhada rápida no quarto método:

```html
<img src="dinosaur.png" aria-labelledby="dino-label" />

<p id="dino-label">O dinossauro vermelho da Mozilla.</p>
```

Nesse caso, não estamos usando o atributo `alt` - em vez disso, apresentamos nossa descrição da imagem como um parágrafo de texto regular, atribuímos um `id` e, em seguida, usamos o atributo `aria-labelledby` para nos referirmos a esse `id`, que faz com que os leitores de tela usem esse parágrafo como o texto/rótulo alternativo para essa imagem. Isso é especialmente útil se você quiser usar o mesmo texto como um rótulo para várias imagens - algo que não é possível com `alt`.

> **Nota:** `aria-labelledby` é parte da especificação [WAI-ARIA](https://www.w3.org/TR/wai-aria-1.1/), que permite aos desenvolvedores adicionar uma semântica extra à sua marcação para melhorar a acessibilidade do leitor de tela quando necessário. Para saber mais sobre como funciona, leia nosso [artigo básico sobre WAI-ARIA](/pt-BR/docs/Learn/Accessibility/WAI-ARIA_basics).

### Outros mecanismos alternativos de textos

Imagens também têm outros mecanismos disponíveis para fornecer texto descritivo. Por exemplo, há um atributo `longdesc` que serve para apontar para um documento da Web separado contendo uma descrição estendida da imagem:

```html
<img src="dinosaur.png" longdesc="dino-info.html" />
```

Isso aparentemente é uma boa ideia, especialmente para infográficos ou gráficos com muitas informações, que talvez possam ser representados como uma tabela de dados acessível (consulte a seção anterior). No entanto, o `longdesc` não é suportado de forma consistente pelos leitores de tela e o conteúdo é completamente inacessível para usuários que não usam leitores de tela. É sem dúvida muito melhor incluir a descrição longa na mesma página que a imagem ou vinculá-la a um link comum.

O HTML5 inclui dois novos elementos - {{htmlelement ("figure")}} e {{htmlelement ("figcaption")}} - que devem associar uma figura de algum tipo (pode ser qualquer coisa, não necessariamente uma imagem) com uma legenda de figura:

```html
<figure>
  <img src="dinosaur.png" alt="O dinossauro da Mozilla." />
  <figcaption>
    Um tiranossauro Rex vermelho: Um dinossauro de duas patas em pé como um
    humano, com braços pequenos e uma cabeça grande com muitos dentes afiados.
  </figcaption>
</figure>
```

Infelizmente, a maioria dos leitores de tela parece não associar ainda as legendas utilizando o elemento "figure" às respectivas imagens, mas a estrutura do elemento é útil para o estilo CSS, além de fornecer uma maneira de inserir uma descrição da imagem.

### Atributos "alt" vazios

```html
<h3>
  <img src="article-icon.png" alt="" />
  Tiranossauro Rex: O Rei dos dinossauros.
</h3>
```

Pode haver momentos em que uma imagem é incluída no design de uma página, mas seu objetivo principal é a decoração visual. Você notará no exemplo de código acima que o atributo `alt` da imagem está vazio - isso é para fazer com que os leitores de tela reconheçam a imagem, mas não tentem descrever a imagem (em vez disso, dizem apenas "imagem" ou similar).

A razão para usar um `alt` vazio ao invés de não incluí-lo é porque muitos leitores de tela anunciam o URL da imagem inteira se nenhum `alt` for fornecido. No exemplo acima, a imagem está agindo como uma decoração visual para o título ao qual está associada. Em casos como esse, e nos casos em que uma imagem é apenas decoração e não tem valor de conteúdo, você deve colocar um `alt` vazio em suas imagens. Outra alternativa é usar o atributo ARIA role (role="presentation") - isso também impede que os leitores de telas leiam textos alternativos.

> **Nota:** se possível, você deve usar CSS para exibir imagens que são apenas decorativas.

## Resumo

Agora você deve estar familiarizado com a escrita de HTML acessível para a maioria das ocasiões. Nosso artigo básico do WAI-ARIA também preencherá algumas lacunas nesse conhecimento, mas este artigo cuidou do básico. Em seguida, exploraremos CSS e JavaScript e como a acessibilidade é afetada por seu uso bom ou ruim.

{{PreviousMenuNext("Learn/Accessibility/What_is_Accessibility","Learn/Accessibility/CSS_and_JavaScript", "Learn/Accessibility")}}
