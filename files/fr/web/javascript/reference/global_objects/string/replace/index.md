---
title: "String : méthode replace()"
short-title: replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
l10n:
  sourceCommit: 9de14917b151f7db567a65d44c2685cea754b12a
---

La méthode **`replace()`** des valeurs {{JSxRef("String")}} retourne une nouvelle chaîne de caractères avec un ou plusieurs éléments correspondant à un `pattern` remplacés par un `replacement`. Le `pattern` peut être une chaîne de caractères ou un {{JSxRef("RegExp")}}, et le `replacement` peut être une chaîne de caractères ou une fonction appelée pour chaque correspondance. Si `pattern` est une chaîne de caractères, seule la première occurrence est remplacée. La chaîne de caractères originale reste inchangée.

{{InteractiveExample("Démonstration JavaScript&nbsp;: String.prototype.replace()")}}

```js interactive-example
const paragraph = "Le nom de ce chien est juste Chien ! Oui, c'est le nom.";

console.log(paragraph.replace("nom", "surnom"));
// Résultat attendu : "Le surnom de ce chien est juste Chien ! Oui, c'est le nom."

console.log(paragraph.replace(/\best\b/, "était"));
// Résultat attendu : "Le nom de ce chien était juste Chien ! Oui, c'est le nom."

console.log(paragraph.replace(/\best\b/g, "était"));
// Résultat attendu : "Le nom de ce chien était juste Chien ! Oui, c'était le nom."
```

## Syntaxe

```js-nolint
replace(pattern, replacement)
```

### Paramètres

- `pattern`
  - : Peut être une chaîne de caractères ou un objet avec une méthode [`Symbol.replace`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) — l'exemple typique étant une [expression rationnelle](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Toute valeur sans cette méthode est convertie en chaîne de caractères.
- `replacement`
  - : Peut être une chaîne de caractères ou une fonction.
    - Si c'est une chaîne de caractères, elle remplace la sous-chaîne de caractères à `pattern`. Un certain nombre de modèles de remplacement spéciaux sont supportés&nbsp;; voir la section [Définir une chaîne de caractère comme remplacement](#définir_une_chaîne_de_caractère_comme_remplacement) ci-dessous.
    - Si c'est une fonction, elle est appelée pour chaque correspondance et sa valeur de retour est utilisée comme texte de remplacement. Les arguments sont décrits dans la section [Définir une fonction comme remplacement](#définir_une_fonction_comme_remplacement) ci-dessous.

### Valeur retournée

Une nouvelle chaîne de caractères, avec tout, ou une partie des correspondances du modèle remplacées par un remplacement.

## Description

Cette méthode ne modifie pas la chaîne de caractères sur laquelle elle est appelée. Elle retourne une nouvelle chaîne de caractères.

Un motif de chaîne de caractères n'est remplacé qu'une seule fois. Pour effectuer une recherche et un remplacement global, utilisez une expression rationnelle avec l'indicateur `g`, ou utilisez plutôt [`replaceAll()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replaceAll).

Si `pattern` est un objet doté d'une méthode [`Symbol.replace`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol/replace) (y compris les objets `RegExp`), cette méthode est appelée avec la chaîne de caractères cible et `replacement` comme arguments. Sa valeur de retour devient celle de `replace()`. Dans ce cas, le comportement de `replace()` est entièrement défini par la méthode `[Symbol.replace]()` — par exemple, les mentions de «&nbsp;groupes capturant&nbsp;» dans la description ci-dessous désignent en réalité une fonctionnalité fournie par [`RegExp.prototype[Symbol.replace]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace).

Si `pattern` est une chaîne de caractères vide, le texte de remplacement est ajouté au début de la chaîne de caractères.

```js
"xxx".replace("", "_"); // "_xxx"
```

Une expression rationnelle avec l'indicateur `g` est le seul cas dans lequel `replace()` remplace plus d'une fois. Pour plus d'informations sur la façon dont les propriétés des expressions rationnelles (en particulier l'indicateur [sticky](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky)) interagissent avec `replace()`, consultez [`RegExp.prototype[Symbol.replace]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace).

### Définir une chaîne de caractères comme remplacement

La chaîne de caractères de remplacement peut inclure les motifs spéciaux suivants&nbsp;:

| Motif    | Insertions                                                                                                |
| -------- | --------------------------------------------------------------------------------------------------------- |
| `$$`     | Insère un `"$"`.                                                                                          |
| `$&`     | Insère la sous-chaîne de caractères trouvée.                                                              |
| `` $` `` | Insère la partie de la chaîne de caractères avant la sous-chaîne de caractères trouvée.                   |
| `$'`     | Insère la partie de la chaîne de caractères après la sous-chaîne de caractères trouvée.                   |
| `$n`     | Insère le `n`-ème groupe capturant (indexé à partir de `1`) où `n` est un entier positif inférieur à 100. |
| `$<Nom>` | Insère le groupe capturant nommé où `Nom` est le nom du groupe.                                           |

`$n` et `$<Nom>` sont disponibles uniquement si l'argument `pattern` est un objet {{JSxRef("RegExp")}}. Si `pattern` est une chaîne de caractères ou si le groupe capturant correspondant n'est pas présent dans l'expression rationnelle, le motif est remplacé littéralement. Si le groupe est présent mais ne correspond pas (parce qu'il fait partie d'une disjonction), il est remplacé par une chaîne de caractères vide.

```js
"toto".replace(/(t)/, "$2");
// "$2oto"; l'expression rationnelle ne possède pas le deuxième groupe

"toto".replace("t", "$1");
// "$1oto"; le motif est une chaîne de caractères, il ne comporte donc aucun groupe

"toto".replace(/(t)|(g)/, "$2");
// "oto"; le deuxième groupe existe mais ne correspond pas
```

### Définir une fonction comme remplacement

Vous pouvez définir une fonction comme second paramètre. Dans ce cas, la fonction est appelée après la correspondance. Le résultat de la fonction est utilisé comme chaîne de caractères de remplacement.

> [!NOTE]
> Les motifs spéciaux de remplacement mentionnés ci-dessus ne s'appliquent _pas_ aux chaînes de caractères retournées par la fonction de remplacement.

La fonction a la signature suivante&nbsp;:

```js
function remplaceur(
  correspondance,
  p1,
  p2,
  /* …, */ pN,
  decalage,
  chaineCaracteres,
  groupes,
) {
  return remplacement;
}
```

Les arguments de la fonction sont les suivants&nbsp;:

- `match` (correspondance)
  - : La sous-chaîne de caractères correspondante. (Correspond à `$&` ci-dessus.)
- `p1`, `p2`, …, `pN`
  - : La `n`-ème chaîne de caractères trouvée par un groupe capturant (y compris les groupes nommés), si le premier argument de `replace()` est un objet {{JSxRef("RegExp")}}. (Correspond à `$1`, `$2`, etc. ci-dessus.) Par exemple, si le `pattern` est `/(\a+)(\b+)/`, alors `p1` est la correspondance pour `\a+`, et `p2` pour `\b+`. Si le groupe fait partie d'une disjonction (ex. `"abc".replace(/(a)|(b)/, remplaceur)`), l'alternative non correspondante est `undefined`.
- `offset` (décalage)
  - : Le décalage de la sous-chaîne de caractères dans la chaîne de caractères entière examinée. Par exemple, si la chaîne de caractères entière est `'abcd'`, et si la sous-chaîne de caractères correspondante est `'bc'`, alors cet argument est `1`.
- `string` (chaîne de caractères)
  - : La chaîne de caractères entière examinée.
- `groups` (groupes)
  - : Un objet dont les clés sont les noms des groupes utilisés, et dont les valeurs sont les parties correspondantes (`undefined` si aucune correspondance). Présent uniquement si `pattern` contient au moins un groupe capturant nommé.

Le nombre exact d'arguments dépend du fait que le premier argument est un objet {{JSxRef("RegExp")}} — et, si c'est le cas, du nombre de groupes capturant qu'il contient.

L'exemple suivant définit `nouvelleChaine` sur `'abc - 12345 - #$*%'`&nbsp;:

```js
function remplaceur(correspondance, p1, p2, p3, decalage, chaineCaracteres) {
  // p1 n'a pas de chiffres, p2 chiffres, et p3 n'a pas de lettres
  return [p1, p2, p3].join(" - ");
}
const nouvelleChaine = "abc12345#$*%".replace(/(\D*)(\d*)(\W*)/, remplaceur);
console.log(nouvelleChaine); // abc - 12345 - #$*%
```

La fonction est appelée plusieurs fois pour chaque correspondance complète à remplacer si l'expression rationnelle du premier paramètre est globale.

## Exemples

### Définir l'expression rationnelle dans `replace()`

Dans l'exemple suivant, l'expression rationnelle est définie dans `replace()` et inclut le drapeau d'ignorance de casse.

```js
const chaine = "C'était la nuit avant noel...";
const nouvelleChaine = chaine.replace(/noel/i, "Noël");
console.log(nouvelleChaine); // C'était la nuit avant Noël...
```

Ça affiche `'C'était la nuit avant Noël...'`.

> [!NOTE]
> Voir [le guide des expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_expressions) pour plus d'explications.

### Utiliser les indicateurs `global` et `ignoreCase` avec `replace()`

Le remplacement global ne peut se faire qu'avec une expression rationnelle. Dans l'exemple suivant, l'expression rationnelle inclut les [indicateurs `global` et `ignoreCase`](/fr/docs/Web/JavaScript/Guide/Regular_expressions#recherche_avancée_avec_indicateurs) ce qui permet à `replace()` de remplacer chaque occurrence de `'pommes'` par `'oranges'`.

```js
const re = /pommes/gi;
const chaine = "Les pommes sont rondes, et les pommes sont juteuses.";
const nouvelleChaine = chaine.replace(re, "oranges");
console.log(nouvelleChaine); // Les oranges sont rondes, et les oranges sont juteuses.
```

Ça affiche `'Les oranges sont rondes, et les oranges sont juteuses.'`.

### Inverser les mots dans une chaîne de caractères

Le script suivant inverse les mots dans la chaîne de caractères. Pour le texte de remplacement, il utilise des [groupes capturant](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) et les motifs de remplacement `$1` et `$2`.

```js
const re = /(\w+)\s(\w+)/;
const chaine = "Maria Cruz";
const nouvelleChaine = chaine.replace(re, "$2, $1");
console.log(nouvelleChaine); // Cruz, Maria
```

Ça affiche `'Cruz, Maria'`.

### Utiliser une fonction en incise qui modifie les caractères correspondants

Dans cet exemple, toutes les lettres majuscules de la chaîne de caractères sont converties en minuscules, et un tiret est inséré juste avant la correspondance. Il faut faire des opérations supplémentaires sur l'élément trouvé avant de le retourner comme remplacement.

La fonction de remplacement reçoit la correspondance en paramètre, et l'utilise pour changer la casse et ajouter le tiret avant de retourner.

```js
function formaterAvecTirets(nomPropriete) {
  function majusculeVersMinusculeAvecTiret(correspondance, decalage, chaine) {
    return (decalage > 0 ? "-" : "") + correspondance.toLowerCase();
  }
  return nomPropriete.replace(/[A-Z]/g, majusculeVersMinusculeAvecTiret);
}
```

Donner `formaterAvecTirets('borderTop')`, retourne `'border-top'`.

Parce que nous voulons transformer davantage le _résultat_ de la correspondance avant le remplacement final, nous devons utiliser une fonction. Cela force l'évaluation de la correspondance avant la méthode [`toLowerCase()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase). Si nous essayons de le faire avec la correspondance sans fonction, {{JSxRef("String/toLowerCase", "toLowerCase()")}} n'a aucun effet.

```js example-bad
// Ne fonctionne pas
const nouvelleChaine = nomPropriete.replace(/[A-Z]/g, "-" + "$&".toLowerCase());
```

C'est parce que `'$&'.toLowerCase()` est d'abord évalué comme un littéral de chaîne de caractères (ce qui donne le même `'$&'`) avant d'utiliser les caractères comme motif.

### Remplacer un degré Fahrenheit par son équivalent en degrés Celsius

L'exemple suivant remplace un degré Fahrenheit par son équivalent en degrés Celsius. Le degré Fahrenheit doit être un nombre se terminant par `"F"`. La fonction retourne le nombre en degrés Celsius se terminant par `"C"`. Par exemple, si le nombre d'entrée est `"212F"`, la fonction retourne `"100C"`. Si le nombre est `"0F"`, la fonction retourne `"-17.77777777777778C"`.

L'expression rationnelle `test` vérifie la présence de tout nombre se terminant par `F`. Le nombre de degrés Fahrenheit est accessible à la fonction par son deuxième paramètre, `p1`. La fonction définit le nombre de degrés Celsius en fonction du nombre de degrés Fahrenheit transmis sous forme de chaîne de caractères à la fonction `f2c()`. `f2c()` retourne alors le nombre de degrés Celsius. Cette fonction reproduit approximativement l'indicateur `s///e` de Perl.

```js
function f2c(x) {
  function convertir(chaine, p1, decalage, c) {
    return `${((p1 - 32) * 5) / 9}C`;
  }
  const c = String(x);
  const test = /(-?\d+(?:\.\d*)?)F\b/g;
  return c.replace(test, convertir);
}
```

### Créer une fonction de remplacement générique

Supposons que nous voulons créer une fonction de remplacement qui ajoute les données de décalage à chaque chaîne de caractères correspondante. Comme la fonction de remplacement reçoit déjà le paramètre `offset`, c'est simple si l'expression rationnelle est connue statiquement.

```js
"abcd".replace(
  /(bc)/,
  (correspondance, p1, decalage) => `${correspondance} (${decalage}) `,
);
// "abc (1) d"
```

Cependant, cette fonction de remplacement est difficile à généraliser si nous voulons qu'elle fonctionne avec n'importe quel motif d'expression rationnelle. La fonction de remplacement est _variadique_ — le nombre d'arguments qu'elle reçoit dépend du nombre de groupes capturant présents. Nous pouvons utiliser des [paramètres du reste](/fr/docs/Web/JavaScript/Reference/Functions/rest_parameters), mais cela recueille aussi `decalage`, `chaineCaracteres`, etc. dans le tableau. Le fait que la fonction transmette ou non `groupes` selon l'identité de l'expression rationnelle rend aussi difficile de savoir de manière générale quel argument correspond à `decalage`.

```js example-bad
function ajouterDecalage(correspondance, ...args) {
  const decalage = args.at(-2);
  return `${correspondance} (${decalage}) `;
}

console.log("abcd".replace(/(bc)/, ajouterDecalage)); // "abc (1) d"
console.log("abcd".replace(/(?<groupe>bc)/, ajouterDecalage)); // "abc (abcd) d"
```

L'exemple `ajouterDecalage` ci-dessus ne fonctionne pas lorsque l'expression rationnelle contient un groupe nommé, parce que dans ce cas `args.at(-2)` correspond à `chaineCaracteres` au lieu de `decalage`.

À la place, vous devez extraire les derniers arguments selon leur type, parce que `groupes` est un objet tandis que `chaineCaracteres` est une chaîne de caractères.

```js
function ajouterDecalage(correspondanceupe, ...args) {
  const aGroupeNomme = typeof args.at(-1) === "object";
  const decalage = aGroupeNomme ? args.at(-3) : args.at(-2);
  return `${correspondance} (${decalage}) `;
}

console.log("abcd".replace(/(bc)/, ajouterDecalage)); // "abc (1) d"
console.log("abcd".replace(/(?<groupe>bc)/, ajouterDecalage)); // "abc (1) d"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [La prothèse d'émulation de `String.prototype.replace` dans `core-js` <sup>(angl.)</sup>](https://core-js.io/docs/features/ecmascript/string-regexp)
- Le guide [des expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_expressions)
- La méthode {{JSxRef("String.prototype.replaceAll()")}}
- La méthode {{JSxRef("String.prototype.match()")}}
- La méthode {{JSxRef("RegExp.prototype.exec()")}}
- La méthode {{JSxRef("RegExp.prototype.test()")}}
- La propriété {{JSxRef("Symbol.replace")}}
- La méthode [`RegExp.prototype[Symbol.replace]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace)
