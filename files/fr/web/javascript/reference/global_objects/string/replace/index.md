---
title: String.prototype.replace()
slug: Web/JavaScript/Reference/Global_Objects/String/replace
tags:
  - Chaîne
  - Expression
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - Régulière
translation_of: Web/JavaScript/Reference/Global_Objects/String/replace
original_slug: Web/JavaScript/Reference/Objets_globaux/String/replace
---
{{JSRef}}

La méthode **`replace()`** renvoie une nouvelle chaîne de caractères dans laquelle tout ou partie des correspondances à un `modèle` sont remplacées par un `remplacement`. Le `modèle` utilisé peut être une {{jsxref("RegExp")}} et le remplacement peut être une chaîne ou une fonction à appeler pour chaque correspondance. Si `modèle` est une chaîne de caractères, seule la première correspondance sera remplacée.

La chaîne de caractère originale reste inchangée.

{{EmbedInteractiveExample("pages/js/string-replace.html")}}

## Syntaxe

```js
chn.replace(regexp|souschn, nouvSouschn|fonction)
```

### Paramètres

- `regexp` (modèle)
  - : Un objet ou un littéral {{jsxref("RegExp")}}. La ou les correspondances sont remplacées par `nouvSouschn` ou par la valeur retournée par la `fonction` indiquée.
- `souschn` (modèle)
  - : Une {{jsxref("String")}} qui est à remplacer par `nouvSouschn`. Elle est traitée comme une chaîne de caractères verbatim et elle n'est _pas_ interprétée comme une expression régulière. Seule la première occurrence sera remplacée.
- `nouvSouschn` (remplacement)
  - : La {{jsxref("String")}} qui remplace la chaîne de caractères indiquée par le paramètre `regexp` ou `souschn`. Un certain nombre de modèles de remplacement spéciaux sont supportés ; voir la section "[Indiquer une chaîne de caractères comme paramètre](#Indiquer_une_chaîne_de_caractère_comme_paramètre)" ci-dessous.
- `fonction` (remplacement)
  - : Une fonction à appeler pour créer la nouvelle sous-chaîne de caractères à utiliser pour remplacer la `regexp` ou la `souschn` donnée. Les arguments passés à cette fonction sont décrits dans la section "[Indiquer une fonction comme paramètre](#Indiquer_une_fonction_comme_paramètre)" ci-dessous.

### Valeur retournée

Une nouvelle chaîne de caractères avec tout ou partie des correspondances du modèle remplacées par un remplacement.

## Description

Cette méthode ne change pas l'objet {{jsxref("String")}} auquel elle est appliquée. Elle retourne simplement une nouvelle chaîne de caractères.

Pour réaliser une recherche et remplacement global(e), incluez le commutateur `g` dans l'expression régulière.

### Indiquer une chaîne de caractère comme paramètre

La chaîne de caractère de remplacement peut inclure les modèles de remplacement spéciaux suivants :

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Modèle</td>
      <td class="header">Insère</td>
    </tr>
    <tr>
      <td><code>$$</code></td>
      <td>Insère un "$".</td>
    </tr>
    <tr>
      <td><code>$&#x26;</code></td>
      <td>Insère la chaine de caractère en correspondance.</td>
    </tr>
    <tr>
      <td><code>$`</code></td>
      <td>
        Insère la partie de la chaîne de caractère qui précède la sous-chaîne en
        correspondance.
      </td>
    </tr>
    <tr>
      <td><code>$'</code></td>
      <td>
        Insère la partie de la chaîne de caractère qui suit la sous-chaîne en
        correspondance.
      </td>
    </tr>
    <tr>
      <td><code>$n</code></td>
      <td>
        <p>
          Où <code><em>n</em></code> est un entier positif inférieur à 100.
          Insère la <em>n</em> ième chaîne de sous-correspondance entre
          parenthèses, à condition que le premier argument ait été un objet
          {{jsxref("RegExp")}}. Notez que ceci est réalisé en
          indices base 1.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### Indiquer une fonction comme paramètre

Vous pouvez indiquer une fonction comme second paramètre. Dans ce cas, cette fonction sera appelée après que la recherche a été effectuée. Le résultat de la fonction (valeur retournée) sera utilisé comme chaîne de remplacement. (Note : les modèles de remplacement spéciaux mentionnés ci-dessus ne s'appliquent _pas_ dans ce cas). Notez que cette fonction sera appelée plusieurs fois, pour chaque correspondance complète à remplacer si l'expression régulière dans le premier paramètre est globale.

Les arguments de cette fonction sont les suivants&nbsp;:

<table class="standard-table">
  <tbody>
    <tr>
      <td class="header">Nom possible</td>
      <td class="header">Valeur fournie</td>
    </tr>
    <tr>
      <td><code>correspondance</code></td>
      <td>
        La chaîne de caractère en correspondance. (Correspond au
        <code>$&#x26;</code> défini ci-dessus.)
      </td>
    </tr>
    <tr>
      <td><code>p1, p2, ...</code></td>
      <td>
        <p>
          La <em>n</em>-ième chaîne de sous-correspondance entre parenthèses
          capturantes, à condition que le premier argument de <code
            >replace()</code
          >
          soit un objet <code>RegExp</code>. (Correspond aux <code>$1</code>,
          <code>$2</code>, etc. ci-dessus.) Par exemple,
          si <code>/(\a+)(\b+)/</code> a été indiqué, <code>p1</code> correspond
          à <code>\a+</code>, et <code>p2</code> à <code>\b+</code>.
        </p>
      </td>
    </tr>
    <tr>
      <td><code>decalage</code></td>
      <td>
        Le décalage entre la sous-chaîne en correspondance à l'intérieur de la
        chaîne complète en cours d'analyse. (Par exemple, si la chaîne complète
        était <code>'abcd'</code>, et que le chaîne en correspondance
        était <code>'bc'</code>, alors cet argument vaudra 1.)
      </td>
    </tr>
    <tr>
      <td><code>chaine</code></td>
      <td>La chaîne complète en cours d'analyse.</td>
    </tr>
  </tbody>
</table>

(Le nombre exact d'arguments varie suivant que le premier paramètre est ou non un objet {{jsxref("RegExp")}} et, dans ce cas, du nombre de sous-correspondances entre parenthèses qu'il indique.)

L'exemple suivant affectera `'abc - 12345 - #$*%'` à la variable `nouvelleChaine`&nbsp;:

```js
function remplaceur(correspondance, p1, p2, p3, decalage, chaine) {
  // p1 est non numérique, p2 numérique, et p3 non-alphanumérique
  return [p1, p2, p3].join(' - ');
}
var nouvelleChaine = 'abc12345#$*%'.replace(/([^\d]*)(\d*)([^\w]*)/, remplaceur);
console.log(nouvelleChaine); // abc - 12345 - #$*%
```

## Exemples

### Définition de l'expression régulière dans `replace()`

Dans l'exemple suivant, l'expression régulière est définie dans `replace()` et inclut l'indicateur d'indifférence à la casse.

```js
var chn = 'Twas the night before Xmas...';
var nouvChn = chn.replace(/xmas/i, 'Christmas');
console.log(nouvChn); // Twas the night before Christmas...
```

Cela affiche 'Twas the night before Christmas...'.

> **Note :** Voir [ce guide](/fr/docs/Web/JavaScript/Guide/Expressions_r%C3%A9guli%C3%A8res) pour plus d'explications concernant les expressions régulières.

### Utilisation de `global` et `ignore` avec `replace()`

Le remplacement global ne peut être fait qu'avec une expression régulière. Dans l'exemple suivant, l'expression régulière inclut les indicateurs global et indifférence à la casse, qui permettent à `replace()` de remplacer chaque occurrence de 'pommes' dans la chaîne par 'oranges'.

```js
var re = /pommes/gi;
var chn = 'Les pommes sont rondes, et les pommes sont juteuses.';
var nouvChn = chn.replace(re, 'oranges');
console.log(nouvChn); // Les oranges sont rondes, et les oranges sont juteuses.
```

Cela affiche 'Les oranges sont rondes, et les oranges sont juteuses.'.

### Inverser des mots dans une chaîne de caractères

Le script suivant intervertit les mots dans la chaîne de caractères. Pour le texte de remplacement, le script utilise les modèles de remplacement `$1` et `$2`.

```js
var re = /(\w+)\s(\w+)/;
var chn = 'Jean Martin';
var nouvChn = chn.replace(re, "$2, $1");
console.log(nouvChn); // Martin, Jean
```

Cela affiche 'Martin, Jean'.

### Utilisation d'une fonction inline modifiant les caractères en correspondance

Dans cet exemple, toutes les occurrences des lettres majuscules sont converties en minuscules, et un tiret est inséré juste avant l'emplacement de la correspondance. La chose importante ici est que des opérations suppémentaires sont nécessaires sur l'élément en correspondance avant qu'il ne soit retourné comme remplacement.

La fonction de remplacement accepte le fragment en correspondance comme paramètre, et elle l'utilise pour transformer sa casse et y concaténer le tiret avant de le retourner.

```js
function styleFormatTiret(nomPropriete) {
  function majusculesEnTiretMinuscules(correspondance, decalage, chaine) {
    return (decalage > 0 ? '-' : '') + correspondance.toLowerCase();
  }
  return nomPropriete.replace(/[A-Z]/g, majusculesEnTiretMinuscules);
}
```

Avec ` styleFormatTiret(``'borderTop') `, cela renvoie 'border-top'.

Du fait que nous voulons transformer davantage le résultat de la correspondance avant la substitution finale, nous devons utiliser une fonction. Cela force l'évaluation de la correspondance avant la méthode {{jsxref ("String.prototype.toLowerCase()", "toLowerCase()")}}. Si nous avions essayé de le faire en utilisant la correspondance sans fonction, le {{jsxref ("String.prototype.toLowerCase()", "toLowerCase()")}} n'aurait eu aucun effet.

```js
var nouvChn = nomPropriete.replace(/[A-Z]/g, '-' + '$&'.toLowerCase()); // ne fonctionne pas
```

Ceci est dû au fait que `'$&'.toLowerCase()` serait d'abord évalué comme un littéral de chaîne (résultant en le même `'$&'`) avant d'utiliser les caractères comme modèle.

### Remplacer un degré Fahrenheit par son équivalent Celsius

L'exemple suivant remplace des degrés Fahrenheit par leur équivalent en degrés Celsius. Les degrés Fahrenheit doivent être un nombre se terminant par F. La fonction renvoie le nombre en Celsius se terminant par C. Par exemple, si le nombre de départ est 212F, la fonction renvoie 100C. Si le nombre de départ est 0F, la fonction retourne -17.77777777777778C.

L'expression régulière `test` vérifie tout nombre se terminant par F. Le nombre de degrés Fahrenheit est accessible à la fonction via son deuxième paramètre, `p1`. La fonction définit le nombre Celsius sur la base des degrés Fahrenheit transmis dans une chaîne à la fonction `f2c()`. `f2c()` renvoie ensuite le nombre Celsius. Cette fonction se rapproche de l'indicateur `s///e` de Perl.

```js
function f2c(x) {
  function convertir(chn, p1, decalage, s) {
    return ((p1-32) * 5/9) + 'C';
  }
  var s = String(x);
  var test = /(-?\d+(?:\.\d*)?)F\b/g;
  return s.replace(test, convertir);
}
```

### Utiliser une fonction inline avec une expression régulière pour éviter des boucles `for`

L'exemple suivant accepte un modèle chaîne et le convertit en un tableau d'objets.

**Entrée :**

Une chaîne de caractères composée des caractères `x`, `-` et `_`

```js
x-x_
x---x---x---x---
x-xxx-xx-x-
x_x_x___x___x___
```

**Sortie :**Un tableau d'objets. Un `'x'` dénote un état `'marche'`, un `'-'` symbolise un état '`arret`' et un  `'_'` (blanc souligné) symbolise la longueur d'un état `'marche'`.

```json
[
  { marche: true, longueur: 1 },
  { marche: false, longueur: 1 },
  { marche: true, longueur: 2 }
  ...
]
```

**Fragment :**

```js
var chn = 'x-x_';
var tabRet = [];
chn.replace(/(x_*)|(-)/g, function(correspondance, $1, $2){
  if($1) tabRet.push({ marche: true, longueur: $1.length });
  if($2) tabRet.push({ marche: false, longueur: 1 });
});

console.log(tabRet);
```

Ce fragment génère un tableau de 3 objets au format désiré sans utiliser de boucle `for`.

## Spécifications

| Spécification                                                                                                    | Statut                       | Commentaire                                        |
| ---------------------------------------------------------------------------------------------------------------- | ---------------------------- | -------------------------------------------------- |
| {{SpecName('ES3')}}                                                                                         | {{Spec2('ES3')}}         | Définition initiale. Implémentée en JavaScript 1.2 |
| {{SpecName('ES5.1', '#sec-15.5.4.11', 'String.prototype.replace')}}                         | {{Spec2('ES5.1')}}     |                                                    |
| {{SpecName('ES6', '#sec-string.prototype.replace', 'String.prototype.replace')}}     | {{Spec2('ES6')}}         |                                                    |
| {{SpecName('ESDraft', '#sec-string.prototype.replace', 'String.prototype.replace')}} | {{Spec2('ESDraft')}} |                                                    |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.String.replace")}}

## Notes spécifiques à Firefox

- `flags` était un troisième argument non standard disponible uniquement dans Gecko : *str*.replace(_regexp_|_substr_, _newSubStr_|_function, flags_)
- À partir de Gecko 27 {{geckoRelease(27)}}, cette méthode a été modifiée pour être conforme à la spécification ECMAScript. Lorsque `replace()` est appelée avec une expression régulière globale, la propriété {{jsxref("RegExp.lastIndex")}} (si elle est définie) sera remise à `0` ({{bug(501739)}}).
- À partir de Gecko 39 {{geckoRelease(39)}}, l'argument non-standard `flags` est désapprouvé et déclenche un avertissement dans la console ({{bug(1142351)}}).
- À partir de Gecko 47 {{geckoRelease(47)}}, l'argument non-standard `flags` n'est plus supporté dans les versions non distribution et sera bientôt retiré complètement ({{bug(1245801)}}).
- À partir de Gecko 49 {{geckoRelease(49)}}, l'argument non-standard `flags` n'est plus supporté ({{bug(1108382)}}).

## Voir aussi

- {{jsxref("String.prototype.match()")}}
- {{jsxref("RegExp.prototype.exec()")}}
- {{jsxref("RegExp.prototype.test()")}}
