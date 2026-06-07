---
title: Firefox 32 note de version pour les développeurs
short-title: Firefox 32
slug: Mozilla/Firefox/Releases/32
l10n:
  sourceCommit: c13266140a9b05549d7c8616973cb17d9357467b
---

Firefox 32 a été publié le 2 septembre 2014. Cet article répertorie les principaux changements utiles non seulement pour les développeur·euse·s web, mais aussi pour les développeur·euse·s Firefox et Gecko ainsi que pour les développeur·euse·s d'extensions.

## Changements pour les développeur·euse·s web

### Outils de développement

Points forts&nbsp;:

- [Éditeur Web Audio <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/web_audio_editor/index.html)
- _Complétion de code et documentation en ligne dans le Bloc-notes_
- [Styles de l'agent utilisateur dans la vue des règles de l'Inspecteur <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#rules-view)
- [Le bouton de sélection d'élément a été déplacé <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#firefox-32-onwards-2)
- [Dimensions des nœuds ajoutées à la barre d'informations de l'Inspecteur <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#firefox-32-onwards)
- [Bouton de capture d'écran de la page complète ajouté <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/tools_toolbox/index.html#extra-tools)
- Images HiDPI ajoutées aux outils
- Les nœuds ayant `display:none` sont affichés différemment dans l'Inspecteur

[Tous les bogues des outils de développement corrigés entre Firefox 31 et Firefox 32 <sup>(angl.)</sup>](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2014-06-09&chfield=resolution&query_format=advanced&chfieldfrom=2014-04-28&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20App%20Manager&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&product=Firefox).

### CSS

- {{CSSxRef("mix-blend-mode")}} est activé par défaut ([bogue Firefox 952643 <sup>(angl.)</sup>](https://bugzil.la/952643)).
- `position:sticky` est activé par défaut dans les versions stables (activé uniquement sur Nightly et Aurora auparavant) ([bogue Firefox 916315 <sup>(angl.)</sup>](https://bugzil.la/916315)).
- Implémentation de {{CSSxRef("box-decoration-break")}} et suppression de la propriété non standard `-moz-background-inline-policy` ([bogue Firefox 613659 <sup>(angl.)</sup>](https://bugzil.la/613659)).
- Autorisation de la transition de {{CSSxRef("flex-grow")}} et {{CSSxRef("flex-shrink")}} entre des valeurs nulles et non nulles, comme `flex-grow: 0.6` ([bogue Firefox 996945 <sup>(angl.)</sup>](https://bugzil.la/996945)).

### HTML

- Expérimentalement implémenté, derrière une préférence, la propriété {{HTMLElement("img")}} [`srcset`](/fr/docs/Web/HTML/Reference/Elements/img#srcset). Pour l'activer, définissez `dom.image.srcset.enable` sur `true` ([bogue Firefox 870021 <sup>(angl.)</sup>](https://bugzil.la/870021)).
- [**id**](/fr/docs/Web/HTML/Reference/Global_attributes/id) et [**class**](/fr/docs/Web/HTML/Reference/Global_attributes/class) sont désormais de vrais [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes) et s'appliquent également aux éléments XML, qu'ils soient dans un espace de noms ou non ([bogue Firefox 741295 <sup>(angl.)</sup>](https://bugzil.la/741295)).

### JavaScript

- Les nouvelles méthodes intégrées d'ECMAScript 2015 suivantes ont été implémentées&nbsp;:
  - {{JSxRef("Array.from()")}} ([bogue Firefox 904723 <sup>(angl.)</sup>](https://bugzil.la/904723)),
  - {{JSxRef("Array.prototype.copyWithin()")}} ([bogue Firefox 934423 <sup>(angl.)</sup>](https://bugzil.la/934423)),
  - {{JSxRef("Number.isSafeInteger()")}} ([bogue Firefox 1003764 <sup>(angl.)</sup>](https://bugzil.la/1003764)).

### Interfaces/APIs/DOM

- La propriété {{DOMxRef("Navigator.languages")}} et l'évènement {{DOMxRef("Window.languagechange_event", "languagechange")}} ont été ajoutés ([bogue Firefox 889335 <sup>(angl.)</sup>](https://bugzil.la/889335)).
- Le comportement de la méthode {{DOMxRef("Navigator.vibrate()")}} a été adapté à la dernière spécification&nbsp;: les vibrations trop longues sont désormais tronquées ([bogue Firefox 1014581 <sup>(angl.)</sup>](https://bugzil.la/1014581)).
- Les méthodes {{DOMxRef("KeyboardEvent.getModifierState()")}} et {{DOMxRef("MouseEvent.getModifierState()")}} ont été étendues pour prendre en charge le modificateur virtuel `Accel` ([bogue Firefox 1009388 <sup>(angl.)</sup>](https://bugzil.la/1009388)).
- La propriété {{DOMxRef("KeyboardEvent.code")}} a été implémentée expérimentalement : elle est désactivée dans la version de production ([bogue Firefox 865649 <sup>(angl.)</sup>](https://bugzil.la/865649)).
- Les sélecteurs avec une portée pour {{DOMxRef("Document.querySelector()")}} et {{DOMxRef("Document.querySelectorAll()")}}, par exemple `querySelector(":scope > li")`, ont été ajoutés ([bogue Firefox 528456 <sup>(angl.)</sup>](https://bugzil.la/528456)).
- L'implémentation expérimentale de l'interface {{DOMxRef("Document.timeline")}}, liée à [l'API Web Animations](/fr/docs/Web/API/Web_Animations_API), a été ajoutée ([bogue Firefox 998246 <sup>(angl.)</sup>](https://bugzil.la/998246)). Elle est contrôlée par la préférence `layout.web-animations.api.enabled`, activée uniquement sur Nightly et Aurora pour le moment.
- [L'API Data Store <sup>(angl.)</sup>](https://web.archive.org/web/20210613234447/https://developer.mozilla.org/en-US/docs/Archive/B2G_OS/API/Data_Store_API) a été rendue disponible pour les [Web Workers](/fr/docs/Web/API/Web_Workers_API/Using_web_workers) ([bogue Firefox 949325 <sup>(angl.)</sup>](https://bugzil.la/949325)). Elle n'est toujours activée que pour les applications certifiées.
- [L'API ServiceWorker](/fr/docs/Web/API/Service_Worker_API) `InstallPhaseEvent` et les interfaces {{DOMxRef("InstallEvent")}} ont été implémentées ([bogue Firefox 967264 <sup>(angl.)</sup>](https://bugzil.la/967264)).
- L'API de vérification MSISDN, uniquement activée pour les applications privilégiées, a été ajoutée ([bogue Firefox 988469 <sup>(angl.)</sup>](https://bugzil.la/988469)).
- [L'API Gamepad](/fr/docs/Web/API/Gamepad_API) est désormais prise en charge sur Firefox pour Android ([bogue Firefox 852935 <sup>(angl.)</sup>](https://bugzil.la/852935)).
- Pour correspondre à la spécification et à l'évolution de la syntaxe CSS, des modifications mineures ont été apportées à {{DOMxRef("CSS.escape_static", "CSS.escape()")}}. L'identifiant peut désormais commencer par `'--'` et le deuxième tiret ne doit pas être échappé. De plus, les identifiants de fournisseur ne sont plus échappés. ([bogue Firefox 1008719 <sup>(angl.)</sup>](https://bugzil.la/1008719))
- Pour compléter notre implémentation des Hit Regions, `MouseEvent.region` a été implémenté ([bogue Firefox 979692 <sup>(angl.)</sup>](https://bugzil.la/979692)).
- La méthode {{DOMxRef("CanvasRenderingContext2D.drawFocusIfNeeded()")}} est désormais activée par défaut ([bogue Firefox 1004579 <sup>(angl.)</sup>](https://bugzil.la/1004579)).
- Les propriétés {{DOMxRef("Navigator.doNotTrack")}} retournent désormais `'1'` ou `'0'`, reflétant la valeur HTTP, au lieu de `'yes'` ou `'no'` ([bogue Firefox 887703 <sup>(angl.)</sup>](https://bugzil.la/887703)).
- [XMLHttpRequest.responseURL](/fr/docs/Web/API/XMLHttpRequest/responseURL) a été implémenté ([bogue Firefox 998076 <sup>(angl.)</sup>](https://bugzil.la/998076)).

### MathML

- Ajout de la prise en charge de la notation `phasorangle` pour l'élément {{MathMLElement("menclose")}}.

### SVG

_Pas de changement._

### WebRTC

- De nouvelles contraintes pour [WebRTC](/fr/docs/Glossary/WebRTC) et {{DOMxRef("Navigator.getUserMedia", "getUserMedia()")}}, `width`, `height` et `framerate`, ont été ajoutées pour limiter les dimensions du flux et le taux d'images ([bogue Firefox 907352 <sup>(angl.)</sup>](https://bugzil.la/907352))&nbsp;:

  ```js
  const constraints = {
    mandatory: {
      width: { min: 640 },
      height: { min: 480 },
    },
    optional: [
      { width: 650 },
      { width: { min: 650 } },
      { frameRate: 60 },
      { width: { max: 800 } },
    ],
  };
  ```

- Les méthodes WebRTC qui utilisaient auparavant des fonctions de rappel comme paramètres d'entrée sont désormais également disponibles en utilisant des [promesses](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) JavaScript.

### Audio/Video

_Pas de changement._

## Sécurité

- [Le code privilégié obtient désormais une vision Xray pour les instances JavaScript `Object` et `Array` <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#xray-semantics-for-object-and-array).

## Changements pour les développeur·euse·s de Mozilla et d'extensions

La vision Xray est désormais appliquée aux objets JavaScript qui ne sont pas eux-mêmes des objets DOM&nbsp;: [Xrays pour les objets JavaScript <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/dom/scriptSecurity/xray_vision.html#xrays-for-javascript-objects).

Une méthode `getDataDirectory()` a été ajoutée aux instances `Addon`. Cette méthode retourne l'emplacement préféré, dans le profil actuel, pour que les extensions y stockent des données.

### SDK d'extension

#### Points forts

- Ajout de l'option [`exclude` <sup>(angl.)</sup>](https://web.archive.org/web/20210216122834/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Add-on_SDK/High-Level_APIs/page-mod#pagemod%28options%29) à `PageMod`.
- Ajout de l'option [`anonymous` <sup>(angl.)</sup>](https://web.archive.org/web/20201201022954/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Add-on_SDK/High-Level_APIs/request#request%28options%29) à `Request`.
- [Débogueur d'extensions <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/develop/debugging/) inclut désormais une console et un bloc-notes.

#### Détails

[Les instantanés GitHub faits entre Firefox 31 et Firefox 32 <sup>(angl.)</sup>](https://github.com/mozilla/addon-sdk/compare/firefox31...firefox32). Cela n'inclut pas les mises à jour effectuées après l'entrée de cette version dans Aurora.

[Bogues corrigés entre Firefox 31 et Firefox 32 <sup>(angl.)</sup>](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-06-09&chfield=resolution&query_format=advanced&chfieldfrom=2014-04-28&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=10493962). Cela n'inclut pas les mises à jour effectuées après l'entrée de cette version dans Aurora.

### XPCOM

- L'interface `nsIUDPSocket` fournit désormais la prise en charge du multicast grâce à l'ajout des nouveaux attributs `nsIUDPSocket.multicastLoopback`, `nsIUDPSocket.multicastInterface` et `nsIUDPSocket.multicastInterfaceAddr`, ainsi que des méthodes `nsIUDPSocket.joinMulticast()` et `nsIUDPSocket.leaveMulticast()`.
