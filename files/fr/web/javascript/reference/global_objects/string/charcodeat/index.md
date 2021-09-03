---
title: String.prototype.charCodeAt()
slug: Web/JavaScript/Reference/Global_Objects/String/charCodeAt
tags:
  - JavaScript
  - Méthode
  - Reference
  - String
  - Unicode
translation_of: Web/JavaScript/Reference/Global_Objects/String/charCodeAt
original_slug: Web/JavaScript/Reference/Objets_globaux/String/charCodeAt
---
{{JSRef}}

La méthode **`charCodeAt()`** retourne un entier compris entre 0 et 65535 qui correspond au code UTF-16 d'un caractère de la chaîne situé à une position donnée.

{{EmbedInteractiveExample("pages/js/string-charcodeat.html")}}

Le codet UTF-16 renvoyé correspond au codet Unicode si le caractère peut être représenté sur un seul codet. Si le codet Unicode ne peut pas être représenté sur un seul codet UTF-16 (car sa valeur est supérieure à `0xFFFF`), seule la première partie de la paire sera renvoyée. Si vous souhaitez obtenir l'ensemble de la valeur, vous pouvez utiliser la méthode {{jsxref("String.prototype.codePointAt()","codePointAt()")}}.

## Syntaxe

    str.charCodeAt(indice)

### Paramètres

- `indice`
  - : Un entier supérieur ou égal à zéro et strictement inférieur à la longueur de la chaîne. La valeur par défaut (si le paramètre est absent ou n'est pas un nombre) sera zéro (0).

### Valeur de retour

Un nombre qui représente la valeur du point de code UTF-16 pour le caractère à la position indiquée. Si `index` pointe en dehors de la chaîne, ce sera {{jsxref("Objets_globaux/NaN","NaN")}} qui sera renvoyé.

## Description

Les codets Unicode vont de 0 à 1 114 111 (0x10FFFF). Les 128 premiers caractères Unicode correspondent aux caractères ASCII (leur encodage est le même). Pour plus d'informations sur la gestion de l'Unicode en JavaScript, voir le [Guide JavaScript](/fr/docs/Web/JavaScript/Guide/Valeurs,_variables,_et_littéraux#Unicode).

La méthode `charCodeAt()` renverra toujours une valeur inférieure à 65 536. En effet, les caractères encodés sur les plus grandes valeurs sont encodés sur deux « demi-codets » (appelés _surrogate pair_ en anglais). Pour recomposer de tels caractères, il faut donc utiliser `charCodeAt(i)` **et aussi** `charCodeAt(i+1)` afin de pouvoir récupérer chaque demi-codet. Pour plus de détails, voir le deuxième et troisième exemples.

`charCodeAt()` renverra {{jsxref("NaN")}} si l'indice fourni est strictement inférieur à 0 ou dépasse la longueur de la chaîne.

Dans les anciennes versions (JavaScript 1.2 par exemple) la méthode `charCodeAt()` renvoyait la valeur du caractère selon l'encodage ISO-Latin-1. L'encodage ISO-Latin-1 permet de représenter des caractères dont les valeurs vont de 0 à 255. Les valeurs 0 à 127 correspondent aux différentes valeurs ASCII.

## Exemples

### Utiliser `charCodeAt()`

L'exemple suivant retourne 65, la valeur Unicode de A.

```js
"ABC".charCodeAt(0) // returns 65
```

### Utiliser charCodeAt pour gérer les caractères hors du plan multilingue de base sans hypothèse sur leur présence

Cette fonction peut être utilisée dans des boucles ou autres dans les cas où on ne sait pas si des caractères représentés sur deux demi-codets (hors du plan BMP) existent avant la position indiquée.

```js
function fixedCharCodeAt (str, idx) {
    // ex. fixedCharCodeAt ('\uD800\uDC00', 0); // 65536
    // ex. fixedCharCodeAt ('\uD800\uDC00', 1); // false
    idx = idx || 0;
    var code = str.charCodeAt(idx);
    var hi, low;

    // On gère le demi-codet supérieur (la borne supérieure
    // utilisée pourrait être 0xDB7F afin de traiter les
    // paires surrogates privées comme des caractères uniques)
    if (0xD800 <= code && code <= 0xDBFF) {
        hi = code;
        low = str.charCodeAt(idx+1);
        if (isNaN(low)) {
            throw "Le demi-codet supérieur n'est pas suivi "+
                  "par un demi-codet inférieur dans fixedCharCodeAt()";
        }
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    if (0xDC00 <= code && code <= 0xDFFF) {
    // Demi-codet inférieur

        // On renvoie false pour permettre aux boucles
        // car le cas a normalement déjà été géré avec
        // l'étape précédente
        return false;
    }
    return code;
}
```

### Utiliser `charCodeAt()` pour gérer les caractères du plan multilingue de base (en sachant qu'ils sont présents)

```js
function knownCharCodeAt (str, idx) {
    str += '';
    var code,
        end = str.length;

    var surrogatePairs = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
    while ((surrogatePairs.exec(str)) != null) {
        var li = surrogatePairs.lastIndex;
        if (li - 2 < idx) {
            idx++;
        }
        else {
            break;
        }
    }

    if (idx >= end || idx < 0) {
        return NaN;
    }

    code = str.charCodeAt(idx);

    var hi, low;
    if (0xD800 <= code && code <= 0xDBFF) {
        hi = code;
        low = str.charCodeAt(idx+1);
        // On prend un caractère de plus
        // car on a deux demi-codets à récupérer
        return ((hi - 0xD800) * 0x400) + (low - 0xDC00) + 0x10000;
    }
    return code;
}
```

## Spécifications

| Spécification                                                                                                            | État                         | Commentaires                                          |
| ------------------------------------------------------------------------------------------------------------------------ | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES1')}}                                                                                                 | {{Spec2('ES1')}}         | Définition initiale. Implémentée avec JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.5.4.5', 'String.prototype.charCodeAt')}}                             | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-string.prototype.charcodeat', 'String.prototype.charCodeAt')}}     | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-string.prototype.charcodeat', 'String.prototype.charCodeAt')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.charCodeAt")}}

## Voir aussi

- {{jsxref("String.fromCharCode()")}}
- {{jsxref("String.prototype.charAt()")}}
- {{jsxref("String.fromCodePoint()")}}
- {{jsxref("String.prototype.codePointAt()")}}
