---
title: Element.querySelectorAll()
slug: Web/API/Element/querySelectorAll
translation_of: Web/API/Element/querySelectorAll
browser-compat: api.Element.querySelectorAll
---
{{APIRef("DOM")}}

La méthode **`querySelectorAll()`** de [`Element`](/fr/docs/Web/API/Element) retourne une [`NodeList`](/fr/docs/Web/API/NodeList) statique (non-dynamique) des éléments correspondants au groupe de sélecteurs CSS spécifiés qui sont des descendants de l'élément sur lequel la méthode a été appelée.

## Syntaxe

```js
elementList = parentNode.querySelectorAll(selectors);
```

### Paramètres

- `selectors`
  - : Une chaîne de caractères [`DOMString`](/fr/docs/Web/API/DOMString) contenant un ou plusieurs sélecteurs à comparer. Cette chaîne doit être valide pour les [sélecteurs CSS](/fr/docs/Web/CSS/CSS_Selectors)&nbsp;; si ce n'est pas le cas, une exception `SyntaxError` est levée. Voir [Localisation des éléments DOM avec les sélecteurs](/fr/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) pour plus d'informations sur l'utilisation des sélecteurs pour identifier les éléments. Plusieurs sélecteurs peuvent être spécifiés en les séparant par une virgule.

> **Note :** Les caractères qui ne font pas partie de la syntaxe CSS standard doivent être échappés à l'aide d'une barre oblique inverse. Puisque JavaScript utilise également l'échappement en retour arrière, un soin particulier doit être pris lors de l'écriture de littéraux de chaîne utilisant ces caractères. Voir [Échappement des caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#échappement_des_caractères) pour plus d'informations.

### Valeur de retour

Une [`NodeList`](/fr/docs/Web/API/NodeList) statique contenant un objet [`Element`](/fr/docs/Web/API/Element) pour chaque nœud descendant qui correspond à au moins un des sélecteurs spécifiés au moment où la méthode est appelée.

> **Note :** Si les sélecteurs spécifiés avec `selectors` incluent un [pseudo-élément CSS](/fr/docs/Web/CSS/Pseudo-elements), la liste renvoyée est toujours vide.

### Exception

- `SyntaxError`
  - : La syntaxe de la chaîne du `selectors` spécifiée n'est pas valide.

## Exemples

### Obtenir d'une liste de correspondances

Pour obtenir une [`NodeList`](/fr/docs/Web/API/NodeList) de tous les éléments [`<p>`](/fr/docs/Web/HTML/Element/p) contenus dans l'élément `myBox`&nbsp;:

```js
let matches = myBox.querySelectorAll("p");
```

Cet exemple renvoie une liste de tous les éléments [`<div>`](/fr/docs/Web/HTML/Element/div) dans `myBox` avec une classe `note` ou `alert`&nbsp;:

```js
let matches = myBox.querySelectorAll("div.note, div.alert");
```

Ici, nous obtenons une liste d'éléments `<p>` du document, dont le parent immédiat est un [`<div>`](/fr/docs/Web/HTML/Element/div) qui a la classe `highlighted` et qui sont inclus dans un conteneur dont l'`id` est `test`&nbsp;:

```js
let container = document.querySelector("#test");
let matches = container.querySelectorAll("div.highlighted > p");
```

Cet exemple utilise un [sélecteur d'attribut](/fr/docs/Web/CSS/Attribute_selectors) pour renvoyer une liste d'éléments [`<iframe>`](/fr/docs/Web/HTML/Element/iframe) du document lesquels contiennent un attribut nommé `data-src`&nbsp;:

```js
let matches = document.querySelectorAll("iframe[data-src]");
```

Ici, un sélecteur d'attribut est utilisé pour renvoyer une liste des éléments de la liste contenus dans une liste dont l'`id` est `userlist` et qui ont un attribut `data-active` dont la valeur est `1`&nbsp;:

```js
let container = document.querySelector("#userlist");
let matches = container.querySelectorAll("li[data-active='1']");
```

### Accéder aux correspondances

Une fois que la [`NodeList`](/fr/docs/Web/API/NodeList) des éléments correspondants est retournée, vous pouvez l'examiner pour n'importe quel tableau (<i lang="en">array</i>). Si le tableau est vide (sa propriété `length` est `0`), alors aucune correspondance n'a été trouvée.

Sinon, vous pouvez simplement utiliser la notation de tableau standard pour accéder au contenu de la liste. Vous pouvez utiliser n'importe quelle instruction de boucle commune, telle que&nbsp;:

```js
let highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach(function(userItem) {
  deleteUser(userItem);
});
```

> **Note :** L'objet `NodeList` n'est pas vraiment un tableau (`Array`) — vous ne pouvez donc pas utiliser des méthodes de tableaux (telles que `slice`, `some`, `map`, etc.) avec `NodeList`. Essayez `Array.from(nodeList)` pour le convertir en tableau.

## Notes d'utilisation

`queryselectorAll` se comporte différemment des bibliothèques DOM JavaScript les plus courantes, ce qui peut entraîner des résultats inattendus.

### HTML

Considérons ce code HTML, avec ses trois blocs [`<div>`](/fr/docs/Web/HTML/Element/div) imbriqués.

```html
<div class="outer">
  <div class="select">
    <div class="inner">
    </div>
  </div>
</div>
```

### JavaScript

```js
let select = document.querySelector('.select');
let inner = select.querySelectorAll('.outer .inner');
inner.length; // 1, pas 0 !
```

Dans cet exemple, en sélectionnant `.outer .inner` dans le contexte `<div>` avec la classe `select`, l'élément avec la classe `.inner` est toujours trouvé, même si `.outer` n'est pas un descendant de l'élément sur lequel la recherche est effectuée (`.select`). Par défaut, `querySelectorAll()` vérifie uniquement que le dernier élément du sélecteur se trouve dans la portée de la recherche.

La pseudo-classe [`:scope`](/fr/docs/Web/CSS/:scope) restaure le comportement attendu, ne faisant correspondre les sélecteurs que sur les descendants de l'élément de base&nbsp;:

```js
let select = document.querySelector('.select');
let inner = select.querySelectorAll(':scope .outer .inner');
inner.length; // 0
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Localisation des éléments DOM avec les sélecteurs](/fr/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- [Sélecteurs d'attribut](/fr/docs/Web/CSS/Attribute_selectors) dans le guide CSS
- [Sélecteurs d'attribut](/fr/docs/Learn/CSS/Building_blocks/Selectors/Attribute_selectors) dans la zone d'apprentissage de MDN
- [`Element.querySelector()`](/fr/docs/Web/API/Element/querySelector)
- [`Document.querySelector()`](/fr/docs/Web/API/Document/querySelector) et [`Document.querySelectorAll()`](/fr/docs/Web/API/Document/querySelectorAll)
- [`DocumentFragment.querySelector()`](/fr/docs/Web/API/DocumentFragment/querySelector) et [`DocumentFragment.querySelectorAll()`](/fr/docs/Web/API/DocumentFragment/querySelectorAll)
