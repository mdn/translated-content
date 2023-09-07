---
title: "::first-line (:first-line)"
slug: Web/CSS/::first-line
---

{{CSSRef}}

O pseudoelemento **`::first-line`** aplica estilos à primeira linha de um elemento no nível do bloco. Observe que o comprimento da primeira linha depende de muitos fatores, incluindo a largura do elemento, a largura do documento e o tamanho da fonte do texto.

```css
/* Seleciona a primeira linha dentro da tag <p> */
p::first-line {
  color: red;
}
```

> **Nota:** O CSS3 introduziu a notação `::first-line`(com dois pontos) para distinguir pseudo-classes de pseudo-elementos. Os navegadores também aceitam `:first-line` introduzida no CSS2.

## Propriedades permitidas

Somente um pequeno subconjunto de propriedades CSS pode ser usado com o`::first-line` pseudo-elemento:

- Todas as propriedades relacionadas à fonte: {{Cssxref("font")}}, {{cssxref("font-kerning")}}, {{Cssxref("font-style")}}, {{Cssxref("font-variant")}}, {{cssxref("font-variant-numeric")}}, {{cssxref("font-variant-position")}}, {{cssxref("font-variant-east-asian")}}, {{cssxref("font-variant-caps")}}, {{cssxref("font-variant-alternates")}}, {{cssxref("font-variant-ligatures")}}, {{cssxref("font-synthesis")}}, {{cssxref("font-feature-settings")}}, {{cssxref("font-language-override")}}, {{Cssxref("font-weight")}}, {{Cssxref("font-size")}}, {{cssxref("font-size-adjust")}}, {{cssxref("font-stretch")}}, e {{Cssxref("font-family")}}
- Todas as propriedades relacionadas ao background: {{Cssxref("background-color")}}, {{cssxref("background-clip")}}, {{Cssxref("background-image")}}, {{cssxref("background-origin")}}, {{Cssxref("background-position")}}, {{Cssxref("background-repeat")}}, {{cssxref("background-size")}}, {{Cssxref("background-attachment")}}, e {{cssxref("background-blend-mode")}}
- A propriedade {{cssxref("color")}}
- {{cssxref("word-spacing")}}, {{cssxref("letter-spacing")}}, {{cssxref("text-decoration")}}, {{cssxref("text-transform")}}, e {{cssxref("line-height")}}
- {{cssxref("text-shadow")}}, {{cssxref("text-decoration")}}, {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, {{cssxref("text-decoration-style")}}, e {{cssxref("vertical-align")}}.

## Sintaxe

{{csssyntax}}

## Exemplos

### HTML

```html
<p>
  Os estilos serão aplicados apenas à primeira linha deste parágrafo. Depois
  disso, todo o texto será estilizado normalmente. Entendeu o que eu quis dizer?
</p>

<span
  >A primeira linha deste texto não receberá um estilo especial porque não é um
  elemento no nível do bloco.</span
>
```

### CSS

```css
::first-line {
  color: blue;
  text-transform: uppercase;

  /* AVISO: NÃO UTILIZE: */
  /* Muitas propriedades são inválidas em pseudo-elementos ::first-line */
  margin-left: 20px;
  text-indent: 20px;
}
```

### Resultado

{{EmbedLiveSample('Examples', 350, 160)}}

## Especificações

| Especificação                                                                                  | Status                            | Comentário                                                                                                                                                                                                                           |
| ---------------------------------------------------------------------------------------------- | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('CSS4 Pseudo-Elements', '#first-line-pseudo', '::first-line')}}                     | {{Spec2('CSS4 Pseudo-Elements')}} | Define mais estritamente onde `::first-letter` pode ocorrer. Generaliza propriedades permitidas para tipografia, decoração de texto e propriedades de layout embutido e {{cssxref("opacity")}}. Define a herança de`::first-letter`. |
| {{SpecName('CSS3 Text Decoration', '#text-shadow-property', 'text-shadow with ::first-line')}} | {{Spec2('CSS3 Text Decoration')}} | Permite o uso de {{cssxref("text-shadow")}} com `::first-letter`.                                                                                                                                                                    |
| {{SpecName('CSS3 Selectors', '#first-line', '::first-line')}}                                  | {{Spec2('CSS3 Selectors')}}       | Introdução da sintaxe de dois-pontos.                                                                                                                                                                                                |
| {{SpecName('CSS2.1', 'selector.html#first-line-pseudo', '::first-line')}}                      | {{Spec2('CSS2.1')}}               | Nenhuma mudança.                                                                                                                                                                                                                     |
| {{SpecName('CSS1', '#the-first-line-pseudo-element', '::first-line')}}                         | {{Spec2('CSS1')}}                 | Definição inicial, usando a sintaxe de dois pontos.                                                                                                                                                                                  |

## Compatibilidade com navegadores

{{Compat("css.selectors.first-line")}}

## Veja também

- {{cssxref("::first-letter")}}
