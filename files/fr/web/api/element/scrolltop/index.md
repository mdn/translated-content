---
title: "Element : propriété scrollTop"
short-title: scrollTop
slug: Web/API/Element/scrollTop
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{APIRef("DOM")}}

La propriété **`scrollTop`** de l'interface {{DOMxRef("Element")}} obtient ou définit le nombre de pixels par lequel le contenu d'un élément est défilé depuis son bord supérieur. Cette valeur est précise au sous-pixel dans les navigateurs modernes, ce qui signifie qu'il ne s'agit pas nécessairement d'un nombre entier.

## Valeur

Une valeur en virgule flottante double précision indiquant le nombre de pixels par lequel l'élément est actuellement défilé verticalement depuis l'origine, où une valeur positive signifie que l'élément est défilé vers le bas (pour révéler plus de contenu en bas). Si l'élément n'est pas du tout défilé vers le haut ou vers le bas, alors `scrollTop` vaut 0. Si le document n'est pas le document actif, la valeur retournée est 0. Si le document est rendu sur un appareil précis au sous-pixel, la valeur retournée est également précise au sous-pixel et peut contenir une composante décimale.

Il est possible que `scrollTop` soit négatif si l'élément peut être défilé vers le haut depuis le bloc contenant initial. Par exemple, si la {{CSSxRef("flex-direction")}} de l'élément est `column-reverse` et que le contenu croît vers le haut, alors `scrollTop` vaut `0` lorsque la barre de défilement est à sa position la plus basse (au début du contenu défilé), puis devient de plus en plus négatif à mesure que vous faites défiler vers la fin du contenu.

Safari réagit au dépassement du défilement en mettant à jour `scrollTop` au-delà de la position de défilement maximale (sauf si l'effet de «&nbsp;rebond&nbsp;» par défaut est désactivé, par exemple en définissant {{CSSxRef("overscroll-behavior")}} sur `none`), tandis que Chrome et Firefox ne le font pas. Par exemple, `scrollTop` peut être négatif sur Safari simplement en continuant à faire défiler vers le haut lorsque l'élément est déjà en haut.

La propriété **`scrollTop`** peut être définie, ce qui provoque le défilement de l'élément à la position verticale définie, de la même manière que l'utilisation de {{DOMxRef("Element.scroll()")}} avec `behavior: "auto"`.

## Exemples

### Faire défiler un élément

Dans cet exemple, essayez de faire défiler le conteneur avec la bordure en pointillés, et voyez comment la valeur de `scrollTop` change.

#### HTML

```html
<div id="conteneur">
  <p>
    Loin dans les contrées inexplorées de l'extrémité démodée du bras spiral
    occidental de la Galaxie se trouve un petit soleil jaune négligé. Orbitant
    autour de celui-ci à une distance d'environ quatre-vingt-douze millions de
    miles se trouve une petite planète bleue-verte insignifiante dont les formes
    de vie descendues des singes sont si incroyablement primitives qu'elles
    pensent encore que les montres numériques sont une idée assez géniale.
  </p>
</div>

<div id="sortie">scrollTop: 0</div>
```

#### CSS

```css
#conteneur {
  overflow: scroll;
  height: 150px;
  width: 150px;
  border: 5px dashed orange;
}

#sortie {
  padding: 1rem 0;
}
```

#### JavaScript

```js
const conteneur = document.querySelector("#conteneur");
const sortie = document.querySelector("#sortie");

conteneur.addEventListener("scroll", (event) => {
  sortie.textContent = `scrollTop: ${conteneur.scrollTop}`;
});
```

#### Résultat

{{EmbedLiveSample("Scrolling_an_element", 400, 250)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Déterminer la taille des éléments](/fr/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- La propriété {{DOMxRef("HTMLElement.offsetTop")}}
- La propriété {{DOMxRef("Element.clientTop")}}
- La propriété {{DOMxRef("Element.scrollHeight")}}
- La propriété {{DOMxRef("Element.scrollWidth")}}
- La propriété {{DOMxRef("Element.scrollLeft")}}
- La méthode {{DOMxRef("Element.getBoundingClientRect()")}}
- La méthode {{DOMxRef("Element.scrollTo()")}}
