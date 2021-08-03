---
title: Fonctionnalités dépréciées
slug: Web/JavaScript/Reference/Deprecated_and_obsolete_features
tags:
  - Deprecated
  - JavaScript
  - Obsolete
  - Reference
translation_of: Web/JavaScript/Reference/Deprecated_and_obsolete_features
original_slug: JavaScript/Reference/Annexes/Fonctionnalités_dépréciées
---
{{JsSidebar("More")}}

Cette page liste les fonctionnalités de JavaScript qui sont dépréciées (_deprecated_) (c'est-à-dire que ces fonctionnalités sont toujours disponibles mais qu'il est prévu de les retirer) et les fonctionnalités obsolètes (celles qui ne sont plus utilisables).

## Fonctionnalités dépréciées

Ces fonctionnalités dépréciées peuvent toujours être utilisées mais avec une grande attention car elles pourront être supprimées complètements à l'avenir. En règle général, il faut les retirer du code qui les utilise.

### Propriétés de `RegExp`

Les propriétés suivantes sont dépréciées. Cela n'affecte pas le comportement de {{jsxref("Objets_globaux/String/replace", "replace", "Specifying_a_string_as_a_parameter")}} lorsqu'on utilise une chaîne de caractères en paramètre de remplacement :

<table class="standard-table">
  <tbody>
    <tr>
      <th>Propriété</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.n", "$1-$9")}}</td>
      <td>
        <p>
          Les sous-chaînes correspondantes s'il y en a.<br /><strong
            >Attention : </strong
          >Utiliser ces propriétés peut causer certains problèmes car les
          extensions des navigateurs peuvent les modifier. À éviter !
        </p>
      </td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.input", "$_")}}</td>
      <td>Voir <code>input</code>.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.multiline", "$*")}}</td>
      <td>Voir <code>multiline</code>.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.lastMatch", "$&amp;")}}</td>
      <td>Voir <code>lastMatch</code>.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.lastMatch", "$&amp;")}}</td>
      <td>Voir <code>lastParen</code>.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.leftContext", "$`")}}</td>
      <td>Voir <code>leftContext</code>.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.rightContext", "$'")}}</td>
      <td>Voir <code>rightContext</code>.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.input", "input")}}</td>
      <td>
        La chaîne par rapport à laquelle on recherche une correspondance grâce à
        l'expression rationnelle.
      </td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.lastMatch", "lastMatch")}}</td>
      <td>Les derniers caractères correspondants.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.lastParen", "lastParen")}}</td>
      <td>
        La dernière sous-chaîne (groupe entre parenthèses) correspondante si
        elle existe.
      </td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.leftContext", "leftContext")}}</td>
      <td>La sous-chaîne qui précède la correspondance la plus récente.</td>
    </tr>
    <tr>
      <td>{{jsxref("RegExp.rightContext", "rightContext")}}</td>
      <td>La sous-chaîne qui suit la correspondance la plus récente.</td>
    </tr>
  </tbody>
</table>

Les propriétés qui suivent sont désormais des propriétés des instances de `RegExp` et ne sont plus des propriétés de l'objet `RegExp` :

| Propriété                                                    | Description                                                                                                         |
| ------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------- |
| {{jsxref("RegExp.global", "global")}}             | Permet d'utiliser une expression rationnelle pour relever l'ensemble des correspondances ou uniquement la première. |
| {{jsxref("RegExp.ignoreCase", "ignoreCase")}} | Définit si la casse doit être ignorée ou non lors de la recherche d'une correspondance.                             |
| {{jsxref("RegExp.lastIndex", "lastIndex")}}     | L'index à partir duquel chercher la prochaine correspondance.                                                       |
| {{jsxref("RegExp.multiline", "multiline")}}     | Définit si la recherche doit s'effectuer sur une seule ligne ou plusieurs.                                          |
| {{jsxref("RegExp.source", "source")}}             | Le texte du motif.                                                                                                  |

### Méthodes de `RegExp`

- La méthode `compile` est dépréciée.
- La méthode `valueOf` n'est plus spécifiquement liée à `RegExp`. Utilisez {{jsxref("Object.valueOf()")}}.

### Propriétés de `Function`

- Les propriétés {{jsxref("Objets_globaux/Function/caller", "caller")}} et {{jsxref("Objets_globaux/Function/arguments", "arguments")}} sont dépréciées car elles permettaient de fuiter l'appelant de la fonction. En lieu et place de la propriété `arguments`, c'est l'objet {{jsxref("Fonctions/arguments", "arguments")}} qui doit être utilisée (notamment dans les fermetures).

### Générateur historique

- {{jsxref("Instructions/Legacy_generator_function", "L'instruction pour le générateur historique")}} et {{jsxref("Opérateurs/Legacy_generator_function", "l'expression de fonction du générateur historique")}} sont dépréciées. Il faut utiliser {{jsxref("Instructions/function*", "L'instruction function* ")}} et {{jsxref("Opérateurs/function*", "l'expression function*")}} à la place.
- {{jsxref("Opérateurs/Compréhensions_de_tableau", "Les compréhensions de tableaux JS1.7/JS1.8", "#Diff.C3.A9rences_avec_les_compr.C3.A9hensions_pr.C3.A9c.C3.A9dentes_JS1.7.2FJS1.8")}} et {{jsxref("Opérateurs/Compréhensions_de_générateur", "les compréhensions de générateurs JS1.7/JS1.8", "#Differences_to_the_older_JS1.7.2FJS1.8_comprehensions")}} sont dépréciées.

### Itérateur

- {{jsxref("Objets_globaux/StopIteration", "StopIteration")}} est déprécié.
- {{jsxref("Objets_globaux/Iterator", "Iterator")}} est déprécié.

### Méthode d'`Object`

- {{jsxref("Object.watch", "watch")}} et {{jsxref("Object.unwatch", "unwatch")}} sont dépréciés. L'objet {{jsxref("Proxy")}} doit être utilisé à la place.
- `__iterator__` est déprécié.
- {{jsxref("Object.noSuchMethod", "__noSuchMethod__")}} est déprécié. {{jsxref("Proxy")}} doit être utilisé à la place.

### Méthodes de `Date`

- {{jsxref("Objets_globaux/Date/getYear", "getYear")}} et {{jsxref("Objets_globaux/Date/setYear", "setYear")}} sont impactés par le « bug de l'an 2000 » et ont été remplacés par {{jsxref("Objets_globaux/Date/getFullYear", "getFullYear")}} et {{jsxref("Objets_globaux/Date/setFullYear", "setFullYear")}}.
- {{jsxref("Objets_globaux/Date/toISOString", "toISOString")}} doit être utilisé à la place de la méthode {{jsxref("Global_Objects/Date/toGMTString", "toGMTString")}} qui est dépréciée.
- {{jsxref("Objets_globaux/Date/toLocaleFormat", "toLocaleFormat")}} est dépréciée.

### Fonctions

- {{jsxref("Opérateurs/Expression_de_fermetures", "Les expressions de fermetures", "", 1)}} sont dépréciées. Il faut utiliser {{jsxref("Opérateurs/L_opérateur_function", "function")}} ou {{jsxref("Fonctions/Fonctions_fléchées", "les fonctions fléchées", "", 1)}} à la place.

### Proxy

- [Proxy.create](/en-US/docs/Archive/Web/Old_Proxy_API) et [Proxy.createFunction](/en-US/docs/Archive/Web/Old_Proxy_API) sont dépréciées. L'API {{jsxref("Objets_globaux/Proxy", "Proxy")}} doit être utilisée à la place.
- Les trappes de captures suivantes sont obsolètes :

  - `hasOwn` ({{bug(980565)}}, Firefox 33).
  - `getEnumerablePropertyKeys` ({{bug(783829)}}, Firefox 37)
  - `getOwnPropertyNames` ({{bug(1007334)}}, Firefox 33)
  - `keys` ({{bug(1007334)}}, Firefox 33)

### Séquences d'échappement

- Les séquences d'échappement octales (\ suivi par un, deux ou trois chiffres octaux) sont dépréciées pour les chaînes de caractères et les littéraux d'expressions rationnelles.
- Les fonctions {{jsxref("Objets_globaux/escape", "escape")}} et {{jsxref("Objets_globaux/unescape", "unescape")}} sont dépréciées. Ce sont les méthodes et objets {{jsxref("Objets_globaux/encodeURI", "encodeURI")}}, {{jsxref("Objets_globaux/encodeURIComponent", "encodeURIComponent")}}, {{jsxref("Objets_globaux/decodeURI", "decodeURI")}} ou {{jsxref("Objets_globaux/decodeURIComponent", "decodeURIComponent")}} qui doivent être utilisées pour encoder/décoder les séquences d'échappement des caractères spéciaux.

### Méthodes de `String`

- [Les méthodes d'enrobage HTML](/fr/docs/tag/HTML%20wrapper%20methods) telles que {{jsxref("String.prototype.fontsize")}} et {{jsxref("String.prototype.big")}} sont dépréciées.
- {{jsxref("String.prototype.quote")}} a été retiré de Firefox 37.
- Le paramètre non-standard `flags` de {{jsxref("String.prototype.search")}}, {{jsxref("String.prototype.match")}}, et {{jsxref("String.prototype.replace")}} sont dépréciés.
- {{jsxref("String.prototype.substr")}} ne sera sans doute pas retiré prochainement mais il est défini dans l'[annexe B du standard ECMA-262](https://www.ecma-international.org/ecma-262/9.0/index.html#sec-string.prototype.substr) dont l'introduction précise clairement que « les développeurs ne devraient pass utiliser ou présupposer l'existence de ces fonctionnalités et de ces comportements lors de l'écriture de nouveau code ECMAScript ».

## Fonctionnalités obsolètes

Ces fonctionnalités sont obsolètes et ont intégralement été retirées de JavaScript. Elles ne peuvent plus être utilisées.

### Object

| Propriété                                                                                | Description                                                                                    |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------- |
| {{jsxref("Objets_globaux/Object/count", "__count__")}}                 | Renvoie le nombre de propriétés énumérables d'un objet défini par l'utillisateur.              |
| {{jsxref("Objets_globaux/Object/Parent", "__parent__")}}             | Pointe vers le contexte d'un objet.                                                            |
| {{jsxref("Global_Objects/Object/eval", "Object.prototype.eval()")}} | Évalue une chaine de caractères étant du code JavaScript, dans le contexte de l'objet indiqué. |
| {{jsxref("Object.observe()")}}                                                 | Observe les modifications apportées à un objet de façon asynchrone.                            |
| {{jsxref("Object.unobserve()")}}                                             | Retire les observateurs ajoutés à un objet.                                                    |
| {{jsxref("Object.getNotifier()")}}                                             | Crée un objet qui permet de déclencher un changement de façon synthétique.                     |

### `Function`

| Propriété                                                            | Description                                    |
| -------------------------------------------------------------------- | ---------------------------------------------- |
| {{jsxref("Objets_globaux/Function/arity", "arity")}} | Nombre d'arguments déclarés pour une fonction. |

### `Array`

| Propriété                                | Description                                                           |
| ---------------------------------------- | --------------------------------------------------------------------- |
| {{jsxref("Array.observe()")}} | Observe les modifications apportées à un tableau de façon asynchrone. |
| {{jsxref("Array.unobserve()")}} | Retire les observateurs ajoutés à un tableau.                         |

### `Number`

- {{jsxref("Number.toInteger()")}}

### `ParallelArray`

- {{jsxref("ParallelArray")}}

### Instructions

- {{jsxref("Instructions/for_each...in", "for each...in")}}, utiliser {{jsxref("Instructions/for...of", "for...of")}} à la place.
- La décomposition de variables dans {{jsxref("Instructions/for...in", "for...in")}}, utiliser {{jsxref("Instructions/for...of", "for...of")}} à la place.
- Les blocs et expressions `let` sont obsolètes.

### E4X

Voir la page [E4X](/fr/docs/E4X) pour plus d'informations.

### Sharp variables

Voir la page [sur les variables « Sharp » en JavaScript](/en-US/docs/Archive/Web/Sharp_variables_in_JavaScript) pour plus d'informations.
