---
title: "<ul> : l'élément de liste non ordonnée"
slug: Web/HTML/Reference/Elements/ul
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

L'élément [HTML](/fr/docs/Web/HTML) **`<ul>`** représente une liste d'éléments sans ordre particulier. Il est souvent représenté par une liste à puces.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;ul&gt;", "tabbed-standard")}}

```html interactive-example
<ul>
  <li>Lait</li>
  <li>
    Fromage
    <ul>
      <li>Bleu</li>
      <li>Feta</li>
    </ul>
  </li>
</ul>
```

```css interactive-example
li {
  list-style-type: circle;
}

li li {
  list-style-type: square;
}
```

## Attributs

Cet élément inclut les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `compact`{{Deprecated_Inline}}
  - : Cet attribut booléen suggère que la liste doit être affichée dans un style compact. L'interprétation de cet attribut dépend du navigateur. Utilisez plutôt la [CSS](/fr/docs/Web/CSS)&nbsp;: pour obtenir un effet similaire à l'attribut `compact`, la propriété CSS {{CSSxRef("line-height")}} peut être utilisée avec une valeur de `80%`.
- `type`{{Deprecated_Inline}}
  - : Cet attribut permet de définir le style de puce utilisé pour la liste. Les valeurs définies au sein des spécifications pour HTML3.2 et HTML 4.0/4.01 sont&nbsp;:
    - `circle`
    - `disc`
    - `square`

    Un quatrième type de puce a été défini dans l'interface WebTV, mais il n'est pas pris en charge par tous les navigateurs&nbsp;: `triangle`.

    Si cet attribut n'est pas présent et qu'aucune propriété [CSS](/fr/docs/Web/CSS) {{CSSxRef("list-style-type")}} ne s'applique à l'élément, l'agent utilisateur choisit un type de puce en fonction du niveau d'imbrication de la liste.

    > [!WARNING]
    > Cet attribut a été obsolète et ne doit pas être utilisé&nbsp;; on pourra utiliser la propriété CSS {{CSSxRef("list-style-type")}} à la place.

## Notes d'utilisation

- L'élément `<ul>` sert à regrouper une collection d'éléments qui n'ont pas d'ordre numérique, et leur ordre dans la liste n'a pas de signification. Typiquement, les éléments d'une liste non ordonnée sont affichés avec une puce, qui peut prendre plusieurs formes, comme un point, un cercle ou un carré. Le style de la puce n'est pas défini dans la description HTML de la page, mais dans sa CSS associée, via la propriété {{CSSxRef("list-style-type")}}.
- Les éléments `<ul>` et {{HTMLElement("ol")}} peuvent être imbriqués aussi profondément que souhaité. De plus, les listes imbriquées peuvent alterner entre `<ol>` et `<ul>` sans restriction.
- Les éléments {{HTMLElement("ol")}} et `<ul>` représentent tous deux une liste d'éléments. Ils diffèrent en ce que, pour {{HTMLElement("ol")}}, l'ordre a une signification. Pour déterminer lequel utiliser, essayez de changer l'ordre des éléments de la liste&nbsp;; si le sens change, il faut utiliser {{HTMLElement("ol")}}, sinon vous pouvez utiliser `<ul>`.

## Exemples

### Exemple simple

#### HTML

```html
<ul>
  <li>1 artichaut</li>
  <li>De l'essuie-tout</li>
  <li>200g de chocolat</li>
</ul>
```

#### Résultat

{{EmbedLiveSample("Exemple simple", 400, 120)}}

### Liste imbriquée

#### HTML

```html
<ul>
  <li>1 artichaut</li>
  <li>
    Les trucs pour le gateau
    <!-- On voit que </li> n'est pas là -->
    <ul>
      <li>3 oeufs</li>
      <li>
        La génoise
        <!-- Là on ouvre une autre liste -->
        <ul>
          <li>100g de sucre</li>
          <li>1 oeuf</li>
          <li>150g de farine</li>
        </ul>
      </li>
      <!-- On ferme la liste la plus imbriquée -->
      <li>200g de chocolat</li>
    </ul>
    <!-- On ferme la liste imbriquée avec </li> -->
  </li>
  <li>De l'essuie-tout</li>
</ul>
```

#### Résultat

{{EmbedLiveSample("Liste imbriquée", 400, 340)}}

### Liste ordonnée imbriquée dans une liste non ordonnée

#### HTML

```html
<ul>
  <li>Lire un livre</li>
  <li>
    Préparer une soupe
    <!-- Regardez, la balise de fermeture </li> n'est pas placée ici ! -->
    <ol>
      <li>Couper les légumes</li>
      <li>Mettre dans l'eau et cuire</li>
      <li>Mouliner</li>
    </ol>
    <!-- La balise de fermeture </li> est ici -->
  </li>
  <li>Relever le courrier</li>
</ul>
```

#### Résultat

{{EmbedLiveSample("Liste ordonnée imbriquée dans une liste non ordonnée", 400, 190)}}

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
        >, et du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_tangible"
          >contenu tangible</a
        >
        si les enfants de l'élément <code>&#x3C;ul></code> incluent au moins un
        élément {{HTMLElement("li")}}.
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_tangible"
          >Contenu tangible.</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Zéro ou plusieurs éléments {{HTMLElement("li")}} qui peuvent
        éventuellement contenir à leur tour des éléments
        {{HTMLElement("ol")}} ou {{HTMLElement("ul")}} (listes
        imbriquées).
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
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/list_role"
            >list</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role"><code>directory</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role"><code>listbox</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role"><code>menubar</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role"><code>radiogroup</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role"><code>tablist</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role"><code>toolbar</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role"><code>tree</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{DOMxRef("HTMLUListElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres éléments HTML relatifs aux listes&nbsp;: {{HTMLElement("ol")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}}
- Les propriétés CSS particulièrement utiles pour mettre en forme l'élément `<ul>`&nbsp;:
  - La propriété {{CSSxRef("list-style")}} qui permet de choisir la façon dont l'indicateur ordinal est affiché,
  - [Les compteurs CSS](/fr/docs/Web/CSS/Guides/Counter_styles/Using_counters), qui permettent de gérer des listes imbriquées complexes,
  - La propriété {{CSSxRef("line-height")}} qui permet de simuler l'attribut [`compact`](#compact) désormais déprécié,
  - La propriété {{CSSxRef("margin")}} peut être utilisée pour contrôler l'indentation de la liste.
