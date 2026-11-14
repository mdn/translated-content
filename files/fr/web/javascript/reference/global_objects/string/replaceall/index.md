---
title: "String : méthode replaceAll()"
short-title: replaceAll()
slug: Web/JavaScript/Reference/Global_Objects/String/replaceAll
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`replaceAll()`** des valeurs {{JSxRef("String")}} retourne une nouvelle chaîne de caractères avec toutes les occurrences d'un `pattern` remplacées par un `replacement`. Le `pattern` peut être une chaîne de caractères ou une {{JSxRef("RegExp")}}, et le `replacement` peut être une chaîne de caractères ou une fonction. La chaîne de caractères originale reste inchangée.

{{InteractiveExample("Démonstration JavaScript&nbsp;: String.prototype.replaceAll()")}}

```js interactive-example
const paragraph = "Le nom de ce chien est juste Chien ! Oui, c'est le nom.";

console.log(paragraph.replaceAll("nom", "surnom"));
// Résultat attendu : "Le surnom de ce chien est juste Chien ! Oui, c'est le surnom."

console.log(paragraph.replaceAll(/\best\b/g, "était"));
// Résultat attendu : "Le nom de ce chien était juste Chien ! Oui, c'est le nom."
```

## Syntaxe

```js-nolint
replaceAll(pattern, replacement)
```

### Paramètres

- `pattern`
  - : Peut être une chaîne de caractères ou un objet avec une méthode [`Symbol.replace`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace), typiquement une expression rationnelle. Les autres valeurs sont converties en chaîne de caractères.

    Si `pattern` [est une expression rationnelle](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp#gestion_spéciale_pour_les_expressions_rationnelles), elle doit avoir l'indicateur global (`g`), sinon une {{JSxRef("TypeError")}} est levée.

- `replacement`
  - : Peut être une chaîne de caractères ou une fonction. Le remplacement a la même sémantique que [`String.prototype.replace()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace).

### Valeur de retour

Une nouvelle chaîne de caractères, avec toutes les occurrences d'un motif remplacées par un remplacement.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si le `pattern` [est une expression rationnelle](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp#gestion_spéciale_pour_les_expressions_rationnelles) sans l'indicateur global (`g`) de défini (sa propriété [`flags`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) ne contient pas `"g"`).

## Description

Cette méthode ne mute pas la valeur de la chaîne de caractères lorsqu'elle est appelée dessus. Cela retourne une nouvelle chaîne de caractères.

Contrairement à [`replace()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace), cette méthode remplace toutes les occurrences d'une chaîne de caractères, pas seulement la première. Bien qu'il soit également possible d'utiliser `replace()` avec une expression rationnelle globale construite dynamiquement à l'aide de [`RegExp()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/RegExp) pour remplacer toutes les occurrences d'une chaîne de caractères, cela peut avoir des conséquences imprévues si la chaîne de caractères contient des caractères spéciaux ayant une signification dans les expressions rationnelles (ce qui peut arriver si la chaîne de caractères de remplacement provient d'une saisie utilisateur·ice). Bien que vous puissiez pallier ce problème en utilisant {{JSxRef("RegExp.escape()")}} pour transformer la chaîne de caractères de l'expression rationnelle en un motif littéral, il est plus simple de transmettre directement la chaîne de caractères à `replaceAll()`, sans la convertir en expression rationnelle.

<!-- cSpell:ignore irat aabbcc -->

```js
function censureNomNonSecure(text, name) {
  return text.replace(new RegExp(name, "g"), "[CENSURÉ]");
}
function censureNomSemiSecure(text, name) {
  return text.replaceAll(name, "[CENSURÉ]");
}
function superCensureNomSecure(text, name) {
  // ne recherche que les correspondances aux limites des mots
  return text.replaceAll(
    new RegExp(`\\b${RegExp.escape(name)}\\b`, "g"),
    "[CENSURÉ]",
  );
}

let report =
  "Un pirate informatique du nom de pi.*te a utilisé des caractères spéciaux dans son nom pour s'introduire dans le système.";

console.log(censureNomNonSecure(report, "pi.*te")); // "Un [CENSURÉ] a utilisé des caractères spéciaux dans son nom pour s'introduire dans le système"
console.log(censureNomSemiSecure(report, "pi.*te")); // "Un pirate informatique du nom de [CENSURÉ] a utilisé des caractères spéciaux dans son nom pour s'introduire dans le système."

report = "Un pirate informatique appelé irat a infiltré le système.";

console.log(censureNomSemiSecure(report, "irat")); // "Un p[CENSURÉ]e informatique appelé [CENSURÉ] a infiltré le système."
console.log(superCensureNomSecure(report, "irat")); // "Un pirate informatique appelé [CENSURÉ] a infiltré le système."
```

Si `pattern` est un objet avec une méthode [`Symbol.replace`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) (y compris les objets `RegExp`), cette méthode est appelée avec la chaîne de caractères cible et `replacement` comme arguments. Sa valeur de retour devient la valeur de retour de `replaceAll()`. Dans ce cas, le comportement de `replaceAll()` est entièrement défini par la méthode `[Symbol.replace]()`, et donne donc le même résultat que `replace()` (sauf pour la validation supplémentaire que l'expression rationnelle est globale).

Si le `pattern` est une chaîne de caractères vide, le remplacement est inséré entre chaque unité de code UTF-16, similaire au comportement de [`split()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/split).

```js
"xxx".replaceAll("", "_"); // "_x_x_x_"
```

Pour plus d'infos sur comment les propriétés d'expressions rationnelles (surtout le [sticky](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)) interagissent avec `replaceAll()`, voir [`RegExp.prototype[Symbol.replace]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace).

## Exemples

### Utiliser la méthode `replaceAll()`

```js
"aabbcc".replaceAll("b", ".");
// 'aa..cc'
```

### Exceptions levées pour les expressions rationnelles qui ne sont pas globales

Quand on utilise une expression rationnelle pour chercher une valeur, celle-ci doit être globale. Le code suivant ne fonctionne pas&nbsp;:

```js example-bad
"aabbcc".replaceAll(/b/, ".");
// TypeError: replaceAll must be called with a global RegExp
```

L'exemple suivant, utilisant le marqueur `g`, fonctionne&nbsp;:

```js example-good
"aabbcc".replaceAll(/b/g, ".");
("aa..cc");
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) de `String.prototype.replaceAll` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/string-regexp)
- [La prothèse d'émulation (<i lang="en">polyfill</i> en anglais) es-shims de `String.prototype.replaceAll` <sup>(angl.)</sup>](https://www.npmjs.com/package/string.prototype.replaceall)
- Le guide [des expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_expressions)
- La méthode {{JSxRef("String.prototype.replace()")}}
- La méthode {{JSxRef("String.prototype.match()")}}
- La méthode {{JSxRef("RegExp.prototype.exec()")}}
- La méthode {{JSxRef("RegExp.prototype.test()")}}
