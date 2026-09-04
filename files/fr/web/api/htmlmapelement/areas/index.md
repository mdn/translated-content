---
title: "HTMLMapElement : propriété areas"
short-title: areas
slug: Web/API/HTMLMapElement/areas
l10n:
  sourceCommit: aff319cd81d10cfda31b13adb3263deafb284b20
---

{{APIRef("HTML DOM")}}

La propriété en lecture seule **`areas`** de l'interface {{DOMxRef("HTMLMapElement")}} retourne une collection d'éléments HTML {{HTMLElement("area")}} associés à l'élément {{HTMLElement("map")}}.

## Valeur

Un objet {{DOMxRef("HTMLCollection")}} d'éléments {{DOMxRef("HTMLAreaElement")}}.

## Exemple

```html
<map id="image-map" name="image-map">
  <area shape="circle" coords="50,50,35" href="#left" alt="flèche gauche" />
  <area shape="circle" coords="150,50,35" href="#right" alt="flèche droite" />
</map>
<img
  usemap="#image-map"
  src="left-right-arrow.png"
  alt="image flèche gauche droite" />
<output></output>
```

```css hidden
output {
  display: block;
}
```

```js
const mapElement = document.getElementById("image-map");
const outputElement = document.querySelector("output");

for (const area of mapElement.areas) {
  area.addEventListener("click", (event) => {
    outputElement.textContent = `Vous avez cliqué sur la zone ${area.alt}.\n\n`;
  });
}
```

### Résultats

{{EmbedLiveSample("Example", 100, 150)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("HTMLAreaElement")}}
- La propriété {{DOMxRef("HTMLImageElement.useMap")}}
