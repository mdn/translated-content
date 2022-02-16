---
title: Muable
slug: Glossary/Mutable
tags:
  - Débutant
  - Glossaire
  - Variables
translation_of: Glossary/Mutable
original_slug: Glossaire/Muable
---
Une variable _muable_ (_mutable_) est une variable qui peut être modifiée. En {{glossary("JavaScript")}}, seuls les {{Glossary("Object","objets")}} et {{Glossary("Array","tableaux")}} (_arrays_) sont muables, pas {{Glossary("primitive", "les valeurs primitives")}}.

(Vous pouvez faire pointer un nom de variable vers une nouvelle valeur, mais la valeur précédente est toujours conservée en mémoire. D'où le besoin de nettoyage.)

Un **objet muable** est un objet dont l'état peut être modifié après sa création.

Les **objets immuables (_immutable_)** sont des objets dont l'état ne peut être modifié une fois l'objet créé.

**Chaînes de caractères et nombres** sont **immuables**. Un exemple pour bien comprendre :

    var immutableString = "Hello";

    // Dans le code ci-dessus, un nouvel objet avec une valeur chaîne de caractère est créé.

    immutableString = immutableString + "World";

    // Nous ajoutons "World" à la valeur existante.

En ajoutant la variable "immutableString" avec une valeur de chaîne, les événements suivants se produisent :

1.  La valeur existante de la variable "immutableString" est récupérée
2.  "World" est ajouté à la valeur existante de "immutableString"
3.  La valeur résultante est alors allouée à un nouveau bloc de mémoire
4.  L'objet "immutableString" pointe maintenant vers le nouvel espace mémoire créé
5.  L'ancien espace mémoire est maintenant disponible pour la récupération de place (nettoyage).



## En apprendre plus

### Culture générale

- {{Interwiki("wikipedia","Objet_immuable")}} sur Wikipédia
