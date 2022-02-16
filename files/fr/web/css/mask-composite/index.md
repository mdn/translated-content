---
title: mask-composite
slug: Web/CSS/mask-composite
tags:
  - CSS
  - Experimental
  - Propriété
  - Reference
translation_of: Web/CSS/mask-composite
---
{{CSSRef}}{{SeeCompatTable}}

La propriété **`mask-composite`** permet d'effectuer une opération de composition entre le masque situé sur la couche de l'élément et le masque présent en dessous.

```css
/* Valeurs avec un mot-clé*/
mask-composite: add;
mask-composite: subtract;
mask-composite: intersect;
mask-composite: exclude;

/* Valeurs globales */
mask-composite: inherit;
mask-composite: initial;
mask-composite: unset;
```

## Syntaxe

Un ou plusieurs mots-clés parmi ceux listés ci-après, chacun séparé par une virgule.

### Valeurs

La couche du masque de l'élément est appelée _source_ et les couches inférieures sont appelées _destination_.

- `add`
  - : La source est placée sur la destination.
- `subtract`
  - : La source est placée lorsque la destination est vide à cet endroit.
- `intersect`
  - : Les endroits de la source qui chevauchent la destination prennent le pas sur la destination.
- `exclude`
  - : Les régions de la source et de la destination qui ne se chevauchent pas sont combinées.The non-overlapping regions of source and destination are combined.

### Syntaxe formelle

{{csssyntax}}

## Exemples

### CSS

```css
#masked {
  width: 100px;
  height: 100px;
  background-color: #8cffa0;
  -webkit-mask-image: url(https://mdn.mozillademos.org/files/12668/MDN.svg),
                      url(https://mdn.mozillademos.org/files/12676/star.svg);
  mask-image: url(https://mdn.mozillademos.org/files/12668/MDN.svg),
              url(https://mdn.mozillademos.org/files/12676/star.svg);
  mask-size: 100% 100%;
  -webkit-mask-composite: add;
  mask-composite: add; /* peut-être modifiée dans la démo */
}
```

```html hidden
<div id="masked">
</div>
<select id="compositeMode">
  <option value="add">add</option>
  <option value="subtract">subtract</option>
  <option value="intersect">intersect</option>
  <option value="exclude">exclude</option>
</select>
```

```js hidden
var clipBox = document.getElementById("compositeMode");
clipBox.addEventListener("change", function (evt) {
  document.getElementById("masked").style.maskClip = evt.target.value;
});
```

{{EmbedLiveSample("Exemples", "200px", "200px")}}

## Spécifications

| Spécification                                                                            | État                         | Commentaires        |
| ---------------------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName("CSS Masks", "#the-mask-composite", "mask-composite")}} | {{Spec2("CSS Masks")}} | Définition initiale |

{{cssinfo}}

## Compatibilité des navigateurs

{{Compat("css.properties.mask-composite")}}
