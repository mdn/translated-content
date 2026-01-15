---
title: Référence JavaScript
short-title: Référence
slug: Web/JavaScript/Reference
l10n:
  sourceCommit: b6a36de3428f4b42c7707c8f190a349db13bf531
---

La référence JavaScript sert de répertoire de faits sur le langage JavaScript. Le langage entier y est décrit en détail. Lorsque vous écrivez du code JavaScript, vous consulterez souvent ces pages (d'où le titre «&nbsp;Référence JavaScript&nbsp;»).

Le langage JavaScript est conçu pour être utilisé dans un environnement plus large, que ce soit un navigateur, des scripts côté serveur ou similaire. Pour l'essentiel, cette référence tente de rester indépendante de l'environnement et ne cible pas spécifiquement les navigateurs web.

Si vous débutez avec JavaScript, commencez par le [guide](/fr/docs/Web/JavaScript/Guide). Une fois les bases acquises, vous pouvez utiliser la référence pour obtenir plus de détails sur les objets et les constructions du langage.

## Objets natifs

[Les différents objets natifs standard en JavaScript](/fr/docs/Web/JavaScript/Reference/Global_Objects), ainsi que leurs méthodes et propriétés.

### Propriétés de valeur

- {{JSxRef("globalThis")}}
- {{JSxRef("Infinity")}}
- {{JSxRef("NaN")}}
- {{JSxRef("undefined")}}

### Propriétés de fonction

- {{JSxRef("Global_Objects/eval", "eval()")}}
- {{JSxRef("isFinite()")}}
- {{JSxRef("isNaN()")}}
- {{JSxRef("parseFloat()")}}
- {{JSxRef("parseInt()")}}
- {{JSxRef("decodeURI()")}}
- {{JSxRef("decodeURIComponent()")}}
- {{JSxRef("encodeURI()")}}
- {{JSxRef("encodeURIComponent()")}}
- {{JSxRef("escape()")}} {{Deprecated_Inline}}
- {{JSxRef("unescape()")}} {{Deprecated_Inline}}

### Objets fondamentaux

- {{JSxRef("Object")}}
- {{JSxRef("Function")}}
- {{JSxRef("Boolean")}}
- {{JSxRef("Symbol")}}

### Objets d'erreur

- {{JSxRef("Error")}}
- {{JSxRef("AggregateError")}}
- {{JSxRef("EvalError")}}
- {{JSxRef("RangeError")}}
- {{JSxRef("ReferenceError")}}
- {{JSxRef("SuppressedError")}}
- {{JSxRef("SyntaxError")}}
- {{JSxRef("TypeError")}}
- {{JSxRef("URIError")}}
- {{JSxRef("InternalError")}} {{Non-standard_Inline}}

### Nombres et dates

- {{JSxRef("Number")}}
- {{JSxRef("BigInt")}}
- {{JSxRef("Math")}}
- {{JSxRef("Date")}}
- {{JSxRef("Temporal")}}

### Traitement du texte

- {{JSxRef("String")}}
- {{JSxRef("RegExp")}}

### Collections indexées

- {{JSxRef("Array")}}
- {{JSxRef("Int8Array")}}
- {{JSxRef("Uint8Array")}}
- {{JSxRef("Uint8ClampedArray")}}
- {{JSxRef("Int16Array")}}
- {{JSxRef("Uint16Array")}}
- {{JSxRef("Int32Array")}}
- {{JSxRef("Uint32Array")}}
- {{JSxRef("BigInt64Array")}}
- {{JSxRef("BigUint64Array")}}
- {{JSxRef("Float16Array")}}
- {{JSxRef("Float32Array")}}
- {{JSxRef("Float64Array")}}

### Collections avec clés

- {{JSxRef("Map")}}
- {{JSxRef("Set")}}
- {{JSxRef("WeakMap")}}
- {{JSxRef("WeakSet")}}

### Données structurées

- {{JSxRef("ArrayBuffer")}}
- {{JSxRef("SharedArrayBuffer")}}
- {{JSxRef("DataView")}}
- {{JSxRef("Atomics")}}
- {{JSxRef("JSON")}}

### Gestion de la mémoire

- {{JSxRef("WeakRef")}}
- {{JSxRef("FinalizationRegistry")}}

### Abstraction du contrôle

- {{JSxRef("Iterator")}}
- {{JSxRef("AsyncIterator")}}
- {{JSxRef("Promise")}}
- {{JSxRef("GeneratorFunction")}}
- {{JSxRef("AsyncGeneratorFunction")}}
- {{JSxRef("Generator")}}
- {{JSxRef("AsyncGenerator")}}
- {{JSxRef("AsyncFunction")}}
- {{JSxRef("DisposableStack")}}
- {{JSxRef("AsyncDisposableStack")}}

### Réflexion

- {{JSxRef("Reflect")}}
- {{JSxRef("Proxy")}}

### Internationalisation

- {{JSxRef("Intl")}}
- {{JSxRef("Intl.Collator")}}
- {{JSxRef("Intl.DateTimeFormat")}}
- {{JSxRef("Intl.DisplayNames")}}
- {{JSxRef("Intl.DurationFormat")}}
- {{JSxRef("Intl.ListFormat")}}
- {{JSxRef("Intl.Locale")}}
- {{JSxRef("Intl.NumberFormat")}}
- {{JSxRef("Intl.PluralRules")}}
- {{JSxRef("Intl.RelativeTimeFormat")}}
- {{JSxRef("Intl.Segmenter")}}

## Instructions

[Instructions et déclarations JavaScript](/fr/docs/Web/JavaScript/Reference/Statements).

### Contrôle du flux d'exécution

- {{JSxRef("Statements/return", "return")}}
- {{JSxRef("Statements/break", "break")}}
- {{JSxRef("Statements/continue", "continue")}}
- {{JSxRef("Statements/throw", "throw")}}
- {{JSxRef("Statements/if...else", "if...else")}}
- {{JSxRef("Statements/switch", "switch")}}
- {{JSxRef("Statements/try...catch", "try...catch")}}

### Déclarations de variables

- {{JSxRef("Statements/var", "var")}}
- {{JSxRef("Statements/let", "let")}}
- {{JSxRef("Statements/const", "const")}}
- {{JSxRef("Statements/using", "using")}}
- {{JSxRef("Statements/await_using", "await using")}}

### Fonctions et classes

- {{JSxRef("Statements/function", "function")}}
- {{JSxRef("Statements/function*", "function*")}}
- {{JSxRef("Statements/async_function", "async function")}}
- {{JSxRef("Statements/async_function*", "async function*")}}
- {{JSxRef("Statements/class", "class")}}

### Itérations

- {{JSxRef("Statements/do...while", "do...while")}}
- {{JSxRef("Statements/for", "for")}}
- {{JSxRef("Statements/for...in", "for...in")}}
- {{JSxRef("Statements/for...of", "for...of")}}
- {{JSxRef("Statements/for-await...of", "for await...of")}}
- {{JSxRef("Statements/while", "while")}}

### Autres

- {{JSxRef("Statements/Empty", "Vide", "", 1)}}
- {{JSxRef("Statements/block", "Bloc", "", 1)}}
- {{JSxRef("Statements/Expression_statement", "Instruction d'expression", "", 1)}}
- {{JSxRef("Statements/debugger", "debugger")}}
- {{JSxRef("Statements/export", "export")}}
- {{JSxRef("Statements/import", "import")}}
- {{JSxRef("Statements/label", "label", "", 1)}}
- {{JSxRef("Statements/with", "with")}} {{Deprecated_Inline}}

## Expressions et opérateurs

[Expressions et opérateurs JavaScript](/fr/docs/Web/JavaScript/Reference/Operators).

### Expressions primaires

- {{JSxRef("Operators/this", "this")}}
- [Litéraux](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#litéraux)
- {{JSxRef("Array", "[]")}}
- {{JSxRef("Operators/Object_initializer", "{}")}}
- {{JSxRef("Operators/function", "function")}}
- {{JSxRef("Operators/class", "class")}}
- {{JSxRef("Operators/function*", "function*")}}
- {{JSxRef("Operators/async_function", "async function")}}
- {{JSxRef("Operators/async_function*", "async function*")}}
- {{JSxRef("RegExp", "/ab+c/i")}}
- {{JSxRef("Template_literals", "`string`")}}
- {{JSxRef("Operators/Grouping", "( )")}}

### Expressions vers la gauche

- {{JSxRef("Operators/Property_accessors", "Accesseurs de propriété", "", 1)}}
- {{JSxRef("Operators/Optional_chaining", "?.")}}
- {{JSxRef("Operators/new", "new")}}
- {{JSxRef("Operators/new.target", "new.target")}}
- {{JSxRef("Operators/import.meta", "import.meta")}}
- {{JSxRef("Operators/super", "super")}}
- {{JSxRef("Operators/import", "import()")}}

### Incrément & décrément

- {{JSxRef("Operators/Increment", "A++")}}
- {{JSxRef("Operators/Decrement", "A--")}}
- {{JSxRef("Operators/Increment", "++A")}}
- {{JSxRef("Operators/Decrement", "--A")}}

### Opérateurs unaires

- {{JSxRef("Operators/delete", "delete")}}
- {{JSxRef("Operators/void", "void")}}
- {{JSxRef("Operators/typeof", "typeof")}}
- {{JSxRef("Operators/Unary_plus", "+")}}
- {{JSxRef("Operators/Unary_negation", "-")}}
- {{JSxRef("Operators/Bitwise_NOT", "~")}}
- {{JSxRef("Operators/Logical_NOT", "!")}}
- {{JSxRef("Operators/await", "await")}}

### Opérateurs arithmétiques

- {{JSxRef("Operators/Exponentiation", "**")}}
- {{JSxRef("Operators/Multiplication", "*")}}
- {{JSxRef("Operators/Division", "/")}}
- {{JSxRef("Operators/Remainder", "%")}}
- {{JSxRef("Operators/Addition", "+")}} (Plus)
- {{JSxRef("Operators/Subtraction", "-")}}

### Opérateurs relationnels

- {{JSxRef("Operators/Less_than", "&lt;")}} (Inférieur à)
- {{JSxRef("Operators/Greater_than", "&gt;")}} (Supérieur à)
- {{JSxRef("Operators/Less_than_or_equal", "&lt;=")}}
- {{JSxRef("Operators/Greater_than_or_equal", "&gt;=")}}
- {{JSxRef("Operators/instanceof", "instanceof")}}
- {{JSxRef("Operators/in", "in")}}

### Opérateurs d'égalité

- {{JSxRef("Operators/Equality", "==")}}
- {{JSxRef("Operators/Inequality", "!=")}}
- {{JSxRef("Operators/Strict_equality", "===")}}
- {{JSxRef("Operators/Strict_inequality", "!==")}}

### Opérateurs de décalage binaire

- {{JSxRef("Operators/Left_shift", "&lt;&lt;")}}
- {{JSxRef("Operators/Right_shift", "&gt;&gt;")}}
- {{JSxRef("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}

### Opérateurs logiques binaires

- {{JSxRef("Operators/Bitwise_AND", "&amp;")}}
- {{JSxRef("Operators/Bitwise_OR", "|")}}
- {{JSxRef("Operators/Bitwise_XOR", "^")}}

### Opérateurs logiques

- {{JSxRef("Operators/Logical_AND", "&amp;&amp;")}}
- {{JSxRef("Operators/Logical_OR", "||")}}
- {{JSxRef("Operators/Nullish_coalescing", "??")}}

### Opérateur conditionnel (opérateur ternaire)

- {{JSxRef("Operators/Conditional_operator", "(condition ? ifTrue : ifFalse)")}}

### Opérateurs d'affectation

- {{JSxRef("Operators/Assignment", "=")}}
- {{JSxRef("Operators/Multiplication_assignment", "*=")}}
- {{JSxRef("Operators/Division_assignment", "/=")}}
- {{JSxRef("Operators/Remainder_assignment", "%=")}}
- {{JSxRef("Operators/Addition_assignment", "+=")}}
- {{JSxRef("Operators/Subtraction_assignment", "-=")}}
- {{JSxRef("Operators/Left_shift_assignment", "&lt;&lt;=")}}
- {{JSxRef("Operators/Right_shift_assignment", "&gt;&gt;=")}}
- {{JSxRef("Operators/Unsigned_right_shift_assignment", "&gt;&gt;&gt;=")}}
- {{JSxRef("Operators/Bitwise_AND_assignment", "&amp;=")}}
- {{JSxRef("Operators/Bitwise_XOR_assignment", "^=")}}
- {{JSxRef("Operators/Bitwise_OR_assignment", "|=")}}
- {{JSxRef("Operators/Exponentiation_assignment", "**=")}}
- {{JSxRef("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
- {{JSxRef("Operators/Logical_OR_assignment", "||=")}}
- {{JSxRef("Operators/Nullish_coalescing_assignment", "??=")}}
- [`{a, b} = {a:1, b:2}`](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring)

### Opérateurs de génération

- {{JSxRef("Operators/yield", "yield")}}
- {{JSxRef("Operators/yield*", "yield*")}}

### Syntaxe de déploiement

- {{JSxRef("Operators/Spread_syntax", "...obj")}}

### Opérateur virgule

- {{JSxRef("Operators/Comma_operator", ",")}}

## Fonctions

[Les fonctions JavaScript](/fr/docs/Web/JavaScript/Reference/Functions)

- {{JSxRef("Functions/Arrow_functions", "Fonctions fléchées", "", 1)}}
- {{JSxRef("Functions/Default_parameters", "Paramètres par défaut", "", 1)}}
- {{JSxRef("Functions/rest_parameters", "Paramètres rest", "", 1)}}
- {{JSxRef("Functions/arguments", "arguments")}}
- {{JSxRef("Functions/Method_definitions", "Définitions de méthodes", "", 1)}}
- {{JSxRef("Functions/get", "Accesseur", "", 1)}}
- {{JSxRef("Functions/set", "Mutateur", "", 1)}}

## Classes

[Classes JavaScript](/fr/docs/Web/JavaScript/Reference/Classes)

- {{JSxRef("Classes/Constructor", "constructor")}}
- {{JSxRef("Classes/extends", "extends")}}
- [Éléments privés](/fr/docs/Web/JavaScript/Reference/Classes/Private_elements)
- [Champs de classe publics](/fr/docs/Web/JavaScript/Reference/Classes/Public_class_fields)
- {{JSxRef("Classes/static", "static")}}
- [Blocs d'initialisation statique](/fr/docs/Web/JavaScript/Reference/Classes/Static_initialization_blocks)

## Expressions régulières

[Expressions régulières JavaScript](/fr/docs/Web/JavaScript/Reference/Regular_expressions)

- [Référence arrière&nbsp;: `\1`, `\2`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Backreference)
- [Groupe capturant&nbsp;: `(...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Capturing_group)
- [Classe de caractères&nbsp;: `[...]`, `[^...]`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class)
- [Échappement de classe de caractères&nbsp;: `\d`, `\D`, `\w`, `\W`, `\s`, `\S`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_class_escape)
- [Échappement de caractère&nbsp;: `\n`, `\u{...}`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Character_escape)
- [Disjonction&nbsp;: `|`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Disjunction)
- [Assertion de limite d'entrée&nbsp;: `^`, `$`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Input_boundary_assertion)
- [Caractère littéral&nbsp;: `a`, `b`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Literal_character)
- [Assertion de prévisualisation&nbsp;: `(?=...)`, `(?!...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookahead_assertion)
- [Assertion de rétrovisualisation&nbsp;: `(?<=...)`, `(?<!...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Lookbehind_assertion)
- [Modificateur&nbsp;: `(?ims-ims:...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Modifier)
- [Référence arrière nommée&nbsp;: `\k<name>`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Named_backreference)
- [Groupe capturant nommé&nbsp;: `(?<name>...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Named_capturing_group)
- [Groupe non capturant&nbsp;: `(?:...)`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Non-capturing_group)
- [Quantificateur&nbsp;: `*`, `+`, `?`, `{n}`, `{n,}`, `{n,m}`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Quantifier)
- [Échappement de classe de caractères Unicode&nbsp;: `\p{...}`, `\P{...}`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape)
- [Joker&nbsp;: `.`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Wildcard)
- [Assertion de limite de mot&nbsp;: `\b`, `\B`](/fr/docs/Web/JavaScript/Reference/Regular_expressions/Word_boundary_assertion)

## Autres pages de référence

- [Vue d'ensemble des technologies JavaScript](/fr/docs/Web/JavaScript/Reference/JavaScript_technologies_overview)
- [Modèle d'exécution](/fr/docs/Web/JavaScript/Reference/Execution_model)
- {{JSxRef("Lexical_grammar", "Grammaire lexicale", "", 1)}}
- [Types de données et structures de données](/fr/docs/Web/JavaScript/Guide/Data_structures)
- [Protocoles d'itération](/fr/docs/Web/JavaScript/Reference/Iteration_protocols)
- [Virgules finales](/fr/docs/Web/JavaScript/Reference/Trailing_commas)
- [Erreurs](/fr/docs/Web/JavaScript/Reference/Errors)
- {{JSxRef("Strict_mode", "Mode strict", "", 1)}}
- {{JSxRef("Deprecated_and_obsolete_features", "Fonctionnalités dépréciées", "", 1)}}
