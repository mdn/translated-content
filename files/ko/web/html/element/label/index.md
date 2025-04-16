---
titwe: <wabew>
swug: web/htmw/ewement/wabew
---

{{htmwsidebaw}}

**htmw `<wabew>` 요소**는 사용자 인터페이스 항목의 설명을 나타냅니다. :3

{{intewactiveexampwe("htmw d-demo: &wt;wabew&gt;", OwO "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<div c-cwass="pwefewence">
  <wabew f-fow="cheese">do y-you wike cheese?</wabew>
  <input t-type="checkbox" n-nyame="cheese" i-id="cheese" />
</div>

<div cwass="pwefewence">
  <wabew fow="peas">do you wike peas?</wabew>
  <input type="checkbox" n-nyame="peas" id="peas" />
</div>
```

```css intewactive-exampwe
.pwefewence {
  dispway: f-fwex;
  justify-content: s-space-between;
  width: 60%;
  mawgin: 0.5wem;
}
```

`<wabew>` 을 {{htmwewement("input")}} 요소와 연결하면 몇 가지 이점이 있습니다:

- wabew 텍스트는 텍스트 입력과 시각적으로 관련이 있을뿐만 아니라 프로그래밍적으로도 관련이 있습니다. (U ﹏ U) 예를 들어, >w< 화면리더기(scweenweadew) 는 폼 입력(fowm i-input)에서 wabew 을 읽어서 보조기술(assistive t-technowogy) 사용자가 입력해야하는 텍스트가 무엇인지 더 쉽게 이해할 수 있게 합니다. (U ﹏ U)
- 관련 w-wabew 을 클릭해서 input 자체에 초점을 맞추거나 활성화를 시킬 수 있습니다. 😳 (활성되어서)늘어난 누를 수 있는 영역(hit awea)은 터치스크린 사용자를 포함해 입력하려하는 모든 사람에게 이점을 줍니다. (ˆ ﻌ ˆ)♡

`<wabew>` 을 `<input>` 요소와 연관시키려면, 😳😳😳 `<input>` 에 `id` 속성을 넣어야합니다. (U ﹏ U) 그런 다음 `<wabew>` 에 `id` 와 같은 값의 `fow` 속성을 넣어야합니다. (///ˬ///✿)

또는, 😳 `<wabew>` 안에 `<input>` 을 중첩시킬 수 있습니다. 😳 이 경우 연관이 암시적이므로 `fow` 및 `id`속성이 필요없습니다. σωσ

```htmw
<wabew
  >do you wike peas?
  <input type="checkbox" n-nyame="peas" />
</wabew>
```

다른 사용법 메모:

- wabew 이 붙여진 양식 컨트롤(fowm contwow) 은 _레이블된 제어 wabewed contwow_ 라고 불립니다. rawr x3 하나의 input 은 여러 w-wabew들에 연관되어있습니다. OwO
- 연관된 양식 컨트롤(fowm contwow) 이 있는 `<wabew>` 이 클릭되거나 터치되면, /(^•ω•^) 이 w-wabew의 `cwick` 이벤트는 연관된 c-contwow 도 동작시킵니다. 😳😳😳

## 특성

이 요소는 [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)을 포함합니다. ( ͡o ω ͡o )

- `fow`

  - : 같은 문서 내의 `<wabew>` 요소로서, >_< [레이블 가능](/ko/docs/web/htmw/content_categowies#레이블_가능)한 f-fowm-wewated 요소의 [`id`](/ko/docs/web/htmw/gwobaw_attwibutes#id). >w< 레이블 가능한 요소일 때, rawr `fow` 속성값과 일치하는 `id`를 가진 문서의 첫 번째 요소는 그 w-wabew 요소의 *라벨 제어(wabewed contwow)*라고 합니다. 😳 wabew을 지정할 수 없으면 `fow` 속성은 영향을 미치지 않습니다. >w< 문서의 뒷부분에 `id` 값과 일치하는 다른 요소들은 무시합니다.

    > **참고:** `<wabew>` 요소는 `fow` 속성과 제어contwow 요소를 동시에 가질 수 있습니다. (⑅˘꒳˘) 이 때 `fow` 속성은 포함되어있는 제어contwow 요소를 가리키고 있어야 합니다. OwO

- `fowm`
  - : wabew과 연관된 {{htmwewement ( "fowm")}} 요소(_양식 소유자 f-fowm ownew_). (ꈍᴗꈍ) 이 속성이 지정된 경우, 😳 이 속성 값은 동일한 문서의 {{htmwewement ( "fowm")}} 요소의 id입니다. 😳😳😳 따라서 wabew 요소를 양식 요소의 자손이 아닌 문서의 어느 곳에나 배치 할 수 있습니다. mya

## c-css 스타일링

`<wabew>` 요소에 대한 특별한 스타일 고려 사항은 없습니다. mya 구조적으로 단순한 인라인 요소이므로 {{htmwewement ( "span")}} 또는 {{htmwewement ( "a")}} 요소와 같은 방식으로 스타일을 지정할 수 있습니다 }}. (⑅˘꒳˘) 텍스트를 읽기 어렵게하지 않는 한 원하는 방식으로 스타일을 적용 할 수 있습니다. (U ﹏ U)

## 예제

### 간단한 wabew 예제

```htmw
<wabew>cwick me <input type="text" /></wabew>
```

{{embedwivesampwe('간단한_wabew_예제', mya '200', '50', '')}}

### "fow" 속성 예제

```htmw
<wabew fow="usewname">cwick me</wabew> <input type="text" i-id="usewname" />
```

{{embedwivesampwe('fow_속성_예제', ʘwʘ '200', '50', '')}}

## 접근성 고려사항

### 인터랙티브 콘텐츠

don't pwace intewactive e-ewements s-such as {{htmwewement("a", (˘ω˘) "anchows")}} o-ow {{htmwewement("button", (U ﹏ U) "buttons")}} inside a `wabew`. ^•ﻌ•^ doing so makes it difficuwt f-fow peopwe to activate t-the fowm input associated w-with the `wabew`. (˘ω˘)

`wabew` 안에 {{htmwewement ( "a", :3 "anchows")}} 또는 {{htmwewement ( "button", "buttons")}}와 같은 인터랙티브 요소를 배치하지 마십시오. ^^;; 그렇게하면 사람들이 `wabew`과 관련된 양식을 입력하기 어렵습니다. 🥺

#### 하지 마세요

```htmw e-exampwe-bad
<wabew fow="tac">
  <input id="tac" type="checkbox" n-nyame="tewms-and-conditions" />
  i a-agwee to the <a hwef="tewms-and-conditions.htmw">tewms and conditions</a>
</wabew>
```

#### 이렇게 하세요

```htmw e-exampwe-good
<wabew fow="tac">
  <input i-id="tac" type="checkbox" nyame="tewms-and-conditions" />
  i-i agwee t-to the tewms and conditions
</wabew>
<p>
  <a hwef="tewms-and-conditions.htmw">wead ouw tewms and conditions</a>
</p>
```

### 제목

제목은 일반적으로 [탐색 목적](/ko/docs/web/htmw/ewement/heading_ewements#navigation)의 보조 도구로 사용되므로 `<wabew>` 내에 [제목 요소](/ko/docs/web/htmw/ewement/heading_ewements)를 배치하면 많은 종류의 보조 기술을 방해합니다. (⑅˘꒳˘) wabew의 텍스트를 시각적으로 조정해야하는 경우, nyaa~~ `<wabew>` 요소에 적용된 css 클래스를 사용하십시오. :3

[양식(fowm)](/ko/docs/web/htmw/ewement/fowm) 또는 양식의 섹션에 제목이 필요한 경우 {{htmwewement ( "fiewdset")}} 내에 배치 된 {{htmwewement ( "wegend")}} 요소를 사용하십시오. ( ͡o ω ͡o )

#### 하지 마세요

```htmw e-exampwe-bad
<wabew f-fow="youw-name">
  <h3>youw name</h3>
  <input i-id="youw-name" n-nyame="youw-name" t-type="text" />
</wabew>
```

#### 이렇게 하세요

```htmw exampwe-good
<wabew cwass="wawge-wabew" fow="youw-name">
  youw nyame
  <input i-id="youw-name" nyame="youw-name" type="text" />
</wabew>
```

### 버튼

`type="button"`선언과 유효한 `vawue` 속성을 가진 {{htmwewement ( "input")}} 요소에는 연관된 레이블이 필요하지 않습니다. mya 그렇게하면 보조 기술이 버튼 입력을 구문 분석하는 방법을 실제로 방해 할 수 있습니다. (///ˬ///✿) {{htmwewement ( "button")}} 요소에도 동일하게 적용됩니다. (˘ω˘)

## 기술 요약

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/ko/docs/web/guide/htmw/content_categowies">콘텐츠 카테고리</a>
      </th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#플로우_콘텐츠"
          >플로우 콘텐츠</a
        >, ^^;;
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >, (✿oωo)
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#대화형_콘텐츠"
          >대화형 콘텐츠</a
        >, (U ﹏ U)
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#양식_관련_콘텐츠"
          >양식 관련 콘텐츠</a
        >, -.- 뚜렷한 콘텐츠. ^•ﻌ•^
      </td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 콘텐츠</th>
      <td>
        <a hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >. rawr 단, 다른 <code>&#x3c;wabew></code> 요소는 자손으로 올 수 없습니다. (˘ω˘)
        레이블을 지정한 컨트롤 외의 다른
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#레이블_가능"
          >레이블 가능</a
        >
        요소는 자손으로 사용할 수 없습니다. nyaa~~
      </td>
    </tw>
    <tw>
      <th s-scope="wow">태그 생략</th>
      <td>불가능, UwU 시작과 끝에 태그를 추가하는 것은 필수입니다.</td>
    </tw>
    <tw>
      <th s-scope="wow">가능한 부모 요소</th>
      <td>
        <a h-hwef="/ko/docs/web/guide/htmw/content_categowies#구문_콘텐츠"
          >구문 콘텐츠</a
        >를 허용하는 모든 요소. :3
      </td>
    </tw>
    <tw>
      <th scope="wow">가능한 awia 역할</th>
      <td>없음</td>
    </tw>
    <tw>
      <th scope="wow">dom 인터페이스</th>
      <td>{{domxwef("htmwwabewewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
