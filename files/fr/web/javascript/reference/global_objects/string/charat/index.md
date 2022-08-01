---
title: String.prototype.charAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charAt
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - String
translation_of: Web/JavaScript/Reference/Global_Objects/String/charAt
original_slug: Web/JavaScript/Reference/Objets_globaux/String/charAt
---
{{JSRef}}

La méthode **`charAt()`** renvoie une nouvelle chaîne contenant le caractère (ou, plus précisément, le point de code UTF-16)  à la position indiquée en argument.

{{EmbedInteractiveExample("pages/js/string-charat.html")}}

## Syntaxe

```js
str.charAt(index)
```

### Paramètres

- `index`
  - : Un entier entre 0 et la longueur de la chaîne - 1. Si aucun index n'est fourni (ce qui correspond à fournir {{jsxref("undefined")}}) ou si l'index ne peut pas être converti en entier, la recherche sera effectuée à l'index 0 et le premier caractère sera donc renvoyé.

### Valeur de retour

Une chaîne de caractères qui représente le point de code UTF-16 à la position indiquée. Si la position est dehors de la chaîne, ce sera une chaîne vide.

## Description

Les caractères d'une chaîne sont indexés de la gauche vers la droite. L'indice du premier caractère est 0 et l'indice du dernier caractère est la longueur de la chaîne moins un (par exemple, si on a une chaîne `toto`, le dernier caractère de la chaine aura l'indice `toto.length - 1`). Si l'indice fourni est en dehors de cet intervalle, la méthode renverra une chaîne vide. Si aucun indice n'est fourni, la valeur par défaut utilisée sera 0.

## Exemples

### Afficher les caractères situés à différentes positions d'une chaîne

L'exemple suivant affiche les caractères à différentes positions de la chaîne "`Coucou tout le monde`" :

```js
var uneChaîne = "Coucou tout le monde";

console.log("La caractère d'indice 0 est '" + uneChaîne.charAt(0)   + "'");
console.log("La caractère d'indice 1 est '" + uneChaîne.charAt(1)   + "'");
console.log("La caractère d'indice 2 est '" + uneChaîne.charAt(2)   + "'");
console.log("La caractère d'indice 3 est '" + uneChaîne.charAt(3)   + "'");
console.log("La caractère d'indice 4 est '" + uneChaîne.charAt(4)   + "'");
console.log("La caractère d'indice 999 est '" + uneChaîne.charAt(999) + "'");
```

Ces lignes afficheront respectivement :

```js
La caractère d'indice 0 est 'C'
La caractère d'indice 1 est 'o'
La caractère d'indice 2 est 'u'
La caractère d'indice 3 est 'c'
La caractère d'indice 4 est 'o'
La caractère d'indice 999 est ''
```

### Obtenir des caractères complets

Le code qui suit permet de s'assurer qu'on récupère des caractères complets et ce même si la chaîne de caractères contient des caractères en dehors du plan multilingue de base (BMP) (qui sont donc représentés sur deux unités de code/codets) :

```js
var str = 'A \uD87E\uDC04 Z'; // On pourrait aussi utiliser un caractère hors du BMP directement
for (var i=0, chr; i < str.length; i++) {
  if ((chr = getWholeChar(str, i)) === false) {
    continue;
  } // On adapte cette ligne pour chaque boucle, en passant la chaîne de caractères
    // et on renvoie une variable représentant le caractère individuel

  console.log(chr);
}

function getWholeChar(str, i) {
  var code = str.charCodeAt(i);

  if (Number.isNaN(code)) {
    return ''; // la position n'a pas pu être trouvée
  }
  if (code < 0xD800 || code > 0xDFFF) {
    return str.charAt(i);
  }

  // On traite ici le demi codet supérieur (high surrogate)
  // La borne supérieure du test pourrait être 0xDB7F afin de prendre en compte
  // les demi-codets privés comme des caractères uniques
  if (0xD800 <= code && code <= 0xDBFF) {
    if (str.length <= (i+1))  {
      throw 'le demi-codet supérieur n'est pas suivi par un demi-codet inférieur';
    }
    var next = str.charCodeAt(i+1);
      if (0xDC00 > next || next > 0xDFFF) {
        throw 'le demi-codet supérieur n'est pas suivi par un demi-codet inférieur';
      }
      return str.charAt(i)+str.charAt(i+1);
  }
  // on gère le demi codet inférieur (0xDC00 <= code && code <= 0xDFFF)
  if (i === 0) {
    throw 'le demi-codet inférieur n'est pas précédé d'un demi-codet supérieur';
  }
  var prev = str.charCodeAt(i-1);

  // (la borne supérieure pourrait être modifiée en 0xDB7F afin de traiter
  // les demi-codets supérieurs privés comme des caractètres uniques)
  if (0xD800 > prev || prev > 0xDBFF) {
    throw 'le demi-codet inférieur n'est pas précédé d'un demi-codet supérieur';
  }
  // on peut passer des demis codets inférieurs comme deuxième composant
  // d'une paire déjà traitée
  return false;
}
```

Dans un environnement ECMAScript 2016 qui permet d'utiliser l'affectation par décomposition, on peut obtenir une version plus succincte et flexible :

```js
var str = 'A\uD87E\uDC04Z'; // We could also use a non-BMP character directly
for (var i=0, chr; i < str.length; i++) {
  [chr, i] = getWholeCharAndI(str, i);
  // Adapt this line at the top of each loop, passing in the whole string and
  // the current iteration and returning an array with the individual character
  // and 'i' value (only changed if a surrogate pair)

  console.log(chr);
}

function getWholeCharAndI(str, i) {
  var code = str.charCodeAt(i);

  if (Number.isNaN(code)) {
    return ''; // Position not found
  }
  if (code < 0xD800 || code > 0xDFFF) {
    return [str.charAt(i), i]; // Normal character, keeping 'i' the same
  }

  // High surrogate (could change last hex to 0xDB7F to treat high private
  // surrogates as single characters)
  if (0xD800 <= code && code <= 0xDBFF) {
    if (str.length <= (i+1))  {
      throw 'High surrogate without following low surrogate';
    }
    var next = str.charCodeAt(i+1);
      if (0xDC00 > next || next > 0xDFFF) {
        throw 'High surrogate without following low surrogate';
      }
      return [str.charAt(i)+str.charAt(i+1), i+1];
  }
  // Low surrogate (0xDC00 <= code && code <= 0xDFFF)
  if (i === 0) {
    throw 'Low surrogate without preceding high surrogate';
  }
  var prev = str.charCodeAt(i-1);

  // (could change last hex to 0xDB7F to treat high private surrogates
  // as single characters)
  if (0xD800 > prev || prev > 0xDBFF) {
    throw 'Low surrogate without preceding high surrogate';
  }
  // Return the next character instead (and increment)
  return [str.charAt(i+1), i+1];
}
```

### Créer une version de `charAt` qui permet de supporter des caractères hors du plan basique multilingue (BMP)

Si on souhaite récupérer les paires de codets des caractères hors du plan classique, on peut utiliser le code suivant :

```js
function fixedCharAt (str, idx) {
  var ret = '';
  str += '';
  var end = str.length;

  var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
  while ((surrogatePairs.exec(str)) != null) {
    var li = surrogatePairs.lastIndex;
    if (li - 2 < idx) {
      idx++;
    } else {
      break;
    }
  }

  if (idx >= end || idx < 0) {
    return '';
  }

  ret += str.charAt(idx);

  if (/[\uD800-\uDBFF]/.test(ret) && /[\uDC00-\uDFFF]/.test(str.charAt(idx+1))) {
    // On avance d'un puisque l'un des caractères fait partie de la paire
    ret += str.charAt(idx+1);
  }
  return ret;
}
```

## Spécifications

| Spécification                                                                                                | État                         | Commentaires        |
| ------------------------------------------------------------------------------------------------------------ | ---------------------------- | ------------------- |
| {{SpecName('ES1')}}                                                                                     | {{Spec2('ES1')}}         | Définition initiale |
| {{SpecName('ES5.1', '#sec-15.5.4.4', 'String.prototype.charAt')}}                     | {{Spec2('ES5.1')}}     |                     |
| {{SpecName('ES6', '#sec-string.prototype.charat', 'String.prototype.charAt')}}     | {{Spec2('ES6')}}         |                     |
| {{SpecName('ESDraft', '#sec-string.prototype.charat', 'String.prototype.charAt')}} | {{Spec2('ESDraft')}} |                     |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.charAt")}}

## Voir aussi

- {{jsxref("String.prototype.indexOf()")}}
- {{jsxref("String.prototype.lastIndexOf()")}}
- {{jsxref("String.prototype.charCodeAt()")}}
- {{jsxref("String.prototype.codePointAt()")}}
- {{jsxref("String.prototype.split()")}}
- {{jsxref("String.fromCodePoint()")}}
- [JavaScript a un problème avec Unicode](https://mathiasbynens.be/notes/javascript-unicode), billet de Mathias Bynens (en anglais)
