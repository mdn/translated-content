---
title: "Document : méthode querySelectorAll()"
short-title: querySelectorAll()
slug: Web/API/Document/querySelectorAll
l10n:
  sourceCommit: 277a8954951c900ef60a5175503976284c1d328d
---

{{APIRef("DOM")}}

La méthode **`querySelectorAll()`** de {{DOMxRef("Element")}} retourne une {{DOMxRef("NodeList")}} statique représentant une liste des éléments du document qui correspondent au groupe de sélecteurs définis.

## Syntaxe

```js-nolint
querySelectorAll(selectors);
```

### Paramètres

- `selectors`
  - : Une chaîne de caractères qui contient un ou plusieurs sélecteurs CSS. La chaîne de caractères doit être une chaîne de sélecteurs CSS valide&nbsp;; si ce n'est pas le cas, une exception `SyntaxError` est lancée.

    Notez que la spécification HTML n'exige pas que les valeurs d'attribut soient des identifiants CSS valides. Si la valeur d'un attribut [`class`](/fr/docs/Web/HTML/Reference/Global_attributes/class) ou [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) n'est pas un identifiant CSS valide, vous devez l'échapper avant de l'utiliser dans un sélecteur, soit en appelant {{DOMxRef("CSS.escape_static", "CSS.escape()")}} sur la valeur, soit en utilisant l'une des techniques décrites dans [Échapper les caractères](/fr/docs/Web/CSS/Reference/Values/ident#échapper_les_caractères). Voir [Échapper les valeurs d'attribut](#échapper_les_valeurs_dattribut) pour un exemple.

### Valeur de retour

Une {{DOMxRef("NodeList")}} statique contenant un objet {{DOMxRef("Element")}} pour chaque élément qui correspond à au-moins un des sélecteurs spécifiés ou une {{DOMxRef("NodeList")}} vide si aucune correspondance n'est trouvée.

> [!NOTE]
> Si les `selectors` spécifiés contiennent un [pseudo-element CSS](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements), la liste retournée sera toujours vide.

### Exceptions

- `SyntaxError` {{DOMxRef("DOMException")}}
  - : Signale que la syntaxe des chaînes de `selectors` définies n'est pas valide.

## Exemples

### Obtenir une liste de correspondances

Pour obtenir une {{DOMxRef("NodeList")}} (_liste de noeuds_) de tous les éléments {{HTMLElement("p")}} dans le document&nbsp;:

```js
const matches = document.querySelectorAll("p");
```

Cet exemple renvoie la liste de tous les éléments {{HTMLElement("div")}} du document dont l'attribut de classe a pour valeur `note` ou `alert`&nbsp;:

```js
const matches = document.querySelectorAll("div.note, div.alert");
```

Ici, nous obtenons une liste des éléments `<p>` dont l'élément parent immédiat est un {{HTMLElement("div")}} avec la classe `"highlighted"` et qui sont situés dans un conteneur dont l'identifiant est `"test"`.

```js
const container = document.querySelector("#test");
const matches = container.querySelectorAll("div.highlighted > p");
```

Cet exemple utilise un [sélecteur d'attribut](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors) pour renvoyer une liste d'éléments {{HTMLElement("iframe")}} dans le document qui contient un attribut nommé `"data-src"`&nbsp;:

```js
const matches = document.querySelectorAll("iframe[data-src]");
```

Ici, un sélecteur d'attribut est utilisé pour renvoyer une liste d'éléments de liste contenus dans une liste dont l'identifiant est `"userlist"` lequel a un attribut `"data-active"` dont la valeur est `"1"`&nbsp;:

```js
const container = document.querySelector("#userlist");
const matches = container.querySelectorAll("li[data-active='1']");
```

### Accès aux correspondances

Une fois que la {{DOMxRef("NodeList")}} des éléments correspondants est renvoyée, vous pouvez l'examiner comme un tableau (_array_). Si le tableau est vide (c'est quand sa propriété `length` est 0), alors aucune correspondance n'a été trouvée.

Sinon, vous pouvez simplement utiliser la notation de tableau standard pour accéder au contenu de la liste. Vous pouvez utiliser n'importe quelle instruction de boucle commune, telle que&nbsp;:

```js
const highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach(function (userItem) {
  deleteUser(userItem);
});
```

### Échapper les valeurs d'attribut

Cet exemple montre que si un document HTML contient un [`id`](/fr/docs/Web/HTML/Reference/Global_attributes/id) qui n'est pas un [identifiant CSS](/fr/docs/Web/CSS/Reference/Values/ident) valide, il faut échapper la valeur de l'attribut avant de l'utiliser dans `querySelectorAll()`.

#### HTML

Dans le code ci‑dessous, un élément {{HTMLElement("div")}} a pour `id` la valeur `"this?element"`, qui n'est pas un identifiant CSS valide, car le caractère `"?"` n'est pas autorisé dans les identifiants CSS.

Nous avons également trois boutons et un élément {{HTMLElement("pre")}} pour consigner les erreurs.

```html
<div id="this?element"></div>

<button id="no-escape">Aucun échappement</button>
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

- Le premier bouton utilise directement la valeur `"this?element"`.
- Le deuxième bouton échappe la valeur en utilisant {{DOMxRef("CSS.escape_static", "CSS.escape()")}}.
- Le troisième bouton échappe explicitement le caractère `"?"` avec une barre oblique inverse. Notez qu'il faut aussi échapper la barre oblique inverse elle‑même, en utilisant une autre barre oblique inverse, par exemple&nbsp;: `"\\?"`.

```js
const log = document.querySelector("#log");

function random(number) {
  return Math.floor(Math.random() * number);
}

function setBackgroundColor(id) {
  log.textContent = "";

  try {
    const elements = document.querySelectorAll(`#${id}`);
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

{{EmbedLiveSample("escaping_attribute_values", "", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Sélection et parcours de l'arbre DOM](/fr/docs/Web/API/Document_Object_Model/Selection_and_traversal_on_the_DOM_tree)
- Le guide des [Sélecteurs d'attribut](/fr/docs/Web/CSS/Reference/Selectors/Attribute_selectors) CSS
- [Apprendre&nbsp;: Sélecteurs d'attribut CSS](/fr/docs/Learn_web_development/Core/Styling_basics/Attribute_selectors)
- Les méthodes {{DOMxRef("Element.querySelector()", "querySelector()")}} et {{DOMxRef("Element.querySelectorAll()", "querySelectorAll()")}} de l'interface `Element`
- La méthode {{DOMxRef("Document.querySelector()", "querySelector()")}} de l'interface `Document`
- Les méthodes {{DOMxRef("DocumentFragment.querySelector()", "querySelector()")}} et {{DOMxRef("DocumentFragment.querySelectorAll()", "querySelectorAll()")}} de l'interface `DocumentFragment`
