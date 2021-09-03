---
title: isFinite()
slug: Web/JavaScript/Reference/Global_Objects/isFinite
tags:
  - Fonction
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Global_Objects/isFinite
original_slug: Web/JavaScript/Reference/Objets_globaux/isFinite
---
{{jsSidebar("Objects")}}

La fonction globale **`isFinite()`** détermine si la valeur passée en argument est un nombre fini. Si nécessaire, le paramètre est d'abord converti en nombre.

{{EmbedInteractiveExample("pages/js/globalprops-isfinite.html")}}

## Syntaxe

    isFinite(valeurÀTester)

### Paramètres

- `valeurÀTester`
  - : La valeur dont on souhaite savoir si elle est finie ou non.

### Valeur de retour

`false` si la valeur passée en argument vaut {{jsxref("Infinity")}} (en positif ou en négatif),{{jsxref("NaN")}} ou {{jsxref("undefined")}}, `true` sinon.

## Description

`isFinite()` est une fonction qui n'est rattachée à aucun objet et qui est disponible au plus haut niveau.

Cette fonction peut être utilisée pour déterminer si un nombre est fini ou non. La fonction `isFinite()` examine le nombre passé en argument : si celui-ci vaut {{jsxref("NaN")}}, {{jsxref("Infinity")}} (pour l'infini) ou {{jsxref("Infinity","-Infinity")}} (pour l'infini négatif), cette fonction renvoie `false` sinon elle renvoie `true`.

## Exemples

```js
isFinite(Infinity);  // false
isFinite(NaN);       // false
isFinite(-Infinity); // false

isFinite(0);         // true
isFinite(2e64);      // true
isFinite(910);       // true
isFinite(null);      // true, ce qui aurait été false
                     // avec la méthode Number.isFinite(null)


isFinite("0");       // true ce qui aurait été false
                     // avec la méthode Number.isFinite("0")
```

## Spécifications

| Spécification                                                                    | État                         | Commentaires         |
| -------------------------------------------------------------------------------- | ---------------------------- | -------------------- |
| {{SpecName('ES2')}}                                                         | {{Spec2('ES3')}}         | Définition initiale. |
| {{SpecName('ES5.1', '#sec-15.1.2.5', 'isFinite')}}             | {{Spec2('ES5.1')}}     |                      |
| {{SpecName('ES6', '#sec-isfinite-number', 'isFinite')}}         | {{Spec2('ES6')}}         |                      |
| {{SpecName('ESDraft', '#sec-isfinite-number', 'isFinite')}} | {{Spec2('ESDraft')}} |                      |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.isFinite")}}

## Voir aussi

- {{jsxref("Number.isFinite()")}}
- {{jsxref("Number.NaN")}}
- {{jsxref("Number.POSITIVE_INFINITY")}}
- {{jsxref("Number.NEGATIVE_INFINITY")}}
