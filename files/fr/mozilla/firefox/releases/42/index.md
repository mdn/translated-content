---
title: Firefox 42 note de version pour les développeurs
short-title: Firefox 42
slug: Mozilla/Firefox/Releases/42
l10n:
  sourceCommit: 83f4e64da466670c3700110da364546253eae127
---

[Pour tester les dernières fonctionnalités pour les développeur·euse·s de Firefox, installez Firefox Developer Edition <sup>(angl.)</sup>](https://www.firefox.com/en-US/channel/desktop/developer/)
Firefox 42 a été publié le 3 novembre 2015. Cet article répertorie les principaux changements utiles non seulement pour les développeur·euse·s web, mais aussi pour les développeur·euse·s Firefox et Gecko ainsi que pour les développeur·euse·s d'extensions.

## Changements pour les développeur·euse·s Web

### Outils de développement

Points forts&nbsp;:

- [Débogage de Firefox pour Android avec Wifi <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html#Connecting_over_the_Network)
- _Configuration de Firefox OS Simulator dans WebIDE_
- [Préréglages de filtre CSS <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html#saving_filter_presets)

[Tous les bogues des outils de développement corrigés entre Firefox 41 et Firefox 42 <sup>(angl.)</sup>](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-08-10&query_format=advanced&chfield=resolution&chfieldfrom=2015-06-29&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12478437).

### CSS

- Le mode d'écriture vertical de {{CSSxRef("writing-mode")}} est maintenant pris en charge avec les scripts `rtl` (de droite à gauche) ([bogue Firefox 1131451 <sup>(angl.)</sup>](https://bugzil.la/1131451)).
- Les valeurs de {{CSSxRef("caption-side")}} sont désormais relatives à la table, et changent de signification réelle en fonction de sa valeur {{CSSxRef("writing-mode")}} [bogue Firefox 1202993 <sup>(angl.)</sup>](https://bugzil.la/1202993).
- Les propriétés non standard comme `-moz-margin-start` sont maintenant des alias de leur homologue standard ({{CSSxRef("margin-inline-start")}}, …). Auparavant, c'était le contraire. Cela affecte la valeur renvoyée par {{DOMxRef("CSSStyleDeclaration.cssText")}} et l'itération des propriétés dans une règle de style et l'itération des propriétés dans une règle de style, qui utilisent toutes deux la forme canonique ([bogue Firefox 1118103 <sup>(angl.)</sup>](https://bugzil.la/1118103)).
- La version préfixée ds dégradés CSS peut être désactivée en définissant la préférence `layout.css.prefixes.gradients` sur `false`.
- Plusieurs anciens bogues avec {{CSSxRef("float")}} et le comportement de réduction des marges ont été corrigés ([bogue Firefox 478834 <sup>(angl.)</sup>](https://bugzil.la/478834), [bogue Firefox 538194 <sup>(angl.)</sup>](https://bugzil.la/538194), et [bogue Firefox 451791 <sup>(angl.)</sup>](https://bugzil.la/451791)).

### HTML

- Prise en charge expérimentale de l'attribut [`referrer`](/fr/docs/Web/HTML/Reference/Elements/input#referrer) de {{HTMLElement("img")}} ([bogue Firefox 1166910 <sup>(angl.)</sup>](https://bugzil.la/1166910)), {{HTMLElement("iframe")}} ([bogue Firefox 1175736 <sup>(angl.)</sup>](https://bugzil.la/1175736)), {{HTMLElement("a")}} et {{HTMLElement("area")}} ont été ajoutés ([bogue Firefox 1174913 <sup>(angl.)</sup>](https://bugzil.la/1174913)). Il n'y a aucun effet par défaut, le `network.http.enablePerElementReferrer` étant `false` par défaut.

### JavaScript

- L'objet {{JSxRef("Reflect")}} a été ajouté ([bogue Firefox 987514 <sup>(angl.)</sup>](https://bugzil.la/987514)).
- La mise en œuvre de l'interruption {{JSxRef("Proxy")}} {{JSxRef("Proxy/Proxy/ownKeys", "handler.ownKeys()")}} a été mise à jour pour correspondre à la spécification finale ES2015 ([bogue Firefox 1049662 <sup>(angl.)</sup>](https://bugzil.la/1049662)).
- Appel de {{JSxRef("Map")}}, {{JSxRef("Set")}}, ou {{JSxRef("WeakMap")}} sans {{JSxRef('Operators', 'new')}}, va maintenant lancer un {{JSxRef("TypeError")}} ([bogue Firefox 1083752 <sup>(angl.)</sup>](https://bugzil.la/1083752)).

### Interfaces/APIs/DOM

#### DOM & HTML DOM

- Les images avec une [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) ne sont plus répertoriées comme propriété de l'interface {{DOMxRef("Window")}}&nbsp;: `<img id="login">` n'est plus accessible en tant que `window.login`. Ce comportement a été introduit dans Firefox 26 et a été supprimé pour correspondre à une modification ultérieure de la spécification ([bogue Firefox 959992 <sup>(angl.)</sup>](https://bugzil.la/959992)).
- {{DOMxRef('MouseEvent.offsetX')}} et {{DOMxRef('MouseEvent.offsetY')}} ont été ajoutés ([bogue Firefox 69787 <sup>(angl.)</sup>](https://bugzil.la/69787)).
- L'interface {{DOMxRef("HTMLInputElement")}} a été étendue expérimentalement pour gérer le téléchargement des répertoires ([bogue Firefox 1164310 <sup>(angl.)</sup>](https://bugzil.la/1164310)). Ces quatre membres peuvent être exposés en définissant la préférence `dom.input.dirpicker` sur `true`&nbsp;:
  - `HTMLInputElement.directory`
  - `HTMLInputElement.isFilesAndDirectoriesSupported`
  - `HTMLInputElement.getFilesAndDirectories()`
  - `HTMLInputElement.chooseDirectory()`

- L'interface `Directory` a été étendue expérimentalement ([bogue Firefox 1177688 <sup>(angl.)</sup>](https://bugzil.la/1177688)). Les deux membres `Directory.path` et `Directory.getContents` peuvent être exposés en définissant la préférence `dom.input.dirpicker` sur `true`.
- Le `HTMLMediaElement.mozSrcObject` a été renommé dans {{DOMxRef('HTMLMediaElement.srcObject')}} ([bogue Firefox 1175523 <sup>(angl.)</sup>](https://bugzil.la/1175523)).

#### Service Workers

- {{DOMxRef("Request.context")}} a été supprimé ([bogue Firefox 1188062 <sup>(angl.)</sup>](https://bugzil.la/1188062)).
- [L'API Push](/fr/docs/Web/API/Push_API) a été activée par défaut sur Firefox pour bureau ([bogue Firefox 1153499 <sup>(angl.)</sup>](https://bugzil.la/1153499)), mais uniquement sur les canaux Nightly/Dev Edition/Beta. Elle est désactivée par défaut dans le canal Release jusqu'à ce que l'UX grand public et les fonctionnalités de débogage aient été correctement ajoutées ([bogue Firefox 1207875 <sup>(angl.)</sup>](https://bugzil.la/1207875)). Vous pouvez toujours l'activer en activant la préférence `dom.push.enabled` dans about:config.
- La méthode {{DOMxRef("PushManager.hasPermission()")}} a été désapprouvée dans la spécification et remplacée par la méthode {{DOMxRef("PushManager.permissionState()")}}. Firefox a mis à jour son implémentation pour refléter cela ([bogue Firefox 1183853 <sup>(angl.)</sup>](https://bugzil.la/1183853)).
- Des ajouts liés au service worker de [l'API Notifications](/fr/docs/Web/API/Notifications_API) ont été mis en œuvre ([bogue Firefox 1114554 <sup>(angl.)</sup>](https://bugzil.la/1114554)), mais sont désactivés dans cette version.

#### L'API Web Animations

Notre implémentation expérimentale de [l'API Web Animations](/fr/docs/Web/API/Web_Animations_API) a été étendue pour prendre en charge&nbsp;:

- La propriété {{DOMxRef("AnimationPlayer.playbackRate")}} ([bogue Firefox 1127380 <sup>(angl.)</sup>](https://bugzil.la/1127380)).
- Les interface {{DOMxRef("CSSAnimation")}} et {{DOMxRef("CSSTransition")}} ([bogue Firefox 1178186 <sup>(angl.)</sup>](https://bugzil.la/1178186)).
- La méthode {{DOMxRef("Animation.reverse()")}} ([bogue Firefox 1150808 <sup>(angl.)</sup>](https://bugzil.la/1150808)).
- L'interface {{DOMxRef("AnimationPlaybackEvent")}} a été ajoutée et {{DOMxRef("Animation/cancel_event", "cancel")}} et {{DOMxRef("Animation/finish_event", "finish")}} sont maintenant déclenchés sur {{DOMxRef("Animation")}} ([bogue Firefox 1178664 <sup>(angl.)</sup>](https://bugzil.la/1178664)).

#### Composants Web

Notre implémentation expérimentale du [DOM d'ombre](/fr/docs/Web/API/Web_components/Using_shadow_DOM) a été modifiée&nbsp;:

- Lorsque vous essayez d'appeler {{DOMxRef("Node.cloneNode()")}} sur un {{DOMxRef("ShadowRoot")}}, lance une exception `DataCloneError` ([bogue Firefox 1176757 <sup>(angl.)</sup>](https://bugzil.la/1176757)).
- En invoquant {{DOMxRef("Document.importNode()")}} avec un {{DOMxRef("ShadowRoot")}} comme argument, nous lançons maintenant une exception `NotSupportedError` ([bogue Firefox 1177914 <sup>(angl.)</sup>](https://bugzil.la/1177914)).
- En invoquant {{DOMxRef("Document.adoptNode()")}} avec un {{DOMxRef("ShadowRoot")}} comme argument, nous lançons maintenant une exception `HierarchyRequestError` ([bogue Firefox 1177991 <sup>(angl.)</sup>](https://bugzil.la/1177991)).

#### WebGL

- WebGL2 {{DOMxRef("WebGLTransformFeedback")}} a été ajouté ([bogue Firefox 1048724 <sup>(angl.)</sup>](https://bugzil.la/1048724)).
- Pour obtenir un contexte WebGL2, {{DOMxRef("HTMLCanvasElement.getContext()")}} prend maintenant `webgl2` au lieu de `experimental-webgl2` ([bogue Firefox 1187174 <sup>(angl.)</sup>](https://bugzil.la/1187174)).

#### WebRTC

- Le type de données des options de {{DOMxRef("RTCPeerConnection.createOffer()")}}, `RTCOfferOptions`, a été mis à jour pour correspondre plus étroitement à la spécification. Parmi d'autres changements, il est maintenant basé sur le dictionnaire `RTCOfferAnswerOptions`, qui fournit l'option `voiceActivityDetection`.
- Le dictionnaire `RTCAnswerOptions` a été ajouté. C'est le type utilisé pour le paramètre `options` de {{DOMxRef("RTCPeerConnection.createAnswer", "createAnswer()")}}.
- Le `RTCICECandidatePairStats.mozPriority` a été renommé {{DOMxRef("RTCICECandidatePairStats.priority")}} ([bogue Firefox 1184426 <sup>(angl.)</sup>](https://bugzil.la/1184426)).

#### Nouvelles API

- L'interface {{DOMxRef("ImageBitmap")}} et la méthode {{DOMxRef("ImageBitmapFactories.createImageBitmap", "createImageBitmap()")}} ont été ajoutées. Ils sont disponibles sur les scripts de fenêtre standard et dans les Web workers et permettent un affichage efficace des images entre les contextes fenêtre et worker ([bogue Firefox 1044102 <sup>(angl.)</sup>](https://bugzil.la/1044102)).

#### Divers

- L'interface {{DOMxRef("IDBCursorWithValue")}} est désormais disponible dans les [Web workers](/fr/docs/Web/API/Web_Workers_API) ([bogue Firefox 1188115 <sup>(angl.)</sup>](https://bugzil.la/1188115)).
- Les évènements d'erreur envoyés dans les [Web workers](/fr/docs/Web/API/Web_Workers_API) ne bouillonnent plus ([bogue Firefox 1188141 <sup>(angl.)</sup>](https://bugzil.la/1188141)).
- [Media Source Extensions](/fr/docs/Web/API/Media_Source_Extensions_API) (MSE) a été activé pour tous les sites Web, et pas plus pour une liste blanche de sites ([bogue Firefox 1185611 <sup>(angl.)</sup>](https://bugzil.la/1185611)).
- Le {{DOMxRef("Window.mozRequestAnimationFrame()")}} non standard et obsolète a été supprimé ([bogue Firefox 909154 <sup>(angl.)</sup>](https://bugzil.la/909154)). Utilisez plutôt le standard {{DOMxRef("Window.requestAnimationFrame()")}}.
- La synthèse vocale (text-to-speech) a été ajoutée dans Firefox Desktop pour Windows, cachée derrière l'indicateur `media.webspeech.synth.enabled` dans `about:config` ([bogue Firefox 1003457 <sup>(angl.)</sup>](https://bugzil.la/1003457)). Voir [l'API Web Speech](/fr/docs/Web/API/Web_Speech_API) pour plus d'informations.

### MathML

_Pas de changement._

### SVG

_Pas de changement._

### Audio/Video

_Pas de changement._

## HTTP

- Firefox 41 et les versions antérieures acceptaient à tord les champs de pseudo-en-tête non définis ou non valides dans les réponses HTTP/2 . Ceci est maintenant corrigé et le seul champ pseudo-en-tête accepté depuis Firefox 42 est le&nbsp;: _statut_ selon la spécification. Les en-têtes de réponse contenant des champs arbitraires sont considérés comme mal formés. ([bogue Firefox 1136727 <sup>(angl.)</sup>](https://bugzil.la/1136727))

## La mise en réseau

- La directive [`upgrade-insecure-requests`](/fr/docs/Web/HTTP/Reference/Headers/Content-Security-Policy#upgrade-insecure-requests) du CSP a été ajoutée ([bogue Firefox 1139297 <sup>(angl.)</sup>](https://bugzil.la/1139297)).

## Sécurité

- Les certificats EV d'une validité supérieure à 39 mois sont désormais considérés et traités comme des certificats DV ([bogue Firefox 1145679 <sup>(angl.)</sup>](https://bugzil.la/1145679)).

## Changements pour les développeur·euse·s de Mozilla et d'extensions

### Interfaces

#### nsIContentPolicy

- La constante **`TYPE_EMBED`** a été ajoutée à `nsIContentPolicy` pour permettre aux internes de Gecko et au code add-on de mieux différencier les différents types de requêtes. Auparavant, **`TYPE_OBJECT`** était utilisé pour ces cas ([bogue Firefox 1148030 <sup>(angl.)</sup>](https://bugzil.la/1148030)).
- De même, les constantes **`TYPE_SUBDOCUMENT`** ont été divisées en **`TYPE_FRAME`** et **`TYPE_IFRAME`** ([bogue Firefox 1148044 <sup>(angl.)</sup>](https://bugzil.la/1148044)).

### XUL

_Pas de changement._

### Modules de code JavaScript

_Pas de changement._

### XPCOM

_Pas de changement._

### Autre

_Pas de changement._
