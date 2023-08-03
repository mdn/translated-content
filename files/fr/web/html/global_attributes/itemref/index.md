---
title: itemref
slug: Web/HTML/Global_attributes/itemref
---

{{HTMLSidebar("Global_attributes")}}

L'[attribut universel](/fr/docs/Web/HTML/Attributs_universels) **`itemref`** permet d'associer des propriétés à un objet via `itemscope` lorsque l'élement courant n'est pas un élément descendant. `itemref` fournit une liste d'identifiants d'éléments (à ne pas confondre avec `itemid`) dont des propriétés sont définies plus loin dans le document.

L'attribut `itemref` peut uniquement être défini sur des éléments pour lesquels un attribut `itemscope` a été défini.

> **Note :** L'attribut `itemref` ne fait pas partie du modèle de données des micro-données. Il s'agit purement d'une construction syntaxique pour aider les auteurs à annoter une page où les données ne suivent pas une structure arborescente claire.

## Syntaxe

### Syntaxe formelle

```
itemref
```

## Exemple

### HTML

```html
<div itemscope id="amanda" itemref="a b"></div>
<p id="a">Name: <span itemprop="name">Amanda</span></p>
<div id="b" itemprop="band" itemscope itemref="c"></div>
<div id="c">
  <p>Band: <span itemprop="name">Jazz Band</span></p>
  <p>Size: <span itemprop="size">12</span> players</p>
</div>
```

### Structure de données correspondante

Au format [JSON-LD](https://json-ld.org/) :

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

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les différents attributs universels](/fr/docs/Web/HTML/Attributs_universels)
- Les autres attributs universels relatifs aux microdonnées :

  - [`itemid`](/fr/docs/Web/HTML/Global_attributes#itemid)
  - [`itemprop`](/fr/docs/Web/HTML/Global_attributes#itemprop)
  - [`itemscope`](/fr/docs/Web/HTML/Global_attributes#itemscope)
  - [`itemtype`](/fr/docs/Web/HTML/Global_attributes#itemtype)
