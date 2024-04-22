---
title: Como criar um exercício de aprendizado interativo
slug: conflicting/MDN/Writing_guidelines/Page_structures/Live_samples
---

{{MDNSidebar}}

Ao aprender a web, é importante confiar no conteúdo da aprendizagem ativa. Esse conteúdo é feito para ajudar a aprender algo pró-ativamente. Pode ser exercícios, exemplos de hackeáveis em tempo real, tarefas a realizar, análises, etc. Em suma, qualquer coisa que desejar, ajuda alguém a entender ativamente algo.

Não existe uma maneira direta para criar esse conteúdo. Por exemplo, existem muitas ferramentas de terceiros que podem ajudar-lo a criar exemplos em tempo real (ver: [JSFiddle](https://jsfiddle.net/) , [CodePen](https://codepen.io/) , [Dabblet](http://dabblet.com/) , etc.) que você pode vincular a partir de artigos MDN. Se Você Quiser CRIAR Exercícios Mais AVANÇADOS e compreensíveis, rápido Você PODE USAR fácilmente o [dedal](https://thimble.mozilla.org) DO PROJETO WebMaker.

Atualmente, o MDN não é uma ferramenta fácil para autorizar esse conteúdo ativo. No entanto, você é um codificador, pode usar os recursos MDN atuais para criar o conteúdo de aprendizagem ativo personalizado. Leia mais para ver como fazer isso.

## MDN amostras ao vivo

O MDN possui um recurso muito legal chamado **live samples**. É um mecanismo que transforma qualquer código HTML, CSS e JavaScript dentro de uma página MDN em seu equivalente executado. Antes de usá-lo, você deve ler [Usando o sistema de amostra ao vivo](/pt-BR/docs/MDN/Contribute/Editor/Live_samples),qual é a nossa documentação completa para construí-los. Embora sejam fáceis de fazer, há peculiaridades e truques que você aprenderá ao longo do caminho.

O que é interessante é que é realmente fácil ajustar esse recurso para usá-lo para incorporar qualquer tipo de ferramenta ou utilitário que você deseja em uma página MDN.

### Código oculto

A primeira maneira de usar um exemplo de código para criar conteúdo de aprendizagem ativo é editar a página onde deseja adicionar seu conteúdo. Use o recurso Live Sample para criar seu conteúdo conforme desejar. Não se preocupe com a complexidade do código que você poderia escrever; apenas crie o que você precisa. Uma vez que o seu conteúdo esteja pronto, basta mudar para a visualização do código do editor e cercar seu código com um simples {{HTMLElement('div')}} elemento com a classe`escondida`. Ao fazê-lo, seu código não será exibido, mas sua amostra ao vivo permanece acessível e exibível.

### Vamos ver um exemplo simples:

Clique no seguinte quadrado para alterar aleatoriamente a cor ou simplesmente digitar uma cor de código hexadecimal

```html hidden
<div class="square">
  #<input class="color">
</div>
```

```css hidden
body {
  padding: 10px;
  margin : 0;
}

.square {
  width  : 80px;
  height : 80px;
  padding: 10px;
  background-color: black;
  color: white;
  text-align: center;
}

.color {
  width: 60px;
  text-transform: uppercase;
}
```

```js hidden
function setColor(color) {
  document.querySelector('.square').style.backgroundColor = '#' + color;
  document.querySelector('.color').value = color;
}

function getRandomColor() {
  var color = Math.floor(Math.random() * 16777215);
  return color.toString(16);
}

function getInputColor() {
  var value = document.querySelector('.color').value;
  var color = Number('0x' + color);
  if (color === +color) {
    return color.toString(16);
  }
  return value;
}

document.addEventListener('click', function () {
  setColor(getRandomColor());
});

document.addEventListener('keyup', function () {
  setColor(getInputColor());
});
```

{{EmbedLiveSample('hidden_code_example', 120, 120)}}

Se você olhar para o código HTML dessa página com o editor MDN, você verá o código HTML seguinte:

```html
<div class="moreinfo">
<p>Click on the following square to randomly change its color or just type an hexadecimal code color</p>

<div class="hidden">
<h4 id="hidden_code_example">hidden code example</h4>

<h5 id="HTML">HTML</h5>

<pre class="brush: html">
&lt;div class="square"&gt;
  #&lt;input class="color"&gt;
&lt;/div&gt;</pre>

<h5 id="CSS">CSS</h5>

<pre class="brush: css">
body {
  padding: 10px;
  margin : 0;
}

.square {
  width  : 80px;
  height : 80px;
  padding: 10px;
  background-color: black;
  color: white;
  text-align: center;
}

.color {
  width: 60px;
  text-transform: uppercase;
}
</pre>

<h5 id="JS">JS</h5>

<pre class="brush: js">
function setColor(color) {
  document.querySelector('.square').style.backgroundColor = '#' + color;
  document.querySelector('.color').value = color;
}

function getRandomColor() {
  var color = Math.floor(Math.random() * 16777215);
  return color.toString(16);
}

function getInputColor() {
  var value = document.querySelector('.color').value;
  var color = Number('0x' + color);
  if (color === +color) {
    return color.toString(16);
  }
  return value;
}

document.addEventListener('click', function () {
  setColor(getRandomColor());
});

document.addEventListener('keyup', function () {
  setColor(getInputColor());
});
</pre>
</div>

\{{EmbedLiveSample('hidden_code_example', 120, 120)}}
</div>
```

Você pode ver um exemplo mais avançado de tal ajuste sobre [a página API do Canvas.](/pt-BR/docs/Web/API/Canvas_API#JavaScript)

### Código de fora da página

O exemplo anterior está certo se você deseja incorporar conteúdo básico de aprendizagem ativa. No entanto, se você quiser lidar com um código complexo, pode tornar-se um pouco estranho para lidar com esse wrapper de classe `oculto`.

Então, outra opção e escreva o código do seu conteúdo de aprendizagem em uma página MDN e, em seguida, incorpora-lo em outra página. Para fazer isso, podemos usar o [EmbedDistLiveSample](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs) macro em vez de [EmbedLiveSample](https://github.com/mdn/yari/blob/main/kumascript/macros/EmbedLiveSample.ejs) macro.

Vamos ver como esse exemplo quando configurado como se estivesse sendo incorporado de uma origem remota:

Clique no seguinte quadrado para alterar aleatoriamente a cor ou simplesmente digitar uma cor de código hexadecimal

{{EmbedLiveSample('The_example', 120, 120, '', 'MDN/Contribute/Howto/Create_an_interactive_exercise_to_help_learning_the_web/distant_example')}}

Desta vez, [se você olhar para o HTML da página usando o editor MDN](/pt-BR/docs/MDN/Contribute/Editor/Source_mode) , você não está a ver o código oculto. Se você quiser ver o código, vá para uma [página que o hospeda.](/pt-BR/docs/MDN/Contribute/Howto/Create_an_interactive_exercise_to_help_learning_the_web/distant_example)

Você pode ver um exemplo mais avançado do uso em nosso [tutorial HTML Form](/pt-BR/docs/Web/Guide/HTML/Forms/How_to_build_custom_form_widgets) , que usa essa técnica para permitir uma experiência com formulários.
