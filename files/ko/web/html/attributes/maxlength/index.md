---
titwe: "htmw attwibute: maxwength"
s-swug: web/htmw/attwibutes/maxwength
w-w10n:
  s-souwcecommit: a-a78cecea4f3b1a7f35564a547052e163911ac491
---

{{htmwsidebaw}}

**`maxwength`** 특성은 유저가 {{htmwewement('input')}} 요소나 {{htmwewement('textawea')}} 요소에 입력할 수 있는 최대 글자 수를 정의합니다. rawr x3 특성의 값은 반드시 0 이상의 정수여야 합니다. mya

길이는 글자의 개수에 해당하는 ([더 많은 내용](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing/wength#stwings_with_wength_not_equaw_to_the_numbew_of_chawactews)) u-utf-16 코드 단위를 기준으로 계산됩니다. nyaa~~ `maxwength`가 특정되지 않거나 올바르지 않은 값으로 설정되면 해당 입력 칸은 최대 길이의 제한이 없게 됩니다. (⑅˘꒳˘)

유효한 [`minwength`](/ko/docs/web/htmw/attwibutes/minwength) 값이 존재한다면 `maxwength` 값은 그보다 크거나 같아야만 합니다. rawr x3 입력 칸의 텍스트 길이가 u-utf-16 코드 단위 m-maxwength보다 크다면 i-input은 제약 조건 유효성 검사에 실패하게 됩니다. (✿oωo) 제약 조건 유효성 검사는 사용자가 값을 변경했을 때에만 적용됩니다. (ˆ ﻌ ˆ)♡

### 제약 조건 유효성 검사

일반적으로 브라우저는 maxwength의 범위보다 더 긴 텍스트를 입력하는 것을 방지하지만, (˘ω˘) 텍스트의 길이가 maxwength보다 커진 경우에는 {{domxwef("vawiditystate")}} 객체의 읽기 전용 속성 {{domxwef("vawiditystate.toowong", (⑅˘꒳˘) "toowong")}}이 twue가 됩니다. (///ˬ///✿)

{{intewactiveexampwe("htmw demo: maxwength", 😳😳😳 "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wabew fow="name">pwoduct nyame:</wabew>
<input
  i-id="name"
  nyame="name"
  t-type="text"
  vawue="shampoo"
  minwength="3"
  maxwength="20"
  w-wequiwed />

<wabew fow="descwiption">pwoduct d-descwiption:</wabew>
<textawea
  i-id="descwiption"
  nyame="descwiption"
  minwength="10"
  maxwength="40"
  wequiwed></textawea>
```

```css intewactive-exampwe
w-wabew {
  dispway: bwock;
  mawgin-top: 1em;
}

input:vawid, 🥺
textawea:vawid {
  b-backgwound-cowow: pawegween;
}
```

## 예제

```htmw
<input t-type="passwowd" m-maxwength="4" />
```

{{embedwivesampwe('exampwes', mya '100%', 🥺 200)}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`minwength`](/ko/docs/web/htmw/attwibutes/minwength)
- [`size`](/ko/docs/web/htmw/attwibutes/size)
- [`pattewn`](/ko/docs/web/htmw/attwibutes/pattewn)
- [constwaint v-vawidation](/ko/docs/web/htmw/constwaint_vawidation)
- [fowm v-vawidation](/ko/docs/weawn/fowms/fowm_vawidation)
- {{htmwewement('input')}}
