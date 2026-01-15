---
title: "<aside> : l'élément aparté"
slug: Web/HTML/Reference/Elements/aside
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<aside>`** représente une partie d'un document dont le contenu n'est lié que de façon indirecte au contenu principal du document. Les apartés sont fréquemment présentés sous forme de barres latérales ou d'encadrés.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;aside&gt;", "tabbed-standard")}}

```html interactive-example
<p>
  Les salamandres sont un groupe d'amphibiens à l'apparence de lézard, avec de
  courtes pattes et une queue à la fois à l'état larvaire et adulte.
</p>

<aside>
  <p>Le triton à peau rugueuse se défend avec une neurotoxine mortelle.</p>
</aside>

<p>
  Plusieurs espèces de salamandres habitent la forêt pluviale tempérée du
  nord-ouest du Pacifique, dont l'ensatine, la salamandre du nord-ouest et le
  triton à peau rugueuse. La plupart des salamandres sont nocturnes et chassent
  des insectes, des vers et d'autres petites créatures.
</p>
```

```css interactive-example
aside {
  width: 40%;
  padding-left: 0.5rem;
  margin-left: 0.5rem;
  float: right;
  box-shadow: inset 5px 0 5px -5px #29627e;
  font-style: italic;
  color: #29627e;
}

aside > p {
  margin: 0.5rem;
}
```

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

- N'utilisez pas l'élément `<aside>` pour baliser un texte entre parenthèses, car ce type de texte est considéré comme faisant partie du flux principal.

## Exemples

### Utilisation de \<aside>

Cet exemple utilise `<aside>` pour baliser un paragraphe dans un article. Le paragraphe n'est lié que de façon indirecte au contenu principal de l'article&nbsp;:

```html
<article>
  <p>
    Le film Disney <cite>La petite Sirène</cite> est sorti en salles en 1989.
  </p>
  <aside>
    <p>Le film a gagné 87 millions de dollars pendant sa sortie initiale.</p>
  </aside>
  <p>Plus d'informations sur le film…</p>
</article>
```

### Résultat

{{EmbedLiveSample("Utilisation de aside")}}

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
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_sectionnant"
          >contenu de section</a
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
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Aucune, la balise d'ouverture et la balise de fermeture sont
        obligatoires.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément acceptant du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >contenu de flux</a
        >. Notez qu'un élément <code>&#x3C;aside></code> ne doit pas être un
        descendant d'un élément {{HTMLElement("address")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role"
            >complementary</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role"><code>feed</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/note_role"><code>note</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/region_role"><code>region</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/search_role"><code>search</code></a>
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

- Les autres éléments en rapport avec les sections&nbsp;: {{HTMLElement("body")}}, {{HTMLElement("article")}}, {{HTMLElement("section")}}, {{HTMLElement("nav")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [Structures et sections d'un document HTML](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [ARIA&nbsp;: le rôle `complementary`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role)
