---
title: Type énuméré
slug: Glossary/Enumerated
l10n:
  sourceCommit: cdb0dad4aeabda32b85c397f5e45304f95edc0d1
---

{{GlossarySidebar}}

En informatique, un type **énuméré** est un type de données qui consiste en un ensemble restreint de valeurs nommées.

## Les attributs HTML énumérés

En HTML, [les attributs énumérés (parfois appelés à valeur contrainte)](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute) sont des attributs dont les valeurs possibles sont un ensemble prédéfini de chaînes de caractères. Ainsi, l'attribut HTML universel [`dir`](/fr/docs/Web/HTML/Global_attributes/dir) possède trois valeurs valides&nbsp;: `ltr`, `rtl`, et `auto`.

Chaque attribut énuméré possède une valeur par défaut lorsque l'attribut est présent sans sa valeur et une valeur par défaut lorsqu'une valeur invalide lui est associée. À la différence des attributs HTML [booléens](/fr/docs/Glossary/Boolean) qui valent toujours vrai que la valeur soit présente, omise ou invalide, les attributs HTML énumérés peuvent avoir une valeur par défaut différente en fonction que la valeur est omise ou invalide. Par exemple, l'attribut HTML universel [`contenteditable`](/fr/docs/Web/HTML/Global_attributes/contenteditable) n'a que deux valeurs valides&nbsp;: `true` et `false`. Si l'attribut est présent, mais qu'aucune valeur n'est indiquée, la valeur par défaut sera `true`. En revanche, si une valeur invalide est utilisée (par exemple `contenteditable="contenteditable"`), la valeur utilisée effectivement correspondra à un troisième état, `inherit`.

## Les attributs ARIA énumérés

Les états et propriétés ARIA font partie de HTML et ont également des attributs énumérés. Si un attribut ARIA peut prendre la valeur `true` ou `false`, on considèrera généralement qu'un attribut omis vaut `false` et qu'une valeur invalide vaut `true` (la valeur par défaut pour l'utilisation d'une valeur omise ou d'une chaîne de caractères vide comme valeur dépendra de l'attribut).

L'attribut `aria-current` accepte par exemple une liste de valeurs limitée qui contient `page`, `step`, `location`, `date`, `time`, `true`, et `false`. Dans ce cas, si l'attribut est absent, vaut la chaîne de caractères vide, est présent sans valeur ou est paramétré avec `aria-current="false"`, l'attribut sera considéré comme faux et ne sera pas exposé. Toute valeur qui est une chaîne de caractères non vide et qui ne fait pas partie de la liste indiquée sera considérée comme équivalente à l'utilisation de `aria-current="true"`.

## Les propriétés JavaScript énumérables

En JavaScript, les propriétés énumérables sont les propriétés dont le marqueur interne `enumerable` est vrai (ce qui est le comportement par défaut pour les propriétés créées avec une affectation simple ou un initialisateur de propriétés. La plupart des mécanismes d'itération (comme les boucles [`for…in`](/fr/docs/Web/JavaScript/Reference/Statements/for...in) ou la méthode [`Object.keys()`](/fr/docs/Web/JavaScript/Reference/Global_Objects/Object/keys)) ne parcourent que les clés énumérables.

## Voir aussi

- [Booléen](/fr/docs/Glossary/Boolean)
- [Les types et structures de données en JavaScript](/fr/docs/Web/JavaScript/Data_structures)
- [Les attributs énumérés HTML dans le standard HTML (en anglais)](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#enumerated-attribute)
