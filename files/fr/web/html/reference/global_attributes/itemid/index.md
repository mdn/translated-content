---
title: "Attribut HTML universel : itemid"
short-title: itemid
slug: Web/HTML/Reference/Global_attributes/itemid
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

[L'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`itemid`** fournit des microdonnées sous la forme d'un identifiant global unique pour un élément.

L'attribut `itemid` ne peut être défini que pour un élément qui possède à la fois les attributs [`itemscope`](/fr/docs/Web/HTML/Reference/Global_attributes/itemscope) et [`itemtype`](/fr/docs/Web/HTML/Reference/Global_attributes/itemtype). De plus, `itemid` ne peut être défini que sur des éléments possédant un attribut `itemscope` dont le `itemtype` correspondant fait référence à un vocabulaire ou définit un vocabulaire qui prend en charge les identifiants globaux.

La signification exacte de l'identifiant global d'un `itemtype` est fournie par la définition de cet identifiant dans le vocabulaire défini. Le vocabulaire définit si plusieurs éléments avec le même identifiant global peuvent coexister et, le cas échéant, comment les éléments avec le même identifiant sont gérés.

> [!NOTE]
> La définition du {{Glossary("WHATWG")}} définit qu'un `itemid` doit être une {{Glossary("URL")}}. Cependant, l'exemple suivant illustre correctement qu'un {{Glossary("URN")}} peut également être utilisé. Cette incohérence peut refléter la nature incomplète de la spécification des microdonnées.

## Exemple

### Représenter des données structurées pour un livre

Cet exemple utilise des attributs de microdonnées pour représenter les données structurées suivantes&nbsp;:

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="4">itemscope</td>
      <td>itemtype: itemid</td>
      <td colspan="2">https://schema.org/Book: urn:isbn:0-374-22848-5</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>title</td>
      <td>Les hiboux des glaces orientales</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>author</td>
      <td>Jonathan C Slaght</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>datePublished</td>
      <td>2020-08-04</td>
    </tr>
  </tbody>
</table>

#### HTML

```html
<dl
  itemscope
  itemtype="https://schema.org/Book"
  itemid="urn:isbn:0-374-22848-5">
  <dt>Titre</dt>
  <dd itemprop="title">Les hiboux des glaces orientales</dd>
  <dt>Auteur</dt>
  <dd itemprop="author">Jonathan C Slaght</dd>
  <dt>Date de publication</dt>
  <dd>
    <time itemprop="datePublished" datetime="2020-08-04">4 août 2020</time>
  </dd>
</dl>
```

#### Résultat

{{EmbedLiveSample('Représenter des données structurées pour un livre')}}

## Spécifications

{{Specifications}}

## Voir aussi

- [Tous les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
- Les autres attributs universels relatifs aux microdonnées&nbsp;:
  - [`itemprop`](/fr/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - [`itemref`](/fr/docs/Web/HTML/Reference/Global_attributes/itemref)
  - [`itemscope`](/fr/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - [`itemtype`](/fr/docs/Web/HTML/Reference/Global_attributes/itemtype)
