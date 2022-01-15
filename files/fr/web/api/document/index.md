---
title: document
slug: Web/API/Document
tags:
  - API
  - DOM
  - Document
  - Interface
  - Reference
translation_of: Web/API/Document
---
{{ApiRef}}

L'interface **`Document`** représente n'importe quelle page Web chargée dans le navigateur et sert de point d'entrée dans le contenu de la page Web, qui est l'arborescence DOM. L'arborescence DOM inclut des éléments tels que {{HTMLElement ("body")}} _(corps)_ et {{HTMLElement ("table")}} _(tableau)_, parmi beaucoup d'autres. Il fournit des fonctionnalités globales au document, comme le moyen d'obtenir l'URL de la page et de créer de nouveaux éléments dans le document.

{{inheritanceDiagram}}

L'interface Document décrit les propriétés et méthodes communes à tout type de document. En fonction du type de document (HTML, XML, SVG, ...), une API plus grande est disponible : les documents HTML, servis avec le type `text/html`, implémentent également l'interface {{domxref ("HTMLDocument")}}, alors que les documents XML et SVG implémentent l'interface {{domxref ("XMLDocument")}}.

## Constructeur

- {{domxref("Document.Document","Document()")}}{{non-standard_inline}}
  - : crée un nouvel objet `Document` .

## Propriétés

_Cette interface hérite aussi des interfaces {{domxref("Node")}} et {{domxref("EventTarget")}} ._

- {{domxref("Document.all")}} {{Deprecated_inline}} {{non-standard_inline}}
  - : fournit un accès à tous les éléments du document. C'est une interface héritée non standard qui ne doit pas être utilisée.

<!---->

- {{domxref("Document.async")}} {{Deprecated_inline}}
  - : utilisé avec {{domxref("document.load")}} pour indiquer une requête asynchrone.

<!---->

- {{domxref("Document.characterSet")}} {{readonlyinline}} {{Deprecated_inline}}
  - : renvoie le jeu de caractères utilisé par le document.

<!---->

- {{domxref("Document.compatMode")}} {{readonlyinline}} {{experimental_inline}}
  - : indique si le document est rendu en mode _Quirks_ ou _Strict_.

<!---->

- {{domxref("Document.contentType")}} {{readonlyinline}} {{experimental_inline}}
  - : Renvoie le type de contenu de l'en-tête MIME du document courant.

<!---->

- {{domxref("Document.doctype")}} {{readonlyinline}}
  - : Renvoie le DTD (Document Type Definition) du document courant.

<!---->

- {{domxref("Document.documentElement")}} {{readonlyinline}}
  - : Renvoie l'{{domxref("Element")}} qui est l'enfant direct du document. Pour les documents HTML, il s'agit normalement de l'élément {{HTMLElement("HTML")}}.
- {{domxref("Document.documentURI")}} {{readonlyinline}}
  - : retroune l'emplacement du document sous la forme d'une chaîne de caractères.
- {{domxref("Document.domConfig")}} {{Deprecated_inline}}
  - : devrait retourner un objet {{domxref("DOMConfiguration")}} .
- {{domxref("Document.fullscreen")}} {{obsolete_inline}}
  - : `true` _(vrai)_ quand le document est en {{domxref("Using_full-screen_mode","mode plein écran")}}.
- {{domxref("Document.hidden")}} {{readonlyinline}}
  - : ...
- {{domxref("Document.implementation")}} {{readonlyinline}}
  - : Renvoie l'implémentation DOM associée au document courant.
- {{domxref("Document.inputEncoding")}} {{readonlyinline}} {{Deprecated_inline}}
  - : alias de {{domxref("Document.characterSet")}}. Utilisez cette propriété à la place.
- {{domxref("Document.lastStyleSheetSet")}} {{readonlyinline}}
  - : retourne le nom de l'ensemble de feuilles de style qui a été activé en dernier. A la valeur `null` jusqu'à ce que la feuille de style soit modifiée en définissant la valeur de  {{domxref("document.selectedStyleSheetSet","selectedStyleSheetSet")}}.
- {{domxref("Document.mozSyntheticDocument")}} {{non-standard_inline}} {{gecko_minversion_inline("8.0")}}
  - : retourne un {{jsxref("Boolean")}} qui est `true` _(vrai)_ seulement si le document est synthétique, tel qu'une image autonome, une vidéo, un fichier audio ou similaire.
- {{domxref("Document.mozFullScreenElement")}} {{readonlyinline}} {{non-standard_inline}} {{gecko_minversion_inline("9.0")}}
  - : L'élément qui est actuellement affiché en mode plein écran pour ce document.
- {{domxref("Document.mozFullScreenEnabled")}} {{readonlyinline}} {{non-standard_inline}} {{gecko_minversion_inline("9.0")}}
  - : `true` _(vrai)_ si l'appel  {{domxref("Element.mozRequestFullscreen()")}}  est réussi dans le document courant.
- {{domxref("Document.pointerLockElement")}} {{readonlyinline}} {{experimental_inline}}
  - : renvoie l'ensemble d'éléments en tant que cible pour les événements de la souris lorsque le pointeur est verrouillé. `null` si le verrouillage est en attente, le pointeur est déverrouillé ou la cible se trouve dans un autre document.
- {{domxref("Document.preferredStyleSheetSet")}} {{readonlyinline}}
  - : renvoie la page de style préférée spécifiée par l'auteur de la page.
- {{domxref("Document.scrollingElement")}} {{experimental_inline}} {{readonlyinline}}
  - : retourne une référence à l'{{domxref("Element")}} qui fait défiler le document.
- {{domxref("Document.selectedStyleSheetSet")}}
  - : renvoie la feuille de style actuellement utilisée.
- {{domxref("Document.styleSheets")}} {{readonlyinline}}
  - : Renvoie une liste de tous les objets {{domxref("stylesheet")}} _(feuilles de styles)_ du document courant.
- {{domxref("Document.timeline")}} {{readonlyinline}}
  - : ...
- {{domxref("Document.undoManager")}} {{readonlyinline}} {{experimental_inline}}
  - : ...
- {{domxref("Document.visibilityState")}} {{readonlyinline}}
  - : renvoie une `string` _(chaîne de caractères)_ indiquant l'état de visibilité du document. Les valeurs possibles sont `visible` , `hidden (masqué)` , prerender _(pré-rendu)_ et `unloaded` (_déchargées_).
- {{domxref("Document.xmlEncoding")}} {{Deprecated_inline}}
  - : retourne le codage déterminé par une déclaration XML.
- {{domxref("Document.xmlStandalone")}} {{obsolete_inline("10.0")}}
  - : renvoie `true` si la déclaration XML précise que le document doit être autonome (par exemple, une partie externe de la DTD du contenu du document), sinon `false` _(faux)_.
- {{domxref("Document.xmlVersion")}} {{obsolete_inline("10.0")}}
  - : retourne le numéro de la version spécifié dans la déclaration XML ou `"1.0"` si la déclaration est absente.

L'interface Document est étendue avec l'interface {{domxref("ParentNode")}} :

{{page("/fr/docs/Web/API/ParentNode","Propriétés")}}

### Extensions du document HTML

L'interface Document, pour les documents HTML, hérite de l'interface *{{domxref("HTMLDocument")}}*  ou depuis HTML5, est étendue pour eux.

- {{domxref("Document.activeElement")}} {{readonlyinline}}
  - : Renvoie l'élément courant qui a la focus.
- {{domxref("Document.alinkColor")}} {{Deprecated_inline}}
  - : Renvoie ou définit la couleur des liens actifs du corps du document.
- {{domxref("Document.anchors")}}
  - : Renvoie une liste de toutes les ancres du document.
- {{domxref("Document.applets")}} {{Deprecated_inline}}
  - : Renvoie une liste ordonnée des "applets" du document.
- {{domxref("Document.bgColor")}} {{Deprecated_inline}}
  - : **bgColor** renvoie ou définit la couleur d'arrière-plan du document courant.

<!---->

- {{domxref("Document.body")}}
  - : **body** renvoie l'élément  {{HTMLElement("body")}} du document en cours.
- {{domxref("Document.cookie")}}
  - : Renvoie une liste des cookies du document, séparés par des points virgules, ou définit un cookie.

<!---->

- {{domxref("Document.defaultView")}} {{readonlyinline}}
  - : Renvoie une référence à l'objet window.
- {{domxref("Document.designMode")}}
  - : renvoie ou définit les capacités d'édition du document entier.
- {{domxref("Document.dir")}} {{readonlyinline}}
  - : Assigne / renvoie le sens du texte (rtl/ltr) _(de gauche à droite / de droite à gauche)_ du document.
- {{domxref("Document.domain")}}
  - : renvoie ou affecte le domaine de l'élément courant.
- {{domxref("Document.embeds")}} {{readonlyinline}}
  - : renvoie une liste des objets {{HTMLElement('embed')}} inclus dans le document courant.

<!---->

- {{domxref("Document.fgColor")}} {{Deprecated_inline}}
  - : renvoie ou définit la couleur du texte du document courant.
- {{domxref("Document.forms")}} {{readonlyinline}}
  - : **forms** renvoie une liste des éléments {{HTMLElement("form")}} du document courant
- {{domxref("Document.head")}} {{readonlyinline}}
  - : Renvoie l'élément {{HTMLElement("head")}} du document.
- {{domxref("Document.height")}} {{non-standard_inline}} {{obsolete_inline}}
  - : renvoie ou définit la hauteur du document courant.
- {{domxref("Document.images")}} {{readonlyinline}}
  - : renvoie une liste des images du document courant.
- {{domxref("Document.lastModified")}} {{readonlyinline}}
  - : Renvoie la date de dernière modification du document.
- {{domxref("Document.linkColor")}} {{Deprecated_inline}}
  - : Renvoie ou définit la couleur des liens du document.
- {{domxref("Document.links")}} {{readonlyinline}}
  - : Renvoie un tableau de tous les liens du document.
- {{domxref("Document.location")}} {{readonlyinline}}
  - : Renvoie l'URI (Uniform Ressource Identifier : _identifiant uniforme de ressource_) du document courant.
- {{domxref("Document.plugins")}} {{readonlyinline}}
  - : Renvoie une liste des plugins disponibles.
- {{domxref("Document.readyState")}} {{readonlyinline}}  {{gecko_minversion_inline("1.9.2")}}
  - : retourne l'état du chargement du document.
- {{domxref("Document.referrer")}} {{readonlyinline}}
  - : Renvoie l'URI de la page qui a amené à cette page.
- {{domxref("Document.scripts")}} {{readonlyinline}}
  - : renvoie tous les éléments {{HTMLElement("script")}}  sur le document.
- {{domxref("Document.title")}}
  - : Renvoie le titre du document courant.
- {{domxref("Document.URL")}}  {{readonlyInline}}
  - : Renvoie une chaîne de caractères contenant l'URL ("Uniform Resource Locator", _repère uniforme de ressource_) du document courant.

<!---->

- {{domxref("Document.vlinkColor")}} {{Deprecated_inline}}
  - : Renvoie ou définit la couleur des liens visités du document.
- {{domxref("Document.width")}} {{non-standard_inline}} {{obsolete_inline}}
  - : Renvoie la largeur du document courant.

### Gestionnaire d'évènements

- {{domxref("Document.onafterscriptexecute")}} {{non-standard_inline}}
  - : représente le code de gestion d'évènements pour l'évènement {{event("afterscriptexecute")}}
- {{domxref("Document.onbeforescriptexecute")}} {{non-standard_inline}}
  - : retourne le code de gestion d'évènements pour l'évènement {{event("beforescriptexecute")}} .
- {{domxref("Document.oncopy")}} {{non-standard_inline}}
  - : représente le code de gestion d'évènements pour l'évènement {{event("copy")}} .
- {{domxref("Document.oncut")}} {{non-standard_inline}}
  - : représente le code de gestion d'évènements pour l'évènement {{event("cut")}} .
- {{domxref("Document.onfullscreenchange")}}
  - : est un  {{event("Event_handlers", "event handler")}} _( gestionnaire d'évènements)_ représentant le code à appeler quand l'élément {{event("fullscreenchange")}} est relevé.
- {{domxref("Document.onfullscreenerror")}}

  {{domxref("Document.onfullscreenchange")}}

  - : est un  {{event("Event_handlers", "event handler")}} _( gestionnaire d'évènements)_ représentant le code à appeler quand l'élément {{event("fullscreenerror")}} est relevé.

- {{domxref("Document.onpaste")}} {{non-standard_inline}}
  - : représente le code de gestion d'évènements pour l'évènement {{event("paste")}} .
- {{domxref("Document.onpointerlockchange")}} {{experimental_inline}}
  - : représente le code de gestion d'évènements pour l'évènement {{event("pointerlockchange")}} .
- {{domxref("Document.onpointerlockerror")}} {{experimental_inline}}
  - : représente le code de gestion d'évènements pour l'évènement {{event("pointerlockerror")}} .
- {{domxref("Document.onreadystatechange")}} {{gecko_minversion_inline("1.9.2")}}
  - : représente le code de gestion d'évènements pour l'évènement {{event("readystatechange")}} .
- {{domxref("Document.onselectionchange")}} {{experimental_inline}}
  - : est un  {{event("Event_handlers", "event handler")}} _( gestionnaire d'évènements)_ représentant le code à appeler quand l'élément {{event("selectionchange")}} est relevé.
- {{domxref("Document.onvisibilitychange")}}
  - : est un  {{event("Event_handlers", "event handler")}} _( gestionnaire d'évènements)_ représentant le code à appeler quand l'élément {{event("visibilitychange")}} est relevé.
- {{domxref("Document.onwheel")}} {{non-standard_inline}}
  - : représente le code de gestion d'évènements pour l'évènement {{event("wheel")}} .

L'interface `Document` est étendue avec l'interface {{domxref("GlobalEventHandlers")}} :

{{Page("/fr/docs/Web/API/GlobalEventHandlers", "Propriétés")}}

## Méthodes

_Cette interface hérite également des interfaces {{domxref ("Node")}} et {{domxref ("EventTarget")}}._

- {{domxref("Document.adoptNode()")}}
  - : adopte le noeud d'un document externe.
- {{domxref("Document.captureEvents()")}} {{Deprecated_inline}}
  - : voir {{domxref("Window.captureEvents")}}.
- {{domxref("Document.caretPositionFromPoint()")}}{{experimental_inline}}
  - : obtient le {{domxref ("CaretPosition")}} aux ou près des coordonnées spécifiées.
- {{domxref("Document.caretRangeFromPoint()")}}{{non-standard_inline}}
  - : Obtient un objet {{Domxref ("Range")}} pour le fragment de document sous les coordonnées spécifiées.
- {{domxref("Document.createAttribute()")}}
  - : Crée un nouvel objet {{domxref("Attr")}} et le renvoie.
- {{domxref("Document.createAttributeNS()")}}
  - : Crée un nouveau noeud dans l'espace nom donné et le renvoie.
- {{domxref("Document.createCDATASection()")}}
  - : Crée un nouveau nœud CDATA et le renvoie.
- {{domxref("Document.createComment()")}}
  - : Crée un nouveau nœud de commentaire et le renvoie.
- {{domxref("Document.createDocumentFragment()")}}
  - : Crée un nouveau fragment de document.
- {{domxref("Document.createElement()")}}
  - : Crée un nouvel élément avec l'étiquette spécifiée.
- {{domxref("Document.createElementNS()")}}
  - : Crée un nouvel élément du type et avec l'URI d'espace de nom spécifiés.
- {{domxref("Document.createEntityReference()")}} {{obsolete_inline}}
  - : Crée un nouvel objet de référence à une entité et le renvoie.
- {{domxref("Document.createEvent()")}}
  - : Crée un nouvel évènement.
- {{domxref("Document.createNodeIterator()")}}
  - : crée un objet {{domxref("NodeIterator")}} .
- {{domxref("Document.createProcessingInstruction()")}}
  - : crée un nouvel objet {{domxref("ProcessingInstruction")}} .
- {{domxref("Document.createRange()")}}
  - : Crée un objet {{domxref("Range")}} .
- {{domxref("Document.createTextNode()")}}
  - : Crée un nœud de texte.
- {{domxref("Document.createTouch()")}} {{Deprecated_inline}}
  - : crée un objet {{domxref("Touch")}}
- {{domxref("Document.createTouchList()")}}
  - : crée un objet {{domxref("TouchList")}}
- {{domxref("Document.createTreeWalker()")}}
  - : Crée un objet {{domxref("TreeWalker")}} .
- {{domxref("Document.elementFromPoint()")}}{{experimental_inline}}
  - : Renvoie l'élément visible aux coordonnées spécifiées.
- {{domxref("Document.elementsFromPoint()")}}{{experimental_inline}}
  - : Renvoie un tableau de tous les éléments aux coordonnées spécifiées.
- {{domxref("Document.enableStyleSheetsForSet()")}}
  - : active les feuilles de style pour l'ensemble de feuilles de style spécifié.
- {{domxref("Document.exitPointerLock()")}} {{experimental_inline}}
  - : Supprime le verrou du pointeur.
- {{domxref("Document.getAnimations()")}} {{experimental_inline}}
  - : retourne un tableau de tous les objets {{domxref("Animation")}} actuels, dont les éléments cibles sont les descendants de ce `document`.

<!---->

- {{domxref("Document.getElementsByClassName()")}}
  - : Renvoie une liste des éléments ayant le nom de classe donné.

<!---->

- {{domxref("Document.getElementsByTagName()")}}
  - : Renvoie une liste des éléments ayant le nom de balise donné.

<!---->

- {{domxref("Document.getElementsByTagNameNS()")}}
  - : Renvoie une liste des éléments du nom de balise et de l'espace de noms spécifiés.

<!---->

- {{domxref("Document.importNode()")}}
  - : Renvoie une copie (un clone) d'un élément provenant d'un document externe.
- {{domxref("Document.normalizeDocument()")}} {{obsolete_inline}}
  - : remplace les entités, normalise les noeuds de texte, etc.
- {{domxref("Document.registerElement()")}} {{experimental_inline}}
  - : Enregistre un composant Web.
- {{domxref("Document.releaseCapture()")}} {{non-standard_inline}} {{gecko_minversion_inline("2.0")}}
  - : Libère la capture de la souris en cours s'il s'agit d'un élément de ce document.
- {{domxref("Document.releaseEvents()")}} {{non-standard_inline}} {{Deprecated_inline}}
  - : voir {{domxref("Window.releaseEvents()")}}.
- {{domxref("Document.routeEvent()")}} {{non-standard_inline}} {{obsolete_inline(24)}}
  - : Voir {{domxref("Window.routeEvent()")}}.
- {{domxref("Document.mozSetImageElement()")}} {{non-standard_inline}} {{gecko_minversion_inline("2.0")}}
  - : Vous permet de modifier l'élément utilisé comme image d'arrière-plan pour un ID d'élément spécifié.

L'interface `Document` est étendue avec l'interface {{domxref("ParentNode")}} :

- {{domxref("document.getElementById","document.getElementById(String id)")}}
  - : retourne une référence d'objet à l'élément identifié.
- {{domxref("document.querySelector","document.querySelector(String selector)")}} {{gecko_minversion_inline("1.9.1")}}
  - : Renvoie le premier noeud `Element` dans le document, dans l'ordre du document, qui correspond aux sélecteurs spécifiés.
- {{domxref("document.querySelectorAll","document.querySelectorAll(String selector)")}} {{gecko_minversion_inline("1.9.1")}}
  - : retourne une liste de tous les noeuds éléments inclus dans le document qui correspondent aux sélecteurs spécifiés.

L'interface Document est étendue avec l'interface  {{domxref("XPathEvaluator")}} :

- {{domxref("document.createExpression","document.createExpression(String expression, XPathNSResolver resolver)")}}
  - : compile une [`XPathExpression`](/fr/docs/Web/API/XPathExpression) qui peut ensuite être utilisée pour des évaluations (répétées).
- {{domxref("document.createNSResolver","document.createNSResolver(Node resolver)")}}
  - : crée un objet {{domxref("XPathNSResolver")}} .
- {{domxref("document.evaluate","document.evaluate(String expression, Node contextNode, XPathNSResolver resolver, Number type, Object result)")}}
  - : évalue l'expression XPath .

### Extensions pour les documents HTML

- {{domxref("document.clear()")}} {{non-standard_inline}} {{Deprecated_inline}}
  - : dans la majorité des navigateurs modernes, y compris les versions récentes de Firefox et Internet Explorer, cette méthode ne fait rien.
- {{domxref("document.close()")}}
  - : ferme un flux de document pour l'écriture.
- {{domxref("document.execCommand","document.execCommand(String command[, Boolean showUI[, String value]])")}}
  - : Sur un document modifiable, exécute une commande de formatage.
- {{domxref("document.getElementsByName","document.getElementsByName(String name)")}}
  - : retourne une liste d'éléments ayant le nom donné.
- {{domxref("document.getSelection()")}}
  - : retourne un objet {{domxref("Selection")}} relatif au texte sélectionné dans le document.
- {{domxref("document.hasFocus()")}}
  - : retourne `true` (vrai) si le focus est actuellement localisé n'importe où sur le document spécifié.
- {{domxref("document.open()")}}
  - : Ouvre un flux pour l'écriture dans le document.
- {{domxref("document.queryCommandEnabled","document.queryCommandEnabled(String command)")}}
  - : Renvoie `true` si la commande de formatage peut être exécutée sur la plage courante.
- {{domxref("document.queryCommandIndeterm","document.queryCommandIndeterm(String command)")}}
  - : Renvoie `true` si la commande de formatage est dans un état indéterminé sur la plage courante.
- {{domxref("document.queryCommandState","document.queryCommandState(String command)")}}
  - : Renvoie `true` si la commande de formatage a été exécutée sur la plage courante.
- {{domxref("document.queryCommandSupported","document.queryCommandSupported(String command)")}}
  - : retourne `true` _(vrai)_ si la commande de formatage est supportée sur la plage courante.
- {{domxref("document.queryCommandValue","document.queryCommandValue(String command)")}}
  - : renvoie la valeur courante de la plage en cours pour une commande de formatage.
- {{domxref("document.write","document.write(String text)")}}
  - : Écrit du texte dans le document.
- {{domxref("document.writeln","document.writeln(String text)")}}
  - : Écrit une ligne de texte dans le document.

## Spécifications

| Spécification                                                                                                                | Statut                                       | Commentaire                                                                                |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------ |
| {{SpecName('Page Visibility API', '#onvisiblitychange-event-handler', 'onvisibilitychange')}} | {{Spec2('Page Visibility API')}} | Ajoute `onvisibilitychange.`                                                               |
| {{SpecName('Selection API', '', 'Extend Document and GlobalEventHandlers')}}                         | {{Spec2('Selection API')}}         | Ajoute `onselectstart`et `onselectionchange`.                                              |
| {{SpecName('DOM1','#i-Document','Document')}}                                                                 | {{Spec2('DOM1')}}                     | Définition initiale pour l'interface                                                       |
| {{SpecName('DOM2 Core','#i-Document','Document')}}                                                         | {{Spec2('DOM2 Core')}}                 | Remplace DOM 1                                                                             |
| {{SpecName('DOM3 Core','#i-Document','Document')}}                                                         | {{Spec2('DOM3 Core')}}                 | remplace DOM 2                                                                             |
| {{SpecName('DOM WHATWG','#interface-document','Document')}}                                             | {{Spec2('DOM WHATWG')}}             | en vue de remplacer DOM 3                                                                  |
| {{SpecName('HTML WHATWG','dom.html#the-document-object','Document')}}                                 | {{Spec2('HTML WHATWG')}}             | Transforme l'interface {{domxref("HTMLDocument")}} en une extension de `Document` |
| {{SpecName('DOM3 XPath','xpath.html#XPathEvaluator','XPathEvaluator')}}                             | {{Spec2('DOM3 XPath')}}             | Definit l'interface {{domxref("XPathEvaluator")}} qui étend le document.        |
| {{SpecName('Page Visibility API', '#sec-document-interface', 'Document')}}                         | {{Spec2('Page Visibility API')}} | Étend l'interface `Document`  avec les attributs `visibilityState` et `hidden`.            |
| {{SpecName('HTML Editing','#dom-document-getselection','Document')}}                                 | {{Spec2('HTML Editing')}}             | Étend l'interface `Document`                                                               |
| {{SpecName('CSSOM View','#extensions-to-the-document-interface','Document')}}                     | {{Spec2('CSSOM View')}}             | Étend l'interface `Document`                                                               |
| {{SpecName('CSSOM','#extensions-to-the-document-interface','Document')}}                             | {{Spec2('CSSOM')}}                     | Étend l'interface `Document`                                                               |
| {{SpecName('Pointer Lock','#extensions-to-the-document-interface','Document')}}                     | {{Spec2('Pointer Lock')}}             | Étend l'interface `Document`                                                               |

## Compatibilité des navigateurs notes

### Notes concernant Firefox :

Mozilla définit un ensemble de propriétés non-standard créées seulement pour le contenu XUL :

- {{domxref("document.currentScript")}} {{non-standard_inline}} {{gecko_minversion_inline("2.0")}}
  - : retourne l'élément {{HTMLElement("script")}} qui est en cours d'exécution.
- {{domxref("document.documentURIObject")}} {{gecko_minversion_inline("1.9")}}
  - : (extensions Mozilla seulement) retourne l'objet  {{Interface("nsIURI")}} représentant l'URI du document. Cette propriété a seulement une signification spéciale dans le code JavaScript privilégié (avec les privilèges UniversalXPConnect).
- {{domxref("document.popupNode")}}
  - : retourne le noeud ouvert lors de l'appel d'une fenêtre contextuelle.
- {{domxref("document.tooltipNode")}}
  - : retourne le noeud qui est la cible de l'info-bulle actuelle.

Mozilla a également défini quelques méthodes non standard :

- {{domxref("document.execCommandShowHelp")}} {{obsolete_inline("14.0")}}
  - : Cette méthode n'a jamais rien fait et a toujours lancé une exception, elle a donc été supprimée dans Gecko 14.0 {{geckoRelease ("14.0")}}.
- {{domxref("document.getBoxObjectFor")}} {{obsolete_inline}}
  - : Utiliser la méthode {{domxref("Element.getBoundingClientRect()")}} à la place.
- {{domxref("document.loadOverlay")}}
  - : charge dynamiquement un [XUL overlay](/fr/docs/Overlays_XUL) . Celui-ci fonctionne seulement dans les documents XUL.
- {{domxref("document.queryCommandText")}} {{obsolete_inline("14.0")}}
  - : Cette méthode n'a jamais rien fait d'autre que de lancer une exception, elle a donc été supprimée dans Gecko 14.0 {{geckoRelease ("14.0")}}.

### Notes concernant Internet Explorer

Microsoft a défini quelques propriétés non standard :

- {{domxref("document.fileSize")}}\* {{non-standard_inline}} {{obsolete_inline}}
  - : Retourne la taille en octets du document. À partir d'Internet Explorer 11, cette propriété n'est plus prise en charge. Voir  [MSDN](http://msdn.microsoft.com/en-us/library/ms533752%28v=VS.85%29.aspx).

Internet Explorer ne prend pas en charge toutes les méthodes de l'interface Node dans l'interface Document :

- {{domxref("document.contains")}}
  - : Pour contourner le problème, `document.body.contains ()` peut être utilisé.
