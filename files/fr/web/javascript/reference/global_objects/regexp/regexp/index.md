---
title: Constructeur RegExp()
short-title: RegExp()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/RegExp
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

Le constructeur **`RegExp()`** crée des objets {{JSxRef("RegExp")}}.

Pour une introduction aux expressions rationnelles, lisez le [chapitre sur les expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_expressions) dans le [guide JavaScript](/fr/docs/Web/JavaScript/Guide).

{{InteractiveExample("Démonstration JavaScript&nbsp;: constructeur RegExp()")}}

```js interactive-example
const regex1 = /\w+/;
const regex2 = new RegExp("\\w+");

console.log(regex1);
// Résultat attendu : /\w+/

console.log(regex2);
// Résultat attendu : /\w+/

console.log(regex1 === regex2);
// Résultat attendu : false
```

## Syntaxe

```js-nolint
new RegExp(pattern)
new RegExp(pattern, flags)
RegExp(pattern)
RegExp(pattern, flags)
```

> [!NOTE]
> `RegExp()` peut être appelé avec ou sans {{JSxRef("new")}}, mais parfois avec des effets différents. Voir la section [Valeur de retour](#valeur_de_retour).

### Paramètres

- `pattern`
  - : Le texte de l'expression rationnelle. Il peut également s'agir d'un autre objet `RegExp`.

- `flags` {{Optional_Inline}}
  - : Si définit, `flags` est une chaîne de caractères qui contient les indicateurs à ajouter. Par ailleurs, si un objet `RegExp` est fourni pour `pattern`, la chaîne de caractères `flags` remplace tous les indicateurs de cet objet (et `lastIndex` est réinitialisé à `0`).

    `flags` peut contenir n'importe quelle combinaison des caractères suivants&nbsp;:
    - [`d` (indices)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices)
      - : Génère des indices pour les correspondances de sous-chaînes de caractères.
    - [`g` (global)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global)
      - : Trouve toutes les correspondances plutôt que de s'arrêter après la première correspondance.
    - [`i` (ignore case)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/ignoreCase)
      - : Lors de la correspondance, les différences de casse sont ignorées.
    - [`m` (multiline)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/multiline)
      - : Traite les assertions de début et de fin (`^` et `$`) comme fonctionnant sur plusieurs lignes. En d'autres termes, correspond au début ou à la fin de _chaque_ ligne (délimitée par `\n` ou `\r`), et pas seulement au tout début ou à la toute fin de l'ensemble de la chaîne de caractères d'entrée.
    - [`s` (dotAll)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/dotAll)
      - : Permet à `.` de correspondre aux sauts de ligne.
    - [`u` (unicode)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicode)
      - : Traite `pattern` comme une séquence de points de code Unicode.
    - [`v` (unicodeSets)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/unicodeSets)
      - : Une amélioration de l'indicateur `u` qui permet la notation d'ensemble dans les classes de caractères ainsi que les propriétés des chaînes de caractères.
    - [`y` (sticky)](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)
      - : Correspond uniquement à partir de l'index indiqué par la propriété `lastIndex` de cette expression rationnelle dans la chaîne de caractères cible. N'essaie pas de correspondre à partir d'index ultérieurs.

### Valeur de retour

`RegExp(pattern)` retourne `pattern` directement si toutes les conditions suivantes sont remplies&nbsp;:

- `RegExp()` est appelé sans [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new)&nbsp;;
- [`pattern` est une expression rationnelle](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp#gestion_spéciale_pour_les_expressions_rationnelles)&nbsp;;
- `pattern.constructor === RegExp` (généralement signifiant que ce n'est pas une sous-classe)&nbsp;;
- `flags` est `undefined`.

Dans tous les autres cas, appeler `RegExp()` avec ou sans `new` crée un nouvel objet `RegExp`. Si `pattern` est une expression rationnelle, la [source](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/source) du nouvel objet est `pattern.source`&nbsp;; sinon, sa source est `pattern` [converti en chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#conversion_en_chaîne_de_caractères). Si le paramètre `flags` n'est pas `undefined`, les [`flags`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/flags) du nouvel objet prennent la valeur du paramètre&nbsp;; sinon, ses `flags` sont `pattern.flags` (si `pattern` est une expression rationnelle).

### Exceptions

- {{JSxRef("SyntaxError")}}
  - : Levée dans l'un des cas suivants&nbsp;:
    - `pattern` ne peut pas être interprété comme une expression rationnelle valide.
    - `flags` contient des caractères répétés ou des caractères en dehors de ceux autorisés.

## Exemples

### Notation littérale et constructeur

Il existe deux façons de créer un objet `RegExp`&nbsp;: en utilisant _une notation littérale_ ou _un constructeur_.

- La _notation littérale_ prend un motif entre deux barres obliques, suivi d'indicateurs optionnels, après la deuxième barre oblique.
- La _fonction constructeur_ prend soit une chaîne de caractères, soit un objet `RegExp` comme premier paramètre et une chaîne de caractères d'indicateurs optionnels comme second paramètre.

Les trois expressions suivantes permettent de créer la même expression rationnelle&nbsp;:

```js
/ab+c/i;
new RegExp(/ab+c/, "i"); // Notation littérale
new RegExp("ab+c", "i"); // Constructeur
```

Avant de pouvoir utiliser des expressions rationnelles, elles doivent être compilées. Ce processus leur permet d'effectuer des correspondances plus efficacement. Il existe deux façons de compiler et d'obtenir un objet `RegExp`.

Les résultats de la notation littérale entraînent la compilation de l'expression rationnelle lorsque l'expression est évaluée. En revanche, le constructeur de l'objet `RegExp`, `new RegExp('ab+c')`, entraîne une compilation à l'exécution de l'expression rationnelle.

Utilisez une chaîne de caractères comme premier argument du constructeur `RegExp()` lorsque vous souhaitez [construire l'expression rationnelle à partir d'une entrée dynamique](#construire_une_expression_rationnelle_à_partir_dentrées_dynamiques).

### Construire une expression rationnelle à partir d'entrées dynamiques

```js
const petitDejeuners = [
  "bacon",
  "œufs",
  "flocons d'avoine",
  "toast",
  "céréales",
];
const commande = "Je voudrais du bacon et des œufs, s'il vous plaît";

commande.match(new RegExp(`\\b(${petitDejeuners.join("|")})\\b`, "g"));
// Retourne ['bacon', 'œufs']
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation pour de nombreuses fonctionnalités modernes de `RegExp` (`dotAll`, indicateur `sticky`, groupes de capture nommés, etc.) dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#ecmascript-string-and-regexp)
- Le guide [des expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_expressions)
- La méthode {{JSxRef("String.prototype.match()")}}
- La méthode {{JSxRef("String.prototype.replace()")}}
