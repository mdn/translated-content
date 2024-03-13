---
title: Fundamentos do texto em HTML
slug: Learn/HTML/Introduction_to_HTML/HTML_text_fundamentals
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}

Um dos principais objetivos do HTML é dar estrutura de texto e significado, também conhecido como {{glossary("semantics", "semântica")}}), para que um navegador possa exibi-lo corretamente. Este artigo explica a forma como {{glossary("HTML")}} pode ser usado para estruturar uma página de texto, adicionar títulos e parágrafos, enfatizar palavras, criar listas e muito mais.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Familiaridade básica em HTML, tal como coberto
        <a href="/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML/Getting_started"
          >Iniciando com o HTML.</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprenda como marcar uma página básica de texto para dar-lhe estrutura e
        significado — incluindo parágrafos, títulos, listas, ênfase e citações.
      </td>
    </tr>
  </tbody>
</table>

## O básico: Cabeçalhos e Parágrafos

O texto mais estruturado é composto por títulos e parágrafos,esteja você lendo uma história, um jornal, um livro da faculdade, uma revista, etc.

![An example of a newspaper front cover, showing use of a top level heading, subheadings and paragraphs.](newspaper_small.jpg)

O conteúdo estruturado torna a experiência de leitura mais fácil e mais agradável.

Em HTML, cada parágrafo deve ser envolvido em um elemento {{htmlelement("p")}} , assim:

```html
<p>Eu sou um parágrafo, oh sim, eu sou.</p>
```

Cada título deve ser envolvido em um elemento de título:

```html
<h1>Eu sou o título da história.</h1>
```

Existem seis elementos de título — {{htmlelement("h1")}}, {{htmlelement("h2")}}, {{htmlelement("h3")}}, {{htmlelement("h4")}}, {{htmlelement("h5")}} e {{htmlelement("h6")}} . Cada elemento representa um nível diferente de conteúdo no documento; `<h1>` representa o título principal, `<h2>` representa subtítulos, `<h3>` representa sub-subtítulos, e assim por diante.

### Implementando hierarquia estrutural

Como exemplo, em uma história, `<h1>` representaria o título da história, `<h2>` representaria o título de cada capítulo e `<h3>` representaria sub-seções de cada capítulo, e assim por diante.

```html
<h1>O furo esmagador</h1>

<p>Por Chris Mills</p>

<h2>Capítulo 1: A noite escura</h2>

<p>
  Era uma noite escura. Em algum lugar, uma coruja piou. A chuva caiu no chão
  ...
</p>

<h2>Capítulo 2: O eterno silêncio</h2>

<p>
  Nosso protagonista não podia ver mais que um relance da figura sombria ...
</p>

<h3>O espectro fala</h3>

<p>
  Várias horas se passaram, quando, de repente, o espectro ficou em pé e
  exclamou: "Por favor, tenha piedade da minha alma!"
</p>
```

Depende realmente de você, o quê, exatamente, representam os elementos envolvidos, desde que a hierarquia faça sentido. Você só precisa ter em mente algumas das melhores práticas ao criar tais estruturas:

- Preferencialmente, você deve usar apenas um `<h1>` por página — esse é o título do nível superior e todos os outros ficam abaixo dele, na hierarquia.
- Certifique-se de usar os títulos na ordem correta na hierarquia. Não use `<h3>` para representar subtítulos, seguido de `<h2>`para representar sub-subtítulos - isso não faz sentido e levará a resultados estranhos.
- Dos seis níveis de cabeçalho disponíveis, você deve usar no máximo três por página, a menos que considere necessário usar mais. Documentos com vários níveis (ou seja, uma hierarquia profunda de cabeçalho) tornam-se difíceis de navegar. Nessas ocasiões, é aconselhável espalhar o conteúdo por várias páginas, se possível.

### Por que precisamos de estrutura?

Para responder a esta pergunta, dê uma olhada em [text-start.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/html-text-formatting/text-start.html) — o ponto de partida do nosso exemplo em execução para este artigo (uma boa receita de hummus.) Você deve salvar uma cópia desse arquivo em sua máquina local, pois será necessário para os exercícios posteriores. No momento, o corpo deste documento contém várias partes do conteúdo — elas não são marcadas de forma alguma, mas são separadas por quebras de linha (Enter/Return pressionado para ir para a próxima linha).

No entanto, quando você abre o documento em seu navegador, você verá que o texto aparece como uma só parte!

![A webpage that shows a wall of unformatted text, because there are no elements on the page to structure it.](screen_shot_2017-03-29_at_09.20.35.png)

Isso ocorre porque não há elementos para dar a estrutura de conteúdo, então o navegador não sabe o que é um título e o que é um parágrafo. Além disso:

- Os usuários que olham para uma página web tendem a procurar rapidamente conteúdo relevante, muitas vezes apenas lendo os títulos para começar (normalmente [passamos um tempo muito curto em uma página web](http://www.nngroup.com/articles/how-long-do-users-stay-on-web-pages/)). Se eles não conseguem ver nada útil dentro de alguns segundos, eles provavelmente ficarão frustrados e irão para outro lugar.
- Os mecanismos de pesquisa que indexam sua página consideram o conteúdo dos títulos como palavras-chave importantes para influenciar os rankings de pesquisa da página. Sem cabeçalhos, sua página irá funcionar mal em termos de {{glossary("SEO")}} (Search Engine Optimization).
- As pessoas com deficiência visual, muitas vezes, não leem páginas da web; elas escutam-na em vez disso. Isso é feito com um software chamado [leitor de tela](https://pt.wikipedia.org/wiki/Leitor_de_tela). Este software fornece formas de obter acesso rápido a determinado conteúdo de texto. Entre as várias técnicas utilizadas, elas fornecem um esboço do documento lendo os títulos, permitindo que seus usuários encontrem as informações que precisam rapidamente. Se os títulos não estiverem disponíveis, eles serão obrigados a ouvir todo o documento lido em voz alta.
- Para criar um estilo de conteúdo com {{glossary("CSS")}}, ou fazer coisas interessantes com {{glossary("JavaScript")}}, você precisa ter elementos que envolvam o conteúdo relevante, assim CSS/JavaScript pode efetivamente segmentá-lo.

Nós, portanto, precisamos dar marcações estruturais ao nosso conteúdo.

### Aprendizagem ativa: Fornecendo nossa estrutura de conteúdo

Vamos pular diretamente com um exemplo ao vivo. No exemplo abaixo, adicione elementos ao texto bruto no campo _Entrada_ para que ele apareça como um título e dois parágrafos no campo _Saída_.

Se você cometer um erro, você sempre pode reiniciar usando o botão _Resetar_. Se você ficar preso, pressione o botão _Mostrar solução_ para ver a resposta.

```html hidden
<h2>Saída ao vivo</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Código editável</h2>
<p class="a11y-label">
  Pressione Esc para afastar o foco da área de código (Tab insere um caractere
  de tabulação).
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
Minha pequena história: sou policial e meu nome é Trish.

Minhas pernas são feitas de papelão e sou casada com um peixe.</textarea
>

<div class="playable-buttons">
  <input id="reset" type="button" value="Resetar" />
  <input id="solution" type="button" value="Mostrar solução" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var output = document.querySelector(".output");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Mostrar solução";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Mostrar solução") {
    textarea.value = solutionEntry;
    solution.value = "Ocultar solução";
  } else {
    textarea.value = userEntry;
    solution.value = "Mostrar solução";
  }
  updateCode();
});

var htmlSolution =
  "<h1>Minha pequena história</h1>\n<p>Sou policial e meu nome é Trish.</p>\n<p>Minhas pernas são feitas de papelão e sou casada com um peixe.</p>";
var solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Mostrar solução") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code', 700, 400, "", "", "hide-codepen-jsfiddle") }}

### Por que precisamos de semântica?

A semântica estã em todos os lugares — contamos com experiência anterior para nos dizer qual é a função dos objetos do dia a dia. Quando vemos algo, sabemos qual será a sua função. Então, por exemplo, esperamos que um semáforo vermelho signifique "pare" e um semáforo verde signifique "ir". As coisas podem ficar complicadas muito rapidamente se a semântica errada for aplicada (os países usam vermelho para significar "ir"? Espero que não).

Na mesma linha, precisamos ter certeza de que estamos usando os elementos corretos, dando ao nosso conteúdo o significado, função ou aparência corretos. Nesse contexto, o elemento {{htmlelement("h1")}} também é um elemento semântico, que dá o texto que envolve a representação (ou significado) de "um título de nível superior em sua página".

```html
<h1>Este é um título de nível superior</h1>
```

Por padrão, o navegador fornecerá um tamanho de fonte grande para torná-lo um cabeçalho (embora você possa estilizá-lo como qualquer coisa que você quiser usando CSS). Mais importante, seu valor semântico será usado de várias maneiras, por exemplo, por mecanismos de pesquisa e leitores de tela (como mencionado acima).

Por outro lado, você pode fazer com que qualquer elemento se pareça um título de nível superior. Considere o seguinte:

```html
<span style="font-size: 32px; margin: 21px 0;"
  >Este é um título de nível superior?</span
>
```

Este é um elemento {{htmlelement("span")}}. Não tem semântica. Você usa-o para agrupar conteúdo quando deseja aplicar o CSS (ou fazer algo com JavaScript) sem dar-lhe nenhum significado extra (você saberá mais sobre isto mais tarde, no curso). Nós aplicamos alguns CSS para fazê-lo parecer um título de nível superior, mas como não tem valor semântico, ele não receberá nenhum dos benefícios extras descritos acima. É uma boa idéia usar o elemento HTML relevante para o trabalho.

## Listas

Agora voltemos nossa atenção para as listas. As listas estão em toda parte na vida — de sua lista de compras à lista de instruções que você seguiu inconscientemente para chegar à sua casa todos os dias, para as listas das instruções que está seguindo nesses tutoriais! As listas também estão na Web e temos três tipos diferentes para prestarmos atenção.

### Não ordenada

As listas não ordenadas são usadas para marcar listas de itens para os quais a ordem dos itens não importa — vamos pegar uma lista de compras como um exemplo.

```
leite
ovos
pão
homus
```

Toda lista desordenada começa com um {{htmlelement("ul")}} — isso envolve todos os itens da lista:

```html-nolint
<ul>
  leite
  ovos
  pão
  homus
</ul>
```

O último passo é envolver cada item da lista em um elemento {{htmlelement("li")}} (elemento da lista):

```html
<ul>
  <li>leite</li>
  <li>ovos</li>
  <li>pão</li>
  <li>homus</li>
</ul>
```

#### Aprendizagem ativa: Marcando uma lista desordenada

Tente editar a amostra, ao vivo, abaixo para criar sua própria lista não ordenada HTML.

```html hidden
<h2>Saída ao vivo</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Código editável</h2>
<p class="a11y-label">
  Pressione Esc para afastar o foco da área de código (Tab insere um caractere
  de tabulação).
</p>

<textarea id="code" class="input" style="min-height: 100px; width: 95%">
leite
ovos
pão
hummus</textarea
>

<div class="playable-buttons">
  <input id="reset" type="button" value="Resetar" />
  <input id="solution" type="button" value="Mostrar solução" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var output = document.querySelector(".output");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Mostrar solução";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Mostrar solução") {
    textarea.value = solutionEntry;
    solution.value = "Ocultar solução";
  } else {
    textarea.value = userEntry;
    solution.value = "Mostrar solução";
  }
  updateCode();
});

var htmlSolution =
  "<ul>\n<li>leite</li>\n<li>ovos</li>\n<li>pão</li>\n<li>hummus</li>\n</ul>";
var solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Mostrar solução") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code_2', 700, 400, "", "", "hide-codepen-jsfiddle") }}

### Ordenada

As listas ordenadas são listas em que a ordem dos itens é importante — vamos seguir um conjunto de instruções como exemplo:

```
Dirija até o final da estrada
Vire à direita
Vá em frente nas duas primeiras rotatórias
Vire à esquerda na terceira rotatória
A escola fica à sua direita, a 300 metros da estrada
```

A estrutura de marcação é a mesma das listas não ordenadas, exceto que você deve conter os itens da lista em um elemento {{htmlelement("ol")}}, em vez de `<ul>`:

```html
<ol>
  <li>Dirija até o final da estrada</li>
  <li>Vire à direita</li>
  <li>Vá em frente nas duas primeiras rotatórias</li>
  <li>Vire à esquerda na terceira rotatória</li>
  <li>A escola fica à sua direita, a 300 metros da estrada</li>
</ol>
```

#### Aprendizagem ativa: Marcando uma lista ordenada

Tente editar a amostra ao vivo abaixo, para criar sua própria lista ordenada por HTML.

```html hidden
<h2>Saída ao vivo</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Código editável</h2>
<p class="a11y-label">
  Pressione Esc para afastar o foco da área de código (Tab insere um caractere
  de tabulação).
</p>

<textarea id="code" class="input" style="min-height: 200px; width: 95%">
Dirija até o final da estrada
Vire à direita
Vá em frente nas duas primeiras rotatórias
Vire à esquerda na terceira rotatória
A escola fica à sua direita, a 300 metros da estrada</textarea
>

<div class="playable-buttons">
  <input id="reset" type="button" value="Resetar" />
  <input id="solution" type="button" value="Mostrar solução" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var output = document.querySelector(".output");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Mostrar solução";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Mostrar solução") {
    textarea.value = solutionEntry;
    solution.value = "Ocultar solução";
  } else {
    textarea.value = userEntry;
    solution.value = "Mostrar solução";
  }
  updateCode();
});

var htmlSolution =
  "<ol>\n<li>Dirija até o final da estrada</li>\n<li>Vire à direita</li>\n<li>Vá em frente nas duas primeiras rotatórias</li>\n<li>Vire à esquerda na terceira rotatória</li>\n<li>A escola fica à sua direita, a 300 metros da estrada</li>\n</ol>";
var solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Mostrar solução") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code_3', 700, 500, "", "", "hide-codepen-jsfiddle") }}

### Aprendizagem ativa: marcando nossa página de receita

Então, neste ponto do artigo, você tem todas as informações necessárias para marcar nosso exemplo de página de receita. Você pode optar por salvar uma cópia local do nosso arquivo inicial de [text-start.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/html-text-formatting/text-start.html) e fazer o trabalho lá, ou fazê-lo no exemplo editável abaixo. Fazê-lo, localmente, provavelmente será melhor, pois você conseguirá salvar o trabalho que está fazendo. Enquanto que, se o preencher no exemplo editável, ele será perdido na próxima vez que você abrir a página. Ambos têm prós e contras.

```html hidden
<h2>Saída ao vivo</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Código editável</h2>
<p class="a11y-label">
  Pressione Esc para afastar o foco da área de código (Tab insere um caractere
  de tabulação).
</p>

<textarea id="code" class="input" style="min-height: 200px; width: 95%">
Receita rápida de hummus

  Esta receita faz hummus rápido e saboroso, sem mexer. Foi adaptado de várias receitas diferentes que li ao longo dos anos.

  Hummus é uma deliciosa pasta grossa usada fortemente em pratos gregos e do Oriente Médio. É muito saboroso com salada, carnes grelhadas e pães pitta.

  Ingredientes

  1 lata (400g) de grão de bico
  175g de tahine
  6 tomates secos
  Metade de pimenta vermelha
  Uma pitada de pimenta caiena
  1 dente de alho
  Uma pitada de azeite

  Instruções

  Retire a pele do alho e pique
  Retire todas as sementes e caule da pimenta e pique
  Adicione todos os ingredientes em um processador de alimentos
  Processar todos os ingredientes em uma pasta
  Se você quiser um hummus grosso "pesado", processe-o por um curto período de tempo
  Se você deseja um hummus suave, processe-o por mais tempo

  Para um sabor diferente, você pode tentar misturar uma pequena quantidade de limão e coentro, pimenta, limão e chipotle, harissa e hortelã ou espinafre e queijo feta. Experimente e veja o que funciona para você.

  Armazenamento

  Leve à geladeira o hummus processado em um recipiente fechado. Você poderá usá-lo por cerca de uma semana depois de fazer isso. Se começar a ficar borbulhante, você definitivamente deve descartá-lo.

  Hummus é adequado para congelamento; você pode descongelá-lo e usá-lo dentro de alguns meses.</textarea
>

<div class="playable-buttons">
  <input id="reset" type="button" value="Resetar" />
  <input id="solution" type="button" value="Mostrar solução" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var output = document.querySelector(".output");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Mostrar solução";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Mostrar solução") {
    textarea.value = solutionEntry;
    solution.value = "Ocultar solução";
  } else {
    textarea.value = userEntry;
    solution.value = "Mostrar solução";
  }
  updateCode();
});

var htmlSolution =
  '<h1>Receita rápida de hummus</h1>\n\n<p>Esta receita faz hummus rápido e saboroso, sem mexer. Foi adaptado de várias receitas diferentes que li ao longo dos anos.</p>\n\n<p>Hummus é uma deliciosa pasta grossa usada fortemente em pratos gregos e do Oriente Médio. É muito saboroso com salada, carnes grelhadas e pães pitta.</p>\n\n<h2>Ingredientes</h2>\n\n<ul>\n<li>1 lata (400g) de grão de bico</li>\n<li>175g de tahine</li>\n<li>6 tomates secos</li>\n<li>Metade de pimenta vermelha</li>\n<li>Uma pitada de pimenta caiena</li>\n<li>1 dente de alho</li>\n<li>Uma pitada de azeite</li>\n</ul>\n\n<h2>Instruções</h2>\n\n<ol>\n<li>Retire a pele do alho e pique</li>\n<li>Retire todas as sementes e caule da pimenta e pique</li>\n<li>Adicione todos os ingredientes em um processador de alimentos</li>\n<li>Processar todos os ingredientes em uma pasta</li>\n<li>Se você quiser um hummus grosso "pesado", processe-o por um curto período de tempo</li>\n<li>Se você deseja um hummus suave, processe-o por mais tempo</li>\n</ol>\n\n<p>Para um sabor diferente, você pode tentar misturar uma pequena quantidade de limão e coentro, pimenta, limão e chipotle, harissa e hortelã ou espinafre e queijo feta. Experimente e veja o que funciona para você.</p>\n\n<h2>Armazenamento</h2>\n\n<p>Leve à geladeira o hummus processado em um recipiente fechado. Você poderá usá-lo por cerca de uma semana depois de fazer isso. Se começar a ficar borbulhante, você definitivamente deve descartá-lo.</p>\n\n<p>Hummus é adequado para congelamento; você pode descongelá-lo e usá-lo dentro de alguns meses.</p>';
var solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Mostrar solução") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code_4', 900, 500, "", "", "hide-codepen-jsfiddle") }}

Se você ficar preso, você sempre pode pressionar o botão _Mostrar solução_, ou confira nosso exemplo de [text-complete.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/html-text-formatting/text-complete.html) em nosso repositório Github.

### Aninhando listas

Não há problema em aninhar uma lista dentro de outra. Você pode ter algumas sub-listas abaixo de uma lista de nível superior. Vamos pegar a segunda lista do nosso exemplo de receita:

```html
<ol>
  <li>Retire a pele do alho e pique</li>
  <li>Retire todas as sementes e caule da pimenta e pique</li>
  <li>Adicione todos os ingredientes em um processador de alimentos</li>
  <li>Processar todos os ingredientes em uma pasta</li>
  <li>
    Se você quiser um hummus grosso "pesado", processe-o por um curto período de
    tempo
  </li>
  <li>Se você deseja um hummus suave, processe-o por mais tempo</li>
</ol>
```

Uma vez que as duas últimas listas estão intimamente relacionadas com a anterior (elas leem como sub-instruções ou escolhas que se encaixam abaixo dessa lista), pode fazer sentido aninhá-las dentro de sua própria lista desordenada e colocar essa lista dentro da quarta lista. Isso pareceria assim:

Como os dois últimos itens da lista estão intimamente relacionadas (eles são lidos como sub-instruções ou opções que se encaixam abaixo dessa lista), pode fazer sentido aninha-los em sua própria lista não ordenada e colocá-los no quarto item da lista atual. Isso seria assim:

```html
<ol>
  <li>Retire a pele do alho e pique</li>
  <li>Retire todas as sementes e caule da pimenta e pique</li>
  <li>Adicione todos os ingredientes em um processador de alimentos</li>
  <li>
    Processar todos os ingredientes em uma pasta
    <ul>
      <li>
        Se você quiser um hummus grosso "pesado", processe-o por um curto
        período de tempo
      </li>
      <li>Se você deseja um hummus suave, processe-o por mais tempo</li>
    </ul>
  </li>
</ol>
```

Tente voltar ao exemplo de aprendizagem ativo anterior e atualizar a segunda lista como esta aqui.

## Ênfase e importância

Na linguagem humana, muitas vezes enfatizamos certas palavras para alterar o significado de uma frase, e muitas vezes queremos marcar certas palavras como importantes ou diferentes de alguma forma. O HTML fornece vários elementos semânticos que nos permitem marcar o conteúdo textual com esses efeitos, e, nesta seção, vamos ver alguns dos mais comuns.

### Ênfase

Quando queremos acrescentar ênfase na linguagem falada, enfatizamos certas palavras, alterando sutilmente o significado do que estamos dizendo. Da mesma forma, em linguagem escrita tendemos a enfatizar as palavras colocando-as em itálico. Por exemplo, as seguintes duas frases têm significados diferentes.

Estou _feliz_ que você não chegou _atrasado_.

Estou **feliz** que você não chegou **atrasado**.

A primeira frase parece genuinamente aliviada de que a pessoa não estava atrasada. Em contraste, a segunda parece ser sarcástica ou passiva-agressiva, expressando aborrecimento que a pessoa chegou um pouco atrasada.

Em HTML usamos o elemento de ênfase {{htmlelement("em")}} para marcar tais instâncias. Além de tornar o documento mais interessante de ler, estes são reconhecidos pelos leitores de tela e falados em um tom de voz diferente. Os navegadores exibem isso como itálico por padrão, mas você não deve usar esta tag apenas para obter estilo itálico. Para fazer isso, você usaria um elemento {{htmlelement("span")}} e alguns CSS, ou talvez um elemento {{htmlelement("i")}} (veja abaixo).

```html
<p>Eu estou <em>feliz</em> você não está <em>atrasado</em>.</p>
```

### Importância

Para enfatizar palavras importantes, tendemos a enfatizá-las na linguagem falada e colocá-la em **negrito** na linguagem escrita. Por exemplo:

Este líquido é **altamente tóxico**.

Eu estou contando com você. **Não** se atrase!

Em HTML usamos o elemento {{htmlelement("strong")}} (importância) para marcar tais instâncias. Além de tornar o documento mais útil, novamente estes são reconhecidos pelos leitores de tela e falados em um tom de voz diferente. Os navegadores exibem este texto como negrito por padrão, mas você não deve usar esta marca apenas para obter um estilo negrito. Para fazer isso, você usaria um elemento {{htmlelement("span")}} e algum CSS, ou talvez um {{htmlelement("b")}} (veja abaixo).

```html
<p>Este líquido é <strong>altamente tóxico</strong>.</p>

<p>Estou contando com você. <strong>Não</strong> se atrase!</p>
```

Você pode aninhar importância e ênfase entre si, se desejar:

```html
<p>
  Este líquido é <strong>altamente tóxico</strong> - Se você beber,
  <strong>você pode <em>morrer</em></strong
  >.
</p>
```

### Aprendizagem ativa: Vamos ser importantes!

Nesta seção de aprendizado ativo, fornecemos um exemplo editável. Nele, gostaríamos que você tentasse adicionar ênfase e importância às palavras que acha que precisam delas, apenas para praticar um pouco.

```html hidden
<h2>Saída ao vivo</h2>

<div class="output" style="min-height: 50px;"></div>

<h2>Código editável</h2>
<p class="a11y-label">
  Pressione Esc para afastar o foco da área de código (Tab insere um caractere
  de tabulação).
</p>

<textarea id="code" class="input" style="min-height: 200px; width: 95%">
<h1>Notícia importante</h1>
<p>No domingo, 9 de janeiro de 2010, uma gangue de góticos foi
   vista roubando vários gnomos de jardim de um
   centro comercial no centro de Milwaukee. Eles estavam
   todos vestindo macacões verdes e chapéus bobos, que
   pareciam ter a forma de uma baleia. Se alguém
   tiver alguma informação sobre este incidente, por favor
   entre em contato com a polícia.</p></textarea
>

<div class="playable-buttons">
  <input id="reset" type="button" value="Resetar" />
  <input id="solution" type="button" value="Mostrar solução" />
</div>
```

```css hidden
html {
  font-family: sans-serif;
}

h2 {
  font-size: 16px;
}

.a11y-label {
  margin: 0;
  text-align: right;
  font-size: 0.7rem;
  width: 98%;
}

body {
  margin: 10px;
  background: #f5f9fa;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var solution = document.getElementById("solution");
var output = document.querySelector(".output");
var code = textarea.value;
var userEntry = textarea.value;

function updateCode() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  userEntry = textarea.value;
  solutionEntry = htmlSolution;
  solution.value = "Mostrar solução";
  updateCode();
});

solution.addEventListener("click", function () {
  if (solution.value === "Mostrar solução") {
    textarea.value = solutionEntry;
    solution.value = "Ocultar solução";
  } else {
    textarea.value = userEntry;
    solution.value = "Mostrar solução";
  }
  updateCode();
});

var htmlSolution =
  "<h1>Notícia importante</h1>\n<p>No <strong>domingo, 9 de janeiro de 2010</strong>, uma gangue de <em>góticos</em> foi vista roubando <strong><em>vários</em> gnomos de jardim</strong> de um centro comercial no centro de <strong>Milwaukee</strong>. Eles estavam todos <em>vestindo macacões verdes e chapéus bobos</em>, que pareciam ter a forma de uma baleia. Se alguém tiver <strong>alguma informação</strong> sobre este incidente, por favor entre em contato com a <strong>polícia</strong>.</p>";
var solutionEntry = htmlSolution;

textarea.addEventListener("input", updateCode);
window.addEventListener("load", updateCode);

// stop tab key tabbing out of textarea and
// make it write a tab at the caret position instead

textarea.onkeydown = function (e) {
  if (e.keyCode === 9) {
    e.preventDefault();
    insertAtCaret("\t");
  }

  if (e.keyCode === 27) {
    textarea.blur();
  }
};

function insertAtCaret(text) {
  var scrollPos = textarea.scrollTop;
  var caretPos = textarea.selectionStart;

  var front = textarea.value.substring(0, caretPos);
  var back = textarea.value.substring(
    textarea.selectionEnd,
    textarea.value.length,
  );
  textarea.value = front + text + back;
  caretPos = caretPos + text.length;
  textarea.selectionStart = caretPos;
  textarea.selectionEnd = caretPos;
  textarea.focus();
  textarea.scrollTop = scrollPos;
}

// Update the saved userCode every time the user updates the text area code

textarea.onkeyup = function () {
  // We only want to save the state when the user code is being shown,
  // not the solution, so that solution is not saved over the user code
  if (solution.value === "Mostrar solução") {
    userEntry = textarea.value;
  } else {
    solutionEntry = textarea.value;
  }

  updateCode();
};
```

{{ EmbedLiveSample('Playable_code_5', 700, 500, "", "", "hide-codepen-jsfiddle") }}

### Itálico, negrito, sublinhado

Os elementos que discutimos até agora têm clara semântica associada. A situação com {{htmlelement("b")}}, {{htmlelement("i")}}, e com {{htmlelement("u")}} é um pouco mais complicada. Eles surgiram para que as pessoas pudessem escrever negrito, itálico ou texto sublinhado em uma época em que o CSS ainda era pouco suportado. Elementos como este, que apenas afetam a apresentação e não a semântica, são conhecidos como **elementos de apresentação** e não devem mais ser usados, porque, como já vimos, a semântica é importante para a acessibilidade, SEO, etc.

O HTML5 redefiniu `<b>`, `<i>` e `<u>` com novas funções semânticas um pouco confusas.

Aqui está a melhor regra geral: provavelmente é apropriado usar `<b>`, `<i>` ou `<u>` para transmitir um significado tradicionalmente transmitido com negrito, itálico ou sublinhado, desde que não exista um elemento mais adequado. No entanto, sempre é essencial manter uma mentalidade de acessibilidade. O conceito de itálico não é muito útil para pessoas que usam leitores de tela ou para pessoas que usam um sistema de escrita diferente do alfabeto Latino.

- {{htmlelement("i")}} é usado para transmitir um significado tradicionalmente transmitido por itálico: palavras estrangeiras, designação taxonômica, termos técnicos, um pensamento...
- {{htmlelement("b")}} é usado para transmitir um significado tradicionalmente transmitido por negrito: palavras-chave, nomes de produtos, sentença principal...
- {{htmlelement("u")}} é usado para transmitir um significado tradicionalmente transmitido pelo sublinhado: nome próprio, erro de ortografia...

> **Nota:** Um aviso amável sobre o sublinhado: **as pessoas associam fortemente o sublinhado com hiperlinks**. Portanto, na Web, é melhor sublinhar apenas os links. Use o elemento `<u>` quando for semanticamente apropriado, mas considere usar o CSS para alterar o sublinhado padrão para algo mais apropriado na Web. O exemplo abaixo ilustra como isso pode ser feito.

```html
<!-- nomes científicos -->
<p>
  O Colibri Ruby-throated (<i>Archilochus colubris</i>) é o colibri mais comum
  do Leste da América do Norte.
</p>

<!-- palavras estrangeiras -->
<p>
  O menu era um mar de palavras exóticas como <i lang="uk-latn">vatrushka</i>,
  <i lang="id">nasi goreng</i> e <i lang="fr">soupe à l'oignon</i>.
</p>

<!-- um erro de ortografia conhecido -->
<p>
  Algum dia eu vou aprender como
  <u style="text-decoration-line: underline; text-decoration-style: wavy;"
    >jogar</u
  >
  melhor.
</p>

<!-- Destaque as palavras-chave em um conjunto de instruções -->
<ol>
  <li><b>Fatie</b>dois pedaços de pão do pão.</li>
  <li>
    <b>Colocar</b> uma fatia de tomate e uma folha de alface entre as fatias de
    pão.
  </li>
</ol>
```

## Teste suas habilidades!

Você chegou ao final deste artigo, mas consegue se lembrar das informações mais importantes? Você pode encontrar alguns testes adicionais para verificar se você absorveu essas informações antes de prosseguir — consulte [Teste suas habilidades: noções básicas de texto HTML](/pt-BR/docs/Learn/HTML/Introduction_to_HTML/Test_your_skills:_HTML_text_basics).

## Resumo

Por enquanto é isso! Este artigo deve fornecer uma boa idéia de como começar a marcar texto em HTML e apresentar alguns dos elementos mais importantes nessa área. Há muito mais elementos semânticos a serem abordados nesta área, e veremos muito mais em nosso artigo de [Formatação avançada de texto](/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML/Formatacao_avancada_texto), mais adiante neste curso. No próximo artigo, veremos detalhadamente como [criar links](/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML/Criando_hyperlinks), possivelmente o elemento mais importante na Web.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/The_head_metadata_in_HTML", "Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML")}}
