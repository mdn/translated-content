---
title: class
slug: Web/JavaScript/Reference/Operators/class
---

{{JSSidebar("Operators")}}

Une **expression de classe** est un moyen de définir une classe avec ECMASCript 2015 (ES6). Semblable aux [expressions de fonctions](/fr/docs/Web/JavaScript/Reference/Operators/function), les expressions de classes peuvent être nommées ou anonymes. Si l'expression est nommée, le nom de la classe ne sera local que pour le corps de la fonction. Cette syntaxe n'est qu'un « sucre syntaxique » pour faciliter l'écriture du code, elle ne modifie en aucun cas le modèle d'héritage utilisé par JavaScript qui est un modèle à base de prototypes.

{{EmbedInteractiveExample("pages/js/expressions-classexpression.html")}}

## Syntaxe

```js
const MaClasse = class [nomClasse] [extends autreNomClasse] {
  // corps de la classe
};
```

## Description

Une expression de classe utilise une syntaxe similaire à celle d'une [instruction de classe](/fr/docs/Web/JavaScript/Reference/Statements/class). En revanche, avec les expressions de classes, il est possible de ne pas nommer la classe, ce qu'il est impossible de faire avec les instructions de classes. De plus, en utilisant les expressions de classe, on peut redéfinir/redéclarer les classes si nécessaire. Le type d'une classe sera toujours `"function"`.

Le corps d'une classe sera exécuté en [mode strict](/fr/docs/Web/JavaScript/Reference/Strict_mode) (pour les instructions et les expressions de classe).

## Exemples

### Une expression simple

Ici, on utilise une expression de classe anonyme qu'on lie à la variable `Toto`.

```js
var Toto = class {
  constructor() {}
  truc() {
    return "Coucou monde !";
  }
};

var instance = new Toto();
instance.truc(); // "Coucou monde !"
Toto.name; // "Toto"
```

### Des expressions nommées

Si on souhaite faire référence à la classe, au sein du corps de la classe, on pourra utiliser une expression nommée. Le nom utilisé ne sera visible que depuis l'intérieur de la portée de l'expression de classe.

```js
// TBD
var Toto = class TotoNommé {
  constructor() {}
  quiEstLa() {
    return TotoNommé.name;
  }
};

var truc = new Toto();
truc.quiEstLa(); // "TotoNommmé"
TotoNommé.name; // ReferenceError
Toto.name; // "TotoNommé"
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les expressions `function`](/fr/docs/Web/JavaScript/Reference/Operators/function)
- [Les déclaration `class`](/fr/docs/Web/JavaScript/Reference/Statements/class)
- [Les classes](/fr/docs/Web/JavaScript/Reference/Classes)
