---
title: "<menu> : l'élément de menu"
slug: Web/HTML/Reference/Elements/menu
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

L'élément [HTML](/fr/docs/Web/HTML) **`<menu>`** est une alternative sémantique à {{HTMLElement("ul")}}, mais il est traité par les navigateurs (et exposé dans l'arbre d'accessibilité) comme identique à {{HTMLElement("ul")}}. Il représente une liste non ordonnée d'éléments (représentés par des éléments {{HTMLElement("li")}}).

{{InteractiveExample("Démonstration HTML&nbsp;: &lt;menu&gt;", "tabbed-shorter")}}

```html interactive-example
<div class="news">
  <a href="#"
    >Le télescope Webb de la NASA livre l'image infrarouge la plus profonde de
    l'univers à ce jour</a
  >
  <menu>
    <li><button id="save">Enregistrer pour plus tard</button></li>
    <li><button id="share">Partager cette actualité</button></li>
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

Cet élément inclut uniquement les [attributs universels](/fr/docs/Web/HTML/Reference/Global_attributes).

## Notes d'utilisation

Les éléments `<menu>` et {{HTMLElement("ul")}} représentent tous les deux une liste non-ordonnée d'éléments. {{HTMLElement("ul")}} doit être utilisés pour des éléments qui doivent uniquement être affichés alors que `<menu>` était initialement conçu pour des éléments interactifs.

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

{{EmbedLiveSample("Barre d'outils", "100%", 100)}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Guides/Content_categories">Catégories de contenu</a>
      </th>
      <td>
        <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">Contenu de flux</a>. Si au moins un enfant du menu est un élément {{HTMLElement("li")}}&nbsp;: <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_tangible">contenu tangible</a>.
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Zéro ou plusieurs occurrences de {{HTMLElement("li")}}, {{HTMLElement("script")}} et {{HTMLElement("template")}}.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>Aucune, la balise d'ouverture et la balise de fermeture sont obligatoires.</td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Tout élément qui accepte du <a href="/fr/docs/Web/HTML/Guides/Content_categories#contenu_de_flux">contenu de flux</a>.
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
        <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/directory_role"><code>directory</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/group_role"><code>group</code></a>, <code><a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/listbox_role">listbox</a></code>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menu_role"><code>menu</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/menubar_role"><code>menubar</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/radiogroup_role"><code>radiogroup</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tablist_role"><code>tablist</code></a>, <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/toolbar_role"><code>toolbar</code></a> ou <a href="/fr/docs/Web/Accessibility/ARIA/Reference/Roles/tree_role"><code>tree</code></a>
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

- Les autres éléments HTML relatifs aux listes&nbsp;: {{HTMLElement("ol")}}, {{HTMLElement("ul")}} et {{HTMLElement("li")}}.
