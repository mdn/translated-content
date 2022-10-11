---
title: Como CSS é estruturado
slug: Learn/CSS/First_steps/How_CSS_is_structured
translation_of: Learn/CSS/First_steps/How_CSS_is_structured
original_slug: Learn/CSS/First_steps/Como_CSS_e_estruturado
---
{{LearnSidebar}}{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}

Agora que você tem uma ideia sobre o que é o CSS e seu uso basico, é hora de olhar um pouco mais a fundo das estruturas da linguagem em si. Nós ja conhecemos muitos conceitos discutidos aqui, entretanto, você pode voltar para qualquer um em específico, se achar algum dos proximos conceitos um tanto confuso

<table class="learn-box standard-table">
  <tbody>
    <tr>
      <th scope="row">Pré-requisitos:</th>
      <td>
        Conceitos básicos de computação,
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Installing_basic_software"
          >softwares básicos instalados</a
        >, conhecimentos básicos de
        <a
          href="https://developer.mozilla.org/en-US/Learn/Getting_started_with_the_web/Dealing_with_files"
          >operação com arquivos</a
        >, básico de HTML (veja
        <a href="/en-US/docs/Learn/HTML/Introduction_to_HTML"
          >Introdução ao HTML</a
        >), e uma ideia de
        <a href="/en-US/docs/Learn/CSS/Introduction_to_CSS/How_CSS_works"
          >Como funciona o CSS</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Objetivo:</th>
      <td>Aprender as estruturas da sintaxe básica do CSS em detalhes.</td>
    </tr>
  </tbody>
</table>

## Aplicando CSS no seu HTML

A primeira coisa que você vai olhar é, os três métodos de aplicação do CSS em um documento.

### Folha de Estilos Externa

Em [Começando com o CSS](/pt-BR/docs/Aprender/Getting_started_with_the_web/CSS_basico) nós linkamos uma folha de estilos externas em nossa página. Isso é o metodo mias comum utilizado para juntar CSS em um documento, podendo utilizar tal método em multiplas páginas, permitindo você estillizar todas as páginas como as mesmas folha de estilos. Na maioria dos casos, as diferentes páginas do site vão parecer bem iguais entre si e por isso você pode usar as mesmas regras para o estilo padrão da página.

`Uma folha de estilos externa é quando você tem seu CSS escrito em um arquivo separado com uma extensão .css`, e você o refere dentro de um elemento `<link>` do HTML:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first CSS example</p>
  </body>
</html>
```

O arquivo CSS deve se parecer com algo nesse estilo:

```css
h1 {
  color: blue;
  background-color: yellow;
  border: 1px solid black;
}

p {
  color: red;
}
```

O atributo `href` do elemento {{htmlelement("link")}}, precisa fazer referência a um arquivo em nosso sistema de arquivos.

No exemplo abaixo, o arquivo CSS está na mesma pasta que o documento HTML, mas você pode colocá-lo em outro lugar e reajustar o caminho marcado para encontrá-lo, como a seguir:

```html
<!-- Inside a subdirectory called styles inside the current directory -->
<link rel="stylesheet" href="styles/style.css">

<!-- Inside a subdirectory called general, which is in a subdirectory called styles, inside the current directory -->
<link rel="stylesheet" href="styles/general/style.css">

<!-- Go up one directory level, then inside a subdirectory called styles -->
<link rel="stylesheet" href="../styles/style.css">
```

### Folha de estilos interna

Uma folha de estilos interna é usada quando você não tem um arquivo CSS externo, mas, ao contrário, coloca seu CSS dentro de elemento {{htmlelement("style")}} localizado no {{htmlelement("head")}} do documento HTML.

Deste modo, seu HTML se parecerá assim:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
    <style>
      h1 {
        color: blue;
        background-color: yellow;
        border: 1px solid black;
      }

      p {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Hello World!</h1>
    <p>This is my first CSS example</p>
  </body>
</html>
```

Isso pode ser útil em algumas circunstâncias (talvez você esteja trabalhando em um sistema de gerenciamento de conteúdo - CMS - onde não tem permissão para modificar diretamente os arquivos CSS), entretanto isso não é tão eficiente quanto o uso de folhas de estilo externas — em um website, o CSS precisaria ser repetido em todas as páginas e atualizado em vários locais sempre que mudanças fossem necessárias.

### Estilos inline

Estilos inline são declarações CSS que afetam apenas um determinado elemento, inserido em um atributo `style`:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>My CSS experiment</title>
  </head>
  <body>
    <h1 style="color: blue;background-color: yellow;border: 1px solid black;">Hello World!</h1>
    <p style="color:red;">This is my first CSS example</p>
  </body>
</html>
```

**Por favor, não utilize isso a menos que seja estritamente necessário!** É péssimo para manutenção (você precisará atualizar a mesma informação diversas vezes em cada documento), além do que, mistura sua informação de estilização do CSS com sua informação de estrutura HTML, tornando seu código de difícil leitura e compreensão. Manter diferentes tipos de código separados torna o trabalho muito mais fácil para todos os que trabalham no código.

Existem alguns lugares onde o estilo embutido é mais comum, ou mesmo aconselhável. Você pode ter que recorrer ao uso deles se seu ambiente de trabalho for realmente restritivo (talvez o seu CMS permita apenas que você edite o corpo do HTML). Você também os verá sendo muito usados em e-mails em HTML de modo a obter compatibilidade com o maior número possível de clientes de e-mail.

## Playing with the CSS in this article

There is a lot of CSS to play with in this article. To do so, we'd recommend creating a new directory/folder on your computer, and inside it creating a copy of the following two files:

index.html:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <title>My CSS experiments</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>

    <p>Create your test HTML here</p>

  </body>
</html>
```

styles.css:

```css
/* Create your test CSS here */

p {
  color: red;
}
```

Then, when you come across some CSS you want to experiment with, replace the HTML `<body>` contents with some HTML to style, and start adding CSS to style it inside your CSS file.

If you are not using a system where you can easily create files, you can instead use the interactive editor below to experiment.

{{EmbedGHLiveSample("css-examples/learn/getting-started/experiment-sandbox.html", '100%', 800)}}

Read on, and have fun!

## Seletores

Não é possível falar de CSS sem conhecer os seletores, e nós já descobrimos vários tipos diferentes no tutorial Começando com o Css. Um seletor é o modo pelo qual nós apontamos para alguma coisa no nosso documento HTML para aplicar os estilos à ela. Se os seus estilos não forem aplicados, então é provável que o seu seletor não esteja ligado aquilo que você pensa que ele deveria.

Each CSS rule starts with a selector or a list of selectors in order to tell the browser which element or elements the rules should apply to. All of the following are examples of valid selectors, or lists of selectors.

```css
h1
a:link
.manythings
#onething
*
.box p
.box p:first-child
h1, h2, .intro
```

**Try creating some CSS rules that use the above selectors, and some HTML to be styled by them. If you don't know what some of the above syntax means, try searching for it on MDN!**

> **Nota:** You will learn a lot more about selectors in our [CSS selectors](/pt-BR/docs/Learn/CSS/Building_blocks/Selectors) tutorials, in the next module.

### Specificity

There will often be scenarios where two selectors could select the same HTML element. Consider the stylesheet below where I have a rule with a `p` selector that will set paragraphs to blue, and also a class that will set selected elements red.

```css
.special {
  color: red;
}

p {
  color: blue;
}
```

Let's say that in our HTML document we have a paragraph with a class of `special`. Both rules could apply, so which one wins? What color do you think our paragraph will become?

```html
<p class="special">What color am I?</p>
```

The CSS language has rules to control which rule will win in the event of a collision — these are called **cascade** and **specificity**. In the below code block we have defined two rules for the `p` selector, but the paragraph ends up being colored blue. This is because the declaration that sets it to blue appears later in the stylesheet, and later styles override earlier ones. This is the cascade in action.

```css
p {
  color: red;
}

p {
  color: blue;
}
```

However, in the case of our earlier block with the class selector and the element selector, the class will win, making the paragraph red — even thought it appears earlier in the stylesheet. A class is described as being more specific, or having more specificity than the element selector, so it wins.

**Try the above experiment for yourself — add the HTML to your experiment, then add the two `p { ... }` rules to your stylesheet. Next, change the first `p` selector to `.special` to see how it changes the styling.**

The rules of specificity and the cascade can seem a little complicated at first and are easier to understand once you have built up further CSS knowledge. In our [Cascade and inheritance](/pt-BR/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance) article, which you'll get to in the next module, I'll explain this in detail, including how to calculate specificity. For now, remember that this exists, and that sometimes CSS might not apply like you expect it to because something else in your stylesheet has a higher specificity. Identifying that more than one rule could apply to an element is the first step in fixing such issues.

## Propriedades e valores

At its most basic level, CSS consists of two building blocks:

- **Properties**: Human-readable identifiers that indicate which stylistic features (e.g. [`font-size`](/en-US/docs/Web/CSS/font-size), [`width`](/en-US/docs/Web/CSS/width), [`background-color`](/en-US/docs/Web/CSS/background-color)) you want to change.
- **Values**: Each specified property is given a value, which indicates how you want to change those stylistic features (e.g. what you want to change the font, width or background color to.)

The below image highlights a single property and value. The property name is `color`, and the value `blue`.

![A declaration highlighted in the CSS](https://mdn.mozillademos.org/files/16498/declaration.png)

A property paired with a value is called a _CSS declaration_. CSS declarations are put within _CSS Declaration Blocks_. This next image shows our CSS with the declaration block highlighted.

![A highlighted declaration block](https://mdn.mozillademos.org/files/16499/declaration-block.png)

Finally, CSS declaration blocks are paired with _selectors_ to produce _CSS Rulesets_ (or _CSS Rules_). Our image contains two rules, one for the `h1` selector and one for the `p` selector. The rule for `h1` is highlighted.

![The rule for h1 highlighted](https://mdn.mozillademos.org/files/16500/rules.png)

Setting CSS properties to specific values is the core function of the CSS language. The CSS engine calculates which declarations apply to every single element of a page in order to appropriately lay it out and style it. What is important to remember is that both properties and values are case-sensitive in CSS. The property and value in each pair is separated by a colon (`:`).

**Try looking up different values of the following properties, and writing CSS rules that apply them to different HTML elements:**

- **{{cssxref("font-size")}}**
- **{{cssxref("width")}}**
- **{{cssxref("background-color")}}**
- **{{cssxref("color")}}**
- **{{cssxref("border")}}**

> **Aviso:** **Important**: If a property is unknown or if a value is not valid for a given property, the declaration is deemed _invalid_ and is completely ignored by the browser's CSS engine.

> **Aviso:** **Important**: In CSS (and other web standards), US spelling has been agreed on as the standard to stick to where language uncertainty arises. For example, `color` should _always_ be spelled `color`. `colour` won't work.

### Functions

While most values are relatively simple keywords or numeric values, there are some possible values which take the form of a function. An example would be the `calc()` function. This function allows you to do simple math from within your CSS, for example:

```html
<div class="outer"><div class="box">The inner box is 90% - 30px.</div></div>
```

```css
.outer {
  border: 5px solid black;
}

.box {
  padding: 10px;
  width: calc(90% - 30px);
  background-color: rebeccapurple;
  color: white;
}
```

This renders like so:

{{EmbedLiveSample('calc_example', '100%', 200)}}

A function consists of the function name, and then some brackets into which the allowed values for that function are placed. In the case of the `calc()` example above I am asking for the width of this box to be 90% of the containing block width, minus 30 pixels. This isn't something I can calculate ahead of time and just enter the value into the CSS, as I don't know what 90% will be. As with all values, the relevant page on MDN will have usage examples so you can see how the function works.

Another example would be the various values for {{cssxref("transform")}}, such as `rotate()`.

```html
<div class="box"></div>
```

```css
.box {
  margin: 30px;
  width: 100px;
  height: 100px;
  background-color: rebeccapurple;
  transform: rotate(0.8turn)
}
```

The output from the above code looks like this:

{{EmbedLiveSample('transform_example', '100%', 200)}}

**Try looking up different values of the following properties, and writing CSS rules that apply them to different HTML elements:**

- **{{cssxref("transform")}}**
- **{{cssxref("background-image")}}, in particular gradient values**
- **{{cssxref("color")}}, in particular rgb/rgba/hsl/hsla values**

## @rules

As yet, we have not encountered [`@rules`](/en-US/docs/Web/CSS/At-rule) (pronounced "at-rules"). These are special rules giving CSS some instruction on how to behave. Some `@rules` are simple with the rule name and a value. For example, to import an additional stylesheet into your main CSS stylesheet you can use `@import`:

```css
@import 'styles2.css';
```

One of the most common `@rules` you will come across is `@media`, which allows you to use [media queries](/pt-BR/docs/Web/CSS/Media_Queries) to apply CSS only when certain conditions are true (e.g. when the screen resolution is above a certain amount, or the screen is wider than a certain width).

In the below CSS, we have a stylesheet that gives the `<body>` element a pink background color. However, we then use `@media` to create a section of our stylesheet that will only be applied in browsers with a viewport wider than 30em. If the browser is wider than 30em then the background color will be blue.

```css
body {
  background-color: pink;
}

@media (min-width: 30em) {
  body {
    background-color: blue;
  }
}
```

You will encounter other `@rules` throughout these tutorials.

**See if you can add a media query to your CSS that changes styles based on the viewport width. Change the width of your browser window to see the result.**

## Shorthands

Some properties like {{cssxref("font")}}, {{cssxref("background")}}, {{cssxref("padding")}}, {{cssxref("border")}}, and {{cssxref("margin")}} are called **shorthand properties** — this is because they allow you to set several property values in a single line, saving time and making your code neater in the process.

For example, this line:

```css
/* In 4-value shorthands like padding and margin, the values are applied
   in the order top, right, bottom, left (clockwise from the top). There are also other
   shorthand types, for example 2-value shorthands, which set padding/margin
   for top/bottom, then left/right */
padding: 10px 15px 15px 5px;
```

Does the same thing as all these together:

```css
padding-top: 10px;
padding-right: 15px;
padding-bottom: 15px;
padding-left: 5px;
```

Whereas this line:

```css
background: red url(bg-graphic.png) 10px 10px repeat-x fixed;
```

Does the same thing as all these together:

```css
background-color: red;
background-image: url(bg-graphic.png);
background-position: 10px 10px;
background-repeat: repeat-x;
background-scroll: fixed;
```

We won't attempt to teach these exhaustively now — you'll come across many examples later on in the course, and you are advised to look up the shorthand property names in our [CSS reference](/pt-BR/docs/Web/CSS/Reference) to find out more.

**Try adding the above declarations to your CSS to see how it affects the styling of your HTML. Try experimenting with some different values.**

> **Aviso:** While shorthands often allow you to miss out values, they will then reset any values that you do not include to their initial values. This ensures that a sensible set of values are used. However, this might be confusing if you were expecting the shorthand to only change the values you passed in.

## Comments

As with HTML, you are encouraged to make comments in your CSS, to help you understand how your code works when coming back to it after several months, and to help others coming to the code to work on it understand it.

Comments in CSS begin with `/*` and end with `*/`. In the below code block I have used comments to mark the start of different distinct code sections. This is useful to help you navigate your codebase as it gets larger — you can search for the comments in your code editor.

```css
/* Handle basic element styling */
/* -------------------------------------------------------------------------------------------- */
body {
  font: 1em/150% Helvetica, Arial, sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  /* Let's special case the global font size. On large screen or window,
     we increase the font size for better readability */
  body {
    font-size: 130%;
  }
}

h1 {font-size: 1.5em;}

/* Handle specific elements nested in the DOM  */
/* -------------------------------------------------------------------------------------------- */
div p, #id:first-line {
  background-color: red;
  background-style: none
}

div p{
  margin: 0;
  padding: 1em;
}

div p + p {
  padding-top: 0;
}
```

Comments are also useful for temporarily _commenting out_ certain parts of the code for testing purposes, for example if you are trying to find which part of your code is causing an error. In the next example I have commented out the rules for the `.special` selector.

```css
/*.special {
  color: red;
}*/

p {
  color: blue;
}
```

**Add some comments to your CSS, to get used to using them.**

## Whitespace

White space means actual spaces, tabs and new lines. In the same manner as HTML, the browser tends to ignore much of the whitespace inside your CSS; a lot of the whitespace is just there to aid readability.

In our first example below we have each declaration (and rule start/end) on its own line — this is arguably a good way to write CSS, as it makes it easy to maintain and understand:

```css
body {
  font: 1em/150% Helvetica, Arial, sans-serif;
  padding: 1em;
  margin: 0 auto;
  max-width: 33em;
}

@media (min-width: 70em) {
  body {
    font-size: 130%;
  }
}

h1 {
  font-size: 1.5em;
}

div p,
#id:first-line {
  background-color: red;
  background-style: none
}

div p {
  margin: 0;
  padding: 1em;
}

div p + p {
  padding-top: 0;
}
```

You could write exactly the same CSS like so, with most of the whitespace removed — this is functionally identical to the first example, but I'm sure you'll agree that it is somewhat harder to read:

```css
body {font: 1em/150% Helvetica, Arial, sans-serif; padding: 1em; margin: 0 auto; max-width: 33em;}
@media (min-width: 70em) { body {font-size: 130%;} }

h1 {font-size: 1.5em;}

div p, #id:first-line {background-color: red; background-style: none}
div p {margin: 0; padding: 1em;}
div p + p {padding-top: 0;}
```

The code layout you choose is usually a personal preference, although when you start to work in teams, you may find that the existing team has its own styleguide that specifies an agreed convention to follow.

The whitespace you do need to be careful of in CSS is the whitespace between the properties and their values. For example, the following declarations are valid CSS:

```css
margin: 0 auto;
padding-left: 10px;
```

But the following are invalid:

```css
margin: 0auto;
padding- left: 10px;
```

`0auto` is not recognised as a valid value for the `margin` property (`0` and `auto` are two separate values,) and the browser does not recognise `padding-` as a valid property. So you should always make sure to separate distinct values from one another by at least a space, but keep property names and property values together as single unbroken strings.

**Try playing with whitespace inside your CSS, to see what breaks things and what doesn't.**

## What's next?

It's useful to understand a little about how the browser takes your HTML and CSS and turns it into a webpage, so in the next article — [How CSS works](/pt-BR/docs/Learn/CSS/First_steps/How_CSS_works) — we will take a look at that process.

{{PreviousMenuNext("Learn/CSS/First_steps/Getting_started", "Learn/CSS/First_steps/How_CSS_works", "Learn/CSS/First_steps")}}

## Neste módulo

1. [O que é CSS?](/pt-BR/docs/Learn/CSS/First_steps/What_is_CSS)
2. [Começando com CSS](/pt-BR/docs/Learn/CSS/First_steps/Getting_started)
3. [Como o CSS é estruturad](/pt-BR/docs/Learn/CSS/First_steps/How_CSS_is_structured)o
4. [Como o CSS funciona](/pt-BR/docs/Learn/CSS/First_steps/How_CSS_works)
5. [Usando seu novo conhecimento](/pt-BR/docs/Learn/CSS/First_steps/Using_your_new_knowledge)
