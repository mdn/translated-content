---
title: Routage par dièse (hash routing)
slug: Glossary/Hash_routing
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Le **hash routing** («&nbsp;routage par dièse&nbsp;») est une technique côté client utilisée dans les applications monopage (<i lang="en">SPA</i>) pour gérer la navigation et les changements d'état sans recharger toute la page.

## Contexte historique

Les premières SPA ne pouvaient pas modifier la [partie chemin](/fr/docs/Web/URI/Reference/Path) de l'URL sans recharger la page. Pour contourner ce problème, les développeur·euse·s utilisaient le **routage SPA basé sur le hash**, qui stocke la route dans le «&nbsp;[fragment](/fr/docs/Web/URI/Reference/Fragment)&nbsp;», c'est-à-dire la partie de l'URL qui suit le symbole `#`. Les motifs courants incluaient `#/profile` et `#!/profile`. Les applications vérifiaient en continu [`window.location.hash`](/fr/docs/Web/API/Location/hash) (ou écoutaient l'événement [`hashchange`](/fr/docs/Web/API/Window/hashchange_event) lorsqu'il a été pris en charge) pour détecter les changements de fragment lors de la navigation&nbsp;; la SPA mettait alors à jour la vue à chaque changement de fragment.

## Limitations

Bien que cette approche ne nécessite aucune configuration côté serveur, elle présente des limites&nbsp;: la prise en charge du {{Glossary("bfcache", "cache arrière/avant")}} était limitée, les pages avec des URL basées sur le hash n'étaient pas correctement indexées (les moteurs de recherche ignoraient le fragment), et les URL obtenues étaient jugées peu lisibles.

Le routage basé sur le hash est aujourd'hui considéré comme une technique héritée. Il n'est utilisé, le cas échéant, qu'en solution de repli pour les très anciens navigateurs ou pour les hébergements statiques où le routage côté serveur ne peut pas être configuré.

## Alternatives modernes

Depuis 2012, tous les principaux navigateurs (Chrome 5, Safari 5, Firefox 4) prennent en charge l'[API History](/fr/docs/Web/API/History_API). Les SPA peuvent désormais utiliser [`pushState()`](/fr/docs/Web/API/History/pushState), [`replaceState()`](/fr/docs/Web/API/History/replaceState) et l'événement [`popstate`](/fr/docs/Web/API/PopStateEvent) pour manipuler la pile d'historique du navigateur, passer directement à des chemins comme `/profile` et mettre à jour la vue sans rechargement complet. Cela permet également d'obtenir des URL plus propres, sans fragment hash.
