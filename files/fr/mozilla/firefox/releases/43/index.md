---
title: Firefox 43 note de version pour les développeurs
short-title: Firefox 43
slug: Mozilla/Firefox/Releases/43
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

[Pour tester les dernières fonctionnalités pour les développeur·euse·s de Firefox, installez Firefox Developer Edition <sup>(angl.)</sup>](https://www.firefox.com/en-US/channel/desktop/developer/)
Firefox 43 a été publié le 15 décembre 2015. Cet article répertorie les principaux changements utiles non seulement pour les développeur·euse·s web, mais aussi pour les développeur·euse·s Firefox et Gecko ainsi que pour les développeur·euse·s d'extensions.

## Changements pour les développeur·euse·s web

### Outils de développement

Points forts&nbsp;:

- [Journalisation côté serveur dans la console Web <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#server)
- [Trouver rapidement la règle qui a remplacé une déclaration CSS <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#overridden-declarations)
- [Élément de menu contextuel «&nbsp;Utiliser dans la console&nbsp;» dans l'inspecteur <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- [Option "Strict" pour le filtrage dans la vue des règles <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#strict-search)
- [Les entrées réseau dans la console renvoient maintenant au moniteur réseau <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/web_console/console_messages/index.html#network)
- [La vue du balisage affiche des indicateurs pour les pseudo-classes verrouillées pour les éléments <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#setting-hover-active-focus)
- Nouvelle interface de la barre latérale pour WebIDE

[Tous les bogues des outils de développement corrigés entre Firefox 42 et Firefox 43 <sup>(angl.)</sup>](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-09-19&query_format=advanced&chfield=resolution&chfieldfrom=2015-08-10&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12582678)

### CSS

- La prise en charge de la version standard, non préfixée de {{CSSxRef("hyphens")}} et arrivée ([bogue Firefox 953408 <sup>(angl.)</sup>](https://bugzil.la/953408)).
- La propriété raccourcie {{CSSxRef("font")}} a été mise à jour pour accepter les valeurs de {{CSSxRef("font-stretch")}} ([bogue Firefox 1057680 <sup>(angl.)</sup>](https://bugzil.la/1057680)).
- Pour correspondre à la dernière évolution de la spécification, la pseudo-classe {{CSSxRef(":fullscreen")}} sélectionne désormais l'ensemble de la pile d'éléments en plein écran, et pas seulement celui de niveau supérieur ([bogue Firefox 1199522 <sup>(angl.)</sup>](https://bugzil.la/1199522)).
- Les valeurs SVG obsolètes pour {{CSSxRef("writing-mode")}}, `lr`, `lr-tb`, `rl`, `tb` et `tb-rl`, ont été ajoutées en CSS comme alias des propriétés standard ([bogue Firefox 1205787 <sup>(angl.)</sup>](https://bugzil.la/1205787)).

### HTML

- Pour {{HTMLElement("img")}} avec une image ICO contenant plusieurs cadres, la dimension intrinsèque de l'image est définie sur celle de la plus grande frame, et non plus sur celle de la plus petite frame ([bogue Firefox 1201796 <sup>(angl.)</sup>](https://bugzil.la/1201796)).
- La valeur de la fenêtre d'affichage du document (définie avec `<meta name="viewport>`) peut désormais être modifiée dynamiquement avec JavaScript ([bogue Firefox 976616 <sup>(angl.)</sup>](https://bugzil.la/976616)).

### JavaScript

#### Nouvelles API

- Les nouvelles méthodes ES2016 {{JSxRef("Array.prototype.includes()")}} et {{JSxRef("TypedArray.prototype.includes()")}} sont désormais activées par défaut ([bogue Firefox 1070767](https://bugzil.la/1070767)).

#### Changements concernant l'objet `arguments`

- Pour correspondre à la spécification ES2015, les [fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions) n'ont plus leur propre objet [`arguments`](/fr/docs/Web/JavaScript/Reference/Functions/arguments). L'objet `arguments` est désormais lié lexicalement (hérité de la fonction externe). Dans la plupart des cas, les [paramètres rest](/fr/docs/Web/JavaScript/Reference/Functions/rest_parameters) sont une bonne alternative `(...args) => args[i]`, voir [bogue Firefox 889158 <sup>(angl.)</sup>](https://bugzil.la/889158).
- L'objet [arguments](/fr/docs/Web/JavaScript/Reference/Functions/arguments) est désormais autorisé en conjonction avec les [paramètres rest](/fr/docs/Web/JavaScript/Reference/Functions/rest_parameters) ([bogue Firefox 1133298 <sup>(angl.)</sup>](https://bugzil.la/1133298)).
- Dorénavant, un objet [`arguments`](/fr/docs/Web/JavaScript/Reference/Functions/arguments) mappé dans les fonctions non strictes n'est fourni que si la fonction ne contient **aucun** [paramètre rest](/fr/docs/Web/JavaScript/Reference/Functions/rest_parameters), aucun [paramètre par défaut](/fr/docs/Web/JavaScript/Reference/Functions/Default_parameters) ou aucun [paramètre déstructuré](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring) ([bogue Firefox 1175394 <sup>(angl.)</sup>](https://bugzil.la/1175394)).

#### Autres changements

- Les [générateurs](/fr/docs/Web/JavaScript/Reference/Statements/function*) et les [méthodes génératrices](/fr/docs/Web/JavaScript/Reference/Functions/Method_definitions) ne sont plus constructibles conformément à ES2016 ([bogue Firefox 1191486 <sup>(angl.)</sup>](https://bugzil.la/1191486)).

### Interfaces/APIs/DOM

#### DOM & HTML DOM

_Pas de changement._

#### IndexedDB

- Une nouvelle fonctionnalité appelée tri sensible à la locale a été ajoutée, permettant la création d'index avec une locale définie, qui peut ensuite être utilisée pour trier les données selon les règles de cette locale ([bogue Firefox 871846 <sup>(angl.)</sup>](https://bugzil.la/871846)). Il s'agit d'une fonctionnalité spécifique à Firefox et non standard.

#### Service Workers

- Conformément à la spécification, si {{DOMxRef("ExtendableEvent.waitUntil()")}} est appelé en dehors du gestionnaire {{DOMxRef("ExtendableEvent")}}, Firefox retourne désormais une erreur `InvalidStateError`&nbsp;; de plus, plusieurs appels à {{DOMxRef("ExtendableEvent.waitUntil","waitUntil()")}} sont désormais empilés, et les promesses résultantes sont ajoutées à la liste des [promesses d'extension de durée de vie <sup>(angl.)</sup>](https://slightlyoff.github.io/ServiceWorker/spec/service_worker/index.html#dfn-extend-lifetime-promises) ([bogue Firefox 1180274 <sup>(angl.)</sup>](https://bugzil.la/1180274)).
- Les méthodes {{DOMxRef("PushMessageData")}} ont été implémentées ([bogue Firefox 1149195 <sup>(angl.)</sup>](https://bugzil.la/1149195)).

#### WebRTC

- La méthode {{DOMxRef("HTMLCanvasElement.captureStream()")}} a été activée par défaut ([bogue Firefox 1177276 <sup>(angl.)</sup>](https://bugzil.la/1177276)).
- L'option de style de contrainte non standard pour `RTCOfferOptions` a été dépréciée et sera entièrement supprimée dans Firefox 44.

#### Divers

- [L'API Battery Status](/fr/docs/Web/API/Battery_Status_API) utilise désormais la nouvelle syntaxe de promesse pour {{DOMxRef("Navigator.getBattery()")}}, comme défini dans l'évolution récente de la spécification ([bogue Firefox 1050749 <sup>(angl.)</sup>](https://bugzil.la/1050749)).
- L'en-tête `User-Agent` ne fait plus partie de la liste des {{Glossary("Forbidden_request_header", "en-têtes de requête interdits")}}, il peut donc désormais être défini dans un objet [Fetch](/fr/docs/Web/API/Fetch_API) {{DOMxRef("Headers")}}, avec XHR {{DOMxRef("XMLHttpRequest.setRequestHeader()")}},… ([bogue Firefox 1188932 <sup>(angl.)</sup>](https://bugzil.la/1188932)).
- Le constructeur {{DOMxRef("MediaRecorder.MediaRecorder", "MediaRecorder()")}} peut désormais accepter un dictionnaire d'options en tant que paramètre, ce qui permet de définir des débits binaires personnalisés pour l'audio/vidéo à enregistrer ([bogue Firefox 1161276 <sup>(angl.)</sup>](https://bugzil.la/1161276)).
- L'interface {{DOMxRef("PerformanceObserver")}}, appartenant aux [API de performance](/fr/docs/Web/API/Performance_API), a été implémentée ([bogue Firefox 1165796 <sup>(angl.)</sup>](https://bugzil.la/1165796)).
- L'API Frame Timing a été ajoutée&nbsp;: les interfaces `PerformanceRenderTiming` et `PerformanceCompositeTiming` sont désormais disponibles ([bogue Firefox 1191178 <sup>(angl.)</sup>](https://bugzil.la/1191178)).
- La moderne [API d'orientation de l'écran](/fr/docs/Web/API/Screen_Orientation_API) a été implémentée&nbsp;: {{DOMxRef("Screen.orientation")}} sans préfixe et l'interface {{DOMxRef("ScreenOrientation")}} sont désormais disponibles ([bogue Firefox 1131470 <sup>(angl.)</sup>](https://bugzil.la/1131470)). Les méthodes non standard `Screen.mozOrientation`, `Screen.onmozorientationchange`, `Screen.mozLockOrientation()`, et `Screen.mozUnlockOrientation()` seront supprimées à l'avenir.
- Sous Linux, comme sous Windows, {{DOMxRef("Event.timeStamp")}} retourne désormais un {{DOMxRef("DOMHighResTimeStamp")}} ([bogue Firefox 1026803<sup>(angl.)</sup>](https://bugzil.la/1026803)).
- La prise en charge expérimentale des évènements {{DOMxRef("Selection")}} {{DOMxRef("Document/selectionchange_event", "selectionchange")}} et {{DOMxRef("Node/selectstart_event", "selectstart")}}, ainsi que des propriétés des gestionnaires d'évènements {{DOMxRef("Document.selectionchange_event", "Document.onselectionchange")}} et {{DOMxRef("Node/selectstart_event", "HTMLInputElement.onselectstart")}}, a été ajoutée ([bogue Firefox 571294<sup>(angl.)</sup>](https://bugzil.la/571294)). L'évènement `selectionchange` est déclenché sur le {{DOMxRef("Document")}} si l'objet `Selection` associé est concerné, ou sur le {{DOMxRef("HTMLInputElement")}} ou le {{DOMxRef("HTMLTextAreaElement")}} spécifique ([bogue Firefox 1196479<sup>(angl.)</sup>](https://bugzil.la/1196479)). Cette fonctionnalité est contrôlée par la préférence `dom.select_events.enabled`, qui est par défaut `false`, sauf sur Nightly.
- La prise en charge de {{DOMxRef("MouseEvent.offsetX")}} et {{DOMxRef("MouseEvent.offsetY")}} a été activée sur Firefox pour Android et Firefox OS ([bogue Firefox 1204841 <sup>(angl.)</sup>](https://bugzil.la/1204841)).
- La méthode `HTMLCanvasElement.mozFetchAsStream()` a été supprimée ([bogue Firefox 1206030 <sup>(angl.)</sup>](https://bugzil.la/1206030)).
- Le constructeur {{DOMxRef("Request.Request", "Request()")}} ainsi que {{DOMxRef("Window/fetch", "fetch()")}} lèvent désormais une exception {{JSxRef("TypeError")}} lorsqu'ils sont utilisés avec une URL contenant un nom d'utilisateur·ice et un mot de passe ([bogue Firefox 1195820 <sup>(angl.)</sup>](https://bugzil.la/1195820)).

### MathML

_Pas de changement._

### SVG

_Pas de changement._

### Audio/Vidéo

_Pas de changement._

## HTTP

_Pas de changement._

## Réseau

_Pas de changement._

## Sécurité

- L'accès au stockage Web (c'est-à-dire `localStorage` et `sessionStorage`) à partir des IFrames tiers est désormais refusé si l'utilisateur·ice a [désactivé les cookies tiers <sup>(angl.)</sup>](https://support.mozilla.org/en-US/kb/third-party-cookies-firefox-tracking-protection) ([bogue Firefox 536509 <sup>(angl.)</sup>](https://bugzil.la/536509)).
- Cette liste blanche a même été supprimée dans les versions Nightly et Aurora/Dev Edition du navigateur ([bogue Firefox 1201023 <sup>(angl.)</sup>](https://bugzil.la/1201023)). Il est actuellement prévu que cette suppression se produise également pour les versions Beta et Release pour la prochaine version (Firefox 44).
- L'intégrité des sous-ressources a été mise en œuvre pour {{HTMLElement("script")}} et {{HTMLElement("link")}} qui se lient aux feuilles de style ([bogue Firefox 992096 <sup>(angl.)</sup>](https://bugzil.la/992096)).

## Changements pour les développeur·euse·s de Mozilla et d'extensions

### Interfaces

_Pas de changement._

### XUL

_Pas de changement._

### JavaScript code modules

_Pas de changement._

### XPCOM

_Pas de changement._

### Modules complémentaires

- En préparation des futures versions pour passer à un contenu multi-processus, les plugins [NPAPI](/fr/docs/Glossary/Plugin) ne peuvent plus être exécutés dans le même processus que le contenu de la page. Les préférences commençant par `dom.ipc.plugins` ne sont plus utilisées.

### Autres

_Pas de changement._
