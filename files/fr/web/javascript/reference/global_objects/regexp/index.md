---
title: RegExp
slug: Web/JavaScript/Reference/Global_Objects/RegExp
tags:
  - Constructeur
  - Expressions rationnelles
  - JavaScript
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp
---
{{JSRef}}

Le constructeur **RegExp** crée un objet expression rationnelle pour la reconnaissance d'un modèle dans un texte.

Pour une introduction aux expressions rationnelles, lire le [chapitre Expressions rationnelles dans le Guide JavaScript](/fr/docs/Web/JavaScript/Guide/Expressions_r%C3%A9guli%C3%A8res).

{{EmbedInteractiveExample("pages/js/regexp-constructor.html")}}

## Syntaxe

Les notations littérales, par constructeur ou de base sont possibles :

    /modèle/marqueurs
    new RegExp(modèle[, marqueurs])
    RegExp(modèle[, marqueurs])

### Paramètres

- `modèle`
  - : Le texte de l'expression rationnelle ou, à partir d'ES5, un autre objet ou littéral `RegExp` à copier. Ce motif peut inclure [certains caractères spéciaux](/fr/docs/Web/JavaScript/Guide/Expressions_régulières#Types_de_caractères_spéciaux) pour correspondre à un ensemble de valeurs plus large (qu'une simple chaîne littérale).
- `marqueurs`

  - : Si cet argument est utilisé, il indique les marqueurs à utiliser pour l'expression rationnelle. Ces valeurs remplaceront celles de l'objet à copier si `modèle` est un objet `RegExp` (`lastIndex` sera réinitialisé à 0 à partir d'ECMAScript 2015 / ES6). Cet argument est une chaîne de caractères qui peut contenir une combinaison des valeurs suivantes:

    - `g`
      - : recherche globale ; retrouve toutes les correspondances plutôt que de s'arrêter après la première.
    - `i`
      - : la casse est ignorée. Si le marqueur `u` est également activé, les caractères Unicode équivalents pour la casse correspondent.
    - `m`
      - : multiligne : les caractères de début et de fin (^ et $) sont traités comme travaillant sur des lignes multiples (i.e, ils correspondent au début et à la fin de _chaque_ ligne (délimitée par \n ou \r), pas seulement au début ou à la fin de la chaîne d'entrée complète).
    - `u`
      - : unicode : traite le modèle comme une séquence de points de code Unicode (voir également [les chaînes binaires](/fr/docs/Web/API/DOMString/Binary)).
    - `y`
      - : adhérence : n'établit de correspondance qu'à partir de l'indice dans la chaîne cible indiqué par la propriété `lastIndex` de l'expression rationnelle (et ne cherche pas à établir de correspondance à partir d'indices au delà).
    - `s`
      - : "dotAll" : permet d'indiquer que `.` peut correspondre à un saut de ligne.

## Description

Il existe deux façons de créer un objet `RegExp` : une notation littérale ou un constructeur. La notation littérale est délimitée par des barres obliques (_slashes_) tandis que le constructeur utilise des apostrophes. Ainsi, les expressions suivantes créent la même expression rationnelle :

```js
/ab+c/i;                   // notation littérale
new RegExp('ab+c', 'i');   // constructeur
new RegExp(/ab+c/, 'i');   // notation littérale dans un constructeur
```

La notation littérale effectue la compilation de l'expression rationnelle lorsque l'expression est évaluée. Utilisez la notation littérale lorsque l'expression rationnelle reste constante. Par exemple, si vous utilisez la notation littérale pour construire une expression rationnelle utilisée dans une boucle, l'expression rationnelle ne sera pas recompilée à chaque itération.

Le constructeur de l'objet expression rationnelle, par exemple `new RegExp('ab+c')`, effectue la compilation de l'expression rationnelle au moment de l'exécution. Utilisez la fonction constructeur quand vous savez que le modèle d'une expression rationnelle sera variable, ou si vous ne connaissez pas le modèle et que vous l'obtiendrez d'une autre source, telle qu'une saisie utilisateur.

À partir d'ECMAScript 6, `new RegExp(/ab+c/, 'i')` ne déclenche plus d'exception {{jsxref("TypeError")}} ("can't supply flags when constructing one RegExp from another") lorsque le premier argument est une RegExp et que le second argument `marqueurs` est présent. Une nouvelle `RegExp` sera créée à la place à partir des arguments.

Lorsqu'on utilise le constructeur, les règles normales d'échappement de chaîne (le fait de faire précéder d'un \ les caractères spéciaux à l'intérieur d'une chaîne) sont requises. Par exemple, les définitions suivantes sont équivalentes :

```js
var re = /\w+/;
var re = new RegExp('\\w+');
```

## Propriétés

- {{jsxref("RegExp.prototype")}}
  - : Cette propriété permet d'ajouter des propriétés à tous les objets qui sont des expressions rationnelles.
- `RegExp.length`
  - : La valeur de longueur pour le constructeur dont la valeur est 2.
- {{jsxref("RegExp.@@species", "get RegExp[@@species]")}}
  - : La fonction de construction utilisée pour créer les objets dérivés.
- {{jsxref("RegExp.lastIndex")}}
  - : L'indice à partir duquel rechercher la prochaine correspondance.

## Méthodes

L'objet global `RegExp` ne possède pas de méthode propre. En revanche, il hérite de certaines méthodes via sa chaîne de prototypes.

## Le prototype de `RegExp` et les instances

### Propriétés

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/RegExp/prototype', 'Propriétés')}}

### Méthodes

{{page('/fr/docs/Web/JavaScript/Reference/Objets_globaux/RegExp/prototype', 'Méthodes')}}

## Exemples

### Utiliser une expression rationnelle pour modifier un format de données

Dans le script suivant, on utilise la méthode {{jsxref("String.prototype.replace()", "replace()")}} de {{jsxref("String")}} pour effectuer une correspondance sur le prénom et le nom pour les inverser. On utilise des parenthèses capturantes pour pouvoir utiliser les correspondances dans la construction du résultat (avec `$1` et `$2`).

```js
var re = /(\w+)\s(\w+)/;
var chaîne = 'Alain Dupont';
var nouvelleChaîne = chaîne.replace(re, '$2, $1');
console.log(nouvelleChaîne);
```

Cela affichera "Dupont, Alain".

### Utiliser une expression rationnelle pour découper des lignes avec différents sauts de ligne/fins de ligne

La fin de ligne par défaut dépend de la plateforme (Unix, Windows, etc.). Cette méthode de découpage fournie permet de découper indépendamment de la plateforme utilisée.

```js
var texte = 'Un texte\net un autre\r\npuis ensuite\rla fin';
var lignes = texte.split(/\r\n|\r|\n/);
console.log(lignes); // affiche [ 'Un texte', 'et un autre', 'puis ensuite', 'la fin' ]
```

On voit ici que l'ordre des modèles dans l'expression rationnelle importe.

### Utiliser une expression rationnelle sur plusieurs lignes

```js
var s = 'Et voici\nune autre ligne !';
s.match(/voici.*ligne/);
// Renvoie null
s.match(/voici[^]*ligne/);
// Renvoie ['voici\nune autre ligne']
```

### Utiliser une expression rationnelle avec le marqueur d'adhérence

Cet exemple illustre comment on peut utiliser ce marqueur qui recherche une correspondance après {{jsxref("RegExp.prototype.lastIndex")}}.

```js
var str = '#toto#';
var regex = /toto/y;

regex.lastIndex; // 0
regex.test(str); // true
regex.lastIndex = 1;
regex.test(str); // true
regex.lastIndex = 5;
regex.test(str); // false (lastIndex est pris en compte avec ce marqueur)
regex.lastIndex; // 0 (réinitialisation suite à l'échec)
```

### Les expressions rationnelles et les caractères Unicode

Comme mentionné ci-avant, les classes `\w` ou `\W` ne correspondent qu'à des caractères ASCII "a" à "z", "A" à "Z", "0" à "9" et "\_". Pour effectuer des correspondances sur d'autres caractères (comme par exemple les caractères cyrilliques), on utilisera `\uhhhh`, où "hhhh" représente la valeur Unicode exprimée en hexadécimal. Cet exemple illustre comment il est possible de séparer les caractères Unicode d'un mot.

```js
var texte = 'Образец text на русском языке';
var regex = /[\u0400-\u04FF]+/g;

var corresp = regex.exec(texte);
console.log(corresp[0]);      // affiche 'Образец'
console.log(regex.lastIndex); // affiche '7'

var corresp2 = regex.exec(texte);
console.log(corresp2[0]);     // affiche 'на' (n'affiche pas text
console.log(regex.lastIndex); // affiche '15'

// et ainsi de suite
```

Voici une ressource tierce pour obtenir les différents intervalles Unicode des différents alphabets : [Regexp-unicode-block](https://kourge.net/projects/regexp-unicode-block).

### Extraire un sous-domaine d'une URL

```js
var url = 'http://xxx.domaine.com';
console.log(/[^.]+/.exec(url)[0].substr(7)); // affiche 'xxx'
```

## Spécifications

<table class="standard-table">
  <tbody>
    <tr>
      <th scope="col">Spécification</th>
      <th scope="col">État</th>
      <th scope="col">Commentaires</th>
    </tr>
    <tr>
      <td>{{SpecName('ES1')}}</td>
      <td>{{Spec2('ES1')}}</td>
      <td>Définition initiale. Implémentée avec JavaScript 1.1.</td>
    </tr>
    <tr>
      <td>{{SpecName('ES5.1', '#sec-15.10', 'RegExp')}}</td>
      <td>{{Spec2('ES5.1')}}</td>
      <td></td>
    </tr>
    <tr>
      <td>
        {{SpecName('ES6', '#sec-regexp-regular-expression-objects', 'RegExp')}}
      </td>
      <td>{{Spec2('ES6')}}</td>
      <td>
        <p>
          Le constructeur <code>RegExp</code> ne renvoie plus d'exception
          lorsqu'il est utilisé avec un objet <code>RegExp</code> et que le
          second argument est utilisé. Ajout du marqueur d'adhérence et du
          marqueur Unicode.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        {{SpecName('ESDraft', '#sec-regexp-regular-expression-objects', 'RegExp')}}
      </td>
      <td>{{Spec2('ESDraft')}}</td>
      <td></td>
    </tr>
  </tbody>
</table>

## Compatibilité des navigateurs

{{Compat("javascript.builtins.RegExp")}}

### Notes spécifiques à Firefox

À partir de Firefox 34, dans le cas où on utilise un groupe capturant avec des quantificateurs qui l'invalident, le texte correspondant au groupe est désormais `undefined` et non la chaîne vide :

```js
// Firefox 33 ou antérieur
'x'.replace(/x(.)?/g, function(m, group) {
  console.log("'group:" + group + "'");
}); // 'group:'

// Firefox 34 ou supérieur
'x'.replace(/x(.)?/g, function(m, group) {
  console.log("'group:" + group + "'");
}); // 'group:undefined'
```

Pour des raisons de compatibilité web, `RegExp.$N` renverra une chaîne vide au lieu de `undefined` ({{bug(1053944)}}).

## Voir aussi

- [Le chapitre Expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Expressions_régulières) du [Guide JavaScript](/fr/docs/Web/JavaScript/Guide)
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.replace()")}}
