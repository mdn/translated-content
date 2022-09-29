---
title: max-width
slug: Web/CSS/max-width
tags:
  - CSS
  - Dimensões
  - Layout
  - Limites
  - Máximo
  - Propriedade CSS
  - Referencia
  - largura
  - max-width
  - receita:propriedade-css
  - tamanho
translation_of: Web/CSS/max-width
---
{{CSSRef}}A propriedade **`max-width`** do [CSS](/pt-BR/docs/CSS) estabelece a largura máxima de um elemento. Ele evita que o [valor usado](/pt-BR/docs/Web/CSS/used_value) da propriedade {{ cssxref("width") }} se torne maior que o valor especificado por `max-width`.{{EmbedInteractiveExample("pages/css/max-width.html")}}

`max-width` substitui {{cssxref("width")}}, mas {{cssxref("min-width")}} substitui `max-width`.

## Sintaxe

```css
/* <length> valor */
max-width: 3.5em;

/* <porcentagem> valor */
max-width: 75%;

/* Valores de keyword */
max-width: none;
max-width: max-content;
max-width: min-content;
max-width: fit-content;
max-width: fill-available;

/* Valores Globais */
max-width: inherit;
max-width: initial;
max-width: unset;
```

### Valores

- {{cssxref("&lt;length&gt;")}}
  - : Define a `max-width` como um valor absoluto.
- {{cssxref("&lt;percentage&gt;")}}
  - : Define a `max-width` como uma porcentagem da largura do bloco que o contém.

#### Valores Keyword

- `none`
  - : A largura não possui valor máximo. (padrão)
- `max-content` {{experimental_inline()}}
  - : A `max-width` intrínseca preferida.
- `min-content` {{experimental_inline()}}
  - : O mínimo `max-width` intrínseco.
- `fit-content({{cssxref("&lt;length-percentage&gt;")}})`
  - : Use a fórmula `fit-content` com o espaço disponível substituído pelo argumento especificado, i.e. `min(max-content, max(min-content, argumento)).`

#### Preocupações de Acessibilidade

Certifique-se que os elementos definidos com `max-width` não sejam truncados e/ou não obscureçam outros conteúdos quando a página for ampliada para aumentar o tamanho do texto.

- `fill-available` {{experimental_inline()}}
  - : A largura contida do bloco sem o margin, border e padding horizontal. (Note que alguns navegadores implementaram um nome antigo para essa keyword, `available`.)
- `fit-content` {{experimental_inline()}}
  - : O mesmo que `max-content.`

#### Sintaxe formal

{{csssyntax}}

#### Exemplos

### Definindo a largura máxima em pixels

Neste exemplo, o "filho" terá 150 pixels de largura ou a largura do "pai", o que for menor:

```html
<div id="pai">
  <div id="filho">
    Fusce pulvinar vestibulum eros, sed luctus ex lobortis quis.
  </div>
</div>
```

```css
#pai {
  background: lightblue;
  width: 300px;
}

#filho {
  background: gold;
  width: 100%;
  max-width: 150px;
}
```

#### Resultado

{{EmbedLiveSample("<code>Setting_max_width_in_pixels</code>", 350, 100)}}

O valor de `fit-content` pode ser usado para atribuir o comprimento de um elemento no tamanho intrínseco necessário pelo seu conteúdo:

```html
<div id="parent">
    <div id="child">
        Child Text
    </div>
</div>
```

```css
#parent {
  background: lightblue;
  width: 300px;
}

#child  {
  background: gold;
  width: 100%;
  max-width: -moz-fit-content;
  max-width: -webkit-fit-content;
}
```

{{EmbedLiveSample("fit-content-demo", 400, 100)}}

## Preocupações de acessibilidade

Garantir que os elementos atribuidos com `max-width` não estejam cortados e/ou não obscureça outro conteúdo quando a página é ampliada para aumentar o tamanho do texto.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/pt-BR/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

## Especificações

| Especificação                                                                                | Status                                   | Comentário                                                                                                                                                                                                                        |
| -------------------------------------------------------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{ SpecName('CSS3 Sizing', '#width-height-keywords', 'max-width') }} | {{ Spec2('CSS3 Sizing') }}     | Adiciona o `max-content`, `min-content`, `fit-content`, e `fill-available` keywords. _(Ambos CSS3 Box e CSS3 Writing Modes são rascunhos usados para definir essas keywords, mas foram substituídas por essa especificação._) |
| {{ SpecName('CSS3 Transitions', '#animatable-css', 'max-width') }}     | {{ Spec2('CSS3 Transitions') }} | Define `max-width` como animável.                                                                                                                                                                                                 |
| {{ SpecName('CSS2.1', 'visudet.html#min-max-widths', 'max-width') }} | {{ Spec2('CSS2.1') }}             | Definição inicial.                                                                                                                                                                                                                |

{{cssinfo}}

## Compatibilidade com navegadores

{{Compat("css.properties.max-width")}}

## Veja também

- {{ Cssxref("width") }}, {{ Cssxref("min-width") }}, {{ Cssxref("max-height") }}
- [The box model](/en/CSS/box_model), {{ Cssxref("box-sizing") }}
