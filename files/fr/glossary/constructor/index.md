---
title: Constructeur
slug: Glossary/Constructor
---

{{GlossarySidebar}}

Un **constructeur** est associé à un {{glossary("object","objet")}} d'une classe particulière qui a été instanciée. Le constructeur initialise cet objet et peut fournir un accès à ses informations privées. Le concept de constructeur peut s'appliquer à la plupart des langages de {{glossary("OOP","programmation orientée objet")}}. Dans l'essentiel, un constructeur en {{glossary("JavaScript")}} est en général déclaré lors de l'instance d'une {{glossary("Class","classe")}}.

## Syntaxe

```js
// Voici un constructeur générique par défaut de la classe Default
function Default() {
}

// Voici le constructeur de classe surchargé Overloaded
// avec des arguments en paramètres
function Overloaded(arg1, arg2, ...,argN){
}
```

Pour appeler le constructeur d'une classe en JavaScript, utilisez un opérateur `new` pour affecter une nouvelle {{glossary("Object reference","référence d'objet")}} à une {{glossary("Variable","variable")}}.

```js
function Default() {}

// Une nouvelle référence d'un objet Default affectée à
// la variable locale defaultReference
var defaultReference = new Default();
```

## Voir aussi

### Culture générale

- [Constructeur](<https://fr.wikipedia.org/wiki/Constructeur_(programmation)>) sur Wikipédia

### Référence technique

- [Le constructeur en programmation JavaScript orientée objet](/fr/docs/Learn/JavaScript/Objects#the_constructor) sur MDN
- [Opérateur new en JavaScript](/fr/docs/Web/JavaScript/Reference/Operators/new) sur MDN
