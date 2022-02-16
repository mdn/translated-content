---
title: <menuitem>
slug: Web/HTML/Element/menuitem
tags:
  - Déprécié
  - Element
  - HTML
  - Reference
  - Web
translation_of: Web/HTML/Element/menuitem
---
{{HTMLRef}}{{Deprecated_Header("HTML5.2")}}

L'élément HTML **`<menuitem>`** représente une commande qu'un utilisateur peut utiliser via un menu contextuel ou un menu rattaché à un bouton.

Une commande peut être définie explicitement, avec un texte et éventuellement une icône ou bien faire référence à une commande décrite dans un autre élément. Une commande peut prendre la forme d'une case à cocher ou d’un groupe de boutons radio.

## Attributs

Cet élément inclut également [les attributs universels](/fr/docs/Web/HTML/Attributs_universels) et notamment `title` qui peut être utilisé afin de décrire une commande ou pour fournir des indications quant à l'utilisation de celle-ci.

- {{htmlattrdef("checked")}}
  - : Un attribut booléen qui indique si la commande est sélectionné. Cet attribut peut uniquement être utilisé lorsque l'attribut `type` vaut `checkbox` ou `radio`.
- {{htmlattrdef("command")}}
  - : Cet attribut définit l'identifiant d'un autre élément qui indique une commande invoquée indirectement. Cet attribut ne peut pas être utilisé si les attributs `checked`, `disabled`, `icon`, `label`, `radiogroup` ou `type` sont utilisés.
- {{htmlattrdef("default")}}
  - : Un attribut booléen qui indique la commande par défaut du menu.
- {{htmlattrdef("disabled")}}
  - : Un attribut booléen qui indique que la commande n'est pas disponible dans l'état actuel. On notera que `disabled` est sémantiquement différent de `hidden`.
- {{htmlattrdef("icon")}}
  - : Une URL vers image qui représente la commande.
- {{htmlattrdef("label")}}
  - : Le nom de la commande affiché pour l'utilisateur. Cet attribut est obligatoire lorsque l'attribut `command` est absent.
- {{htmlattrdef("radiogroup")}}
  - : Cet attribut indique le nom d'un groupe de commandes étant des boutons radio. Cet attribut peut uniquement être utilisé lorsque `type` vaut `radio`.
- {{htmlattrdef("type")}}

  - : Cet attribut indique le type de commande dans le menu. C'est un attribut à valeur contrainte qui peut prendre une des valeurs suivantes :

    - `command` : une commande associée à une action donnée. C'est la valeur par défaut de l'attribut.
    - `checkbox` : une commande qui peut avoir un état parmi deux états différents.
    - `radio` : une commande qui représente une sélection au sein d'un groupe de commandes qui sont des boutons radio.

## Exemples

### HTML

```html
<!-- Un élément <div> avec un menu contextuel -->
<div contextmenu="popup-menu">
  Effectuez un clic-droit pour voir le menu contextuel
</div>

<menu type="context" id="popup-menu">
  <menuitem type="checkbox" checked>Une case à cocher</menuitem>
  <hr>
  <menuitem type="command" label="Cette commande ne fait rien" icon="https://developer.mozilla.org/static/img/favicon144.png">
    Les commandes n'affichent pas leurs contenus.
  </menuitem>
  <menuitem type="command" label="Cette commande contient du JavAScript" onclick="alert('command clicked')">
    Les commandes n'affichent pas leurs contenus.
  </menuitem>
  <hr>
  <menuitem type="radio" radiogroup="group1">Bouton radio 1</menuitem>
  <menuitem type="radio" radiogroup="group1">Bouton radio 2</menuitem>
</menu>
```

### CSS

```css
div {
  width: 300px;
  height: 80px;
  background-color: lightgreen;
}
```

### Résultat

{{EmbedLiveSample('Exemples', '300', '80')}}

## Résumé technique

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/fr/docs/Web/HTML/Catégorie_de_contenu"
          >Catégories de contenu</a
        >
      </th>
      <td>Aucune.</td>
    </tr>
    <tr>
      <th scope="row">Contenu autorisé</th>
      <td>Aucun, c'est un élément vide.</td>
    </tr>
    <tr>
      <th scope="row">Omission de balises</th>
      <td>
        Cet élément doit avoir une balise ouvrante et ne doit pas avoir de
        balise fermante.
      </td>
    </tr>
    <tr>
      <th scope="row">Parents autorisés</th>
      <td>
        Un élément {{HTMLElement("menu")}} lorsque son attribut vaut
        <code>type</code> ou que cet élément <code>&#x3C;menu></code> est lui
        même le fils d'un élément <code>&#x3C;menu</code>>.
      </td>
    </tr>
    <tr>
      <th scope="row">Rôles ARIA autorisés</th>
      <td>Aucun.</td>
    </tr>
    <tr>
      <th scope="row">Interface DOM</th>
      <td>{{domxref("HTMLMenuItemElement")}}</td>
    </tr>
  </tbody>
</table>

## Spécifications

| Spécification                                                                                                                | État                             | Commentaires                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------- | -------------------------------- | ---------------------------------------------------------------------------------- |
| {{SpecName("HTML WHATWG", "obsolete.html#menuitem", "&lt;menuitem&gt;")}}                             | {{Spec2("HTML WHATWG")}} | Aucune modification depuis la dernière dérivation {{SpecName("HTML5.2")}} |
| {{SpecName("HTML5.2", "obsolete.html#elementdef-menuitem", "&lt;menuitem&gt;")}}                 | {{Spec2("HTML5.2")}}     | Dérivation de {{SpecName("HTML WHATWG")}}, rendue obsolète.               |
| {{SpecName("HTML5.1", "interactive-elements.html#the-menuitem-element", "&lt;menuitem&gt;")}} | {{Spec2("HTML5.1")}}     | Dérivation de {{SpecName("HTML WHATWG")}}, définition initiale.           |

## Compatibilité des navigateurs

{{Compat("html.elements.menuitem")}}

## Voir aussi

- {{HTMLElement("menu")}}
- [Les menus contextuels HTML5 dans Firefox](https://hacks.mozilla.org/2011/11/html5-context-menus-in-firefox-screencast-and-code/)
