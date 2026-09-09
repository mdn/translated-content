---
title: "Attribut HTML universel : `headingreset`"
short-title: headingreset
slug: Web/HTML/Reference/Global_attributes/headingreset
l10n:
  sourceCommit: f398f522d05bb8bfe739ac2417b00712b7888494
---

{{SeeCompatTable}}

[L'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`headingreset`** empêche les valeurs de [`headingoffset`](/fr/docs/Web/HTML/Reference/Global_attributes/headingoffset) des éléments ancêtres de s'appliquer aux [éléments de titre](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements) à l'intérieur de l'élément sur lequel il est défini.

## Valeurs

C'est un [attribut booléen](/fr/docs/Glossary/Boolean/HTML)&nbsp;; il prend effet lorsqu'il est présent. Une valeur pour cet attribut est ignorée, donc `headingreset`, `headingreset=""` et `headingreset="false"` ont tous le même effet.

## Description

Lorsque le navigateur calcule le [niveau de titre](/fr/docs/Web/HTML/Reference/Global_attributes/headingoffset#description) d'un élément de titre, il remonte la chaîne des éléments ancêtres et additionne les valeurs de [`headingoffset`](/fr/docs/Web/HTML/Reference/Global_attributes/headingoffset) qu'il trouve. L'attribut `headingreset` arrête cette remontée&nbsp;: les décalages définis sur l'élément lui-même sont toujours pris en compte, mais aucun ancêtre au-dessus de celui-ci ne contribue à un décalage.

Utilisez cet attribut pour le contenu qui ne fait pas partie de la structure du document environnant, comme une fenêtre de dialogue ({{HTMLElement("dialog")}}), une info-bulle ou du balisage inséré depuis une autre source. Leurs titres prennent alors le niveau de leur nom d'élément.

Si l'élément possède à la fois `headingoffset` et `headingreset`, son propre décalage s'applique et tout ce qui est au-dessus est ignoré.

## Exemples

### Réinitialiser les niveaux de titre dans une fenêtre de dialogue

Dans cet exemple, la `<section>` décale ses titres de `2`, donc le titre directement à l'intérieur est au niveau 3. L'élément `<dialog>` a `headingreset`, donc le décalage de la section n'atteint jamais le titre à l'intérieur du dialogue, qui reste au niveau 1&nbsp;:

```html
<section headingoffset="2">
  <h1>Niveau 3</h1>

  <dialog headingreset>
    <h1>Niveau 1</h1>
    <p>Le décalage de la section ne s'applique pas ici.</p>
  </dialog>
</section>
```

### Utiliser `headingreset` et `headingoffset` sur le même élément

Dans cet exemple, le décalage externe de `3` n'atteint jamais le titre. Seul le décalage sur l'élément avec `headingreset` s'applique, donc le titre est au niveau 2&nbsp;:

```html
<div headingoffset="3">
  <div headingreset headingoffset="1">
    <h1>Niveau 2</h1>
  </div>
</div>
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut universel [`headingoffset`](/fr/docs/Web/HTML/Reference/Global_attributes/headingoffset)
- Les éléments [`<h1>`—`<h6>`](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements)
- L'attribut ARIA [`aria-level`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-level)
