---
title: switch
slug: Web/JavaScript/Reference/Statements/switch
tags:
  - Instruction
  - JavaScript
  - Reference
translation_of: Web/JavaScript/Reference/Statements/switch
original_slug: Web/JavaScript/Reference/Instructions/switch
---
{{jsSidebar("Statements")}}

L'instruction **`switch`** évalue une expression et, selon le résultat obtenu et le cas associé, exécute les instructions correspondantes.

{{EmbedInteractiveExample("pages/js/statement-switch.html")}}

## Syntaxe

```js
switch (expression) {
  case valeur1:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur1
    instructions1;
    [break;]
  case valeur2:
    // Instructions à exécuter lorsque le résultat
    // de l'expression correspond à valeur2
    instructions 2;
    [break;]
  …
  case valeurN:
    // Instructions à exécuter lorsque le résultat
    // de l'expression à valeurN
    instructionsN;
    [break;]
  [default:
    // Instructions à exécuter lorsqu'aucune des valeurs
    // ne correspond
    instructions_def;
    [break;]]
}
```

- `expression`
  - : Une expression à comparer avec chacune des clause `case`.
- `case expressionN` {{optional_inline}}
  - : Une clause qu'on compare avec `expression`.
- `default` {{optional_inline}}
  - : Une clause exécutée si aucune correspondance n'est trouvée avec les clause `case` (et/ou s'il n'y a pas de `break` pour les clauses `case` précédentes).
- `instructionsN`
  - : Les instructions à exécuter lorsque l'`expression` correspond au cas présenté pour cette clause.
- `instructions_def`
  - : Les instructions à exécuter si l'`expression` ne correspond à aucun cas de figure précédemment décrit.

## Description

Une instruction `switch` commence par évaluer l'expression fournie (cette évaluation ne se produit qu'une fois). Si une correspondance est trouvée, le programme exécutera les instructions associées. Si plusieurs cas de figure correspondent, le premier sera sélectionné (même si les cas sont différents les uns des autres).

Le programme recherche tout d'abord une clause `case` dont l'expression est évaluée avec la même valeur que l'expression d'entrée (au sens de {{jsxref("Opérateurs/Opérateurs_de_comparaison","l'égalité stricte","#.C3.89galit.C3.A9_stricte_(.3D.3D.3D)",1)}}. Si une telle clause est trouvée, les instructions associées sont exécutées. Si aucune clause `case` n'est trouvée, le programme recherche la clause optionnelle `default` et si elle existe, les instructions correspondantes sont exécutées. Si cette clause optionnelle n'est pas utilisée, le programme continue son exécution après l'instruction `switch`. Par convention, la clause `default` est utilisée en dernière mais cela n'est pas nécessaire.

L'instruction {{jsxref("Instructions/break","break")}} peut optionnellement être utilisée pour chaque cas et permet de s'assurer que seules les instructions associées à ce cas seront exécutées. Si `break` n'est pas utilisé, le programme continuera son exécution avec les instructions suivantes (des autres cas de l'instruction `switch`).

## Exemples

### Utiliser `switch`

Dans l'exemple suivant, si l'expression `expr` vaut "Bananes", le programme trouve la correspondance et exécute l'instruction associée. Lorsque l'instruction `break` est trouvée, le programme « sort » de l'instruction `switch` et continue l'exécution avec les instructions suivantes. Si `break` n'avait pas été utilisé, l'instruction du cas "Cerises" aurait également été exécutée.

```js
switch (expr) {
  case "Oranges":
    console.log("Oranges : 0.59 € le kilo.");
    break;
  case "Pommes":
    console.log("Pommes : 0.32 € le kilo.");
    break;
  case "Bananes":
    console.log("Bananes : 0.48 € le kilo.");
    break;
  case "Cerises":
    console.log("Cerises : 3.00 € le kilo.");
    break;
  case "Mangues":
  case "Papayes":
    console.log("Mangues et papayes : 2.79 € le kilo.");
    break;
  default:
    console.log("Désolé, nous n'avons plus de " + expr + ".");
}

console.log("Autre chose ?");
```

### Que se passe-t-il si on oublie un `break` ?

Si on omet une instruction `break`, le script exécutera les instructions pour le cas correspondant et aussi celles pour les cas suivants jusqu'à la fin de l'instruction `switch` ou jusqu'à une instruction `break`. Par exemple :

```js
var toto = 0;
switch (toto) {
    case -1:
        console.log('moins un');
        break;
    case 0: // toto vaut 0 donc ce cas correspond
        console.log(0);
        // NOTE : le break aurait du être placé ici
    case 1: // pas de break pour 'case 0:' les instructions de ce cas sont
            // exécutées aussi
        console.log(1);
        break; // on a un break a ce niveau donc les instructions
               // des cas suivants ne seront pas exécutées
    case 2:
        console.log(2);
        break;
    default:
        console.log('default');
}
```

### Peut-on intercaler la règle par défaut ?

Oui, il est possible de placer le cas `default` entre deux autres cas. Ainsi, si on a une valeur qui ne correspond pas aux différents cas, elle passera par le bloc `default` puis par les autres s'il n'y a pas de `break`. Par exemple :

```js
var toto = 5
switch (toto) {
  case 2:
    console.log(2); // ne sera pas exécuté
    break;
  default:
    console.log("default"); // sera exécuté
  case 1:
    console.log("1"); // sera exécuté car il n'y a
                      // pas de break avant
}
// La console affichera "default" puis "1"
```

### Méthodes pour regrouper différents cas

Pour la source depuis laquelle les exemples suivants ont été adaptés, voir [cette question Stack Overflow](https://stackoverflow.com/questions/13207927/switch-statement-multiple-cases-in-javascript).

#### Regrouper différents cas pour exécuter une unique opération

Cette méthode utilise le fait que s'il n'y a pas d'instruction {{jsxref("Instructions/break","break")}}, l'exécution se poursuivra avec les instructions des cas suivants (même si les expressions de ces cas ne correspondent pas à la valeur de l'expression d'entrée).

On peut donc regrouper différentes valeurs les unes à la suite des autres pour exécuter des instructions pour ces valeurs :

```js
var animal = 'girafe';
switch (animal) {
    case 'vache':
    case 'girafe':
    case 'chien':
    case 'cochon':
        console.log('Cet animal est un mammifère');
        break;
    case 'oiseau':
    default:
        console.log('Cet animal n\'est pas un mammifère.');
}
```

#### Chaîner des opérations

Dans l'exemple qui suit, on illustre comment exécuter une série d'instructions qui varie en fonction du paramètre (ici un entier) fourni. Cela montre que les différents cas sont testés dans l'ordre dans lequel ils sont mis au sein du `switch` :

```js
var toto = 1;
var output = 'Résultat : ';
switch (toto) {
    case 0:
        output += 'Donc ';
    case 1:
        output += 'quel ';
        output += 'est ';
    case 2:
        output += 'votre ';
    case 3:
        output += 'nom ';
    case 4:
        output += '?';
        console.log(output);
        break;
    case 5:
        output += '!';
        console.log(output);
        break;
    default:
        console.log('Veuillez choisir un nombre entre 0 et 5 !');
}
```

Selon les valeurs fournies à la variable `toto`, on aura les résultats suivants :

| Valeur                                                                    | Texte                                     |
| ------------------------------------------------------------------------- | ----------------------------------------- |
| toto vaut {{jsxref("NaN")}} ou est différent de 1, 2, 3, 4, 5 ou 0 | Veuillez choisir un nombre entre 0 et 5 ! |
| 0                                                                         | Résultat : Donc quel est votre nom ?      |
| 1                                                                         | Résultat : quel est votre nom ?           |
| 2                                                                         | Résultat : votre nom ?                    |
| 3                                                                         | Résultat : nom ?                          |
| 4                                                                         | Résultat : ?                              |
| 5                                                                         | Résultat : !                              |

### `switch` et les variables avec une portée de bloc

Avec ECMAScript 2015 (ES6), on peut utiliser les instructions [`let`](/en-US/docs/Web/JavaScript/Reference/Statements/let) et [`const`](/en-US/docs/Web/JavaScript/Reference/Statements/const) pour déclarer des variables dont la portée sera celle du bloc englobant.

Prenons cet exemple :

```js
const action = 'dire_bonjour';
switch (action) {
  case 'dire_bonjour':
    let message = 'bonjour';
    console.log(message);
    break;
  case 'dire_coucou':
    let message = 'coucou';
    console.log(message);
    break;
  default:
    console.log('Aucune action reçue.');
    break;
}
```

Si on exécute cet exemple, on aura l'erreur `Uncaught SyntaxError: Identifier 'message' has already been declared` qui n'est probablement pas le résultat espéré.

Cela se produit car la première instruction `let message = 'bonjour';` entre en conflit avec `let message = 'coucou';` bien qu'elles soient rattachées à deux instructions `case` distinctes `case 'dire_bonjour':` et `case 'dire_coucou':` mais ces deux instructions s'inscrivent dans le même bloc et on a donc `message` déclaré deux fois dans le même bloc, soit deux fois dans la même portée.

Pour régler ce problème, il suffit de rajouter des accolades pour définir un bloc d'instructions pour chaque `case` :

```js
const action = 'dire_bonjour';
switch (action) {
  case 'dire_bonjour': { // accolade ajoutée
    let message = 'bonjour';
    console.log(message);
    break;
  } // accolade ajoutée
  case 'dire_coucou': { // accolade ajoutée
    let message = 'coucou';
    console.log(message);
    break;
  } // accolade ajoutée
  default: { // accolade ajoutée
    console.log('Aucune action reçue.');
    break;
  } // accolade ajoutée
}
```

Cette nouvelle version, exécutée, produira `"bonjour"` dans la console, sans causer d'erreur.

## Spécifications

| Spécification                                                                                | État                         | Commentaires                                         |
| -------------------------------------------------------------------------------------------- | ---------------------------- | ---------------------------------------------------- |
| {{SpecName('ES3')}}                                                                     | {{Spec2('ES3')}}         | Définition initiale. Implémentée avec JavaScript 1.2 |
| {{SpecName('ES5.1', '#sec-12.11', 'instruction switch')}}                 | {{Spec2('ES5.1')}}     |                                                      |
| {{SpecName('ES6', '#sec-switch-statement', 'instruction switch')}}     | {{Spec2('ES6')}}         |                                                      |
| {{SpecName('ESDraft', '#sec-switch-statement', 'switch statement')}} | {{Spec2('ESDraft')}} |                                                      |

## Compatibilité des navigateurs

{{Compat("javascript.statements.switch")}}

## Voir aussi

- {{jsxref("Instructions/if...else","if...else")}}
- {{jsxref("Instructions/break","break")}}
