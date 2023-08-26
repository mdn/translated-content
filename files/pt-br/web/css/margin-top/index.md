---
title: margin-top
slug: Web/CSS/margin-top
---

{{CSSRef}}

## Sumário

![The effect of the CSS margin-top property on the element box](/files/4101/margin-top.svg)A propriedade CSS **`margin-top`** de um elemento indica o espaço acima do elemento. Valores negativos são aceitos.

Essa propriedade não tem efeito em _elementos non-replaced_ inline elements, como {{HTMLElement("tt")}} ou {{HTMLElement("span")}}.

{{cssinfo}}

## Sintaxe

```css
/* Valores <length> */
margin-top: 10px; /* An absolute length */
margin-top: 1em; /* A length relative to the text size */
margin-top: 5%; /* A margin relative to the nearest block container's width */

/* Valores padrão */
margin-top: auto;

/* Valores globais */
margin-top: inherit;
margin-top: initial;
margin-top: unset;
```

### Valores

- `<length>`
  - : Especifica um tamanho fixo. Veja {{cssxref("&lt;length&gt;")}} para possíveis valores.
- `<porcentagem>`
  - : Um {{cssxref("&lt;percentage&gt;")}} sempre relativo ao **width** do bloco.
- `auto`
  - : Veja {{cssxref("margin")}}.

### Sintaxe formal

{{csssyntax}}

## Exemplos

```css
.content {
  margin-top: 5%;
}
.sidebox {
  margin-top: 10px;
}
.logo {
  margin-top: -5px;
}
#footer {
  margin-top: 1em;
}
```

## Especificações

| Especificação                                                      | Status                        | Comentário                              |
| ------------------------------------------------------------------ | ----------------------------- | --------------------------------------- |
| {{SpecName('CSS3 Box', '#the-margin', 'margin-top')}}              | {{Spec2('CSS3 Box')}}         | Sem mudança significativa.              |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'margin-top')}}  | {{Spec2('CSS3 Transitions')}} | Define `margin-top` como animável.      |
| {{SpecName('CSS2.1', 'box.html#margin-properties', 'margin-top')}} | {{Spec2('CSS2.1')}}           | Remove esse efeito em elementos inline. |
| {{SpecName('CSS1', '#margin-top', 'margin-top')}}                  | {{Spec2('CSS1')}}             | Definição inicial.                      |

## Compatibilidade de navegadores

{{Compat("css.properties.margin-top")}}
