---
title: "<menu> : l'élément de menu"
slug: Web/HTML/Reference/Elements/menu
original_slug: Web/HTML/Element/menu
l10n:
  sourceCommit: 9b73bdea5458572f77a401596fef9a06ed8bba1b
---

L'élément [HTML](/fr/docs/Web/HTML) **`<menu>`** est une alternative sémantique à [`<ul>`](/fr/docs/Web/HTML/Reference/Elements/ul), mais est traité par les navigateurs, et en termes d'accessibilité comme un élément [`<ul>`](/fr/docs/Web/HTML/Reference/Elements/ul). Il représente une liste d'éléments non-ordonnée (chaque élément de la liste étant représenté par un élément [`<li>`](/fr/docs/Web/HTML/Reference/Elements/li)).

{{InteractiveExample("HTML Demo: &lt;menu&gt;", "tabbed-shorter")}}

```html interactive-example
<div class="news">
  <a href="#">NASA’s Webb Delivers Deepest Infrared Image of Universe Yet</a>
  <menu>
    <li><button id="save">Save for later</button></li>
    <li><button id="share">Share this news</button></li>
  </menu>
</div>
```

```css interactive-example
.news {
  background-color: bisque;
  padding: 1em;
  border: solid thin black;
}

menu {
  list-style-type: none;
  display: flex;
  padding: 0;
  margin-bottom: 0;
  gap: 1em;
}
```

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

Les éléments `<menu>` et [`<ul>`](/fr/docs/Web/HTML/Reference/Elements/ul) représentent tous les deux une liste non-ordonnée d'éléments. [`<ul>`](/fr/docs/Web/HTML/Reference/Elements/ul) doit être utilisés pour des éléments qui doivent uniquement être affichés alors que `<menu>` était initialement conçu pour des éléments interactifs.

> [!NOTE]
> Dans d'anciennes versions de la spécification HTML, l'élément `<menu>` pouvait être utilisé pour représenter un menu contextuel. Cette fonctionnalité est désormais considérée comme obsolète et ne fait plus partie de la spécification.

## Exemples

### Barre d'outils

Dans cet exemple, on utilise un élément `<menu>` afin de créer une barre d'outils pour une application d'édition.

#### HTML

```html
<menu>
  <li><button onclick="copy()">Copier</button></li>
  <li><button onclick="cut()">Couper</button></li>
  <li><button onclick="paste()">Coller</button></li>
</menu>
```

On notera que, sur le plan fonctionnel, cela est équivalent à&nbsp;:

```html
<ul>
  <li><button onclick="copy()">Copier</button></li>
  <li><button onclick="cut()">Couper</button></li>
  <li><button onclick="paste()">Coller</button></li>
</ul>
```

#### CSS

```css
menu,
ul {
  display: flex;
  list-style: none;
  padding: 0;
  width: 400px;
}

li {
  flex-grow: 1;
}

button {
  width: 100%;
}
```

#### Résultat

{{EmbedLiveSample("", "100%", 100)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Content_categories">Catégories de contenu</a>
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Content_categories#contenu_de_flux">Contenu de flux</a> et <a href="/fr/docs/Web/HTML/Content_categories#contenu_tangible">contenu tangible</a> si au moins un enfant du menu est un élément <a href="/fr/docs/Web/HTML/Element/li"><code>&lt;li&gt;</code></a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Zéro ou plusieurs occurrences de <a href="/fr/docs/Web/HTML/Element/li"><code>&lt;li&gt;</code></a>, <a href="/fr/docs/Web/HTML/Element/script"><code>&lt;script&gt;</code></a>, et <a href="/fr/docs/Web/HTML/Element/template"><code>&lt;template&gt;</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune balise ne doit être omise</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du <a href="/fr/docs/Web/HTML/Content_categories#contenu_de_flux">contenu de flux</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôle ARIA implicite</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Roles/List_role"><code>list</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>
        <a href="/fr/docs/Web/Accessibility/ARIA/Roles/directory_role"><code>directory</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Roles/group_role"><code>group</code></a>, <code><a href="/fr/docs/Web/Accessibility/ARIA/Roles/listbox_role">listbox</a></code>, <a href="/fr/docs/Web/Accessibility/ARIA/Roles/menu_role"><code>menu</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Roles/menubar_role"><code>menubar</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Roles/radiogroup_role"><code>radiogroup</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Roles/tablist_role"><code>tablist</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Roles/toolbar_role"><code>toolbar</code></a> ou <a href="/fr/docs/Web/Accessibility/ARIA/Roles/tree_role"><code>tree</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td><a href="/fr/docs/Web/API/HTMLMenuElement"><code>HTMLMenuElement</code></a></td>
    </tr>
  </tbody>
</table>

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- Les autres éléments HTML relatifs aux listes&nbsp;:
  - [`<ol>`](/fr/docs/Web/HTML/Reference/Elements/ol)
  - [`<ul>`](/fr/docs/Web/HTML/Reference/Elements/ul)
  - [`<li>`](/fr/docs/Web/HTML/Reference/Elements/li)
