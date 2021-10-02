---
title: Element.clientLeft
slug: Web/API/Element/clientLeft
translation_of: Web/API/Element/clientLeft
browser-compat: api.Element.clientLeft
---
{{APIRef("DOM")}}

La propriété en lecture seule **`Element.clientLeft`** représente la largeur de la bordure gauche d'un élément, exprimée en pixels. Cette largeur inclut l'éventuelle largeur de la barre de défilement verticale si le texte se lit de droite à gauche et s'il y a un dépassement entraînant l'apparition d'une barre de défilement à gauche. `clientLeft` n'inclut pas la marge gauche ou le remplissage (<i lang="en">padding</i>) à gauche.

Lorsque la préférence [`layout.scrollbar.side`](http://kb.mozillazine.org/Layout.scrollbar.side) est paramétrée à 1 ou à 3 et que la direction du texte est de droite à gauche, **alors la barre de défilement verticale est placée à gauche** et ce placement aura donc un impact sur la valeur de `clientLeft`.

> **Note :** Cette propriété sera arrondie en une valeur entière. Si vous souhaitez utiliser une valeur décimale, vous pouvez utiliser [`element.getBoundingClientRect()`](/fr/docs/Web/API/Element/getBoundingClientRect).

> **Note :** Lorsqu'un élément se voit appliquer `display: inline`, `clientLeft` renvoie `0`, quelle que soit la bordure de l'élément.

## Syntaxe

```js
var left = element.clientLeft;
```

## Exemple

Dans l'exemple qui suit, la zone du client possède un arrière-plan blanc avec une bordure `border-left` noire de 24px. La valeur de `clientLeft` correspond à la distance entre la fin de la zone de la marge et le début des zones de contenu et de remplissage : 24px.

### HTML

```html
<div id="container">
  <div id="contained">
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor
	  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis
	  nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
  </div>
</div>
```

### CSS

```css

#container {
	margin: 3rem;
	background-color: rgb(255, 255, 204);
	border: 4px dashed black;
}

#contained {
	margin: 1rem;
	border-left: 24px black solid;
	padding: 0px 28px;
	overflow: auto;
	background-color: white;
}
```

### Résultat

{{EmbedLiveSample("Exemple", 400, 350)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Notes

`clientLeft` fut introduit avec le modèle d'objet DHTML d'Internet Explorer.

La position de la barre de défilement verticale pour les textes écrits de droite à gauche dépend de la préférence [`layout.scrollbar.side`](http://kb.mozillazine.org/Layout.scrollbar.side).

Les applications utilisant le moteur Gecko prennent en charge `clientLeft` depuis Gecko 1.9 (Firefox 3 l'implémente avec [le bug 111207](https://bugzilla.mozilla.org/show_bug.cgi?id=111207)). Cette propriété n'est pas prise en charge pour Firefox 2 et les versions antérieures.
