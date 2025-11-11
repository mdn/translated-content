---
title: ::first-line (:first-line)
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

> [!NOTE]
> O CSS3 introduziu a notação `::first-line`(com dois pontos) para distinguir pseudo-classes de pseudo-elementos. Os navegadores também aceitam `:first-line` introduzida no CSS2.

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

{{Specifications}}

## Compatibilidade com navegadores

{{Compat}}

## Veja também

- {{cssxref("::first-letter")}}
