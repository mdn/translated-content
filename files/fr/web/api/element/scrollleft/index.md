---
title: Element.scrollLeft
slug: Web/API/Element/scrollLeft
translation_of: Web/API/Element/scrollLeft
browser-compat: api.Element.scrollLeft
---
{{APIRef("DOM")}}

La propriété **`Element.scrollLeft`** permet de lire ou de modifier le nombre de pixels le long desquels le contenu d'un élément a défilé depuis son bord gauche.

Si la propriété [`direction`](/fr/docs/Web/CSS/direction) de l'élément vaut `rtl` (pour une écriture de droite à gauche), `scrollLeft` est à `0` lorsque la barre de défilement est à la position la plus à droite possible (ce qui correspond au début du contenu à faire défiler) et elle devient de plus en plus négative lors du défilement vers la fin du contenu.

Cette propriété peut être définie avec n'importe quelle valeur entière. Toutefois&nbsp;:

- Si l'élément ne peut pas défiler (par exemple parce qu'il n'y a aucun défilement), `scrollLeft` sera fixée à `0`.
- Si la valeur fournie est inférieure à `0` (ou supérieure à `0` pour les éléments écrits de droite à gauche), `scrollLeft` sera fixée à `0`.
- Si la valeur fournie est supérieure au défilement maximal possible pour le contenu, `scrollLeft` sera fixée à la valeur maximale possible.

> **Attention :** Pour les systèmes qui utilisent une mise à l'échelle pour l'affichage (<i lang="en">display scaling</i>), `scrollLeft` pourra fournir une valeur décimale.

## Valeur

Un nombre

## Exemples

### HTML

```html
<div id="container">
  <div id="content">Cliquez sur le bouton pour glisser à droite !</div>
</div>

<button id="slide" type="button">Glisser à droite</button>
```

### CSS

```css
#container {
  width: 100px;
  height: 100px;
  border: 1px solid #ccc;
  overflow-x: scroll;
}

#content {
  width: 250px;
  background-color: #ccc;
}
```

### JavaScript

```js
const button = document.getElementById('slide');

button.onclick = function () {
  document.getElementById('container').scrollLeft += 20;
};
```

### Résultat

{{EmbedLiveSample("")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Element.scrollTop`](/fr/docs/Web/API/Element/scrollTop)
- [`Element.scrollTo()`](/fr/docs/Web/API/Element/scrollTo)
