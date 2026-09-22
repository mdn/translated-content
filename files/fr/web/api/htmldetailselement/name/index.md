---
title: "HTMLDetailsElement : propriété name"
short-title: name
slug: Web/API/HTMLDetailsElement/name
l10n:
  sourceCommit: b2c48c8b7c097aeab4bc15a388c913f466f40e25
---

{{APIRef("HTML DOM")}}

La propriété **`name`** de l'interface {{DOMxRef("HTMLDetailsElement")}} reflète l'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/details#name) des éléments HTML {{HTMLElement("details")}}. Elle permet de relier plusieurs éléments `<details>` entre eux, de sorte qu'un seul des éléments `<details>` puisse être ouvert à la fois. Cela permet aux développeur·euse·s de créer facilement des composants d'interface comme des accordéons sans script.

L'attribut `name` définit un nom de groupe — donnez la même valeur `name` à plusieurs éléments `<details>` pour les regrouper. Un seul des éléments `<details>` du groupe peut être ouvert à la fois — ouvrir l'un ferme l'autre. Si plusieurs éléments `<details>` du groupe ont l'attribut `open`, seul le premier dans l'ordre du code source est affiché ouvert.

## Valeur

Une chaîne de caractères. La chaîne de caractères vide si l'élément ne fait partie d'aucun groupe.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les éléments HTML {{HTMLElement("details")}} et {{HTMLElement("summary")}}
