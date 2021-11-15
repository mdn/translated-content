---
title: Pile d'exécution
slug: Glossary/Call_stack
tags:
  - Encodage
  - Glossaire
  - Pile d'exécution
translation_of: Glossary/Call_stack
original_slug: Glossaire/Pile_d_exécution
---
Une **pile d'exécution** est le mécanisme d'un interpréteur (comme l'interpréteur de JavaScript sur un navigateur web) pour conserver la trace de son emplacement dans un script qui appelle plusieurs {{glossary("Function","fonctions")}} depuis d'autres fonctions  — quelle fonction est en cours d'exécution, quelles fonctions sont appelées depuis cette fonction et doivent être appelées ensuite, etc.

- Lorsqu'un script appelle une fonction, l'interpréteur ajoute sa position actuelle sur la pile d'exécution comme étant son adresse de retour, et ensuite, il se lance dans l'exécution de la fonction.
- Toutes les fonctions appelées par cette fonction sont ajoutées à la pile d'appels plus haut, et s'exécutent là où leurs appels sont atteints.
- Quand la fonction se termine, l'interpréteur récupère l'adresse de retour la plus récente depuis la pile et reprend l'exécution à partir de l'endroit indiqué par celle-ci.
- Si la pile est sollicitée au-delà de l'espace qui lui a été affecté, une erreur "dépassement de pile" se produit.

## En apprendre plus

### Culture générale

- {{Interwiki("wikipedia","Pile_d'exécution","Pile d'exécution")}} sur Wikipédia
