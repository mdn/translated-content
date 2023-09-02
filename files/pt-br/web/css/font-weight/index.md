---
title: font-weight
slug: Web/CSS/font-weight
---

{{CSSRef}}

## Resumo

A propriedade [CSS](/pt-BR/docs/CSS) `font-weight` especifica o peso ou a intensidade da fonte (ex.: negrito). Algumas fontes oferecem apenas as opções `normal` e negrito.

{{cssinfo}}

## Sintaxe

```css
font-weight: normal;
font-weight: bold;

/* Relativo ao elemento pai */
font-weight: lighter;
font-weight: bolder;

font-weight: 100;
font-weight: 200;
font-weight: 300;
font-weight: 400;
font-weight: 500;
font-weight: 600;
font-weight: 700;
font-weight: 800;
font-weight: 900;

/* Valores globais */
font-weight: inherit;
font-weight: initial;
font-weight: unset;
```

### Valores

- `normal`
  - : Peso normal. O mesmo que `400`.
- `bold`
  - : Peso negrito. O mesmo que `700`.
- `lighter`
  - : Um peso de fonte mais claro que o elemento pai (dentre os pesos disponíveis da fonte).
- `bolder`
  - : Um peso de fonte mais escuro que o elemento pai (dentre os pesos disponíveis da fonte).
- `100`, `200`, `300`, `400`, `500`, `600`, `700`, `800`, `900`
  - : Pesos numéricos para fontes que oferecem mais que normal e negrito.

### Contingência

Caso o dado peso solicitado não esteja disponível, a seguinte heurística é usada para determinar o peso efetivo a ser usado:

- Se solicitado um peso maior que `500`, usa-se o próximo peso mais escuro (ou, se não houver, usa-se o próximo mais claro).
- Se solicitado um peso menor que `400`, usa-se o próximo peso mais claro (ou, se não houver, usa-se o próximo mais escuro).
- Se solicitado o peso `400`, usa-se o peso `500`. Se `500` não estiver disponível, usa-se a heurística para peso menor do que 500.
- Se solicitado o peso `500`, usa-se o peso `400`. Se `400` não estiver disponível, usa-se a heurística para peso menor do que 400.

Isto significa que para fontes que oferecem apenas `normal` e negrito, `100`-`500` significa normal, e `600`-`900` significa negrito.

### Significado de pesos relativos

Quando for solicitado `lighter` ou `bolder`, a seguinte tabela é usada para calcular o peso absoluto do elemento:

| Valor herdado | `bolder` | `lighter` |
| ------------- | -------- | --------- |
| 100           | 400      | 100       |
| 200           | 400      | 100       |
| 300           | 400      | 100       |
| 400           | 700      | 100       |
| 500           | 700      | 100       |
| 600           | 900      | 400       |
| 700           | 900      | 400       |
| 800           | 900      | 700       |
| 900           | 900      | 700       |

### Mapeamento de nomes comuns de pesos

Os valores de 100 a 900 correspondem grosseiramente aos seguintes nomes comuns de pesos:

- `100`
  - : Thin (Hairline)
- `200`
  - : Extra Light (Ultra Light, Ultra Fino)
- `300`
  - : Light (Fino)
- `400`
  - : Normal
- `500`
  - : Medium (Médio)
- `600`
  - : Semi Bold (Demi Bold, Semi Negrito)
- `700`
  - : Bold (Negrito)
- `800`
  - : Extra Bold (Ultra Bold, Super Negrito)
- `900`
  - : Black (Heavy)

### Interpolação

Um valor de `font-weight` é interpolado com passos discretos (múltiplos de 100). A interpolação acontece no espaço de números reais e depois é feita uma conversão para números inteiros por arredondamento para o múltiplo de 100 mais próximo. Valores exatamente entre dois múltiplos de 100 são arredondados para mais.

### Sintaxe formal

{{csssyntax}}

## Exemplos

### HTML

```html
<p>
  Alice was beginning to get very tired of sitting by her sister on the bank,
  and of having nothing to do: once or twice she had peeped into the book her
  sister was reading, but it had no pictures or conversations in it, 'and what
  is the use of a book,' thought Alice 'without pictures or conversations?'
</p>

<div>
  I'm heavy<br />
  <span>I'm lighter</span>
</div>
```

### CSS

```css
/* Set paragraph text to be bold. */
p {
  font-weight: bold;
}

/* Set div text to two steps darker than
   normal but less than a standard bold. */
div {
  font-weight: 600;
}

/* Sets text enclosed within span tag
   to be one step lighter than the parent. */
span {
  font-weight: lighter;
}
```

### Result

{{EmbedLiveSample("Exemplos","400","300")}}

## Especificações

| Especificações                                                          | Status                        | Comentário                                  |
| ----------------------------------------------------------------------- | ----------------------------- | ------------------------------------------- |
| {{SpecName('CSS3 Fonts', '#font-weight-prop', 'font-weight')}}          | {{Spec2('CSS3 Fonts')}}       | Sem alterações.                             |
| {{SpecName('CSS3 Transitions', '#animatable-css', 'font-weight')}}      | {{Spec2('CSS3 Transitions')}} | Permite animação do atributo `font-weight`. |
| {{SpecName('CSS2.1', 'fonts.html#propdef-font-weight', 'font-weight')}} | {{Spec2('CSS2.1')}}           | Sem alterações.                             |
| {{SpecName('CSS1', '#font-weight', 'font-weight')}}                     | {{Spec2('CSS1')}}             |                                             |

## Compatibilidade com navegadores

{{Compat("css.properties.font-weight")}}
