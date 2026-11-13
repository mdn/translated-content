---
title: Compatibilité des sites pour Firefox 3
slug: Mozilla/Firefox/Releases/3/Site_compatibility
l10n:
  sourceCommit: 2591a9b59de88401a2ef0fb7d0b8d0281e3f5376
---

Cette page essaie de donner un aperçu des changements entre Gecko 1.8 et Gecko 1.9, qui pourraient éventuellement affecter le comportement ou le rendu des sites Web.

Consultez également [Firefox 3 pour les développeuses et développeurs](/fr/docs/Mozilla/Firefox/Releases/3).

## Évènements

### Gestionnaires d'évènements capturants `load`

Dans Gecko 1.8, il n'était pas possible de définir des gestionnaires d'évènements `load` capturants sur les images. Dans Gecko 1.9, cela devient possible avec la résolution du [bogue Firefox 234455 <sup>(angl.)</sup>](https://bugzil.la/234455). Cela peut cependant causer des problèmes sur les sites Web qui ont incorrectement défini leurs gestionnaires d'évènements sur l'évènement `load`. Consultez la discussion dans le [bogue Firefox 335251 <sup>(angl.)</sup>](https://bugzil.la/335251). Pour résoudre ce problème, les pages en question ne doivent pas définir de gestionnaires d'évènements capturants pour l'évènement `load`.

Par exemple, ceci&nbsp;:

```js
window.addEventListener("load", votreFonction, true);
```

doit être remplacé par ceci&nbsp;:

```js
window.addEventListener("load", votreFonction, false);
```

Pour une explication du fonctionnement de la capture des évènements, consultez {{DOMxRef("EventTarget.addEventListener", "addEventListener")}}.

### `preventBubble` a été supprimée

Dans Gecko 1.8, la méthode `preventBubble` existait sur les évènements pour les empêcher de se propager plus haut. Dans Gecko 1.9, cette méthode a été supprimée. À la place, utilisez la méthode standard {{DOMxRef("Event.stopPropagation", "stopPropagation()")}}, qui fonctionne également dans Gecko 1.8. Ce changement a été produit par le patch pour le [bogue Firefox 330494 <sup>(angl.)</sup>](https://bugzil.la/330494). Consultez également le [bogue Firefox 105280 <sup>(angl.)</sup>](https://bugzil.la/105280).

### Quelques autres anciennes API d'évènements ne sont plus supportées

{{DOMxRef("Window.captureEvents")}} et `Window.routeEvent` ne sont plus supportées dans Gecko 1.9.

## DOM

### L'exception `WRONG_DOCUMENT_ERR`

Les noeuds provenant de documents externes doivent être clonés à l'aide de [`document.importNode()`](/fr/docs/Web/API/Document/importNode) (ou adoptés avec [`document.adoptNode()`](/fr/docs/Web/API/Document/adoptNode)) avant de pouvoir être insérés dans le document courant. Pour en savoir plus sur les problèmes de [`Node.ownerDocument`](/fr/docs/Web/API/Node/ownerDocument), consultez la [FAQ DOM du W3C <sup>(angl.)</sup>](https://www.w3.org/DOM/faq.html#ownerdoc).

Firefox n'applique actuellement pas cette règle (il l'a fait pendant un certain temps lors du développement de Firefox 3, mais trop de sites cessent de fonctionner correctement lorsque cette règle est appliquée). Nous encourageons les développeur·euse·s web à corriger leur code afin de respecter cette règle, dans l'optique d'une meilleure compatibilité future.

## Plages

### `intersectsNode` a été supprimée

Dans Gecko 1.8, la fonction `intersectsNode` pouvait être utilisée pour tester si un nœud croise une plage. Cependant, les valeurs renvoyées par cette fonction étaient trompeuses et rarement utiles. Elle a donc été retirée de Gecko 1.9. Utilisez à la place la fonction standard et plus précise [compareBoundaryPoints](/fr/docs/Web/API/Range/compareBoundaryPoints). Cette fonction a été retirée par le patch du [bogue Firefox 358073 <sup>(angl.)</sup>](https://bugzil.la/358073).

Consultez la documentation de [`intersectsNode`](/fr/docs/Web/API/Range/intersectsNode) pour savoir comment utiliser `compareBoundaryPoints` à la place.

### `compareNode` a été supprimée

Dans Gecko 1.8, la fonction `compareNode` pouvait être utilisée pour tester comment un nœud croise une plage. Cependant, les valeurs renvoyées par cette fonction étaient trompeuses et rarement utiles. Elle a donc été retirée de Gecko 1.9. Utilisez à la place la fonction standard et plus précise [compareBoundaryPoints](/fr/docs/Web/API/Range/compareBoundaryPoints). Le patch du [bogue Firefox 358073 <sup>(angl.)</sup>](https://bugzil.la/358073) a supprimé cette fonction.

Consultez la documentation de [`compareNode`](/fr/docs/Web/API/Range/compareNode) pour savoir comment utiliser `compareBoundaryPoints` à la place.

## HTML

### Correction de nombreux bogues dans le code de `<object>`

Les éléments `object` et `embed` ne nécessitent plus l'attribut `type` pour être rendus. Changer l'attribut `src` (de `<embed>`) ou l'attribut `data` (de `<object>`) avec JavaScript fonctionne maintenant correctement. L'en-tête `Content-Type` envoyé par le serveur (s'il existe) est maintenant prioritaire par rapport à l'attribut `type` d'un élément `<object>` conformément à la spécification HTML (ceci n'est pas le cas pour `embed`).
