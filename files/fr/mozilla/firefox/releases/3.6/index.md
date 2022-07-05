---
title: Firefox 3.6 pour les développeurs
slug: Mozilla/Firefox/Releases/3.6
tags:
  - Firefox
  - Firefox 3.6
translation_of: Mozilla/Firefox/Releases/3.6
original_slug: Mozilla/Firefox/Versions/3.6
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

Firefox 3.6 (nom de code [Namoroka](https://wiki.mozilla.org/Firefox/Namoroka)) est sorti le 21 janvier 2010 et est basé sur Gecko 1.9.2. Cette page fournit des liens vers des articles qui décrivent les nouvelles fonctionnalités de Firefox 3.6.

## Pour les développeurs de sites et d'applications Web

### CSS

- [Utilisation de dégradés](/fr/docs/CSS/Using_CSS_gradients)
  - : Firefox 3.6 ajoute le support de [`-moz-linear-gradient`](/fr/docs/Web/CSS/-moz-linear-gradient) et [`-moz-radial-gradient`](/fr/docs/Web/CSS/-moz-radial-gradient) pour la propriété [`background`](/fr/docs/Web/CSS/background).
- [Fonds multiples](/fr/docs/CSS/Fonds_multiples)
  - : La propriété [`background`](/fr/docs/Web/CSS/background) (ainsi que [`background-attachment`](/fr/docs/Web/CSS/background-attachment)[`background-color`](/fr/docs/Web/CSS/background-color), [`background-image`](/fr/docs/Web/CSS/background-image), [`background-position`](/fr/docs/Web/CSS/background-position) et [`background-repeat`](/fr/docs/Web/CSS/background-repeat)) peuvent gérer des fonds multiples. Ceux-ci seront affichés par couches, les uns au dessus des autres.
- [Fonctionnalités de médias spécifiques à Mozilla](/fr/docs/CSS/Media_queries#Fonctionnalit.C3.A9s_de_m.C3.A9dias_sp.C3.A9cifiques_.C3.A0_Mozilla)
  - : Des fonctionnalités de médias ont été ajoutées pour des mesures spécifiques à Mozilla, afin de pouvoir utiliser des [media queries](/fr/docs/CSS/Media_queries) pour vérifier plus aisément la disponibilité de fonctionnalités comme un écran tactile.
- [Redimensionnement d'images de fond](/fr/docs/CSS/Scaling_background_images)
  - : La propriété `background-size` du [brouillon CSS 3 Backgrounds and Borders](http://dev.w3.org/csswg/css3-background/) est gérée sous le nom de [`-moz-background-size`](/fr/docs/Web/CSS/-moz-background-size).
- [Support des polices WOFF](/fr/docs/WOFF)
  - : [`@font-face`](/fr/docs/Web/CSS/@font-face) supporte désormais le format de polices Web téléchargeables WOFF
- [Evènements pointeurs](/fr/docs/CSS/pointer-events)
  - : La propriété [`pointer-events`](/fr/docs/Web/CSS/pointer-events) si le contenu d'un élément peut être ou non la cible d'évènements pointeur avec la souris.

#### Autres changements CSS

- L'unité de longueur [`rem`](/fr/docs/CSS/longueur) de [CSS3 Values and Units](http://www.w3.org/TR/css3-values/#lengths) est maintenant supportée. Voir [bug 472195](https://bugzilla.mozilla.org/show_bug.cgi?id=472195).
- [`image-rendering`](/fr/docs/Web/CSS/image-rendering) est gérée pour les images, images de fond, vidéos et canvas. Voir [bug 423756](https://bugzilla.mozilla.org/show_bug.cgi?id=423756).
- [`text-align`](/fr/docs/Web/CSS/text-align):end est maintenant supportée. Voir [bug 299837](https://bugzilla.mozilla.org/show_bug.cgi?id=299837).
- Les changements DOM sur des éléments utilisant les types de [`display`](/fr/docs/Web/CSS/display) table fonctionnent beaucoup mieux.
- Ajout de [`:-moz-locale-dir(ltr)`](</fr/docs/Web/CSS/:-moz-locale-dir(ltr)>) et [`:-moz-locale-dir(rtl)`](</fr/docs/Web/CSS/:-moz-locale-dir(rtl)>) pour faciliter la personnalisation de mise en page selon l'orientation de l'interface dépendant de la locale (gauche à droite ou droite à gauche). Voir [bug 478416](https://bugzilla.mozilla.org/show_bug.cgi?id=478416).
- Ajout de la pseudo-classe [`:indeterminate`](/fr/docs/Web/CSS/:indeterminate) correspondant aux éléments [`<input>`](/fr/docs/Web/HTML/Element/input) `checkbox` dont l'attribut `indeterminate` est `true`.
- Les plugins fenêtrés ne sont plus affichés par la propriété CSS tranforms, car ils ne peuvent pas être correctement tranformés par le compositeur.

### HTML

- [Utilisation de fichiers à partir d'applications Web](/fr/docs/Using_files_from_web_applications)
  - : Le support de la nouvelle API de fichier HTML5 a été ajouté à Gecko, ce qui permet à des applications Web d'accéder à des fichiers locaux sélectionnés par l'utilisateur.
- Support des affiches pour les vidéos HTML5
  - : L'attribut `poster` est pris en charge pour l'élément [`<video>`](/fr/docs/Web/HTML/Element/video), ce qui permet au contenu de choisir une image à afficher tant que la vidéo n'a pas commencée.
- Support de la propriété `indeterminate` pour les cases à cocher et boutons radio
  - : Les éléments HTML [`<input>`](/fr/docs/Web/HTML/Element/input) des types `checkbox` et `radio` supportent désormais la propriété indeterminate qui permet d'avoir un troisième état « indéterminé ».
- Contrôle du lissage d'images dans canvas
  - : La nouvelle propriété [`mozImageSmoothingEnabled`](/fr/docs/Canvas_tutorial/Using_images#Controlling_image_scaling_behavior) peut être utilisée pour activer et désactiver le lissage lors d'un redimensionnement dans les éléments [`<canvas>`](/fr/docs/Web/HTML/Element/canvas).
- Exécution d'un script asynchrone
  - : En définissant l'attribut `async` sur un élément [`<script>`](/fr/docs/Web/HTML/Element/script), le `script` ne bloquera pas le chargement ou l'affichage du reste de la page. En revanche, le `script` s'exécutera dès qu'il sera téléchargé.

### JavaScript

Gecko 1.9.2 introduit JavaScript 1.8.2, qui ajoute un certain nombre de fonctionnalités de langage de la norme ECMAScript 5 :

- `Date.parse()` peut analyser des dates ISO 8601 au format YYYY-MM-DD (année-mois-jour).
- La propriété `prototype` d'instances de fonctions n'est plus énumérable.

### DOM

- Terminaison des web workers par eux-mêmes
  - : Les web [workers](/fr/docs/DOM/Using_web_workers) prennent désormais en charge la méthode [`nsIWorkerScope.close()`](</fr/docs/XPCOM_Interface_Reference/nsIWorkerScope#close()>), qui leur permet de se terminer d'eux-mêmes.
- Glisser-déposer de fichiers
  - : L'objet [`DataTransfer`](/fr/docs/DragDrop/DataTransfer) fournit à présent aux observateurs de glisser-déposer une liste des fichiers glissés.
- Vérification pour voir si un élément correspond à un sélecteur CSS
  - : La nouvelle méthode `element.mozMatchesSelector` permet de déterminer si un élément correspond bien à un sélecteur CSS. Voir [bug 518003](https://bugzilla.mozilla.org/show_bug.cgi?id=518003).
- [Dispositf de détection de l'orientation](/fr/docs/Detecting_device_orientation)
  - : Le contenu peut à présent détecter l'orientation de l'appareil s'il dispose d'un accéléromètre, à l'aide de l'évènement `MozOrientation`. Firefox 3.6 gère notamment l'accéléromètre des ordinateurs portables Mac.
- [Détection des changements de largeur et hauteur d'un document](/fr/docs/Mozilla_event_reference/MozScrolledAreaChanged)
  - : Le nouvel évènement `MozScrollAreaChanged` est déclenché lorsqu'une des propriétés `scrollWidth` ou `scrollHeight` d'un document change.

<!---->

- La méthode `getBoxObjectFor()` a été **supprimée**, car elle n'était pas standard et exposait d'autres fonctionnalités non standard. Voir [bug 340571](https://bugzilla.mozilla.org/show_bug.cgi?id=340571). La bibliothèque [MooTools](http://mootools.net/) qui utilisait cet appel pour la détection de Gecko est affectée ; cela a été corrigé dans la dernière version de MooTools, assurez-vous donc d'être à jour.
- Les nouvelles propriétés [`mozInnerScreenX`](/fr/docs/DOM/window.mozInnerScreenX) et [`mozInnerScreenY`](/fr/docs/DOM/window.mozInnerScreenY) sur les objets DOM window on été ajoutés ; ils renvoient les coordonnées à l'écran du coin supérieur gauche de la zone de visualisation de la fenêtre.
- La nouvelle propriété `mozScreenPixelsPerCSSPixel` de [`nsIDOMWindowUtils`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMWindowUtils) uniquement accessible depuis le chrome, fournit un facteur de conversion entre les pixels CSS et les pixels à l'écran ; cette valeur peut varier selon le niveau de zoom du contenu.
- Lorsque l'identifiant de fragment de document de l'URL de la page change (la partie après le caractère « # » (dièse)), un nouvel évènement `hashchange` est envoyé à la page. Consultez [window.onhashchange](/fr/docs/DOM/window.onhashchange) pour plus d'informations. [bug 385434](https://bugzilla.mozilla.org/show_bug.cgi?id=385434)
- L'attribut [`document.readyState`](/fr/docs/DOM/document.readyState) est désormais supporté. [bug 347174](https://bugzilla.mozilla.org/show_bug.cgi?id=347174 'FIXED: Implement document.readystate == "complete"')
- Gestion de l'attribut HTML5 [`element.classList`](/fr/docs/DOM/element.classList) pour permettre une gestion plus aisée de l'attribut class. [bug 501257](https://bugzilla.mozilla.org/show_bug.cgi?id=501257)
- `localName` et `namespaceURI` dans les documents HTML se comportent à présent comme dans les documents XHTML : `localName` est renvoyé en minuscules et la propriété `namespaceURI` pour les éléments HTML est `"http://www.w3.org/1999/xhtml"`.
- [`element.getElementsByTagNameNS`](/fr/docs/DOM/element.getElementsByTagNameNS) son argument n'est plus en minuscules, alors en lettres majuscules ASCII dans l'argument établit des chaînes contre des éléments HTML échouent. Cela est vrai aussi pour [`document.getElementsByTagNameNS`](/fr/docs/DOM/document.getElementsByTagNameNS).
- Ajout de la gestion des adresses dans la géolocalisation via l'interface [`nsIDOMGeoPositionAddress`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMGeoPositionAddress) et d'un nouveau champ dans [`nsIDOMGeoPosition`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDOMGeoPosition).
- La fonction [`window.getComputedStyle`](/fr/docs/Web/API/Window/getComputedStyle) renvoie à présent les guillemets autour des valeurs url().

### XPath

- Gestion de la méthode XPath choose()
  - : La méthode [`choose()`](/fr/docs/XPath/Functions/choose) est à présent gérée par notre implémentation de [XPath](/fr/docs/XPath).

## Pour les développeurs XUL et les développeurs d'extensions

Si vous êtes un développeur d'extensions, vous devriez commencer par lire [Updating extensions for Firefox 3.6](/fr/docs/Updating_extensions_for_Firefox_3.6), qui offre une vue d'ensemble sur les changements qui pourraient affecter vos extensions. Les développeurs de Plug-in devraient lire [Updating plug-ins for Firefox 3.6](/fr/docs/Updating_plug-ins_for_Firefox_3.6).

### Nouvelles fonctionnalités

- [Détection de l'orientation de l'appareil](/fr/docs/Detecting_device_orientation)
  - : Le contenu peut maintenant détecter l'orientation de l'appareil si il possède un accéléromètre, en utilisant l'évènement [`MozOrientation`](/fr/docs/DOM/MozOrientation). Firefox 3.6 supporte l'accéléromètre des ordinateurs portables Mac.
- [Surveillance de l'activité HTTP](/fr/docs/Monitoring_HTTP_activity)
  - : Vous pouvez maintenant surveiller en temps réel les données HTTP demandées et reçues.
- Intégration à la Barre des tâches de Windows
  - : Il est maintenant possible de personnaliser l'apparence des fenêtres dans la barre des tâches sous Windows 7 ou plus récent. _C'est désactivé par défaut dans Firefox 3.6._

### Places

- Les requêtes peuvent maintenant utiliser l'attribut `redirectsMode` de l'interface [`nsINavHistoryQueryOptions`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsINavHistoryQueryOptions) pour spécifier si il faut inclure ou non les pages redirigées dans les résultats.
- Ajout de la nouvelle méthode [`nsIFaviconService.expireAllFavicons()`](</fr/docs/XPCOM_Interface_Reference/nsIFaviconService#expireAllFavicons()>) à l'interface [`nsIFaviconService`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFaviconService).

### Storage

- [Tri des données locales avec l'API Storage](</fr/docs/Storage#Collation_(sorting)>)
  - : Gecko 1.9.2 ajoute plusieurs nouvelles méthodes pour offrir une collecte (tri) optimisée des résulats en utilisant les techniques de localisation.
- [Énumération des propriétés d'une requête](/fr/docs/mozIStorageStatementParams#Enumeration_of_properties)
  - : Vous pouvez maintenant utiliser [`for...in`](/fr/docs/Guide_JavaScript_1.5/Instructions_de_manipulation_d%27objets#L%27instruction_for...in) pour énumérer toutes les propriétés d'une déclaration.
- mozIStorageStatement's getParameterIndex a changé de comportement entre Firefox 3.5 et 3.6.
  - : Voir [bug 528166](https://bugzilla.mozilla.org/show_bug.cgi?id=528166) pour plus de détails.
- Liaison asynchrone de plusieurs ensembles de paramètres pour exécution d'une requête.
  - : Voir [bug 490085](https://bugzilla.mozilla.org/show_bug.cgi?id=490085) pour plus de détails.

### Préférences

- L'interface [`nsIContentPrefService`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIContentPrefService) a deux nouvelles méthodes : [`nsIContentPrefService.getPrefsByName()`](</fr/docs/XPCOM_Interface_Reference/nsIContentPrefService#getPrefsByName()>) et [`nsIContentPrefService.removePrefsByName()`](</fr/docs/XPCOM_Interface_Reference/nsIContentPrefService#removePrefsByName()>).

### Thèmes

Voir [Updating themes for Firefox 3.6](/fr/docs/Updating_themes_for_Firefox_3.6) pour la liste des changements liés aux thèmes.

- [Thèmes légers](/fr/docs/Themes/Lightweight_themes)
  - : Firefox 3.6 supporte les thèmes légers ; ce sont des thèmes faciles à créer et qui sont simplement appliqué sur le fond de la fenêtre du navigateur, en haut (barre d'adresses et boutons) et en bas (barre d'état). Il s'agit d'une intégration de l'architecture de thèmes [Personas](http://www.getpersonas.com/) dans Firefox.

### Divers

- Firefox n'a plus la charge des modules tiers installé dans son répertoire des modules internes. Cela contribue à assurer la stabilité en empêchant des composants tiers buggés d'être exécuté. Les développeurs qui installent des composants de cette façon doivent [refaire leurs modules sous forme de paquets XPI](/fr/docs/Migrating_raw_components_to_add-ons) afin qu'ils puissent être installés normalement.
- `contents.rdf` n'est plus pris en charge pour l'enregistrement chrome dans les extensions. Vous devez maintenant utiliser le fichier [`chrome.manifest`](/fr/docs/Install_Manifests). Voir [bug 492008](https://bugzilla.mozilla.org/show_bug.cgi?id=492008).
- La barre de menu peut être cachée automatiquement. Voir [bug 477256](https://bugzilla.mozilla.org/show_bug.cgi?id=477256).
- Ajout du support de l'attribut `container-live-role` aux objets. Voir [bug 391829](https://bugzilla.mozilla.org/show_bug.cgi?id=391829).
- Suppression de la liaison `tabs-closebutton`. Voir [bug 500971](https://bugzilla.mozilla.org/show_bug.cgi?id=500971).
- Ajout du support de `nsISound` pour jouer des sons en fonction des évènements qui ont eu lieu. Voir [bug 502799](https://bugzilla.mozilla.org/show_bug.cgi?id=502799).
- La syntaxe pour les méthodes de [`nsITreeView`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsITreeView) : [`nsITreeView.canDrop()`](</fr/docs/XPCOM_Interface_Reference/nsITreeView#canDrop()>) et [`nsITreeView.drop()`](</fr/docs/XPCOM_Interface_Reference/nsITreeView#drop()>), a changé pour supporter la nouvelle API glisser & déposer introduite dans Gecko 1.9. Voir [bug 455590](https://bugzilla.mozilla.org/show_bug.cgi?id=455590).
- Ajout du support pour aligner le curseur de la souris sur le bouton par défaut de la boîte de dialogue ou l'assistant de Windows, voir [bug 76053](https://bugzilla.mozilla.org/show_bug.cgi?id=76053 'FIXED: Windows mouse integration: "Snap to default button in dialog boxes"'). Cela est traitée automatiquement par la boîte de dialogue et l'assistant. Mais si une application XUL crée une fenêtre en utilisant l'élément `window` et qu'il a un bouton par défaut, il doit appeler [`nsIDOMChromeWindow.notifyDefaultButtonLoaded()`](</fr/docs/XPCOM_Interface_Reference/nsIDOMChromeWindow#notifyDefaultButtonLoaded()>) dans le gestionnaire d'événements onload de la fenêtre.
- Pour l'interface [`nsILocalFileMac`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsILocalFileMac), deux méthodes ont étés retirées : `setFileTypeAndCreatorFromMIMEType()` and `setFileTypeAndCreatorFromExtension()`.
- Le nouveau module de code [`NetUtils.jsm`](/fr/docs/JavaScript_code_modules/NetUtil.jsm) apporte une méthode facile à utiliser pour copier les données de manière asynchrone à partir d'un flux d'entrée vers un flux de sortie.
- Le nouveau module de code [`openLocationLastURL.jsm`](/fr/docs/JavaScript_code_modules/openLocationLastURL.jsm), facilite la lecture et la modification de la valeur de l'URL gardée en mémoire de la boîte de dialogue "Ouvrir le fichier", tout en prenant bien en compte le mode de navigation privée.
- Dans Windows, l'interface [`nsIScreen`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIScreen) reporte maintenant 24 bits par pixel pour la profondeur des couleurs lorsque le pilote graphique demande 32 bits, plus précisement 24 représente le nombre réel de pixels de couleurs en utilisation.
- Les barres de menu peuvent maintenant être cachées sous Windows, en utilisant le nouvel attribut [`autohide`](/fr/docs/Mozilla/Tech/XUL/Attributs/autohide) sur l'élément XUL [`toolbar`](/fr/docs/Mozilla/Tech/XUL/toolbar).
- Les méthodes [`loadOneTab`](/fr/docs/Mozilla/Tech/XUL/Méthodes/loadOneTab) et [`addTab`](/fr/docs/Mozilla/Tech/XUL/Méthodes/addTab) acceptent maintenant le nouveau paramètre `relatedToCurrent` et, en outre, permet à des paramètres d'être définit par un nom, puisque presque tous les paramètres sont optionnels.
- La propriété "[hidden](/fr/docs/Install_Manifests#hidden)" n'est plus supportée dans les manisfestes d'installation ; il n'est plus possible d'empêcher l'utilisateur de voir des modules complémentaires dans la fenêtre du gestionnaire de module.
- Le composant `@mozilla.org/webshell;1` n'existe plus ; vous devez utilisez `@mozilla.org/docshell;1` à la place.
- Vous pouvez désormais enregistrer avec la catégorie update-timer pour programmer la synchronisation des événements sans avoir à instancier l'objet que le minuteur va éventuellement remettre, il sera plutôt instancié lorsque c'est nécessaire. Voir [`nsIUpdateTimerManager.registerTimer()`](</fr/docs/XPCOM_Interface_Reference/nsIUpdateTimerManager#registerTimer()>) pour plus de détails.
- La fonction [`NPN_GetValue`](/fr/docs/NPN_GetValue) ne donne plus accès à travers XPCOM aux valeurs de variables `NPNVserviceManager`, `NPNVDOMelement`, et `NPNVDOMWindow`. Cela fait partie des travaux pour que les plugins s'exécutent dans des processus séparés dans une future version de Gecko.
- Les plugins ne sont plus scriptables à travers l'interface XPCOM (IDL), [NPRuntime](/fr/docs/Gecko_Plugin_API_Reference/Scripting_plugins) est l'API à utiliser pour coder des plugins et [`NPP_GetValue()`](/fr/docs/NPP_GetValue) n'est plus appelé avec la valeur `NPPVpluginScriptableInstance` ou `NPPVpluginScriptableIID`. Cela fait partie des travaux pour que les plugins s'exécutent dans des processus séparés dans une future version de Gecko.

## Pours les développeurs de Firefox/Gecko

Certains changements sont vraiment intéressant si vous travaillez sur le fonctionnement interne de Firefox.

### Interfaces fusionnées

Les interfaces suivantes ont été fusionnées :

- `nsIPluginTagInfo2` a été fusionnée avec `nsIPluginTagInfo`.
- `nsIPluginInstanceInternal`, `nsIPPluginInstancePeer`, `nsIPluginInstancePeer1`, `nsIPluginInstancePeer2` et `nsIPluginInstancePeer3` ont toutes été fusionnées avec `nsIPluginInstance`.
- `nsIWindowlessPlugInstPeer` a été fusionnée avec `nsIPluginInstance`.
- `nsIPluginManager` et `nsIPluginManager2` ont été fusionnées avec `nsIPluginHost`

### Interfaces supprimées

Les interfaces suivantes ont été entièrement supprimées car elles étaient inutilisées, non implémentées ou obsolètes :

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

Les interfaces suivantes ont été déplacées de leurs précédents fichiers IDL vers leurs nouveaux :

- `nsIDOMNSCSS2Properties` est maintenant située dans son propre fichier IDL (`dom/interfaces/css/nsIDOMCSS2Properties.idl`).
- [`nsIUpdateTimerManager`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIUpdateTimerManager) est maintenant située dans son propre fichier IDL.

Un grand nombre d'interfaces ont été déplacées. Voir [Interfaces moved in Firefox 3.6](/fr/docs/Interfaces_moved_in_Firefox_3.6) pour la liste complète.

### Autres changements dans les interfaces

Les modifications suivantes ont été faites :

- L'interface `nsIPlugin` hérite maintenant de [`nsISupports`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISupports) à la place de [`nsIFactory`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFactory).
- L'interface `nsIPluginHost` hérite maintenant de [`nsISupports`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISupports) à la place de [`nsIFactory`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIFactory).
- L'interface `nsIFrame` hérite maintenant de `nsQueryFrame` à la place de [`nsISupports`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsISupports).
- La méthode `getPaletteInfo()` de [`nsIDeviceContext`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIDeviceContext) a été supprimée, car elle n'a jamais été appliquée.
- La méthode `reportPendingException()` de [`nsIScriptContext`](/fr/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIScriptContext) a été supprimée, car elle n'été plus utilisée.

### Changements dans l'accessibilitée du code

- L'[évènement d'accessibilité](/fr/docs/XPCOM_Interface_Reference/nsIAccessibleEvent) `EVENT_REORDER` est maintenant envoyé quand les enfants de `frames` et d'`iframes` changent, ainsi que lors de la modification du document principal des enfants. Voir [bug 420845](https://bugzilla.mozilla.org/show_bug.cgi?id=420845).
- Désormais toute sélection en cours est correctement supprimée avant de sélectionner une ligne spécifique.

## Voir également

- [Firefox 3.5 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/3.5)
- [Firefox 3 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/3)
- [Firefox 2 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/2)
- [Firefox 1.5 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/1.5)
