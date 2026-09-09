---
title: "Element : méthode pseudo()"
short-title: pseudo()
slug: Web/API/Element/pseudo
l10n:
  sourceCommit: b0db98a5c5a6cc7dbc519c272ab0572f6481afc6
---

{{APIRef("DOM")}}{{SeeCompatTable}}

La méthode **`pseudo()`** de l'interface {{DOMxRef("Element")}} retourne un objet {{DOMxRef("CSSPseudoElement")}} représentant le [pseudo-élément CSS](/fr/docs/Web/CSS/Reference/Selectors/Pseudo-elements) du type défini associé à l'élément.

Si son paramètre `type` contient un type de pseudo-élément valide, `pseudo()` retourne toujours une instance de `CSSPseudoElement`, même si ce pseudo-élément n'a pas été généré sur l'élément appelant.

## Syntaxe

```js-nolint
pseudo(type)
```

### Paramètres

- `type`
  - : Une chaîne de caractères représentant le type de pseudo-élément dont on souhaite obtenir une représentation. Les valeurs valides sont&nbsp;:
    - {{CSSxRef("::after")}}
    - {{CSSxRef("::before")}}
    - {{CSSxRef("::marker")}}

### Valeur de retour

Un objet {{DOMxRef("CSSPseudoElement")}}, ou `null` si `type` n'est pas égal à un type de pseudo-élément valide.

## Exemples

### Utilisation simple

Dans cet exemple, nous démontrons l'utilisation de base de la méthode `pseudo()`.

#### HTML

Nous incluons un élément HTML {{HTMLElement("p")}} contenant du texte, et un élément HTML {{HTMLElement("output")}} pour consigner la sortie de JavaScript.

```html live-sample___basic
<p>Le club le plus en vogue de New York est…</p>
<output></output>
```

#### CSS

Nous donnons au pseudo-élément {{CSSxRef("::after")}} de l'élément `<p>` un {{CSSxRef("content")}} et appliquons quelques styles de base aux deux.

```css hidden live-sample___basic
body {
  width: 80%;
  margin: 0 auto;
}
```

```css live-sample___basic
p {
  background-color: violet;
  padding: 20px;
}

p::after {
  content: "Crease";
  background-color: cadetblue;
  padding: 20px;
}
```

#### JavaScript

Dans notre script, nous récupérons des références à nos éléments `<p>` et `<output>`, et récupérons un `CSSPseudoElement` représentant le pseudo-élément `::after` de l'élément `<p>` avec la méthode `pseudo()`. Nous consignons ensuite quelques détails du pseudo-élément dans notre élément `<output>`. Nous incluons également une gestion rudimentaire des erreurs avec une structure [`try...catch`](/fr/docs/Web/JavaScript/Reference/Statements/try...catch), pour afficher un message d'erreur dans les navigateurs ne supportant pas cette fonctionnalité.

```js live-sample___basic
const pElem = document.querySelector("p");
const output = document.querySelector("output");

try {
  const pseudoElem = pElem.pseudo("::after");
  output.textContent = `Pseudo-élément ${pseudoElem.type}. Parent : <${pseudoElem.parent.tagName.toLowerCase()}>`;
} catch (e) {
  output.textContent = `Votre navigateur ne prend pas en charge CSSPseudoElement et/ou la méthode pseudo() : ${e}`;
}
```

#### Résultat

{{EmbedLiveSample("basic", "100%", 200)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La méthode {{DOMxRef("CSSPseudoElement.pseudo()")}}
