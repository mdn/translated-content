---
title: "<article> : l'élément de contenu d'un article"
slug: Web/HTML/Reference/Elements/article
original_slug: Web/HTML/Element/article
---

{{HTMLSidebar}}

L'élément **`<article>`** représente une composition autonome dans un document, une page, une application ou un site, destinée à être distribuée ou réutilisée de manière indépendante (par exemple, dans le cadre d'une syndication). Exemples : un message de forum, un article de magazine ou de journal, ou un article de blog, une fiche produit, un commentaire soumis par un utilisateur, un widget ou gadget interactif, ou tout autre élément de contenu indépendant.

{{InteractiveExample("HTML Demo: &lt;article&gt;", "tabbed-standard")}}

```html interactive-example
<article class="forecast">
  <h1>Weather forecast for Seattle</h1>
  <article class="day-forecast">
    <h2>03 March 2018</h2>
    <p>Rain.</p>
  </article>
  <article class="day-forecast">
    <h2>04 March 2018</h2>
    <p>Periods of rain.</p>
  </article>
  <article class="day-forecast">
    <h2>05 March 2018</h2>
    <p>Heavy rain.</p>
  </article>
</article>
```

```css interactive-example
.forecast {
  margin: 0;
  padding: 0.3rem;
  background-color: #eee;
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

Un document donné peut contenir plusieurs articles ; par exemple, sur un blog qui affiche le texte de chaque article l'un après l'autre au fur et à mesure que le lecteur fait défiler, chaque message sera contenu dans un élément `<article>`, avec éventuellement une ou plusieurs `<section>` à l'intérieur.

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <dfn
          ><a href="/fr/docs/Web/Guide/HTML/Content_categories"
            >Catégories de contenu</a
          ></dfn
        >
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#sectioning_content"
          >contenu de section</a
        >,
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#palpable_content"
          >contenu tangible</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
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
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >contenu de flux</a
        >. Un élément <code>&#x3C;article></code> ne doit pas être un descendant
        d'un élément
        <a href="/fr/docs/Web/HTML/Element/address"
          ><code>&#x3C;address></code></a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Roles/Article_Role"
          ><code>article</code></a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="https://w3c.github.io/aria/#application">application</a>,
        <a href="https://w3c.github.io/aria/#document">document</a>,
        <a href="https://w3c.github.io/aria/#feed">feed</a>,
        <a href="https://w3c.github.io/aria/#main">main</a>,
        <a href="https://w3c.github.io/aria/#none">none</a>,
        <a href="https://w3c.github.io/aria/#presentation">presentation</a>,
        <a href="https://w3c.github.io/aria/#region">region</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLElement"><code>HTMLElement</code></a
        >.
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Cet élément n'a pas d'autres attributs que les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes), communs à tous les éléments.

## Notes d'utilisation

- Chaque `<article>` autonome, qui n'est pas imbriqué dans un autre élément `<article>`, devrait être identifié typiquement, en incluant un élément de titre `<h1>` à `<h6>`.
- Quand un élément `<article>` est imbriqué dans un autre, l'élément contenu représente un article relatif à l'élément contenant. Par exemple, les commentaires d'une parution de blog peuvent être un élément `<article>` inclus dans l'`<article>` représentant la parution en elle-même.
- Des informations à propos de l'auteur d'un élément `<article>` peuvent être fournies au travers de l'élément [`<address>`](/fr/docs/Web/HTML/Reference/Elements/address), mais cela ne s'applique pas aux éléments `<article>` imbriqués.
- La date et l'heure de publication d'un élément `<article>` peuvent être donnés en utilisant l'attribut [`datetime`](/fr/docs/Web/HTML/Reference/Elements/time#attr-datetime) d'un élément [`<time>`](/fr/docs/Web/HTML/Reference/Elements/time). _Notez que l'attribut [`pubdate`](/fr/docs/Web/HTML/Reference/Elements/time#attr-pubdate) de [`<time>`](/fr/docs/Web/HTML/Reference/Elements/time) ne fait plus partie de la norme W3C HTML 5._

## Exemples

```html
<article class="film_review">
  <header>
    <h2>Jurassic Park</h2>
  </header>
  <section class="main_review">
    <p>Les dinosaures étaient super !</p>
  </section>
  <section class="user_reviews">
    <article class="user_review">
      <p>Beaucoup trop effrayant pour moi</p>
      <footer>
        <p>
          Posté le
          <time datetime="2015-05-16 19:00">16 mai</time>
          par Lisa.
        </p>
      </footer>
    </article>
    <article class="user_review">
      <p>Je suis d'accord, les dinosaures sont mes préférés</p>
      <footer>
        <p>
          Posté le
          <time datetime="2015-05-17 19:00">17 mai</time>
          par Gilles Stella.
        </p>
      </footer>
    </article>
  </section>
  <footer>
    <p>
      Posté le
      <time datetime="2015-05-15 19:00">15 mai</time>
      par Staff.
    </p>
  </footer>
</article>
```

### Résultat

{{EmbedLiveSample('','','380')}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres éléments liés aux sections d'un document : [`<body>`](/fr/docs/Web/HTML/Reference/Elements/body), [`<nav>`](/fr/docs/Web/HTML/Reference/Elements/nav), [`<section>`](/fr/docs/Web/HTML/Reference/Elements/section), [`<aside>`](/fr/docs/Web/HTML/Reference/Elements/aside), [`<h1>`](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h2>`](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h3>`](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h4>`](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h5>`](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<h6>`](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements), [`<hgroup>`](/fr/docs/Web/HTML/Reference/Elements/hgroup), [`<header>`](/fr/docs/Web/HTML/Reference/Elements/header), [`<footer>`](/fr/docs/Web/HTML/Reference/Elements/footer), [`<address>`](/fr/docs/Web/HTML/Reference/Elements/address)
- [Sections et structure d'un document HTML5](/fr/docs/Web/HTML/Reference/Elements/Heading_Elements)
