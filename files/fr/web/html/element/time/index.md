---
title: <time>
slug: Web/HTML/Element/time
---

{{HTMLSidebar}}

L'élément HTML **`<time>`** permet de représenter une période donnée. Cet élément permet d'utiliser l'attribut `datetime` afin de traduire la date ou l'instant dans un format informatique (permettant aux moteurs de recherche d'exploiter ces données ou de créer des rappels).

Cet élément permet de représenter :

- une heure
- une date du [calendrier grégorien](https://fr.wikipedia.org/wiki/Calendrier_grégorien) (en précisant éventuellement l'heure et les informations de fuseau horaire).
- [une durée valide](https://www.w3.org/TR/2014/REC-html5-20141028/infrastructure.html#valid-duration-string).

{{EmbedInteractiveExample("pages/tabbed/time.html", "tabbed-shorter")}}

## Attributs

Comme tous les autres éléments HTML, cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

- `datetime`
  - : Cet attribut indique l'heure et la date associées à l'élément. La valeur de cet attribut doit être une chaîne de caractères décrivant [une date valide avec un fragment optionnel pour décrire l'heure](https://www.w3.org/TR/html51/infrastructure.html#dates-and-times) (cf. ci-après). Si la valeur ne peut pas être analysée comme une date/heure, le contenu de l'élément n'aura pas d'indication temporelle associée.

## Notes d'utilisation

Cet élément est conçu pour présenter des dates et des heures au sein d'un document. Elles sont écrites dans un format compréhensible par un programme, ce qui peut s'avérer utile pour les agents utilisateur qui offrent des fonctionnalités de gestion de calendrier/agenda.

Cet élément n'est pas approprié pour les dates antérieures à l'introduction du calendrier grégorien (en raison des complications de calcul pour ces dates).

La valeur exploitable informatiquement est la valeur de l'attribut `datetime` de l'élément. Cette valeur doit être dans un format correct pour être analysé. Si l'élément ne possède pas d'attribut `datetime`, il ne doit pas avoir d'éléments fils et la valeur de l'heure est le contenu (textuel) de l'élément.

### Valeurs valides

- Une chaîne de caractères représentant une année
  - : `2011` ou `0001`
- Une chaîne de caractères représentant une année et un mois
  - : `2011-11`
- Une chaîne de caractères représentant une date
  - : `2011-11-18`
- Une chaîne de caractères représentant une date sans l'année
  - : `11-18`
- Une chaîne de caractères représentant une semaine
  - : `2011-W47`
- Une chaîne de caractères représentant une heure
  - : `14:54` ou `14:54:39` ou `14:54:39.929`
- Une chaîne de caractères représentant une date et une heure locale
  - : `2011-11-18T14:54:39.929` ou `2011-11-18 14:54:39.929`
- Une chaîne de caractères représentant une date et une heure universelle
  - : `2011-11-18T14:54:39.929Z` ou `2011-11-18T14:54:39.929-0400` ou `2011-11-18T14:54:39.929-04:00` ou `2011-11-18 14:54:39.929Z` ou `2011-11-18 14:54:39.929-0400` ou `2011-11-18 14:54:39.929-04:00`
- Une chaîne de caractères représentant une durée
  - : `PT4H18M3S`

## Exemples

### Exemple simple

#### HTML

```html
<p>Le concert commence à <time datetime="2018-07-07T20:00:00">20h00</time>.</p>
```

#### Résultat

{{EmbedLiveSample('Exemple_simple', 250, 60)}}

### Exemple avec `datetime`

#### HTML

```html
<p>Le concert a lieu <time datetime="2001-05-15T19:00">le 15 mai</time>.</p>
```

#### Résultat

{{EmbedLiveSample('Exemple_avec_datetime', 250, 60)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >,
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >Contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLTimeElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("data")}} qui permet de représenter des valeurs différentes.
