---
title: "Attribut HTML : content"
short-title: content
slug: Web/HTML/Reference/Attributes/content
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'attribut **`content`** définit la valeur d'un nom de métadonnée — défini par l'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/meta/name) — de l'élément HTML `<meta>`.
Il prend une chaîne de caractères comme valeur, et la syntaxe attendue varie selon la valeur de `name` utilisée.

## Valeur

Les types de valeurs acceptés par l'attribut `content` dépendent de la valeur de `name`.
Pour plus de détails sur les formats et types spécifiques, voir la page de l'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/meta/name) de `<meta>`.

## Exemples

### Définir une méta description de document

La balise `<meta>` suivante utilise `name=description` pour définir une «&nbsp;méta description&nbsp;» pour un document.
L'attribut `content` fournit la valeur de la métadonnée&nbsp;:

```html
<meta
  name="description"
  content="La référence HTML décrit tous les éléments et attributs HTML, y compris les attributs globaux qui s'appliquent à tous les éléments." />
```

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'attribut [`name`](/fr/docs/Web/HTML/Reference/Elements/meta/name) de l'élément HTML `<meta>`
