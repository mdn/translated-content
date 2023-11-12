---
title: Firefox 42 for developers
slug: Mozilla/Firefox/Releases/42
---

{{FirefoxSidebar}}

## Changements pour les développeurs Web

### Outils de développement

Points forts:

- [Débogage de Firefox pour Android via Wifi](/fr/docs/Tools/Remote_Debugging/Debugging_Firefox_for_Android_over_Wifi)
- [Configuration de Firefox OS Simulator dans WebIDE](/fr/docs/Tools/WebIDE/Setting_up_runtimes#Configuring_Simulators)
- [Préréglages de filtre CSS](/fr/docs/Tools/Page_Inspector/How_to/Edit_CSS_filters#Saving_filter_presets)

[Tous les bogues devtools corrigés entre Firefox 41 et Firefox 42](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-08-10&query_format=advanced&chfield=resolution&chfieldfrom=2015-06-29&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12478437).

### CSS

- Vertical {{cssxref('writing-mode')}} est maintenant pris en charge avec les scripts rtl ([bug Firefox 1131451](https://bugzil.la/1131451)).
- Les valeurs de {{cssxref("caption-side")}} sont désormais relatives à la table, et changent de signification réelle en fonction de sa valeur {{cssxref("writing-mode")}} [bug Firefox 1202993](https://bugzil.la/1202993).
- Les propriétés non standard comme {{cssxref('-moz-margin-start')}} sont maintenant des alias de leur homologue standard ({{cssxref('margin-inline-start')}}, …). Auparavant, c'était le contraire. Cela affecte la valeur renvoyée par {{domxref('CSSStyleDeclaration.cssText')}} et l'itération des propriétés dans une règle de style et l'itération des propriétés dans une règle de style, qui utilisent toutes deux la forme canonical ([bug Firefox 1118103](https://bugzil.la/1118103)).
- La version préfixée ds dégradés CSS peut être désactivée en définissant la préférence `layout.css.prefixes.gradients` sur `false`.
- Plusieurs anciens bogues avec {{cssxref("float")}} et le comportement de réduction des marges ont été corrigés ([bug Firefox 478834](https://bugzil.la/478834), [bug Firefox 538194](https://bugzil.la/538194), et [bug Firefox 451791](https://bugzil.la/451791)).

### HTML

- Prise en charge expérimentale de l'attribut [`referrer`](/fr/docs/Web/HTML/Element/input#referrer) de {{HTMLElement("img")}} ([bug Firefox 1166910](https://bugzil.la/1166910)), {{htmlElement("iframe")}} ([bug Firefox 1175736](https://bugzil.la/1175736)), {{HTMLElement("a")}} et {{HTMLElement("area")}} ont été ajoutés ([bug Firefox 1174913](https://bugzil.la/1174913)). Il n'y a aucun effet par défaut, le `network.http.enablePerElementReferrer` étant `false` par défaut.

### JavaScript

- L'objet {{jsxref("Reflect")}} a été implémenté ([bug Firefox 987514](https://bugzil.la/987514)).
- La mise en œuvre de l'interruption {{jsxref("Proxy")}} {{jsxref("Global_Objects/Proxy/handler/ownKeys", "handler.ownKeys()")}} a été mise à jour pour correspondre à la spécification finale ES2015 ([bug Firefox 1049662](https://bugzil.la/1049662)).
- Appel de {{jsxref("Map")}}, {{jsxref("Set")}}, ou {{jsxref("WeakMap")}} sans {{jsxref('Operators', 'new')}}, va maintenant lancer un {{jsxref("TypeError")}} ([bug Firefox 1083752](https://bugzil.la/1083752)).

### Interfaces/APIs/DOM

#### DOM & HTML DOM

- Les images avec une [`id`](/fr/docs/Web/HTML/Element/img#id) ne sont plus répertoriées comme propriété de l'interface {{domxref("Window")}} : `<img id="login">` n'est plus accessible en tant que `window.login`. Ce comportement a été introduit dans Firefox 26 et a été supprimé pour correspondre à une modification ultérieure de la spécification ([bug Firefox 959992](https://bugzil.la/959992)).
- {{domxref('MouseEvent.offsetX')}} et {{domxref('MouseEvent.offsetY')}} ont été ajoutés ([bug Firefox 69787](https://bugzil.la/69787)).
- L'interface {{domxref("HTMLInputElement")}} a été étendue expérimentalement pour gérer le téléchargement des répertoires ([bug Firefox 1164310](https://bugzil.la/1164310)). Ces quatre membres peuvent être exposés en définissant la préférence `dom.input.dirpicker` sur `true`:

  - {{domxref("HTMLInputElement.directory")}}
  - {{domxref("HTMLInputElement.isFilesAndDirectoriesSupported")}}
  - {{domxref("HTMLInputElement.getFilesAndDirectories()")}}
  - {{domxref("HTMLInputElement.chooseDirectory()")}}

- L'interface {{domxref("Directory")}} a été étendue expérimentalement ([bug Firefox 1177688](https://bugzil.la/1177688)). Les deux membres {{domxref("Directory.path")}} et {{domxref("Directory.getContents")}} peuvent être exposés en définissant la préférence `dom.input.dirpicker` sur `true`.
- Le `HTMLMediaElement.mozSrcObject` a été renommé dans {{domxref('HTMLMediaElement.srcObject')}} ([bug Firefox 1175523](https://bugzil.la/1175523)).

#### Service Workers

- {{domxref('Request.context')}} a été supprimé ([bug Firefox 1188062](https://bugzil.la/1188062)).
- L'[API Push](/fr/docs/Web/API/Push_API) a été activée par défaut sur Firefox pour bureau ([bug Firefox 1153499](https://bugzil.la/1153499)), mais uniquement sur les canaux Nightly/Dev Edition/Beta. Elle est désactivée par défaut dans le canal Release jusqu'à ce que l'UX grand public et les fonctionnalit"s de débogage aient été correctement implémentées ([bug Firefox 1207875](https://bugzil.la/1207875)). Vous pouvez toujours l'activer en activant la préférence `dom.push.enabled` dans about:config.
- La méthode {{domxref("PushManager.hasPermission()")}} a été désapprouvée dans la spécification et remplacée par la méthode {{domxref("PushManager.permissionState()")}}. Firefox a mis à jour son implémentation pour refléter cela ([bug Firefox 1183853](https://bugzil.la/1183853)).
- Des ajouts liés au service worker de l'[API Notifications](/fr/docs/Web/API/Notifications_API) ont été mis en œuvre ([bug Firefox 1114554](https://bugzil.la/1114554)), mais sont désactivés dans cette version.

#### API Web Animations

Notre implémentation expérimentale de l'[API Web Animations](/fr/docs/Web/API/Web_Animations_API) a été étendue pour prendre en charge:

- La propriété {{domxref('AnimationPlayer.playbackRate')}} ([bug Firefox 1127380](https://bugzil.la/1127380)).
- Les interface {{domxref('CSSAnimation')}} et {{domxref('CSSTransition')}} ([bug Firefox 1178186](https://bugzil.la/1178186)).
- La méthode {{domxref('Animation.reverse()')}} ([bug Firefox 1150808](https://bugzil.la/1150808)).
- L'interface {{domxref('AnimationPlaybackEvent')}} a été ajoutée et [`cancel`](/fr/docs/Web/API/Animation/cancel_event) et [`finish`](/fr/docs/Web/API/Animation/finish_event) sont maintenant déclenchés sur {{domxref('Animation')}} ([bug Firefox 1178664](https://bugzil.la/1178664)).

#### Composants Web

Notre implémentation expérimentale du [Shadow DOM](/fr/docs/Web/Web_Components/Shadow_DOM) a été modifiée:

- Lorsque vous essayez d'appeler {{domxref('Node.cloneNode()')}} sur un {{domxref('ShadowRoot')}}, lance une exception `DataCloneError` ([bug Firefox 1176757](https://bugzil.la/1176757)).
- En invoquant {{domxref('Document.importNode()')}} avec un {{domxref('ShadowRoot')}} comme argument, nous lançons maintenant une exception `NotSupportedError` ([bug Firefox 1177914](https://bugzil.la/1177914)).
- En invoquant {{domxref('Document.adoptNode()')}} avec un {{domxref('ShadowRoot')}} comme argument, nous lançons maintenant une exception `HierarchyRequestError` ([bug Firefox 1177991](https://bugzil.la/1177991)).

#### WebGL

- WebGL2 {{domxref('WebGLTransformFeedback')}} a été implémenté ([bug Firefox 1048724](https://bugzil.la/1048724)).
- Pour obtenir un contexte WebGL2, {{domxref('HTMLCanvasElement.getContext()')}} prend maintenant `webgl2` au lieu de `experimental-webgl2` ([bug Firefox 1187174](https://bugzil.la/1187174)).

#### WebRTC

- Le `RTCICECandidatePairStats.mozPriority` a été renommé {{domxref('RTCICECandidatePairStats.priority')}} ([bug Firefox 1184426](https://bugzil.la/1184426)).

#### Nouvelles API

- L'interface {{domxref("ImageBitmap")}} et la méthode {{domxref("ImageBitmapFactories.createImageBitmap","createImageBitmap()")}} ont été implémentées. Ils sont disponibles sur les scripts de fenêtre standard et dans les Web workers et permettent un affichage efficace des images entre les contextes fenêtre et worker ([bug Firefox 1044102](https://bugzil.la/1044102)).

#### Divers

- L'interface {{domxref('IDBCursorWithValue')}} est désormais disponible dans les [Web workers](/fr/docs/Web/API/Web_Workers_API) ([bug Firefox 1188115](https://bugzil.la/1188115)).
- Les événements d'erreur envoyés dans les [Web workers](/fr/docs/Web/API/Web_Workers_API) ne bouillonnent plus ([bug Firefox 1188141](https://bugzil.la/1188141)).
- [Media Source Extensions](/fr/docs/Web/API/Media_Source_Extensions_API) (MSE) a été activé pour tous les sites Web, et pas plus pour une liste blanche de sites ([bug Firefox 1185611](https://bugzil.la/1185611)).
- Le {{domxref('Window.mozRequestAnimationFrame()')}} non standard et obsolète a été supprimé ([bug Firefox 909154](https://bugzil.la/909154)). Utilisez plutôt le standard {{domxref('Window.requestAnimationFrame()')}}.
- La synthèse vocale (text-to-speech) a été implémentée dans Firefox Desktop pour Windows, cachée derrière l'indicateur `media.webspeech.synth.enabled` dans `about:config` ([bug Firefox 1003457](https://bugzil.la/1003457)). Voir [API Web Speech](/fr/docs/Web/API/Web_Speech_API) pour plus d'informations.

### MathML

_Pas de changement._

### SVG

_Pas de changement._

### Audio/Video

_Pas de changement._

## HTTP

- Firefox 41 et les versions antérieures acceptaient à tord les champs de pseudo-en-tête non définis ou non valides dans les réponses HTTP/2 . Ceci est maintenant corrigé et le seul champ pseudo-en-tête accepté depuis Firefox 42 est le : _statut_ selon la spécification. Les en-têtes de réponse contenant des champs arbitraires sont considérés comme mal formés. ([bug Firefox 1136727](https://bugzil.la/1136727))

## La mise en réseau

- La directive [`upgrade-insecure-requests`](/fr/docs/Web/Security/CSP/CSP_policy_directives#upgrade-insecure-requests) du CSP a été implémentée ([bug Firefox 1139297](https://bugzil.la/1139297)).

## Sécurité

- Les certificats EV d'une validité supérieure à 39 mois sont désormais considérés et traités comme des certificats DV ([bug Firefox 1145679](https://bugzil.la/1145679)).

## Changements pour les développeurs d'add-on et de Mozilla

### Interfaces

#### nsIContentPolicy

- La constante **`TYPE_EMBED`** a été ajoutée à [`nsIContentPolicy`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIContentPolicy) pour permettre aux internes de Gecko et au code add-on de mieux différencier les différents types de requêtes. Auparavant, **`TYPE_OBJECT`** était utilisé pour ces cas ([bug Firefox 1148030](https://bugzil.la/1148030)).
- De même, les constantes **`TYPE_SUBDOCUMENT`** ont été divisées en **`TYPE_FRAME`** et **`TYPE_IFRAME`** ([bug Firefox 1148044](https://bugzil.la/1148044)).

### XUL

_Pas de changement._

### Modules de code JavaScript

_Pas de changement._

### XPCOM

_Pas de changement._

### Autre

_Pas de changement._

## Anciennes versions

{{Firefox_for_developers('41')}}
