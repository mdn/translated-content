---
title: Firefox 6 note de version pour les développeurs
short-title: Firefox 6
slug: Mozilla/Firefox/Releases/6
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Firefox 6, basé sur Gecko 6.0, est sorti le 16 août 2011. Cet article fournit des informations à propos des changements qui affectent les développeur·euse·s dans cette version.

## Changements pour les développeur·euse·s web

### HTML

- L'élément HTML5 {{HTMLElement("progress")}}, qui vous permet de créer une barre de progression, est maintenant supporté.
- L'analyse syntaxique de l'élément HTML5 {{HTMLElement("track")}}, qui définit les pistes de texte pour les éléments multimédias, est désormais supporté. Cet élément doit apparaître dans les DOM, si son comportement n'est pas encore implémenté.
- L'élément {{HTMLElement("iframe")}} est désormais correctement coupé par son conteneur lorsque les coins du conteneur ont été arrondis à l'aide de la propriété {{CSSxRef("border-radius")}}.
- Les champs {{HTMLElement("input")}} des éléments {{HTMLElement("form")}} ne sont plus supportés par la propriété XUL [`maxwidth` <sup>(angl.)</sup>](https://web.archive.org/web/20190117013205/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XUL/Property/maxWidth), cela n'a jamais été volontaire, et est contraire à la spécification HTML. Vous devez plutôt utiliser l'attribut [`size`](/fr/docs/Web/HTML/Reference/Elements/input#size) pour définir la largeur maximum de champs de saisie.
- Les propriétés `fillStyle` et `strokeStyle` de {{DOMxRef("CanvasRenderingContext2d")}} ({{HTMLElement("canvas")}}) utilisées pour ignorer les déchets inclus après la définition d'une couleur valide, maintenant c'est traité comme une erreur. Par exemple, «&nbsp;rouge bleu&nbsp;» est une couleur utilisée pour être traitée comme du «&nbsp;rouge&nbsp;», alors qu'elle aurait dû être ignorée.
- La largeur et la hauteur des éléments {{HTMLElement("canvas")}} peuvent être correctement mis à 0px&nbsp;; avant, lorsque vous essayez de le faire, elles se fixaient à 300px.
- La prise en charge de l'attribut HTML [des données personnalisées](/fr/docs/Web/HTML/Reference/Global_attributes/data-*) (`data-*`) a été ajoutée. La propriété DOM {{DOMxRef("HTMLElement/dataset", "dataset")}} permet d'y accéder.
- Quand un élément {{HTMLElement("textarea")}} reçoit le focus, le point d'insertion de texte est désormais placé, par défaut, au début du texte plutôt qu'à la fin. Le comportement de Firefox est ainsi conforme avec les autres navigateurs.

### CSS

- {{CSSxRef("text-decoration-color", "-moz-text-decoration-color")}}
  - : Cette nouvelle propriété vous permet de définir la couleur utilisée par les décorations du texte, comme le soulignement, le surlignement et le texte barré.
- {{CSSxRef("text-decoration-line", "-moz-text-decoration-line")}}
  - : Cette nouvelle propriété vous permet de définir le type de décorations du texte ajoutée à un élément.
- {{CSSxRef("text-decoration-style", "-moz-text-decoration-style")}}
  - : Cette nouvelle propriété vous permet de définir le style de décorations du texte, comme le soulignement, le surlignement et le texte barré. Les styles incluent les simples lignes, les lignes doubles, les lignes ondulées, les lignes pointillées, etc.
- {{CSSxRef("hyphens", "-moz-hyphens")}}
  - : Cette nouvelle propriété vous permet de contrôler la façon dont la césure des mots lors de retours à la ligne est gérée.
- {{CSSxRef("-moz-orient")}}
  - : Une nouvelle propriété (pour l'instant spécifique à Mozilla) qui vous permet de contrôler l'orientation verticale ou horizontale de certains éléments (en particulier {{HTMLElement("progress")}}).
- {{CSSxRef("::-moz-progress-bar")}}
  - : Un pseudo-élément spécifique à Mozilla qui vous permet de définir le style de la zone d'un élément {{HTMLElement("progress")}} représentant la fraction d'une tâche.

#### Autres changements

- La propriété `@-moz-document` a une nouvelle fonction `regexp()`, qui vous permet d'adapter l'URL du document à une [expression régulière](/fr/docs/Web/JavaScript/Guide/Regular_expressions).
- La propriété CSS `azimuth` n'est plus supportée, comme nous avons enlevé le peu de code que nous avions pour le groupe média `aural`. Il n'a jamais été implémenté de manière significative, donc il est plus logique de supprimer cette implémentation vieillissante pour le moment, au lieu d'essayer de le rafistoler.
- Avant, la pseudo-classe {{CSSxRef(":hover")}} n'était pas appliquée aux sélecteurs de classe quand on était en mode quirks, par exemple, `.une-classe:hover` ne fonctionne pas. Cette bizarrerie a été enlevée.
- La pseudo-classe {{CSSxRef(":indeterminate")}} peut être appliquée à l'élément {{HTMLElement("progress")}}. Cela n'est pas un standard, mais nous espérons que ce soit adopté par les autres navigateurs, car c'est utile.
- La valeur `-moz-win-exclude-glass` a été ajoutée à la propriété CSS `-moz-appearance` afin d'exclure des zones opaques dans les effets d'Aero Glass sur les systèmes Windows.
- Le [bogue Firefox 658949 <sup>(angl.)</sup>](https://bugzil.la/658949) change la façon dont le symbole dièse (#) est traité dans les données URI qui peut briser les feuilles de style CSS qui contiennent un tel symbole.

### DOM

- [Utilisation de media queries à partir de code](/fr/docs/Web/CSS/Guides/Media_queries/Testing)
  - : Vous pouvez désormais tester le résultat d'une chaîne de caractères media query en programmant la méthode {{DOMxRef("window.matchMedia()")}} et l'interface {{DOMxRef("MediaQueryList")}}.
- [Évènements tactiles](/fr/docs/Web/API/Touch_events)
  - : Firefox 6 ajout le support du standard W3C sur les évènements tactiles, cela facilite l'interprétation d'une ou plusieurs touches à la fois sur les surfaces tactiles comme les écrans tactiles et pavés tactiles.
- [Évènements server-sent](/fr/docs/Web/API/Server-sent_events)
  - : Les évènements server-sent permettent à une application Web de demander à un serveur pour envoyer des évènements comme n'importe quel évènement DOM localement créé.

<!---->

- `navigator.securityPolicy`, qui a depuis longtemps retourné une chaîne de caractères vide, a simplement été supprimé.
- `BlobBuilder` est maintenant implémenté, même si pour l'instant il est préfixé (vous devez utiliser `MozBlobBuilder`).
- `Document.height` et `Document.width` ont été supprimées. [bogue Firefox 585877 <sup>(angl.)</sup>](https://bugzil.la/585877)
- Les propriétés `entities` et `notations` de l'objet {{DOMxRef("DocumentType")}}, qui n'ont jamais été implémentées et retournent toujours `null`, ont été retirées, car elles ont également été enlevées de la spécification.
- L'interface `DOMConfiguration` et la propriété `document.domConfig` qu'elle utilisait ont été supprimées, elles n'ont jamais été supportées et ont depuis été retirées de la spécification DOM.
- L'évènement `hashchange` comprend désormais [les champs `newURL` et `oldURL`](/fr/docs/Web/API/Window/hashchange_event).
- La méthode `abort()` de l'interface {{DOMxRef("FileReader")}} retourne maintenant une exception si aucun fichier n'est en cours de lecture lorsqu'elle est utilisée.
- La méthode {{DOMxRef("window.postMessage()")}} utilise maintenant [l'algorithme de clonage structuré](/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) pour vous permettre de transmettre d'une fenêtre à une autre des objets JavaScript au lieu de chaînes de caractères.
- L'API {{DOMxRef("window.history")}} utilise désormais [l'algorithme de clonage structuré](/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm) pour sérialiser des objets que vous passez avec les méthodes `pushState()` et `replaceState()`, ce qui vous permet d'utiliser des objets plus complexes (y compris ceux qui contiennent des références de graphes cycliques).
- Vous pouvez désormais [détecter lorsqu'une impression a été lancée et a été achevée](/fr/docs/Web/CSS/Guides/Media_queries/Printing#détecter_les_requêtes_dimpression) grâce aux nouveaux évènements `beforeprint` et `afterprint`.
- La propriété `document.strictErrorChecking` a été supprimée, car elle n'a jamais été implémentée et a été retiré de la spécification DOM.
- La propriété standard {{DOMxRef("event.defaultPrevented")}} est maintenant supportée, vous devez utiliser à la place la méthode non-standard `getPreventDefault()` pour détecter si {{DOMxRef("event.preventDefault()")}} a été appelée sur l'évènement.
- La propriété {{DOMxRef("window.top")}} est désormais en lecture seule.
- Les vues DOM, que nous n'avons jamais documentées, ont été supprimées. Il s'agissait d'un détail d'implémentation qui compliquait inutilement les choses, nous l'avons donc supprimé. Si vous remarquez ce changement, c'est probablement que vous faites quelque chose de travers.
- La fonction `EventTarget` de la méthode [`addEventListener()`](/fr/docs/Web/API/EventTarget/addEventListener) est désormais facultative, car ça l'est dans WebKit (et aussi dans la dernière version de la spécification).
- La propriété `mozResponseArrayBuffer` de l'objet [`XMLHttpRequest`](/fr/docs/Web/API/XMLHttpRequest) a été remplacé par les propriétés `responseType` et `response`.
- La propriété {{DOMxRef("HTMLElement.dataset", "dataset")}} a été ajoutée à l'interface {{DOMxRef("HTMLElement")}} permettant d'accéder aux attributs globaux [`data-*` global attributes](/fr/docs/Web/HTML/Reference/Global_attributes/data-*) d'un élément.
- L'interface {{DOMxRef("CustomEvent")}} a été implémentée. (voir [bogue Firefox 427537 <sup>(angl.)</sup>](https://bugzil.la/427537))
- Pour des raisons de sécurité, les URIs `data:` et `javascript:` n'héritent plus de l'environnent de sécurité de la page active lorsque l'utilisateur·ice les saisit dans la barre d'adresse, mais un nouvel environment de sécurité vide est créé. Par exemple, le script chargé en entrant l'URI `javascript:` dans la barre d'adresse n'a plus accès aux méthodes DOM et similaires. Ces URIs continuent à travailler comme avant lorsqu'elles sont utilisées par le script.

### JavaScript

- Auparavant, il était possible d'utiliser l'opérateur `new` avec plusieurs fonctions intégrées (`eval()`, `parseInt()`, `Date.parse()`, …) alors que cela n'aurait pas dû être autorisé, selon la spécification. Ce comportement n'est désormais plus pris en charge. L'utilisation de l'opérateur `new` de cette manière n'a jamais été officiellement prise en charge et n'était pas très répandue&nbsp;; il est donc peu probable que ce changement vous concerne.
- ECMAScript 2015 {{JSxRef("WeakMap")}} a été ajouté en tant que prototype.

### SVG

- L'attribut {{SVGAttr("pathLength")}} est désormais supporté.
- Les modèles SVG, les dégradés et les filtres fonctionnent désormais correctement lorsqu'ils sont chargés à partir de [`data:` URLs](/fr/docs/Web/URI/Reference/Schemes/data).

### MathML

- L'implémentation de {{MathMLElement("mstyle")}} a été corrigée.

### Accessibilité (ARIA)

- Un évènement de changement d'état est à présent correctement envoyé lors d'un changement de la valeur de `aria-busy`.
- Un évènement de changement d'attribut est à présent correctement envoyé lorsque survient `aria-sort`.

### Réseau

- [WebSockets](/fr/docs/Web/API/WebSockets_API)
  - : Pour Firefox 6, WebSockets a été mis à jour à la version 07 du protocole. De plus, l'objet `WebSocket` a été renommé en `MozWebSocket` pour l'empêcher d'être utilisé de façon incorrecte pour détecter la disponibilité des WebSockets sans préfixe.

<!---->

- L'analyse de l'en-tête `Content-Disposition` a été fixée afin d'interpréter correctement les antislashs des caractères ASCII. Auparavant, il été remplacé par le caractère underscore («&nbsp;\_&nbsp;»).
- La valeur du champ du chemin de l'en-tête `Set-Cookie` est désormais correctement interprétée lors de l'utilisation de guillemets, auparavant, ils étaient considérés comme faisant partie de la chaîne de caractères du chemin d'accès à la place d'être des délimiteurs. **Ce changement peut affecter la compatibilité avec certains sites web**, les auteur·ice·s doivent vérifier leur code.
- L'en-tête de la requête [`Upgrade` <sup>(angl.)</sup>](https://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html#sec14.42) est désormais supporté, vous pouvez demander la mise à niveau d'un canal vers un autre protocole HTTP en appelant `nsIHttpChannelInternal.HTTPUpgrade()`.

### Autres changements

- Le support des micro-résumés a été enlevé, ils n'ont jamais été très utilisés, n'étaient pas très détectable et continuer leur support été d'apporter des améliorations à Places (favoris et historique) à l'architecture difficile.
- WebGL supporte maintenant l'extension [`OES_texture_float` <sup>(angl.)</sup>](https://registry.khronos.org/OpenGL/extensions/OES/OES_texture_float.txt).
- Le nouvel outil _Ardoise_ offre un endroit pratique pour expérimenter du code JavaScript.
- La méthode `console.trace()` a été ajoutée à [l'API Console](/fr/docs/Web/API/Console_API) (voir [le bogue Firefox 585956 <sup>(angl.)</sup>](https://bugzil.la/585956)).

## Changements pour les développeur·euse·s de Mozilla et de modules complémentaires

Pour des conseils utiles sur la mise à jour des extensions pour Firefox 6, voir [Mise à jour des modules complémentaires pour Firefox 6](/fr/docs/Mozilla/Firefox/Releases/6/Updating_add-ons).

> [!NOTE]
> Firefox 6 requiert que les composants binaires soient recompilés, comme pour toutes les versions majeures de Firefox. Pour plus de détails, voir [Interfaces Binaires <sup>(angl.)</sup>](https://web.archive.org/web/20210119071646/https://developer.mozilla.org/en-US/docs/Mozilla/Developer_guide/Interface_Compatibility#binary_interfaces).

### Modules de code JavaScript

#### FileUtils.jsm

- La méthode `openSafeFileOutputStream()` ouvre maintenant les fichiers avec [l'indicateur de comportement <sup>(angl.)</sup>](https://web.archive.org/web/20210506072901/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFileOutputStream#behavior_flag_constants) `DEFER_OPEN` au lieu d'essayer de les ouvrir immédiatement.

#### XPCOMUtils.jsm

- La nouvelle méthode `importRelative()` vous permet de charger un module de code JavaScript depuis un chemin relatif au chemin d'un autre module de code JavaScript. Cela rend plus facile la construction de modules qui dépendent les uns des autres.

### XPCOM

- [`nsCOMArray<T>` <sup>(angl.)</sup>](https://web.archive.org/web/20210413085248/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Guide/Arrays#nsCOMArray.3cT.3e) dispose désormais d'une méthode [`RemoveObjectsAt()` <sup>(angl.)</sup>](https://web.archive.org/web/20210413085248/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Guide/Arrays#deleting_objects) pour enlever plusieurs objets à la fois à partir d'un tableau.

### Utilisation du DOM depuis le chrome

- [Utilisation de l'API DOM File dans du code chrome <sup>(angl.)</sup>](https://web.archive.org/web/20210618235235/https://developer.mozilla.org/en-US/docs/Extensions/Using_the_DOM_File_API_in_chrome_code)
  - : Bien que vous avez toujours pu utiliser l'API DOM File à partir du code chrome, le constructeur [`File`](/fr/docs/Web/API/File) supporte désormais la spécification d'un chemin d'accès local lorsqu'il est utilisé depuis le chrome. De plus, vous pouvez également définir le fichier pour accéder à l'aide de l'API DOM File en utilisant un objet `nsIFile`.

### Changements dans les interfaces

- `nsINavHistoryQueryOptions` prend désormais en charge le tri par ordre de fréquence à l'aide des nouvelles constantes `SORT_BY_FRECENCY_ASCENDING` et `SORT_BY_FRECENCY_DESCENDING`.
- `nsIFilePicker` a un nouvel attribut `nsIFilePicker.addToRecentDocs`, qui vous permet d'indiquer que le fichier sélectionné doit être ajoutée à la liste «&nbsp;documents récents&nbsp;» de l'utilisateur·ice, s'il·elle y en a une. Cet attribut n'a aucun effet en mode navigation privée.
- Les méthodes de `nsINavBookmarkObserver` avec les paramètres ID d'un élément exigent désormais un GUID.
- `nsIPrefBranch.clearUserPref()` ne génère plus d'exception si la préférence définie n'existe pas ou n'a pas de valeur définie par l'utilisateur·ice. Désormais, elle ne fait rien.
- L'interface `nsIMemoryReporter` prend désormais en charge l'indication du type de mémoire qui est décrite (correspondance, pile, ou autre).
- L'attribut `stateData` de `nsISHEntry` retourne désormais `nsIStructuredCloneContainer`.
- `nsIURI` a un nouvel attribut `nsIURI.ref`, qui retourne la partie de référence (la partie après le «&nbsp;#&nbsp;») de l'URI. Il y a également de nouvelles méthodes `nsIURI.cloneIgnoringRef()` qui clone `nsIURI` sans l'élément ref et `nsIURI.equalsExceptRef()` qui se compare à un autre `nsIURI` en ignorant l'élément ref.

#### Nouvelles interfaces

- `mozIAsyncFavicons`
  - : Un nouveau service qui vous permet d'accéder au service favicon de façon asynchrone.
- `nsIEventSource`
  - : _Détails à venir._
- `nsIGSettingsCollection`
  - : _Détails à venir._
- `nsIGSettingsService`
  - : _Détails à venir._
- `nsIHttpUpgradeListener`
  - : L'interface de rappel pour le traitement des demandes de mise à niveau HTTP avec la méthode `nsIHttpChannelInternal.HTTPUpgrade()`.
- `nsIStructuredCloneContainer`
  - : Un conteneur pour les objets qui ont été sérialisé à l'aide de [l'algorithme de clonage structuré](/fr/docs/Web/API/Web_Workers_API/Structured_clone_algorithm).
- `nsITelemetry`
  - : Implémentation du support de la télémétrie permettant d'enregistrer des données de télémétrie pour être utilisé pour présenter des histogrammes à des fins de suivi des performances. Voir [bogue Firefox 649502 <sup>(angl.)</sup>](https://bugzil.la/649502) et [bogue Firefox 585196 <sup>(angl.)</sup>](https://bugzil.la/585196).
- `nsITimedChannel`
  - : Voir [bogue Firefox 576006 <sup>(angl.)</sup>](https://bugzil.la/576006).
- `nsIWebSocketListener`
  - : Voir [bogue Firefox 640003 <sup>(angl.)</sup>](https://bugzil.la/640003).
- `nsIWebSocketProtocol`
  - : Voir [bogue Firefox 640003 <sup>(angl.)</sup>](https://bugzil.la/640003).

#### Interfaces supprimées

Les interfaces suivantes ont été supprimées, car elles n'étaient plus indispensables&nbsp;:

- `nsIDOMDocumentEvent` (voir [bogue Firefox 655517 <sup>(angl.)</sup>](https://bugzil.la/655517))
- `nsIDOMDocumentTraversal` (voir [bogue Firefox 655514 <sup>(angl.)</sup>](https://bugzil.la/655514))
- `nsIDOMDocumentRange` (voir [bogue Firefox 655513 <sup>(angl.)</sup>](https://bugzil.la/655513))
- `IWeaveCrypto` (voir [bogue Firefox 651596 <sup>(angl.)</sup>](https://bugzil.la/651596))
- `nsIDOM3DocumentEvent` (voir [bogue Firefox 481863 <sup>(angl.)</sup>](https://bugzil.la/481863))
- `nsIDOMAbstractView`
- `nsILiveTitleNotificationSubject`
- `nsIPlugin` (voir [bogue Firefox 637253 <sup>(angl.)</sup>](https://bugzil.la/637253))
- `nsIPluginInstance` (voir [bogue Firefox 637253 <sup>(angl.)</sup>](https://bugzil.la/637253))
- `nsIHTMLEditRules` (voir [bogue Firefox 633750 <sup>(angl.)</sup>](https://bugzil.la/633750))
- `nsIXSLTProcessorObsolete` (voir [bogue Firefox 649534 <sup>(angl.)</sup>](https://bugzil.la/649534))

### Autres changements

- [Utilisation des préférences à partir du code d'application <sup>(angl.)</sup>](https://web.archive.org/web/20210419233418/https://developer.mozilla.org/en-US/docs/Mozilla/Preferences/Using_preferences_from_application_code)
  - : Une nouvelle API statique est disponible pour accéder facilement aux préférences, ce n'est disponible que pour le code d'application et ne peut pas être utilisé par les modules complémentaires.
