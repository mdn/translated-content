---
title: NaN
slug: Glossary/NaN
l10n:
  sourceCommit: 2547f622337d6cbf8c3794776b17ed377d6aad57
---

`NaN` (<i lang="en">Not a Number</i>, pour _pas un nombre_ en français) est un {{Glossary("Type", "type de données")}} numérique qui indique une valeur indéfinie ou une valeur qui ne peut pas être représentée, en particulier le résultat d'une opération à virgule flottante.

Par exemple, `NaN` peut représenter une valeur infinie, le résultat d'une division par zéro, la racine carrée d'un nombre négatif (qui est un nombre imaginaire, tandis que les nombres à virgule flottante sont des nombres réels).

Dans la pratique, si l'on divise deux variables dans un programme {{Glossary("JavaScript")}}, le résultat peut être `NaN`, qui est prédéfini dans JavaScript comme `undefined`. Ainsi, cette division peut casser le programme. Cela signifie que si ce calcul était une petite partie d'un algorithme nettement plus gros, il serait compliqué de localiser où se trouve l'erreur. Heureusement, comme le résultat sera `NaN`, et que nous savons que notre diviseur pourrait être 0, il est possible de mettre en place des tests qui préviendront ce genre de calcul ou informeront que ceux-ci ont eu lieu.

## Voir aussi

- [`NaN`](https://fr.wikipedia.org/wiki/NaN) sur Wikipédia
- [NaN dans JavaScript](/fr/docs/Web/JavaScript/Reference/Global_Objects/NaN)
