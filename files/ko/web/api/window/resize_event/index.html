---
title: resize
slug: Web/API/Window/resize_event
translation_of: Web/API/Window/resize_event
---
<p> </p>

<p><span class="seoSummary"><strong><code>resize</code></strong> 이벤트는 document view의 크기가 변경될 때 발생합니다.</span></p>

<p><code>window.onresize</code> 속성(어트리뷰트)을 사용하거나,<code>window.addEventListener('resize', ...)</code>를 사용하여, 이벤트 핸들러에 <code>resize</code> 이벤트를 등록할 수 있습니다.</p>

<p>일부 브라우저의 이전 버전에서는 모든 HTML 요소(엘리먼트)에 <code>resize</code> 이벤트 핸들러를 등록 할 수 있었습니다. 여전히 <code>onresize</code> 속성을 사용하거나, {{domxref("EventTarget.addEventListener", "addEventListener()")}}를 사용하여 모든 요소에 핸들러를 설정할 수 있습니다. 그러나 <code>resize</code> 이벤트는 오직 {{domxref("Window", "window")}}객체({{domxref("document.defaultView")}})에서만 발생합니다(전달합니다). <code>window</code> 객체에 등록된 핸들러만 이벤트를 수신합니다.</p>

<p>모든 요소가 resize 변경을 알림받을 수 있도록 하는 새로운 제안(proposal 2017)이 있습니다. 드래프트문서를 읽으려면 <a href="https://wicg.github.io/ResizeObserver/">Resize Observer</a>를 참조하고, 진행중인 토론을 읽으려면 <a href="https://github.com/WICG/ResizeObserver/issues">Github issues</a> 문서를 참조하세요.</p>

<h2 id="General_info">General info</h2>

<dl>
 <dt style="float: left; text-align: right; width: 120px;">Specifications</dt>
 <dd style="margin: 0 0 0 120px;"><a class="external" href="http://www.w3.org/TR/DOM-Level-3-Events/#event-type-resize">DOM L3</a>, <a href="http://www.w3.org/TR/cssom-view/#resizing-viewports">CSSOM View</a></dd>
 <dt style="float: left; text-align: right; width: 120px;">Interface</dt>
 <dd style="margin: 0 0 0 120px;">UIEvent</dd>
 <dt style="float: left; text-align: right; width: 120px;">Bubbles</dt>
 <dd style="margin: 0 0 0 120px;">No</dd>
 <dt style="float: left; text-align: right; width: 120px;">Cancelable</dt>
 <dd style="margin: 0 0 0 120px;">No</dd>
 <dt style="float: left; text-align: right; width: 120px;">Target</dt>
 <dd style="margin: 0 0 0 120px;">defaultView (window)</dd>
 <dt style="float: left; text-align: right; width: 120px;">Default Action</dt>
 <dd style="margin: 0 0 0 120px;">None</dd>
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
   <td><a href="/ko/docs/Web/API/EventTarget" title="EventTarget is an interface implemented by objects that can receive events and may have listeners for them."><code>EventTarget</code></a></td>
   <td>이벤트 타겟(DOM 트리의 최상위 타겟).</td>
  </tr>
  <tr>
   <td><code>type</code> {{readonlyInline}}</td>
   <td><a href="/ko/docs/Web/API/DOMString" title="DOMString is a UTF-16 String. As JavaScript already uses such strings, DOMString is mapped directly to a String."><code>DOMString</code></a></td>
   <td>이벤트의 타입.</td>
  </tr>
  <tr>
   <td><code>bubbles</code> {{readonlyInline}}</td>
   <td><a href="/ko/docs/Web/API/Boolean" title="The Boolean object is an object wrapper for a boolean value."><code>Boolean</code></a></td>
   <td>이벤트가 정상적으로 버블이 발생하는지 여부.</td>
  </tr>
  <tr>
   <td><code>cancelable</code> {{readonlyInline}}</td>
   <td><a href="/ko/docs/Web/API/Boolean" title="The Boolean object is an object wrapper for a boolean value."><code>Boolean</code></a></td>
   <td>이벤트 취소 가능 여부.</td>
  </tr>
  <tr>
   <td><code>view</code> {{readonlyInline}}</td>
   <td><a class="new" href="/ko/docs/Web/API/WindowProxy" rel="nofollow" title="The documentation about this has not yet been written; please consider contributing!"><code>WindowProxy</code></a></td>
   <td><a href="/ko/docs/Web/API/Document/defaultView" title="In browsers, document.defaultView returns the window object associated with a document, or null if none is available."><code>document.defaultView</code></a> (문서의 <code>window</code>)</td>
  </tr>
  <tr>
   <td><code>detail</code> {{readonlyInline}}</td>
   <td><code>long</code> (<code>float</code>)</td>
   <td>0.</td>
  </tr>
 </tbody>
</table>

<h2 id="Examples">Examples</h2>

<p><code>resize</code> 이벤트는 빈번하게 발생될 수 있기 때문에, 이벤트 핸들러는 DOM 수정과 같은 계산이 많이 필요한 연산을 실행하지 않아야 합니다. 대신에 다음과 같이 <a href="/ko/docs/DOM/window.requestAnimationFrame" title="/en-US/docs/DOM/window.requestAnimationFrame">requestAnimationFrame</a>, <a href="/ko/docs/Web/API/WindowTimers/setTimeout">setTimeout</a>, <a href="/ko/docs/Web/API/CustomEvent">customEvent</a>* 등을 사용해 이벤트를 스로틀(throttle) 하는것이 좋습니다:<br>
 <br>
 <strong>* 주의: </strong>IE11은 제대로 작동하려면 <a href="https://developer.mozilla.org/ko/docs/Web/API/CustomEvent/CustomEvent#Polyfill">customEvent</a> 폴리필(polyfill)이 필요합니다.</p>

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
