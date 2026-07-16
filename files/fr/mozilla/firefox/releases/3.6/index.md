---
title: Firefox 3.6 note de version pour les développeurs
short-title: Firefox 3.6
slug: Mozilla/Firefox/Releases/3.6
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

[Firefox 3.6](https://www.firefox.com/fr/) prend en charge les nouvelles normes Web en cours d'élaboration, offre des performances améliorées et garantit une meilleure expérience globale aux internautes et aux développeur·euse·s. Cette page propose des liens vers des articles présentant les nouvelles fonctionnalités de Firefox 3.6.

## Pour les développeur·euse·s de sites web et d'applications

### CSS

- [Utilisation de dégradés](/fr/docs/Web/CSS/Guides/Images/Using_gradients)
  - : Firefox 3.6 ajoute le support de `-moz-linear-gradient` et `-moz-radial-gradient` pour la propriété {{CSSxRef("background")}}.
- [Fonds multiples](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Using_multiple_backgrounds)
  - : La propriété {{CSSxRef("background")}} (ainsi que {{CSSxRef("background-color")}}, {{CSSxRef("background-image")}}, {{CSSxRef("background-position")}}, {{CSSxRef("background-repeat")}}, et {{CSSxRef("background-attachment")}}) peuvent gérer des fonds multiples. Ceux-ci sont affichés par couches, les uns au-dessus des autres.
- [Fonctionnalités de médias spécifiques à Mozilla](/fr/docs/Web/CSS/Guides/Media_queries/Using#fonctionnalités_de_médias_spécifiques_à_mozilla)
  - : Des fonctionnalités de médias ont été ajoutées pour des mesures spécifiques à Mozilla, afin de pouvoir utiliser des [requêtes média](/fr/docs/Web/CSS/Guides/Media_queries/Using) pour vérifier plus aisément la disponibilité de fonctionnalités comme un écran tactile.
- [Redimensionnement d'images de fond](/fr/docs/Web/CSS/Guides/Backgrounds_and_borders/Resizing_background_images)
  - : La propriété `background-size` du [brouillon CSS 3 Backgrounds and Borders <sup>(angl.)</sup>](https://drafts.csswg.org/css-backgrounds-3/) est gérée sous le nom de `-moz-background-size`.
- [Support des polices WOFF](/fr/docs/Web/CSS/Guides/Fonts/WOFF)
  - : {{CSSxRef("@font-face")}} prend désormais en charge le format de polices Web téléchargeables WOFF.
- [Evènements pointeurs](/fr/docs/Web/CSS/Reference/Properties/pointer-events)
  - : La propriété {{CSSxRef("pointer-events")}} permet de définir si un élément peut être la cible des évènements de pointeur de la souris.

#### Autres changements CSS

- L'unité de longueur [`rem`](/fr/docs/Web/CSS/Reference/Values/length#relative_length_units) est maintenant prise en charge. [bogue Firefox 472195 <sup>(angl.)</sup>](https://bugzil.la/472195)
- {{CSSxRef("image-rendering")}} est prise en charge pour les images, images de fonds, vidéos et canevas. [bogue Firefox 423756 <sup>(angl.)</sup>](https://bugzil.la/423756)
- {{CSSxRef("text-align")}}:end est maintenant prise en charge. [bogue Firefox 299837 <sup>(angl.)</sup>](https://bugzil.la/299837)
- Les changements DOM sur des éléments utilisant les types de {{CSSxRef("display")}} table fonctionnent beaucoup mieux.
- Ajout de {{CSSxRef(":-moz-locale-dir_ltr", ":-moz-locale-dir(ltr)")}} et {{CSSxRef(":-moz-locale-dir_rtl", ":-moz-locale-dir(rtl)")}} pour faciliter la personnalisation de mise en page selon l'orientation de l'interface dépendant de la locale (gauche à droite ou droite à gauche). [bogue Firefox 478416 <sup>(angl.)</sup>](https://bugzil.la/478416)
- Ajout de la pseudo-classe {{CSSxRef(":indeterminate")}}, correspondant aux éléments `checkbox` {{HTMLElement("input")}} dont l'attribut `indeterminate` est `true`.
- Les plugins fenêtrés ne sont plus affichés par les transformations CSS, car ils ne peuvent pas être correctement transformés par le compositeur.

### HTML

- [Utilisation de fichiers à partir d'applications Web](/fr/docs/Web/API/File_API/Using_files_from_web_applications)
  - : Le support de la nouvelle API de fichier HTML5 a été ajouté à Gecko, ce qui permet à des applications Web d'accéder à des fichiers locaux sélectionnés par l'utilisateur·ice.
- Support des affiches pour les vidéos HTML5
  - : L'attribut `poster` est pris en charge pour l'élément {{HTMLElement("video")}}, ce qui permet au contenu de choisir une image à afficher tant que la vidéo n'a pas commencée.
- Support de la propriété `indeterminate` pour les cases à cocher et boutons radio
  - : Les éléments HTML {{HTMLElement("input")}} des types `checkbox` et `radio` supportent désormais la propriété indeterminate qui permet d'avoir un troisième état «&nbsp;indéterminé&nbsp;».
- Contrôle du lissage d'images dans canvas
  - : La nouvelle propriété [`mozImageSmoothingEnabled`](/fr/docs/Web/API/Canvas_API/Tutorial/Using_images#contrôler_la_mise_à_léchelle_de_limage) peut être utilisée pour activer et désactiver le lissage lors d'un redimensionnement dans les éléments {{HTMLElement("canvas")}}.
- Exécution d'un script asynchrone
  - : En définissant l'attribut `async` sur un élément {{HTMLElement("script")}}, le `script` ne bloque pas le chargement ou l'affichage du reste de la page. En revanche, le `script` s'exécute dès qu'il est téléchargé.

### JavaScript

Gecko 1.9.2 introduit JavaScript 1.8.2, qui ajoute un certain nombre de fonctionnalités issues de la [norme ECMAScript 5 <sup>(angl.)</sup>](https://web.archive.org/web/20210619182836/https://developer.mozilla.org/en-US/docs/Archive/Web/JavaScript/New_in_JavaScript/ECMAScript_5_support_in_Mozilla):

- {{JSxRef("Date.parse()")}} peut maintenant analyser des dates ISO 8601 au format YYYY-MM-DD.
- La propriété {{JSxRef("Function", "prototype")}} des instances de fonctions n'est plus énumérable.

### DOM

- Terminaison des web workers par eux-mêmes
  - : Les web [workers](/fr/docs/Web/API/Web_Workers_API/Using_web_workers) prennent désormais en charge la méthode `nsIWorkerScope.close()`, qui leur permet de se terminer d'eux-mêmes.
- Glisser-déposer de fichiers
  - : L'objet {{DOMxRef("DataTransfer")}} fournit à présent aux observateurs de glisser-déposer une liste des fichiers glissés.
- Vérification pour voir si un élément correspond à un sélecteur CSS
  - : La nouvelle méthode [`Node.mozMatchesSelector`](/fr/docs/Web/API/Element/matches) permet de déterminer si un élément correspond bien à un sélecteur CSS. Voir [bogue Firefox 518003 <sup>(angl.)</sup>](https://bugzil.la/518003).
- [Dispositif de détection de l'orientation](/fr/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Le contenu peut à présent détecter l'orientation de l'appareil s'il dispose d'un accéléromètre, à l'aide de l'évènement `MozOrientation`. Firefox 3.6 gère notamment l'accéléromètre des ordinateurs portables Mac.
- Détection des changements de largeur et hauteur d'un document
  - : Le nouvel évènement `MozScrollAreaChanged` est déclenché lorsqu'une des propriétés `scrollWidth` ou `scrollHeight` d'un document change.

#### Autres changements DOM

- La méthode `getBoxObjectFor()` a été **supprimée**, car elle n'était pas standard et exposait d'autres fonctionnalités non standard. Voir [bogue Firefox 340571 <sup>(angl.)</sup>](https://bugzil.la/340571). La bibliothèque [MooTools <sup>(angl.)</sup>](https://mootools.net/) qui utilisait cet appel pour la détection de Gecko est affectée&nbsp;; cela a été corrigé dans la dernière version de MooTools, assurez-vous donc d'être à jour.
- Les nouvelles propriétés {{DOMxRef("Window.mozInnerScreenX", "mozInnerScreenX")}} et {{DOMxRef("Window.mozInnerScreenY", "mozInnerScreenY")}} sur les objets DOM window ont été ajoutées&nbsp;; elles retournent les coordonnées à l'écran du coin supérieur gauche de la zone de visualisation de la fenêtre.
- La nouvelle propriété `mozScreenPixelsPerCSSPixel` de `nsIDOMWindowUtils` uniquement accessible depuis le chrome, fournit un facteur de conversion entre les pixels CSS et les pixels à l'écran&nbsp;; cette valeur peut varier selon le niveau de zoom du contenu.
- Lorsque l'identifiant de fragment de document de l'URL de la page change (la partie après le caractère «&nbsp;#&nbsp;» (dièse)), un nouvel évènement `hashchange` est envoyé à la page. Consultez {{DOMxRef("Window.hashchange_event", "hashchange")}} pour plus d'informations. [bogue Firefox 385434 <sup>(angl.)</sup>](https://bugzil.la/385434)
- L'attribut {{DOMxRef("Document.readyState")}} est désormais supporté. [bogue Firefox 347174 <sup>(angl.)</sup>](https://bugzil.la/347174)
- Gestion de l'attribut HTML5 {{DOMxRef("Element.classList")}} pour permettre une gestion plus aisée de l'attribut class. [bogue Firefox 501257 <sup>(angl.)</sup>](https://bugzil.la/501257)
- `localName` et `namespaceURI` dans les documents HTML se comportent à présent comme dans les documents XHTML&nbsp;: `localName` est renvoyé en minuscules et la propriété `namespaceURI` pour les éléments HTML est `"http://www.w3.org/1999/xhtml"`.
- {{DOMxRef("Element.getElementsByTagNameNS")}} son argument n'est plus en minuscules, alors en lettres majuscules ASCII dans l'argument établit des chaînes de caractères contre des éléments HTML échouent. C'est vrai aussi pour {{DOMxRef("document.getElementsByTagNameNS")}}.
- Ajout de la gestion des adresses dans la géolocalisation avec l'interface `nsIDOMGeoPositionAddress` et d'un nouveau champ dans `nsIDOMGeoPosition`.
- La fonction {{DOMxRef("Window.getComputedStyle")}} retourne à présent les guillemets autour des valeurs `url()`.

### XPath

- Gestion de la méthode XPath `choose()`
  - : La méthode [`choose()`](/fr/docs/Web/XML/XPath/Reference/Functions/choose) est à présent gérée par notre implémentation de [XPath](/fr/docs/Web/XML/XPath).

## Pour les développeur·euse·s XUL et d'extensions

Si vous êtes un développeur·euse d'extensions, vous devriez commencer par lire [mise à jour des extensions pour Firefox 3.6](/fr/docs/Mozilla/Firefox/Releases/3.6/Updating_extensions), qui offre une vue d'ensemble sur les changements qui pourraient affecter vos extensions. Les développeur·euse·s de Plug-in devraient lire [mise à jour des modules complémentaires pour Firefox 3.6](/fr/docs/Mozilla/Firefox/Releases/3.6/Updating_plug-ins).

### Nouvelles fonctionnalités

- [Détection de l'orientation de l'appareil](/fr/docs/Web/API/Device_orientation_events/Detecting_device_orientation)
  - : Le contenu peut maintenant détecter l'orientation de l'appareil s'il possède un accéléromètre, en utilisant l'évènement [`MozOrientation`](/fr/docs/Web/API/Screen/change_event). Firefox 3.6 supporte l'accéléromètre des ordinateurs portables Mac.
- [Surveillance de l'activité HTTP <sup>(angl.)</sup>](https://web.archive.org/web/20210421090042/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Monitoring_HTTP_activity)
  - : Vous pouvez maintenant surveiller en temps réel les données HTTP demandées et reçues.
- Intégration à la Barre des tâches de Windows
  - : Il est maintenant possible de personnaliser l'apparence des fenêtres dans la barre des tâches sous Windows 7 ou plus récent. _C'est désactivé par défaut dans Firefox 3.6._

### Places

- Les requêtes peuvent maintenant utiliser l'attribut `redirectsMode` de l'interface `nsINavHistoryQueryOptions` pour définir s'il faut inclure ou non les pages redirigées dans les résultats.
- Ajout de la nouvelle méthode `nsIFaviconService.expireAllFavicons()` à l'interface `nsIFaviconService`.

### Stockage

- [Tri des données locales avec l'API Storage <sup>(angl.)</sup>](https://web.archive.org/web/20210401045303/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Storage#collation_sorting)
  - : Gecko 1.9.2 ajoute plusieurs nouvelles méthodes pour offrir une collecte (tri) optimisée des résulats en utilisant les techniques de localisation.
- [Énumération des propriétés d'une requête <sup>(angl.)</sup>](https://web.archive.org/web/20210513165422/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/mozIStorageStatementParams#enumeration_of_properties)
  - : Vous pouvez maintenant utiliser {{JSxRef("Statements/for...in", "for...in")}} pour énumérer toutes les propriétés d'une déclaration.
- mozIStorageStatement's getParameterIndex a changé de comportement entre Firefox 3.5 et 3.6.
  - : Voir [bogue Firefox 528166 <sup>(angl.)</sup>](https://bugzil.la/528166) pour plus de détails.
- Liaison asynchrone de plusieurs ensembles de paramètres pour exécution d'une requête.
  - : Voir [bogue Firefox 490085 <sup>(angl.)</sup>](https://bugzil.la/490085) pour plus de détails.

### Préférences

- L'interface `nsIContentPrefService` a deux nouvelles méthodes&nbsp;: `nsIContentPrefService.getPrefsByName()` et `nsIContentPrefService.removePrefsByName()`.

### Thèmes

Voir [mise à jour des thèmes pour Firefox 3.6](/fr/docs/Mozilla/Firefox/Releases/3.6/Updating_themes) pour la liste des changements liés aux thèmes.

- [Thèmes légers <sup>(angl.)</sup>](https://web.archive.org/web/20180617103446/https://developer.mozilla.org/en-US/Add-ons/Themes/Lightweight_themes)
  - : Firefox 3.6 supporte les thèmes légers&nbsp;; ce sont des thèmes faciles à créer et qui sont simplement appliqué sur le fond de la fenêtre du navigateur, en haut (barre d'adresses et boutons) et en bas (barre d'état). Il s'agit d'une intégration de l'architecture de thèmes [Personas](https://addons.mozilla.org/fr/firefox/themes/) dans Firefox.

### Divers

- Firefox n'a plus la charge des modules tiers installé dans son répertoire des modules internes. Cela contribue à assurer la stabilité en empêchant des composants tiers buggés d'être exécuté. Les développeur·euse·s qui installent des composants de cette façon doivent [refaire leurs modules sous forme de paquets XPI <sup>(angl.)</sup>](https://web.archive.org/web/20170622232046/https://developer.mozilla.org/en-US/docs/Migrating_raw_components_to_add-ons) afin qu'ils puissent être installés normalement.
- `contents.rdf` n'est plus pris en charge pour l'enregistrement chrome dans les extensions. Vous devez maintenant utiliser le fichier [`chrome.manifest` <sup>(angl.)</sup>](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Install_Manifests). Voir [bogue Firefox 492008 <sup>(angl.)</sup>](https://bugzil.la/492008).
- La barre de menu peut être cachée automatiquement. Voir [bogue Firefox 477256 <sup>(angl.)</sup>](https://bugzil.la/477256).
- Ajout du support de l'attribut `container-live-role` aux objets. Voir [bogue Firefox 391829 <sup>(angl.)</sup>](https://bugzil.la/391829).
- Suppression de la liaison `tabs-closebutton`. Voir [bogue Firefox 500971 <sup>(angl.)</sup>](https://bugzil.la/500971).
- Ajout du support de `nsISound` pour jouer des sons en fonction des évènements qui ont eu lieu. Voir [bogue Firefox 502799 <sup>(angl.)</sup>](https://bugzil.la/502799).
- La syntaxe pour les méthodes de `nsITreeView`&nbsp;: `nsITreeView.canDrop()` et `nsITreeView.drop()`, a changé pour supporter la nouvelle API glisser & déposer introduite dans Gecko 1.9. Voir [bogue Firefox 455590 <sup>(angl.)</sup>](https://bugzil.la/455590).
- Ajout du support pour aligner le curseur de la souris sur le bouton par défaut de la boîte de dialogue ou l'assistant de Windows, voir [bogue Firefox 76053 <sup>(angl.)</sup>](https://bugzil.la/76053). C'est traité automatiquement par la boîte de dialogue et l'assistant. Mais si une application XUL crée une fenêtre en utilisant l'élément `window` et qu'il a un bouton par défaut, il doit appeler `nsIDOMChromeWindow.notifyDefaultButtonLoaded()` dans le gestionnaire d'évènements onload de la fenêtre.
- Pour l'interface `nsILocalFileMac`, deux méthodes ont étés retirées&nbsp;: `setFileTypeAndCreatorFromMIMEType()` et `setFileTypeAndCreatorFromExtension()`.
- Le nouveau module de code [`NetUtils.jsm` <sup>(angl.)</sup>](https://web.archive.org/web/20210620035742/https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/NetUtil.jsm) apporte une méthode facile à utiliser pour copier les données de manière asynchrone à partir d'un flux d'entrée vers un flux de sortie.
- Le nouveau module de code [`openLocationLastURL.jsm` <sup>(angl.)</sup>](https://web.archive.org/web/20210417025317/https://developer.mozilla.org/en-US/docs/Mozilla/JavaScript_code_modules/openLocationLastURL.jsm), facilite la lecture et la modification de la valeur de l'URL gardée en mémoire de la boîte de dialogue "Ouvrir le fichier", tout en prenant bien en compte le mode de navigation privée.
- Dans Windows, l'interface `nsIScreen` reporte maintenant 24 bits par pixel pour la profondeur des couleurs lorsque le pilote graphique demande 32 bits, plus précisement 24 représente le nombre réel de pixels de couleurs en utilisation.
- Les barres de menu peuvent maintenant être cachées sous Windows, en utilisant le nouvel attribut [`autohide` <sup>(angl.)</sup>](https://web.archive.org/web/20201124231843/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/XUL/toolbar#autohide) sur l'élément XUL [`<xul:toolbar>` <sup>(angl.)</sup>](https://web.archive.org/web/20201124231843/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/XUL/toolbar).
- Les méthodes [`loadOneTab` <sup>(angl.)</sup>](https://web.archive.org/web/20201210182023/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/XUL/Method/loadOneTab) et [`addTab` <sup>(angl.)</sup>](https://web.archive.org/web/20201208182934/https://developer.mozilla.org/en-US/docs/Archive/Mozilla/XUL/Method/addTab) acceptent maintenant le nouveau paramètre `relatedToCurrent` et, en outre, permet à des paramètres d'être définis par un nom, puisque presque tous les paramètres sont optionnels.
- La propriété «&nbsp;[hidden <sup>(angl.)</sup>](https://web.archive.org/web/20210421140209/https://developer.mozilla.org/en-US/docs/Archive/Add-ons/Install_Manifests#hidden)&nbsp;» n'est plus supportée dans les manisfestes d'installation&nbsp;; il n'est plus possible d'empêcher l'utilisateur·ice de voir des modules complémentaires dans la fenêtre du gestionnaire de module.
- Le composant `@mozilla.org/webshell;1` n'existe plus&nbsp;; vous devez utiliser `@mozilla.org/docshell;1` à la place.
- Vous pouvez désormais enregistrer avec la catégorie update-timer pour programmer la synchronisation des évènements sans avoir à instancier l'objet que le minuteur va éventuellement remettre, il est plutôt instancié lorsque c'est nécessaire. Voir `nsIUpdateTimerManager.registerTimer()` pour plus de détails.
- La fonction [`NPN_GetValue` <sup>(angl.)</sup>](https://web.archive.org/web/20210308202622/https://developer.mozilla.org/en-US/docs/Archive/Plugins/Reference/NPN_GetValue) ne donne plus accès à travers XPCOM aux valeurs de variables `NPNVserviceManager`, `NPNVDOMelement` et `NPNVDOMWindow`. Cela fait partie des travaux pour que les plugins s'exécutent dans des processus séparés dans une future version de Gecko.
- Les plugins ne sont plus scriptables à travers l'interface XPCOM (IDL), [NPRuntime <sup>(angl.)</sup>](https://web.archive.org/web/20211028124814/https://developer.mozilla.org/en-US/docs/Plugins/Guide/Scripting_plugins) est l'API à utiliser pour coder des plugins et [`NPP_GetValue()` <sup>(angl.)</sup>](https://web.archive.org/web/20201023225330/https://developer.mozilla.org/en-US/docs/Archive/Plugins/Reference/NPP_GetValue) n'est plus appelé avec la valeur `NPPVpluginScriptableInstance` ou `NPPVpluginScriptableIID`. Cela fait partie des travaux pour que les plugins s'exécutent dans des processus séparés dans une future version de Gecko.

## Pour les développeur·euse·s de Firefox/Gecko

Certains changements sont vraiment intéressants si vous travaillez sur le fonctionnement interne de Firefox.

### Interfaces fusionnées

Les interfaces suivantes ont été fusionnées&nbsp;:

- `nsIPluginTagInfo2` a été fusionnée avec `nsIPluginTagInfo`.
- `nsIPluginInstanceInternal`, `nsIPPluginInstancePeer`, `nsIPluginInstancePeer1`, `nsIPluginInstancePeer2` et `nsIPluginInstancePeer3` ont toutes été fusionnées avec `nsIPluginInstance`.
- `nsIWindowlessPlugInstPeer` a été fusionnée avec `nsIPluginInstance`.
- `nsIPluginManager` et `nsIPluginManager2` ont été fusionnées avec `nsIPluginHost`

### Interfaces supprimées

Les interfaces suivantes ont été entièrement supprimées, car elles étaient inutilisées, non implémentées ou obsolètes&nbsp;:

- `nsIFullScreen`
- `nsIDOMSVGListener`
- `nsIDOMSVGZoomListener`
- `nsIInternetConfigService`
- `nsIDKey`
- `nsIEventHandler`
- `nsIJRILiveConnectPIPeer`
- `nsIJRILiveConnectPlugin`
- `nsIScriptablePlugin`
- `nsIClassicPluginFactory`
- `nsIFileUtilities`

### Interfaces déplacées

Les interfaces suivantes ont été déplacées de leurs précédents fichiers IDL vers leurs nouveaux&nbsp;:

- `nsIDOMNSCSS2Properties` est maintenant située dans son propre fichier IDL (`dom/interfaces/css/nsIDOMCSS2Properties.idl`).
- `nsIUpdateTimerManager` est maintenant située dans son propre fichier IDL.

Un grand nombre d'interfaces ont été déplacées. Voir [Interfaces déplacées dans Firefox 3.6](/fr/docs/Mozilla/Firefox/Releases/3.6/Interfaces_moved) pour la liste complète.

### Autres changements dans les interfaces

Les modifications suivantes ont été faites&nbsp;:

- L'interface `nsIPlugin` hérite maintenant de `nsISupports` à la place de `nsIFactory`.
- L'interface `nsIPluginHost` hérite maintenant de `nsISupports` à la place de `nsIFactory`.
- L'interface `nsIFrame` hérite maintenant de `nsQueryFrame` à la place de `nsISupports`.
- La méthode `getPaletteInfo()` de `nsIDeviceContext` a été supprimée, car elle n'a jamais été appliquée.
- La méthode `reportPendingException()` de `nsIScriptContext` a été supprimée, car elle n'était plus utilisée.

### Changements dans l'accessibilitée du code

- [L'évènement d'accessibilité <sup>(angl.)</sup>](https://web.archive.org/web/20210516055347/https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIAccessibleEvent) `EVENT_REORDER` est maintenant envoyé quand les enfants des `frames` et des `iframes` changent, ainsi que lors de la modification du document principal des enfants. Voir [bogue Firefox 420845 <sup>(angl.)</sup>](https://bugzil.la/420845).
- Désormais toute sélection en cours est correctement supprimée avant de sélectionner une ligne spécifique.
