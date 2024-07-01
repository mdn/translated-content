---
title: Document
slug: Web/API/Document
---

{{APIRef("DOM")}}

L'interface **`Document`** représente n'importe quelle page web chargée dans le navigateur et sert de point d'entrée pour accéder au contenu de la page qui est formé par [l'arbre du DOM](/fr/docs/Web/API/Document_object_model/Using_the_W3C_DOM_Level_1_Core).

L'arbre du DOM inclut les éléments tels que [`<body>`](/fr/docs/Web/HTML/Element/body), [`<table>`](/fr/docs/Web/HTML/Element/table) et [tous les autres](/fr/docs/Web/HTML/Element) présents dans la page. Il fournit des fonctionnalités à l'ensemble du document et permet, par exemple, d'obtenir l'URL de la page et de créer de nouveaux éléments dans le document.

{{InheritanceDiagram}}

L'interface `Document` décrit les propriétés et méthodes communes à toutes sortes de documents. Selon le type de document (par exemple [HTML](/fr/docs/Web/HTML), [XML](/fr/docs/Web/XML), SVG, etc.), une API plus grande pourra être disponible. Ainsi, les documents HTML, servis avec le type de contenu `text/html` implémenteront également l'interface [`HTMLDocument`](/fr/docs/Web/API/HTMLDocument) tandis que les documents XML et SVG implémenteront l'interface [`XMLDocument`](/fr/docs/Web/API/XMLDocument).

## Constructeur

- [`Document()`](/fr/docs/Web/API/Document/Document)
  - : Crée un nouvel objet `Document`.

## Propriétés

_Cette interface hérite également des interfaces [`Node`](/fr/docs/Web/API/Node) et [`EventTarget`](/fr/docs/Web/API/EventTarget)._

- [`Document.activeElement`](/fr/docs/Web/API/Document/activeElement) {{ReadOnlyInline}}
  - : Renvoie l'objet [`Element`](/fr/docs/Web/API/Element) correspondant à l'élément qui possède le focus.
- [`Document.body`](/fr/docs/Web/API/Document/body)
  - : Renvoie le nœud [`<body>`](/fr/docs/Web/HTML/Element/body) ou [`<frameset>`](/fr/docs/Web/HTML/Element/frameset) du document courant.
- [`Document.characterSet`](/fr/docs/Web/API/Document/characterSet) {{ReadOnlyInline}}
  - : Renvoie le jeu de caractères utilisé par le document.
- [`Document.childElementCount`](/fr/docs/Web/API/Document/childElementCount) {{readonlyInline}}
  - : Renvoie le nombre d'éléments enfants pour le document courant.
- [`Document.children`](/fr/docs/Web/API/Document/children) {{readonlyInline}}
  - : Renvoie les éléments enfants pour le document courant.
- [`Document.compatMode`](/fr/docs/Web/API/Document/compatMode) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Indique si le document est rendu à l'écran selon le mode _quirks_ ou _strict_.
- [`Document.contentType`](/fr/docs/Web/API/Document/contentType) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Renvoie le type MIME du document courant.
- [`Document.currentScript`](/fr/docs/Web/API/Document/currentScript) {{ReadOnlyInline}}
  - : Renvoie l'élément [`<script>`](/fr/docs/Web/HTML/Element/script) dont le script est actuellement en cours de traitement et [qui n'est pas un module JavaScript](https://github.com/whatwg/html/issues/997).
- [`Document.doctype`](/fr/docs/Web/API/Document/doctype) {{ReadOnlyInline}}
  - : Renvoie la définition du type de document (<i lang="en">Document Type Definition</i> ou DTD) du document courant.
- [`Document.documentElement`](/fr/docs/Web/API/Document/documentElement) {{ReadOnlyInline}}
  - : Renvoie l'objet [`Element`](/fr/docs/Web/API/Element) correspondant à l'élément qui est un enfant direct du document. Pour les documents HTML, il s'agit normalement d'un objet [`HTMLHtmlElement`](/fr/docs/Web/API/HTMLHtmlElement) qui représente l'élément [`<html>`](/fr/docs/Web/HTML/Element/html) du document.
- [`Document.documentURI`](/fr/docs/Web/API/Document/documentURI) {{ReadOnlyInline}}
  - : Renvoie l'emplacement du document sous la forme d'une chaîne de caractères.
- [`Document.embeds`](/fr/docs/Web/API/Document/embeds) {{ReadOnlyInline}}
  - : Renvoie un objet [`HTMLCollection`](/fr/docs/Web/API/HTMLCollection) des éléments embarqués (via [`<embed>`](/fr/docs/Web/HTML/Element/embed)) dans le document.
- [`Document.firstElementChild`](/fr/docs/Web/API/Document/firstElementChild) {{readonlyInline}}
  - : Renvoie le premier élément enfant du document courant.
- [`Document.fonts`](/fr/docs/Web/API/Document/fonts)
  - : Renvoie l'interface [`FontFaceSet`](/fr/docs/Web/API/FontFaceSet) pour le document courant.
- [`Document.forms`](/fr/docs/Web/API/Document/forms) {{ReadOnlyInline}}
  - : Renvoie un objet [`HTMLCollection`](/fr/docs/Web/API/HTMLCollection) des éléments [`<form>`](/fr/docs/Web/HTML/Element/Form) du document.
- [`Document.fullscreenElement`](/fr/docs/Web/API/Document/fullscreenElement) {{ReadOnlyInline}}
  - : Renvoie l'élément actuellement en mode plein écran pour ce document.
- [`Document.head`](/fr/docs/Web/API/Document/head) {{ReadOnlyInline}}
  - : Renvoie l'élément [`<head>`](/fr/docs/Web/HTML/Element/head) pour le document courant.
- [`Document.hidden`](/fr/docs/Web/API/Document/hidden) {{ReadOnlyInline}}
  - : Renvoie une valeur booléenne qui indique si la page est considérée masquée ou non.
- [`Document.images`](/fr/docs/Web/API/Document/images) {{ReadOnlyInline}}
  - : Renvoie un objet [`HTMLCollection`](/fr/docs/Web/API/HTMLCollection) des images du document.
- [`Document.implementation`](/fr/docs/Web/API/Document/implementation) {{ReadOnlyInline}}
  - : Renvoie l'implémentation du DOM associée au document courant.
- [`Document.lastElementChild`](/fr/docs/Web/API/Document/lastElementChild) {{readonlyInline}}
  - : Renvoie le dernier élément enfant du document courant.
- [`Document.links`](/fr/docs/Web/API/Document/links) {{ReadOnlyInline}}
  - : Renvoie un objet [`HTMLCollection`](/fr/docs/Web/API/HTMLCollection) contenant l'ensemble des hyperliens du document.
- [`Document.mozSyntheticDocument`](/fr/docs/Web/API/Document/mozSyntheticDocument) {{Non-standard_Inline}}
  - : Renvoie `true` uniquement si le document est synthétique (par exemple une page indépendante, un fichier audio ou vidéo).
- [`Document.pictureInPictureElement`](/fr/docs/Web/API/Document/pictureInPictureElement) {{ReadOnlyInline}}
  - : Renvoie l'objet [`Element`](/fr/docs/Web/API/Element) pour l'élément affiché en mode d'incrustation vidéo (<i lang="en">picture-in-picture</i>) pour ce document.
- [`Document.pictureInPictureEnabled`](/fr/docs/Web/API/Document/pictureInPictureEnabled) {{ReadOnlyInline}}
  - : Renvoie `true` si la fonctionnalité d'incrustation vidéo est activée.
- [`Document.plugins`](/fr/docs/Web/API/Document/plugins) {{ReadOnlyInline}}
  - : Renvoie un objet [`HTMLCollection`](/fr/docs/Web/API/HTMLCollection) contenant les plugins disponibles.
- [`Document.pointerLockElement`](/fr/docs/Web/API/Document/pointerLockElement) {{ReadOnlyInline}}
  - : Renvoie l'élément définit comme cible pour les évènements de souris pendant que le pointeur est verrouillé. Cette propriété vaut `null` si le verrouillage est en cours, si le pointeur est déverrouillé ou si la cible est située dans un autre document.
- [`Document.featurePolicy`](/fr/docs/Web/API/Document/featurePolicy) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Renvoie l'interface [`FeaturePolicy`](/fr/docs/Web/API/FeaturePolicy) qui fournit une API pour l'introspection des règles de fonctionnalité (<i lang="en">feature policies</i>) appliquées au document.
- [`Document.scripts`](/fr/docs/Web/API/Document/scripts) {{ReadOnlyInline}}
  - : Renvoie un objet [`HTMLCollection`](/fr/docs/Web/API/HTMLCollection) contenant les éléments [`<script>`](/fr/docs/Web/HTML/Element/script) du document.
- [`Document.scrollingElement`](/fr/docs/Web/API/Document/scrollingElement) {{ReadOnlyInline}}
  - : Renvoie une référence à l'objet [`Element`](/fr/docs/Web/API/Element) correspondant à l'élément qui fait défiler le document.
- [`Document.styleSheets`](/fr/docs/Web/API/Document/styleSheets) {{ReadOnlyInline}}
  - : Renvoie un objet [`StyleSheetList`](/fr/docs/Web/API/StyleSheetList) contenant les objets [`CSSStyleSheet`](/fr/docs/Web/API/CSSStyleSheet) pour les feuilles de style CSS liées explicitement ou embarquées dans le document.
- [`Document.timeline`](/fr/docs/Web/API/Document/timeline) {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Renvoie la chronologie, sous la forme d'une instance [`DocumentTimeline`](/fr/docs/Web/API/DocumentTimeline), qui est automatiquement créée au chargement de la page.
- [`Document.visibilityState`](/fr/docs/Web/API/Document/visibilityState) {{ReadOnlyInline}}
  - : Renvoie une chaîne de caractères qui indique l'état de visibilité du document. Les valeurs possibles sont `visible`, `hidden`, `prerender`, et `unloaded`.

### Extensions pour `HTMLDocument`

_L'interface `Document` pour les documents HTML hérite de l'interface [`HTMLDocument`](/fr/docs/Web/API/HTMLDocument). Depuis HTML5, ce n'est plus un héritage mais une extension de l'interface pour ces documents._

- [`Document.cookie`](/fr/docs/Web/API/Document/cookie)
  - : Renvoie une liste, dont les éléments sont séparés par des points-virgules, des cookies du document ou permet de définir un cookie.
- [`Document.defaultView`](/fr/docs/Web/API/Document/defaultView) {{ReadOnlyInline}}
  - : Renvoie une référence à l'objet de la fenêtre.
- [`Document.designMode`](/fr/docs/Web/API/Document/designMode)
  - : Permet d'accéder ou de définir la possibilité d'éditer l'ensemble du document.
- [`Document.dir`](/fr/docs/Web/API/Document/dir)
  - : Permet d'accéder ou de définir la directionnalité (écriture de droite à gauche ou de gauche à droite) du document.
- [`Document.domain`](/fr/docs/Web/API/Document/domain) {{Deprecated_Inline}}
  - : Permet d'accéder ou de définir le domaine du document courant.
- [`Document.lastModified`](/fr/docs/Web/API/Document/lastModified) {{ReadOnlyInline}}
  - : Renvoie la date à laquelle le document a été modifié pour la dernière fois.
- [`Document.location`](/fr/docs/Web/API/Document/location) {{ReadOnlyInline}}
  - : Renvoie l'URI du document courant.
- [`Document.readyState`](/fr/docs/Web/API/Document/readyState) {{ReadOnlyInline}}
  - : Renvoie l'état de chargement du document.
- [`Document.referrer`](/fr/docs/Web/API/Document/referrer) {{ReadOnlyInline}}
  - : Renvoie l'URI de la page qui a lié vers cette page.
- [`Document.title`](/fr/docs/Web/API/Document/title)
  - : Permet d'accéder ou de définir le titre du document courant.
- [`Document.URL`](/fr/docs/Web/API/Document/URL) {{ReadOnlyInline}}
  - : Renvoie l'emplacement du document sous la forme d'une chaîne de caractères.

### Gestionnaires d'évènement

_L'interface `Document` est étendue avec des gestionnaires d'évènement supplémentaires définis dans l'interface [`GlobalEventHandlers`](/fr/docs/Web/API/GlobalEventHandlers#gestionnaires_dévènement)._

- [`GlobalEventHandlers.onselectionchange`](/fr/docs/Web/API/GlobalEventHandlers/onselectionchange) {{Experimental_Inline}}
  - : Un [gestionnaire d'évènement](/fr/docs/Web/Events/Event_handlers) qui représente le code à appeler lorsque l'évènement [`selectionchange`](/fr/docs/Web/API/Document/selectionchange_event) est déclenché.

### Propriétés dépréciées

- [`Document.alinkColor`](/fr/docs/Web/API/Document/alinkColor) {{Deprecated_Inline}}
  - : Permet d'accéder ou de définir la couleur des liens actifs pour le corps du document.
- [`Document.all`](/fr/docs/Web/API/Document/all) {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Fournit un accès à tous les éléments du document. Elle renvoie un objet [`HTMLAllCollection`](/fr/docs/Web/API/HTMLAllCollection) dont la racine est le nœud du document. Il s'agit d'une propriété historique non-standard qui ne devrait pas être utilisée.
- [`Document.anchors`](/fr/docs/Web/API/Document/anchors) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Renvoie une liste de toutes les ancres du document.
- [`Document.applets`](/fr/docs/Web/API/Document/applets) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Renvoie une liste ordonnée des applets contenus dans le document.
- [`Document.bgColor`](/fr/docs/Web/API/Document/bgColor) {{Deprecated_Inline}}
  - : Permet d'accéder ou de définir la couleur d'arrière-plan du document courant.
- [`Document.charset`](/fr/docs/Web/API/Document/characterSet) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Un synonyme de [`Document.characterSet`](/fr/docs/Web/API/Document/characterSet), cette dernière devrait être utilisée à la place.
- [`Document.fgColor`](/fr/docs/Web/API/Document/fgColor) {{Deprecated_Inline}}
  - : Permet d'accéder ou de définir la couleur de premier plan ou la couleur du texte du document courant.
- [`Document.fullscreen`](/fr/docs/Web/API/Document/fullscreen) {{deprecated_inline}}
  - : `true` lorsque le document est en [mode plein écran](/fr/docs/Web/API/Fullscreen_API).
- [`Document.height`](/fr/docs/Web/API/Document/height) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Permet d'accéder ou de définir la hauteur du document courant.
- [`Document.inputEncoding`](/fr/docs/Web/API/Document/characterSet) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Un synonyme de [`Document.characterSet`](/fr/docs/Web/API/Document/characterSet), cette dernière devrait être utilisée à la place.
- [`Document.lastStyleSheetSet`](/fr/docs/Web/API/Document/lastStyleSheetSet) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Renvoie le nom de la feuille de styles qui a été activée en dernière. Vaut `null` jusqu'à ce que la feuille de style soit changée avec la définition de la valeur [`selectedStyleSheetSet`](/fr/docs/Web/API/Document/selectedStyleSheetSet).
- [`Document.linkColor`](/fr/docs/Web/API/Document/linkColor) {{Deprecated_Inline}}
  - : Permet d'accéder ou de définir la couleur des hyperliens contenus dans le document.
- [`Document.preferredStyleSheetSet`](/fr/docs/Web/API/Document/preferredStyleSheetSet) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Renvoie l'ensemble de feuilles de styles préféré comme indiqué par l'autrice ou l'auteur de la page.
- [`Document.rootElement`](/fr/docs/Web/API/Document/rootElement) {{Deprecated_Inline}}
  - : Agit comme [`Document.documentElement`](/fr/docs/Web/API/Document/documentElement), mais uniquement pour les éléments racines [`<svg>`](/fr/docs/Web/SVG/Element/svg). C'est cette dernière qu'il faudra utiliser à la place.
- [`Document.selectedStyleSheetSet`](/fr/docs/Web/API/Document/selectedStyleSheetSet) {{deprecated_inline}}
  - : Renvoie l'ensemble de feuilles de styles actuellement utilisé.
- [`Document.styleSheetSets`](/fr/docs/Web/API/Document/styleSheetSets) {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Renvoie une liste des ensembles de feuilles de styles disponibles sur le document.
- [`Document.vlinkColor`](/fr/docs/Web/API/Document/vlinkColor) {{Deprecated_Inline}}
  - : Permet d'accéder ou de définir la couleur des hyperliens visités.
- [`Document.width`](/fr/docs/Web/API/Document/width) {{Non-standard_Inline}} {{deprecated_inline}}
  - : Renvoie la largeur du document courant.
- [`Document.xmlEncoding`](/fr/docs/Web/API/Document/xmlEncoding) {{Deprecated_Inline}}
  - : Renvoie l'encodage tel que déterminé par la déclaration XML.
- [`Document.xmlStandalone`](/fr/docs/Web/API/Document/xmlStandalone) {{deprecated_inline}}
  - : Renvoie `true` si la déclaration XML indique que le document est autonome (par exemple qu'une partie externe du DTD affecte le contenu du document), `false` sinon.
- [`Document.xmlVersion`](/fr/docs/Web/API/Document/xmlVersion) {{deprecated_inline}}
  - : Renvoie le numéro de version tel qu'indiqué dans la déclaration XML, ou `1.0` si la déclaration est absente.

## Méthodes

_Cette interface hérite également des méthodes des interfaces [`Node`](/fr/docs/Web/API/Node) et [`EventTarget`](/fr/docs/Web/API/EventTarget) interfaces._

- [`Document.adoptNode()`](/fr/docs/Web/API/Document/adoptNode)
  - : Adopte un nœud d'un document externe.
- [`Document.append()`](/fr/docs/Web/API/Document/append)
  - : Insère un ensemble d'objets [`Node`](/fr/docs/Web/API/Node) ou d'objets [`DOMString`](/fr/docs/Web/API/DOMString) après le dernier enfant du document.
- [`Document.captureEvents()`](/fr/docs/Web/API/Document/captureEvents) {{Deprecated_Inline}}
  - : Voir [`Window.captureEvents`](/fr/docs/Web/API/Window/captureEvents).
- [`Document.caretPositionFromPoint()`](/fr/docs/Web/API/Document/caretPositionFromPoint)
  - : Renvoie un objet [`CaretPosition`](/fr/docs/Web/API/CaretPosition) qui contient le nœud DOM contenant le curseur et le décalage du curseur au sein de ce nœud.
- [`Document.caretRangeFromPoint()`](/fr/docs/Web/API/Document/caretRangeFromPoint) {{Non-standard_Inline}}
  - : Obtient un objet [`Range`](/fr/docs/Web/API/Range) pour le fragment de document situé aux coordonnées indiquées.
- [`Document.createAttribute()`](/fr/docs/Web/API/Document/createAttribute)
  - : Crée un nouvel objet [`Attr`](/fr/docs/Web/API/Attr) et le renvoie.
- [`Document.createAttributeNS()`](/fr/docs/Web/API/Document/createAttributeNS)
  - : Crée un nouveau nœud d'attribut dans un espace de noms donné et le renvoie.
- [`Document.createCDATASection()`](/fr/docs/Web/API/Document/createCDATASection)
  - : Crée un nouveau nœud CDATA et le renvoie.
- [`Document.createComment()`](/fr/docs/Web/API/Document/createComment)
  - : Crée un nouveau nœud de commentaire et le renvoie.
- [`Document.createDocumentFragment()`](/fr/docs/Web/API/Document/createDocumentFragment)
  - : Crée un nouveau fragment de document.
- [`Document.createElement()`](/fr/docs/Web/API/Document/createElement)
  - : Crée un nouvel élément avec le nom de balise indiqué.
- [`Document.createElementNS()`](/fr/docs/Web/API/Document/createElementNS)
  - : Crée un nouvel élément avec le nom de balise indiqué et l'espace de noms passé via un URI.
- [`Document.createEntityReference()`](/fr/docs/Web/API/Document/createEntityReference) {{deprecated_inline}}
  - : Crée un nouvel objet de référence d'entité et le renvoie.
- [`Document.createEvent()`](/fr/docs/Web/API/Document/createEvent)
  - : Crée un objet d'évènement.
- [`Document.createNodeIterator()`](/fr/docs/Web/API/Document/createNodeIterator)
  - : Crée un objet [`NodeIterator`](/fr/docs/Web/API/NodeIterator).
- [`Document.createProcessingInstruction()`](/fr/docs/Web/API/Document/createProcessingInstruction)
  - : Crée un nouvel objet [`ProcessingInstruction`](/fr/docs/Web/API/ProcessingInstruction).
- [`Document.createRange()`](/fr/docs/Web/API/Document/createRange)
  - : Crée un objet [`Range`](/fr/docs/Web/API/Range).
- [`Document.createTextNode()`](/fr/docs/Web/API/Document/createTextNode)
  - : Crée un nœud texte.
- [`Document.createTouch()`](/fr/docs/Web/API/Document/createTouch) {{Deprecated_Inline}}
  - : Crée un objet [`Touch`](/fr/docs/Web/API/Touch).
- [`Document.createTouchList()`](/fr/docs/Web/API/Document/createTouchList) {{Deprecated_Inline}}
  - : Crée un objet [`TouchList`](/fr/docs/Web/API/TouchList).
- [`Document.createTreeWalker()`](/fr/docs/Web/API/Document/createTreeWalker)
  - : Crée un objet [`TreeWalker`](/fr/docs/Web/API/TreeWalker).
- [`Document.elementFromPoint()`](/fr/docs/Web/API/Document/elementFromPoint)
  - : Renvoie l'élément situé le plus en haut pour les coordonnées indiquées.
- [`Document.elementsFromPoint()`](/fr/docs/Web/API/Document/elementsFromPoint)
  - : Renvoie un tableau de tous les éléments situés aux coordonnées indiquées.
- [`Document.enableStyleSheetsForSet()`](/fr/docs/Web/API/Document/enableStyleSheetsForSet) {{deprecated_inline}}
  - : Active les feuilles de styles pour l'ensemble de feuilles de styles indiqué.
- [`Document.exitPictureInPicture()`](/fr/docs/Web/API/Document/exitPictureInPicture)
  - : Retire la vidéo de la fenêtre d'incrustation vidéo pour la replacer dans son conteneur original.
- [`Document.exitPointerLock()`](/fr/docs/Web/API/Document/exitPointerLock) {{Experimental_Inline}}
  - : Relâche le verrou du pointeur.
- [`Document.getAnimations()`](/fr/docs/Web/API/Document/getAnimations)
  - : Renvoie un tableau contenant tous les objets [`Animation`](/fr/docs/Web/API/Animation) actuellement actifs et dont les éléments cibles sont des descendants du document courant.
- [`Document.getBoxQuads()`](/fr/docs/Web/API/Document/getBoxQuads) {{experimental_inline}}
  - : Renvoie une liste d'objets [`DOMQuad`](/fr/docs/Web/API/DOMQuad) qui représente les fragments CSS du nœud.
- [`Document.getElementById()`](/fr/docs/Web/API/Document/getElementById)
  - : Renvoie une référence objet vers l'élément identifié.
- [`Document.getElementsByClassName()`](/fr/docs/Web/API/Document/getElementsByClassName)
  - : Renvoie une liste d'éléments avec le nom de classe indiqué.
- [`Document.getElementsByTagName()`](/fr/docs/Web/API/Document/getElementsByTagName)
  - : Renvoie une liste d'éléments avec la balise indiquée.
- [`Document.getElementsByTagNameNS()`](/fr/docs/Web/API/Document/getElementsByTagNameNS)
  - : Renvoie une liste d'éléments avec le nom de balise et pour l'espace de noms indiqués.
- [`Document.getSelection()`](/fr/docs/Web/API/Document/getSelection)
  - : Renvoie un objet [`Selection`](/fr/docs/Web/API/Selection) qui représente la portion de texte sélectionnée par l'utilisatrice ou l'utilisateur, ou la position du curseur.
- [`Document.hasStorageAccess()`](/fr/docs/Web/API/Document/hasStorageAccess) {{Experimental_Inline}}
  - : Renvoie un objet [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui est résolu avec une valeur booléenne selon que le document a accès à du stockage de premier rang.
- [`Document.importNode()`](/fr/docs/Web/API/Document/importNode)
  - : Renvoie un clone d'un nœud d'un document externe.
- [`Document.normalizeDocument()`](/fr/docs/Web/API/Document/normalizeDocument) {{deprecated_inline}}
  - : Remplace les entités et normalise les nœuds textuels, etc.
- [`Document.prepend()`](/fr/docs/Web/API/Document/prepend)
  - : Insère un ensemble d'objet [`Node`](/fr/docs/Web/API/Node) ou [`DOMString`](/fr/docs/Web/API/DOMString) avant le premier enfant du document.
- [`Document.querySelector()`](/fr/docs/Web/API/Document/querySelector)
  - : Renvoie le premier nœud `Element` au sein du document, selon l'ordre du document, qui correspond aux sélecteurs indiqués.
- [`Document.querySelectorAll()`](/fr/docs/Web/API/Document/querySelectorAll)
  - : Renvoie une liste de tous les nœuds `Element` du document qui correspondent aux sélecteurs indiqués.
- [`Document.releaseCapture()`](/fr/docs/Web/API/Document/releaseCapture) {{Non-standard_Inline}}
  - : Relâche la capture de la souris si celle-ci est sur un élément du document courant.
- [`Document.releaseEvents()`](/fr/docs/Web/API/Document/releaseEvents) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Voir [`Window.releaseEvents()`](/fr/docs/Web/API/Window/releaseEvents).
- [`Document.replaceChildren()`](/fr/docs/Web/API/Document/replaceChildren)
  - : Remplace l'enfant existant du document avec un ensemble de nouveaux enfants indiqué.
- [`Document.requestStorageAccess()`](/fr/docs/Web/API/Document/requestStorageAccess)
  - : Renvoie un objet [`Promise`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Promise) qui est résolu si l'accès au stockage de premier rang a été accordé et qui est rompu si l'accès a été refusé.
- [`Document.mozSetImageElement()`](/fr/docs/Web/API/Document/mozSetImageElement) {{Non-standard_Inline}}
  - : Permet de changer l'élément utilisé comme image d'arrière-plan par un élément dont on passe l'identifiant en argument.

L'interface `Document` est étendue avec l'interface [`XPathEvaluator`](/fr/docs/Web/API/XPathEvaluator)&nbsp;:

- [`Document.createExpression()`](/fr/docs/Web/API/Document/createExpression)
  - : Compile une expression [`XPathExpression`](/fr/docs/Web/API/XPathExpression) qui peut ensuite être utilisée pour des évaluations (répétées).
- [`Document.createNSResolver()`](/fr/docs/Web/API/Document/createNSResolver)
  - : Crée un objet [`XPathNSResolver`](/fr/docs/Web/API/XPathNSResolver).
- [`Document.evaluate()`](/fr/docs/Web/API/Document/evaluate)
  - : Évalue une expression XPath.

### Extension pour les documents HTML

Pour les documents HTML, l'interface `Document` hérite de [`HTMLDocument`](/fr/docs/Web/API/HTMLDocument). Depuis HTML5, ce n'est plus un héritage mais une extension de l'interface pour ces documents.

- [`Document.clear()`](/fr/docs/Web/API/Document/clear) {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Pour la majorité des navigateurs récents, y compris pour les versions récentes de Firefox et d'Internet Explorer, cette méthode ne fait rien.
- [`Document.close()`](/fr/docs/Web/API/Document/close)
  - : Ferme le flux d'écriture sur un document.
- [`Document.execCommand()`](/fr/docs/Web/API/Document/execCommand) {{deprecated_inline}}
  - : Pour un document éditable, exécute une commande de formatage.
- [`Document.getElementsByName()`](/fr/docs/Web/API/Document/getElementsByName)
  - : Renvoie une liste des éléments avec le nom indiqué.
- [`Document.hasFocus()`](/fr/docs/Web/API/Document/hasFocus)
  - : Renvoie `true` si le focus est situé à l'intérieur du document indiqué.
- [`Document.open()`](/fr/docs/Web/API/Document/open)
  - : Ouvre le flux d'écriture sur un document.
- [`Document.queryCommandEnabled()`](/fr/docs/Web/API/Document/queryCommandEnabled) {{deprecated_inline}}
  - : Renvoie `true` si la commande de formatage peut être exécutée sur l'intervalle indiqué.
- [`Document.queryCommandIndeterm()`](/fr/docs/Web/API/Document/queryCommandIndeterm) {{deprecated_inline}}
  - : Renvoie `true` si la commande de formatage est dans un état indéterminé pour l'intervalle courant.
- [`Document.queryCommandState()`](/fr/docs/Web/API/Document/queryCommandState) {{deprecated_inline}}
  - : Renvoie `true` si la commande de formatage a été exécutée sur l'intervalle courant.
- [`Document.queryCommandSupported()`](/fr/docs/Web/API/Document/queryCommandSupported) {{deprecated_inline}}
  - : Renvoie `true` si la commande de formatage est prise en charge sur l'intervalle courant.
- [`Document.queryCommandValue()`](/fr/docs/Web/API/Document/queryCommandValue) {{deprecated_inline}}
  - : Renvoie la valeur de l'intervalle courant pour une commande de formatage.
- [`Document.write()`](/fr/docs/Web/API/Document/write)
  - : Écrit du texte dans un document.
- [`Document.writeln()`](/fr/docs/Web/API/Document/writeln)
  - : Écrit une ligne de texte dans un document.

## Évènements

L'écoute de ces évènements peut être effectuée avec `addEventListener()` ou en affectant un gestionnaire d'évènement à la propriété `on<nomdevenement>` correspondante à cette interface.

- [`afterscriptexecute`](/fr/docs/Web/API/Document/afterscriptexecute_event) {{Non-standard_Inline}}
  - : Déclenché lorsqu'un élément statique [`<script>`](/fr/docs/Web/HTML/Element/script) finit d'exécuter son script.
- [`beforescriptexecute`](/fr/docs/Web/API/Document/beforescriptexecute_event) {{Non-standard_Inline}}
  - : Déclenché lorsqu'un élément statique [`<script>`](/fr/docs/Web/HTML/Element/script) est sur le point de commencer son exécution.
- [`scroll`](/fr/docs/Web/API/Document/scroll_event)
  - : Déclenché lorsque la vue du document ou d'un élément a défilé. Également disponible avec la propriété [`onscroll`](/fr/docs/Web/API/GlobalEventHandlers/onscroll).
- [`visibilitychange`](/fr/docs/Web/API/Document/visibilitychange_event)
  - : Déclenché lorsque le contenu d'un onglet est devenu visible ou lorsqu'il a été masqué.
- [`wheel`](/fr/docs/Web/API/Document/wheel_event)
  - : Déclenché lorsque la personne utilise la roulette d'un appareil de pointage (généralement une souris). Également disponible avec la propriété [`onwheel`](/fr/docs/Web/API/GlobalEventHandlers/onwheel).

### Évènements liés aux animations

- [`animationcancel`](/fr/docs/Web/API/Document/animationcancel_event)
  - : Déclenché lorsqu'une animation est interrompue de façon inattendue. Également disponible avec la propriété [`onanimationcancel`](/fr/docs/Web/API/GlobalEventHandlers/onanimationcancel).
- [`animationend`](/fr/docs/Web/API/Document/animationend_event)
  - : Déclenché lorsqu'une animation s'est terminée normalement. Également disponible avec la propriété [`onanimationend`](/fr/docs/Web/API/GlobalEventHandlers/onanimationend).
- [`animationiteration`](/fr/docs/Web/API/Document/animationiteration_event)
  - : Déclenché lorsqu'une itération d'une animation est terminée. Également disponible avec la propriété [`onanimationiteration`](/fr/docs/Web/API/GlobalEventHandlers/onanimationiteration).
- [`animationstart`](/fr/docs/Web/API/Document/animationstart_event)
  - : Déclenché au démarrage d'une animation. Également disponible avec la propriété [`onanimationstart`](/fr/docs/Web/API/GlobalEventHandlers/onanimationstart).

### Évènements liés au presse-papier

- [`copy`](/fr/docs/Web/API/Document/copy_event)
  - : Déclenché lorsqu'une personne initie une action de copie avec l'interface utilisateur du navigateur.
- [`cut`](/fr/docs/Web/API/Document/cut_event)
  - : Déclenché lorsque l'utilisateur initie une action de coupe avec l'interface utilisateur du navigateur.
- [`paste`](/fr/docs/Web/API/Document/paste_event)
  - : Déclenché lorsque l'utilisateur initie une action de colle avec l'interface utilisateur du navigateur.

### Évènements pour le glisser-déposer

- [`drag`](/fr/docs/Web/API/Document/drag_event)
  - : Déclenché toutes les quelques centaines de millisecondes lorsqu'un élément ou une sélection de texte est glissée par l'utilisatrice ou l'utilisateur. Également disponible avec la propriété [`ondrag`](/fr/docs/Web/API/GlobalEventHandlers/ondrag).
- [`dragend`](/fr/docs/Web/API/Document/dragend_event)
  - : Déclenché lorsqu'une opération de glisser-déposer se termine (en relâchant un bouton de la souris ou en appuyant sur la touche <kbd>Echap</kbd>). Également disponible avec la propriété [`ondragend`](/fr/docs/Web/API/GlobalEventHandlers/ondragend).
- [`dragenter`](/fr/docs/Web/API/Document/dragenter_event)
  - : Déclenché lorsqu'un élément ou une sélection de texte que l'on fait glisser rentre sur une zone de dépôt valide. Également disponible avec la propriété [`ondragenter`](/fr/docs/Web/API/GlobalEventHandlers/ondragenter).
- [`dragleave`](/fr/docs/Web/API/Document/dragleave_event)
  - : Déclenché lorsqu'un élément ou une sélection de texte que l'on fait glisser quitte une zone de dépôt valide. Également disponible avec la propriété [`ondragleave`](/fr/docs/Web/API/GlobalEventHandlers/ondragleave).
- [`dragover`](/fr/docs/Web/API/Document/dragover_event)
  - : Déclenché lorsqu'un élément ou une sélection de texte que l'on fait glisser survole une zone de dépôt valide. Également disponible avec la propriété [`ondragover`](/fr/docs/Web/API/GlobalEventHandlers/ondragover).
- [`dragstart`](/fr/docs/Web/API/Document/dragstart_event)
  - : Déclenché lorsqu'une personne commence à glisser un élément ou une sélection de texte. Également disponible avec la propriété [`ondragstart`](/fr/docs/Web/API/GlobalEventHandlers/ondragstart).
- [`drop`](/fr/docs/Web/API/Document/drop_event)
  - : Déclenché lorsqu'un élément ou une sélection de texte est déposée sur une zone de dépôt valide. Également disponible avec la propriété [`ondrop`](/fr/docs/Web/API/GlobalEventHandlers/ondrop).

### Évènements liés au mode plein écran

- [`fullscreenchange`](/fr/docs/Web/API/Document/fullscreenchange_event)
  - : Déclenché lorsque le document rentre ou sort du mode [plein écran](/fr/docs/Web/API/Fullscreen_API/Guide).
- [`fullscreenerror`](/fr/docs/Web/API/Document/fullscreenerror_event)
  - : Déclenché en cas d'erreur lors d'une tentative d'entrée ou de sortie du mode [plein écran](/fr/docs/Web/API/Fullscreen_API/Guide).

### Évènements clavier

- [`keydown`](/fr/docs/Web/API/Document/keydown_event)
  - : Déclenché lors de l'appui sur une touche. Également disponible avec la propriété [`onkeydown`](/fr/docs/Web/API/GlobalEventHandlers/onkeydown).
- [`keypress`](/fr/docs/Web/API/Document/keypress_event) {{Deprecated_Inline}}
  - : Déclenché lors de l'appui sur une touche qui produit un caractère. Également disponible avec la propriété [`onkeypress`](/fr/docs/Web/API/GlobalEventHandlers/onkeypress).
- [`keyup`](/fr/docs/Web/API/Document/keyup_event)
  - : Déclenché lors du relâchement d'une touche. Également disponible avec la propriété [`onkeyup`](/fr/docs/Web/API/GlobalEventHandlers/onkeyup).

### Évènements de chargement et de déchargement

- [`DOMContentLoaded`](/fr/docs/Web/API/Document/DOMContentLoaded_event)
  - : Déclenché lorsque le chargement et l'analyse (<i lang="en">parsing</i>) du document sont terminées, sans attendre la fin du chargement des feuilles de style, des images et des <i lang="en">frames</i>.
- [`readystatechange`](/fr/docs/Web/API/Document/readystatechange_event)
  - : Déclenché lorsque l'attribut [`readyState`](/fr/docs/Web/API/Document/readyState) a changé.

### Évènements de pointeurs

- [`gotpointercapture`](/fr/docs/Web/API/Document/gotpointercapture_event)
  - : Déclenché lorsqu'un élément capture un pointeur avec [`setPointerCapture()`](/fr/docs/Web/API/Element/setPointerCapture). Également disponible avec la propriété [`ongotpointercapture`](/fr/docs/Web/API/GlobalEventHandlers/ongotpointercapture).
- [`lostpointercapture`](/fr/docs/Web/API/Document/lostpointercapture_event)
  - : Déclenché lorsqu'un [pointeur capturé](/fr/docs/Web/API/Pointer_events#pointer_capture) est libéré. Également disponible avec la propriété [`onlostpointercapture`](/fr/docs/Web/API/GlobalEventHandlers/onlostpointercapture).
- [`pointercancel`](/fr/docs/Web/API/Document/pointercancel_event)
  - : Déclenché lorsqu'un évènement de pointeur est annulé. Également disponible avec la propriété [`onpointercancel`](/fr/docs/Web/API/GlobalEventHandlers/onpointercancel).
- [`pointerdown`](/fr/docs/Web/API/Document/pointerdown_event)
  - : Déclenché lorsqu'un pointeur devient actif. Également disponible avec la propriété [`onpointerdown`](/fr/docs/Web/API/GlobalEventHandlers/onpointerdown).
- [`pointerenter`](/fr/docs/Web/API/Document/pointerenter_event)
  - : Déclenché lorsqu'un pointeur est déplacé au sein des frontières de la zone interactive d'un élément ou d'un de ses descendants. Également disponible avec la propriété [`onpointerenter`](/fr/docs/Web/API/GlobalEventHandlers/onpointerenter).
- [`pointerleave`](/fr/docs/Web/API/Document/pointerleave_event)
  - : Déclenché lorsqu'un pointeur quitte les limites de la zone interactive d'un élément. Également disponible avec la propriété [`onpointerleave`](/fr/docs/Web/API/GlobalEventHandlers/onpointerleave).
- [`pointerlockchange`](/fr/docs/Web/API/Document/pointerlockchange_event)
  - : Déclenché lorsque le pointeur est verrouillé/déverrouillé. Également disponible avec la propriété [`onpointerlockchange`](/fr/docs/Web/API/GlobalEventHandlers/onpointerlockchange).
- [`pointerlockerror`](/fr/docs/Web/API/Document/pointerlockerror_event)
  - : Déclenché lorsque le verrouillage du pointeur échoue. Également disponible avec la propriété [`onpointerlockerror`](/fr/docs/Web/API/GlobalEventHandlers/onpointerlockerror).
- [`pointermove`](/fr/docs/Web/API/Document/pointermove_event)
  - : Déclenché lorsqu'un pointeur change de coordonnées. Également disponible avec la propriété [`onpointermove`](/fr/docs/Web/API/GlobalEventHandlers/onpointermove).
- [`pointerout`](/fr/docs/Web/API/Document/pointerout_event)
  - : Déclenché lorsqu'un pointeur est déplacé en dehors des limites de la zone interactive d'un élément (entre autres). Également disponible avec la propriété [`onpointerout`](/fr/docs/Web/API/GlobalEventHandlers/onpointerout).
- [`pointerover`](/fr/docs/Web/API/Document/pointerover_event)
  - : Déclenché lorsqu'un pointeur est déplacé à l'intérieur des limites de la zone interactive d'un élément. Également disponible avec la propriété [`onpointerover`](/fr/docs/Web/API/GlobalEventHandlers/onpointerover).
- [`pointerup`](/fr/docs/Web/API/Document/pointerup_event)
  - : Déclenché lorsqu'un pointeur n'est plus actif. Également disponible avec la propriété [`onpointerup`](/fr/docs/Web/API/GlobalEventHandlers/onpointerup).

### Évènements de sélection

- [`selectionchange`](/fr/docs/Web/API/Document/selectionchange_event)
  - : Déclenché lorsque la sélection textuelle courante d'un document a changé. Également disponible avec la propriété [`onselectionchange`](/fr/docs/Web/API/GlobalEventHandlers/onselectionchange).
- [`selectstart`](/fr/docs/Web/API/Document/selectstart_event)
  - : Déclenché lorsque l'utilisateur commence une nouvelle sélection. Également disponible avec la propriété [`onselectstart`](/fr/docs/Web/API/GlobalEventHandlers/onselectstart).

### Évènements tactiles

- [`touchcancel`](/fr/docs/Web/API/Document/touchcancel_event)
  - : Déclenché lorsqu'un ou plusieurs points de toucher ont été perturbés d'une façon propre à l'implémentation (par exemple lorsque de trop nombreux points de toucher ont été créés). Également disponible avec la propriété [`ontouchcancel`](/fr/docs/Web/API/GlobalEventHandlers/ontouchcancel).
- [`touchend`](/fr/docs/Web/API/Document/touchend_event)
  - : Déclenché lorsqu'un ou plusieurs points de toucher ont été retirés de la surface tactile. Également disponible avec la propriété [`ontouchend`](/fr/docs/Web/API/GlobalEventHandlers/ontouchend).
- [`touchmove`](/fr/docs/Web/API/Document/touchmove_event)
  - : Déclenché lorsqu'un ou plusieurs points de toucher ont été déplacés sur la surface tactile. Également disponible avec la propriété [`ontouchmove`](/fr/docs/Web/API/GlobalEventHandlers/ontouchmove).
- [`touchstart`](/fr/docs/Web/API/Document/touchstart_event)
  - : Déclenché lorsqu'un ou plusieurs points de toucher ont été placés sur la surface tactile. Également disponible avec la propriété [`ontouchstart`](/fr/docs/Web/API/GlobalEventHandlers/ontouchstart).

### Évènements de transition

- [`transitioncancel`](/fr/docs/Web/API/Document/transitioncancel_event)
  - : Déclenché lorsqu'une [transition CSS](/fr/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) est annulée. Également disponible avec la propriété [`ontransitioncancel`](/fr/docs/Web/API/GlobalEventHandlers/ontransitioncancel).
- [`transitionend`](/fr/docs/Web/API/Document/transitionend_event)
  - : Déclenché lorsqu'une [transition CSS](/fr/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) est terminée. Également disponible avec la propriété [`ontransitionend`](/fr/docs/Web/API/GlobalEventHandlers/ontransitionend).
- [`transitionrun`](/fr/docs/Web/API/Document/transitionrun_event)
  - : Déclenché lorsqu'une [transition CSS](/fr/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) est créée. Également disponible avec la propriété [`ontransitionrun`](/fr/docs/Web/API/GlobalEventHandlers/ontransitionrun).
- [`transitionstart`](/fr/docs/Web/API/Document/transitionstart_event)
  - : Déclenché lorsqu'une [transition CSS](/fr/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions) a effectivement démarré. Également disponible avec la propriété [`ontransitionstart`](/fr/docs/Web/API/GlobalEventHandlers/ontransitionstart).

## Extensions non-standard {{Non-standard_Inline}}

{{non-standard_header}}

### Notes relatives à Firefox

Firefox définit certaines méthodes non-standard&nbsp;:

- [`Document.execCommandShowHelp()`](/fr/docs/Web/API/Document/execCommandShowHelp) {{deprecated_inline}}
  - : Cette méthode n'a jamais rien fait et a toujours levé une exception. Elle a été retirée avec Gecko 14.0.
- [`Document.getBoxObjectFor()`](/fr/docs/Web/API/Document/getBoxObjectFor) {{deprecated_inline}}
  - : On utilisera la méthode [`Element.getBoundingClientRect()`](/fr/docs/Web/API/Element/getBoundingClientRect) à la place.
- [`Document.loadOverlay()`](/fr/docs/Web/API/Document/loadOverlay) {{deprecated_inline}}
  - : Charge [un overlay XUL](/fr/docs/XUL_Overlays) de façon dynamique. Cette méthode fonctionne uniquement pour les documents XUL.
- [`Document.queryCommandText()`](/fr/docs/Web/API/Document/queryCommandText) {{deprecated_inline}}
  - : Cette méthode n'a jamais rien fait et a toujours levé une exception. Elle a été retirée avec Gecko 14.0.

### Notes relatives à Internet Explorer

Microsoft définit certaines propriétés non-standard&nbsp;:

- [`Document.fileSize`](/fr/docs/Web/API/Document/fileSize)\* {{Non-standard_Inline}} {{deprecated_inline}}
  - : Renvoie la taille du document, exprimée en octets. Cette propriété n'est plus prise en charge à partir d'Internet Explorer 11.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
