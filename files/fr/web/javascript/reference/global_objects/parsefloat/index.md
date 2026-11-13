---
title: parseFloat()
slug: Web/JavaScript/Reference/Global_Objects/parseFloat
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

La fonction **`parseFloat()`** analyse un argument de type chaîne de caractères et retourne un nombre flottant.

{{InteractiveExample("Démonstration JavaScript&nbsp;: parseFloat()")}}

```js interactive-example
function circumference(r) {
  return parseFloat(r) * 2.0 * Math.PI;
}

console.log(circumference(4.567));
// Résultat attendu : 28.695307297889173

console.log(circumference("4.567abcdefgh"));
// Résultat attendu : 28.695307297889173

console.log(circumference("abcdefgh"));
// Résultat attendu : NaN
```

## Syntaxe

```js-nolint
parseFloat(string)
```

### Paramètres

- `string`
  - : La valeur à analyser, [convertie en chaîne de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#conversion_en_chaîne_de_caractères). Les {{Glossary("whitespace", "espaces blancs")}} en début de cette chaîne de caractères sont ignorés.

### Valeur de retour

Un nombre flottant obtenu à partir de l'analyse de la chaîne de caractères fournie, ou {{JSxRef("NaN")}} lorsque le premier caractère non blanc ne peut pas être converti en nombre.

> [!NOTE]
> JavaScript ne fait pas la distinction entre les «&nbsp;nombres à virgule flottante&nbsp;» et les «&nbsp;entiers&nbsp;» au niveau du langage. {{JSxRef("parseInt()")}} et `parseFloat()` ne diffèrent que par leur comportement d'analyse, mais pas nécessairement par leurs valeurs de retour. Par exemple, `parseInt("42")` et `parseFloat("42")` retourne la même valeur&nbsp;: un nombre ({{JSxRef("Number")}}) 42.

## Description

La fonction `parseFloat` convertit son premier argument en chaîne de caractères, analyse cette chaîne de caractères comme un littéral de nombre décimal, puis retourne un nombre ou `NaN`. La syntaxe des nombres qu'elle accepte peut être résumée comme suit&nbsp;:

- Les caractères acceptés par `parseFloat()` sont le signe plus (`+`), le signe moins (`-` U+002D HYPHEN-MINUS), les chiffres décimaux (`0` - `9`), le point décimal (`.`), l'indicateur d'exposant (`e` ou `E`), et le littéral `"Infinity"`.
- Les signes `+`/`-` ne peuvent apparaître qu'au tout début de la chaîne de caractères, ou immédiatement après le caractère `e`/`E`. Le point décimal ne peut apparaître qu'une seule fois, et seulement avant le caractère `e`/`E`. Le caractère `e`/`E` ne peut apparaître qu'une seule fois, et seulement s'il y a au moins un chiffre avant.
- Les espaces en début d'argument sont supprimés et ignorés.
- `parseFloat()` peut également analyser et retourner {{JSxRef("Infinity")}} ou `-Infinity` si la chaîne de caractères commence par `"Infinity"` ou `"-Infinity"` précédée de zéro ou plusieurs espaces blancs.
- `parseFloat()` choisit la plus longue sous-chaîne de caractères commençant au début qui génère un littéral de nombre valide. S'il rencontre un caractère invalide, il retourne le nombre représenté jusqu'à ce point, en ignorant le caractère invalide et tous les caractères qui le suivent.
- Si le premier caractère de l'argument ne peut pas commencer un littéral de nombre légal selon la syntaxe ci-dessus, `parseFloat` retourne {{JSxRef("NaN")}}.

D'un point de vue syntaxique, `parseFloat()` analyse un sous-ensemble de la syntaxe que la fonction [`Number()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Number/Number) accepte. En particulier, `parseFloat()` ne prend pas en charge les littéraux non décimaux avec les préfixes `0x`, `0b` ou `0o`, mais prend en charge tout le reste. Cependant, `parseFloat()` est plus tolérant que `Number()`, car il ignore les caractères invalides en fin de chaîne de caractères, ce qui fait que `Number()` retourne `NaN`.

Similaire aux littéraux numériques et à `Number()`, le nombre retourné par `parseFloat()` peut ne pas être exactement égal au nombre représenté par la chaîne de caractères, en raison de la plage et de l'imprécision des nombres à virgule flottante. Pour les nombres en dehors de la plage `-1.7976931348623158e+308` — `1.7976931348623158e+308` (voir {{JSxRef("Number.MAX_VALUE")}}), `-Infinity` ou `Infinity` est retourné.

## Exemples

### Utiliser la fonction `parseFloat()`

Les exemples suivants retournent tous `3.14`&nbsp;:

```js
parseFloat(3.14);
parseFloat("3.14");
parseFloat("  3.14  ");
parseFloat("314e-2");
parseFloat("0.0314E+2");
parseFloat("3.14et des caractères qui ne sont pas des nombres");
parseFloat({
  toString() {
    return "3.14";
  },
});
```

### `parseFloat()` retourne `NaN`

L'exemple suivant retourne `NaN`&nbsp;:

```js
parseFloat("FF2");
```

De manière anecdotique, comme la chaîne de caractères `NaN` elle-même est une syntaxe invalide selon ce que `parseFloat()` accepte, passer `"NaN"` retourne également `NaN`.

```js
parseFloat("NaN"); // NaN
```

### Retourner `Infinity`

Les valeurs infinies sont retournées lorsque le nombre est en dehors de la plage du format double précision 64 bits IEEE 754-2019&nbsp;:

```js
parseFloat("1.7976931348623159e+308"); // Infinity
parseFloat("-1.7976931348623159e+308"); // -Infinity
```

L'infini est également retourné lorsque la chaîne de caractères commence par `"Infinity"` ou `"-Infinity"`&nbsp;:

```js
parseFloat("Infinity"); // Infinity
parseFloat("-Infinity"); // -Infinity
```

### Interaction avec les valeurs `BigInt`

`parseFloat()` ne gère pas les valeurs {{JSxRef("BigInt")}}. Il s'arrête au caractère `n` et traite la chaîne de caractères précédente comme un entier normal, avec une perte de précision possible. Si une valeur BigInt est passée à `parseFloat()`, elle est convertie en chaîne de caractères, et la chaîne de caractères est analysée comme un nombre à virgule flottante, ce qui peut également entraîner une perte de précision.

```js example-bad
parseFloat(900719925474099267n); // 900719925474099300
parseFloat("900719925474099267n"); // 900719925474099300
```

Vous devez passer la chaîne de caractères à la fonction {{JSxRef("BigInt/BigInt", "BigInt()")}} à la place, sans le caractère `n` final.

```js example-good
BigInt("900719925474099267");
// 900719925474099267n
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La fonction native {{JSxRef("parseInt()")}}
- La méthode statique {{JSxRef("Number.parseFloat()")}}
- La méthode statique {{JSxRef("Number.parseInt()")}}
- La méthode {{JSxRef("Number.prototype.toFixed()")}}
