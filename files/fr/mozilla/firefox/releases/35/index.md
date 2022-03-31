---
title: Firefox 35 pour les développeurs
slug: Mozilla/Firefox/Releases/35
tags:
  - Firefox
  - Guide
  - Mozilla
translation_of: Mozilla/Firefox/Releases/35
original_slug: Mozilla/Firefox/Versions/35
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

## Changement concernant les développeurs

### Outils de développement

Liens:

- [See ::before and ::after pseudo elements in the Page Inspector](/fr/docs/Tools/Page_Inspector#.3A.3Abefore_and_.3A.3Aafter)
- [CSS source maps are now enabled by default](/fr/docs/Tools/Style_Editor#Source_map_support)
- ["Show DOM Properties" from the Page Inspector](/fr/docs/Tools/Page_Inspector#Element_popup_menu_2)

[Tous les bugs des outils de développement résolus entre Firefox 34 et Firefox 35](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-10-13&chfield=resolution&query_format=advanced&chfieldfrom=2014-09-02&chfieldvalue=FIXED&component=Developer%20Tools&component=Developer%20Tools%3A%203D%20View&component=Developer%20Tools%3A%20Canvas%20Debugger&component=Developer%20Tools%3A%20Console&component=Developer%20Tools%3A%20Debugger&component=Developer%20Tools%3A%20Framework&component=Developer%20Tools%3A%20Graphic%20Commandline%20and%20Toolbar&component=Developer%20Tools%3A%20Inspector&component=Developer%20Tools%3A%20Memory&component=Developer%20Tools%3A%20Netmonitor&component=Developer%20Tools%3A%20Object%20Inspector&component=Developer%20Tools%3A%20Profiler&component=Developer%20Tools%3A%20Responsive%20Mode&component=Developer%20Tools%3A%20Scratchpad&component=Developer%20Tools%3A%20Source%20Editor&component=Developer%20Tools%3A%20Storage%20Inspector&component=Developer%20Tools%3A%20Style%20Editor&component=Developer%20Tools%3A%20Timeline&component=Developer%20Tools%3A%20User%20Stories&component=Developer%20Tools%3A%20Web%20Audio%20Editor&component=Developer%20Tools%3A%20WebGL%20Shader%20Editor&component=Developer%20Tools%3A%20WebIDE&component=Simulator&product=Firefox&product=Firefox%20OS&list_id=11184176).

### CSS

- La proprieté [`mask-type`](/fr/docs/Web/CSS/mask-type) a été activée par défaut ([bug 1058519](https://bugzilla.mozilla.org/show_bug.cgi?id=1058519)).
- La propieté [`filter`](/fr/docs/Web/CSS/filter) est maintenant activée par défaut ([bug 1057180](https://bugzilla.mozilla.org/show_bug.cgi?id=1057180)).
- La fonction [`@font-face`](/fr/docs/Web/CSS/@font-face) est maintenant compatible avec les polices de type WOFF2 ([bug 1064737](https://bugzilla.mozilla.org/show_bug.cgi?id=1064737)).
- La notation fonctionnelle [`symbol()`](</fr/docs/Web/CSS/symbol()>) est maintenant supportée([bug 966168](https://bugzilla.mozilla.org/show_bug.cgi?id=966168)).
- L'API CSS Font Loading a été implémentée ([bug 1028497](https://bugzilla.mozilla.org/show_bug.cgi?id=1028497)).
- En utilisant [`-moz-appearance`](/fr/docs/Web/CSS/appearance) avec la valeur `none` sur un menu de type `select`, le bouton déroulant est maintenant supprimé ([bug 649849](https://bugzilla.mozilla.org/show_bug.cgi?id=649849)).
- La propriété accessor `element.style["css-property-name"]` a maintenant été ajoutée pour correspondre aux autres navigateurs ([bug 958887](https://bugzilla.mozilla.org/show_bug.cgi?id=958887 'FIXED: Add support for element.style["css-property-name"] non-standard extension')).

### HTML

- Les obsolètes `et non conformes bottommargin`, `leftmargin`, `rightmargin` and `topmargin` attributs de l'élement `<body> ` ont été activés en mode non-quirks ([bug 95530](https://bugzilla.mozilla.org/show_bug.cgi?id=95530)).
- Les [imports HTML](/fr/docs/Web/Web_Components/HTML_Imports) sont maintenant supportés ([bug 877072](https://bugzilla.mozilla.org/show_bug.cgi?id=877072)).

### JavaScript

- La "[temporal dead zone](/fr/docs/Web/JavaScript/Reference/Statements/let#Temporal_dead_zone_and_errors_with_let)" pour les déclarations [`let`](/fr/docs/Web/JavaScript/Reference/Statements/let) a été implementée.  En conformité avec les sémantiques `let `ES6, les situations suivantes renvoyent des erreurs. Voir aussi cet[ annoncement de newsgroup ](https://groups.google.com/forum/#!topic/mozilla.dev.platform/tezdW299Zds)and [bug 1001090](https://bugzilla.mozilla.org/show_bug.cgi?id=1001090 'FIXED: Implement ES6 "temporal dead zone" for let').

  - Redéclarer des variables existantes ou arguments utilisant `let` sans la même portée dans le corps de fonctions est maintenant une erreur de syntaxe.
  - Utiliser une variable déclarée en utilisant `let` dans le corps de fonctions avant la déclaration de cette variable est maintenant une erreur d'exécution.

- ES6 [`Symbols`](/fr/docs/Web/JavaScript/Reference/Symbols) (disponible uniquement dans Nightly) a été mis à jour pour être conforme avec les récents changements de spécification :

  - `String(Symbol("1"))` ne renvoie maintenant une [`TypeError`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/TypeError); au lieu d'un string (`"Symbol(1)"`) ([bug 1058396](https://bugzilla.mozilla.org/show_bug.cgi?id=1058396)).
  - Les divers [constructeurs _TypedArray_](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#TypedArray_objects) ont maintenant comme `[[Prototype]]` une simple fonction, notée `%TypedArray%`  en ES6 (mais pas directement exposé).  Chaque prototype de tableau typé hérite maintenant de `%TypedArray%.prototype`.  (`%TypedArray%` et `%TypedArray%.prototype` hérite eux-mêmes de [`Function.prototype`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/prototype) et [`Object.prototype`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype), respectivement, ainsi ce constructeur et ces instances de tableau typé ont aussi les propriétés de ces objets.) Les propriétés des fonctions de tableau typés se trouvent maintenant sur `%TypedArray%.prototype` et fonctionnent sur tous les tableaux typés. Voir [_TypedArray_](/fr/docs/Web/JavaScript/Reference/Global_Objects/TypedArray#Description) et [bug 896116](https://bugzilla.mozilla.org/show_bug.cgi?id=896116) pour plus d'information.

- Les semantiques ES6 pour les [mutations de prototype utilisant les _initialisateurs d'objet_](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer#Prototype_mutation) ont été implémentées ([bug 1061853](https://bugzilla.mozilla.org/show_bug.cgi?id=1061853)).

  - Maintenant un seul membre noté  `__proto__:value` peut changer `le [[Prototype]]` dans la syntaxe de l'initialisateur d'objet.
  - Les membres de méthode comme `__proto__() {}` ne réecrivent pas le `[[Prototype]]`.

### Interfaces/APIs/DOM

- L'interface [`NavigatorLanguage`](/fr/docs/Web/API/NavigatorLanguage) est maintenant disponible aux développeurs sur [`WorkerNavigator`](/fr/docs/Web/API/WorkerNavigator) ([bug 925849](https://bugzilla.mozilla.org/show_bug.cgi?id=925849)).
- La méthode [`Element.closest`](/fr/docs/Web/API/Element/closest) retourne l'ancêtre le plus proche de l'élément utilisé ([bug 1055533](https://bugzilla.mozilla.org/show_bug.cgi?id=1055533)).
- Appui expérimental pour la propriété [`CanvasRenderingContext2D.filter`](/fr/docs/Web/API/CanvasRenderingContext2D/filter) a été ajouté sous le nom `canvas.filters.enabled` ([bug 927892](https://bugzilla.mozilla.org/show_bug.cgi?id=927892)).
- Our experimental implementation of Web Animations progresses with the landing of the [`Animation.target`](/fr/docs/Web/API/Animation/target) property. This always is behind the dom.animations-api.core.enabled pref, off by default ([bug 1067701](https://bugzilla.mozilla.org/show_bug.cgi?id=1067701)).
- The [`hasAttributes()`](/fr/docs/Web/API/Element/hasAttributes) method has been moved from [`Node`](/fr/docs/Web/API/Node) to [`Element`](/fr/docs/Web/API/Element) as required by the spec ([`1055773`](/fr/docs/Web/API/1055773)).
- [Websockets](/fr/docs/WebSockets) can now be used in [Workers](/fr/docs/Web/Guide/Performance/Using_web_workers) ([bug 504553](https://bugzilla.mozilla.org/show_bug.cgi?id=504553)).
- The `crossOrigin` reflected attribute of [`HTMLImageElement`](/fr/docs/Web/API/HTMLImageElement), [`HTMLLinkElement`](/fr/docs/Web/API/HTMLLinkElement), [`HTMLMediaElement`](/fr/docs/Web/API/HTMLMediaElement), [`HTMLScriptElement`](/fr/docs/Web/API/HTMLScriptElement), and [`SVGScriptElement`](/fr/docs/Web/API/SVGScriptElement) only accepts valid values, and `""` isn't, `null` has to be used instead ([bug 880997](https://bugzilla.mozilla.org/show_bug.cgi?id=880997)).
- The Resource Timing API has been activated by default ([bug 1002855](https://bugzilla.mozilla.org/show_bug.cgi?id=1002855)).
- To match the spec, the first argument of [`Selection.containsNode()`](/fr/docs/Web/API/Selection/containsNode) cannot be `null` anymore ([bug 1068058](https://bugzilla.mozilla.org/show_bug.cgi?id=1068058)).
- The new [`ImageCapture`](/fr/docs/Web/API/ImageCapture) API has been implemented: [`ImageCapture.takePhoto()`](/fr/docs/Web/API/ImageCapture/takePhoto) is available ([bug 916643](https://bugzilla.mozilla.org/show_bug.cgi?id=916643)).
- Non-HTTP [`XHR`](/fr/docs/Web/API/XMLHttpRequest) request now returns `200` in case of success (instead of the erroneous `0`) ([bug 716491](https://bugzilla.mozilla.org/show_bug.cgi?id=716491)).
- The internal, non-standard, [`File.mozFullPath`](/fr/docs/Web/API/File/mozFullPath) property is no more visible from content ([bug 1048293](https://bugzilla.mozilla.org/show_bug.cgi?id=1048293)).
- The constructor of [`File`](/fr/docs/Web/API/File) has been extended to match the specification ([bug 10457483](https://bugzilla.mozilla.org/show_bug.cgi?id=10457483)).
- An experimental implementation of [`AbortablePromise`](/fr/docs/Web/API/AbortablePromise), a promise that can be aborted by a different entity that the one who created it, has been added. It is prefixed with `Moz` and controlled by the `dom.abortablepromise.enabled `property, defaulting to `false` ([bug 1035060](https://bugzilla.mozilla.org/show_bug.cgi?id=1035060)).
- La propriété non standardisée [`Navigator.mozIsLocallyAvailable`](/fr/docs/Web/API/Navigator/mozIsLocallyAvailable) a été supprimée ([bug 1066826](https://bugzilla.mozilla.org/show_bug.cgi?id=1066826)).

###  MathML

- La fonction  `dtls` OpenType (via les CSS [`font-feature-settings`](/fr/docs/Web/CSS/font-feature-settings) sur la feuille de styles par défaut) est maintenant appliquée automatiquement aux éléments MathML lors du positionnement des scripts au-dessus (e.g. dotless i with mathematical hat).

### SVG

_Aucun changement._

### Audio/Video

_Aucun changement._

## Réseau & Sécurité

- L'entête HTTP/2 `alt-svc` est maintenant supportée ([bug 1003448](https://bugzilla.mozilla.org/show_bug.cgi?id=1003448)).
- L'extension [Public Key Pinning](/fr/docs/Web/Security/Public_Key_Pinning) pour HTTP (HPKP) a été implementée ([bug 787133](https://bugzilla.mozilla.org/show_bug.cgi?id=787133)).

## Changements pour les modules et les développeurs Mozilla

### XUL & Modules

- La méthode privée `_getTabForBrowser()` sur l'élement [`tabbrowser`](/fr/docs/Mozilla/Tech/XUL/tabbrowser) a été remplacée. À la place, nous avons ajouté une nouvelle méthode publique apellée [`getTabForBrowser`](/fr/docs/Mozilla/Tech/XUL/Méthodes/getTabForBrowser). Elle retourne assez prévisiblement l'élément [`tab`](/fr/docs/Mozilla/Tech/XUL/tab) qui contient le spécifique [`browser`](/fr/docs/Mozilla/Tech/XUL/browser).
- `Components.utils.now()`, correspondant à [`Performance.now()`](/fr/docs/Web/API/Performance/now) a été implémenté pour les codes Chrome sans fenêtre ouverte ([bug 969490](https://bugzilla.mozilla.org/show_bug.cgi?id=969490)).

### Module SDK

#### Titres

- Ajout de [clés d'accès pour le menu contextuel](/fr/Add-ons/SDK/Tutorials/Add_a_Context_Menu_Item#Adding_an_access_key).
- Suppression de `isPrivateBrowsing` de [`BrowserWindow`](/fr/Add-ons/SDK/High-Level_APIs/windows#BrowserWindow).

#### Détails

[Commits de GitHub effectués entre Firefox 34 et Firefox 35](https://github.com/mozilla/addon-sdk/compare/firefox34...firefox35). Ceci ne comprendra pas les évolutions après la sortie officielle.

[Bugs corrigés entre Firefox 34 et Firefox 35](https://bugzilla.mozilla.org/buglist.cgi?resolution=FIXED&chfieldto=2014-10-13&chfield=resolution&query_format=advanced&chfieldfrom=2014-09-02&chfieldvalue=FIXED&bug_status=RESOLVED&bug_status=VERIFIED&bug_status=CLOSED&product=Add-on%20SDK&list_id=11562840). Ceci ne comprendra pas les évolutions après la sortie officielle.

## Voir aussi

- [Compatibilité web pour Firefox 35](/fr/docs/Mozilla/Firefox/Releases/35/Site_Compatibility)

## Anciennes versions

- [Firefox 34 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/34)
- [Firefox 33 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/33)
- [Firefox 32 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/32)
- [Firefox 31 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/31)
- [Firefox 30 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/30)
- [Firefox 29 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/29)
- [Firefox 28 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/28)
- [Firefox 27 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/27)
- [Firefox 26 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/26)
- [Firefox 25 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/25)
- [Firefox 24 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/24)
- [Firefox 23 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/23)
- [Firefox 22 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/22)
- [Firefox 21 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/21)
- [Firefox 20 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/20)
- [Firefox 19 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/19)
- [Firefox 18 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/18)
- [Firefox 17 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/17)
- [Firefox 16 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/16)
- [Firefox 15 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/15)
- [Firefox 14 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/14)
- [Firefox 13 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/13)
- [Firefox 12 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/12)
- [Firefox 11 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/11)
- [Firefox 10 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/10)
- [Firefox 9 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/9)
- [Firefox 8 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/8)
- [Firefox 7 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/7)
- [Firefox 6 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/6)
- [Firefox 5 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/5)
- [Firefox 4 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/4)
- [Firefox 3.6 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/3.6)
- [Firefox 3.5 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/3.5)
- [Firefox 3 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/3)
- [Firefox 2 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/2)
- [Firefox 1.5 pour les développeurs](/fr/docs/Mozilla/Firefox/Versions/1.5)
