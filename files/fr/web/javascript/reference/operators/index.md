---
title: Expressions et opérateurs
slug: Web/JavaScript/Reference/Operators
l10n:
  sourceCommit: 5c8d0ac21db572edebbd4ad428efca0af3ec1734
---

Ce chapitre documente l'ensemble des opérateurs, expressions et mots-clés pour le langage JavaScript.

## Expressions et opérateurs par catégorie

Pour une liste triée par ordre alphabétique, voir sur la barre de navigation à gauche.

### Expressions primaires

Les mots-clés de base et les expressions générales en JavaScript. Ces expressions ont la plus haute priorité (plus élevée que celle des [opérateurs](/fr/docs/Web/JavaScript/Reference/Operators/Operator_precedence)).

- {{JSxRef("this")}}
  - : Le mot-clé `this` fait référence à une propriété spéciale d'un contexte d'exécution.
- [Littéraux](/fr/docs/Web/JavaScript/Reference/Lexical_grammar#littéraux)
  - : Littéraux de base `null`, booléens, nombres et chaînes de caractères.
- {{JSxRef("Array", "[]")}}
  - : Syntaxe d'initialisation/littérale d'un tableau.
- {{JSxRef("Operators/Object_initializer", "{}")}}
  - : Syntaxe d'initialisation/littérale d'un objet.
- {{JSxRef("Operators/function", "function")}}
  - : Le mot-clé `function` définit une expression de fonction.
- {{JSxRef("Operators/class", "class")}}
  - : Le mot-clé `class` définit une expression de classe.
- {{JSxRef("Operators/function*", "function*")}}
  - : Le mot-clé `function*` définit une expression de fonction génératrice.
- {{JSxRef("Operators/async_function", "async function")}}
  - : Le mot-clé `async function` définit une expression de fonction asynchrone.
- {{JSxRef("Operators/async_function*", "async function*")}}
  - : Les mots-clés `async function*` définissent une expression de fonction génératrice asynchrone.
- {{JSxRef("RegExp", "/ab+c/i")}}
  - : Syntaxe littérale des expressions régulières.
- {{JSxRef("Template_literals", "`string`")}}
  - : Syntaxe des littéraux gabarits.
- {{JSxRef("Operators/Grouping", "( )")}}
  - : Opérateur de regroupement.

### Expression « vers la gauche »

Les valeurs situées à gauche sont la cible de l'affectation.

- {{JSxRef("Operators/Property_accessors", "Accesseurs de propriété", "", 1)}}
  - : Les opérateurs d'accès aux membres permettent d'accéder à une propriété ou à une méthode d'un objet (`object.property` et `object["property"]`).
- {{JSxRef("Operators/Optional_chaining", "?.")}}
  - : L'opérateur de chaînage optionnel retourne `undefined` au lieu de provoquer une erreur si une référence est [&équivalent à nulle](/fr/docs/Glossary/Nullish) ([`null`](/fr/docs/Web/JavaScript/Reference/Operators/null) ou [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined)).
- {{JSxRef("new")}}
  - : L'opérateur `new` crée une instance d'un constructeur.
- {{JSxRef("Operators/new.target", "new.target")}}
  - : Dans les constructeur, `new.target` fait référence au constructeur qui est invoqué par {{JSxRef("new")}}.
- {{JSxRef("Operators/import.meta", "import.meta")}}
  - : Un objet exposant des métadonnées spécifiques au contexte à un module JavaScript.
- {{JSxRef("Operators/super", "super")}}
  - : Le mot-clé `super` appelle le constructeur parent ou permet d'accéder aux propriétés de l'objet parent.
- {{JSxRef("Operators/import", "import()")}}
  - : La syntaxe `import()` permet de charger un module de manière asynchrone et dynamique dans un environnement qui n'est pas nécessairement un module.

### Incrémentation et décrémentation

Des opérateurs préfixes ou suffixes pour incrémenter/décrémenter.

- {{JSxRef("Operators/Increment", "A++")}}
  - : L'opérateur d'incrémentation suffixe.
- {{JSxRef("Operators/Decrement", "A--")}}
  - : L'opérateur de décrémentation suffixe.
- {{JSxRef("Operators/Increment", "++A")}}
  - : L'opérateur d'incrémentation préfixe.
- {{JSxRef("Operators/Decrement", "--A")}}
  - : L'opérateur de décrémentation préfixe.

### Opérateurs unaires

Une opération unaire est une opération qui ne manipule qu'un seul opérande.

- {{JSxRef("delete")}}
  - : L'opérateur `delete` supprime une propriété dans un objet.
- {{JSxRef("Operators/void", "void")}}
  - : L'opérateur `void` évalue une expression et ignore sa valeur de retour.
- {{JSxRef("Operators/typeof", "typeof")}}
  - : L'opérateur `typeof` détermine le type d'un objet donné.
- {{JSxRef("Operators/Unary_plus", "+")}}
  - : L'opérateur plus unaire convertit son opérande en type `Number`.
- {{JSxRef("Operators/Unary_negation", "-")}}
  - : L'opérateur de négation unaire convertit son opérande en type `Number`, puis le rend négatif.
- {{JSxRef("Operators/Bitwise_NOT", "~")}}
  - : L'opérateur NOT binaire.
- {{JSxRef("Operators/Logical_NOT", "!")}}
  - : L'opérateur NOT logique.
- {{JSxRef("Operators/await", "await")}}
  - : Met en pause puis reprend une fonction asynchrone et attend que la promesse soit complétée/rompue.

### Opérateurs arithmétiques

Les opérateurs arithmétiques prennent des valeurs numériques (littéraux ou variables) comme opérandes et retournent une seule valeur numérique.

- {{JSxRef("Operators/Exponentiation", "**")}}
  - : L'opérateur d'exponentiation.
- {{JSxRef("Operators/Multiplication", "*")}}
  - : L'opérateur de multiplication.
- {{JSxRef("Operators/Division", "/")}}
  - : L'opérateur de division.
- {{JSxRef("Operators/Remainder", "%")}}
  - : L'opérateur de reste.
- {{JSxRef("Operators/Addition", "+")}} (Plus)
  - : L'opérateur d'addition.
- {{JSxRef("Operators/Subtraction", "-")}}
  - : L'opérateur de soustraction.

### Opérateurs relationnels

Un opérateur de comparaison compare ses opérandes et renvoie une valeur booléenne en fonction de la vérité de cette comparaison.

- {{JSxRef("Operators/Less_than", "&lt;")}} (Moins que)
  - : L'opérateur d'infériorité stricte.
- {{JSxRef("Operators/Greater_than", "&gt;")}} (Plus que)
  - : L'opérateur de supériorité stricte.
- {{JSxRef("Operators/Less_than_or_equal", "&lt;=")}}
  - : L'opérateur d'infériorité.
- {{JSxRef("Operators/Greater_than_or_equal", "&gt;=")}}
  - : L'opérateur de supériorité.
- {{JSxRef("instanceof")}}
  - : L'opérateur `instanceof` détermine si un objet est une instance d'un autre objet.
- {{JSxRef("Operators/in", "in")}}
  - : L'opérateur `in` détermine la présence d'une propriété donnée au sein d'un objet.

> [!NOTE]
> `=>` n'est [pas un opérateur](#que_sont_les_opérateurs), mais la notation utilisée pour [les fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Opérateurs d'égalité

Le résultat de l'évaluation fournie par un opérateur d'égalité est toujours un booléen, fonction de la vérité de la comparaison effectuée.

- {{JSxRef("Operators/Equality", "==")}}
  - : L'opérateur d'égalité.
- {{JSxRef("Operators/Inequality", "!=")}}
  - : L'opérateur d'inégalité.
- {{JSxRef("Operators/Strict_equality", "===")}}
  - : L'opérateur d'égalité stricte.
- {{JSxRef("Operators/Strict_inequality", "!==")}}
  - : L'opérateur d'inégalité stricte.

### Opérateurs de décalage binaires

Ces opérations permettent de décaler les bits de la représentation binaire de l'opérande.

- {{JSxRef("Operators/Left_shift", "&lt;&lt;")}}
  - : L'opérateur de décalage binaire à gauche.
- {{JSxRef("Operators/Right_shift", "&gt;&gt;")}}
  - : L'opérateur de décalage binaire à droite.
- {{JSxRef("Operators/Unsigned_right_shift", "&gt;&gt;&gt;")}}
  - : L'opérateur de décalage binaire à droite non signé.

### Opérateurs binaires booléens

Les opérateurs binaires traitent leurs opérandes comme un ensemble de 32 bits (zéros et uns) et retournent des valeurs numériques standard en JavaScript.

- {{JSxRef("Operators/Bitwise_AND", "&amp;")}}
  - : ET/AND binaire.
- {{JSxRef("Operators/Bitwise_OR", "|")}}
  - : OU/OR binaire.
- {{JSxRef("Operators/Bitwise_XOR", "^")}}
  - : OU exclusif/XOR binaire.

### Opérateurs logiques

Les opérateurs logiques manipulent des valeurs booléennes (logiques) et ont un comportement de [court-circuit](/fr/docs/Web/JavaScript/Reference/Operators/Operator_precedence#court-circuiter).

- {{JSxRef("Operators/Logical_AND", "&amp;&amp;")}}
  - : ET/AND logique.
- {{JSxRef("Operators/Logical_OR", "||")}}
  - : OU/OR logique.
- {{JSxRef("Operators/Nullish_coalescing", "??")}}
  - : L'opérateur de coalescence des nuls.

### Opérateur conditionnel (ternaire)

- {{JSxRef("Operators/Conditional_operator", "(condition ? ifTrue : ifFalse)")}}
  - : L'opérateur conditionnel retourne une valeur parmi deux selon la valeur logique de la condition portée par le premier opérande.

### Opérateurs d'affectation

Un opérateur d'affectation permet d'affecter une valeur à son opérande gauche en fonction de la valeur de son opérande droit.

- {{JSxRef("Operators/Assignment", "=")}}
  - : L'opérateur d'affectation.
- {{JSxRef("Operators/Multiplication_assignment", "*=")}}
  - : L'opérateur de multiplication et d'affectation.
- {{JSxRef("Operators/Division_assignment", "/=")}}
  - : L'opérateur de division et d'affectation.
- {{JSxRef("Operators/Remainder_assignment", "%=")}}
  - : L'opérateur de reste et d'affectation.
- {{JSxRef("Operators/Addition_assignment", "+=")}}
  - : L'opérateur d'addition et d'affectation.
- {{JSxRef("Operators/Subtraction_assignment", "-=")}}
  - : L'opérateur de soustraction et d'affectation.
- {{JSxRef("Operators/Left_shift_assignment", "&lt;&lt;=")}}
  - : L'opérateur de décalage binaire à gauche et d'affectation.
- {{JSxRef("Operators/Right_shift_assignment", "&gt;&gt;=")}}
  - : L'opérateur de décalage binaire à droite et d'affectation.
- {{JSxRef("Operators/Unsigned_right_shift_assignment", "&gt;&gt;&gt;=")}}
  - : L'opérateur de décalage binaire à droite non signé et d'affectation.
- {{JSxRef("Operators/Bitwise_AND_assignment", "&amp;=")}}
  - : L'opérateur ET/AND binaire et d'affectation.
- {{JSxRef("Operators/Bitwise_XOR_assignment", "^=")}}
  - : L'opérateur OU exclusif/XOR binaire et d'affectation.
- {{JSxRef("Operators/Bitwise_OR_assignment", "|=")}}
  - : L'opérateur OU/OR binaire et d'affectation.
- {{JSxRef("Operators/Exponentiation_assignment", "**=")}}
  - : L'opérateur d'exponentiation et d'affectation.
- {{JSxRef("Operators/Logical_AND_assignment", "&amp;&amp;=")}}
  - : L'opérateur ET/AND logique et d'affectation.
- {{JSxRef("Operators/Logical_OR_assignment", "||=")}}
  - : L'opérateur OU/OR logique et d'affectation.
- {{JSxRef("Operators/Nullish_coalescing_assignment", "??=")}}
  - : L'opérateur de coalescence des nuls et d'affectation.
- [`[a, b] = arr`, `{ a, b } = obj`](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring)
  - : L'affectation par déstructuration permet d'assigner les propriétés d'un tableau ou d'un objet à des variables en utilisant une syntaxe qui ressemble à celle des littéraux de tableau ou d'objet.

### Les opérateurs de générateur

- {{JSxRef("Operators/yield", "yield")}}
  - : Met en pause et reprend une fonction génératrice.
- {{JSxRef("Operators/yield*", "yield*")}}
  - : Délègue à une autre fonction génératrice ou à un objet itérable.

### La syntaxe de propagation

- {{JSxRef("Operators/Spread_syntax", "...obj")}}
  - : La syntaxe de propagation permet à un itérable, tel qu'un tableau ou une chaîne de caractères, d'être développé dans des endroits où zéro ou plusieurs arguments (pour les appels de fonction) ou éléments (pour les littéraux de tableau) sont attendus. Dans un littéral d'objet, la syntaxe de propagation énumère les propriétés d'un objet et ajoute les paires clé-valeur à l'objet en cours de création.

### Opérateur virgule

- {{JSxRef("Operators/Comma_operator", ",")}}
  - : L'opérateur virgule permet d'évaluer plusieurs expressions dans une seule instruction et retourne le résultat de la dernière expression.

## Que sont les opérateurs ?

Comme l'explique la section [Que sont les instructions, les déclarations et les expressions&nbsp;?](/fr/docs/Web/JavaScript/Reference/Statements#que_sont_les_instructions_les_déclarations_et_les_expressions), une expression est un élément fondamental qui s'évalue en une valeur. Les instructions, les déclarations et les expressions peuvent toutes définir des emplacements précis où les expressions sont acceptées. Lorsqu'une expression contient des emplacements pour d'autres expressions imbriquées, les parties qui ne sont pas des emplacements sont appelées des opérateurs.

Par exemple, la syntaxe d'une expression appelée [addition](/fr/docs/Web/JavaScript/Reference/Operators/Addition) est `expression + expression` (si vous consultez la spécification, les opérandes sont appelés _expression additive_ et _expression multiplicative_, qui sont tous deux des sous-ensembles _d'expression_, mais il s'agit du mécanisme de la spécification pour définir la [priorité et l'associativité](/fr/docs/Web/JavaScript/Reference/Operators/Operator_precedence), ce qui ne concerne pas notre propos). En dehors des deux emplacements d'expression, l'entité de code introduite est simplement `+`&nbsp;: le terme _opérateur d'addition_. De même, la syntaxe de l'expression de [production](/fr/docs/Web/JavaScript/Reference/Operators/yield) est `yield expression`, donc `yield` est appelé l'opérateur. Autrement dit, chaque opérateur correspond à une expression.

MDN considère également les expressions sans emplacements, comme [`null`](/fr/docs/Web/JavaScript/Reference/Operators/null), comme des opérateurs selon la définition ci-dessus, bien que nous les appelions presque toujours «&nbsp;syntaxe&nbsp;» ou «&nbsp;expression&nbsp;».

Une expression n'a pas besoin de prendre un nombre fixe d'emplacements. Par exemple, l'expression littérale de tableau `[expression, expression, expression]` peut prendre un nombre arbitraire d'emplacements d'expression. La partie `[,,]` peut être appelée un «&nbsp;opérateur&nbsp;». Le MDN évite cet usage, mais vous pouvez le rencontrer dans des langages de programmation fonctionnelle comme [Haskell <sup>(angl.)</sup>](https://www.haskell.org/onlinereport/haskell2010/haskellch3.html).

La définition des opérateurs devient moins précise avec certaines autres entités de code&nbsp;: que se passe-t-il si une expression possède un emplacement qui n'est pas une expression, ou si une entité de code combinée à une expression ne forme pas une expression&nbsp;? Appelons-nous tout de même cette entité de code un opérateur&nbsp;?

- Dans l'expression du [chaînage optionnel](/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining) `toto?.truc`, `toto` est une expression, mais `truc` doit être un identifiant et ne s'évalue pas en une valeur. Considérons-nous toujours `?.` comme un opérateur&nbsp;?
- Dans l'expression de la [fonction fléchée](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions) `arg => body`, `body` peut être une expression (bien qu'il puisse également s'agir d'un corps de bloc), et `arg` est simplement une liste d'arguments. Considérons-nous toujours `=>` comme un opérateur&nbsp;?
- Dans la [syntaxe de propagation](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax) `...toto`, `toto` est une expression, mais l'ensemble n'est pas une expression, car il ne s'évalue pas en une valeur — il n'a de sens que dans certaines autres expressions comme les appels de fonction, les littéraux de tableau et les littéraux d'objet. Considérons-nous toujours `...` comme un opérateur&nbsp;?

Le terme «&nbsp;opérateur&nbsp;» n'est pas défini avec précision en JavaScript, donc MDN ne donne pas de réponse définitive. Nous regroupons toutes ces constructions sous «&nbsp;Opérateurs&nbsp;», mais nous évitons de les désigner officiellement comme des opérateurs. De nombreux concepts utiles concernant les opérateurs, comme la [priorité](/fr/docs/Web/JavaScript/Reference/Operators/Operator_precedence), s'appliquent tout de même à ces constructions, quelle que soit leur nature exacte.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Précédence des opérateurs](/fr/docs/Web/JavaScript/Reference/Operators/Operator_precedence)
