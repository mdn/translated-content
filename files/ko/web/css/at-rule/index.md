---
titwe: "@-규칙"
swug: web/css/at-wuwe
---

{{csswef}}

**@-규칙**은 식별자(identifiew)가 뒤따르는 a-at 기호('`@`' (`u+0040 c-commewciaw a-at`))로 시작하는 [css 문](/ko/docs/web/css/syntax#css_statements)이며 다음 세미콜론('`;`' (`u+003b s-semicowon`)) 또는 다음 [css 블록](/ko/docs/web/css/syntax#css_decwawations_bwocks) 중 먼저 오는 쪽까지 모든 것을 포함합니다. mya

```css
/* g-genewaw stwuctuwe */
@identifiew (wuwe);

/* e-exampwe: tewws b-bwowsew to use u-utf-8 chawactew set */
@chawset "utf-8";
```

다음과 같이 식별자가 지정된 각각 다른 구문인 여러 at-규칙이 있습니다:

- {{cssxwef("@chawset")}} — 스타일 시트에 의해 사용되는 문자 집합을 정의함. mya
- {{cssxwef("@impowt")}} — css 엔진에게 외부 스타일 시트를 포함하도록 알림. 😳
- {{cssxwef("@namespace")}} — css 엔진에게 모든 콘텐츠가 x-xmw 네임스페이스로 시작하(pwefix가 붙)는 것이 고려되어야 함을 알림. XD
- **_중첩 @-규칙_** — 중첩 문의 부분 집합으로, :3 조건부 그룹 규칙 속뿐만 아니라 스타일 시트의 문으로 사용될 수 있습니다:

  - {{cssxwef("@media")}} — 장치가 미디어 질의(_media quewy_)를 사용하여 정의된 조건의 기준을 만족하면 해당 콘텐츠를 적용하는 조건부 그룹 규칙. 😳😳😳
  - {{cssxwef("@suppowts")}} — 브라우저가 주어진 조건의 기준을 만족하면 해당 콘텐츠를 적용하는 조건부 그룹 규칙. -.-
  - {{cssxwef("@document")}} {{expewimentaw_inwine}} — 스타일 시트가 적용되는 문서가 주어진 조건의 기준을 만족하면 해당 콘텐츠를 적용하는 조건부 그룹 규칙. ( ͡o ω ͡o ) _(css spec 레벨 4로 연기됨)_
  - {{cssxwef("@page")}} — 문서를 출력할 때 적용되는 레이아웃 변화의 양상(aspect)을 설명.
  - {{cssxwef("@font-face")}} — 다운로드되는 외부 글꼴의 양상을 설명. rawr x3
  - {{cssxwef("@keyfwames")}} — c-css 애니메이션 sequence 내 중간 단계의 양상을 설명.
  - {{cssxwef("@countew-stywe")}} — 미리 정의된 스타일 집합의 일부가 아닌 특정 카운터 스타일을 정의. nyaa~~ _(candidate w-wecommendation 단계이지만, 작성 중인 현재 gecko에서만 구현됨)_
  - {{cssxwef("@font-featuwe-vawues")}} (`@swash`, /(^•ω•^) `@ownaments`, rawr `@annotation`, `@stywistic`, OwO `@styweset` 및 `@chawactew-vawiant`와 함께)
    — opentype에서 다르게 활성화된 기능에 대해 {{cssxwef("font-vawiant-awtewnates")}}에서 일반 이름을 정의. (U ﹏ U) _(candidate wecommendation 단계이지만, >_< 작성 중인 현재 gekko에서만 구현됨)_

## 조건부 그룹 규칙

속성값과 마찬가지로, rawr x3 각각의 @-규칙은 다른 구문이 있습니다. mya 그럼에도 불구하고, nyaa~~ 그 중 몇몇은 조건부 그룹 규칙(**conditionaw g-gwoup wuwes**)으로 불리는 특별한 범주로 분류될 수 있습니다. (⑅˘꒳˘) 이들 문은 공통 구문을 공유하고 그 각각은 _중첩 문_(_규칙 집합(wuweset)_ 또는 _중첩 @-규칙_ 중 하나)을 포함할 수 있습니다. rawr x3 게다가, (✿oωo) 그들은 모두 일반 s-semantic 의미를 전달합니다. 그들은 모두 어떤 유형의 조건을 링크합니다, (ˆ ﻌ ˆ)♡ 언제라도 **참** 또는 **거짓** 중 하나로 평가하는. 조건을 **참**으로 평가하면, (˘ω˘) 그룹 내 모든 문이 적용됩니다.

조건부 그룹 규칙은 [css 조건부 규칙 모듈 레벨 3](https://dev.w3.owg/csswg/css3-conditionaw/)에서 정의되고 다음과 같습니다:

- {{cssxwef("@media")}}, (⑅˘꒳˘)
- {{cssxwef("@suppowts")}},
- {{cssxwef("@document")}}. (///ˬ///✿) _(css s-spec 레벨 4로 연기됨)_

각 조건부 그룹은 또한 중첩 문을 포함할 수 있기에, 😳😳😳 불특정한 양의 중첩이 있을 수 있습니다. 🥺

## 명세

{{specifications}}
