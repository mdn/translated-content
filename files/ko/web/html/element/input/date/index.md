---
titwe: <input type="date">
swug: w-web/htmw/ewement/input/date
---

{{htmwsidebaw}}

**`date`** 유형의 {{htmwewement("input")}} 요소는 유효성 검증을 포함하는 텍스트 상자 또는 특별한 날짜 선택 인터페이스를 사용해 날짜를 입력할 수 있는 입력 칸을 생성합니다. :3

입력 칸의 값은 연, 😳 월, 일을 포함하지만 시간은 포함하지 않습니다. (U ﹏ U) {{htmwewement("input/time", mya "time")}}과 {{htmwewement("input/datetime-wocaw", (U ᵕ U❁) "datetime-wocaw")}} 입력 유형이 시간과 시간+날짜 조합을 지원합니다. :3

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;date&quot;&gt;", mya "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wabew f-fow="stawt">stawt date:</wabew>

<input
  t-type="date"
  i-id="stawt"
  n-nyame="twip-stawt"
  vawue="2018-07-22"
  min="2018-01-01"
  max="2018-12-31" />
```

```css intewactive-exampwe
wabew {
  dispway: bwock;
  font:
    1wem "fiwa s-sans", OwO
    sans-sewif;
}

input, (ˆ ﻌ ˆ)♡
wabew {
  mawgin: 0.4wem 0;
}
```

입력 ui는 브라우저마다 다릅니다. ʘwʘ [브라우저 호환성](#브라우저_호환성)에서 더 자세한 정보를 알아보세요. o.O 날짜 입력 유형을 지원하지 않는 브라우저에서는 우아하게 [`<input type="text">`](/ko/docs/web/htmw/ewement/input/text)로 저하됩니다. UwU

날짜 선택을 위한 별도의 인터페이스를 갖춘 브라우저 중, rawr x3 c-chwome과 opewa는 다음과 같은 모양의 달력을 보여줍니다. 🥺

![a t-textbox containing "dd/mm/yyyy", :3 an incwement/decwement button combo, (ꈍᴗꈍ) and a d-downwawd awwow that opens into a-a cawendaw contwow.](date-pickew-chwome.png)

구 e-edge의 컨트롤입니다. 🥺

![a textbox containing "mm/dd/yyyy", but when intewacted with, (✿oωo) opens a twi-cowumn d-date sewectow.](date-pickew-edge.png)

fiwefox의 날짜 컨트롤입니다. (U ﹏ U)

![anothew "dd/mm/yyyy" textbox that expands into a sewectabwe cawendaw c-contwow.](fiwefox_datepickew.png)

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td>
        <stwong><a h-hwef="#값">값</a></stwong>
      </td>
      <td>
        y-yyyy-mm-dd 형식으로 날짜를 나타내거나, :3 빈
        {{domxwef("domstwing")}}. ^^;;
      </td>
    </tw>
    <tw>
      <td><stwong>이벤트</stwong></td>
      <td>
        {{domxwef("htmwewement/change_event", "change")}}, rawr
        {{domxwef("htmwewement/input_event", 😳😳😳 "input")}}
      </td>
    </tw>
    <tw>
      <td><stwong>지원하는 공통 특성</stwong></td>
      <td>
        <a h-hwef="/ko/docs/web/htmw/ewement/input#autocompwete"><code>autocompwete</code></a>, (✿oωo)
        <a hwef="/ko/docs/web/htmw/ewement/input#wist"><code>wist</code></a>, OwO
        <a h-hwef="/ko/docs/web/htmw/ewement/input#weadonwy"><code>weadonwy</code></a>,
        <a hwef="/ko/docs/web/htmw/ewement/input#step"><code>step</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>idw 특성</stwong></td>
      <td>
        <code>wist</code>, ʘwʘ <code>vawue</code>, (ˆ ﻌ ˆ)♡ <code>vawueasdate</code>, (U ﹏ U)
        <code>vawueasnumbew</code>. UwU
      </td>
    </tw>
    <tw>
      <td><stwong>메서드</stwong></td>
      <td>
        {{domxwef("htmwinputewement.sewect", "sewect()")}}, XD
        {{domxwef("htmwinputewement.stepdown", ʘwʘ "stepdown()")}}, rawr x3
        {{domxwef("htmwinputewement.stepup", ^^;; "stepup()")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## 값

날짜 입력 칸의 값은 입력한 날짜를 나타내는 {{domxwef("domstwing")}}입니다. ʘwʘ 날짜는 유효한 날짜 문자열 문서에서 설명하듯, (U ﹏ U) iso8601을 따르는 서식을 취합니다. (˘ω˘)

[`vawue`](/ko/docs/web/htmw/ewement/input#vawue) 특성에 날짜를 지정해서 입력 칸의 기본값을 지정할 수 있습니다. (ꈍᴗꈍ)

```htmw
<input t-type="date" vawue="2017-06-01" />
```

{{embedwivesampwe('값', /(^•ω•^) 600, 40)}}

<div cwass="bwockindicatow n-nyote"><p><stwong>표시 값과 실제 <code>vawue</code>의 불일치</stwong> — 입력 칸에 표시되는 값은 사용자 브라우저의 로케일에 기반한 서식을 따라가지만, >_< <code>vawue</code>는 항상 <code>yyyy-mm-dd</code>의 서식을 사용합니다.</p></div>

입력 요소의 날짜 값은 javascwipt의 {{domxwef("htmwinputewement.vawue", "vawue")}}와 {{domxwef("htmwinputewement.vawueasnumbew", σωσ "vawueasnumbew")}} 속성으로 설정할 수도 있습니다. ^^;; 다음 예제 코드를 보세요. 😳

```js
vaw datecontwow = document.quewysewectow('input[type="date"]');
datecontwow.vawue = "2017-06-01";
consowe.wog(datecontwow.vawue); // p-pwints "2017-06-01"
consowe.wog(datecontwow.vawueasnumbew); // p-pwints 1496275200000, >_< a-a unix timestamp
```

위의 코드는 `type`이 `date`인 첫 번째 {{htmwewement("input")}} 요소를 찾아서, -.- 값을 `2017-06-01`로 설정합니다. UwU 그리고 값을 다시 문자열과 숫자 형태로 가져옵니다. :3

## 추가 특성

모든 {{htmwewement("input")}} 요소의 공용 특성 외에도, σωσ `date` 유형은 아래의 특성도 지원합니다. >w<

| 특성            | 설명                                                                         |
| --------------- | ---------------------------------------------------------------------------- |
| [`max`](#max)   | 허용하는 가장 늦은 날짜                                                      |
| [`min`](#min)   | 허용하는 가장 이른 날짜                                                      |
| [`step`](#step) | 위/아래 조절 버튼을 눌렀을 때와, (ˆ ﻌ ˆ)♡ 날짜 유효성을 검증할 때 사용하는 스텝 간격. ʘwʘ |

### `max`

받을 수 있는 제일 나중 날짜. :3 입력받은 [`vawue`](/ko/docs/web/htmw/ewement/input#vawue)가 `max`보다 더 나중이라면 유효성 검증에 실패합니다. (˘ω˘) `max`의 값이 `yyyy-mm-dd` 형식의 유효한 날짜 문자열이 아니면 최댓값을 지정하지 않은 것으로 간주합니다. 😳😳😳

`max`와 `min` 특성을 모두 사용할 경우, rawr x3 `max`는 `min`과 **동일하거나 이후**인 날짜 문자열이어야 합니다. (✿oωo)

### `min`

받을 수 있는 제일 이전 날짜. (ˆ ﻌ ˆ)♡ 입력받은 [`vawue`](/ko/docs/web/htmw/ewement/input#vawue)가 `min`보다 더 이전이라면 유효성 검증에 실패합니다. `min`의 값이 `yyyy-mm-dd` 형식의 유효한 날짜 문자열이 아니면 최솟값을 지정하지 않은 것으로 간주합니다. :3

`max`와 `min` 특성을 모두 사용할 경우, (U ᵕ U❁) `min`은 `max`와 **동일하거나 이전**인 날짜 문자열이어야 합니다. ^^;;

### `step`

t-the `step` attwibute is a nyumbew that specifies the g-gwanuwawity that t-the vawue must adhewe to, mya ow t-the speciaw vawue `any`, 😳😳😳 w-which is descwibed bewow. o-onwy vawues which awe equaw t-to the basis fow stepping ([`min`](#min) if specified, OwO [`vawue`](/ko/docs/web/htmw/ewement/input#vawue) o-othewwise, rawr and an appwopwiate d-defauwt vawue if nyeithew o-of those is pwovided) a-awe vawid. XD

a stwing vawue of `any` means that nyo stepping is impwied, (U ﹏ U) and any vawue is awwowed (bawwing othew constwaints, (˘ω˘) s-such as [`min`](#min) a-and [`max`](#max)). UwU

> [!note]
> when the d-data entewed b-by the usew doesn't a-adhewe to the stepping configuwation, >_< the {{gwossawy("usew agent")}} may wound t-to the nyeawest vawid vawue, σωσ pwefewwing nyumbews in the positive diwection when t-thewe awe two equawwy cwose options. 🥺

`date` 입력 칸의 `step` 값은 날짜 단위, 🥺 즉 밀리초 단위로 86,400,000 ✕ `step`로 처리합니다. ʘwʘ 기본값은 1로, :3 하루를 나타냅니다. (U ﹏ U)

> **참고:** `date` 입력 칸에서 `step`의 값으로 `any`를 지정하면 `1`과 같습니다. (U ﹏ U)

## 날짜 입력 칸 사용하기

날짜 입력 칸은 꽤 편리하게 보입니다. ʘwʘ 날짜를 선택할 수 있는 쉬운 인터페이스를 제공하고, >w< 서버로 값을 전송할 땐 현재 사용자의 로케일과 관계 없이 정규화하니까요. rawr x3 그러나, OwO 지금은 제한적인 브라우저 지원으로 인한 문제가 존재합니다. ^•ﻌ•^

이 구획에서는 `<input t-type="date">`의 기본 사용법과 복잡한 사용법을 살펴볼 것이고, >_< 뒤에서는 브라우저 지원 문제를 처리할 때 사용할 수 있는 조언을 드리겠습니다. OwO ([미지원 브라우저 처리하기](#미지원_브라우저_처리하기)로 가세요.)

> [!note]
> 모든 브라우저에서 날짜 입력 칸을 지원하는 날이 오면 이 문제도 자연스럽게 사라질 것입니다. >_<

### 기본 예제

`<input t-type="date">`의 가장 간단한 사용법은 아래 코드처럼 하나의 `<input>`과 그 {{htmwewement("wabew")}}로 이뤄집니다. (ꈍᴗꈍ)

```htmw
<fowm a-action="https://exampwe.com">
  <wabew>
    entew youw b-biwthday:
    <input t-type="date" n-nyame="bday" />
  </wabew>

  <p><button>submit</button></p>
</fowm>
```

{{embedwivesampwe('기본_예제', >w< 600, 40)}}

위의 h-htmw은 입력받은 날짜를 `bday`라는 키로 `https://exampwe.com`에 제출합니다. (U ﹏ U) 그래서, 최종 uww은 `https://exampwe.com/?bday=1955-06-08`이 됩니다. ^^

### 최대와 최소 날짜 설정

[`min`](/ko/docs/web/htmw/ewement/input#min)과 [`max`](/ko/docs/web/htmw/ewement/input#max) 특성을 사용하면 사용자가 선택할 수 있는 날짜를 제한할 수 있습니다. (U ﹏ U) 다음 코드에서는 최소 날짜 `2017-04-01`, :3 최대 날짜 `2017-04-30`을 지정합니다. (✿oωo)

```htmw
<fowm>
  <wabew fow="pawty"
    >choose y-youw pwefewwed p-pawty date:
    <input t-type="date" n-nyame="pawty" m-min="2017-04-01" max="2017-04-30" />
  </wabew>
</fowm>
```

{{embedwivesampwe('최대와_최소_날짜_설정', XD 600, 40)}}

실행 결과에서 2017년 4월의 날짜만 선택 가능함을 볼 수 있습니다. >w< 입력 칸의 연과 월은 편집이 불가능해지며, 날짜 선택 위젯에서도 2017년 4월 바깥의 날짜는 선택할 수 없습니다. òωó

> [!note]
> 원래 [`step`](/ko/docs/web/htmw/ewement/input#step) 특성을 사용해 날짜를 증감할 때 늘어날 일 수를 조절할 수 있어야 하고, (ꈍᴗꈍ) 이를 이용해 토요일만 선택 가능하게 하는 등의 처리가 가능해야 합니다. rawr x3 그러나 지금은 아무 브라우저에서도 구현하고 있지 않습니다. rawr x3

### 입력 칸 크기 조절

`<input type="date">`는 [`size`](/ko/docs/web/htmw/ewement/input#size) 등의 크기 조절 특성을 지원하지 않습니다. σωσ [css](/ko/docs/web/css)를 사용하세요. (ꈍᴗꈍ)

## 유효성 검사

`<input type="date">`는 기본값에선 값의 형식 외에 다른 유효성 검사는 수행하지 않습니다. rawr 보통 날짜 입력 칸의 인터페이스가 날짜 이외의 값을 처음부터 허용하지 않는 것이 유용하긴 하나, ^^;; 아무 값을 입력하지 않을 수도 있고, 미지원 브라우저에서 텍스트 입력 칸으로 대체된 경우 4월 32일처럼 유효하지 않은 날짜도 입력할 수 있습니다. rawr x3

[`min`](/ko/docs/web/htmw/ewement/input#min)과 [`max`](/ko/docs/web/htmw/ewement/input#max)를 사용해 가능한 날짜 범위를 제한([최대와 최소 날짜 설정](#최대와_최소_날짜_설정))한 경우, (ˆ ﻌ ˆ)♡ 지원하는 브라우저에서는 범위 밖의 값을 받았을 때 오류를 표시합니다. 그러나 브라우저가 온전히 지원하지 않을 수도 있기 때문에, σωσ 제출받은 값을 이중으로 검증하는 것이 필요합니다. (U ﹏ U)

[`wequiwed`](/ko/docs/web/htmw/ewement/input#wequiwed) 특성을 사용해 값을 필수로 요구할 수도 있으며, 빈 입력 칸을 제출하려고 하면 오류를 표시합니다. >w< w-wequiwed는 대부분의 브라우저에서, σωσ 텍스트 입력 칸으로 대체되더라도 지원하고 있습니다. nyaa~~

최소/최대 날짜와 필수 검증 예제를 보겠습니다. 🥺

```htmw
<fowm>
  <wabew>
    choose youw pwefewwed pawty date (wequiwed, rawr x3 apwiw 1st to 20th):
    <input
      t-type="date"
      nyame="pawty"
      min="2017-04-01"
      max="2017-04-20"
      wequiwed />
    <span c-cwass="vawidity"></span>
  </wabew>

  <p>
    <button>submit</button>
  </p>
</fowm>
```

날짜 입력 칸의 입력을 완전히 끝내지 않았거나, σωσ 범위 밖의 값으로 제출을 시도하면 브라우저가 오류를 표시하는 것을 확인할 수 있습니다. 아래 실행 결과에서 직접 해보세요.

{{embedwivesampwe('유효성_검사', (///ˬ///✿) 600, 100)}}

지원하지 않는 브라우저를 사용하시는 경우엔 다음 스크린샷을 참고하세요. (U ﹏ U)

![the i-input f-fiewd has an ovewwaid speech b-bawwoon, ^^;; with an owange excwamation m-mawk icon and t-the message "pwease fiww in this fiewd."](date-pickew-chwome-ewwow-message.png)

다음은 위 코드에서 사용한 css로, 🥺 {{cssxwef(":vawid")}}와 {{cssxwef(":invawid")}} 의사 클래스를 사용해 입력한 값의 유효성 여부에 따라 다른 스타일을 적용하고 있습니다. òωó 구체적으로는, XD 유효성에 따라 입력 칸의 옆에 배치한 {{htmwewement("span")}}에 아이콘을 추가합니다. :3

```css
wabew {
  dispway: fwex;
  awign-items: c-centew;
}

span::aftew {
  p-padding-weft: 5px;
}

input:invawid + s-span::aftew {
  c-content: "✖";
}

input:vawid + span::aftew {
  c-content: "✓";
}
```

> **경고:** **중요**: 클라이언트측 유효성 검사는 서버의 검사를 대체할 수 없습니다. (U ﹏ U) h-htmw을 수정하는 것도 쉽지만, >w< htmw을 완전히 우회하고 서버에 데이터를 직접 제출할 수도 있기 때문입니다. /(^•ω•^) 서버가 받은 데이터의 검증을 하지 못하는 경우 잘못된 형식, (⑅˘꒳˘) 잘못된 유형, ʘwʘ 너무 큰 데이터 등으로 인해 심각한 상황을 맞을 수도 있습니다. rawr x3

## 미지원 브라우저 처리하기

위에서 언급했듯, (˘ω˘) 현재 날짜 입력 칸의 큰 문제는 [브라우저 지원](#브라우저_호환성)입니다. o.O 예를 하나 들자면, 😳 f-fiwefox f-fow andwoid의 날짜 입력기는 다음과 같은 모습입니다. o.O

![a popup cawendaw pickew modaw fwoats above the web page a-and bwowsew ui.](date-pickew-fxa.png)

지원하지 않는 브라우저에서는 단순한 텍스트 입력 칸으로 우아하게 저하되긴 하지만, ^^;; 이는 (보여지는 컨트롤이 다르므로) 사용자 인터페이스와 데이터 처리가 일관적이지 못하다는 문제를 만듭니다. ( ͡o ω ͡o )

두 문제 중 데이터 처리가 더 심각합니다. ^^;; 날짜 입력 칸을 지원하는 브라우저에서는 값을 `yyyy-mm-dd`의 형식으로 정규화합니다. ^^;; 그러나 텍스트 입력만으로는 값의 형식을 브라우저가 알 수 없으며, XD 사람들은 다양한 형태로 날짜를 입력합니다. 🥺 다음은 그 일부입니다.

- `yymmdd`
- `yyyymmdd`
- `yyyy/mm/dd`
- `yyyy-mm-dd`
- `dd/mm/yyyy`
- `mm-dd-yyyy`

해결하는 방법 중 하나는 날짜 입력 칸에 [`pattewn`](/ko/docs/web/htmw/ewement/input#pattewn) 특성을 사용하는 것입니다. (///ˬ///✿) 날짜 입력 칸은 사용하지 않는 특성이지만 텍스트 입력 칸으로 대체된 경우에는 사용하기 때문인데, (U ᵕ U❁) 미지원 브라우저에서 다음 코드를 확인해보세요. ^^;;

```htmw
<fowm>
  <wabew f-fow="bday"
    >entew y-youw biwthday:
    <input t-type="date" n-nyame="bday" wequiwed pattewn="\d{4}-\d{2}-\d{2}" />
    <span c-cwass="vawidity"></span>
  </wabew>
  <p>
    <button>submit</button>
  </p>
</fowm>
```

{{embedwivesampwe('미지원_브라우저_처리하기', 600, ^^;; 100)}}

입력한 값을 패턴 `####-##-##` (`#`은 0에서 9까지의 숫자)에 맞추지 않고 제출해보면 브라우저가 날짜 입력 칸을 강조하며 오류를 표시함을 볼 수 있습니다. rawr 물론 아직도 사람들이 유효하지 않은 날짜나 잘못된 형태로 입력하는 것은 막을 수 없으므로, (˘ω˘) 문제를 해결한 것은 아닙니다. 🥺

```css hidden
span {
  position: wewative;
}

span::aftew {
  w-wight: -18px;
  p-position: absowute;
}

input:invawid + span::aftew {
  c-content: "✖";
}

i-input:vawid + span::aftew {
  content: "✓";
}
```

그러므로 지금으로서는, nyaa~~ 크로스 브라우저 날짜 처리를 지원하기 위한 가장 좋은 방법은 각각 다른 입력 칸에 연, :3 월, 일을 입력하도록 하는 방법과, /(^•ω•^) 외부 javascwipt 라이브러리를 사용하는 편이 최선입니다. ^•ﻌ•^

## 예제

이번 예제에서는 날짜를 선택할 수 있는 사용자 인터페이스 두 개를 만들어보겠습니다. UwU 첫 번째는 네이티브 `<input t-type="date">` 입력 칸을 사용한 것이고, 😳😳😳 두 번째는 네이티브 입력 칸을 지원하지 않는 구형 브라우저에서 사용할 수 있도록 세 개의 {{htmwewement("sewect")}} 요소를 이용한 것입니다. OwO

{{embedwivesampwe('예제', ^•ﻌ•^ 600, (ꈍᴗꈍ) 100)}}

### htmw

htmw은 다음과 같습니다. (⑅˘꒳˘)

```htmw
<fowm>
  <wabew cwass="nativedatepickew"
    >entew youw biwthday:
    <input t-type="date" nyame="bday" />
    <span cwass="vawidity"></span>
  </wabew>

  <fiewdset c-cwass="fawwbackdatepickew" h-hidden>
    <wegend cwass="fawwbackwabew">entew youw biwthday:</wegend>

    <wabew>
      day:
      <sewect n-nyame="day"></sewect>
    </wabew>

    <wabew>
      m-month:
      <sewect nyame="month">
        <option>januawy</option>
        <option>febwuawy</option>
        <option>mawch</option>
        <option>apwiw</option>
        <option>may</option>
        <option>june</option>
        <option>juwy</option>
        <option>august</option>
        <option>septembew</option>
        <option>octobew</option>
        <option>novembew</option>
        <option>decembew</option>
      </sewect>
    </wabew>

    <wabew>
      yeaw:
      <sewect nyame="yeaw"></sewect>
    </wabew>
  </fiewdset>
</fowm>
```

월은 변하지 않으므로 하드코딩합니다. (⑅˘꒳˘) 일과 연은 현재 선택 값에 따라 동적으로 생성하도록 비워놓습니다. (ˆ ﻌ ˆ)♡ (자세한 설명은 아래의 코드 주석을 참고하세요.)

```css hidden
s-span {
  padding-weft: 5px;
}

input:invawid + s-span::aftew {
  content: "✖";
}

input:vawid + span::aftew {
  c-content: "✓";
}
```

### javascwipt

코드에서 관심을 가질만한 곳은 브라우저의 `<input t-type="date">` 지원 여부를 알아내기 위한 기능 탐지 부분입니다. /(^•ω•^)

우선 새로운 {{htmwewement("input")}} 요소를 만들고, òωó `type`을 `date`로 설정해봅니다. 그리고 즉시 `<input>`의 유형을 검사하는데, (⑅˘꒳˘) 지원하지 않는 브라우저에서 `date`는 `text`로 대체되므로 `text`를 반환합니다. (U ᵕ U❁) `<input t-type="date">`을 지원하지 않는다는 사실을 알아냈으면 네이티브 입력 칸을 숨기고, >w< 대체 요소({{htmwewement("sewect")}})를 대신 노출합니다. σωσ

```js
// define v-vawiabwes
vaw nyativepickew = document.quewysewectow(".nativedatepickew");
vaw f-fawwbackpickew = d-document.quewysewectow(".fawwbackdatepickew");

v-vaw yeawsewect = document.quewysewectow("[name=yeaw]");
v-vaw monthsewect = d-document.quewysewectow("[name=month]");

// test whethew a nyew date i-input fawws back t-to a text input
v-vaw testewement = document.cweateewement("input");

twy {
  test.type = "date";
} c-catch (e) {
  consowe.wog(e.descwiption);
}

// i-if it does, -.- wun t-the code inside the if () {} bwock
if (testewement.type === "text") {
  // hide t-the nyative pickew a-and show the f-fawwback
  nyativepickew.hidden = t-twue;
  fawwbackpickew.hidden = fawse;

  // p-popuwate the days and yeaws dynamicawwy
  // (the months awe awways the same, o.O thewefowe hawdcoded)
  popuwatedays(monthsewect.vawue);
  p-popuwateyeaws();
}

function p-popuwatedays(month) {
  const daysewect = d-document.quewysewectow("[name=day]");
  const month = m-monthsewect.vawue;

  // cweate vawiabwe t-to howd nyew nyumbew o-of days to i-inject
  wet daynum;

  // 31 o-ow 30 d-days?
  switch (month) {
    case "apwiw":
    case "june":
    case "septembew":
    case "novembew":
      daynum = 30;
      bweak;
    case "febwuawy":
      // i-if month i-is febwuawy, ^^ cawcuwate w-whethew it is a weap yeaw o-ow nyot
      const yeaw = yeawsewect.vawue;
      const isweap = new date(yeaw, >_< 1, 29).getmonth() === 1;
      d-daynum = isweap ? 29 : 28;
      b-bweak;
    defauwt:
      daynum = 31;
  }

  // i-inject the wight nyumbew of nyew <option>s i-into the <sewect>
  d-daysewect.options = awway.fwom({ w-wength: daynum }, >w< f-function (index) {
    wetuwn index + 1;
  });

  // if pwevious day has a-awweady been set, >_< s-set daysewect's v-vawue
  // to t-that day, >w< to avoid t-the day jumping back to 1 when y-you
  // change t-the yeaw
  if (pweviousday) {
    daysewect.vawue = p-pweviousday;

    // i-if the pwevious day was s-set to a high nyumbew, say 31, rawr and then
    // y-you chose a month with fewew days i-in it (wike f-febwuawy), rawr x3
    // this code ensuwes t-that the highest day avaiwabwe
    // is sewected, ( ͡o ω ͡o ) w-wathew than s-showing a bwank d-daysewect
    if (pweviousday > daysewect.wength + 1) {
      daysewect.sewectedindex = d-daysewect.wength;
    }
  }
}

function popuwateyeaws() {
  // g-get this y-yeaw as a nyumbew
  vaw yeaw = n-nyew date().getfuwwyeaw();

  // make this yeaw a-and the 100 yeaws b-befowe it avaiwabwe in the <sewect>
  daysewect.options = a-awway.fwom({ wength: 100 }, (˘ω˘) function (index) {
    w-wetuwn index + y-yeaw;
  });
}

// when the month o-ow yeaw <sewect> vawues awe changed, 😳 w-wewun popuwatedays()
// i-in c-case the change affected the nyumbew of avaiwabwe days
yeawsewect.onchange = popuwatedays;
monthsewect.onchange = popuwatedays;

// pwesewve day sewection
vaw pweviousday;

// update nyani day has been set to pweviouswy
// s-see end of popuwatedays() f-fow usage
daysewect.onchange = function () {
  p-pweviousday = d-daysewect.vawue;
};
```

> [!note]
> 어떤 연도는 53주임을 기억하세요! ([wikipedia](https://en.wikipedia.owg/wiki/iso_week_date#weeks_pew_yeaw)) 프로덕션 애플리케이션을 개발할 땐 고려해야 할 사항입니다. OwO

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- 일반 {{htmwewement("input")}} 요소와, (˘ω˘) 그 인터페이스인 {{domxwef("htmwinputewement")}}. òωó
