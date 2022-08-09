---
title: 利用 WebGL 產生動畫
slug: Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL
translation_of: Web/API/WebGL_API/Tutorial/Animating_objects_with_WebGL
---
<p>{{WebGLSidebar("Tutorial")}} {{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}</p>

<p>這個章節中，我們將示範如何旋轉之前的正方形平面。</p>

<h2 id="旋轉正方形">旋轉正方形</h2>

<p>首先我們需要宣告一個變數來追蹤現在正方形旋轉的角度:</p>

<pre class="brush: js">var squareRotation = 0.0;
</pre>

<p>Now we need to update the <code>drawScene()</code> function to apply the current rotation to the square when drawing it. After translating to the initial drawing position for the square, we apply the rotation like this:</p>

<pre class="brush: js">  mat4.rotate(modelViewMatrix,  // destination matrix
              modelViewMatrix,  // matrix to rotate
              squareRotation,   // amount to rotate in radians
              [0, 0, 1]);       // axis to rotate around
</pre>

<p>This rotates the modelViewMatrix by the current value of <code>squareRotation</code>, around the Z axis.</p>

<p>To actually animate, we need to add code that changes the value of <code>squareRotation</code> over time. We can do that by creating a new variable to track the time at which we last animated (let's call it <code>then</code>), then adding the following code to the end of the main function</p>

<pre class="brush: js">  var then = 0;

  // Draw the scene repeatedly
  function render(now) {
    now *= 0.001;  // convert to seconds
    const deltaTime = now - then;
    then = now;

    drawScene(gl, programInfo, buffers, deltaTime);

    requestAnimationFrame(render);
  }
  requestAnimationFrame(render);
</pre>

<p>This code uses <code>requestAnimationFrame</code> to ask the browser call the function "<code>render</code>" each frame. <code>requestAnimationFrame</code> passes us the time in milliseconds since the page loaded. We convert that to seconds and then subtract it from the last time to compute <code>deltaTime</code> which is the number of second since the last frame was rendered. At the end of drawscene we add the code to update <code>squareRotation.</code></p>

<pre class="brush: js"><code>  squareRotation += deltaTime;</code>
</pre>

<p>This code uses the amount of time that's passed since the last time we updated the value of <code>squareRotation</code> to determine how far to rotate the square.</p>

<p>{{EmbedGHLiveSample('webgl-examples/tutorial/sample4/index.html', 670, 510) }}</p>

<p><a href="https://github.com/mdn/webgl-examples/tree/gh-pages/tutorial/sample4">View the complete code</a> | <a href="http://mdn.github.io/webgl-examples/tutorial/sample4/">Open this demo on a new page</a></p>

<p>{{PreviousNext("Web/API/WebGL_API/Tutorial/Using_shaders_to_apply_color_in_WebGL", "Web/API/WebGL_API/Tutorial/Creating_3D_objects_using_WebGL") }}</p>
