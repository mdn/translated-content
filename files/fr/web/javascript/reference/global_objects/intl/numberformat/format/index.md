---
title: "Intl.NumberFormat : méthode format()"
short-title: format()
slug: Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/format
l10n:
  sourceCommit: 544b843570cb08d1474cfc5ec03ffb9f4edc0166
---

La méthode **`format()`** des instances de {{JSxRef("Intl.NumberFormat")}} formate un nombre en fonction des [options de locale et de format](/fr/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat/NumberFormat#paramètres) de cet objet `Intl.NumberFormat`.

{{InteractiveExample("Démonstration JavaScript&nbsp;: Intl.NumberFormat.prototype.format()", "taller")}}

```js interactive-example
const amount = 654321.987;

const options1 = { style: "currency", currency: "RUB" };
const numberFormat1 = new Intl.NumberFormat("ru-RU", options1);

console.log(numberFormat1.format(amount));
// Résultat attendu : "654 321,99 ₽"

const options2 = { style: "currency", currency: "USD" };
const numberFormat2 = new Intl.NumberFormat("en-US", options2);

console.log(numberFormat2.format(amount));
// Résultat attendu : "$654,321.99"
```

## Syntaxe

```js-nolint
format(number)
```

### Paramètres

- `number`
  - : Un nombre ({{JSxRef("Number")}}), grand entier ({{JSxRef("BigInt")}}), ou chaîne de caractères, à formater. Les chaînes de caractères sont analysées de la même manière que dans la [conversion de nombre](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number#contrainte_de_nombre), sauf que `format()` utilisera la valeur exacte que représente la chaîne de caractères, évitant ainsi toute perte de précision lors de la conversion implicite en nombre.

> [!NOTE]
> Les anciennes versions de la spécification analysaient les chaînes de caractères comme des {{JSxRef("Number")}}.
> Consultez le tableau de compatibilité pour votre navigateur.

### Valeur de retour

Une chaîne de caractères représentant le `number` donné, formaté selon la locale et les options de format de cet objet {{JSxRef("Intl.NumberFormat")}}.

> [!NOTE]
> La plupart du temps, le formatage retourné par `format()` est cohérent. Cependant, la sortie peut varier entre les implémentations, même au sein de la même locale — les variations de sortie sont prévues par la spécification et autorisées. Elle peut également ne pas être ce à quoi vous vous attendez. Par exemple, la chaîne de caractères peut utiliser des espaces insécables ou être entourée de caractères de contrôle bidirectionnels. Vous ne devez pas comparer les résultats de `format()` à des constantes codées en dur.

## Description

Les valeurs {{JSxRef("Number")}} en JavaScript souffrent d'une perte de précision si elles sont trop grandes ou trop petites, rendant la représentation textuelle inexacte.
Si vous effectuez des calculs avec des entiers supérieurs à {{JSxRef("Number.MAX_SAFE_INTEGER")}}, vous devriez utiliser un {{JSxRef("BigInt")}} à la place, ce qui sera formaté correctement&nbsp;:

```js
new Intl.NumberFormat("en-US").format(1234567891234567891); // 1,234,567,891,234,568,000
new Intl.NumberFormat("en-US").format(1234567891234567891n); // 1,234,567,891,234,567,891
```

Vous pouvez également passer de très grandes chaînes de caractères pour les formater en tant que chaîne décimale à précision arbitraire (si vous effectuez des calculs sur les données, vous devrez toujours travailler avec `BigInt`)&nbsp;:

```js
new Intl.NumberFormat("en-US").format("1234567891234567891"); // 1,234,567,891,234,567,891
```

## Exemples

### Utiliser la méthode `format()`

Utilisez la fonction d'accesseur `format` pour formater une seule valeur monétaire.
Le code ci-dessous montre comment formater la devise rouble pour une locale russe&nbsp;:

```js
const options = { style: "currency", currency: "RUB" };
const numberFormat = new Intl.NumberFormat("ru-RU", options);
console.log(numberFormat.format(654321.987));
// "654 321,99 ₽"
```

### Utiliser la méthode `format()` avec `map()`

Utilisez la fonction d'accesseur `format` pour formater tous les nombres d'un tableau.
Notez que la fonction est liée à l'objet {{JSxRef("Intl.NumberFormat")}} dont elle provient, elle peut donc être passée directement à {{JSxRef("Array.prototype.map")}}.
Ceci est considéré comme un artefact historique, faisant partie d'une convention qui n'est plus suivie pour les nouvelles fonctionnalités, mais est conservée pour maintenir la compatibilité avec les programmes existants.

```js
const a = [123456.789, 987654.321, 456789.123];
const numberFormat = new Intl.NumberFormat("es-ES");
const formatted = a.map((n) => numberFormat.format(n));
console.log(formatted.join("; "));
// "123.456,789; 987.654,321; 456.789,123"
```

### Utiliser la méthode `format()` avec une chaîne de caractères

En utilisant une chaîne de caractères, nous pouvons définir des nombres supérieurs à {{JSxRef("Number.MAX_SAFE_INTEGER")}} sans perdre de précision.

```js
const formatNombre = new Intl.NumberFormat("en-US");

// Ici, la valeur est convertie en Number
console.log(formatNombre.format(987654321987654321));
// 987,654,321,987,654,300

// Ici, nous utilisons une chaîne de caractères et ne perdons pas de précision
console.log(formatNombre.format("987654321987654321"));
// 987,654,321,987,654,321
```

Nous pouvons également utiliser la syntaxe générale de l'exposant «&nbsp;E&nbsp;» pour les chaînes de caractères décimales&nbsp;: `#.#E#`.
Le code ci-dessous crée un {{JSxRef("BigInt")}}, le convertit en chaîne de caractères avec le suffixe `E-6`, puis le formate.

```js
const formatNombre = new Intl.NumberFormat("en-US");
const grandNombre = 1000000000000000110000n;
console.log(formatNombre.format(grandNombre));
// "1,000,000,000,000,000,110,000"

// Formater en tant que chaîne de caractères utilisant la syntaxe `E` :
console.log(formatNombre.format(`${grandNombre}E-6`));
// "1,000,000,000,000,000.11"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'objet {{JSxRef("Intl.NumberFormat")}}
- La méthode {{JSxRef("Number.prototype.toLocaleString()")}}
