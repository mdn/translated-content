---
title: element.scrollWidth
slug: Web/API/Element/scrollWidth
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{ ApiRef() }}

**scrollWidth** est une propriété en lecture seule qui renvoie, parmi la largeur en pixels du contenu d'un élément, et la largeur de l'élément, celle qui est la plus grande.

La valeur `scrollWidth` est égale à la largeur minimale dont l'élément aurait besoin pour s'adapter à tout le contenu de la fenêtre sans utiliser de barre de défilement horizontale. La largeur est mesurée de la même manière que [`clientWidth`](/fr/docs/Web/API/Element/clientWidth)&nbsp;: elle inclut le remplissage de l'élément, mais pas sa bordure, sa marge ou sa barre de défilement verticale (si présente). Il peut également inclure la largeur des pseudo-éléments tels que [`::before`](/fr/docs/Web/CSS/::before) ou [`::after`](/fr/docs/Web/CSS/::after). Si le contenu de l'élément peut s'adapter sans avoir besoin d'une barre de défilement horizontale, sa `scrollWidth` est égale à [`clientWidth`](/fr/docs/Web/API/Element/clientWidth).

> **Note :** Cette propriété arrondira la valeur à un nombre entier. Si vous avez besoin d'une valeur fractionnaire, utilisez [`element.getBoundingClientRect()`](/fr/docs/Web/API/Element/getBoundingClientRect).

## Valeur

Un nombre.

## Exemple

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Exemple</title>
    <style>
      div {
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }

      #uneDiv {
        width: 100px;
      }

      button {
        margin-bottom: 2em;
      }
    </style>
  </head>

  <body>
    <div id="uneDiv">FooBar-FooBar-FooBar-FooBar</div>
    <button id="unBouton">Vérifier le débordement</button>

    <div id="uneAutreDiv">FooBar-FooBar-FooBar-FooBar</div>
    <button id="unAutreBouton">Vérifier le débordement</button>
  </body>
  <script>
    const boutonUn = document.getElementById("unBouton");
    const boutonDeux = document.getElementById("unAutreBouton");
    const blocUn = document.getElementById("uneDiv");
    const blocDeux = document.getElementById("uneAutreDiv");

    // vérifie pour déterminer si un débordement se produit
    function isOverflowing(element) {
      return element.scrollWidth > element.offsetWidth;
    }

    function alertOverflow(element) {
      if (isOverflowing(element)) {
        alert("Le contenu à débordé du cadre.");
      } else {
        alert("Aucun débordement !");
      }
    }

    boutonUn.addEventListener("click", () => {
      alertOverflow(blocUn);
    });
    boutonDeux.addEventListener("click", () => {
      alertOverflow(blocDeux);
    });
  </script>
</html>
```

### Résultat

{{EmbedLiveSample('Exemple')}}

## Spécifications

{{Specifications}}

## Compabilité des navigateurs

{{Compat}}

## Voir aussi

- La propriété [`Element.clientWidth`](/fr/docs/Web/API/Element/clientWidth)
- La propriété [`HTMLElement.offsetWidth`](/fr/docs/Web/API/HTMLElement/offsetWidth)
- [Déterminer les dimensions des éléments](/fr/docs/Web/API/CSS_Object_Model/Determining_the_dimensions_of_elements)
