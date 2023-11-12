---
title: "<div> : l'élément de division du contenu"
slug: Web/HTML/Element/div
---

{{HTMLSidebar}}

L'élément HTML **`<div>`** (ou division) est le conteneur générique du contenu du flux. Il n'a aucun effet sur le contenu ou la mise en page tant qu'il n'est pas mis en forme d'une manière quelconque à l'aide de [CSS](/fr/docs/Web/CSS).

{{EmbedInteractiveExample("pages/tabbed/div.html","tabbed-standard")}}

En tant que conteneur « pur », l'élément `<div>` ne représente rien en soi. Il est plutôt utilisé pour regrouper le contenu afin qu'il puisse être facilement stylé à l'aide des attributs [`class`](/fr/docs/Web/HTML/Global_attributes#attr-class) ou [`id`](/fr/docs/Web/HTML/Global_attributes#attr-id), pour marquer une section d'un document comme étant écrite dans une langue différente (à l'aide de l'attribut [`lang`](/fr/docs/Web/HTML/Global_attributes#attr-lang)), etc.

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
        >. Selon le WHATWG, si l'élément parent est un élément
        <a href="/fr/docs/Web/HTML/Element/dl"><code>&#x3C;dl></code></a
        >, un ou plusieurs éléments
        <a href="/fr/docs/Web/HTML/Element/dt"><code>&#x3C;dt></code></a> suivis
        par un ou plusieurs éléments
        <a href="/fr/docs/Web/HTML/Element/dd"><code>&#x3C;dd></code></a>
        éventuellement entrecoupés par des éléments
        <a href="/fr/docs/Web/HTML/Element/script"
          ><code>&#x3C;script></code></a
        >
        ou
        <a href="/fr/docs/Web/HTML/Element/template"
          ><code>&#x3C;template></code></a
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
        Tout élément qui accepte un
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >contenu de flux</a
        >. Selon le WHATWG, un élément
        <a href="/fr/docs/Web/HTML/Element/dl"><code>&#x3C;dl></code></a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td><a href="https://www.w3.org/TR/wai-aria-1.2/#generic">generic</a></td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous les rôles sont autorisés.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLDivElement"
          ><code>HTMLDivElement</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Attributs

Comme tous les autres éléments HTML, cet élément accepte [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

> **Note :** L'attribut **`align`** est désormais obsolète et ne doit plus être appliqué pour un `<div>`. On privilégiera l'utilisation des propriétés et outils CSS (tels que [la grille CSS](/fr/docs/Web/CSS/CSS_Grid_Layout) ou [les boîtes flexibles (flexbox)](/fr/docs/Glossary/Flexbox)) pour aligner et positionner des éléments `<div>`.

## Notes d'utilisation

- L'élément `<div>` doit uniquement être utilisé lorsqu'il n'existe aucun autre élément dont la sémantique permet de représenter le contenu (par exemple [`<article>`](/fr/docs/Web/HTML/Element/article) ou [`<nav>`](/fr/docs/Web/HTML/Element/nav)).

## Exemples

### Un exemple simple

```html
<div>
  <p>
    Tout type de contenu. Par exemple &lt;p&gt;, &lt;table&gt;. À vous de
    voir&nbsp;!
  </p>
</div>
```

#### Résultat

{{EmbedLiveSample("", "", 80)}}

### Un exemple mis en forme

Cet exemple crée une boîte avec une ombre en appliquant la mise en forme via du CSS sur l'élément `<div>`. On notera l'utilisation de l'attribut [`class`](/fr/docs/Web/HTML/Global_attributes#attr-class) sur l'élément `<div>` afin d'appliquer la règle `"shadowbox"`.

#### HTML

```html
<div class="shadowbox">
  <p>
    Voici un paragraphe très intéressant inscrit dans une boîte avec une ombre.
  </p>
</div>
```

#### CSS

```css
.shadowbox {
  width: 15em;
  border: 1px solid #333;
  box-shadow: 8px 8px 5px #444;
  padding: 8px 12px;
  background-image: linear-gradient(180deg, #fff, #ddd 40%, #ccc);
}
```

#### Résultat

{{EmbedLiveSample("", "", 150)}}

## Accessibilité

L'élément `<div>` possède un rôle ARIA implicite [`generic`](https://www.w3.org/TR/wai-aria-1.2/#generic) (plutôt qu'aucun rôle). Cela peut avoir un impact sur certaines combinaisons de déclarations ARIA qui nécessitent un élément descendant direct avec un rôle donné pour fonctionner correctement.

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les éléments de sectionnement sémantique : [`<section>`](/fr/docs/Web/HTML/Element/section), [`<article>`](/fr/docs/Web/HTML/Element/article), [`<nav>`](/fr/docs/Web/HTML/Element/nav), [`<header>`](/fr/docs/Web/HTML/Element/header), [`<footer>`](/fr/docs/Web/HTML/Element/footer)
- L'élément [`<span>`](/fr/docs/Web/HTML/Element/span) pour la mise en forme du contenu du phrasé
