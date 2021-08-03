---
title: RegExp.prototype[@@replace]()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/@@replace
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/@@replace
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/@@replace
---
{{JSRef}}

La méthode **`[@@replace]()`** remplace toutes ou certaines correspondances d'un motif `this` dans une chaîne de caractère avec un outil de remplacement. La valeur renvoyée est la nouvelle chaîne ainsi créée. Cet outil de remplacement peut être une chaîne de caractère ou une fonction appelée pour chacune des correspondances.

{{EmbedInteractiveExample("pages/js/regexp-prototype-@@replace.html")}}

## Syntaxe

    regexp[Symbol.replace](str, newSubStr|function)

### Paramètres

- `str`
  - : Une chaîne de caractères ({{jsxref("String")}}) pour laquelle on souhaite effectuer des remplacement.
- `newSubStr (replacement)`
  - : La chaîne de caractères qui remplace les correspondances trouvées. On peut effectuer le remplacement sur un nombre donné de correspondances (cf. la section {{jsxref("String.prototype.replace", "Utiliser une chaîne de caractères comme paramètre", "#Utiliser_une_chaîne_de_caractère_comme_paramètre", 1)}} de la page {{jsxref("String.prototype.replace()")}}).
- `function (replacement)`
  - : Une fonction qui est appelée pour créer la sous-chaîne de remplacement. Les arguments fournis à cette fonction sont décrits dans la section {{jsxref("String.prototype.replace", "Utiliser une chaîne de caractères comme paramètre", "#Utiliser_une_chaîne_de_caractère_comme_paramètre", 1)}} de la page {{jsxref("String.prototype.replace()")}}.

### Valeur de retour

Une nouvelle chaîne de caractères pour laquelle les correspondances (toutes ou une partie) ont été remplacées.

## Description

Cette méthode est appelée de façon interne par la méthode {{jsxref("String.prototype.replace()")}} lorsque l'arugment `pattern` argument est un objet {{jsxref("RegExp")}}. Les deux lignes de code qui suivent sont équivalentes et la seconde est la version interne de la première :

```js
'abc'.replace(/a/, 'A');

/a/[Symbol.replace]('abc', 'A');
```

Cette méthode existe afin de pouvoir personnaliser le comportement du remplacement pour les classes filles de `RegExp`.

Si l'argument décrivant le motif **n'est pas** un objet {{jsxref("RegExp")}}, {{jsxref("String.prototype.replace()")}} n'appellera pas cette méthode et ne créera pas d'objet {{jsxref("RegExp")}}.

## Exemples

### Appel direct

Cette méthode peut être utilisée comme {{jsxref("String.prototype.replace()")}}, aux différences près que l'objet `this` est différent et que l'ordre des arguments change :

```js
var re = /-/g;
var str = '2016-01-01';
var newstr = re[Symbol.replace](str, '.');
console.log(newstr);  // 2016.01.01
```

### Utiliser `@@replace` dans une sous-classe

Les sous-classes de {{jsxref("RegExp")}} peuvent surcharger la méthode `[@@replace]()` pour modifier le comportement.

```js
class MaRegExp extends RegExp {
  constructor(pattern, flags, count) {
    super(pattern, flags);
    this.count = count;
  }
  [Symbol.replace](str, replacement) {
    // Applique @@replace |count| fois.
    var result = str;
    for (var i = 0; i < this.count; i++) {
      result = RegExp.prototype[Symbol.replace].call(this, result, replacement);
    }
    return result;
  }
}

var re = new MaRegExp('\\d', '', 3);
var str = '01234567';
var newstr = str.replace(re, '#'); // String.prototype.replace appelle re[@@replace].
console.log(newstr); // ###34567
```

## Spécifications

| Spécification                                                                                                            | État                         | Commentaires         |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | -------------------- |
| {{SpecName('ES6', '#sec-regexp.prototype-@@replace', 'RegExp.prototype[@@replace]')}}         | {{Spec2('ES6')}}         | Définition initiale. |
| {{SpecName('ESDraft', '#sec-regexp.prototype-@@replace', 'RegExp.prototype[@@replace]')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.RegExp.@@replace")}}

## Voir aussi

- {{jsxref("String.prototype.replace()")}}
- {{jsxref("RegExp.prototype.@@match()", "RegExp.prototype[@@match]()")}}
- {{jsxref("RegExp.prototype.@@search()", "RegExp.prototype[@@search]()")}}
- {{jsxref("RegExp.prototype.@@split()", "RegExp.prototype[@@split]()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
