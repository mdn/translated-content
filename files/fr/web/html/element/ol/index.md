---
title: '<ol> : l''élément de liste ordonnée'
slug: Web/HTML/Element/ol
tags:
  - Element
  - HTML
  - HTML grouping content
  - HTML:Flow content
  - Reference
translation_of: Web/HTML/Element/ol
---
{{HTMLRef}}

L'élément HTML **`<ol>`** représente une liste ordonnée. Les éléments d'une telle liste sont généralement affichés avec un indicateur ordinal pouvant prendre la forme de nombres, de lettres, de chiffres romains ou de points. La mise en forme de la numérotation n'est pas utilisée dans la description HTML mais dans la feuille de style CSS associée grâce à la propriété [`list-style-type`](/fr/docs/Web/CSS/list-style-type).

{{EmbedInteractiveExample("pages/tabbed/ol.html", "tabbed-shorter")}}

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
        >
        si les enfants de l'élément <code>&#x3C;ol></code> incluent au moins un
        élément <a href="/fr/docs/Web/HTML/Element/li"><code>&#x3C;li></code></a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Zéro, un, ou plusieurs éléments
        <a href="/fr/docs/Web/HTML/Element/li"><code>&#x3C;li></code></a> (qui
        peuvent imbriquer d'autres éléments
        <a href="/fr/docs/Web/HTML/Element/ol"><code>&#x3C;ol></code></a> ou
        <a href="/fr/docs/Web/HTML/Element/ul"><code>&#x3C;ul></code></a
        >),
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
        obligatoires
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément acceptant du
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#flow_content"
          >contenu de flux</a
        >.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <code
          ><a href="/fr/docs/Web/Accessibility/ARIA/Roles/List_role"
            >list</a
          ></code
        >
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="https://w3c.github.io/aria/#directory">directory</a>,
        <a href="https://w3c.github.io/aria/#group">group</a>,
        <a href="https://w3c.github.io/aria/#listbox">listbox</a>,
        <a href="https://w3c.github.io/aria/#menu">menu</a>,
        <a href="https://w3c.github.io/aria/#menubar">menubar</a>,
        <a href="https://w3c.github.io/aria/#none">none</a>,
        <a href="https://w3c.github.io/aria/#presentation">presentation</a>,
        <a href="https://w3c.github.io/aria/#radiogroup">radiogroup</a>,
        <a href="https://w3c.github.io/aria/#tablist">tablist</a>,
        <a href="https://w3c.github.io/aria/#toolbar">toolbar</a>,
        <a href="https://w3c.github.io/aria/#tree">tree</a>.
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

## Attributs

À l'instar des autres éléments HTML, il est possible d'utiliser [les attributs universels](/fr/docs/Web/HTML/Global_attributes) sur cet élément.

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

    Le type spécifié est utilisé pour l'ensemble de la liste, sauf si un attribut différent [`type`](/fr/docs/Web/HTML/Element/li#attr-type) est utilisé sur un élément [`<li>`](/fr/docs/Web/HTML/Element/li) fermé.

    > **Note :** À moins que le type du numéro de la liste n'ait de l'importance (comme dans les documents juridiques ou techniques où les éléments sont référencés par leur numéro/lettre), utilisez plutôt la propriété CSS [`list-style-type`](/fr/docs/Web/CSS/list-style-type).

## Note d'utilisation

En général, les éléments d'une liste ordonnée s'affichent avec un [marqueur](/en-US/docs/Web/CSS/::marker) précédant l'élément, tel qu'un chiffre ou une lettre.

Les éléments `<ol>` et [`<ul>`](/fr/docs/Web/HTML/Element/ul) peuvent s'imbriquer aussi profondément que vous le souhaitez, alternant entre `<ol>` et `<ul>` comme vous le souhaitez.

Les éléments `<ol>` et [`<ul>`](/fr/docs/Web/HTML/Element/ul) représentent tous deux une liste d'éléments. La différence est qu'avec l'élément `<ol>`, l'ordre est significatif. Par exemple :

- Étapes d'une recette
- Instructions détaillées
- La liste des ingrédients en proportion décroissante sur les étiquettes d'information nutritionnelle

Pour déterminer la liste à utiliser, essayez de modifier l'ordre des éléments de la liste ; si le sens change, utilisez l'élément `<ol>` - sinon, vous pouvez utiliser [`<ul>`](/fr/docs/Web/HTML/Element/ul).

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

Le HTML ci-dessus affichera :

{{EmbedLiveSample("Exemple_simple", 400, 150)}}

### Utilisation des chiffres romains

```html
<ol type="i">
  <li>Introduction</li>
  <li>Liste des Greffes</li>
  <li>Conclusion</li>
</ol>
```

Le HTML ci-dessus affichera :

{{EmbedLiveSample("Utilisation_des_chiffres_romains", 400, 150)}}

### Utilisation de l'attribut start

```html
<p>Les places d'arrivée des concurrents qui ne sont pas dans le cercle des gagnants :</p>

<ol start="4">
  <li>Speedwalk Stu</li>
  <li>Saunterin' Sam</li>
  <li>Slowpoke Rodriguez</li>
</ol>
```

Le HTML ci-dessus affichera :

{{EmbedLiveSample("Utilisation_de_l'attribut_start", 400, 160)}}

### Listes imbriquées

```html
<ol>
  <li>Premier élément</li>
  <li>Deuxième élément  <!-- La fermeture </li> n'est pas encore placée ! -->
    <ol>
      <li>Premier élément de la liste imbriquée</li>
      <li>Deuxième élément de la liste imbriquée</li>
      <li>Troisième élément de la liste imbriquée</li>
    </ol>
  </li>                 <!-- Voici la fermeture </li> ! -->
  <li>Troisième élément</li>
</ol>
```

Le HTML ci-dessus affichera :

{{EmbedLiveSample("Listes_imbriquées", 400, 200)}}

### Liste non ordonnée dans une liste ordonnée

```html
<ol>
  <li>Premier élément</li>
  <li>Deuxième élément  <!-- La fermeture </li> n'est pas placée ici ! -->
    <ul>
      <li>Premier élément de la liste non-ordonnée imbriquée</li>
      <li>Deuxième élément de la liste non-ordonnée imbriquée</li>
      <li>Troisième élément de la liste non-ordonnée imbriquée</li>
    </ul>
  </li>                 <!-- La fermeture </li> est ici. -->
  <li>Troisième élément</li>
</ol>
```

Le HTML ci-dessus affichera :

{{EmbedLiveSample("Liste_non_ordonnée_dans_une_liste_ordonnée", 400, 200)}}

## Spécifications

| Spécification                                                                                                    | Status                           | Commentaire                                                                             |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | --------------------------------------------------------------------------------------- |
| {{SpecName('HTML WHATWG', 'semantics.html#the-ol-element', '&lt;ol&gt;')}}             | {{Spec2('HTML WHATWG')}} | Aucune modification depuis la dernière dérivation W3C {{SpecName('HTML5 W3C')}}. |
| {{SpecName('HTML5 W3C', "grouping-content.html#the-ol-element", "HTMLOListElement")}} | {{Spec2('HTML5 W3C')}}     | Ajout des attributs `reversed` et `start`. L'attribut `type` n'est plus déprécié.       |
| {{SpecName('HTML4.01', 'struct/lists.html#h-10.2', '&lt;ol&gt;')}}                         | {{Spec2('HTML4.01')}}     | Dépréciation des attributs `compact` et `type`.                                         |

## Compatibilité des navigateurs

{{Compat("html.elements.ol")}}

## Voir aussi

- Les autres éléments HTML relatifs aux listes : [`<ul>`](/fr/docs/Web/HTML/Element/ul), [`<li>`](/fr/docs/Web/HTML/Element/li), [`<menu>`](/fr/docs/Web/HTML/Element/menu)
- Les propriétés CSS pouvant servir à la mise en forme de l'élément `<ol>` :

  - [`list-style`](/fr/docs/Web/CSS/list-style) qui permet de choisir comment les nombres ordinaux sont affichés,
  - [Les compteurs CSS](/fr/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters), utiles pour gérer les listes imbriquées complexes,
  - [`line-height`](/fr/docs/Web/CSS/line-height) qui permet d'obtenir le même effet que l'attribut [`compact`](/fr/docs/Web/HTML/Element/ol#attr-compact) qui est déprécié,
  - [`margin`](/fr/docs/Web/CSS/margin) qui permet de contrôler l'indentation de la liste.
