---
title: Firefox 8 pour les développeurs
slug: Mozilla/Firefox/Releases/8
---

1. Notes de versions pour développeurs
   1. [Notes de versions pour développeurs](/fr/docs/Mozilla/Firefox/Releases)

2. Modules complémentaires
   1. [WebExtensions](/fr/docs/Mozilla/Add-ons/WebExtensions)
   2. [Thèmes](/fr/docs/Mozilla/Add-ons/Themes)

3. Fonctionnement interne de Firefox
   1. [Le projet Mozilla](/fr/docs/Mozilla)
   2. [Gecko](/fr/docs/Mozilla/Gecko)
   3. [Mode « headless »](/fr/docs/Mozilla/Firefox/Headless_mode)
   4. [Modules de code Javascript](/fr/docs/Mozilla/JavaScript_code_modules)
   5. [JS-ctypes](/fr/docs/Mozilla/js-ctypes)
   6. [Le projet MathML](/fr/docs/Mozilla/MathML_Project)
   7. [MFBT](/fr/docs/Mozilla/MFBT)
   8. [Les projets Mozilla](/fr/docs/Mozilla/Projects)
   9. [Le système de préférences](/fr/docs/Mozilla/Preferences)
   10. [Connexions WebIDL](/fr/docs/Mozilla/WebIDL_bindings)
   11. [XPCOM](/fr/docs/Mozilla/Tech/XPCOM)
   12. [XUL](/fr/docs/Mozilla/Tech/XUL)

4. Développer et contribuer
   1. [Instructions de compilation](/fr/docs/Mozilla/Developer_guide/Build_Instructions)
   2. [Configuration des options de compilation](https://firefox-source-docs.mozilla.org/setup/configuring_build_options.html)
   3. [Fonctionnement de la compilation](/fr/docs/Mozilla/Developer_guide/Build_Instructions/How_Mozilla_s_build_system_works)
   4. [Code source de Mozilla](/fr/docs/Mozilla/Developer_guide/Source_Code/Mercurial)
   5. [Localisation](/fr/docs/Mozilla/Localization)
   6. [Mercurial](/fr/docs/Mozilla/Mercurial)
   7. [Assurance qualité](/fr/docs/Mozilla/QA)
   8. [Utilisation de code Mozilla dans d'autres projets](/fr/docs/Mozilla/Using_Mozilla_code_in_other_projects)

Firefox 8, basé sur Gecko 8.0, est sorti le 8 novembre 2011. Cet article fournit des informations à la fois pour les developpeurs Web et pour les développeurs d'extensions et de projets liés à Mozilla pour aider à tirer pleinement parti des fonctionnalités de cette version.

## Changements pour les développeurs Web

### HTML

- La propriété `crossOrigin` a été ajouté à [`HTMLImageElement`](/fr/docs/Web/API/HTMLImageElement) et l'attribut [`crossorigin`](/fr/docs/Web/HTML/Reference/Elements/img#crossorigin) a été ajouté à l'élément [`<img>`](/fr/docs/Web/HTML/Reference/Elements/img) (voir [bug 664299](https://bugzilla.mozilla.org/show_bug.cgi?id=664299)).
- La méthode [`HTMLSelectElement.add()`](</fr/docs/Web/API/HTMLSelectElement#add()>) supporte désormais supporte désormais soit un élément ou soit l'index d'un élément auquel un nouvel élément doit être inséré avant. Auparavant, seulement un élément était supporté (voir [bug 666200](https://bugzilla.mozilla.org/show_bug.cgi?id=666200)).
- Le constructeur `HTMLIsIndexElement` a été retiré. Aucun éléments n'a implémenté cette interface depuis Firefox 4.
- la fonctionnalité HTML5 "menu contextuel" (attribut `contextmenu`), qui vous permet d'ajouter des éléments personnalisés particuliers au menu contextuel d'origine, est désormais supportée (l'implémentation est encore expérimentale en attendant des changements dans la spécification (voir [bug 617528](https://bugzilla.mozilla.org/show_bug.cgi?id=617528 'FIXED: implement the HTML5 "context menu" feature (contextmenu attribute)')).
- Le support de l'attribut [`accesskeylabel`](/fr/docs/Web/HTML/Reference/Global_attributes#accesskey) a été ajouté à tous les éléments.
- les éléments [`<input>`](/fr/docs/Web/HTML/Reference/Elements/input) et [`<textarea>`](/fr/docs/Web/HTML/Reference/Elements/textarea) supportent désormais l'attribut `selectionDirection`, et leurs méthodes `setSelectionRange()` ont été mises à jour pour supporter éventuellement la spécification d'une direction.
- La plupart des éléments peuvent désormais obtenir une bague de focalisation établie autour d'eux s'ils ont été faits pouvant recevoir le focus via l'attribut `tabindex` et que l'utilisateur se concentre ensuite sur l'élément.
- Dans un ensemble d'éléments [`<label>`](/fr/docs/Web/HTML/Reference/Elements/label) imbriqués, cliquer sur les événements ne déclencheront plus plusieurs éléments, qui, avant, provoquaient un blocage de Firefox (voir [bug 646157](https://bugzilla.mozilla.org/show_bug.cgi?id=646157)).

### DOM

- La méthode [`insertAdjacentHTML`](/fr/docs/Web/API/Element/insertAdjacentHTML) a été implémentée.
- [`BlobBuilder`](/fr/docs/Web/API/Blob) dispose désormais d'une méthode `getFile()` qui renvoie le contenu du blob dans un fichier.
- L'interface [`FileReaderSync`](/fr/docs/Web/API/FileReaderSync) (partie de FileAPI) a été implementée.
- La gestion des évènements par les [`<label>`](/fr/docs/Web/HTML/Reference/Elements/label) imbriqués a été fixée.
- Vous pouvez maintenant utiliser [`window.postMessage()`](/fr/docs/Web/API/Window/postMessage) pour passer les objets [`File`](/fr/docs/Web/API/File) et [`FileList`](/fr/docs/Web/API/FileList) entre les fenêtres.
- Lors de l'édition de zones [`element.contenteditable`](/fr/docs/Web/API/Element/contenteditable) la sortie d'une position en appuyant sur retour, ou à la sortie d'une liste en mode édition en appuyant sur retour à deux reprises, revient maintenant au mode d'entrée au paragraphe (c'est-à-dire les paragraphes à l'intérieur des blocs [`<p>`](/fr/docs/Web/HTML/Reference/Elements/p)) au lieu de lignes de séparation par les éléments [`<br>`](/fr/docs/Web/HTML/Reference/Elements/br).
- Correction d'un bug empêchant la justification de la prise d'effet correcte lorsqu'elle est appliquée à la première ligne dans une zone [`element.contenteditable`](/fr/docs/Web/API/Element/contenteditable).
- Correction d'un bug qui faisait que en appuyant sur Suppr ou Retour arrière au début d'une zone [`element.contenteditable`](/fr/docs/Web/API/Element/contenteditable) affectait le bloc `contenteditable` précédent s'il était présent.
- [`document.getSelection()`](/fr/docs/Web/API/Document/getSelection) renvoie désormais l'objet `Selection` identique à [`window.getSelection()`](/fr/docs/Web/API/Window/getSelection), à la place de _stringifying_.
- La propriété HTML5 `selectionDirection` permet de définir la direction de la sélection dans un texte éditable.
- [`HTMLMediaElement`](/fr/docs/Web/API/HTMLMediaElement) a maintenant une propriété `seekable` qui retourne l'objet [`TimeRanges`](/fr/docs/Web/API/TimeRanges).
- L'attribut `.preload` de [`HTMLMediaElement`](/fr/docs/Web/API/HTMLMediaElement) se reflète désormais comme une _valeur énumérée_.
- Les [propriétés `crossOrigin`](/fr/docs/Web/HTML/Reference/Attributes/crossorigin) sont par défaut defaults to "Anonyme" quand une valeur invalide est utilisée.
- [`window.navigator.cookieEnabled`](/fr/docs/Web/API/Window/navigator/cookieEnabled) renvoie désormais correctement l'information quand le paramètre de cookie par défaut est écrasé sur la base de chaque site.

### JavaScript

- [`RegExp.exec()`](/fr/docs/JavaScript/Référence_JavaScript/Objets_globaux/RegExp/exec) et [`RegExp.test()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test) appelés sans arguments correspondent maintenant à la chaîne "undefined".
- [`String.search()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/search) et [`String.match()`](/fr/docs/JavaScript/Référence_JavaScript/Objets_globaux/String/Match) appelés sans arguments ou `undefined` correspondent désormais à une chaîne vide et correspondent donc à chaque chaîne.
- Le support des listes de surveillance a été implémenté avec les nouvelles mtéhodes (non standards) [`watch()`](/fr/docs/JavaScript/Référence_JavaScript/Objets_globaux/Object/watch) et [`unwatch()`](/fr/docs/JavaScript/Référence_JavaScript/Objets_globaux/Object/unwatch).

### CSS

- [`resolution`](/fr/docs/Web/CSS/Reference/Values/resolution) accepte désormais [`<number>`](/fr/docs/Web/CSS/Reference/Values/number), pas seulement des valeurs [`<integer>`](/fr/docs/Web/CSS/Reference/Values/integer) comme avec la spécification.
- Les règles de césure ont été ajoutées pour de nombreuses nouvelles langues lors de l'utilisation de [`hyphens`](/fr/docs/Web/CSS/Reference/Properties/hyphens).
- Le traitement de [`background-size`](/fr/docs/Web/CSS/Reference/Properties/background-size) a été revu pour mieux correspondre à la spécification.
- Dans le passé, [`text-decoration`](/fr/docs/Web/CSS/Reference/Properties/text-decoration) en mode quirks avait l'épaisseur de ligne et la position ajustée sur le texte descendant pour correspondre à la descendance. Désormais le mode standard et le mode quirks ont un rendu plus proche.
- Le positionnement horizontal des éléments est davantage conforme à la spécification dans beaucoup de cas. La documentation est à venir, mais pour l'instant, pour plus de détails voir le commentaire 23 du [bug 682780](https://bugzilla.mozilla.org/show_bug.cgi?id=682780).
- [Les images SVG sont désormais correctement mise à l'échelle](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Scaling_SVG_backgrounds) lorsqu'elles sont utilisées comme images de fond.

### Réseau

- Les doubles guillemets ne sont plus acceptés en tant que délimiteur pour l'encodage [RFC 2231](https://tools.ietf.org/html/rfc2231) ou [RFC 5987](https://tools.ietf.org/html/rfc5987), conformément à ces RFCs.
- Le parseur MIME du champ d'en-tête (`Content-Disposition`) exige désormais "=" dans les paramètres.
- Les scripts ne sont plus téléchargés lorsque JavaScript est désactivé.
- SSL 2.0 n'est plus supporté.

### WebSockets

- La méthode [`send()`](</fr/docs/Web/API/WebSocket#send()>) de l'objet [`WebSocket`](/fr/docs/Web/API/WebSocket) ne renvoie plus à tort une valeur booléenne.
- La méthode [`close()`](</fr/docs/Web/API/WebSocket#close()>) de l'objet [`WebSocket`](/fr/docs/Web/API/WebSocket) correspond désormais à la version actuelle du standard, et les événements proches utilisent à présent correctement l'interface [`CloseEvent`](/fr/docs/Web/API/CloseEvent).
- L'attribut `extensions` de l'objet [`WebSocket`](/fr/docs/Web/API/WebSocket) est à présent supporté.
- Le constructeur WebSocket supporte désormais un ensemble de protocoles ainsi que la chaîne d'un seul protocole.
- Le contenu mixte n'est pas autorisé avec WebSockets, vous ne pouvez plus établir une connexion vers un serveur WebSocket non sécurisé à partir d'un contenu sécurisé.
- Les erreurs de connexion avec WebSockets déclenchent à présent le gestionnaire `onerror`.
- L'API [WebSocket](/fr/docs/Web/API/WebSockets_API) a été mise à jour suivant la dernière version de la spécification (voir [bug 674890](https://bugzilla.mozilla.org/show_bug.cgi?id=674890), [bug 674527](https://bugzilla.mozilla.org/show_bug.cgi?id=674527) et [bug 674716](https://bugzilla.mozilla.org/show_bug.cgi?id=674716)).
- L'extension deflate-stream pour WebSockets a été désactivée, elle est obsolète et a cassée la compatibilité avec quelques sites.

### WebGL

- [Les textures Cross-domain](/fr/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#Cross-domain_textures) sont à présent autorisées avec l'accord de CORS.
- Le processus de rendu Cross avec Direct2D/Direct3D 10.

### MathML

- le support de l'attribut `displaystyle` sur l'élément de premier niveau [`<math>`](/fr/docs/Web/MathML/Reference/Element/math) a été ajouté.
- L'interprétation de numéros de lignes négatifs pour l'attribut `align` de [`<mtable>`](/fr/docs/Web/MathML/Element/mtable) a été corrigée.

### Outils de développement

- L'objet [`console`](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the_console_object) a une nouvelle méthode `dir()`, qui affiche une liste interactive des propriétés sur un objet spécifié.

## Changements pour les développeurs de Mozilla et de modules complémentaires

Voir [Updating add-ons for Firefox 8](/fr/docs/Mozilla/Firefox/Updating_add-ons_for_Firefox_8) pour vous guidez dans les modifications que vous êtes susceptibles d'avoir à faire pour rendre vos extensions compatibles avec Firefox 8.

> [!NOTE]
> Firefox 8 requiert que les composants binaires soient recompilés, comme pour toutes les versions majeures de Firefox. Pour plus de détails, voir [Interfaces Binaires](/fr/docs/Developer_Guide/Interface_Compatibility#Binary_Interfaces).

### XPCOM

- [`Components.utils`](/fr/docs/Components.utils)
  - : Les nouvelles méthodes [`Components.utils.createObjectIn()`](/fr/docs/Components.utils.createObjectIn) et [`Components.utils.makeObjectPropsNormal()`](/fr/docs/Components.utils.makeObjectPropsNormal) ont été créées pour faciliter la création d'objets dans des compartiments spécifiques.

#### Autres changements relatifs à XPCOM

- Vous pouvez à présent demander des objets DOM [`File`](/fr/docs/Web/API/File) à partir d'éléments du code en faisant simplement un nouveau fichier, au lieu de devoir demander directement à [`nsIDOMFile`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMFile).
- Le type de tableau `nsTPtrArray` a été retiré. La fonctionnalité est désormais disponible sur tous les `nsTArray`, qui propose désormais la méthode `SafeElementAt()` lors d'une demande à l'aide d'un type de pointeur. Voir la section sur [`SafeElementAt()`](/fr/docs/XPCOM_array_guide#Bounds-safe_access_to_elements) dans le [guide des tableaux XPCOM](/fr/docs/XPCOM_array_guide) pour plus de détails.

### Workers

Il n'est plus possible d'accéder à des objets XPCOM depuis ChromeWorkers. XPConnect a été désactivé dans le contexte des travailleurs comme indiqué par le [bug 649537](https://bugzilla.mozilla.org/show_bug.cgi?id=649537).

### XUL

- Un bug dans [`document.execCommand()`](/fr/docs/Web/API/Document/execCommand) a été fixé, il survenait lors de l'appel sur la valeur de [`contentDocument`](http://api/fr/docs/XUL/Propriétés/contentDocument). Depuis Firefox 3, cela a entraîné des erreurs au lieu d'un travail correct.
- [Les extensions amorcées](/fr/docs/Extensions/Bootstrapped_extensions) peuvent à présent charger le chrome l'aide du fichier [`chrome.manifest`](/fr/docs/Enregistrement_chrome). Voir la section [Ajout de l'interface utilisateur avec chrome.manifest](/fr/docs/Extensions/Bootstrapped_extensions#Adding_user_interface_with_a_chrome.manifest) pour plus de détails.
- [Les images XUL](/fr/docs/XUL/image) rétrécissent désormais avec le même ratio dans les deux sens lors de la spécification de dimensions maximales.

### Changements dans le système de compilation

- Les options de configuration de compilation suivantes ont été retirées :
  - `--enable-timeline`
  - `--disable-storage`
  - `--necko-disk-cache`

- Lors de la compilation des fichiers IDL aux en-têtes, le fichier d'en-tête `jspubtd.h` est automatiquement inclus lorsque c'est nécessaire. L'inclusion manuelle de `jspubtd.h` et/ou `jsapi.h` dans des fichiers IDL qui utilisent jsval ou \[implicit_jscontext] n'est plus nécessaire.

### Enregistrement du chrome

- L'indicateur [`platformversion`](/fr/docs/Chrome_Registration#platformversion) peut être utilisé dans le chrome.manifest pour spécifier la compatibilité entre les versions de Gecko.

### Changements dans les interfaces

- La méthode [`mozIJSSubScriptLoader.loadSubScript()`](<http://api/fr/docs/XPCOM_Interface_Reference/mozIJSSubScriptLoader#loadSubScript()>) charge désormais scripts à partir du cache de démarrage lorsque c'est possible.
- L'attribut `ownerWindow` a été supprimé de l'interface [`nsIAccessNode`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIAccessNode).
- L'interface [`nsIDOMStorageWindow`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMStorageWindow) a été fusionnée avec l'interface [`nsIDOMWindow`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMWindow).
- Tous les membres de l'interface [`nsIDOMWindowInternal`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMWindowInternal) ont été déplacés dans l'interface [`nsIDOMWindow`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMWindow). L'interface (sans les membres) reste disponible pour la compatibilité jusqu'à Firefox 9.
- Afin d'améliorer les performances, le rappel pour les mises à jour asynchrones des bases de données Places a été changé. Voir les nouvelles méthodes [`mozIVisitInfoCallback.handleResult()`](<http://api/fr/docs/XPCOM_Interface_Reference/mozIVisitInfoCallback#handleResult()>) et [`mozIVisitInfoCallback.handleError()`](<http://api/fr/docs/XPCOM_Interface_Reference/mozIVisitInfoCallback#handleError()>), qui remplacent l'ancienne unique méthode pour les erreurs et les conditions de succès.
- L'attribut `KIND_MAPPED` de [`nsIMemoryReporter`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIMemoryReporter) a été désapprouvé au profit de `KIND_NONHEAP`, de nouveaux types d'unités ont été ajoutées : `UNITS_COUNT_CUMULATIVE` et `UNITS_PERCENTAGE`.
- L'interface [`nsIMemoryReporterManager`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIMemoryReporterManager) a un nouvel attribut `explicit`, qui indique explicitement la taille totale des allocations de mémoire.
- L'interface [`nsIMemoryReporterManager`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIMemoryReporterManager) a un nouvel attribut `resident`, qui relève la quantité de mémoire physique utilisée.
- L'interface [`nsINetworkLinkService`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsINetworkLinkService) a un nouvel attribut, `linkType`. Cet attribut indique le type de connexion réseau en cours d'utilisation. Tous les systèmes d'exploitation retournent actuellement `LINK_TYPE_UNKNOWN`. Le support d'Android a été gardé pour des raisons de sécurité.
- L'interface [`nsISelection2`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISelection2) a été fusionnée avec l'interface [`nsISelectionPrivate`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISelectionPrivate).
- L'interface [`nsISelection3`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISelection3) a été fusionnée avec l'interface [`nsISelection`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISelection).
- L'attribut `state` de [`nsISessionStartup`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISessionStartup) est désormais de type [`jsval`](/fr/docs/SpiderMonkey/JSAPI_Reference/Jsval) au lieu d'être une chaîne, pour des raisons de performance.
- L'état de l'attribut `isActive` de ([`nsIDocShell`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDocShell)) est désormais `false` pour les fenêtres minimisées.
- La méthode [`nsIDownloadHistory.addDownload()`](<http://api/fr/docs/XPCOM_Interface_Reference/nsIDownloadHistory#addDownload()>) enregistre désormais la cible de l'endroit où le téléchargement est sauvegardé, sur le système de fichiers local.

#### Interfaces supprimées

Les interfaces suivantes ont été supprimées car elles n'étaient plus indispensables :

- `nsITimelineService`
- `nsIDOMHTMLIsIndexElement`

L'interface [`nsIWorkerFactory`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIWorkerFactory) a également été retirée. WLes travailleurs peuvent encore être créés à l'aide des constructeurs `Worker` et `ChromeWorker`.

### Autres changements

- Quand une fenêtre est minimisée (non réduite), ou basculée entre le plein écran et le mode fenêtré, elle reçoit l'événement `sizemodechange`.
- You can now [la préférence `extensions.autoDisableScopes`](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#preventing_automatic_install_from_specific_locations) pour désactiver l'installation automatique d'extensions sur un emplacement d'installation.
- La nouvelle propriété [`document.mozSyntheticDocument`](/fr/docs/Web/API/Document) des objets [`Document`](/fr/docs/Web/API/Document) vous permet de déterminer si un document est synthétique (comme une image, une vidéo ou un fichier audio) plutôt qu'un document DOM standard. Cela peut être utile, par exemple, si vous voulez présenter une interface utilisateur différente dans cette situation (comme l'ajout d'éléments contextuels différemment selon le cas présent).
- Vous pouvez désormais spécifier un filtre en ouvrant `about:config` ; par exemple, "about:config?filter=sessionstore" n'affichera que les préférences liées au stockage des sessions.

## Voir aussi

- [Firefox 7 pour les développeurs](/fr/docs/Mozilla/Firefox/Releases/7)
- [Firefox 6 pour les développeurs](/fr/docs/Mozilla/Firefox/Releases/6)
- [Firefox 5 pour les développeurs](/fr/docs/Mozilla/Firefox/Releases/5)
- [Firefox 4 pour les développeurs](/fr/docs/Mozilla/Firefox/Releases/4)
- [Firefox 3.6 pour les développeurs](/fr/docs/Mozilla/Firefox/Releases/3.6)
- [Firefox 3.5 pour les développeurs](/fr/docs/Mozilla/Firefox/Releases/3.5)
- [Firefox 3 pour les développeurs](/fr/docs/Mozilla/Firefox/Releases/3)
- [Firefox 2 pour les développeurs](/fr/docs/Mozilla/Firefox/Releases/2)
- [Firefox 1.5 pour les développeurs](/fr/docs/Mozilla/Firefox/Releases/1.5)
