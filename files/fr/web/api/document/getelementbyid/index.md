---
title: document.getElementById
slug: Web/API/Document/getElementById
---

{{ ApiRef("DOM") }}

La méthode **`getElementById()`** de {{domxref("Document")}} renvoie un objet {{domxref("Element")}} représentant l'élément dont la propriété {{domxref("Element.id", "id")}} correspond à la chaîne de caractères spécifiée. Étant donné que les ID d'élément doivent être uniques, s'ils sont spécifiés, ils constituent un moyen utile d'accéder rapidement à un élément spécifique.

Si vous avez besoin d'accéder à un élément qui n'a pas d'ID, vous pouvez utiliser {{domxref("Document.querySelector","querySelector()")}} pour trouver l'élément en utilisant un {{Glossary("CSS selector","sélecteur")}}.

## Syntaxe

```js
var element = document.getElementById(id);
```

### Paramètres

- `id`
  - : L'ID (_identifiant)_ de l'élément à localiser. Il est une chaîne de caractères sensible à la casse qui est unique ; un seul élément peut avoir un ID donné.

### Valeur de retour

Un objet {{domxref("Element")}} décrivant l'objet élément du DOM correspondant à l'ID spécifié ou `null` si aucun n'a été trouvé dans le document.

## Exemple

### Contenu HTML

```html
<html>
  <head>
    <title>getElementById example</title>
  </head>
  <body>
    <p id="para">Some text here</p>
    <button onclick="changeColor('blue');">blue</button>
    <button onclick="changeColor('red');">red</button>
  </body>
</html>
```

### Contenu JavaScript

```js
function changeColor(newColor) {
  var elem = document.getElementById("para");
  elem.style.color = newColor;
}
```

### Résultat

{{ EmbedLiveSample('Exemple', 250, 100) }}

## Notes d'utilisation

L'écriture de la lettre capitale de «&nbsp;Id&nbsp;» dans le nom de cette méthode _doit_ être respectée pour que le code fonctionne ; `getElementByID()` n'est pas valide et ne fonctionnera _pas_, même si elle semble naturelle.

Contrairement à d'autres méthodes de recherche d'éléments, comme {{domxref("Document.querySelector()")}} et {{domxref("Document.querySelectorAll()")}}, `getElementById` est uniquement disponible comme méthode de l'objet global `document` et _n'est pas_ disponible sur tous les objets du DOM. Parce que les valeurs d'ID doivent être uniques dans l'ensemble du document, il n'y pas besoin d'avoir une version "locale" de la fonction.

## Autre exemple

```html
<!doctype html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <div id="parent-id">
      <p>hello word1</p>
      <p id="test1">hello word2</p>
      <p>hello word3</p>
      <p>hello word4</p>
    </div>
    <script>
      var parentDOM = document.getElementById("parent-id");
      var test1 = parentDOM.getElementById("test1");
      //erreur de lancement
      //TypeError inattendu : parentDOM.getElementById n'est pas une fonction
    </script>
  </body>
</html>
```

S'il n'y a pas d'élément avec l'identifiant (`id`) fourni, cette fonction retourne `null`. À noter que le paramètre `id` est sensible à la casse, ainsi `document.getElementById("Main")` retournera `null` au lieu de l'élément `<div id="main">` étant donné que «&nbsp;M&nbsp;» et «&nbsp;m&nbsp;» sont différents pour cette méthode.

**Les éléments absents du document** ne sont pas cherchés par `getElementById()`. Quand vous créez un élément et y assignez un ID, vous devez insérer l'élément dans l'arbre du document avec {{domxref("Node.insertBefore()")}} ou une méthode similaire avant de pouvoir y accéder avec `getElementById()` :

```js
var element = document.createElement("div");
element.id = "testqq";
var el = document.getElementById("testqq"); // el vaudra null !
```

**Les documents non-HTML.** Les implémentations du DOM doivent avoir une information qui précise quels attributs sont de type ID. Un attribut portant le nom «&nbsp;id&nbsp;» n'est pas de type ID tant qu'il n'a pas été explicitement défini ainsi (dans la DTD du document). L'attribut `id` est défini comme étant de type ID dans les langages courants comme [XHTML](/fr/XHTML) ou [XUL](/fr/XUL). Les implémentations ne sachant pas déterminer si les attributs sont de type ID ou non sont supposées renvoyer `null`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{domxref("Document")}} référence pour d'autres méthodes et propriétés que vous pouvez utiliser pour obtenir la référence vers des éléments du document.
- {{domxref("Document.querySelector()")}} pour utiliser des sélecteurs avec des requêtes comme `'div.myclass'`
- [xml:id](/fr/xml/xml:id) dispose d'une méthode utilitaire permettant à getElementById d'obtenir les valeur 'xml:id' dans les documents XML (comme ceux qui pourraient être renvoyés par des appels Ajax).
