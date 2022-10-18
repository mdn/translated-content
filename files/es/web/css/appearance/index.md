---
title: '-moz-appearance (-webkit-appearance)'
slug: Web/CSS/appearance
tags:
  - Apariencia CSS
  - CSS Referencia(2)
  - No-estándar
translation_of: Web/CSS/appearance
---
<div>{{non-standard_header}}{{CSSRef}}</div>

<p>La propiedad CSS <code>-moz-appearance</code> se utiliza en Gecko (Firefox) para visualizar un elemento utilizando una plataforma nativa basada en el estilo del tema del sistema operativo.</p>

<p>Esta propiedad es frecuentemente utilizada en hojas de estilo <a href="/en-US/docs/Mozilla/Tech/XUL/Tutorial">XUL</a> para diseñar widgets personalizados con un estilo apropiado a la plataforma. También se utiliza en las implementaciones <a href="/en-US/docs/XBL">XBL</a> de los widgets que se arman en la plataforma Mozilla.</p>

<div class="note">
<p><em>No utilizar</em> esta propiedad en sitios Web: no sólo porque no es estándar, sinó porque su comportamiento cambia de un navegador a otro. Incluso la palabra clave <code>none</code> no tiene el mismo comportamiento en cada elemento de formulario a través de diferentes navegadores, y alguno no la soporta en absoluto.</p>
</div>

<p>{{cssinfo}}</p>

<h2 id="Síntaxis">Síntaxis</h2>

<pre class="brush: css">/* Lista parcial de valores válidos en Gecko */
-moz-appearance: none;
-moz-appearance: button;
-moz-appearance: checkbox;
-moz-appearance: scrollbarbutton-up;

/* Lista parcial de valores válidos en WebKit/Blink */
-webkit-appearance: none;
-webkit-appearance: button;
-webkit-appearance: checkbox;
-webkit-appearance: scrollbarbutton-up;
</pre>

<h3 id="Valores">Valores</h3>

<p><code>&lt;appearance&gt;</code> es una de las siguientes palabras clave:</p>

<table class="standard-table">
   <tbody>
    <tr>
     <th>Value</th>
     <th>Description</th>
    </tr>
    <tr>
     <td><code>none</code></td>
     
     <td>No special styling is applied. This is the default. Note, however, <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=649849" class="external" rel=" noopener">error&nbsp;649849</a> and <a href="https://bugzilla.mozilla.org/show_bug.cgi?id=605985" class="external" rel=" noopener">error&nbsp;605985</a>.</td>
    </tr>
    <tr>
     <td><code>button</code></td>
     
     <td>The element is drawn like a button.</td>
    </tr>
    <tr>
     <td><code>button-arrow-down</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>button-arrow-next</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>button-arrow-previous</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>button-arrow-up</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>button-bevel</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>button-focus</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>caret</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>checkbox</code></td>
     
     <td>The element is drawn like a checkbox, including only the actual "checkbox" portion.</td>
    </tr>
    <tr>
     <td><code>checkbox-container</code></td>
     
     <td>The element is drawn like a container for a checkbox, which may include a prelighting background effect under certain platforms. Normally it would contain a label and a checkbox.</td>
    </tr>
    <tr>
     <td><code>checkbox-label</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>checkmenuitem</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>dualbutton</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>groupbox</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>listbox</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>listitem</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>menuarrow</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>menubar</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>menucheckbox</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>menuimage</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>menuitem</code></td>
     
     <td>The element is styled as menu item, item is highlighted when hovered.</td>
    </tr>
    <tr>
     <td><code>menuitemtext</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>menulist</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>menulist-button</code></td>
     
     <td>The element is styled as a button that would indicate a menulist can be opened.</td>
    </tr>
    <tr>
     <td><code>menulist-text</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>menulist-textfield</code></td>
     
     <td>The element is styled as the text field for a menulist. (Not implemented for the Windows platform)</td>
    </tr>
    <tr>
     <td><code>menupopup</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>menuradio</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>menuseparator</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>meterbar</code></td>
     
     <td>New in Fx 16.</td>
    </tr>
    <tr>
     <td><code>meterchunk</code></td>
     
     <td>New in Fx 16</td>
    </tr>
    <tr>
     <td><code>progressbar</code></td>
     
     <td>The element is styled like a progress bar.</td>
    </tr>
    <tr>
     <td><code>progressbar-vertical</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>progresschunk</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>progresschunk-vertical</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>radio</code></td>
     
     <td>The element is drawn like a radio button, including only the actual "radio button" portion.</td>
    </tr>
    <tr>
     <td><code>radio-container</code></td>
     
     <td>The element is drawn like a container for a radio button, which may include a prelighting background effect under certain platforms. Normally it would contain a label and a radio button.</td>
    </tr>
    <tr>
     <td><code>radio-label</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>radiomenuitem</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td>range</td>
     
     <td> </td>
    </tr>
    <tr>
     <td>range-thumb</td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>resizer</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>resizerpanel</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>scale-horizontal</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>scalethumbend</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>scalethumb-horizontal</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>scalethumbstart</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>scalethumbtick</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>scalethumb-vertical</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>scale-vertical</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>scrollbarbutton-down</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>scrollbarbutton-left</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>scrollbarbutton-right</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>scrollbarbutton-up</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>scrollbarthumb-horizontal</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>scrollbarthumb-vertical</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>scrollbartrack-horizontal</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>scrollbartrack-vertical</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>searchfield</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>separator</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>sheet</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>spinner</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>spinner-downbutton</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>spinner-textfield</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>spinner-upbutton</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>splitter</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>statusbar</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>statusbarpanel</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>tab</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>tabpanel</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>tabpanels</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>tab-scroll-arrow-back</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>tab-scroll-arrow-forward</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>textfield</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>textfield-multiline</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>toolbar</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>toolbarbutton</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>toolbarbutton-dropdown</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>toolbargripper</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>toolbox</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>tooltip</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>treeheader</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>treeheadercell</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>treeheadersortarrow</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>treeitem</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>treeline</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>treetwisty</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>treetwistyopen</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>treeview</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>-moz-mac-unified-toolbar</code></td>
     
     <td><strong>Mac OS X only</strong>. This causes the toolbar and title bar to render using the unified toolbar style common to Mac OS X 10.4 and later applications.</td>
    </tr>
    <tr>
     <td> <code>-moz-win-borderless-glass</code></td>
     
     <td><strong>Windows Vista and later only</strong>. This style applies the Aero Glass effect -- but without a border -- to the element.</td>
    </tr>
    <tr>
     <td><code>-moz-win-browsertabbar-toolbox</code></td>
     
     <td><strong>Windows Vista and later only</strong>. This toolbox style is meant to be used for the tab bar in a browser.</td>
    </tr>
    <tr>
     <td><code>-moz-win-communicationstext</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>-moz-win-communications-toolbox</code></td>
     
     <td><strong>Windows Vista and later only</strong>. This toolbox style is meant to be used in communications and productivity applications. Corresponding foreground color is <code>-moz-win-communicationstext</code>.</td>
    </tr>
    <tr>
     <td> <code>-moz-win-exclude-glass</code></td>
     
     <td><strong>Windows Vista and later only. </strong>This styles is used to exclude the Aero Glass effect on the element.</td>
    </tr>
    <tr>
     <td><code>-moz-win-glass</code></td>
     
     <td><strong>Windows Vista and later only</strong>. This style applies the Aero Glass effect to the element.</td>
    </tr>
    <tr>
     <td><code>-moz-win-mediatext</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>-moz-win-media-toolbox</code></td>
     
     <td><strong>Windows Vista and later only</strong>. This toolbox style is meant to be used in applications that manage media objects. Corresponding foreground color is <code>-moz-win-mediatext</code>.</td>
    </tr>
    <tr>
     <td><code>-moz-window-button-box</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>-moz-window-button-box-maximized</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>-moz-window-button-close</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>-moz-window-button-maximize</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>-moz-window-button-minimize</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>-moz-window-button-restore</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>-moz-window-frame-bottom</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>-moz-window-frame-left</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>-moz-window-frame-right</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>-moz-window-titlebar</code></td>
     
     <td> </td>
    </tr>
    <tr>
     <td><code>-moz-window-titlebar-maximized</code></td>
     
     <td> </td>
    </tr>
   </tbody>
  </table>

<h3 id="Síntaxis_formal">Síntaxis formal</h3>

{{csssyntax}}

<h2 id="Ejemplos">Ejemplos</h2>

<pre class="brush: css">.exampleone {
  -moz-appearance: toolbarbutton;
}
</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<p>La propiedad <code>appearance</code> no se encuentra actualmente presente en ninguna nueva especificación CSS.</p>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

{{Compat("css.properties.appearance")}}

<h2 id="Ver_también">Ver también</h2>

<ul>
 <li><a class="external" href="http://www.w3.org/TR/2004/CR-css3-ui-20040511/#appearance">Definición de <code>appearance</code> en CSS 3 Interfaz Básico de Usuario</a> (Candidata a Recomendación desde 2004-05-11), desactualizada (La propiedad <code>appearance</code> se ha abandonado en las nuevas versiones de esta especificación.)</li>
 <li><a class="external" href="http://wiki.csswg.org/spec/css4-ui#dropped-css3-features">Características CSS3 abandonadas en la UI especificación.</a></li>
</ul>
