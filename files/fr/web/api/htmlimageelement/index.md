---
title: HTMLImageElement
slug: Web/API/HTMLImageElement
translation_of: Web/API/HTMLImageElement
---
{{APIRef("HTML DOM")}}

L'interface  **`HTMLImageElement`** fournit des propriétés et des méthodes spéciales pour manipuler la mise en page et la présentation des éléments {{HTMLElement("img")}} .

## Propriétés

_Hérite les propriétés de son parent, {{domxref ("HTMLElement")}}_

- {{domxref("HTMLImageElement.align")}} {{deprecated_inline}}
  - : Est une {{domxref("DOMString")}} _(chaîne de caractères)_ qui indique l'alignement de l'image en respectant le contexte environnant. Les valeurs possibles sont `"left"`_(gauche)_, `"right"`_(droite)_, `"justify"`_(justifié)_, et `"center"`_(centré) ._
- {{domxref("HTMLImageElement.alt")}}
  - : Est une {{domxref("DOMString")}} _(chaîne de caractères)_ qui reflète les attributs HTML {{htmlattrxref("alt", "img")}} , ceux-ci indiquant le recul du contexte de l'image.
- {{domxref("HTMLImageElement.border")}} {{deprecated_inline}}
  - : Est une {{domxref("DOMString")}} _(chaîne de caractères)_ qui est responsable de la largeur de la bordure entourant l'image. Il est maintenant déprécié et la propriété CSS {{cssxref("border")}} est utilisée à la place.
- {{domxref("HTMLImageElement.complete")}} {{readonlyInline}}
  - : Retourne un {{domxref("Boolean")}} _(booléen)_ qui est `true` _(vrai)_ si le navigateur a fini de chercher l'image, que ce soit avec succès ou non. Il affiche aussi "true" si l'image n'a pas de valeur {{domxref("HTMLImageElement.src", "src")}} .
- {{domxref("HTMLImageElement.crossOrigin")}}
  - : Est une {{domxref("DOMString")}} _(chaîne de caractères)_ représentant le paramètre CORS défini pour cet élément image. Voir [Attributs de règlage du CORS](/fr/docs/Web/HTML/Reglages_des_attributs_CORS) pour plus de détails.
- {{domxref("HTMLImageElement.currentSrc")}} {{readonlyInline}}{{experimental_inline}}
  - : Retourne une {{domxref("DOMString")}} *(chaîne de caractères)* représentant l'URL de l'image courante affichée (qui peut changer, par exemple en réponse à une requête multimédia).
- {{domxref("HTMLImageElement.height")}}
  - : Est un `unsigned long` _(non signé long)_ qui reflète l'attibut HTML {{htmlattrxref("height", "img")}} indiquant la hauteur du rendu de l'image en pixels CSS.
- {{domxref("HTMLImageElement.hspace")}} {{deprecated_inline}}
  - : Est un `long` représentant l'espace de chaque côté de l'image.
- {{domxref("HTMLImageElement.isMap")}}
  - : Est un {{domxref("Boolean")}} _(booléen)_ qui reflète l'attribut HTML {{htmlattrxref("ismap", "img")}} indiquant que l'image fait partie d'une carte d'image côté serveur.
- {{domxref("HTMLImageElement.longDesc")}} {{deprecated_inline}}
  - : Est une {{domxref("DOMString")}} *(chaîne de caractères)* représentant l'URL d'une longue description de l'image.
- {{domxref("HTMLImageElement.lowSrc")}} {{deprecated_inline}}
  - : Est une {{domxref("DOMString")}} *(chaîne de caractères)* qui fait référence à une copie de faible qualité (mais plus rapide à charger) de l'image.
- {{domxref("HTMLImageElement.name")}} {{deprecated_inline}}
  - : Est une {{domxref("DOMString")}} *(chaîne de caractères)* représentant le nom de l'élément.
- {{domxref("HTMLImageElement.naturalHeight")}} {{readonlyInline}}
  - : Retourne un `unsigned long`  représentant la hauteur intrinsèque de l'image en pixels CSS, si elle est disponible ; sinon, 0 est affiché.
- {{domxref("HTMLImageElement.referrerPolicy")}} {{experimental_inline}}
  - : Est une {{domxref("DOMString")}} *(chaîne de caractères)* qui reflète l'attribut HTML {{htmlattrxref("referrerpolicy", "img")}}  indiquant la référence à utiliser pour récupérer l'image.
- {{domxref("HTMLImageElement.src")}}
  - : Est une {{domxref("DOMString")}} *(chaîne de caractères)* qui reflète l'attribut HTML  {{htmlattrxref("src", "img")}} contenant l'URL complète de l'image y compris l'URI de base.
- {{domxref("HTMLImageElement.sizes")}} {{experimental_inline}}
  - : Est une {{domxref("DOMString")}} *(chaîne de caractères)* reflétant l'attribut HTML {{htmlattrxref("sizes", "img")}} _(taille)_.
- {{domxref("HTMLImageElement.srcset")}} {{experimental_inline}}
  - : Est une {{domxref("DOMString")}} *(chaîne de caractères)* reflétant l'attribut HTML {{htmlattrxref("srcset", "img")}} , qui contient une liste d'images candidates, séparées par une virgule. Une image candidate est une URL suivie d'un `'w'`  avec la largeur de l'image ou d'un `'x'`  avec la densité en pixels.
- {{domxref("HTMLImageElement.useMap")}}
  - : Est une {{domxref("DOMString")}} *(chaîne de caractères)* qui reflète l'attribut HTML {{htmlattrxref("usemap", "img")}} contenant une URL partielle d'un élément "map" _(carte)_.
- {{domxref("HTMLImageElement.vspace")}} {{deprecated_inline}}
  - : Est un `long` représentant l'espace au-dessus et en-dessous de l'image.
- {{domxref("HTMLImageElement.width")}}
  - : Est un `unsigned long` qui reflète l'attribut HTML {{htmlattrxref("width", "img")}} indiquant la largeur rendue de l'image en pixels CSS.
- {{domxref("HTMLImageElement.x")}} {{readonlyInline}}{{experimental_inline}}
  - : Retourne un `long`  représentant le décalage horizontal à partir de la couche la plus proche. Cette propriété imite un comportement ancien de Netscape 4.
- {{domxref("HTMLImageElement.y")}} {{readonlyInline}} {{experimental_inline}}
  - : Retourne un `long` représentant le décalage vertical à partir de la couche la plus proche. Cette propriété imite un comportement ancien de Netscape 4.

## Méthodes

_Hérite les propriétés de son parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLImageElement.Image()", "Image()")}}
  - : Le constructeur d'image, comprend deux propriétés `unsigned`  et `long`, qui sont la largeur et la hauteur de la ressource, et crée une instance de `HTMLImageElement` , non insérée dans une arborescence DOM.

## Erreurs

Si une erreur apparaît pendant un essai de chargement ou de rendu de l'image, et si un gestionnaire d'évènements {{htmlattrxref("onerror")}} a été configuré pour gérer les évènements {{event("error")}} , ce gestionnaire est appelé. Cela peut se produire dans un certain nombre de situations, y compris :

- L'attribut  {{htmlattrxref("src", "img")}} est vide ou `null`.
- L'URL spécifiée de `src`  est la même que l'URL de la page actuelle de l'utilisateur.
- L'image spécifiée est corrompue de telle manière qu'elle ne peut être chargée.
- Les métadonnées de l'image spécifiée sont corrompues empêchant de récupérer ses dimensions,  et aucune dimension n'est spécifiée dans les attributs de l'élément `<img>`.
- L'image spécifiée est dans un format non supporté par l'"{{Glossary("user agent")}}".

## Exemple

```js
var img1 = new Image(); //  Constructeur HTML5
img1.src = 'image1.png';
img1.alt = 'alt';
document.body.appendChild(img1);

var img2 = document.createElement('img'); // utilise DOM HTMLImageElement
img2.src = 'image2.jpg';
img2.alt = 'alt text';
document.body.appendChild(img2);

// en utilisant la première image dans le document
alert(document.images[0].src);
```

## Spécifications

| Spécification                                                                                                                                    | Statut                               | Commentaire                                                                                                                                                                                                                                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName('Referrer Policy', '#referrer-policy-delivery-referrer-attribute', 'referrer attribute')}}         | {{Spec2('Referrer Policy')}} | Ajoute la propriété `referrerPolicy` .                                                                                                                                                                                                                                                                                                                                                         |
| {{SpecName("CSSOM View", "#excensions-to-the-htmlimageelement-interface", "Extensions to HTMLImageElement")}} | {{Spec2('CSSOM View')}}     | Ajoute les propriétés `x` et`y` .                                                                                                                                                                                                                                                                                                                                                              |
| {{SpecName('HTML WHATWG', "embedded-content.html#the-img-element", "HTMLImageElement")}}                             | {{Spec2('HTML WHATWG')}}     | Les propriétés suivantes sont ajoutées : `srcset`, `currentSrc` et `sizes`.                                                                                                                                                                                                                                                                                                                    |
| {{SpecName('HTML5 W3C', "embedded-content-0.html#the-img-element", "HTMLImageElement")}}                             | {{Spec2('HTML5 W3C')}}         | Un constructeur (avec 2 paramètres facultatifs) est ajouté. Les propriétés suivantes sont maintenant obsolètes : `name`, `border`, `align`, `hspace`, `vspace`, et `longdesc`. Les propriétés suivantes sont maintenant `unsigned et long`, iau lieu de `long`: `height` et `width`. Les propriétés suivantes ont été ajoutées : `crossorigin`, `naturalWidth`, `naturalHeight` et `complete`. |
| {{SpecName('DOM2 HTML', 'html.html#ID-17701901', 'HTMLImgElement')}}                                                     | {{Spec2('DOM2 HTML')}}         | La propriété `lowSrc` a été supprimée. La propriété est maintenant `long`, au lieu des `DOMString`: `height`, `width`, `hspace` et `vspace`.                                                                                                                                                                                                                                                   |
| {{SpecName('DOM1', 'level-one-html.html#ID-17701901', 'HTMLImgElement')}}                                                 | {{Spec2('DOM1')}}             | définition initiale.                                                                                                                                                                                                                                                                                                                                                                           |

## Compatibilité des navigateurs

{{Compat("api.HTMLImageElement")}}

## Voir aussi

L'élément HTML implémentant cette interface : {{HTMLElement("img")}}
