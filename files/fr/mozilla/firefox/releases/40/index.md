---
title: Firefox 40 pour développeurs
slug: Mozilla/Firefox/Releases/40
translation_of: Mozilla/Firefox/Releases/40
original_slug: Mozilla/Firefox/Versions/40
---
{{FirefoxSidebar}}

## Changements pour les développeurs Web

### Outils pour Développeurs

Nouveautés:

- [Amélioration des vues Animation](/fr/docs/Tools/Page_Inspector/How_to/Work_with_animations#Firefox_40)
- [Obtenir de l'aide MDN pour la syntaxe des propriétés CSS](/fr/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#Get_help_for_CSS_properties)
- [Editer les filtres depuis la page Inspecteur](/fr/docs/Tools/Page_Inspector/How_to/Edit_CSS_filters)
- [Affichage dans la Console Web des messages workers](/fr/docs/Tools/Web_Console#console_API_messages)
- [Filtrer les requetes par URL dans le moniteur réseau](/fr/docs/Tools/Network_Monitor#Filtering_by_URL)
- [Nouvelles options dans le menu contextuel du moniteur réseau](/fr/docs/Tools/Network_Monitor#Context_menu)
- [Montrer quand les ressources réseau sont récupérées du cache du navigateur](/fr/docs/Tools/Network_Monitor#Network_request_fields)
- [Filtrer les règles dans la page Inspecteur](/fr/docs/Tools/Page_Inspector/How_to/Examine_and_edit_CSS#Filtering_rules)

More:

- [Point d'arret au niveau debugger ; expressions dans l'évaluation des sources non nommés](/fr/docs/Tools/Debugger/UI_Tour#Source_list_pane)
- [Copy URL/Open in New Tab context menu items for Debugger source list pane](/fr/docs/Tools/Debugger/UI_Tour#Source_list_pane)
- [Support de console.dirxml dans la Console Web](/fr/docs/Tools/Web_Console#Log_messages)
- [Editeur de Style : "Ouverture d'un lien dans un nouvel onglet" item added to stylesheet list](/fr/docs/Tools/Style_Editor#The_style_sheet_pane)
- [La recherche par sélecteur dans l'Inspecteur inclus dorénavant dans les résultats le class/id meme si celui ci n'a pas de préfix css](/fr/docs/Tools/Page_Inspector/How_to/Examine_and_edit_the_box_model#The_Box_Model_view)
- [Indication de quelle règle CSS est a l'origine du Tooltips dans le modèle de vue 'boite'](/fr/docs/Tools/Page_Inspector/How_to/Inspect_and_select_colors)
- [Basculement entre les format de couleur dans l'inspecteur en utilisant Shift+click](/fr/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#Element_popup_menu)
- [Implement "Scroll Into View" menu item for the Inspector](/fr/docs/Tools/Page_Inspector/How_to/Examine_and_edit_HTML#Element_popup_menu)
- [transformer un attribut url/id/resource en lien dans l'inspecteur](/fr/docs/Tools/Network_Monitor#Network_request_fields)
- [Infobulle de l'adresse IP dans le moniteur réseau](/fr/docs/Tools/Network_Monitor#Network_request_fields)

Autres: [Tous les bugs devtools corrigés depuis Firefox 39 et Firefox 40](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-05-11&query_format=advanced&chfield=resolution&chfieldfrom=2015-03-31&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12283503).

### CSS

- Règles de préfixe (`-moz-`) pour {{cssxref("text-decoration-color")}}, {{cssxref("text-decoration-line")}}, et {{cssxref("text-decoration-style")}} ont été supprimé ({{bug(1097922)}}).
- La propriété {{cssxref("text-align")}} supporte dorénavant la valeur `match-parent` bug(645642)}}).
- Dans le mode Quirks, {{cssxref("empty-cells")}} a pour valeur par défaut `show`, comme dans le mode standard ({{bug(1020400)}}).
- La propriété non standard {{cssxref("-moz-orient")}}, utilisée pour faire un rendu sur les éléments {{HTMLElement('meter')}} et {{HTMLElement('progress')}} a été adaptée pour les modes d'écriture verticales: la valeur `auto` a été supprimée et les valeurs `inline` et  `block` ajoutées, avec `inline` comme nouvelle valeur par défaut {{bug(1028716)}}).

### HTML

_pas de changement._

### JavaScript

- Unreachable code after {{jsxref("Statements/return", "return")}} statement (including unreachable expression after {{jsxref("Statements/return", "semicolon-less return statements", "#Automatic_semicolon_insertion", 1)}}) will now show a warning in the console ({{bug(1005110)}}, {{bug(1151931)}}).
- {{jsxref("Symbol.match")}} a été ajouté ({{bug(1054755)}}).
- Passing an object which has a property named {{jsxref("Symbol.match")}} with a {{Glossary("truthy")}} value to {{jsxref("String.prototype.startsWith")}}, {{jsxref("String.prototype.endsWith")}}, and {{jsxref("String.prototype.contains")}} now throws a {{jsxref("TypeError")}} ({{bug(1054755)}}).
- {{jsxref("RegExp")}} function returns pattern itself if called without {{jsxref("Operators/new", "new")}} and pattern object has a property named {{jsxref("Symbol.match")}} with a {{Glossary("truthy")}} value, and the pattern object's `constructor` property equals to  {{jsxref("RegExp")}} function. ({{bug(1147817)}}).
- Support for the non-standard JS1.7 destructuring for-in has been dropped ({{bug(1083498)}}).
- [Les initialiseurs d'expression non-standard ](/fr/docs/Web/JavaScript/Reference/Statements/for...in#Firefox-specific_notes)dans les boucles [for...in](/fr/docs/Web/JavaScript/Reference/Statements/for...in) sont dorénavant ignorés et seront indiqués par un avertissement dans la console. ({{bug(748550)}} et {{bug(1164741)}}).
- [`\u{xxxxxx}`](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#Unicode_code_point_escapes) Unicode code point escapes have been added ({{bug(320500)}}).
- {{jsxref("String.prototype.includes", "String.prototype.contains", "#String.prototype.contains")}} has been replaced with {{jsxref("String.prototype.includes")}}, `String.prototype.contains` is kept as an alias ({{bug(1102219)}}).
- If the {{jsxref("DataView")}} constructor is called as a function without the {{ jsxref("Operators/new", "new") }} operator, a {{jsxref("TypeError")}} is now thrown as per the ES6 specification.
- An issue regressed in Firefox 21, where proxyfied arrays without the `get` trap were not working properly, has been fixed. If the `get` trap in a {{jsxref("Proxy")}} was not defined, {{jsxref("Array.length")}} returned `0` and the `set` trap didn't get called. A workaround was to add the `get` trap even if was not necessary in your code. This issue has been fixed now ({{bug(895223)}}).
- {{jsxref("WeakMap.prototype")}} and {{jsxref("WeakSet.prototype")}} have been updated to be just ordinary objects, per ES6 specification ({{bug(1055473)}}).
- The {{jsxref("RegExp.prototype.source")}} property is now prototype accessor property rather than own data property of `RegExp` instances ({{bug(1120169)}}, {{bug(1150297)}}).

### Interfaces/APIs/DOM

#### Nouvelles APIs

- Implementation de [l'API Push ](/fr/docs/Web/API/Push_API)({{bug(1038811)}}).

#### Web Animations API

Amélioration de notre implémentation des animations Web expérimentales, principalement mostley to match latest spec changes:

- {{domxref("AnimationPlayer.currentTime")}} now can also be set ({{bug(1072037)}}).
- `Animatable.getAnimationPlayers()`, available on {{domxref("Element")}} has been renamed to {{domxref("Element.getAnimations()")}} ({{bug(1145246)}}).
- `Animation` and `AnimationEffect` have been merged into the newly created {{domxref("KeyframeEffectReadOnly")}} ({{bug(1153734)}}).
- `AnimationPlayer` has been renamed to {{domxref("Animation")}} ({{bug(1154615)}}).
- {{domxref("AnimationTimeline")}} is now an abstract class, with {{domxref("DocumentTimeline")}} its only implementation ({{bug(1152171)}}).

#### CSSOM

- The CSS Font Loading API is now enabled by default in Nightly and Developer Edition releases ({{bug(1088437)}}). It is still deactivated by default in Beta and Release browsers.
- The `CSSCharsetRule` interface has been removed and such objects are no longer available in CSSOM ({{bug(1148694)}}). This matches the spec (recently adapted) and Chrome behavior.

#### WebRTC

- WebRTC: the {{event("negotiationneeded")}} event is now also sent for initial negotiations, not only for re-negotiations ({{bug(1149838)}}).

#### DOM & HTML DOM

- When unable to parse the {{htmlattrxref("srcset", "image")}},  the {{domxref("HTMLImageElement.currentSrc")}} method doesn't return `null` anymore but `""`, as requested by the latest specification ({{bug(1139560)}}).
- Like for images, Firefox now throttle {{domxref("Window.requestAnimationFrame()")}} for non-visible {{HTMLElement("iframe")}} ({{bug(1145439)}}).
- {{domxref("Navigator.taintEnabled")}} is no longer available for Web workers ({{bug(1154878)}}).
- The read-only properties {{domxref("MouseEvent.offsetX")}} and {{domxref("MouseEvent.offsetY")}} have been implemented {{bug("69787")}}.

#### Web Audio API

Nouvelles extensions pour l'[API Web Audio](/fr/docs/Web/API/Web_Audio_API):

- The {{domxref("AudioContext.state")}} and {{domxref("AudioContext.onstatechange")}} properties as well as the methods {{domxref("AudioContext.suspend()")}}, {{domxref("AudioContext.resume()")}}, and {{domxref("AudioContext.close()")}} have been added ({{bug(1094764)}}).
- {{domxref("AudioBufferSourceNode")}} now implements the {{domxref("AudioBufferSourceNode.detune")}} [k-rate](/fr/docs/DOM/AudioParam#k-rate) attribute ({{bug(1153783)}}).

#### Web Workers

- Légère amélioration dans notre [API Service Worker ](/fr/docs/Web/API/ServiceWorker_API): la méthode {{domxref("ServiceWorkerRegistration.update()", "update()")}} a été changée de {{domxref("ServiceWorkerGlobalScope")}} vers {{domxref("ServiceWorkerRegistration")}} ({{bug(1131350)}}).
- {{domxref("ServiceWorkerRegistration")}} est maintenant disponible dans les Web workers ({{bug("1131327")}}).
- {{domxref("DataStore")}} est maintenant disponible dans les Web workers ({{bug(916196)}}).

#### IndexedDB

- {{domxref("IDBTransaction")}} sont maintenant temporaire par default. bug(1112702)}}). Cela privilegie les performances par rapport a la fiabilité et est en phase les autres navigateurs. Pour plus d'information, lire notre [durability definition](/fr/docs/Web/API/IndexedDB_API/Basic_Concepts_Behind_IndexedDB#durable).

#### Dev Tools

- La propriété {{domxref("Console.timeStamp")}} a été ajoutée ({{bug(922221)}}).

### MathML

_pas de changement._

### SVG

_pas de changement._

### Audio/Video

_pas de changement._

## Networking

_pas de changement._

## Security

- L'utilisation d'un asterisk (`*`) dans {{Glossary("CSP")}} n'inclus plus le schema `data:`, `blob:` or `:filesystem` lors de la comparaison des expressions sources. Ces schemas doivent dorénavant etre définis explicitement dans l'entete concernée afin de correspondre au CSP ({{bug(1086999)}}).

## Changes for add-on and Mozilla developers

### XUL

_pas de changement._

### JavaScript code modules

- Dict.jsm a été supprimé {{bug(1123309)}}. Veuillez utiliser {{jsxref("Map")}} en remplacement.

### XPCOM

_No change._

### Other

- Places Keywords API has been deprecated and will be removed soon ({{bug(1140395)}}).

## See also

- [Site Compatibility for Firefox 40](/fr/docs/Mozilla/Firefox/Releases/40/Site_Compatibility)

## Older versions

{{Firefox_for_developers('39')}}
