---
title: "<menu> : l'élément de menu"
slug: Web/HTML/Element/menu
---

{{HTMLSidebar}}

L'élément [HTML](/fr/docs/Web/HTML) **`<menu>`** est une alternative sémantique à [`<ul>`](/fr/docs/Web/HTML/Element/ul), mais est traité par les navigateurs, et en termes d'accessibilité comme un élément [`<ul>`](/fr/docs/Web/HTML/Element/ul). Il représente une liste d'éléments non-ordonnée (chaque élément de la liste étant représenté par un élément [`<li>`](/fr/docs/Web/HTML/Element/li)).

## Attributs

Cet élément inclut uniquement [les attributs universels](/fr/docs/Web/HTML/Global_attributes).

## Notes d'utilisation

Les éléments `<menu>` et [`<ul>`](/fr/docs/Web/HTML/Element/ul) représentent tous les deux une liste non-ordonnée d'éléments. [`<ul>`](/fr/docs/Web/HTML/Element/ul) doit être utilisés pour des éléments qui doivent uniquement être affichés alors que `<menu>` était initialement conçu pour des éléments interactifs.

L'élément connexe [`<menuitem>`](/fr/docs/Web/HTML/Element/menuitem) a été déprécié.

> **Note :** Dans d'anciennes versions de la spécification HTML, l'élément `<menu>` pouvait être utilisé pour représenter un menu contextuel. Cette fonctionnalité est désormais considérée comme obsolète et ne fait plus partie de la spécification.

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
        <a href="/fr/docs/Web/Guide/HTML/Content_categories">Catégories de contenu</a>
      </th>
      <td>
        <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_de_flux">Contenu de flux</a> et <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_tangible">contenu tangible</a> si au moins un enfant du menu est un élément <a href="/fr/docs/Web/HTML/Element/li"><code>&lt;li&gt;</code></a>.
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
        Tout élément qui accepte du <a href="/fr/docs/Web/Guide/HTML/Content_categories#contenu_de_flux">contenu de flux</a>.
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
        <a href="https://w3c.github.io/aria/#directory"><code>directory</code></a>, <a href="https://w3c.github.io/aria/#group"><code>group</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Roles/listbox_role"><code>listbox</code></a>, <a href="https://w3c.github.io/aria/#menu"><code>menu</code></a>, <a href="https://w3c.github.io/aria/#menubar"><code>menubar</code></a>, <a href="https://w3c.github.io/aria/#none"><code>none</code></a>, <a href="https://w3c.github.io/aria/#presentation"><code>presentation</code></a>, <a href="https://w3c.github.io/aria/#radiogroup"><code>radiogroup</code></a>, <a href="https://w3c.github.io/aria/#tablist"><code>tablist</code></a>, <a href="https://w3c.github.io/aria/#toolbar"><code>toolbar</code></a> ou <a href="https://w3c.github.io/aria/#tree"><code>tree</code></a>
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

  - [`<ol>`](/fr/docs/Web/HTML/Element/ol)
  - [`<ul>`](/fr/docs/Web/HTML/Element/ul)
  - [`<li>`](/fr/docs/Web/HTML/Element/li)
