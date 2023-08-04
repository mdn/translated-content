---
title: Propriedades personalizadas (--*)
slug: Web/CSS/--*
---

{{CSSRef}}{{SeeCompatTable}}

Nomes de propriedades com o prefixo `--`, como `--example-name`, representam _Propriedade personalizadas_ que contém um valor que pode ser reutilizado por todo o documento usando a função ({{cssxref("var")}}).

Propriedades personalizadas participam na cascata: cada uma delas pode aparecer várias vezes e o valor da variável corresponderá ao valor definido na propriedade personalizada, decidido pelo algoritmo de cascata.

{{cssinfo}}

## Sintaxe

```css
--somekeyword: left;
--somecolor: #0000ff;
--somecomplexvalue: 3px 6px rgb(20, 32, 54);
```

- `<declaration-value>`
  - : Este valor corresponde a qualquer sequência de um ou mais tokens, desde que a sequência não contenha tokens não permitidos. Representa a totalidade do que uma declaração válida pode ter como valor.

### Sintaxe formal

{{csssyntax}}

## Exemplo

### HTML

```html
<p id="firstParagraph">
  Este parágrafo deve ter um fundo azul e um texto amarelo.
</p>
<p id="secondParagraph">
  Este parágrafo deve ter um fundo amarelo e um texto azul.
</p>
<div id="container">
  <p id="thirdParagraph">
    Este parágrafo deve ter um fundo verde e um texto amarelo.
  </p>
</div>
```

### CSS

```css
:root {
  --first-color: #488cff;
  --second-color: #ffff8c;
}

#firstParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}

#secondParagraph {
  background-color: var(--second-color);
  color: var(--first-color);
}

#container {
  --first-color: #48ff32;
}

#thirdParagraph {
  background-color: var(--first-color);
  color: var(--second-color);
}
```

### Resultado

{{EmbedLiveSample('Example', 500, 130)}}

## Especificações

| Specification                                                | Status                      | Comment            |
| ------------------------------------------------------------ | --------------------------- | ------------------ |
| {{SpecName("CSS3 Variables", "#defining-variables", "--*")}} | {{Spec2("CSS3 Variables")}} | Initial definition |

## Compatibilidade com navegadores

{{Compat("css.properties.custom-property")}}

## Veja também

- [Utilizando variáveis CSS](/pt-BR/docs/Web/CSS/Using_CSS_variables)
