---
title: Constructeur
slug: Glossary/Constructor
tags:
  - Glossaire
  - scripts
translation_of: Glossary/Constructor
original_slug: Glossaire/Constructeur
---
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

Pour appeler le constructeur d'une classe en JavaScript, utilisez un opérateur `new` pour affecter une nouvelle {{glossary("Object reference","référence d'objet")}} à une {{glossary("Variable","variable")}}.

```js
function Default() {
}

// Une nouvelle référence d'un objet Default affectée à
// la variable locale defaultReference
var defaultReference = new Default();
```



## Pour approfondir

### Culture générale

- {{Interwiki("wikipedia", "Constructeur (programmation)", "Constructeur")}} sur Wikipédia

### Référence technique

- [Le constructeur en programmation JavaScript orientée objet](/fr/docs/Learn/JavaScript/Objects#The_Constructor) sur MDN
- [Opérateur new en JavaScript](/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/L_op%C3%A9rateur_new) sur MDN
