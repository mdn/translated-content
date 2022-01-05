---
title: itemref
slug: Web/HTML/Global_attributes/itemref
tags:
  - Attribut
  - Attribut universel
  - HTML
  - Micro-données
  - Microdata
  - Reference
translation_of: Web/HTML/Global_attributes/itemref
original_slug: Web/HTML/Attributs_universels/itemref
---
{{HTMLSidebar("Global_attributes")}}

L'[attribut universel](/fr/docs/Web/HTML/Attributs_universels) **`itemref`** permet d'associer des propriétés à un objet via `itemscope` lorsque l'élement courant n'est pas un élément descendant. `itemref` fournit une liste d'identifiants d'éléments (à ne pas confondre avec `itemid`) dont des propriétés sont définies plus loin dans le document.

L'attribut `itemref` peut uniquement être défini sur des éléments pour lesquels un attribut `itemscope` a été défini.

> **Note :** L'attribut `itemref` ne fait pas partie du modèle de données des micro-données. Il s'agit purement d'une construction syntaxique pour aider les auteurs à annoter une page où les données ne suivent pas une structure arborescente claire.

## Syntaxe

### Syntaxe formelle

    itemref

## Exemple

### HTML

```html
<div itemscope id="amanda" itemref="a b"></div>
<p id="a">Name: <span itemprop="name">Amanda</span> </p>
<div id="b" itemprop="band" itemscope itemref="c"></div>
<div id="c">
    <p>Band: <span itemprop="name">Jazz Band</span> </p>
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

| Spécification                                                                                | État                                 | Commentaires |
| -------------------------------------------------------------------------------------------- | ------------------------------------ | ------------ |
| {{SpecName('HTML Microdata', "#dfn-itemref", "itemref")}}                 | {{Spec2('HTML Microdata')}} |              |
| {{SpecName('HTML WHATWG', "microdata.html#attr-itemref", "itemref")}} | {{Spec2('HTML WHATWG')}}     |              |

## Compatibilité des navigateurs

{{Compat("html.global_attributes.itemref")}}

## Voir aussi

- [Les différents attributs universels](/fr/docs/Web/HTML/Attributs_universels)
- Les autres attributs universels relatifs aux microdonnées :

  - {{htmlattrxref("itemid")}}
  - {{htmlattrxref("itemprop")}}
  - {{htmlattrxref("itemref")}}
  - {{htmlattrxref("itemscope")}}
  - {{htmlattrxref("itemtype")}}
