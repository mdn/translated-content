---
title: "Document : évènement fullscreenerror"
short-title: fullscreenerror
slug: Web/API/Document/fullscreenerror_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Fullscreen API")}}

L'évènement **`fullscreenerror`** de l'interface {{DOMxRef("Document")}} est déclenché lorsque le navigateur ne peut pas passer en mode plein écran.

Comme pour l'évènement [`fullscreenchange`](/fr/docs/Web/API/Document/fullscreenchange_event), deux évènements `fullscreenerror` sont déclenchés&nbsp;; le premier est envoyé à l'élément {{DOMxRef("Element")}} qui n'a pas pu changer de mode, et le second est envoyé au {{DOMxRef("Document")}} qui possède cet élément.

Pour certaines raisons pour lesquelles le passage en mode plein écran peut échouer, voir [le guide de l'API Fullscreen](/fr/docs/Web/API/Fullscreen_API/Guide).

Cet évènement n'est pas annulable.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("fullscreenerror", (event) => { })

onfullscreenerror = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("Event")}} générique.

## Exemples

```js
const requeteur = document.querySelector("div");

function gestionnaireErreurs(event) {
  console.error(
    "une erreur s'est produite lors du passage en mode plein écran",
  );
  console.log(event);
}

document.addEventListener("fullscreenerror", gestionnaireErreurs);
// ou
document.onfullscreenerror = gestionnaireErreurs;

requeteur.requestFullscreen();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Document/fullscreenchange_event", "fullscreenchange")}}
- L'évènement {{DOMxRef("Element/fullscreenerror_event", "fullscreenerror")}} de l'interface {{DOMxRef("Element")}}
- [L'API Fullscreen](/fr/docs/Web/API/Fullscreen_API)
- [Guide de l'API Fullscreen](/fr/docs/Web/API/Fullscreen_API/Guide)
