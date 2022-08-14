---
title: Screen.lockOrientation
slug: Web/API/Screen/lockOrientation
translation_of: Web/API/Screen/lockOrientation
---
<div>{{APIRef("CSSOM View")}}</div>

<div>{{Deprecated_header}}</div>

<p><code>lockOrientation</code> 함수는 지정된 방향으로 화면을 고정시킨다.</p>

<div class="note">
<p><strong>Note:</strong> 이 함수는 오직 설치된 웹앱 또는 <a href="/en-US/docs/Web/Guide/DOM/Using_full_screen_mode" title="/en-US/docs/Web/Guide/DOM/Using_full_screen_mode">full-screen mode</a> 의 웹페이지에서만 동작한다..</p>
</div>

<h2 id="Syntax" name="Syntax">Syntax</h2>

<pre class="eval">var locked = window.screen.lockOrientation(<em>orientation</em>);
</pre>

<h3 id="Example" name="Example">Parameters</h3>

<dl>
 <dt><em>orientation</em></dt>
 <dd>화면을 고정 시킬 방향. 문자열 또는 문자열의 배열이다. 여러 문자열을 지정하면 지정한 방향으로만 회전된다.</dd>
</dl>

<p>다음의 문자열들은 당신이 지정할 수 있는 방향들을 나타낸다.</p>

<dl>
 <dt><code>portrait-primary</code></dt>
 <dd>기본 세로 모드 일 때 화면의 방향을 나타낸다. 화면은 화면이 정상위치 (normal position)가 세로이고 세로로 고정 되어 있으면 기본 세로 모드 (primary portrait mode) 로 간주 된다. 만약 장치의 정상위치 (normal position)가 가로 모드 이면 장치가 시계방향으로 90° 돌렸을 때 이다. 정상 위치 (normal position) 는 장치에 의존한다.</dd>
 <dt><code>portrait-secondary</code></dt>
 <dd>보조 세로 모드 일 때 화면의 방향을 나타낸다.  화면은 정상위치에서 180<span style="line-height: inherit;">° 로 고정 되어 있을 때 </span><span style="line-height: inherit;">보조 세로 모드로 간주된다. 만약 정상위치가 가로 인 경우 장치가 반시계 방향으로 90° 회전 했을 때 이다. 정상 위치 (normal position) 는 장치에 의존한다.</span></dd>
 <dt><code>landscape-primary</code></dt>
 <dd>기본 가로 모드 일 때 화면의 방향을 나타낸다. 화면은 정상위치 (normal position)가 가로이고 가로로 고정 되어 있으면 <span style="line-height: inherit;">기본 가로 모드 (primary landscape mode) 로 </span><span style="line-height: inherit;">간주된다. 만약 장치의 정상위치 (normal position)가 세로이면 장치가 시계방향으로 90° 돌렸을 때 이다. 정상 위치 (normal position) 는 장치에 의존한다.</span></dd>
 <dt><code>landscape-secondary</code></dt>
 <dd>보조 가로 모드 일 때 화면의 방향을 나타낸다. 화면은 정상위치에서 180° 로 고정 되어 있을 때 보조 가로 모드 (secondary landscape mode) 로 간주된다. 또는 정상위치가 세로 인 경우 장치가 반시계 방향으로 90° 회전 했을 때 이다. 정상 위치 (normal position) 는 장치에 의존한다.</dd>
 <dt><code>portrait</code></dt>
 <dd><code>portrait-primary</code> 와 <code>portrait-secondary 둘 다 이다.</code></dd>
 <dt><code>landscape</code></dt>
 <dd><code>landscape-primary</code> 와 <code>landscape-secondary 둘 다 이다.</code></dd>
</dl>

<div class="note">
<p><strong>Note:</strong> 한번에 여러개의 고정 값을 가질 수 있다. 만약 한방향으로만 설정 하면 화면의 방향은 unlock 하기 전 까지는 절대로 변하지 않는다. 그렇지 않다면 (여러값을 가진 다면) 지정 된 방향들로 화면의 방향이 변할 것이다.</p>
</div>

<h3 id="Example" name="Example">Return value</h3>

<p>성공적으로 고정 되었을 경우 <code>true</code> 를 반환한다. 고정 될 수 없다면 <code>false</code> 를 반환한다.</p>

<h2 id="Example" name="Example">Example</h2>

<pre class="eval">if (window.screen.mozLockOrientation("landscape-primary")) {
  // orientation was locked
} else {
  // orientation lock failed
}
</pre>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_compatibility">Browser compatibility</h2>

<p>{{Compat("api.Screen.lockOrientation")}}</p>

<h2 id="See_also">See also</h2>

<ul>
 <li>{{domxref("window.screen.orientation")}}</li>
 <li>{{domxref("window.screen.unlockOrientation()")}}</li>
 <li>{{domxref("window.screen.onorientationchange")}}</li>
 <li><a href="/ko/docs/Managing_screen_orientation" title="/ko/docs/Managing_screen_orientation">Managing screen orientation</a></li>
</ul>
