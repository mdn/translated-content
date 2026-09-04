---
title: Firefox 37 note de version pour les développeurs
short-title: Firefox 37
slug: Mozilla/Firefox/Releases/37
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 37 a été publié le 31 mars 2015. Cet article répertorie les principaux changements utiles non seulement pour les développeur·euse·s web, mais aussi pour les développeur·euse·s Firefox et Gecko ainsi que pour les développeur·euse·s d'extensions.

## Changements pour les développeur·euse·s web

### Outils de développement

Points forts&nbsp;:

- [Panneau de sécurité dans le Network Monitor <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#security)
- [Panneau des animations dans l'inspecteur de page <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#firefox-37)
- _Prise en charge de l'exécution d'une étape de construction personnalisée dans WebIDE_

[Tous les bogues des outils de développement corrigés entre Firefox 36 et Firefox 37 <sup>(angl.)</sup>](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-01-12&chfield=resolution&query_format=advanced&chfieldfrom=2014-11-28&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=11892733).

### CSS

- `display: contents` est désormais activé par défaut ([bogue Firefox 1102374 <sup>(angl.)</sup>](https://bugzil.la/1102374) et [bogue Firefox 1105369 <sup>(angl.)</sup>](https://bugzil.la/1105369)).
- [Mise en page multi-colonnes CSS](/fr/docs/Web/CSS/Guides/Multicol_layout/Using) fonctionne désormais sur les éléments avec `display: table-caption` ([bogue Firefox 1109571 <sup>(angl.)</sup>](https://bugzil.la/1109571)).
- Le positionnement relatif (`position: relative`) des cellules de tableau a été ajouté ([bogue Firefox 35168 <sup>(angl.)</sup>](https://bugzil.la/35168)).
- Le comportement en mode quirks de {{CSSxRef("empty-cells")}} a été supprimé&nbsp;: il est désormais par défaut sur `show` comme en mode standard ([bogue Firefox 1020400 <sup>(angl.)</sup>](https://bugzil.la/1020400)).

### HTML

- La valeur `<a rel="noreferrer">` fonctionne désormais également lorsque le lien est ouvert dans un nouvel onglet ([bogue Firefox 1031264 <sup>(angl.)</sup>](https://bugzil.la/1031264)).
- Le `'.'` suivi de l'extension est désormais autorisé dans `<input accept>`&nbsp;: lorsqu'il est utilisé, un sélecteur de fichiers filtre avec cette extension donnée pour être proposé à l'utilisateur·ice ([bogue Firefox 826176 <sup>(angl.)</sup>](https://bugzil.la/826176)).

### JavaScript

- Les constructeurs {{JSxRef("Map")}}, {{JSxRef("Set")}}, {{JSxRef("WeakMap")}} et {{JSxRef("WeakSet")}} ignorent désormais les itérables nuls ([bogue Firefox 1092538 <sup>(angl.)</sup>](https://bugzil.la/1092538)).
- Les constructeurs {{JSxRef("Map")}}, {{JSxRef("Set")}}, {{JSxRef("WeakMap")}} et {{JSxRef("WeakSet")}} prennent désormais en charge les méthodes `prototype.set` ou `prototype.add` modifiées ([bogue Firefox 804279 <sup>(angl.)</sup>](https://bugzil.la/804279)).
- La méthode non standard `String.prototype.quote()` a été supprimée ([bogue Firefox 1103181 <sup>(angl.)</sup>](https://bugzil.la/1103181)).
- La propriété {{JSxRef("RegExp.prototype.flags")}} a été ajoutée ([bogue Firefox 1108467 <sup>(angl.)</sup>](https://bugzil.la/1108467)).
- Plusieurs méthodes {{JSxRef("Array")}} ont également été ajoutées pour les [tableaux typés](/fr/docs/Web/JavaScript/Guide/Typed_arrays)&nbsp;:
  - Les méthodes {{JSxRef("TypedArray.every", "every()")}} et {{JSxRef("TypedArray.some", "some()")}} ([bogue Firefox 1116390 <sup>(angl.)</sup>](https://bugzil.la/1116390)).
  - Les méthodes {{JSxRef("TypedArray.find", "find()")}} et {{JSxRef("TypedArray.findIndex", "findIndex()")}} ([bogue Firefox 1078975 <sup>(angl.)</sup>](https://bugzil.la/1078975)).
  - La méthode {{JSxRef("TypedArray.fill", "fill()")}} ([bogue Firefox 1113722 <sup>(angl.)</sup>](https://bugzil.la/1113722)).
  - Les méthodes {{JSxRef("TypedArray.indexOf", "indexOf()")}} et {{JSxRef("TypedArray.lastIndexOf", "lastIndexOf()")}} ([bogue Firefox 1107601 <sup>(angl.)</sup>](https://bugzil.la/1107601)).
  - La méthode {{JSxRef("TypedArray.join", "join()")}} ([bogue Firefox 1115817 <sup>(angl.)</sup>](https://bugzil.la/1115817)).
  - Les méthodes {{JSxRef("TypedArray.reduce", "reduce()")}} et {{JSxRef("TypedArray.reduceRight", "reduceRight()")}} ([bogue Firefox 1117350 <sup>(angl.)</sup>](https://bugzil.la/1117350)).
  - La méthode {{JSxRef("TypedArray.reverse", "reverse()")}} ([bogue Firefox 1111516 <sup>(angl.)</sup>](https://bugzil.la/1111516)).
  - Les méthodes {{JSxRef("TypedArray.keys", "keys()")}}, {{JSxRef("TypedArray.values", "values()")}}, et {{JSxRef("TypedArray.entries", "entries()")}} ([bogue Firefox 1119217 <sup>(angl.)</sup>](https://bugzil.la/1119217)).

- Le piège d'énumération de {{JSxRef("Proxy")}} pour les instructions [`for...in`](/fr/docs/Web/JavaScript/Reference/Statements/for...in) est ajouté ([bogue Firefox 783829 <sup>(angl.)</sup>](https://bugzil.la/783829)).
- L'attribut `configurable` de la propriété {{JSxRef("Function.length")}} est désormais `true` conformément à la spécification ES2015 ([bogue Firefox 911142 <sup>(angl.)</sup>](https://bugzil.la/911142)).
- Le développement de [ParallelJS (PJS) <sup>(angl.)</sup>](https://web.archive.org/web/20161113115816/http://wiki.ecmascript.org/doku.php?id=strawman:data_parallelism) a été abandonné en raison des perspectives limitées, du peu d'attention et de la complexité du code. L'implémentation expérimentale qui n'était activée que sur le canal Nightly, y compris les méthodes `Array.prototype.mapPar`, `filterPar` et `reducePar`, a été complètement supprimée.

### Interfaces/APIs/DOM

- Le nœud [Web Audio](/fr/docs/Web/API/Web_Audio_API) {{DOMxRef("StereoPannerNode")}} a été ajouté ([bogue Firefox 1100349 <sup>(angl.)</sup>](https://bugzil.la/1100349)).
- La version basée sur {{JSxRef("Promise")}} de {{DOMxRef("OfflineAudioContext")}} est désormais disponible ([bogue Firefox 1087944 <sup>(angl.)</sup>](https://bugzil.la/1087944)).
- L'implémentation expérimentale, non activée par défaut, des [Service Workers](/fr/docs/Web/API/Service_Worker_API) progresse&nbsp;: {{DOMxRef("ServiceWorkerRegistration/update", "ServiceWorkerGlobalScope.update()")}} a été ajouté ([bogue Firefox 1065366 <sup>(angl.)</sup>](https://bugzil.la/1065366)).
- [L'API IndexedDB](/fr/docs/Web/API/IndexedDB_API) peut désormais être utilisée dans les [Web workers](/fr/docs/Web/API/Web_Workers_API) ([bogue Firefox 701634 <sup>(angl.)</sup>](https://bugzil.la/701634)).
- Notre implémentation expérimentale de WebGL 2.0 progresse&nbsp;!
  - La méthode {{DOMxRef("WebGL2RenderingContext.getBufferSubData()")}} a été ajoutée pour fournir un accès aux objets Buffer ([bogue Firefox 1048731 <sup>(angl.)</sup>](https://bugzil.la/1048731)).

- Conformément à l'évolution de la spécification WebRTC, nous avons déprécié `RTCIceServer.url` au profit de `RTCIceServer.urls`, ce qui vous permet de définir plusieurs URL pour un serveur ICE donné.
- Certains noms de touches de `KeyboardEvent.key` ont été modifiés pour se conformer à [la dernière spécification DOM Level 3 Events <sup>(angl.)</sup>](https://w3c.github.io/DOM-Level-3-Events-key/). Voir [les tableaux des valeurs de `KeyboardEvent.key` dans MDN](/fr/docs/Web/API/UI_Events/Keyboard_event_key_values). Le bogue principal pour ces changements est [bogue Firefox 900372 <sup>(angl.)</sup>](https://bugzil.la/900372).
- L'interface {{DOMxRef("console")}} fonctionne désormais sur {{DOMxRef("ServiceWorker")}} et {{DOMxRef("SharedWorker")}}. Elle était précédemment disponible mais ne fonctionnait pas ([bogue Firefox 1058644 <sup>(angl.)</sup>](https://bugzil.la/1058644)).
- La valeur de {{DOMxRef("KeyboardEvent.key")}} était incorrectement signalée comme `"RomanCharacters"` lorsque la touche `英数` (`Eisu`) était enfoncée. Elle retourne désormais correctement `"Eisu"`.

### MathML

_Pas de changement._

### SVG

- L'élément SVG2 `<marker orient="auto-start-reverse">` a été ajouté ([bogue Firefox 1107584 <sup>(angl.)</sup>](https://bugzil.la/1107584)).

### Audio/Vidéo

_Pas de changement._

## Réseau

- WebSockets prend désormais en charge la méthode de compression `permessage`, si le serveur la prend en charge ([bogue Firefox 792831 <sup>(angl.)</sup>](https://bugzil.la/792831)).

## Sécurité

- L'utilisation de protocoles ou de chiffrements faibles, comme SSL 3.0 et RC4, est désormais consignée dans la console, pour avertir les sites qui les utilisent ([bogue Firefox 1092835 <sup>(angl.)</sup>](https://bugzil.la/1092835)).
- La [directive](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy) `referrer` de [CSP](/fr/docs/Web/HTTP/Guides/CSP) 1.1 est désormais prise en charge ([bogue Firefox 965727 <sup>(angl.)</sup>](https://bugzil.la/965727)).

## Changements pour les développeur·euse·s de Mozilla et d'extensions

### SDK d'extension

_Pas de changement._

### XUL

_Pas de changement._
