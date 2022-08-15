---
title: '@keyframes'
slug: Web/CSS/@keyframes
tags:
  - Animations
  - At-rule
  - CSS
  - Reference
translation_of: Web/CSS/@keyframes
---
<div>{{CSSRef}}</div>

<p><strong><code>@keyframes</code></strong> <a href="/ko/docs/Web/CSS/At-rule">@규칙</a>은 개발자가 애니메이션 중간중간의 특정 지점들을 거칠 수 있는 키프레임들을 설정함으로써 CSS 애니메이션 과정의 중간 절차를 제어할 수 있게 합니다. 이 룰은 브라우저가 자동으로 애니메이션을 처리하는 것 보다 더 세밀하게 중간 동작들을 제어할 수 있습니다.</p>

<p> </p>

<pre class="brush: css">@keyframes slidein {
  from {
    margin-left: 100%;
    width: 300%;
  }

  to {
    margin-left: 0%;
    width: 100%;
  }
}</pre>

<p><code>@keyframes</code> @규칙은 CSS 오브젝트 모델 인터페이스인 {{domxref("CSSKeyframesRule")}}를 통해서 접근합니다.</p>

<p>키프레임을 사용하려면 <code>@keyframes</code> 룰을 애니메이션과 키프레임 리스트를 매칭시킬 {{ cssxref("animation-name") }} 속성에서 사용할 이름과 함께 생성합니다. 각 <code>@keyframes</code> 룰은 키프레임 선택자의 스타일 리스트를 포함하고 있고, 각 리스트는 각 키프레임이 생성되고 키프레임의 스타일 정보를 포함하고 있는 지점에서 사용할 %로 구성됩니다.</p>

<p>키프레임은 순서대로 나열 가능합니다. 지정된 %의 순서대로 처리됩니다.</p>

<h3 id="유효한_키프레임_리스트">유효한 키프레임 리스트</h3>

<p>키 프레임 리스트가 유효하려면 최소한 0% 와 100% 같은 시간에 대한 규칙은 포함해야 합니다 (%가 의미하는 것은 애니메이션의 시작과 끝 상태를 의미). 만약 이 타임 오프셋이 정해져 있지 않으면, 키 프레임 선언이 무효합니다; 파서가 인식하지 않거나 애니메이션에서 사용되지 않습니다.</p>

<p>만약 키 프레임 룰에 애니메이션이 되지 않는 속성을 포함하면 이 속성은 무시가 됩니다. 애니메이션을 지원하는 속성들은 여전히 애니메이션이 됩니다.</p>

<h3 id="중복_해상도">중복 해상도</h3>

<p>만약 한개의 이름에 대해서 여러개의 키프레임 셋이 존재하면, 파서가 마지막으로 마주치는 키프레임 셋만 유효합니다. <code>@keyframes 룰은 연속되지 않기 때문에 한개의 룰 셋 이상을 적용하지 않습니다.</code></p>

<h3 id="키_프레임_밖에_속성이_지정된_경우">키 프레임 밖에 속성이 지정된 경우</h3>

<p>어떤 키 프레임에도 정의되지 않는 속성들은 애니메이션과는 완전 별도로 삽입되지 않는 경우를 제외하고는 삽입됩니다. 예를 들어,</p>

<pre class="brush: css">@keyframes identifier {
  0% { top: 0; left: 0; }
  30% { top: 50px; }
  68%, 72% { left: 50px; }
  100% { top: 100px; left: 100%; }
}
</pre>

<p>여기 {{ cssxref("top") }} 속성은 <code>0%</code>, <code>30%</code>, <code>100% 키 프레임을 이용하여 애니메이션 됩니다. </code>{{ cssxref("left") }} 속성은 <code>0%</code>, <code>68%</code>, <code>100% 키 프레임을 사용합니다.</code></p>

<p><code>0%</code> 와 <code>100%</code> 키 프레임 모두에 정의된 속성들만 애니메이션 동작을 합니다. 이 둘 중 아무것도 포함되지 않은 속성은 애니메이션 연속을 지속하기 위한 시작 값으로 사용됩니다.</p>

<h3 id="키_프레임이_여러번_정의_된_경우">키 프레임이 여러번 정의 된 경우</h3>

<p>스펙에서는 모든 속성이 각 키 프레임이 지정된 게 아니라 키 프레임이 여러번 정의 된 경우에는 가장 최근의 키프레임에 선언된 값들만 유효하다고 나와 있습니다. 예를 들어,</p>

<pre class="brush: css">@keyframes identifier {
  0% { top: 0; }
  50% { top: 30px; left: 20px; }
  50% { top: 10px; }
  100% { top: 0; }
}
</pre>

<p>이 예제를 보면 <code>50%</code> 키프레임에서 <code>top: 10px 이고 다른 값들은 모두 무시됩니다.</code></p>

<p>{{ non-standard_inline }} 키 프레임 효과 연속은 파이어폭스 14부터 지원됩니다. 이 의미는 위 예제의 경우 50% 키 프레임에서 왼쪽 : 20px 값이 고려된다는 의미입니다. 이러한 기능이 스펙에는 아직 정의가 되어있진 않지만, 현재 도입에 대한 토론이 진행 중입니다.</p>

<h3 id="키프레임에서_!important">키프레임에서 !important</h3>

<p><code>키프레임에서 !important</code> 속성을 이용한 정의는 모두 무시됩니다.</p>

<pre class="brush: css">@keyframes important1 {
   from { margin-top: 50px; }
   50%   { margin-top: 150px !important; } /* ignored */
   to     { margin-top: 100px; }
}

@keyframes important2 {
  from { margin-top: 50px;
                 margin-bottom: 100px; }
   to     { margin-top: 150px !important; /* ignored */
                 margin-bottom: 50px; }
}
</pre>

<h2 id="Syntax">Syntax</h2>

<h3 id="Values">Values</h3>

<dl>
 <dt><code>&lt;identifier&gt;</code></dt>
 <dd>A name identifying the keyframe list. This must match the identifier production in CSS syntax.</dd>
 <dt><code>from</code></dt>
 <dd>A starting offset of <code>0%</code>.</dd>
 <dt><code>to</code></dt>
 <dd>An ending offset of <code>100%</code>.</dd>
 <dt>{{cssxref("&lt;percentage&gt;")}}</dt>
 <dd>A percentage of the time through the animation sequence at which the specified keyframe should occur.</dd>
</dl>

<h3 id="Formal_syntax">Formal syntax</h3>

{{csssyntax}}

<h2 id="Examples">Examples</h2>

<p>See <a href="/en/CSS/CSS_animations" title="en/CSS/CSS_animations">CSS animations</a> for examples.</p>

<h2 id="Specifications">Specifications</h2>

{{Specifications}}

<h2 id="Browser_Compatibility" name="Browser_Compatibility">Browser compatibility</h2>

<p>{{Compat("css.at-rules.keyframes")}}</p>

<h2 id="Notes">Notes</h2>

<ol>
 <li>@keyframes not supported in an inline or scoped stylesheet in Firefox ({{bug(830056)}}).</li>
</ol>

<h2 id="See_also">See also</h2>

<ul>
 <li><a href="/en-US/docs/CSS/Tutorials/Using_CSS_animations" title="Tutorial about CSS animations">Using CSS animations</a></li>
 <li>{{domxref("AnimationEvent")}}</li>
</ul>
