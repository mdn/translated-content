---
title: scrollbar-color
slug: Web/CSS/scrollbar-color
---

{{CSSRef}}{{SeeCompatTable}}

A propriedade [CSS](/pt-BR/docs/Web/CSS) **`scrollbar-color`** define as cores da barra de rolagem do navegador.

**Track** refere-se ao fundo da barra de rolagem, que normalmente é fixa, independente da posição da página.

**Thumb** refere-se a parte móvel da barra de rolagem, um botão auxiliar que flutua acima da **Track**.

{{CSSInfo}}

## Sintaxe

```css
/* Palavras reservadas */
scrollbar-color: auto;
scrollbar-color: dark;
scrollbar-color: light;

/* Nomes de <color> */
scrollbar-color: rebeccapurple green; /* Duas cores válidas.
O primeiro valor aplica-se ao Thumb, o segundo ao Track */

/* Valores globais */
scrollbar-color: inherit;
scrollbar-color: initial;
scrollbar-color: unset;
```

### Valores

- `<scrollbar-color>`

  - : Define a cor da scrollbar.

    | `auto`            | Valor padrão de renderização do background da scrollbar (Track), caso não sejam definidos outros valores.                   |
    | ----------------- | --------------------------------------------------------------------------------------------------------------------------- |
    | `dark`            | Mostra uma scrollbar mais escura, podendo ser um estilo padrão definido pelo navegador, ou personalizado com cores escuras. |
    | `light`           | Mostra uma scrollbar mais clara, podendo ser um estilo padrão definido pelo navegador, ou personalizado com cores escuras.  |
    | `<color> <color>` | A primeira cor é aplicada à **thumb**, a segunda cor ao **track**                                                           |

    > **Nota:** User Agents must apply any `scrollbar-color` value set on the root element to the viewport.

### Sintaxe formal

{{CSSSyntax}}

## Exemplo

### CSS

```css
.scroller {
  width: 300px;
  height: 100px;
  overflow-y: scroll;
  scrollbar-color: rebeccapurple green;
}
```

### HTML

```html
<div class="scroller">
  Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
  daikon amaranth tatsoi tomatillo melon azuki bean garlic. Gumbo beet greens
  corn soko endive gumbo gourd. Parsley shallot courgette tatsoi pea sprouts
  fava bean collard greens dandelion okra wakame tomato. Dandelion cucumber
  earthnut pea peanut soko zucchini.
</div>
```

### Result

{{EmbedLiveSample("Example")}}

## Cuidados de acessibilidade

When using `scrollbar-color` property with specific color values, authors should ensure the specified colors have enough contrast between them. For keyword values, UAs should ensure the colors they use have enough contrast. See [Techniques for WCAG 2.0: G183: Using a contrast ratio of 3:1](https://www.w3.org/TR/WCAG20-TECHS/G183.html).

## Especificações

| Specification                                                         | Status                      | Comment             |
| --------------------------------------------------------------------- | --------------------------- | ------------------- |
| {{SpecName("CSS Scrollbars", "#scrollbar-color", "scrollbar-color")}} | {{Spec2("CSS Scrollbars")}} | Initial definition. |

## Compatibilidade com navegadores

{{Compat("css.properties.scrollbar-color")}}
