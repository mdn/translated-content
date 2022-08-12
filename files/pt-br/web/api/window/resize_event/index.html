---
title: resize
slug: Web/API/Window/resize_event
translation_of: Web/API/Window/resize_event
---
<p><span class="seoSummary">O evento <strong><code>resize</code></strong> é disparado quando o document view é redimensionado.</span></p>

<p>O evento manipulador pode ser registrado para o evento <code>resize</code> usando o atributo <code>window.onresize</code> ou usando <code>window.addEventListener('resize', ...)</code> </p>

<p>Em alguns browsers mais recentes é possível registrar o evento manipulador <code>resize</code> em qualquer elemento HTML.  E ainda é possível adicionar atributos <code>onresize</code> ou usar {{domxref("EventTarget.addEventListener", "addEventListener()")}} para implementar o manipulador em qualquer elemento.  Entretanto, eventos <code>resize</code>  apenas são disparados sobre (enviados para) o objeto {{domxref("Window", "window")}} ({{domxref("document.defaultView")}}). Apenas manipuladores registrados no objeto <code>window</code> recebem os eventos.</p>

<p>Existe uma nova proposta (2017) para permitir que todos os elementos sejam notificados de alterações de tamanho.  Veja <a href="https://wicg.github.io/ResizeObserver/">Resize Observer</a> para ler o documento rascunho, e <a href="https://github.com/WICG/ResizeObserver/issues">Github issues</a> para ler as discussões do que está ativo.</p>

<h2 id="Informações_gerais">Informações gerais</h2>

<dl>
 <dt style="float: left; text-align: right; width: 120px;">Specifications</dt>
 <dd style="margin: 0 0 0 120px;"><a class="external" href="http://www.w3.org/TR/DOM-Level-3-Events/#event-type-resize">DOM L3</a>, <a href="http://www.w3.org/TR/cssom-view/#resizing-viewports">CSSOM View</a></dd>
 <dt style="float: left; text-align: right; width: 120px;">Interface</dt>
 <dd style="margin: 0 0 0 120px;">UIEvent</dd>
 <dt style="float: left; text-align: right; width: 120px;">Bubbles</dt>
 <dd style="margin: 0 0 0 120px;">Não</dd>
 <dt style="float: left; text-align: right; width: 120px;">Cancelable</dt>
 <dd style="margin: 0 0 0 120px;">Não</dd>
 <dt style="float: left; text-align: right; width: 120px;">Target</dt>
 <dd style="margin: 0 0 0 120px;">defaultView (window)</dd>
 <dt style="float: left; text-align: right; width: 120px;">Default Action</dt>
 <dd style="margin: 0 0 0 120px;">Nenhuma</dd>
</dl>

<h2 id="Properties">Properties</h2>

<table class="standard-table">
 <thead>
  <tr>
   <th scope="col">Property</th>
   <th scope="col">Type</th>
   <th scope="col">Description</th>
  </tr>
 </thead>
 <tbody>
  <tr>
   <td><code>target</code> {{readonlyInline}}</td>
   <td><a href="/en-US/docs/Web/API/EventTarget" title="EventTarget is an interface implemented by objects that can receive events and may have listeners for them."><code>EventTarget</code></a></td>
   <td>O evento alto (o primeiro alvo na árvore DOM).</td>
  </tr>
  <tr>
   <td><code>type</code> {{readonlyInline}}</td>
   <td><a href="/en-US/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a></td>
   <td>O tipo de evento.</td>
  </tr>
  <tr>
   <td><code>bubbles</code> {{readonlyInline}}</td>
   <td><a href="/en-US/docs/Web/API/Boolean" title="The Boolean object is an object wrapper for a boolean value."><code>Boolean</code></a></td>
   <td>Se o evento normalmente bubbles ou não.</td>
  </tr>
  <tr>
   <td><code>cancelable</code> {{readonlyInline}}</td>
   <td><a href="/en-US/docs/Web/API/Boolean" title="The Boolean object is an object wrapper for a boolean value."><code>Boolean</code></a></td>
   <td>Se o evento é cancelado ou não.</td>
  </tr>
  <tr>
   <td><code>view</code> {{readonlyInline}}</td>
   <td><a class="new" href="/en-US/docs/Web/API/WindowProxy" rel="nofollow" title="The documentation about this has not yet been written; please consider contributing!"><code>WindowProxy</code></a></td>
   <td><a href="/en-US/docs/Web/API/Document/defaultView" title="In browsers, document.defaultView returns the window object associated with a document, or null if none is available."><code>document.defaultView</code></a> (<code>window</code> do documento)</td>
  </tr>
  <tr>
   <td><code>detail</code> {{readonlyInline}}</td>
   <td><code>long</code> (<code>float</code>)</td>
   <td>0.</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p>Como os eventos <code>resize</code> podem ser altamente executados, o evento manipulador não deve executar operações computacionais caras como modificações DOM. Em vez disso, recomenda-se diminuir o impacto do evento usando <a href="/en-US/docs/DOM/window.requestAnimationFrame" title="/en-US/docs/DOM/window.requestAnimationFrame">requestAnimationFrame</a>, <a href="/en-US/docs/Web/API/WindowTimers/setTimeout">setTimeout</a> ou <a href="/en-US/docs/Web/API/CustomEvent">customEvent</a>*, como a seguir:<br>
 <br>
 <strong>* IMPORTANT: </strong>Por favor note que IE11 precisa do <a href="https://developer.mozilla.org/en-US/docs/Web/API/CustomEvent/CustomEvent#Polyfill">customEvent</a> polyfill para funcionar corretamente.</p>

<h3 id="requestAnimationFrame_customEvent">requestAnimationFrame + customEvent</h3>

<pre class="brush: js">(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
             requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

    /* init - you can init any event */
    throttle("resize", "optimizedResize");
})();

// handle event
window.addEventListener("optimizedResize", function() {
    console.log("Resource conscious resize callback!");
});
</pre>

<h3 id="requestAnimationFrame">requestAnimationFrame</h3>

<pre class="brush: js">var optimizedResize = (function() {

    var callbacks = [],
        running = false;

    // fired on resize event
    function resize() {

        if (!running) {
            running = true;

            if (window.requestAnimationFrame) {
                window.requestAnimationFrame(runCallbacks);
            } else {
                setTimeout(runCallbacks, 66);
            }
        }

    }

    // run the actual callbacks
    function runCallbacks() {

        callbacks.forEach(function(callback) {
            callback();
        });

        running = false;
    }

    // adds callback to loop
    function addCallback(callback) {

        if (callback) {
            callbacks.push(callback);
        }

    }

    return {
        // public method to add additional callback
        add: function(callback) {
            if (!callbacks.length) {
                window.addEventListener('resize', resize);
            }
            addCallback(callback);
        }
    }
}());

// start process
optimizedResize.add(function() {
    console.log('Resource conscious resize callback!')
});
</pre>

<h3 id="setTimeout">setTimeout</h3>

<pre class="brush: js">(function() {

  window.addEventListener("resize", resizeThrottler, false);

  var resizeTimeout;
  function resizeThrottler() {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(function() {
        resizeTimeout = null;
        actualResizeHandler();

       // The actualResizeHandler will execute at a rate of 15fps
       }, 66);
    }
  }

  function actualResizeHandler() {
    // handle the resize event
    ...
  }

}());</pre>
