---
title: <menu>
slug: Web/HTML/Element/menu
tags:
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/menu
---
{{HTMLRef}}{{SeeCompatTable}}

L'élément HTML **`<menu>`** représente un groupe de commandes que l'utilisateur peut utiliser ou activer. Il peut être utilisé afin de créer des menus (affichés en haut d'un écran par exemple) et des menus contextuels (qui apparaissent au clic-droit ou après avoir cliqué sur un bouton).

## Attributs

Comme pour tous les autres éléments, on peut utiliser [les attributs universels](/fr/docs/Web/HTML/Attributs_universels) sur `<menu>`.

- {{htmlattrdef("label")}} {{Deprecated_inline}}
  - : Le nom du menu qui est affiché pour l'utilisateur. Lorsque cet attribut est utilisé dans un menu imbriqué, c'est le nom affiché pour le sous-menu. Cet attribut doit uniquement être utilisé lorsque l'élément parent est un élément {{HTMLElement("menu")}}.
- {{htmlattrdef("type")}}

  - : Cet attribut indique le type de menu qui est déclaré. C'est un attribut à valeur contrainte qui peut prendre l'une des valeurs suivantes :

    - `context` {{Deprecated_inline}} : Cette valeur indique que le menu est dans un état de popup et qu'il contient des commandes relatives à un autre élément. Ce menu peut être référencé via l'attribut {{htmlattrxref("menu", "button")}} d'un élément {{HTMLElement("button")}} ou via l'attribut [`contextmenu`](/fr/docs/Web/HTML/Attributs_universels#attr-contextmenu) d'un élément. Cette valeur est la valeur par défaut de l'attribut lorsque l'élément parent est également un élément `<menu>`.
    - `toolbar` : Cette valeur indique que le menu est une barre d'outils qui contient différentes commandes disponibles. Ces commandes peuvent être construites avec plusieurs éléments {{HTMLElement("li")}} ou avec du contenu de flux qui décrit les commandes disponibles. Cette valeur est la valeur par défaut de l'attribut.

## Notes d'utilisation

- Les éléments {{HTMLElement("menu")}} et {{HTMLElement("ul")}} représentent tous les deux une liste non-ordonnées d'éléments. {{HTMLElement("ul")}} doit être utilisés pour des éléments qui doivent uniquement être affichés alors que {{HTMLElement("menu")}} est conçu pour des éléments interactifs.
- **Un menu contextuel** se compose d'un élément `<menu>` qui contient des éléments {{HTMLElement("menuitem")}} dont chacun représente une option sélectionnable dans le menu. D'autres éléments `<menu>` peuvent être imbriqués afin de créer des sous-menus et l'élément {{HTMLElement("hr")}} peut être utilisé afin d'ajouter des séparateurs. Les menus contextuels sont associés à un élément d'u document au travers de son attribut {{htmlattrxref("contextmenu")}}. Lorsqu'il s'agit d'un bouton de menu, c'est l'attribut {{htmlattrxref("menu", "button")}} de {{HTMLElement("button")}} qui décrit ce lien.
- **Les menus de barre d'outils** se composent d'un élément `<menu>` dont le contenu est décrit avec des éléments {{HTMLElement("li")}} qui forment une liste non-ordonnée ou avec du [contenu de flux](/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux) qui décrit les commandes et les options disponibles.
- Cet élément a été déprécié en HTML4 mais fut réintroduit dans la spécification HTML5.1 et dans le standard évolutif HTML.

## Exemples

### Menu contextuel

{{Deprecated_header}}

#### HTML

```html
<!-- Un élément <div> avec un menu contextuel -->
<div contextmenu="popup-menu">
  Vous pouvez effectuer un clic-droit pour voir le menu.
</div>

<menu type="context" id="popup-menu">
  <menuitem>Action</menuitem>
  <menuitem>Une autre action</menuitem>
  <hr>
  <menuitem>Une action après un séparateur</menuitem>
</menu>
```

#### CSS

```css
div {
  width: 300px;
  height: 80px;
  background-color: lightgreen;
}
```

#### Résultat

{{EmbedLiveSample('Menu_contextuel', '100%', '80')}}

### Bouton de menu

> **Attention :** Les boutons de menu n'ont pas encore été implémentés dans les navigateurs et {{HTMLElement("menuitem")}} est désormais obsolète.

#### HTML

```html
<!-- Un bouton qui affiche un menu lorsqu'on clique dessus. -->
<button type="menu" menu="popup-menu">
  Dérouler
</button>

<menu type="context" id="popup-menu">
  <menuitem>Action</menuitem>
  <menuitem>Une autre action</menuitem>
  <hr>
  <menuitem>Une action après un séparateur</menuitem>
</menu>
```

#### Résultat

{{EmbedLiveSample('Bouton_de_menu', '100%', '50')}}

### Barre d'outils

> **Attention :** Les menus sous forme de barres d'outils n'ont pas encore été implémentés dans les navigateurs.

#### HTML

```html
<!-- Un menu pour un éditeur basique
     avec deux boutons de menu. -->
<menu type="toolbar">
  <li>
    <button type="menu" menu="file-menu">Fichier</button>
    <menu type="context" id="file-menu">
      <menuitem label="Nouveau" onclick="newFile()">
      <menuitem label="Enregistrer" onclick="saveFile()">
    </menu>
  </li>
  <li>
    <button type="menu" menu="edit-menu">Éditer</button>
    <menu type="context" id="edit-menu">
      <menuitem label="Couper" onclick="cutEdit()">
      <menuitem label="Copier" onclick="copyEdit()">
      <menuitem label="Coller" onclick="pasteEdit()">
    </menu>
  </li>
</menu>
```

#### Résultat

{{EmbedLiveSample("Barre_doutils", '100%', '100')}}

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
        >
        et
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_tangible"
          >contenu tangible</a
        >
        si le menu est une liste (l'état par défaut, sauf si l'élément parent
        est lui-même un élément <code>&#x3C;menu></code> auquel cas le menu est
        dans un état contextuel).
      </td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>
        Si le menu est une liste : du
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu#Contenu_de_flux"
          >contenu de flux</a
        >
        ou zéro ou plusieurs éléments {{HTMLElement("li")}},
        {{HTMLElement("script")}} et
        {{HTMLElement("template")}}.<br />Si le menu est dans un menu
        contextuel : zéro ou plusieurs éléments
        {{HTMLElement("menu")}}, {{HTMLElement("menuitem")}},
        {{HTMLElement("hr")}}, {{HTMLElement("script")}} et
        {{HTMLElement("template")}}.
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
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLMenuElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                    | État                             | Commentaires                                                                        |
| ---------------------------------------------------------------------------------------------------------------- | -------------------------------- | ----------------------------------------------------------------------------------- |
| {{SpecName("HTML WHATWG", "grouping-content.html#the-menu-element", "&lt;menu&gt;")}} | {{Spec2("HTML WHATWG")}} | Aucune modification depuis la dernière dérivation, {{SpecName("HTML5.3")}} |
| {{SpecName("HTML5.3", "grouping-content.html#the-menu-element", "&lt;menu&gt;")}}     | {{Spec2("HTML5.3")}}     | Aucune modification.                                                                |
| {{SpecName("HTML5.2", "grouping-content.html#the-menu-element", "&lt;menu&gt;")}}     | {{Spec2("HTML5.2")}}     | Dérivation {{SpecName("HTML WHATWG")}}, suppression du type `context`.     |
| {{SpecName("HTML5.1", "interactive-elements.html#the-menu-element", "&lt;menu&gt;")}} | {{Spec2("HTML5.1")}}     | Dérivation de {{SpecName("HTML WHATWG")}}, définition initiale.            |

## Compatibilité des navigateurs

{{Compat("html.elements.menu")}}

## Voir aussi

- Les autres éléments HTML relatifs aux listes :

  - {{HTMLElement("ol")}}
  - {{HTMLElement("ul")}}
  - {{HTMLElement("li")}}
  - {{HTMLElement("hr")}}
  - {{HTMLElement("dir")}} {{obsolete_inline}}

- L'attribut universel [`contextmenu`](/fr/docs/Web/HTML/Attributs_universels#attr-contextmenu) qui peut être utilisé sur un élément et qui fait référence à l'attribut `id` d'un élément `menu` avec `context` qui vaut {{htmlattrxref("type","menu",'type="context"')}}.
