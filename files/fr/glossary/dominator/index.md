---
title: Dominant
slug: Glossary/Dominator
tags:
  - Encodage
  - Glossaire
translation_of: Glossary/Dominator
original_slug: Glossaire/Dominant
---
En théorie des graphes, le nœud A domine le nœud B si tous les chemins du nœud racine vers B passent par A.

Ce concept est important pour le "{{Glossary("garbage collection","ramasse-miettes")}}" (ou récupérateur de mémoire) car cela signifie que B n'est accessible que par A. Ainsi, si le ramasse-miettes trouve A inaccessible et éligible à la récupération, alors B sera également inaccessible et éligible à la récupération. Donc, les objets que A domine contribuent à la taille retenue de A : c'est-à-dire la quantité totale de mémoire qui pourrait être libérée si A lui-même était libéré.

## **En apprendre plus**

### **Culture générale**

- {{interwiki("wikipedia","Ensemble_dominant","Ensemble dominant")}} sur Wikipedia

### Références techniques

- [Dominants](/fr/docs/Outils/Memory/Dominators)
- [Gestion de la mémoire](/fr/docs/Mozilla/js-ctypes/Using_js-ctypes/Memory_Management) en JavaScript
- [Le ramasse-miettes ou garbage collection](/fr/docs/Web/JavaScript/Gestion_de_la_m%C3%A9moire#Le_ramasse-miettes_ou_garbage_collection)
