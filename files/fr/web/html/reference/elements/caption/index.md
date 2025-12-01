---
title: "<caption> : l'élément de légende d'un tableau"
slug: Web/HTML/Reference/Elements/caption
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

L'élément [HTML](/fr/docs/Web/HTML) **`<caption>`** définit la légende (ou le titre) d'un tableau, fournissant à ce dernier un {{Glossary("accessible name", "nom accessible")}} ou une {{Glossary("accessible description", "description accessible")}}.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;caption&gt;", "tabbed-standard")}}

```html interactive-example
<table>
  <caption>
    Faits sur Musclor et Skeletor
  </caption>
  <tbody>
    <tr>
      <td></td>
      <th scope="col" class="heman">Musclor</th>
      <th scope="col" class="skeletor">Skeletor</th>
    </tr>
    <tr>
      <th scope="row">Rôle</th>
      <td>Héros</td>
      <td>Méchant</td>
    </tr>
    <tr>
      <th scope="row">Arme</th>
      <td>Épée du pouvoir</td>
      <td>Bâton du chaos</td>
    </tr>
    <tr>
      <th scope="row">Secret inavoué</th>
      <td>Fleuriste expert</td>
      <td>Pleure devant les comédies romantiques</td>
    </tr>
  </tbody>
</table>
```

```css interactive-example
caption {
  caption-side: bottom;
  padding: 10px;
  font-weight: bold;
}

table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

th {
  background-color: rgb(230 230 230);
}

td {
  text-align: center;
}

tr:nth-child(even) td {
  background-color: rgb(250 250 250);
}

tr:nth-child(odd) td {
  background-color: rgb(240 240 240);
}

.heman {
  font:
    1.4rem "molot",
    sans-serif;
  text-shadow:
    1px 1px 1px white,
    2px 2px 1px black;
}

.skeletor {
  font:
    1.7rem "rapscallion",
    fantasy;
  letter-spacing: 3px;
  text-shadow:
    1px 1px 0 white,
    0 0 9px black;
}
```

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

### Attributs obsolètes

Les attributs suivants sont obsolètes et ne doivent pas être utilisés. Ils sont documentés ci-dessous à titre de référence lors de la mise à jour de code existant et pour des raisons historiques uniquement.

- `align` {{Deprecated_Inline}}
  - : Définit de quel côté du tableau la légende doit être affichée. Les valeurs {{Glossary("enumerated", "énumérées")}} possibles sont `left`, `top`, `right` ou `bottom`. Utilisez les propriétés CSS {{CSSxRef("caption-side")}} et {{CSSxRef("text-align")}} à la place, car cet attribut est obsolète.

## Notes d'utilisation

- Si présent, l'élément `<caption>` doit être le premier enfant de son élément parent {{HTMLElement("table")}}.
- Lorsqu'un tableau (`<table>`) est imbriqué dans un élément HTML {{HTMLElement("figure")}} comme unique contenu de la figure, il doit être légendé via un {{HTMLElement("figcaption")}} pour le `<figure>` au lieu d'un `<caption>` imbriqué dans le `<table>`.
- Toute couleur {{CSSxRef("background-color")}} appliquée à un tableau ne s'applique pas à sa légende. Ajoutez aussi un `background-color` à l'élément `<caption>` si vous souhaitez que la même couleur soit appliquée aux deux.

## Exemples

Voir {{HTMLElement("table")}} pour un exemple complet de tableau présentant les standards courants et les bonnes pratiques.

### Tableau avec légende

Cet exemple montre un tableau de base qui inclut une légende décrivant les données présentées.

Un tel «&nbsp;titre&nbsp;» est utile pour les utilisateur·ice·s qui parcourent rapidement la page, et il est particulièrement bénéfique pour les personnes malvoyantes, leur permettant de déterminer rapidement la pertinence du tableau sans avoir à faire lire le contenu de nombreuses cellules par un lecteur d'écran juste pour savoir de quoi il s'agit.

#### HTML

Un élément `<caption>` est utilisé comme premier enfant du tableau ({{HTMLElement("table")}}), avec un contenu textuel similaire à un titre pour décrire les données du tableau. Trois lignes, la première étant une ligne d'en-tête, avec deux colonnes, sont créées à l'aide des éléments {{HTMLElement("tr")}}, {{HTMLElement("th")}} et {{HTMLElement("td")}} après le `<caption>`.

```html
<table>
  <caption>
    Légende de l'exemple
  </caption>
  <thead>
    <tr>
      <th>Connexion</th>
      <th>Courriel :</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>utilisateur1</td>
      <td>utilisateur1@test.fr</td>
    </tr>
    <tr>
      <td>utilisateur2</td>
      <td>utilisateur2@test.fr</td>
    </tr>
  </tbody>
</table>
```

#### CSS

Quelques règles CSS de base sont utilisées pour aligner et mettre en valeur le `<caption>`.

```css
caption {
  caption-side: top;
  text-align: left;
  padding-bottom: 10px;
  font-weight: bold;
}
```

```css hidden
table {
  border-collapse: collapse;
  border: 2px solid rgb(140 140 140);
  font-family: sans-serif;
  font-size: 0.8rem;
  letter-spacing: 1px;
}

th,
td {
  border: 1px solid rgb(160 160 160);
  padding: 8px 10px;
}

th {
  background-color: rgb(230 230 230);
}

td {
  text-align: center;
}
```

### Résultat

{{EmbedLiveSample('Tableau avec légende', 650, 140)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories"
          >Catégories de contenu</a
        >
      </th>
      <td>Aucune.</td>
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
        La balise de fin peut être absente si l'élément n'est pas immédiatement
        suivi d'un blanc ASCII ou d'un commentaire.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Un élément {{HTMLElement("table")}}
        dont il doit être le premier descendant.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/structural_roles#rôles_structurels_avec_équivalents_html">caption</a
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
      <td>{{DOMxRef("HTMLTableCaptionElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Apprendre&nbsp;: bases des tableaux HTML](/fr/docs/Learn_web_development/Core/Structuring_content/HTML_table_basics)
- Autres éléments liés aux tableaux&nbsp;: {{HTMLElement("col")}}, {{HTMLElement("colgroup")}}, {{HTMLElement("table")}}, {{HTMLElement("tbody")}}, {{HTMLElement("td")}}, {{HTMLElement("tfoot")}}, {{HTMLElement("th")}}, {{HTMLElement("thead")}}, {{HTMLElement("tr")}}
- {{CSSxRef("caption-side")}}&nbsp;: Propriété CSS pour positionner le `<caption>` par rapport à son parent {{HTMLElement("table")}}
- {{CSSxRef("text-align")}}&nbsp;: Propriété CSS pour aligner horizontalement le contenu textuel du `<caption>`
