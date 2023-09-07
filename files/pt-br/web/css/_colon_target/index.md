---
title: ":target"
slug: Web/CSS/:target
---

{{CSSRef}}

A [pseudo-classe CSS](/pt-BR/docs/Web/CSS/Pseudo-classes) **`:target`** representa um único elemento (o elemento alvo) com uma [`id`](/pt-BR/docs/Web/HTML/Global_attributes#id) correspondente ao fragmento da URL.

```css
/* Seleciona um elemento com a ID correspondente ao fragmento da URL */
:target {
  border: 2px solid black;
}
```

Por exemplo, a seguinte URL tem um fragmento (denotado pelo sinal de _#_) que aponta para o elemento chamado `section2`:

```
http://www.example.com/index.html#section2
```

O seguinte elemento será selecionado pelo seletor `:target` quando a URL for igual acima:

```html
<section id="section2">Exemplo</section>
```

## Sintaxe

{{csssyntax}}

## Exemplos

### Índice

A pseudo-classe `:target` pode ser usada para destacar uma parte da página que foi vinculada a partir de um índice.

#### HTML

```html
<h3>Índice</h3>
<ol>
  <li><a href="#p1">Ir para o primeiro parágrafo!</a></li>
  <li><a href="#p2">Ir para o segundo parágrafo!</a></li>
  <li>
    <a href="#vazio"
      >Esse link não vai pra lugar nenhum, pois, o alvo não existe</a
    >
  </li>
</ol>

<h3>Meu artigo divertido</h3>
<p id="p1">
  Você pode definir <i>este parágrafo</i> como alvo usando um fragmento de URL.
  Clique no link acima para experimentar!
</p>
<p id="p2">
  Esse é <i>outro parágrafo</i>, também acessável pelos links acima. Não é
  incrível?
</p>
```

#### CSS

```css
p:target {
  background-color: gold;
}

/* Adicione o pseudo-elemento dentro do elemento alvo */
p:target::before {
  font: 70% sans-serif;
  content: "►";
  color: limegreen;
  margin-right: 0.25em;
}

/* Estilize nos elementos em itálico dentro do elemento alvo  */
p:target i {
  color: red;
}
```

#### Resultado

{{EmbedLiveSample('A_table_of_contents', 500, 300)}}

### Lightbox com CSS puro

Você pode usar a pseudo-classe `:target` para criar uma lightbox sem usar JavaScript. Essa técnica requer que os links apontem para os elementos que inicialmente estavam escondidas na página. Uma vez designado, o CSS muda o `display` então, assim o conteúdo pode ser mostrado.

> **Nota:** Uma lightbox com CSS puro mais completo usando a pseudo-classe `:target` [está disponível no GitHub](https://github.com/madmurphy/takefive.css/) ([demo](https://madmurphy.github.io/takefive.css/)).

#### HTML

```html
<ul>
  <li><a href="#example1">Abrir exemplo #1</a></li>
  <li><a href="#example2">Abrir exemplo #2</a></li>
</ul>

<div class="lightbox" id="example1">
  <figure>
    <a href="#" class="close"></a>
    <figcaption>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis enim,
      placerat id eleifend eu, semper vel sem.
    </figcaption>
  </figure>
</div>

<div class="lightbox" id="example2">
  <figure>
    <a href="#" class="close"></a>
    <figcaption>
      Cras risus odio, pharetra nec ultricies et, mollis ac augue. Nunc et diam
      quis sapien dignissim auctor. Quisque quis neque arcu, nec gravida magna.
    </figcaption>
  </figure>
</div>
```

#### CSS

```css
/* Lightbox fechado */
.lightbox {
  display: none;
}

/* Lightbox aberto */
.lightbox:target {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Conteúdo da lightbox */
.lightbox figcaption {
  width: 25rem;
  position: relative;
  padding: 1.5em;
  background-color: lightpink;
}

/* Botão fechar */
.lightbox .close {
  position: relative;
  display: block;
}

.lightbox .close::after {
  right: -1rem;
  top: -1rem;
  width: 2rem;
  height: 2rem;
  position: absolute;
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 50%;
  color: white;
  content: "×";
  cursor: pointer;
}

/* Lightbox overlay */
.lightbox .close::before {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  content: "";
  cursor: default;
}
```

#### Resultado

{{EmbedLiveSample('Pure-CSS_lightbox', 500, 220)}}

## Especificações

| Especificações                                                          | Status                      | Comentário                           |
| ----------------------------------------------------------------------- | --------------------------- | ------------------------------------ |
| {{SpecName("HTML WHATWG", "browsers.html#selector-target", ":target")}} | {{Spec2("HTML WHATWG")}}    | Define semântica específica do HTML. |
| {{SpecName("CSS4 Selectors", "#the-target-pseudo", ":target")}}         | {{Spec2("CSS4 Selectors")}} | Não há mudanças.                     |
| {{SpecName("CSS3 Selectors", "#target-pseudo", ":target")}}             | {{Spec2("CSS3 Selectors")}} | Definição inicial.                   |

## Navegadores compatíveis

{{Compat("css.selectors.target")}}

## Veja também

- [Usando a pseudo-classe :target em seletores.](/pt-BR/docs/Web/CSS/CSS_Selectors/Using_the_%3Atarget_pseudo-class_in_selectors)
