---
title: Document.querySelectorAll()
slug: Web/API/Document/querySelectorAll
---

{{APIRef("DOM")}}

La méthode **`querySelectorAll()`** de {{domxref("Element")}} renvoie une {{domxref("NodeList")}} statique représentant une liste des éléments du document qui correspondent au groupe de sélecteurs spécifiés.

> **Note :** Cette méthode est implémentée à partir de {{domxref("ParentNode")}}, méthode du mixin {{domxref("ParentNode.querySelectorAll", "querySelectorAll()")}} .

## Syntaxe

```js
elementList = parentNode.querySelectorAll(selectors);
```

### Paramètres

- `selecteurs`
  - : une {{domxref("DOMString")}} (_chaîne de caractères_) qui contient un ou plusieurs [sélecteurs CSS](/fr/docs/Web/CSS/CSS_Selectors) ; s'il n'y en a pas, une exception `SyntaxError` est lancée. Voir [localisation des éléments DOM avec les sélecteurs](/fr/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors) pour plus d'informations sur l'utilisation des sélecteurs en vue d'identifier les éléments. Plusieurs sélecteurs peuvent être spécifiés, séparés par une virgule.

> **Note :** Les caractères qui ne font pas partie de la syntaxe CSS standard doivent être échappés à l'aide d'une barre oblique inverse. Puisque JavaScript utilise également l'échappement en retour arrière, un soin particulier doit être pris lors de l'écriture de littéraux de chaîne utilisant ces caractères. Voir [Échapper des caractères spéciaux](/fr/docs/Web/API/Document/querySelector#échapper_des_caractères_spéciaux) pour plus d'informations.

### Valeur renvoyée

Une {{domxref("NodeList")}} statique contenant un objet {{domxref("Element")}} pour chaque élément qui correspond à au-moins un des sélecteurs spécifiés ou une {{domxref("NodeList")}} vide si aucune correspondance n'est trouvée .

> **Note :** Si les `selectors` spécifiés contiennent un [pseudo-element CSS](/fr/docs/Web/CSS/Pseudo-elements), la liste retournée sera toujours vide.

### Exceptions

- `SyntaxError`
  - : la syntaxe des chaînes `selectors` spécifiés n'est pas valide.

## Exemples

Pour obtenir une {{domxref("NodeList")}} (_liste de noeuds_) de tous les éléments {{HTMLElement("p")}} dans le document :

```js
const matches = document.querySelectorAll("p");
```

Cet exemple renvoie la liste de tous les éléments `div` du `document` dont l'attribut de classe a pour valeur "`note`" ou "`alert`" :

```js
const matches = document.querySelectorAll("div.note, div.alert");
```

Ici, nous obtenons une liste des éléments `<p>` dont l'élément parent immédiat est un {{domxref("div")}} avec la classe `"highlighted"` et qui sont situés dans un conteneur dont l'identifiant est `"test"`.

```js
const container = document.querySelector("#test");
const matches = container.querySelectorAll("div.highlighted > p");
```

Cet exemple utilise un [sélecteur d'attribut](/fr/docs/Web/CSS/Sélecteurs_d_attribut) pour renvoyer une liste d'éléments {{domxref("iframe")}} dans le document qui contient un attribut nommé `"data-src"` :

```js
const matches = document.querySelectorAll("iframe[data-src]");
```

Ici, un sélecteur d'attribut est utilisé pour renvoyer une liste d'éléments de liste contenus dans une liste dont l'identifiant est `"userlist"` lequel a un attribut `"data-active"` dont la valeur est `"1"`:

```js
const container = document.querySelector("#userlist");
const matches = container.querySelectorAll("li[data-active='1']");
```

### Accès aux correspondances

Une fois que la {{domxref("NodeList")}} des éléments correspondants est renvoyée, vous pouvez l'examiner comme un tableau (_array_). Si le tableau est vide (c'est quand sa propriété `length` est 0), alors aucune correspondance n'a été trouvée.

Sinon, vous pouvez simplement utiliser la notation de tableau standard pour accéder au contenu de la liste. Vous pouvez utiliser n'importe quelle instruction de boucle commune, telle que :

```js
const highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach(function (userItem) {
  deleteUser(userItem);
});
```

## Notes d'utilisation

`querySelectorAll()` se comporte différemment des bibliothèques DOM JavaScript les plus courantes, ce qui peut entraîner des résultats inattendus.

### HTML

Considérez ce HTML, avec ses trois blocs {{HTMLElement("div")}} imbriqués.

```html
<div class="outer">
  <div class="select">
    <div class="inner"></div>
  </div>
</div>
```

### JavaScript

```js
const select = document.querySelector(".select");
const inner = select.querySelectorAll(".outer .inner");
inner.length; // 1, not 0!
```

Dans cet exemple, lors de la sélection de `".outer .inner"` dans le contexte, le `<div>` avec la classe `"select"`, l'élément avec la classe `".inner"` est toujours trouvé, même si `.outer` n'est pas un descendant de l'élément de base sur lequel la recherche `(".select")` est effectuée. Par défaut, `querySelectorAll()` vérifie uniquement que le dernier élément du sélecteur se trouve dans la portée de la recherche.

La pseudo-classe {{cssxref (":scope")}} restaure le comportement attendu, ne faisant correspondre les sélecteurs que sur les descendants de l'élément de base :

```js
const select = document.querySelector(".select");
const inner = select.querySelectorAll(":scope .outer .inner");
inner.length; // 0
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Localisation des éléments DOM avec les sélecteurs](/fr/docs/Web/API/Document_object_model/Locating_DOM_elements_using_selectors)
- [Sélecteurs d'attribut](/fr/docs/Web/CSS/Attribute_selectors) dans le guide CSS
- [Sélecteurs d'attribut](/fr/docs/Learn/CSS/Introduction_to_CSS/Attribute_selectors) dans la zone d'apprentissage de MDN
- {{domxref("Element.querySelectorAll")}} et {{domxref("Element.querySelectorAll()")}}
- {{domxref("document.querySelector")}}
- {{domxref("DocumentFragment.querySelector()")}} et {{domxref("DocumentFragment.querySelectorAll()")}}
- {{domxref("ParentNode.querySelector()")}} et {{domxref("ParentNode.querySelectorAll()")}}
- [Extraits de code pour `querySelector`](/fr/docs/Code_snippets/QuerySelector)
