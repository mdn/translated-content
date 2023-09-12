---
title: opacity
slug: Web/CSS/opacity
---

{{CSSRef}}

## Sumário

A propriedade CSS **opacity** especifica a transparência de um elemento, isto é, o grau no qual o background atrás do elemento é sobreposto.

O valor aplica-se ao elemento como um todo, incluindo seu conteúdo, apesar de o valor não ser herdado por elementos filhos. Assim, um elemento e seus elementos filhos têm todos a mesma opacidade relativa ao background do elemento, mesmo se o elemento e seus elementos filhos tiverem opacidades diferentes entre si.

Se você [não quer aplicar a opacidade ao elemento filho](http://stackoverflow.com/questions/13508877/resetting-the-opacity-of-a-child-elements-maple-browser-samsung-tv-app) - use isto:

```css
background: rgba(0, 0, 0, 0.4);
```

Usando essa propriedade com um valor diferente de 1, o elemento é colocado em um novo [contexto de empilhamento](/pt-BR/docs/Web/Guide/CSS/Understanding_z_index/O_contexto_de_empilhamento).

{{cssinfo}}

## Sintaxe

```css
/* Totalmente opaco */
opacity: 1;
opacity: 1;

/* Translúcido */
opacity: 0.6;

/* Totalmente transparente */
opacity: 0;
opacity: 0;

/* Valores globais */
opacity: inherit;
opacity: initial;
opacity: unset;
```

### Valores

- `<number>`

  - : É um {{cssxref("number")}} no intervalo de 0.0 a 1.0, sendo estes incluídos, representando a opacidade do canal, que é o valor de seu canal alfa. Qualquer valor fora do intervalo, apesar de válido, é aproximado ao valor mais próximo dentro do intervalo.

    | Valor                                      | Significado                                                |
    | ------------------------------------------ | ---------------------------------------------------------- |
    | `0`                                        | O elemento é totalmente transparente (isto é, invisível).  |
    | Qualquer {{cssxref("number")}} entre 0 e 1 | O elemento é translúcido (isto é, o background é visível). |
    | `1`                                        | O elemento é totalmente opaco (sólido).                    |

### Sintaxe formal

{{csssyntax}}

## Exemplos

### Exemplo básico

```css
div {
  background-color: yellow;
}
.light {
  opacity: 0.2; /* Mal consegue ver o texto acima do background */
}
.medium {
  opacity: 0.5; /* Vê o texto mais claramente acima do background */
}
.heavy {
  opacity: 0.9; /* Vê o texto muito claramente acima do background */
}
```

```html
<div class="light">Você mal vê isso.</div>
<div class="medium">Isso é mais fácil de ver.</div>
<div class="heavy">Isso é muito fácil de ver.</div>
```

{{EmbedLiveSample('Basic_example', '640', '64')}}

### Opacidade diferente com `:hover`

```css
img.opacity {
  opacity: 1;
  filter: alpha(opacity=100); /* IE8 e anteriores */
  zoom: 1; /* Ativa "hasLayout" no IE 7 e anteriores */
}

img.opacity:hover {
  opacity: 0.5;
  filter: alpha(opacity=50);
  zoom: 1;
}
```

```html
<img
  src="//developer.mozilla.org/media/img/mdn-logo.png"
  alt="MDN logo"
  width="128"
  height="146"
  class="opacity" />
```

{{EmbedLiveSample('Different_opacity_with_hover', '150', '175')}}

## Especificações

| Especificação                                                  | Status                        | Comentário                    |
| -------------------------------------------------------------- | ----------------------------- | ----------------------------- |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'opacity')}} | {{Spec2('CSS3 Transitions')}} | Define opacity como animável. |
| {{SpecName('CSS3 Colors', '#opacity', 'opacity')}}             | {{Spec2('CSS3 Colors')}}      | Definição inicial.            |

## Compatibilidade com navegadores

{{Compat("css.properties.opacity")}}

## Veja também

- [MSDN Microsoft's filter:alpha(opacity=xx)](http://msdn.microsoft.com/en-us/library/ms532910%28VS.85%29.aspx)
