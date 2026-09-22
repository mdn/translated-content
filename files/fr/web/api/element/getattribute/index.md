---
title: "Element : méthode getAttribute()"
short-title: getAttribute()
slug: Web/API/Element/getAttribute
l10n:
  sourceCommit: f22f67069495dc37e550e354913d4ca984f5a4b0
---

{{APIRef("DOM")}}

La méthode **`getAttribute()`** de l'interface {{DOMxRef("Element")}} retourne la valeur sous forme de chaîne de caractères de l'attribut défini de l'élément défini. Elle retourne `null` si l'élément n'a pas d'attribut avec le nom donné.

Si vous avez besoin d'inspecter les propriétés du nœud {{DOMxRef("Attr")}}, vous pouvez utiliser la méthode {{DOMxRef("Element.getAttributeNode()", "getAttributeNode()")}} à la place.

## Syntaxe

```js-nolint
getAttribute(attrName)
```

### Paramètres

- `attrName`
  - : Une chaîne de caractères définissant le nom de l'attribut. Lorsqu'elle est appelée sur un élément HTML dans un DOM identifié comme un document HTML, le nom est normalisé en minuscules.

### Valeur de retour

Une chaîne de caractères contenant la valeur de l'attribut, ou `null` si l'élément n'a pas d'attribut avec le nom donné.

## Notes d'utilisation

Lorsqu'elle est appelée sur un élément HTML dans un DOM identifié comme un document HTML,
la méthode `getAttribute()` met son argument en minuscules avant de continuer.

### Références de caractères décodées dans les valeurs des attributs

Les [références de caractères](/fr/docs/Glossary/Character_reference) HTML dans le code source d'un attribut (par exemple, `&lt;`, `&amp;` ou `&#x3C;`) sont décodées par le parseur HTML lorsque le document est analysé, donc `getAttribute()` retourne la valeur décodée, et non la source originale.

Étant donné&nbsp;:

```html
<div id="exemple" data-payload="&lt;b&gt;salut&lt;/b&gt;"></div>
```

l'appel `document.getElementById("exemple").getAttribute("data-payload")` retourne la chaîne de caractères `"<b>salut</b>"`.

Traiter la valeur de retour de `getAttribute()` comme du HTML déjà échappé est dangereux. Si vous lisez un attribut contenant des données qui ne sont pas fiables, puis que vous l'assignez à {{DOMxRef("Element.innerHTML", "innerHTML")}} ou l'insérez dans le document en tant que balisage, toutes les références HTML utilisées pour échapper les caractères spéciaux sont déjà décodées, et le résultat peut être exploité pour des [attaques par script inter-site (XSS)](/fr/docs/Web/Security/Attacks/XSS).

Utilisez {{DOMxRef("Node.textContent", "textContent")}} (ou une autre API sûre pour le texte) pour les données qui ne sont pas fiables au lieu de `innerHTML`.

### Retrouver des valeurs uniques

Pour des raisons de sécurité, les nombres uniques [CSP](/fr/docs/Web/HTTP/Guides/CSP) provenant de sources qui ne sont pas des scripts (comme les sélecteurs CSS) et les appels à `.getAttribute("nonce")`, sont masqués.

```js example-bad
const nombreUnique = script.getAttribute("nonce");
// retourne une chaîne de caractères vide
```

Au lieu de récupérer le nombre unique à partir de l'attribut de contenu, utilisez la propriété {{DOMxRef("HTMLElement/nonce", "nonce")}}&nbsp;:

```js
const nombreUnique = script.nonce;
```

## Exemples

```html
<!-- exemple de div dans un document HTML -->
<div id="div1">Salut champion !</div>
```

```js
const div1 = document.getElementById("div1");
// <div id="div1">Salut champion !</div>

const attrExemple = div1.getAttribute("id");
// "div1"

const langue = div1.getAttribute("lang");
// null
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("Element.hasAttribute()")}}
- La méthode {{DOMxRef("Element.setAttribute()")}}
- La méthode {{DOMxRef("Element.removeAttribute()")}}
- La méthode {{DOMxRef("Element.toggleAttribute()")}}
