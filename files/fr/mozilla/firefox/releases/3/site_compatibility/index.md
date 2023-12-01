---
title: Changements dans Gecko 1.9 affectant les sites Web
slug: Mozilla/Firefox/Releases/3/Site_compatibility
---

{{FirefoxSidebar}}

Cette page essaie de donner un aperçu des changements entre [Gecko](/fr/Gecko) 1.8 et Gecko 1.9 qui pourraient éventuellement affecter le comportement ou le rendu des sites Web.

Consultez également [Firefox 3 pour les développeurs](/fr/Firefox_3_pour_les_développeurs).

## Évènements

### Gestionnaires d'évènements capturants `load`

Dans Gecko 1.8, il n'était pas possible de définir des gestionnaires d'évènements `load` capturants sur les images. Dans Gecko 1.9, cela devient possible avec la résolution du [bug Firefox 234455](https://bugzil.la/234455). Cela peut cependant causer des problèmes sur les sites Web qui ont incorrectement défini leurs gestionnaires d'évènements sur l'évènement `load`. Consultez la discussion dans le [bug Firefox 335251](https://bugzil.la/335251). Pour résoudre ce problème, les pages en question ne doivent pas définir de gestionnaires d'évènements capturants pour l'évènement `load`.

Par exemple, ceci&nbsp;:

```js
window.addEventListener("load", votreFonction, true);
```

devrait être remplacé par ceci&nbsp;:

```js
window.addEventListener("load", votreFonction, false);
```

Pour une explication du fonctionnement de la capture des évènements, consultez [DOM Level 2 Event capture](http://www.w3.org/TR/DOM-Level-2-Events/events.html#Events-flow-capture) (en)

### `preventBubble` a été supprimée

Dans Gecko 1.8, la méthode `preventBubble` existait sur les évènements pour les empêcher de se propager plus haut. Dans Gecko 1.9, cette méthode a été supprimée. À la place, utilisez la méthode standard [stopPropagation()](/fr/DOM/event.stopPropagation), qui fonctionne également dans Gecko 1.8. Ce changement a été produit par le patch pour le [bug Firefox 330494](https://bugzil.la/330494). Consultez également le [bug Firefox 105280](https://bugzil.la/105280).

### Quelques autres anciennes API d'évènements ne sont plus supportées

[window.captureEvents](/fr/DOM/window.captureEvents), [window.releaseEvents](/fr/DOM/window.releaseEvents) et `window.routeEvent` ne sont plus supportées dans Gecko 1.9.

## DOM

### L'exception `WRONG_DOCUMENT_ERR` se déclenche lorsque l'on essaie d'utiliser un nœud d'un document différent

Les nœuds provenant de documents externes doivent être clonés à l'aide de [`document.importNode()`](/fr/docs/Web/API/Document/importNode) (ou adoptés avec
[`document.adoptNode()`](/fr/docs/Web/API/Document/adoptNode)) avant de pouvoir être insérés dans le document courant. Pour en savoir plus sur les problèmes
de [`Node.ownerDocument`](/fr/docs/Web/API/Node/ownerDocument), consultez la [FAQ DOM du W3C](http://www.w3.org/DOM/faq.html#ownerdoc) (en anglais).

Gecko n'obligeait pas à utiliser [`document.importNode()`](/fr/docs/Web/API/Document/importNode) et [`document.adoptNode()`](/fr/docs/Web/API/Document/adoptNode) avant sa version 1.9. Depuis les versions 1.9
alphas, si un nœud n'est pas adopté ou importé avant d'être utilisé dans un autre document, l'exception
`WRONG_DOCUMENT_ERR` est déclenchée (`NS_ERROR_DOM_WRONG_DOCUMENT_ERR`). implémentation dans le [bug 47903](https://bugzilla.mozilla.org/show_bug.cgi?id=47903).

## Ranges

### `intersectsNode` a été supprimée

Dans Gecko 1.8, la fonction `intersectsNode` pouvait être utilisée pour vérifier si un nœud faisait partie d'un range. Cependant, les valeurs renvoyées par cette fonction étaient trompeuses et rarement utiles. Elle a donc été retirée de Gecko 1.9. Utilisez à la place la fonction standard et plus précise [compareBoundaryPoints](/fr/DOM/range.compareBoundaryPoints). Cette fonction a été retirée par le patch du [bug Firefox 358073](https://bugzil.la/358073).

Consultez la documentation de [intersectsNode](/fr/DOM/range.intersectsNode) pour savoir comment utiliser `compareBoundaryPoints` à la place.

### `compareNode` a été supprimée

Dans Gecko 1.8, la fonction `compareNode` pouvait être utilisée pour tester l'intersection d'un nœud avec un range. Cependant, les valeurs renvoyées par cette fonction étaient trompeuses et rarement utiles. Elle a donc été retirée de Gecko 1.9. Utilisez à la place la fonction standard et plus précise [compareBoundaryPoints](/fr/DOM/range.compareBoundaryPoints). Cette fonction a été retirée par le patch du [bug Firefox 358073](https://bugzil.la/358073).

Consultez la documentation de [compareNode](/fr/DOM/range.compareNode) pour savoir comment utiliser `compareBoundaryPoints` à la place.

## HTML

### Correction de nombreux bogues dans le code de `<object>`

- Les éléments `object` et `embed` n'ont plus besoin d'attribut `type` pour être rendus.
- La modification de l'attribut `src` (de `<embed>`) ou de l'attribut `data` (de `<object>`) via JavaScript fonctionne maintenant correctement.
- L'en-tête `Content-Type` envoyé par le serveur (s'il existe) est maintenant prioritaire par rapport à l'attribut `type` d'une balise `<object>` comme défini dans la spécification HTML (ceci n'est pas le cas pour `embed`).
