---
title: "Element : évènement contentvisibilityautostatechange"
short-title: contentvisibilityautostatechange
slug: Web/API/Element/contentvisibilityautostatechange_event
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef("CSS Containment")}}

L'évènement **`contentvisibilityautostatechange`** se déclenche sur tout élément ayant {{CSSxRef("content-visibility", "content-visibility: auto")}} défini lorsqu'il commence ou cesse d'être [pertinent pour l'utilisateur·ice](/fr/docs/Web/CSS/Guides/Containment/Using#pertinent_pour_lutilisatrice_et_lutilisateur) et [de passer son contenu](/fr/docs/Web/CSS/Guides/Containment/Using#ignorer_le_contenu).

Tant que l'élément n'est pas pertinent (entre les évènements de début et de fin), l'agent utilisateur ignore le rendu de l'élément, y compris la mise en page et le dessin, ce qui peut améliorer considérablement la vitesse de rendu de la page.
L'évènement `contentvisibilityautostatechange` fournit un moyen pour le code d'une application de démarrer ou d'arrêter également les processus de rendu (par exemple, le dessin sur un {{HTMLElement("canvas")}}) lorsqu'ils ne sont pas nécessaires, économisant ainsi de la puissance de traitement.

Notez que même lorsqu'ils sont cachés à la vue, le contenu des éléments reste sémantiquement pertinent (par exemple, pour les utilisateur·ice·s de technologies d'assistance), il ne faut donc pas utiliser ce signal pour ignorer des mises à jour DOM sémantiquement significatives.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("contentvisibilityautostatechange", (event) => { })

oncontentvisibilityautostatechange = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("ContentVisibilityAutoStateChangeEvent")}}.

## Exemples

```js
const elementCanvas = document.querySelector("canvas");

elementCanvas.addEventListener("contentvisibilityautostatechange", changerEtat);
elementCanvas.style.contentVisibility = "auto";

function changerEtat(event) {
  if (event.skipped) {
    arreterChangerCanvas(elementCanvas);
  } else {
    demarrerChangerCanvas(elementCanvas);
  }
}

// Appeler ceci lorsque les mises à jour du canvas doivent commencer.
function demarrerChangerCanvas(canvas) {
  // …
}

// Appeler ceci lorsque les mises à jour du canvas doivent s'arrêter.
function arreterChangerCanvas(canvas) {
  // …
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("ContentVisibilityAutoStateChangeEvent")}}
- [La compartimentation CSS](/fr/docs/Web/CSS/Guides/Containment)
- La propriété {{CSSxRef("content-visibility")}}
- La propriété {{CSSxRef("contain")}}
