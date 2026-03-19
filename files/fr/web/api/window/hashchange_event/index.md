---
title: "Window : évènement hashchange"
short-title: hashchange
slug: Web/API/Window/hashchange_event
l10n:
  sourceCommit: 2ccbd062264d0a2a34f185a3386cb272f42c50f5
---

{{APIRef}}

L'évènement **`hashchange`** de l'interface {{DOMxRef("Window")}} est déclenché lorsque l'identificateur de fragment de l'URL a changé (la partie de l'URL commençant par et suivant le symbole `#`).

Cet évènement ne se déclenche pas lorsque le hash est modifié en utilisant {{DOMxRef("history.pushState()")}} ou {{DOMxRef("history.replaceState()")}}.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("hashchange", (event) => { })

onhashchange = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("HashChangeEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("HashChangeEvent")}}

## Propriétés de l'évènement

- {{DOMxRef("HashChangeEvent.newURL")}} {{ReadOnlyInline}}
  - : Une chaîne de caractères représentant la nouvelle URL vers laquelle la fenêtre navigue.
- {{DOMxRef("HashChangeEvent.oldURL")}} {{ReadOnlyInline}}
  - : Une chaîne de caractères représentant l'URL précédente à partir de laquelle la fenêtre a navigué.

## Alias des gestionnaires d'évènements

En plus de l'interface `Window`, la propriété du gestionnaire d'évènements `onhashchange` est également disponible sur les cibles suivantes&nbsp;:

- {{DOMxRef("HTMLBodyElement")}}
- {{DOMxRef("HTMLFrameSetElement")}}
- {{DOMxRef("SVGSVGElement")}}

## Exemples

Vous pouvez utiliser l'évènement `hashchange` dans une méthode {{DOMxRef("EventTarget/addEventListener", "addEventListener")}} :

```js
window.addEventListener("hashchange", () => {
  console.log("Le hash a changé !");
});
```

Ou utilisez la propriété du gestionnaire d'évènements `onhashchange`&nbsp;:

```js
function locationHashChanged() {
  if (location.hash === "#cool-feature") {
    console.log("Vous visitez une fonctionnalité intéressante !");
  }
}

window.onhashchange = locationHashChanged;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'évènement {{DOMxRef("Window/popstate_event", "popstate")}}
