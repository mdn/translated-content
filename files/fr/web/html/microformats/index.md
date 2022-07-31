---
title: Microformats
slug: Web/HTML/microformats
tags:
  - Composing
  - HTML
  - Microformats
  - NeedsContent
  - NeedsMarkupWork
  - Reference
  - SEO
  - Search
translation_of: Web/HTML/microformats
---
Les [_microformats_](https://microformats.org/) (parfois abrégés **μF**) sont des normes utilisées pour intégrer la sémantique et les données structurées dans le HTML, et fournir une API à utiliser par les moteurs de recherche, les agrégateurs et autres outils. Ces modèles minimaux de HTML sont utilisés pour marquer des entités allant d'informations fondamentales à des informations spécifiques à un domaine, telles que des personnes, des organisations, des événements et des lieux. Les microformats utilisent des vocabulaires de soutien pour décrire les objets et des paires nom-valeur pour attribuer des valeurs à leurs propriétés. Les propriétés sont transportées dans des attributs de classe qui peuvent être ajoutés à tout élément HTML, tandis que les valeurs des données réutilisent le contenu des éléments HTML et les attributs sémantiques. Microformats2 est une mise à jour de microformats qui offre un moyen plus simple d'annoter la syntaxe structurée et les vocabulaires HTML que les approches précédentes utilisant RDFa et microdata qui nécessitent l'apprentissage de nouveaux attributs.

Les microformats sont pris en charge par tous les principaux moteurs de recherche. Les moteurs de recherche bénéficient grandement d'un accès direct à ces données structurées, car elles leur permettent de comprendre les informations contenues dans les pages Web et de fournir des résultats plus pertinents aux utilisateurs. En plus d'être lisible par les machines, leur format est conçu pour être facilement lu par les humains.

- Pour créer un objet microformats, les noms de classe h-\* sont utilisés dans l'attribut class.
- Pour ajouter une propriété à un objet, les noms de classe p-\*, u-\*, dt-\*, e-\* sont utilisés sur un des descendants de l'objet.

Il existe [différentes bibliothèques d'analyse pour la plupart des langages de programmation](http://microformats.org/wiki/microformats2#Parsers) qui permettent d'analyser les données microformats2.

## Comment fonctionnent les microformats

Un auteur d'une page web peut ajouter des microformats via le contenu HTML. Ainsi, si un auteur veut s'identifier via un élément, il peut utiliser une classe [h-card](http://microformats.org/wiki/h-card) :

### Exemple HTML

```html
<a class="h-card" href="http://alice.example.com">Alice Blogger</a>
```

Lorsqu'un parseur de microformat détectera cette donnée, il saura que cette page contient une « carte » qui décrit une personne ou une organisation nommée `Alice Blogger` et dont l'URL est `http://alice.example.com/`. Le parseur rend ensuite cette donnée accessible via des API qui pourront être utilisées par des applications.

Comme dans cet exemple, certains modèles de balisage ne nécessitent qu'un seul nom de classe racine de microformat, que les analyseurs syntaxiques utilisent pour trouver quelques propriétés génériques telles que `name`, `url` et `photo`.

## Préfixes et microformats

Tous les microformats se composent d'une racine et d'un ensemble de propriétés. Les propriétés sont optionnelles et peuvent avoir plusieurs valeurs (si une application a besoin d'une seule valeur, elle pourra utiliser la première valeur d'une propriété). Les données hiérarchisées sont représentées avec des microformats imbriqués.

Tous les noms de classe des microformats utilisent des préfixes. La syntaxe des préfixes **est indépendante de celle des vocabulaires** (développées séparément).

- **"h-\*" pour les racines** (ex. "h-card", "h-entry", "h-feed"…). Ces racines indiquent un type ciblant un vocabulaire de propriétés donné. Ainsi :

  - [h-card](http://microformats.org/wiki/h-card) décrit une personne ou une organisation
  - [h-entry](http://microformats.org/wiki/h-entry) décrit un contenu en ligne épisodique ou daté (tel qu'un billet de blog)
  - [h-feed](http://microformats.org/wiki/h-feed) décrit un flux (médias, billets, etc)
  - D'autres exemples sont décrits [sur le wiki microformats2.](http://microformats.org/wiki/microformats2#v2_vocabularies)

- **"p-\*" pour les propriétés textuelles** (ex. "p-name", "p-summary")

  - Un contenu texte. Pour certains éléments HTML, certains attributs spécifiques seront utilisés (ex. [`alt`](/fr/docs/Web/HTML/Element/Img#attr-alt) pour [`<img>`](/fr/docs/Web/HTML/Element/Img), [`title`](/fr/docs/Web/HTML/Element/abbr#attr-title) pour [`<abbr>`](/fr/docs/Web/HTML/Element/abbr)).

- **"u-\*" pour les propriétés qui sont des URL** (ex. "u-url", "u-photo", "u-logo")

  - Analyse spéciale : attributs d'éléments [`<a>`](/fr/docs/Web/HTML/Element/a)/[`href`](/fr/docs/Web/HTML/Element/a#attr-href), [`<img>`](/fr/docs/Web/HTML/Element/Img)/[`src`](/fr/docs/Web/HTML/Element/Img#attr-src), [`<object>`](/fr/docs/Web/HTML/Element/object)/[`data`](/fr/docs/Web/HTML/Element/object#attr-data) etc. attributs sur le contenu des éléments.

- **"dt-\*" pour les propriétés temporelles (date/heure)** (ex. "dt-start", "dt-end", "dt-bday")

  - Analyse syntaxique spéciale : attribut [`datetime`](/fr/docs/Web/HTML/Element/time#attr-datetime) de l'élément [`<time>`](/fr/docs/Web/HTML/Element/time), [value-class-pattern](https://microformats.org/wiki/value-class-pattern "value-class-pattern") et analyse séparée de la valeur date-heure pour plus de lisibilité.

- **"e-\*" pour les arborescences** où l'intégralité de la hiérarchie de l'élément est la valeur à récupérer (ex. "e-content"). Le préfixe "e-" peut être retenu en anglais comme "**e**lement tree", "**e**mbedded markup" ou "**e**ncapsulated markup".

## Exemples de microformats

### h-card

Le microformat [h-card](http://microformats.org/wiki/h-card) représente une personne ou une organisation.

La valeur de chaque propriété est définie en HTML via l'attribut `class`.

#### Exemple de h-card

```html
<p class="h-card">
  <img class="u-photo" src="http://example.org/photo.png" alt="" />
  <a class="p-name u-url" href="http://example.org">Joe Bloggs</a>
  <a class="u-email" href="mailto:joebloggs@example.com">joebloggs@example.com</a>,
  <span class="p-street-address">17 Austerstræti</span>
  <span class="p-locality">Reykjavík</span>
  <span class="p-country-name">Iceland</span>
</p>
```

| Propriété              | Description                                                              |
| ---------------------- | ------------------------------------------------------------------------ |
| **`p-name`**           | Le nom complet et formaté de la personne ou de l'organisation.           |
| **`u-email`**          | L'adresse électronique.                                                  |
| **`u-photo`**          | Une photo pour la personne ou l'organisation.                            |
| **`u-url`**            | La page d'accueil ou une URL représentant la personne ou l'organisation. |
| **`u-uid`**            | Un identifiant universel unique (de préférence une URL canonique).       |
| **`p-street-address`** | L'adresse composée du numéro et du nom de la rue.                        |
| **`p-locality`**       | La ville ou le village de résidence.                                     |
| **`p-country-name`**   | Le nom du pays de résidence.                                             |

#### Exemple de h-card imbriqué

```html
<div class="h-card">
  <a class="p-name u-url"
   href="http://blog.lizardwrangler.com/"
  >Mitchell Baker</a>
  (<a class="p-org h-card"
    href="http://mozilla.org/"
   >Mozilla Foundation</a>)
</div>
```

Cela fournira le JSON suivant :

```json
{
  "items": [{
  "type": ["h-card"],
  "properties": {
    "name": ["Mitchell Baker"],
    "url": ["http://blog.lizardwrangler.com/"],
    "org": [{
    "value": "Mozilla Foundation",
    "type": ["h-card"],
    "properties": {
      "name": ["Mozilla Foundation"],
      "url": ["http://mozilla.org/"]
    }
    }]
  }
  }]
}
```

> **Note :** Le h-card imbriqué récupère des valeurs implicites pour `name` et `url`.

### h-entry

Le microformat [h-entry](http://microformats.org/wiki/h-entry) représente un contenu épisodique ou daté présent sur le Web. Il est généralement utilisé pour du contenu qui est présenté dans un flux (ex. les billets de blog).

```html
<article class="h-entry">
  <h1 class="p-name">Microformats are amazing</h1>
  <p>Published by <a class="p-author h-card" href="http://example.com">W. Developer</a>
   on <time class="dt-published" datetime="2013-06-13 12:00:00">13<sup>th</sup> June 2013</time></p>

  <p class="p-summary">In which I extoll the virtues of using microformats.</p>

  <div class="e-content">
  <p>Blah blah blah</p>
  </div>
</article>
```

#### Propriétés

| Propriété          | Description                                                      |
| ------------------ | ---------------------------------------------------------------- |
| **`p-name`**       | Nom ou titre pour l'entrée.                                      |
| **`p-author`**     | L'auteur de l'entrée (éventuellement imbriquée avec une h-card). |
| **`dt-published`** | La date de publication de l'entrée.                              |
| **`p-summary`**    | Un résumé de l'entrée.                                           |
| **`e-content`**    | Le contenu complet de l'entrée.                                  |

#### Exemple de microformat h-entry analysé

```html
<div class="h-entry">
  <p><span class="p-author h-card">
    <a href="https://quickthoughts.jgregorymcverry.com/profile/jgmac1106" ><img class="u-photo" src="https://quickthoughts.jgregorymcverry.com/file/2d6c9cfed7ac8e849f492b5bc7e6a630/thumb.jpg"/></a>
    <a class="p-name u-url" href="https://quickthoughts.jgregorymcverry.com/profile/jgmac1106">Greg McVerry</a></span>
     Replied to <a class="u-in-reply-to" href="https://developer.mozilla.org/en-US/docs/Web/HTML/microformats">a post on
   <strong>developer.mozilla.org</strong> </a>:
  </p>
   <p class="p-name e-content">Hey thanks for making this microformats resource</p>
   <p> <a href="https://quickthoughts.jgregorymcverry.com/profile/jgmac1106">Greg McVerry</a>
  published this <a class="u-url url" href="https://quickthoughts.jgregorymcverry.com/2019/05/31/hey-thanks-for-making-this-microformats-resource"><time class="dt-published"
   datetime="2019-05-31T14:19:09+0000">31 May 2019</time></a></p>
</div>
```

```json
{
  "items": [
    {
      "type": [ "h-entry" ],
      "properties": {
        "in-reply-to": [ "https://developer.mozilla.org/en-US/docs/Web/HTML/microformats" ],
        "name": [ "Hey thanks for making this microformats resource" ],
        "url": [ "https://quickthoughts.jgregorymcverry.com/2019/05/31/hey-thanks-for-making-this-microformats-resource" ],
        "published": [ "2019-05-31T14:19:09+0000" ],
        "content": [
          {
            "html": "Hey thanks for making this microformats resource",
            "value": "Hey thanks for making this microformats resource",
            "lang": "en"
          }
        ],
        "author": [
          {
            "type": [ "h-card" ],
            "properties": {
              "name": [ "Greg McVerry" ],
              "photo": [ "https://quickthoughts.jgregorymcverry.com/file/2d6c9cfed7ac8e849f492b5bc7e6a630/thumb.jpg" ],
              "url": [ "https://quickthoughts.jgregorymcverry.com/profile/jgmac1106" ]
            },
            "lang": "en",
            "value": "Greg McVerry"
          }
        ]
      },
      "lang": "en"
    }
  ]
}
```

### h-feed

Le microformat [h-feed](http://microformats.org/wiki/h-feed) est un flux de billets [h-entry](http://microformats.org/wiki/h-entry "h-entry").

#### Example h-feed

```html
<div class="h-feed">
  <h1 class="p-name">Microformats Blogs</h1>
  <article class="h-entry">
  <h2 class="p-name">Microformats are amazing</h2>
  <p>Published by <a class="p-author h-card" href="http://example.com">W. Developer</a>
     on <time class="dt-published" datetime="2013-06-13 12:00:00">13<sup>th</sup> June 2013</time>
  </p>
  <p class="p-summary">In which I extoll the virtues of using microformats.</p>
  <div class="e-content"> <p>Blah blah blah</p> </div>
  </article>
</div>
```

#### Propriétés

| Propriété      | Description                                            |
| -------------- | ------------------------------------------------------ |
| **`p-name`**   | Nom du flux.                                           |
| **`p-author`** | Auteur du flux, éventuellement intégré via une h-card. |

#### Enfants

<table class="standard-table">
  <tbody>
    <tr>
      <td><strong>h-entry</strong></td>
    </tr>
    <tr>
      <td>Des objets représentants des éléments du flux.</td>
    </tr>
  </tbody>
</table>

### h-event

Le microformat `h-event` permet de représenter des évènements.

```html
<div class="h-event">
  <h1 class="p-name">Microformats Meetup</h1>
  <p>From
  <time class="dt-start" datetime="2013-06-30 12:00">30<sup>th</sup> June 2013, 12:00</time>
  to <time class="dt-end" datetime="2013-06-30 18:00">18:00</time>
  at <span class="p-location">Some bar in SF</span></p>
  <p class="p-summary">Get together and discuss all things microformats-related.</p>
</div>
```

#### Propriétés

| Propriété        | Description                                                               |
| ---------------- | ------------------------------------------------------------------------- |
| **`p-name`**     | Nom ou titre pour l'évènement.                                            |
| **`p-summary`**  | Résumé de l'évènement.                                                    |
| **`dt-start`**   | Date/heure de début de l'évènement                                        |
| **`dt-end`**     | Date/heure de fin de l'évènement                                          |
| **`p-location`** | Emplacement / lieu de l'évènement, éventuellement indiqué par une h-card. |

#### Exemple d'analyse

```html
<div class="h-event">
  <h2 class="p-name">IndieWeb Summit</h2>
  <time class="dt-start" datetime="2019-06-29T09:00:00-07:00">June 29, 2019 at 9:00am  (-0700)</time><br>through <time class="dt-end" datetime="2019-06-30T18:00:00-07:00">June 30, 2019 at 6:00pm (-0700)</time><br>
  <div class="p-location h-card">
    <div>
    <span class="p-name">Mozilla</span>
     </div>
     <div>
      <span class="p-street-address">1120 NW Couch St</span>,
      <span class="p-locality">Portland</span>,
      <span class="p-region">Oregon</span>,
      <span class="p-country">US</span>
     </div>
       <data class="p-latitude" value="45.52345"></data>
      <data class="p-longitude" value="-122.682677"></data>
  </div>
    <div class="e-content">Come join us
     </div>
    <div>
     <span class="p-author h-card"><a class="u-url p-name" href="https://aaronparecki.com">Aaron Parecki</a></span> Published this <a href="https://aaronparecki.com/2019/06/29/1/" class="u-url">event </a>on <time class="dt published" datetime="2019-05-25T18:00:00-07:00">May 5th, 2019</time>
    </div>
</div>
```

```json
{
  "items": [
    {
      "type": [ "h-event" ],
      "properties": {
        "name": [ "IndieWeb Summit" ],
        "url": [ "https://aaronparecki.com/2019/06/29/1/" ],
        "author": [
          {
            "type": [ "h-card" ],
            "properties": {
              "name": [ "Aaron Parecki" ],
              "url": [ "https://aaronparecki.com"]
            },
            "lang": "en",
            "value": "Aaron Parecki"
          }
        ],
        "start": [ "2019-06-29T09:00:00-07:00" ],
        "end": [ "2019-06-30T18:00:00-07:00" ],
        "published": [ "2019-05-25T18:00:00-07:00" ],
        "content": [
          {
            "html": "Come join us",
            "value": "Come join us",
            "lang": "en"
          }
        ],
        "location": [
          {
            "type": [ "h-card" ],
            "properties": {
              "name": [ "Mozilla" ],
              p-street-address: [ "1120 NW Couch St" ]
              "locality": [ "Portland" ],
              "region": [ "Oregon" ],
              "country": [ "US" ],
              "latitude": [ "45.52345" ],
              "longitude": [ "-122.682677" ]
            },
            "lang": "en",
            "value": "Mozilla"
          }
        ]
      },
      "lang": "en"
    }
  ]
}
```

## Compatibilité des navigateurs

Pris en charge dans tous les navigateurs prenant en charge l'attribut class et son API DOM.

## Voir aussi

- [attribut `class`](/fr/docs/Web/HTML/Global_attributes/class)
- [Microformat](https://fr.wikipedia.org/wiki/Microformat) sur Wikipedia
- [Le site officiel des microformats](http://microformats.org/)
- [Prise en charge des différents moteurs de recherche](http://microformats.org/wiki/search_engines) sur le site microformats
- [Les microformats sur IndieWebCamp](https://indiewebcamp.com/microformats)
