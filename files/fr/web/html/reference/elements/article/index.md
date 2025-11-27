---
title: "<article> : l'élément de contenu d'un article"
slug: Web/HTML/Reference/Elements/article
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

L'élément [HTML](/fr/docs/Web/HTML) **`<article>`** représente une composition autonome dans un document, une page, une application ou un site, destinée à être distribuée ou réutilisée indépendamment (par exemple dans une syndication). Les exemples incluent&nbsp;: un message de forum, un article de magazine ou de journal, une entrée de blog, une fiche produit, un commentaire soumis par un·e utilisateur·ice, un widget ou gadget interactif, ou tout autre élément de contenu indépendant.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;article&gt;", "tabbed-standard")}}

```html interactive-example
<article class="forecast">
  <h1>Prévisions météo pour Seattle</h1>
  <article class="day-forecast">
    <h2>03 mars 2018</h2>
    <p>Pluie.</p>
  </article>
  <article class="day-forecast">
    <h2>04 mars 2018</h2>
    <p>Périodes de pluie.</p>
  </article>
  <article class="day-forecast">
    <h2>05 mars 2018</h2>
    <p>Forte pluie.</p>
  </article>
</article>
```

```css interactive-example
.forecast {
  margin: 0;
  padding: 0.3rem;
  background-color: #eeeeee;
}

.forecast > h1,
.day-forecast {
  margin: 0.5rem;
  padding: 0.3rem;
  font-size: 1.2rem;
}

.day-forecast {
  background: right/contain content-box border-box no-repeat
    url("/shared-assets/images/examples/rain.svg") white;
}

.day-forecast > h2,
.day-forecast > p {
  margin: 0.2rem;
  font-size: 1rem;
}
```

Un document donné peut contenir plusieurs articles&nbsp;; par exemple, sur un blog qui affiche le texte de chaque article l'un après l'autre au fur et à mesure que le lecteur fait défiler, chaque article serait contenu dans un élément `<article>`, avec éventuellement une ou plusieurs balises `<section>` à l'intérieur.

## Attributs

Cet élément n'a pas d'autres attributs que les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes), communs à tous les éléments.

## Notes d'utilisation

- Chaque élément `<article>` doit être identifié, généralement en incluant un titre (un élément [`<h1>` à `<h6>`](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements)) comme enfant de l'élément `<article>`.
- Lorsqu'un élément `<article>` est imbriqué, l'élément intérieur représente un article lié à l'élément extérieur. Par exemple, les commentaires d'un article de blog peuvent être des éléments `<article>` imbriqués dans l'élément `<article>` représentant l'article de blog.
- Les informations sur l'auteur ou l'autrice d'un élément `<article>` peuvent être fournies via l'élément {{HTMLElement("address")}}, mais cela ne s'applique pas aux éléments `<article>` imbriqués.
- La date et l'heure de publication d'un élément `<article>` peuvent être décrites à l'aide de l'attribut [`datetime`](/fr/docs/Web/HTML/Reference/Elements/time#datetime) d'un élément {{HTMLElement("time")}}.

## Exemples

```html
<article class="film_review">
  <h2>Jurassic Park</h2>
  <section class="main_review">
    <h3>Critique</h3>
    <p>Les dinosaures étaient super&nbsp;!</p>
  </section>
  <section class="user_reviews">
    <h3>Avis des utilisateur·ices</h3>
    <article class="user_review">
      <h4>Trop effrayant&nbsp;!</h4>
      <p>Beaucoup trop effrayant pour moi.</p>
      <footer>
        <p>
          Posté le
          <time datetime="2015-05-16 19:00">16 mai</time>
          par Lisa.
        </p>
      </footer>
    </article>
    <article class="user_review">
      <h4>J'adore les dinosaures&nbsp;!</h4>
      <p>Je suis d'accord, les dinosaures sont mes préférés.</p>
      <footer>
        <p>
          Posté le
          <time datetime="2015-05-17 19:00">17 mai</time>
          par Tom.
        </p>
      </footer>
    </article>
  </section>
  <footer>
    <p>
      Posté le
      <time datetime="2015-05-15 19:00">15 mai</time>
      par l'Équipe.
    </p>
  </footer>
</article>
```

### Résultat

{{EmbedLiveSample('Exemples', '', 570)}}

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
        >. Un élément <code>&#x3C;article></code> ne doit pas être un descendant
        d'un élément {{HTMLElement("address")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/article_role"
          ><code>article</code></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/application_role"><code>application</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/document_role"><code>document</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role"><code>feed</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/main_role"><code>main</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/region_role"><code>region</code></a>
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

- Les autres éléments liés aux sections d'un document&nbsp;: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("section")}}, {{HTMLElement("aside")}}, {{HTMLElement("Heading_Elements", "h1")}}, {{HTMLElement("Heading_Elements", "h2")}}, {{HTMLElement("Heading_Elements", "h3")}}, {{HTMLElement("Heading_Elements", "h4")}}, {{HTMLElement("Heading_Elements", "h5")}}, {{HTMLElement("Heading_Elements", "h6")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [Sections et structure d'un document HTML](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements)
