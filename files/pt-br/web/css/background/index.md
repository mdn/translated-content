---
title: background
slug: Web/CSS/background
---

{{CSSRef ( "CSS Background")}}

## Resumo

A propriedade CSS **`background`** é um atalho para definir os valores de fundo individuais em um único lugar na folha de estilo. Background pode ser usado para definir os valores para um ou mais dos seguintes: {{cssxref("background-clip")}}, {{cssxref("background-color")}}, {{cssxref("background-image")}}, {{cssxref("background-origin")}}, {{cssxref("background-position")}} , {{cssxref("background-repeat")}}, {{cssxref("background-size")}} e {{cssxref("background-attachment")}}.

O `fundo` CSS propriedade estenográfica atribui valores dados explícitos e conjuntos de propriedades para seus valores iniciais em falta.

{{cssinfo}}

## Sintaxe

```css
/ * Usando uma <cor-de-fundo> * /
background: green;

/ * Usando uma <imagem-de-fundo> e <estilo-de-repetição> * /
background: url("test.jpg") repeat-y;

/ * Usando uma <box> e <cor-de-fundo> * /
background: border-box red;

/ * Uma única imagem, centrado e escalado * /
background: no-repeat center/80% url( "../img/image.png");
```

> **Nota:** O {{cssxref ( "background-color")}} só pode ser definido no último fundo, como há apenas uma cor de fundo para todo o elemento.

### Valores

Um ou mais dos seguintes, por qualquer ordem:

- `<anexo>`
  - : Veja {{cssxref ( "background-attachment")}}
- `<box>`
  - : Veja {{cssxref ( "background-clip")}}
- `<cor-de-fundo>`
  - : Veja {{cssxref ( "background-color")}}
- `<imagem-de-fundo>`
  - : Veja {{Cssxref ( "background-image")}}
- `<posição>`
  - : Veja {{cssxref ( "background-position")}}
- `<estilo-de-repetição>`
  - : Veja {{cssxref ( "background-repeat")}}
- `<tamanho-do-fundo>`
  - : Veja {{cssxref ( "background-size")}}. Esta propriedade deve ser especificado após **\<posição>** , separados com o caractere '/'.

### Sintaxe formal

```
{{csssyntax}}
```

## Exemplos

### HTML

```html
<p class="Topbanner">
  céu estrelado<br />
  Cintilando Cintilando<br />
  Céu estrelado
</p>
<p class="atencao">Este é um parágrafo</p>
<p></p>
```

### CSS

```css
.atencao {
  background: red;
}

.Topbanner {
  background: url("starsolid.gif") #00d repeat-y fixed;
}
```

### Resultado

{{EmbedLiveSample ( "Exemplos")}}

## Especificações

| Especificação                                                         | estado                     | Comente                                                                                                                                                                                           |
| --------------------------------------------------------------------- | -------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName ( 'Fundos CSS3', '# a-fundo', 'fundo')}}                   | {{Spec2 ( 'Fundos CSS3')}} | A propriedade taquigráfica foi estendido para suportar múltiplas origens e a nova {{cssxref("background-size")}}, {{cssxref("background-origem")}} e {{cssxref("background-clip")}} propriedades. |
| {{SpecName ( 'CSS2.1', '# propdef-fundo colors.html', 'background')}} | {{Spec2 ( 'CSS2.1')}}      | Não ocorreram alterações significativas                                                                                                                                                           |
| {{SpecName ( 'CSS1', '#background', 'background')}}                   | {{Spec2 ( 'CSS1')}}        | definição inicial                                                                                                                                                                                 |

## Compatibilidade com navegadores

{{Compat("css.properties.background")}}

## Veja também

- {{Cssxref ( "- moz-fundo-inline-política")}}
- [Usando gradientes](/pt-BR/docs/CSS/Using_CSS_gradients)
- [Vários fundos](/pt-BR/docs/CSS/Multiple_backgrounds)
