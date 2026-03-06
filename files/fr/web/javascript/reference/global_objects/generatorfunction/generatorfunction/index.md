---
title: Constructeur GeneratorFunction()
short-title: GeneratorFunction()
slug: Web/JavaScript/Reference/Global_Objects/GeneratorFunction/GeneratorFunction
l10n:
  sourceCommit: fefa80c1e817377a0bbaf6a636ce6b8797f38fbb
---

> [!WARNING]
> Les arguments passés à ce constructeur sont analysés dynamiquement et exécutés comme du JavaScript.
> Les API de ce type sont connues sous le nom de [puits d'injection](/fr/docs/Web/API/Trusted_Types_API#concepts_et_utilisation) et peuvent constituer un vecteur potentiel d'attaques par [injection de scripts intersites (XSS)](/fr/docs/Web/Security/Attacks/XSS).
>
> Vous pouvez atténuer ce risque en passant systématiquement des objets {{DOMxRef("TrustedScript")}} au lieu de chaînes de caractères et en [appliquant les types de confiance](/fr/docs/Web/API/Trusted_Types_API#utiliser_une_csp_pour_appliquer_des_types_approuvés).
>
> Voir [Considérations de sécurité](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/Function#considérations_de_sécurité) dans la référence du constructeur `Function()` pour plus d'informations.

Le constructeur **`GeneratorFunction()`** crée des objets {{JSxRef("GeneratorFunction")}}.

Notez que `GeneratorFunction` n'est _pas_ un objet global. Il peut être obtenu avec le code suivant&nbsp;:

```js
const GeneratorFunction = function* () {}.constructor;
```

Le constructeur `GeneratorFunction()` n'est pas destiné à être utilisé directement, et toutes les mises en garde mentionnées dans la description de {{JSxRef("Function/Function", "Function()")}} s'appliquent à `GeneratorFunction()`.

## Syntaxe

```js-nolint
new GeneratorFunction(functionBody)
new GeneratorFunction(arg1, functionBody)
new GeneratorFunction(arg1, arg2, functionBody)
new GeneratorFunction(arg1, arg2, /* …, */ argN, functionBody)

GeneratorFunction(functionBody)
GeneratorFunction(arg1, functionBody)
GeneratorFunction(arg1, arg2, functionBody)
GeneratorFunction(arg1, arg2, /* …, */ argN, functionBody)
```

> [!NOTE]
> `GeneratorFunction()` peut être appelé avec ou sans {{JSxRef("Operators/new", "new")}}. Les deux créent une nouvelle instance de `GeneratorFunction`.

### Paramètres

Voir {{JSxRef("Function/Function", "Function()")}}.

## Exemples

Notez que ces exemples omettent l'utilisation de types de confiance pour des raisons de concision. Pour un code montrant l'approche recommandée, voir [Utilisation de `TrustedScript`](/fr/docs/Web/JavaScript/Reference/Global_Objects/eval#utiliser_trustedscript) dans `eval()`.

### Créer et utiliser un générateur avec le constructeur `GeneratorFunction()`

```js
const GeneratorFunction = function* () {}.constructor;
const g = new GeneratorFunction("a", "yield a * 2");
const iterator = g(10);
console.log(iterator.next().value); // 20
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- La déclaration {{JSxRef("Statements/function*", "function*")}}
- [L'expression `function*`](/fr/docs/Web/JavaScript/Reference/Operators/function*)
- [Le constructeur `Function()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Function/Function)
- Le guide [des itérateurs et générateurs](/fr/docs/Web/JavaScript/Guide/Iterators_and_generators)
- {{JSxRef("Functions", "Les fonctions", "", 1)}}
