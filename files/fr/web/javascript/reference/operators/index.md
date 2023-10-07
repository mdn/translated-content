---
title: Expressions et opérateurs
slug: Web/JavaScript/Reference/Operators
---

{{jsSidebar("Operators")}}

Ce chapitre documente l'ensemble des opérateurs, expressions et mots-clés pour le langage JavaScript.

## Expressions et opérateurs par catégorie

Pour une liste triée par ordre alphabétique, voir sur la barre de navigation à gauche.

### Expressions primaires

Mots-clés de base et expressions générales en JavaScript.

- [`this`](/fr/docs/Web/JavaScript/Reference/Operators/this)
  - : Le mot-clé `this` fait référence à une propriété spéciale indiquant le contexte d'exécution.
- [`function`](/fr/docs/Web/JavaScript/Reference/Operators/function)
  - : Le mot-clé `function` définit une expression de fonction.
- [`class`](/fr/docs/Web/JavaScript/Reference/Operators/class)
  - : Le mot-clé `class` définit une expression de classe.
- [`function*`](/fr/docs/Web/JavaScript/Reference/Operators/function*)
  - : Le mot-clé `function*` définit une expression de générateur.
- [`yield`](/fr/docs/Web/JavaScript/Reference/Operators/yield)
  - : Ce mot-clé permet de suspendre ou de reprendre l'exécution d'une fonction génératrice.
- [`yield*`](/fr/docs/Web/JavaScript/Reference/Operators/yield*)
  - : Ce mot-clé délègue à une autre fonction génératrice ou à un objet itérable.
- [`async function`](/fr/docs/Web/JavaScript/Reference/Operators/async_function)
  - : Le couple de mots-clés `async function` définit une expression de fonction asynchrone.
- [`await`](/fr/docs/Web/JavaScript/Reference/Operators/await)
  - : Ce mot-clé permet de suspendre et de reprendre l'exécution d'une fonction asynchrone et d'attendre la résolution ou l'échec de la promesse.
- [`[]`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Array)
  - : Syntaxe d'initialisation littérale pour les tableaux.
- [`{}`](/fr/docs/Web/JavaScript/Reference/Operators/Object_initializer)
  - : Syntaxe d'initialisation littérale pour les objets.
- [`/ab+c/i`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp)
  - : Syntaxe pour les expressions littérales d'expressions rationnelles.
- [`( )`](/fr/docs/Web/JavaScript/Reference/Operators/Grouping)
  - : Opérateur de groupement.

### Expression « vers la gauche »

Les valeurs situées à gauche sont la cible de l'affectation.

- [Accesseurs de propriété](/fr/docs/Web/JavaScript/Reference/Operators/Property_Accessors)
  - : Les opérateurs d'accès aux membres permettent d'accéder à une propriété ou à une méthode d'un objet.
    (cela regroupe `objet.propriete` et `objet["propriete"]`).
- [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new)
  - : L'opérateur `new` crée une instance grâce à un constructeur.
- [`new.target`](/fr/docs/Web/JavaScript/Reference/Operators/new.target)
  - : Pour les constructeurs, `new.target` fait référence au constructeur invoqué avec [`new`](/fr/docs/Web/JavaScript/Reference/Operators/new).
- [`import.meta`](/fr/docs/Web/JavaScript/Reference/Statements/import.meta)
  - : Un objet qui expose des métadonnées spécifiques au contexte pour un module JavaScript.
- [`super`](/fr/docs/Web/JavaScript/Reference/Operators/super)
  - : Le mot-clé `super` appelle le constructeur parent.
- [`...obj`](/fr/docs/Web/JavaScript/Reference/Operators/Spread_syntax)
  - : La syntaxe de décomposition permet de développer une expression là où plusieurs arguments (dans le cas des appels à une fonction) ou là où plusieurs éléments (dans le cas des tableaux) sont attendus.

### Incrémentation et décrémentation

Des opérateurs préfixes ou suffixes pour incrémenter/décrémenter.

- [`A++`](/fr/docs/Web/JavaScript/Reference/Operators/Increment)
  - : L'opérateur d'incrémentation suffixe.
- [`A--`](/fr/docs/Web/JavaScript/Reference/Operators/Decrement)
  - : L'opérateur de décrémentation suffixe.
- [`++A`](/fr/docs/Web/JavaScript/Reference/Operators/Increment)
  - : L'opérateur d'incrémentation préfixe.
- [`--A`](/fr/docs/Web/JavaScript/Reference/Operators/Decrement)
  - : L'opérateur de décrémentation préfixe.

### Opérateurs unaires

Une opération unaire est une opération qui ne manipule qu'un seul opérande.

- [`delete`](/fr/docs/Web/JavaScript/Reference/Operators/delete)
  - : L'opérateur `delete` permet de supprimer une propriété d'un objet.
- [`void`](/fr/docs/Web/JavaScript/Reference/Operators/void)
  - : L'opérateur `void` permet d'ignorer la valeur de retour d'une expression.
- [`typeof`](/fr/docs/Web/JavaScript/Reference/Operators/typeof)
  - : L'opérateur `typeof` détermine le type d'un objet donné.
- [`+`](/fr/docs/Web/JavaScript/Reference/Operators/Unary_plus)
  - : L'opérateur unaire `+` convertit son opérande en une valeur de type `number`.
- [`-`](/fr/docs/Web/JavaScript/Reference/Operators/Unary_negation)
  - : L'opérateur unaire `-` convertit son opérande en nombre puis prend son opposé.
- [`~`](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_NOT)
  - : L'opérateur binaire NON.
- [`!`](/fr/docs/Web/JavaScript/Reference/Operators/Logical_NOT)
  - : L'opérateur logique NON.

### Opérateurs arithmétiques

Les opérateurs arithmétiques utilisent des valeurs numériques (littérales ou variables) pour leurs opérandes et renvoient une seule valeur numérique en résultat.

- [`+`](/fr/docs/Web/JavaScript/Reference/Operators/Addition)
  - : L'opérateur d'addition.
- [`-`](/fr/docs/Web/JavaScript/Reference/Operators/Subtraction)
  - : L'opérateur de soustraction.
- [`/`](/fr/docs/Web/JavaScript/Reference/Operators/Division)
  - : L'opérateur de division.
- [`*`](/fr/docs/Web/JavaScript/Reference/Operators/Multiplication)
  - : L'opérateur de multiplication.
- [`%`](/fr/docs/Web/JavaScript/Reference/Operators/Remainder)
  - : L'opérateur du reste.
- [`**`](/fr/docs/Web/JavaScript/Reference/Operators/Exponentiation)
  - : L'opérateur d'exponentiation.

### Opérateurs relationnels

Un opérateur de comparaison compare ses opérandes et renvoie une valeur booléenne en fonction de la vérité de cette comparaison.

- [`in`](/fr/docs/Web/JavaScript/Reference/Operators/in)
  - : L'opérateur `in` détermine la présence d'une propriété donnée au sein d'un objet.
- [`instanceof`](/fr/docs/Web/JavaScript/Reference/Operators/instanceof)
  - : L'opérateur `instanceof` détermine si un objet est une instance d'un autre objet.
- [`<`](/fr/docs/Web/JavaScript/Reference/Operators/Less_than)
  - : L'opérateur d'infériorité strict.
- [`>`](/fr/docs/Web/JavaScript/Reference/Operators/Greater_than)
  - : L'opérateur de supériorité stricte.
- [`<=`](/fr/docs/Web/JavaScript/Reference/Operators/Less_than_or_equal)
  - : L'opérateur d'infériorité.
- [`>=`](/fr/docs/Web/JavaScript/Reference/Operators/Greater_than_or_equal)
  - : L'opérateur de supériorité.

> **Note :** `=>` n'est pas un opérateur mais la notation utilisée pour [les fonctions fléchées](/fr/docs/Web/JavaScript/Reference/Functions/Arrow_functions).

### Opérateurs d'égalité

Le résultat de l'évaluation fournie par un opérateur d'égalité est toujours un booléen, fonction de la vérité de la comparaison effectuée.

- [`==`](/fr/docs/Web/JavaScript/Reference/Operators/Equality)
  - : L'opérateur d'égalité.
- [`!=`](/fr/docs/Web/JavaScript/Reference/Operators/Inequality)
  - : L'opérateur d'inégalité.
- [`===`](/fr/docs/Web/JavaScript/Reference/Operators/Strict_equality)
  - : L'opérateur d'égalité stricte.
- [`!==`](/fr/docs/Web/JavaScript/Reference/Operators/Strict_inequality)
  - : L'opérateur d'inégalité stricte.

### Opérateurs de décalage binaires

Ces opérations permettent de décaler les bits de la représentation binaire de l'opérande.

- [`<<`](/fr/docs/Web/JavaScript/Reference/Operators/Left_shift)
  - : Opérateur de décalage binaire à gauche.
- [`>>`](/fr/docs/Web/JavaScript/Reference/Operators/Right_shift)
  - : Opérateur de décalage binaire à droite.
- [`>>>`](/fr/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift)
  - : Opérateur de décalage binaire à droite non signé.

### Opérateurs binaires booléens

Ces opérateurs manipulent leurs opérandes comme des ensembles de 32 bits et renvoient des valeurs numériques standard.

- [`&`](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_AND)
  - : Opérateur ET/AND binaire.
- [`|`](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_OR)
  - : Opérateur OU/OR binaire.
- [`^`](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR)
  - : Opérateur OU exclusif/XOR binaire.

### Opérateurs logiques

Les opérateurs logiques sont généralement utilisés avec des valeurs booléennes, quand c'est le cas, la valeur de retour de l'expression est une valeur booléenne.

- [`&&`](/fr/docs/Web/JavaScript/Reference/Operators/Logical_AND)
  - : Opérateur logique ET/AND.
- [`||`](/fr/docs/Web/JavaScript/Reference/Operators/Logical_OR)
  - : Opérateur logique OU/OR.
- [`??`](/fr/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing_operator)
  - : Opérateur de coalescence des nuls.

### Opérateur conditionnel ternaire

- [`(condition ? ifTrue : ifFalse)`](/fr/docs/Web/JavaScript/Reference/Operators/Conditional_Operator)
  - : L'opérateur conditionnel renvoie une valeur parmi deux selon la valeur logique de la condition portée par le premier opérande.

### Opérateur de chaînage optionnel

- [`?.`](/fr/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
  - : L'opérateur de chaînage optionnel renvoie `undefined` plutôt que de causer une erreur si une référence vaut [`null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/null) ou [`undefined`](/fr/docs/Web/JavaScript/Reference/Global_Objects/undefined).

### Opérateurs d'affectation

Un opérateur d'affectation permet d'affecter une valeur à son opérande gauche en fonction de la valeur de son opérande droit.

- [`=`](/fr/docs/Web/JavaScript/Reference/Operators/Assignment)
  - : Opérateur d'affectation.
- [`*=`](/fr/docs/Web/JavaScript/Reference/Operators/Multiplication_assignment)
  - : Opérateur de multiplication et d'affectation.
- [`**=`](/fr/docs/Web/JavaScript/Reference/Operators/Exponentiation_assignment)
  - : Opérateur d'exponentiation et d'affectation.
- [`/=`](/fr/docs/Web/JavaScript/Reference/Operators/Division_assignment)
  - : Opérateur de division et d'affectation.
- [`%=`](/fr/docs/Web/JavaScript/Reference/Operators/Remainder_assignment)
  - : Opérateur de reste et d'affectation.
- [`+=`](/fr/docs/Web/JavaScript/Reference/Operators/Addition_assignment)
  - : Opérateur d'addition et d'affectation.
- [`-=`](/fr/docs/Web/JavaScript/Reference/Operators/Subtraction_assignment)
  - : Opérateur de soustraction et d'affectation
- [`<<=`](/fr/docs/Web/JavaScript/Reference/Operators/Left_shift_assignment)
  - : Opérateur de décalage à gauche et d'affectation.
- [`>>=`](/fr/docs/Web/JavaScript/Reference/Operators/Right_shift_assignment)
  - : Opérateur de décalage à droite et d'affectation.
- [`>>>=`](/fr/docs/Web/JavaScript/Reference/Operators/Unsigned_right_shift_assignment)
  - : Opérateur de décalage à droite non signé et d'affectation.
- [`&=`](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_AND_assignment)
  - : Opérateur binaire ET et d'affectation.
- [`^=`](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_XOR_assignment)
  - : Opérateur binaire OU exclusif et d'affectation.
- [`|=`](/fr/docs/Web/JavaScript/Reference/Operators/Bitwise_OR_assignment)
  - : Opérateur binaire OU et d'affectation.
- [`&&=`](/fr/docs/Web/JavaScript/Reference/Operators/Logical_AND_assignment)
  - : Opérateur booléen ET et d'affectation.
- [`||=`](/fr/docs/Web/JavaScript/Reference/Operators/Logical_OR_assignment)
  - : Opérateur booléen OU et d'affectation.
- [`??=`](/fr/docs/Web/JavaScript/Reference/Operators/Logical_nullish_assignment)
  - : Opérateur d'affectation et de logique nulle.
- [`[a, b] = [1, 2]`](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
  [`{a, b} = {a:1, b:2}`](/fr/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment)
  - : L'affectation par décomposition permet d'affecter les propriétés d'un tableau ou d'un objet à des variables en utilisant une syntaxe similaire à celle des littéraux pour les tableaux et les objets.

### Opérateur virgule

- [`,`](/fr/docs/Web/JavaScript/Reference/Operators/Comma_Operator)
  - : L'opérateur virgule permet d'évaluer plusieurs expressions dans une seule instruction et renvoie le résultat de la dernière expression.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Précédence des opérateurs en JavaScript](/fr/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)
