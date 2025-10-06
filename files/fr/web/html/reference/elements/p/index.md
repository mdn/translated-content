---
title: "<p> : l'élément paragraphe"
slug: Web/HTML/Reference/Elements/p
original_slug: Web/HTML/Element/p
l10n:
  sourceCommit: a1765c2cad20118be0dad322d3548908787b5791
---

L'élément [HTML](/fr/docs/Web/HTML) **`<p>`** représente un paragraphe. Les paragraphes sont généralement représentés dans les médias visuels comme des blocs de texte séparés des blocs adjacents par des lignes vides et/ou une indentation de première ligne, mais les paragraphes HTML peuvent être tout regroupement structurel de contenu lié, comme des images ou des champs de formulaire.

Les paragraphes sont des [éléments de niveau bloc](/fr/docs/Glossary/Block-level_content) et, notamment, se ferment automatiquement si un autre élément de niveau bloc est analysé avant la balise de fermeture `</p>`. Voir «&nbsp;Omission de balises&nbsp;» ci-dessous.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;p&gt;", "tabbed-standard")}}

```html interactive-example
<p>
  Les geckos sont un groupe de lézards généralement petits et nocturnes. On les
  trouve sur tous les continents sauf l'Antarctique.
</p>

<p>
  Certaines espèces vivent dans les maisons où elles chassent les insectes
  attirés par la lumière artificielle.
</p>
```

```css interactive-example
p {
  margin: 10px 0;
  padding: 5px;
  border: 1px solid #999;
}
```

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

> [!NOTE]
> L'attribut `align` pour les balises `<p>` est obsolète et ne doit plus être utilisé.

## Accessibilité

Répartir le contenu entre différents paragraphes permet d'améliorer l'accessibilité d'une page. Les lecteurs d'écran et autres outils d'assistance fournissent des raccourcis qui permettent aux utilisateurs d'accéder rapidement au paragraphe suivant ou précédent et ainsi de naviguer plus rapidement sur la page, comme le permettent les blancs pour la navigation visuelle des autres utilisateurs.

L'utilisation de paragraphes vides (des éléments HTML `<p>` sans contenu) est problématique pour les personnes qui naviguent sur une page à l'aide d'outils d'assistance. Les lecteurs d'écran, par exemple, pourraient annoncer l'élément mais pas le contenu associé ce qui peut être frustrant ou source de confusion.

S'il est nécessaire d'avoir un espace supplémentaire, on pourra utiliser des propriétés {{glossary("CSS")}} comme {{cssxref("margin")}} pour obtenir l'effet désiré.

```css
p {
  margin-bottom: 2em; // on ajoute un espace après chaque paragraphe
}
```

## Exemples

### HTML

```html
<p>
  Premier paragraphe du texte. J'aime les licornes beaucoup beaucoup beaucoup.
</p>

<p>
  Deuxième paragraphe du texte. Et si j'en avais une apprivoisée je serais très
  contente.
</p>
```

### Résultat

{{EmbedLiveSample("exemples")}}

## Mise en forme des paragraphes

Par défaut, les navigateurs séparent les paragraphes par une seule ligne vide. D'autres méthodes de séparation, comme l'indentation de la première ligne, peuvent être obtenues avec {{glossary("CSS")}}&nbsp;:

### HTML

```html
<p>
  Séparer les paragraphes par des lignes vides est le plus facile à parcourir
  pour les lecteurs·rices, mais ils peuvent aussi être séparés en indentant leur
  première ligne. Cela est souvent utilisé pour prendre moins de place, par
  exemple pour économiser du papier à l'impression.
</p>

<p>
  Les écrits destinés à être modifiés, comme les devoirs scolaires et les
  brouillons, utilisent à la fois des lignes vides et l'indentation pour séparer
  les paragraphes. Dans les œuvres achevées, combiner les deux est considéré
  comme redondant et peu professionnel.
</p>

<p>
  Dans les écrits très anciens, les paragraphes étaient séparés par un caractère
  spécial&nbsp;: ¶, le <i>pied-de-mouche</i>. Aujourd'hui, cela est considéré
  comme oppressant et difficile à lire.
</p>

<p>
  À quel point est-ce difficile à lire&nbsp;? Voyez par vous-même&nbsp;:
  <button data-toggle-text="Oh non&nbsp;! Revenir en arrière&nbsp;!">
    Utiliser le pied-de-mouche pour les paragraphes
  </button>
</p>
```

### CSS

```css
p {
  margin: 0;
  text-indent: 3ch;
}

p.pilcrow {
  text-indent: 0;
  display: inline;
}
p.pilcrow + p.pilcrow::before {
  content: " ¶ ";
}
```

### JavaScript

```js
document.querySelector("button").addEventListener("click", (event) => {
  document.querySelectorAll("p").forEach((paragraph) => {
    paragraph.classList.toggle("pilcrow");
  });

  [event.target.innerText, event.target.dataset.toggleText] = [
    event.target.dataset.toggleText,
    event.target.innerText,
  ];
});
```

### Résultat

{{EmbedLiveSample('mise_en_forme_des_paragraphes')}}

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
      <td>
        La balise de début est obligatoire. La balise de fin peut être omise si l'élément
        <code>&lt;p&gt;</code> est immédiatement suivi d'un
        {{HTMLElement("address")}},
        {{HTMLElement("article")}}, {{HTMLElement("aside")}},
        {{HTMLElement("blockquote")}}, {{HTMLElement("details")}}, {{HTMLElement("div")}},
        {{HTMLElement("dl")}}, {{HTMLElement("fieldset")}},
        {{HTMLElement("figcaption")}}, {{HTMLElement("figure")}},
        {{HTMLElement("footer")}}, {{HTMLElement("form")}},
        {{HTMLElement("Heading_Elements", "<code>&lt;h1&gt;</code>")}}, {{HTMLElement("Heading_Elements", "<code>&lt;h2&gt;</code>")}},
        {{HTMLElement("Heading_Elements", "<code>&lt;h3&gt;</code>")}}, {{HTMLElement("Heading_Elements", "<code>&lt;h4&gt;</code>")}},
        {{HTMLElement("Heading_Elements", "<code>&lt;h5&gt;</code>")}}, {{HTMLElement("Heading_Elements", "<code>&lt;h6&gt;</code>")}},
        {{HTMLElement("header")}}, {{HTMLElement("hgroup")}}, {{HTMLElement("hr")}},
        {{HTMLElement("main")}}, {{HTMLElement("menu")}}, {{HTMLElement("nav")}},
        {{HTMLElement("ol")}}, {{HTMLElement("pre")}}, {{HTMLElement("search")}},
        {{HTMLElement("section")}}, {{HTMLElement("table")}},
        {{HTMLElement("ul")}} ou d'un autre élément <code>&lt;p&gt;</code>,
        ou s'il n'y a plus de contenu dans l'élément parent et que l'élément parent n'est pas un élément
        {{HTMLElement("a")}}, {{HTMLElement("audio")}},
        {{HTMLElement("del")}}, {{HTMLElement("ins")}}, {{HTMLElement("map")}},
        {{HTMLElement("noscript")}} ou {{HTMLElement("video")}},
        ou un élément personnalisé autonome.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles"
          >paragraphe</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Tous</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLParagraphElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- L'élément HTML {{HTMLElement("hr")}}
- L'élément HTML {{HTMLElement("br")}}
