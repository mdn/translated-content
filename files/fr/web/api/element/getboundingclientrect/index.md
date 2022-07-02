---
title: Element.getBoundingClientRect()
slug: Web/API/Element/getBoundingClientRect
translation_of: Web/API/Element/getBoundingClientRect
---
{{APIRef("DOM")}}

La méthode **`Element.getBoundingClientRect()`** retourne un objet {{domxref("DOMRect")}} fournissant des informations sur la taille d'un élément et sa position relative par rapport à la [zone d'affichage](/fr/docs/Glossary/Viewport).

## Syntaxe

```js
objetRect = object.getBoundingClientRect();
```

### Valeur de retour

La valeur de retour est un objet {{domxref("DOMRect")}} qui est le plus petit rectangle contenant l'élément en entier, incluant sa zone de remplissage et la largeur de sa bordure. Les propriétés `left`, `top`, `right`, `bottom`, `x`, `y`, `width`, et `height`, décrivent la position et la taille du rectangle en pixels. Les propriétés autres que `width` et `height` sont relatives au coin en haut à gauche de la zone d'affichage.![Schéma d'un élément dans sa zone de remplissage, décrivant les propriétés retournées par la méthode.](element-box-diagram.png)

Les propriétés `width` et `height` de l'objet {{domxref("DOMRect")}} retourné par la méthode incluent le `padding` et `border-width`, et non pas seulement la largeur/hauteur du contenu. Avec le modèle standard de boîte, cela correspondrait à la propriété `width` ou `height` de l'élément + `padding` + `border-width`. Mais si [`box-sizing: border-box`](/fr/docs/Web/CSS/box-sizing) est défini pour l'élément, cela correpondrait seulement `width` ou `height`.

La valeur retournée peut être conceptualisée comme l'union des rectangles retournés par {{domxref("Element.getClientRects", "getClientRects()")}} pour l'élément, i.e. les boîtes de bordure CSS associées à l'élément.

Les boîtes de bordure vides sont complètement ignorées. Si toutes les boîtes de bordure associées à l'élément sont vides, la méthode renvoie alors un rectangle pour lequel `width` et `height` valent 0 et où `top` et `left` correspondent au coin en haut à gauche de la première boîte de bordure (dans l'ordre du contenu) de l'élément.

La distance de défilement qui a été parcourue dans la zone d'affichage (ou n'importe quel élément que l'on peut faire défiler) est prise en compte pour calculer le rectangle de délimitation. Cela signifie que les côtés du rectangle de délimitation (`top`, `right`, `bottom`, `left`) change ses valeurs à chaque fois que la position de défilement change (parce que les valeurs sont relatives à la zone d'affichage et ne sont pas absolues).

Si vous avez besoin d'un rectangle de délimitation relatif au coin supérieur gauche du document, ajoutez simplement la position actuelle de défilement aux propriétés `top` et `left` (elles peuvent être obtenues en utilisant {{domxref("window.scrollX")}} et {{domxref("window.scrollY")}}) pour avoir un rectangle de délimitation indépendant de la position de défilement actuelle.

### Solution de prise en charge multi-navigateurs

Les scripts qui doivent avoir une haute compatibilité pour l'ensemble des navigateurs peuvent utiliser `window.pageXOffset` et `window.pageYOffset` plutôt que `window.scrollX` et `window.scrollY.` Les scripts qui ne peuvent pas utiliser `window.pageXOffset`, `window.pageYOffset`, `window.scrollX` ou `window.scrollY` pourront utiliser cette méthode :

```js
// Pour scrollX
(((t = document.documentElement) || (t = document.body.parentNode))
  && typeof t.ScrollLeft == 'number' ? t : document.body).ScrollLeft
// Pour scrollY
(((t = document.documentElement) || (t = document.body.parentNode))
  && typeof t.ScrollTop == 'number' ? t : document.body).ScrollTop
```

## Exemple

Ce simple exemple récupère l'objet `DOMRect` représentant le rectangle de délimitation dans le client d'un simple élément div, et affiche ses propriétés dessous.

```html
<div></div>
```

```css
div {
  width: 400px;
  height: 200px;
  padding: 20px;
  margin: 50px auto;
  background: purple;
}
```

```js
let elem = document.querySelector('div');
let rect = elem.getBoundingClientRect();
for (let key in rect) {
  if(typeof rect[key] !== 'function') {
    let para = document.createElement('p');
    para.textContent  = `${ key } : ${ rect[key] }`;
    document.body.appendChild(para);
  }
}
```

{{EmbedLiveSample('Exemple', '100%', 640)}}

Remarquez comme les `width`/`height` sont égales à
`width`/`height` + `padding`.

Remarquez aussi que les valeurs de `x`/`left`,
`y`/`top`, `right`, et `bottom` sont égales à la distance absolue depuis le bord de la zone d'affichage jusqu'au coté de l'element dans chaque cas.

## Spécifications

| Spécification                                                                                                                        | Statut                           | Commentaire          |
| ------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | -------------------- |
| {{SpecName("CSSOM View", "#dom-element-getboundingclientrect", "Element.getBoundingClientRect()")}} | {{Spec2("CSSOM View")}} | Définition initiale. |

### Notes

L'objet `DOMRect` retourné peut être modifié dans les navigateurs modernes. Cela n'était pas le cas avec ceux plus anciens qui retournaient effectivement `DOMRectReadOnly`. Dans IE et Edge, ne pas pouvoir ajouter les propriétés manquantes à l'objet [`ClientRect`](https://docs.microsoft.com/fr-fr/previous-versions/hh826029(v=vs.85)) qu'ils retournent empêche d'ajouter le support de `x` et `y`.

En raison de problèmes de compatibilité (voir ci-dessous), il est plus sûr de se limiter aux propriétés `top`, `left`, `right`, et `bottom`.

Les propriétés dans l'objet `DOMRect` retourné ne sont pas possèdées pas ce dernier. Tandis que les opérateurs `in` et `for...in` vont trouver les propriétés retournées, les autres APIs comme Object.keys échoueront. De plus, et de façon inattendue, les fonctionnalités ES2015 et plus récentes telles que `Object.assign()` et les paramètres du reste / la décomposition d'un objet, ne réussiront pas à copier les propriétés retournées.

```js
rect = elt.getBoundingClientRect()
// The result in emptyObj is {}
emptyObj = Object.assign({}, rect)
emptyObj = { ...rect }
{ width, ...emptyObj } = rect
```

Les propriétés `top`, `left`, `right`, et `bottom` de `DOMRect` sont calculées en utilisant les valeurs des autres propriétés de l'objet.

## Compatibilité des navigateurs

{{Compat("api.Element.getBoundingClientRect")}}

## Voir aussi

- {{domxref("Element.getClientRects", "getClientRects()")}}
- [MSDN: `getBoundingClientRect`](<https://msdn.microsoft.com/en-us/library/ms536433(VS.85).aspx>)
- [MSDN: `ClientRect`](<https://msdn.microsoft.com/en-us/library/hh826029(VS.85).aspx>), une version plus ancienne de `DOMRect`
