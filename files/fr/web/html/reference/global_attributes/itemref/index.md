---
title: "Attribut HTML universel : itemref"
short-title: itemref
slug: Web/HTML/Reference/Global_attributes/itemref
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

[L'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`itemref`** permet d'associer des propriétés qui ne sont pas des descendants d'un élément avec l'attribut [`itemscope`](/fr/docs/Web/HTML/Reference/Global_attributes/itemscope).

`itemref` fournit une liste d'identifiants d'éléments (à ne pas confondre avec `itemid`) ailleurs dans le document, avec des propriétés supplémentaires.

L'attribut `itemref` ne peut être défini que sur des éléments qui ont un attribut `itemscope` défini.

> [!NOTE]
> L'attribut `itemref` ne fait pas partie du modèle de données des microdonnées. Il s'agit purement d'une construction syntaxique pour aider les auteur·ice·s à annoter une page où les données ne suivent pas une structure arborescente claire. Par exemple, il permet aux auteur·ice·s de baliser des données dans un tableau de manière à ce que chaque colonne définisse un élément distinct tout en conservant les propriétés dans les cellules.

## Exemples

### Représenter des données structurées pour un groupe

Cet exemple utilise des attributs de microdonnées pour représenter les données structurées suivantes (au format [JSON-LD <sup>(angl.)</sup>](https://json-ld.org/))&nbsp;:

```json
{
  "@id": "amanda",
  "name": "Amanda",
  "band": {
    "@id": "b",
    "name": "Jazz Band",
    "size": 12
  }
}
```

#### HTML

```html
<div itemscope id="amanda" itemref="a b"></div>
<p id="a">Nom&nbsp;: <span itemprop="name">Amanda</span></p>
<div id="b" itemprop="band" itemscope itemref="c"></div>
<div id="c">
  <p>Groupe&nbsp;: <span itemprop="name">Jazz Band</span></p>
  <p>Taille&nbsp;: <span itemprop="size">12</span> membres</p>
</div>
```

#### Résultat

{{EmbedLiveSample("Représenter des données structurées pour un groupe")}}

## Spécifications

{{Specifications}}

## Voir aussi

- [Tous les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
- Les autres attributs universels relatifs aux microdonnées&nbsp;:
  - [`itemid`](/fr/docs/Web/HTML/Reference/Global_attributes/itemid)
  - [`itemprop`](/fr/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - [`itemscope`](/fr/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - [`itemtype`](/fr/docs/Web/HTML/Reference/Global_attributes/itemtype)
