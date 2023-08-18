---
title: font-family
slug: Web/CSS/font-family
---

{{CSSRef}}

## Resumo

A propriedade `font-family do` CSS permite que se faça uma lista de prioridades de familias de fontes e/ou nomes genéricos de famílias a serem especificados para um elemento selecionado. Ao contrário da maioria das demais propriedades CSS, os valores são separados por vírgula para indicar quais são as alternativas. O Browser irá utilizar a primeira fonte da lista que for encontrada no computador, ou poderá fazer o dowload utilizando a informação contida na regra {{cssxref("@font-face")}}.

Programadores WEB devem sempre adicionar pelo menos uma família genérica para a lista de `font-family`, já que não há garantia que aquela fonte específica está instalada no computador, ou possa ser baixada pela regra {{cssxref("@font-face")}}. A família genérica permite o browser selecionar uma fonte aceita pelo computador, quando necessário.

É também conveniente usar de antemão a propriedade {{cssxref("font")}} para definir a `font-size` e outras propriedades relacionadas a fonte todas de uma só vez.

> **Nota:** A propriedade `font-family` especifica a lista de fontes, da prioridade mais alta para a mais baixa.```
> A seleção de fontes não para simplesmente na primeira fonte nomeada na lista que está no sistema do usuário. Em vez disso, a seleção de fontes é feita um caractere de cada vez, para que, se uma fonte disponível não tiver um glifo que possa exibir um caracter necessário, as fontes disponíveis mais tarde sejam tentadas. No entanto, isso não funciona no Internet Explorer 6 ou anterior.
>
> Quando uma fonte está disponível apenas em alguns estilos, variantes ou tamanhos, essas propriedades também podem influenciar qual família de fontes é escolhida.
>
> ```
>
> ```

{{cssinfo}}

## Syntax

```
Formal syntax: {{csssyntax("font-family")}}
```

```
font-family: Gill Sans Extrabold, sans-serif
font-family: "Goudy Bookletter 1911", sans-serif

font-family: sans-serif
font-family: serif
font-family: fantasy
font-family: cursive
font-family: monospace

font-family: inherit
```

### Valores

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>&#x3C;family-name></code></td>
      <td>
        O nome de uma fonte. Por exemplo, "Times" e "Helvetica" são font
        families. Nomes de fonte-família contém espaços em branco para serem
        citados..
      </td>
    </tr>
    <tr>
      <td><code>&#x3C;generic-name></code></td>
      <td>
        <p>
          Generic font families are a fallback mechanism, a means of preserving
          some of the style sheet author's intent in case when none of the
          specified fonts are available. Generic family names are keywords and
          must not be quoted. A generic font family should be the a last
          alternative in the list of font family names.
        </p>
        <dl>
          <dt><code>serif</code></dt>
          <dd
            style="font-family: Palatino,&#x22;Palatino Linotype&#x22;,Palladio,&#x22;URW Palladio&#x22;,serif;"
          >
            Glyphs have finishing strokes, flared or tapering ends, or have
            actual serifed endings.<br />E.g. Palatino, "Palatino Linotype",
            Palladio, "URW Palladio", serif
          </dd>
          <dt><code>sans-serif</code></dt>
          <dd
            style="font-family: &#x22;Trebuchet MS&#x22;,&#x22;Liberation Sans&#x22;,&#x22;Nimbus Sans L&#x22;,sans-serif;"
          >
            Glyphs have stroke endings that are plain.<br />E.g. 'Trebuchet MS',
            'Liberation Sans', 'Nimbus Sans L', sans-serif
          </dd>
          <dt><code>monospace</code></dt>
          <dd
            style="font-family: &#x22;DejaVu Sans Mono&#x22;, Menlo, Consolas, &#x22;Liberation Mono&#x22;, Monaco, &#x22;Lucida Console&#x22;, monospace;"
          >
            All glyphs have the same fixed width.<br />E.g. "DejaVu Sans Mono",
            Menlo, Consolas, "Liberation Mono", Monaco, "Lucida Console",
            monospace
          </dd>
          <dt><code>cursive</code></dt>
          <dd>
            Glyphs in cursive fonts generally have either joining strokes or
            other cursive characteristics beyond those of italic typefaces. The
            glyphs are partially or completely connected, and the result looks
            more like handwritten pen or brush writing than printed letterwork.
          </dd>
          <dt><code>fantasy</code></dt>
          <dd>
            Fantasy fonts are primarily decorative fonts that contain playful
            representations of characters.
          </dd>
        </dl>
      </td>
    </tr>
  </tbody>
</table>

### Valid family names

Font family names must either be given quoted as strings, or unquoted as a sequence of one or more identifiers. This means that punctuation characters and digits at the start of each token must be escaped in unquoted font family names.

For example, the following declarations are valid:

```
font-family: Gill Sans Extrabold, sans-serif;
font-family: "Goudy Bookletter 1911", sans-serif;
```

The following declarations are **invalid**:

```
font-family: Goudy Bookletter 1911, sans-serif;
font-family: Red/Black, sans-serif;
font-family: "Lucida" Grande, sans-serif;
font-family: Ahem!, sans-serif;
font-family: test@foo, sans-serif;
font-family: #POUND, sans-serif;
font-family: Hawaii 5-0, sans-serif;
```

## Examples

### Example 1

```css
body {
  font-family: "Gill Sans Extrabold", Helvetica, sans-serif;
}

.receipt {
  font-family: Courier, "Lucida Console", monospace;
}
```

### Example 2

```css
.exampleserif {
  font-family: Times, "Times New Roman", Georgia, serif;
}

.examplesansserif {
  font-family: Verdana, Arial, Helvetica, sans-serif;
}

.examplemonospace {
  font-family: "Lucida Console", Courier, monospace;
}

.examplecursive {
  font-family: cursive;
}

.examplefantasy {
  font-family: fantasy;
}
```

```html
<div class="exampleserif">This is an example of a serif font.</div>

<div class="examplesansserif">This is an example of a sans-serif font.</div>

<div class="examplemonospace">This is an example of a monospace font.</div>

<div class="examplecursive">This is an example of a cursive font.</div>

<div class="examplefantasy">This is an example of a fantasy font.</div>
```

#### Live Sample

{{ EmbedLiveSample('Example_2','600','120') }}

## Specifications

| Specification                                                           | Status                  | Comment               |
| ----------------------------------------------------------------------- | ----------------------- | --------------------- |
| {{SpecName('CSS3 Fonts', '#font-family-prop', 'font-family')}}          | {{Spec2('CSS3 Fonts')}} | No significant change |
| {{SpecName('CSS2.1', 'fonts.html#propdef-font-family', 'font-family')}} | {{Spec2('CSS2.1')}}     | No significant change |
| {{SpecName('CSS1', '#font-family', 'font-familiy')}}                    | {{Spec2('CSS1')}}       | Initial definition    |

## Browser compatibility

{{Compat("css.properties.font-family")}}
