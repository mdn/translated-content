---
title: Mixin
slug: Glossary/Mixin
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un _mixin_ est une {{Glossary("class", "classe")}} (interface, dans la terminologie des spécifications WebAPI) dans laquelle certaines ou toutes ses {{Glossary("method", "méthodes")}} et/ou {{Glossary("property", "propriétés")}} ne sont pas implémentées, ce qui nécessite qu'une autre {{Glossary("class", "classe")}} ou interface fournisse les implémentations manquantes.

La nouvelle classe ou interface inclut alors à la fois les propriétés et les méthodes du mixin ainsi que celles qu'elle définit elle-même. Toutes les méthodes et propriétés sont utilisées exactement de la même manière, qu'elles soient implémentées dans le mixin ou dans l'interface ou la classe qui implémente le mixin.

L'avantage des mixins est qu'ils peuvent simplifier la conception des API dans lesquelles plusieurs interfaces doivent inclure les mêmes méthodes et propriétés.

Par exemple, le mixin `WindowOrWorkerGlobalScope` est utilisé pour fournir des méthodes et propriétés qui doivent être disponibles à la fois sur les interfaces {{DOMxRef("Window")}} et {{DOMxRef("WorkerGlobalScope")}}. Le mixin est implémenté par ces deux interfaces.

## Voir aussi

- [Mixin](http://fr.wikipedia.org/wiki/Mixin) sur Wikipédia
