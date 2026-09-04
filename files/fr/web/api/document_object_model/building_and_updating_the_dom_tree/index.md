---
title: Construire et mettre à jour l'arbre DOM
slug: Web/API/Document_Object_Model/Building_and_updating_the_DOM_tree
original_slug: Web/API/Document_Object_Model/Traversing_an_HTML_table_with_JavaScript_and_DOM_Interfaces
l10n:
  sourceCommit: 277a8954951c900ef60a5175503976284c1d328d
---

{{DefaultAPISidebar("DOM")}}

Cet article est un aperçu des méthodes fondamentales et puissantes du DOM niveau 1, et comment les utiliser en JavaScript. Vous apprendrez à créer, lire, contrôler et supprimer dynamiquement des éléments HTML. Les méthodes DOM présentées ici ne sont pas spécifiques à HTML&nbsp;: elles s'appliquent aussi à XML. Les démonstrations fournies fonctionnent dans tout navigateur moderne.

> [!NOTE]
> Les méthodes DOM présentées ici font partie de la spécification Document Object Model (Core) niveau 1. Le DOM niveau 1 inclut à la fois des méthodes d'accès et de manipulation génériques (DOM 1 Core) ainsi que des méthodes spécifiques aux documents HTML (DOM 1 HTML).

## Créer dynamiquement un tableau HTML

### Exemple

Dans cet exemple, un nouveau tableau est ajouté à la page lorsqu'un bouton est cliqué.

#### HTML

```html
<input type="button" value="Générer un tableau" />
```

#### JavaScript

```js
function generateTable() {
  // crée un élément <table> et un élément <tbody>
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  // création de toutes les cellules
  for (let i = 0; i < 2; i++) {
    // crée une ligne de tableau
    const row = document.createElement("tr");

    for (let j = 0; j < 2; j++) {
      // Crée un élément <td> et un nœud texte, place le texte
      // dans le <td>, puis place le <td> à la fin de la ligne
      const cell = document.createElement("td");
      const cellText = document.createTextNode(
        `cellule ligne ${i}, colonne ${j}`,
      );
      cell.appendChild(cellText);
      row.appendChild(cell);
    }

    // ajoute la ligne à la fin du corps du tableau
    tblBody.appendChild(row);
  }

  // place le <tbody> dans le <table>
  tbl.appendChild(tblBody);
  // ajoute <table> dans <body>
  document.body.appendChild(tbl);
  // définit l'attribut border de tbl à '2'
  tbl.setAttribute("border", "2");
}

document
  .querySelector("input[type='button']")
  .addEventListener("click", generateTable);
```

```css hidden
table {
  margin: 1rem auto;
}

td {
  padding: 0.5rem;
}
```

#### Résultat

{{ EmbedLiveSample('exemple') }}

### Explications

Notez l'ordre dans lequel nous avons créé les éléments et le nœud texte&nbsp;:

1. D'abord, nous avons créé l'élément `<table>`.
2. Ensuite, nous avons créé l'élément `<tbody>`, enfant de `<table>`.
3. Puis, nous avons utilisé une boucle pour créer les éléments `<tr>`, enfants de `<tbody>`.
4. Pour chaque `<tr>`, une boucle crée les éléments `<td>`, enfants de `<tr>`.
5. Pour chaque `<td>`, on crée ensuite le nœud texte avec le texte de la cellule.

Une fois tous les éléments créés, on les ajoute à leur parent dans l'ordre inverse&nbsp;:

1. On attache chaque nœud texte à son parent `<td>` avec

   ```js
   cell.appendChild(cellText);
   ```

2. On attache chaque `<td>` à son parent `<tr>` avec

   ```js
   row.appendChild(cell);
   ```

3. On attache chaque `<tr>` à son parent `<tbody>` avec

   ```js
   tblBody.appendChild(row);
   ```

4. On attache `<tbody>` à son parent `<table>` avec

   ```js
   tbl.appendChild(tblBody);
   ```

5. On attache `<table>` à son parent `<body>` avec

   ```js
   document.body.appendChild(tbl);
   ```

Retenez cette technique&nbsp;: vous l'utiliserez souvent avec le DOM du W3C. On crée les éléments du haut vers le bas, puis on attache les enfants aux parents du bas vers le haut.

Voici le balisage HTML généré par le code JavaScript&nbsp;:

```html
<table border="2">
  <tbody>
    <tr>
      <td>cellule ligne 0, colonne 0</td>
      <td>cellule ligne 0, colonne 1</td>
    </tr>
    <tr>
      <td>cellule ligne 1, colonne 0</td>
      <td>cellule ligne 1, colonne 1</td>
    </tr>
  </tbody>
</table>
```

Voici l'arbre d'objets DOM généré pour l'élément `<table>` et ses enfants&nbsp;:

![Comment un arbre d'objets DOM est généré à partir de l'élément principal et de ses enfants](sample1-tabledom.jpg)

Vous pouvez construire ce tableau et ses éléments internes avec seulement quelques méthodes DOM. Gardez à l'esprit le modèle arborescente pour les structures que vous souhaitez créer&nbsp;: cela facilitera l'écriture du code. Dans l'arbre du `<table>` de la figure, l'élément `<table>` a un enfant&nbsp;: l'élément `<tbody>`. `<tbody>` a deux enfants. Chaque enfant `<tr>` de `<tbody>` a deux enfants `<td>`. Enfin, chaque `<td>` a un enfant&nbsp;: un nœud texte.

## Définir la couleur de fond d'un paragraphe

### Exemple

Dans cet exemple, on change la couleur de fond d'un paragraphe lorsqu'un bouton est cliqué.

#### HTML

```html
<body>
  <input type="button" value="Définir la couleur de fond du paragraphe" />
  <p>salut</p>
  <p>bonjour</p>
</body>
```

#### JavaScript

```js
function setBackground() {
  // récupère tous les éléments p du document
  const paragraphs = document.getElementsByTagName("p");

  // récupère le deuxième paragraphe de la liste
  const secondParagraph = paragraphs[1];

  // applique le style en ligne
  secondParagraph.style.background = "red";
}

document.querySelector("input").addEventListener("click", setBackground);
```

#### Résultat

{{ EmbedLiveSample('exemple_2') }}

### Explications

`getElementsByTagName(tagNameValue)` est une méthode disponible sur tout {{DOMxRef("Element")}} DOM ou sur l'élément racine {{DOMxRef("Document")}}. Elle retourne un tableau de tous les descendants de l'élément correspondant au nom de balise. Le premier élément de la liste est à la position `[0]` du tableau.

Voici les étapes réalisées&nbsp;:

1. On récupère tous les éléments `p` du document&nbsp;:

   ```js
   const paragraphs = document.getElementsByTagName("p");
   ```

2. On récupère le deuxième élément paragraphe de la liste&nbsp;:

   ```js
   const secondParagraph = paragraphs[1];
   ```

   ![Un élément paragraphe est ajouté comme nouveau frère à un paragraphe existant dans un arbre DOM](sample2a2.jpg)

3. Enfin, on définit la couleur de fond sur rouge avec la propriété {{DOMxRef("HTMLElement.style", "style")}} de l'objet {{DOMxRef("HTMLParagraphElement", "paragraphe")}}&nbsp;:

   ```js
   secondParagraph.style.background = "red";
   ```

### Créer des TextNodes avec document.createTextNode("..")

Utilisez l'objet document pour appeler la méthode `createTextNode` et créer un nœud texte. Il suffit de passer le contenu du texte. La valeur de retour est un objet représentant le nœud texte.

```js
myTextNode = document.createTextNode("le monde");
```

Cela signifie que vous avez créé un nœud de type `TEXT_NODE` (un morceau de texte) dont la donnée texte est «&nbsp;le monde&nbsp;», et `myTextNode` est votre référence vers ce nœud. Pour insérer ce texte dans votre page HTML, il faut faire de ce nœud texte un enfant d'un autre élément.

### Insérer des éléments avec appendChild(..)

En appelant `secondParagraph.appendChild(node_element)`, vous faites de l'élément un nouvel enfant du deuxième élément `<p>`.

```js
secondParagraph.appendChild(myTextNode);
```

Après avoir testé cet exemple, vous remarquerez que les mots bonjour et monde sont collés&nbsp;: bonjourle monde. Visuellement, dans la page HTML, il semble qu'il n'y ait qu'un seul nœud texte, mais dans le modèle de document, il y a bien deux nœuds. Le second est un nouveau nœud de type `TEXT_NODE`, et c'est le deuxième enfant du deuxième `<p>`. La figure suivante montre le nœud texte nouvellement créé dans l'arbre du document.

![Les nœuds texte d'un élément paragraphe comme frères dans l'arbre DOM.](sample2b2.jpg)

> [!NOTE]
> `createTextNode()` et `appendChild()` sont un moyen simple d'inclure un espace entre les mots _bonjour_ et _le monde_. Notez aussi que la méthode `appendChild` ajoute l'enfant après le dernier enfant, comme le mot _monde_ ajouté après _bonjour_. Si vous souhaitez insérer un nœud texte entre _bonjour_ et _le monde_, utilisez `insertBefore` au lieu de `appendChild`.

### Créer de nouveaux éléments avec document.createElement(..)

Vous pouvez créer de nouveaux éléments HTML ou tout autre élément avec `createElement`. Par exemple, pour créer un nouvel élément `<p>` comme enfant de `<body>`, utilisez l'objet `myBody` de l'exemple précédent et ajoutez un nouvel élément. Pour créer un nœud, appelez `document.createElement("nomDeBalise")`. Exemple&nbsp;:

```js
myNewPTagNode = document.createElement("p");
myBody.appendChild(myNewPTagNode);
```

![Comment un nouvel élément est ajouté à un nœud texte dans l'arbre du document](sample2c.jpg)

### Supprimer des nœuds avec removeChild(..)

Les nœuds peuvent être supprimés. Le code suivant supprime le nœud texte `myTextNode` (contenant le mot "monde") du deuxième élément `<p>`, `secondParagraph`.

```js
secondParagraph.removeChild(myTextNode);
```

Le nœud texte `myTextNode` (contenant "monde") existe toujours. Le code suivant rattache `myTextNode` au nouvel élément `<p>`, `myNewPTagNode`.

```js
myNewPTagNode.appendChild(myTextNode);
```

L'état final de l'arbre d'objets modifié ressemble à ceci&nbsp;:

![Création et ajout d'un nouvel élément à la structure d'objets texte](sample2d.jpg)

## Créer dynamiquement un tableau

La figure suivante montre la structure arborescente d'objets pour le tableau créé dans l'exemple.

### Structure du tableau HTML

![La structure arborescente d'objets du tableau HTML après ajout de nouveaux éléments](sample1-tabledom.jpg)

### Créer des nœuds éléments et les insérer dans l'arbre du document

Les étapes de base pour créer le tableau sont&nbsp;:

- Récupérer l'objet body (premier élément du document).
- Créer tous les éléments.
- Enfin, ajouter chaque enfant selon la structure du tableau (comme dans la figure ci-dessus).

> [!NOTE]
> À la fin du script, une nouvelle ligne de code définit la propriété `border` du tableau avec la méthode DOM `setAttribute()`. Cette méthode prend deux arguments&nbsp;: le nom de l'attribut et sa valeur. Vous pouvez définir n'importe quel attribut d'un élément avec `setAttribute`.

```js
// récupère la référence du body
const myBody = document.getElementsByTagName("body")[0];

// crée les éléments <table> et <tbody>
const myTable = document.createElement("table");
const myTableBody = document.createElement("tbody");

// création de toutes les cellules
for (let j = 0; j < 3; j++) {
  // crée une ligne <tr>
  const myCurrentRow = document.createElement("tr");

  for (let i = 0; i < 4; i++) {
    // crée une cellule <td>
    const myCurrentCell = document.createElement("td");
    // crée un nœud texte
    const currentText = document.createTextNode(
      `cellule ligne ${j}, colonne ${i}`,
    );
    // ajoute le nœud texte à la cellule <td>
    myCurrentCell.appendChild(currentText);
    // ajoute la cellule <td> à la ligne <tr>
    myCurrentRow.appendChild(myCurrentCell);
  }
  // ajoute la ligne <tr> au <tbody>
  myTableBody.appendChild(myCurrentRow);
}

// ajoute <tbody> à <table>
myTable.appendChild(myTableBody);
// ajoute <table> à <body>
myBody.appendChild(myTable);
// définit l'attribut border de myTable à 2
myTable.setAttribute("border", "2");
```

## Manipuler le tableau avec le DOM et CSS

### Récupérer un nœud texte du tableau

Cet exemple introduit deux nouveaux attributs DOM. D'abord, il utilise l'attribut `childNodes` pour obtenir la liste des nœuds enfants de myCell. La liste `childNodes` inclut tous les nœuds enfants, quel que soit leur nom ou type. Comme `getElementsByTagName()`, elle retourne une liste de nœuds.

Les différences sont&nbsp;: (a) `getElementsByTagName()` ne retourne que les éléments du nom de balise spécifié&nbsp;; (b) `childNodes` inclut tous les descendants à tous les niveaux, pas seulement les enfants immédiats.

Une fois la liste obtenue, utilisez `[x]` pour récupérer l'enfant souhaité. Cet exemple stocke dans `myCellText` le nœud texte de la deuxième cellule de la deuxième ligne du tableau.

Pour afficher le résultat, on crée un nouveau nœud texte dont le contenu est la donnée de `myCellText`, puis on l'ajoute comme enfant de `<body>`.

> [!NOTE]
> Si votre objet est un nœud texte, vous pouvez utiliser l'attribut data pour récupérer le texte du nœud.

```js
const myBody = document.getElementsByTagName("body")[0];
const myTable = myBody.getElementsByTagName("table")[0];
const myTableBody = myTable.getElementsByTagName("tbody")[0];
const myRow = myTableBody.getElementsByTagName("tr")[1];
const myCell = myRow.getElementsByTagName("td")[1];

// premier élément de la liste childNodes de myCell
const myCellText = myCell.childNodes[0];

// le contenu de currentText est la donnée de myCellText
const currentText = document.createTextNode(myCellText.data);
myBody.appendChild(currentText);
```

### Récupérer la valeur d'un attribut

À la fin de l'exemple 1, on utilise `setAttribute` sur l'objet `myTable` pour définir la bordure. Pour récupérer la valeur de l'attribut, utilisez la méthode `getAttribute`&nbsp;:

```js
myTable.getAttribute("border");
```

### Masquer une colonne en modifiant les propriétés de style

Une fois l'objet obtenu dans votre variable JavaScript, vous pouvez définir les propriétés `style` directement. Le code suivant est une version modifiée où chaque cellule de la deuxième colonne est masquée et chaque cellule de la première colonne a un fond rouge. Notez que la propriété `style` est définie directement.

```js
const myBody = document.getElementsByTagName("body")[0];
const myTable = document.createElement("table");
const myTableBody = document.createElement("tbody");

for (let row = 0; row < 2; row++) {
  const myCurrentRow = document.createElement("tr");
  for (let col = 0; col < 2; col++) {
    const myCurrentCell = document.createElement("td");
    const currentText = document.createTextNode(`cellule&nbsp;: ${row}${col}`);
    myCurrentCell.appendChild(currentText);
    myCurrentRow.appendChild(myCurrentCell);
    // définit la couleur de fond de la cellule
    // si la colonne est 0. Si la colonne est 1, masque la cellule
    if (col === 0) {
      myCurrentCell.style.background = "red";
    } else {
      myCurrentCell.style.display = "none";
    }
  }
  myTableBody.appendChild(myCurrentRow);
}
myTable.appendChild(myTableBody);
myBody.appendChild(myTable);
```
