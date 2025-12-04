---
title: "Element : méthode querySelectorAll()"
short-title: querySelectorAll()
slug: Web/API/Element/querySelectorAll
l10n:
  sourceCommit: 277a8954951c900ef60a5175503976284c1d328d
---

{{APIRef("DOM")}}

La méthode **`querySelectorAll()`** de {{DOMxRef("Element")}} retourne une {{DOMxRef("NodeList")}} statique (non-dynamique) des éléments correspondants au groupe de sélecteurs CSS spécifiés qui sont des descendants de l'élément sur lequel la méthode a été appelée.

## Syntaxe

```js-nolint
querySelectorAll(selectors)
```

### Paramètres

- `selectors`
  - : Une chaîne de caractères contenant un ou plusieurs sélecteurs à comparer. Cette chaîne doit être composée de sélecteurs CSS valides&nbsp;; sinon une exception `SyntaxError` est levée.

    Notez que la spécification HTML n'exige pas que les valeurs d'attribut soient des identifiants CSS valides. Si la valeur d'un attribut [`class`](/fr/docs/Web/HTML/Reference/Global_attributes/class) ou [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) n'est pas un identifiant CSS valide, vous devez l'échapper avant de l'utiliser dans un sélecteur, soit en appelant {{DOMxRef("CSS.escape_static", "CSS.escape()")}} sur la valeur, soit en utilisant l'une des techniques décrites dans [Échapper les caractères](/fr/docs/Web/CSS/Reference/Values/ident#échapper_les_caractères). Voir [Échapper les valeurs d'attribut](#échapper_les_valeurs_dattribut) pour un exemple.

    Les sélecteurs sont appliqués à l'ensemble du document, et non uniquement à l'élément sur lequel `querySelectorAll()` est appelé. Pour restreindre le sélecteur à l'élément sur lequel `querySelectorAll()` est appelé, incluez la pseudo-classe [`:scope`](/fr/docs/Web/CSS/Reference/Selectors/:scope) au début du sélecteur. Voir l'exemple [Portée du sélecteur](#portée_du_sélecteur).

### Valeur de retour

Une {{DOMxRef("NodeList")}} statique contenant un objet {{DOMxRef("Element")}} pour chaque nœud descendant qui correspond à au moins un des sélecteurs spécifiés au moment où la méthode est appelée.

> [!NOTE]
> Si les sélecteurs spécifiés avec `selectors` incluent un [pseudo-élément CSS](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements), la liste renvoyée est toujours vide.

### Exception

- `SyntaxError` {{DOMxRef("DOMException")}}
  - : La syntaxe de la chaîne de `selectors` définie est invalide.

## Exemples

### Obtenir tous les éléments avec une valeur de donnée personnalisée

Cet exemple utilise le [sélecteur d'attribut](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors) pour sélectionner plusieurs éléments ayant un attribut de donnée `data-name` qui contient «&nbsp;funnel-chart-percent&nbsp;».

```html
<section class="box" id="sect1">
  <div data-name="funnel-chart-percent1">10.900%</div>
  <div data-name="funnel-chart-percent2">3700.00%</div>
  <div data-name="funnel-chart-percent3">0.00%</div>
</section>
```

```js
const refs = [
  ...document.querySelectorAll(`[data-name*="funnel-chart-percent"]`),
];
```

### Obtenir d'une liste de correspondances

Pour obtenir une {{DOMxRef("NodeList")}} de tous les éléments {{HTMLElement("p")}} contenus dans l'élément `myBox`&nbsp;:

```js
const matches = myBox.querySelectorAll("p");
```

Cet exemple renvoie une liste de tous les éléments {{HTMLElement("div")}} dans `myBox` avec une classe `note` ou `alert`&nbsp;:

```js
const matches = myBox.querySelectorAll("div.note, div.alert");
```

Ici, nous obtenons une liste d'éléments `<p>` du document, dont le parent immédiat est un {{HTMLElement("div")}} qui a la classe `highlighted` et qui sont inclus dans un conteneur dont l'`id` est `test`&nbsp;:

```js
const container = document.querySelector("#test");
const matches = container.querySelectorAll("div.highlighted > p");
```

Cet exemple utilise un [sélecteur d'attribut](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors) pour renvoyer une liste d'éléments {{HTMLElement("iframe")}} du document lesquels contiennent un attribut nommé `data-src`&nbsp;:

```js
const matches = document.querySelectorAll("iframe[data-src]");
```

Ici, un sélecteur d'attribut est utilisé pour renvoyer une liste des éléments de la liste contenus dans une liste dont l'`id` est `userlist` et qui ont un attribut `data-active` dont la valeur est `1`&nbsp;:

```js
const container = document.querySelector("#user-list");
const matches = container.querySelectorAll("li[data-active='1']");
```

### Accéder aux correspondances

Une fois que la {{DOMxRef("NodeList")}} des éléments correspondants est retournée, vous pouvez l'examiner pour n'importe quel tableau (<i lang="en">array</i>). Si le tableau est vide (sa propriété `length` est `0`), alors aucune correspondance n'a été trouvée.

Sinon, vous pouvez simplement utiliser la notation de tableau standard pour accéder au contenu de la liste. Vous pouvez utiliser n'importe quelle instruction de boucle commune, telle que&nbsp;:

```js
const highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach((userItem) => {
  deleteUser(userItem);
});
```

> [!NOTE]
> L'objet `NodeList` n'est pas vraiment un tableau (`Array`) — vous ne pouvez donc pas utiliser des méthodes de tableaux (telles que `slice`, `some`, `map`, etc.) avec `NodeList`. Essayez `Array.from(nodeList)` pour le convertir en tableau.

### Portée du sélecteur

La méthode `querySelectorAll()` applique ses sélecteurs à l'ensemble du document&nbsp;: ils ne sont pas limités à l'élément sur lequel la méthode est appelée. Pour restreindre la portée des sélecteurs, incluez la pseudo-classe {{CSSxRef(":scope")}} au début de la chaîne de sélecteurs.

#### HTML

Dans cet exemple, le HTML contient&nbsp;:

- deux boutons&nbsp;: `#select` et `#select-scope`
- trois éléments `<div>` imbriqués&nbsp;: `#outer`, `#subject` et `#inner`
- un élément `<pre>` utilisé pour l'affichage du résultat.

```html
<button id="select">Sélectionner</button>
<button id="select-scope">Sélectionner avec :scope</button>

<div id="outer">
  #outer
  <div id="subject">
    #subject
    <div id="inner">#inner</div>
  </div>
</div>

<pre id="output"></pre>
```

```css hidden
div {
  margin: 0.5rem;
  padding: 0.5rem;
  border: 3px lightseagreen solid;
  border-radius: 5px;
  font-family: monospace;
}

pre,
button {
  margin: 0.5rem;
  padding: 0.5rem;
}
```

#### JavaScript

Dans le JavaScript, nous sélectionnons d'abord l'élément `#subject`.

Quand le bouton `#select` est pressé, nous appelons `querySelectorAll()` sur `#subject` en passant `"#outer #inner"` comme chaîne de sélecteur.

Quand le bouton `#select-scope` est pressé, nous appelons à nouveau `querySelectorAll()` sur `#subject`, mais cette fois en passant `":scope #outer #inner"` comme chaîne de sélecteur.

```js
const subject = document.querySelector("#subject");

const select = document.querySelector("#select");
select.addEventListener("click", () => {
  const selected = subject.querySelectorAll("#outer #inner");
  output.textContent = `Selection count: ${selected.length}`;
});

const selectScope = document.querySelector("#select-scope");
selectScope.addEventListener("click", () => {
  const selected = subject.querySelectorAll(":scope #outer #inner");
  output.textContent = `Selection count: ${selected.length}`;
});
```

#### Result

{{EmbedLiveSample("Portée du sélecteur", "", 300)}}

Quand on clique sur «&nbsp;Sélectionner&nbsp;», le sélecteur sélectionne tous les éléments ayant un identifiant `inner` qui ont aussi un ancêtre avec l'identifiant `outer`. Notez que même si `#outer` est en dehors de l'élément `#subject`, il est tout de même utilisé dans la sélection, donc notre élément `#inner` est trouvé.

Quand on clique sur «&nbsp;Sélectionner avec :scope&nbsp;», la pseudo-classe `:scope` limite la portée du sélecteur à `#subject`, donc `#outer` n'est pas utilisé dans la correspondance du sélecteur et l'élément `#inner` n'est pas trouvé.

### Échapper les valeurs d'attribut

Cet exemple montre que si un document HTML contient un [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) qui n'est pas un [identifiant CSS](/fr/docs/Web/CSS/Reference/Values/ident) valide, il faut échapper la valeur de l'attribut avant de l'utiliser dans `querySelectorAll()`.

#### HTML

Dans le code suivant, un élément {{HTMLElement("div")}} a un `id` de `"this?element"`, qui n'est pas un identifiant CSS valide, car le caractère `"?"` n'est pas autorisé dans les identifiants CSS.

Nous avons également trois boutons et un élément {{HTMLElement("pre")}} pour consigner les erreurs.

```html
<div id="container">
  <div id="this?element"></div>
</div>

<button id="no-escape">Pas d'échappement</button>
<button id="css-escape">CSS.escape()</button>
<button id="manual-escape">Échappement manuel</button>

<pre id="log"></pre>
```

#### CSS

```css
div {
  background-color: blue;
  margin: 1rem 0;
  height: 100px;
  width: 200px;
}
```

#### JavaScript

Les trois boutons, lorsqu'on clique dessus, essaient tous de sélectionner le `<div>`, puis définissent sa couleur de fond sur une valeur aléatoire.

- Le premier bouton utilise directement la valeur `this?element`.
- Le deuxième bouton échappe la valeur en utilisant {{DOMxRef("CSS.escape_static", "CSS.escape()")}}.
- Le troisième bouton échappe explicitement le caractère `?` à l'aide d'une barre oblique inverse. Notez qu'il faut aussi échapper la barre oblique inverse elle‑même, en utilisant une autre barre oblique inverse, par exemple&nbsp;: `\\?`.

```js
const container = document.querySelector("#container");
const log = document.querySelector("#log");

function random(number) {
  return Math.floor(Math.random() * number);
}

function setBackgroundColor(id) {
  log.textContent = "";

  try {
    const elements = container.querySelectorAll(`#${id}`);
    const randomColor = `rgb(${random(255)} ${random(255)} ${random(255)})`;
    elements[0].style.backgroundColor = randomColor;
  } catch (e) {
    log.textContent = e;
  }
}

document.querySelector("#no-escape").addEventListener("click", () => {
  setBackgroundColor("this?element");
});

document.querySelector("#css-escape").addEventListener("click", () => {
  setBackgroundColor(CSS.escape("this?element"));
});

document.querySelector("#manual-escape").addEventListener("click", () => {
  setBackgroundColor("this\\?element");
});
```

#### Résultat

Cliquer sur le premier bouton génère une erreur, tandis que les deuxième et troisième boutons fonctionnent correctement.

{{EmbedLiveSample("Échapper les valeurs d'attribut", "", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Sélection et parcours de l'arbre DOM](/fr/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
- Le guide des [Sélecteurs d'attribut](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors) CSS
- [Apprendre&nbsp;: Sélecteurs d'attribut CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)
- La méthode {{DOMxRef("Element.querySelector()", "querySelector()")}} de l'interface `Element`
- Les méthodes {{DOMxRef("Document.querySelector()", "querySelector()")}} et {{DOMxRef("Document.querySelectorAll()", "querySelectorAll()")}} de l'interface `Document`
- Les méthodes {{DOMxRef("DocumentFragment.querySelector()", "querySelector()")}} et {{DOMxRef("DocumentFragment.querySelectorAll()", "querySelectorAll()")}} de l'interface `DocumentFragment`
