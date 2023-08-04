---
title: aspect-ratio
slug: Web/CSS/@media/aspect-ratio
---

{{cssref}}

A [característica de mídia](/pt-BR/docs/Web/Guide/CSS/CSS_Media_queries#Caracter%C3%ADsticas_de_m%C3%ADdia) [CSS](/pt-BR/docs/Web/CSS) **`aspect-ratio`** pode ser utilizada para testar a taxa de aspecto de sua {{glossary("viewport")}}.

## Sintaxe

A característica de `aspect-ratio` é especificada como um valor de {{cssxref("&lt;ratio&gt;")}} representando a relação de largura-para-altura em aspecto à sua viewport. É uma característica de diferencial, o que significa que você pode fazer uso de variações pré-fixadas de **`min-aspect-ratio`** e **`max-aspect-ratio`** para definir os os seus valores mínimos e máximos, respectivamente.

## Exemplo

O exemplo abaixo está contido em um {{htmlElement("iframe")}}, que cria o seu próprio viewport. Redimensione o `<iframe>` para ver o `aspect-ratio` em ação !

### HTML

```html
<div id="inner">
  Observe este elemento, conforme voc&ecirc; altera a largura e a altura da sua
  viewport.
</div>
```

### CSS

```css
/* Taxa de aspecto mínima */
@media (min-aspect-ratio: 8/5) {
  div {
    background: #9af; /* azul */
  }
}

/* Taxa de aspecto máxima */
@media (max-aspect-ratio: 3/2) {
  div {
    background: #9ff; /* ciano */
  }
}

/* Taxa de aspecto exata, coloque-a no final para evitar sobrescrita*/
@media (aspect-ratio: 1/1) {
  div {
    background: #f9a; /* vermelho */
  }
}
```

```html hidden
<label id="wf" for="w">width:165</label>
<input id="w" name="w" type="range" min="100" max="250" step="5" value="165" />
<label id="hf" for="w">height:165</label>
<input id="h" name="h" type="range" min="100" max="250" step="5" value="165" />

<iframe
  id="outer"
  src="data:text/html,<style> @media (min-aspect-ratio: 8/5) { div { background: %239af; } } @media (max-aspect-ratio: 3/2) { div { background: %239ff; } } @media (aspect-ratio: 1/1) { div { background: %23f9a; } }</style><div id='inner'> Observe este elemento, conforme voc&ecirc; altera a largura e a altura da sua viewport.</div>">
</iframe>
```

```css hidden
iframe {
  display: block;
}
```

```js hidden
outer.style.width = outer.style.height = "165px";

w.onchange = w.oninput = function () {
  outer.style.width = w.value + "px";
  wf.textContent = "width:" + w.value;
};
h.onchange = h.oninput = function () {
  outer.style.height = h.value + "px";
  hf.textContent = "height:" + h.value;
};
```

### Result

{{ EmbedLiveSample('_Exemplo', '300px', '400px') }}

## Specificações

| Specification                                                       | Status                          | Comment             |
| ------------------------------------------------------------------- | ------------------------------- | ------------------- |
| {{SpecName('CSS4 Media Queries', '#aspect-ratio', 'aspect-ratio')}} | {{Spec2('CSS4 Media Queries')}} | No change.          |
| {{SpecName('CSS3 Media Queries', '#aspect-ratio', 'aspect-ratio')}} | {{Spec2('CSS3 Media Queries')}} | Initial definition. |

## Compatibilidade com navegadores

{{Compat("css.at-rules.media.aspect-ratio")}}
