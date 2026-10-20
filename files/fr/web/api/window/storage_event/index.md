---
title: "Window : évènement storage"
short-title: storage
slug: Web/API/Window/storage_event
l10n:
  sourceCommit: 285941521a9a7c2c1b3c443d5f785e5f663a8fc9
---

{{APIRef("HTML DOM")}}

L'évènement **`storage`** de l'interface {{DOMxRef("Window")}} se déclenche lorsqu'un autre document qui partage la même zone de stockage (soit {{DOMxRef("Window/localStorage", "localStorage")}} ou {{DOMxRef("Window/sessionStorage", "sessionStorage")}}) que la fenêtre actuelle met à jour cette zone de stockage. L'évènement n'est _pas_ déclenché sur la fenêtre qui a effectué la modification.

- Pour `localStorage`, l'évènement est déclenché dans tous les autres {{Glossary("browsing context", "contextes de navigation")}} qui sont dans la même origine que le document initiateur. Cela inclut les autres onglets avec la même origine.
- Pour `sessionStorage`, l'évènement est déclenché dans tous les autres {{Glossary("browsing context", "contextes de navigation")}} qui sont dans la même origine et le même contexte de navigation de premier niveau que le document initiateur. Cela inclut uniquement les iframes intégrées, le cas échéant, dans le même onglet, et non les autres onglets.

L'évènement n'est pas annulable et ne se propage pas.

## Syntaxe

Utilisez le nom de l'évènement dans des méthodes comme {{DOMxRef("EventTarget.addEventListener", "addEventListener()")}}, ou définissez une propriété de gestionnaire d'évènements.

```js-nolint
addEventListener("storage", (event) => { })

onstorage = (event) => { }
```

## Type d'évènement

Un objet {{DOMxRef("StorageEvent")}}. Hérite de {{DOMxRef("Event")}}.

{{InheritanceDiagram("StorageEvent")}}

## Alias des gestionnaires d'évènements

En plus de l'interface `Window`, la propriété du gestionnaire d'évènements `onstorage` est également disponible sur les cibles suivantes&nbsp;:

- {{DOMxRef("HTMLBodyElement")}}
- {{DOMxRef("HTMLFrameSetElement")}}
- {{DOMxRef("SVGSVGElement")}}

## Exemples

Consignez l'élément `listeExemple` sur la console lorsque l'évènement `storage` se déclenche&nbsp;:

```js
window.addEventListener("storage", () => {
  // Lorsque le stockage local change, vider la liste sur
  // la console.
  console.log(JSON.parse(window.localStorage.getItem("listeExemple")));
});
```

La même action peut être réalisée ) l'aide de la propriété du gestionnaire d'évènements `onstorage`&nbsp;:

```js
window.onstorage = () => {
  // Lorsque le stockage local change, vider la liste dans
  // la console.
  console.log(JSON.parse(window.localStorage.getItem("listeExemple")));
};
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{DOMxRef("Web Storage API", "L'API Web Storage", "", "nocode")}}
- [Utiliser l'API Web Storage](/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)
- [Répondre aux changements du stockage avec le StorageEvent](/fr/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API#répondre_aux_changements_du_stockage_avec_storageevent)
