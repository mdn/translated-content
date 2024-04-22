---
title: <ul>
slug: Web/HTML/Element/ul
---

{{HTMLSidebar}}

L'élément HTML **`<ul>`** représente une liste d'éléments sans ordre particulier. Il est souvent représenté par une liste à puces.

{{EmbedInteractiveExample("pages/tabbed/ul.html", "tabbed-standard")}}

## Attributs

À l'instar des différents éléments HTML, cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Attributs_universels).

### Attributs dépréciés ou obsolètes

- `compact`{{Deprecated_inline}}

  - : Cet attribut booléen fournit une indication pour afficher la liste en mode compact. L'interprétation de cet attribut est laissée à la discrétion de l'agent utilisateur et ne fonctionne pas pour tous les navigateurs.

    > **Attention :** Cet attribut a été déprécié et ne doit pas être utilisé. Pour obtenir le même effet, on pourra utiliser la propriété {{cssxref("line-height")}} avec la valeur `80%` pour l'élément `<ul>`.

- `type`{{Deprecated_inline}}

  - : Cet attribut permet de définir le style de puce utilisé pour la liste. Les valeurs définies au sein des spécifications pour HTML3.2 et HTML 4.0/4.01 sont :

    - `circle`,
    - `disc`,
    - and `square`.

    Un quatrième type a été défini dans l'interface WebTV : `triangle` mais tous les navigateurs ne l'implémentent pas.

    > **Attention :** Cet attribut a été déprécié et ne doit pas être utilisé. Pour obtenir le même effet, on pourra utiliser la propriété CSS {{cssxref("list-style-type")}} à la place.

## Notes d'utilisation

- L'élément `<ul>` doit être utilisé pour regrouper plusieurs éléments qui n'ont pas de relation d'ordre. Si on hésite entre {{HTMLElement("ol")}} et {{HTMLElement("ul")}}, on se demandera si changer l'ordre des éléments de la liste a un impact : si le déplacement d'un élément change la signification, cela signifie que l'ordre est important et qu'il faudra utiliser {{HTMLElement("ol")}}, sinon l'ordre n'importe pas et {{HTMLElement("ul")}} peut être utilisé.
- La propriété CSS {{cssxref("list-style-type")}} est utile pour choisir le type de puce utilisé.
- Il n'y a pas de limite pour l'imbrication des listes avec les éléments {{HTMLElement("ol")}} et {{HTMLElement("ul")}}.

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

{{EmbedLiveSample("Exemple_simple","100%","150")}}

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

{{EmbedLiveSample("Liste_imbriquée","100%","230")}}

### `<ul>` et `<ol>` imbriqués

#### HTML

```html
<ul>
  <li>Lire un livre</li>
  <li>
    Préparer une soupe
    <ol>
      <li>Couper les légumes</li>
      <li>Mettre dans l'eau et cuire</li>
      <li>Mouliner</li>
    </ol>
  </li>
  <li>Relever le courrier</li>
</ul>
```

#### Résultat

{{EmbedLiveSample("ul_et_ol_imbriqués","100%","180")}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >Contenu de flux</a
        >, et du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible"
          >contenu tangible</a
        >
        si les enfants de l'élément <code>&#x3C;ul></code> incluent au moins un
        élément {{HTMLElement("li")}}.
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible"
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
      <td>{{no_tag_omission}}</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/directory_role">directory</a></code>, <code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/group_role">group</a></code>,
        <code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/listbox_role">listbox</a></code>, <code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/menu_role">menu</a></code>,
        <code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/menubar_role">menubar</a></code>, <code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/radiogroup_role">radiogroup</a></code>,
        <code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/tablist_role">tablist</a></code>, <code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/toolbar_role">toolbar</a></code>,
        <code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/tree_role">tree</a></code>, <code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/presentation_role">presentation</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLUListElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres éléments HTML relatifs aux listes : {{HTMLElement("ol")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}} (et l'élément obsolète {{HTMLElement("dir")}}).
- Les propriétés CSS particulièrement utiles pour mettre en forme l'élément `<ul>` :

  - La propriété {{cssxref("list-style")}} qui permet de choisir la façon dont l'indicateur ordinal est affiché,
  - [Les compteurs CSS](/fr/docs/Web/CSS/Compteurs_CSS), qui permettent de gérer des listes imbriquées complexes,
  - La propriété {{cssxref("line-height")}} qui permet de simuler l'attribut [`compact`](/fr/docs/Web/HTML/Element/ul#compact) désormais déprécié,
  - La propriété {{cssxref("margin")}} peut être utilisée pour contrôler l'indentation de la liste.
