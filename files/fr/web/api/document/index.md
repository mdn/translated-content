---
title: Document
slug: Web/API/Document
l10n:
  sourceCommit: 87440643d71bf81a5bf4b8fa21db9e3d56ead395
---

{{APIRef("DOM")}}

L'interface **`Document`** représente n'importe quelle page web chargée dans le navigateur et sert de point d'entrée pour accéder au contenu de la page qui est formé par [l'arbre du DOM](/fr/docs/Web/API/Document_Object_Model#quest-ce_quun_arbre_dom).

L'arbre du DOM inclut les éléments tels que {{HTMLElement("body")}}, {{HTMLElement("table")}} et [tous les autres](/fr/docs/Web/HTML/Reference/Elements) présents dans la page. Il fournit des fonctionnalités à l'ensemble du document et permet, par exemple, d'obtenir l'URL de la page et de créer de nouveaux éléments dans le document.

{{InheritanceDiagram}}

L'interface `Document` décrit les propriétés et méthodes communes à toutes sortes de documents. Selon le type de document (par exemple [HTML](/fr/docs/Web/HTML), [XML](/fr/docs/Web/XML), SVG, …), une API plus grande pourra être disponible&nbsp;: les documents HTML, servis avec le type de contenu `"text/html"` implémenteront également l'interface {{DOMxRef("HTMLDocument")}} tandis que les documents XML et SVG implémenteront l'interface {{DOMxRef("XMLDocument")}}.

## Constructeur

- {{DOMxRef("Document.Document", "Document()")}}
  - : Crée un nouvel objet `Document`.

## Propriétés d'instance

_Cette interface hérite également des interfaces {{DOMxRef("Node")}} et {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Document.activeElement")}} {{ReadOnlyInline}}
  - : Retourne l'objet {{DOMxRef('Element')}} correspondant à l'élément qui possède la sélection.
- {{DOMxRef("Document.adoptedStyleSheets")}}
  - : Ajoute un tableau de feuilles de style construites à utiliser par le document.
    Ces feuilles de style peuvent aussi être partagées avec les sous-arbres DOM d'ombre (<i lang="en">shadow DOM</i>) du même document.
- {{DOMxRef("Document.body")}}
  - : Retourne le nœud {{HTMLElement("body")}} ou {{HTMLElement("frameset")}} du document courant.
- {{DOMxRef("Document.characterSet")}} {{ReadOnlyInline}}
  - : Retourne le jeu de caractères utilisé par le document.
- {{DOMxRef("Document.childElementCount")}} {{ReadOnlyInline}}
  - : Retourne le nombre d'éléments enfants pour le document courant.
- {{DOMxRef("Document.children")}} {{ReadOnlyInline}}
  - : Retourne les éléments enfants pour le document courant.
- {{DOMxRef("Document.compatMode")}} {{ReadOnlyInline}}
  - : Indique si le document est rendu à l'écran selon le mode _quirks_ ou _strict_.
- {{DOMxRef("Document.contentType")}} {{ReadOnlyInline}}
  - : Retourne le type MIME du document courant.
- {{DOMxRef("Document.currentScript")}} {{ReadOnlyInline}}
  - : Retourne l'élément {{HTMLElement("script")}} dont le script est actuellement en cours de traitement et [qui n'est pas un module JavaScript <sup>(angl.)</sup>](https://github.com/whatwg/html/issues/997).
- {{DOMxRef("Document.doctype")}} {{ReadOnlyInline}}
  - : Retourne la définition du type de document (<i lang="en">Document Type Definition</i> ou DTD) du document courant.
- {{DOMxRef("Document.documentElement")}} {{ReadOnlyInline}}
  - : Retourne l'objet {{DOMxRef("Element")}} correspondant à l'élément qui est un enfant direct du document. Pour les documents HTML, il s'agit normalement d'un objet {{DOMxRef("HTMLHtmlElement")}} qui représente l'élément {{HTMLElement("html")}} du document.
- {{DOMxRef("Document.documentURI")}} {{ReadOnlyInline}}
  - : Retourne l'emplacement du document sous la forme d'une chaîne de caractères.
- {{DOMxRef("Document.embeds")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("HTMLCollection")}} des éléments embarqués (via {{HTMLElement('embed')}}) dans le document.
- {{DOMxRef("Document.featurePolicy")}} {{Experimental_Inline}} {{ReadOnlyInline}}
  - : Retourne l'interface {{DOMxRef("FeaturePolicy")}} avec les politiques de fonctionnalités appliquées au document.
- {{DOMxRef("Document.firstElementChild")}} {{ReadOnlyInline}}
  - : Retourne le premier élément enfant du document courant.
- {{DOMxRef("Document.fonts")}}
  - : Retourne l'interface {{DOMxRef("FontFaceSet")}} pour le document courant.
- {{DOMxRef("Document.forms")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("HTMLCollection")}} des éléments {{HTMLElement("form")}} du document.
- {{DOMxRef("Document.fragmentDirective")}} {{ReadOnlyInline}}
  - : Retourne l'objet {{DOMxRef("FragmentDirective")}} pour le document courant.
- {{DOMxRef("Document.fullscreenElement")}} {{ReadOnlyInline}}
  - : Retourne l'élément actuellement en mode plein écran pour ce document.
- {{DOMxRef("Document.head")}} {{ReadOnlyInline}}
  - : Retourne l'élément {{HTMLElement("head")}} pour le document courant.
- {{DOMxRef("Document.hidden")}} {{ReadOnlyInline}}
  - : Retourne une valeur booléenne qui indique si la page est considérée masquée ou non.
- {{DOMxRef("Document.images")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("HTMLCollection")}} des images du document.
- {{DOMxRef("Document.implementation")}} {{ReadOnlyInline}}
  - : Retourne l'implémentation du DOM associée au document courant.
- {{DOMxRef("Document.lastElementChild")}} {{ReadOnlyInline}}
  - : Retourne le dernier élément enfant du document courant.
- {{DOMxRef("Document.links")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("HTMLCollection")}} contenant l'ensemble des hyperliens du document.
- {{DOMxRef("Document.pictureInPictureElement")}} {{ReadOnlyInline}}
  - : Retourne l'objet {{DOMxRef('Element')}} pour l'élément affiché en mode d'incrustation vidéo (<i lang="en">picture-in-picture</i>) pour ce document.
- {{DOMxRef("Document.pictureInPictureEnabled")}} {{ReadOnlyInline}}
  - : Retourne `true` si la fonctionnalité d'incrustation vidéo est activée.
- {{DOMxRef("Document.plugins")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("HTMLCollection")}} contenant les plugins disponibles.
- {{DOMxRef("Document.pointerLockElement")}} {{ReadOnlyInline}}
  - : Retourne l'élément définit comme cible pour les évènements de souris pendant que le pointeur est verrouillé. Cette propriété vaut `null` si le verrouillage est en cours, si le pointeur est déverrouillé ou si la cible est située dans un autre document.
- {{DOMxRef("Document.prerendering")}} {{ReadOnlyInline}} {{Experimental_Inline}}
  - : : Retourne un booléen indiquant si le document est en cours de pré-rendu, lorsqu'un pré-rendu est initié via la [Speculation Rules API](/fr/docs/Web/API/Speculation_Rules_API).
- {{DOMxRef("Document.scripts")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("HTMLCollection")}} contenant les éléments {{HTMLElement("script")}} du document.
- {{DOMxRef("Document.scrollingElement")}} {{ReadOnlyInline}}
  - : Retourne une référence à l'objet {{DOMxRef('Element')}} correspondant à l'élément qui fait défiler le document.
    {{DOMxRef("Document.styleSheets")}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef('StyleSheetList')}} contenant les objets {{DOMxRef('CSSStyleSheet')}} pour les feuilles de style CSS liées explicitement ou embarquées dans le document.
- {{DOMxRef("Document.timeline")}} {{ReadOnlyInline}}
  - : Retourne la chronologie, sous la forme d'une instance {{DOMxRef("DocumentTimeline")}}, qui est automatiquement créée au chargement de la page.
- {{DOMxRef("Document.visibilityState")}} {{ReadOnlyInline}}
  - : Retourne une chaîne de caractères qui indique l'état de visibilité du document. Les valeurs possibles sont `visible`, `hidden`, `prerender`, et `unloaded`.

### Extensions pour `HTMLDocument`

_L'interface `Document` pour les documents HTML hérite de l'interface {{DOMxRef("HTMLDocument")}} ou est étendue pour ces documents._

- {{DOMxRef("Document.cookie")}}
  - : Retourne une liste, dont les éléments sont séparés par des points-virgules, des cookies du document ou permet de définir un cookie.
- {{DOMxRef("Document.defaultView")}} {{ReadOnlyInline}}
  - : Retourne une référence à l'objet de la fenêtre.
- {{DOMxRef("Document.designMode")}}
  - : Permet d'accéder ou de définir la possibilité d'éditer l'ensemble du document.
- {{DOMxRef("Document.dir")}}
  - : Permet d'accéder ou de définir la directionnalité (écriture de droite à gauche ou de gauche à droite) du document.
- {{DOMxRef("Document.fullscreenEnabled")}} {{ReadOnlyInline}}
  - : Indique si le mode plein écran est disponible.
- {{DOMxRef("Document.lastModified")}} {{ReadOnlyInline}}
  - : Retourne la date à laquelle le document a été modifié pour la dernière fois.
- {{DOMxRef("Document.location")}} {{ReadOnlyInline}}
  - : Retourne l'URI du document courant.
- {{DOMxRef("Document.readyState")}} {{ReadOnlyInline}}
  - : Retourne l'état de chargement du document.
- {{DOMxRef("Document.referrer")}} {{ReadOnlyInline}}
  - : Retourne l'URI de la page qui a lié vers cette page.
- {{DOMxRef("Document.title")}}
  - : Permet d'accéder ou de définir le titre du document courant.
- {{DOMxRef("Document.URL")}} {{ReadOnlyInline}}
  - : Retourne l'emplacement du document sous la forme d'une chaîne de caractères.
    Propriétés nommées
  - : Certains éléments du document sont également exposés comme propriétés&nbsp;:
    - Pour chaque élément HTML {{HTMLElement("embed")}}, {{HTMLElement("form")}}, {{HTMLElement("iframe")}}, {{HTMLElement("img")}} et {{HTMLElement("object")}}, sa propriété `name` (si elle n'est pas vide) est exposée.
      Par exemple, si le document contient `<form name="my_form">`, alors `document["my_form"]` (et son équivalent `document.my_form`) retourne une référence vers cet élément.
    - Pour chaque élément HTML {{HTMLElement("object")}}, sa propriété `id` (si elle n'est pas vide) est exposée.
    - Pour chaque élément HTML {{HTMLElement("img")}} avec un `name` non vide, sa propriété `id` (si elle n'est pas vide) est exposée.

    Si une propriété correspond à un seul élément, cet élément est directement retourné. Si cet élément unique est une iframe, alors sa propriété {{DOMxRef("HTMLIFrameElement/contentWindow", "contentWindow")}} est retournée à la place. Si la propriété correspond à plusieurs éléments, alors un objet {{DOMxRef("HTMLCollection")}} contenant tous ces éléments est retourné.

### Propriétés dépréciées

- {{DOMxRef("Document.alinkColor")}} {{Deprecated_Inline}}
  - : Retourne ou définit la couleur des liens actifs dans le corps du document.
- {{DOMxRef("Document.all")}} {{Deprecated_Inline}}
  - : Donne accès à tous les éléments du document — retourne un objet {{DOMxRef('HTMLAllCollection')}} enraciné sur le nœud document. Propriété héritée, non standard, à ne pas utiliser.
- {{DOMxRef("Document.anchors")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Retourne la liste de toutes les ancres du document.
- {{DOMxRef("Document.applets")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Retourne un objet {{DOMxRef("HTMLCollection")}} vide. Propriété héritée qui retournait la liste des applets du document.
- {{DOMxRef("Document.bgColor")}} {{Deprecated_Inline}}
  - : Obtient ou définit la couleur d'arrière-plan du document courant.
- {{DOMxRef("Document.characterSet","Document.charset")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Alias de {{DOMxRef("Document.characterSet")}}. Utilisez cette propriété à la place.
- {{DOMxRef("Document.domain")}} {{Deprecated_Inline}}
  - : Obtient ou définit le domaine du document courant.
- {{DOMxRef("Document.fgColor")}} {{Deprecated_Inline}}
  - : Obtient ou définit la couleur de premier plan, ou couleur du texte, du document courant.
- {{DOMxRef("Document.fullscreen")}} {{Deprecated_Inline}}
  - : Retourne `true` lorsque le document est en [mode plein écran](/fr/docs/Web/API/Fullscreen_API).
- {{DOMxRef("Document.characterSet", "Document.inputEncoding")}} {{Deprecated_Inline}} {{ReadOnlyInline}}
  - : Alias de {{DOMxRef("Document.characterSet")}}. Utilisez cette propriété à la place.
- {{DOMxRef("Document.lastStyleSheetSet")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Retourne le nom de l'ensemble de feuilles de style qui a été activé en dernier. Vaut `null` tant que l'ensemble n'a pas été changé via {{DOMxRef("Document.selectedStyleSheetSet","selectedStyleSheetSet")}}.
- {{DOMxRef("Document.linkColor")}} {{Deprecated_Inline}}
  - : Obtient ou définit la couleur des hyperliens du document.
- {{DOMxRef("Document.preferredStyleSheetSet")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Retourne l'ensemble de feuilles de style préféré tel que spécifié par l'auteur·ice de la page.
- {{DOMxRef("Document.rootElement")}} {{Deprecated_Inline}}
  - : Comme {{DOMxRef("Document.documentElement")}}, mais uniquement pour les éléments racines {{SVGElement("svg")}}. Utilisez cette propriété à la place.
- {{DOMxRef("Document.selectedStyleSheetSet")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Retourne l'ensemble de feuilles de style actuellement utilisé.
- {{DOMxRef("Document.styleSheetSets")}} {{Deprecated_Inline}} {{ReadOnlyInline}} {{Non-standard_Inline}}
  - : Retourne la liste des ensembles de feuilles de style disponibles sur le document.
- {{DOMxRef("Document.vlinkColor")}} {{Deprecated_Inline}}
  - : Obtient ou définit la couleur des liens visités.
- {{DOMxRef("Document.xmlEncoding")}} {{Deprecated_Inline}}
  - : Retourne l'encodage déterminé par la déclaration XML.
- `Document.xmlStandalone` {{Deprecated_Inline}}
  - : Retourne `true` si la déclaration XML spécifie que le document est autonome (_par exemple, une partie externe de la DTD affecte le contenu du document_), sinon `false`.
- {{DOMxRef("Document.xmlVersion")}} {{Deprecated_Inline}}
  - : Retourne le numéro de version tel que spécifié dans la déclaration XML ou `"1.0"` si la déclaration est absente.

## Méthodes d'instance

_Cette interface hérite également des interfaces {{DOMxRef("Node")}} et {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Document.adoptNode()")}}
  - : Adopte un nœud d'un document externe.
- {{DOMxRef("Document.append()")}}
  - : Insère un ensemble d'objets [`Node`](/fr/docs/Web/API/Node) ou d'objets [`DOMString`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) après le dernier enfant du document.
- {{DOMxRef("Document.ariaNotify()")}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Définit qu'une chaîne de caractères donnée doit être annoncée par un lecteur d'écran.
- {{DOMxRef("Document.browsingTopics()")}} {{Experimental_Inline}} {{Non-standard_Inline}}
  - : Retourne une promesse qui se résout avec un tableau d'objets représentant les sujets principaux pour l'utilisateur·ice, un pour chacune des trois dernières époques. Par défaut, la méthode fait aussi enregistrer par le navigateur la visite de la page courante telle qu'observée par l'appelant·e, afin que le nom d'hôte de la page puisse ensuite être utilisé dans le calcul des sujets. Voir la [Topics API](/fr/docs/Web/API/Topics_API) pour plus de détails.
- `Document.captureEvents()` {{Deprecated_Inline}}
  - : Voir {{DOMxRef("Window.captureEvents")}}.
- {{DOMxRef("Document.caretPositionFromPoint()")}}
  - : Retourne un objet {{DOMxRef('CaretPosition')}} qui contient le nœud DOM contenant le curseur et le décalage du curseur au sein de ce nœud.
- {{DOMxRef("Document.caretRangeFromPoint()")}} {{Non-standard_Inline}}
  - : Obtient un objet {{DOMxRef("Range")}}pour le fragment de document situé aux coordonnées indiquées.
- {{DOMxRef("Document.createAttribute()")}}
  - : Crée un nouvel objet {{DOMxRef("Attr")}} et le renvoie.
- {{DOMxRef("Document.createAttributeNS()")}}
  - : Crée un nouveau nœud d'attribut dans un espace de noms donné et le renvoie.
- {{DOMxRef("Document.createCDATASection()")}}
  - : Crée un nouveau nœud CDATA et le renvoie.
- {{DOMxRef("Document.createComment()")}}
  - : Crée un nouveau nœud de commentaire et le renvoie.
- {{DOMxRef("Document.createDocumentFragment()")}}
  - : Crée un nouveau fragment de document.
- {{DOMxRef("Document.createElement()")}}
  - : Crée un nouvel élément avec le nom de balise indiqué.
- {{DOMxRef("Document.createElementNS()")}}
  - : Crée un nouvel élément avec le nom de balise indiqué et l'espace de noms passé via un URI.
- {{DOMxRef("Document.createEvent()")}} {{Deprecated_Inline}}
  - : Crée un objet d'évènement.
- {{DOMxRef("Document.createNodeIterator()")}}
  - : Crée un objet {{DOMxRef("NodeIterator")}}.
- {{DOMxRef("Document.createProcessingInstruction()")}}
  - : Crée un nouvel objet {{DOMxRef("ProcessingInstruction")}}.
- {{DOMxRef("Document.createRange()")}}
  - : Crée un objet {{DOMxRef("Range")}}.
- {{DOMxRef("Document.createTextNode()")}}
  - : Crée un nœud texte.
- {{DOMxRef("Document.createTouch()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Crée un objet {{DOMxRef("Touch")}}.
- {{DOMxRef("Document.createTouchList()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Crée un objet {{DOMxRef("TouchList")}}.
- {{DOMxRef("Document.createTreeWalker()")}}
  - : Crée un objet {{DOMxRef("TreeWalker")}}.
- {{DOMxRef("Document.elementFromPoint()")}}
  - : Retourne l'élément situé le plus en haut pour les coordonnées indiquées.
- {{DOMxRef("Document.elementsFromPoint()")}}
  - : Retourne un tableau de tous les éléments situés aux coordonnées indiquées.
- {{DOMxRef("Document.enableStyleSheetsForSet()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Active les feuilles de styles pour l'ensemble de feuilles de styles indiqué.
- {{DOMxRef("Document.exitPictureInPicture()")}}
  - : Retire la vidéo de la fenêtre d'incrustation vidéo pour la replacer dans son conteneur original.
- {{DOMxRef("Document.exitPointerLock()")}}
  - : Relâche le verrou du pointeur.
- {{DOMxRef("Document.getAnimations()")}}
  - : Retourne un tableau contenant tous les objets {{DOMxRef("Animation")}} actuellement actifs et dont les éléments cibles sont des descendants du document courant.
- `Document.getBoxQuads()` {{Experimental_Inline}}
  - : Retourne une liste d'objets {{DOMxRef("DOMQuad")}} qui représente les fragments CSS du nœud.
- {{DOMxRef("Document.getElementById()")}}
  - : Retourne une référence objet vers l'élément identifié.
- {{DOMxRef("Document.getElementsByClassName()")}}
  - : Retourne une liste d'éléments avec le nom de classe indiqué.
- {{DOMxRef("Document.getElementsByTagName()")}}
  - : Retourne une liste d'éléments avec la balise indiquée.
- {{DOMxRef("Document.getElementsByTagNameNS()")}}
  - : Retourne une liste d'éléments avec le nom de balise et pour l'espace de noms indiqués.
- {{DOMxRef("Document.getSelection()")}}
  - : Retourne un objet {{DOMxRef("Selection")}} qui représente la portion de texte sélectionnée par l'utilisatrice ou l'utilisateur, ou la position du curseur.
- {{DOMxRef("Document.hasStorageAccess()")}}
  - : Retourne un objet {{JSxRef("Promise")}} qui est résolu avec une valeur booléenne selon que le document a accès à du stockage de premier rang.
- {{DOMxRef("Document.importNode()")}}
  - : Retourne un clone d'un nœud d'un document externe.
- {{DOMxRef("Document.moveBefore()")}}
  - : Déplace un nœud ({{DOMxRef("Node")}}) donné à l'intérieur du nœud DOM `Document` en tant qu'enfant direct, avant un nœud de référence donné, sans retirer puis réinsérer le nœud.
- {{DOMxRef("Document.mozSetImageElement()")}} {{Non-standard_Inline}}
  - : Permet de changer l'élément utilisé comme image d'arrière-plan pour un identifiant d'élément spécifié.
- {{DOMxRef("Document.prepend()")}}
  - : Insère un ensemble d'objet {{DOMxRef("Node")}} ou une chaîne de caractères avant le premier enfant du document.
- {{DOMxRef("Document.querySelector()")}}
  - : Retourne le premier nœud `Element` au sein du document, selon l'ordre du document, qui correspond aux sélecteurs indiqués.
- {{DOMxRef("Document.querySelectorAll()")}}
  - : Retourne une liste de tous les nœuds `Element` du document qui correspondent aux sélecteurs indiqués.
- {{DOMxRef("Document.releaseCapture()")}} {{Non-standard_Inline}}
  - : Relâche la capture de la souris si celle-ci est sur un élément du document courant.
- `Document.releaseEvents()` {{Deprecated_Inline}}
  - : Voir {{DOMxRef("Window.releaseEvents()")}}.
- {{DOMxRef("Document.replaceChildren()")}}
  - : Remplace l'enfant existant du document avec un ensemble de nouveaux enfants indiqué.
- {{DOMxRef("Document.requestStorageAccess()")}}
  - : Permet à un document chargé dans un contexte tiers (c'est-à-dire intégré dans un {{HTMLElement("iframe")}}) de demander l'accès aux cookies non partitionnés, dans les cas où les agents utilisateurs bloquent par défaut l'accès à ces cookies pour les sites chargés dans un contexte tiers afin d'améliorer la confidentialité.
- {{DOMxRef("Document.requestStorageAccessFor()")}} {{Experimental_Inline}}
  - : Permet aux sites de premier niveau de demander l'accès aux cookies tiers pour le compte d'un contenu intégré provenant d'un autre site du même [ensemble de sites liés](/fr/docs/Web/API/Storage_Access_API/Related_website_sets).
- {{DOMxRef("Document.startViewTransition()")}}
  - : Démarre une nouvelle {{DOMxRef("View Transition API", "transition de vue", "", "nocode")}} et retourne un objet {{DOMxRef("ViewTransition")}} pour la représenter.

L'interface `Document` est étendue avec l'interface {{DOMxRef("XPathEvaluator")}}&nbsp;:

- {{DOMxRef("Document.createExpression()")}}
  - : Compile une {{DOMxRef("XPathExpression")}} qui peut ensuite être utilisée pour des évaluations (répétées).
- {{DOMxRef("Document.createNSResolver()")}} {{Deprecated_Inline}}
  - : Retourne le nœud passé en entrée tel quel.
- {{DOMxRef("Document.evaluate()")}}
  - : Évalue une expression XPath.

### Extension pour les documents HTML

Pour les documents HTML, l'interface `Document` hérite de l'interface {{DOMxRef("HTMLDocument")}} ou est étendue pour ces documents&nbsp;:

- {{DOMxRef("Document.clear()")}} {{Deprecated_Inline}}
  - : Pour la majorité des navigateurs récents, y compris pour les versions récentes de Firefox et d'Internet Explorer, cette méthode ne fait rien.
- {{DOMxRef("Document.close()")}}
  - : Ferme le flux d'écriture sur un document.
- {{DOMxRef("Document.execCommand()")}} {{Deprecated_Inline}}
  - : Pour un document éditable, exécute une commande de formatage.
- {{DOMxRef("Document.getElementsByName()")}}
  - : Retourne une liste des éléments avec le nom indiqué.
- {{DOMxRef("Document.hasFocus()")}}
  - : Retourne `true` si la sélection est situé à l'intérieur du document indiqué.
- {{DOMxRef("Document.open()")}}
  - : Ouvre le flux d'écriture sur un document.
- {{DOMxRef("Document.queryCommandEnabled()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Retourne `true` si la commande de formatage peut être exécutée sur l'intervalle indiqué.
- `Document.queryCommandIndeterm()` {{Deprecated_Inline}}
  - : Retourne `true` si la commande de formatage est dans un état indéterminé pour l'intervalle courant.
- {{DOMxRef("Document.queryCommandState()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Retourne `true` si la commande de formatage a été exécutée sur l'intervalle courant.
- {{DOMxRef("Document.queryCommandSupported()")}} {{Deprecated_Inline}} {{Non-standard_Inline}}
  - : Retourne `true` si la commande de formatage est prise en charge sur l'intervalle courant.
- `Document.queryCommandValue()` {{Deprecated_Inline}}
  - : Retourne la valeur de l'intervalle courant pour une commande de formatage.
- {{DOMxRef("Document.write()")}} {{Deprecated_Inline}}
  - : Écrit du texte dans un document.
- {{DOMxRef("Document.writeln()")}} {{Deprecated_Inline}}
  - : Écrit une ligne de texte dans un document.

## Méthodes statiques

_Cette interface hérite également des interfaces {{DOMxRef("Node")}} et {{DOMxRef("EventTarget")}}._

- {{DOMxRef("Document/parseHTML_static", "Document.parseHTML()")}}
  - : Crée un nouvel objet `Document` à partir d'une chaîne HTML, de façon sécurisée contre les attaques XSS, avec une étape de sanitisation.
- {{DOMxRef("Document/parseHTMLUnsafe_static", "Document.parseHTMLUnsafe()")}}
  - : Crée un nouvel objet `Document` à partir d'une chaîne HTML sans effectuer de sanitisation.
    La chaîne de caractères peut contenir des racines d'ombre déclaratives.

## Évènements

L'écoute de ces évènements peut être effectuée avec `addEventListener()` ou en affectant un gestionnaire d'évènement à la propriété `on<nomdevenement>` correspondante à cette interface.

- {{DOMxRef("Document.afterscriptexecute_event", "afterscriptexecute")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Déclenché lorsqu'un élément statique {{HTMLElement("script")}} finit d'exécuter son script.
- {{DOMxRef("Document.beforescriptexecute_event", "beforescriptexecute")}} {{Non-standard_Inline}} {{Deprecated_Inline}}
  - : Déclenché lorsqu'un élément statique {{HTMLElement("script")}} est sur le point de commencer son exécution.
- {{DOMxRef("Document.prerenderingchange_event", "prerenderingchange")}} {{Experimental_Inline}}
  - : Déclenché sur un document pré-rendu lorsqu'il est activé (c'est-à-dire lorsque l'utilisateur·ice affiche la page).
- {{DOMxRef("Document.securitypolicyviolation_event", "securitypolicyviolation")}}
  - : Déclenché lorsqu'une politique de sécurité du contenu est violée.
- {{DOMxRef("Document/visibilitychange_event", "visibilitychange")}}
  - : Déclenché lorsque le contenu d'un onglet devient visible ou est masqué.

### Évènements liés aux animations

- [`animationcancel`](/fr/docs/Web/API/Element/animationcancel_event)
  - : Déclenché lorsqu'une animation est interrompue de façon inattendue. Également disponible avec la propriété [`onanimationcancel`](/fr/docs/Web/API/Element/animationcancel_event).
- [`animationend`](/fr/docs/Web/API/Element/animationend_event)
  - : Déclenché lorsqu'une animation s'est terminée normalement. Également disponible avec la propriété [`onanimationend`](/fr/docs/Web/API/Element/animationend_event).
- [`animationiteration`](/fr/docs/Web/API/Element/animationiteration_event)
  - : Déclenché lorsqu'une itération d'une animation est terminée. Également disponible avec la propriété [`onanimationiteration`](/fr/docs/Web/API/Element/animationiteration_event).
- [`animationstart`](/fr/docs/Web/API/Element/animationstart_event)
  - : Déclenché au démarrage d'une animation. Également disponible avec la propriété [`onanimationstart`](/fr/docs/Web/API/Element/animationstart_event).

### Évènements liés au mode plein écran

- {{DOMxRef("Document/fullscreenchange_event", "fullscreenchange")}}
  - : Déclenché lorsque le `Document` entre ou sort du mode [plein écran](/fr/docs/Web/API/Fullscreen_API/Guide).
- {{DOMxRef("Document/fullscreenerror_event", "fullscreenerror")}}
  - : Déclenché lorsqu'une erreur se produit lors d'une tentative d'entrée ou de sortie du mode [plein écran](/fr/docs/Web/API/Fullscreen_API/Guide).

### Évènements de chargement et de déchargement

- {{DOMxRef("Document/DOMContentLoaded_event", "DOMContentLoaded")}}
  - : Déclenché lorsque le document a été complètement chargé et analysé, sans attendre la fin du chargement des feuilles de style, des images et des sous-cadres.
- {{DOMxRef("Document/readystatechange_event", "readystatechange")}}
  - : Déclenché lorsque l'attribut {{DOMxRef("Document/readyState", "readyState")}} d'un document a changé.

### Évènements de verrouillage du pointeur

- {{DOMxRef("Document/pointerlockchange_event", "pointerlockchange")}}
  - : Déclenché lorsque le pointeur est verrouillé ou déverrouillé.
- {{DOMxRef("Document/pointerlockerror_event", "pointerlockerror")}}
  - : Déclenché lorsque le verrouillage du pointeur a échoué.

### Évènements de défilement

- {{DOMxRef("Document/scroll_event", "scroll")}}
  - : Déclenché lorsque la vue du document ou un élément a été défilé.
- {{DOMxRef("Document/scrollend_event", "scrollend")}}
  - : Déclenché lorsque la vue du document ou un élément a terminé son défilement.
- {{DOMxRef("Document/scrollsnapchange_event", "scrollsnapchange")}} {{Experimental_Inline}}
  - : Déclenché sur le conteneur de défilement à la fin d'une opération de défilement lorsqu'une nouvelle cible d'accrochage a été sélectionnée.
- {{DOMxRef("Document/scrollsnapchanging_event", "scrollsnapchanging")}} {{Experimental_Inline}}
  - : Déclenché sur le conteneur de défilement lorsque le navigateur détermine qu'une nouvelle cible d'accrochage est en attente, c'est-à-dire qu'elle sera sélectionnée à la fin du geste de défilement en cours.

### Évènements de sélection

- {{DOMxRef("Document/selectionchange_event", "selectionchange")}}
  - : Déclenché lorsque la sélection textuelle courante d'un document a changé.

### Évènements propagés

Tous les évènements qui se propagent n'atteignent pas forcément l'objet `Document`. Seuls les évènements suivants peuvent être écoutés sur l'objet `Document` par l'utilisateur·ice&nbsp;:

- `abort`
- {{DOMxRef("Element/auxclick_event", "auxclick")}}
- {{DOMxRef("Element/beforeinput_event", "beforeinput")}}
- {{DOMxRef("Element/beforematch_event", "beforematch")}}
- {{DOMxRef("HTMLElement/beforetoggle_event", "beforetoggle")}}
- {{DOMxRef("Element/blur_event", "blur")}}
- `cancel`
- {{DOMxRef("HTMLMediaElement/canplay_event", "canplay")}}
- {{DOMxRef("HTMLMediaElement/canplaythrough_event", "canplaythrough")}}
- {{DOMxRef("HTMLElement/change_event", "change")}}
- {{DOMxRef("Element/click_event", "click")}}
- {{DOMxRef("HTMLDialogElement/close_event", "close")}}
- {{DOMxRef("HTMLCanvasElement/contextlost_event", "contextlost")}}
- {{DOMxRef("Element/contextmenu_event", "contextmenu")}}
- {{DOMxRef("HTMLCanvasElement/contextrestored_event", "contextrestored")}}
- {{DOMxRef("Element/copy_event", "copy")}}
- {{DOMxRef("HTMLTrackElement/cuechange_event", "cuechange")}}
- {{DOMxRef("Element/cut_event", "cut")}}
- {{DOMxRef("Element/dblclick_event", "dblclick")}}
- {{DOMxRef("HTMLElement/drag_event", "drag")}}
- {{DOMxRef("HTMLElement/dragend_event", "dragend")}}
- {{DOMxRef("HTMLElement/dragenter_event", "dragenter")}}
- {{DOMxRef("HTMLElement/dragleave_event", "dragleave")}}
- {{DOMxRef("HTMLElement/dragover_event", "dragover")}}
- {{DOMxRef("HTMLElement/dragstart_event", "dragstart")}}
- {{DOMxRef("HTMLElement/drop_event", "drop")}}
- {{DOMxRef("HTMLMediaElement/durationchange_event", "durationchange")}}
- {{DOMxRef("HTMLMediaElement/emptied_event", "emptied")}}
- {{DOMxRef("HTMLMediaElement/ended_event", "ended")}}
- {{DOMxRef("HTMLElement/error_event", "error")}}
- {{DOMxRef("Element/focus_event", "focus")}}
- {{DOMxRef("HTMLFormElement/formdata_event", "formdata")}}
- {{DOMxRef("Element/input_event", "input")}}
- {{DOMxRef("HTMLInputElement/invalid_event", "invalid")}}
- {{DOMxRef("Element/keydown_event", "keydown")}}
- {{DOMxRef("Element/keypress_event", "keypress")}}
- {{DOMxRef("Element/keyup_event", "keyup")}}
- {{DOMxRef("HTMLElement/load_event", "load")}}
- {{DOMxRef("HTMLMediaElement/loadeddata_event", "loadeddata")}}
- {{DOMxRef("HTMLMediaElement/loadedmetadata_event", "loadedmetadata")}}
- {{DOMxRef("HTMLMediaElement/loadstart_event", "loadstart")}}
- {{DOMxRef("Element/mousedown_event", "mousedown")}}
- {{DOMxRef("Element/mouseenter_event", "mouseenter")}}
- {{DOMxRef("Element/mouseleave_event", "mouseleave")}}
- {{DOMxRef("Element/mousemove_event", "mousemove")}}
- {{DOMxRef("Element/mouseout_event", "mouseout")}}
- {{DOMxRef("Element/mouseover_event", "mouseover")}}
- {{DOMxRef("Element/mouseup_event", "mouseup")}}
- {{DOMxRef("Element/paste_event", "paste")}}
- {{DOMxRef("HTMLMediaElement/pause_event", "pause")}}
- {{DOMxRef("HTMLMediaElement/play_event", "play")}}
- {{DOMxRef("HTMLMediaElement/playing_event", "playing")}}
- {{DOMxRef("HTMLMediaElement/progress_event", "progress")}}
- {{DOMxRef("HTMLMediaElement/ratechange_event", "ratechange")}}
- {{DOMxRef("HTMLFormElement/reset_event", "reset")}}
- {{DOMxRef("HTMLVideoElement/resize_event", "resize")}}
- {{DOMxRef("Element/scroll_event", "scroll")}}
- {{DOMxRef("Element/scrollend_event", "scrollend")}}
- {{DOMxRef("Element/securitypolicyviolation_event", "securitypolicyviolation")}}
- {{DOMxRef("HTMLMediaElement/seeked_event", "seeked")}}
- {{DOMxRef("HTMLMediaElement/seeking_event", "seeking")}}
- {{DOMxRef("HTMLInputElement/select_event", "select")}}
- {{DOMxRef("HTMLSlotElement/slotchange_event", "slotchange")}}
- {{DOMxRef("HTMLMediaElement/stalled_event", "stalled")}}
- {{DOMxRef("HTMLFormElement/submit_event", "submit")}}
- {{DOMxRef("HTMLMediaElement/suspend_event", "suspend")}}
- {{DOMxRef("HTMLMediaElement/timeupdate_event", "timeupdate")}}
- {{DOMxRef("HTMLElement/toggle_event", "toggle")}}
- {{DOMxRef("HTMLMediaElement/volumechange_event", "volumechange")}}
- {{DOMxRef("HTMLMediaElement/waiting_event", "waiting")}}
- {{DOMxRef("Element/wheel_event", "wheel")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
