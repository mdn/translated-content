---
title: contextmenu
slug: Web/HTML/Global_attributes/contextmenu
---

{{HTMLSidebar("Global_attributes")}}

> **Attention :** Cet attribut est [obsolète](https://html.spec.whatwg.org/multipage/obsolete.html#attr-contextmenu) et sera retiré de l'ensemble des navigateurs.

L'[attribut universel](/fr/docs/Web/HTML/Attributs_universels) **`contextmenu`** correspond à l'[`id`](/fr/docs/Web/HTML/Global_attributes#id) d'un élément {{HTMLElement("menu")}} qu'on souhaite utiliser comme menu contextuel pour l'élément courant.

Un menu contextuel est un menu qui apparaît suite à une action utilisateur (par exemple un clic-droit). HTML5 permet désormais de personnaliser ce menu.

## Exemples

Voici quelques exemples de personnalisations de menus. Le code HTML pourra être :

### HTML

```html
<body contextmenu="share">
  <menu type="context" id="share">
    <menu label="Partager">
      <menuitem label="Twitter" onclick="shareViaTwitter()"></menuitem>
      <menuitem label="Facebook" onclick="shareViaFacebook()"></menuitem>
    </menu>
  </menu>
  <ol>
    <li>
      Dans cet exemple, vous pouvez partager un lien vers cette page sur
      Facebook et/ou Twitter via le groupe Partager du menu contextuel
    </li>
    <li>
      Sur cette ligne : on peut partager la page sur Twitter ou Facebook grâce
      au menu Partager du menu contextuel.
    </li>
    <li>
      <pre contextmenu="changeFont" id="fontSizing">
Sur cette ligne : on peut changer la taille de la police en utilisant les options "Augmenter/Réduire la taille de la police" du menu contextuel</pre
      >
    </li>
    <menu type="context" id="changeFont">
      <menuitem
        label="Augmenter la taille de la police"
        onclick="incFont()"></menuitem>
      <menuitem
        label="Réduire la taille de la police"
        onclick="decFont()"></menuitem>
    </menu>
    <li contextmenu="ChangeImage" id="changeImage">
      Sur cette ligne : on peut utiliser l'option "Changer l'image" du menu.
    </li>
    <br />
    <img
      src="https://developer.mozilla.org/media/img/promote/promobutton_mdn5.png"
      contextmenu="ChangeImage"
      id="promoButton" />
    <menu type="context" id="ChangeImage">
      <menuitem label="Changer l'image" onclick="changeImage()"></menuitem>
    </menu>
  </ol>
</body>
```

### JavaScript

```js
function shareViaTwitter() {
  window.open(
    "https://twitter.com/intent/tweet?text=" +
      "Je découvre ContextMenu avec MDN.",
  );
}

function shareViaFacebook() {
  window.open(
    "https://facebook.com/sharer/sharer.php?u=" +
      "https://developer.mozilla.org/fr/docs/Web/HTML/Attributs_universels/contextmenu",
  );
}
function incFont() {
  document.getElementById("fontSizing").style.fontSize = "larger";
}

function decFont() {
  document.getElementById("fontSizing").style.fontSize = "smaller";
}

function changeImage() {
  var j = Math.ceil(Math.random() * 39 + 1);
  document.images[0].src =
    "https://developer.mozilla.org/media/img/promote/promobutton_mdn" +
    j +
    ".png";
}
```

### Résultat

{{EmbedLiveSample("Exemples",600,500)}}

## Spécifications

{{Specifications}}

## Compatibilité des navigateurs

{{Compat}}

## Voir aussi

- [Les différents attributs universels](/fr/docs/Web/HTML/Attributs_universels)
- {{domxref("HTMLElement.contextMenu")}}
