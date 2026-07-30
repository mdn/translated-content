---
title: "Element : évènement fullscreenerror"
short-title: fullscreenerror
slug: Web/API/Element/fullscreenerror_event
l10n:
  sourceCommit: f5e710f5c620c8d3c8b179f3b062d6bbdc8389ec
---

{{APIRef("Fullscreen API")}}

L'évènement **`fullscreenerror`** se déclenche lorsque le navigateur ne peut pas passer en mode plein écran.

Comme pour [l'évènement `fullscreenchange`](/fr/docs/Web/API/Element/fullscreenchange_event), deux évènements `fullscreenerror` sont déclenchés&nbsp;; le premier est envoyé à un {{DOMxRef("Element")}} qui n'a pas pu passer en mode plein écran, et le second est envoyé au {{DOMxRef("Document")}} qui possède cet élément.

Pour certaines raisons pour lesquelles le passage en mode plein écran peut échouer, voir [le guide de l'API Fullscreen](/fr/docs/Web/API/Fullscreen_API/Guide).

Cet évènement n'est pas annulable.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènement.

```js-nolint
addEventListener("fullscreenerror", (event) => { })

onfullscreenerror = (event) => { }
```

## Type d'évènement

Un objet générique {{DOMxRef("Event")}}.

## Exemples

```js
const demandeur = document.querySelector("div");

function gestionErreur(event) {
  console.error(
    "une erreur s'est produite lors du passage en mode plein écran",
  );
  console.log(event);
}

demandeur.addEventListener("fullscreenerror", gestionErreur);
// ou
demandeur.onfullscreenerror = gestionErreur;

demandeur.requestFullscreen();
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Element.fullscreenchange_event", "fullscreenchange")}}
- [L'API Fullscreen](/fr/docs/Web/API/Fullscreen_API)
- [Guide de l'API Fullscreen](/fr/docs/Web/API/Fullscreen_API/Guide)
