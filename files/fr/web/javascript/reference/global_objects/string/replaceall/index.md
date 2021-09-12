---
title: String.prototype.replaceAll()
slug: Web/JavaScript/Reference/Global_Objects/String/replaceAll
translation_of: Web/JavaScript/Reference/Global_Objects/String/replaceAll
original_slug: Web/JavaScript/Reference/Objets_globaux/String/replaceAll
---
{{JSRef}}

La méthode **`replaceAll()`** retourne une nouvelle chaîne de caractères dans laquelle toutes les occurrences d'un motif donné ont été remplacées par une chaîne de remplacement. L'argument `pattern` fournit pour décrire le motif peut être une chaîne de caractères ou une expression rationnelle ([`RegExp`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp)), l'argument `replacement` peut être une chaîne de caractères ou une fonction qui sera appelée pour chaque correspondance.

La chaîne de caractères initiale restera inchangée.

{{EmbedInteractiveExample("pages/js/string-replaceall.html")}}

## Syntaxe

```js
const newStr = str.replaceAll(regexp|substr, newSubstr|function)
```

> **Note :** Quand on utilise une expression rationnelle, il est nécessaire d'utiliser le marqueur global ("g"); autrement, l'exception `TypeError`: _"replaceAll must be called with a global RegExp"_ sera levée.

### Paramètres

- `regexp` (le motif à rechercher)
  - : Un objet ou littérale [`RegExp`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp) avec le marqueur global. Les correspondances sont remplacées par `newSubstr` ou la valeur retournée par la `function` spécifiée. Une RegExp sans le marqueur global ("g") renverra l'erreur `TypeError`: "replaceAll must be called with a global RegExp".
- `substr`
  - : Une chaîne de caractères ([`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String)) qui sera remplacée par `newSubstr`. Elle est traitée comme une chaîne de caracères littérale et _non pas_ comme une expression régulière.
- `newSubstr` (remplacement)
  - : La chaîne de caractères ([`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String)) qui remplacera la sous-chaîne indiquée par la `regexp` ou `substr` donnée en paramètre. Un certain nombre de motifs spéciaux pour le remplacement sont pris en charge, voir la section "[Spécifier une chaîne de caractères comme paramètre](#specifying_a_string_as_a_parameter)" ci-dessous.
- `function` (remplacement)
  - : Une fonction qui a pour but de créer la nouvelle sous-chaîne qui remplacera les occurrences trouvées via la `regexp` ou `substr` donnée en paramètre. Les arguments passés à cette fonction sont détaillés dans la section "[Spécifier une fonction comme paramètre](#specifying_a_function_as_a_parameter)" ci-dessous.

### Valeur de retour

Une nouvelle chaîne avec toutes les occurrences trouvées remplacées par le pattern de remplacement.

## Description

Cette méthode ne remplace ni ne modifie l'objet [`String`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String) original. Elle retourne juste une nouvelle chaîne de caractères.

### Spécifier une chaîne de caractères comme paramètre

La chaîne de caractères de remplacement peut inclure les motifs de remplacement spéciaux suivants :

| Motif    | Insertion                                                                                                                                                                                                                                   |
| -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `$$`     | Insère un `"$"`.                                                                                                                                                                                                                            |
| `$&`     | Insère la chaîne de caractères trouvée.                                                                                                                                                                                                     |
| `` $` `` | Insère la portion de chaîne de caractères qui précède celle trouvée.                                                                                                                                                                        |
| `$'`     | Insère la portion de chaîne de caractères qui suit celle trouvée.                                                                                                                                                                           |
| `$n`     | Où `n` est un entier positif inférieur à 100. Insère la n-ième occurrence trouvée, à condition que le premier argument soit un objet [`RegExp`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp). Cet indice démarre à partir de 1. |

### Spécifier une fonction comme paramètre

Vous pouvez passer une fonction comme second paramètre. Dans ce cas, la fonction sera appelée après qu'une occurrence soit trouvée. Le résultat de la fonction (valeur de retour) sera utilisé comme chaîne de remplacement. (**Note :** les remplacements spéciaux mentionnés plus haut _ne s'appliqueront pas_ dans ce cas.)

À noter que la fonction sera utilisée à chaque fois qu'une occurrence sera rencontrée, si l'expression régulière donnée en paramètre est globale.

La fonction admet les arguments suivants :

<table class="standard-table">
  <thead>
    <tr>
      <th class="header" scope="col">Nom possible</th>
      <th class="header" scope="col">Valeur fournie</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>match</code></td>
      <td>
        L'occurrence trouvée. (Correspond au <code>$&#x26;</code> du précédent
        tableau.)
      </td>
    </tr>
    <tr>
      <td><code>p1, p2…</code></td>
      <td>
        <p>
          Le n-ième chaîne de caractères trouvée par une sous-correspondance
          entre parenthèses, à condition que le premier paramètre soit un objet
          de type
          <a href="/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp"
            ><code>RegExp</code></a
          >.<br />(Correspond aux <code>$1</code>, <code>$2</code>… précédents.)
          Par exemple, si <code>/(\a+)(\b+)/</code> a été passé en paramètre,
          <code>p1</code> est la correspondance pour <code>\a+</code>, et
          <code>p2</code> pour <code>\b+</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>offset</code></td>
      <td>
        Le décalage de la sous-chaîne trouvée dans la chaîne d'entrée (par
        exemple, si la chaîne complète d'entrée était <code>'abcd'</code> et la
        sous-chaîne <code>'bc'</code> alors, cet argument vaudra 1.)
      </td>
    </tr>
    <tr>
      <td><code>string</code></td>
      <td>La chaîne compète examinée.</td>
    </tr>
  </tbody>
</table>

Le nombre d'arguments exact dépend du premier argument de `replaceAll()` : si c'est un objet de type [`RegExp`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp) et, si tel est le cas, du nombre de sous-correspondances entre parenthèses qu'il spécifie.

## Exemples

### Utiliser replaceAll()

```js
'aabbcc'.replaceAll('b', '.');
// 'aa..cc'
```

### Exceptions pour les expressions rationnelles non globales

Quand on utilise une expression rationnelle pour chercher une valeur, celle-ci doit être globale. Le code suivant ne fonctionnera pas :

```js example-bad
'aabbcc'.replaceAll(/b/, '.');
TypeError: replaceAll must be called with a global RegExp
```

L'exemple suivant, utilisant le marqueur `g`, fonctionnera :

```js example-good
'aabbcc'.replaceAll(/b/g, '.');
"aa..cc"
```

## Spécifications

| Spécification                                                                                                            |
| ------------------------------------------------------------------------------------------------------------------------ |
| {{SpecName('ESDraft', '#sec-string.prototype.replaceall', 'String.prototype.replaceAll')}} |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.replaceAll")}}

## Voir aussi

- [`String.prototype.replace()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/replace)
- [`String.prototype.match()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/String/match)
- [`RegExp.prototype.exec()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec)
- [`RegExp.prototype.test()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test)
