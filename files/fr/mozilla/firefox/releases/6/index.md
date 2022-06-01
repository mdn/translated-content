---
title: Firefox 6 pour les développeurs
slug: Mozilla/Firefox/Releases/6
tags:
  - Firefox
  - Firefox 6
translation_of: Mozilla/Firefox/Releases/6
original_slug: Mozilla/Firefox/Versions/6
---
1.  Notes de versions pour développeurs

    1.  [Notes de versions pour développeurs](/fr/docs/Mozilla/Firefox/Releases)

2.  Modules complémentaires

    1.  [WebExtensions](/fr/Add-ons/WebExtensions)
    2.  [Thèmes](/fr/Add-ons/Themes)

3.  Fonctionnement interne de Firefox

    1.  [Le projet Mozilla](/fr/docs/Mozilla/)
    2.  [Gecko](/fr/docs/Mozilla/Gecko)
    3.  [Mode « headless »](/fr/docs/Mozilla/Firefox/Headless_mode)
    4.  [Modules de code Javascript](/fr/docs/Mozilla/JavaScript_code_modules)
    5.  [JS-ctypes](/fr/docs/Mozilla/js-ctypes)
    6.  [Le projet MathML](/fr/docs/Mozilla/MathML_Project)
    7.  [MFBT](/fr/docs/Mozilla/MFBT)
    8.  [Les projets Mozilla](/fr/docs/Mozilla/Projects)
    9.  [Le système de préférences](/fr/docs/Mozilla/Preferences)
    10. [Connexions WebIDL](/fr/docs/Mozilla/WebIDL_bindings)
    11. [XPCOM](/fr/docs/Mozilla/Tech/XPCOM)
    12. [XUL](/fr/docs/Mozilla/Tech/XUL)

4.  Développer et contribuer

    1.  [Instructions de compilation](/fr/docs/Mozilla/Developer_guide/Build_Instructions)
    2.  [Configuration des options de compilation](/fr/docs/Mozilla/Developer_guide/Build_Instructions/Configuring_Build_Options)
    3.  [Fonctionnement de la compilation](/fr/docs/Mozilla/Developer_guide/Build_Instructions/How_Mozilla_s_build_system_works)
    4.  [Code source de Mozilla](/fr/docs/Mozilla/Developer_guide/Source_Code/Mercurial)
    5.  [Localisation](/fr/docs/Mozilla/Localization)
    6.  [Mercurial](/fr/docs/Mozilla/Mercurial)
    7.  [Assurance qualité](/fr/docs/Mozilla/QA)
    8.  [Utilisation de code Mozilla dans d'autres projets](/fr/docs/Mozilla/Using_Mozilla_code_in_other_projects)

Firefox 6, basé sur Gecko 6.0, est sorti le 16 août 2011. Cet article fournit des informations à propos des changements qui affectent les développeurs dans cette version.

## Changements pour les développeurs web

### HTML

- L'élément HTML5 [`<progress>`](/fr/docs/Web/HTML/Element/progress), qui vous permet de créer une barre de progression, est maintenant supporté.
- L'analyse syntaxique de l'élément HTML5 [`<track>`](/fr/docs/Web/HTML/Element/track), qui spécifie les pistes de texte pour les éléments multimédias, est désormais supporté. Cet élément devrait apparaître dans les DOM, si son comportement n'est pas encore implémenté.
- L'élément [`<iframe>`](/fr/docs/Web/HTML/Element/iframe) est désormais correctement coupé par son conteneur lorsque les coins du conteneur ont été arrondis à l'aide de la propriété [`border-radius`](/fr/docs/Web/CSS/border-radius).
- Les champs [`<input>`](/fr/docs/Web/HTML/Element/input) des éléments [`<form>`](/fr/docs/Web/HTML/Element/form) ne sont plus supportés par la propriété XUL [`maxwidth`](/fr/docs/XUL/Propriétés/maxwidth), cela n'a jamais été volontaire, et est contraire à la spécification HTML. Vous devriez plutôt utiliser l'attribut [`size`](/fr/docs/Web/HTML/Element/input#attr-size) pour définir la largeur maximum de champs de saisie.
- Les propriétés `fillStyle` et `strokeStyle` de [`CanvasRenderingContext2d`](/fr/docs/Web/API/CanvasRenderingContext2d) ([`<canvas>`](/fr/docs/Web/HTML/Element/canvas)) utilisées pour ignorer les déchets inclus après la définition d'une couleur valide, maintenant c'est traité comme une erreur. Par exemple, "rouge bleu" est une couleur utilisée pour être traitée comme du "rouge", alors qu'elle aurait dû être ignorée.
- La largeur et la hauteur des éléments [`<canvas>`](/fr/docs/Web/HTML/Element/canvas) peuvent être correctement mis à 0px ; avant, lorsque vous essayez de le faire, elles se fixaient à 300px.
- le support de l'attribut HTML [des données personnalisées](/fr/docs/HTML/Global_attributes#attr-data-*) (data-\*) a été ajouté. La propriété DOM [`element.dataset`](/fr/docs/Web/API/Element/dataset) permet d'y accéder.
- Quand un élément [`<textarea>`](/fr/docs/Web/HTML/Element/textarea) reçoit le focus, le point d'insertion de texte est désormais placé, par défaut, au début du texte plutôt qu'à la fin. Le comportement de Firefox est ainsi conforme avec les autres navigateurs.

### CSS

- [`-moz-text-decoration-color`](/fr/docs/Web/CSS/text-decoration-color)
  - : Cette nouvelle propriété vous permet de définir la couleur utilisée par les décorations du texte, comme le soulignement, le surlignement et le texte barré.
- [`-moz-text-decoration-line`](/fr/docs/Web/CSS/text-decoration-line)
  - : Cette nouvelle propriété vous permet de définir le type de décorations du texte ajoutée à un élément.
- [`-moz-text-decoration-style`](/fr/docs/Web/CSS/text-decoration-style)
  - : Cette nouvelle propriété vous permet de définir le style de décorations du texte, comme le soulignement, le surlignement et le texte barré. Les styles incluent les simples lignes, les lignes doubles, les lignes ondulées, les lignes pointillées, etc.
- [`-moz-hyphens`](/fr/docs/Web/CSS/hyphens)
  - : Cette nouvelle propriété vous permet de contrôler la façon dont la césure des mots lors de retours à la ligne est gérée.
- [`-moz-orient`](/fr/docs/Web/CSS/orient)
  - : Une nouvelle propriété (pour l'instant spécifique à Mozilla) qui vous permet de contrôler l'orientation verticale ou horizontale de certains éléments (en particulier [`<progress>`](/fr/docs/Web/HTML/Element/progress)).
- [`::-moz-progress-bar`](/fr/docs/Web/CSS/::-moz-progress-bar)
  - : Un pseudo-élément spécifique à Mozilla qui vous permet de définir le style de la zone d'un élément [`<progress>`](/fr/docs/Web/HTML/Element/progress) représentant la fraction d'une tâche.

#### Autres changements

- La propriété [`@-moz-document`](/fr/docs/Web/CSS/@-moz-document) a une nouvelle fonction `regexp()`, qui vous permet d'adapter l'URL du document à une [regular expression](/fr/Guide_JavaScript_1.5/Expressions_rationnelles).
- La propriété CSS [`azimuth`](/fr/docs/Web/CSS/azimuth) n'est plus supportée, comme nous avons enlevé le peu de code que nous avions pour le groupe média `aural`. Il n'a jamais été implémenté de manière significative, donc il était plus logique de supprimer cette implémentation crufty pour le moment, au lieu d'essayer de le rafistoler.
- Avant, la pseudo-classe [`:hover`](/fr/docs/Web/CSS/:hover) n'était pas appliquée aux sélecteurs de classe quand on était en mode quirks, par exemple, `.someclass:hover` ne fonctionne pas. Cette bizarrerie a été enlevée.
- La pseudo-classe [`:indeterminate`](/fr/docs/Web/CSS/:indeterminate) peut être appliquée à l'élément [`<progress>`](/fr/docs/Web/HTML/Element/progress). Cela n'est pas un standard, mais nous espérons que ce soit adopté par les autres navigateurs car c'est utile.
- La valeur `-moz-win-exclude-glass` a été ajoutée à la propriété CSS [`-moz-appearance`](/fr/docs/Web/CSS/-moz-appearance) afin d'exclure des zones opaques dans les effets d'Aero Glass sur les systèmes Windows.
- Le [bug 658949](https://bugzilla.mozilla.org/show_bug.cgi?id=658949) change la façon dont le symbole dièse (#) est traité dans les données URI qui peut briser les feuilles de style CSS qui contiennent un tel symbole.

### DOM

- [Utilisation de media queries à partir de code](/fr/docs/CSS/Using_media_queries_from_code)
  - : Vous pouvez désormais tester le résultat d'une chaîne media query en programmant la méthode [`window.matchMedia()`](/fr/docs/Web/API/Window/matchMedia) et l'interface [`MediaQueryList`](/fr/docs/Web/API/MediaQueryList).
- [Evènements tactile](/fr/docs/DOM/Touch_events)
  - : Firefox 6 ajout le support du standard W3C sur les évènements tactile, cela facilite l'interprétation d'une ou plusieurs touches à la fois sur les surfaces tactiles comme les écrans tactiles et pavés tactiles.
- [Evènements server-sent](/fr/docs/Server-sent_events)
  - : Les évènements server-sent permettent à une application Web de demander à un serveur pour envoyer des événements comme n'importe quel événement DOM localement créé.

<!---->

- `navigator.securityPolicy`, qui a depuis longtemps retourné une chaîne vide, a simplement été supprimé.
- [`BlobBuilder`](/fr/docs/Web/API/BlobBuilder) est maintenant implémenté, même si pour l'instant il est préfixé (vous devez utiliser `MozBlobBuilder`).
- [`document.height`](/fr/docs/Web/API/Document/height) et [`document.width`](/fr/docs/Web/API/Document/width) ont été supprimées. [bug 585877](https://bugzilla.mozilla.org/show_bug.cgi?id=585877)
- Les propriétés `entities` et `notations` de l'objet [`DocumentType`](/fr/docs/Web/API/DocumentType), qui n'ont jamais été implémentées et renvoyées toujours `null`, ont été retirées, car elles ont également été enlevées de la spécification.
- L'interface `DOMConfiguration` et la propriété `document.domConfig` qu'elle utilisait ont été supprimées, elles n'ont jamais été supportées et ont depuis été retirées de la spécification DOM.
- L'évènement `hashchange` comprend désormais [les champs `newURL` et `oldURL`](/fr/docs/DOM/window.onhashchange#The_hashchange_event).
- La méthode `abort()` de l'interface [`FileReader`](/fr/docs/Web/API/FileReader) retourne maintenant une exception si aucun fichier n'est en cours de lecture lorqu'elle est utilisée.
- La méthode [`window.postMessage()`](/fr/docs/Web/API/Window/postMessage) utilise maintenant [l'algorithme de clonage structuré](/fr/docs/DOM/The_structured_clone_algorithm) pour vous permettre de transmettre d'une fenêtre à une autre des objets JavaScript au lieu de chaînes.
- L'API [`window.history`](/fr/docs/Web/API/Window/history) utilise désormais [l'algorithme de clonage structuré](/fr/docs/DOM/The_structured_clone_algorithm) pour sérialiser des objets que vous passez avec les méthodes `pushState()` et `replaceState()`, ce qui vous permet d'utiliser des objets plus complexes (y compris ceux qui contiennent des références de graphes cycliques).
- Vous pouvez désormais [détecter lorsqu'une impression a été lancée et a été achevée](/fr/docs/Printing#Detecting_print_requests) grâce aux nouveaux évènements `beforeprint` et `afterprint`.
- La propriété `document.strictErrorChecking` a été supprimée, car elle n'a jamais été implémentée et a été retiré de la spécification DOM.
- La propriété standard [`event.defaultPrevented`](/fr/docs/Web/API/Event/defaultPrevented) est maintenant supportée, vous devriez utiliser à la place la méthode non-standard `getPreventDefault()` pour détecter si [`event.preventDefault()`](/fr/docs/Web/API/Event/preventDefault) a été appelée sur l'événement.
- La propriété [`window.top`](/fr/docs/Web/API/Window/top) est désormais en lecture seule.
- DOM views, which we never documented, have been removed. This was a bit of implementation detail that was unnecessarily complicating things, so we got rid of it. If you notice this change, you're probably doing something wrong.
- La fonction `EventTarget` de la méthode [`addEventListener()`](/fr/docs/XPCOM_Interface_Reference/nsIDOMEventTarget) est désormais facultative, car ça l'est dans WebKit (et aussi dans la dernière version de la spécification).
- La propriété `mozResponseArrayBuffer` de l'objet [`XMLHttpRequest`](/fr/docs/XMLHttpRequest) a été remplacé par les propriétés `responseType` et `response`.
- La propriété [`element.dataset`](/fr/docs/Web/API/Element/dataset) a été ajoutée à l'interface [`HTMLElement`](/fr/docs/DOM/HTMLElement) permettant d'accéder aux attributs globaux [`data-*` global attributes](/fr/docs/HTML/Global_attributes#attr-data-*) d'un élément.
- L'interface [`CustomEvent`](/fr/docs/Web/API/CustomEvent) a été implémentée. (voir [bug 427537](https://bugzilla.mozilla.org/show_bug.cgi?id=427537))
- Pour des raisons de sécurité, les URIs `data:` et `javascript:` n'héritent plus de l'environnment de sécurité de la page active lorsque l'utilisateur les saisit dans la barre d'adresse, mais un nouvel environnment de sécurité vide est créé. Par exemple, le script chargé en entrant l'URI `javascript:` dans la barre d'adresse n'a plus accès aux méthodes DOM et similaires. Ces URIs continueront à travailler comme avant lorsqu'elles sont utilisées par le script.

### JavaScript

- Avant, il était possible d'utiliser l'opérateur `new` sur plusieurs fonctions natives (eval, parseInt, Date.parse, etc) ce qui, conformément à la spécification, n'était pas autorisé. Désormais ce comportement n'est plus supporté. Cette façon d'utiliser l'opérateur `new` n'a jamais été officiellement supportée et était peu utilisée, donc il est peu probable que ce changement vous affecte.
- ECMAScript Harmony [WeakMaps](/fr/docs/JavaScript/Référence_JavaScript/Objets_globaux/WeakMap) a été ajouté en tant que prototype.

### SVG

- L'attribut [`pathLength`](/fr/docs/Web/SVG/Attributs/pathLength) est désormais supporté.
- Les modèles SVG, les dégradés et les filtres fonctionnent désormais correctement lorsqu'ils sont chargés à partir de [`data:` URLs](/en/data_URIs).

### MathML

- L'implémentation de [`<mstyle>`](/fr/docs/Web/MathML/Element/mstyle) a été corrigée.

### Accessibilité (ARIA)

- Un événement de changement d'état est à présent correctement envoyé lors d'un changement de la valeur de `aria-busy`.
- Un événement de changement d'attribut est à présent correctement envoyé lorsque survient `aria-sort`.

### Réseau

- [WebSockets](/fr/docs/WebSockets)
  - : Pour Firefox 6, WebSockets a été mis à jour à la version 07 du protocole. De plus, l'objet `WebSocket` a été renommé en `MozWebSocket` pour l'empêcher d'être utilisé de façon incorrecte pour détecter la disponibilité des WebSockets sans préfixe.

<!---->

- L'analyse de l'en-tête `Content-Disposition` a été fixée afin d'interpréter correctement les antislashs des caractères ASCII. Auparavant, il été remplacé par le caractère underscore ("\_").
- La valeur du champ du chemin de l'en-tête `Set-Cookie` est désormais correctement interprétée lors de l'utilisation de guillements, auparavant, ils étaient considérés comme faisant partie de la chaîne du chemin d'accès à la place d'être des délimiteurs. **Ce changement peut affecter la compatibilité avec certains sites web**, les auteurs doivent vérifier leur code.
- L'en-tête de la requête [`Upgrade`](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.42) est désormais supporté, vous pouvez demander la mise à niveau d'un canal vers un autre protocole HTTP en appelant [`nsIHttpChannelInternal.HTTPUpgrade()`](</fr/docs/XPCOM_Interface_Reference/nsIHttpChannelInternal#HTTPUpgrade()>).

### Autres changements

- Le support des microrésumés a été enlevé, ils n'ont jamais été très utilisés, n'étaient pas très détectable et continuer leur support été d'apporter des améliorations à Places (favoris et historique) à l'architecture difficile.
- WebGL supporte maintenant l'extension [`OES_texture_float`](http://www.khronos.org/registry/gles/extensions/OES/OES_texture_float.txt).
- Le nouvel outil [Ardoise](/fr/docs/Outils/Ardoise) offre un endroit pratique pour expérimenter du code JavaScript.
- La méthode `console.trace()` a été ajouté à [ConsoleAPI](/fr/docs/Tools/Web_Console) (voir [bug 585956](https://bugzilla.mozilla.org/show_bug.cgi?id=585956)).

## Changements pour les développeurs de Mozilla et de modules complémentaires

Pour des conseils utiles sur la mise à jour des extensions pour Firefox 6, voir [Updating add-ons for Firefox 6](/fr/docs/Firefox/Updating_add-ons_for_Firefox_6).

> **Note :** Firefox 6 requiert que les composants binaires soient recompilés, comme pour toutes les versions majeures de Firefox. Pour plus de détails, voir [Interfaces Binaires](/fr/docs/Developer_Guide/Interface_Compatibility#Binary_Interfaces).

### Modules de code JavaScript

#### FileUtils.jsm

- La méthode `openSafeFileOutputStream()` ouvre maintenant les fichiers avec [l'indicateur de comportement](/fr/docs/XPCOM_Interface_Reference/nsIFileOutputStream#Behavior_flag_constants) `DEFER_OPEN` au lieu d'essayer de les ouvrir immédiatement.

#### XPCOMUtils.jsm

- La nouvelle méthode [`importRelative()`](</fr/docs/JavaScript_code_modules/XPCOMUtils.jsm#importRelative()>) vous permet de charger un module de code JavaScript depuis un chemin relatif au chemin d'un autre module de code JavaScript. Cela rend plus facile la construction de modules qui dépendent les uns des autres.

### XPCOM

- [`nsCOMArray<T>`](/fr/docs/XPCOM_array_guide#nsCOMArray.3cT.3e) dispose désormais d'une méthode [`RemoveObjectsAt()`](/fr/docs/XPCOM_array_guide#Deleting_objects) pour enlever plusieurs objets à la fois à partir d'un tableau.

### Utilisation du DOM depuis le chrome

- [Utilisation de l'API DOM File dans du code chrome](/fr/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)
  - : Bien que vous avez toujours pu utiliser l'API DOM File à partir du code chrome, le constructeur [`File`](/fr/docs/Web/API/File) supporte désormais la spécification d'un chemin d'accès local lorsqu'il est utilisé depuis le chrome. De plus, vous pouvez également spécifier le fichier pour accéder à l'aide de l'API DOM File en utilisant un objet [`nsIFile`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFile).

### Changements dans les interfaces

- [`nsINavHistoryQueryOptions`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsINavHistoryQueryOptions) supporte désormais le tri par orde de frecency à l'aide des nouvelles constantes `SORT_BY_FRECENCY_ASCENDING` et `SORT_BY_FRECENCY_DESCENDING`.
- [`nsIFilePicker`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFilePicker) a un nouvel attribut [`nsIFilePicker.addToRecentDocs`](/fr/docs/XPCOM_Interface_Reference/nsIFilePicker#addToRecentDocs), qui vous permet d'indiquer que le fichier sélectionné doit être ajoutée à la liste "documents récents" de l'utilisateur si il y en a une. Cet attribut n'a aucun effet en mode navigation privée.
- Les méthodes de [`nsINavBookmarkObserver`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsINavBookmarkObserver) avec les paramètres ID d'un élément exigent désormais un GUID.
- [`nsIPrefBranch.clearUserPref()`](</fr/docs/XPCOM_Interface_Reference/nsIPrefBranch#clearUserPref()>) ne génère plus d'exception si la préférence spécifié n'existe pas ou n'a pas de valeur définie par l'utilisateur. Désormais, il ne fait rien.
- L'interface [`nsIMemoryReporter`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIMemoryReporter) prend désormais en charge l'indication du type de mémoire qui est décrite (mappée, heap, ou autre).
- L'attribut `stateData` de [`nsISHEntry`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISHEntry) renvoi désormais à [`nsIStructuredCloneContainer`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIStructuredCloneContainer).
- [`nsIURI`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIURI) a un nouvel attribut [`nsIURI.ref`](/fr/docs/XPCOM_Interface_Reference/nsIURI#ref), qui renvoie la partie de référence (la partie après le "#") de l'URI. Il y a également de nouvelles méthodes [`nsIURI.cloneIgnoringRef()`](</fr/docs/XPCOM_Interface_Reference/nsIURI#cloneIgnoringRef()>) qui clone [`nsIURI`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIURI) sans l'élément ref et [`nsIURI.equalsExceptRef()`](</fr/docs/XPCOM_Interface_Reference/nsIURI#equalsExceptRef()>) qui se compare à un autre [`nsIURI`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIURI) en ignorant l'élément ref.

#### Nouvelles interfaces

- [`mozIAsyncFavicons`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/mozIAsyncFavicons)
  - : Un nouveau service qui vous permet d'accéder au service favicon de façon asynchrone.
- [`nsIEventSource`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIEventSource)
  - : _Détails à venir._
- [`nsIGSettingsCollection`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIGSettingsCollection)
  - : _Détails à venir._
- [`nsIGSettingsService`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIGSettingsService)
  - : _Détails à venir._
- [`nsIHttpUpgradeListener`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIHttpUpgradeListener)
  - : L'interface de rappel pour le traitement des demandes de mise à niveau HTTP via la méthode [`nsIHttpChannelInternal.HTTPUpgrade()`](</fr/docs/XPCOM_Interface_Reference/nsIHttpChannelInternal#HTTPUpgrade()>).
- [`nsIStructuredCloneContainer`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIStructuredCloneContainer)
  - : Un conteneur pour les objets qui ont été sérialisé à l'aide de [l'algorithme de clonage structuré](/en/HTML/Structured_clones).
- [`nsITelemetry`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsITelemetry)
  - : Implémentation du support de la télémétrie permettant d'enregistrer des données de télémétrie pour être utilisé pour présenter des histogrammes à des fins de suivi des performances. Voir [bug 649502](https://bugzilla.mozilla.org/show_bug.cgi?id=649502) et [bug 585196](https://bugzilla.mozilla.org/show_bug.cgi?id=585196).
- [`nsITimedChannel`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsITimedChannel)
  - : Voir [bug 576006](https://bugzilla.mozilla.org/show_bug.cgi?id=576006).
- [`nsIWebSocketListener`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIWebSocketListener)
  - : Voir [bug 640003](https://bugzilla.mozilla.org/show_bug.cgi?id=640003).
- [`nsIWebSocketProtocol`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIWebSocketProtocol)
  - : Voir [bug 640003](https://bugzilla.mozilla.org/show_bug.cgi?id=640003).

#### Interfaces supprimées

Les interfaces suivantes ont été supprimées car elles n'étaient plus indispensables :

- `nsIDOMDocumentEvent` (voir [bug 655517](https://bugzilla.mozilla.org/show_bug.cgi?id=655517))
- `nsIDOMDocumentTraversal` (voir [bug 655514](https://bugzilla.mozilla.org/show_bug.cgi?id=655514))
- `nsIDOMDocumentRange` (voir [bug 655513](https://bugzilla.mozilla.org/show_bug.cgi?id=655513))
- `IWeaveCrypto` (voir [bug 651596](https://bugzilla.mozilla.org/show_bug.cgi?id=651596))
- `nsIDOM3DocumentEvent` (voir [bug 481863](https://bugzilla.mozilla.org/show_bug.cgi?id=481863))
- `nsIDOMAbstractView`
- `nsILiveTitleNotificationSubject`
- `nsIPlugin` (voir [bug 637253](https://bugzilla.mozilla.org/show_bug.cgi?id=637253))
- `nsIPluginInstance` (voir [bug 637253](https://bugzilla.mozilla.org/show_bug.cgi?id=637253))
- `nsIHTMLEditRules` (voir [bug 633750](https://bugzilla.mozilla.org/show_bug.cgi?id=633750))
- [`nsIXSLTProcessorObsolete`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIXSLTProcessorObsolete) (voir [bug 649534](https://bugzilla.mozilla.org/show_bug.cgi?id=649534))

### Autres changements

- [Utilisation des préférences à partir du code d'application](/fr/docs/Mozilla/Preferences/Using_preferences_from_application_code)
  - : Une nouvelle API statique est disponible pour accéder facilement aux préférences, ce n'est disponible que pour le code d'application et ne peut pas être utilisé par les modules complémentaires.

## Voir également

- [Firefox 5 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/5)
- [Firefox 4 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/4)
- [Firefox 3.6 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/3.6)
- [Firefox 3.5 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/3.5)
- [Firefox 3 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/3)
- [Firefox 2 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/2)
- [Firefox 1.5 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/1.5)
