---
title: "Element : méthode checkVisibility()"
short-title: checkVisibility()
slug: Web/API/Element/checkVisibility
l10n:
  sourceCommit: 978aef2f7339917b6032c687b675402ae664de4d
---

{{APIRef("DOM")}}

La méthode **`checkVisibility()`** de l'interface {{DOMxRef("Element")}} vérifie si l'élément est potentiellement visible.

La méthode retourne `false` dans l'un des cas suivants&nbsp;:

- L'élément n'a pas de boîte associée, par exemple parce que la propriété CSS {{CSSxRef("display")}} est définie sur [`none`](/fr/docs/Web/CSS/Reference/Properties/display#none) ou [`contents`](/fr/docs/Web/CSS/Reference/Properties/display#contents).
- L'élément n'est pas rendu parce que l'élément ou un élément ancêtre définit la propriété {{CSSxRef("content-visibility")}} sur [`hidden`](/fr/docs/Web/CSS/Reference/Properties/content-visibility#hidden).

Le paramètre optionnel permet d'effectuer des vérifications supplémentaires pour tester d'autres interprétations de ce que signifie «&nbsp;visible&nbsp;».
Par exemple, vous pouvez vérifier si un élément a une opacité de `0`, si la valeur de la propriété {{CSSxRef("visibility")}} de l'élément le rend invisible, ou si la propriété {{CSSxRef("content-visibility")}} de l'élément a une valeur de [`auto`](/fr/docs/Web/CSS/Reference/Properties/content-visibility#auto) et que son rendu est actuellement ignoré.

Notez qu'une valeur de retour de `true` ne garantit pas que l'élément est visible pour l'utilisateur·ice, seulement qu'il peut l'être.
Les éléments en dehors de la zone d'affichage ou occultés par d'autres contenus peuvent toujours renvoyer `true`.

## Syntaxe

```js-nolint
checkVisibility(options)
```

### Paramètres

- `options` {{Optional_Inline}}
  - : Un objet indiquant les vérifications supplémentaires à effectuer.
    Les options possibles sont&nbsp;:
    - `contentVisibilityAuto`
      - : `true` pour vérifier si la propriété {{CSSxRef("content-visibility")}} de l'élément a (ou hérite) la valeur [`auto`](/fr/docs/Web/CSS/Reference/Properties/content-visibility#auto), et que son rendu est actuellement ignoré.
        `false` par défaut.
    - `opacityProperty`
      - : `true` pour vérifier si la propriété {{CSSxRef("opacity")}} de l'élément a (ou hérite) une valeur de `0`.
        `false` par défaut.
    - `visibilityProperty`
      - : `true` pour vérifier si l'élément est invisible en raison de la valeur de sa propriété {{CSSxRef("visibility")}}.
        `false` par défaut.

        > [!NOTE]
        > Les éléments invisibles incluent ceux qui ont [`visibility: hidden`](/fr/docs/Web/CSS/Reference/Properties/visibility#hidden), et certains types d'éléments qui ont [`visibility: collapse`](/fr/docs/Web/CSS/Reference/Properties/visibility#collapse).

    - `checkOpacity`
      - : Un alias historique pour [`opacityProperty`](#opacityproperty).
    - `checkVisibilityCSS`
      - : Un alias historique pour [`visibilityProperty`](#visibilityproperty).

### Valeur de retour

`false` si l'une des conditions suivantes est remplie, sinon `true`&nbsp;:

- L'élément n'est associé à aucune boîte.
- La propriété {{CSSxRef("content-visibility")}} de l'élément a (ou hérite) une valeur de [`hidden`](/fr/docs/Web/CSS/Reference/Properties/visibility#hidden).
- `opacityProperty` (ou `checkOpacity`) vaut `true` et la propriété {{CSSxRef("opacity")}} de l'élément a (ou hérite) une valeur de `0`.
- `visibilityProperty` (ou `checkVisibilityCSS`) vaut `true` et l'élément est invisible en raison de la valeur de sa propriété {{CSSxRef("visibility")}}.
- `contentVisibilityAuto` vaut `true`, la propriété {{CSSxRef("content-visibility")}} a (ou hérite) une valeur de [`auto`](/fr/docs/Web/CSS/Reference/Properties/content-visibility#auto), et le rendu de l'élément est ignoré.

## Exemples

### Tester `checkVisibility()` avec du CSS varié

L'exemple suivant vous permet de tester comment le résultat de `checkVisibility()` peut varier en fonction de différentes valeurs des propriétés CSS `display`, `content-visibility`, `visibility` et `opacity`.

#### HTML

Le code HTML définit des éléments `<select>` pour les propriétés CSS qui influencent les résultats de `checkVisibility()`.
Les premières valeurs (sélectionnées par défaut) font que `checkVisibility()` retourne `true` lorsqu'elles sont appliquées à un élément, tandis que les autres valeurs modifient la visibilité.

```html
<select id="css_affichage" name="css_affichage">
  <option value="block" selected>display: block</option>
  <option value="none">display: none</option>
  <option value="contents">display: contents</option>
</select>

<select id="css_visibilite_contenu" name="css_visibilite_contenu">
  <option value="visible" selected>content-visibility: visible</option>
  <option value="hidden">content-visibility: hidden</option>
  <option value="auto">content-visibility: auto</option>
</select>

<select id="css_opacite" name="css_opacite">
  <option value="1" selected>opacity: 1</option>
  <option value="0">opacity: 0</option>
</select>

<select id="css_visibilite" name="css_visibilite">
  <option value="visible" selected>visibility: visible</option>
  <option value="hidden">visibility: hidden</option>
  <option value="collapse">visibility: collapse</option>
</select>
```

Ensuite, un élément `<pre>` sert à afficher le résultat de l'appel à `checkVisibility()` lorsqu'aucune option n'est passée en paramètre, ainsi que pour chaque valeur d'option.
Enfin, nous avons l'élément qui est testé (auquel nous appliquons les valeurs CSS sélectionnées).

```html
<pre id="resultat_sortie"></pre>
<div id="element_teste">L'élément à tester pour la visibilité.</div>
```

#### CSS

Le CSS met simplement en évidence l'élément à tester.

```css
#element_teste {
  border: solid;
  border-color: blue;
}
```

#### JavaScript

Le code ci-dessous récupère chacun des éléments `<select>`.
La méthode `actualiserCss()` est appelée au démarrage et à chaque fois que les éléments de sélection changent, afin d'appliquer le CSS sélectionné à l'élément cible.

```js
const affichageCssSelect = document.getElementById("css_affichage");
const visibiliteContenuAffichageCss = document.getElementById(
  "css_visibilite_contenu",
);
const opaciteCssSelect = document.getElementById("css_opacite");
const visibiliteCssSelect = document.getElementById("css_visibilite");

const resultatSortie = document.getElementById("resultat_sortie");
const elementTeste = document.getElementById("element_teste");

actualiserCss();

const selecteursCss = document.querySelectorAll("select");
selecteursCss.forEach((select) => {
  select.addEventListener("change", (event) => {
    actualiserCss();
  });
});

function actualiserCss() {
  // Applique les propriétés CSS sélectionnées à l'élément cible
  elementTeste.style.display = affichageCssSelect.value;
  elementTeste.style.contentVisibility = visibiliteContenuAffichageCss.value;
  elementTeste.style.opacity = opaciteCssSelect.value;
  elementTeste.style.visibility = visibiliteCssSelect.value;

  // Appelle checkVisibility() sur l'élément en utilisant les options par défaut et chacune des options
  const resultatVisibiliteDefaut = elementTeste.checkVisibility();
  const resultatVisibiliteOpacite = elementTeste.checkVisibility({
    opacityProperty: true,
  });
  const resultatVisibiliteCss = elementTeste.checkVisibility({
    visibilityProperty: true,
  });
  const resultatVisibiliteContenuAuto = elementTeste.checkVisibility({
    contentVisibilityAuto: true,
  });
  // Affiche les résultats des tests
  resultatSortie.innerText = `Vérifications sur l'élément ci-dessous (peut être masqué) :
- Résultat de checkVisibility() : ${resultatVisibiliteDefaut}
- Résultat de checkVisibility({opacityProperty: true}) : ${resultatVisibiliteOpacite}
- Résultat de checkVisibility({visibilityProperty: true}) : ${resultatVisibiliteCss}
- Résultat de checkVisibility({contentVisibilityAuto: true}) : ${resultatVisibiliteContenuAuto}`;
}
```

#### Résultat

Les résultats sont affichés ci-dessous.
Si vous changez la sélection, les résultats s'appliquent à l'élément de test (contour bleu) et les résultats de `checkVisibility()` pour chaque réglage s'affichent.
Par exemple, si vous définissez `opacity: 0`, ce test (seul) indique `false`.
En revanche, si vous définissez `display: none`, tous les tests retournent `false`.

{{EmbedLiveSample("Tester `checkVisibility()` avec du CSS varié", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
