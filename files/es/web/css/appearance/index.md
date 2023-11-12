---
title: "-moz-appearance (-webkit-appearance)"
slug: Web/CSS/appearance
---

{{non-standard_header}}{{CSSRef}}

La propiedad CSS `-moz-appearance` se utiliza en Gecko (Firefox) para visualizar un elemento utilizando una plataforma nativa basada en el estilo del tema del sistema operativo.

Esta propiedad es frecuentemente utilizada en hojas de estilo [XUL](/es/docs/Mozilla/Tech/XUL/Tutorial) para diseñar widgets personalizados con un estilo apropiado a la plataforma. También se utiliza en las implementaciones [XBL](/es/docs/XBL) de los widgets que se arman en la plataforma Mozilla.

> **Nota:** _No utilizar_ esta propiedad en sitios Web: no sólo porque no es estándar, sinó porque su comportamiento cambia de un navegador a otro. Incluso la palabra clave `none` no tiene el mismo comportamiento en cada elemento de formulario a través de diferentes navegadores, y alguno no la soporta en absoluto.

{{cssinfo}}

## Síntaxis

```css
/* Lista parcial de valores válidos en Gecko */
-moz-appearance: none;
-moz-appearance: button;
-moz-appearance: checkbox;
-moz-appearance: scrollbarbutton-up;

/* Lista parcial de valores válidos en WebKit/Blink */
-webkit-appearance: none;
-webkit-appearance: button;
-webkit-appearance: checkbox;
-webkit-appearance: scrollbarbutton-up;
```

### Valores

`<appearance>` es una de las siguientes palabras clave:

| Value                              | Description                                                                                                                                                                                                     |
| ---------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `none`                             | No special styling is applied. This is the default. Note, however, [error 649849](https://bugzilla.mozilla.org/show_bug.cgi?id=649849) and [error 605985](https://bugzilla.mozilla.org/show_bug.cgi?id=605985). |
| `button`                           | The element is drawn like a button.                                                                                                                                                                             |
| `button-arrow-down`                |                                                                                                                                                                                                                 |
| `button-arrow-next`                |                                                                                                                                                                                                                 |
| `button-arrow-previous`            |                                                                                                                                                                                                                 |
| `button-arrow-up`                  |                                                                                                                                                                                                                 |
| `button-bevel`                     |                                                                                                                                                                                                                 |
| `button-focus`                     |                                                                                                                                                                                                                 |
| `caret`                            |                                                                                                                                                                                                                 |
| `checkbox`                         | The element is drawn like a checkbox, including only the actual "checkbox" portion.                                                                                                                             |
| `checkbox-container`               | The element is drawn like a container for a checkbox, which may include a prelighting background effect under certain platforms. Normally it would contain a label and a checkbox.                              |
| `checkbox-label`                   |                                                                                                                                                                                                                 |
| `checkmenuitem`                    |                                                                                                                                                                                                                 |
| `dualbutton`                       |                                                                                                                                                                                                                 |
| `groupbox`                         |                                                                                                                                                                                                                 |
| `listbox`                          |                                                                                                                                                                                                                 |
| `listitem`                         |                                                                                                                                                                                                                 |
| `menuarrow`                        |                                                                                                                                                                                                                 |
| `menubar`                          |                                                                                                                                                                                                                 |
| `menucheckbox`                     |                                                                                                                                                                                                                 |
| `menuimage`                        |                                                                                                                                                                                                                 |
| `menuitem`                         | The element is styled as menu item, item is highlighted when hovered.                                                                                                                                           |
| `menuitemtext`                     |                                                                                                                                                                                                                 |
| `menulist`                         |                                                                                                                                                                                                                 |
| `menulist-button`                  | The element is styled as a button that would indicate a menulist can be opened.                                                                                                                                 |
| `menulist-text`                    |                                                                                                                                                                                                                 |
| `menulist-textfield`               | The element is styled as the text field for a menulist. (Not implemented for the Windows platform)                                                                                                              |
| `menupopup`                        |                                                                                                                                                                                                                 |
| `menuradio`                        |                                                                                                                                                                                                                 |
| `menuseparator`                    |                                                                                                                                                                                                                 |
| `meterbar`                         | New in Fx 16.                                                                                                                                                                                                   |
| `meterchunk`                       | New in Fx 16                                                                                                                                                                                                    |
| `progressbar`                      | The element is styled like a progress bar.                                                                                                                                                                      |
| `progressbar-vertical`             |                                                                                                                                                                                                                 |
| `progresschunk`                    |                                                                                                                                                                                                                 |
| `progresschunk-vertical`           |                                                                                                                                                                                                                 |
| `radio`                            | The element is drawn like a radio button, including only the actual "radio button" portion.                                                                                                                     |
| `radio-container`                  | The element is drawn like a container for a radio button, which may include a prelighting background effect under certain platforms. Normally it would contain a label and a radio button.                      |
| `radio-label`                      |                                                                                                                                                                                                                 |
| `radiomenuitem`                    |                                                                                                                                                                                                                 |
| range                              |                                                                                                                                                                                                                 |
| range-thumb                        |                                                                                                                                                                                                                 |
| `resizer`                          |                                                                                                                                                                                                                 |
| `resizerpanel`                     |                                                                                                                                                                                                                 |
| `scale-horizontal`                 |                                                                                                                                                                                                                 |
| `scalethumbend`                    |                                                                                                                                                                                                                 |
| `scalethumb-horizontal`            |                                                                                                                                                                                                                 |
| `scalethumbstart`                  |                                                                                                                                                                                                                 |
| `scalethumbtick`                   |                                                                                                                                                                                                                 |
| `scalethumb-vertical`              |                                                                                                                                                                                                                 |
| `scale-vertical`                   |                                                                                                                                                                                                                 |
| `scrollbarbutton-down`             |                                                                                                                                                                                                                 |
| `scrollbarbutton-left`             |                                                                                                                                                                                                                 |
| `scrollbarbutton-right`            |                                                                                                                                                                                                                 |
| `scrollbarbutton-up`               |                                                                                                                                                                                                                 |
| `scrollbarthumb-horizontal`        |                                                                                                                                                                                                                 |
| `scrollbarthumb-vertical`          |                                                                                                                                                                                                                 |
| `scrollbartrack-horizontal`        |                                                                                                                                                                                                                 |
| `scrollbartrack-vertical`          |                                                                                                                                                                                                                 |
| `searchfield`                      |                                                                                                                                                                                                                 |
| `separator`                        |                                                                                                                                                                                                                 |
| `sheet`                            |                                                                                                                                                                                                                 |
| `spinner`                          |                                                                                                                                                                                                                 |
| `spinner-downbutton`               |                                                                                                                                                                                                                 |
| `spinner-textfield`                |                                                                                                                                                                                                                 |
| `spinner-upbutton`                 |                                                                                                                                                                                                                 |
| `splitter`                         |                                                                                                                                                                                                                 |
| `statusbar`                        |                                                                                                                                                                                                                 |
| `statusbarpanel`                   |                                                                                                                                                                                                                 |
| `tab`                              |                                                                                                                                                                                                                 |
| `tabpanel`                         |                                                                                                                                                                                                                 |
| `tabpanels`                        |                                                                                                                                                                                                                 |
| `tab-scroll-arrow-back`            |                                                                                                                                                                                                                 |
| `tab-scroll-arrow-forward`         |                                                                                                                                                                                                                 |
| `textfield`                        |                                                                                                                                                                                                                 |
| `textfield-multiline`              |                                                                                                                                                                                                                 |
| `toolbar`                          |                                                                                                                                                                                                                 |
| `toolbarbutton`                    |                                                                                                                                                                                                                 |
| `toolbarbutton-dropdown`           |                                                                                                                                                                                                                 |
| `toolbargripper`                   |                                                                                                                                                                                                                 |
| `toolbox`                          |                                                                                                                                                                                                                 |
| `tooltip`                          |                                                                                                                                                                                                                 |
| `treeheader`                       |                                                                                                                                                                                                                 |
| `treeheadercell`                   |                                                                                                                                                                                                                 |
| `treeheadersortarrow`              |                                                                                                                                                                                                                 |
| `treeitem`                         |                                                                                                                                                                                                                 |
| `treeline`                         |                                                                                                                                                                                                                 |
| `treetwisty`                       |                                                                                                                                                                                                                 |
| `treetwistyopen`                   |                                                                                                                                                                                                                 |
| `treeview`                         |                                                                                                                                                                                                                 |
| `-moz-mac-unified-toolbar`         | **Mac OS X only**. This causes the toolbar and title bar to render using the unified toolbar style common to Mac OS X 10.4 and later applications.                                                              |
| `-moz-win-borderless-glass`        | **Windows Vista and later only**. This style applies the Aero Glass effect — but without a border — to the element.                                                                                             |
| `-moz-win-browsertabbar-toolbox`   | **Windows Vista and later only**. This toolbox style is meant to be used for the tab bar in a browser.                                                                                                          |
| `-moz-win-communicationstext`      |                                                                                                                                                                                                                 |
| `-moz-win-communications-toolbox`  | **Windows Vista and later only**. This toolbox style is meant to be used in communications and productivity applications. Corresponding foreground color is `-moz-win-communicationstext`.                      |
| `-moz-win-exclude-glass`           | **Windows Vista and later only.** This styles is used to exclude the Aero Glass effect on the element.                                                                                                          |
| `-moz-win-glass`                   | **Windows Vista and later only**. This style applies the Aero Glass effect to the element.                                                                                                                      |
| `-moz-win-mediatext`               |                                                                                                                                                                                                                 |
| `-moz-win-media-toolbox`           | **Windows Vista and later only**. This toolbox style is meant to be used in applications that manage media objects. Corresponding foreground color is `-moz-win-mediatext`.                                     |
| `-moz-window-button-box`           |                                                                                                                                                                                                                 |
| `-moz-window-button-box-maximized` |                                                                                                                                                                                                                 |
| `-moz-window-button-close`         |                                                                                                                                                                                                                 |
| `-moz-window-button-maximize`      |                                                                                                                                                                                                                 |
| `-moz-window-button-minimize`      |                                                                                                                                                                                                                 |
| `-moz-window-button-restore`       |                                                                                                                                                                                                                 |
| `-moz-window-frame-bottom`         |                                                                                                                                                                                                                 |
| `-moz-window-frame-left`           |                                                                                                                                                                                                                 |
| `-moz-window-frame-right`          |                                                                                                                                                                                                                 |
| `-moz-window-titlebar`             |                                                                                                                                                                                                                 |
| `-moz-window-titlebar-maximized`   |                                                                                                                                                                                                                 |

### Síntaxis formal

{{csssyntax}}

## Ejemplos

```css
.exampleone {
  -moz-appearance: toolbarbutton;
}
```

## Especificaciones

La propiedad `appearance` no se encuentra actualmente presente en ninguna nueva especificación CSS.

## Compatibilidad con navegadores

{{Compat}}

## Ver también

- [Definición de `appearance` en CSS 3 Interfaz Básico de Usuario](http://www.w3.org/TR/2004/CR-css3-ui-20040511/#appearance) (Candidata a Recomendación desde 2004-05-11), desactualizada (La propiedad `appearance` se ha abandonado en las nuevas versiones de esta especificación.)
- [Características CSS3 abandonadas en la UI especificación.](http://wiki.csswg.org/spec/css4-ui#dropped-css3-features)
