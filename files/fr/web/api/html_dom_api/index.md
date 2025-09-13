---
title: L'API HTML DOM
slug: Web/API/HTML_DOM_API
l10n:
  sourceCommit: 58cc81b21f777d745877ec1430df8ba2852ff411
---

{{DefaultAPISidebar("HTML DOM")}}

L'**API HTML DOM** est composée des interfaces qui définissent les fonctionnalités de chacun des {{Glossary("element", "éléments")}} dans {{Glossary("HTML")}}, ainsi que des types et interfaces de support sur lesquels ils s'appuient.

Les domaines fonctionnels inclus dans l'API HTML DOM comprennent&nbsp;:

- L'accès aux éléments HTML et leur contrôle via le {{Glossary("DOM")}}.
- L'accès aux données des formulaires et leur manipulation.
- L'interaction avec le contenu des images 2D et le contexte d'un {{HTMLElement("canvas")}} HTML, par exemple pour dessiner par-dessus.
- La gestion des médias associés aux éléments multimédias HTML ({{HTMLElement("audio")}} et {{HTMLElement("video")}}).
- Le glisser-déposer de contenu sur les pages web.
- L'accès à l'historique de navigation du navigateur.
- Des interfaces de support et de connexion pour d'autres API telles que [Web Components](/fr/docs/Web/API/Web_components), {{DOMxRef("Web_Storage_API", "Web Storage", "", "1")}}, {{DOMxRef("Web_Workers_API", "Web Workers", "", "1")}}, {{DOMxRef("WebSockets_API", "WebSocket", "", "1")}} et {{DOMxRef("Server-sent_events", "Server-sent events", "", "1")}}.

## Concepts et utilisation du HTML DOM

Dans cet article, nous nous concentrerons sur les parties du HTML DOM qui impliquent l'interaction avec des éléments HTML. Les discussions sur d'autres domaines, tels que {{DOMxRef("HTML_Drag_and_Drop_API", "Drag and Drop", "", "1")}}, {{DOMxRef("WebSockets_API", "WebSockets", "", "1")}}, {{DOMxRef("Web_Storage_API", "Web Storage", "", "1")}}, etc. se trouvent dans la documentation de ces API.

### Structure d'un document HTML

Le Document Object Model ({{Glossary("DOM")}}) est une architecture qui décrit la structure d'un {{domxref("document")}}&nbsp;; chaque document est représenté par une instance de l'interface {{domxref("Document")}}. Un document, à son tour, consiste en un arbre hiérarchique de **nœuds**, dans lequel un nœud est un enregistrement fondamental représentant un seul objet au sein du document (tel qu'un élément ou un nœud de texte).

Les nœuds peuvent être strictement organisationnels, fournissant un moyen de regrouper d'autres nœuds ou un point à partir duquel une hiérarchie peut être construite&nbsp;; d'autres nœuds peuvent représenter des composants visibles d'un document. Chaque nœud est basé sur l'interface {{domxref("Node")}}, qui fournit des propriétés pour obtenir des informations sur le nœud ainsi que des méthodes pour créer, supprimer et organiser des nœuds au sein du DOM.

Les nœuds n'ont pas de notion d'inclure le contenu réellement affiché dans le document. Ce sont des récipients vides. La notion fondamentale d'un nœud pouvant représenter un contenu visuel est introduite par l'interface {{domxref("Element")}}. Une instance d'objet `Element` représente un seul élément dans un document créé à l'aide soit de HTML, soit d'un vocabulaire {{glossary("XML")}} tel que {{glossary("SVG")}}.

Par exemple, considérons un document avec deux éléments, dont l'un possède deux autres éléments imbriqués à l'intérieur&nbsp;:

![Structure d'un document avec des éléments à l'intérieur d'un document dans une fenêtre](dom-structure.svg)

Alors que l'interface {{domxref("Document")}} est définie dans la spécification {{DOMxRef("Document_Object_Model", "DOM", "", "1")}}, la spécification HTML l'enrichit significativement pour ajouter des informations spécifiques à l'utilisation du DOM dans le contexte d'un navigateur web, ainsi qu'à son utilisation pour représenter spécifiquement des documents HTML.

Parmi les éléments ajoutés à `Document` par la norme HTML&nbsp;:

- La prise en charge de l'accès à diverses informations fournies par les en-têtes {{Glossary("HTTP")}} lors du chargement de la page, telles que la {{DOMxRef("Document/location", "location", "", "1")}} depuis laquelle le document a été chargé, les {{DOMxRef("Document/cookie", "cookies", "", "1")}}, la {{DOMxRef("Document/lastModified", "date de modification", "", "1")}}, le {{DOMxRef("Document/referrer", "site référent", "", "1")}}, etc.
- L'accès à des listes d'éléments dans le bloc {{HTMLElement("head")}} du document et dans le {{DOMxRef("Document/body", "body", "", "1")}}, ainsi qu'à des listes des {{DOMxRef("Document/images", "images", "", "1")}}, {{DOMxRef("Document/links", "liens", "", "1")}}, {{DOMxRef("Document/scripts", "scripts", "", "1")}}, etc. contenus dans le document.
- La prise en charge de l'interaction avec l'utilisateur·ice en examinant le {{DOMxRef("Document/hasFocus", "focus", "", "1")}} et en exécutant des commandes sur le [contenu éditable](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable).
- Des gestionnaires d'événements pour les événements de document définis par la norme HTML afin de permettre l'accès aux événements de {{DOMxRef("MouseEvent", "souris", "", "1")}} et de {{DOMxRef("KeyboardEvent", "clavier", "", "1")}}, au {{DOMxRef("HTML_Drag_and_Drop_API", "glisser-déposer", "", "1")}}, au {{DOMxRef("HTMLMediaElement", "contrôle des médias", "", "1")}}, et plus encore.
- Des gestionnaires d'événements pour des événements pouvant être délivrés à la fois aux éléments et aux documents&nbsp;; ceux-ci incluent actuellement uniquement les actions {{DOMxRef("Element/copy_event", "copy")}}, {{DOMxRef("Element/cut_event", "cut")}} et {{DOMxRef("Element/paste_event", "paste")}}.

### Interfaces des éléments HTML

L'interface `Element` a été davantage adaptée pour représenter spécifiquement les éléments HTML en introduisant l'interface {{domxref("HTMLElement")}}, dont héritent toutes les classes d'éléments HTML plus spécifiques. Cela étend la classe `Element` pour ajouter des fonctionnalités générales spécifiques à HTML aux nœuds d'élément. Les propriétés ajoutées par `HTMLElement` comprennent par exemple {{domxref("HTMLElement.hidden", "hidden")}} et {{domxref("HTMLElement.innerText", "innerText")}}.

Un document {{Glossary("HTML")}} est un arbre DOM dans lequel chacun des nœuds est un élément HTML, représenté par l'interface {{domxref("HTMLElement")}}. La classe `HTMLElement`, à son tour, implémente `Node`, donc chaque élément est aussi un nœud (mais l'inverse n'est pas vrai). De cette manière, les fonctionnalités structurelles implémentées par l'interface {{domxref("Node")}} sont également disponibles pour les éléments HTML, leur permettant d'être imbriqués les uns dans les autres, créés et supprimés, déplacés, etc.

L'interface `HTMLElement` est cependant générique, ne fournissant que les fonctionnalités communes à tous les éléments HTML telles que l'ID de l'élément, ses coordonnées, le HTML constituant l'élément, des informations sur la position de défilement, etc.

Afin d'étendre les fonctionnalités de base de l'interface `HTMLElement` pour fournir les caractéristiques nécessaires à un élément spécifique, la classe `HTMLElement` est sous-classée pour ajouter les propriétés et méthodes nécessaires. Par exemple, l'élément {{HTMLElement("canvas")}} est représenté par un objet de type {{domxref("HTMLCanvasElement")}}. `HTMLCanvasElement` augmente le type `HTMLElement` en ajoutant des propriétés telles que {{domxref("HTMLCanvasElement.height", "height")}} et des méthodes comme {{domxref("HTMLCanvasElement.getContext", "getContext()")}} pour fournir des fonctionnalités spécifiques au canvas.

L'héritage global des classes d'éléments HTML ressemble à ceci&nbsp;:

![Hiérarchie des interfaces pour les éléments HTML](html-dom-hierarchy.svg)

Ainsi, un élément hérite des propriétés et méthodes de tous ses ancêtres. Par exemple, considérons un élément {{HTMLElement("a")}}, qui est représenté dans le DOM par un objet de type {{domxref("HTMLAnchorElement")}}. L'élément inclut alors les propriétés et méthodes spécifiques à l'ancre décrites dans la documentation de cette classe, mais aussi celles définies par {{domxref("HTMLElement")}} et {{domxref("Element")}}, ainsi que par {{domxref("Node")}} et, finalement, {{domxref("EventTarget")}}.

Chaque niveau définit un aspect clé de l'utilité de l'élément. À partir de `Node`, l'élément hérite des concepts entourant la capacité pour l'élément d'être contenu par un autre élément, et de contenir d'autres éléments lui-même. D'une importance particulière est ce qui est gagné en héritant de `EventTarget`&nbsp;: la capacité de recevoir et de gérer des événements tels que des clics de souris, des événements de lecture et de pause, etc.

Il existe des éléments qui partagent des points communs et ont donc un type intermédiaire supplémentaire. Par exemple, les éléments {{HTMLElement("audio")}} et {{HTMLElement("video")}} présentent tous deux des médias audiovisuels. Les types correspondants, {{domxref("HTMLAudioElement")}} et {{domxref("HTMLVideoElement")}}, sont tous deux basés sur le type commun {{domxref("HTMLMediaElement")}}, qui à son tour est basé sur {{domxref("HTMLElement")}}, et ainsi de suite. `HTMLMediaElement` définit les méthodes et propriétés communes entre les éléments audio et vidéo.

Ces interfaces spécifiques aux éléments constituent la majorité de l'API HTML DOM, et sont l'objet de cet article. Pour en savoir plus sur la structure réelle du {{DOMxRef("Document_Object_Model", "DOM", "", "1")}}, voir {{DOMxRef("Document_Object_Model/Introduction", "Introduction au DOM", "", "1")}}.

## Public cible du HTML DOM

Les fonctionnalités exposées par le HTML DOM font partie des API les plus couramment utilisées dans la boîte à outils d'un·e développeur·euse web.
Toutes les applications web sauf les plus simples utiliseront certaines fonctionnalités du HTML DOM.

## Interfaces de l'API HTML DOM

La majorité des interfaces qui composent l'API HTML DOM correspondent presque un pour un à des éléments HTML individuels, ou à un petit groupe d'éléments ayant des fonctionnalités similaires. En outre, l'API HTML DOM inclut quelques interfaces et types pour prendre en charge les interfaces des éléments HTML.

### Interfaces des éléments HTML

Ces interfaces représentent des éléments HTML spécifiques (ou des ensembles d'éléments apparentés qui partagent les mêmes propriétés et méthodes associées).

- {{DOMxRef("HTMLAnchorElement")}}
- {{DOMxRef("HTMLAreaElement")}}
- {{DOMxRef("HTMLAudioElement")}}
- {{DOMxRef("HTMLBaseElement")}}
- {{DOMxRef("HTMLBodyElement")}}
- {{DOMxRef("HTMLBRElement")}}
- {{DOMxRef("HTMLButtonElement")}}
- {{DOMxRef("HTMLCanvasElement")}}
- {{DOMxRef("HTMLDataElement")}}
- {{DOMxRef("HTMLDataListElement")}}
- {{DOMxRef("HTMLDetailsElement")}}
- {{DOMxRef("HTMLDialogElement")}}
- {{DOMxRef("HTMLDirectoryElement")}}
- {{DOMxRef("HTMLDivElement")}}
- {{DOMxRef("HTMLDListElement")}}
- {{DOMxRef("HTMLElement")}}
- {{DOMxRef("HTMLEmbedElement")}}
- {{DOMxRef("HTMLFieldSetElement")}}
- {{DOMxRef("HTMLFormElement")}}
- {{DOMxRef("HTMLHRElement")}}
- {{DOMxRef("HTMLHeadElement")}}
- {{DOMxRef("HTMLHeadingElement")}}
- {{DOMxRef("HTMLHtmlElement")}}
- {{DOMxRef("HTMLIFrameElement")}}
- {{DOMxRef("HTMLImageElement")}}
- {{DOMxRef("HTMLInputElement")}}
- {{DOMxRef("HTMLLabelElement")}}
- {{DOMxRef("HTMLLegendElement")}}
- {{DOMxRef("HTMLLIElement")}}
- {{DOMxRef("HTMLLinkElement")}}
- {{DOMxRef("HTMLMapElement")}}
- {{DOMxRef("HTMLMediaElement")}}
- {{DOMxRef("HTMLMenuElement")}}
- {{DOMxRef("HTMLMetaElement")}}
- {{DOMxRef("HTMLMeterElement")}}
- {{DOMxRef("HTMLModElement")}}
- {{DOMxRef("HTMLObjectElement")}}
- {{DOMxRef("HTMLOListElement")}}
- {{DOMxRef("HTMLOptGroupElement")}}
- {{DOMxRef("HTMLOptionElement")}}
- {{DOMxRef("HTMLOutputElement")}}
- {{DOMxRef("HTMLParagraphElement")}}
- {{DOMxRef("HTMLPictureElement")}}
- {{DOMxRef("HTMLPreElement")}}
- {{DOMxRef("HTMLProgressElement")}}
- {{DOMxRef("HTMLQuoteElement")}}
- {{DOMxRef("HTMLScriptElement")}}
- {{DOMxRef("HTMLSelectElement")}}
- {{DOMxRef("HTMLSlotElement")}}
- {{DOMxRef("HTMLSourceElement")}}
- {{DOMxRef("HTMLSpanElement")}}
- {{DOMxRef("HTMLStyleElement")}}
- {{DOMxRef("HTMLTableCaptionElement")}}
- {{DOMxRef("HTMLTableCellElement")}}
- {{DOMxRef("HTMLTableColElement")}}
- {{DOMxRef("HTMLTableElement")}}
- {{DOMxRef("HTMLTableRowElement")}}
- {{DOMxRef("HTMLTableSectionElement")}}
- {{DOMxRef("HTMLTemplateElement")}}
- {{DOMxRef("HTMLTextAreaElement")}}
- {{DOMxRef("HTMLTimeElement")}}
- {{DOMxRef("HTMLTitleElement")}}
- {{DOMxRef("HTMLTrackElement")}}
- {{DOMxRef("HTMLUListElement")}}
- {{DOMxRef("HTMLUnknownElement")}}
- {{DOMxRef("HTMLVideoElement")}}

#### Interfaces d'éléments HTML dépréciées

- {{DOMxRef("HTMLMarqueeElement")}} {{deprecated_inline}}

#### Interfaces d'éléments HTML obsolètes

- {{DOMxRef("HTMLFontElement")}} {{deprecated_inline}}
- {{DOMxRef("HTMLFrameElement")}} {{deprecated_inline}}
- {{DOMxRef("HTMLFrameSetElement")}} {{deprecated_inline}}

### Interfaces d'intégration aux applications web et au navigateur

Ces interfaces offrent un accès à la fenêtre et au document du navigateur qui contiennent le HTML, ainsi qu'à l'état du navigateur, aux plugins disponibles (le cas échéant) et à diverses options de configuration.

- {{DOMxRef("BarProp")}}
- {{DOMxRef("Navigator")}}
- {{DOMxRef("Window")}}

#### Interfaces d'intégration dépréciées

- {{DOMxRef("External")}} {{deprecated_inline}}

#### Interfaces d'intégration obsolètes

- {{DOMxRef("Plugin")}} {{deprecated_inline}}
- {{DOMxRef("PluginArray")}} {{deprecated_inline}}

### Interfaces de prise en charge des formulaires

Ces interfaces fournissent la structure et les fonctionnalités requises par les éléments utilisés pour créer et gérer des formulaires, y compris les éléments {{HTMLElement("form")}} et {{HTMLElement("input")}}.

- {{DOMxRef("FormDataEvent")}}
- {{DOMxRef("HTMLFormControlsCollection")}}
- {{DOMxRef("HTMLOptionsCollection")}}
- {{DOMxRef("RadioNodeList")}}
- {{DOMxRef("ValidityState")}}

### Interfaces de canvas et d'image

Ces interfaces représentent des objets utilisés par l'API Canvas ainsi que l'élément {{HTMLElement("img")}} et les éléments {{HTMLElement("picture")}}.

- {{DOMxRef("CanvasGradient")}}
- {{DOMxRef("CanvasPattern")}}
- {{DOMxRef("CanvasRenderingContext2D")}}
- {{DOMxRef("ImageBitmap")}}
- {{DOMxRef("ImageBitmapRenderingContext")}}
- {{DOMxRef("ImageData")}}
- {{DOMxRef("OffscreenCanvas")}}
- {{DOMxRef("OffscreenCanvasRenderingContext2D")}}
- {{DOMxRef("Path2D")}}
- {{DOMxRef("TextMetrics")}}

### Interfaces multimédias

Les interfaces multimédias fournissent un accès HTML au contenu des éléments multimédias&nbsp;: {{HTMLElement("audio")}} et {{HTMLElement("video")}}.

- {{DOMxRef("AudioTrack")}}
- {{DOMxRef("AudioTrackList")}}
- {{DOMxRef("MediaError")}}
- {{DOMxRef("TextTrack")}}
- {{DOMxRef("TextTrackCue")}}
- {{DOMxRef("TextTrackCueList")}}
- {{DOMxRef("TextTrackList")}}
- {{DOMxRef("TimeRanges")}}
- {{DOMxRef("TrackEvent")}}
- {{DOMxRef("VideoTrack")}}
- {{DOMxRef("VideoTrackList")}}

### Interfaces de glisser-déposer

Ces interfaces sont utilisées par l'[API de glisser-déposer HTML](/fr/docs/Web/API/HTML_Drag_and_Drop_API) pour représenter des éléments individuels pouvant être glissés (ou en cours de glissement), des groupes d'éléments glissés ou pouvant être glissés, et pour gérer le processus de glisser-déposer.

- {{DOMxRef("DataTransfer")}}
- {{DOMxRef("DataTransferItem")}}
- {{DOMxRef("DataTransferItemList")}}
- {{DOMxRef("DragEvent")}}

### Interfaces de l'historique des pages

Les interfaces de l'API History permettent d'accéder aux informations sur l'historique du navigateur, ainsi que de faire avancer et reculer l'onglet courant du navigateur dans cet historique.

- {{DOMxRef("BeforeUnloadEvent")}}
- {{DOMxRef("HashChangeEvent")}}
- {{DOMxRef("History")}}
- {{DOMxRef("Location")}}
- {{DOMxRef("PageRevealEvent")}}
- {{DOMxRef("PageSwapEvent")}}
- {{DOMxRef("PageTransitionEvent")}}
- {{DOMxRef("PopStateEvent")}}

### Interfaces des Web Components

Ces interfaces sont utilisées par l'[API Web Components](/fr/docs/Web/API/Web_components) pour créer et gérer les [éléments personnalisés](/fr/docs/Web/API/Web_components/Using_custom_elements) disponibles.

- {{DOMxRef("CustomElementRegistry")}}

### Interfaces diverses et de support

Ces types d'objets de support sont utilisés de diverses manières dans l'API HTML DOM. De plus, {{domxref("PromiseRejectionEvent")}} représente l'événement émis lorsqu'une {{Glossary("JavaScript")}} {{jsxref("Promise")}} est rejetée.

- {{DOMxRef("DOMStringList")}}
- {{DOMxRef("DOMStringMap")}}
- {{DOMxRef("ErrorEvent")}}
- {{DOMxRef("HTMLAllCollection")}}
- {{DOMxRef("MimeType")}}
- {{DOMxRef("MimeTypeArray")}}
- {{DOMxRef("PromiseRejectionEvent")}}

### Interfaces appartenant à d'autres API

Plusieurs interfaces sont techniquement définies dans la spécification HTML tout en faisant partie d'autres API.

#### Interfaces du stockage web

L'{{DOMxRef("Web_Storage_API", "API Web Storage", "", "1")}} fournit la capacité pour les sites web de stocker des données temporairement ou de manière permanente sur l'appareil de l'utilisateur·ice pour une réutilisation ultérieure.

- {{DOMxRef("Storage")}}
- {{DOMxRef("StorageEvent")}}

#### Interfaces des Web Workers

Ces interfaces sont utilisées par l'{{DOMxRef("Web_Workers_API", "API Web Workers", "", "1")}} à la fois pour établir la capacité des workers à interagir avec une application et son contenu, et pour prendre en charge la messagerie entre fenêtres ou applications.

- {{DOMxRef("BroadcastChannel")}}
- {{DOMxRef("DedicatedWorkerGlobalScope")}}
- {{DOMxRef("MessageChannel")}}
- {{DOMxRef("MessageEvent")}}
- {{DOMxRef("MessagePort")}}
- {{DOMxRef("SharedWorker")}}
- {{DOMxRef("SharedWorkerGlobalScope")}}
- {{DOMxRef("Worker")}}
- {{DOMxRef("WorkerGlobalScope")}}
- {{DOMxRef("WorkerLocation")}}
- {{DOMxRef("WorkerNavigator")}}

#### Interfaces WebSocket

Ces interfaces, définies par la spécification HTML, sont utilisées par l'{{DOMxRef("WebSockets_API", "API WebSockets", "", "1")}}.

- {{DOMxRef("CloseEvent")}}
- {{DOMxRef("WebSocket")}}

#### Interfaces des événements envoyés par le serveur

L'interface {{domxref("EventSource")}} représente la source qui a envoyé ou envoie des {{DOMxRef("Server-sent_events", "événements envoyés par le serveur", "", "1")}}.

- {{DOMxRef("EventSource")}}

## Exemples

Dans cet exemple, l'événement {{domxref("Element/input_event", "input")}} d'un élément {{HTMLElement("input")}} est surveillé afin de mettre à jour l'état du bouton "submit" d'un formulaire selon qu'un champ donné a actuellement une valeur ou non.

### JavaScript

```js
const champNom = document.getElementById("userName");
const boutonEnvoyer = document.getElementById("sendButton");

boutonEnvoyer.disabled = true;
// [note : ceci est désactivé car cela fait toujours charger cet article avec cet exemple focalisé et déroulé dans la vue]
// champNom.focus();

champNom.addEventListener("input", (event) => {
  const elem = event.target;
  const valid = elem.value.length !== 0;

  if (valid && boutonEnvoyer.disabled) {
    boutonEnvoyer.disabled = false;
  } else if (!valid && !boutonEnvoyer.disabled) {
    boutonEnvoyer.disabled = true;
  }
});
```

Ce code utilise la méthode {{domxref("Document.getElementById", "getElementById()")}} de l'interface {{domxref("Document")}} pour obtenir l'objet DOM représentant les éléments {{HTMLElement("input")}} dont les ID sont `userName` et `sendButton`. Avec ceux-ci, nous pouvons accéder aux propriétés et méthodes qui fournissent des informations sur ces éléments et en donnent le contrôle.

L'objet {{domxref("HTMLInputElement")}} pour la propriété {{domxref("HTMLInputElement.disabled", "disabled")}} du bouton «&nbsp;Envoyer&nbsp;» est défini à `true`, ce qui désactive le bouton «&nbsp;Envoyer&nbsp;» afin qu'il ne puisse pas être cliqué. De plus, le champ de saisie du nom d'utilisateur·ice est rendu actif en appelant la méthode {{domxref("HTMLElement/focus", "focus()")}} qu'il hérite de {{domxref("HTMLElement")}}.

Ensuite, {{domxref("EventTarget.addEventListener", "addEventListener()")}} est appelé pour ajouter un gestionnaire pour l'événement `input` au champ de nom d'utilisateur·ice. Ce code examine la longueur de la valeur actuelle de l'entrée&nbsp;; si elle est zéro, alors le bouton «&nbsp;Envoyer&nbsp;» est désactivé s'il ne l'est pas déjà. Sinon, le code s'assure que le bouton est activé.

Avec cela en place, le bouton «&nbsp;Envoyer&nbsp;» est toujours activé lorsque le champ de saisie du nom d'utilisateur·ice a une valeur, et désactivé lorsqu'il est vide.

### HTML

Le HTML du formulaire ressemble à ceci&nbsp;:

```html
<p>
  Veuillez fournir les informations ci-dessous. Les éléments marqués par "*"
  sont requis.
</p>
<form action="" method="get">
  <p>
    <label for="userName" required>Votre nom&nbsp;:</label>
    <input type="text" id="userName" /> (*)
  </p>
  <p>
    <label for="userEmail">E-mail&nbsp;:</label>
    <input type="email" id="userEmail" />
  </p>
  <input type="submit" value="Envoyer" id="sendButton" />
</form>
```

### Résultat

{{EmbedLiveSample("Examples", 640, 300)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

### Références

- [Référence des éléments HTML](/fr/docs/Web/HTML/Reference/Elements)
- [Référence des attributs HTML](/fr/docs/Web/HTML/Reference/Attributes)
- Référence à {{DOMxRef("Document_Object_Model", "Document Object Model (DOM)", "", "1")}}

### Guides

- [Introduction au scripting DOM](/fr/docs/Learn_web_development/Core/Scripting/DOM_scripting)
