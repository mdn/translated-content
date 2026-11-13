---
title: Symbole
slug: Glossary/Symbol
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

Un **symbole** est un type de donnée qui représente des identifiants uniques et infalsifiables. Ils sont parfois appelés _atomes_.

Parce qu'un symbole est unique et infalsifiable, il n'est possible de lire la valeur d'une propriété associée à un symbole que si vous disposez d'une référence à l'identifiant d'origine.

En JavaScript, `symbol` fait partie des {{Glossary("primitive", "types primitifs")}} et peut être créé à l'aide de la méthode de fabrique [`Symbol()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Symbol) qui retourne un symbole différent à chaque appel. Ils peuvent être utilisés comme clés pour des objets, ce qui évite toute collision accidentelle avec d'autres propriétés.

JavaScript définit également deux autres catégories de symboles&nbsp;: les symboles bien connus et les symboles enregistrés. Consultez la référence {{JSxRef("Symbol")}} pour plus d'informations.

## Voir aussi

- [Les types de données](<https://fr.wikipedia.org/wiki/Type_(informatique)>) sur Wikipédia
- [Symbole <sup>(angl.)</sup>](<https://en.wikipedia.org/wiki/Symbol_(programming)>) sur Wikipédia
- L'objet global JavaScript {{JSxRef("Symbol")}}
