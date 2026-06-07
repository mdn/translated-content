---
title: Firefox 8 note de version pour les développeurs
short-title: Firefox 8
slug: Mozilla/Firefox/Releases/8
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

Firefox 8, basé sur Gecko 8.0, est sorti le 8 novembre 2011. Cet article fournit des informations à la fois pour les développeur·euse·s Web et pour les développeur·euse·s d'extensions et de projets liés à Mozilla pour aider à tirer pleinement parti des fonctionnalités de cette version.

## Changements pour les développeur·euse·s Web

### HTML

- La propriété `crossOrigin` a été ajouté à {{DOMxRef("HTMLImageElement")}} et l'attribut [`crossorigin`](/fr/docs/Web/HTML/Reference/Elements/img#crossorigin) a été ajouté à l'élément {{HTMLElement("img")}} (voir [le bogue Firefox 664299 <sup>(angl.)</sup>](https://bugzil.la/664299)).
- La méthode {{DOMxRef("HTMLSelectElement.add()")}} supporte désormais supporte désormais soit un élément ou soit l'index d'un élément auquel un nouvel élément doit être inséré avant. Auparavant, seulement un élément était supporté (voir [le bogue 666200 <sup>(angl.)</sup>](https://bugzil.la/666200)).
- Le constructeur `HTMLIsIndexElement` a été retiré. Aucun éléments n'a implémenté cette interface depuis Firefox 4.
- la fonctionnalité HTML5 «&nbsp;menu contextuel&nbsp;» (attribut `contextmenu`), qui vous permet d'ajouter des éléments personnalisés particuliers au menu contextuel d'origine, est désormais supportée (l'implémentation est encore expérimentale en attendant des changements dans la spécification&nbsp;; voir [le bogue Firefox 617528 <sup>(angl.)</sup>](https://bugzil.la/617528)).
- Le support de l'attribut {{DOMxRef("HTMLElement.accessKeyLabel")}} a été ajouté à tous les éléments.
- les éléments {{HTMLElement("input")}} et {{HTMLElement("textarea")}} prennent désormais en charge l'attribut `selectionDirection`, et leurs méthodes `setSelectionRange()` ont été mises à jour pour prendre éventuellement en charge la définition d'une direction.
- La plupart des éléments peuvent désormais obtenir une bague de focalisation établie autour d'eux s'ils ont été faits pouvant recevoir la sélection avec l'attribut `tabindex` et que l'utilisateur·ice se concentre ensuite sur l'élément.
- Dans un ensemble d'éléments {{HTMLElement("label")}} imbriqués, cliquer sur les évènements ne déclenchent plus plusieurs éléments, qui provoquaient un blocage de Firefox (voir [le bogue Firefox 646157 <sup>(angl.)</sup>](https://bugzil.la/646157)).

### DOM

- La méthode {{DOMxRef("Element.insertAdjacentHTML", "insertAdjacentHTML")}} a été implémentée.
- `BlobBuilder` dispose désormais d'une méthode `getFile()` qui retourne le contenu du blob dans un fichier.
- L'interface {{DOMxRef("FileReaderSync")}} (partie de FileAPI) a été implémentée.
- La gestion des évènements par les {{HTMLElement("label")}} imbriqués a été fixée.
- Vous pouvez maintenant utiliser {{DOMxRef("Window.postMessage()")}} pour passer les objets {{DOMxRef("File")}} et {{DOMxRef("FileList")}} entre les fenêtres.
- Lors de l'édition de zones {{DOMxRef("HTMLElement.contenteditable", "contenteditable")}} la sortie d'une position en appuyant sur retour, ou à la sortie d'une liste en mode édition en appuyant sur retour à deux reprises, revient maintenant au mode d'entrée au paragraphe (c'est-à-dire les paragraphes à l'intérieur des blocs {{HTMLElement("p")}}) au lieu de lignes de séparation par les éléments {{HTMLElement("br")}}.
- Correction d'un bogue empêchant la justification de la prise d'effet correcte lorsqu'elle est appliquée à la première ligne dans une zone {{DOMxRef("HTMLElement.contenteditable", "contenteditable")}}.
- Correction d'un bogue qui faisait que en appuyant sur <kbd>Suppr</kbd> ou <kbd>Retour arrière</kbd> au début d'une zone {{DOMxRef("HTMLElement.contenteditable", "contenteditable")}} affectait le bloc `contenteditable` précédent s'il était présent.
- {{DOMxRef("Document.getSelection()")}} retourne désormais l'objet `Selection` identique à {{DOMxRef("Window.getSelection()")}}, à la place de le _transformer en chaîne de caractères_.
- La propriété HTML5 `selectionDirection` permet de définir la direction de la sélection dans un texte éditable.
- {{DOMxRef("HTMLMediaElement")}} a maintenant une propriété `seekable` qui retourne l'objet {{DOMxRef("TimeRanges")}}.
- L'attribut {{DOMxRef("HTMLMediaElement.preload")}} se reflète désormais comme une _valeur énumérée_.
- Les [propriétés `crossOrigin`](/fr/docs/Web/HTML/Reference/Attributes/crossorigin) sont par défaut «&nbsp;anonymes&nbsp;» lorsqu'une valeur invalide est utilisée.
- {{DOMxRef("Navigator.cookieEnabled")}} retourne désormais correctement l'information quand le paramètre de cookie par défaut est écrasé sur la base de chaque site.

### JavaScript

- {{JSxRef("RegExp.exec()")}} et {{JSxRef("RegExp.test()")}} appelés sans arguments correspondent maintenant à la chaîne de caractères `"undefined"`.
- {{JSxRef("String.search()")}} et {{JSxRef("String.match()")}} appelés sans arguments ou `undefined` correspondent désormais à une chaîne de caractères vide et correspondent donc à chaque chaîne de caractères.
- La prise en charge des listes de surveillance a été implémentée avec les nouvelles méthodes (non standards) `watch()` et `unwatch()`.

### CSS

- {{CSSxRef("resolution")}} accepte désormais des nombres ({{CSSxRef("&lt;number&gt;")}}), pas seulement des valeurs {{CSSxRef("&lt;integer&gt;")}} comme avec la spécification.
- Les règles de césure ont été ajoutées pour de nombreuses nouvelles langues lors de l'utilisation de {{CSSxRef("hyphens")}}.
- Le traitement de {{CSSxRef("background-size")}} a été revu pour mieux correspondre à la spécification.
- Dans le passé, {{CSSxRef("text-decoration")}} en mode quirks avait l'épaisseur de ligne et la position ajustée sur le texte descendant pour correspondre à la descendance. Désormais le mode standard et le mode quirks ont un rendu plus proche.
- Le positionnement horizontal des éléments est davantage conforme à la spécification dans beaucoup de cas. La documentation est à venir, mais pour l'instant, pour plus de détails voir le commentaire 23 du [bogue Firefox 682780 <sup>(angl.)</sup>](https://bugzil.la/682780).
- [Les images SVG sont désormais correctement mise à l'échelle](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Scaling_SVG_backgrounds) lorsqu'elles sont utilisées comme images de fond.

### Réseau

- Les doubles guillemets ne sont plus acceptés en tant que délimiteur pour l'encodage {{RFC("2231")}} ou {{RFC("5987")}}, conformément à ces RFCs.
- Le parseur MIME du champ d'en-tête (`Content-Disposition`) exige désormais "=" dans les paramètres.
- Les scripts ne sont plus téléchargés lorsque JavaScript est désactivé.
- SSL 2.0 n'est plus supporté.

### WebSockets

- La méthode [`send()`](/fr/docs/Web/API/WebSocket/send) de l'objet [`WebSocket`](/fr/docs/Web/API/WebSocket) ne retourne plus à tort une valeur booléenne.
- La méthode [`close()`](/fr/docs/Web/API/WebSocket/close) de l'objet [`WebSocket`](/fr/docs/Web/API/WebSocket) correspond désormais à la version actuelle du standard, et les évènements proches utilisent à présent correctement l'interface [`CloseEvent`](/fr/docs/Web/API/CloseEvent).
- L'attribut `extensions` de l'objet [`WebSocket`](/fr/docs/Web/API/WebSocket) est à présent supporté.
- Le constructeur WebSocket supporte désormais un ensemble de protocoles ainsi que la chaîne de caractères d'un seul protocole.
- Le contenu mixte n'est pas autorisé avec WebSockets, vous ne pouvez plus établir une connexion vers un serveur WebSocket non sécurisé à partir d'un contenu sécurisé.
- Les erreurs de connexion avec WebSockets déclenchent à présent le gestionnaire `onerror`.
- L'API [WebSocket](/fr/docs/Web/API/WebSockets_API) a été mise à jour suivant la dernière version de la spécification (voir [bogue Firefox 674890 <sup>(angl.)</sup>](https://bugzil.la/674890), [bogue Firefox 674527 <sup>(angl.)</sup>](https://bugzil.la/674527) et [bogue Firefox 674716 <sup>(angl.)</sup>](https://bugzil.la/674716)).
- L'extension _deflate-stream_ pour WebSockets a été désactivée, elle est obsolète et a cassée la compatibilité avec quelques sites.

### WebGL

- [Les textures inter-domaines](/fr/docs/Web/API/WebGL_API/Tutorial/Using_textures_in_WebGL#textures_inter-domaines) sont à présent autorisées avec l'accord CORS.
- Le rendu inter-processus avec Direct2D/Direct3D 10.

### MathML

- le support de l'attribut `displaystyle` sur l'élément de premier niveau {{MathMLElement("math")}} a été ajouté.
- L'interprétation de numéros de lignes négatifs pour l'attribut `align` de {{MathMLElement("mtable")}} a été corrigée.

### Outils de développement

- L'objet [`console` <sup>(angl.)</sup>](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html#the-console-object) a une nouvelle méthode `dir()`, qui affiche une liste interactive des propriétés sur un objet défini.

## Changements pour les développeur·euse·s de Mozilla et de modules complémentaires

Voir [Mise à jour des modules complémentaires pour Firefox 8](/fr/docs/Mozilla/Firefox/Releases/8/Updating_add-ons) pour vous guidez dans les modifications que vous êtes susceptibles d'avoir à faire pour rendre vos extensions compatibles avec Firefox 8.

> [!NOTE]
> Firefox 8 requiert que les composants binaires soient recompilés, comme pour toutes les versions majeures de Firefox.

### XPCOM

- `Components.utils`
  - : Les nouvelles méthodes `Components.utils.createObjectIn()` et `Components.utils.makeObjectPropsNormal()` ont été créées pour faciliter la création d'objets dans des compartiments spécifiques.

#### Autres changements relatifs à XPCOM

- Vous pouvez à présent demander des objets DOM {{DOMxRef("File")}} à partir d'éléments du code en faisant simplement un nouveau fichier, au lieu de devoir demander directement à `nsIDOMFile`.
- Le type de tableau `nsTPtrArray` a été retiré. La fonctionnalité est désormais disponible sur tous les `nsTArray`, qui propose désormais la méthode `SafeElementAt()` lors d'une demande à l'aide d'un type de pointeur.

### Workers

Il n'est plus possible d'accéder à des objets XPCOM depuis ChromeWorkers. XPConnect a été désactivé dans le contexte des travailleurs comme indiqué par [le bogue Firefox 649537 <sup>(angl.)</sup>](https://bugzil.la/649537).

### XUL

- Un bogue dans {{DOMxRef("document.execCommand()")}} a été fixé, il survenait lors de l'appel sur la valeur de `contentDocument`. Depuis Firefox 3, cela a entraîné des erreurs au lieu d'un travail correct.
- Les extensions amorcées peuvent à présent charger le chrome l'aide du fichier `chrome.manifest`.
- Les images XUL rétrécissent désormais avec le même ratio dans les deux sens lors de la spécification de dimensions maximales.

### Changements dans le système de compilation

- Les options de configuration de compilation suivantes ont été retirées&nbsp;:
  - `--enable-timeline`
  - `--disable-storage`
  - `--necko-disk-cache`

- Lors de la compilation des fichiers IDL aux en-têtes, le fichier d'en-tête `jspubtd.h` est automatiquement inclus lorsque c'est nécessaire. L'inclusion manuelle de `jspubtd.h` et/ou `jsapi.h` dans des fichiers IDL qui utilisent jsval ou \[implicit_jscontext] n'est plus nécessaire.

### Enregistrement du chrome

- L'indicateur `platformversion` peut être utilisé dans le `chrome.manifest` pour définir la compatibilité entre les versions de Gecko.

### Changements dans les interfaces

- La méthode `mozIJSSubScriptLoader.loadSubScript()` charge désormais scripts à partir du cache de démarrage lorsque c'est possible.
- L'attribut `ownerWindow` a été supprimé de l'interface `nsIAccessNode`.
- L'interface `nsIDOMStorageWindow` a été fusionnée avec l'interface `nsIDOMWindow`.
- Tous les membres de l'interface `nsIDOMWindowInternal` ont été déplacés dans l'interface `nsIDOMWindow`. L'interface (sans les membres) reste disponible pour la compatibilité jusqu'à Firefox 9.
- Afin d'améliorer les performances, le rappel pour les mises à jour asynchrones des bases de données Places a été changé. Voir les nouvelles méthodes `mozIVisitInfoCallback.handleResult()` et `mozIVisitInfoCallback.handleError()`, qui remplacent l'ancienne unique méthode pour les erreurs et les conditions de succès.
- L'attribut `KIND_MAPPED` de `nsIMemoryReporter` a été désapprouvé au profit de `KIND_NONHEAP`, de nouveaux types d'unités ont été ajoutées&nbsp;: `UNITS_COUNT_CUMULATIVE` et `UNITS_PERCENTAGE`.
- L'interface `nsIMemoryReporterManager` a un nouvel attribut `explicit`, qui indique explicitement la taille totale des allocations de mémoire.
- L'interface `nsIMemoryReporterManager` a un nouvel attribut `resident`, qui relève la quantité de mémoire physique utilisée.
- L'interface `nsINetworkLinkService` a un nouvel attribut, `linkType`. Cet attribut indique le type de connexion réseau en cours d'utilisation. Tous les systèmes d'exploitation retournent actuellement `LINK_TYPE_UNKNOWN`. Le support d'Android a été gardé pour des raisons de sécurité.
- L'interface `nsISelection2` a été fusionnée avec l'interface `nsISelectionPrivate`.
- L'interface `nsISelection3` a été fusionnée avec l'interface `nsISelection`.
- L'attribut `state` de `nsISessionStartup` est désormais de type `jsval` au lieu d'être une chaîne de caractères, pour des raisons de performance.
- L'état de l'attribut `isActive` de (`nsIDocShell`) est désormais `false` pour les fenêtres minimisées.
- La méthode `nsIDownloadHistory.addDownload()` enregistre désormais la cible de l'endroit où le téléchargement est sauvegardé, sur le système de fichiers local.

#### Interfaces supprimées

Les interfaces suivantes ont été supprimées, car elles n'étaient plus indispensables&nbsp;:

- `nsITimelineService`
- `nsIDOMHTMLIsIndexElement`

L'interface `nsIWorkerFactory` a également été retirée. Les travailleurs peuvent encore être créés à l'aide des constructeurs `Worker` et `ChromeWorker`.

### Autres changements

- Quand une fenêtre est minimisée (non réduite), ou basculée entre le plein écran et le mode fenêtré, elle reçoit l'évènement `sizemodechange`.
- You can now [la préférence `extensions.autoDisableScopes` <sup>(angl.)</sup>](https://extensionworkshop.com/documentation/publish/signing-and-distribution-overview/#preventing_automatic_install_from_specific_locations) pour désactiver l'installation automatique d'extensions sur un emplacement d'installation.
- La nouvelle propriété `document.mozSyntheticDocument` des objets {{DOMxRef("Document")}} vous permet de déterminer si un document est synthétique (comme une image, une vidéo ou un fichier audio) plutôt qu'un document DOM standard. Cela peut être utile, par exemple, si vous voulez présenter une interface utilisateur différente dans cette situation (comme l'ajout d'éléments contextuels différemment selon le cas présent).
- Vous pouvez désormais définir un filtre en ouvrant `about:config`&nbsp;; par exemple, `about:config?filter=sessionstore` n'affiche que les préférences liées au stockage des sessions.
