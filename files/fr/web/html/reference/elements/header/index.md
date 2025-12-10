---
title: "<header> : l'élément d'en-tête"
slug: Web/HTML/Reference/Elements/header
l10n:
  sourceCommit: 3527b9372ddeb3b301cc826ed2fbcf086b487568
---

L'élément [HTML](/fr/docs/Web/HTML) **`<header>`** représente du contenu introductif, généralement un groupe d'éléments d'introduction ou d'aides à la navigation. Il peut contenir des éléments de titre mais aussi un logo, un formulaire de recherche, le nom d'un·e auteur·ice et d'autres éléments.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;header&gt;", "tabbed-standard")}}

```html interactive-example
<header>
  <a class="logo" href="#">Chiots mignons Express&nbsp;!</a>
</header>

<article>
  <header>
    <h1>Beagles</h1>
    <time>08/12/2014</time>
  </header>
  <p>
    J'aime <em>beaucoup</em> les beagles&nbsp;! Vraiment beaucoup. Ils sont
    adorables et leurs oreilles sont tellement, tellement douces&nbsp;!
  </p>
</article>
```

```css interactive-example
.logo {
  background: left / cover
    url("/shared-assets/images/examples/puppy-header.jpg");
  display: flex;
  height: 120px;
  align-items: center;
  justify-content: center;
  font:
    bold calc(1em + 2 * (100vw - 120px) / 100) "Dancing Script",
    fantasy;
  color: #ff0083;
  text-shadow: black 2px 2px 0.2rem;
}

header > h1 {
  margin-bottom: 0;
}

header > time {
  font: italic 0.7rem sans-serif;
}
```

## Notes d'utilisation

Lorsqu'il n'est pas imbriqué dans du [contenu de section](/fr/docs/Web/HTML/Guides/Content_categories#contenu_sectionnant), dans un élément HTML {{HTMLElement("main")}}, ou dans un élément ayant le même rôle ARIA implicite que ces éléments, l'élément `<header>` a le même sens que le repère global du site [`banner`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role). Il définit l'en‑tête global du site, qui comprend généralement un logo, le nom de l'organisation, une zone de recherche et éventuellement la navigation globale ou un slogan. Il se situe en règle générale en haut de la page.

Dans le cas contraire, lorsqu'il est imbriqué dans de tels éléments, il perd son statut de repère et représente un groupe d'éléments introductifs ou d'aides à la navigation pour la section environnante. Il contient en général l'en‑tête de la section environnante (un élément `h1` — `h6`) et éventuellement un sous‑titre, mais ce n'est **pas** obligatoire.

### Usage historique

L'élément `<header>` existait à l'origine dès les débuts du HTML pour les en‑têtes. On le retrouve sur [le tout premier site web](https://info.cern.ch/). À un moment donné, les en‑têtes sont devenus les éléments [`<h1>` à `<h6>`](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements), ce qui a permis à `<header>` de remplir un rôle différent.

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Accessibilité

L'élément `<header>` définit un repère [`banner`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role) lorsque son contexte est l'élément {{HTMLElement('body')}}.

Lorsqu'il est placé à l'intérieur d'un {{HTMLElement('article')}}, d'un {{HTMLElement('main')}}, d'un {{HTMLElement('section')}}, d'un {{HTMLElement('nav')}}, d'un {{HTMLElement('aside')}}, ou d'un élément ayant le même rôle ARIA implicite que ces éléments, l'élément `<header>` a plutôt le rôle [`generic`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role) et n'est plus considéré comme un repère. Dans ce cas, il ne peut pas être étiqueté avec [`aria-label`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-label) ni avec [`aria-labelledby`](/fr/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-labelledby).

## Exemples

### En-tête de page

```html
<header>
  <h1>Titre principal</h1>
  <img src="mdn-logo-sm.png" alt="Logo de MDN" />
</header>
```

#### Résultat

{{EmbedLiveSample("En-tête de page")}}

### En-tête d'un article

```html
<article>
  <header>
    <h2>La planète Terre</h2>
    <p>
      Publié le mercredi <time datetime="2017-10-04">4 octobre 2017</time> par
      Jeanne Smith
    </p>
  </header>
  <p>Nous vivons sur une planète bleue et verte</p>
  <p>
    <a href="https://example.com/the-planet-earth/">Poursuivre la lecture…</a>
  </p>
</article>
```

#### Résultat

{{EmbedLiveSample("En-tête d'un article")}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories">
          Catégories de contenu</a>
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_tangible"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >
        mais sans élément descendant qui soit <code>&lt;header&gt;</code> ou <a href="/fr/docs/Web/HTML/Element/footer"><code>&lt;footer&gt;</code></a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, les balises d'ouverture et de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément acceptant du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >contenu de flux</a
        >. Il est à noter qu'un élément <code>&lt;header&gt;</code> ne doit pas
        descendre d'un élément <a href="/fr/docs/Web/HTML/Element/address"><code>&lt;address&gt;</code></a>,
        <a href="/fr/docs/Web/HTML/Element/footer"><code>&lt;footer&gt;</code></a> ou d'un autre élément
        <code>&lt;header&gt;</code>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role"
          ><code>banner</code></a
        >, ou
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
          ><code>generic</code></a
        > si l'élément descend d'un
        {{HTMLElement("article")}}, {{HTMLElement("aside")}},
        {{HTMLElement("main")}}, {{HTMLElement("nav")}} ou
        {{HTMLElement("section")}} ou d'un élément ayant le rôle
        <code><a
          href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/article_role">article</a
        ></code>, <code><a
          href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role">complementary</a
        ></code>, <code><a
          href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/main_role">main</a
        ></code>, <code><a
          href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role">navigation</a
        ></code> ou <code><a
          href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/region_role">region</a
        ></code>.
      </td>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a> ou
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
      </td>
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

- Autres éléments liés à la section d'un document&nbsp;: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("footer")}}, {{HTMLElement("section")}}, {{HTMLElement("address")}}.
