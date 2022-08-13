---
title: <animate>
slug: Web/SVG/Element/animate
translation_of: Web/SVG/Element/animate
---
<div>{{SVGRef}}</div>

<div>El elemento <code>animate</code> de SVG se utiliza para animar un atributo o propiedad a través del tiempo. Normalmente se inserta dentro del elemento o referenciado con el atributo <code>href</code>.</div>

<h2 id="Contexto_de_uso">Contexto de uso</h2>

<p>{{svginfo}}</p>

<h2 id="Atributos">Atributos</h2>

<h3 id="Atributos_globales">Atributos globales</h3>

<ul>
 <li><a href="/en-US/docs/Web/SVG/Attribute#Conditional_processing_attributes">Conditional processing attributes</a> »</li>
 <li><a href="/en-US/docs/Web/SVG/Attribute#Core_attributes">Core attributes</a> »</li>
 <li><a href="/en-US/docs/Web/SVG/Attribute#Animation_event_attributes">Animation event attributes</a> »</li>
 <li><a href="/en-US/docs/Web/SVG/Attribute#XLink_attributes">Xlink attributes</a> »</li>
 <li><a href="/en-US/docs/Web/SVG/Attribute#AnimationAttributeTarget">Animation attribute target attributes</a> »</li>
 <li><a href="/en-US/docs/Web/SVG/Attribute#Animation_timing_attributes">Animation timing attributes</a> »</li>
 <li><a href="/en-US/docs/Web/SVG/Attribute#Animation_value_attributes">Animation value attributes</a> »</li>
 <li><a href="/en-US/docs/Web/SVG/Attribute#Animation_addition_attributes">Animation addition attributes</a> »</li>
 <li>{{SVGAttr("externalResourcesRequired")}}</li>
</ul>

<h3 id="Atributos_específicos">Atributos específicos</h3>

<ul>
 <li>{{SVGAttr("attributeName")}}</li>
 <li>{{SVGAttr("attributeType")}}</li>
 <li>{{SVGAttr("from")}}</li>
 <li>{{SVGAttr("to")}}</li>
 <li>{{SVGAttr("dur")}}</li>
 <li>{{SVGAttr("repeatCount")}}</li>
</ul>

<h2 id="DOM">DOM</h2>

<p>Este elemento implementa la interfaz de <code><a href="/en-US/docs/Web/DOM/SVGAnimateElement">SVGAnimateElement</a></code>.</p>

<h2 id="Ejemplo">Ejemplo</h2>

<h3 id="SVG">SVG</h3>

<pre class="brush: html; highlight[6-7]">&lt;?xml version="1.0"?&gt;
&lt;svg width="120" height="120" viewBox="0 0 120 120" version="1.1"
     xmlns="http://www.w3.org/2000/svg"&gt;

  &lt;rect x="10" y="10" width="100" height="100"&gt;
    &lt;animate attributeType="XML" attributeName="x" from="-100" to="120"
        dur="10s" repeatCount="indefinite"/&gt;
  &lt;/rect&gt;
&lt;/svg&gt;</pre>

<h3 id="Result">Result</h3>

<p>{{EmbedLiveSample("Ejemplo", 120, 120)}}</p>

<h2 id="Sobre_Accesibilidad">Sobre Accesibilidad</h2>

<p>Las animaciones titilantes e intermitentes pueden causar dificultades a las personas con discapacidades cognitivas como Trastorno por Déficit de Atención con Hiperactividad (ADHD) además de causar ataques a personas con cinestosis, epilepsia, migranias o <span class="short_text" id="result_box" lang="es"><span>síndrome de sensibilidad escotópica</span></span>.</p>

<p>Por favor, considerá ofrecer un mecanismo para pausar o deshabilitar las animaciones, como utilizando <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion">Reduced Motion Media Query.</a></p>

<p>Para más información (en inglés):</p>

<ul>
 <li><a href="https://alistapart.com/article/designing-safer-web-animation-for-motion-sensitivity">Designing Safer Web Animation For Motion Sensitivity · An A List Apart Article </a></li>
 <li><a href="https://css-tricks.com/introduction-reduced-motion-media-query/">An Introduction to the Reduced Motion Media Query | CSS-Tricks</a></li>
 <li><a href="https://webkit.org/blog/7551/responsive-design-for-motion/">Responsive Design for Motion | WebKit</a></li>
 <li><a href="https://developer.mozilla.org/en-US/docs/Web/Accessibility/Understanding_WCAG/Operable#Guideline_2.2_%E2%80%94_Enough_Time_Provide_users_enough_time_to_read_and_use_content">MDN Understanding WCAG, Guideline 2.2 explanations</a></li>
 <li><a href="https://www.w3.org/TR/UNDERSTANDING-WCAG20/time-limits-pause.html">Understanding Success Criterion 2.2.2  | W3C Understanding WCAG 2.0</a></li>
</ul>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Specification</th>
   <th scope="col">Status</th>
   <th scope="col">Comment</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td>{{SpecName("SVG Animations 2", "#AnimateElement", "&lt;animate&gt;")}}</td>
   <td>{{Spec2("SVG Animations 2")}}</td>
   <td>Sin cambios</td>
  </tr>
  <tr>
   <td>{{SpecName("SVG1.1", "animate.html#AnimateElement", "&lt;animate&gt;")}}</td>
   <td>{{Spec2("SVG1.1")}}</td>
   <td>Definición inicial</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_con_navegadores">Compatibilidad con navegadores</h2>

<div>


<p>{{Compat("svg.elements.animate")}}</p>
</div>
