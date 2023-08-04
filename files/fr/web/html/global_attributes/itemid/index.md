---
title: itemid
slug: Web/HTML/Global_attributes/itemid
---

{{HTMLSidebar("Global_attributes")}}

L'[attribut universel](/fr/docs/Web/HTML/Attributs_universels) **`itemid`** permet d'identifier un objet, au sens des microdonnées, de façon unique et globale. L'attribut `itemid` peut uniquement être défini sur les éléments qui ont un attribut [`itemscope`](/fr/docs/Web/HTML/Global_attributes#itemscope) et un attribut [`itemtype`](/fr/docs/Web/HTML/Global_attributes#itemtype). De plus, un `itemid` ne peut pas être défini sur des éléments dont l'attribut `itemscope` possède un attribut `itemtype` qui définit un vocabulaire qui ne prend pas en charge les identifiants globaux tels que défini dans la spécification du vocabulaire.

La signification exacte d'un identifiant global est déterminée par la spécification du vocabulaire. C'est le rôle de cette spécification d'autoriser ou non la présence de plusieurs éléments avec le même identifiant (sur une ou plusieurs pages) et de définir les règles de gestion associées.

## Syntaxe

### Syntaxe formelle

```
itemid="URN"
```

> **Note :** Selon la définition du WHATWG, un `itemid` doit être une URL. Dans l'exemple qui suit, on utilise plutôt une URN, plus appropriée pour définir un identifiant unique comme `itemid`. Cette incohérence reflète l'état actuellement incomplet de la spécification sur les microdonnées.

## Exemple

### HTML

Un élément qui décrit un livre :

```html
<dl
  itemscope
  itemtype="http://vocab.example.net/book"
  itemid="urn:isbn:0-330-34032-8">
  <dt>Title</dt>
  <dd itemprop="title">The Reality Dysfunction</dd>
  <dt>Author</dt>
  <dd itemprop="author">Peter F. Hamilton</dd>
  <dt>Publication date</dt>
  <dd><time itemprop="pubdate" datetime="1996-01-26">26 January 1996</time></dd>
</dl>
```

### Données structurées correspondantes

<table class="standard-table">
  <tbody>
    <tr>
      <td colspan="1" rowspan="14">itemscope</td>
      <td>itemtype: itemid</td>
      <td colspan="2" rowspan="1">
        http://vocab.example.net/book: urn:isbn:0-330-34032-8
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>title</td>
      <td>The Reality Dysfunction</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>author</td>
      <td>Peter F. Hamilton</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>pubdate</td>
      <td>1996-01-26</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les différents attributs universels](/fr/docs/Web/HTML/Attributs_universels)
- Les autres attributs universels relatifs aux microdonnées :

  - [`itemid`](/fr/docs/Web/HTML/Global_attributes#itemid)
  - [`itemprop`](/fr/docs/Web/HTML/Global_attributes#itemprop)
  - [`itemref`](/fr/docs/Web/HTML/Global_attributes#itemref)
  - [`itemscope`](/fr/docs/Web/HTML/Global_attributes#itemscope)
  - [`itemtype`](/fr/docs/Web/HTML/Global_attributes#itemtype)
