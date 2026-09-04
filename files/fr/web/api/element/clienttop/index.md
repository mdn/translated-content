---
title: "Element : propriété clientTop"
short-title: clientTop
slug: Web/API/Element/clientTop
l10n:
  sourceCommit: 0916e1754652f3a7c663ef031faa26c98f492023
---

{{APIRef("DOM")}}

La propriété en lecture seule **`clientTop`** de l'interface {{DOMxRef("Element")}} retourne la largeur de la bordure supérieure d'un élément en pixels.

Tout ce qui se trouve entre `offsetTop` et `clientTop` est la bordure de l'élément. En effet, `offsetTop` indique l'emplacement du haut de la bordure (et non de la marge) tandis que la zone client commence immédiatement sous la bordure, en incluant le remplissage. Par conséquent, la valeur de `clientTop` est toujours égale à `border-top-width`, arrondie à l'entier le plus proche. Par exemple, si la valeur calculée de `border-top-width` est nulle, alors `clientTop` est également nul.

## Valeur

Un entier.

## Exemples

Dans l'exemple suivant, la zone client présente un fond blanc et une `border-top` noire de 24px. La valeur `clientTop` correspond à la distance entre la fin de la zone de marge (en jaune) et le début des zones de remplissage et de contenu (en blanc)&nbsp;: soit 24px.

### HTML

```html
<div id="conteneur">
  <div id="contenu">
    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </p>
  </div>
</div>
```

### CSS

```css
#conteneur {
  margin: 3rem;
  background-color: rgb(255 255 204);
  border: 4px dashed black;
}

#contenu {
  margin: 1rem;
  border-top: 24px black solid;
  padding: 0px 28px;
  overflow: auto;
  background-color: white;
}
```

### Résultat

{{EmbedLiveSample("Exemples", 400, 350)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Déterminer les dimensions des éléments](/fr/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
- La propriété {{DOMxRef("HTMLElement.offsetTop")}}
- La propriété {{DOMxRef("Element.scrollTop")}}
- La propriété {{DOMxRef("Element.clientHeight")}}
- La propriété {{DOMxRef("Element.clientWidth")}}
- La propriété {{DOMxRef("Element.clientLeft")}}
- La méthode {{DOMxRef("Element.getBoundingClientRect()")}}
