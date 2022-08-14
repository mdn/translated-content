---
title: CSS 애니메이션 사용하기
slug: Web/CSS/CSS_Animations/Using_CSS_animations
tags:
  - Advanced
  - CSS
  - CSS Animations
  - Example
  - Experimental
  - Guide
translation_of: Web/CSS/CSS_Animations/Using_CSS_animations
---
<p>{{SeeCompatTable}}{{CSSRef}}</p>

<p><strong>CSS3 애니메이션</strong>은 엘리먼트에 적용되는 CSS 스타일을 다른 CSS 스타일로 부드럽게 전환시켜 줍니다. 애니메이션은 애니메이션을 나타내는 CSS 스타일과 애니메이션의 중간 상태를 나타내는 키프레임들로 이루어집니다.</p>

<p>CSS 애니메이션은 기존에 사용되던 스크립트를 이용한 애니메이션 보다 다음 세 가지 이유에서 이점을 가집니다.</p>

<ol>
 <li>자바스크립트를 모르더라도 간단하게 애니메이션을 만들 수 있습니다.</li>
 <li>자바스크립트를 이용한 애니메이션은 잘 만들어졌더라도 성능이 좋지 못할때가 있습니다. CSS 애니메이션은 frame-skipping 같은 여러 기술을 이용하여 최대한 부드럽게 렌더링됩니다.</li>
 <li>브라우저는 애니메이션의 성능을 효율적으로 최적화할 수 있습니다. 예를 들어 현재 안보이는 엘리먼트에 대한 애니메이션은 업데이트 주기를 줄여 부하를 최소화할 수 있습니다.</li>
</ol>

<h2 id="애니메이션_적용하기">애니메이션 적용하기</h2>

<p>CSS 애니메이션을 만드려면 {{ cssxref("animation") }} 속성과 이 속성의 하위 속성을 지정합니다. 애니메이션의 총 시간과 반복 여부등을 지정할 수 있습니다. 이 속성은 애니메이션의 중간상태를 기술하지 않는다는걸 명심하세요. 애니메이션의 중간 상태는 아래에서 다룰 {{ cssxref("@keyframes") }}  규칙을 이용하여 기술합니다. </p>

<p>{{ cssxref("animation") }} 속성의 하위 속성은 다음과 같습니다.</p>

<dl>
 <dt>{{ cssxref("animation-delay") }}</dt>
 <dd>엘리먼트가 로드되고 나서 언제 애니메이션이 시작될지 지정합니다.</dd>
 <dt>{{ cssxref("animation-direction") }}</dt>
 <dd>애니메이션이 종료되고 다시 처음부터 시작할지 역방향으로 진행할지 지정합니다.</dd>
 <dt>{{ cssxref("animation-duration") }}</dt>
 <dd>한 싸이클의 애니메이션이 얼마에 걸쳐 일어날지 지정합니다.</dd>
 <dt>{{ cssxref("animation-iteration-count") }}</dt>
 <dd>애니메이션이 몇 번 반복될지 지정합니다. <code>infinite</code>로 지정하여 무한히 반복할 수 있습니다.</dd>
 <dt>{{ cssxref("animation-name") }}</dt>
 <dd>이 애니메이션의 중간 상태를 지정합니다. 중간 상태는  {{ cssxref("@keyframes") }} 규칙을 이용하여 기술합니다.</dd>
 <dt>{{ cssxref("animation-play-state") }}</dt>
 <dd>애니메이션을 멈추거나 다시 시작할 수 있습니다.</dd>
 <dt>{{ cssxref("animation-timing-function") }}</dt>
 <dd>중간 상태들의 전환을 어떤 시간간격으로 진행할지 지정합니다.</dd>
 <dt>{{ cssxref("animation-fill-mode") }}</dt>
 <dd>애니메이션이 시작되기 전이나 끝나고 난 후 어떤 값이 적용될지 지정합니다.</dd>
</dl>

<h2 id="키프레임을_이용하여_애니메이션의_중간상태_기술하기">키프레임을 이용하여 애니메이션의 중간상태 기술하기</h2>

<p>애니메이션의 중간 상태를 기술해 봅시다. {{ cssxref("@keyframes") }} 규칙을 이용해서 두개 이상의 중간 상태를 기술합니다. 각 중간 상태는 특정 시점에 엘리먼트가 어떻게 보일지 나타냅니다. </p>

<p>CSS 스타일을 이용해 중간 상태에 어떻게 보일지 정의했다면 이 중간 상태가 전체 애니메이션에서 언제 등장할 지 {{ cssxref("percentage") }} 를 이용해 지정합니다. 0%는 애니메이션이 시작된 시점을 의미하고 100%는 애니메이션이 끝나는 시점을 의미합니다. 최소한 이 두 시점은 기술되어야 브라우저가 언제 애니메이션이 시작되고 끝나는지 알 수 있습니다. 0%와 100% 대신 <code>from</code> 과 <code>to</code>로 사용할 수도 있습니다.</p>

<p>시작 시점과 종료 시점 사이의 특정 시점에도 중간 상태를 지정할 수 있습니다.</p>

<h2 id="예제">예제</h2>

<div class="note"><strong>노트:</strong> 다음 예제들은 애니메이션 CSS 속성에 접두어가 사용되지 않았습니다(역자: -webkit-, -moz- 등). 오래된 브라우저는 접두어가 필요합니다. </div>

<h3 id="텍스트가_브라우저를_가로질러_움직이게_하기">텍스트가 브라우저를 가로질러 움직이게 하기</h3>

<p>다음 단순한 예제에서 {{ HTMLElement("p") }} 엘리먼트가 브라우저 윈도우 오른쪽에서 왼쪽으로 가로질러 움직이는걸 볼 수 있습니다.</p>

<pre class="brush: css">p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
</pre>

<p>{{ HTMLElement("p") }} 엘리먼트에 지정한 CSS 규칙에서 {{ cssxref("animation-duration") }} 속성을 통해 애니메이션의 총 길이는 3초로 지정했습니다. 또 애니메이션의 중간 상태들을 {{ cssxref("@keyframes") }} 규칙을 사용하여 기술하고 이것들에게 slidein라는 이름을 붙였습니다.  그리고 p 엘리먼트에 slidein이라는 애니메이션을 지정했습니다.</p>

<p>CSS 애니메이션을 지원하지 않는 브라우저를 위하여 {{ HTMLElement("p") }} 에 특정 스타일을 지정하고 싶다면 그러셔도 됩니다. 여기서도 그렇게 할 수 있으나 이 예제에서는 애니메이션 효과만을 보기위해 지정하지 않았습니다. </p>

<p>애니메이션의 중간 상태는 {{ cssxref("@keyframes") }} 규칙을 이용하여 기술합니다. 이 경우에서는 두개의 중간 상태를 기술했습니다. 첫 번째 중간 상태는 애니메이션이 시작되고 나서 0% 시점에 (<code>from</code><span style="font-family: courier new,andale mono,monospace;">키워드를 사용해도 됩니다) 왼쪽 마진을 100%로 지정하는 것입니다. 왼쪽 마진을 100%로 지정했으므로 애니메이션이 시작된 시점에 브라우저 윈도우 오른쪽 모서리에 엘리먼트가 그려집니다.</span></p>

<p>두번째 중간 상태는 애니메이션이 시작되고나서 100% (<span style="font-family: courier new,andale mono,monospace;">to키워드를 사용해도 됩니다)시점에 왼쪽 마진을 0%으로 지정하는 것입니다. 따라서 애니메이션 마지막에는 엘리먼트가 브라우저 윈도우의 왼쪽 모서리에 그려집니다.</span></p>


<pre class="brush: html">&lt;p&gt;The Caterpillar and Alice looked at each other for some time in silence:
at last the Caterpillar took the hookah out of its mouth, and addressed
her in a languid, sleepy voice.&lt;/p&gt;
</pre>

<p>{{EmbedLiveSample("텍스트가_브라우저를_가로질러_움직이게_하기","100%","250")}}</p>

<h3 id="중간_상태_추가하기">중간 상태 추가하기</h3>

<p>이전 예제의 애니메이션에서 중간 상태를 추가해 봅시다. 왼쪽에서 오른쪽으로 엘리먼트가 움직일 때 글자 크기가 커지다가 다시 원래대로 줄어들게 해봅시다. 다음과 같은 중간 상태를 추가하면 됩니다.</p>

<pre class="brush: css">75% {
  font-size: 300%;
  margin-left: 25%;
  width: 150%;
}
</pre>
<pre class="brush: css hidden">p {
  animation-duration: 3s;
  animation-name: slidein;
}

@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
</pre>

<pre class="brush: html hidden">&lt;p&gt;The Caterpillar and Alice looked at each other for some time in silence:
at last the Caterpillar took the hookah out of its mouth, and addressed
her in a languid, sleepy voice.&lt;/p&gt;
</pre>

<p>애니메이션의 75% 시점에서 엘리먼트의 왼쪽 마진을 25%, 너비를 150%, 글자 크기를 300%로 지정하라는 의미입니다.</p>

<p>{{EmbedLiveSample("중간_상태_추가하기","100%","250")}}</p>

<h3 id="애니메이션_반복하기">애니메이션 반복하기</h3>

<p>애니메이션을 반복하고 싶다면 {{ cssxref("animation-iteration-count") }} 속성을 사용하면 됩니다. 이 속성으로 애니메이션이 몇 번 반복될지 지정할 수 있습니다. 이 예제에서는 <code>infinite</code> 라는 값을 지정하여 무한히 반복되게 해 봅시다.</p>

<pre class="brush: css">p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
}
</pre>

<pre class="brush: css hidden">@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
</pre>

<pre class="brush: html hidden">&lt;p&gt;The Caterpillar and Alice looked at each other for some time in silence:
at last the Caterpillar took the hookah out of its mouth, and addressed
her in a languid, sleepy voice.&lt;/p&gt;
</pre>

<p>{{EmbedLiveSample("애니메이션_반복하기","100%","250")}}</p>

<h3 id="앞뒤로_움직이기">앞뒤로 움직이기</h3>

<p>앞에서 애니메이션이 반복되는걸 보셨을 겁니다. 그런데 애니메이션이 끝나고 갑자기 오른쪽 모서리로 돌아가는게 어색합니다. 애니메이션이 끝났을 때 반대방향으로 이동하도록 만들어 봅시다. {{ cssxref("animation-direction") }} 속성을 <code>alternate</code>로 지정하면 됩니다.</p>

<pre class="brush: css">p {
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
</pre>

<pre class="brush: css hidden">@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}
</pre>

<pre class="brush: html hidden">&lt;p&gt;The Caterpillar and Alice looked at each other for some time in silence:
at last the Caterpillar took the hookah out of its mouth, and addressed
her in a languid, sleepy voice.&lt;/p&gt;
</pre>

<p>{{EmbedLiveSample("앞뒤로_움직이기","100%","250")}}</p>

<h3 id="애니메이션_이벤트_사용하기">애니메이션 이벤트 사용하기</h3>

<p>애니메이션 이벤트를 이용하여 애니메이션을 조종할 수 있습니다. {{ domxref("event/AnimationEvent", "AnimationEvent") }} 로 나타내어지는 애니메이션 이벤트를 사용하여 애니메이션의 시작, 끝, 새로운 반복의 시작등을 감지할 수 있습니다. 이벤트가 발생할 때마다 이벤트의 종류와 어떤 애니메이션에서 발생한 것인지 알 수도 있습니다.</p>

<p>위의 움직이는 글자 예제를 수정하여 애니메이션 이벤트를 어떻게 사용하는지 알아봅시다. </p>

<pre class="brush: css">.slidein {
  -moz-animation-duration: 3s;
  -webkit-animation-duration: 3s;
  animation-duration: 3s;
  -moz-animation-name: slidein;
  -webkit-animation-name: slidein;
  animation-name: slidein;
  -moz-animation-iteration-count: 3;
  -webkit-animation-iteration-count: 3;
  animation-iteration-count: 3;
  -moz-animation-direction: alternate;
  -webkit-animation-direction: alternate;
  animation-direction: alternate;
}

@-moz-keyframes slidein {
  from {
    margin-left:100%;
    width:300%
  }

  to {
    margin-left:0%;
    width:100%;
  }
}

@-webkit-keyframes slidein {
  from {
    margin-left:100%;
    width:300%
  }

  to {
   margin-left:0%;
   width:100%;
 }
}

@keyframes slidein {
  from {
    margin-left:100%;
    width:300%
  }

  to {
   margin-left:0%;
   width:100%;
 }
}</pre>
<h4 id="애니메이션_이벤트_리스너_추가하기">애니메이션 이벤트 리스너 추가하기</h4>

<p>자바스크립트 코드를 사용하여 위에서 언급한 세개의 이벤트를 감지해 봅시다. <code>setup()</code> 함수는 애니메이션 이벤트 리스너를 추가하는 함수입니다. 문서가 로드되었을 때 이 함수를 실행할 것입니다.</p>

<pre class="brush: js">function setup() {
  var e = document.getElementById("watchme");
  e.addEventListener("animationstart", listener, false);
  e.addEventListener("animationend", listener, false);
  e.addEventListener("animationiteration", listener, false);

  var e = document.getElementById("watchme");
  e.className = "slidein";
}
</pre>

<p>어떻게 동작하는지 더 자세히 알고싶으면 {{ domxref("element.addEventListener()") }} 문서를 참고하세요. setup() 함수의 마지막 줄에서 엘리먼트의 <code>class</code> 를 "slidein"으로 지정하는 순간 애니메이션이 시작됩니다.</p>

<p>왜 이렇게 했을까요? 왜냐하면 <code>animationstart</code> 이벤트는 애니메이션이 시작되자마자 발생하므로 우리 코드에서는 이를 감지할 수 없습니다. 애니메이션이 시작될 때는 위의 코드가 실행되기 전이라 이벤트 리스너가 아직 추가되지 않았기 때문이지요. 따라서 이벤트 리스너를 먼저 추가하고 엘리먼트에 class를 지정하여 애니메이션을 시작했습니다.</p>

<h4 id="이벤트_받기">이벤트 받기</h4>

<p>각 이벤트가 발생할 때마다 <code>listener()</code> 함수로 넘겨집니다. 이 함수의 코드는 아래와 같습니다.</p>

<pre class="brush: js">function listener(e) {
  var l = document.createElement("li");
  switch(e.type) {
    case "animationstart":
      l.innerHTML = "Started: elapsed time is " + e.elapsedTime;
      break;
    case "animationend":
      l.innerHTML = "Ended: elapsed time is " + e.elapsedTime;
      break;
    case "animationiteration":
      l.innerHTML = "New loop started at time " + e.elapsedTime;
      break;
  }
  document.getElementById("output").appendChild(l);
}
</pre>

<p>이 코드 역시 굉장히 단순합니다. {{ domxref("event.type") }} 을 보고 어떤 이벤트가 발생했는지 확인합니다. 그리고 {{ HTMLElement("ul") }} (순서 없는 리스트)에 그 이벤트의 로그를 나타내는 엘리먼트를 추가합니다.</p>

<p>결과는 다음과 같습니다.</p>

<ul>
 <li>Started: elapsed time is 0</li>
 <li>New loop started at time 3.01200008392334</li>
 <li>New loop started at time 6.00600004196167</li>
 <li>Ended: elapsed time is 9.234000205993652</li>
</ul>

<p>이벤트가 발생한 시각이 위에서 지정한 애니메이션 시간과 굉장히 가깝지만 정확히 같지는 않다는걸 기억하세요. 또 애니메이션의 반복이 끝나는 순간에는  <code>animationiteration</code> 이벤트가 발생하지 않고 <code>animationend</code> 이벤트가 발생했다는걸 기억하세요.</p>

<h4 id="HTML_코드">HTML 코드 </h4>

<p>완벽을 위해 예제에서 사용한 HTML 코드도 첨부합니다. 여기에는 페이지 내용뿐만 아니라 이벤트 로깅을 위한 ul 엘리먼트도 있습니다. </p>

<pre class="brush: html">&lt;body onload="setup()"&gt;
  &lt;h1 id="watchme"&gt;Watch me move&lt;/h1&gt;
  &lt;p&gt;This example shows how to use CSS animations to make &lt;code&gt;h1&lt;/code&gt; elements
  move across the page.&lt;/p&gt;
  &lt;p&gt;In addition, we output some text each time an animation event fires, so you can see them in action.&lt;/p&gt;
  &lt;ul id="output"&gt;
  &lt;/ul&gt;
&lt;/body&gt;
</pre>

<p>{{EmbedLiveSample('애니메이션_이벤트_사용하기', '600', '300')}}</p>

<h2 id="더_보기">더 보기</h2>

<ul>
 <li>{{ domxref("AnimationEvent", "AnimationEvent") }}</li>
 <li><a href="/en-US/docs/CSS/CSS_animations/Detecting_CSS_animation_support" title="en/CSS/CSS animations/Detecting CSS animation support">Detecting CSS animation support</a></li>
</ul>
