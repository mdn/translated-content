---
title: Element.setAttribute()
slug: Web/API/Element/setAttribute
translation_of: Web/API/Element/setAttribute
---
{{APIRef("DOM")}}

Ajoute un nouvel attribut ou change la valeur d'un attribut existant pour l'élément spécifié. Si l'attribut existe déjà, la valeur est mise à jour ; sinon, un nouvel attribut est ajouté avec le nom et la valeur spécifiés.

Pour obtenir la valeur actuelle d'un attribut, utilisez {{domxref("Element.getAttribute", "getAttribute()")}} ; pour supprimer un attribut, appelez {{domxref("Element.removeAttribute", "removeAttribute()")}}.

## Syntaxe

    Element.setAttribute(name, value);

### Paramètres

- `name`
  - : Une {{domxref("DOMString")}} (_chaîne de caractères_) spécifiant le nom de l'attribut pour lequel la valeur doit être définie. L'attribut name est automatiquement converti en minuscules quand `setAttribute()` est appelé sur un élément HTML dans document HTML.
- `value`
  - : une {{domxref("DOMString")}} contenant la valeur à affecter à l'attribut. Toute valeur spécifiée qui n'est pas une chaîne de caractères, est convertie automatiquement en chaîne.

Les attributs booléens sont considérés être `true` (_vrai_) s'ils sont présents sur l'élément, quelle que soit leur valeur réelle ; en règle générale, vous devez spécifier la chaîne vide (`""`) dans `value` (certains utilisent le nom de l'attribut, mais ce fonctionnement n'est pas standard). Voir l' [exemple](#exemple) ce-dessous pour une démonstration pratique.

Puisque la valeur spécifiée est convertie en chaîne, spécifier `null` ne fait pas nécessairement ce que vous attendez. Au lieu de supprimer l'attribut ou de définir sa valeur comme {{jsxref("null")}} , il définit à la place la valeur de l'attribut avec la chaîne "null". Si vous souhaitez supprimer un attribut, appelez {{domxref("Element.removeAttribute","removeAttribute()")}}.

### Valeur retournée

{{jsxref("undefined")}}.

### Exceptions

- `InvalidCharacterError`
  - : Le nom d'attribut spécifié contient un ou plusieurs caractères qui ne sont pas valides dans les noms d'attribut.

## Exemple

Dans l'exemple suivant, `setAttribute()` est utilisé pour définir des attributs sur un {{HTMLElement("button")}} (_bouton_).

### HTML

```html
<button>Hello World</button>
```

### JavaScript

```js
var b = document.querySelector("button");

b.setAttribute("name", "helloButton");
b.setAttribute("disabled", "");
```

Ceci démontre 2 choses :

- le premier appel de `setAttribute()` ci-dessus montre la modification de la valeur de l'attribut `name` en "helloButton". Vous pouvez le voir en utilisant l'inspecteur de page de votre navigateur ([Chrome](https://developers.google.com/web/tools/chrome-devtools/inspect-styles), [Edge](https://docs.microsoft.com/en-us/microsoft-edge/f12-devtools-guide/dom-explorer), [Firefox](/en-US/docs/Tools/Page_Inspector), [Safari](https://developer.apple.com/library/content/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Introduction/Introduction.html)).
- Pour définir la valeur d'un attribut booléen, tel que `disabled`, vous pouvez spécifier n'importe quelle valeur. Une chaîne vide ou le nom de l'attribut sont des valeurs recommandées. Tout ce qui compte est que si l'attribut est présent, quelle que soit sa valeur réelle, sa valeur est considérée comme `true` (_vraie_). L'absence de l'attribut signifie que sa valeur est `false` (_fausse_). En définissant la valeur de l'attribut `disabled` sur la chaîne vide (""), nous définissons `disabled` sur `true`, ce qui entraîne la désactivation du bouton.

{{ EmbedLiveSample('Exemple', '300', '50') }}

{{DOMAttributeMethods}}

## Spécifications

- [DOM Level 2 Core&nbsp;: setAttribute](http://www.w3.org/TR/DOM-Level-2-Core/core.html#ID-F68F082) — [traduction en français](http://www.yoyodesign.org/doc/w3c/dom2/core/core.html#ID-F68F082) (non normative)
- [HTML5 : API dans les documents HTML](http://www.whatwg.org/specs/web-apps/current-work/#apis-in-html-documents)

## Compatibilité des navigateurs

### Gecko notes

L'utilisation de `setAttribute()` pour modifier certains attributs, en particulier la valeur dans XUL, fonctionne de façon incohérente, car l'attribut spécifie la valeur par défaut. Pour accéder ou modifier la valeur courante, vous devez utiliser les propriétés. Par exemple, utilisez `Element.value` à la place de `Element.setAttribute()`.
