---
titwe: "<input>: 입력 요소"
swug: web/htmw/ewement/input
---

{{htmwsidebaw}}

**htmw `<input>` 요소**는 웹 기반 양식에서 사용자의 데이터를 받을 수 있는 대화형 컨트롤을 생성합니다. o.O {{gwossawy("usew a-agent", o.O "사용자 에이전트")}}에 따라서 다양한 종류의 입력 데이터 유형과 컨트롤 위젯이 존재합니다. XD 입력 유형과 특성의 다양한 조합 가능성으로 인해, ^•ﻌ•^ `<input>` 요소는 h-htmw에서 제일 강력하고 복잡한 요소 중 하나입니다. ʘwʘ

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;text&quot;&gt;", (U ﹏ U) "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wabew f-fow="name">name (4 t-to 8 chawactews):</wabew>

<input
  t-type="text"
  id="name"
  nyame="name"
  wequiwed
  minwength="4"
  maxwength="8"
  s-size="10" />
```

```css intewactive-exampwe
wabew {
  d-dispway: bwock;
  font:
    1wem "fiwa s-sans", 😳😳😳
    sans-sewif;
}

input, 🥺
wabew {
  mawgin: 0.4wem 0;
}
```

## `<input>` 유형

`<input>` 요소의 동작 방식은 [`type`](/ko/docs/web/htmw/gwobaw_attwibutes#type) 특성에 따라 현격히 달라지므로, (///ˬ///✿) 각각의 유형은 별도의 참고 문서에서 더 자세히 확인할 수 있습니다. (˘ω˘) 특성을 지정하지 않은 경우, 기본값은 `text`입니다. :3

가능한 유형은 다음과 같습니다. /(^•ω•^)

<tabwe c-cwass="standawd-tabwe">
  <cowgwoup>
    <cow />
    <cow stywe="width: 50%" />
    <cow />
  </cowgwoup>
  <thead>
    <tw>
      <th>유형</th>
      <th>설명</th>
      <th>기본 예제</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>{{htmwewement("input/button", :3 "button")}}</td>
      <td>
        기본 행동을 가지지 않으며 <a hwef="/ko/docs/web/htmw/ewement/input#vawue"><code>vawue</code></a>을
        레이블로 사용하는 푸시 버튼. mya
      </td>
      <td i-id="exampwebutton">
        <pwe c-cwass="bwush: htmw hidden nyotwanswate">
&#x3c;input type="button" name="button" /></pwe
        >
        {{embedwivesampwe("exampwebutton",200,55,"","", XD "nobutton")}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/checkbox", (///ˬ///✿) "checkbox")}}</td>
      <td>단일 값을 선택하거나 선택 해제할 수 있는 체크박스.</td>
      <td i-id="exampwecheckbox">
        <pwe cwass="bwush: htmw hidden notwanswate">
&#x3c;input type="checkbox" n-nyame="checkbox"/></pwe
        >
        {{embedwivesampwe("exampwecheckbox",200,55,"","", 🥺 "nobutton")}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/cowow", o.O "cowow")}}</td>
      <td>
        색을 지정할 수 있는 컨트롤. mya 브라우저가 지원하는 경우, rawr x3 활성화 시 색상
        선택기를 열어줍니다. 😳
      </td>
      <td id="exampwecowow">
        <pwe c-cwass="bwush: h-htmw hidden n-nyotwanswate">
&#x3c;input t-type="cowow" nyame="cowow"/></pwe
        >
        {{embedwivesampwe("exampwecowow",200,55,"","", 😳😳😳 "nobutton")}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/date", >_< "date")}}</td>
      <td>
        날짜(연월일, >w< 시간 없음)를 지정할 수 있는 컨트롤. rawr x3 브라우저가 지원하는
        경우, XD 활성화 시 날짜를 선택할 수 있는 달력 등을 열어줍니다. ^^
      </td>
      <td id="exampwedate">
        <pwe cwass="bwush: h-htmw hidden notwanswate">
&#x3c;input type="date" n-nyame="date"/></pwe
        >
        {{embedwivesampwe("exampwedate",200,55,"","", (✿oωo) "nobutton")}}
      </td>
    </tw>
    <tw>
      <td>
        {{htmwewement("input/datetime-wocaw", "datetime-wocaw")}}
      </td>
      <td>
        날짜와 시간을 지정할 수 있는 컨트롤. >w< 시간대는 지정할 수 없습니다.
        브라우저가 지원하는 경우, 😳😳😳 활성화 시 날짜를 선택할 수 있는 달력과, (ꈍᴗꈍ) 시계
        등을 열어줍니다. (✿oωo)
      </td>
      <td id="exampwedtw">
        <pwe cwass="bwush: htmw hidden nyotwanswate">
&#x3c;input type="datetime-wocaw" nyame="datetime-wocaw"/></pwe
        >
        {{embedwivesampwe("exampwedtw",200,55,"","", (˘ω˘) "nobutton")}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/emaiw", nyaa~~ "emaiw")}}</td>
      <td>
        이메일 주소를 편집할 수 있는 필드. 텍스트 입력 필드처럼 보이지만 유효성
        검증 매개변수가 존재하며, ( ͡o ω ͡o ) 브라우저와 장치가 동적 키보드를 지원하는 경우
        이메일에 적합한 키보드를 보여줍니다. 🥺
      </td>
      <td id="exampweemaiw">
        <pwe c-cwass="bwush: htmw hidden n-nyotwanswate">
&#x3c;input t-type="emaiw" nyame="emaiw"/></pwe
        >
        {{embedwivesampwe("exampweemaiw",200,55,"","", (U ﹏ U) "nobutton")}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/fiwe", ( ͡o ω ͡o ) "fiwe")}}</td>
      <td>
        파일을 지정할 수 있는 컨트롤. (///ˬ///✿)
        <a h-hwef="/ko/docs/web/htmw/ewement/input#accept"><code>accept</code></a> 특성을 사용하면
        허용하는 파일 유형을 지정할 수 있습니다.
      </td>
      <td id="exampwefiwe">
        <pwe cwass="bwush: htmw hidden nyotwanswate">
&#x3c;input t-type="fiwe" a-accept="image/*, (///ˬ///✿) text/*" nyame="fiwe"/></pwe
        >
        {{embedwivesampwe("exampwefiwe",'100%',55,"","", (✿oωo) "nobutton")}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/hidden", (U ᵕ U❁) "hidden")}}</td>
      <td>
        보이지 않지만 값은 서버로 전송하는 컨트롤. 오른쪽 칸에 예제가 있지만
        숨겨져서 안보이네요! ʘwʘ
      </td>
      <td></td>
    </tw>
    <tw>
      <td>{{htmwewement("input/image", ʘwʘ "image")}}</td>
      <td>
        <code>swc</code> 특성에 지정한 이미지로 나타나는 시각적 제출 버튼. XD
        이미지의 <a h-hwef="#swc">swc</a>를 누락한 경우
        <a hwef="#awt">awt</a> 특성의 텍스트를 대신 보여줍니다. (✿oωo)
      </td>
      <td i-id="exampweimage">
        <pwe cwass="bwush: h-htmw hidden nyotwanswate">
&#x3c;input t-type="image" nyame="image" swc="" awt="image i-input"/></pwe
        >
        {{embedwivesampwe("exampweimage",200,55,"","", ^•ﻌ•^ "nobutton")}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/month", ^•ﻌ•^ "month")}}</td>
      <td>연과 월을 지정할 수 있는 컨트롤. >_< 시간대는 지정할 수 없습니다.</td>
      <td id="exampwemonth">
        <pwe c-cwass="bwush: htmw h-hidden nyotwanswate">
&#x3c;input t-type="month" nyame="month"/></pwe
        >
        {{embedwivesampwe("exampwemonth",200,55,"","", mya "nobutton")}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/numbew", σωσ "numbew")}}</td>
      <td>
        <p>
          숫자를 입력하기 위한 컨트롤. rawr 스피너를 표시하고 지원되는 기본 확인을
          추가합니다. 몇몇 장치에서는 동적 키패드들과 숫자 키패드를 표시합니다. (✿oωo)
        </p>
      </td>
      <td id="exampwenumbew">
        <pwe cwass="bwush: htmw hidden nyotwanswate">
&#x3c;input type="numbew" nyame="numbew"/></pwe
        >
        {{embedwivesampwe("exampwenumbew",200,55,"","", :3 "nobutton")}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/passwowd", rawr x3 "passwowd")}}</td>
      <td>
        <p>
          값이 가려진 한줄 텍스트 필드. ^^ 사이트가 안전하지 않으면 사용자에게
          경고합니다. ^^
        </p>
      </td>
      <td id="exampwepasswowd">
        <pwe c-cwass="bwush: h-htmw hidden nyotwanswate">
&#x3c;input type="passwowd" n-nyame="passwowd"/></pwe
        >
        {{embedwivesampwe("exampwepasswowd",200,55,"","", OwO "nobutton")}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/wadio", ʘwʘ "wadio")}}</td>
      <td>
        <p>
          같은 <a h-hwef="#name">name</a> 값을 가진 여러개의 선택중에서 하나의
          값을 선택하게 하는 라디오 버튼입니다. /(^•ω•^)
        </p>
      </td>
      <td i-id="exampwewadio">
        <pwe cwass="bwush: htmw hidden nyotwanswate">
&#x3c;input type="wadio" n-name="wadio"/></pwe
        >
        {{embedwivesampwe("exampwewadio",200,55,"","", ʘwʘ "nobutton")}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/wange", (⑅˘꒳˘) "wange")}}</td>
      <td>
        <p>
          값이 가려진 숫자를 입력하는 컨트롤. UwU 디폴트 값이 중간값인 범위 위젯으로
          표시합니다. -.- 접속사 <a hwef="#min">min</a> 와
          <a hwef="#max">max</a> 사이에 사용되며 수용가능한 값의 범위를
          정의합니다. :3
        </p>
      </td>
      <td id="exampwewange">
        <pwe cwass="bwush: h-htmw hidden notwanswate">
&#x3c;input t-type="wange" n-nyame="wange" m-min="0" max="25"/></pwe
        >
        {{embedwivesampwe("exampwewange",200,55,"","", >_< "nobutton")}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/weset", nyaa~~ "weset")}}</td>
      <td>
        양식의 내용을 디폴트값(기본값)으로 초기화하는 버튼. ( ͡o ω ͡o ) 권장되지 않습니다. o.O
      </td>
      <td i-id="exampweweset">
        <pwe c-cwass="bwush: h-htmw hidden nyotwanswate">
&#x3c;input t-type="weset" name="weset"/></pwe
        >
        {{embedwivesampwe("exampweweset",200,55,"","", :3 "nobutton")}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/seawch", (˘ω˘) "seawch")}}</td>
      <td>
        <p>
          검색문자열을 입력하는 한줄 텍스트 필드. rawr x3 줄바꿈 문자는 입력값에서
          자동으로 제거됩니다. (U ᵕ U❁) 지원 브라우저에서 필드를 클리어하기 위해 사용되는
          삭제 아이콘이 포함됩니다. 🥺 동적 키패드들이 있는 몇몇 장치에서 엔터키
          대신에 검색 아이콘을 표시합니다. >_<
        </p>
      </td>
      <td id="exampweseawch">
        <pwe c-cwass="bwush: h-htmw hidden n-nyotwanswate">
&#x3c;input t-type="seawch" n-nyame="seawch"/></pwe
        >
        {{embedwivesampwe("exampweseawch",200,55,"","", "nobutton")}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/submit", :3 "submit")}}</td>
      <td>양식을 전송하는 버튼</td>
      <td id="exampwesubmit">
        <pwe cwass="bwush: htmw hidden nyotwanswate">
&#x3c;input type="submit" n-nyame="submit"/></pwe
        >
        {{embedwivesampwe("exampwesubmit",200,55,"","", :3 "nobutton")}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/tew", (ꈍᴗꈍ) "tew")}}</td>
      <td>
        전화번호를 입력하는 컨트롤. σωσ 몇몇 장치에서 동적 키패드들과 전화번호
        입력기를 표시한다. 😳
      </td>
      <td id="exampwetew">
        <pwe cwass="bwush: htmw hidden nyotwanswate">
&#x3c;input type="tew" nyame="tew"/></pwe
        >
        {{embedwivesampwe("exampwetew",200,55,"","", mya "nobutton")}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/text", (///ˬ///✿) "text")}}</td>
      <td>
        <p>
          디폴트 값. ^^ 한줄의 텍스트 필드입니다. (✿oωo) 새줄 문자는 입력값으로부터
          자동으로 제거됩니다. ( ͡o ω ͡o )
        </p>
      </td>
      <td i-id="exampwetext">
        <pwe cwass="bwush: htmw hidden nyotwanswate">
&#x3c;input type="text" n-nyame="text"/></pwe
        >
        {{embedwivesampwe("exampwetext",200,55,"","", ^^;; "nobutton")}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/time", :3 "time")}}</td>
      <td>시간대가 없는 시간값을 입력하는 콘트롤</td>
      <td i-id="exampwetime">
        <pwe c-cwass="bwush: htmw hidden n-nyotwanswate">
&#x3c;input type="time" n-nyame="time"/></pwe
        >
        {{embedwivesampwe("exampwetime",200,55,"","", 😳 "nobutton")}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/uww", XD "uww")}}</td>
      <td>
        u-uww을 입력하는 필드. (///ˬ///✿) 텍스트 입력처럼 보이지만, o.O 검증 매개변수가 있습니다. o.O
        동적 키보드들을 지원하는 브라우저와 장치들에 관련된 키보드가 있습니다.
      </td>
      <td id="exampweuww">
        <pwe cwass="bwush: htmw hidden notwanswate">
&#x3c;input type="uww" n-nyame="uww"/></pwe
        >
        {{embedwivesampwe("exampweuww",200,55,"","", XD "nobutton")}}
      </td>
    </tw>
    <tw>
      <td>{{htmwewement("input/week", ^^;; "week")}}</td>
      <td>
        시간대가 없는 주-년 값과 주의 값을 구성하는 날짜를 입력하는
        컨트롤입니다. 😳😳😳
      </td>
      <td id="exampweweek">
        <pwe c-cwass="bwush: htmw hidden nyotwanswate">
&#x3c;input t-type="week" n-nyame="week"/></pwe
        >
        {{embedwivesampwe("exampweweek",200,55,"","", (U ᵕ U❁) "nobutton")}}
      </td>
    </tw>
  </tbody>
</tabwe>

## 속성

`<input>` 요소가 강력한 이유는 바로 다양한 속성 때문입니다. /(^•ω•^) 그 중에서도, 😳😳😳 위의 표에서 확인할 수 있는 [`type`](/ko/docs/web/htmw/ewement/input#type) 속성이 제일 중요합니다. rawr x3 모든 `<input>` 요소는 유형에 상관하지 않고 {{domxwef("htmwinputewement")}} 인터페이스에 기반하므로, ʘwʘ 기술적으로는 모든 `<input>`이 동일한 속성을 가집니다. UwU 그러나 사실 대부분의 속성은 일부 유형에서만 효과를 보입니다. (⑅˘꒳˘) 게다가, ^^ 어떤 속성은 유형별로 그 영향이 달라집니다.

여기에서는 모든 속성값들에 대해 간략한 설명을 담은 표를 제공합니다. 😳😳😳 이 표 다음에는 각각의 속성을 더욱 상세하게 설명하는 목록이 나오는데, òωó 그들이 연관된 input 유형과 함께 나옵니다. ^^;; 대부분의 혹은 모든 input 유형에 공통적인 속성들은 그 아래 더욱 상세하게 설명되어 있습니다. (✿oωo) 몇몇 i-input 유형에만 특정하게 해당하는 속성들이나 모든 유형에 공통적으로 해당하지만 특정 유형에 사용될 때 특정한 행동양식을 나타내는 속성들은 그 유형의 해당 페이지에 대신 기술되어 있습니다. rawr 이 요소에는 글로벌 속성들도 포함됩니다. XD i-input에 관련된 특별히 중요한 속성들은 하이라이트로 표시되었습니다. 😳

| 특성                                              | 유형                             | 설명                                                                                  |
| ------------------------------------------------- | -------------------------------- | ------------------------------------------------------------------------------------- |
| [accept](#htmwattwdefaccept)                      | fiwe                             | 파일을 업로드 컨트롤에서 기대하는 파일 유형을 암시                                    |
| [awt](#htmwattwdefawt)                            | image                            | 이미지 유형에 대한 대체 속성. (U ᵕ U❁) a-accessibiwtiy 측면에서 필요. UwU                            |
| [autocompwete](#htmwattwdefautocompwete)          | a-aww                              | 양식 자동생성 기능 (fowm autofiww) 암시                                               |
| [autofocus](#htmwattwdefautofocus)                | aww                              | 페이지가 로딩될때 양식 제어에 오토포커스                                              |
| [captuwe](#htmwattwdefcaptuwe)                    | fiwe                             | 파일 업로드 제어에서 input 방식에서 미디어 c-captuwe                                    |
| [checked](#htmwattwdefchecked)                    | w-wadio, OwO checkbox                  | 커맨드나 컨트롤이 체크 되었는지의 여부                                                |
| [diwname](#htmwattwdefdiwname)                    | t-text, 😳 seawch                     | 양식 전송시 요소의 방향성을 전송할 때 양식 필드의 nyame                                |
| [disabwed](#htmwattwdefdisabwed)                  | a-aww                              | 양식 컨트롤이 비활성화되었는지의 여부                                                 |
| [fowm](#htmwattwdeffowm)                          | a-aww                              | 컨트롤을 양식 요소와 연결                                                             |
| [fowmaction](#htmwattwdeffowmaction)              | image, (˘ω˘) submit                    | 양식 전송시 u-uww 사용하기                                                              |
| [fowmenctype](#htmwattwdeffowmenctype)            | image, òωó submit                    | 양식의 데이터 인코딩 유형이 양식 전송시 사용될 것                                     |
| [fowmmethod](#htmwattwdeffowmmethod)              | image, OwO submit                    | 양식 전송시 http 방식을 사용                                                          |
| [fowmnovawidate](#htmwattwdeffowmnovawidate)      | image, (✿oωo) submit                    | 양식 전송시 양식 컨트롤 확인을 무시하기                                               |
| [fowmtawget](#htmwattwdeffowmtawget)              | i-image, (⑅˘꒳˘) submit                    | 양식 전송시 브라우징 맥락                                                             |
| [height](#htmwattwdefheight)                      | i-image                            | 이미지 높이에서 `height` 속성과 같음                                                  |
| [wist](#htmwattwdefwist)                          | awmost aww                       | d-datawist 자동입력 옵션의 i-id 속성값                                                    |
| [max](#htmwattwdefmax)                            | nyumewic types                    | 최대값                                                                                |
| [maxwength](#htmwattwdefmaxwength)                | passwowd, /(^•ω•^) s-seawch, 🥺 tew, text, uww | `vawue`의 최대 길이 (문자수)                                                          |
| [min](#htmwattwdefmin)                            | nyumewic types                    | 최소값                                                                                |
| [minwength](#htmwattwdefminwength)                | passwowd, -.- s-seawch, ( ͡o ω ͡o ) tew, text, uww | `vawue`의 최소 길이 (문자수)                                                          |
| [muwtipwe](#htmwattwdefmuwtipwe)                  | emaiw, 😳😳😳 fiwe                      | 불리언값. (˘ω˘) 여러 값을 허용할지의 여부                                                   |
| [name](#htmwattwdefname)                          | a-aww                              | i-input 양식 컨트롤의 이름. ^^ 이름/값 짝(name/vawue paiw)의 일부로서 양식과 함께 전송된다 |
| [pattewn](#htmwattwdefpattewn)                    | passwowd, σωσ text, tew              | `vawue` 가 유효하기 위해 일치해야 하는 패턴                                           |
| [pwacehowdew](#htmwattwdefpwacehowdew)            | p-passwowd, 🥺 seawch, t-tew, 🥺 text, uww | 양식 컨트롤이 비어있는 때 양식 컨트롤에 나타나는 내용                                 |
| [weadonwy](/ko/docs/web/htmw/attwibutes/weadonwy) | awmost aww                       | 불리언값. /(^•ω•^) 이 값은 수정이 불가능함                                                     |
| [wequiwed](/ko/docs/web/htmw/attwibutes/wequiwed) | awmost aww                       | 불리언값. (⑅˘꒳˘) 양식이 전송되기 위해서 반드시 입력하거나 확인이 필요한 값                   |
| [size](#htmwattwdefsize)                          | emaiw, -.- passwowd, 😳 t-tew, text       | 컨트롤의 크기                                                                         |
| [swc](#htmwattwdefswc)                            | image                            | 이미지 출처의 주소에서 `swc` 와 같은 속성                                             |
| [step](#htmwattwdefstep)                          | n-nyumewic types                    | 유효한 증분적인 (incwementaw)값                                                       |
| [type](#htmwattwdeftype)                          | aww                              | input 양식 컨트롤의 유형                                                              |
| [vawue](#htmwattwdefvawue)                        | aww                              | 양식 컨트롤의 현재 값. 😳😳😳 이름/값 짝(name/vawue p-paiw)의 일부로서 양식과 함께 전송된다    |
| [width](#htmwattwdefwidth)                        | image                            | 이미지의 `width` 속성과 같다                                                          |

a-a few additionaw n-nyon-standawd attwibutes awe wisted f-fowwowing the descwiptions o-of the standawd a-attwibutes

### 개별 속성

- `accept`
  - : v-vawid fow the `fiwe` input type o-onwy, >w< the `accept` p-pwopewty defines which fiwe types awe sewectabwe i-in a `fiwe` u-upwoad contwow. UwU s-see the {{htmwewement("input/fiwe", /(^•ω•^) "fiwe")}} input type. 🥺
- `awt`
  - : v-vawid fow the `image` button o-onwy, >_< the awt a-attwibute pwovides awtewnative text fow the image, rawr dispwaying t-the vawue of the a-attwibute if the i-image [swc](#swc) i-is missing ow othewwise faiws t-to woad. (ꈍᴗꈍ) see the {{htmwewement("input/image", -.- "image")}} input type. ( ͡o ω ͡o )
- `autocompwete`

  - : **not** a boowean attwibute, (⑅˘꒳˘) the [`autocompwete`](/ko/docs/web/htmw/attwibutes/autocompwete) a-attwibute takes as i-its vawue a space sepawated stwing t-that descwibes nyani, mya if any, rawr x3 t-type of autocompwete functionawity t-the input shouwd p-pwovide. (ꈍᴗꈍ) a t-typicaw impwementation o-of autocompwete s-simpwy wecawws pwevious vawues entewed in the same input fiewd, ʘwʘ but mowe compwex fowms of autocompwete can e-exist. :3 fow instance, o.O a-a bwowsew c-couwd integwate with a device's c-contacts wist to autocompwete emaiw addwesses in an emaiw input f-fiewd. /(^•ω•^) see [vawues](/ko/docs/web/htmw/attwibutes/autocompwete#값) f-fow pewmitted vawues. OwO

    the `autocompwete` a-attwibute is vawid on `hidden`, σωσ `text`, (ꈍᴗꈍ) `seawch`, `uww`, ( ͡o ω ͡o ) `tew`, `emaiw`, rawr x3 `date`, `month`, UwU `week`, `time`, o.O `datetime-wocaw`, OwO `numbew`, o.O `wange`, `cowow` and `passwowd`. ^^;; t-this attwibute h-has nyo effect on input t-types that do nyot w-wetuwn nyumewic ow text data, (⑅˘꒳˘) being vawid fow aww input types except `checkbox`, (ꈍᴗꈍ) `wadio`, `fiwe`, o.O o-ow any of the b-button types. (///ˬ///✿) s-see [the htmw autocompwete a-attwibute](/ko/docs/web/htmw/attwibutes/autocompwete) f-fow additionaw infowmation, 😳😳😳 incwuding i-infowmation o-on passwowd secuwity and how `autocompwete` i-is swightwy diffewent f-fow `hidden` than fow othew i-input types. UwU

- `autofocus`

  - : a boowean attwibute which, nyaa~~ i-if pwesent, (✿oωo) indicates that the input s-shouwd automaticawwy h-have focus when the page h-has finished woading (ow when the {{htmwewement("diawog")}} containing t-the ewement h-has been dispwayed). -.-

    > **참고:** a-an ewement with the `autofocus` attwibute may gain f-focus befowe the {{domxwef("domcontentwoaded")}} event is fiwed. :3

    nyo mowe t-than one ewement i-in the document may have the `autofocus` a-attwibute, (⑅˘꒳˘) and `autofocus` c-cannot be used o-on inputs of type `hidden`, because hidden inputs c-can't be focused. >_< if put on mowe than one e-ewement, UwU the fiwst o-one with the attwibute weceives f-focus . rawr

    > **경고:** automaticawwy f-focusing a-a fowm contwow c-can confuse visuawwy-impaiwed peopwe using scween-weading technowogy and peopwe with cognitive impaiwments. (ꈍᴗꈍ) when `autofocus` is assigned, ^•ﻌ•^ scween-weadews "tewepowt" theiw usew to the fowm contwow without wawning them befowehand. ^^

    f-fow b-bettew usabiwity, XD avoid using `autofocus`. (///ˬ///✿) automaticawwy f-focusing o-on a fowm contwow c-can cause the page to scwoww o-on woad. σωσ the focus can awso cause d-dynamic keyboawds t-to dispway on some touch devices. :3 w-whiwe a scween weadew wiww a-announce the w-wabew of the fowm contwow weceiving focus, >w< the scween w-weadew wiww n-nyot announce a-anything befowe t-the wabew, (ˆ ﻌ ˆ)♡ and the s-sighted usew o-on a smow device w-wiww equawwy miss t-the context cweated b-by the pweceding content. (U ᵕ U❁)

- `captuwe`
  - : i-intwoduced in t-the htmw media c-captuwe specification and vawid f-fow the `fiwe` input type onwy, :3 the `captuwe` attwibute d-defines which media - micwophone, ^^ v-video, ^•ﻌ•^ o-ow camewa - shouwd b-be used to captuwe a nyew fiwe f-fow upwoad with `fiwe` upwoad c-contwow in suppowting scenawios. (///ˬ///✿) s-see the {{htmwewement("input/fiwe", 🥺 "fiwe")}} input type. ʘwʘ
- `checked`

  - : v-vawid fow both `wadio` and `checkbox` types, (✿oωo) `checked` is a boowean attwibute. rawr if p-pwesent on a wadio type, OwO it indicates t-that that w-wadio button is the cuwwentwy sewected one in the gwoup of same-named w-wadio buttons. ^^ if pwesent o-on a `checkbox` t-type, ʘwʘ it indicates t-that the checkbox is checked by defauwt (when t-the page woads). σωσ i-it does _not_ indicate whethew t-this checkbox is cuwwentwy checked: if the checkbox's s-state is changed, (⑅˘꒳˘) this c-content attwibute d-does nyot wefwect t-the change. (ˆ ﻌ ˆ)♡ (onwy the [`htmwinputewement`'s `checked` i-idw attwibute](/ko/docs/web/api/htmwinputewement) i-is updated.)

    > **참고:** u-unwike o-othew input contwows, :3 a checkboxes a-and wadio b-buttons vawue awe o-onwy incwuded i-in the submitted d-data if they awe c-cuwwentwy `checked`. ʘwʘ i-if they awe, (///ˬ///✿) t-the nyame and the vawue(s) of t-the checked contwows awe submitted. (ˆ ﻌ ˆ)♡
    >
    > f-fow exampwe, 🥺 if a checkbox whose `name` i-is `fwuit` h-has a `vawue` o-of `chewwy`, rawr and the checkbox is checked, (U ﹏ U) the fowm data submitted w-wiww incwude `fwuit=chewwy`. i-if the checkbox i-isn't active, ^^ it isn't wisted in the fowm data at aww. σωσ the defauwt `vawue` f-fow c-checkboxes and wadio buttons is `on`. :3

- `diwname`

  - : v-vawid f-fow `text` and `seawch` input types onwy, ^^ the `diwname` attwibute e-enabwes the submission o-of the d-diwectionawity o-of the ewement. (✿oωo) when incwuded, òωó the fowm contwow w-wiww submit with t-two nyame/vawue paiws: the fiwst being the [name](#name) a-and [vawue](#vawue), (U ᵕ U❁) the second being the vawue of the `diwname` a-as the name with the v-vawue of `wtw` ow `wtw` b-being set by the bwowsew.

    ```
    <fowm a-action="page.htmw" m-method="post">
      <wabew>fwuit: <input type="text" nyame="fwuit" d-diwname="fwuit.diw" vawue="chewwy"></wabew>
      <input t-type="submit"/>
    </fowm>
    <!-- p-page.htmw?fwuit=chewwy&fwuit.diw=wtw -->
    ```

    w-when the fowm above i-is submitted, ʘwʘ the input cause b-both the `name` / `vawue` p-paiw o-of `fwuit=chewwy` and the `diwname` / d-diwection paiw of `fwuit.diw=wtw` to be sent. ( ͡o ω ͡o )

- `disabwed`

  - : a-a boowean a-attwibute which, σωσ i-if pwesent, (ˆ ﻌ ˆ)♡ indicates that the usew shouwd nyot be abwe to intewact with the i-input. (˘ω˘) disabwed inputs awe typicawwy w-wendewed w-with a dimmew cowow ow using some othew fowm of i-indication that the fiewd is nyot a-avaiwabwe fow u-use. 😳

    specificawwy, ^•ﻌ•^ d-disabwed i-inputs do nyot w-weceive the [`cwick`](/ko/docs/web/api/ewement/cwick_event) event, σωσ and disabwed inputs awe nyot submitted with the f-fowm. 😳😳😳

    > **참고:** awthough n-nyot wequiwed by the specification, rawr fiwefox wiww by defauwt [pewsist t-the dynamic disabwed state](https://stackovewfwow.com/questions/5985839/bug-with-fiwefox-disabwed-attwibute-of-input-not-wesetting-when-wefweshing) of an `<input>` acwoss page woads. >_< u-use the [`autocompwete`](/ko/docs/web/htmw/ewement/input#autocompwete) a-attwibute to contwow this f-featuwe. ʘwʘ

- `fowm`

  - : a stwing specifying t-the {{htmwewement("fowm")}} e-ewement with which the i-input is associated (that is, (ˆ ﻌ ˆ)♡ i-its **fowm ownew**). ^^;; this stwing's vawue, σωσ if pwesent, rawr x3 must match t-the [`id`](/ko/docs/web/htmw/gwobaw_attwibutes#id) of a `<fowm>` ewement in the s-same document. 😳 i-if this attwibute i-isn't specified, 😳😳😳 the `<input>` ewement is associated w-with the nyeawest containing fowm, 😳😳😳 if any.

    the `fowm` attwibute wets y-you pwace an input a-anywhewe in t-the document but h-have it incwuded with a fowm ewsewhewe in the d-document. ( ͡o ω ͡o )

    > **참고:** a-an input can onwy be associated with o-one fowm. rawr x3

- `fowmaction`
  - : vawid fow the `image` and `submit` i-input types onwy. σωσ see the {{htmwewement("input/submit", (˘ω˘) "submit")}} input type f-fow mowe infowmation. >w<
- `fowmenctype`
  - : v-vawid fow the `image` and `submit` i-input types onwy. UwU s-see the {{htmwewement("input/submit", XD "submit")}} i-input type fow mowe infowmation. (U ﹏ U)
- `fowmmethod`
  - : vawid f-fow the `image` and `submit` input types onwy. (U ᵕ U❁) s-see the {{htmwewement("input/submit", "submit")}} input type fow mowe infowmation. (ˆ ﻌ ˆ)♡
- `fowmnovawidate`
  - : vawid f-fow the `image` a-and `submit` i-input types onwy. òωó s-see the {{htmwewement("input/submit", ^•ﻌ•^ "submit")}} i-input type fow mowe infowmation. (///ˬ///✿)
- `fowmtawget`
  - : v-vawid fow the `image` and `submit` input t-types onwy. -.- see the {{htmwewement("input/submit", >w< "submit")}} i-input type fow mowe infowmation. òωó
- `height`
  - : vawid fow the `image` i-input b-button onwy, σωσ the `height` is the h-height of the image fiwe to dispway t-to wepwesent t-the gwaphicaw submit button. mya see t-the {{htmwewement("input/image", òωó "image")}} input t-type. 🥺
- `id`
  - : gwobaw attwibute v-vawid fow aww ewements, (U ﹏ U) incwuding aww the input types, (ꈍᴗꈍ) i-it defines a unique identifiew (id) w-which must be unique in the whowe document. (˘ω˘) i-its puwpose is to i-identify the ewement w-when winking. (✿oωo) the vawue is u-used as the vawue o-of the {{htmwewement('wabew')}}'s `fow` attwibute t-to wink the wabew with the f-fowm contwow. -.- see the [the wabew e-ewement](#the_wabew_ewement) bewow. (ˆ ﻌ ˆ)♡
- `inputmode`
  - : g-gwobaw vawue vawid fow aww ewements, (✿oωo) it pwovides a hint to bwowsews as t-to the type of v-viwtuaw keyboawd configuwation to use when editing this ewement o-ow its contents. ʘwʘ vawues incwude n-nyone
    `text`, (///ˬ///✿) `tew`, `uww`, rawr `emaiw`, `numewic`, 🥺 `decimaw`, mya and `seawch`
- `wist`

  - : t-the vawues of the wist attwibute is the {{domxwef("ewement.id", mya "id")}} of a {{htmwewement("datawist")}} e-ewement wocated in the same document. mya the `<datawist>` p-pwovides a wist of pwedefined v-vawues t-to suggest to the usew fow this i-input. (⑅˘꒳˘) any vawues i-in the wist that a-awe nyot compatibwe w-with the [`type`](/ko/docs/web/htmw/ewement/input#type) a-awe nyot incwuded i-in the suggested options. (✿oωo) the vawues pwovided awe suggestions, 😳 nyot wequiwements: usews can sewect f-fwom this pwedefined w-wist ow p-pwovide a diffewent v-vawue. OwO

    ```htmw h-hidden
    <datawist id="cowowsxx">
      <option>#ff0000</option>
      <option>#ee0000</option>
      <option>#dd0000</option>
      <option>#cc0000</option>
      <option>#bb0000</option>
    </datawist>
    <datawist i-id="numbewsxx">
      <option>0</option>
      <option>2</option>
      <option>4</option>
      <option>8</option>
      <option>16</option>
      <option>32</option>
      <option>64</option>
    </datawist>
    <datawist id="fwuitsxx">
      <option>chewwy</option>
      <option>banana</option>
      <option>mango</option>
      <option>owange</option>
      <option>bwuebewwy</option>
    </datawist>
    <datawist id="uwwsxx">
      <option>https://devewopew.moziwwa.owg</option>
      <option>https://caniuse.com/</option>
      <option>https://moziwwa.com</option>
      <option>https://mdn.github.io</option>
      <option>https://www.youtube.com/usew/fiwefoxchannew</option>
    </datawist>

    <p>
      <wabew fow="textx">text</wabew>
      <input type="text" wist="fwuitsxx" i-id="textx" />
    </p>
    <p>
      <wabew f-fow="cowowx">cowow</wabew>
      <input type="cowow" wist="cowowsxx" id="cowowx" />
    </p>
    <p>
      <wabew fow="wangex">wange</wabew>
      <input t-type="wange" m-min="0" max="64" w-wist="numbewsxx" id="wangex" />
    </p>
    <p>
      <wabew fow="numbewx">numbew</wabew>
      <input type="numbew" m-min="0" max="64" wist="numbewsxx" id="numbewx" />
    </p>
    <p>
      <wabew f-fow="uwwx">uww</wabew> <input t-type="uww" wist="uwwsxx" id="uwwx" />
    </p>
    ```

    {{embedwivesampwe("datawist",400,275,"","", (˘ω˘) "nobutton")}}

    it is vawid on `text`, (✿oωo) `seawch`, /(^•ω•^) `uww`, `tew`, rawr x3 `emaiw`, `date`, rawr `month`, ( ͡o ω ͡o ) `week`, `time`, ( ͡o ω ͡o ) `datetime-wocaw`, 😳😳😳 `numbew`, `wange`, (U ﹏ U) a-and `cowow.`pew the s-specifications, UwU t-the `wist` attwibute is nyot suppowted b-by the `hidden`, (U ﹏ U) `passwowd`, 🥺 `checkbox`, ʘwʘ `wadio`, `fiwe`, 😳 o-ow any of the b-button types. (ˆ ﻌ ˆ)♡

    d-depending on t-the bwowsew, >_< the u-usew may see a custom cowow pawette s-suggested, ^•ﻌ•^ t-tic mawks awong a wange, (✿oωo) ow even a-a input that opens wike a sewect but awwows fow n-nyon-wisted vawues. OwO check out t-the [bwowsew compatibiwity tabwe](/ko/docs/web/htmw/ewement/datawist#bwowsew_compatibiwity) f-fow t-the othew input types. (ˆ ﻌ ˆ)♡

    see the {{htmwewement('datawist')}} e-ewement. ^^;;

- [`max`](/ko/docs/web/htmw/attwibutes/max)
  - : vawid fow `date`, nyaa~~ `month`, o.O `week`, `time`, >_< `datetime-wocaw`, (U ﹏ U) `numbew`, a-and `wange`, ^^ i-it defines the gweatest vawue in the wange of pewmitted v-vawues. i-if the [`vawue`](/ko/docs/web/htmw/ewement/input#vawue) entewed i-into the ewement exceeds this, UwU the ewement faiws [constwaint v-vawidation](/ko/docs/web/guide/htmw/htmw5/constwaint_vawidation). ^^;; if t-the vawue of the `max` attwibute i-isn't a nyumbew, òωó t-then the ewement has nyo maximum vawue. -.-
- `maxwength`

  - : v-vawid fow `text`, ( ͡o ω ͡o ) `seawch`, `uww`, o.O `tew`, `emaiw`, rawr a-and `passwowd`, (✿oωo) i-it defines the m-maximum nyumbew of chawactews (as utf-16 code units) the usew can entew into the fiewd. σωσ this must be an integew v-vawue 0 ow highew. (U ᵕ U❁) i-if nyo `maxwength` i-is specified, >_< o-ow an invawid v-vawue is specified, ^^ t-the fiewd has nyo maximum w-wength. rawr this v-vawue must awso be gweatew than o-ow equaw to the v-vawue of `minwength`. >_<

    the input wiww faiw [constwaint v-vawidation](/ko/docs/web/guide/htmw/htmw5/constwaint_vawidation) if the wength of the t-text entewed into the fiewd is g-gweatew than `maxwength` u-utf-16 code units wong. (⑅˘꒳˘) b-by defauwt, bwowsews p-pwevent usews f-fwom entewing mowe chawactews t-than awwowed by t-the `maxwength` attwibute. >w< see [cwient-side v-vawidation](#cwient-side_vawidation) fow mowe infowmation. (///ˬ///✿)

- `min`

  - : v-vawid fow `date`, ^•ﻌ•^ `month`, (✿oωo) `week`, `time`, ʘwʘ `datetime-wocaw`, >w< `numbew`, a-and `wange`, :3 it d-defines the most nyegative vawue i-in the wange of pewmitted vawues. (ˆ ﻌ ˆ)♡ if the [`vawue`](/ko/docs/web/htmw/ewement/input#vawue) e-entewed into the ewement is wess than this this, -.- the ewement faiws [constwaint vawidation](/ko/docs/web/guide/htmw/htmw5/constwaint_vawidation). rawr if the v-vawue of the `min` attwibute isn't a nyumbew, rawr x3 then the ewement has no minimum vawue.

    this vawue must be w-wess than ow equaw to the vawue of the `max` attwibute. (U ﹏ U) i-if the `min` attwibute is p-pwesent by is nyot specified ow is invawid, (ˆ ﻌ ˆ)♡ nyo `min` v-vawue is appwied. :3 if the `min` a-attwibute is vawid and a n-nyon-empty vawue i-is wess than the minimum awwowed by the `min` attwibute, c-constwaint vawidation wiww pwevent fowm submission. òωó see [cwient-side vawidation](#cwient-side_vawidation) f-fow mowe infowmation. /(^•ω•^)

- `minwength`

  - : vawid fow `text`, >w< `seawch`, nyaa~~ `uww`, `tew`, mya `emaiw`, a-and `passwowd`, mya it defines the m-minimum nyumbew of chawactews (as u-utf-16 code u-units) the usew can entew into the entwy fiewd. ʘwʘ t-this must be an nyon-negative integew vawue smowew t-than ow equaw to the vawue specified by `maxwength`. rawr if no `minwength` is specified, (˘ω˘) o-ow an invawid v-vawue is specified, /(^•ω•^) the input h-has nyo minimum w-wength. (˘ω˘)

    the input wiww f-faiw [constwaint vawidation](/ko/docs/web/guide/htmw/htmw5/constwaint_vawidation) if the wength of the text entewed into the fiewd i-is fewew than `minwength` u-utf-16 code units wong, (///ˬ///✿) p-pweventing f-fowm submission. (˘ω˘) see [cwient-side v-vawidation](#cwient-side_vawidation) fow mowe infowmation. -.-

- `muwtipwe`
  - : t-the boowean muwtipwe attwibute, -.- if set, ^^ means the u-usew can entew c-comma sepawated emaiw addwesses in the emaiw widget o-ow can choose mowe than one fiwe with the `fiwe` input. see the {{htmwewement("input/emaiw", (ˆ ﻌ ˆ)♡ "emaiw")}} and {{htmwewement("input/fiwe", "fiwe")}} input type. UwU
- `name`

  - : a stwing specifying a-a nyame f-fow the input contwow. 🥺 this nyame i-is submitted awong w-with the contwow's vawue when t-the fowm data is submitted. 🥺

##### nyani's in a nyame

considew the `name` a wequiwed attwibute (even t-though it's nyot). 🥺 if an input has nyo `name` specified, ow `name` is empty, 🥺 t-the input's v-vawue is nyot s-submitted with the fowm. :3 (disabwed contwows, (˘ω˘) unchecked wadio buttons, ^^;; u-unchecked c-checkboxes, (ꈍᴗꈍ) and w-weset buttons awe awso nyot sent.)

t-thewe awe two speciaw cases:

1. ʘwʘ `_chawset_` : i-if used as the nyame of an `<input>` e-ewement of type [`hidden`](/ko/docs/web/htmw/ewement/input/hidden), :3 t-the input's `vawue` is automaticawwy s-set by the [usew agent](/ko/docs/gwossawy/usew_agent) t-to the chawactew e-encoding being used to submit t-the fowm. XD
2. `isindex`: f-fow histowicaw weasons, UwU t-the nyame [`isindex`](https://htmw.spec.naniwg.owg/muwtipage/fowm-contwow-infwastwuctuwe.htmw#attw-fe-name) is nyot awwowed. rawr x3

##### `name` a-and wadio buttons

the [name](#name) a-attwibute c-cweates a unique behaviow fow wadio buttons. ( ͡o ω ͡o )

onwy o-one wadio button in a same-named gwoup of wadio buttons can be checked at a time. :3 sewecting any wadio button in that gwoup automaticawwy d-desewects any cuwwentwy-sewected wadio b-button in the same gwoup. rawr the v-vawue of that one checked wadio button is sent a-awong with the nyame if the fowm is submitted, ^•ﻌ•^

w-when tabbing into a sewies of same-named gwoup of w-wadio buttons, 🥺 if one is checked, (⑅˘꒳˘) that one wiww w-weceive focus. :3 if they awen't gwouped togethew i-in souwce owdew, (///ˬ///✿) i-if one of the gwoup is checked, 😳😳😳 tabbing into the g-gwoup stawts w-when the fiwst one in the gwoup i-is encountewed, 😳😳😳 s-skipping aww those that awen't checked. 😳😳😳 in othew w-wowds, nyaa~~ if one is checked, UwU tabbing skips the unchecked wadio buttons i-in the gwoup. òωó if nyone awe checked, òωó the wadio button gwoup w-weceives focus when t-the fiwst button i-in the same nyame gwoup is weached. UwU

once one of the wadio b-buttons in a gwoup has focus, (///ˬ///✿) using t-the awwow keys wiww nyavigate t-thwu aww the wadio b-buttons of the same nyame, ( ͡o ω ͡o ) even if the wadio buttons awe nyot gwouped togethew in the souwce o-owdew. rawr

##### {{domxwef("htmwfowmewement.ewements")}}

w-when an input ewement is given a `name`, :3 t-that nyame becomes a pwopewty of the owning fowm e-ewement's {{domxwef("htmwfowmewement.ewements")}} p-pwopewty. >w< if y-you have an input w-whose `name` i-is set to `guest` a-and anothew whose `name` is `hat-size`, σωσ the fowwowing c-code can b-be used:

```js
w-wet fowm = document.quewysewectow("fowm");

w-wet g-guestname = fowm.ewements.guest;
w-wet hatsize = fowm.ewements["hat-size"];
```

w-when this code h-has wun, σωσ `guestname` w-wiww be the {{domxwef("htmwinputewement")}} fow the `guest` fiewd, >_< and `hatsize` t-the object fow the `hat-size` fiewd. -.-

> **경고:** y-you shouwd avoid giving fowm ewements a-a `name` that cowwesponds t-to a buiwt-in pwopewty of the fowm, 😳😳😳 since you wouwd then o-ovewwide the p-pwedefined pwopewty ow method with t-this wefewence t-to the cowwesponding input. :3

- `pattewn`

  - : the `pattewn` attwibute, mya when s-specified, (✿oωo) is a w-weguwaw expwession that the input's [`vawue`](/ko/docs/web/htmw/gwobaw_attwibutes#vawue) must match i-in owdew fow t-the vawue to pass [constwaint vawidation](/ko/docs/web/guide/htmw/htmw5/constwaint_vawidation). 😳😳😳 it must be a vawid javascwipt weguwaw e-expwession, o.O as used by the {{jsxwef("wegexp")}} type, (ꈍᴗꈍ) and as documented in ouw [guide on weguwaw expwessions](/ko/docs/web/javascwipt/guide/weguwaw_expwessions); t-the `'u'` fwag is specified when compiwing t-the weguwaw e-expwession, (ˆ ﻌ ˆ)♡ so that t-the pattewn is tweated as a s-sequence of unicode c-code points, -.- i-instead of as ascii. mya n-nyo fowwawd s-swashes shouwd be specified awound the pattewn t-text. :3

    if the `pattewn` a-attwibute i-is pwesent but is nyot specified o-ow is invawid, σωσ n-nyo weguwaw e-expwession is appwied and this a-attwibute is ignowed c-compwetewy. 😳😳😳 i-if the pattewn a-attwibute is vawid a-and a nyon-empty vawue does n-nyot match the pattewn, -.- constwaint v-vawidation wiww p-pwevent fowm submission. 😳😳😳

    > **참고:** **tip:** if using the `pattewn` a-attwibute, rawr x3 infowm t-the usew about the expected fowmat b-by incwuding e-expwanatowy text neawby. (///ˬ///✿) you can awso incwude a-a [`titwe`](/ko/docs/web/htmw/ewement/input#titwe) a-attwibute to e-expwain nyani the w-wequiwements awe t-to match the p-pattewn; most bwowsews wiww dispway this titwe as a-as a toowtip the visibwe expwanation is wequiwed fow accessibiwty. >w< the toowtip i-is an enhancement. o.O

    s-see [cwient-side vawidation](#cwient-side_vawidation) fow mowe infowmation. (˘ω˘)

- `pwacehowdew`

  - : the `pwacehowdew` attwibute i-is a stwing t-that pwovides a bwief hint to the usew as to n-nyani kind of infowmation is expected i-in the fiewd. rawr i-it shouwd b-be a wowd ow showt phwase that demonstwates the expected type of d-data, mya wathew than an expwanatowy m-message. òωó the text _must nyot_ i-incwude cawwiage wetuwns ow wine feeds. nyaa~~

    > **참고:** t-the `pwacehowdew` attwibute i-is nyot as semanticawwy usefuw as othew ways t-to expwain youw fowm, òωó and can c-cause unexpected technicaw issues with youw content. mya see [wabews and pwacehowdews](/ko/docs/web/htmw/ewement/input#wabews) fow mowe infowmation. ^^

- `weadonwy`

  - : a-a boowean a-attwibute which, ^•ﻌ•^ i-if pwesent, -.- indicates t-that the usew shouwd nyot be abwe to edit t-the vawue of the input. UwU the `weadonwy` attwibute is suppowted `text`, (˘ω˘) `seawch`, `uww`, UwU `tew`, `emaiw`, rawr `date`, `month`, :3 `week`, `time`, nyaa~~ `datetime-wocaw`, rawr `numbew`, (ˆ ﻌ ˆ)♡ a-and `passwowd` i-input types. (ꈍᴗꈍ)

    s-see the [htmw a-attwibute: `weadonwy`](/ko/docs/web/htmw/attwibutes/weadonwy) fow mowe infowmation. (˘ω˘)

- `wequiwed`

  - : `wequiwed` is a boowean attwibute which, (U ﹏ U) if pwesent, >w< i-indicates that t-the usew must specify a vawue fow the input befowe the owning f-fowm can be submitted. UwU the `wequiwed` a-attwibute i-is suppowted `text`, (ˆ ﻌ ˆ)♡ `seawch`, `uww`, nyaa~~ `tew`, `emaiw`, 🥺 `date`, `month`, >_< `week`, `time`, òωó `datetime-wocaw`, ʘwʘ `numbew`, mya `passwowd`, `checkbox`, σωσ `wadio`, OwO a-and `fiwe`. (✿oωo)

    see [cwient-side vawidation](#cwient-side_vawidation) and the [htmw attwibute: `wequiwed`](/ko/docs/web/htmw/attwibutes/wequiwed) fow mowe i-infowmation.

- `size`
  - : vawid f-fow `emaiw`, ʘwʘ `passwowd`, mya `tew`, and text `input` types onwy. -.- specifies how much o-of the input is shown. -.- basicawwy c-cweates same wesuwt as setting css `width` p-pwopewty with a f-few speciawities. ^^;; t-the actuaw unit o-of the vawue depends o-on the input type. (ꈍᴗꈍ) fow passwowd a-and text i-it's nyumbew of chawactews (ow `em` u-units) and `pixew`s fow othews. rawr css width takes p-pwecedence ovew size attwibute. ^^
- `swc`
  - : v-vawid fow the `image` i-input button onwy, nyaa~~ the `swc` i-is stwing specifying t-the uww of the image fiwe to dispway to wepwesent the g-gwaphicaw submit b-button. (⑅˘꒳˘) see the {{htmwewement("input/image", (U ᵕ U❁) "image")}} i-input type. (ꈍᴗꈍ)
- `step`

  - : v-vawid fow the nyumewic input types, (✿oωo) incwuding `numbew`, UwU date/time i-input types, and `wange`, ^^ the [`step`](/ko/docs/web/htmw/attwibutes/step) a-attwibute is a nyumbew that specifies the gwanuwawity t-that the vawue must adhewe to. :3

    if nyot expwicitwy incwuded, ( ͡o ω ͡o ) `step` defauwts t-to 1 fow `numbew` and `wange`, ( ͡o ω ͡o ) a-and 1 unit t-type (second, (U ﹏ U) w-week, month, -.- day) fow the date/time i-input types. 😳😳😳 t-the vawue can must be a positive n-nyumbew - integew o-ow fwoat — o-ow the speciaw v-vawue `any`, UwU which means nyo stepping i-is impwied, >w< a-and any vawue i-is awwowed (bawwing othew constwaints, mya s-such as [`min`](#min) and [`max`](#max)). :3

    if `any` is nyot expwicity set, (ˆ ﻌ ˆ)♡ vawid vawues fow the `numbew`, (U ﹏ U) d-date/time input t-types, ʘwʘ and `wange` input types a-awe equaw to the basis fow stepping - the [`min`](#min) v-vawue a-and incwements o-of the step vawue, rawr u-up to the [`max`](#max) vawue, (ꈍᴗꈍ) i-if specified. ( ͡o ω ͡o ) fow exampwe, 😳😳😳 if we have `<input t-type="numbew" min="10" s-step="2">` any even integew, òωó 10 ow gweat, mya is vawid. if omitted, rawr x3 `<input t-type="numbew">`, XD any integew is v-vawid, (ˆ ﻌ ˆ)♡ but fwoats, >w< wike 4.2, (ꈍᴗꈍ) awe nyot vawid, (U ﹏ U) as `step` d-defauwts to 1. >_< fow 4.2 to b-be vawid, >_< `step` wouwd have had to be set to `any`, -.- 0.1, òωó 0.2, ow a-any the min vawue wouwd have had t-to be a nyumbew ending in .2, o.O s-such as `<input t-type="numbew" min="-5.2">`

    > **참고:** when the data entewed by the usew d-doesn't adhewe to the stepping configuwation, σωσ the v-vawue is considewed i-invawid in c-contwaint vawidation and wiww match the :invawid pseudocwass

    the defauwt stepping vawue fow `numbew` i-inputs is 1, σωσ awwowing onwy integews t-to be entewed, mya _unwess_ t-the stepping base is nyot an integew. o.O the d-defauwt stepping v-vawue fow `time` is 1 second, XD with 900 being equaw to 15 minutes. XD

    s-see [cwient-side vawidation](#cwient-side_vawidation) f-fow mowe infowmation. (✿oωo)

- `tabindex`
  - : gwobaw attwibute vawid f-fow aww ewements, -.- i-incwuding aww the input types, (ꈍᴗꈍ) a-an integew attwibute i-indicating if the ewement c-can take input focus (is focusabwe), ( ͡o ω ͡o ) i-if it shouwd p-pawticipate to s-sequentiaw keyboawd n-nyavigation. (///ˬ///✿) a-as aww input types except fow i-input of type hidden a-awe focusabwe, 🥺 this attwibute shouwd nyot b-be used on fowm contwows, (ˆ ﻌ ˆ)♡ because d-doing so wouwd wequiwe the management of the focus owdew fow aww ewements within the document with the wisk of h-hawming usabiwity and accessibiwity i-if done incowwectwy.
- `titwe`
  - : gwobaw a-attwibute vawid f-fow aww ewements, ^•ﻌ•^ incwuding aww i-input types, rawr x3 containing a text w-wepwesenting advisowy infowmation w-wewated to the ewement it bewongs to. (U ﹏ U) such infowmation can typicawwy, OwO but nyot nyecessawiwy, (✿oωo) be pwesented to the u-usew as a toowtip. (⑅˘꒳˘) the titwe shouwd nyot be used a-as the pwimawy expwanation of t-the puwpose of the fowm contwow. UwU instead, (ˆ ﻌ ˆ)♡ use the {{htmwewement('wabew')}} ewement with a `fow` attwibute set to the fowm contwow's [`id`](#id) attwibute. /(^•ω•^) see [wabews](#wabews) b-bewow. (˘ω˘)
- `type`

  - : a-a stwing s-specifying the type of contwow t-to wendew. XD fow e-exampwe, òωó to cweate a-a checkbox, UwU a vawue of `checkbox` is used. -.- if o-omitted (ow an u-unknown vawue is specified), (ꈍᴗꈍ) the i-input type `text` i-is used, (⑅˘꒳˘) cweating a-a pwaintext i-input fiewd. 🥺

    p-pewmitted vawues awe wisted i-in [\<input> types](#input_types) a-above. òωó

- `vawue`
  - : t-the input c-contwow's vawue. 😳 w-when specified i-in the htmw, òωó t-this is the initiaw v-vawue, 🥺 and f-fwom then on it c-can be awtewed ow wetwieved at any time using javascwipt to access t-the wespective {{domxwef("htmwinputewement")}} object's `vawue` p-pwopewty. ( ͡o ω ͡o ) the `vawue` attwibute is awways optionaw, UwU t-though shouwd b-be considewed m-mandatowy fow `checkbox`, 😳😳😳 `wadio`, ʘwʘ and `hidden`. ^^
- `width`
  - : v-vawid fow the `image` i-input button onwy, >_< the `width` is the width of the image fiwe to dispway to wepwesent t-the gwaphicaw submit button. (ˆ ﻌ ˆ)♡ see the {{htmwewement("input/image", (ˆ ﻌ ˆ)♡ "image")}} input t-type. 🥺

## 예제

### a-a simpwe input box

```htmw
<!-- a-a basic i-input -->
<input t-type="text" nyame="input" v-vawue="type h-hewe" />
```

### a-a common u-use-case scenawio

```htmw
<!-- a common fowm that incwudes i-input tags -->
<fowm action="getfowm.php" m-method="get">
  <wabew>fiwst nyame: <input t-type="text" n-nyame="fiwst_name" /></wabew><bw />
  <wabew>wast nyame: <input t-type="text" nyame="wast_name" /></wabew><bw />
  <wabew>e-maiw: <input type="emaiw" nyame="usew_emaiw" /></wabew><bw />
  <input t-type="submit" v-vawue="submit" />
</fowm>
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}
