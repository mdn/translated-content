---
title: "<nav> : l'élément de section de navigation"
slug: Web/HTML/Reference/Elements/nav
l10n:
  sourceCommit: f2d281d86396bcd2dcecfdabd5837b1590132aa6
---

L'élément [HTML](/fr/docs/Web/HTML) **`<nav>`** représente une section d'une page dont le but est de fournir des liens de navigation, soit au sein du document courant, soit vers d'autres documents. Des exemples courants de sections de navigation sont les menus, les tables des matières et les index.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;nav&gt;", "tabbed-standard")}}

```html interactive-example
<nav class="crumbs">
  <ol>
    <li class="crumb"><a href="#">Vélos</a></li>
    <li class="crumb"><a href="#">BMX</a></li>
    <li class="crumb">Jump Bike 3000</li>
  </ol>
</nav>

<h1>Jump Bike 3000</h1>
<p>
  Ce vélo BMX est une étape solide vers le monde professionnel. Il a l'apparence
  et la performance d'un vrai BMX et est conçu pour perfectionner vos
  compétences.
</p>
```

```css interactive-example
nav {
  border-bottom: 1px solid black;
}

.crumbs ol {
  list-style-type: none;
  padding-left: 0;
}

.crumb {
  display: inline-block;
}

.crumb a::after {
  display: inline-block;
  color: black;
  content: ">";
  font-size: 80%;
  font-weight: bold;
  padding: 0 3px;
}
```

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

- Il n'est pas nécessaire que tous les liens soient contenus dans un élément `<nav>`. `<nav>` est destiné uniquement à un bloc principal de liens de navigation&nbsp;; typiquement, l'élément {{HTMLElement("footer")}} contient souvent une liste de liens qui n'ont pas besoin d'être dans un élément `<nav>`.
- Un document peut comporter plusieurs éléments `<nav>`, par exemple un pour la navigation du site et un autre pour la navigation interne à la page. [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby) peut être utilisé dans ce cas pour améliorer l'accessibilité, voir [l'exemple](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements#libeller_le_contenu_des_sections).
- Les agents utilisateur·ice·s, tels que les lecteurs d'écran destinés aux personnes en situation de handicap, peuvent utiliser cet élément pour déterminer s'il faut omettre le rendu initial du contenu réservé à la navigation.

## Exemples

Dans cet exemple, un bloc `<nav>` est utilisé pour contenir une liste non ordonnée ({{HTMLElement("ul")}}) de liens. Avec une feuille de style CSS appropriée, cela peut être présenté comme une barre latérale, une barre de navigation ou un menu déroulant.

```html live-sample___unordered-list
<nav class="menu">
  <ul>
    <li><a href="#Accueil">Accueil</a></li>
    <li><a href="#Apropos">À propos</a></li>
    <li><a href="#Contact">Contact</a></li>
  </ul>
</nav>
```

{{EmbedLiveSample("unordered-list")}}

La sémantique de l'élément `nav` est de fournir des liens. Cependant, un élément `nav` n'a pas besoin de contenir une liste, il peut aussi contenir d'autres types de contenu. Dans ce bloc de navigation, les liens sont fournis dans du texte&nbsp;:

```html live-sample___prose
<nav>
  <h2>Navigation</h2>
  <p>
    Vous êtes sur ma page d'accueil. Au nord se trouve
    <a href="/blog">mon blog</a>, d'où l'on entend les bruits de bataille. À
    l'est, vous pouvez voir une grande montagne, sur laquelle de nombreux
    <a href="/school">devoirs scolaires</a> sont éparpillés. Tout en haut de
    cette montagne, vous pouvez apercevoir une petite silhouette qui semble être
    moi, en train de rédiger désespérément une
    <a href="/school/thesis">thèse</a>.
  </p>
  <p>
    À l'ouest se trouvent plusieurs sorties. Une sortie amusante est intitulée
    <a href="https://games.example.com/">«&nbsp;jeux&nbsp;»</a>. Une autre
    sortie, plus ennuyeuse, est intitulée
    <a href="https://isp.example.net/">ISP™</a>.
  </p>
  <p>
    Au sud se trouve une <a href="/about">page de contacts</a> sombre et humide.
    Des toiles d'araignée recouvrent son entrée désaffectée, et à un moment
    donné, vous voyez un rat sortir rapidement de la page.
  </p>
</nav>
```

{{EmbedLiveSample("prose")}}

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
        <a
          href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_sectionnant"
          >contenu sectionnant</a
        >, contenu tangible.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
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
        Tout élément acceptant du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role"
            >navigation</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun <code>role</code> autorisé</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres éléments HTML en relation avec les sections&nbsp;: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, `{{HTMLElement("Heading_Elements", "&lt;h1&gt;")}}`, `{{HTMLElement("Heading_Elements", "&lt;h2&gt;")}}`, `{{HTMLElement("Heading_Elements", "&lt;h3&gt;")}}`, `{{HTMLElement("Heading_Elements", "&lt;h4&gt;")}}`, `{{HTMLElement("Heading_Elements", "&lt;h5&gt;")}}`, `{{HTMLElement("Heading_Elements", "&lt;h6&gt;")}}`, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [Plan et section d'un document HTML](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [ARIA&nbsp;: rôle `navigation`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role)
