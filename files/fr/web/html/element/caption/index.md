---
title: '<caption> : l''élément de légende d''un tableau'
slug: Web/HTML/Element/caption
tags:
  - Element
  - HTML
  - HTML Tables
  - HTML tabular data
  - Reference
  - Table Captions
  - Table Titles
  - Tables
  - Web
  - caption
translation_of: Web/HTML/Element/caption
browser-compat: html.elements.caption
---
{{HTMLRef}}

L'élément **`<caption>`** définit la légende (ou le titre) d'un tableau.

{{EmbedInteractiveExample("pages/tabbed/caption.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/Guide/HTML/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>Aucune.</td>
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
        La balise de fin peut être absente si l'élément n'est pas immédiatement
        suivi d'un blanc ASCII ou d'un commentaire.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Un élément
        <a href="/fr/docs/Web/HTML/Element/table"><code>&#x3C;table></code></a>
        dont il doit être le premier descendant.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >Pas de rôle correspondant</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>
        <a href="/fr/docs/Web/API/HTMLTableCaptionElement"
          ><code>HTMLTableCaptionElement</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Attributs

On peut utiliser [les attributs universels](/fr/docs/Web/HTML/Global_attributes) sur cet élément.

### Attributs obsolètes

- **`align`** {{deprecated_inline}}

  - : Cet attribut à valeur contrainte indique l'alignement de la légende du tableau par rapport au tableau lui-même. Il peut valoir :

    - `left`
      - : La légende est affichée à gauche du tableau
    - `top`
      - : La légende est affichée au-dessus du tableau
    - `right`
      - : La légende est affichée à droite du tableau
    - `bottom`
      - : La légende est affichée en dessous du tableau

    > **Note :** Ne pas utiliser cet attribut. Il a été déprécié. L'élément `<caption>` devrait être mis en forme grâce au [CSS](/fr/docs/Web/CSS). Afin d'obtenir des effets similaires à cet attribut, on utilisera les propriétés CSS [`caption-side`](/fr/docs/Web/CSS/caption-side) et [`text-align`](/fr/docs/Web/CSS/text-align).

## Notes d'utilisation

L'élément `<caption>` devrait être le premier élément enfant de l'élément parent [`<table>`](/fr/docs/Web/HTML/Element/table).

Quand l'élément [`<table>`](/fr/docs/Web/HTML/Element/table) (étant le parent de l'élément `<caption>`) n'est que l'unique descendant d'un élément [`<figure>`](/fr/docs/Web/HTML/Element/figure), c'est l'élément [`<figcaption>`](/fr/docs/Web/HTML/Element/figcaption) doit être utilisé.

Utiliser la propriété [`background-color`](/fr/docs/Web/CSS/background-color) sur le tableau ne modifiera pas l'apparence de la légende. Il est également nécessaire d'ajouter une déclaration CSS avec `background-color` sur l'élément `<caption>` pour que celui-ci ait la même couleur.

## Exemple

Cet exemple simple présente un tableau qui comprend une légende.

### HTML

```html
<table>
  <caption>Légende de l'exemple</caption>
  <tr>
    <th>Connexion</th>
    <th>Courriel :</th>
  </tr>
  <tr>
    <td>utilisateur1</td>
    <td>utilisateur1@test.fr</td>
  </tr>
  <tr>
    <td>utilisateur2</td>
    <td>utilisateur2@test.fr</td>
  </tr>
</table>
```

```css hidden
caption {
    caption-side: top;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0px;
  }
  table, th, td {
    border: 1px solid black;
  }
```

### Résultat

{{EmbedLiveSample('Exemple', '', 120)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les propriétés CSS particulièrement utiles pour styliser l'élément `<caption>` :

  - [`text-align`](/fr/docs/Web/CSS/text-align)
  - [`caption-side`](/fr/docs/Web/CSS/caption-side).
