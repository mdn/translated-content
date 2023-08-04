---
title: ":nth-of-type()"
slug: Web/CSS/:nth-of-type
---

{{CSSRef}}

A [pseudo-classe](/pt-BR/docs/Web/CSS/Pseudo-classes) [CSS](/pt-BR/docs/Web/CSS) **`:nth-of-type()`** corresponde a um ou mais elementos de um dado tipo, baseado em sua posição entre um grupo de irmãos.

```css
/* Seleciona cada quarto elemento <p>
   entre qualquer grupo de irmãos */
p:nth-of-type(4n) {
  color: lime;
}
```

## Sintaxe

A pseudo-classe `nth-of-type` é especificada com um único argumento, o qual representa o padrão para a correspondência dos elementos.

Veja {{Cssxref(":nth-child")}} para uma explicação mais detalhada de sua sintaxe.

### Sintaxe formal

{{csssyntax}}

## Exemplos

### Exemplo básico

#### HTML

```html
<div>
  <div>Este elemento não é contado.</div>
  <p>1º parágrafo.</p>
  <p>2º parágrafo.</p>
  <div>Este elemento não é contado.</div>
  <p>3º parágrafo.</p>
  <p>4º parágrafo.</p>
</div>
```

#### CSS

```css
/* Parágrafos ímpares */
p:nth-of-type(2n + 1) {
  color: red;
}

/* Parágrafos pares */
p:nth-of-type(2n) {
  color: blue;
}

/* Primeiro parágrafo */
p:nth-of-type(1) {
  font-weight: bold;
}
```

#### Resultado

{{EmbedLiveSample('Basic_example', 250, 200)}}

## Especificações

| Especificação                                                         | Sitação                     | Comentário                                                       |
| --------------------------------------------------------------------- | --------------------------- | ---------------------------------------------------------------- |
| {{SpecName('CSS4 Selectors', '#nth-of-type-pseudo', ':nth-of-type')}} | {{Spec2('CSS4 Selectors')}} | Não é necessário que os elementos correspondentes tenham um pai. |
| {{SpecName('CSS3 Selectors', '#nth-of-type-pseudo', ':nth-of-type')}} | {{Spec2('CSS3 Selectors')}} | Definição inicial.                                               |

## Compatibilidade com navegadores

{{Compat("css.selectors.nth-of-type")}}

## Veja também

- {{Cssxref(":nth-child")}}, {{Cssxref(":nth-last-of-type")}}
