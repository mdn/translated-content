---
title: "RegExp : méthode exec()"
short-title: exec()
slug: Web/JavaScript/Reference/Global_Objects/RegExp/exec
l10n:
  sourceCommit: cd22b9f18cf2450c0cc488379b8b780f0f343397
---

La méthode **`exec()`** des instances de {{JSxRef("RegExp")}} exécute une recherche avec cette expression rationnelle pour trouver une correspondance dans une chaîne de caractères définie et retourne un tableau de résultats, ou {{JSxRef("null")}}.

{{InteractiveExample("Démonstration JavaScript&nbsp;: RegExp.prototype.exec()")}}

```js interactive-example
const regex = /fo+/g;
const str = "table football, foosball";
let array;

while ((array = regex.exec(str)) !== null) {
  console.log(
    `Trouvé ${array[0]}. Prochaine recherche à partir de ${regex.lastIndex}.`,
  );
  // Résultat attendu : "Trouvé foo. Prochaine recherche à partir de 9."
  // Résultat attendu : "Trouvé foo. Prochaine recherche à partir de 19."
}
```

## Syntaxe

```js-nolint
exec(str)
```

### Paramètres

- `str`
  - : La chaîne de caractères contre laquelle faire correspondre l'expression rationnelle. Toutes les valeurs sont [converties en chaînes de caractères](/fr/docs/Web/JavaScript/Reference/Global_Objects/String#conversion_en_chaîne_de_caractères), donc l'omission de ce paramètre ou le passage de `undefined` entraîne la recherche de la chaîne de caractères `"undefined"` par `exec()`, ce qui est rarement souhaité.

### Valeur de retour

Si la correspondance échoue, la méthode `exec()` retourne {{JSxRef("null")}}, et met la propriété {{JSxRef("RegExp/lastIndex", "lastIndex")}} de l'expression rationnelle à `0`.

Si la correspondance réussit, la méthode `exec()` retourne un tableau et met à jour la propriété {{JSxRef("RegExp/lastIndex", "lastIndex")}} de l'objet expression rationnelle. Le tableau retourné a le texte correspondant comme premier élément, puis un élément pour chaque groupe capturant du texte correspondant. Le tableau a également les propriétés supplémentaires suivantes&nbsp;:

- `index`
  - : L'index basé sur 0 de la correspondance dans la chaîne de caractères.
- `input`
  - : La chaîne de caractères originale contre laquelle la correspondance a été effectuée.
- `groups`
  - : Un [objet dont le prototype est `null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#objets_avec_prototype_null) contenant les groupes nommés capturant, avec leurs noms comme clés et les groupes capturant comme valeurs, ou {{JSxRef("undefined")}} si aucun groupe capturant nommé n'est défini. Consultez les [groupes capturant](/fr/docs/Web/JavaScript/Guide/Regular_expressions/Groups_and_backreferences) pour plus d'informations.
- `indices` {{Optional_Inline}}
  - : Cette propriété est présente uniquement lorsque le drapeau [`d`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/hasIndices) est défini. Il s'agit d'un tableau où chaque entrée représente les limites d'une correspondance de sous-chaîne de caractères. L'indice de chaque élément de ce tableau correspond à l'indice de la sous-chaîne de caractères correspondante dans le tableau retourné par `exec()`. Autrement dit, la première entrée de `indices` représente la correspondance entière, la deuxième représente le premier groupe capturant, etc. Chaque entrée est elle-même un tableau de deux éléments, dont le premier nombre représente l'indice de début de la correspondance et le second, son indice de fin.

    Le tableau `indices` possède également une propriété `groups`, qui contient un [objet dont le prototype est `null`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object#objets_avec_prototype_null) regroupant tous les groupes nommés capturant. Les clés sont les noms des groupes capturant et chaque valeur est un tableau de deux éléments, dont le premier nombre correspond à l'indice de début et le second à l'indice de fin du groupe capturant. Si l'expression rationnelle ne contient aucun groupe capturant nommé, `groups` vaut `undefined`.

## Description

Les objets JavaScript {{JSxRef("RegExp")}} _conservent un état_ lorsque le drapeau [global](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/global) ou le drapeau [adhérent](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky) est défini (par exemple, `/foo/g` ou `/foo/y`). Ils stockent dans {{JSxRef("RegExp/lastIndex", "lastIndex")}} la position de la correspondance précédente. Ce mécanisme interne permet à `exec()` d'itérer sur plusieurs correspondances dans une chaîne de caractères (avec des groupes capturant), au lieu de récupérer uniquement les chaînes de caractères correspondantes avec {{JSxRef("String.prototype.match()")}}.

Lorsque vous utilisez `exec()`, le drapeau global n'a aucun effet si le drapeau adhérent est défini — la correspondance est toujours adhérente.

`exec()` est la méthode primitive des expressions rationnelles. De nombreuses autres méthodes d'expression rationnelle appellent `exec()` en interne — y compris celles appelées par les méthodes de chaînes de caractères, comme [`[Symbol.replace]()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/Symbol.replace). Bien que `exec()` soit puissant (et soit la méthode la plus efficace), il n'exprime souvent pas l'intention avec le plus de clarté.

- Si vous voulez uniquement savoir si l'expression rationnelle correspond à une chaîne de caractères, sans vous soucier du texte correspondant, utilisez {{JSxRef("RegExp.prototype.test()")}} à la place.
- Si vous recherchez toutes les occurrences d'une expression rationnelle globale et que les informations comme les groupes capturant ne vous intéressent pas, utilisez {{JSxRef("String.prototype.match()")}} à la place. De plus, {{JSxRef("String.prototype.matchAll()")}} facilite la recherche de plusieurs parties d'une chaîne de caractères (avec des groupes capturant) en vous permettant d'itérer sur les correspondances.
- Si vous effectuez une recherche pour trouver l'indice de la correspondance dans la chaîne de caractères, utilisez plutôt la méthode {{JSxRef("String.prototype.search()")}}.

`exec()` est utile pour les opérations complexes qui ne peuvent pas être facilement réalisées au moyen des méthodes ci-dessus, souvent lorsque vous devez ajuster manuellement {{JSxRef("RegExp/lastIndex", "lastIndex")}}. ({{JSxRef("String.prototype.matchAll()")}} copie l'expression rationnelle, donc modifier `lastIndex` pendant l'itération sur `matchAll` n'a aucun effet sur l'itération.) Pour un exemple de ce type, voir [le recul de `lastIndex`](/fr/docs/Web/JavaScript/Reference/Global_Objects/RegExp/lastIndex#recul_de_lastindex).

## Exemples

### Utiliser `exec()`

Considérons l'exemple suivant&nbsp;:

```js
// Correspond à "quick brown" suivi de "jumps", en ignorant les caractères intermédiaires
// Se souvient de "brown" et "jumps"
// Ignore la casse
const re = /quick\s(?<color>brown).+?(jumps)/dgi;
const resultat = re.exec("The Quick Brown Fox Jumps Over The Lazy Dog");
```

Le tableau suivant montre l'état de `resultat` après l'exécution de ce script&nbsp;:

| Propriété | Valeur                                                             |
| --------- | ------------------------------------------------------------------ |
| `[0]`     | `"Quick Brown Fox Jumps"`                                          |
| `[1]`     | `"Brown"`                                                          |
| `[2]`     | `"Jumps"`                                                          |
| `index`   | `4`                                                                |
| `indices` | `[[4, 25], [10, 15], [20, 25]]`<br />`groups: { color: [10, 15 ]}` |
| `input`   | `"The Quick Brown Fox Jumps Over The Lazy Dog"`                    |
| `groups`  | `{ color: "Brown" }`                                               |

De plus, `re.lastIndex` est défini sur `25`, car cette expression rationnelle est globale.

### Trouver les correspondances successives

Si votre expression rationnelle utilise le drapeau [`g`](/fr/docs/Web/JavaScript/Guide/Regular_expressions#recherche_avancée_avec_indicateurs), vous pouvez utiliser plusieurs fois la méthode `exec()` pour trouver des correspondances successives dans la même chaîne de caractères. Dans ce cas, la recherche commence dans la sous-chaîne de caractères de `chaine` définie par la propriété {{JSxRef("RegExp/lastIndex", "lastIndex")}} de l'expression rationnelle ({{JSxRef("RegExp/test", "test()")}} fait également avancer la propriété {{JSxRef("RegExp/lastIndex", "lastIndex")}}). Notez que la propriété {{JSxRef("RegExp/lastIndex", "lastIndex")}} n'est pas réinitialisée lorsque vous recherchez une chaîne de caractères différente, et que la recherche commence à sa valeur actuelle {{JSxRef("RegExp/lastIndex", "lastIndex")}}.

Par exemple, supposons que vous ayez le script suivant&nbsp;:

```js
const monRe = /ab*/g;
const chaine = "abbcdefabh";
let monTableau;
while ((monTableau = monRe.exec(chaine)) !== null) {
  let msg = `Trouvé ${monTableau[0]}. `;
  msg += `Le prochain résultat commence à ${monRe.lastIndex}`;
  console.log(msg);
}
```

Ce script affiche le texte suivant&nbsp;:

```plain
Trouvé abb. Le prochain résultat commence à 3
Trouvé ab. Le prochain résultat commence à 9
```

> [!WARNING]
> De nombreux pièges peuvent provoquer une boucle infinie&nbsp;!
>
> - Ne placez _pas_ le littéral d'expression rationnelle (ou le constructeur {{JSxRef("RegExp")}}) dans la condition `while` — cela recrée l'expression rationnelle à chaque itération et réinitialise {{JSxRef("RegExp/lastIndex", "lastIndex")}}.
> - Vérifiez que le [drapeau global (`g`)](/fr/docs/Web/JavaScript/Guide/Regular_expressions#recherche_avancée_avec_indicateurs) est défini, sinon `lastIndex` n'avance jamais.
> - Si l'expression rationnelle peut correspondre à des caractères de longueur nulle (par exemple, `/^/gm`), incrémentez manuellement {{JSxRef("RegExp/lastIndex", "lastIndex")}} à chaque fois pour éviter de rester bloqué au même endroit.

Vous pouvez généralement remplacer ce type de code par {{JSxRef("String.prototype.matchAll()")}} pour réduire le risque d'erreur.

### Utiliser `exec()` avec des littéraux d'expression rationnelle

Vous pouvez également utiliser `exec()` sans créer explicitement un objet {{JSxRef("RegExp")}}&nbsp;:

```js
const correspondances = /(bonjour \S+)/.exec("Ceci est un bonjour monde !");
console.log(correspondances[1]);
```

Cela affiche un message contenant `'bonjour monde !'`.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Le guide [des expressions rationnelles](/fr/docs/Web/JavaScript/Guide/Regular_expressions)
- L'objet natif {{JSxRef("RegExp")}}
