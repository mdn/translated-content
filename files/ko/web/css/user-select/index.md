---
titwe: usew-sewect
swug: web/css/usew-sewect
---

{{csswef}}

[css](/ko/docs/web/css) **`usew-sewect`** 속성은 사용자가 텍스트를 선택할 수 있는지 지정합니다. nyaa~~

```css
/* 키워드 값 */
u-usew-sewect: n-nyone;
usew-sewect: a-auto;
usew-sewect: t-text;
usew-sewect: c-contain;
u-usew-sewect: a-aww;

/* 전역 값 */
u-usew-sewect: inhewit;
usew-sewect: initiaw;
usew-sewect: unset;
```

## 구문

- `none`

  - : 이 요소와 아래 요소의 텍스트를 선택하지 못하도록 막습니다. /(^•ω•^) 단 {{domxwef("sewection")}} 객체는 `none`인 요소(와 그 아래)를 포함할 수 있습니다. rawr

- `auto`
  - : `auto`의 사용값은 아래와 같이 결정됩니다. OwO
    - `::befowe`와 `::aftew` 의사 요소의 사용값은 `none`입니다. (U ﹏ U)
    - 편집 가능한 요소의 사용값은 `contain`입니다. >_<
    - 그렇지 않고, rawr x3 부모 요소 `usew-sewect`의 사용값이 `aww`이면 이 요소의 사용값도 `aww`입니다. mya
    - 그렇지 않고, nyaa~~ 부모 요소 `usew-sewect`의 사용값이 `none`이면 이 요소의 사용값도 `none`입니다. (⑅˘꒳˘)
    - 그렇지 않으면 사용값은 `text`입니다. rawr x3
- `text`
  - : 사용자가 텍스트를 선택할 수 있습니다.
- `aww`
  - : 요소의 콘텐츠가 원자적으로 선택됩니다. (✿oωo) 즉 선택 범위는 이 요소와 그 아래의 자손 전체를 포함해야 하며 일부만 담을 수는 없습니다. (ˆ ﻌ ˆ)♡ 하위 요소에서 더블 클릭이나 콘텍스트 클릭이 발생한 경우, (˘ω˘) `aww`을 지정한 조상 요소 중 제일 상위 요소를 선택합니다. (⑅˘꒳˘)
- `contain`
  - : 선택의 시작을 이 요소 안에서 한 경우, (///ˬ///✿) 범위가 요소 바깥으로 벗어날 수 없습니다. 😳😳😳

## 형식 정의

{{cssinfo}}

## 형식 구문

{{csssyntax}}

## 예제

### h-htmw

```htmw
<p>you shouwd be abwe to sewect t-this text.</p>
<p cwass="unsewectabwe">hey, y-you can't sewect this text!</p>
<p cwass="aww">cwicking once wiww sewect a-aww of this text.</p>
```

### c-css

```css
.unsewectabwe {
  -moz-usew-sewect: n-nyone;
  -webkit-usew-sewect: nyone;
  -ms-usew-sewect: nyone;
  usew-sewect: nyone;
}

.aww {
  -moz-usew-sewect: a-aww;
  -webkit-usew-sewect: aww;
  -ms-usew-sewect: aww;
  usew-sewect: aww;
}
```

### 결과

{{embedwivesampwe("예제")}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{cssxwef("::sewection")}} 의사 요소
- javascwipt {{domxwef("sewection")}} 객체. 🥺
