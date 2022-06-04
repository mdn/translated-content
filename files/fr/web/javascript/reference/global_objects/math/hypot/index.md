---
title: Math.hypot()
slug: Web/JavaScript/Reference/Global_Objects/Math/hypot
tags:
  - ECMAScript6
  - JavaScript
  - Math
  - Méthode
  - Reference
  - polyfill
translation_of: Web/JavaScript/Reference/Global_Objects/Math/hypot
original_slug: Web/JavaScript/Reference/Objets_globaux/Math/hypot
---
{{JSRef}}

La fonction **`Math.hypot()`** renvoie la racine carrée de la somme des carrés de ses arguments. On peut également la définir avec la formule suivante :

<math display="block"><semantics><mrow><mstyle mathvariant="monospace"><mrow><mo lspace="0em" rspace="thinmathspace">Math.hypot</mo><mo stretchy="false">(</mo><msub><mi>v</mi><mn>1</mn></msub><mo>,</mo><msub><mi>v</mi><mn>2</mn></msub><mo>,</mo><mo>…</mo><mo>,</mo><msub><mi>v</mi><mi>n</mi></msub><mo stretchy="false">)</mo></mrow></mstyle><mo>=</mo><msqrt><mrow><munderover><mo>∑</mo><mrow><mi>i</mi><mo>=</mo><mn>1</mn></mrow><mi>n</mi></munderover><msubsup><mi>v</mi><mi>i</mi><mn>2</mn></msubsup></mrow></msqrt><mo>=</mo><msqrt><mrow><msubsup><mi>v</mi><mn>1</mn><mn>2</mn></msubsup><mo>+</mo><msubsup><mi>v</mi><mn>2</mn><mn>2</mn></msubsup><mo>+</mo><mo>…</mo><mo>+</mo><msubsup><mi>v</mi><mi>n</mi><mn>2</mn></msubsup></mrow></msqrt></mrow><annotation encoding="TeX">\mathtt{\operatorname{Math.hypot}(v*1, v_2, \dots, v_n)} = \sqrt{\sum*{i=1}^n v_i^2} = \sqrt{v_1^2 + v_2^2 + \dots + v_n^2}</annotation></semantics></math>

{{EmbedInteractiveExample("pages/js/math-hypot.html")}}

## Syntaxe

```js
Math.hypot([valeur1[,valeur2, ...]])
```

### Paramètres

- `valeur1, valeur2, ...`
  - : Des nombres.

### Valeur de retour

La racine carrée de la somme des carrés des arguments. S'il existe un des arguments qui ne peut pas être converti en un nombre, c'est la valeur {{jsxref("NaN")}} qui sera renvoyée.

## Description

`hypot()` étant une méthode statique de `Math`, il faut utiliser `Math.hypot()`et non pas la méthode d'un autre objet qui aurait été créé (`Math` n'est pas un constructeur).

Si aucun argument n'est donné, le résultat sera +0.Si, parmi les arguments, au moins un ne peut pas être converti en un nombre, le résultat sera {{jsxref("NaN")}}.Si cette fonction est utilisée avec un argument : `Math.hypot(x)` sera équivalente à `Math.abs(x)`.

Cette fonction permet entre autres de gérer certains cas où, pour les grands nombres, l'utilisation de {{jsxref("Math.sqrt()")}} aurait renvoyé {{jsxref("Infinity")}} à cause des calculs intermédiaires.

## Exemples

### Utiliser `Math.hypot()`

```js
Math.hypot(3, 4)        // 5
Math.hypot(3, 4, 5)     // 7.0710678118654755
Math.hypot()            // 0
Math.hypot(NaN)         // NaN
Math.hypot(3, 4, "toto") // NaN, +"toto" => NaN
Math.hypot(3, 4, "5")   // 7.0710678118654755, +"5" => 5
Math.hypot(-3)          // 3, the same as Math.abs(-3)
```

## Prothèse d'émulation (_polyfill_)

Si elle n'est pas disponible, cette fonction peut être émulée de la façon suivante :

```js
Math.hypot =  Math.hypot || function() {
    var y = 0;
    var length = arguments.length;

    for (var i = 0; i < length; i++) {
      if(arguments[i] === Infinity || arguments[i] === -Infinity) {
        return Infinity;
      }
      y += arguments[i] * arguments[i];
    }
    return Math.sqrt(y);
};
```

Voici une seconde version qui évite les dépassements :

```js
Math.hypot = function (x, y) {
  // https://bugzilla.mozilla.org/show_bug.cgi?id=896264#c28
  var max = 0;
  var s = 0;
  for (var i = 0; i < arguments.length; i += 1) {
    var arg = Math.abs(Number(arguments[i]));
    if (arg > max) {
      s *= (max / arg) * (max / arg);
      max = arg;
    }
    s += arg === 0 && max === 0 ? 0 : (arg / max) * (arg / max);
  }
  return max === 1 / 0 ? 1 / 0 : max * Math.sqrt(s);
};
```

## Spécifications

| Spécification                                                                | État                         | Commentaires        |
| ---------------------------------------------------------------------------- | ---------------------------- | ------------------- |
| {{SpecName('ES2015', '#sec-math.hypot', 'Math.hypot')}}     | {{Spec2('ES2015')}}     | Définition initiale |
| {{SpecName('ESDraft', '#sec-math.hypot', 'Math.hypot')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.Math.hypot")}}

## Voir aussi

- {{jsxref("Math.abs()")}}
- {{jsxref("Math.pow()")}}
- {{jsxref("Math.sqrt()")}}
