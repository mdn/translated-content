---
title: itemtype
slug: Web/HTML/Global_attributes/itemtype
tags:
  - Attribut
  - Attribut universel
  - HTML
  - Micro-données
  - Microdata
  - Référence(2)
translation_of: Web/HTML/Global_attributes/itemtype
original_slug: Web/HTML/Attributs_universels/itemtype
---
{{HTMLSidebar("Global_attributes")}}

L'[attribut universel](/fr/docs/Web/HTML/Attributs_universels) **`itemtype`** définit l'URL du vocabulaire qui sera utilisé pour définir les propriétés des objets dans la structure de données. `itemscope` est utilisé afin de définir la portée, dans le document, où le vocabulaire défini sera actif.

L'attribut `itemtype` doit avoir une valeur qui est un ensemble non ordonné de fragments uniques, sensible à la casse. Chaque fragment doit être une URL absolue valide et tous les fragments participent à la définition du même vocabulaire. La valeur de l'attribut doit avoir au moins un fragment.

Les types d'objet doivent tous être définis dans des spécifications de vocabulaire (comme [schema.org](http://schema.org/)) et doivent tous être définis avec le même vocabulaire.

L'attribut `itemtype` peut uniquement être défini pour les éléments qui ont un attribut `itemscope`.

Google et les autres moteurs de recherche participent au vocabulaire défini par [schema.org](http://schema.org/) pour structurer les données. Ce vocabulaire définit un ensemble standard de types et de noms de propriétés. Par exemple [`MusicEvent`](http://schema.org/MusicEvent) indique un événement musical dont les propriétés [`startDate`](http://schema.org/startDate) et [`location`](http://schema.org/location) utilisées pour définir les détails du concert. Dans ce cas, l'URL [`http://schema.org/MusicEvent`](http://schema.org/MusicEvent) sera l'URL utilisée pour l'attribut `itemtype` et les propriétés `startDate` et `location` seront les propriétés utilisées, définies par [`http://schema.org/MusicEvent`](http://schema.org/MusicEvent).

> **Note :** Vous pourrez trouver plus d'informations sur l'attribut itemtype sur <http://schema.org/Thing>

## Syntaxe

### Syntaxe formelle

    itemtype = URL

### Exemple simple

#### HTML

```html
<div itemscope itemtype="http://schema.org/Product">
  <span itemprop="brand">ACME</span>
  <span itemprop="name">Executive Anvil</span>
</div>
```

#### Structure de données

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="4"><code>itemscope</code></td>
      <td><code>itemtype</code></td>
      <td colspan="2" rowspan="1">http://schema.org/Product</td>
    </tr>
    <tr>
      <td><code>itemprop</code></td>
      <td><code>name</code></td>
      <td>Executive Anvil</td>
    </tr>
    <tr>
      <td><code>itemprop</code></td>
      <td colspan="2" rowspan="1"><code>brand [Thing]</code></td>
    </tr>
    <tr>
      <td><code>itemprop</code></td>
      <td><code>name</code></td>
      <td>ACME</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                    | État                                 | Commentaires |
| ------------------------------------------------------------------------------------------------ | ------------------------------------ | ------------ |
| {{SpecName('HTML Microdata', "#dfn-itemtype", "itemtype")}}                 | {{Spec2('HTML Microdata')}} |              |
| {{SpecName('HTML WHATWG', "microdata.html#attr-itemtype", "itemprop")}} | {{Spec2('HTML WHATWG')}}     |              |

## Compatibilité des navigateurs

{{Compat("html.global_attributes.itemtype")}}

## Voir aussi

- [Les différents attributs universels](/fr/docs/Web/HTML/Attributs_universels)
- Les autres attributs universels relatifs aux microdonnées :

  - {{htmlattrxref("itemid")}}
  - {{htmlattrxref("itemprop")}}
  - {{htmlattrxref("itemref")}}
  - {{htmlattrxref("itemscope")}}
  - {{htmlattrxref("itemtype")}}
