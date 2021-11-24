---
title: Machine d'état
slug: Glossary/State_machine
tags:
  - Glossaire
  - états
translation_of: Glossary/State_machine
original_slug: Glossaire/Machine_d_état
---
Une machine d'état est une abstraction mathématique utilisée pour concevoir des algorithmes. Une machine d'état lit un ensemble d'entrées et passe à un état différent en fonction de ces entrées.

Un état est une description de l'état d'un système en attente d'exécution d'une transition. Une transition est un ensemble d'actions à exécuter lorsqu'une condition est remplie ou qu'un événement est reçu. Dans un diagramme d'état, les cercles représentent chaque état possible et les flèches représentent les transitions entre les états.

En regardant l'état final, vous pouvez discerner quelque chose sur la série d'entrées menant à cet état.

Il existe deux types de machines d'état de base :

- machine déterministe à états finis
  - : Ce type ne permet qu'une seule transition possible pour toute entrée autorisée. C'est comme l'{{Glossary("Statement","état")}} du "if" dans `if x == true then doThis else doThat`. L'ordinateur doit exécuter l'une des deux options.
- machine non déterministe à états finis
  - : Étant donné un état, une entrée peut conduire à plus d'un état différent.

_Figure 1 : Machine déterministe à états finis_

![](statemachine1.png)

Dans la _Figure 1_, l'état commence en State 1; l'état change vers State 2 en donnant l'entrée 'X', ou vers State 3 en donnant l'entrée 'Y'.

_Figure 2 : Machine non déterministe à états finis_

![](statemachine2.png)

En _Figure 2_, étant donné l'entrée 'X', l'état peut persister ou passer à State 2.

Notez que toute {{Glossary("regular expression","expression régulière")}} peut être représentée par une machine d'état.

## En apprendre plus

### Culture générale

- {{Interwiki("wikipedia", "Automate_fini","Automate fini")}} sur Wikipedia
- {{Interwiki("wikipedia", "Automate_fini#Automates_UML","Automates UML")}} sur Wikipedia
- {{Interwiki("wikipedia", "Machine_de_Moore","Machine de Moore")}} sur Wikipedia
- {{Interwiki("wikipedia", "Machine_de_Mealy","Machine de Mealy")}} sur Wikipedia
