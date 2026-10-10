---
title: "RegExp : méthode statique escape()"
short-title: escape()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/escape
l10n:
  sourceCommit: 0f96a043fc900d79fbd064b5628db17072843714
---

La méthode statique **`RegExp.escape()`** [échappe](/fr/docs/Web/JavaScript/Reference/Regular_expressions#escape_sequences) tous les caractères potentiellement syntaxiques d'une expression rationnelle dans une chaîne de caractères, et retourne une nouvelle chaîne de caractères qui peut être utilisée en toute sécurité comme motif [littéral](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character) pour le constructeur {{JSxRef("RegExp/RegExp", "RegExp()")}}.

Lors de la création dynamique d'un {{JSxRef("RegExp")}} avec du contenu fourni par l'utilisateur·ice, envisagez d'utiliser cette fonction pour assainir l'entrée (à moins que l'entrée ne soit réellement destinée à contenir une syntaxe d'expression rationnelle). De plus, n'essayez pas de réimplémenter sa fonctionnalité en, par exemple, utilisant {{JSxRef("String.prototype.replaceAll()")}} pour insérer un `\` avant tous les caractères de syntaxe. `RegExp.escape()` est conçu pour utiliser des séquences d'échappement qui fonctionnent dans beaucoup plus de cas limites/contextes que ce que du code fait main est susceptible d'atteindre.

## Syntaxe

```js-nolint
RegExp.escape(string)
```

### Paramètres

- `string`
  - : La chaîne de caractères à échapper.

### Valeur de retour

Une nouvelle chaîne de caractères qui peut être utilisée en toute sécurité comme motif littéral pour le constructeur {{JSxRef("RegExp/RegExp", "RegExp()")}}. Autrement dit, les éléments suivants dans la chaîne de caractères en entrée sont remplacés&nbsp;:

- Le premier caractère de la chaîne de caractères, s'il s'agit d'un chiffre décimal (0-9) ou d'une lettre ASCII (a-z, A-Z), est échappé à l'aide de la syntaxe [d'échappement de caractère](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape) `\x`. Par exemple, `RegExp.escape("toto")` retourne `"\\x66oo"` (ici et ci-après, les deux barres obliques inverses d'un littéral de chaîne de caractères représentent un seul caractère de barre oblique inverse). Cette étape garantit que si cette chaîne de caractères échappée est intégrée dans un motif plus grand immédiatement précédé de `\1`, `\x0`, `\u000`, etc., le caractère initial n'est pas interprété comme faisant partie de la séquence d'échappement.
- Les [caractères de syntaxe](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character#description) des expressions rationnelles, notamment `^`, `$`, `\`, `.`, `*`, `+`, `?`, `(`, `)`, `[`, `]`, `{`, `}`, et `|`, ainsi que le délimiteur `/`, sont échappés en insérant un caractère `\` devant eux. Par exemple, `RegExp.escape("toto.truc")` retourne `"\\x66oo\\.truc"`, et `RegExp.escape("(toto)")` retourne `"\\(toto\\)"`.
- Les autres signes de ponctuation, notamment `,`, `-`, `=`, `<`, `>`, `#`, `&`, `!`, `%`, `:`, `;`, `@`, `~`, `'`, `` ` ``, et `"`, sont échappés à l'aide de la syntaxe `\x`. Par exemple, `RegExp.escape("toto-truc")` retourne `"\\x66oo\\x2dtruc"`. Ces caractères ne peuvent pas être échappés en les préfixant avec `\` car, par exemple, `/toto\-truc/u` est une erreur de syntaxe.
- Les caractères qui possèdent leurs propres séquences [d'échappement de caractère](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)&nbsp;: `\f` (U+000C saut de page), `\n` (U+000A saut de ligne), `\r` (U+000D retour chariot), `\t` (U+0009 tabulation horizontale), et `\v` (U+000B tabulation verticale), sont remplacés par leurs séquences d'échappement. Par exemple, `RegExp.escape("toto\ntruc")` retourne `"\\x66oo\\ntruc"`.
- Le caractère espace est échappé sous la forme `"\\x20"`.
- Les autres caractères non ASCII de [saut de ligne et d'espacement](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#espace_blanc) sont remplacés par une ou deux séquences d'échappement `\uXXXX` représentant leurs unités de code UTF-16. Par exemple, `RegExp.escape("toto\u2028truc")` retourne `"\\x66oo\\u2028truc"`.
- Les [substituts isolés](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#caractères_utf-16_points_de_code_Unicode_et_groupes_de_graphèmes) sont remplacés par leurs séquences d'échappement `\uXXXX`. Par exemple, `RegExp.escape("toto\uD800truc")` retourne `"\\x66oo\\ud800truc"`.

### Exceptions

- {{JSxRef("TypeError")}}
  - : Levée si `string` n'est pas une chaîne de caractères.

## Exemples

### Utiliser `RegExp.escape()`

Les exemples suivants illustrent différentes entrées et sorties de la méthode `RegExp.escape()`.

```js
RegExp.escape("Achetez-le. Utilisez-le. Cassez-le. Réparez-le.");
// "\\x41chetez\\x2dle\\.\\x20Utilisez\\x2dle\\.\\x20Cassez\\x2dle\\.\\x20Réparez\\x2dle\\."
RegExp.escape("toto.truc"); // "\\x66oo\\.truc"
RegExp.escape("toto-truc"); // "\\x66oo\\x2dtruc"
RegExp.escape("toto\ntruc"); // "\\x66oo\\ntruc"
RegExp.escape("toto\uD800truc"); // "\\x66oo\\ud800truc"
RegExp.escape("toto\u2028truc"); // "\\x66oo\\u2028truc"
```

### Utiliser `RegExp.escape()` avec le constructeur `RegExp`

Le principal cas d'utilisation de `RegExp.escape()` consiste à intégrer une chaîne de caractères dans un motif d'expression rationnelle plus grand et à garantir que cette chaîne de caractères est traitée comme un motif littéral, et non comme une syntaxe d'expression rationnelle. Considérez l'exemple naïf suivant, qui remplace des URL&nbsp;:

```js
function supprimerDomaine(texte, domaine) {
  return texte.replace(new RegExp(`https?://${domaine}(?=/)`, "g"), "");
}

const entree =
  "Considérez utiliser [RegExp.escape()](https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/escape) pour échapper les caractères spéciaux dans une chaîne de caractères.";
const domaine = "developer.mozilla.org";
console.log(supprimerDomaine(entree, domaine));
// Considérez utiliser [RegExp.escape()](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/escape) pour échapper les caractères spéciaux dans une chaîne de caractères.
```

L'insertion de `domaine` ci-dessus produit le littéral d'expression rationnelle `https?://developer.mozilla.org(?=/)`, où le caractère «&nbsp;.&nbsp;» est un caractère [joker](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard) d'expression rationnelle. Le motif correspond à toute chaîne de caractères contenant n'importe quel caractère à la place du «&nbsp;.&nbsp;», comme `developer-mozilla-org`. Le remplacement modifie donc aussi, à tort, le texte suivant&nbsp;:

```js
const entree =
  "Ce n'est pas un lien MDN : https://developer-mozilla.org/, faites attention !";
const domaine = "developer.mozilla.org";
console.log(supprimerDomaine(entree, domaine));
// Ce n'est pas un lien MDN : /, faites attention !
```

Pour corriger cela, nous pouvons utiliser `RegExp.escape()` afin de garantir que toute entrée de l'utilisateur·ice est traitée comme un motif littéral&nbsp;:

```js
function supprimerDomaine(texte, domaine) {
  return texte.replace(
    new RegExp(`https?://${RegExp.escape(domaine)}(?=/)`, "g"),
    "",
  );
}
```

Cette fonction fait désormais exactement ce que nous voulons et ne transforme pas les URL `developer-mozilla.org`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `RegExp.escape` dans `core-js` <sup>(angl.)</sup>](https://github.com/zloirock/core-js#regexp-escaping)
- [La prothèse d'émulation de es-shims de `RegExp.escape` <sup>(angl.)</sup>](https://www.npmjs.com/package/regexp.escape)
- L'objet natif {{JSxRef("RegExp")}}
