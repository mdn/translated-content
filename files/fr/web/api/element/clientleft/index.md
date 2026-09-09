---
title: "Element : propriété clientLeft"
short-title: clientLeft
slug: Web/API/Element/clientLeft
l10n:
  sourceCommit: 1e0a16464b11cde9eddbb9795fe74e737dba0598
---

{{APIRef("DOM")}}

La propriété en lecture seule **`clientLeft`** de l'interface {{DOMxRef("Element")}} retourne la largeur de la bordure gauche d'un élément en pixels. Elle inclut la largeur de la barre de défilement verticale si la direction du texte de l'élément est de droite à gauche et s'il y a un débordement entraînant l'affichage d'une barre de défilement verticale à gauche. `clientLeft` n'inclut pas la marge gauche ni le remplissage gauche.

> [!NOTE]
> Lorsque un élément se voit appliquer `display: inline`, `clientLeft` retourne `0`, quelle que soit la bordure de l'élément.

## Valeur

Un entier.

## Exemples

Dans l'exemple suivant, la zone client présente un fond blanc et une `border-left` noire de 24px. La valeur `clientLeft` correspond à la distance entre la fin de la zone de marge (en jaune) et le début des zones de remplissage et de contenu (en blanc)&nbsp;: soit 24px.

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
  border-left: 24px black solid;
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
- La propriété {{DOMxRef("HTMLElement.offsetLeft")}}
- La propriété {{DOMxRef("Element.scrollLeft")}}
- La propriété {{DOMxRef("Element.clientHeight")}}
- La propriété {{DOMxRef("Element.clientWidth")}}
- La propriété {{DOMxRef("Element.clientTop")}}
- La méthode {{DOMxRef("Element.getBoundingClientRect()")}}
