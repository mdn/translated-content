---
title: Utiliser les microformats en HTML
short-title: Microformats
slug: Web/HTML/Guides/Microformats
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

Les [_microformats_ <sup>(angl.)</sup>](https://microformats.org/wiki/Main_Page) sont des standards utilisés pour intégrer de la sémantique et des données structurées dans le HTML, et fournir une API utilisable par des applications sociales web, des moteurs de recherche, des agrégateurs et d'autres outils. Ces modèles minimaux de HTML servent à baliser des entités allant d'informations fondamentales à des informations spécifiques à un domaine, telles que des personnes, des organisations, des évènements et des lieux.

- Pour créer un objet microformats, on utilise des noms de classe `h-*` dans l'attribut class.
- Pour ajouter une propriété à un objet, on utilise les noms de classe `p-*`, `u-*`, `dt-*`, `e-*` sur l'un des descendants de l'objet.

Les microformats utilisent des vocabulaires associés pour décrire les objets et des paires nom-valeur pour attribuer des valeurs à leurs propriétés. Les propriétés sont portées par des attributs de classe qui peuvent être ajoutés à n'importe quel élément HTML, tandis que les valeurs de données réutilisent le contenu des éléments HTML et les attributs sémantiques.

Microformats2 (parfois appelé mf2) est une mise à jour des microformats qui fournit une méthode d'annotation de la syntaxe structurée HTML et des vocabulaires, contrairement aux approches précédentes utilisant RDFa et les microdonnées. Ces approches précédentes nécessitent l'apprentissage de nouveaux attributs.

Il existe [des bibliothèques d'analyse open source pour la plupart des langages <sup>(angl.)</sup>](https://microformats.org/wiki/microformats2#Parsers) pour microformats2.

## Comment fonctionnent les microformats

Un auteur d'une page web peut ajouter des microformats via le contenu HTML. Ainsi, si un auteur veut s'identifier via un élément, il peut utiliser une classe [h-card <sup>(angl.)</sup>](https://microformats.org/wiki/h-card)&nbsp;:

### Exemple HTML

```html
<a class="h-card" href="https://alice.example.com">Alice Blogger</a>
```

Lorsqu'un parseur rencontre cette donnée, il saura que cette page contient une «&nbsp;carte&nbsp;» qui décrit une personne ou une organisation nommée `Alice Blogger` avec une URL `https://alice.example.com/`. Le parseur rend cette donnée accessible via des API qui peuvent être utilisées par différentes applications. Par exemple, une application pourrait analyser une page pour y trouver une h-card à utiliser comme information de profil pour une personne inscrite à un service.

Comme dans cet exemple, certains modèles de balisage ne nécessitent qu'un seul nom de classe racine de microformat, que les analyseurs syntaxiques utilisent pour trouver quelques propriétés génériques telles que `name`, `url` et `photo`.

## Cas d'utilisation des microformats

Les microformats ont de nombreux cas d'utilisation. Tout d'abord, le [standard Webmention <sup>(angl.)</sup>](https://webmention.net/draft/) utilise les microformats pour permettre l'envoi de messages et de commentaires d'un site à un autre. La spécification Webmention définit des attributs spécifiques que les sites peuvent publier et consommer afin de créer une méthode riche et interopérable de publication de messages et de commentaires. Les microformats peuvent aussi être utilisés avec Webmention pour permettre l'envoi de réactions sociales telles que les mentions j'aime, les republications et les favoris d'un site à un autre.

Les microformats permettent également une syndication facile entre sites. Un agrégateur peut analyser une page contenant des microformats publiés pour rechercher des informations telles que le titre d'un billet, le corps du billet et l'auteur·ice du billet. Cet agrégateur peut alors utiliser les informations sémantiques recueillies pour afficher un résultat sur son site. Par exemple, les agrégateurs de nouvelles et les forums communautaires peuvent faciliter les soumissions et utiliser les microformats pour extraire le contenu pertinent d'une page. De plus, un site web peut utiliser les microformats pour envoyer des requêtes personnalisées à des tiers afin de publier du contenu, comme sur les réseaux sociaux.

Tous les principaux moteurs de recherche prennent en charge la lecture et l'interprétation des microformats. Les moteurs de recherche tirent grand profit d'un accès direct à ces données structurées, car cela leur permet de comprendre les informations présentes sur les pages web. Grâce à ces informations, les moteurs de recherche peuvent fournir des résultats plus pertinents aux utilisateur·ice·s. Certains moteurs de recherche peuvent afficher des extraits spéciaux, tels que des notes en étoiles sur une page de résultats de recherche, en fonction des données fournies dans les microformats.

En plus d'être lisibles par machine, les microformats sont conçus pour être facilement lisibles par les humain·e·s. Cette approche facilite la compréhension et la maintenance des données microformats par les personnes.

## Préfixes et microformats

Tous les microformats se composent d'une racine et d'un ensemble de propriétés. Toutes les propriétés sont optionnelles et peuvent avoir plusieurs valeurs — les applications qui ont besoin d'une valeur unique peuvent utiliser la première instance d'une propriété. Les données hiérarchisées sont représentées avec des microformats imbriqués, généralement comme valeurs de propriété elles-mêmes.

Tous les noms de classe des microformats utilisent des préfixes. Les préfixes sont **une syntaxe indépendante de celle des vocabulaires**, qui sont développés séparément.

- **«&nbsp;h-\*&nbsp;» pour les racines** (ex. «&nbsp;h-card&nbsp;», «&nbsp;h-entry&nbsp;», «&nbsp;h-feed&nbsp;»…). Ces racines indiquent un type ciblant un vocabulaire de propriétés donné. Ainsi :
  - [h-card <sup>(angl.)</sup>](https://microformats.org/wiki/h-card) décrit une personne ou une organisation
  - [h-entry <sup>(angl.)</sup>](https://microformats.org/wiki/h-entry) décrit un contenu en ligne épisodique ou daté (tel qu'un billet de blog)
  - [h-feed <sup>(angl.)</sup>](https://microformats.org/wiki/h-feed) décrit un flux (médias, billets, etc)
  - D'autres exemples sont décrits [sur le wiki microformats2 <sup>(angl.)</sup>](https://microformats.org/wiki/microformats2#v2_vocabularies).

- **«&nbsp;p-\*&nbsp;» pour les propriétés textuelles** (ex. «&nbsp;p-name&nbsp;», «&nbsp;p-summary&nbsp;»)
  -Analyse syntaxique générique du texte brut, texte des éléments en général. Pour certains éléments HTML, utiliser d'abord des attributs spécifiques, par exemple, `img/alt`, `abbr/title`.

- **«&nbsp;u-\*&nbsp;» pour les propriétés qui sont des URL** (ex. «&nbsp;u-url&nbsp;», «&nbsp;u-photo&nbsp;», «&nbsp;u-logo&nbsp;»)
  - Analyse spéciale&nbsp;: attributs d'éléments `a/href`, `img/src`, `object/data` etc. attributs sur le contenu des éléments.

- **«&nbsp;dt-\*&nbsp;» pour les propriétés temporelles (date/heure)** (ex. «&nbsp;dt-start&nbsp;», «&nbsp;dt-end&nbsp;», «&nbsp;dt-bday&nbsp;»)
  - Analyse spéciale&nbsp;: attribut de date et heure de l'élément d'heure, [value-class-pattern <sup>(angl.)</sup>](https://microformats.org/wiki/value-class-pattern) et analyse séparée de la valeur date-heure pour plus de lisibilité.

- **«&nbsp;e-\*&nbsp;» pour les arborescences** où l'intégralité de la hiérarchie de l'élément est la valeur à récupérer (ex. «&nbsp;e-content&nbsp;»). Le préfixe «&nbsp;e-&nbsp;» peut être retenu en anglais comme «&nbsp;**e**lement tree&nbsp;», «&nbsp;**e**mbedded markup&nbsp;» ou «&nbsp;**e**ncapsulated markup&nbsp;».

## Quelques exemples de microformats

### h-card

Le microformat [h-card <sup>(angl.)</sup>](https://microformats.org/wiki/h-card) représente une personne ou une organisation.

La valeur de chaque propriété est définie en HTML via l'attribut `class`.

#### Exemple de h-card

```html
<p class="h-card">
  <img class="u-photo" src="https://example.org/photo.png" alt="" />
  <a class="p-name u-url" href="https://example.org">Joe Bloggs</a>
  <a class="u-email" href="mailto:joebloggs@example.com"
    >joebloggs@example.com</a
  >,
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
  <a class="p-name u-url" href="https://blog.lizardwrangler.com/"
    >Mitchell Baker</a
  >
  (<a class="p-org h-card" href="https://mozilla.org/">Mozilla Foundation</a>)
</div>
```

Cela fournira le JSON suivant&nbsp;:

```json
{
  "items": [
    {
      "type": ["h-card"],
      "properties": {
        "name": ["Mitchell Baker"],
        "url": ["https://blog.lizardwrangler.com/"],
        "org": [
          {
            "value": "Mozilla Foundation",
            "type": ["h-card"],
            "properties": {
              "name": ["Mozilla Foundation"],
              "url": ["https://mozilla.org/"]
            }
          }
        ]
      }
    }
  ]
}
```

Dans cet exemple, une h-card est définie à la fois pour une personne et pour l'organisation qu'elle représente. L'affiliation de la personne à l'organisation liée est définie à l'aide de la propriété p-org.

Remarque&nbsp;: la h-card imbriquée possède des propriétés implicites «&nbsp;name&nbsp;» et «&nbsp;url&nbsp;», comme toute autre h-card ne comportant qu'un nom de classe racine sur une balise `<a href>`.

### h-entry

Le microformat [h-entry <sup>(angl.)</sup>](https://microformats.org/wiki/h-entry) représente un contenu épisodique ou daté présent sur le Web. h-entry est souvent utilisé avec du contenu destiné à être syndiqué, par exemple des billets de blog ou des notes courtes.

Exemple de h-entry comme billet de blog&nbsp;:

```html
<article class="h-entry">
  <h1 class="p-name">Les microformats sont incroyables</h1>
  <p>
    Publié par
    <a class="p-author h-card" href="https://example.com">W. Developer</a> le
    <time class="dt-published" datetime="2013-06-13 12:00:00"
      >13 juin 2013</time
    >
  </p>

  <p class="p-summary">
    Dans lequel je vante les mérites de l'utilisation des microformats.
  </p>

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
  <p>
    <span class="p-author h-card">
      <a href="https://quickthoughts.jgregorymcverry.com/profile/jgmac1106"
        ><img
          class="u-photo"
          src="https://quickthoughts.jgregorymcverry.com/file/2d6c9cfed7ac8e849f492b5bc7e6a630/thumb.jpg"
      /></a>
      <a
        class="p-name u-url"
        href="https://quickthoughts.jgregorymcverry.com/profile/jgmac1106"
        >Greg McVerry</a
      ></span
    >
    Répond à
    <a
      class="u-in-reply-to"
      href="https://developer.mozilla.org/docs/Web/HTML/Guides/Microformats"
      >un post sur <strong>developer.mozilla.org</strong> </a
    >:
  </p>
  <p class="p-name e-content">
    Salut et merci d'avoir créé cette ressource sur les microformats
  </p>
  <p>
    <a href="https://quickthoughts.jgregorymcverry.com/profile/jgmac1106"
      >Greg McVerry</a
    >
    a publié ceci
    <a
      class="u-url url"
      href="https://quickthoughts.jgregorymcverry.com/2019/05/31/hey-thanks-for-making-this-microformats-resource"
      ><time class="dt-published" datetime="2019-05-31T14:19:09+0000"
        >31 mai 2019</time
      ></a
    >
  </p>
</div>
```

```json
{
  "items": [
    {
      "type": ["h-entry"],
      "properties": {
        "in-reply-to": [
          "https://developer.mozilla.org/docs/Web/HTML/Guides/Microformats"
        ],
        "name": [
          "Salut et merci d'avoir créé cette ressource sur les microformats"
        ],
        "url": [
          "https://quickthoughts.jgregorymcverry.com/2019/05/31/hey-thanks-for-making-this-microformats-resource"
        ],
        "published": ["2019-05-31T14:19:09+0000"],
        "content": [
          {
            "html": "Salut et merci d'avoir créé cette ressource sur les microformats",
            "value": "Salut et merci d'avoir créé cette ressource sur les microformats",
            "lang": "fr"
          }
        ],
        "author": [
          {
            "type": ["h-card"],
            "properties": {
              "name": ["Greg McVerry"],
              "photo": [
                "https://quickthoughts.jgregorymcverry.com/file/2d6c9cfed7ac8e849f492b5bc7e6a630/thumb.jpg"
              ],
              "url": [
                "https://quickthoughts.jgregorymcverry.com/profile/jgmac1106"
              ]
            },
            "lang": "fr",
            "value": "Greg McVerry"
          }
        ]
      },
      "lang": "fr"
    }
  ]
}
```

### h-feed

Le microformat [h-feed <sup>(angl.)</sup>](https://microformats.org/wiki/h-feed) est un flux de billets [h-entry <sup>(angl.)</sup>](https://microformats.org/wiki/h-entry).

#### Exemple de h-feed

```html
<div class="h-feed">
  <h1 class="p-name">Blogs des Microformats</h1>
  <article class="h-entry">
    <h2 class="p-name">Les microformats sont incroyables</h2>
    <p>
      Publié par
      <a class="p-author h-card" href="https://example.com">W. Developer</a> le
      <time class="dt-published" datetime="2013-06-13 12:00:00"
        >13 juin 2013</time
      >
    </p>
    <p class="p-summary">
      Dans lequel j'exalte les vertus de l'utilisation des microformats.
    </p>
    <div class="e-content"><p>Blah blah blah</p></div>
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
      <td><strong>h-entry imbriqué</strong></td>
    </tr>
    <tr>
      <td>objets représentant les éléments du flux</td>
    </tr>
  </tbody>
</table>

### h-event

Le `h-event` est destiné aux évènements sur le Web. h-event est souvent utilisé à la fois pour les listes d'évènements et pour les pages d'évènement individuelles.

```html
<div class="h-event">
  <h1 class="p-name">Microformats Meetup</h1>
  <p>
    Du
    <time class="dt-start" datetime="2013-06-30 12:00"
      >30 juin 2013, 12:00</time
    >
    au <time class="dt-end" datetime="2013-06-30 18:00">18:00</time> à
    <span class="p-location">Un bar dans San Francisco</span>
  </p>
  <p class="p-summary">
    Rejoignez-nous pour discuter de tous les aspects des microformats.
  </p>
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

#### Exemple d'analyse d'un h-event

```html
<div class="h-event">
  <h2 class="p-name">Convention IndieWeb</h2>
  <time class="dt-start" datetime="2019-06-29T09:00:00-07:00"
    >29 juin 2019 à 9:00 (-0700)</time
  ><br />au
  <time class="dt-end" datetime="2019-06-30T18:00:00-07:00"
    >30 juin 2019 à 18:00 (-0700)</time
  ><br />
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
  <div class="e-content">Rejoignez-nous</div>
  <div>
    <span class="p-author h-card"
      ><a class="u-url p-name" href="https://aaronparecki.com"
        >Aaron Parecki</a
      ></span
    >
    Publié cet
    <a href="https://aaronparecki.com/2019/06/29/1/" class="u-url">évènement </a
    >le
    <time class="dt published" datetime="2019-05-25T18:00:00-07:00"
      >5 mai 2019</time
    >
  </div>
</div>
```

```json
{
  "items": [
    {
      "type": ["h-event"],
      "properties": {
        "name": ["Convention IndieWeb"],
        "url": ["https://aaronparecki.com/2019/06/29/1/"],
        "author": [
          {
            "type": ["h-card"],
            "properties": {
              "name": ["Aaron Parecki"],
              "url": ["https://aaronparecki.com"]
            },
            "lang": "fr",
            "value": "Aaron Parecki"
          }
        ],
        "start": ["2019-06-29T09:00:00-07:00"],
        "end": ["2019-06-30T18:00:00-07:00"],
        "published": ["2019-05-25T18:00:00-07:00"],
        "content": [
          {
            "html": "Rejoignez-nous",
            "value": "Rejoignez-nous",
            "lang": "fr"
          }
        ],
        "location": [
          {
            "type": ["h-card"],
            "properties": {
              "name": ["Mozilla"],
              "p-street-address": ["1120 NW Couch St"],
              "locality": ["Portland"],
              "region": ["Oregon"],
              "country": ["US"],
              "latitude": ["45.52345"],
              "longitude": ["-122.682677"]
            },
            "lang": "fr",
            "value": "Mozilla"
          }
        ]
      },
      "lang": "fr"
    }
  ]
}
```

## Exemples de propriétés rel pour les microformats

Il existe certains microformats qui sont appliqués à une page en utilisant une propriété spéciale `rel=`. Ces microformats décrivent une relation entre le document courant et un document lié. Pour une liste complète, voir la [propriété rel <sup>(angl.)</sup>](https://microformats.org/wiki/rel-values) sur le wiki des microformats.

### rel=author

Cet attribut indique que le document lié représente l'auteur·ice de la page courante.

```html
<a rel="author" href="https://jamesg.blog">James Gallagher</a>
```

### rel=license

Cet attribut indique que le document lié contient la licence sous laquelle la page courante est publiée.

```html
<a rel="license" href="https://mit-license.org/">MIT License</a>
```

### rel=nofollow

Cet attribut indique que le document lié ne doit pas être pris en compte par les algorithmes de classement des moteurs de recherche qui pourraient dériver du document courant. Cela est utile pour empêcher les algorithmes de graphe de liens d'attribuer un poids plus élevé à une page après avoir vu un lien vers un document.

```html
<a rel="nofollow" href="https://jamesg.blog">James Gallagher</a>
```

## Compatibilité des navigateurs

Pris en charge dans tous les navigateurs prenant en charge l'attribut class et son API DOM.

## Voir aussi

- [L'attribut `class`](/fr/docs/Web/HTML/Reference/Global_attributes/class)
- [Microformat](https://fr.wikipedia.org/wiki/Microformat) sur Wikipédia
- [Le site officiel des microformats <sup>(angl.)</sup>](https://microformats.org/wiki/Main_Page)
- [Prise en charge des différents moteurs de recherche <sup>(angl.)</sup>](https://microformats.org/wiki/search_engines) sur le site officiel Microformats
- [Les microformats sur IndieWebCamp <sup>(angl.)</sup>](https://indieweb.org/microformats)
