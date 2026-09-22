---
title: "Element : propriété scrollLeft"
short-title: scrollLeft
slug: Web/API/Element/scrollLeft
l10n:
  sourceCommit: bc9f7bec1ab48f29d241e38a9f1598f783f6b60a
---

{{APIRef("DOM")}}

La propriété **`scrollLeft`** de l'interface {{DOMxRef("Element")}} obtient ou définit le nombre de pixels par lequel le contenu d'un élément est défilé depuis son bord gauche. Cette valeur est précise au sous-pixel dans les navigateurs modernes, ce qui signifie qu'elle n'est pas nécessairement un nombre entier.

## Valeur

Une valeur en virgule flottante double précision indiquant le nombre de pixels par lequel l'élément est actuellement défilé horizontalement depuis l'origine, où une valeur positive signifie que l'élément est défilé vers la droite (pour révéler plus de contenu à droite). Si l'élément n'est pas du tout défilé à gauche ou à droite, alors `scrollLeft` vaut 0. Si le document n'est pas le document actif, la valeur retournée est 0. Si le document est rendu sur un appareil précis au sous-pixel, la valeur retournée est également précise au sous-pixel et peut contenir une composante décimale.

Il est possible que `scrollLeft` soit négatif si l'élément peut être défilé vers la gauche depuis le bloc contenant initial. Par exemple, si la {{CSSxRef("direction")}} de l'élément est `rtl` (de droite à gauche) et que le contenu s'étend vers la gauche, alors `scrollLeft` vaut `0` lorsque la barre de défilement est à sa position la plus à droite (au début du contenu défilé), puis devient de plus en plus négatif à mesure que vous faites défiler vers la fin du contenu.

Safari réagit au sur-défilement en mettant à jour `scrollLeft` au-delà de la position de défilement maximale (sauf si l'effet de «&nbsp;rebond&nbsp;» par défaut est désactivé, par exemple en définissant {{CSSxRef("overscroll-behavior")}} sur `none`), tandis que Chrome et Firefox ne le font pas.

La propriété `scrollLeft` peut être définie, ce qui provoque le défilement de l'élément jusqu'à la position horizontale définie, de la même manière que l'utilisation de {{DOMxRef("Element.scroll()")}} avec `behavior: "auto"`.

## Exemples

### HTML

```html
<div id="conteneur">
  <div id="contenu">Cliquez sur le bouton pour glisser à droite&nbsp;!</div>
</div>

<button id="defilement" type="button">Glisser à droite</button>
```

### CSS

```css
#conteneur {
  width: 100px;
  height: 100px;
  border: 1px solid #cccccc;
  overflow-x: scroll;
}

#contenu {
  width: 250px;
  background-color: #cccccc;
}
```

### JavaScript

```js
const button = document.getElementById("defilement");

button.onclick = function () {
  document.getElementById("conteneur").scrollLeft += 20;
};
```

### Résultat

{{EmbedLiveSample("Exemples")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Déterminer la taille des éléments](/fr/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- La propriété {{DOMxRef("HTMLElement.offsetLeft")}}
- La propriété {{DOMxRef("Element.clientLeft")}}
- La propriété {{DOMxRef("Element.scrollHeight")}}
- La propriété {{DOMxRef("Element.scrollWidth")}}
- La propriété {{DOMxRef("Element.scrollTop")}}
- La méthode {{DOMxRef("Element.getBoundingClientRect()")}}
- La méthode {{DOMxRef("Element.scrollTo()")}}
