---
title: Firefox 40 note de version pour les développeurs
short-title: Firefox 40
slug: Mozilla/Firefox/Releases/40
l10n:
  sourceCommit: 1ddd95504b4507beeda0f08bd772eb167922b86a
---

[Pour tester les dernières fonctionnalités pour les développeur·euse·s de Firefox, installez Firefox Developer Edition <sup>(angl.)</sup>](https://www.firefox.com/en-US/channel/desktop/developer/)
Firefox 40 est sorti le 11 août 2015. Cet article répertorie les modifications clés qui sont utiles non seulement pour les développeur·euse·s Web, mais également pour les développeur·euse·s Firefox et Gecko ainsi que pour les développeur·euse·s d'add-on.

## Changements pour les développeur·euse·s Web

### Outils de développement

Points forts&nbsp;:

- [Améliorations de la vue Animations <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/work_with_animations/index.html#firefox-40)
- [Obtenez de l'aide sur la syntaxe des propriétés CSS depuis MDN <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#get-help-for-css-properties)
- [Modifier les filtres dans l'inspecteur de page <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/edit_css_filters/index.html)
- [La console Web affiche désormais les messages des workers <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#console-api-messages)
- [Filtrer les requêtes par URL dans le moniteur réseau <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#filtering-by-url)
- [De nombreuses nouvelles options de menu contextuel dans le moniteur réseau <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#context-menu)
- [Afficher quand les ressources réseau sont récupérées depuis le cache du navigateur <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-fields)
- [Filtrer les règles dans l'inspecteur de page <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#filtering-rules)

Plus de changements&nbsp;:

- [Les «&nbsp;Break&nbsp;» dans le débogueur&nbsp;; instructions dans les sources d'évaluation non nommées <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/debug_eval_sources/index.html)
- [Copier l'URL/Ouvrir dans un nouvel onglet dans le menu contextuel pour le volet de la liste des sources du débogueur <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/debugger/ui_tour/index.html#source-list-pane)
- [Support de console.dirxml dans la console Web <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#log-messages)
- [Éditeur de style&nbsp;: élément "Ouvrir le lien dans un nouvel onglet" ajouté à la liste des feuilles de style <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/style_editor/index.html#the-style-sheet-pane)
- [La recherche de sélecteurs dans l'inspecteur inclut désormais les résultats de classe/id même sans préfixe CSS <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#searching)
- [Info-bulles dans la vue du modèle de boîte indiquant quelle règle CSS a causé la valeur <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_the_box_model/index.html#the-box-model-view)
- [Changer le format de l'unité de couleur dans l'inspecteur en utilisant Shift+click <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/inspect_and_select_colors/index.html)
- [Implémenter l'élément de menu «&nbsp;Défiler dans la vue&nbsp;» pour l'inspecteur <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- [Lier les attributs url/id/resource dans l'inspecteur <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_html/index.html#element-popup-menu)
- [Info-bulle pour l'adresse IP dans le moniteur réseau <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#network-request-fields)

Tous les changements&nbsp;: [tous les bogues des outils de développement corrigés entre Firefox 39 et Firefox 40 <sup>(angl.)</sup>](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&classification=Client%20Software&chfieldto=2015-05-11&query_format=advanced&chfield=resolution&chfieldfrom=2015-03-31&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Performance%20Tools%20%28Profiler%2FTimeline%29&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&product=Firefox&list_id=12283503).

### CSS

- Les règles avec un préfixe (`-moz-`) pour {{CSSxRef("text-decoration-color")}}, {{CSSxRef("text-decoration-line")}} et {{CSSxRef("text-decoration-style")}} ont été supprimées ([bogue Firefox 1097922 <sup>(angl.)</sup>](https://bugzil.la/1097922)).
- La propriété {{CSSxRef("text-align")}} prend désormais en charge la valeur `match-parent` ([bogue Firefox 645642 <sup>(angl.)</sup>](https://bugzil.la/645642)).
- En mode Quirks, {{CSSxRef("empty-cells")}} est désormais par défaut à `show`, comme en mode standard ([bogue Firefox 1020400 <sup>(angl.)</sup>](https://bugzil.la/1020400)).
- La propriété non standard {{CSSxRef("-moz-orient")}}, utilisée pour mettre en forme les éléments {{HTMLElement('meter')}} et {{HTMLElement('progress')}}, a été adaptée pour les modes d'écriture verticale&nbsp;: la valeur `auto` a été supprimée et les valeurs `inline` et `block` ont été ajoutées, `inline` étant la nouvelle valeur par défaut ([bogue Firefox 1028716 <sup>(angl.)</sup>](https://bugzil.la/1028716)).
- La propriété {{CSSxRef("font-size-adjust")}} a été corrigée afin que `0` soit traité comme un multiplicateur (ce qui entraîne une hauteur de police de `0`, donc la cache) au lieu de la valeur `none` (ce qui entraîne aucune ajustement, ou une valeur de `1.0`) ([bogue Firefox 1144885 <sup>(angl.)</sup>](https://bugzil.la/1144885)).
- Correction du problème où `text-overflow` ne fonctionnait pas en mode d'écriture verticale ([bogue Firefox 1117227 <sup>(angl.)</sup>](https://bugzil.la/1117227)).

### HTML

_Pas de changement._

### JavaScript

- Le code inatteignable après une instruction {{JSxRef("Statements/return", "return")}} (comprenant les expressions inatteignables après les instructions {{JSxRef("Statements/return#ajout_automatique_de_point-virgule", "return sans point-virgule", "", 1)}}) affiche désormais un avertissement dans la console ([bogue Firefox 1005110 <sup>(angl.)</sup>](https://bugzil.la/1005110), [bogue Firefox 1151931 <sup>(angl.)</sup>](https://bugzil.la/1151931)).
- {{JSxRef("Symbol.match")}} a été ajouté ([bogue Firefox 1054755 <sup>(angl.)</sup>](https://bugzil.la/1054755)).
- Passer un objet qui a une propriété nommée {{JSxRef("Symbol.match")}} avec une valeur {{Glossary("truthy", "équivalente à vrai")}} à {{JSxRef("String.prototype.startsWith")}}, {{JSxRef("String.prototype.endsWith")}} et `String.prototype.contains` lance désormais une {{JSxRef("TypeError")}} ([bogue Firefox 1054755 <sup>(angl.)</sup>](https://bugzil.la/1054755)).
- La fonction {{JSxRef("RegExp")}} retourne le motif lui-même si elle est appelée sans {{JSxRef("new")}} et que l'objet motif a une propriété nommée {{JSxRef("Symbol.match")}} avec une valeur {{Glossary("truthy", "équivalente à vrai")}}, et que la propriété `constructor` de l'objet motif est égale à la fonction {{JSxRef("RegExp")}}. ([bogue Firefox 1147817 <sup>(angl.)</sup>](https://bugzil.la/1147817)).
- La prise en charge de la déstructuration non standard JS1.7 pour-in a été supprimée ([bogue Firefox 1083498 <sup>(angl.)</sup>](https://bugzil.la/1083498)).
- Les [expressions d'initialisation non standard](/fr/docs/Web/JavaScript/Reference/Errors/Invalid_for-in_initializer) dans les boucles [`for...in`](/fr/docs/Web/JavaScript/Reference/Statements/for...in) sont désormais ignorées et affichent un avertissement dans la console. ([bogue Firefox 748550 <sup>(angl.)</sup>](https://bugzil.la/748550) et [bogue Firefox 1164741 <sup>(angl.)</sup>](https://bugzil.la/1164741)).
- Les échappements de points de code Unicode [`\u{xxxxxx}`](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#échappement_de_points_de_code_unicode) ont été ajoutés ([bogue Firefox 320500 <sup>(angl.)</sup>](https://bugzil.la/320500)).
- `String.prototype.contains` a été remplacé par {{JSxRef("String.prototype.includes")}}, `String.prototype.contains` étant conservé comme alias ([bogue Firefox 1102219 <sup>(angl.)</sup>](https://bugzil.la/1102219)).
- Si le constructeur {{JSxRef("DataView")}} est appelé comme une fonction sans l'opérateur {{JSxRef("Operators/new", "new")}}, une {{JSxRef("TypeError")}} est désormais levée conformément à la spécification ES2015.
- Un problème régressé dans Firefox 21, où les tableaux mandataires sans le piège `get` ne fonctionnaient pas correctement, a été corrigé. Si le piège `get` dans un {{JSxRef("Proxy")}} n'était pas défini, {{JSxRef("Array.length")}} retournait `0` et le piège `set` n'était pas appelé. Une solution consistait à ajouter le piège `get` même s'il n'était pas nécessaire dans votre code. Ce problème est désormais corrigé ([bogue Firefox 895223 <sup>(angl.)</sup>](https://bugzil.la/895223)).
- `WeakMap.prototype` et `WeakSet.prototype` ont été mis à jour pour être de simples objets ordinaires, conformément à la spécification ES2015 ([bogue Firefox 1055473 <sup>(angl.)</sup>](https://bugzil.la/1055473)).

### Interfaces/APIs/DOM

#### Nouvelles API

- [L'API Push](/fr/docs/Web/API/Push_API) a été mise en œuvre de manière expérimentale ([bogue Firefox 1038811 <sup>(angl.)</sup>](https://bugzil.la/1038811)). Contrôlée par la préférence `services.push.enabled`, elle est désactivée par défaut.

#### API Web Animations

Amélioration de notre implémentation expérimentale des animations Web, principalement pour correspondre aux dernières modifications de la spécification&nbsp;:

- {{DOMxRef("Animation/currentTime", "AnimationPlayer.currentTime")}} peut désormais également être défini ([bogue Firefox 1072037 <sup>(angl.)</sup>](https://bugzil.la/1072037)).
- `Animatable.getAnimationPlayers()`, disponible sur {{DOMxRef("Element")}}, a été renommé en {{DOMxRef("Element.getAnimations()")}} ([bogue Firefox 1145246 <sup>(angl.)</sup>](https://bugzil.la/1145246)).
- `Animation` et `AnimationEffect` ont été fusionnés dans le nouveau `KeyframeEffectReadOnly` ([bogue Firefox 1153734 <sup>(angl.)</sup>](https://bugzil.la/1153734)).
- `AnimationPlayer` a été renommé en {{DOMxRef("Animation")}} ([bogue Firefox 1154615 <sup>(angl.)</sup>](https://bugzil.la/1154615)).
- {{DOMxRef("AnimationTimeline")}} est désormais une classe abstraite, avec {{DOMxRef("DocumentTimeline")}} comme seule implémentation ([bogue Firefox 1152171 <sup>(angl.)</sup>](https://bugzil.la/1152171)).

#### CSSOM

- L'API CSS Font Loading est désormais activée par défaut dans les versions Nightly et Developer Edition ([bogue Firefox 1088437 <sup>(angl.)</sup>](https://bugzil.la/1088437)). Elle reste désactivée par défaut dans les navigateurs Beta et Release.
- L'interface `CSSCharsetRule` a été supprimée et de tels objets ne sont plus disponibles dans CSSOM ([bogue Firefox 1148694 <sup>(angl.)</sup>](https://bugzil.la/1148694)). Cela correspond à la spécification (récemment adaptée) et au comportement de Chrome.

#### WebRTC

- WebRT&nbsp;: l'évènement {{DOMxRef("RTCPeerConnection.negotiationneeded_event", "negotiationneeded")}} est désormais également envoyé pour les négociations initiales, et pas seulement pour les renégociations ([bogue Firefox 1149838 <sup>(angl.)</sup>](https://bugzil.la/1149838)).

#### DOM et HTML DOM

- Lorsque le [`srcset`](/fr/docs/Web/HTML/Reference/Elements/img#srcset) ne peut pas être analysé, la méthode {{DOMxRef("HTMLImageElement.currentSrc")}} ne retourne plus `null` mais `""`, comme demandé par la dernière spécification ([bogue Firefox 1139560 <sup>(angl.)</sup>](https://bugzil.la/1139560)).
- Comme pour les images, Firefox limite désormais {{DOMxRef("Window.requestAnimationFrame()")}} pour les {{HTMLElement("iframe")}} non visibles ([bogue Firefox 1145439 <sup>(angl.)</sup>](https://bugzil.la/1145439)).
- {{DOMxRef("Navigator.taintEnabled")}} n'est plus disponible pour les Web workers ([bogue Firefox 1154878 <sup>(angl.)</sup>](https://bugzil.la/1154878)).

#### API Web Audio

Nouvelles extensions à [l'API Web Audio](/fr/docs/Web/API/Web_Audio_API)&nbsp;:

- Les propriétés {{DOMxRef("BaseAudioContext/state", "AudioContext.state")}} et {{DOMxRef("BaseAudioContext/statechange_event", "AudioContext.onstatechange")}}, ainsi que les méthodes {{DOMxRef("AudioContext.suspend()")}}, {{DOMxRef("AudioContext.resume()")}} et {{DOMxRef("AudioContext.close()")}} ont été ajoutées ([bogue Firefox 1094764 <sup>(angl.)</sup>](https://bugzil.la/1094764)).
- {{DOMxRef("AudioBufferSourceNode")}} implémente désormais l'attribut {{DOMxRef("AudioBufferSourceNode.detune")}} [k-rate](/fr/docs/Web/API/AudioParam#k-rate) ([bogue Firefox 1153783 <sup>(angl.)</sup>](https://bugzil.la/1153783)).

#### Web Workers

- Légère amélioration de notre [API Service Worker](/fr/docs/Web/API/Service_Worker_API)&nbsp;: la méthode {{DOMxRef("ServiceWorkerRegistration.update()", "update()")}} a été déplacée de {{DOMxRef("ServiceWorkerGlobalScope")}} vers {{DOMxRef("ServiceWorkerRegistration")}} ([bogue Firefox 1131350 <sup>(angl.)</sup>](https://bugzil.la/1131350)).
- {{DOMxRef("ServiceWorkerRegistration")}} est désormais disponible dans les Web workers ([bogue Firefox 1131327 <sup>(angl.)</sup>](https://bugzil.la/1131327)).
- `DataStore` est désormais disponible dans les Web workers ([bogue Firefox 916196 <sup>(angl.)</sup>](https://bugzil.la/916196)).

#### IndexedDB

- {{DOMxRef("IDBTransaction")}} sont désormais non durables par défaut ([bogue Firefox 1112702 <sup>(angl.)</sup>](https://bugzil.la/1112702)). Cela favorise les performances par rapport à la fiabilité et correspond à ce que font les autres navigateurs. Pour plus d'informations, consultez notre [définition de la durabilité](/fr/docs/Web/API/IndexedDB_API/Basic_Terminology#durable).

#### Outils de développement

- La propriété {{DOMxRef("console/timeStamp_static", "console.timeStamp()")}} a été ajoutée ([bogue Firefox 922221 <sup>(angl.)</sup>](https://bugzil.la/922221)).

### MathML

_Pas de changement._

### SVG

_Pas de changement._

### Audio/Video

_Pas de changement._

## Réseau

_Pas de changement._

## Sécurité

- L'utilisation d'un astérisque (`*`) dans une {{Glossary("CSP")}} n'inclut plus les schémas `data:`, `blob:` ou `:filesystem` lors de la correspondance des expressions source. Ces schémas doivent désormais être définis explicitement dans l'en-tête correspondant pour correspondre à la CSP ([bogue Firefox 1086999 <sup>(angl.)</sup>](https://bugzil.la/1086999)).

## Changements pour les développeur·euse·s de Mozilla et d'extensions

### XUL

- Il n'est plus possible de créer des fenêtres de niveau supérieur transparentes ([bogue Firefox 1162649 <sup>(angl.)</sup>](https://bugzil.la/1162649)).

### Modules de code JavaScript

- Dict.jsm a été supprimé ([bogue Firefox 1123309 <sup>(angl.)</sup>](https://bugzil.la/1123309)). Utilisez {{JSxRef("Map")}} à la place.

### XPCOM

- L'attribut `nsIClassInfo.implementationLanguage` a été supprimé, ainsi que la fonction `nsClassInfo::GetImplementationLanguage()`.
- Les interfaces XPCOM suivantes ont été supprimées&nbsp;; vous devez utiliser les interfaces HTML standard à la place&nbsp;:
  - `nsIDOMHTMLBRElement`
  - `nsIDOMDivElement`
  - `nsIDOMHTMLHeadingElement`
  - `nsIDOMHTMLTableCaptionElement`
  - `nsIDOMHTMLTableElement`
  - `nsIDOMHTMLTitleElement`

### Autres

- L'API Places Keywords a été dépréciée et sera bientôt supprimée ([bogue Firefox 1140395 <sup>(angl.)</sup>](https://bugzil.la/1140395)).
- Le système de test automatisé prend désormais en charge l'ignorance des fonctions de test individuelles. Voir [exécution de tests conditionnels <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/testing/xpcshell/index.html#conditionally-running-a-test) dans les tests XPCShell.
