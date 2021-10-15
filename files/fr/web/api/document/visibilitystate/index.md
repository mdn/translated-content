---
title: Document.visibilityState
slug: Web/API/Document/visibilityState
tags:
  - API
  - DOM
  - Document
  - Propriétés
  - Visibilité
translation_of: Web/API/Document/visibilityState
---
{{ ApiRef("DOM") }}

La propriété en lecture seule **`Document.visibilityState`** renvoie la visibilité du {{domxref('document')}}, c'est-à-dire informe si l'élément est visible dans son contexte. Il est utile de savoir si le document est en arrière-plan ou sur un onglet invisible ou seulement chargé pour le pré-rendu. Les valeurs possibles sont :

- **`'visible'`** : le contenu de la page peut être au-moins partiellement visible. Dans la pratique, cela signifie que la page est l'onglet de premier plan d'une fenêtre non réduite.
- **`'hidden`'** (_caché_) : le contenu de la page n'est pas visible pour l'utilisateur. Dans la  pratique , cela signifie que le document est soit dans un onglet d'arrière-plan ou une  partie d'une fenêtre réduite, soit que le verrouillage de l'écran du système d'exploitation est actif.
- **`'prerender'`** (_prérendu_) : le contenu de la page est prérendu et n'est pas visible par l'utilisateur (considéré caché aux fins de [`document.hidden`](/en-US/docs/Web/API/Document/hidden)). Le document peut démarrer dans cet état mais ne changera jamais à partir d'une autre valeur. Note : le support du navigateur est facultatif.
- **`'unloaded`'** (_déchargé_) : la page est en train d'être déchargée de la mémoire. Remarque : le support du navigateur est facultatif.

Lorsque la valeur de cette propriété change, l'évènement {{event('visibilitychange')}} est envoyé au {{domxref("Document")}}.

L'utilisation typique de ceci peut être d'empêcher le téléchargement de certains éléments actifs lorsque le document est uniquement prérendu, ou d'arrêter certaines activités lorsque le document est en arrière-plan ou réduit au minimum.

## Syntaxe

    var string = document.visibilityState

## Exemples

```js
document.addEventListener("visibilitychange", function() {
  console.log( document.visibilityState );
  // Modifier le comportement...
});
```

## Spécifications

| Spécification                                                                                                                    | Statut                                       | Commentaire          |
| -------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------- |
| {{SpecName('Page Visibility API','#dom-document-visibilitystate', 'Document.visibilityState')}} | {{Spec2('Page Visibility API')}} | Définition initiale. |

## Compatibilité des navigateurs

{{Compat("api.Document.visibilityState")}}
