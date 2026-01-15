---
title: Référence du DOM
slug: Web/API/Document_Object_Model
l10n:
  sourceCommit: 231152e9a749aaeba8de45f4cc712845a470dda9
---

{{DefaultAPISidebar("DOM")}}

Le **Modèle Objet de Document** (<i lang="en">Document Object Model</i> en anglais, abrégé **<abbr>DOM</abbr>**) relie les pages web aux scripts ou aux langages de programmation en représentant la structure d'un document — comme le HTML d'une page web — en mémoire. Le terme fait généralement référence à JavaScript, même si la modélisation des documents HTML, SVG ou XML sous forme d'objets ne fait pas partie du cœur du langage JavaScript.

Le DOM représente un document sous forme d'arbre logique. Chaque branche de l'arbre se termine par un nœud, et chaque nœud contient des objets. Les méthodes du DOM permettent d'accéder à l'arbre par programmation. Elles permettent de modifier la structure, le style ou le contenu du document.

Des gestionnaires d'évènements peuvent aussi être attachés aux nœuds. Lorsqu'un évènement est déclenché, ces gestionnaires sont exécutés.

## Concepts et utilisation

Le <i lang="en">Document Object Model</i> (<abbr>DOM</abbr>) est une interface de programmation pour les documents web. Il représente la page de façon à ce que des programmes puissent modifier la structure, le style et le contenu du document. Le DOM représente le document sous forme de nœuds et d'objets&nbsp;; ainsi, les langages de programmation peuvent interagir avec la page.

Une page web est un document qui peut être affiché dans la fenêtre du navigateur ou sous forme de source HTML. Dans les deux cas, il s'agit du même document, mais la représentation du Document Object Model (DOM) permet de le manipuler. En tant que représentation orientée objet de la page web, il peut être modifié avec un langage de script comme JavaScript.

Par exemple, le DOM spécifie que la méthode `querySelectorAll` dans cet extrait de code doit retourner une liste de tous les éléments HTML {{HTMLElement("p")}} du document&nbsp;:

```js
const paragraphs = document.querySelectorAll("p");
// paragraphs[0] est le premier élément <p>
// paragraphs[1] est le deuxième élément <p>, etc.
alert(paragraphs[0].nodeName);
```

Toutes les propriétés, méthodes et évènements disponibles pour manipuler et créer des pages web sont organisés en objets. Par exemple, l'objet `document` qui représente le document lui-même, les objets `table` qui implémentent l'interface DOM {{domxref("HTMLTableElement")}} pour accéder aux tableaux HTML, etc., sont tous des objets.

Le DOM est construit à l'aide de plusieurs API qui fonctionnent ensemble. Le DOM de base définit les entités décrivant n'importe quel document et les objets qu'il contient. Celui-ci est étendu au besoin par d'autres API qui ajoutent de nouvelles fonctionnalités et capacités au DOM. Par exemple, l'[API DOM HTML](/fr/docs/Web/API/HTML_DOM_API) ajoute la prise en charge des documents HTML au DOM de base, et l'API SVG ajoute la prise en charge des documents SVG.

### Qu'est-ce qu'un arbre DOM ?

Un **arbre DOM** est une [structure arborescente](https://fr.wikipedia.org/wiki/Arborescence) dont les nœuds représentent le contenu d'un document HTML ou XML. Chaque document HTML ou XML possède une représentation sous forme d'arbre DOM. Par exemple, considérez le document suivant&nbsp;:

```html
<html lang="fr">
  <head>
    <title>Mon document</title>
  </head>
  <body>
    <h1>En-tête</h1>
    <p>Paragraphe</p>
  </body>
</html>
```

Il possède un arbre DOM qui ressemble à ceci&nbsp;:

![Le DOM comme représentation arborescente d'un document ayant une racine et des nœuds contenant du contenu](using_the_w3c_dom_level_1_core-doctree.jpg)

Bien que l'arbre ci-dessus soit similaire à l'arbre DOM du document, ils ne sont pas identiques, car l'arbre DOM réel préserve les [espaces blancs](/fr/docs/Web/CSS/Guides/Text/Whitespace).

Lorsqu'un navigateur web analyse un document HTML, il construit un arbre DOM puis l'utilise pour afficher le document.

### Le DOM et JavaScript

L'exemple précédent, comme presque tous les exemples, est en {{glossary("JavaScript")}}. Autrement dit, il est _écrit_ en JavaScript, mais _utilise_ le DOM pour accéder au document et à ses éléments. Le DOM n'est pas un langage de programmation, mais sans lui, le langage JavaScript n'aurait aucun modèle ou notion de pages web, de documents HTML, de documents SVG et de leurs différentes parties. Le document dans son ensemble, l'en-tête, les tableaux du document, les en-têtes de tableau, le texte dans les cellules et tous les autres éléments d'un document font partie du modèle objet de document pour ce document. Ils peuvent tous être accessibles et manipulés à l'aide du DOM et d'un langage de script comme JavaScript.

Le DOM ne fait pas partie du langage JavaScript, mais constitue une API Web utilisée pour créer des sites web. JavaScript peut aussi être utilisé dans d'autres contextes. Par exemple, Node.js exécute des programmes JavaScript sur un ordinateur, mais fournit un ensemble d'API différent et l'API DOM ne fait pas partie du cœur de l'environnement Node.js.

Le DOM a été conçu pour être indépendant de tout langage de programmation particulier, rendant la représentation structurelle du document accessible via une API unique et cohérente. Même si la plupart des développeur·euse·s web n'utilisent le DOM qu'à travers JavaScript, il existe des implémentations du DOM pour d'autres langages, comme le montre cet exemple en Python&nbsp;:

```python
# Exemple DOM en Python
import xml.dom.minidom as m
doc = m.parse(r"C:\Projects\Py\chap1.xml")
doc.nodeName # Propriété DOM de l'objet document
p_list = doc.getElementsByTagName("para")
```

Pour plus d'informations sur les technologies impliquées dans l'écriture de JavaScript pour le web, consultez la [vue d'ensemble des technologies JavaScript](/fr/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

### Accéder au DOM

Vous n'avez rien de particulier à faire pour commencer à utiliser le DOM. Vous utilisez l'API directement en JavaScript dans ce qu'on appelle un _script_, c'est-à-dire un programme exécuté par un navigateur.

Lorsque vous créez un script, qu'il soit intégré dans un élément `<script>` ou inclus dans la page web, vous pouvez immédiatement utiliser l'API des objets {{domxref("document")}} ou {{domxref("Window", "window")}} pour manipuler le document lui-même ou n'importe lequel des éléments de la page web (les éléments descendants du document). Votre programmation DOM peut être aussi simple que l'exemple suivant, qui affiche un message dans la console à l'aide de la fonction {{domxref("console/log_static", "console.log()")}}&nbsp;:

```html
<body onload="console.log('Bienvenue sur ma page d\'accueil !');">
  …
</body>
```

Il est généralement déconseillé de mélanger la structure de la page (écrite en HTML) et la manipulation du DOM (écrite en JavaScript). Les parties JavaScript seront donc regroupées ici et séparées du HTML.

Par exemple, la fonction suivante crée un nouvel élément HTML {{HTMLElement("Heading_Elements", "<code>&lt;h1&gt;</code>")}}, ajoute du texte à cet élément, puis l'ajoute à l'arbre du document&nbsp;:

```html
<html lang="fr">
  <head> </head>
  <body>
    <script>
      // créer quelques éléments dans une page HTML vide
      const heading = document.createElement("h1");
      const headingText = document.createTextNode("Gros titre !");
      heading.appendChild(headingText);
      document.body.appendChild(heading);
    </script>
  </body>
</html>
```

## Interfaces du DOM

Voici toutes les interfaces définies par la spécification DOM&nbsp;:

- {{DOMxRef("AbortController")}}
- {{DOMxRef("AbortSignal")}}
- {{DOMxRef("AbstractRange")}}
- {{DOMxRef("Attr")}}
- {{DOMxRef("CDATASection")}}
- {{DOMxRef("CharacterData")}}
- {{DOMxRef("Comment")}}
- {{DOMxRef("CustomEvent")}}
- {{DOMxRef("Document")}}
- {{DOMxRef("DocumentFragment")}}
- {{DOMxRef("DocumentType")}}
- {{DOMxRef("DOMError")}} {{Deprecated_Inline}}
- {{DOMxRef("DOMException")}}
- {{DOMxRef("DOMImplementation")}}
- {{DOMxRef("DOMParser")}}
- {{DOMxRef("DOMTokenList")}}
- {{DOMxRef("Element")}}
- {{DOMxRef("Event")}}
- {{DOMxRef("EventTarget")}}
- {{DOMxRef("HTMLCollection")}}
- {{DOMxRef("MutationObserver")}}
- {{DOMxRef("MutationRecord")}}
- {{DOMxRef("NamedNodeMap")}}
- {{DOMxRef("Node")}}
- {{DOMxRef("NodeIterator")}}
- {{DOMxRef("NodeList")}}
- {{DOMxRef("ProcessingInstruction")}}
- {{DOMxRef("QuotaExceededError")}}
- {{DOMxRef("Range")}}
- {{DOMxRef("ShadowRoot")}}
- {{DOMxRef("StaticRange")}}
- {{DOMxRef("Text")}}
- {{DOMxRef("TreeWalker")}}
- {{DOMxRef("XMLDocument")}}
- {{DOMxRef("XPathEvaluator")}}
- {{DOMxRef("XPathExpression")}}
- {{DOMxRef("XPathResult")}}
- {{DOMxRef("XSLTProcessor")}}

Ce guide porte sur les objets et les véritables _entités_ que vous pouvez utiliser pour manipuler la hiérarchie du DOM. Il existe de nombreux points où la compréhension de leur fonctionnement peut prêter à confusion. Par exemple, l'objet représentant l'élément HTML `form` obtient sa propriété `name` de l'interface `HTMLFormElement`, mais sa propriété `className` provient de l'interface `HTMLElement`. Dans les deux cas, la propriété recherchée se trouve bien dans cet objet formulaire.

Cependant, la relation entre les objets et les interfaces qu'ils implémentent dans le DOM peut prêter à confusion. Cette section vise donc à expliquer brièvement les interfaces réelles de la spécification DOM et la façon dont elles sont exposées.

### Interfaces et objets

De nombreux objets implémentent plusieurs interfaces différentes. L'objet table, par exemple, implémente une interface spécialisée {{domxref("HTMLTableElement")}}, qui inclut des méthodes comme `createCaption` et `insertRow`. Mais comme il s'agit aussi d'un élément HTML, `table` implémente l'interface `Element` décrite dans le chapitre de référence DOM {{domxref("Element")}}. Enfin, comme un élément HTML est aussi, du point de vue du DOM, un nœud dans l'arbre des nœuds qui composent le modèle objet d'une page HTML ou XML, l'objet table implémente également l'interface plus basique `Node`, dont `Element` hérite.

Lorsque vous obtenez une référence à un objet `table`, comme dans l'exemple suivant, vous utilisez couramment ces trois interfaces de façon interchangeable sur l'objet, parfois sans même le savoir.

```js
const table = document.getElementById("table");
const tableAttrs = table.attributes; // Interface Node/Element
for (const attr of tableAttrs) {
  // Interface HTMLTableElement : attribut border
  if (attr.nodeName.toLowerCase() === "border") {
    table.border = "1";
  }
}
// Interface HTMLTableElement : attribut summary
table.summary = "remarque : bordure augmentée";
```

### Types de données fondamentaux

Cette page tente de décrire les différents objets et types de façon simple. Cependant, il existe un certain nombre de types de données différents qui circulent dans l'API et qu'il est important de connaître.

> [!NOTE]
> Comme la grande majorité du code qui utilise le DOM tourne autour de la manipulation de documents HTML, il est courant d'appeler les nœuds du DOM des **éléments**, même si, à proprement parler, tous les nœuds ne sont pas des éléments.

Le tableau suivant décrit brièvement ces types de données.

<table class="standard-table">
  <thead>
    <tr>
      <th>Type de donnée (Interface)</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>{{domxref("Document")}}</td>
      <td>
        Lorsqu'un membre retourne un objet de type <code>document</code> (par exemple, la propriété <code>ownerDocument</code> d'un élément retourne le <code>document</code> auquel il appartient), cet objet est le <code>document</code> racine lui-même. Le chapitre de référence <a href="/fr/docs/Web/API/Document">DOM <code>document</code></a> décrit l'objet <code>document</code>.
      </td>
    </tr>
    <tr>
      <td>{{domxref("Node")}}</td>
      <td>
        Tout objet situé dans un document est un nœud d'un certain type. Dans un document HTML, un objet peut être un nœud élément, mais aussi un nœud texte ou un nœud attribut.
      </td>
    </tr>
    <tr>
      <td>{{domxref("Element")}}</td>
      <td>
        Le type <code>element</code> est basé sur l'interface <code>node</code>. Il fait référence à un élément ou à un nœud de type <code>element</code> retourné par un membre de l'API DOM. Plutôt que de dire, par exemple, que la méthode {{domxref("document.createElement()")}} retourne une référence à un <code>node</code>, on dit simplement que cette méthode retourne l'<code>element</code> qui vient d'être créé dans le DOM. Les objets <code>element</code> implémentent l'interface DOM <code>Element</code> ainsi que l'interface plus basique <code>Node</code>, toutes deux incluses dans cette référence. Dans un document HTML, les éléments sont enrichis par l'interface {{domxref("HTMLElement")}} de l'API DOM HTML ainsi que par d'autres interfaces décrivant les capacités de types d'éléments spécifiques (par exemple, {{domxref("HTMLTableElement")}} pour les éléments {{HTMLElement("table")}}).
      </td>
    </tr>
    <tr>
      <td>{{domxref("Attr")}}</td>
      <td>
        Lorsqu'un attribut est retourné par un membre (par exemple, par la méthode <code>createAttribute()</code>), il s'agit d'une référence d'objet qui expose une interface spéciale (quoique réduite) pour les attributs. Les attributs sont des nœuds dans le DOM tout comme les éléments, même si vous les utiliserez rarement ainsi.
      </td>
    </tr>
  </tbody>
</table>

Il existe aussi quelques considérations terminologiques courantes à garder à l'esprit. Il est courant d'appeler tout nœud {{domxref("Attr")}} un «&nbsp;attribut&nbsp;» et d'appeler un tableau de nœuds DOM une `nodeList`. Vous trouverez ces termes et d'autres introduits et utilisés dans toute la documentation.

Les objets `document` et `window` sont ceux dont vous utiliserez généralement le plus souvent les interfaces en programmation DOM. En termes simples, l'objet `window` représente quelque chose comme le navigateur, et l'objet `document` est la racine du document lui-même. `Element` hérite de l'interface générique `Node`, et ces deux interfaces fournissent ensemble de nombreuses méthodes et propriétés que vous utilisez sur les éléments individuels. Ces éléments peuvent aussi avoir des interfaces spécifiques pour gérer le type de données qu'ils contiennent, comme dans l'exemple d'objet `table` de la section précédente.

## Interfaces obsolètes du DOM

Le modèle objet de document (DOM) a été fortement simplifié. Pour cela, les interfaces suivantes, présentes dans les spécifications DOM de niveau 3 ou antérieures, ont été supprimées. Elles ne sont plus disponibles pour les développeur·euse·s web.

- `DOMConfiguration`
- `DOMErrorHandler`
- `DOMImplementationList`
- `DOMImplementationRegistry`
- `DOMImplementationSource`
- `DOMLocator`
- `DOMObject`
- `DOMSettableTokenList`
- `DOMUserData`
- `ElementTraversal`
- `Entity`
- `EntityReference`
- `NameList`
- `Notation`
- `TypeInfo`
- `UserDataHandler`

## DOM HTML

Un document contenant du HTML est décrit grâce à l'interface {{DOMxRef("Document")}}, qui est étendue par la spécification HTML pour inclure différentes fonctionnalités propres au HTML. En particulier, l'interface {{domxref("Element")}} est enrichie pour devenir {{domxref("HTMLElement")}} et ses différentes sous-classes, chacune représentant un élément (ou une famille d'éléments étroitement liés).

L'API DOM HTML donne accès à diverses fonctionnalités du navigateur comme les onglets, les fenêtres, les styles CSS, les feuilles de style, l'historique de navigation, etc. Ces interfaces sont détaillées dans la documentation de l'[API DOM HTML](/fr/docs/Web/API/HTML_DOM_API).

## DOM SVG

De la même façon, un document contenant du SVG est aussi décrit grâce à l'interface {{DOMxRef("Document")}}, qui est étendue par la spécification SVG pour inclure différentes fonctionnalités propres au SVG. En particulier, l'interface {{domxref("Element")}} est enrichie pour devenir {{domxref("SVGElement")}} et ses différentes sous-classes, chacune représentant un élément ou une famille d'éléments proches. Ces interfaces sont détaillées dans la documentation de l'[API SVG](/fr/docs/Web/API/SVG_API).

## Exemples

### Définir le contenu textuel

Cet exemple utilise un élément HTML {{HTMLElement("div")}} contenant un élément {{HTMLElement("textarea")}} et deux éléments {{HTMLElement("button")}}. Lorsque l'utilisateur·ice clique sur le premier bouton, on place du texte dans le `<textarea>`. Lorsque l'utilisateur·ice clique sur le second bouton, on efface le texte. On utilise&nbsp;:

- {{domxref("Document.querySelector()")}} pour accéder aux éléments `<textarea>` et aux boutons.
- {{domxref("EventTarget.addEventListener()")}} pour écouter les clics sur les boutons.
- {{domxref("Node.textContent")}} pour définir et effacer le texte.

#### HTML

```html
<div class="container">
  <textarea class="story"></textarea>
  <button id="set-text" type="button">Définir le contenu</button>
  <button id="clear-text" type="button">Effacer le contenu</button>
</div>
```

#### CSS

```css
.container {
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
}

button {
  width: 200px;
}
```

#### JavaScript

```js
const story = document.body.querySelector(".story");

const setText = document.body.querySelector("#set-text");
setText.addEventListener("click", () => {
  story.textContent = "C'était une nuit sombre et orageuse…";
});

const clearText = document.body.querySelector("#clear-text");
clearText.addEventListener("click", () => {
  story.textContent = "";
});
```

#### Résultat

{{EmbedLiveSample("Définir le contenu textuel", "", "150px")}}

### Ajouter un élément enfant

Cet exemple utilise un élément HTML {{HTMLElement("div")}} contenant un autre {{HTMLElement("div")}} et deux éléments {{HTMLElement("button")}}. Lorsque l'utilisateur·ice clique sur le premier bouton, on crée un nouvel élément et on l'ajoute comme enfant du `<div>`. Lorsque l'utilisateur·ice clique sur le second bouton, on retire l'élément enfant. On utilise&nbsp;:

- {{domxref("Document.querySelector()")}} pour accéder aux éléments `<div>` et aux boutons.
- {{domxref("EventTarget.addEventListener()")}} pour écouter les clics sur les boutons.
- {{domxref("Document.createElement")}} pour créer l'élément.
- {{domxref("Node.appendChild()")}} pour ajouter l'enfant.
- {{domxref("Node.removeChild()")}} pour retirer l'enfant.

#### HTML

```html
<div class="container">
  <div class="parent">parent</div>
  <button id="add-child" type="button">Ajouter un enfant</button>
  <button id="remove-child" type="button">Retirer l'enfant</button>
</div>
```

#### CSS

```css
.container {
  display: flex;
  gap: 0.5rem;
  flex-direction: column;
}

button {
  width: 100px;
}

div.parent {
  border: 1px solid black;
  padding: 5px;
  width: 100px;
  height: 100px;
}

div.child {
  border: 1px solid red;
  margin: 10px;
  padding: 5px;
  width: 80px;
  height: 60px;
  box-sizing: border-box;
}
```

#### JavaScript

```js
const parent = document.body.querySelector(".parent");

const addChild = document.body.querySelector("#add-child");
addChild.addEventListener("click", () => {
  // N'ajouter un enfant que s'il n'y en a pas déjà un
  // en plus du nœud texte "parent"
  if (parent.childNodes.length > 1) {
    return;
  }
  const child = document.createElement("div");
  child.classList.add("child");
  child.textContent = "enfant";
  parent.appendChild(child);
});

const removeChild = document.body.querySelector("#remove-child");
removeChild.addEventListener("click", () => {
  const child = document.body.querySelector(".child");
  parent.removeChild(child);
});
```

#### Résultat

{{EmbedLiveSample("Ajouter un élément enfant", "", "180px")}}

### Lire et modifier l'arbre

Supposons que l'auteur·ice souhaite modifier l'en-tête du document dans [Qu'est-ce qu'un arbre DOM&nbsp;?](#questce_quun_arbre_dom) et écrire deux paragraphes au lieu d'un seul. Le script suivant permet de le faire&nbsp;:

#### HTML

```html
<html lang="fr">
  <head>
    <title>Mon document</title>
  </head>
  <body>
    <input type="button" value="Modifier ce document." />
    <h2>En-tête</h2>
    <p>Paragraphe</p>
  </body>
</html>
```

#### JavaScript

```js
document.querySelector("input").addEventListener("click", () => {
  // document.getElementsByTagName("h2") retourne une NodeList des
  // éléments <h2> du document, et le premier est à l'indice 0 :
  const header = document.getElementsByTagName("h2").item(0);

  // Le premier enfant de l'en-tête est un nœud texte :
  header.firstChild.data = "Un document dynamique";

  // Maintenant, l'en-tête est "Un document dynamique".

  // Accéder au premier paragraphe
  const para = document.getElementsByTagName("p").item(0);
  para.firstChild.data = "Ceci est le premier paragraphe.";

  // Créer un nouveau nœud texte pour le second paragraphe
  const newText = document.createTextNode("Ceci est le second paragraphe.");

  // Créer un nouvel élément pour le second paragraphe
  const newElement = document.createElement("p");

  // Placer le texte dans le paragraphe
  newElement.appendChild(newText);

  // Ajouter le paragraphe à la fin du document en l'ajoutant au parent
  // du paragraphe (qui est le body)
  para.parentNode.appendChild(newElement);
});
```

{{ EmbedLiveSample("Lire et modifier l'arbre", 800, 300) }}

### Créer un arbre

Vous pouvez aussi créer l'arbre de [Qu'est-ce qu'un arbre DOM&nbsp;?](#quest-ce_quun_arbre_dom) entièrement en JavaScript.

```js
const root = document.createElement("html");
root.lang = "fr";

const head = document.createElement("head");
const title = document.createElement("title");
title.appendChild(document.createTextNode("Mon document"));
head.appendChild(title);

const body = document.createElement("body");
const header = document.createElement("h1");
header.appendChild(document.createTextNode("En-tête"));
const paragraph = document.createElement("p");
paragraph.appendChild(document.createTextNode("Paragraphe"));
body.appendChild(header);
body.appendChild(paragraph);

root.appendChild(head);
root.appendChild(body);
```

### Propagation des évènements

Cet exemple montre comment les évènements sont déclenchés et gérés dans le DOM de façon très simple. Lorsque le corps (<code>BODY</code>) de ce document HTML se charge, un gestionnaire d'évènement est enregistré sur la première ligne du tableau (<code>TABLE</code>). Ce gestionnaire traite l'évènement en exécutant la fonction <code>stopEvent</code>, qui modifie la valeur de la cellule du bas du tableau.

Cependant, <code>stopEvent</code> appelle aussi la méthode {{domxref("event.stopPropagation")}} de l'objet évènement, ce qui empêche l'évènement de se propager plus haut dans le DOM. Notez que le tableau lui-même possède un gestionnaire d'évènement {{domxref("Element.click_event","onclick")}} qui devrait afficher un message lorsque le tableau est cliqué. Mais la méthode <code>stopEvent</code> a stoppé la propagation, donc après la mise à jour des données du tableau, la phase de l'évènement s'arrête effectivement et une boîte d'alerte s'affiche pour le confirmer.

```html
<table id="t-daddy">
  <tr id="tbl1">
    <td id="c1">un</td>
  </tr>
  <tr>
    <td id="c2">deux</td>
  </tr>
</table>
```

```css
#t-daddy {
  border: 1px solid red;
}

#c1 {
  background-color: pink;
}
```

```js
function stopEvent(event) {
  const c2 = document.getElementById("c2");
  c2.textContent = "hello";

  // this ought to keep t-daddy from getting the click.
  event.stopPropagation();
  console.log("event propagation halted.");
}

const elem = document.getElementById("tbl1");
elem.addEventListener("click", stopEvent);

document.getElementById("t-daddy").addEventListener("click", () => {
  console.log("t-daddy clicked");
});
```

{{EmbedLiveSample("Propagation des évènements", "", "300")}}

### Afficher les propriétés de l'objet évènement

Cet exemple utilise les méthodes du DOM pour afficher toutes les propriétés {{domxref("Window.load_event", "onload")}} de l'objet {{domxref("event")}} et leurs valeurs dans un tableau. Il montre aussi une technique utile utilisant une boucle [`for...in`](/fr/docs/Web/JavaScript/Reference/Statements/for...in) pour parcourir les propriétés d'un objet et obtenir leurs valeurs.

Les propriétés des objets évènement diffèrent grandement selon les navigateurs. La [norme WHATWG DOM <sup>(angl.)</sup>](https://dom.spec.whatwg.org/) liste les propriétés standard, mais de nombreux navigateurs en ajoutent d'autres.

Placez le code suivant dans un fichier texte vierge et chargez-le dans différents navigateurs&nbsp;: vous serez surpris·e du nombre et des noms de propriétés. Vous pouvez aussi ajouter des éléments dans la page et appeler cette fonction depuis différents gestionnaires d'évènements.

```html
<h1>Propriétés de l'objet évènement DOM <span id="eventType"></span></h1>
```

```css
table {
  border-collapse: collapse;
}
thead {
  font-weight: bold;
}
td {
  padding: 2px 10px;
}

.odd {
  background-color: #efdfef;
}
.even {
  background-color: white;
}
```

```js
function showEventProperties(e) {
  function addCell(row, text) {
    const cell = row.insertCell(-1);
    cell.appendChild(document.createTextNode(text));
  }

  const event = e || window.event;
  document.getElementById("eventType").textContent = event.type;

  const table = document.createElement("table");
  const thead = table.createTHead();
  let row = thead.insertRow(-1);
  const labelList = ["#", "Propriété", "Valeur"];
  const len = labelList.length;

  for (let i = 0; i < len; i++) {
    addCell(row, labelList[i]);
  }

  const tbody = document.createElement("tbody");
  table.appendChild(tbody);

  for (const p in event) {
    row = tbody.insertRow(-1);
    row.className = row.rowIndex % 2 ? "odd" : "even";
    addCell(row, row.rowIndex);
    addCell(row, p);
    addCell(row, event[p]);
  }

  document.body.appendChild(table);
}

document.addEventListener("DOMContentLoaded", (e) => {
  showEventProperties(e);
});
```

{{EmbedLiveSample("Afficher les propriétés de l'objet évènement", "", "300")}}

## Spécifications

{{Specifications}}

## Voir aussi

- [Modèle d'objet CSS (CSSOM)](/fr/docs/Web/API/CSS_Object_Model)
- L'[API DOM HTML](/fr/docs/Web/API/HTML_DOM_API)
- L'[API SVG](/fr/docs/Web/API/SVG_API)
