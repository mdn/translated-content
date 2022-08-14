---
title: WebGL에서의 텍스쳐 애니메이션
slug: Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL
tags:
  - Animation
  - HTML5
  - Texture
  - Video
  - WebGL
  - 애니메이션
  - 웹지엘
  - 텍스쳐
translation_of: Web/API/WebGL_API/Tutorial/Animating_textures_in_WebGL
---
<p>{{WebGLSidebar("Tutorial") }} {{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}</p>

<p>앞 단원에서는 정적인 텍스쳐를 사용한 예제를 만들어 봤었는데, 이번에는 Ogg 비디오 파일을 이용해서 텍스쳐에 애니메이션 효과를 적용해 보겠습니다. 사실 만들기 상당히 쉽지만, 그래도 보는 재미는 쏠쏠하니까 한 번 만들어 보겠습니다. 텍스쳐를 구성할 소스로 어떤 종류의 데이터(예를 들면 <span style="line-height: 16.7999992370605px;">{{ HTMLElement("canvas") }}와 같은</span>)를 쓰더라도 코드는 비슷할 것입니다.</p>

<h2 id="텍스쳐를_구성할_비디오_로딩">텍스쳐를 구성할 비디오 로딩</h2>

<p>가장 먼저 할 일은 비디오 프레임을 조회하는데 사용할 <span style="line-height: 16.7999992370605px;">{{ HTMLElement("video") }} </span>요소를 생성하는 것입니다:</p>

<pre class="brush: js">&lt;video id="video"&gt;
  Your browser doesn't appear to support the HTML5 &lt;code&gt;&amp;lt;video&amp;gt;&lt;/code&gt; element.
&lt;/video&gt;
</pre>

<blockquote>
<p>역자 주 : 실제 예제 소스 코드를 보면 비디오 태그가 위와 같이 id 속성만 있는 것이 아니라 아래와 같이 src 속성과 autoplay 속성도 추가되어 있습니다.</p>

<pre class="brush: js" style="font-size: 14px;">&lt;video id="video" src="Firefox.ogv" autoplay&gt;
  Your browser doesn't appear to support the HTML5 &lt;code&gt;&amp;lt;video&amp;gt;&lt;/code&gt; element.
&lt;/video&gt;
</pre>
</blockquote>

<p>위 코드는 <span style="line-height: 16.7999992370605px;">'Firefox.ogv" 비디오 파일을 재생할 </span><span style="line-height: 16.7999992370605px;">{{ HTMLElement("video") }} 요소를 생성합니다. 다음과 같은 CSS 코드를 작성해서 비디오가 자동으로 표시되지 않도록 합니다:</span></p>

<pre class="brush: css">video {
  display: none;
}
</pre>

<p>이제 자바스크립트 코드를 살펴보겠습니다. <code>start()</code> 함수에 비디오 요소에 대한 참조를 가져오는 코드를 추가합니다:</p>

<pre class="brush: js">videoElement = document.getElementById("video");
</pre>

<p><code>setInterval()</code>을 이용해서 <code>drawScene()</code>을 주기적으로 호출하던 코드를 아래의 코드로 대체합니다:</p>

<pre class="brush: js">videoElement.addEventListener("canplaythrough", startVideo, true);
videoElement.addEventListener("ended", videoDone, true);
</pre>

<p><span style="line-height: 16.7999992370605px;">비디오 요소의 src 속성으로 </span>비디오 파일의 위치를 지정해서 비디오 로딩을 시작합니다. FIXME (이 글의 작성자의 한 사람인 bjacob에게) : <code>preload="auto"</code>를 여기에서 명시하지 않으면 파이어폭스에서는 <code>canplaythrough </code>이벤트가 발생되지 않음. 크롬에서는 <code>preload="auto"</code> 지정 여부와 관계없이 비디오 로딩 시작.</p>

<blockquote>
<p>역자 주 : 예제에 보면 아래와 같이 자바스크립트에서 preload나 src를 명시하지 않고, 위의 역자 주에 있는 것처럼 비디오 태그 내에 속성값으로 기술하고 있으므로, 바로 위 문단과 아래의 코드는 무시해도 좋을 것 같습니다.</p>
</blockquote>

<pre>video.preload = "auto";
videoElement.src = "Firefox.ogv";</pre>

<p>비디오 재생 시 끊김이 없도록 충분히 버퍼링 해둔 후에 애니메이션을 시작하는 것이 좋습니다. 전체 비디오가 끊김 없이 재생될 수 있을만큼 충분한 데이터가 버퍼링 된 후에 비디오의 재생이 시작되도록 <span style="line-height: 16.7999992370605px;">아래와 같이 </span><span style="font-family: consolas,monaco,andale mono,monospace; line-height: 16.7999992370605px;">canplaythrough </span><span style="line-height: 16.7999992370605px;">이벤트에 대한 리스너인 <code>startVideo()</code>를 추가합니다:</span></p>

<pre class="brush: js">function startVideo() {
  videoElement.play();
  intervalID = setInterval(drawScene, 15);
}
</pre>

<p>위 코드는 단순히 비디오 재생을 시작하고, 정육면체의 렌더링을 처리하는 <code>drawScene()</code> 함수를 <span style="line-height: 16.7999992370605px;"><code>setInterval()</code> 함수를 이용해서 주기적으로 호출합니다.</span></p>

<p>비디오가 끝날 때 방생하는 <code>ended </code>이벤트에 대한 리스너도 추가해서, 비디오 재생이 끝나면 불필요하게 CPU 시간을 잡아먹지 않도록 애니메이션을 중단시킵니다.</p>

<pre class="brush: js">function videoDone() {
  clearInterval(intervalID);
}</pre>

<p><code>videoDone()</code> 함수는 단순히 <span style="line-height: 16.7999992370605px;">{{ domxref("window.clearInterval()") }} 함수를 호출해서 애니메이션을 업데이트하는 <code>drawScene()</code> 함수의 호출을 중단시킵니다.</span></p>

<h2 id="비디오_프레임을_텍스쳐로_사용하기">비디오 프레임을 텍스쳐로 사용하기</h2>

<p>비디오 로딩과 재생에 대한 처리를 마치면, <code>initTexture()</code> 함수의 내용을 변경해야 합니다. 이번에는 이미지를 로딩하는 대신 비어있는 텍스쳐 객체를 생성하고, 텍스쳐 객체를 나중에 사용할 수 있도록 필터링을 설정하기만 하면 되므로, <code>initTexture()</code> 함수의 내용이 앞 단원의 예제보다 <span style="line-height: 16.7999992370605px;">조금 </span>더 간단해집니다: </p>

<pre class="brush: js">function initTextures() {
  cubeTexture = gl.createTexture();
  gl.bindTexture(gl.TEXTURE_2D, cubeTexture);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
  gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
}
</pre>

<p>가장 중요한 텍스쳐의 업데이트를 담당하는 <code>updateTexture()</code> 함수는 다음과 같습니다:</p>

<pre class="brush: js">function updateTexture() {
  gl.bindTexture(gl.TEXTURE_2D, cubeTexture);
  gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, true);
  gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, videoElement);
}
</pre>

<p>위와 같은 코드를 전에 본 적이 있을 것입니다. <code>texImage2D()</code>를 호출할 때 <code>Image </code>객체를 전달하지 않고 <span style="line-height: 16.7999992370605px;">{{ HTMLElement("video") }} 요소를 전달한다는 것만 제외하면, 앞 단원에서 사용했던 </span><span style="font-family: consolas,monaco,andale mono,monospace; line-height: 16.7999992370605px;"><code>handleTextureLoaded()</code> </span><span style="line-height: 16.7999992370605px;">루틴과 거의 똑같습니다. 현재의 프레임을 추출해서 텍스쳐로 사용하는 것은 WebGL이 알아서 처리합니다.</span></p>

<p><span style="line-height: 16.7999992370605px;"><code>drawScene() </code>함수에는 맨 앞에 </span><span style="font-family: consolas,monaco,andale mono,monospace; line-height: 16.7999992370605px;">updateTexture()</span><span style="line-height: 16.7999992370605px;">를 추가합니다. <code>drawScene()</code> 함수에 의해 장면을 다시 그릴 때마다 </span><code style="font-style: normal; line-height: 16.7999992370605px;">updateTexture()</code>이 호출됩니다.</p>

<p>이제 완성입니다! WebGL을 지원하는 브라우저라면 <a href="/samples/webgl/sample8/index.html">여기</a>에서 실제 작동하는 예제를 확인할 수 있습니다.</p>

<h2 id="참고_자료">참고 자료</h2>

<ul>
 <li><a href="/ko/docs/Web/Guide/HTML/Using_HTML5_audio_and_video">파이어폭스에서 audio와 video 사용하기</a></li>
</ul>

<p>{{Previous("Web/API/WebGL_API/Tutorial/Lighting_in_WebGL")}}</p>
