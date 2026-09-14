---
title: "Document : méthode getElementById()"
short-title: getElementById()
slug: Web/API/Document/getElementById
l10n:
  sourceCommit: 06bb5f22d50ff3579a12aebf7e8c9f02cfa2468b
---

{{APIRef("DOM")}}

La méthode **`getElementById()`** de l'interface {{DOMxRef("Document")}} retourne un objet {{DOMxRef("Element")}} représentant l'élément dont la propriété {{DOMxRef("Element.id", "id")}} correspond à la chaîne de caractères définie. Étant donné que les ID d'élément doivent être uniques, s'ils sont définis, ils constituent un moyen utile d'accéder rapidement à un élément spécifique.

Si vous avez besoin d'accéder à un élément qui n'a pas d'ID, vous pouvez utiliser [`querySelector()`](/fr/docs/Web/API/Document/querySelector) pour trouver l'élément en utilisant un [sélecteur](/fr/docs/Glossary/CSS_Selector).

> [!NOTE]
> Les identifiants doivent être uniques à l'intérieur d'un document. Si deux éléments ou plus d'un document ont le même ID, cette méthode retourne le premier élément trouvé.

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

Un objet {{DOMxRef("Element")}} décrivant l'objet élément du DOM correspondant à l'identifiant (_ID_) défini ou `null` si aucun n'a été trouvé dans le document.

## Exemples

### HTML

```html
<p id="para">Du texte par ici</p>
<button>blue</button>
<button>red</button>
```

### JavaScript

```js
function changerCouleur(nouvelleCouleur) {
  const elem = document.getElementById("para");
  elem.style.color = nouvelleCouleur;
}

document.querySelectorAll("button").forEach((bouton) => {
  bouton.addEventListener("click", (event) => {
    changerCouleur(event.target.textContent.toLowerCase());
  });
});
```

### Résultat

{{EmbedLiveSample("Exemples", 250, 120)}}

## Notes d'utilisation

Contrairement à d'autres méthodes de recherche d'élément comme {{DOMxRef("Document.querySelector()")}} et {{DOMxRef("Document.querySelectorAll()")}}, `getElementById()` n'est disponible qu'en tant que méthode de l'objet global `document`, et n'est _pas_ disponible en tant que méthode sur tous les objets élément du DOM. Comme les valeurs d'ID doivent être uniques dans l'ensemble du document, il n'est pas nécessaire d'avoir des versions «&nbsp;locales&nbsp;» de la fonction.

### Exemple

```html
<div id="parent-id">
  <p>bonjour tout le monde1</p>
  <p id="test1">bonjour tout le monde2</p>
  <p>bonjour tout le monde3</p>
  <p>bonjour tout le monde4</p>
</div>
```

```js
const parentDOM = document.getElementById("parent-id");
const test1 = parentDOM.getElementById("test1");
```

S'il n'y a pas d'élément avec l'identifiant (`id`) fourni, cette fonction retourne `null`. À noter que le paramètre `id` est sensible à la casse, ainsi `document.getElementById("Main")` retournera `null` au lieu de l'élément `<div id="main">` étant donné que «&nbsp;M&nbsp;» et «&nbsp;m&nbsp;» sont différents pour cette méthode.

Les éléments absents du document ne sont pas cherchés par `getElementById()`. Quand vous créez un élément et y assignez un ID, vous devez insérer l'élément dans l'arbre du document avec {{DOMxRef("Node.insertBefore()")}} ou une méthode similaire avant de pouvoir y accéder avec `getElementById()`&nbsp;:

```js
const element = document.createElement("div");
element.id = "test";
const el = document.getElementById("test"); // el vaudra null !
```

Dans des documents non-HTML, les implémentations du DOM doivent avoir une information qui précise quels attributs sont de type ID. Un attribut portant le nom «&nbsp;id&nbsp;» n'est pas de type ID tant qu'il n'a pas été explicitement défini ainsi dans la DTD du document. L'attribut `id` est défini comme étant de type ID dans les langages courants comme {{Glossary("XHTML")}}, XUL, et d'autres. Les implémentations ne sachant pas déterminer si les attributs sont de type ID ou non sont supposées retourner `null`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'interface {{DOMxRef("Document")}} référençant d'autres méthodes et propriétés que vous pouvez utiliser pour obtenir des références vers des éléments dans le document.
- La méthode {{DOMxRef("Document.querySelector()")}} pour les sélecteurs via des requêtes comme `'div.myclass'`
- La méthode {{DOMxRef("Document.evaluate()")}} — dispose d'une méthode utilitaire pour sélectionner par `xml:id` dans les documents {{Glossary("XML")}}
