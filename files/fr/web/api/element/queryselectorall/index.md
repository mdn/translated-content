---
title: Element.querySelectorAll()
slug: Web/API/Element/querySelectorAll
tags:
  - API
  - DOM
  - Element
  - Méthode
  - Reference
translation_of: Web/API/Element/querySelectorAll
---
{{APIRef("DOM")}}

La méthode  **`querySelectorAll()`** de {{domxref("Element")}} retourne une  {{domxref("NodeList")}} non-directe des éléments correspondants au groupe de selecteurs CSS spécifiés qui sont des descendants de l'élément sur lequel la méthode a été appelée.

> **Note :** La définition de cet API a été déplacée vers l'interface {{domxref("ParentNode")}} .

## Syntaxe

    elementList = baseElement.querySelectorAll(selectors);

### Paramètres

- `selectors`
  - : une {{domxref("DOMString")}} contenant un ou plusieurs sélecteurs à comparer. Cette chaîne doit être valide pour les [sélecteurs CSS](/fr/docs/Web/CSS/S%C3%A9lecteurs_CSS) ; si ce n'est pas le cas, une exception `SyntaxError` est levée. Voir [Localisation des éléments DOM avec les sélecteurs](/fr/docs/Web/API/Document_Object_Model/Localisation_des_%C3%A9l%C3%A9ments_DOM_avec_les_s%C3%A9lecteurs) pour plus d'informations sur l'utilisation des sélecteurs pour identifier les éléments. Plusieurs sélecteurs peuvent être spécifiés en les séparant par une virgule.

> **Note :** Les caractères qui ne font pas partie de la syntaxe CSS standard doivent être échappés à l'aide d'une barre oblique inverse. Puisque JavaScript utilise également l'échappement en retour arrière, un soin particulier doit être pris lors de l'écriture de littéraux de chaîne utilisant ces caractères.

### Valeur retournée

Une {{domxref ("NodeList")}} contenant un objet {{domxref ("Element")}} pour chaque noeud descendant qui correspond à au moins un des sélecteurs spécifiés.

> **Note :** Si le `selectors` spécifié inclus un [pseudo-element CSS](/fr/docs/Web/CSS/Pseudo-elements), la liste renvoyée est toujours vide.

### Exception

- `SyntaxError`
  - : La syntaxe de la chaîne du `selectors` spécifié n'est pas correcte.

## Exemples

### Obtention d'une liste de correspondances

Pour obtenir une {{domxref("NodeList")}} de tous les éléments {{HTMLElement("p")}} contenus dans l'élément `"myBox"` :

```js
var matches = myBox.querySelectorAll("p");
```

Cet exemple renvoie une liste de tous les éléments {{HTMLElement("div")}} dans `"myBox"`  avec une classe  "`note`" ou  "`alert`" :

```js
var matches = myBox.querySelectorAll("div.note, div.alert");
```

Ici, nous obtenons une liste d'éléments `p` du document, dont le parent immédiat est un {{domxref("div")}}  qui a la classe `'highlighted'` et qui sont inclus dans un conteneur dont l'ID est `"test"` :

```js
var container = document.querySelector("#test");
var matches = container.querySelectorAll("div.highlighted > p");
```

Cet exemple utilise un [sélecteur d'attribut](/fr/docs/Web/CSS/S%C3%A9lecteurs_d_attribut) pour renvoyer une liste d'éléments {{domxref("iframe")}} du document lesquels contiennent un attribut nommé `'data-src'`:

```js
var matches = document.querySelectorAll("iframe[data-src]");
```

Ici, un sélecteur d'attribut est utilisé pour renvoyer une liste des éléments de la liste contenus dans une liste dont l'ID est `"userlist"` et qui ont un attribut `"data-active"` dont la valeur est `"1"`:

```js
var container = document.querySelector("#userlist");
var matches = container.querySelectorAll("li[data-active=1]");
```

### Accès aux correspondances

Une fois que la {{domxref("NodeList")}} des éléments correspondants est retournée, vous pouvez l'examiner pour n'importe quel tableau (_array_). Si le tableau est vide (sa propriété `length` est 0), alors aucune correspondance n'a été trouvée.

Sinon, vous pouvez simplement utiliser la notation de tableau standard pour accéder au contenu de la liste. Vous pouvez utiliser n'importe quelle instruction de boucle commune, telle que :

```js
var highlightedItems = userList.querySelectorAll(".highlighted");

highlightedItems.forEach(function(userItem) {
  deleteUser(userItem);
});
```

## Notes d'utilisation

`queryselectorAll` se comporte différemment des bibliothèques DOM JavaScript les plus courantes, ce qui peut entraîner des résultats inattendus.

### HTML

Considérons ce code HTML, avec ses trois blocs {{HTMLElement ("div")}} imbriqués.

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
var select = document.querySelector('.select');
var inner = select.querySelectorAll('.outer .inner');
inner.length; // 1, pas 0!
```

Dans cet exemple, en sélectionnant `".outer .inner"` dans le contexte `<div> `avec la classe `"select"`, l'élément avec la classe `".inner"` est toujours trouvé, même si `.outer` n'est pas un descendant de l'élément sur lequel la recherche est effectuée `(".select")`. Par défaut, `querySelectorAll()` vérifie uniquement que le dernier élément du sélecteur se trouve dans la portée de la recherche.

La pseudo-classe {{cssxref (": scope")}} restaure le comportement attendu, ne faisant correspondre les sélecteurs que sur les descendants de l'élément de base :

```js
var select = document.querySelector('.select');
var inner = select.querySelectorAll(':scope .outer .inner');
inner.length; // 0
```

## Spécifications

| Spécification                                                                                                                                | Statut                                       | Commentaire          |
| -------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------- | -------------------- |
| {{SpecName("DOM WHATWG", "#dom-parentnode-queryselectorall", "ParentNode.querySelectorAll()")}}             | {{Spec2("DOM WHATWG")}}             | norme actuelle       |
| {{SpecName("Selectors API Level 2", "#dom-parentnode-queryselectorall", "ParentNode.querySelectorAll()")}} | {{Spec2("Selectors API Level 2")}} | Pas de changement    |
| {{SpecName("DOM4", "#dom-parentnode-queryselectorall", "ParentNode.querySelectorAll()")}}                     | {{Spec2("DOM4")}}                     | Définition initiale  |
| {{SpecName("Selectors API Level 1", "#interface-definitions", "document.querySelector()")}}                     | {{Spec2("Selectors API Level 1")}} | Définition originale |

## Compatibilité des navigateurs

{{Compat("api.Element.querySelectorAll")}}

## Voir aussi

- [Localisation des éléments DOM avec les sélecteurs](/fr/docs/Web/API/Document_Object_Model/Localisation_des_%C3%A9l%C3%A9ments_DOM_avec_les_s%C3%A9lecteurs)
- [Sélecteurs d'attribut](/fr/docs/Web/CSS/S%C3%A9lecteurs_d_attribut) dans le guide CSS
- [Sélecteurs d'attribut](/fr/docs/Learn/CSS/Introduction_to_CSS/Attribute_selectors) dans la zone d'apprentissage de MDN
- {{domxref("element.querySelector()")}}
- {{domxref("Document.querySelector()")}} et {{domxref("Document.querySelectorAll()")}}
- {{domxref("DocumentFragment.querySelector()")}} et {{domxref("DocumentFragment.querySelectorAll()")}}
- {{domxref("document.querySelector()")}} et {{domxref("ParentNode.querySelectorAll()")}}
- [Extraits de code pour `querySelector`](/fr/Add-ons/Code_snippets/QuerySelector)
