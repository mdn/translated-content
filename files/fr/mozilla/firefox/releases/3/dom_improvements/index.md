---
title: Améliorations DOM dans Firefox 3
slug: Mozilla/Firefox/Releases/3/DOM_improvements
---

{{FirefoxSidebar}}

Firefox 3 offre un certain nombre d'améliorations dans sa gestion du [modèle objet de document](/fr/DOM) (DOM), en particulier en ce qui concerne la gestion de ses extensions ajoutées par d'autres navigateurs. Cet article reprend une liste de ces améliorations ainsi que des liens vers une documentation plus détaillée.

- Les extensions DOM d'Internet Explorer [`clientTop`](/fr/DOM/element.clientTop) et [`clientLeft`](/fr/DOM/element.clientLeft) sont à présent supportées.
- La propriété [`window.fullScreen`](/fr/DOM/window.fullScreen) est à présent toujours correcte quel que soit l'endroit de sa lecture, même depuis le contenu. Auparavant, elle renvoyait `false` de manière incorrecte ([bug Firefox 127013](https://bugzil.la/127013)).
- Les extensions DOM [`getClientRects`](/fr/DOM/element.getClientRects) et [`getBoundingClientRect`](/fr/DOM/element.getBoundingClientRect) sont à présent supportées (voir le [bug Firefox 174397](https://bugzil.la/174397)).
- L'extension DOM d'Internet Explorer [`elementFromPoint`](/fr/DOM/document.elementFromPoint) est à présent supportée ([bug Firefox 199692](https://bugzil.la/199692)).
- Les extensions DOM d'Internet Explorer [`oncut`](/fr/DOM/element.oncut), [`oncopy`](/fr/DOM/element.oncopy) et [`onpaste`](/fr/DOM/element.onpaste) sont à présent supportées ([bug Firefox 280959](https://bugzil.la/280959)).
- Des accesseurs réservés au code privilégié ont été ajoutés pour `Node.nodePrincipal`, `Node.baseURIObject` et [`document.documentURIObject`](/fr/DOM/document.documentURIObject). Le code chrome ne doit accéder à ces propriétés (ou les modifier) que sur des objets de contenu enveloppés (par exemple avec le `wrappedJSObject` d'un [`XPCNativeWrapper`](/fr/XPCNativeWrapper)), consultez le [bug Firefox 324464](https://bugzil.la/324464) pour plus de détails.
- La méthode DOM [`getElementsByClassName()`](/fr/DOM/document.getElementsByClassName) de Web Applications 1.0 (HTML5) est à présent gérée.
- La méthode DOM [`window.postMessage`](/fr/DOM/window.postMessage) de Web Applications 1.0 (HTML5) est également gérée. Celle-ci autorise une certaine forme limitée et volontaire de communication côté client entre des fenêtres qui ne sont pas forcément dans le même domaine.
- La valeur `charCode` de l'évènement `keypress` est transformée en un caractère ASCII si la touche Accélérateur est pressée. Autrement, `charCode` est le caractère non modifié (à part son état

  <kbd>Shift</kbd>

  — mise en majuscules). Consultez [L'évènement Keypress dans Gecko](/fr/L'évènement_Keypress_dans_Gecko).

### Voir aussi

- [Firefox 3 pour les développeurs](/fr/Firefox_3_pour_les_développeurs)
- [Améliorations CSS dans Firefox 3](/fr/Améliorations_CSS_dans_Firefox_3)
- [DOM](/fr/DOM)
