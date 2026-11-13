---
title: Améliorations DOM dans Firefox 3
slug: Mozilla/Firefox/Releases/3/DOM_improvements
l10n:
  sourceCommit: 0c81cbce5f95a0be935724bcd936f5592774eb3a
---

Firefox 3 offre un certain nombre d'améliorations au [Document Object Model](/fr/docs/Web/API/Document_Object_Model) (DOM), en particulier en ce qui concerne la prise en charge des extensions du DOM ajoutées par d'autres navigateurs. Cet article fournit une liste de ces améliorations ainsi que des liens vers une documentation plus détaillée.

- Les extensions DOM {{DOMxRef("Element.clientTop", "clientTop")}} et {{DOMxRef("Element.clientLeft", "clientLeft")}} d'Internet Explorer sont désormais prises en charge.
- La propriété {{DOMxRef("Window.fullScreen")}} est désormais toujours exacte, peu importe où elle est lue, même dans le contenu. Auparavant, elle renvoyait `false` de manière incorrecte ([bogue Firefox 127013 <sup>(angl.)</sup>](https://bugzil.la/127013)).
- Les extensions DOM {{DOMxRef("Element.getClientRects", "getClientRects")}} et {{DOMxRef("Element.getBoundingClientRect", "getBoundingClientRect")}} sont désormais prises en charge (voir [bogue Firefox 174397 <sup>(angl.)</sup>](https://bugzil.la/174397)).
- L'extension DOM {{DOMxRef("Document.elementFromPoint", "elementFromPoint")}} d'Internet Explorer est désormais prise en charge ([bogue Firefox 199692 <sup>(angl.)</sup>](https://bugzil.la/199692)).
- Les extensions DOM d'Internet Explorer {{DOMxRef("Element/cut_event", "oncut")}}, {{DOMxRef("Element/copy_event", "oncopy")}} et {{DOMxRef("Element/paste_event", "onpaste")}} sont désormais prises en charge ([bogue Firefox 280959 <sup>(angl.)</sup>](https://bugzil.la/280959)).
- Ajout de getters réservés au code privilégié pour `Node.nodePrincipal`, `Node.baseURIObject` et `document.documentURIObject`. Le code Chrome ne doit pas accéder (obtenir ou définir) à ces propriétés sur un objet de contenu non encapsulé (par exemple, sur un `wrappedJSObject` d'un [`XPCNativeWrapper`](https://web.archive.org/web/20140604075216/https://developer.mozilla.org/fr/docs/XPCNativeWrapper)), voir [bogue Firefox 324464 <sup>(angl.)</sup>](https://bugzil.la/324464) pour plus de détails.
- La méthode DOM {{DOMxRef("Document.getElementsByClassName", "getElementsByClassName()")}} des applications Web 1.0 (HTML5) est désormais prise en charge.
- La méthode DOM {{DOMxRef("Window.postMessage()")}} des applications Web 1.0 (HTML5) est désormais prise en charge. Cette méthode permet une forme limitée et volontaire de communication côté client entre des fenêtres n'étant pas nécessairement sur le même domaine.
- La valeur `charCode` de l'évènement `keypress` est modifiée en un caractère ASCII si la touche d'accélérateur est enfoncée. Sinon, le `charCode` est le caractère non modifié (à l'exception de l'état `Shift`).

## Voir aussi

- [Firefox 3 pour les développeuses et développeurs](/fr/docs/Mozilla/Firefox/Releases/3)
- [Améliorations CSS dans Firefox 3 <sup>(angl.)</sup>](https://web.archive.org/web/20210224062716/https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/releases/3/CSS_improvements)
- [DOM](/fr/docs/Web/API/Document_Object_Model)
