---
title: ":active"
slug: Web/CSS/:active
---

{{CSSRef}}A pseudo-classe css \<strong> :active \</strong>

Esse estilo pode ser substituído por qualquer outra pseudo-classe relacionada ao link, ou seja, {{cssxref(":link")}}, {{cssxref(":hover")}} e {{cssxref(":visited")}}, aparecendo nas regras subseqüentes. Para estilizar apropriadamente os links, você precisa colocar a regra `:active` depois de todas as outras regras relacionadas ao link, conforme definido pela ordem LVHA. `:link` — `:visited` — `:hover` — `:active`.

> **Nota:** Em sistemas com mouses com vários botões, o CSS 3 especifica que a pseudo-classe :active só deve ser aplicada ao botão principal em mouses destros, este é tipicamente o botão mais à esquerda.

## Exemplo

### HTML

```html
<body>
  <h1>:active CSS selector example</h1>
  <p>
    The following link will turn lime during the time you click it and release
    the click: <a href="#">Mozilla Developer Network</a>.
  </p>
</body>
```

### CSS

```css
body {
  background-color: #ffffc9;
}
a:link {
  color: blue;
} /* links não visitados */
a:visited {
  color: purple;
} /* links visitados */
a:hover {
  font-weight: bold;
} /* user hovers */
a:active {
  color: lime;
} /* links ativos */
```

{{EmbedLiveSample('example',600,140)}}

## Especificações

| Especificação                                                             | Status                      | Comentário         |
| ------------------------------------------------------------------------- | --------------------------- | ------------------ |
| {{SpecName('CSS4 Selectors', '#active-pseudo', ':active')}}               | {{Spec2('CSS4 Selectors')}} | Nenhuma mudança.   |
| {{SpecName('CSS3 Selectors', '#useraction-pseudos', ':active')}}          | {{Spec2('CSS3 Selectors')}} | Nenhuma mudança.   |
| {{SpecName('CSS2.1', 'selector.html#dynamic-pseudo-classes', ':active')}} | {{Spec2('CSS2.1')}}         | Nenhuma mudança.   |
| {{SpecName('CSS1', '#anchor-pseudo-classes', ':active')}}                 | {{Spec2('CSS1')}}           | Definição inicial. |

## Compatibilidade com navegadores

{{Compat("css.selectors.active")}}

## Veja também

- Link-related pseudo-classes: {{cssxref(":link")}}, {{cssxref(":visited")}}, and {{cssxref(":hover")}}.
