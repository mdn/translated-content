---
title: Introduction au DOM
slug: conflicting/Web/API/Document_Object_Model_a0b90593de4c5cb214690e823be115a18d605d4bc7719ba296e212da2abe18ef
original_slug: Web/API/Document_Object_Model/Introduction
l10n:
  sourceCommit: 116577234db1d6275c74a8bb879fce54d944f4ed
---

{{DefaultAPISidebar("DOM")}}

Le **Modèle Objet de Document** (_<abbr>DOM</abbr>_ pour <i lang="en">Document Object Model</i>) est la représentation des objets
qui composent la structure et le contenu d'un document sur le web.
Ce guide présente le DOM,
explique comment le DOM représente un document {{Glossary("HTML")}} en mémoire
et comment utiliser les API pour créer du contenu web et des applications.

## Qu'est-ce que le DOM ?

Le Modèle Objet de Document (DOM) est une interface de programmation pour les documents web.
Il représente la page de sorte que des programmes puissent modifier la structure, le style et le contenu du document.
Le DOM représente le document sous forme de nœuds et d'objets&nbsp;;
ainsi, les langages de programmation peuvent interagir avec la page.

Une page web est un document qui peut être affiché soit dans la fenêtre du navigateur, soit sous forme de code source HTML. Dans les deux cas, il s'agit du même document, mais la représentation DOM permet de le manipuler. En tant que représentation orientée objet de la page web, il peut être modifié avec un langage de script comme JavaScript.

Par exemple, le DOM spécifie que la méthode `querySelectorAll` dans ce code doit retourner une liste de tous les éléments {{HTMLElement("p")}} du document&nbsp;:

```js
const paragraphs = document.querySelectorAll("p");
// paragraphes[0] est le premier élément <p>
// paragraphes[1] est le second élément <p>, etc.
alert(paragraphes[0].nodeName);
```

Toutes les propriétés, méthodes et événements permettant de manipuler et de créer des pages web sont organisées en objets. Par exemple, l'objet `document` qui représente le document lui-même, les objets `table` qui implémentent l'interface DOM {{domxref("HTMLTableElement")}} pour accéder aux tableaux HTML, etc., sont tous des objets.

Le DOM est construit à partir de plusieurs API qui fonctionnent ensemble.
Le [DOM](/fr/docs/Web/API/Document_Object_Model) de base définit les entités qui décrivent n'importe quel document et les objets qu'il contient.
Ce socle est complété, si besoin, par d'autres API qui ajoutent de nouvelles fonctionnalités et capacités au DOM.
Par exemple, l'[API DOM HTML](/fr/docs/Web/API/HTML_DOM_API) ajoute la prise en charge des documents HTML au DOM de base,
et l'API SVG ajoute la prise en charge des documents SVG.

## DOM et JavaScript

L'exemple précédent, comme presque tous les exemples, est en {{glossary("JavaScript")}}. Il est _écrit_ en JavaScript, mais _utilise_ le DOM pour accéder au document et à ses éléments. Le DOM n'est pas un langage de programmation, mais sans lui, le langage JavaScript n'aurait aucun modèle ni aucune notion des pages web, des documents HTML, SVG et de leurs composants. Le document dans son ensemble, l'en-tête, les tableaux, les en-têtes de colonnes, le texte dans les cellules et tous les autres éléments d'un document font partie du modèle objet de document (DOM) de ce document. Ils sont tous accessibles et peuvent être manipulés à l'aide du DOM et d'un langage de script comme JavaScript.

Le DOM n'est pas une partie du langage JavaScript, mais une API Web utilisée pour construire des sites web. JavaScript peut aussi être utilisé dans d'autres contextes. Par exemple, Node.js exécute des programmes JavaScript sur un ordinateur, mais fournit un autre ensemble d'API, et l'API DOM n'en fait pas partie.

Le DOM a été conçu pour être indépendant de tout langage de programmation, ce qui rend la représentation structurelle du document disponible via une API simple et cohérente. Même si la plupart des développeur·euse·s web utilisent le DOM via JavaScript, des implémentations du DOM peuvent être construites pour n'importe quel langage, comme le montre cet exemple en Python&nbsp;:

```python
# Exemple d'utilisation du DOM en Python
import xml.dom.minidom as m
doc = m.parse(r"C:\\Projects\\Py\\chap1.xml")
doc.nodeName # Propriété DOM de l'objet document
p_list = doc.getElementsByTagName("para")
```

Pour plus d'informations sur les technologies impliquées dans l'écriture de JavaScript sur le web, voir [Survol des technologies JavaScript](/fr/docs/Web/JavaScript/Reference/JavaScript_technologies_overview).

## Accéder au DOM

Il n'y a rien de particulier à faire pour commencer à utiliser le DOM. Vous utilisez l'API directement en JavaScript dans ce qu'on appelle un _script_, un programme exécuté par un navigateur.

Lorsque vous créez un script, qu'il soit intégré dans un élément `<script>` ou inclus dans la page web, vous pouvez immédiatement utiliser l'API pour les objets {{domxref("document")}} ou {{domxref("Window", "window")}} afin de manipuler le document lui-même ou n'importe quel élément de la page web (les descendants du document). Votre programmation DOM peut être aussi simple que l'exemple suivant, qui affiche un message dans la console à l'aide de la fonction {{domxref("console/log_static", "console.log()")}}&nbsp;:

```html
<body onload="console.log('Bienvenue sur ma page Web&nbsp;!');">
  …
</body>
```

En général, il n'est pas recommandé de mélanger la structure de la page (écrite en HTML) et la manipulation du DOM (écrite en JavaScript). Les parties JavaScript seront donc regroupées ici et séparées du HTML.

Par exemple, la fonction suivante crée un nouvel élément {{HTMLElement("Heading_Elements", "h1")}}, y ajoute du texte, puis l'ajoute à l'arbre du document&nbsp;:

```html
<html lang="fr">
  <head> </head>
  <body>
    <script>
      // crée quelques éléments dans une page HTML vide
      const heading = document.createElement("h1");
      const headingText = document.createTextNode("Gros titre&nbsp;!");
      heading.appendChild(headingText);
      document.body.appendChild(heading);
    </script>
  </body>
</html>
```

## Types de données fondamentaux

Cette page tente de décrire les différents objets et types de la manière la plus simple possible. Mais il existe un certain nombre de types de données utilisés par l'API que vous devez connaître.

> [!NOTE]
> Parce que la grande majorité du code qui utilise le DOM gravite autour de la manipulation de documents HTML, il est courant de toujours se référer aux nœuds du DOM comme **éléments**, même si, strictement parlant, tous les nœuds ne sont pas des éléments.

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
        Lorsqu'un membre renvoie un objet de type <code>document</code> (par exemple, la propriété <code>ownerDocument</code> d'un élément renvoie le <code>document</code> auquel il appartient), cet objet est l'objet <code>document</code> racine lui-même. Le chapitre <a href="/fr/docs/Web/API/Document">Référence DOM <code>document</code></a> décrit l'objet <code>document</code> en détail.
      </td>
    </tr>
    <tr>
      <td>{{domxref("Node")}}</td>
      <td>
        Chaque objet situé dans un document est un nœud d'une certaine sorte. Dans un document HTML, un objet peut être un nœud élément, mais aussi un nœud texte ou un nœud attribut.
      </td>
    </tr>
    <tr>
      <td>{{domxref("Element")}}</td>
      <td>
        Le type <code>element</code> est basé sur <code>node</code>. Il se réfère à un élément ou à un nœud de type <code>element</code> renvoyé par un membre de l'API DOM. Plutôt que de dire, par exemple, que la méthode {{domxref("document.createElement()")}} renvoie une référence à un objet de type <code>node</code>, on dit simplement que cette méthode renvoie l'<code>element</code> qui vient d'être créé dans le DOM. Les objets <code>element</code> implémentent l'interface DOM <code>Element</code> ainsi que l'interface plus basique <code>Node</code>, toutes deux incluses dans cette référence. Dans un document HTML, les éléments sont enrichis par l'interface {{domxref("HTMLElement")}} de l'API HTML DOM ainsi que par d'autres interfaces décrivant les capacités d'éléments spécifiques (par exemple, {{domxref("HTMLTableElement")}} pour les éléments {{HTMLElement("table")}}).
      </td>
    </tr>
    <tr>
      <td>{{domxref("NodeList")}}</td>
      <td>
        Une <code>nodeList</code> est un tableau d'éléments, comme celui qui est renvoyé par la méthode {{domxref("document.querySelectorAll()")}}. Les éléments d'une <code>nodeList</code> sont accessibles par un index de deux manières différentes&nbsp;:
        <ul>
          <li>list.item(1)</li>
          <li>list[1]</li>
        </ul>
        Ces deux méthodes sont équivalentes. Dans la première, <code>item()</code> est la seule méthode de l'objet <code>nodeList</code>. La seconde utilise la syntaxe habituelle d'un tableau pour accéder au second élément de la liste.
      </td>
    </tr>
    <tr>
      <td>{{domxref("Attr")}}</td>
      <td>
        Lorsqu'un <code>attribute</code> est renvoyé par un membre (par exemple par la méthode <code>createAttribute()</code>), il s'agit d'une référence à un objet qui expose une interface particulière (et limitée) pour les attributs. Les attributs sont des nœuds dans le DOM tout comme les éléments, mais ils seront rarement utilisés de cette manière.
      </td>
    </tr>
    <tr>
      <td>{{domxref("NamedNodeMap")}}</td>
      <td>
        Une <code>namedNodeMap</code> est comme un tableau, mais les éléments sont accessibles par nom ou par index, même si ce dernier cas n'est qu'une commodité pour l'énumération, car la liste n'est pas dans un ordre particulier. Une <code>namedNodeMap</code> a une méthode <code>item()</code> pour cette raison, et il est également possible d'ajouter et de retirer des éléments d'une <code>namedNodeMap</code>.
      </td>
    </tr>
  </tbody>
</table>

Il existe également quelques points de terminologie à garder à l'esprit. Il est courant de désigner tout nœud {{domxref("Attr")}} comme un « attribut », par exemple, et de désigner un tableau de nœuds DOM comme un « nodeList ». Vous trouverez ces termes et d'autres introduits et utilisés dans toute la documentation.

## Interfaces DOM

Ce guide porte sur les objets et les véritables _choses_ que vous pouvez utiliser pour manipuler la hiérarchie du DOM. Il y a de nombreux points où la compréhension de leur fonctionnement peut prêter à confusion. Par exemple, l'objet représentant l'élément HTML `form` obtient sa propriété `name` de l'interface `HTMLFormElement` mais sa propriété `className` de l'interface `HTMLElement`. Dans les deux cas, la propriété souhaitée se trouve dans cet objet formulaire.

Cependant, la relation entre les objets et les interfaces qu'ils implémentent dans le DOM peut prêter à confusion, c'est pourquoi cette section tente de présenter brièvement les interfaces figurant dans la spécification du DOM et la manière dont elles sont rendues disponibles.

### Interfaces et objets

De nombreux objets implémentent plusieurs interfaces différentes. Par exemple, l'objet table implémente une interface spécialisée {{domxref("HTMLTableElement")}}, qui comprend des méthodes comme `createCaption` et `insertRow`. Mais comme il s'agit aussi d'un élément HTML, `table` implémente l'interface `Element` décrite dans le chapitre de référence DOM {{domxref("Element")}}. Enfin, comme un élément HTML est aussi, du point de vue du DOM, un nœud dans l'arbre de nœuds qui composent le modèle objet d'une page HTML ou XML, l'objet table implémente aussi l'interface plus basique `Node`, dont dérive `Element`.

Lorsque vous obtenez une référence à un objet `table`, comme dans l'exemple suivant, vous utilisez régulièrement ces trois interfaces de manière interchangeable sur l'objet, parfois sans le savoir.

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
table.summary = "note : bordure plus large";
```

### Interfaces principales du DOM

Cette section liste certaines des interfaces les plus couramment utilisées dans le DOM. L'idée n'est pas de décrire ici ce que font ces API, mais de donner une idée des méthodes et propriétés que vous verrez très souvent en utilisant le DOM. Ces API communes sont utilisées dans les exemples plus longs du chapitre [Exemples d'utilisation du DOM](/fr/docs/Web/API/Document_Object_Model/Examples).

Les objets `document` et `window` sont ceux dont les interfaces sont les plus souvent utilisées dans la programmation DOM. En termes simples, l'objet `window` représente le navigateur, et l'objet `document` est la racine du document lui-même. `Element` hérite de l'interface générique `Node`, et ensemble ces deux interfaces fournissent de nombreuses méthodes et propriétés utilisables sur des éléments individuels. Ces éléments peuvent également avoir des interfaces spécifiques pour traiter le type de données qu'ils contiennent, comme dans l'exemple de l'objet `table` ci-dessus.

Voici une brève liste d'API courantes pour le script de page web ou XML utilisant le DOM&nbsp;:

- {{domxref("document.querySelector()")}}
- {{domxref("document.querySelectorAll()")}}
- {{domxref("document.createElement()")}}
- {{domxref("Element.innerHTML")}}
- {{domxref("Element.setAttribute()")}}
- {{domxref("Element.getAttribute()")}}
- {{domxref("EventTarget.addEventListener()")}}
- {{domxref("HTMLElement.style")}}
- {{domxref("Node.appendChild()")}}
- {{domxref("Window.load_event", "window.onload")}}
- {{domxref("window.scrollTo()")}}

## Exemples

### Définir le contenu textuel

Cet exemple utilise un élément {{HTMLElement("div")}} contenant un {{HTMLElement("textarea")}} et deux éléments {{HTMLElement("button")}}. Lorsque l'utilisateur·ice clique sur le premier bouton, du texte est ajouté dans le `<textarea>`. Lorsque l'utilisateur·ice clique sur le second bouton, le texte est effacé. On utilise&nbsp;:

- {{domxref("Document.querySelector()")}} pour accéder au `<textarea>` et aux boutons
- {{domxref("EventTarget.addEventListener()")}} pour écouter les clics sur les boutons
- {{domxref("Node.textContent")}} pour définir et effacer le texte.

#### HTML

```html
<div class="container">
  <textarea class="story"></textarea>
  <button id="set-text" type="button">Définir le contenu textuel</button>
  <button id="clear-text" type="button">Effacer le contenu textuel</button>
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
  story.textContent = "Il était une nuit sombre et orageuse...";
});

const clearText = document.body.querySelector("#clear-text");
clearText.addEventListener("click", () => {
  story.textContent = "";
});
```

#### Résultat

{{EmbedLiveSample("définir_le_contenu_textuel", "", "150px")}}

### Ajouter un élément enfant

Cet exemple utilise un élément {{HTMLElement("div")}} contenant un autre {{HTMLElement("div")}} et deux éléments {{HTMLElement("button")}}. Lorsque l'utilisateur·ice clique sur le premier bouton, un nouvel élément est créé et ajouté comme enfant du `<div>`. Lorsque l'utilisateur·ice clique sur le second bouton, l'enfant est retiré. On utilise&nbsp;:

- {{domxref("Document.querySelector()")}} pour accéder au `<div>` et aux boutons
- {{domxref("EventTarget.addEventListener()")}} pour écouter les clics sur les boutons
- {{domxref("Document.createElement")}} pour créer l'élément
- {{domxref("Node.appendChild()")}} pour ajouter l'enfant
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
  // N'ajoute un enfant que s'il n'y en a pas déjà un (hors texte "parent")
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

{{EmbedLiveSample("ajouter_un_élément_enfant", "", "180px")}}

## Spécifications

{{Specifications}}
