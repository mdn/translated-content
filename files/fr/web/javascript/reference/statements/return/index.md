---
title: return
slug: Web/JavaScript/Reference/Statements/return
---

{{jsSidebar("Statements")}}

L'instruction **`return`** met fin à l'exécution d'une fonction et définit une valeur à renvoyer à la fonction appelante.

{{EmbedInteractiveExample("pages/js/statement-return.html")}}

## Syntaxe

```js
return [expression];
```

- `expression`
  - : L'expression dont on souhaite renvoyer la valeur. Si elle est absente, la valeur renvoyée par défaut sera {{jsxref("undefined")}}.

## Description

Lorsqu'une instruction `return` est utilisée dans une fonction, l'exécution de la fonction se termine. Si une valeur est fournie, elle sera renvoyée à l'appelant de la fonction. Si l'expression définissant la valeur de retour de la fonction est absente, la valeur `undefined` sera renvoyée. Par exemple, voici une fonction qui renvoie le carré de son argument `x` (où `x` est un nombre) :

```js
function carre(x) {
  return x * x;
}
var demo = carre(3);
// demo vaudra alors 9
```

Les instructions qui suivent causeront chacune l'arrêt de l'exécution d'une fonction :

```js
return;
return true;
return false;
return x;
return x + y / 3;
```

### Ajout automatique de point-virgule

L'instruction `return` peut être impactée par [l'ajout automatique de point-virgule (_ASI_ en anglais)](/fr/docs/Web/JavaScript/Reference/Grammaire_lexicale#Insertion_automatique_de_points-virgules). Il est interdit d'avoir un caractère de fin de ligne entre le mot-clé `return` et l'expression :

```js
return;
a + b;
```

Après ASI, cela sera transformé en :

```js
return;
a + b;
// Avertissement console : "expression non accessible
// après une instruction return sans point-virgule"
```

> **Note :** À partir de Gecko 40, un avertissement sera affiché dans la console si l'analyse du code trouve une instruction semblable à une expression après une instruction `return` sans point-virgule. Voir le [bug Firefox 1005110](https://bugzil.la/1005110) pour plus d'informations.

Pour éviter ce problème et l'insertion automatique, on peut, si besoin, utiliser des parenthèses.

```js
return (
  a + b;
);
```

## Exemples

### Utiliser `return`

La fonction suivante renvoie le carré de son argument :

```js
function carré(x) {
  return x * x;
}
```

### Interrompre une fonction

Une fonction s'arrête immédiatement à l'instant où l'instruction `return` est traitée.

```js
function compteur() {
  for (var compte = 1; ; compte++) {
    // boucle infinie
    console.log(compte + "A"); // jusqu'à 5
    if (compte === 5) {
      return;
    }
    console.log(compte + "B"); // jusqu'à 4
  }
  console.log(compte + "C"); // cette instruction n'est jamais utilisée
}

compteur();

// Résultat dans la console :
// 1A
// 1B
// 2A
// 2B
// 3A
// 3B
// 4A
// 4B
// 5A
```

### Renvoyer une fonction

Pour en savoir plus sur les fermetures (_closures_), voir [cet article sur les fermetures](/fr/docs/Web/JavaScript/Closures).

```js
function magique() {
  return function calc(x) {
    return x * 42;
  };
}

var réponse = magique();
réponse(1337); // 56154
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- {{jsxref("Fonctions","Les fonctions","",1)}}
- [Les fermetures (closures)](/fr/docs/Web/JavaScript/Closures)
