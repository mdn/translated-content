---
title: Falsy (Valeurs de type fausses)
slug: Glossary/Falsy
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Les valeurs fausses (**<i lang="en">falsy</i>** en anglais) sont des valeurs évaluées comme fausses quand elles sont évaluées dans un contexte {{Glossary("Boolean", "booléen")}}.

{{Glossary("JavaScript")}} utilise le type {{Glossary("Type_Conversion", "contrainte")}} dans les contextes Booléens comme les {{Glossary("Conditional", "conditions")}} et les {{Glossary("Loop", "boucles")}}.

Le tableau suivant fournit la liste complète des valeurs _fausses_ (<i lang="en">falsy</i>) en JavaScript&nbsp;:

| Valeur                      | Type                 | Description                                                                                                                                           |
| --------------------------- | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{Glossary("null")}}        | Null                 | Le mot-clé [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null) — l'absence de toute valeur.                                                    |
| {{Glossary("undefined")}}   | Undefined            | [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined) — la valeur primitive.                                                      |
| `false`                     | Booléen              | Le mot-clé [`false`](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words).                                                               |
| {{Glossary("NaN")}}         | Nombre               | [`NaN`](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN) — n'est pas un nombre.                                                                  |
| `0`                         | Nombre               | Le zéro {{JSxRef("Number")}}, y compris aussi `0.0`, `0x0`, etc.                                                                                      |
| `-0`                        | Nombre               | Le zéro négatif {{JSxRef("Number")}}, y compris aussi `-0.0`, `-0x0`, etc.                                                                            |
| `0n`                        | BigInt               | Le zéro {{JSxRef("BigInt")}}, y compris aussi `0x0n`, etc. Notez qu'il n'existe pas de zéro négatif {{JSxRef("BigInt")}} — l'opposé de `0n` est `0n`. |
| `""`                        | Chaîne de caractères | Valeur de [chaîne](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) vide, y compris aussi `''` et ` `` `.                                     |
| {{DOMxRef("document.all")}} | Objet                | Le seul objet falsy en JavaScript est l'objet natif {{DOMxRef("document.all")}}.                                                                      |

Les valeurs `null` et `undefined` sont aussi {{Glossary("nullish", "nulle")}}.

## Exemples

Exemples de valeurs _fausses_ en Javascript (qui sont traduites par false (_faux_) et, par ce fait, court-circuitent le bloc **if**) :

```js
if (false) {
  // Le code ici ne sera pas exécuté
}

if (null) {
  // Le code ici ne sera pas exécuté
}

if (undefined) {
  // Le code ici ne sera pas exécuté
}

if (0) {
  // Le code ici ne sera pas exécuté
}

if (-0) {
  // Le code ici ne sera pas exécuté
}

if (0n) {
  // Le code ici ne sera pas exécuté
}

if (NaN) {
  // Le code ici ne sera pas exécuté
}

if ("") {
  // Le code ici ne sera pas exécuté
}
```

### L'opérateur logique ET, &&

Si le premier objet est un booléen négatif, il retourne cet objet&nbsp;:

```js
console.log(false && "dog");
// ↪ false

console.log(0 && "dog");
// ↪ 0
```

## Voir aussi

- Termes associés du glossaire&nbsp;:
  - {{Glossary("Truthy", "Valeur vraie")}}
  - {{Glossary("Type_coercion", "Coercition")}}
  - {{Glossary("Boolean", "Booléen")}}
- [Coercition booléenne](/fr/docs/Web/JavaScript/Reference/Global_Objects/Boolean#coercion_booléenne)
