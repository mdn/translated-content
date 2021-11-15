---
title: Signature (fonctions)
slug: Glossary/Signature/Function
tags:
  - Glossaire
  - Java
  - JavaScript
  - Programmation
translation_of: Glossary/Signature/Function
original_slug: Glossaire/Signature/Fonction
---
Une **signature de fonction** (ou signature de _type_, ou signature de _méthode_) définit les entrées et sorties des {{Glossary("Function", "fonctions")}} et des {{Glossary("Method", "méthodes")}}.

Une signature peut comporter :

- Des {{Glossary("Parameter", "paramètres")}} et leurs {{Glossary("Type", "types")}}
- une valeur et un type de retour
- des {{Glossary("Exception", "exceptions")}} susceptibles d'être déclenchées ou reçues
- des informations sur la disponibilité de la méthode dans un programme {{Glossary("OOP", "orienté objet")}} (telles que les mots-clés `public`, `static`, ou `prototype`).

## En détail

### Signatures en JavaScript

{{Glossary("JavaScript")}} est un langage à *typage faible et* *dynamique*. Cela signifie que vous n'avez pas à déclarer le type d'une variable à l'avance. Il sera déterminé automatiquement pendant le traitement du programme. Une signature en JavaScript peut vous apporter certaines informations sur la méthode :

```js
MonObjet.prototype.maFonction(valeur)
```

- La méthode est installée sur un {{Glossary("Object","objet")}} appelé `MonObjet`.
- La méthode est installée sur le `prototype` de `MonObjet` (c'est par conséquent une {{Glossary("Method","méthode")}} d'instance) par opposition à une {{Glossary("Method","méthode")}} statique.
- Le nom de la méthode est ` maFonction``. `
- La méthode accepte un paramètre appelé `valeur` et n'est pas définie.

### Signatures en Java

En {{Glossary("Java")}}, les signatures servent à identifier les méthodes et les classes au niveau du code de la machine virtuelle. Vous devez déclarer les types des variables dans votre code Java afin de pouvoir l'exécuter. Java est à _typage fort_ et vérifiera que chaque paramètre est correct au moment de la compilation.

```java
public static void main(String[] args)
```

- Le mot-clé `public` est un modificateur d'accessibilité et indique que cette méthode peut être appelée par n'importe quel objet.
- Le mot-clé `static` indique qu'il s'agit d'une méthode de classe, et pas de son opposé, à savoir une méthode d'instance.
- Le mot-clé `void` indique que cette méthode n'a pas de valeur de retour.
- Le nom de la méthode est `main`.
- La méthode accepte un paramètre de type tableau de chaînes. Il est nommé `args.`

## `Pour approfondir`

### `Culture générale`

- {{Interwiki("wikipedia", "Signature de type#Java", "Signatures de type interne en Java")}} sur Wikipédia
