---
title: "<ol> : l'élément de liste ordonnée"
slug: Web/HTML/Reference/Elements/ol
original_slug: Web/HTML/Element/ol
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<ol>`** représente une liste ordonnée, généralement affichée sous forme de liste numérotée.

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;ol&gt;", "tabbed-shorter")}}

```html interactive-example
<ol>
  <li>Mélangez la farine, la levure chimique, le sucre et le sel.</li>
  <li>Dans un autre bol, mélangez les œufs, le lait et l'huile.</li>
  <li>Incorporez les deux préparations.</li>
  <li>Remplissez les moules à muffins aux 3/4.</li>
  <li>Faites cuire pendant 20&nbsp;minutes.</li>
</ol>
```

```css interactive-example
li {
  font:
    1rem "Fira Sans",
    sans-serif;
  margin-bottom: 0.5rem;
}
```

## Attributs

Cet élément inclut [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

- `compact` {{Deprecated_inline}} {{non-standard_inline}}
  - : Cet attribut booléen suggère que la liste doit être affichée dans un style compact. L'interprétation de cet attribut dépend du navigateur. Utilisez plutôt le [CSS](/fr/docs/Web/CSS)&nbsp;: pour obtenir un effet similaire à l'attribut `compact`, la propriété CSS {{cssxref("line-height")}} peut être utilisée avec une valeur de `80%`.
- **`reversed`**
  - : Cet attribut booléen indique que les éléments de la liste sont dans l'ordre inverse. Les éléments sont numérotés de haut en bas.
- **`start`**
  - : Un nombre entier à partir duquel on commence à compter pour les éléments de la liste. Toujours un chiffre arabique (1, 2, 3, etc.), même lorsque le `type` de numérotation est constitué de lettres ou de chiffres romains. Par exemple, pour commencer à numéroter les éléments à partir de la lettre "d" ou du chiffre romain "iv", utilisez `start="4"`.
- **`type`**
  - : Définit le type de numérotation :
    - `a` pour les lettres minuscules
    - `A` pour les lettres majuscules
    - `i` pour les chiffres romains minuscules
    - `I` pour les chiffres romains majuscules
    - `1` pour les chiffres (par défaut)

    Le type spécifié est utilisé pour l'ensemble de la liste, sauf si un attribut différent [`type`](/fr/docs/Web/HTML/Reference/Elements/li#attr-type) est utilisé sur un élément {{HTMLElement("li")}} fermé.

    > [!NOTE]
    > À moins que le type du numéro de la liste n'ait de l'importance (comme dans les documents juridiques ou techniques où les éléments sont référencés par leur numéro/lettre), utilisez plutôt la propriété CSS {{CSSxRef("list-style-type")}}.

## Note d'utilisation

En général, les éléments d'une liste ordonnée s'affichent avec un [marqueur](/fr/docs/Web/CSS/Reference/Selectors/::marker) précédant l'élément, tel qu'un chiffre ou une lettre.

Les éléments `<ol>` et {{HTMLElement("ul")}} (ou le synonyme {{HTMLElement("menu")}}) peuvent s'imbriquer aussi profondément que vous le souhaitez, alternant entre `<ol>` et `<ul>` (ou `<menu>`) comme vous le souhaitez.

Les éléments `<ol>` et {{HTMLElement("ul")}} représentent tous deux une liste d'éléments. La différence est qu'avec l'élément `<ol>`, l'ordre est significatif. Par exemple&nbsp;:

- Étapes d'une recette
- Instructions détaillées
- La liste des ingrédients en proportion décroissante sur les étiquettes d'information nutritionnelle

Pour déterminer la liste à utiliser, essayez de modifier l'ordre des éléments de la liste&nbsp;; si le sens change, utilisez l'élément `<ol>` — sinon, vous pouvez utiliser {{HTMLElement("ul")}}.

## Exemples

### Exemple simple

```html
<ol>
  <li>Fee</li>
  <li>Fi</li>
  <li>Fo</li>
  <li>Fum</li>
</ol>
```

#### Résultat

{{EmbedLiveSample("exemple_simple", 400, 100)}}

### Utilisation des chiffres romains

```html
<ol type="i">
  <li>Introduction</li>
  <li>Liste des Greffes</li>
  <li>Conclusion</li>
</ol>
```

#### Résultat

{{EmbedLiveSample("utilisation_des_chiffres_romains", 400, 100)}}

### Utilisation de l'attribut start

```html
<p>
  Les places d'arrivée des concurrents qui ne sont pas dans le cercle des
  gagnants :
</p>

<ol start="4">
  <li>Speedwalk Stu</li>
  <li>Saunterin' Sam</li>
  <li>Slowpoke Rodriguez</li>
</ol>
```

#### Résultat

{{EmbedLiveSample("utilisation_de_lattribut_start", 400, 100)}}

### Listes imbriquées

```html
<ol>
  <li>Premier élément</li>
  <li>
    Deuxième élément
    <!-- La fermeture </li> n'est pas encore placée ! -->
    <ol>
      <li>Premier élément de la liste imbriquée</li>
      <li>Deuxième élément de la liste imbriquée</li>
      <li>Troisième élément de la liste imbriquée</li>
    </ol>
  </li>
  <!-- Voici la fermeture </li> ! -->
  <li>Troisième élément</li>
</ol>
```

#### Résultat

{{EmbedLiveSample("listes_imbriquées", 400, 150)}}

### Liste non ordonnée dans une liste ordonnée

```html
<ol>
  <li>Premier élément</li>
  <li>
    Deuxième élément
    <!-- La fermeture </li> n'est pas placée ici ! -->
    <ul>
      <li>Premier élément de la liste non-ordonnée imbriquée</li>
      <li>Deuxième élément de la liste non-ordonnée imbriquée</li>
      <li>Troisième élément de la liste non-ordonnée imbriquée</li>
    </ul>
  </li>
  <!-- La fermeture </li> est ici. -->
  <li>Troisième élément</li>
</ol>
```

#### Résultat

{{EmbedLiveSample("liste_non_ordonnée_dans_une_liste_ordonnée", 400, 150)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <dfn
          ><a href="/fr/docs/Web/HTML/Guides/Content_categories"
            >Catégories de contenu</a
          ></dfn
        >
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#flow_content"
          >Contenu de flux</a
        >,
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#palpable_content"
          >contenu tangible</a
        >
        si les enfants de l'élément <code>&#x3C;ol></code> incluent au moins un
        élément <a href="/fr/docs/Web/HTML/Reference/Elements/li"><code>&#x3C;li></code></a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Zéro ou plusieurs éléments {{ HTMLElement("li") }},
        <a href="/fr/docs/Web/HTML/Reference/Elements/script"
          ><code>&#x3C;script></code></a
        > et
        <a href="/fr/docs/Web/HTML/Reference/Elements/template"
          ><code>&#x3C;template></code></a
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
        Tout élément acceptant du
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#flow_content"
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
      <td>
        <a href="/fr/docs/Web/API/HTMLOListElement"
          ><code>HTMLOListElement</code></a
        >
      </td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres éléments HTML relatifs aux listes&nbsp;: {{HTMLElement("ul")}}, {{HTMLElement("li")}}, {{HTMLElement("menu")}}
- Les propriétés CSS pouvant servir à la mise en forme de l'élément `<ol>`&nbsp;:
  - {{CSSxRef("list-style")}} permet de choisir la façon dont les nombres ordinaux sont affichés,
  - [Les compteurs CSS](/fr/docs/Web/CSS/Guides/Counter_styles/Using_counters) sont utiles pour gérer les listes imbriquées complexes,
  - {{CSSxRef("line-height")}} permet d'obtenir le même effet que l'attribut `compact` qui est déprécié,
  - {{CSSxRef("margin")}} permet de contrôler l'indentation de la liste.
