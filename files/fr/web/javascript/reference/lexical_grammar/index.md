---
title: Grammaire lexicale
slug: Web/JavaScript/Reference/Lexical_grammar
---

{{JsSidebar("More")}}

Cette page décrit la grammaire lexicale de JavaScript. Le code source d'un script ECMAScript est analysé de gauche à droite et est converti en une série d'éléments qui sont : des jetons, des caractères de contrôle, des terminateurs de lignes, des commentaires ou des blancs. ECMAScript définit également certains mots-clés et littéraux. ECMAScript possède également des règles pour insérer automatiquement des points-virgules à la fin des instructions.

## Caractères de contrôle

Les caractères de contrôle n'ont aucune représentation visuelle mais sont utilisés pour contrôler l'interprétation du texte.

| Point de code | Nom                                                          | Abréviation | Description                                                                                                                                                                                   |
| ------------- | ------------------------------------------------------------ | ----------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `U+200C`      | Antiliant sans chasse (_zero width non-joiner_ en anglais)   | \<ZWNJ>     | Placé entre des caractères pour empêcher qu'ils soient connectés par une ligature dans certaines langues ([Wikipédia](https://fr.wikipedia.org/wiki/Antiliant_sans_chasse)).                  |
| `U+200D`      | Liant sans chasse (_zero width joiner_ en anglais)           | \<ZWJ>      | Placé entre des caractères qui ne seraient normalement pas connectés pour les afficher comme connectés dans certaines langues ([Wikipédia](https://fr.wikipedia.org/wiki/Liant_sans_chasse)). |
| `U+FEFF`      | Indicateur d'ordre des octets (_byte order mark_ en anglais) | \<BOM>      | Utilisé au début d'un script pour indiquer qu'il est en Unicode et quel est l'ordre des octets ([Wikipedia](https://fr.wikipedia.org/wiki/Indicateur_d%27ordre_des_octets)).                  |

## Blancs

Les caractères d'espacement (blancs) sont utilisés pour des raisons de lisibilité et permetttent de séparer les différents fragments entre eux. Ces caractères sont généralement inutiles au code. Les outils de [minification](https://en.wikipedia.org/wiki/Minification_%28programming%29) sont souvent utilisés pour retirer les blancs afin de réduire le volume de données à transférer.

| Point de code | Nom                                                | Abréviation | Description                                                                                                  | Séquence d'échappement |
| ------------- | -------------------------------------------------- | ----------- | ------------------------------------------------------------------------------------------------------------ | ---------------------- |
| U+0009        | Tabulation (horizontale)                           | \<HT>       | Tabulation horizontale                                                                                       | \t                     |
| U+000B        | Tabulation verticale                               | \<VT>       | Tabulation verticale                                                                                         | \v                     |
| U+000C        | Caractère de saut de page (_form feed_ en anglais) | \<FF>       | Caractère de contrôle pour le saut de page ([Wikipédia](http://en.wikipedia.org/wiki/Page_break#Form_feed)). | \f                     |
| U+0020        | Espace sécable (_space_ en anglais)                | \<SP>       | Espace sécable                                                                                               |                        |
| U+00A0        | Espace insécable (_no-break space_ en anglais)     | \<NBSP>     | Espace insécable                                                                                             |                        |
| Autres        | Autres caractères d'espaces Unicode                | \<USP>      | [Espaces Unicode sur Wikipédia](http://en.wikipedia.org/wiki/Space_%28punctuation%29#Spaces_in_Unicode)      |                        |

## Terminateurs de lignes

En plus des blancs, les caractères de fin de ligne (terminateurs de lignes) sont utilisés pour améliorer la lisibilité du texte. Cependant, dans certains cas, les terminateurs de lignes peuvent influencer l'exécution du code JavaScript là où ils sont interdits. Les terminateurs de lignes affectent également le processus d'[insertion automatique des points-virgules](#Automatic_semicolon_insertion). Les terminateurs de lignes correspondent à la classe **\s** [des expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Expressions_régulières).

Seuls les points de code Unicode qui suivent sont traités comme des fins de lignes en ECMAScript, les autres caractères sont traités comme des blancs (par exemple : _Next Line_ (nouvelle ligne) : NEL, U+0085 est considéré comme un blanc).

| Point de code | Nom                      | Abréviation | Description                                                                  | Séquence d'échappement |
| ------------- | ------------------------ | ----------- | ---------------------------------------------------------------------------- | ---------------------- |
| U+000A        | Nouvelle ligne           | \<LF>       | Caractère de nouvelle ligne pour les systèmes UNIX.                          | \n                     |
| U+000D        | Retour chariot           | \<CR>       | Caractère de nouvelle ligne pour les systèmes Commodore et les premiers Mac. | \r                     |
| U+2028        | Séparateur de ligne      | \<LS>       | [Wikipédia](https://fr.wikipedia.org/wiki/Fin_de_ligne)                      |                        |
| U+2029        | Séparateur de paragraphe | \<PS>       | [Wikipédia](https://fr.wikipedia.org/wiki/Fin_de_ligne)                      |                        |

## Commentaires

Les commentaires sont utilisés pour fournir des notes, des suggestions, des indications ou des avertissements sur le code JavaScript. Cela peut en faciliter la lecture et la compréhension. Ils peuvent également être utilisés pour empêcher l'exécution d'un certain code ; cela peut être pratique lors du débogage.

En JavaScript, Il existe actuellement deux façons de former des commentaires (cf. ci-après pour une troisième méthode en cours de discussion).

### Commentaire sur une ligne

La première façon est d'utiliser `//` (double barre oblique), pour commenter tout le texte qui suit (sur la même ligne). Par exemple :

```js
function comment() {
  // Voici un commentaire d'une ligne en JavaScript
  console.log("Hello world !");
}
comment();
```

### Commentaire sur plusieurs lignes

La seconde façon est d'utiliser `/* */`, qui est plus flexible.

Il est possible d'utiliser cette forme sur une seule ligne :

```js
function comment() {
  /* Voici un commentaire d'une ligne en JavaScript */
  console.log("Hello world !");
}
comment();
```

Mais également sur plusieurs lignes, comme ceci :

```js
function comment() {
  /* Ce commentaire s'étend sur plusieurs lignes. Il n'y a
    pas besoin de clore le commentaire avant d'avoir
     fini. */
  console.log("Hello world !");
}
comment();
```

Il est également possible d'utiliser un commentaire au milieu d'une ligne. En revanche, cela rend le code plus difficile à lire et devrait être utilisé avec attention :

```js
function comment(x) {
  console.log("Hello " + x /* insérer la valeur de x */ + " !");
}
comment("world");
```

On peut également encadrer du code pour l'empêcher d'être exécuté. Par exemple :

```js
function comment() {
  /* console.log("Hello world !"); */
}
comment();
```

Ici, l'appel `console.log()` n'a jamais lieu car il fait partie d'un commentaire. On peut ainsi désactiver plusieurs lignes de code d'un coup.

### Commentaire d'environnement (_hashbang_)

Une troisième syntaxe, en cours de standardisation par ECMAScript, permet d'indiquer l'environnement dans lequel est exécuté le script via [un commentaire _hashbang_](https://github.com/tc39/proposal-hashbang). Un tel commentaire commence par `#!` et est **uniquement valide au tout début du script ou du module** (aucun espace/blanc n'est autorisé avant `#!`). Un tel commentaire ne tient que sur une seule ligne et il ne peut y avoir qu'un seul commentaire de ce type.

```js
#!/usr/bin/env node

console.log("Coucou le monde");
```

Les commentaires d'environnements sont conçus pour fonctionner comme [les _shebangs_ qu'on peut trouver sous Unix](<https://en.wikipedia.org/wiki/Shebang_(Unix)>) et indiquent l'interpréteur à utiliser pour exécuter le script ou le module.

> **Attention :** Bien qu'utiliser un [BOM](https://fr.wikipedia.org/wiki/Indicateur_d%27ordre_des_octets) avant le _hashbang_ fonctionne dans un navigateur, cela n'est pas conseillé. En effet, un BOM empêchera le bon fonctionnement sous Unix/Linux. Utilisez un encodage UTF-8 sans BOM si vous souhaitez exécuter vos scripts depuis une invite de commande.

Si vous souhaitez placer un commentaire en début de fichier sans indiquer d'environnement d'exécution spécifique, on pourra utiliser le commentaire classique avec `//`.

## Mots-clés

### Mots-clés réservés selon ECMAScript 2015

- {{jsxref("Instructions/break", "break")}}
- {{jsxref("Instructions/switch", "case")}}
- {{jsxref("Opérateurs/class","class")}}
- {{jsxref("Instructions/try...catch", "catch")}}
- {{jsxref("Instructions/const", "const")}}
- {{jsxref("Instructions/continue", "continue")}}
- {{jsxref("Instructions/debugger", "debugger")}}
- {{jsxref("Instructions/default", "default")}}
- {{jsxref("Opérateurs/L_opérateur_delete", "delete")}}
- {{jsxref("Instructions/while", "do")}}
- {{jsxref("Instructions/if...else", "else")}}
- {{jsxref("Instructions/export", "export")}}
- {{jsxref("Classes/extends","extends")}}
- {{jsxref("Instructions/try...catch", "finally")}}
- {{jsxref("Instructions/for", "for")}}
- {{jsxref("Instructions/function", "function")}}
- {{jsxref("Instructions/if...else", "if")}}
- {{jsxref("Instructions/import", "import")}}
- {{jsxref("Instructions/for...in", "in")}}
- {{jsxref("Opérateurs/instanceof", "instanceof")}}
- {{jsxref("Opérateurs/L_opérateur_new", "new")}}
- {{jsxref("Instructions/return", "return")}}
- {{jsxref("Opérateurs/super", "super")}}
- {{jsxref("Instructions/switch", "switch")}}
- {{jsxref("Opérateurs/L_opérateur_this", "this")}}
- {{jsxref("Instructions/throw", "throw")}}
- {{jsxref("Instructions/try...catch", "try")}}
- {{jsxref("Opérateurs/L_opérateur_typeof", "typeof")}}
- {{jsxref("Instructions/var", "var")}}
- {{jsxref("Opérateurs/L_opérateur_void", "void")}}
- {{jsxref("Instructions/while", "while")}}
- {{jsxref("Instructions/with", "with")}}
- {{jsxref("Opérateurs/yield","yield")}}

### Mots-clés réservés pour le futur

Les mots-clés qui suivent ont été réservés pour une utilisation future dans la spécification ECMAScript. Ils n'ont actuellement aucune utilité mais pourrait être utilisés par la suite. Ils ne peuvent donc pas être utilisés comme identifiants. Ces mots-clés ne peuvent être utilisés ni en mode strict ni en mode non strict.

- `enum`
- `await` (lorsqu'il est utilisé dans le contexte d'un module)

Les mots-clés suivants sont réservés dans du code en mode strict :

- `implements`
- {{jsxref("Instructions/let", "let")}}
- `package`
- `protected`
- `static`
- `interface`
- `private`
- `public`

#### Mots-clés réservés pour un usage future dans les anciens standards

Les mots-clés suivants sont réservés dans les anciennes spécifications ECMAScript (ECMAScript 1 à 3).

- `abstract`
- `boolean`
- `byte`
- `char`
- `double`
- `final`
- `float`
- `goto`
- `int`
- `long`
- `native`
- `short`
- `synchronized`
- `throws`
- `transient`
- `volatile`

Par ailleurs, les littéraux `null`, `true`, et `false` sont réservés dans ECMAScript pour leur usage normal.

### Utilisation des mots-clés réservés

Les mots-clés réservés ne le sont que pour les identifiants (et non pour les `IdentifierNames`) . Comme décrit dans [es5.github.com/#A.1](http://es5.github.com/#A.1), dans l'exemple qui suit, on a, légalement, des `IdentifierNames` qui utilisent des `ReservedWords`.

```js
a.import
a["import"]
a = { import: "test" }.
```

En revanche, dans ce qui suit, c'est illégal car c'est un identifiant. Un identifiant peut être un `IdentifierName` mais pas un mot-clé réservé. Les identifiants sont utilisés pour les `FunctionDeclaration` (déclarations de fonction), les `FunctionExpression` (expressions de fonction), les `VariableDeclaration` (déclarations de variable)`.`

```js
function import() {} // Illégal.
```

## Littéraux

### Littéral `null`

Voir aussi la page {{jsxref("null")}} pour plus d'informations.

```js
null;
```

### Littéraux booléens

Voir aussi la page {{jsxref("Boolean")}} pour plus d'informations.

```js
true;
false;
```

### Littéraux numériques

#### Décimaux

```js
1234567890;
42;

// Attention à l'utilisation de zéros en début :

0888; // 888 est compris comme décimal
0777; // est compris comme octal et égale 511 en décimal
```

Les littéraux décimaux peuvent commencer par un zéro (`0`) suivi d'un autre chiffre. Mais si tous les chiffres après le 0 sont (strictement) inférieurs à 8, le nombre sera analysé comme un nombre octal. Cela n'entraînera pas d'erreur JavaScript, voir [bug Firefox 957513](https://bugzil.la/957513). Voir aussi la page sur {{jsxref("parseInt", "parseInt()")}}.

#### Binaires

La représentation binaire des nombres peut être utilisée avec une syntaxe qui comporte un zéro (0) suivi par le caractère latin "B" (minuscule ou majuscule) (`0b` ou `0B`). Cette syntaxe est apparue avec ECMAScript 2015 et il faut donc faire attention au tableau de compatibilité pour cette fonctionnalité. Si les chiffres qui composent le nombre ne sont pas 0 ou 1, cela entraînera une erreur {{jsxref("SyntaxError")}} : "Missing binary digits after 0b".

```js
var FLT_SIGNBIT = 0b10000000000000000000000000000000; // 2147483648
var FLT_EXPONENT = 0b01111111100000000000000000000000; // 2139095040
var FLT_MANTISSA = 0b00000000011111111111111111111111; // 8388607
```

#### Octaux

La syntaxe pour représenter des nombres sous forme octale est : un zéro (0), suivi par la lettre latine "O" (minuscule ou majuscule) (ce qui donne `0o` ou `0O)`. Cette syntaxe est apparue avec ECMAScript 2015 et il faut donc faire attention au tableau de compatibilité pour cette fonctionnalité. Si les chiffres qui composent le nombre ne sont pas compris entre 0 et 7, cela entraînera une erreur {{jsxref("SyntaxError")}} : "Missing octal digits after 0o".

```js
var n = 0o755; // 493
var m = 0o644; // 420

// Aussi possible en utilisant des zéros en début du nombre (voir la note ci-avant)
0755;
0644;
```

#### Hexadécimaux

Les littéraux hexadécimaux ont pour syntaxe : un zéro (0), suivi par la lettre latine "X" (minuscule ou majuscule) (ce qui donne `0x` ou `0X)`. Si les chiffres qui composent le nombre sont en dehors des unités hexadécimales (0123456789ABCDEF), cela entraînera une erreur {{jsxref("SyntaxError")}} : "Identifier starts immediately after numeric literal".

```js
0xfffffffffffffffff; // 295147905179352830000
0x123456789abcdef; // 81985529216486900
0xa; // 10
```

#### Littéraux `BigInt`

Le type {{jsxref("BigInt")}} est un type numérique primitif de JavaScript qui permet de représenter des entiers avec une précision arbitraire. De tels littéraux s'écrivent en ajoutant un `n` à la fin d'un entier.

```js
123456789123456789n (nombre décimal, en base 10)
0o7777777777777777n (nombre octal, en base 8)
0x123456789ABCDEF1n (nombre hexadécimal, en base 16)
0b0101010101110101n (nombre binaire, en base 2)
```

Voir aussi [le paragraphe sur les grands entiers/BigInt sur les structures de données en JavaScript](/fr/docs/Web/JavaScript/Structures_de_données#Le_type_BigInt).

### Littéraux objets

Voir aussi les pages {{jsxref("Object")}} et {{jsxref("Opérateurs/Initialisateur_objet","Initialisateur d'objet","",1)}} pour plus d'informations.

```js
var o = { a: "toto", b: "truc", c: 42 };

// notation raccourcie depuis ES6
var a = "toto",
  b = "truc",
  c = 42;
var o = { a, b, c };
// plutôt que
var o = { a: a, b: b, c: c };
```

### Littéraux de tableaux

Voir aussi la page {{jsxref("Array")}} pour plus d'informations.

```js
[1954, 1974, 1990, 2014];
```

### Littéraux de chaînes de caractères

Un littéral de chaîne de caractères correspond à zéro ou plusieurs codets Unicode entourés de simples ou de doubles quotes. Les codets Unicode peuvent également être représentés avec des séquences d'échappements. Tous les codets peuvent apparaître dans un littéral de chaîne de caractères à l'exception de ces trois codets :

- U+005C \ (barre oblique inverse)
- U+000D (retour chariot, _carriage return_, _CR_)
- U+000A (saut de ligne, _line feed_, _LF_)

Avant la proposition consistant à rendre les chaînes JSON valides selon ECMA-262, les caractères U+2028 et U+2029 étaient également interdits.

Tous les codets peuvent être écrits sous la forme d'une séquence d'échappement. Les littéraux de chaînes de caractères sont évalués comme des valeurs `String` ECMAScript. Lorsque ces valeurs `String` sont générées, les codets Unicode sont encodés en UTF-16.

```js-nolint
'toto';
"truc";
```

#### Séquence d'échappement hexadécimale

Une séquence d'échappement hexadécimale consiste en la succession de `\x` et de deux chiffres hexadécimaux représentant un codet sur l'intervalle 0x0000 à 0x00FF.

```js
"\xA9"; // "©"
```

#### Séquence d'échappement Unicode

La séquence d'échappement Unicode est composée de `\u` suivi de quatre chiffres hexadécimaux. Chacun de ces chiffres définit un caractères sur deux octets selon l'encodage UTF-16. Pour les codes situés entre `U+0000` et `U+FFFF`, les chiffres à utiliser sont identiques au code. Pour les codes supérieurs, il faudra utiliser deux séquences d'échappement dont chacune représentera un demi-codet de la paire de _surrogates_.

Voir aussi {{jsxref("String.fromCharCode()")}} et {{jsxref("String.prototype.charCodeAt()")}}.

```js
"\u00A9"; // "©" (U+A9)
```

#### Échappement de points de code Unicode

Apparu avec ECMAScript 2015, l'échappement de points de code Unicode permet d'échapper n'importe quel caractère en utilisant une notation hexadécimale. Il est possible de le faire pour échapper les points de code Unicode dont la représentation va jusqu'à `0x10FFFF`. Avec la séquence « simple » d'échappement Unicode, il était nécessaire d'échapper respectivement les deux demi-codets d'une paire si on voulait échapper le caractère correspondant, avec cette nouvelle méthode, ce n'est plus nécessaire de faire la distinction.

Voir également {{jsxref("String.fromCodePoint()")}} et {{jsxref("String.prototype.codePointAt()")}}.

```js
"\u{2F804}"; // CJK COMPATIBILITY IDEOGRAPH-2F804 (U+2F804)

// avec l'ancienne méthode d'échappement, cela aurait été écrit
// avec une paire de surrogates
"\uD87E\uDC04";
```

### Littéraux d'expressions rationnelles

Voir la page [`RegExp`](/fr/docs/Web/JavaScript/Reference/Objets_globaux/RegExp) pour plus d'informations.

```js
/ab+c/g

// Un littéral pour une expression rationnelle
// vide. Le groupe non-capturant est utilisé pour
// lever l'ambigüité avec les commentaires
/(?:)/
```

### Littéraux modèles (gabarits ou _templates_)

Voir également la page sur [les gabarits de chaînes de caractères](/fr/docs/Web/JavaScript/Reference/Gabarit_chaînes_caractères) pour plus d'informations.

```js
`chaîne de caractères`;

`chaîne de caractères ligne 1
 chaîne de caractères ligne 2`;

`chaîne1 ${expression} chaîne2`;

tag`chaîne1 ${expression} chaîne2`;
```

## Insertion automatique de points-virgules

Certaines [instructions JavaScript](/fr/docs/Web/JavaScript/Reference/Statements) doivent finir par un point-virgule et sont donc concernées par l'insertion automatique de points-virgules (ASI pour _automatic semicolon insertion_ en anglais) :

- Instruction vide
- instruction de variable, `let`, `const`
- `import`, `export`, déclaration de module
- Instruction d'expression
- `debugger`
- `continue`, `break`, `throw`
- `return`

La spécification ECMAScript mentionne [trois règles quant à l'insertion de points-virgules](https://tc39.github.io/ecma262/#sec-rules-of-automatic-semicolon-insertion) :

1\. Un point-vrigule est inséré avant un [terminateur de ligne](#Line_terminators) ou une accolade ("}") quand celui ou celle-ci n'est pas autorisé par la grammaire

```js
{ 1 2 } 3
// est donc transformé, après ASI, en :
{ 1 2 ;} 3;
```

2\. Un point-virgule est inséré à la fin lorsqu'on détecte la fin d'une série de jetons en flux d'entrée et que le parseur est incapable d'analyser le flux d'entrée comme un programme complet.

Ici `++` n'est pas traité comme [opérateur postfixe](/fr/docs/Web/JavaScript/Reference/Operators/Arithmetic_Operators#Increment) s'appliquant à la variable `b` car il y a un terminateur de ligne entre `b` et `++`.

```js
a = b;
++c;

// devient, après ASI :

a = b;
++c;
```

3\. Un point-virgule est inséré à la fin, lorsqu'une instruction, à production limitée pour la grammaire, est suivie par un terminateur de ligne. Les instructions concernées par cette règle sont :

- Expressions postfixes (`++` et `--`)
- `continue`
- `break`
- `return`
- `yield`, `yield*`
- `module`

```js-nolint
return
a + b

// est transformé, après ASI, en :

return;
a + b;
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Jeff Walden : Nombres binaires et forme octale (en anglais)](http://whereswalden.com/2013/08/12/micro-feature-from-es6-now-in-firefox-aurora-and-nightly-binary-and-octal-numbers/)
- [Mathias Bynens : Séquences d'échappements de caractères (en anglais)](http://mathiasbynens.be/notes/javascript-escapes)
- {{jsxref("Boolean")}}
- {{jsxref("Number")}}
- {{jsxref("RegExp")}}
- {{jsxref("String")}}
