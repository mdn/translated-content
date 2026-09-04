---
title: Type énuméré
slug: Glossary/Enumerated
l10n:
  sourceCommit: 1d5f6ed5785d8a222ea9cfb0a4d9bd6c941e01d8
---

En informatique, un type **énuméré** est un type de données qui consiste en un ensemble restreint de valeurs nommées.

## Les attributs HTML énumérés

En HTML, [les attributs énumérés (parfois appelés à valeur contrainte) <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) sont des attributs dont les valeurs possibles sont un ensemble prédéfini de chaînes de caractères. Contrairement aux attributs HTML {{Glossary("Boolean/HTML", "booléens")}} — qui valent toujours vrai lorsque l'attribut est présent, que la valeur soit présente, omise ou invalide — avec les attributs HTML énumérés, la valeur par défaut pour une valeur omise peut être différente de la valeur par défaut pour une valeur invalide. Par exemple, l'attribut HTML global [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable) possède deux mots-clés valides&nbsp;: `true` et `false`. Si l'attribut est présent mais qu'aucune valeur n'est définie, la valeur est `true`. Si une valeur est définie mais invalide, comme `contenteditable="contenteditable"`, la valeur correspond à un troisième état, `inherit`.

Chaque attribut énuméré possède une valeur par défaut lorsque l'attribut est présent sans sa valeur et une valeur par défaut lorsqu'une valeur invalide lui est associée. À la différence des {{Glossary("Boolean/HTML", "attributs booléens HTML")}} qui valent toujours vrai que la valeur soit présente, omise ou invalide, les attributs HTML énumérés peuvent avoir une valeur par défaut différente en fonction que la valeur est omise ou invalide. Par exemple, l'attribut HTML universel [`contenteditable`](/fr/docs/Web/HTML/Reference/Global_attributes/contenteditable) n'a que deux valeurs valides&nbsp;: `true` et `false`. Si l'attribut est présent, mais qu'aucune valeur n'est indiquée, la valeur par défaut sera `true`. En revanche, si une valeur invalide est utilisée (par exemple `contenteditable="contenteditable"`), la valeur utilisée effectivement correspondra à un troisième état, `inherit`.

## Les attributs ARIA énumérés

Les états et propriétés ARIA font partie de HTML et ont également des attributs énumérés. Si un attribut ARIA peut prendre la valeur `true` ou `false`, on considèrera généralement qu'un attribut omis vaut `false` et qu'une valeur invalide vaut `true` (la valeur par défaut pour l'utilisation d'une valeur omise ou d'une chaîne de caractères vide comme valeur dépendra de l'attribut).

L'attribut `aria-current` accepte par exemple une liste de valeurs limitée qui contient `page`, `step`, `location`, `date`, `time`, `true`, et `false`. Dans ce cas, si l'attribut est absent, vaut la chaîne de caractères vide, est présent sans valeur ou est paramétré avec `aria-current="false"`, l'attribut sera considéré comme faux et ne sera pas exposé. Toute valeur qui est une chaîne de caractères non vide et qui ne fait pas partie de la liste indiquée sera considérée comme équivalente à l'utilisation de `aria-current="true"`.

## Les propriétés JavaScript énumérables

En JavaScript, les propriétés énumérables sont les propriétés dont le marqueur interne `enumerable` est vrai (ce qui est le comportement par défaut pour les propriétés créées avec une affectation simple ou un initialisateur de propriétés. La plupart des mécanismes d'itération (comme les boucles [`for…in`](/fr/docs/Web/JavaScript/Reference/Statements/for...in) ou la méthode [`Object.keys`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)) ne parcourent que les clés énumérables.

## Voir aussi

- {{Glossary("Boolean", "Booléen")}}
- [Les types et structures de données en JavaScript](/fr/docs/Web/JavaScript/Guide/Data_structures)
- [Réflexion des attributs](/fr/docs/Web/API/Document_Object_Model/Reflected_attributes)
- [Les attributs énumérés HTML dans le standard HTML <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute)
