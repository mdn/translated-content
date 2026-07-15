---
title: Firefox 36 note de version pour les développeurs
short-title: Firefox 36
slug: Mozilla/Firefox/Releases/36
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

Firefox 36 a été publié le 24 février 2015. Cet article répertorie les principaux changements utiles non seulement pour les développeur·euse·s web, mais aussi pour les développeur·euse·s Firefox et Gecko ainsi que pour les développeur·euse·s d'extensions.

## Changements pour les développeur·euse·s web

### Outils de développement

Points forts&nbsp;:

- [Les sources d'évaluation apparaissent désormais dans le débogueur <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html#debug-eval-sources)
- [Processus simplifié pour se connecter à Firefox pour Android <sup>(angl.)</sup>](https://web.archive.org/web/20220410035837/https://firefox-source-docs.mozilla.org/devtools-user/remote_debugging/debugging_firefox_for_android_with_webide/index.html)
- Le surligneur du modèle de boîte fonctionne sur les cibles distantes
- [Option "Inverser l'arborescence des appels" dans le profileur <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/performance/index.html#inverting-the-call-tree)
- [Inspecter les promesses DOM dans la console <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#type-specific-rich-output)
- [Commandes "Coller" supplémentaires dans l'inspecteur <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html#element-popup-menu-2)

[Tous les bogues des outils de développement corrigés entre Firefox 35 et Firefox 36 <sup>(angl.)</sup>](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2014-11-28&chfield=resolution&query_format=advanced&chfieldfrom=2014-10-13&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=11736454).

### CSS

- La propriété {{CSSxRef("will-change")}} a été activée par défaut ([bogue Firefox 961871 <sup>(angl.)</sup>](https://bugzil.la/961871)).
- La propriété {{CSSxRef("white-space")}} fonctionne désormais sur les éléments HTML {{HTMLElement("textarea")}} ([bogue Firefox 82711 <sup>(angl.)</sup>](https://bugzil.la/82711)).
- Le descripteur {{CSSxRef("@font-face/unicode-range", "unicode-range")}} est désormais pris en charge par {{CSSxRef("@font-face")}} ([bogue Firefox 475891 <sup>(angl.)</sup>](https://bugzil.la/475891)), mais n'est pas activé par défaut.
- Les propriétés {{CSSxRef("text-decoration-color")}}, {{CSSxRef("text-decoration-line")}} et {{CSSxRef("text-decoration-style")}} sont désormais non préfixées ([bogue Firefox 825004 <sup>(angl.)</sup>](https://bugzil.la/825004)). Les versions préfixées restent disponibles pendant un certain temps pour faciliter la transition ([bogue Firefox 1097922 <sup>(angl.)</sup>](https://bugzil.la/1097922)).
- La propriété {{CSSxRef("text-decoration")}} est désormais une propriété raccourcie ([bogue Firefox 1039488 <sup>(angl.)</sup>](https://bugzil.la/1039488)).
- Les propriétés {{CSSxRef("object-fit")}} et {{CSSxRef("object-position")}} sont désormais prises en charge ([bogue Firefox 624647 <sup>(angl.)</sup>](https://bugzil.la/624647))
- La valeur `contents` de la propriété {{CSSxRef("display")}} a été implémentée expérimentalement. Elle est désactivée par défaut ([bogue Firefox 907396 <sup>(angl.)</sup>](https://bugzil.la/907396)).
- En [mode Quirks](/fr/docs/Web/HTML/Guides/Quirks_mode_and_standards_mode), le [bogue `:active` et `:hover` tremblant](https://web.archive.org/web/20210414153205/https://developer.mozilla.org/en-US/docs/Mozilla/Mozilla_quirks_mode_behavior#Miscellaneous_.26_Style) a été modifié pour être appliqué moins souvent&nbsp;: il est maintenant utilisé uniquement sur les liens, uniquement s'il n'y a pas de pseudo-élément ou d'autre pseudo-classe dans l'élément et s'il ne fait pas partie d'un élément de pseudo-classe ([bogue Firefox 783213 <sup>(angl.)</sup>](https://bugzil.la/783213)).
- La propriété {{CSSxRef("isolation")}} a été implémentée ([bogue Firefox 1077872 <sup>(angl.)</sup>](https://bugzil.la/1077872)).
- Les {{CSSxRef("&lt;gradient&gt;")}} CSS s'appliquent désormais sur les couleurs multipliées en amont, conformément à la spécification et aux autres navigateurs, et éliminent les couleurs grises inattendues apparaissant dans celles-ci ([bogue Firefox 591600 <sup>(angl.)</sup>](https://bugzil.la/591600)).
- La syntaxe de l'indice d'interpolation a été ajoutée à {{CSSxRef("&lt;gradient&gt;")}} ([bogue Firefox 1074056 <sup>(angl.)</sup>](https://bugzil.la/1074056)).
- La propriété {{CSSxRef("scroll-behavior")}} a été implémentée ([bogue Firefox 1010538 <sup>(angl.)</sup>](https://bugzil.la/1010538)).

### HTML

- La prise en charge de [`<meta name="referrer">`](/fr/docs/Web/HTML/Reference/Elements/meta) a été ajoutée ([bogue Firefox 704320 <sup>(angl.)</sup>](https://bugzil.la/704320)).
- Dans Firefox, les filtres définis dans l'attribut [`accept`](/fr/docs/Web/HTML/Reference/Elements/input#accept) de {{HTMLElement("input")}} sont toujours sélectionnés par défaut, sauf s'il y a une valeur inconnue, c'est-à-dire un type MIME inconnu ou une valeur mal formatée dans l'attribut [`accept`](/fr/docs/Web/HTML/Reference/Elements/input#accept). Les filtres définis étaient auparavant sélectionnés par défaut uniquement pour les valeurs `image/*`, `video/*` et `audio/*` ([bogue Firefox 826185 <sup>(angl.)</sup>](https://bugzil.la/826185)).

### JavaScript

- Le type de données `Symbol` de [ECMAScript 2015 <sup>(angl.)</sup>](https://web.archive.org/web/20210612110055/https://developer.mozilla.org/en-US/docs/Archive/Web/JavaScript/New_in_JavaScript/ECMAScript_2015_support_in_Mozilla) a été activé par défaut (était disponible dans le canal Nightly depuis la version 33) ([bogue Firefox 1066322 <sup>(angl.)</sup>](https://bugzil.la/1066322))&nbsp;:
  - {{JSxRef("Symbol")}}
  - {{JSxRef("Symbol.for()")}}
  - {{JSxRef("Symbol.keyFor()")}}
  - {{JSxRef("Object.getOwnPropertySymbols()")}}

- L'ancienne chaîne de caractère de remplacement `"@@iterator"` a été remplacée par le véritable symbole bien connu ES2015 {{JSxRef("Symbol.iterator")}} pour la clé de propriété de l'interface [itérable](/fr/docs/Web/JavaScript/Reference/Iteration_protocols) ([bogue Firefox 918828 <sup>(angl.)</sup>](https://bugzil.la/918828)).
- L'opération abstraite interne à la spécification `ToNumber(string)` prend désormais en charge les littéraux binaires (`0b`) et octaux (`0o`), ce qui constitue un changement potentiellement incompatible avec ES5 ([bogue Firefox 1079120 <sup>(angl.)</sup>](https://bugzil.la/1079120)).
  - `Number("0b11")` retourne désormais `3`, et non `NaN`.
  - `"0o11" == 9` retourne désormais `true`, et non `false`.

- La déclaration {{JSxRef("Statements/const", "const")}} est désormais limitée au bloc et nécessite un initialiseur ([bogue Firefox 611388 <sup>(angl.)</sup>](https://bugzil.la/611388)). Elle ne peut plus non plus être redéclarée ([bogue Firefox 1095439 <sup>(angl.)</sup>](https://bugzil.la/1095439)).
  - `{const a=1}; a;` génère désormais une {{JSxRef("ReferenceError")}} et ne retourne plus `1` en raison de la portée du bloc.
  - `const a;` génère désormais une {{JSxRef("SyntaxError")}} («&nbsp;missing = in const declaration&nbsp;»)&nbsp;: un initialiseur est requis.
  - `const a = 1; a = 2;` génère également une {{JSxRef("SyntaxError")}} («&nbsp;invalid assignment to const a&nbsp;»).

- La méthode ES2016 {{JSxRef("Array.prototype.includes")}} a été implémentée, mais pour l'instant, elle n'est activée que dans les versions Nightly ([bogue Firefox 1069063 <sup>(angl.)</sup>](https://bugzil.la/1069063)).
- L'opérateur {{JSxRef("delete")}} déclenche désormais la «&nbsp;[zone temporelle morte](/fr/docs/Web/JavaScript/Reference/Statements/let#temporal_dead_zone_tdz)&nbsp;» lorsqu'il est utilisé avec {{JSxRef("Statements/let", "let")}} et {{JSxRef("Statements/const", "const")}} ([bogue Firefox 1074571 <sup>(angl.)</sup>](https://bugzil.la/1074571)).
- Les blocs et expressions {{JSxRef("Statements/let#instruction_2", "let")}} non standard sont obsolètes et affichent désormais un avertissement dans la console. Ne les utilisez plus, ils seront supprimés à l'avenir.
- Le constructeur {{JSxRef("WeakMap")}} gère désormais l'argument itérable optionnel ([bogue Firefox 1092537 <sup>(angl.)</sup>](https://bugzil.la/1092537)).

### Interfaces/APIs/DOM

- La méthode {{DOMxRef("CanvasRenderingContext2D.resetTransform()")}} de l'API Canvas a été implémentée ([bogue Firefox 1099148 <sup>(angl.)</sup>](https://bugzil.la/1099148)).
- ECDSA est désormais pris en charge dans l'API Web Crypto ([bogue Firefox 1034854 <sup>(angl.)</sup>](https://bugzil.la/1034854)).
- Notre implémentation expérimentale de WebGL 2.0 progresse&nbsp;!
  - L'interface {{DOMxRef("WebGLQuery")}} est disponible ([bogue Firefox 1048719 <sup>(angl.)</sup>](https://bugzil.la/1048719)).
  - La méthode {{DOMxRef("WebGL2RenderingContext.invalidateFrameBuffer()")}} a été implémentée ([bogue Firefox 1076456 <sup>(angl.)</sup>](https://bugzil.la/1076456)).

- L'interface {{DOMxRef("MediaDevices")}}, contenant la version basée sur {{JSxRef("Promise")}} de {{DOMxRef("MediaDevices.getUserMedia()", "getUserMedia()")}}, a été ajoutée. Elle est disponible avec {{DOMxRef("Navigator.mediaDevices")}} ([bogue Firefox 1033885 <sup>(angl.)</sup>](https://bugzil.la/1033885)).
- La méthode {{DOMxRef("Navigator.requestMediaKeySystemAccess()")}} liée à l'EME, ainsi que l'interface {{DOMxRef("MediaKeySystemAccess")}}, est désormais prise en charge ([bogue Firefox 1095257 <sup>(angl.)</sup>](https://bugzil.la/1095257)).
- L'évènement {{DOMxRef("MediaKeySession/keystatuseschange_event", "keyschange")}} est désormais envoyé lorsqu'un CDM lié à l'EME modifie les clés dans une session ([bogue Firefox 1081755 <sup>(angl.)</sup>](https://bugzil.la/1081755)).
- Les valeurs par défaut des options pour {{DOMxRef("MutationObserver.observe()")}} ont été mises à jour pour correspondre à la dernière spécification ([bogue Firefox 973638 <sup>(angl.)</sup>](https://bugzil.la/973638)).
- La prise en charge expérimentale des dispositifs de réalité virtuelle est disponible derrière la préférence `dom.vr.enabled`, désactivée par défaut ([bogue Firefox 1036604 <sup>(angl.)</sup>](https://bugzil.la/1036604)).
- La fonction associée à {{DOMxRef("RTCPeerConnection.signalingstatechange_event", "RTCPeerConnection.onsignalingstatechange")}} reçoit désormais un évènement en paramètre, conformément à la spécification ([bogue Firefox 1075133 <sup>(angl.)</sup>](https://bugzil.la/1075133)).
- L'implémentation expérimentale des animations Web progresse&nbsp;: la méthode {{DOMxRef("Animation/play", "AnimationPlayer.play()")}} et {{DOMxRef("Animation/pause", "AnimationPlayer.pause()")}} sont désormais prises en charge ([bogue Firefox 1070745 <sup>(angl.)</sup>](https://bugzil.la/1070745)), ainsi que {{DOMxRef("Animation/playState", "AnimationPlayer.playState")}} ([bogue Firefox 1037321 <sup>(angl.)</sup>](https://bugzil.la/1037321)).
- L'interface non standard `DOMRequest` dispose désormais d'une méthode `DOMRequest.then()` ([bogue Firefox 839838 <sup>(angl.)</sup>](https://bugzil.la/839838)).
- Les méthodes de contrôle du comportement de défilement de CSSOM View, {{DOMxRef("Element.scroll()")}}, {{DOMxRef("Element.scrollTo()")}}, {{DOMxRef("Element.scrollBy()")}}, et {{DOMxRef("Element.scrollIntoView()")}}, ont été implémentées ou étendues ([bogue Firefox 1045754 <sup>(angl.)</sup>](https://bugzil.la/1045754) et [bogue Firefox 1087559 <sup>(angl.)</sup>](https://bugzil.la/1087559)).
- L'affectation à {{DOMxRef("Element.innerHTML")}} sur un {{DOMxRef("SVGElement")}} crée désormais des éléments dans l'espace de noms SVG ([bogue Firefox 886390 <sup>(angl.)</sup>](https://bugzil.la/886390)).
- La méthode `nsIWebBrowserPersist.saveURI()` nécessite désormais 8 arguments, dans un ordre incompatible avec les versions précédentes.
- La prise en charge des Media Source Extensions (MSE) est activée par défaut dans les versions non build (Nightly et Developer Edition uniquement) ([bogue Firefox 1000686 <sup>(angl.)</sup>](https://bugzil.la/1000686)). Elle reste désactivée dans les versions Beta et Release.

### MathML

_Pas de changement._

### SVG

_Pas de changement._

### Audio/Vidéo

_Pas de changement._

## Réseau

- La prise en charge de SPDY/3 a été supprimée&nbsp;; la prise en charge de SPDY/3.1 est toujours disponible ([bogue Firefox 1097944 <sup>(angl.)</sup>](https://bugzil.la/1097944)).

## Sécurité

- RC4 est désormais considéré comme non sécurisé et tous les indicateurs de l'interface utilisateur réagissent en conséquence&nbsp;; SSLv3 a été désactivé par défaut dans Firefox 34, mais l'interface utilisateur a été modifiée pour aider l'utilisateur·ice à mieux comprendre ce qui se passe ([bogue Firefox 1093595 <sup>(angl.)</sup>](https://bugzil.la/1093595)).
- De plus, RC4 n'est plus proposé lors de la poignée de main initiale de TLS ([bogue Firefox 1088915 <sup>(angl.)</sup>](https://bugzil.la/1088915)).
- La directive [`form-action`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/form-action) de CSP 1.1 est désormais prise en charge ([bogue Firefox 529697 <sup>(angl.)</sup>](https://bugzil.la/529697)).
- Dans les préférences de Firefox, le composant de sélection [Ne pas suivre](/fr/docs/Web/HTTP/Reference/Headers/DNT) est à nouveau un interrupteur marche/arrêt ([bogue Firefox 1071747 <sup>(angl.)</sup>](https://bugzil.la/1071747)).

## Changements pour les développeur·euse·s de Mozilla et d'extensions

### SDK d'extension

#### Points forts

- Le module [`sdk/test/httpd` <sup>(angl.)</sup>](https://web.archive.org/web/20160422002127/https://developer.mozilla.org/en-US/Add-ons/SDK/Low-Level_APIs/test_httpd) a été supprimé, utilisez plutôt le module npm [addon-httpd <sup>(angl.)</sup>](https://www.npmjs.com/package/addon-httpd).
- Ajout de badges aux boutons [`sdk/ui` <sup>(angl.)</sup>](https://web.archive.org/web/20210216154222/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Add-on_SDK/High-Level_APIs/ui) ([bogue Firefox 994280 <sup>(angl.)</sup>](https://bugzil.la/994280)).
- Implémentation de la fonction globale `require` pour accéder aux modules sdk n'importe où ([bogue Firefox 1070927 <sup>(angl.)</sup>](https://bugzil.la/1070927)), en utilisant&nbsp;:

  ```js
  const { require } = Cu.import(
    "resource://gre/modules/commonjs/toolkit/require.js",
    {},
  );
  ```

#### Détails

[Instantanés GitHub faits entre Firefox 35 et Firefox 36 <sup>(angl.)</sup>](https://github.com/mozilla/addon-sdk/compare/firefox35...firefox36).

### Modules de code JavaScript

- `PromiseUtils.resolveOrTimeout` est implémenté ([bogue Firefox 1080466 <sup>(angl.)</sup>](https://bugzil.la/1080466)).
- `PromiseUtils.defer` (un remplacement de `Promise.defer()`) est implémenté ([bogue Firefox 1093021 <sup>(angl.)</sup>](https://bugzil.la/1093021)).

### Interfaces

#### nsIContentPolicy

De nouvelles constantes ont été ajoutées à `nsIContentPolicy` pour permettre aux internes de Gecko et au code des extensions de mieux différencier les différents types de requêtes. Celles-ci sont&nbsp;:

- `TYPE_FETCH`
  - : Indique une requête de chargement de contenu initiée par la méthode {{DOMxRef("Window/fetch", "fetch()")}}.
- `TYPE_IMAGESET`
  - : Indique une requête de chargement d'un {{HTMLElement("img")}} (avec l'attribut [`srcset`](/fr/docs/Web/HTML/Reference/Elements/img#srcset) ou l'élément {{HTMLElement("picture")}}).

### XUL

_Pas de changement._

### Autre

- L'option de ligne de commande `-remote` de Firefox a été supprimée ([bogue Firefox 1080319 <sup>(angl.)</sup>](https://bugzil.la/1080319)).
