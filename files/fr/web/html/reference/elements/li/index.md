---
title: "<li> : l'élément dans une liste"
slug: Web/HTML/Reference/Elements/li
original_slug: Web/HTML/Element/li
---

L'élément [HTML](/fr/docs/Web/HTML) **`<li>`** est utilisé pour représenter un élément dans une liste. Il doit être contenu dans un élément parent&nbsp;: une liste ordonnée ({{HTMLElement("ol")}}), une liste non ordonnée ({{HTMLElement("ul")}}) ou un menu ({{HTMLElement("menu")}}). Dans les menus et les listes non ordonnées, les éléments de liste sont habituellement affichés avec des puces. Dans les listes ordonnées, ils sont habituellement affichés avec un compteur croissant à gauche, tel qu'un nombre ou une lettre.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;li&gt;", "tabbed-shorter")}}

```html interactive-example
<p>Astronautes d'Apollo&nbsp;:</p>

<ul>
  <li>Neil Armstrong</li>
  <li>Alan Bean</li>
  <li>Peter Conrad</li>
  <li>Edgar Mitchell</li>
  <li>Alan Shepard</li>
</ul>
```

```css interactive-example
p,
li {
  font:
    1rem "Fira Sans",
    sans-serif;
}

p {
  font-weight: bold;
}
```

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `value`
  - : Cette valeur entière indique la valeur ordinale en cours de l'élément de liste tel que défini par l'élément {{HTMLElement("ol")}}. La seule valeur autorisée pour cet attribut est un nombre, même si la liste est affichée avec des chiffres romains ou des lettres. Les éléments de la liste qui suivent celui-ci continueront la numérotation à partir de la valeur indiquée. L'attribut **value** n'a pas de signification pour les listes non ordonnées ({{HTMLElement("ul")}}) ou pour les menus ({{HTMLElement("menu")}}).
- `type` {{Deprecated_Inline}}
  - : Cet attribut de caractère indique le type de numérotation utilisé pour la liste&nbsp;:
    - `a` : lettres minuscules
    - `A` : lettres majuscules
    - `i` : chiffres romains en minuscules
    - `I` : chiffres romains en majuscules
    - `1` : nombres

    Ce type surcharge celui utilisé par son élément parent {{HTMLElement("ol")}} si présent.

    > [!NOTE]
    > Cet attribut a été déprécié&nbsp;: utilisez la propriété CSS {{cssxref("list-style-type")}} à la place.

## Exemples

### Liste ordonnée

#### HTML

```html
<ol>
  <li>premier article</li>
  <li>second article</li>
  <li>troisième article</li>
</ol>
```

#### Résultat

{{EmbedLiveSample("liste_ordonnée")}}

### Liste ordonnée démarrant avec un indice donné

#### HTML

```html
<ol type="I">
  <li value="3">troisième article</li>
  <li>quatrième article</li>
  <li>cinquième article</li>
</ol>
```

#### Résultat

{{EmbedLiveSample("liste_ordonnée_démarrant_avec_un_indice_donné")}}

### Liste non ordonnée

#### HTML

```html
<ul>
  <li>premier article</li>
  <li>second article</li>
  <li>troisième article</li>
</ul>
```

#### Résultat

{{EmbedLiveSample("liste_non_ordonnée")}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories">Catégories de contenu</a>
      </th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">Contenu de flux</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        La balise de fin peut être absente si l'élément est immédiatement suivi
        par un autre élément {{HTMLElement("li")}} ou s'il n'y a plus
        d'autre contenu dans son élément parent.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Un élément {{HTMLElement("ul")}}, {{HTMLElement("ol")}} ou
        {{HTMLElement("menu")}}. Bien que ce ne soit pas un usage
        conforme, l'élément obsolète {{HTMLElement("dir")}} peut également
        être un parent.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listitem_role">listitem</a></code>
        lorsque enfant d'un élément
        <code><a href="/fr/docs/Web/HTML/Reference/Elements/ol">ol</a></code>,
        <code><a href="/fr/docs/Web/HTML/Reference/Elements/ul">ul</a></code> ou
        <code><a href="/fr/docs/Web/HTML/Reference/Elements/menu">menu</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>menuitem</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menuitemradio</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radio_role"><code>radio</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role"><code>separator</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"><code>tab</code></a>,
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role"><code>treeitem</code></a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLLIElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres éléments liés aux listes&nbsp;: {{HTMLElement("ul")}}, {{HTMLElement("ol")}}, {{HTMLElement("menu")}} et {{HTMLElement("dir")}} (obsolète)&nbsp;;
- Les propriétés CSS qui peuvent être particulièrement utiles pour mettre en forme l'élément `<li>`&nbsp;:
  - la propriété {{cssxref("list-style")}}, pour choisir la manière d'afficher l'ordinal&nbsp;;
  - les [compteurs CSS](/fr/docs/Web/CSS/Guides/Counter_styles/Using_counters), pour gérer des listes imbriquées complexes&nbsp;;
  - la propriété {{cssxref("margin")}}, pour contrôler l'indentation de l'élément de liste.
