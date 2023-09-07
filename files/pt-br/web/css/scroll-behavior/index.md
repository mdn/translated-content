---
title: scroll-behavior
slug: Web/CSS/scroll-behavior
---

{{ CSSRef }}

A propriedade css **`scroll-behavior`** especifica o comportamento de rolagem para uma caixa de scrolling, quando a rolagem acontece devido às APIs do CSSOM. Qualquer outro scroll, aqueles que são executados pelo usuário, não são afetados por esta propriedade. Quando esta propriedade é especificada no elemento raiz, ela se aplica à viewport.

User agents podem ignorar essa propriedade.

```css
/* Valores das palavras-chave */
scroll-behavior: auto;
scroll-behavior: smooth;

/* Valores globais */
scroll-behavior: inherit;
scroll-behavior: initial;
scroll-behavior: unset;
```

Note que qualquer outro scroll, tem essa tal performace para o usuario, essa propriedade não é afetada. Quando esta propriedade é especificada na raiz do elemento então aplicamos na instancia do viewport.

Os usuarios que agem com está propriedade pode ignora-lá.

{{cssinfo}}

## Sintaxe

O `scroll-behavior` é uma propriedade específica, com um valor de uma palavra-chave listada abaixo.

### Valores

- `auto`
  - : A caixa de rolagem rola instantaneamente.
- `smooth`
  - : A caixa de scroll rola de forma suave usando uma função de temporização definida pelo usuário em um período de tempo. Os agentes do usuário devem seguir as convenções da plataforma, se houver.

### Sintaxe formal

{{csssyntax}}

## Exemplo

### HTML

```html
<nav>
  <a href="#page-1">1</a>
  <a href="#page-2">2</a>
  <a href="#page-3">3</a>
</nav>
<scroll-container>
  <scroll-page id="page-1">1</scroll-page>
  <scroll-page id="page-2">2</scroll-page>
  <scroll-page id="page-3">3</scroll-page>
</scroll-container>
```

### CSS

```css
a {
  display: inline-block;
  width: 50px;
  text-decoration: none;
}
nav,
scroll-container {
  display: block;
  margin: 0 auto;
  text-align: center;
}
nav {
  width: 339px;
  padding: 5px;
  border: 1px solid black;
}
scroll-container {
  display: block;
  width: 350px;
  height: 200px;
  overflow-y: scroll;
  scroll-behavior: smooth;
}
scroll-page {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  font-size: 5em;
}
```

### Saída

{{ EmbedLiveSample('Example', "100%", 250) }}

## Especificações

| Especificações                                                            | Status                  | Comentário             |
| ------------------------------------------------------------------------- | ----------------------- | ---------------------- |
| {{SpecName('CSSOM View', "#propdef-scroll-behavior", 'scroll-behavior')}} | {{Spec2('CSSOM View')}} | Especificações inicial |

## Compatibilidade com navegador

{{Compat("css.properties.scroll-behavior")}}
