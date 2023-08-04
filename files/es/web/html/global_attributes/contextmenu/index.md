---
title: contextmenu
slug: Web/HTML/Global_attributes/contextmenu
---

{{HTMLSidebar("Global_attributes")}}

El [atributo global](/es/docs/Web/HTML/Atributos_Globales) **contextmenu** es el [**id**](/es/docs/Web/HTML/Atributos_Globales/id) de un {{HTMLElement("menu")}} para nosotros como el menu contextual para este elemento .

Un _menu contextual_ es un menu que aparece sobre la interacción del usuario , como por ejemplo un click derecho . HTML5 ahora permite modificar este menú . Aquí hay unos ejemplos de implementación , incluyendo menús anidados .

## Ejemplo

```html
<body contextmenu="share">
  <menu type="context" id="share">
    <menu label="share">
      <menuitem label="Twitter" onclick="window.open('https://twitter.com/intent/tweet?text=Hurra! Estos aprendiendo sobre ContextMenuI en MDN a través de Mozilla ');"></menuitem>
      <menuitem label="Facebook" onclick="window.open('https://facebook.com/sharer/sharer.php?u=https://https://developer.mozilla.org/en/HTML/Element/Using_HTML_context_menus');"></menuitem>
    </menu>
  </menu>
  <ol>
    <li>En cualquier parte del ejemplo puedes compartir la página en twitter y Facebook usando el menú de compartir de tu menú contextual.</li>
    <li><pre contextmenu="changeFont" id="fontSizing">En este elemento específico de la lista , puedes cambiar el tamaño del texto usando  las acciones "Incremenrar/Decrementar" de tu menú contextual ./pre></li>
    <menu type="context" id="changeFont">
      <menuitem label="Increase Font" onclick="incFont()"></menuitem>
      <menuitem label="Decrease Font" onclick="decFont()"></menuitem>
    </menu>
    <li contextmenu="ChangeImage" id="changeImage">En la imagen de abajo , puedes accionar la accion "Cambio de Imagen " en tu menú contextual .</li><br />
    <img src="https://developer.mozilla.org/media/img/promote/promobutton_mdn5.png" contextmenu="ChangeImage" id="promoButton" />
    <menu type="context" id="ChangeImage">
      <menuitem label="Change Image" onclick="changeImage()"></menuitem>
    </menu>
  </ol>
</body>
```

en conjunto con este Javascript

```js
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

resulta en :

{{EmbedLiveSample("ContextMenu_Example",550,200)}}

## Especificaciones

El [atributo `contextmenu` está obsoleto](https://html.spec.whatwg.org/multipage/obsolete.html#attr-contextmenu) y se eliminará de todos los navegadores.

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [atributos globales](/es/docs/Web/HTML/Atributos_Globales)
