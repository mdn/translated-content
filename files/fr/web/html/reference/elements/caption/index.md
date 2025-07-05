---
title: "<caption> : l'élément de légende d'un tableau"
slug: Web/HTML/Reference/Elements/caption
original_slug: Web/HTML/Element/caption
---

{{HTMLSidebar}}

L'élément **`<caption>`** définit la légende (ou le titre) d'un tableau.

{{InteractiveExample("HTML Demo: &lt;caption&gt;", "tabbed-standard")}}

```html interactive-example
<table>
  <caption>
    He-Man and Skeletor facts
  </caption>
  <tr>
    <td></td>
    <th scope="col" class="heman">He-Man</th>
    <th scope="col" class="skeletor">Skeletor</th>
  </tr>
  <tr>
    <th scope="row">Role</th>
    <td>Hero</td>
    <td>Villain</td>
  </tr>
  <tr>
    <th scope="row">Weapon</th>
    <td>Power Sword</td>
    <td>Havoc Staff</td>
  </tr>
  <tr>
    <th scope="row">Dark secret</th>
    <td>Expert florist</td>
    <td>Cries at romcoms</td>
  </tr>
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
  font: 1.4rem molot;
  text-shadow:
    1px 1px 1px #fff,
    2px 2px 1px #000;
}

.skeletor {
  font: 1.7rem rapscallion;
  letter-spacing: 3px;
  text-shadow:
    1px 1px 0 #fff,
    0 0 9px #000;
}
```

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

On peut utiliser [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes) sur cet élément.

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

    > [!NOTE]
    > Ne pas utiliser cet attribut. Il a été déprécié. L'élément `<caption>` devrait être mis en forme grâce au [CSS](/fr/docs/Web/CSS). Afin d'obtenir des effets similaires à cet attribut, on utilisera les propriétés CSS [`caption-side`](/fr/docs/Web/CSS/caption-side) et [`text-align`](/fr/docs/Web/CSS/text-align).

## Notes d'utilisation

L'élément `<caption>` devrait être le premier élément enfant de l'élément parent [`<table>`](/fr/docs/Web/HTML/Reference/Elements/table).

Quand l'élément [`<table>`](/fr/docs/Web/HTML/Reference/Elements/table) (étant le parent de l'élément `<caption>`) n'est que l'unique descendant d'un élément [`<figure>`](/fr/docs/Web/HTML/Reference/Elements/figure), c'est l'élément [`<figcaption>`](/fr/docs/Web/HTML/Reference/Elements/figcaption) doit être utilisé.

Utiliser la propriété [`background-color`](/fr/docs/Web/CSS/background-color) sur le tableau ne modifiera pas l'apparence de la légende. Il est également nécessaire d'ajouter une déclaration CSS avec `background-color` sur l'élément `<caption>` pour que celui-ci ait la même couleur.

## Exemples

Cet exemple simple présente un tableau qui comprend une légende.

### HTML

```html
<table>
  <caption>
    Légende de l'exemple
  </caption>
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
table,
th,
td {
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
