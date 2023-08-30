---
title: mask
slug: Web/CSS/mask
---

{{CSSRef}}

## Resumo

A propriedade máscara no CSS permite aos usuários alterarem a visibilidade de um item parcialmente ou totalmente escondendo o item. Isso é obtido por qualquer mascaramento ou cortes na imagem em pontos específicos.

{{cssinfo}}

## Sintaxe

```css
/* Palavra-Chave */
mask: none;

/* Valor das Imagens */
mask: url(mask.png); /* Imagem bitmap usada da máscara */
mask: url(masks.svg#star); /* Elemento dentro do SVG usado como máscara */

/* Valores Combinados */
mask: url(masks.svg#star) luminance; /* Elemento dentro do SVG usado como máscara de luminância */
mask: url(masks.svg#star) 40px 20px; /* Elemento dentro do SVG usado como máscara posicionada 40px do topo e 20px da esquerda */
mask: url(masks.svg#star) 0 0/50px 50px; /* Elemento dentro do SVG usado como máscara com a largura e altura de 50px */
mask: url(masks.svg#star) repeat-x; /* Elemento dentro do SVG usado como máscara repedida horizontalmente */
mask: url(masks.svg#star) stroke-box; /* Elemento dentro do SVG usado como máscara extendendo-se até a caixa delimitada pela linha */
mask: url(masks.svg#star) exclude; /* Elemento dentro do SVG usado como máscara e combinado com o fundo usando partes que não se sobrepõem */

/* Valores Globais */
mask: inherit;
mask: initial;
mask: unset;
```

### Valores

Se o valor é um valor URI, o elemento apontado pelo URI é usado como uma máscara SVG.

{{csssyntax}}

## Exemplos

```css
.target {
  mask: url(#c1);
}

.anothertarget {
  mask: url(resources.svg#c1);
}
```

## Especificações

| Especificação                                               | Estado                 | Comentário                                                                                                                                                               |
| ----------------------------------------------------------- | ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName("CSS Masks", "#the-mask", 'mask')}}              | {{Spec2("CSS Masks")}} | Estende-se a sua utilização para elementos HTML. Estende sua sintaxe, tornando-a uma simplificação para as novas propriedades da `mask-*` definidos nessa especificação. |
| {{SpecName('SVG1.1', 'masking.html#MaskProperty', 'mask')}} | {{Spec2('SVG1.1')}}    | Definição inicial.                                                                                                                                                       |

## Compatibilidade com navegadores

{{Compat("css.properties.mask")}}

## Veja também

- {{Cssxref("clip-path")}}, {{Cssxref("filter")}}
- [Aplicanto efeitos SVG no conteúdo HTML](/pt-BR/docs/Applying_SVG_effects_to_HTML_content)
- [SVG](/pt-BR/docs/SVG)
