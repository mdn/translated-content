---
title: Valor calculado
slug: Web/CSS/computed_value
tags:
  - Referencia_CSS
translation_of: Web/CSS/computed_value
original_slug: Web/CSS/Valor_calculado
---
<p><br>
 {{ CSSRef() }}</p>
<h3 id="Sumario" name="Sumario">Sumario</h3>
<p>El valor <b>computed value</b> de una propiedad CSS es computado a partir de <a href="es/CSS/specified_value">specified value</a> de la siguiente forma:</p>
<ul>
 <li>Mediante los valores especiales <code><a href="es/CSS/inherit">inherit</a></code> y <code><a href="es/CSS/initial">initial</a></code>, y</li>
 <li>Realizando el cómputo necesario para alcanzar el valor descrito en la línea de "Computed value" del sumario de la propiedad.</li>
</ul>
<p>El cálculo necesario para el "Computed value" de una propiedad, normalmente implica convertir valores relativos (como los expresados en unidades 'em' o en porcentajes) a valores absolutos.</p>
<p>Por ejemplo: si un elemento tiene un valor especificado de <code>font-size: 16px</code> y <code>padding-top: 2em</code>, el valor computado de <code>padding-top</code> es <code>32px</code> (el doble del tamaño de la fuente).</p>
<p>Sin embargo, para algunas propiedades (aquellas con porcentajes relativos a algo que necesita un formato para ser determinados, tales como <a href="es/CSS/width">width</a>, <a href="es/CSS/margin-right">margin-right</a>, <a href="es/CSS/text-indent">text-indent</a>, y <a href="es/CSS/top">top</a>) los valores especificados en porcentajes se tornan valores computados. Ademas,los números especificados sin unidades en la propiedad <a href="es/CSS/line-height">line-height</a> se convierten en valores computados, según se especifica. Estos valores relativos que quedan tras realizar el cómputo, se hacen absolutos cuando se determina el <a href="es/CSS/used_value">used value</a>.</p>
<p>El uso principal de <a href="es/CSS/computed_value">computed value</a> (ademas de ser un paso de transición entre <a href="es/CSS/specified_value">specified value</a> y <a href="es/CSS/used_value">used value</a>) es <a href="es/CSS/inherited_and_non-inherited_properties">inheritance</a>, incluyendo la palabra clave <a href="es/CSS/inherit">inherit</a>.</p>
<h3 id="Notas" name="Notas">Notas</h3>
<p>La API DOM <a href="es/DOM/window.getComputedStyle">getComputedStyle</a> devuelve <a href="es/CSS/used_value">used value</a>, en lugar de <a href="es/CSS/computed_value">computed value</a>.</p>
<h3 id="Ver_tambi.C3.A9n" name="Ver_tambi.C3.A9n">Ver también</h3>
<p><a href="es/CSS/specified_value">specified value</a>, <a href="es/CSS/used_value">used value</a>, <a href="es/CSS/actual_value">actual value</a></p>
<p> </p>
<p> </p>
<p> </p>
<p> </p>
<div class="noinclude">
  </div>
<p>{{ languages( { "en": "en/CSS/computed_value", "fr": "fr/CSS/Valeur_calcul\u00e9e", "ja": "ja/CSS/computed_value", "pl": "pl/CSS/warto\u015b\u0107_wyliczona" } ) }}</p>
