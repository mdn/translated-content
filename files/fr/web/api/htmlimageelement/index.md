---
title: HTMLImageElement
slug: Web/API/HTMLImageElement
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{APIRef("HTML DOM")}}

L'interface **`HTMLImageElement`** représente un élément HTML {{HTMLElement("img")}}, fournissant les propriétés et méthodes utilisées pour manipuler les éléments image.

{{InheritanceDiagram}}

## Constructeur

- {{domxref("HTMLImageElement.Image()", "Image()")}}
  - : Le constructeur `Image()` crée et retourne un nouvel objet `HTMLImageElement` représentant un élément HTML {{HTMLElement("img")}} qui n'est pas attaché à un arbre DOM. Il accepte des paramètres optionnels de largeur et de hauteur. Appelé sans paramètre, `new Image()` est équivalent à {{DOMxRef("Document.createElement()", "document.createElement('img')")}}.

## Propriétés d'instance

_Hérite des propriétés de son parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLImageElement.alt")}}
  - : Une chaîne de caractères qui reflète l'attribut HTML [`alt`](/fr/docs/Web/HTML/Reference/Elements/img#alt), indiquant le contenu de remplacement à afficher si l'image n'a pas été chargée.
- {{domxref("HTMLImageElement.attributionSrc")}} {{securecontext_inline}} {{experimental_inline}}
  - : Permet d'obtenir ou de définir l'attribut [`attributionsrc`](/fr/docs/Web/HTML/Reference/Elements/img#attributionsrc) sur un élément {{htmlelement("img")}} de façon programmatique, reflétant la valeur de cet attribut. `attributionsrc` indique que le navigateur doit envoyer un en-tête {{httpheader("Attribution-Reporting-Eligible")}} avec la requête d'image. Côté serveur, cela sert à déclencher l'envoi d'un en-tête {{httpheader("Attribution-Reporting-Register-Source")}} ou {{httpheader("Attribution-Reporting-Register-Trigger")}} dans la réponse, afin d'enregistrer une [source d'attribution](/fr/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources) ou un [déclencheur d'attribution](/fr/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers).
- {{domxref("HTMLImageElement.complete")}} {{ReadOnlyInline}}
  - : Retourne une valeur booléenne à `true` si le navigateur a fini de récupérer l'image, que ce soit avec succès ou non. Cela vaut aussi `true` si l'image n'a pas de valeur {{domxref("HTMLImageElement.src", "src")}} indiquant une image à charger.
- {{domxref("HTMLImageElement.crossOrigin")}}
  - : Une chaîne de caractères indiquant le paramétrage CORS pour cet élément image. Voir [les attributs de paramétrage du CORS](/fr/docs/Web/HTML/Reference/Attributes/crossorigin) pour plus de détails. Peut valoir `null` si CORS n'est pas utilisé.
- {{domxref("HTMLImageElement.currentSrc")}} {{ReadOnlyInline}}
  - : Retourne une chaîne de caractères représentant l'URL depuis laquelle l'image actuellement affichée a été chargée. Cette valeur peut changer si l'image est modifiée en fonction des conditions, par exemple via des [requêtes média](/fr/docs/Web/CSS/Guides/Media_queries).
- {{domxref("HTMLImageElement.decoding")}}
  - : Une chaîne de caractères optionnelle indiquant une préférence sur la façon dont le navigateur doit décoder l'image. Les valeurs possibles sont&nbsp;: `sync` (décodage synchrone), `async` (décodage asynchrone), ou `auto` (pas de préférence, valeur par défaut). Voir la page {{domxref("HTMLImageElement.decoding", "decoding")}} pour plus de détails.
- {{domxref("HTMLImageElement.fetchPriority")}}
  - : Une chaîne de caractères optionnelle indiquant une préférence sur la priorité de récupération de l'image par rapport aux autres images. Les valeurs possibles sont&nbsp;: `high` (priorité haute), `low` (priorité basse), ou `auto` (pas de préférence, valeur par défaut).
- {{domxref("HTMLImageElement.height")}}
  - : Un entier qui reflète l'attribut HTML [`height`](/fr/docs/Web/HTML/Reference/Elements/img#height), indiquant la hauteur affichée de l'image en pixels CSS.
- {{domxref("HTMLImageElement.isMap")}}
  - : Un booléen qui reflète l'attribut HTML [`ismap`](/fr/docs/Web/HTML/Reference/Elements/img#ismap), indiquant que l'image fait partie d'une carte côté serveur. Différent d'une carte côté client, qui utilise un élément `<img>` et un {{HTMLElement("map")}} contenant des {{HTMLElement("area")}} pour les zones cliquables. L'image _doit_ être contenue dans un élément {{HTMLElement("a")}}&nbsp;; voir la page `ismap` pour plus de détails.
- {{domxref("HTMLImageElement.loading")}}
  - : Une chaîne de caractères fournissant une indication au navigateur pour optimiser le chargement du document, en déterminant s'il faut charger l'image immédiatement (`eager`) ou à la demande (`lazy`).
- {{domxref("HTMLImageElement.naturalHeight")}} {{ReadOnlyInline}}
  - : Retourne un entier représentant la hauteur intrinsèque de l'image en pixels CSS, si disponible&nbsp;; sinon, retourne `0`. C'est la hauteur que l'image aurait si elle était affichée à sa taille naturelle.
- {{domxref("HTMLImageElement.naturalWidth")}} {{ReadOnlyInline}}
  - : Un entier représentant la largeur intrinsèque de l'image en pixels CSS, si disponible&nbsp;; sinon, retourne `0`. C'est la largeur que l'image aurait si elle était affichée à sa taille naturelle.
- {{domxref("HTMLImageElement.referrerPolicy")}}
  - : Une chaîne de caractères qui reflète l'attribut HTML [`referrerpolicy`](/fr/docs/Web/HTML/Reference/Elements/img#referrerpolicy), indiquant à l'{{Glossary("user agent")}} quelle politique de référent utiliser pour récupérer l'image. Voir l'article pour les valeurs possibles.
- {{domxref("HTMLImageElement.sizes")}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`sizes`](/fr/docs/Web/HTML/Reference/Elements/img#sizes). Cette chaîne spécifie une liste de tailles conditionnelles séparées par des virgules pour l'image&nbsp;; c'est-à-dire, pour une taille de zone d'affichage donnée, une taille d'image particulière sera utilisée. Voir la documentation de {{domxref("HTMLImageElement.sizes", "sizes")}} pour le format de cette chaîne.
- {{domxref("HTMLImageElement.src")}}
  - : Une chaîne de caractères qui reflète l'attribut HTML [`src`](/fr/docs/Web/HTML/Reference/Elements/img#src), contenant l'URL complète de l'image (y compris la base). Vous pouvez charger une autre image en modifiant l'URL dans l'attribut `src`.
- {{domxref("HTMLImageElement.srcset")}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`srcset`](/fr/docs/Web/HTML/Reference/Elements/img#srcset). Cela spécifie une liste d'images candidates, séparées par des virgules. Chaque image candidate est une URL suivie d'un espace, puis d'une chaîne indiquant la taille de l'image (largeur ou multiple de taille). Voir la page {{domxref("HTMLImageElement.srcset", "srcset")}} pour le format détaillé.
- {{domxref("HTMLImageElement.useMap")}}
  - : Une chaîne de caractères reflétant l'attribut HTML [`usemap`](/fr/docs/Web/HTML/Reference/Elements/img#usemap), contenant l'URL locale de la page du {{HTMLElement("map")}} décrivant la carte d'image à utiliser. L'URL locale commence par `#` suivi de l'ID de l'élément `<map>`, par exemple `#ma-carte`. Le `<map>` contient à son tour des {{HTMLElement("area")}} pour les zones cliquables.
- {{domxref("HTMLImageElement.width")}}
  - : Un entier qui reflète l'attribut HTML [`width`](/fr/docs/Web/HTML/Reference/Elements/img#width), indiquant la largeur affichée de l'image en pixels CSS.
- {{domxref("HTMLImageElement.x")}} {{ReadOnlyInline}}
  - : Un entier indiquant le décalage horizontal du bord gauche de la boîte de mise en page CSS de l'image par rapport à l'origine du bloc contenant {{HTMLElement("html")}}.
- {{domxref("HTMLImageElement.y")}} {{ReadOnlyInline}}
  - : Un entier indiquant le décalage vertical du bord supérieur de la boîte de mise en page CSS de l'image par rapport à l'origine du bloc contenant {{HTMLElement("html")}}.

## Propriétés obsolètes

- {{domxref("HTMLImageElement.align")}} {{deprecated_inline}}
  - : Une chaîne de caractères indiquant l'alignement de l'image par rapport au contexte environnant. Les valeurs possibles sont "left", "right", "justify" et "center". Obsolète&nbsp;: utilisez plutôt le CSS (par exemple {{cssxref("text-align")}}, qui fonctionne aussi pour les images) pour définir l'alignement.
- {{domxref("HTMLImageElement.border")}} {{deprecated_inline}}
  - : Une chaîne de caractères définissant la largeur de la bordure entourant l'image. Obsolète&nbsp;: utilisez la propriété CSS {{cssxref("border")}} à la place.
- {{domxref("HTMLImageElement.hspace")}} {{deprecated_inline}}
  - : Un entier indiquant l'espace (en pixels) à laisser vide à gauche et à droite de l'image.
- {{domxref("HTMLImageElement.longDesc")}} {{deprecated_inline}}
  - : Une chaîne de caractères spécifiant l'URL où trouver une description longue du contenu de l'image. Cela servait à transformer l'image en lien automatiquement. En HTML moderne, placez plutôt un `<img>` dans un élément {{HTMLElement("a")}} définissant le lien.
- {{domxref("HTMLImageElement.name")}} {{deprecated_inline}}
  - : Une chaîne de caractères représentant le nom de l'élément.
- {{domxref("HTMLImageElement.vspace")}} {{deprecated_inline}}
  - : Un entier indiquant l'espace vide (en pixels) à laisser au-dessus et en dessous de l'image.

## Méthodes d'instance

_Hérite des méthodes de son parent, {{domxref("HTMLElement")}}._

- {{domxref("HTMLImageElement.decode()")}}
  - : Retourne une promesse ({{jsxref("Promise")}}) qui se résout lorsque l'image est décodée et qu'il est sûr de l'ajouter au DOM. Cela évite que le rendu de l'image ne bloque la prochaine frame si une image non décodée était ajoutée au DOM.

## Erreurs

Si une erreur se produit lors du chargement ou du rendu de l'image, et qu'un gestionnaire d'évènement `onerror` a été configuré pour l'évènement {{domxref("HTMLElement/error_event", "error")}}, ce gestionnaire sera appelé. Cela peut arriver dans plusieurs situations&nbsp;:

- L'attribut [`src`](/fr/docs/Web/HTML/Reference/Elements/img#src) est vide ou `null`.
- L'URL `src` indiquée est la même que celle de la page courante.
- L'image indiquée est corrompue et ne peut pas être chargée.
- Les métadonnées de l'image sont corrompues de telle sorte qu'il est impossible d'en récupérer les dimensions, et aucune dimension n'a été spécifiée dans les attributs de l'élément `<img>`.
- L'image indiquée est dans un format non pris en charge par l'{{Glossary("user agent", "agent utilisateur")}}.

## Exemple

```js
const img1 = new Image(); // Constructeur Image
img1.src = "image1.png";
img1.alt = "texte alternatif";
document.body.appendChild(img1);

const img2 = document.createElement("img"); // Utilisation de HTMLImageElement via le DOM
img2.src = "image2.jpg";
img2.alt = "autre texte alternatif";
document.body.appendChild(img2);

// Utiliser la première image du document
alert(document.images[0].src);
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Élément HTML implémentant cette interface&nbsp;: {{HTMLElement("img")}}
