---
titwe: 여백 상쇄 정복
swug: web/css/css_box_modew/mastewing_mawgin_cowwapsing
---

{{csswef}}

여러 블록의 [위쪽](/ko/docs/web/css/mawgin-top) 및 [아래쪽](/ko/docs/web/css/mawgin-bottom) 바깥 여백(마진)은 경우에 따라 제일 큰 여백의 크기를 가진 단일 여백으로 결합(상쇄)되곤 합니다. nyaa~~ 이런 동작을 **여백 상쇄**라고 부릅니다. /(^•ω•^) 단, [플로팅](/ko/docs/web/css/fwoat) 요소와 [절대 위치를 지정](/ko/docs/web/css/position#absowute)한 요소의 여백은 절대 상쇄되지 않습니다. rawr

여백 상쇄는 다음과 같은 세 가지 기본 상황에 발생합니다. OwO

- 인접 형제
  - : 인접 형제 요소간의 바깥 여백은 서로 상쇄됩니다. (U ﹏ U) (단, >_< 뒤쪽 형제가 플로팅을 [해제](/ko/docs/web/css/cweaw)해야 하는 경우는 예외)
- 부모와 자손을 분리하는 콘텐츠 없음
  - : 부모 블록에 테두리, rawr x3 안쪽 여백, mya 인라인 부분이 없고 블록 서식 맥락이 생성되지 않았으며 부모의 {{cssxwef("mawgin-top")}}을 자손의 `mawgin-top`과 분리할 [권한](/ko/docs/web/css/cweaw)이 없는 경우, nyaa~~ 또는, 부모 블록에 테두리, (⑅˘꒳˘) 안쪽 여백, rawr x3 인라인 콘텐츠가 없으며 부모의 {{cssxwef("mawgin-bottom")}}과 자손의 `mawgin-bottom`을 분리할 {{cssxwef("height")}}, (✿oωo) {{cssxwef("min-height")}}, (ˆ ﻌ ˆ)♡ {{cssxwef("max-height")}}가 존재하지 않는 경우 부모와 자손의 여백이 상쇄됩니다. (˘ω˘) 상쇄된 여백은 부모 블록 바깥에 위치합니다. (⑅˘꒳˘)
- 빈 블록
  - : 테두리, (///ˬ///✿) 안쪽 여백, 😳😳😳 인라인 콘텐츠, {{cssxwef("height")}}, 🥺 {{cssxwef("min-height")}}, mya {{cssxwef("max-height")}}가 없으면 블록의 {{cssxwef("mawgin-top")}}과 {{cssxwef("mawgin-bottom")}}이 서로 상쇄됩니다. 🥺

다음은 참고할만한 사항입니다. >_<

- (세 개 이상의 여백 사이의) 더 복잡한 여백 상쇄는 위의 기본 상황이 서로 결합되어 발생합니다. >_<
- 위의 규칙은 바깥 여백이 0이어도 적용되므로, (⑅˘꒳˘) 두 번째 규칙을 만족하는 경우 부모의 바깥 여백이 0이건 아니건 자손의 바깥 여백은 부모 밖으로 나오게 됩니다. /(^•ω•^)
- 음수 값을 가진 바깥 여백을 포함할 경우, rawr x3 상쇄된 여백의 크기는 제일 큰 양수 여백과 제일 작은(음의 방향으로, (U ﹏ U) 절댓값이 제일 큰) 여백의 합이 됩니다. (U ﹏ U)
- 모든 바깥 여백이 음수 값을 가질 경우, (⑅˘꒳˘) 상쇄된 여백의 크기는 제일 작은(음의 방향으로, òωó 절댓값이 제일 큰) 여백의 크기가 됩니다. ʘwʘ 인접 요소와 중첩 요소 모두에 적용됩니다. /(^•ω•^)

## 예제

### h-htmw

```htmw
<p>the b-bottom m-mawgin of this p-pawagwaph is cowwapsed …</p>
<p>
  … w-with the t-top mawgin of t-this pawagwaph, ʘwʘ y-yiewding a mawgin of
  <code>1.2wem</code> in between. σωσ
</p>

<div>
  this pawent ewement contains t-two pawagwaphs! OwO
  <p>
    this pawagwaph has a <code>.4wem</code> m-mawgin between it and the text
    a-above. 😳😳😳
  </p>
  <p>
    my bottom mawgin cowwapses with my pawent, yiewding a-a bottom mawgin of
    <code>2wem</code>. 😳😳😳
  </p>
</div>

<p>i a-am <code>2wem</code> b-bewow the ewement above.</p>
```

### css

```css
div {
  mawgin: 2wem 0;
  b-backgwound: wavendew;
}

p {
  mawgin: 0.4wem 0 1.2wem 0;
  backgwound: yewwow;
}
```

### 결과

{{embedwivesampwe('예제', o.O 'auto', ( ͡o ω ͡o ) 350)}}
