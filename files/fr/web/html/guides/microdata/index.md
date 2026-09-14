---
title: Utiliser les microdonnées en HTML
short-title: Microdonnées
slug: Web/HTML/Guides/Microdata
l10n:
  sourceCommit: 057d13e47e8335a52d3c687cf27231527ef758c1
---

Les microdonnées font partie du standard HTML {{Glossary("WHATWG")}} et servent à imbriquer des métadonnées dans le contenu existant des pages web. Les moteurs de recherche et les robots d'indexation peuvent extraire et traiter les microdonnées d'une page web pour offrir une expérience de navigation enrichie aux utilisateur·ice·s. Les moteurs de recherche tirent grand profit d'un accès direct à ces données structurées, car cela leur permet de comprendre les informations présentes sur les pages web et de fournir des résultats plus pertinents aux utilisateur·ice·s. Les microdonnées utilisent un vocabulaire associé pour décrire un élément et des paires nom-valeur pour attribuer des valeurs à ses propriétés. Les microdonnées sont une tentative de fournir une méthode déclarative pour annoter les éléments HTML avec des balises lisibles par machine, par rapport aux approches similaires utilisant RDFa et les microformats classiques.

À un niveau général, les microdonnées se composent d'un groupe de paires nom-valeur. Les groupes sont appelés éléments, et chaque paire nom-valeur est une propriété. Les éléments et les propriétés sont représentés par des éléments HTML classiques.

- Pour créer un élément, on utilise l'attribut `itemscope`.
- Pour ajouter une propriété à un élément, on utilise l'attribut `itemprop` sur l'un des descendants de l'élément.

## Vocabulaires

Google et les autres moteurs de recherche majeurs prennent en charge le vocabulaire [schema.org <sup>(angl.)</sup>](https://schema.org/) pour les données structurées. Ce vocabulaire définit un ensemble standard de noms de types et de noms de propriétés, par exemple, [schema.org Music Event <sup>(angl.)</sup>](https://schema.org/MusicEvent) indique une représentation de concert, avec les propriétés [`startDate` <sup>(angl.)</sup>](https://schema.org/startDate) et [`location` <sup>(angl.)</sup>](https://schema.org/location) pour définir les détails clés du concert. Dans ce cas, [schema.org Music Event <sup>(angl.)</sup>](https://schema.org/MusicEvent) sera l'URL utilisée par `itemtype` et `startDate` et location seront les `itemprop` définis par [schema.org Music Event <sup>(angl.)</sup>](https://schema.org/MusicEvent).

> [!NOTE]
> Pour en savoir plus sur les attributs `itemtype`, consultez le site [https://schema.org/Thing <sup>(angl.)</sup>](https://schema.org/Thing).

Les vocabulaires de microdonnées fournissent la sémantique ou la signification d'un _`Item`_. Les développeur·euse·s Web peuvent concevoir un vocabulaire personnalisé ou utiliser des vocabulaires disponibles sur le Web, tels que le vocabulaire largement utilisé [schema.org <sup>(angl.)</sup>](https://schema.org/). Une collection de vocabulaires de balisage couramment utilisés est fournie par Schema.org.

Vocabulaires couramment utilisés&nbsp;:

- Œuvres créatives&nbsp;: [CreativeWork <sup>(angl.)</sup>](https://schema.org/CreativeWork), [Book <sup>(angl.)</sup>](https://schema.org/Book), [Movie <sup>(angl.)</sup>](https://schema.org/Movie), [MusicRecording <sup>(angl.)</sup>](https://schema.org/MusicRecording), [Recipe <sup>(angl.)</sup>](https://schema.org/Recipe), [TVSeries <sup>(angl.)</sup>](https://schema.org/TVSeries)
- Objets non textuels incorporés&nbsp;: [AudioObject <sup>(angl.)</sup>](https://schema.org/AudioObject), [ImageObject <sup>(angl.)</sup>](https://schema.org/ImageObject), [VideoObject <sup>(angl.)</sup>](https://schema.org/VideoObject)
- [`Event` <sup>(angl.)</sup>](https://schema.org/Event)
- [Types de santé et médicaux <sup>(angl.)</sup>](https://schema.org/docs/meddocs.html) : Notes sur les types de santé et médicaux sous [MedicalEntity <sup>(angl.)</sup>](https://schema.org/MedicalEntity)
- [`Organization` <sup>(angl.)</sup>](https://schema.org/Organization)
- [`Person` <sup>(angl.)</sup>](https://schema.org/Person)
- [`Place` <sup>(angl.)</sup>](https://schema.org/Place), [LocalBusiness <sup>(angl.)</sup>](https://schema.org/LocalBusiness), [Restaurant <sup>(angl.)</sup>](https://schema.org/Restaurant)
- [`Product` <sup>(angl.)</sup>](https://schema.org/Product), [Offer <sup>(angl.)</sup>](https://schema.org/Offer), [AggregateOffer <sup>(angl.)</sup>](https://schema.org/AggregateOffer)
- [`Review` <sup>(angl.)</sup>](https://schema.org/Review), [AggregateRating <sup>(angl.)</sup>](https://schema.org/AggregateRating)
- [`Action` <sup>(angl.)</sup>](https://schema.org/Action)
- [`Thing` <sup>(angl.)</sup>](https://schema.org/Thing)
- [`Intangible` <sup>(angl.)</sup>](https://schema.org/Intangible)

Les principaux opérateurs de moteurs de recherche comme Google, Microsoft et Yahoo&nbsp;! s'appuient sur le vocabulaire [schema.org <sup>(angl.)</sup>](https://schema.org/) pour améliorer les résultats de recherche. Pour certains usages, un vocabulaire ad-hoc est adéquat. Pour d'autres, un vocabulaire devra être conçu. Dans la mesure du possible, les auteurs sont encouragés à réutiliser les vocabulaires existants, car cela facilite la réutilisation du contenu.

## Localisation

Dans certains cas, les moteurs de recherche couvrent un public régional. Certaines extensions sont donc ajoutées aux microdonnées pour fournir du contenu spécifique. Ainsi, [Yandex](https://www.yandex.com/) qui est un moteur de recherche très présent en Russie supporte des microformats comme `hCard` (informations de contact d'une entreprise), `hRecipe` (recette de cuisine), `hReview` (avis du marché) et `hProduct` (données sur les produits) et fournit son propre format pour dédfinir les termes et les articles encyclopédiques. Cette extension a été construite afin de résoudre les problèmes de translitération entre les alphabets cyrillique et latin. En raison de la mise en œuvre de paramètres de balisage supplémentaires du vocabulaire de Schema, l'indexation des informations sur les pages Web en langue russe est devenue considérablement plus efficace.

## Attributs universels liés aux microdonnées

[`itemid`](/fr/docs/Web/HTML/Reference/Global_attributes/itemid) — Identifiant unique et global d'un élément.

[`itemprop`](/fr/docs/Web/HTML/Reference/Global_attributes/itemprop) — Utilisé pour ajouter des propriétés à un élément. Tout élément HTML peut avoir un attribut `itemprop` défini, où un `itemprop` consiste en une paire nom et valeur.

[`itemref`](/fr/docs/Web/HTML/Reference/Global_attributes/itemref) — Les propriétés qui ne sont pas des descendants d'un élément avec l'attribut `itemscope` peuvent être associées à l'élément à l'aide de **itemref**. `itemref` fournit une liste d'identifiants d'éléments (et non de `itemid`) avec des propriétés supplémentaires ailleurs dans le document.

[`itemscope`](/fr/docs/Web/HTML/Reference/Global_attributes/itemscope) — L'attribut `itemscope` fonctionne généralement avec [`itemtype`](/fr/docs/Web/HTML/Reference/Global_attributes/itemtype) pour indiquer que le HTML contenu dans un bloc concerne un élément particulier. L'attribut `itemscope` crée un _`Item`_ et définit la portée de l'itemtype qui lui est associé. L'attribut `itemtype` est une URL valide d'un vocabulaire (comme [schema.org <sup>(angl.)</sup>](https://schema.org/)) qui décrit l'élément et le contexte de ses propriétés.

[`itemtype`](/fr/docs/Web/HTML/Reference/Global_attributes/itemtype) — Définit l'URL du vocabulaire qui sera utilisée pour définir les `itemprop` (propriétés d'élément) dans la structure de données. L'attribut [`itemscope`](/fr/docs/Web/HTML/Reference/Global_attributes/itemscope) est utilisé pour définir la portée dans la structure de données où le vocabulaire défini par `itemtype` sera actif.

## Exemple

### HTML

```html
<div itemscope itemtype="https://schema.org/SoftwareApplication">
  <span itemprop="name">Angry Birds</span> - NÉCESSITE
  <span itemprop="operatingSystem">ANDROID</span><br />
  <link
    itemprop="applicationCategory"
    href="https://schema.org/GameApplication" />

  <div
    itemprop="aggregateRating"
    itemscope
    itemtype="https://schema.org/AggregateRating">
    ÉVALUATION&nbsp;:
    <span itemprop="ratingValue">4.6</span> (
    <span itemprop="ratingCount">8864</span> notes )
  </div>

  <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
    Prix&nbsp;: <span itemprop="price">1.00</span>$
    <meta itemprop="priceCurrency" content="USD" />
  </div>
</div>
```

### Données structurées

<table class="standard-table">
  <tbody>
    <tr>
      <td rowspan="4">itemscope</td>
      <td>itemtype</td>
      <td colspan="2">
        SoftwareApplication (https://schema.org/SoftwareApplication)
      </td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>name</td>
      <td>Angry Birds</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>operatingSystem</td>
      <td>ANDROID</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>applicationCategory</td>
      <td>GameApplication (https://schema.org/GameApplication)</td>
    </tr>
    <tr>
      <td rowspan="3">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td colspan="2">aggregateRating [AggregateRating]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>ratingValue</td>
      <td>4.6</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>ratingCount</td>
      <td>8864</td>
    </tr>
    <tr>
      <td rowspan="3">itemscope</td>
      <td>itemprop[itemtype]</td>
      <td colspan="2">offers [Offer]</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>price</td>
      <td>1.00</td>
    </tr>
    <tr>
      <td>itemprop</td>
      <td>priceCurrency</td>
      <td>USD</td>
    </tr>
  </tbody>
</table>

### Résultat

{{EmbedLiveSample("HTML", "", 100)}}

> [!NOTE]
> Un outil pratique pour extraire et vérifier les structures de microdonnées à partir du HTML est le [Schema Markup Validator <sup>(angl.)</sup>](https://validator.schema.org/). Essayez-le sur le HTML présenté ci-dessus.

## Voir aussi

- [Les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)
