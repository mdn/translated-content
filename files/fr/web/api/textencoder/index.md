---
title: TextEncoder
slug: Web/API/TextEncoder
---

{{APIRef("Encoding API")}}{{SeeCompatTable}}

**`TextEncoder`** prend un flux de points de code en entrée et émet un flux d'octets. Pour une bibliothèque non native plus extensible, voir [`StringView` – une représentation des chaînes de caractères proche de celle de C basée sur les tableaux typés](/fr/Add-ons/Code_snippets/StringView).

> **Note :** Firefox, Chrome et Opera ont pour habitude de supporter les types d'encodage autres que `utf-8` (tels que `utf-16`, `iso-8859-2`, `koi8`, `cp1261`, et `gbk`). À partir de Firefox 48 ([bug Firefox 1257877](https://bugzil.la/1257877)), Chrome 54 ([ticket](https://www.chromestatus.com/feature/5630760492990464)) et Opera 41, aucun type d'encodage autre que `utf-8` n'est disponible, de manière à être en accord avec la [spécification](https://www.w3.org/TR/encoding/#dom-textencoder). Dans tous les cas, passer un type d'encodage au constructeur sera ignoré et un TextEncoder utf-8 sera créé (le {{DOMxRef("TextDecoder")}} permet toujours d'autres types pour le décodage).

> **Note :** Il y a une prothèse d'émulation d'implantation pour supporter tous les encodages hérités dans [GitHub](https://github.com/inexorabletash/text-encoding).

## Constructeur

- {{DOMxRef("TextEncoder.TextEncoder", "TextEncoder()")}}
  - : Retourne une nouvel objet `TextEncoder` qui génèrera un flux d'octets encodés en utf-8.

## Propriétés

_L'interface `TextEncoder` n'hérite d'aucune propriété._

- {{DOMxRef("TextEncoder.encoding")}}{{ReadOnlyInline}}
  - : {{DOMxRef("DOMString")}} contenant le nom de l'encodeur, qui est une chaîne de caractères décrivant la méthode que l'objet `TextEncoder` utilisera.

## Méthodes

**L'interface `TextEncoder` n'hérite d'aucune propriété**.

- {{DOMxRef("TextEncoder.encode()")}}
  - : Retourne un [`Uint8Array`](/fr/docs/Web/JavaScript/Typed_arrays/Uint8Array) conternant un texte encodé en utf-8.

## Prothèse d'émulation

La prothèse d'émulation ci-dessous va uniquement répondre aux spécifications données par le W3 (par d'autre type d'encodage que UTF-8 n'est supporté, malheureusement ☹). Elle est conçue pour fonctionner "clé en main" avec IE5. Toutefois, de IE5 à IE9, elle retournera un tableau normal plutôt qu'un tableau typé. Dans de telles circonstances et avec des navigateurs si lents, cette prothèse (ou tout autre ayant le même objectif) serait inutilisable pour de longues chaînes de caractères avec ces vieux navigateurs. Enfin, notez que vous devriez exécuter le code ci-dessous avec un minifieur (et plus particulièrement un compilateur ) to turn sequences like `0x1e << 3` into `0xf0`. These sequences are not already precomputed because they serve to aesthetically illustrate how the polyfill works.

```js
if (typeof TextEncoder === "undefined") {
    TextEncoder=function TextEncoder(){};
    TextEncoder.prototype.encode = function encode(str) {
        "use strict";
  var Len = str.length, resPos = -1;
 // The Uint8Array's length must be at least 3x the length of the string because an invalid UTF-16
        //  takes up the equivelent space of 3 UTF-8 characters to encode it properly. However, Array's
        //  have an auto expanding length and 1.5x should be just the right balance for most uses.
        var resArr = typeof Uint8Array === "undefined" ? new Array(Len * 1.5) : new Uint8Array(Len * 3);
        for (var point=0, nextcode=0, i = 0; i !== Len; ) {
            point = str.charCodeAt(i), i += 1;
            if (point >= 0xD800 && point <= 0xDBFF) {
                if (i === Len) {
                    resArr[resPos += 1] = 0xef/*0b11101111*/; resArr[resPos += 1] = 0xbf/*0b10111111*/;
                    resArr[resPos += 1] = 0xbd/*0b10111101*/; break;
                }
                // https://mathiasbynens.be/notes/javascript-encoding#surrogate-formulae
                nextcode = str.charCodeAt(i);
                if (nextcode >= 0xDC00 && nextcode <= 0xDFFF) {
                    point = (point - 0xD800) * 0x400 + nextcode - 0xDC00 + 0x10000;
                    i += 1;
                    if (point > 0xffff) {
                        resArr[resPos += 1] = (0x1e/*0b11110*/<<3) | (point>>>18);
                        resArr[resPos += 1] = (0x2/*0b10*/<<6) | ((point>>>12)&0x3f/*0b00111111*/);
                        resArr[resPos += 1] = (0x2/*0b10*/<<6) | ((point>>>6)&0x3f/*0b00111111*/);
                        resArr[resPos += 1] = (0x2/*0b10*/<<6) | (point&0x3f/*0b00111111*/);
                        continue;
                    }
                    e {
                          resArr[resPos += 1] = 0xef/*0b11101111*/; resArr[resPos += 1] = 0xbf/*0b10111111*/;
                    resArr[resPos += 1] = 0xbd/*0b10111101*/; continue;
                }
            }
            if (point <= 0x007f) {
                resArr[resPos += 1] = (0x0/*0b0*/<<7) | point;
                se if (point <= 0x07ff) {
                resArr[resPos += 1] = (0x6/*0b110*/<<5) | (point>>>6);
                esArr[resPos += 1] = (0x2/*0b10*/<<6)  | (point&0x3f/*0
                    else {
                      resArr[resPos += 1] = (0xe/*0b1110*/<<4) | (point>>>12);
                resArr[resPos += 1] = (0x2/*0b10*/<<6) | ((point>>>6)&0x3f/*0b00111111*/);
                resArr[resPos += 1] = (0x2/*0b10*/<<6) | (point&0x3f/*0b00111111*/);
            }
        }
        if (typeof Uint8Array !== "undefined") return resArr.subarray(0, resPos + 1);
        // else // IE 6-9
        resArr.length = resPos + 1; // trim off extra weight
        return resArr;
    };
    TextEncoder.prototype.toString = function(){return "[object TextEncoder]"};
    try { // Object.defineProperty only works on DOM prototypes in IE8
        Object.defineProperty(TextEncoder.prototype,"encoding",{
            get:function(){if(TextEncoder.prototype.isPrototypeOf(this)) return"utf-8";
                           else throw TypeError("Illegal invocation");}
        });
    } catch(e) { /*IE6-8 fallback*/ TextEncoder.prototype.encoding = "utf-8"; }
    if(typeof Symbol!=="undefined")TextEncoder.prototype[Symbol.toStringTag]="TextEncoder";
}
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- The {{DOMxRef("TextDecoder")}} interface describing the inverse operation.
- [`StringView`](/fr/Add-ons/Code_snippets/StringView) – a C-like representation of strings based on typed arrays
- A [shim](https://github.com/inexorabletash/text-encoding) allowing to use this interface in browsers that don't support it.
- [`Components.utils.importGlobalProperties`](/fr/docs/Components.utils.importGlobalProperties)
