---
title: Element.attachShadow()
slug: Web/API/Element/attachShadow
translation_of: Web/API/Element/attachShadow
---
<div>{{APIRef('Shadow DOM')}}</div>

<p>El método <strong><code>Element.attachShadow()</code></strong> adjunta un árbol DOM "sombra" al elemento especificado y devuelve una referencia a su raíz {{domxref("ShadowRoot")}}.</p>

<h2 id="Elementos_a_los_que_puedes_adjuntar_un_DOM_sombra">Elementos a los que puedes adjuntar un DOM "sombra"</h2>

<p>No se puede adjuntar un DOM "sombra" a cualquier tipo de elemento. Hay algunos que no pueden tenerlo por razones de seguridad (por ejemplo {{htmlelement("a")}}), y algunos más. Los siguientes elementos de la lista <strong>pueden</strong> adjuntar un DOM "sombra":</p>

<ul>
 <li>Cualquier elemento autónomo con un <a href="https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name" title="nombre válido">nombre válido</a></li>
 <li>{{htmlelement("article")}}</li>
 <li>{{htmlelement("aside")}}</li>
 <li>{{htmlelement("blockquote")}}</li>
 <li>{{htmlelement("body")}}</li>
 <li>{{htmlelement("div")}}</li>
 <li>{{htmlelement("footer")}}</li>
 <li>{{htmlelement("h1")}}</li>
 <li>{{htmlelement("h2")}}</li>
 <li>{{htmlelement("h3")}}</li>
 <li>{{htmlelement("h4")}}</li>
 <li>{{htmlelement("h5")}}</li>
 <li>{{htmlelement("h6")}}</li>
 <li>{{htmlelement("header")}}</li>
 <li>{{htmlelement("main")}}</li>
 <li>{{htmlelement("nav")}}</li>
 <li>{{htmlelement("p")}}</li>
 <li>{{htmlelement("section")}}</li>
 <li>{{htmlelement("span")}}</li>
</ul>

<h2 id="Syntax" name="Syntax">Syntaxis</h2>

<pre class="syntaxbox">var <var>shadowroot</var> = <var>element</var>.attachShadow(<var>shadowRootInit</var>);
</pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt><code>shadowRootInit</code></dt>
 <dd>Un diccionario <code>ShadowRootInit</code> , que puede contener los siguientes campos:
 <dl>
  <dt><code>mode</code></dt>
  <dd>
  <p>Una cadena que especifique el <em>modo de encapsulación</em> para el árbol DOM "sombra". Este puede tener uno de los siguientes valores:</p>

  <ul>
   <li><code>open</code>: Los elementos del árbol son accesibles desde fuera del elemento, por ejemplo usando {{domxref("Element.shadowRoot")}}:<br>

    <pre>element.shadowRoot; // Returns a ShadowRoot obj</pre>
   </li>
   <li><code>closed</code>: Deniega el acceso a lo(s) nodo(s) desde fuera mediante JavaScript:<br>

    <pre>element.shadowRoot; // Returns null
</pre>
   </li>
  </ul>
  </dd>
  <dt><code>delegatesFocus</code></dt>
  <dd>Un booleano que, si se establece a <code>true</code>, mitiga problemas de comportamiento relativos a la capacidad de tomar el foco. Cuando se hace click en una parte del DOM "sombra" que no puede tomar el foco, la primera parte del árbol que pueda tomar el foco lo hará, y le dará cualquier estilo disponible mediante CSS con <code>:focus</code>.</dd>
 </dl>
 </dd>
</dl>

<h3 id="Valor_retorno">Valor retorno</h3>

<p>Devuelve un objeto {{domxref("ShadowRoot")}}.</p>

<h3 id="Excepciones">Excepciones</h3>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Excepción</th>
   <th scope="col">Explicación</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>InvalidStateError</code></td>
   <td>El elemento que estás intentando adjuntar ya tiene una DOM "sombra".</td>
  </tr>
  <tr>
   <td><code>NotSupportedError</code></td>
   <td>Estás intentando adjuntar DOM "sombra" a un elemento fuera del espacio de nombres HTML, o el elemento no puede tener una DOM "sombra". adjunta (ver abajo).</td>
  </tr>
 </tbody>
</table>

<h2 id="Ejemplos">Ejemplos</h2>

<p>Los siguientes ejemplos están tomados de la demo <a href="https://github.com/mdn/web-components-examples/tree/master/word-count-web-component">word-count-web-component</a>  (<a href="https://mdn.github.io/web-components-examples/word-count-web-component/">verlo también en modo live</a>). Puedes ver que usamos <code>attachShadow()</code> en mitad del código para crear una DOM "sombra", a la que luego adjuntamos el contenido de nuesto elemento personalizado.</p>

<pre class="brush: js">// Crear una clase para el elemento
class CuentaPalabras extends HTMLParagraphElement {
  constructor() {
    // Siemmpre llamar a super en el constructor
    super();

    // contar las palabras en el nodo padre
    var cpPadre = this.parentNode;

    function cuentaPalabras(nodo){
      var texto = nodo.innerText || nodo.textContent
      return texto.trim().split(/\s+/g).length;
    }

    var cuenta = 'Palabras: ' + cuentaPalabras(cpPadre);

    // Crear un DOM "sombra"
    var sombra = this.attachShadow({mode: 'open'});

    // Crear el nodo de texto y añadirle el contador de palabras
    var texto = document.createElement('span');
    texto.textContent = count;

    // Añadirlo a la sombra
    sombra.appendChild(texto);

    // Actualizar el contador cuando el contenido del elemento cambie
    setInterval(function() {
      var cuenta = 'Palabras: ' + cuentaPalabras(cpPadre);
      texto.textContent = cuenta;
    }, 200)
  }
}

// Definir el nuevo elemento
customElements.define('cuenta-palabras', CuentaPalabras , { extends: 'p' });</pre>

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
   <td>{{SpecName('DOM WHATWG', '#dom-element-attachshadow', 'attachShadow()')}}</td>
   <td>{{Spec2('DOM WHATWG')}}</td>
   <td></td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_navegadores">Compatibilidad navegadores</h2>



<p>{{Compat("api.Element.attachShadow")}}</p>
