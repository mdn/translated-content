---
title: objeto Stylesheet
slug: Web/API/StyleSheet
translation_of: Web/API/StyleSheet
---
<p>{{ ApiRef("CSSOM") }}</p>

<p>Esta sección describe el objeto <a class="external" href="http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet">CSSStyleSheet</a>, que representa una única hoja de estilos CSS.</p>

<p>Una hoja de estilos CSS consiste en reglas CSS que pueden, cada una de ellas, ser manipuladas a través del objeto <a href="/Es/DOM/CssRule" title="es/DOM/cssRule">CSSRule</a>. El objeto de la hoja de estilo en sí mismo, te permite examinar y modificar la hoja de estilos, incluyendo su lista de reglas.</p>

<p>Puedes tomar la lista de estilos de un documento determinado mediante el uso de la propiedad <a href="/es/DOM/document.styleSheets" title="es/DOM/document.styleSheets">document.styleSheets</a>.</p>

<h3 id="Properties" name="Properties">Propiedades</h3>

<dl>
 <dt><a href="/Es/DOM/Stylesheet.cssRules" title="es/DOM/stylesheet.cssRules">stylesheet.cssRules</a></dt>
 <dd>Devuelve todas las reglas CSS que hay en la hoja de estilo, en forma de arreglo.</dd>
 <dt><a href="/es/DOM/stylesheet.disabled" title="es/DOM/stylesheet.disabled">stylesheet.disabled</a></dt>
 <dd>Esta propiedad indica si se ha aplicado o no, la hoja de estilo actual.</dd>
 <dt><a href="/es/DOM/stylesheet.href" title="es/DOM/stylesheet.href">stylesheet.href</a></dt>
 <dd>Devuelve la localización de la hoja de estilo.</dd>
 <dt><a href="/es/DOM/stylesheet.media" title="es/DOM/stylesheet.media">stylesheet.media</a></dt>
 <dd>Especifica el medio al que se tiene intención de aplicar la hoja de estilo.</dd>
 <dt><a href="/es/DOM/stylesheet.ownerNode" title="es/DOM/stylesheet.ownerNode">stylesheet.ownerNode</a></dt>
 <dd>el nodo que asocia la hoja de estilo con el documento.</dd>
 <dt><a href="/es/DOM/stylesheet.ownerRule" title="es/DOM/stylesheet.ownerRule">stylesheet.ownerRule</a></dt>
 <dd>Si la hoja de estilo tiene una regla marcada con @import, la propiedad ownerRule contendrá la CSSImportRule.</dd>
 <dt><a href="/es/DOM/stylesheet.parentStyleSheet" title="es/DOM/stylesheet.parentStyleSheet">stylesheet.parentStyleSheet</a></dt>
 <dd>Devuelve la hoja de estilo que que está incluida en esta, si existe.</dd>
 <dt><a href="/es/DOM/stylesheet.title" title="es/DOM/stylesheet.title">stylesheet.title</a></dt>
 <dd>Devuelve el título de la hoja de estilo actual.</dd>
 <dt><a href="/es/DOM/stylesheet.type" title="es/DOM/stylesheet.type">stylesheet.type</a></dt>
 <dd>Especifica el lenguaje de la hoja de estilo.</dd>
</dl>

<h3 id="Methods" name="Methods">Métodos</h3>

<dl>
 <dt><a href="/es/DOM/stylesheet.deleteRule" title="es/DOM/stylesheet.deleteRule">stylesheet.deleteRule</a></dt>
 <dd>Elimina una regla de la hoja de estilo.</dd>
 <dt><a href="/es/DOM/stylesheet.insertRule" title="es/DOM/stylesheet.insertRule">stylesheet.insertRule</a></dt>
 <dd>Agrega una nueva regla de estilo a la hoja de estilo actualmente usada.</dd>
</dl>

<h3 id="Specification" name="Specification">Especificación</h3>

<p><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Style/stylesheets.html#StyleSheets-StyleSheet">DOM Level 2 Style Sheets: StyleSheet</a></p>

<p><a class="external" href="http://www.w3.org/TR/DOM-Level-2-Style/css.html#CSS-CSSStyleSheet">DOM Level 2 CSS: CSSStyleSheet</a></p>
