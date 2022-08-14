---
title: CustomElementRegistry.define()
slug: Web/API/CustomElementRegistry/define
translation_of: Web/API/CustomElementRegistry/define
---
<p>{{APIRef("CustomElementRegistry")}}</p>

<p>El método <code><strong>define()</strong></code> de la interfaz {{domxref("CustomElementRegistry")}} define un nuevo elemento personalizado.</p>

<p>Se pueden crear dos tipos de elementos personalizados:</p>

<ul>
 <li><strong>Elementos personalizados autónomos</strong>: Elementos autónomos; estos heredan de HTMLElement  (Elemento HTML genérico).</li>
 <li><strong>Elementos personalizados preconstruidos</strong>: Estos elementos heredan - y extienden - elementos HTML ya existentes (p.ej HTMLParagraphElement que es el elemento HTML <a href="https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p" title="The HTML &lt;p> element represents a paragraph."><code>&lt;p&gt;</code></a>).</li>
</ul>

<h2 id="Sintaxis">Sintaxis</h2>

<pre class="syntaxbox">customElements.define(<em>name</em>, <em>constructor</em>, <em>options</em>);
</pre>

<h3 id="Parámetros">Parámetros</h3>

<dl>
 <dt>name</dt>
 <dd>Nombre del nuevo elemento personalizado. Fíjate en que los nombres de elementos personalizados deben contener un guión.</dd>
 <dt>constructor</dt>
 <dd>Constructor para el nuevo elemento personalizado</dd>
 <dt>options {{optional_inline}}</dt>
 <dd>Objecto que controla cómo se define el elemento. Actualmente solo se permite una opción:
 <ul>
  <li><code>extends</code>: Cadena que especifica el nombre del elemento preconstruido del cual se va a extender. Se usa para crear <em>elementos personalizados preconstruidos</em>.</li>
 </ul>
 </dd>
</dl>

<h3 id="Valor_de_retorno">Valor de retorno</h3>

<p>Void.</p>

<h3 id="Excepciones">Excepciones</h3>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Excepción</th>
   <th scope="col">Descripción</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>NotSupportedError</code></td>
   <td>El {{domxref("CustomElementRegistry")}} ya contiene una entrada con el mismo nombre o el mismo constructor (o se ha definido ya de alguna otra manera), o se ha especificado <code>extends</code> pero el elemento del que se está intentando extender es desconocido.</td>
  </tr>
  <tr>
   <td><code>SyntaxError</code></td>
   <td>El nombre proporcionado no es un <a href="https://html.spec.whatwg.org/multipage/custom-elements.html#valid-custom-element-name">nombre válido de elemento personalizado</a>.</td>
  </tr>
  <tr>
   <td><code>TypeError</code></td>
   <td>El constructor referenciado no es un constructor</td>
  </tr>
 </tbody>
</table>

<div class="note">
<p><strong>Nota</strong>: A menudo se obtienen excepciones <code>NotSupportedError</code>s cuando el método <code>define()</code> está fallando, pero realmente es un problema relacionado con {{domxref("Element.attachShadow()")}}.</p>
</div>

<h2 id="Ejemplos">Ejemplos</h2>

<h3 id="Elemento_personalizado_autónomo">Elemento personalizado autónomo</h3>

<p>El siguiente código está tomado de nuestro ejemplo <a href="https://github.com/mdn/web-components-examples/tree/master/popup-info-box-web-component">popup-info-box-web-component</a>  (<a href="https://mdn.github.io/web-components-examples/popup-info-box-web-component/">verlo en vivo</a>).</p>

<pre class="brush: js">// Crear una clase para el elemento
class PopUpInfo extends HTMLElement {
  constructor() {
    // Siempre lo primero es llamar a super en el constructor
    super();

    // Crear una shadow root
    var shadow = this.attachShadow({mode: 'open'});

    // Crear tres elementos span
    var wrapper = document.createElement('span');
    wrapper.setAttribute('class','wrapper');

    var icon = document.createElement('span');
    icon.setAttribute('class','icon');
    icon.setAttribute('tabindex', 0);

    var info = document.createElement('span');
    info.setAttribute('class','info');

    // Coger el contenido del atributo text y ponerlo en el span info
    var text = this.getAttribute('text');
    info.textContent = text;

    // Coger el contenido del atributo img (si existe) y ponerlo en el span icon
    var imgUrl;
    if(this.hasAttribute('img')) {
      imgUrl = this.getAttribute('img');
    } else {
      imgUrl = 'img/default.png';
    }

    // El span no puede tener directamente una imagen, pero si contener un elemento img
    var img = document.createElement('img');
    img.src = imgUrl;
    icon.appendChild(img);

    // Crear los estilos CSS e incluirlos en el shadow DOM
    var style = document.createElement('style');

    style.textContent = '.wrapper {' +
                           'position: relative;' +
                        '}' +

                         '.info {' +
                            'font-size: 0.8rem;' +
                            'width: 200px;' +
                            'display: inline-block;' +
                            'border: 1px solid black;' +
                            'padding: 10px;' +
                            'background: white;' +
                            'border-radius: 10px;' +
                            'opacity: 0;' +
                            'transition: 0.6s all;' +
                            'position: absolute;' +
                            'bottom: 20px;' +
                            'left: 10px;' +
                            'z-index: 3;' +
                          '}' +

                          'img {' +
                            'width: 1.2rem' +
                          '}' +

                          '.icon:hover + .info, .icon:focus + .info {' +
                            'opacity: 1;' +
                          '}';

    // adjuntar los elementos creados (spans y estilo) al shadow DOM
    // notese que el span wrapper contiene los spans icon e info

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(icon);
    wrapper.appendChild(info);
  }
}

// Definir el nuevo elemento
customElements.define('popup-info', PopUpInfo);
</pre>

<pre class="brush: html">&lt;popup-info img="img/alt.png" text="Su código de validación de tarjeta (CVC) es una característica
                                    extra de seguridad — consiste en 3 o 4
                                    numeros en la parte posterior de su tarjeta."&gt;</pre>

<div class="note">
<p><strong>Nota</strong>: Los constructores de elementos personalizados autónomos deben extender {{domxref("HTMLElement")}}.</p>
</div>

<h3 id="Elemento_personalizado_preconstruido">Elemento personalizado preconstruido</h3>

<p>El siguiente código está tomado de nuestro ejemplo <a href="https://github.com/mdn/web-components-examples/tree/master/word-count-web-component">word-count-web-component</a> (<a href="https://mdn.github.io/web-components-examples/word-count-web-component/">verlo en vivo</a>).</p>

<pre class="brush: js">// Crear una clase para el elemento
class WordCount extends HTMLParagraphElement {
  constructor() {
    // Siempre lo primero es llamar a super en el constructor
    super();

    // contar palabras del padre de este elemento
    var wcParent = this.parentNode;

    // la función countWords cuenta palabras (aunque estén separadas por más de un espacio)
    // que existe en el nodo pasado como parámetro.
    // innerText está definido para objetos <code>HTMLElement</code>, mientras que textContent para todos los objetos Node
    // el operador || hace que obtengamos al menos uno de los dos

    function countWords(node){
      var text = node.innerText || node.textContent
      return text.split(/\s+/g).length;
    }

    var count = 'Words: ' + countWords(wcParent);

    // // Crear una shadow root
    var shadow = this.attachShadow({mode: 'open'});

    // Crear un nodo span con el número de palabras
    var text = document.createElement('span');
    text.textContent = count;

    // Añadirlo a la shadow root
    shadow.appendChild(text);


    // Actualizar el contador cuando el contenido del elemento cambie
    setInterval(function() {
      var count = 'Words: ' + countWords(wcParent);
      text.textContent = count;
    }, 200)

  }
}

// Define the new element
customElements.define('word-count', WordCount, { extends: 'p' });</pre>

<pre class="brush: html">&lt;p is="word-count"&gt;&lt;/p&gt;</pre>

<h2 id="Especificaciones">Especificaciones</h2>

<table class="standard-table">
 <tbody>
  <tr>
   <th scope="col">Especificación</th>
   <th scope="col">Estado</th>
   <th scope="col">Comentario</th>
  </tr>
  <tr>
   <td>{{SpecName("HTML WHATWG", "custom-elements.html#dom-customelementregistry-define", "customElements.define()")}}</td>
   <td>{{Spec2("HTML WHATWG")}}</td>
   <td>Initial definition.</td>
  </tr>
 </tbody>
</table>

<h2 id="Compatibilidad_navegadores">Compatibilidad navegadores</h2>

<div>


<p>{{Compat("api.CustomElementRegistry.define")}}</p>
</div>
