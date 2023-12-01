---
title: RegExp.prototype[@@match]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@match
---

{{JSRef}}

La méthode **`[@@match]()`** permet de récupérer les correspondances obtenues lorsqu'on teste une chaîne de caractères par rapport à une expression rationnelle (_regexp_).

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@match.html")}}

## Syntaxe

```js
regexp[Symbol.match](str);
```

### Paramètres

- `str`
  - : La chaîne de caractères ({{jsxref("String")}}) sur laquelle on veut chercher des correspondances.

### Valeur de retour

Un tableau ({{jsxref("Array")}}) qui contient les résultats des correspondances et les groupes capturés grâce aux parenthèse. S'il n'y a aucune correspondance, ce sera {{jsxref("null")}}.

## Description

Cette méthode est appelée de façon interne lorsqu'on utilise {{jsxref("String.prototype.match()")}}. Ainsi, les deux exemples qui suivent sont équivalents et le second est la version interne du premier :

```js
"abc".match(/a/);

/a/[Symbol.match]("abc");
```

Cette méthode existe afin de permettre d'adapter le comportement de la recherche des correspondances pour les sous-classes de `RegExp`.

## Exemples

### Appel direct

Cette méthode peut être utilisée comme {{jsxref("String.prototype.match()")}} mais avec un objet `this` différent et un ordre des paramètres également différent.

```js
var re = /[0-9]+/g;
var str = "2016-01-02";
var résultat = re[Symbol.match](str);
console.log(résultat); // ["2016", "01", "02"]
```

### Utilisation de `@@match` avec une sous-classe

Les sous-classes de {{jsxref("RegExp")}} peuvent surcharger la méthode `[@@match]()` afin de modifier le comportement.

```js
class MaRegExp extends RegExp {
  [Symbol.match](str) {
    var résultat = RegExp.prototype[Symbol.match].call(this, str);
    if (!résultat) return null;
    return {
      group(n) {
        return résultat[n];
      },
    };
  }
}

var re = new MaRegExp("([0-9]+)-([0-9]+)-([0-9]+)");
var str = "2016-01-02";
var résultat = str.match(re); // String.prototype.match appelle re[@@match].
console.log(résultat.group(1)); // 2016
console.log(résultat.group(2)); // 01
console.log(résultat.group(3)); // 02
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.@@replace()", "RegExp.prototype[@@replace]()")}}
- {{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}
- {{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
