---
title: RegExp.prototype.exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
tags:
  - JavaScript
  - Méthode
  - Prototype
  - Reference
  - RegExp
translation_of: Web/JavaScript/Reference/Global_Objects/RegExp/exec
original_slug: Web/JavaScript/Reference/Objets_globaux/RegExp/exec
---
{{JSRef}}

La méthode **`exec()`** exécute la recherche d'une correspondance sur une chaîne de caractères donnée. Elle renvoie un tableau contenant les résultats ou {{jsxref("null")}}.

Si on souhaite uniquement savoir s'il y a une correspondance, on utilisera la méthode {{jsxref("RegExp.prototype.test()")}} ou la méthode {{jsxref("String.prototype.search()")}}.

{{EmbedInteractiveExample("pages/js/regexp-prototype-exec.html")}}

Les objets représentant des expressions rationnelles gardent un état en mémoire lorsqu'ils utilisent les marqueurs {{jsxref("RegExp.global", "global")}} ou {{jsxref("RegExp.sticky", "sticky")}} et ils gardent notamment en mémoire {{jsxref("RegExp.lastIndex", "lastIndex")}} à partir de la correspondance précédemment trouvée. Ainsi, `exec()` peut être utilisée afin de parcourir plusieurs correspondances dans un texte (avec des groupes capturants) (contrairement à {{jsxref("String.prototype.match()")}}).

## Syntaxe

```js
regexObj.exec(chaîne)
```

### Paramètres

- `chaîne`
  - : La chaîne de caractères dans laquelle on recherche la correspondance décrite par l'expression rationnelle.

### Valeur de retour

S'il y a une correspondance, la méthode `exec()` renvoie un tableau (contenant des éléments et deux propriétés `index` et `values`, cf. ci-après) et met à jour les propriétés de l'objet représentant l'expression rationnelle (notamment {{jsxref("RegExp.lastIndex", "lastIndex")}}). Le tableau renvoyé contient le texte qui correspond dans le premier élément puis un élément pour chaque groupe capturé dans les parenthèses capturantes.

S'il n'y a aucune correspondance, la méthode `exec()` renvoie {{jsxref("null")}} et la propriété {{jsxref("RegExp.lastIndex", "lastIndex")}} reçoit la valeur 0.

## Description

Si on a l'exemple suivant :

```js
// On a une correspondance si on a "quick brown" suivi par "jumps", on ignore les caractères entre
// On garde en mémoire "brown" et "jumps"
// On ignore la casse
var re = /quick\s(brown).+?(jumps)/ig;
var result = re.exec('The Quick Brown Fox Jumps Over The Lazy Dog');
```

Le tableau suivant montre l'état résultant suite à ce script :

<table class="fullwidth-table">
  <tbody>
    <tr>
      <td class="header">Objet</td>
      <td class="header">Propriété/Index</td>
      <td class="header">Description</td>
      <td class="header">Exemple</td>
    </tr>
    <tr>
      <td rowspan="4"><code>result</code></td>
      <td><code>[0]</code></td>
      <td>La chaîne complète des caractères qui correspondent.</td>
      <td><code>"Quick Brown Fox Jumps"</code></td>
    </tr>
    <tr>
      <td>
        <code>[1], ...[<em>n</em> ]</code>
      </td>
      <td>
        Les sous-chaînes correspondantes aux groupes capturants s'il y en a. Le
        nombre de groupes de parenthèses capturantes est illimité.
      </td>
      <td>
        <code>result[1] === "Brown"<br />result[2] === "Jumps"</code>
      </td>
    </tr>
    <tr>
      <td><code>index</code></td>
      <td>
        L'indice (compté à partir de 0) de la correspondance dans la chaîne.
      </td>
      <td><code>4</code></td>
    </tr>
    <tr>
      <td><code>input</code></td>
      <td>La chaîne de caractères utilisée en entrée.</td>
      <td><code>"The Quick Brown Fox Jumps Over The Lazy Dog"</code></td>
    </tr>
    <tr>
      <td rowspan="5"><code>re</code></td>
      <td><code>lastIndex</code></td>
      <td>
        L'indice à partir duquel chercher la prochaine correspondance. Lorsque
        le drapeau "g" est absent, cette propriété sera 0.
      </td>
      <td><code>25</code></td>
    </tr>
    <tr>
      <td><code>ignoreCase</code></td>
      <td>
        Indique si le drapeau "<code>i</code>" a été utilisé pour ignorer la
        casse.
      </td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td><code>global</code></td>
      <td>
        Indique si le drapeau "<code>g</code>" a été utilisé pour la
        correspondance globale.
      </td>
      <td><code>true</code></td>
    </tr>
    <tr>
      <td><code>multiline</code></td>
      <td>
        Indique si le drapeau "<code>m</code>" a été utilisé pour chercher une
        correspondance sur plusieurs lignes.
      </td>
      <td><code>false</code></td>
    </tr>
    <tr>
      <td><code>source</code></td>
      <td>Le texte du motif.</td>
      <td><code>"quick\s(brown).+?(jumps)"</code></td>
    </tr>
  </tbody>
</table>

## Exemples

### Trouver des correspondances successives

Si on utilise le drapeau "`g`" dans l'expression rationnelle, on peut utiliser la méthode `exec()` plusieurs fois afin de trouver les correspondances successives dans la chaîne. Lorsqu'on procède ainsi, la recherche reprend à la position indiquée par la propriété {{jsxref("RegExp.lastIndex", "lastIndex")}} ({{jsxref("RegExp.prototype.test()", "test()")}} fera également progresser la propriété {{jsxref("RegExp.lastIndex", "lastIndex")}}).

On notera que la propriété {{jsxref("RegExp.lastIndex", "lastIndex")}} ne sera pas réinitialisée lors de la recherche sur une autre chaîne de caractères, c'est la valeur existante de {{jsxref("RegExp.lastIndex", "lastIndex")}} qui sera utilisée.

Par exemple, si on utilise le fragment de code suivant :

```js
var maRegex = /ab*/g;
var str = 'abbcdefabh';
var monTableau;
while ((monTableau = maRegex.exec(str)) !== null) {
  var msg = 'Trouvé ' + monTableau[0] + '. ';
  msg += 'Prochaine correspondance à partir de ' + maRegex.lastIndex;
  console.log(msg);
}
```

Le script affichera alors :

```
Trouvé abb. Prochaine correspondance à partir de 3
Trouvé ab. Prochaine correspondance à partir de 9
```

> **Attention :** Il ne faut pas placer un littéral d'expression rationnelle (ou le constructeur {{jsxref("RegExp")}}) au sein de la condition `while` car cela créerait un boucle infinie s'il y a une correspondance car la propriété {{jsxref("RegExp.lastIndex", "lastIndex")}} serait redéfinie à chaque itération. Il faut également s'assurer que le drapeau global est défini sinon on aura également une boucle.

### Utiliser `exec()` avec des littéraux

Il est aussi possible d'utiliser `exec()` sans créer d'objet {{jsxref("RegExp")}} explicite :

```js
var matches = /(coucou \S+)/.exec('Ceci est un coucou monde !');
console.log(matches[1]);
```

Cela affichera 'coucou monde !'.

## Spécifications

| Spécification                                                                                | État                         | Commentaires                                          |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ----------------------------------------------------- |
| {{SpecName('ES3')}}                                                                     | {{Spec2('ES3')}}         | Définition initiale. Implémentée avec JavaScript 1.2. |
| {{SpecName('ES5.1', '#sec-15.10.6.21', 'RegExp.exec')}}                     | {{Spec2('ES5.1')}}     |                                                       |
| {{SpecName('ES6', '#sec-regexp.prototype.exec', 'RegExp.exec')}}         | {{Spec2('ES6')}}         |                                                       |
| {{SpecName('ESDraft', '#sec-regexp.prototype.exec', 'RegExp.exec')}} | {{Spec2('ESDraft')}} |                                                       |

## Compatibilité des navigateurs

{{Compat("javascript.builtins.RegExp.exec")}}

## Voir aussi

- Le chapitre sur [les expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Expressions_régulières) du [Guide JavaScript](/fr/docs/Web/JavaScript/Guide)
- {{jsxref("RegExp")}}
- {{jsxref("String.prototype.match()")}}
- {{jsxref("String.prototype.matchAll()")}}
