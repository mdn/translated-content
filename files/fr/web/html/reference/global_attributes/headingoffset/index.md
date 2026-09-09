---
title: "Attribut HTML universel : `headingoffset`"
short-title: headingoffset
slug: Web/HTML/Reference/Global_attributes/headingoffset
l10n:
  sourceCommit: f398f522d05bb8bfe739ac2417b00712b7888494
---

{{SeeCompatTable}}

[L'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`headingoffset`** augmente le niveau de titre calculé des [éléments de titre](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements) à l'intérieur de l'élément sur lequel il est défini, sans modifier les éléments utilisés pour les écrire.

## Valeurs

Un entier positif valide compris entre `0` et `8`, inclus. Une valeur qui ne peut pas être analysée comme un entier positif est traitée comme un décalage de `0`.

## Description

Chaque élément de titre a un **niveau de titre calculé**, qui est le niveau que les technologies d'assistance exposent aux utilisateur·ice·s. Sans `headingoffset`, ce niveau correspond au numéro dans le nom de l'élément&nbsp;: `1` pour [`<h1>`](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements), `2` pour `<h2>`, et ainsi de suite.

L'attribut `headingoffset` s'ajoute à ce nombre. Pour trouver le décalage d'un titre, le navigateur commence par l'élément de titre lui-même, remonte à travers ses ancêtres — en traversant les limites de l'ombre jusqu'à l'hôte de l'ombre — et additionne chaque valeur `headingoffset` qu'il trouve. Les décalages s'accumulent&nbsp;: un `<h1>` à l'intérieur d'un élément avec `headingoffset="1"` qui est lui-même à l'intérieur d'un élément avec `headingoffset="2"` a un niveau de titre calculé de 4.

Comme la marche commence à l'élément de titre, un décalage sur le titre lui-même compte également&nbsp;: `<h1 headingoffset="2">` a un niveau de titre calculé de 3.

La marche s'arrête au premier élément qui possède l'attribut [`headingreset`](/fr/docs/Web/HTML/Reference/Global_attributes/headingreset), après avoir ajouté le `headingoffset` de cet élément.

Le niveau de titre calculé ne dépasse jamais `9`, même dans les cas où les décalages s'additionnent pour donner un nombre supérieur. Comme HTML n'a pas d'élément de titre au-dessus de `<h6>`, les niveaux de titre 7, 8 et 9 ne peuvent être produits que par l'attribut `headingoffset` ou par l'attribut [`aria-level`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level).

Cet attribut n'affecte que le niveau de titre calculé. Il ne change pas les éléments suivants&nbsp;:

- Le nom de l'élément, de sorte que les sélecteurs CSS tels que `h1` correspondent toujours, et le style par défaut du titre reste inchangé.
- Le [rôle ARIA](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role) de l'élément, qui reste `heading`.
- Un attribut `aria-level` explicite sur le titre, qui prévaut sur le niveau de titre calculé.

Comme le décalage provient du titre et de ses ancêtres, un composant réutilisable peut toujours utiliser le même balisage de titre, comme un `<h1>` pour son titre. Vous pouvez ensuite utiliser le même balisage à n'importe quelle profondeur d'une page sans modifier ses titres. Cela évite également le problème d'accessibilité causé par le choix d'un élément de titre en fonction de sa taille de police.

## Accessibilité

Les utilisateur·ice·s de lecteurs d'écran naviguent par les titres et se fient aux niveaux de titre pour comprendre la structure d'une page. Utilisez `headingoffset` pour que ces niveaux correspondent à la structure visuelle de la page, et vérifiez le résultat avec un lecteur d'écran ou l'inspecteur d'accessibilité du navigateur.

Dans les navigateurs qui ne prennent pas en charge cet attribut, les titres conservent le niveau de leur nom d'élément, donc le balisage doit toujours avoir du sens sans le décalage.

## Exemples

### Décaler les titres dans un composant

Dans cet exemple, le balisage utilise deux fois la même structure de composant — un `<article>` avec un titre `<h1>`. Le second est imbriqué dans une `<section>` qui décale ses titres d'un niveau.

```html
<h1>Guide des insectes</h1>

<article>
  <h1>Coléoptères</h1>
  <p>Un coléoptère a une aile antérieure durcie.</p>
</article>

<section headingoffset="1">
  <h1>Annexe</h1>
  <article>
    <h1>Coléoptères, revisités</h1>
    <p>Le même composant, un niveau plus profond.</p>
  </article>
</section>
```

Les niveaux de titre calculés sont&nbsp;:

- `Guide des insectes`&nbsp;: niveau 1
- `Coléoptères`&nbsp;: niveau 1
- `Annexe`&nbsp;: niveau 2
- `Coléoptères, revisités`&nbsp;: niveau 2

### Accumuler les décalages

Les décalages des éléments imbriqués sont additionnés, donc ce `<h2>` a un niveau de titre calculé de 5&nbsp;:

```html
<article headingoffset="1">
  <section headingoffset="2">
    <h2>Niveau 5</h2>
  </section>
</article>
```

### Arrêter le décalage

Un élément avec l'attribut [`headingreset`](/fr/docs/Web/HTML/Reference/Global_attributes/headingreset) empêche les décalages de ses ancêtres de s'appliquer à ses descendants. Cela est utile pour le contenu qui ne fait pas partie de la structure du document environnant, comme une boîte de dialogue&nbsp;:

```html
<section headingoffset="2">
  <h1>Niveau 3</h1>

  <dialog headingreset>
    <h1>Niveau 1</h1>
  </dialog>
</section>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut universel [`headingreset`](/fr/docs/Web/HTML/Reference/Global_attributes/headingreset)
- Les éléments [`<h1>`—`<h6>`](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements)
- L'attribut [`aria-level`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
- [ARIA&nbsp;: rôle `heading`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/heading_role)
