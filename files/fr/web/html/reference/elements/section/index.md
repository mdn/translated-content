---
title: "<section> : l'élément de section générique"
slug: Web/HTML/Reference/Elements/section
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<section>`** représente une section générique et autonome d'un document, qui n'a pas d'élément sémantique plus spécifique pour la représenter. Les sections doivent toujours comporter un titre, sauf très rares exceptions.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;section&gt;", "tabbed-standard")}}

```html interactive-example
<h1>Choisir une pomme</h1>
<section>
  <h2>Introduction</h2>
  <p>
    Ce document propose un guide pour vous aider dans la tâche importante de
    choisir la bonne pomme.
  </p>
</section>

<section>
  <h2>Critères</h2>
  <p>
    Il existe de nombreux critères à prendre en compte pour choisir une
    pomme&nbsp;: taille, couleur, fermeté, douceur, acidité...
  </p>
</section>
```

```css interactive-example
h1,
h2 {
  margin: 0;
}
```

## Attributs

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

Comme mentionné ci-dessus, `<section>` est un élément de sectionnement générique et ne doit être utilisé que s'il n'existe pas d'élément plus spécifique pour le représenter. Par exemple, un menu de navigation doit être englobé dans un élément {{HTMLElement("nav")}}, mais une liste de résultats de recherche ou une carte et ses contrôles, qui n'ont pas d'élément spécifique, peuvent être placés dans un élément `<section>`.

Considérez aussi les cas suivants&nbsp;:

- Si le contenu de l'élément représente une unité autonome et indépendante qui a du sens en tant que pièce syndiquée (par exemple, un article de blog, un commentaire de blog ou un article de journal), l'élément {{HTMLElement("article")}} sera plus approprié.
- Si le contenu représente une information tangente utile qui accompagne le contenu principal, mais n'en fait pas directement partie (comme des liens associés ou une biographie d'auteur·ice), utilisez {{HTMLElement("aside")}}.
- Si le contenu représente la zone principale d'un document, utilisez {{HTMLElement("main")}}.
- Si vous utilisez l'élément uniquement comme conteneur de mise en forme, utilisez plutôt {{HTMLElement("div")}}.

Pour récapituler, chaque `<section>` doit être identifiée, généralement en incluant un titre (élément {{HTMLElement("Heading_Elements", "h1")}} à {{HTMLElement("Heading_Elements", "h6")}}) comme enfant de l'élément `<section>`, autant que possible. Voir ci-dessous des exemples où un `<section>` peut apparaître sans titre.

## Exemples

### Exemple simple d'utilisation

#### Avant

```html
<div>
  <h2>Mon super titre</h2>
  <p>Beaucoup de contenu génial</p>
</div>
```

##### Résultat

{{EmbedLiveSample("Avant")}}

#### Après

```html
<section>
  <h2>Mon super titre</h2>
  <p>Beaucoup de contenu génial</p>
</section>
```

##### Résultat

{{EmbedLiveSample("Après")}}

### Utiliser une section sans titre

Les circonstances où vous pouvez voir `<section>` utilisé sans titre se trouvent généralement dans des sections d'applications web ou d'interfaces utilisateur, plutôt que dans des structures de documents traditionnelles. Dans un document, il n'est pas vraiment logique d'avoir une section distincte de contenu sans titre pour décrire son contenu. Ces titres sont utiles pour tous les lecteurs·rices, mais particulièrement pour les utilisateur·ice·s de technologies d'assistance comme les lecteurs d'écran, et ils sont aussi bénéfiques pour le référencement.

Considérez cependant un mécanisme de navigation secondaire. Si la navigation globale est déjà englobée dans un élément `<nav>`, il est possible d'entourer un menu précédent/suivant dans un élément `<section>`&nbsp;:

```html
<section>
  <a href="#">Article précédent</a>
  <a href="#">Article suivant</a>
</section>
```

Ou bien une barre de boutons pour contrôler votre application&nbsp;? Celle-ci n'a pas forcément besoin d'un titre, mais reste une section distincte du document&nbsp;:

```html
<section>
  <button class="reply">Répondre</button>
  <button class="reply-all">Répondre à tous</button>
  <button class="fwd">Transférer</button>
  <button class="del">Supprimer</button>
</section>
```

#### Résultat

{{EmbedLiveSample("Utiliser une section sans titre")}}

Selon le contenu, inclure un titre peut aussi être bénéfique pour le référencement, c'est donc une option à considérer.

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories">Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_sectionnant"
          >contenu sectionnant</a
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
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >contenu de flux</a
        >. Un élément <code>&#x3C;section></code> ne peut pas être le descendant
        d'un élément {{HTMLElement("address")}}.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/region_role"
            >region</a
          ></code
        >
        si l'élément a un
        <a
          href="/fr/docs/Glossary/Accessible_name"
          >nom accessible</a
        >, sinon
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"
            >generic</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alert_role"><code>alert</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/alertdialog_role"><code>alertdialog</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/application_role"><code>application</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/banner_role"><code>banner</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/complementary_role"><code>complementary</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/contentinfo_role"><code>contentinfo</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/dialog_role"><code>dialog</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/document_role"><code>document</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/feed_role"><code>feed</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/log_role"><code>log</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/main_role"><code>main</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/marquee_role"><code>marquee</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/navigation_role"><code>navigation</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/note_role"><code>note</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/search_role"><code>search</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/status_role"><code>status</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tabpanel_role"><code>tabpanel</code></a>
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

- Les autres éléments HTML relatifs au plan du document&nbsp;: {{HTMLElement("body")}}, {{HTMLElement("nav")}}, {{HTMLElement("article")}}, {{HTMLElement("aside")}}, `{{HTMLElement("Heading_Elements", "&lt;h1&gt;")}}`, `{{HTMLElement("Heading_Elements", "&lt;h2&gt;")}}`, `{{HTMLElement("Heading_Elements", "&lt;h3&gt;")}}`, `{{HTMLElement("Heading_Elements", "&lt;h4&gt;")}}`, `{{HTMLElement("Heading_Elements", "&lt;h5&gt;")}}`, `{{HTMLElement("Heading_Elements", "&lt;h6&gt;")}}`, {{HTMLElement("hgroup")}}, {{HTMLElement("header")}}, {{HTMLElement("footer")}}, {{HTMLElement("address")}}
- [Structure et sections d'un document HTML](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements)
- [ARIA&nbsp;: le rôle `region`](/fr/docs/Web/Accessibility/ARIA/Reference/Roles/region_role)
- [Pourquoi choisir l'élément HTML5 article plutôt que section&nbsp;? | Bruce Lawson <sup>(angl.)</sup>](https://www.smashingmagazine.com/2020/01/html5-article-section/)
