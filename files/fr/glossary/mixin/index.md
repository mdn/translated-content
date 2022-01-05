---
title: Mixin
slug: Glossary/Mixin
tags:
  - Glossaire
  - Méthode
  - Programmation
  - Propriété
translation_of: Glossary/Mixin
original_slug: Glossaire/Mixin
---
Un _mixin_ est une {{Glossary("class","classe")}} ou une {{Glossary("interface","interface")}} dans laquelle  une partie ou la totalité des {{glossary("method","méthodes")}} et des {{glossary("property","propriétés")}} sont implémentées en  exigeant qu'une autre {{glossary("class","classe")}} ou {{Glossary("interface")}} fournisse les éléments manquants . La nouvelle classe ou interface inclut alors à la fois les propriétés et les méthodes du mixin ainsi que celles qu'il définit lui-même. Toutes les méthodes et propriétés sont utilisées exactement de la même façon, qu'elles soient implémentées dans le mixin ou dans l'interface, ou qu'elle soit la classe qui implémente le mixin.

L'avantage des mixins est qu'ils peuvent être utilisés pour simplifier la conception d'API dans lesquelles plusieurs interfaces doivent inclure les mêmes méthodes et propriétés.

Par exemple, le {{domxref ("WindowOrWorkerGlobalScope")}} mixin est utilisé pour fournir des méthodes et des propriétés qui doivent être disponibles à la fois sur les interfaces {{domxref ("Window")}} et {{domxref ("WorkerGlobalScope")}}. Le mixin est implémenté par ces deux interfaces.

## Pour approfondir

### Culture générale

- [Mixin](http://fr.wikipedia.org/wiki/Mixin) sur Wikipédia
