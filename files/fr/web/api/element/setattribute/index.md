---
title: "Element : méthode setAttribute()"
slug: Web/API/Element/setAttribute
l10n:
  sourceCommit: 7eed0e1e4ab478d78dc7ca23c19ae77406776e4e
---

{{APIRef("DOM")}}

La méthode **`setAttribute()`**, rattachée à l'interface [`Element`](/fr/docs/Web/API/Element), ajoute un nouvel attribut ou change la valeur d'un attribut existant en utilisant la valeur fournie. Si l'attribut existe déjà, la valeur est mise à jour&nbsp;; sinon, un nouvel attribut est ajouté avec le nom et la valeur spécifiés.

Pour obtenir la valeur actuelle d'un attribut, on utilisera la méthode [`getAttribute()`](/fr/docs/Web/API/Element/getAttribute)&nbsp;; pour supprimer un attribut, on emploiera [`removeAttribute()`](/fr/docs/Web/API/Element/removeAttribute).

Si besoin de travailler sur le nœud [`Attr`](/fr/docs/Web/API/Attr) avant de l'ajouter (par exemple en le clonant depuis un autre élément), on pourra utiliser la méthode [`setAttributeNode()`](/fr/docs/Web/API/Element/setAttributeNode) à la place.

## Syntaxe

```js-nolint
setAttribute(name, value)
```

### Paramètres

- `name`
  - : Une chaîne de caractères spécifiant le nom de l'attribut pour lequel la valeur doit être définie. Cette valeur est automatiquement convertie en minuscules quand `setAttribute()` est appelée sur un élément HTML dans un document HTML.
- `value`
  - : Une chaîne de caractères contenant la valeur à affecter à l'attribut. Toute valeur spécifiée qui n'est pas une chaîne de caractères, est convertie automatiquement en chaîne de caractères.

Les attributs booléens sont considérés comme `true` s'ils sont présents sur l'élément, quelle que soit leur valeur réelle. En règle générale, il faut fournir la chaîne vide (`""`) dans `value` ou uniquement le nom de l'attribut (sans espace avant ou après) pour indiquer `false`. Voir [l'exemple](#exemples) ci-dessous pour une démonstration pratique.

Puisque la valeur spécifiée est convertie en chaîne, spécifier `null` fournira un résultat inattendu. Au lieu de supprimer l'attribut ou de définir sa valeur comme [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null) , cette méthode définit à la place la valeur de l'attribut avec la chaîne de caractères `"null"`. Pour supprimer un attribut, on appellera [`removeAttribute()`](/fr/docs/Web/API/Element/removeAttribute).

### Valeur retournée

Aucune ([`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).

### Exceptions

- `InvalidCharacterError` [`DOMException`](/fr/docs/Web/API/DOMException)
  - : Levée si la valeur [`name`](#name) n'est pas un [nom XML](https://www.w3.org/TR/REC-xml/#dt-name) valide (par exemple si elle commence par un chiffre, un tiret, un point ou si elle contient des caractères autres que des caractères alphanumériques, des tirets bas, des tirets ou des points).

## Exemples

Dans l'exemple suivant, `setAttribute()` est utilisée pour définir des attributs sur un élément [`<button>`](/fr/docs/Web/HTML/Reference/Elements/button).

### HTML

```html
<button>Hello World</button>
```

```css hidden
button {
  height: 30px;
  width: 100px;
  margin: 1em;
}
```

### JavaScript

```js
const button = document.querySelector("button");

button.setAttribute("name", "helloButton");
button.setAttribute("disabled", "");
```

{{EmbedLiveSample('', '300', '50')}}

Cet exemple permet d'illustrer deux choses&nbsp;:

- Le premier appel à `setAttribute()` change la valeur de l'attribut `name` en "helloButton". Vous pouvez le voir en utilisant l'inspecteur de votre navigateur ([Chrome](https://developer.chrome.com/docs/devtools/dom/properties/), [Edge](https://docs.microsoft.com/microsoft-edge/devtools-guide-chromium/css/inspect), [Firefox](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/open_the_inspector/index.html), [Safari](https://support.apple.com/en-us/guide/safari-developer/welcome/mac)).
- Pour définir la valeur d'un attribut booléen, tel que `disabled`, on peut fournir n'importe quelle valeur. Une bonne pratique consiste à utiliser la chaîne vide ou le nom de l'attribut. Quelle que soit la valeur fournie, dès qu'elle est présente, elle indique que le booléen sera actif (`true`). L'absence de l'attribut signifie que sa valeur est `false`. En utilisant la chaîne vide (`""`) comme valeur, on passe `disabled` à l'état `true` dans le DOM, ce qui entraîne la désactivation du bouton à l'écran.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [`Element.hasAttribute()`](/fr/docs/Web/API/Element/hasAttribute)
- [`Element.getAttribute()`](/fr/docs/Web/API/Element/getAttribute)
- [`Element.removeAttribute()`](/fr/docs/Web/API/Element/removeAttribute)
- [`Element.toggleAttribute()`](/fr/docs/Web/API/Element/toggleAttribute)
- [`Element.setAttributeNode()`](/fr/docs/Web/API/Element/setAttributeNode)
- [`Element.setAttributeNS()`](/fr/docs/Web/API/Element/setAttributeNS)
