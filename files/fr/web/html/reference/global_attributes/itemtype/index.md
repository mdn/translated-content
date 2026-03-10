---
title: "Attribut HTML universel : itemtype"
short-title: itemtype
slug: Web/HTML/Reference/Global_attributes/itemtype
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

[L'attribut universel](/fr/docs/Web/HTML/Reference/Global_attributes) **`itemtype`** définit l'URL du vocabulaire qui sera utilisé pour définir les `itemprop` (propriétés d'élément) dans la structure de données.

[`itemscope`](/fr/docs/Web/HTML/Reference/Global_attributes/itemscope) sert à définir la portée de la structure de données où le vocabulaire défini par `itemtype` sera actif.

Google et les principaux moteurs de recherche prennent en charge le vocabulaire [schema.org <sup>(angl.)</sup>](https://schema.org/) pour les données structurées. Ce vocabulaire définit un ensemble standard de noms de types et de noms de propriétés. Par exemple, `MusicEvent` indique une représentation de concert, avec les propriétés [`startDate` <sup>(angl.)</sup>](https://schema.org/startDate) et [`location` <sup>(angl.)</sup>](https://schema.org/location) qui définissent les détails clés du concert. Dans ce cas, [`MusicEvent` <sup>(angl.)</sup>](https://schema.org/MusicEvent) serait l'URL utilisée par `itemtype`, avec `startDate` et location comme `itemprop` que [`MusicEvent` <sup>(angl.)</sup>](https://schema.org/MusicEvent) définit.

> [!NOTE]
> Plus d'informations sur les attributs `itemtype` sont disponibles sur <https://schema.org/Thing>

- L'attribut **`itemtype`** doit avoir une valeur qui est un ensemble non ordonné de jetons uniques sensibles à la casse, chacun étant une URL valide et absolue, et tous définis pour utiliser le même vocabulaire. La valeur de l'attribut doit contenir au moins un jeton.
- Les types d'éléments doivent tous être des types définis dans les spécifications applicables (comme [schema.org <sup>(angl.)</sup>](https://schema.org/)), et doivent tous être définis pour utiliser le même vocabulaire.
- L'attribut `itemtype` ne peut être défini que sur des éléments qui ont un attribut `itemscope`.
- L'attribut itemid ne peut être défini que sur des éléments qui ont à la fois un attribut `itemscope` et un attribut `itemtype` défini. Ils ne doivent être définis que sur des éléments avec un attribut `itemscope`, dont l'attribut `itemtype` définit un vocabulaire ne prenant pas en charge les identifiants globaux pour les éléments, tel que défini par la spécification de ce vocabulaire.
- La signification exacte d'un identifiant global est déterminée par la spécification du vocabulaire. Il revient à ces spécifications de définir si plusieurs éléments avec le même identifiant global (que ce soit sur la même page ou sur des pages différentes) sont autorisés à exister, et quelles sont les règles de traitement pour ce vocabulaire concernant la gestion du cas de plusieurs éléments ayant le même identifiant.

## Exemples

### Représenter des données structurées pour un produit

Cet exemple utilise des attributs de microdonnées pour représenter des données structurées pour un produit, comme suit&nbsp;:

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="7">itemscope</td>
      <td>itemtype</td>
      <td colspan="2">Produit (https://schema.org/Product)</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Enclume exécutive</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>image</td>
      <td>
        https://pixabay.com/static/uploads/photo/2015/09/05/18/15/suitcase-924605_960_720.png
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>description</td>
      <td>
        Plus élégante que l'enclume classique d'ACME, l'enclume exécutive est parfaite pour le voyageur d'affaires à la recherche de quelque chose à laisser tomber d'une hauteur.
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>mpn</td>
      <td>925872</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>brand [Thing]</td>
      <td></td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>ACME</td>
    </tr>
    <tr>
      <td rowspan="9">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td>aggregateRating[AggregateRating]</td>
      <td></td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>ratingValue</td>
      <td>4.4</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>reviewCount</td>
      <td>89</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>offers [Offer]</td>
      <td>https://schema.org/Offer</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>priceCurrency</td>
      <td>USD</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>price</td>
      <td>119.99</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>priceValidUntil</td>
      <td>2020-11-05</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>itemCondition</td>
      <td>https://schema.org/UsedCondition</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>availability</td>
      <td>https://schema.org/InStock</td>
    </tr>
    <tr>
      <td rowspan="2">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td>seller [Organization]</td>
      <td>https://schema.org/Organization</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Objets exécutifs</td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> L'outil [Structured Data Testing Tool](https://developers.google.com/search/docs/appearance/structured-data) de Google est très pratique pour extraire les structures de microdonnées d'un code HTML. Essayez-le sur le code HTML présenté ici.

#### HTML

```html
<div itemscope itemtype="https://schema.org/Product">
  <span itemprop="brand">ACME<br /></span>
  <span itemprop="name">Enclume exécutive<br /></span>
  <img
    itemprop="image"
    src="https://pixabay.com/static/uploads/photo/2015/09/05/18/15/suitcase-924605_960_720.png"
    width="50"
    height="50"
    alt="Logo de l'enclume exécutive" /><br />

  <span itemprop="description">
    Plus élégante que l'enclume classique d'ACME, l'enclume exécutive est
    parfaite pour le voyageur d'affaires à la recherche de quelque chose à
    laisser tomber d'une hauteur.
    <br />
  </span>

  Product #: <span itemprop="mpn">925872<br /></span>
  <span
    itemprop="aggregateRating"
    itemscope
    itemtype="https://schema.org/AggregateRating">
    Évaluation&nbsp;: <span itemprop="ratingValue">4.4</span> étoiles, basée sur
    <span itemprop="reviewCount">89 </span> avis
  </span>
  <p>
    <span itemprop="offers" itemscope itemtype="https://schema.org/Offer">
      Prix régulier&nbsp;: 179,99 $<br />
      <meta itemprop="priceCurrency" content="USD" />
      <span itemprop="price">Prix soldé&nbsp;: 119,99 $<br /></span>
      (La vente se termine le
      <time itemprop="priceValidUntil" datetime="2020-11-05">5 novembre!</time>)
      <br />
      Disponible auprès de&nbsp;:
      <span
        itemprop="seller"
        itemscope
        itemtype="https://schema.org/Organization">
        <span itemprop="name">Objets exécutifs<br /></span>
      </span>
      Condition&nbsp;:
      <link
        itemprop="itemCondition"
        href="https://schema.org/UsedCondition" />Déjà utilisé, en excellent
      état<br />
      <link itemprop="availability" href="https://schema.org/InStock" />
      En stock&nbsp;! Commandez maintenant&nbsp;!
    </span>
  </p>
</div>
```

#### Résultat

{{EmbedLiveSample("Représenter des données structurées pour un produit", "", 400)}}

## Spécifications

{{Specifications}}

## Voir aussi

- [Tous les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
- Les autres attributs universels relatifs aux microdonnées&nbsp;:
  - [`itemid`](/fr/docs/Web/HTML/Reference/Global_attributes/itemid)
  - [`itemprop`](/fr/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - [`itemref`](/fr/docs/Web/HTML/Reference/Global_attributes/itemref)
  - [`itemscope`](/fr/docs/Web/HTML/Reference/Global_attributes/itemscope)
