---
title: String.prototype.substr()
slug: Web/JavaScript/Reference/Global_Objects/String/substr
---

{{JSRef}}

> **Attention :** Bien que `String.prototype.substr(…)` ne soit pas strictement obsolète (au sens où elle n'a pas été retirée des standards), elle est définie au sein de [l'Annexe B](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-additional-ecmascript-features-for-web-browsers) du standard ECMA-262 qui définit l'ensemble des fonctionnalités historiques qui doivent être évitées autant que possible. On utilisera la méthode {{jsxref("String.prototype.substring()")}} à la place.

La méthode **`substr()`** retourne la partie d'une chaîne de caractères comprise entre l'indice de départ et un certain nombre de caractères après celui-ci.

{{EmbedInteractiveExample("pages/js/string-substr.html")}}

## Syntaxe

```js
chn.substr(début[, longueur])
```

### Paramètres

- `début`
  - : L'indice du premier caractère à inclure dans la sous-chaîne retournée.
- `longueur`
  - : Optionnel. Le nombre de caractères à extraire.

### Valeur de retour

Une nouvelle chaîne contenant la partie indiquée de la chaîne donnée.

## Description

`substr()` extrait `longueur` caractères d'une `string`, en comptant à partir de l'indice `début`.

Si `début` est un nombre positif, l'indice commence à compter du début de la chaîne. Sa valeur est limitée à `chn.length`.

Si `début` est un nombre négatif, l'indice commence à compter de la fin de la chaîne. Sa valeur est limitée à `-chn.length`.

Note : dans JScript de Microsoft, les valeurs négatives de l'argument `début` ne sont pas considérées comme faisant référence à la fin de la chaîne.

Si `longueur` est omise, `substr()` extrait les caractères jusqu'à la fin de la chaîne.

Si `longueur` est {{jsxref("undefined")}}, `substr()` extrait les caractères jusqu'à la fin de la chaîne.

Si `longueur` est négative, elle est traitée comme 0.

Pour `début` comme pour `longueur`, NaN est traité comme 0.

## Exemples

```js
var uneChaine = "Mozilla";

console.log(uneChaine.substr(0, 1)); // 'M'
console.log(uneChaine.substr(1, 0)); // ''
console.log(uneChaine.substr(-1, 1)); // 'a'
console.log(uneChaine.substr(1, -1)); // ''
console.log(uneChaine.substr(-3)); // 'lla'
console.log(uneChaine.substr(1)); // 'ozilla'
console.log(uneChaine.substr(-20, 2)); // 'Mo'
console.log(uneChaine.substr(20, 2)); // ''
```

## Prothèse d'émulation (_polyfill_)

JScript de Microsoft ne supporte pas les valeurs négatives pour l'indice de début. Pour utiliser cette fonctionnalité, vous pouvez utiliser le code suivant :

```js
// N'appliquer que lorsque la fonction est incomplète
if ("ab".substr(-1) != "b") {
  /**
   *  Obtenir la sous-chaîne d'une chaîne
   *  @param  {entier}  début     où démarrer la sous-chaîne
   *  @param  {entier}  longueur combien de caractères à retourner
   *  @return {chaîne}
   */
  String.prototype.substr = (function (substr) {
    return function (début, longueur) {
      // Appel de la méthode originale
      return substr.call(
        this,
        // Si on a un début négatif, calculer combien il vaut à partir du début de la chaîne
        // Ajuster le paramètre pour une valeur négative
        début < 0 ? this.length + début : début,
        longueur,
      );
    };
  })(String.prototype.substr);
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("String.prototype.slice()")}}
- {{jsxref("String.prototype.substring()")}}
