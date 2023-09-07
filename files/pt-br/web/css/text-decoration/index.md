---
title: text-decoration
slug: Web/CSS/text-decoration
---

{{CSSRef}}

## Resumo

A propriedade **`text-decoration`** do CSS é usada para definir a formatação de `underline`, `overline`, `line-through` ou `blink`. As decorações underline e overline são posicionadas abaixo e acima do texto (respectivamente), e line-through cortando-o.

A propriedade text-decoration desenha em elementos descendentes. Isso significa que não é possivel desabilitar em um descendente uma decoração que foi especificada em um de seus antecessores. Por exemplo, no markup `<p>Esse texto tem <em>alguns elementos enfatizados</em> nele.</p>`, a regra de estilo `p { text-decoration: underline; }` faria com que todo o parágrafo fosse sublinhado. A regra `em { text-decoration: none; }` não causaria qualquer mudanca; o parágrafo inteiro ainda estaria sublinhado. Entretanto, a regra `em { text-decoration: overline; }` iria decorar o trecho "alguns elementos enfatizados".

> **Nota:** CSS 3 transformou a propriedade Text-Decoration para forma reduzida, usando as seguintes propriedades: {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, e {{cssxref("text-decoration-style")}}. Como em outras propriedades reduzidas, isso significa que ele reseta o valor de cada uma para padrão se não for explicitamente especificada na forma reduzida.

{{cssinfo}}

## Sintaxe

```css
/* Valores Chave */
text-decoration: none; /* Sem decoração */
text-decoration: underline red; /* Sublinhado vermelho */
text-decoration: underline wavy red; /* Sublinhado ondulado vermelho */

/* Valores Globais */
text-decoration: inherit;
text-decoration: initial;
text-decoration: unset;
```

### Valores

A propriedade `text-decoration` é escrita de forma reduzida e pode usar os valores de cada uma das propriedades: {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-color")}}, e {{cssxref("text-decoration-style")}}

### Sintaxe Formal

{{csssyntax}}

## Exemplos

```css
h1.under {
  text-decoration: underline;
}
h1.over {
  text-decoration: overline;
}
p.line {
  text-decoration: line-through;
}
p.blink {
  text-decoration: blink;
}
a.none {
  text-decoration: none;
}
p.underover {
  text-decoration: underline overline;
}
```

```html
<h1 class="under">Underlined Header</h1>
<p class="line">If you want to strike out text, use line-through.</p>
<p class="blink">
  This text might blink for you - if you use Explorer, it will not.
</p>
<h1 class="over">and now an overlined header.</h1>
<p>
  This
  <a class="none" href="textdecoration.html">link will not be underlined</a>, as
  most links are by default. Be careful with removing the text decoration on
  links since most users depend on the underline to signify a hyperlink.
</p>
<p class="underover">This text has both underline and overline.</p>
```

{{EmbedLiveSample('Examples','100%','310')}}

## Especificações

| Especificação                                                                        | Status                            | Comentários                                                                                                     |
| ------------------------------------------------------------------------------------ | --------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| {{SpecName('CSS3 Text Decoration', '#text-decoration-property', 'text-decoration')}} | {{Spec2('CSS3 Text Decoration')}} | Transformado em uma propriedade reduzida. Adicionado suporte para o valor {{cssxref('text-decoration-style')}}. |
| {{SpecName('CSS2.1', 'text.html#lining-striking-props', 'text-decoration')}}         | {{Spec2('CSS2.1')}}               | Sem mudanças significantes.                                                                                     |
| {{SpecName('CSS1', '#text-decoration', 'text-decoration')}}                          | {{Spec2('CSS1')}}                 | Definição inicial.                                                                                              |

## Compatibilidade com navegadores

{{Compat("css.properties.text-decoration")}}

## Veja também

- O atributo {{cssxref("list-style")}} controla a aparência dos itens em listas {{HTMLElement("ol")}} e {{HTMLElement("ul")}} no HTML.
