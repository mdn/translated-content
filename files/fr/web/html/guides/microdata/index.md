---
title: Microdonnées
slug: Web/HTML/Guides/Microdata
original_slug: Web/HTML/Microdata
---

Les microdonnées (_microdata_) sont une partie de la spécification HTML du [WHATWG](/fr/docs/Glossary/WHATWG) qui est utilisée afin de fournir des métadonnées sur le contenu des pages web. Les moteurs de recherche, les robots (_crawlers_) d'analyse peuvent traiter les microdonnées d'une page web pour améliorer l'expérience de navigation. Les moteurs de recherches peuvent tirer parti des informations pour obtenir une meilleure pertinence. Les microdonnées sont structurées grâce à un vocabulaire permettant de décrire des objets qui sont des groupes de paires de noms/valeurs. Le but des microdonnées est de faciliter l'annotation des éléments HTML et d'être plus simple à utiliser que RDFa ou les microformats.

Les microdonnées sont des groupes de paires nom-valeur. Ces groupes sont appelés des objets (_items_) et chaque paire nom-valeur est une propriété. Les objets et les propriétés s'inscrivent dans des éléments HTML classiques :

- Pour créer un objet, on utilise l'attribut **`itemscope`**
- Pour ajouter une propriété, on utilise l'attribut **`itemprop`** sur l'un des descendants.

## Vocabulaires

Google et les autres moteurs de recherches participent au vocabulaire défini par [schema.org](https://schema.org/) pour structurer les données. Ce vocabulaire définit un ensemble standard de types et de noms de propriétés. Par exemple [`MusicEvent`](https://schema.org/MusicEvent) indique un événement musical dont les propriétés [`startDate`](https://schema.org/startDate) et [`location`](https://schema.org/location) utilisées pour définir les détails du concert. Dans ce cas, l'URL [`https://schema.org/MusicEvent`](https://schema.org/MusicEvent) sera l'URL utilisée pour l'attribut `itemtype` et les propriétés `startDate` et `location` seront les propriétés utilisées, définies par [`https://schema.org/MusicEvent`](https://schema.org/MusicEvent).

> [!NOTE]
> Pour en savoir plus sur les attributs `itemtype`, consultez le site <http://schema.org/Thing>.

Les vocabulaires de microdonnées fournissent la sémantique ou la signification d'un élément. Les développeurs Web peuvent concevoir un vocabulaire personnalisé ou utiliser des vocabulaires disponibles sur le Web, tels que le vocabulaire largement utilisé [schema.org](https://schema.org). Une collection de vocabulaires de balisage couramment utilisés est fournie par Schema.org.

Vocabulaires couramment utilisés :

- Œuvres créatives : [CreativeWork](https://schema.org/CreativeWork), [Book](https://schema.org/Book), [Movie](https://schema.org/Movie), [MusicRecording](https://schema.org/MusicRecording), [Recipe](https://schema.org/Recipe), [TVSeries](https://schema.org/TVSeries)
- Objets non textuels incorporés : [AudioObject](https://schema.org/AudioObject), [ImageObject](https://schema.org/ImageObject), [VideoObject](https://schema.org/VideoObject)
- [Event](https://schema.org/Event)
- [Health and medical types](https://schema.org/docs/meddocs.html) : Notes sur les types de santé et médicaux sous [MedicalEntity](https://schema.org/MedicalEntity)
- [Organization](https://schema.org/Organization)
- [Person](https://schema.org/Person)
- [Place](https://schema.org/Place), [LocalBusiness](https://schema.org/LocalBusiness), [Restaurant](https://schema.org/Restaurant)
- [Product](https://schema.org/Product), [Offer](https://schema.org/Offer), [AggregateOffer](https://schema.org/AggregateOffer)
- [Review](https://schema.org/Review), [AggregateRating](https://schema.org/AggregateRating)
- [Action](https://schema.org/Action)
- [Thing](https://schema.org/Thing)
- [Intangible](https://schema.org/Intangible)

Les principaux opérateurs de moteurs de recherche comme Google, Microsoft et Yahoo ! s'appuient sur le vocabulaire [schema.org](https://schema.org/) pour améliorer les résultats de recherche. Pour certains usages, un vocabulaire ad-hoc est adéquat. Pour d'autres, un vocabulaire devra être conçu. Dans la mesure du possible, les auteurs sont encouragés à réutiliser les vocabulaires existants, car cela facilite la réutilisation du contenu.

## Localisation

Dans certains cas, les moteurs de recherche couvrent un public régional. Certaines extensions sont donc ajoutées aux microdonnées pour fournir du contenu spécifique. Ainsi, [Yandex](https://www.yandex.com/) qui est un moteur de recherche très présent en Russie supporte des microformats comme _hCard_, _hRecipe_, _hReview_ et _hProduct_ et fournit son propre format pour dédfinir les termes et les articles encyclopédiques. Cette extension a été construite afin de résoudre les problèmes de translitération entre les alphabets cyrillique et latin.

## Attributs globaux liés aux microdonnées

- [`itemid`](/fr/docs/Web/HTML/Reference/Global_attributes/itemid)
  - : Cet attribut est l'identifiant unique d'un objet.
- [`itemprop`](/fr/docs/Web/HTML/Reference/Global_attributes/itemprop)
  - : Cet attribut est utilisé afin d'ajouter des propriétés à un élément.
- [`itemref`](/fr/docs/Web/HTML/Reference/Global_attributes/itemref)
  - : Cet attribut permet de faire référence à d'autres éléments HTML décrivant le même objet.
- [`itemscope`](/fr/docs/Web/HTML/Reference/Global_attributes/itemscope)
  - : Cet attribut définit la portée du vocabulaire déclaré par `itemtype` et englobe généralement un objet.
- [`itemtype`](/fr/docs/Web/HTML/Reference/Global_attributes/itemtype)
  - : Cet attribut définit l'URL du vocabulaire qui spécifie le modèle de données utilisé pour décrire les objets.

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
    ÉVALUATION :
    <span itemprop="ratingValue">4.6</span> (
    <span itemprop="ratingCount">8864</span> notes )
  </div>

  <div itemprop="offers" itemscope itemtype="https://schema.org/Offer">
    Prix : <span itemprop="price">1.00</span>$
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

{{EmbedLiveSample("HTML", "", "100")}}

> [!NOTE]
> Un outil pratique pour extraire les structures de microdonnées du HTML est l'[outil de test des données structurées](https://developers.google.com/search/docs/guides/intro-structured-data) de Google. Essayez-le sur le HTML présenté ci-dessus.

## Compatibilité des navigateurs

Fonctionnalité ajoutée dans Firefox 16 et retirée dans Firefox 49.

## Voir aussi

- [Les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes)

{{QuickLinksWithSubpages("/fr/docs/Web/HTML")}}
