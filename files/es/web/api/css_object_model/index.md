---
title: CSS Object Model
slug: Web/API/CSS_Object_Model
tags:
  - API
  - CSSOM
  - Referencia
translation_of: Web/API/CSS_Object_Model
---
<p>{{DefaultAPISidebar('CSSOM')}}</p>

<p>El Modelo de objetos CSS (<strong>CSS Object Model</strong>) es un conjunto de APIs que permite manipular CSS desde JavaScript. Así como el DOM (Document Object Model) es para HTML, el CSSOM (CSS Object Model) es para CSS. Permite leer y modificar el estilo de CSS de forma dinámica.</p>

<h2 id="Referencia">Referencia</h2>

<div class="index">
<ul>
 <li>{{domxref("AnimationEvent")}}</li>
 <li>{{domxref("CaretPosition")}}</li>
 <li>{{domxref("CSS")}}</li>
 <li>{{domxref("CSSCharsetRule")}}</li>
 <li>{{domxref("CSSConditionRule")}}</li>
 <li>{{domxref("CSSCounterStyleRule")}}</li>
 <li>{{domxref("CSSFontFaceRule")}}</li>
 <li>{{domxref("CSSFontFeatureValuesMap")}}</li>
 <li>{{domxref("CSSFontFeatureValuesRule")}}</li>
 <li>{{domxref("CSSGroupingRule")}}</li>
 <li>{{domxref("CSSImportRule")}}</li>
 <li>{{domxref("CSSKeyframeRule")}}</li>
 <li>{{domxref("CSSKeyframesRule")}}</li>
 <li>{{domxref("CSSMarginRule")}}</li>
 <li>{{domxref("CSSMediaRule")}}</li>
 <li>{{domxref("CSSNamespaceRule")}}</li>
 <li>{{domxref("CSSPageRule")}}</li>
 <li>{{domxref("CSSRule")}}</li>
 <li>{{domxref("CSSRuleList")}}</li>
 <li>{{domxref("CSSStyleSheet")}}</li>
 <li>{{domxref("CSSStyleDeclaration")}}</li>
 <li>{{domxref("CSSSupportsRule")}}</li>
 <li>{{domxref("CSSVariablesMap")}}</li>
 <li>{{domxref("CSSViewportRule")}}</li>
 <li>{{domxref("ElementCSSInlineStyle")}}</li>
 <li>{{domxref("GeometryUtils")}}</li>
 <li>{{domxref("GetStyleUtils")}}</li>
 <li>{{domxref("LinkStyle")}}</li>
 <li>{{domxref("MediaList")}}</li>
 <li>{{domxref("MediaQueryList")}}</li>
 <li>{{domxref("PseudoElement")}}</li>
 <li>{{domxref("Screen")}}</li>
 <li>{{domxref("StyleSheet")}}</li>
 <li>{{domxref("StyleSheetList")}}</li>
 <li>{{domxref("TransitionEvent")}}</li>
</ul>
</div>

<p>Algunas otras interfaces también son complementadas por las especificaciones relacionadas con CSSOM: {{domxref("Document")}}, {{domxref("Window")}}, {{domxref("Element")}}, {{domxref("HTMLElement")}}, {{domxref("HTMLImageElement")}}, {{domxref("Range")}}, {{domxref("MouseEvent")}}, y {{domxref("SVGElement")}}.</p>

<h2 id="Tutoriales">Tutoriales</h2>

<ul>
 <li><a href="/en-US/docs/Determining_the_dimensions_of_elements">Determinar las dimensiones de los elementos</a> (Necesita actualización porque se realizó con DHTML/Ajax).</li>
 <li><a href="/en-US/docs/WebAPI/Managing_screen_orientation">Gestionando la orientación de la pantalla</a></li>
</ul>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Epecificacion</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{SpecName("CSSOM")}}</td>
   <td>{{Spec2("CSSOM")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("CSSOM View")}}</td>
   <td>{{Spec2("CSSOM View")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("Screen Orientation")}}</td>
   <td>{{Spec2("Screen Orientation")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Fonts")}}</td>
   <td>{{Spec2("CSS3 Fonts")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Animations")}}</td>
   <td>{{Spec2("CSS3 Animations")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Transitions")}}</td>
   <td>{{Spec2("CSS3 Transitions")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Variables")}}</td>
   <td>{{Spec2("CSS3 Variables")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Conditional")}}</td>
   <td>{{Spec2("CSS3 Conditional")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Device")}}</td>
   <td>{{Spec2("CSS3 Device")}}</td>
   <td> </td>
  </tr>
  <tr>
   <td>{{SpecName("CSS3 Counter Styles")}}</td>
   <td>{{Spec2("CSS3 Counter Styles")}}</td>
   <td> </td>
  </tr>
 </tbody>
</table>

<h2 id="Notas_de_compatibilidad_con_los_navegadores">Notas de compatibilidad con los navegadores</h2>

<p>Todas estas funcionalidades han sido añadidas a los navegadores poco a poco durante los años: Es un complejo proceso que no puede ser resumido en una simple tabla. Por favor busca la disponibilidad en navegadores en las interfaces específicas.</p>
