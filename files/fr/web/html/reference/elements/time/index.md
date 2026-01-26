---
title: "<time> : l'élément de temps (date)"
slug: Web/HTML/Reference/Elements/time
l10n:
  sourceCommit: eb9034ead504af00b27a7da3ff9d4f641ade5e59
---

L'élément [HTML](/fr/docs/Web/HTML) **`<time>`** représente une période précise dans le temps. Il peut inclure l'attribut `datetime` pour traduire les dates dans un format lisible par une machine, permettant d'améliorer les résultats des moteurs de recherche ou d'activer des fonctionnalités personnalisées comme des rappels.

Il peut représenter l'un des éléments suivants&nbsp;:

- Une heure sur une horloge de 24 heures.
- Une date précise dans le [calendrier grégorien](https://fr.wikipedia.org/wiki/Calendrier_gr%C3%A9gorien) (avec des informations optionnelles sur l'heure et le fuseau horaire).
- [Une durée valide <sup>(angl.)</sup>](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-duration-string).

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;time&gt;", "tabbed-shorter")}}

```html interactive-example
<p>
  The Cure fêtera son 40<sup>e</sup> anniversaire le
  <time datetime="2018-07-07">7 juillet</time> à Hyde Park, Londres.
</p>

<p>
  Le concert commence à <time datetime="20:00">20 h 00</time> et vous pourrez
  profiter du groupe pendant au moins <time datetime="PT2H30M">2 h 30</time>.
</p>
```

```css interactive-example
time {
  font-weight: bold;
}
```

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `datetime`
  - : Cet attribut indique l'heure et/ou la date de l'élément et doit être dans l'un des formats décrits ci-dessous.

## Notes d'utilisation

Cet élément est destiné à présenter des dates et des heures dans un format lisible par une machine. Par exemple, cela peut permettre à un agent utilisateur de proposer d'ajouter un évènement à l'agenda d'un·e utilisateur·ice.

Cet élément ne doit pas être utilisé pour des dates antérieures à l'introduction du calendrier grégorien (en raison des complications de calcul pour ces dates).

La _valeur datetime_ (la valeur exploitable informatiquement de l'attribut datetime) est la valeur de l'attribut `datetime` de l'élément, qui doit être dans le format approprié (voir ci-dessous). Si l'élément ne possède pas d'attribut `datetime`, **il ne doit pas avoir d'éléments descendants**, et la _valeur datetime_ est le contenu textuel de l'élément.

### Valeurs valides

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">Description</th>
      <th scope="col">Microsyntaxe</th>
      <th scope="col">Exemples</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Chaîne de caractères de mois valide</td>
      <td><code><em>YYYY</em>-<em>MM</em></code></td>
      <td><code>2011-11</code>, <code>2013-05</code></td>
    </tr>
    <tr>
      <td>Chaîne de caractères de date valide</td>
      <td><code><em>YYYY</em>-<em>MM</em>-<em>DD</em></code></td>
      <td><code>1887-12-01</code></td>
    </tr>
    <tr>
      <td>Chaîne de caractères de date sans année valide</td>
      <td><code><em>MM</em>-<em>DD</em></code></td>
      <td><code>11-12</code></td>
    </tr>
    <tr>
      <td>Chaîne de caractères d'heure valide</td>
      <td>
        <code><em>HH</em>:<em>MM</em></code><br />
        <code><em>HH</em>:<em>MM</em>:<em>SS</em></code><br />
        <code><em>HH</em>:<em>MM</em>:<em>SS</em>.<em>mmm</em></code>
      </td>
      <td>
        <code>23:59</code><br />
        <code>12:15:47</code><br />
        <code>12:15:52.998</code>
      </td>
    </tr>
    <tr>
      <td>Chaîne de caractères de date et heure locale valide</td>
      <td>
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em> <em>HH</em>:<em>MM</em></code><br />
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em> <em>HH</em>:<em>MM</em>:<em>SS</em></code><br />
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em> <em>HH</em>:<em>MM</em>:<em>SS</em>.<em>mmm</em></code><br />
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em></code><br />
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em></code><br />
        <code><em>YYYY</em>-<em>MM</em>-<em>DD</em>T<em>HH</em>:<em>MM</em>:<em>SS</em>.<em>mmm</em></code>
      </td>
      <td>
        <code>2013-12-25 11:12</code><br />
        <code>1972-07-25 13:43:07</code><br />
        <code>1941-03-15 07:06:23.678</code><br />
        <code>2013-12-25T11:12</code><br />
        <code>1972-07-25T13:43:07</code><br />
        <code>1941-03-15T07:06:23.678</code>
      </td>
    </tr>
    <tr>
      <td>Chaîne de caractères de décalage de fuseau horaire valide</td>
      <td>
        <code>Z</code><br />
        <code>+<em>HHMM</em></code><br />
        <code>+<em>HH</em>:<em>MM</em></code><br />
        <code>-<em>HHMM</em></code><br />
        <code>-<em>HH</em>:<em>MM</em></code>
      </td>
      <td>
        <code>Z</code><br />
        <code>+0200</code><br />
        <code>+04:30</code><br />
        <code>-0300</code><br />
        <code>-08:00</code>
      </td>
    </tr>
    <tr>
      <td>Chaîne de caractères de date et heure globale valide</td>
      <td style="max-width:12em">
        Toute combinaison d'une chaîne de caractères de date et heure locale valide suivie d'une chaîne de caractères de décalage de fuseau horaire valide
      </td>
      <td>
        <code>2013-12-25 11:12+0200</code><br />
        <code>1972-07-25 13:43:07+04:30</code><br />
        <code>1941-03-15 07:06:23.678Z</code><br />
        <code>2013-12-25T11:12-08:00</code>
      </td>
    </tr>
    <tr>
      <td>Chaîne de caractères de semaine valide</td>
      <td><code><em>YYYY</em>-W<em>WW</em></code></td>
      <td><code>2013-W46</code></td>
    </tr>
    <tr>
      <td>Quatre chiffres ASCII ou plus</td>
      <td><code><em>YYYY</em></code></td>
      <td><code>2013</code>, <code>0001</code></td>
    </tr>
    <tr>
      <td>Chaîne de caractères de durée valide</td>
      <td>
        <code>P<em>d</em>DT<em>h</em>H<em>m</em>M<em>s</em>S</code><br />
        <code>P<em>d</em>DT<em>h</em>H<em>m</em>M<em>s</em>.<em>X</em>S</code><br />
        <code>P<em>d</em>DT<em>h</em>H<em>m</em>M<em>s</em>.<em>XX</em>S</code><br />
        <code>P<em>d</em>DT<em>h</em>H<em>m</em>M<em>s</em>.<em>XXX</em>S</code><br />
        <code>PT<em>h</em>H<em>m</em>M<em>s</em>S</code><br />
        <code>PT<em>h</em>H<em>m</em>M<em>s</em>.<em>X</em>S</code><br />
        <code>PT<em>h</em>H<em>m</em>M<em>s</em>.<em>XX</em>S</code><br />
        <code>PT<em>h</em>H<em>m</em>M<em>s</em>.<em>XXX</em>S</code><br />
        <code><em>w</em>w <em>d</em>d <em>h</em>h <em>m</em>m <em>s</em>s</code>
      </td>
      <td>
        <code>P12DT7H12M13S</code><br />
        <code>P12DT7H12M13.3S</code><br />
        <code>P12DT7H12M13.45S</code><br />
        <code>P12DT7H12M13.455S</code><br />
        <code>PT7H12M13S</code><br />
        <code>PT7H12M13.2S</code><br />
        <code>PT7H12M13.56S</code><br />
        <code>PT7H12M13.999S</code><br />
        <code>7d 5h 24m 13s</code>
      </td>
    </tr>
  </tbody>
</table>

## Exemples

### Exemple simple

#### HTML

```html
<p>Le concert commence à <time datetime="2018-07-07T20:00:00">20h00</time>.</p>
```

#### Résultat

{{EmbedLiveSample('Exemple simple', 250, 80)}}

### Exemple avec `datetime`

#### HTML

```html
<p>Le concert a lieu <time datetime="2001-05-15T19:00">le 15 mai</time>.</p>
```

#### Résultat

{{EmbedLiveSample('Exemple avec `datetime`', 250, 80)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >Contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_phrasé"
          >contenu phrasé</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#rôles_structurels_avec_équivalents_html">time</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLTimeElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément {{HTMLElement("data")}} qui permet de représenter des valeurs différentes.
