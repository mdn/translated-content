---
title: "Document : La méthode getElementById()"
short-title: getElementById()
slug: Web/API/Document/getElementById
l10n:
  sourceCommit: be8f7f155a48e11b30c240f8731afb1845f85378
---

{{ ApiRef("DOM") }}

La méthode **`getElementById()`** de l'interface [`Document`](/fr/docs/Web/API/Document) renvoie un objet [`Element`](/fr/docs/Web/API/Element) représentant l'élément dont la propriété [`id`](/fr/docs/Web/API/Element/id) correspond à la chaîne de caractères spécifiée. Étant donné que les ID d'élément doivent être uniques, s'ils sont spécifiés, ils constituent un moyen utile d'accéder rapidement à un élément spécifique.

Si vous avez besoin d'accéder à un élément qui n'a pas d'ID, vous pouvez utiliser [`querySelector()`](/fr/docs/Web/API/Document/querySelector) pour trouver l'élément en utilisant un [sélecteur](/fr/docs/Glossary/CSS_Selector).

> [!NOTE]
> Les identifiants doivent être uniques à l'intérieur d'un document. Si deux éléments ou plus — d'un document — ont le même ID, cette méthode renvoie le premier élément trouvé.

## Syntaxe

```js-nolint
getElementById(id)
```

> [!NOTE]
> La capitalisation de `"Id"` dans le nom de cette méthode _doit_ être correcte pour que le code fonctionne&nbsp;; `getElementByID()` n'est _pas_ valide et ne fonctionnera pas, aussi naturel que cela puisse paraître.

### Paramètres

- `id`
  - : L'identifiant (_ID_) de l'élément à localiser. Il est une chaîne de caractères sensible à la casse qui est unique&nbsp;; un seul élément peut avoir un ID donné.

### Valeur de retour

Un objet [`Element`](/fr/docs/Web/API/Element) décrivant l'objet élément du DOM correspondant à l'identifiant (_ID_) spécifié ou `null` si aucun n'a été trouvé dans le document.

## Exemples

### HTML

```html
<html lang="fr">
  <head>
    <title>exemple de getElementById</title>
  </head>
  <body>
    <p id="para">Un peu de texte ici</p>
    <button onclick="changerCouleur('blue');">bleu</button>
    <button onclick="changerCouleur('red');">rouge</button>
  </body>
</html>
```

### JavaScript

```js
function changerCouleur(nouvelleCouleur) {
  const paragraphe = document.getElementById("para");
  paragraphe.style.color = nouvelleCouleur;
}
```

### Résultat

{{ EmbedLiveSample('Exemples', 250, 120) }}

## Notes d'utilisation

Contrairement à d'autres méthodes de recherche d'éléments, comme [`Document.querySelector()`](/fr/docs/Web/API/Document/querySelector) et [`Document.querySelectorAll()`](/fr/docs/Web/API/Document/querySelectorAll), `getElementById` est uniquement disponible comme méthode de l'objet global `document` et _n'est pas_ disponible sur tous les objets du DOM. Parce que les valeurs d'ID doivent être uniques dans l'ensemble du document, il n'y a pas besoin d'avoir une version «&nbsp;locale&nbsp;» de la fonction.

### Exemple

```html
<!doctype html>
<html lang="fr">
  <head>
    <meta charset="UTF-8" />
    <title>Document</title>
  </head>
  <body>
    <div id="parent-id">
      <p>bonjour tout le monde1</p>
      <p id="test1">bonjour tout le monde2</p>
      <p>bonjour tout le monde3</p>
      <p>bonjour tout le monde4</p>
    </div>
    <script>
      const parentDOM = document.getElementById("parent-id");
      const test1 = parentDOM.getElementById("test1");
      // erreur de lancement
      // TypeError inattendu : parentDOM.getElementById n'est pas une fonction
    </script>
  </body>
</html>
```

S'il n'y a pas d'élément avec l'identifiant (`id`) fourni, cette fonction retourne `null`. À noter que le paramètre `id` est sensible à la casse, ainsi `document.getElementById("Main")` retournera `null` au lieu de l'élément `<div id="main">` étant donné que «&nbsp;M&nbsp;» et «&nbsp;m&nbsp;» sont différents pour cette méthode.

Les éléments absents du document ne sont pas cherchés par `getElementById()`. Quand vous créez un élément et y assignez un ID, vous devez insérer l'élément dans l'arbre du document avec [`Node.insertBefore()`](/fr/docs/Web/API/Node/insertBefore) ou une méthode similaire avant de pouvoir y accéder avec `getElementById()`&nbsp;:

```js
const element = document.createElement("div");
element.id = "testqq";
const el = document.getElementById("testqq"); // el vaudra null !
```

Dans des documents non-HTML, les implémentations du DOM doivent avoir une information qui précise quels attributs sont de type ID. Un attribut portant le nom «&nbsp;id&nbsp;» n'est pas de type ID tant qu'il n'a pas été explicitement défini ainsi (dans la DTD du document). L'attribut `id` est défini comme étant de type ID dans les langages courants comme [XHTML](/fr/docs/Glossary/XHTML), XUL, et d'autres. Les implémentations ne sachant pas déterminer si les attributs sont de type ID ou non sont supposées renvoyer `null`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface [`Document`](/fr/docs/Web/API/Document) référence pour d'autres méthodes et propriétés que vous pouvez utiliser pour obtenir la référence vers des éléments du document.
- La méthode [`Document.querySelector()`](/fr/docs/Web/API/Document/querySelector) pour utiliser des sélecteurs avec des requêtes comme `'div.myclass'`.
- La méthode [`Document.evaluate()`](/fr/docs/Web/API/Document/evaluate) qui dispose d'une méthode utilitaire pour sélectionner par `xml:id` dans les documents [XHTML](/fr/docs/Glossary/XHTML).
