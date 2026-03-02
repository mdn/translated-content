---
title: Scripts
slug: Web/SVG/Guides/Scripting
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Il existe plusieurs façons de créer et de manipuler du SVG avec JavaScript.
Ce document décrit la gestion des évènements, l'interactivité et le travail avec du contenu SVG intégré.

Vous pouvez remplacer les comportements par défaut du navigateur avec la méthode `evt.preventDefault()`, ajouter des gestionnaires d'évènements aux objets avec la syntaxe `element.addEventListener(event, function, useCapture)`, et définir les propriétés d'un élément avec une syntaxe comme `svgElement.style.setProperty("fill-opacity", "0.0", "")`. Notez la présence des trois arguments pour définir les propriétés.

## Empêcher le comportement par défaut dans le code d'évènement

Lorsque vous écrivez du code de glisser-déposer, il arrive que le texte de la page soit accidentellement sélectionné pendant le déplacement. Ou si vous souhaitez utiliser la touche Retour arrière dans votre code, vous voulez remplacer le comportement par défaut du navigateur lorsque cette touche est pressée, qui est de revenir à la page précédente. La méthode `evt.preventDefault()` vous permet de faire cela.

## Utiliser `eventListeners` avec des objets

Les méthodes `addEventListener()` et `removeEventListener()` sont très utiles pour écrire du SVG interactif. Vous pouvez passer un objet qui implémente l'interface `handleEvent` comme second paramètre à ces méthodes.

```js
function myRect(x, y, w, h, message) {
  this.message = message;

  this.rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
  this.rect.setAttributeNS(null, "x", x);
  this.rect.setAttributeNS(null, "y", y);
  this.rect.setAttributeNS(null, "width", w);
  this.rect.setAttributeNS(null, "height", h);
  document.documentElement.appendChild(this.rect);

  this.rect.addEventListener("click", this);

  this.handleEvent = (evt) => {
    switch (evt.type) {
      case "click":
        alert(this.message);
        break;
    }
  };
}
```

## Script inter-document

### Référencer du SVG intégré

Lorsque vous utilisez du SVG dans du HTML, Adobe SVG Viewer 3.0 inclut automatiquement une propriété de fenêtre appelée `svgDocument` qui pointe vers le document SVG. Ce n'est pas le cas pour l'implémentation native SVG de Mozilla&nbsp;; par conséquent, l'utilisation de `window.svgDocument` ne fonctionne pas dans Mozilla. À la place, vous pouvez utiliser

```js
const svgDoc = document.embeds["name_of_svg"].getSVGDocument();
```

pour obtenir une référence vers un document SVG intégré.

La meilleure façon d'accéder au {{DOMxRef("Document")}} représentant un document SVG est d'utiliser {{DOMxRef("HTMLIFrameElement.contentDocument")}} (si le document est présenté dans une balise {{HTMLElement("iframe")}}) ou {{DOMxRef("HTMLObjectElement.contentDocument")}} (si le document est présenté dans une balise {{HTMLElement("object")}}), comme ceci&nbsp;:

```js
const svgDoc = document.getElementById("iframe_element").contentDocument;
```

De plus, les éléments {{HTMLElement("iframe")}}, {{HTMLElement("embed")}} et {{HTMLElement("object")}} proposent une méthode `getSVGDocument()`, qui retourne le {{DOMxRef("XMLDocument")}} représentant le SVG intégré ou `null` si l'élément ne représente pas un document SVG.

Vous pouvez aussi utiliser `document.getElementById("svg_elem_name").getSVGDocument()`, ce qui donne le même résultat.

> [!NOTE]
> Vous pouvez trouver de la documentation faisant référence à une interface `SVGDocument`. Avant SVG 2, les documents SVG étaient représentés avec cette interface. Désormais, les documents SVG sont représentés avec l'interface {{DOMxRef("XMLDocument")}}.

### Appeler des fonctions JavaScript

Lorsque vous appelez une fonction JavaScript présente dans le fichier HTML depuis un fichier SVG intégré dans un document HTML, vous devez utiliser `parent.functionName()` pour référencer la fonction. Bien que le plugin Adobe SVG viewer autorise l'utilisation de `functionName()`, ce n'est pas la méthode recommandée.

> [!NOTE]
> Selon le [wiki SVG <sup>(angl.)</sup>](https://web.archive.org/web/20100223210744/http://wiki.svg.org/Inter-Document_Communication), la variable JS `"parent"` ne fonctionne pas dans la version 6 du plugin Adobe SVG preview. La solution proposée est d'utiliser `"top"` à la place de `"parent"`. Comme il s'agit d'une version bêta de leur plugin, on peut probablement ignorer ce problème.

Vous trouverez plus d'informations et des exemples sur la [page wiki SVG dédiée au script inter-document <sup>(angl.)</sup>](https://web.archive.org/web/20100223210744/http://wiki.svg.org/Inter-Document_Communication).

## `setProperty` possède trois paramètres

La fonction `svgElement.style.setProperty("fill-opacity", "0.0")` génère une `DOMException` - `SYNTAX ERR` dans Mozilla. Ce comportement est défini par le W3C dans la spécification DOM Level 2 Style. La fonction `setProperty` est définie comme une fonction avec trois paramètres. L'exemple ci-dessus peut être remplacé par `'svgElement.style.setProperty("fill-opacity", "0.0", "")'`, ce qui est conforme aux standards.

## Voir aussi

- [Wiki SVG sur le script et la programmation <sup>(angl.)</sup>](https://web.archive.org/web/20100212202713/http://wiki.svg.org/Main_Page#Scripting_and_Programming)
