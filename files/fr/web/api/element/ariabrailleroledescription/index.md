---
title: "Element : propriété ariaBrailleRoleDescription"
short-title: ariaBrailleRoleDescription
slug: Web/API/Element/ariaBrailleRoleDescription
l10n:
  sourceCommit: f65f7f6e4fda2cb1bd0e7db17777e2cb20be7d27
---

{{APIRef("DOM")}}

La propriété **`ariaBrailleRoleDescription`** de l'interface {{DOMxRef("Element")}} reflète la valeur de l'attribut [`aria-brailleroledescription`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription), qui définit la description du rôle ARIA en braille de l'élément.

Cette propriété peut être utilisée pour fournir une version abrégée de la valeur de [`aria-roledescription`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-roledescription).
Elle ne doit être utilisée que si `aria-roledescription` est présent et dans le cas rare où il est trop verbeux pour le braille.
L'attribut [`aria-brailleroledescription`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-brailleroledescription) contient des informations supplémentaires sur le moment où la propriété doit être définie.

## Valeur

- `<string>`
  - : La valeur est une chaîne de caractères, un type de valeur non contraint, qui est destinée à être convertie en braille.

## Exemples

### Obtenir et définir `ariaBrailleRoleDescription`

Cet exemple montre comment obtenir et définir la propriété `ariaBrailleRoleDescription`.

#### HTML

Tout d'abord, nous définissons un élément `<article>` qui est utilisé comme diapositive dans un diaporama.
Nous définissons l'attribut `aria-roledescription` sur `"slide"`, et sa contraction en braille dans `aria-brailleroledescription` sur `"sld"`.

```html
<article
  id="article"
  aria-roledescription="slide"
  aria-brailleroledescription="sld"
  aria-labelledby="diapo1entete">
  <h1 id="diapo1entete">Bienvenue sur ma présentation</h1>
</article>
```

```html hidden
<pre id="journal"></pre>
```

```css hidden
#journal {
  height: 70px;
  overflow: scroll;
  padding: 0.5rem;
  border: 1px solid black;
}
```

#### JavaScript

```js hidden
const elementJournal = document.querySelector("#journal");
function journaliser(texte) {
  elementJournal.innerText = `${elementJournal.innerText}${texte}\n`;
  elementJournal.scrollTop = elementJournal.scrollHeight;
}
```

Pour obtenir la description du rôle de l'élément, nous utilisons la propriété `ariaBrailleRoleDescription`.
Le code ci-dessous obtient d'abord la valeur, puis la journalise.
Il définit ensuite la description du rôle en braille sur `"sd"` et journalise à nouveau la valeur (à titre d'illustration uniquement — dans le code de production, vous ne définissez pas cette valeur).

```js
const article = document.getElementById("article");
journaliser(article.ariaBrailleRoleDescription);
article.ariaBrailleRoleDescription = "sd";
journaliser(article.ariaBrailleRoleDescription);
```

#### Résultat

{{EmbedLiveSample("Obtenir et définir `ariaBrailleRoleDescription`")}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}
