---
title: Formatação avançada de texto
slug: Learn/HTML/Introduction_to_HTML/Advanced_text_formatting
---

{{LearnSidebar}}{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}

Existem muitos outros elementos em HTML para formatação de texto, que não tratamos no artigo de [Fundamentos do texto em HTML](/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML/Fundamentos_textuais_HTML). Os elementos descritos neste artigo são menos conhecidos, mas ainda são úteis para conhecer (e isso ainda não é uma lista completa de todos os elementos). Aqui, você aprenderá a marcar citações, listas de descrição, código de computador e outros textos relacionados, subscrito e sobrescrito, informações de contato e muito mais.

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Familiaridade básica em HTML, conforme abordado em
        <a href="/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML/Getting_started"
          >Introdução ao HTML</a
        >. Formatação de texto em HTML, conforme abordado em
        <a
          href="/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML/Fundamentos_textuais_HTML"
          >Fundamentais de texto em HTML</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>
        Aprender a usar elementos HTML menos conhecidos para marcar recursos
        semânticos avançados.
      </td>
    </tr>
  </tbody>
</table>

## Listas de descrição

Nos Fundamentos do texto em HTML, falamos sobre como [marcar as listas básicas](/pt-BR/docs/Aprender/HTML/Introducao_ao_HTML/Fundamentos_textuais_HTML/#Listas) em HTML, mas não mencionamos o terceiro tipo de lista que ocasionalmente irá encontrar - listas de descrição. O objetivo dessas listas é marcar um conjunto de itens e suas descrições associadas, como termos e definições, ou perguntas e respostas. Vejamos um exemplo de um conjunto de termos e definições:

```
solilóquio
No drama, onde um personagem fala a si mesmo, representando seus pensamentos ou sentimentos internos e no processo, transmitindo-os ao público (mas não a outros personagens).
monólogo
No drama, onde um personagem fala seus pensamentos em voz alta para compartilhá-los com o público e com outros personagens presentes.
aparte
No drama, onde um personagem compartilha um comentário apenas com o público para efeito humorístico ou dramático. Isso geralmente é um sentimento, pensamento ou parte de informação de fundo adicional.
```

As listas de descrição usam um invólucro diferente dos outros tipos de lista — {{htmlelement("dl")}}; além disso, cada termo está envolvido em um {{htmlelement("dt")}} (termo de descrição) elemento, e cada descrição está envolvida em um {{htmlelement("dd")}} (definição de descrição) elemento. Vamos terminar marcando nosso exemplo:

```html
<dl>
  <dt>solilóquio</dt>
  <dd>
    No drama, onde um personagem fala a si mesmo, representando seus pensamentos
    ou sentimentos internos e no processo, transmitindo-os ao público (mas não a
    outros personagens).
  </dd>
  <dt>monólogo</dt>
  <dd>
    No drama, onde um personagem fala seus pensamentos em voz alta para
    compartilhá-los com o público e com outros personagens presentes.
  </dd>
  <dt>aparte</dt>
  <dd>
    No drama, onde um personagem compartilha um comentário apenas com o público
    para efeito humorístico ou dramático. Isso geralmente é um sentimento,
    pensamento ou parte de informação de fundo adicional.
  </dd>
</dl>
```

Os estilos padrões do navegador exibirão as listas com as descrições indentadas um pouco dos termos. Os estilos da MDN seguem esta convenção de forma bastante parecida, mas também enfatizam os termos, para uma definição extra.

- solilóquio
  - : No drama, onde um personagem fala a si mesmo, representando seus pensamentos ou sentimentos internos e no processo, transmitindo-os ao público (mas não a outros personagens).
- monólogo
  - : No drama, onde um personagem fala seus pensamentos em voz alta para compartilhá-los com o público e com outros personagens presentes.
- aparte
  - : No drama, onde um personagem compartilha um comentário apenas com o público para efeito humorístico ou dramático. Isso geralmente é um sentimento, pensamento ou parte de informação de fundo adicional.

Observe que é permitido ter um único termo com múltiplas descrições, por exemplo:

- aparte

  - : No drama, onde um personagem compartilha um comentário apenas com o público para efeito humorístico ou dramático. Isso geralmente é um sentimento, pensamento ou parte de informação de fundo adicional.

    Por escrito, uma seção de conteúdo que está relacionada ao tópico atual, mas não se encaixa diretamente no fluxo principal de conteúdo, então é apresentado próximo (muitas vezes em uma caixa ao lado).

### Aprendizagem ativa: marcando um conjunto de definições

É hora de pôr as mãos nas listas de descrição. Adicione elementos ao texto bruto no campo de _Entrada_ para que ele se pareça como uma lista de descrição no campo _Saída_. Você pode tentar usar seus próprios termos e descrições, se quiser.

Se você cometer um erro, sempre pode reiniciá-lo usando o botão 'Limpar'. Se ficar realmente preso, pressione o botão _'Mostrar solução_' para ver a resposta.

```html hidden
<h2>Entrada</h2>
<textarea id="code" class="input">
Bacon
A cola que liga o mundo em conjunto.
Ovos
A cola que une o bolo juntos.
Café
A bebida que faz correr o mundo pela manhã.
Uma cor castanho claro.</textarea
>
<h2>Saída</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="Limpar" />
  <input id="solution" type="button" value="Mostrar solução" />
</div>
```

```css hidden
body {
  font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
}

.input,
.output {
  width: 90%;
  height: 10em;
  padding: 10px;
  border: 1px solid #0095dd;
  overflow: auto;
}

button {
  padding: 10px 10px 10px 0;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var code = textarea.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  drawOutput();
});

solution.addEventListener("click", function () {
  textarea.value =
    "<dl>\n  <dt>Bacon</dt>\n  <dd>The glue that binds the world together.</dd>\n  <dt>Eggs</dt>\n  <dd>The glue that binds the cake together.</dd>\n  <dt>Coffee</dt>\n  <dd>The drink that gets the world running in the morning.</dd>\n  <dd>A light brown color.</dd>\n</dl>";
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code', 700, 500) }}

## Citações

HTML também possui recursos disponíveis para marcação de citações. Qual elemento você pode usar? Depende se está marcando um bloco ou uma citação em linha.

### Blockquotes

Se uma seção de conteúdo em nível de bloco (seja um parágrafo, vários parágrafos, uma lista, etc.) for citada em algum outro lugar, você deverá envolvê-la em um elemento \<blockquote> para indicar isso e incluir um URL apontando para a fonte da citação dentro de um atributo cite. Por exemplo, a marcação a seguir é obtida da página do elemento `<blockquote>` do MDN:

```html
<p>
  The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
  <em>HTML Block Quotation Element</em>) indicates that the enclosed text is an
  extended quotation.
</p>
```

Para transformar isso em uma citação em bloco, faríamos assim:

```html
<blockquote cite="/pt-BR/docs/Web/HTML/Element/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>
```

O estilo padrão do navegador renderiza isso como um parágrafo recuado, como um indicador de que é uma citação. O MDN faz isso, mas também, adiciona um estilo extra:

> O **Elemento HTML `<blockquote>` **(or _HTML Block Quotation Element_) indica que o texto em anexo é uma citação estendida.

### Citações em linha

As citações embutidas funcionam exatamente da mesma maneira, exceto pelo uso do elemento {{htmlelement("q")}}. Por exemplo, o bit de marcação abaixo contém uma citação da página MDN \<q>:

```html
<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q cite="/pt-BR/docs/Web/HTML/Element/q"
    >intended for short quotations that don't require paragraph breaks.</q
  >
</p>
```

O estilo padrão do navegador renderiza isso como texto normal entre aspas para indicar uma citação, assim:

O elemento de citação — `<q>` — é "destinado a citações curtas que não exigem quebras de parágrafo".

### Citações

O conteúdo do atributo [`cite`](/pt-BR/docs/Web/HTML/Element/blockquote#cite) parece útil, mas, infelizmente, navegadores, leitores de tela etc. não fazem muito uso dele. Não há como fazer com que o navegador exiba o conteúdo de `cite`, sem escrever sua própria solução usando JavaScript ou CSS. Se você deseja disponibilizar a fonte da citação na página, uma maneira melhor de marcá-la é colocar o elemento {{htmlelement("cite")}} próximo ao elemento quote. Isso realmente tem o objetivo de conter o nome da fonte da citação — ou seja, o nome do livro ou o nome da pessoa que disse a citação — mas não há razão para que você não possa vincular o texto dentro de `<cite>` à citação fonte de alguma forma:

```html
<p>
  According to the
  <a href="/pt-BR/docs/Web/HTML/Element/blockquote">
    <cite>MDN blockquote page</cite></a
  >:
</p>

<blockquote cite="/pt-BR/docs/Web/HTML/Element/blockquote">
  <p>
    The <strong>HTML <code>&lt;blockquote&gt;</code> Element</strong> (or
    <em>HTML Block Quotation Element</em>) indicates that the enclosed text is
    an extended quotation.
  </p>
</blockquote>

<p>
  The quote element — <code>&lt;q&gt;</code> — is
  <q cite="/pt-BR/docs/Web/HTML/Element/q"
    >intended for short quotations that don't require paragraph breaks.</q
  >
  -- <a href="/pt-BR/docs/Web/HTML/Element/q"> <cite>MDN q page</cite></a
  >.
</p>
```

As citações são estilizadas em fonte itálica por padrão. Você pode ver esse código funcionando em nosso exemplo [quotations.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/advanced-text-formatting/quotations.html).

### Aprendizado ativo: quem disse isso?

Hora de outro exemplo de aprendizado ativo! Neste exemplo, gostaríamos que você:

1. Transforme o parágrafo do meio em uma citação em bloco, que inclui um atributo `cite`.
2. Transforme parte do terceiro parágrafo em uma citação embutida, que inclui um atributo de `cite`.
3. Inclua um elemento `<cite>` para cada link.

Pesquise on-line para encontrar fontes de citação apropriadas.

Se você cometer um erro, sempre poderá redefini-lo usando o botão 'Limpar'. Se você realmente ficar atolado, pressione o botão 'Mostrar solução' para ver a resposta.

```html hidden
<h2>Entrada</h2>
<textarea id="code" class="input">
<p>Hello and welcome to my motivation page. As Confucius once said:</p>

<p>It does not matter how slowly you go as long as you do not stop.</p>

<p>I also love the concept of positive thinking, and The Need To Eliminate Negative Self Talk
(as mentioned in Affirmations for Positive Thinking.)</p></textarea
>
<h2>Saída</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="Limpar" />
  <input id="solution" type="button" value="Mostrar solução" />
</div>
```

```css hidden
body {
  font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
}

.input,
.output {
  width: 90%;
  height: 10em;
  padding: 10px;
  border: 1px solid #0095dd;
  overflow: auto;
}

button {
  padding: 10px 10px 10px 0;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var code = textarea.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  drawOutput();
});

solution.addEventListener("click", function () {
  textarea.value =
    '<p>Hello and welcome to my motivation page. As <a href="http://www.brainyquote.com/quotes/authors/c/confucius.html"><cite>Confucius</cite></a> once said:</p>\n\n<blockquote cite="http://www.brainyquote.com/quotes/authors/c/confucius.html">\n  <p>It does not matter how slowly you go as long as you do not stop.</p>\n</blockquote>\n\n<p>I also love the concept of positive thinking, and <q cite="http://www.affirmationsforpositivethinking.com/index.htm">The Need To Eliminate Negative Self Talk</q> (as mentioned in <a href="http://www.affirmationsforpositivethinking.com/index.htm"><cite>Affirmations for Positive Thinking</cite></a>.)</p>';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code_2', 700, 500) }}

## Abreviações

Outro elemento bastante comum que você encontrará ao olhar na Web é o {{htmlelement("abbr")}} — usado para contornar uma abreviação ou sigla e fornecer uma expansão completa do termo (incluído em um atributo [`title`](/pt-BR/docs/Web/HTML/Global_attributes#title).) Vejamos alguns exemplos

```
<p>Usamos <abbr title="Hypertext Markup Language">HTML</abbr> para estruturar nossos documentos da web.</p>

<p>Acho que o <abbr title="Reverendo">Rev.</abbr> Green fez isso na cozinha com a motosserra.</p>
```

Elas aparecerão da seguinte forma (a expansão aparecerá em uma dica de ferramenta quando o termo passar o mouse):

Usamos HTML para estruturar nossos documentos da web.

Acho que o Rev. Green fez isso na cozinha com a motosserra.

> **Nota:** Há outro elemento, {{htmlelement("acronym")}}, que basicamente faz a mesma coisa que `<abbr>`, e foi projetado especificamente para acrônimos, em vez de abreviações. Isso, no entanto, caiu em desuso — não era suportado em navegadores nem o `<abbr>`, e tem uma função semelhante que foi considerado inútil ter os dois. Apenas use `<abbr>`.

### Aprendizado ativo: marcando uma abreviação

Para esta tarefa simples de aprendizado ativo, gostaríamos que você simplesmente marque uma abreviação. Você pode usar nossa amostra abaixo ou substituí-la por uma de sua preferência.

```html hidden
<h2>Entrada</h2>
<textarea id="code" class="input">
<p>NASA sure does some exciting work.</p></textarea
>
<h2>Saída</h2>
<div class="output"></div>
<div class="controls">
  <input id="reset" type="button" value="Reset" />
  <input id="solution" type="button" value="Show solution" />
</div>
```

```css hidden
body {
  font-family: "Open Sans Light", Helvetica, Arial, sans-serif;
}

.input,
.output {
  width: 90%;
  height: 5em;
  padding: 10px;
  border: 1px solid #0095dd;
  overflow: auto;
}

button {
  padding: 10px 10px 10px 0;
}
```

```js hidden
var textarea = document.getElementById("code");
var reset = document.getElementById("reset");
var code = textarea.value;
var output = document.querySelector(".output");
var solution = document.getElementById("solution");

function drawOutput() {
  output.innerHTML = textarea.value;
}

reset.addEventListener("click", function () {
  textarea.value = code;
  drawOutput();
});

solution.addEventListener("click", function () {
  textarea.value =
    '<p><abbr title="National Aeronautics and Space Administration">NASA</abbr> sure does some exciting work.</p>';
  drawOutput();
});

textarea.addEventListener("input", drawOutput);
window.addEventListener("load", drawOutput);
```

{{ EmbedLiveSample('Playable_code_3', 700, 350) }}

## Marcando detalhes de contato

O HTML possui um elemento para marcar os detalhes do contato — {{htmlelement("address")}}. Isso simplesmente envolve seus detalhes de contato, por exemplo:

```html
<address>
  <p>Chris Mills, Manchester, The Grim North, UK</p>
</address>
```

Porém, uma coisa a se lembrar é que o elemento \<address> destina-se a marcar os detalhes de contato da pessoa que escreveu o documento HTML e não qualquer endereço. Portanto, o exposto acima só seria bom se Chris tivesse escrito o documento em que a marcação aparece. Observe, que, algo assim também seria bom:

```html
<address>
  <p>Page written by <a href="../authors/chris-mills/">Chris Mills</a>.</p>
</address>
```

## Sobrescrito e subscrito

Ocasionalmente, você precisará usar sobrescrito e subscrito ao marcar itens como datas, fórmulas químicas e equações matemáticas para que eles tenham o significado correto. Os elementos {{htmlelement("sup")}} e {{htmlelement("sub")}} manipulam esse trabalho. Por exemplo:

```html
<p>My birthday is on the 25<sup>th</sup> of May 2001.</p>
<p>
  Caffeine's chemical formula is
  C<sub>8</sub>H<sub>10</sub>N<sub>4</sub>O<sub>2</sub>.
</p>
<p>If x<sup>2</sup> is 9, x must equal 3 or -3.</p>
```

A saída desse código é assim:

Meu aniversário é no dia 25 de maio de 2001.

A fórmula química da cafeína é C8H10N4O2.

Se x2 é 9, x deve ser igual a 3 ou -3.

## Representando código de computador

Existem vários elementos disponíveis para marcar código de computador usando HTML:

- {{htmlelement("code")}}: Para marcar partes genéricas de código de computador.
- {{htmlelement("pre")}}: Para reter espaço em branco (geralmente blocos de código) — se você usar recuo ou espaço em branco em excesso no seu texto, os navegadores o ignorarão e você não o verá na sua página renderizada. Se você envolver o texto nas tags `<pre></pre>` seu espaço em branco será renderizado de forma idêntica à maneira como você o vê no seu editor de texto.
- {{htmlelement("var")}}: Para marcar especificamente nomes de variáveis.
- {{htmlelement("kbd")}}: Para marcar a entrada do teclado (e outros tipos) inserida no computador.
- {{htmlelement("samp")}}: Para marcar a saída de um programa de computador.

Vejamos alguns exemplos. Você deve tentar brincar com eles (tente pegar uma cópia do nosso arquivo de exemplo [other-semantics.html](https://github.com/mdn/learning-area/blob/master/html/introduction-to-html/advanced-text-formatting/other-semantics.html)):

```html
<pre><code>var para = document.querySelector('p');

para.onclick = function() {
  alert('Owww, stop poking me!');
}</code></pre>

<p>
  You shouldn't use presentational elements like <code>&lt;font&gt;</code> and
  <code>&lt;center&gt;</code>.
</p>

<p>
  In the above JavaScript example, <var>para</var> represents a paragraph
  element.
</p>

<p>Select all the text with <kbd>Ctrl</kbd>/<kbd>Cmd</kbd> + <kbd>A</kbd>.</p>

<pre>$ <kbd>ping mozilla.org</kbd>
<samp>PING mozilla.org (63.245.215.20): 56 data bytes
64 bytes from 63.245.215.20: icmp_seq=0 ttl=40 time=158.233 ms</samp></pre>
```

O código acima terá a seguinte aparência:

{{ EmbedLiveSample('Representing_computer_code','100%',300) }}

## Marcando horários e datas

O HTML também fornece o elemento {{htmlelement("time")}} para marcar horários e datas em um formato legível por máquina. Por exemplo:

```html
<time datetime="2016-01-20">20 January 2016</time>
```

Por que isso é útil? Bem, existem muitas maneiras diferentes pelas quais os humanos escrevem datas. A data acima pode ser escrita como:

- 20 January 2016
- 20th January 2016
- Jan 20 2016
- 20/01/16
- 01/20/16
- The 20th of next month
- 20e Janvier 2016
- 2016 年 1 月 20 日
- And so on

Mas essas formas diferentes não podem ser facilmente reconhecidas pelos computadores — e se você quiser pegar automaticamente as datas de todos os eventos em uma página e inseri-las em um calendário? O elemento {{htmlelement("time")}} permite anexar uma data/hora inequívoca e legível por máquina para esse fim.

O exemplo básico acima fornece apenas uma data legível por máquina simples, mas existem muitas outras opções possíveis, por exemplo:

```html
<!-- Data simples padrão -->
<time datetime="2016-01-20">20 January 2016</time>
<!-- Apenas ano e mês -->
<time datetime="2016-01">January 2016</time>
<!-- Just month and day -->
<time datetime="01-20">20 January</time>
<!-- Apenas tempo, horas e minutos -->
<time datetime="19:30">19:30</time>
<!-- Você pode fazer segundos e milissegundos também! -->
<time datetime="19:30:01.856">19:30:01.856</time>
<!-- Data e hora -->
<time datetime="2016-01-20T19:30">7.30pm, 20 January 2016</time>
<!-- Data e hora com compensação de fuso horário -->
<time datetime="2016-01-20T19:30+01:00"
  >7.30pm, 20 January 2016 is 8.30pm in France</time
>
<!-- Chamando um número de semana específico -->
<time datetime="2016-W04">The fourth week of 2016</time>
```

## Resumo

Isso marca o fim de nosso estudo da semântica de texto HTML. Lembre-se de que o que você viu durante este curso não é uma lista exaustiva de elementos de texto HTML — queríamos tentar cobrir o essencial, e alguns dos mais comuns que você verá na natureza, ou pelo menos podem achar interessantes. Para encontrar muito mais elementos HTML, você pode dar uma olhada no nosso [HTML element reference](/pt-BR/docs/Web/HTML/Element) (a seção [Inline text semantics](/pt-BR/docs/Web/HTML/Element#Semânticas_textuais_inline) seria um ótimo ponto de partida.) No próximo artigo, examinaremos os elementos HTML que você usaria para estruturar as diferentes partes de um documento HTML.

{{PreviousMenuNext("Learn/HTML/Introduction_to_HTML/Creating_hyperlinks", "Learn/HTML/Introduction_to_HTML/Document_and_website_structure", "Learn/HTML/Introduction_to_HTML")}}
