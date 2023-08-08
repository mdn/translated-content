---
title: const
slug: Web/JavaScript/Reference/Statements/const
---

{{jsSidebar("Statements")}}

La **déclaration `const`** permet de créer une constante nommée accessible uniquement en lecture. Cela ne signifie pas que la valeur contenue est immuable, uniquement que l'identifiant ne peut pas être réaffecté. Autrement dit la valeur d'une constante ne peut pas être modifiée par des réaffectations ultérieures. Une constante ne peut pas être déclarée à nouveau.

{{EmbedInteractiveExample("pages/js/statement-const.html")}}

## Syntaxe

```js
const nom1 = valeur1 [, nom2 = valeur2 [, … [, nomN = valeurN]]];
```

- `nomN`
  - : Le nom de la constante. Ce nom peut être n'importe quel identifiant valide.
- `valeurN`
  - : La valeur à associer à la constante. Cette valeur peut être n'importe quelle [expression](/fr/docs/Web/JavaScript/Guide/Expressions_et_Opérateurs#new) valide (éventuellement [une expression de fonction](/fr/docs/Web/JavaScript/Reference/Opérateurs/L_opérateur_function)).

## Description

Cette déclaration permet de créer une constante qui peut être globale ou locale pour la fonction dans laquelle elle a été déclarée. Les constantes font partie de la portée du bloc (comme les variables définies avec `let`). À la différence des variables définies avec `var`, les constantes déclarées au niveau global **ne sont pas** des propriétés de l'objet global ({{domxref("window")}} dans le cas du navigateur). Il est nécessaire d'initialiser une constante lors de sa déclaration. Au sein d'une même portée, il est impossible d'avoir une constante qui partage le même nom qu'une variable ou qu'une fonction.

Attention, la déclaration `const` crée une référence en lecture seule vers une valeur. Cela ne signifie pas que la valeur référencée ne peut pas être modifiée ! Ainsi, si le contenu de la constante est un objet, l'objet lui-même pourra toujours être modifié.

> **Note :** Les aspects liés à la [zone morte temporelle](</fr/docs/Web/JavaScript/Reference/Instructions/let#Zone_morte_temporaire_(Temporal_Dead_Zone_TDZ)_et_les_erreurs_liées_à_let>) de `let` s'appliquent également à `const`.

## Exemples

Les instructions suivantes illustrent comment fonctionne cette déclaration. On pourra tester ces instructions dans la console afin d'observer le comportement obtenu :

```js
// On définit ma_fav comme une constante
// et on lui affecte la valeur 7
// Généralement, par convention, les
// constantes sont en majuscules
const MA_FAV = 7;

// Cette réaffectation lèvera une exception TypeError
MA_FAV = 20;

// affichera 7
console.log("mon nombre favori est : " + MA_FAV);

// toute tentative de redéclaration renvoie une erreur
// SyntaxError: Identifier 'MY_FAV' has already been declared
const MA_FAV = 20;

// le nom ma_fav est réservé par la constante ci-dessus
// cette déclaration échouera donc également
var MA_FAV = 20;

// cela renvoie également une erreur
let MA_FAV = 20;


// On notera l'importance de la portée de bloc :
if (MA_FAV === 7) {
  // cela fonctionne sans problème et crée
  // une nouvelle variable dans cette portée
  let MA_FAV =  20;

  // Ici, MA_FAV vaut 20
  console.log("mon nombre préféré est " + MA_FAV);

  // L'instruction suivante est remontée dans le
  // contexte global et provoque une erreur !
  var MA_FAV = 20;

}

// MA_FAV vaut toujours 7
console.log("mon nombre favori est " + MA_FAV);

// const nécessite une initialisation
const TOTO; // SyntaxError: Missing initializer in const

// const fonctionne également avec les objects
const monObjet = {"clé": "valeur"};

// Écraser l'objet échouera comme précédemment
monObjet = {"autreClé": "valeur"};

// En revanche, les clés d'un objet ne sont pas
// protégés et on peut donc, de façon valide, avoir
monObjet.clé = "autreValeur";
// On utilisera Object.freeze() afin qu'un objet soit immuable

// Il en va de même avec les tableaux
const mon_tableau = [];
// On peut ajouter des éléments au tableau
mon_tableau.push("A"); // ["A"]
// Mais on ne peut pas affecter une nouvelle valeur
mon_tableau = ["B"]; // lève une exception
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Instructions/var","var")}}
- {{jsxref("Instructions/let","let")}}
- [Les constantes dans le guide JavaScript](/fr/docs/Web/JavaScript/Guide/Valeurs,_variables,_et_littéraux#Constantes)
