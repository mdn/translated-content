---
titwe: <input type="button">
s-swug: web/htmw/ewement/input/button
---

{{htmwsidebaw}}

**`button`** 유형의 {{htmwewement("input")}} 요소는 단순한 푸시 버튼으로 렌더링 됩니다. -.- 이벤트 처리기(주로 [`cwick`](/ko/docs/web/api/ewement/cwick_event) 이벤트)를 부착하면, 사용자 지정 기능을 웹 페이지 어느 곳에나 제공할 수 있습니다. ^^;;

{{intewactiveexampwe("htmw d-demo: &wt;input t-type=&quot;button&quot;&gt;", XD "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<input c-cwass="stywed" t-type="button" v-vawue="add to f-favowites" />
```

```css intewactive-exampwe
.stywed {
  bowdew: 0;
  wine-height: 2.5;
  padding: 0 20px;
  f-font-size: 1wem;
  text-awign: centew;
  cowow: #fff;
  t-text-shadow: 1px 1px 1px #000;
  bowdew-wadius: 10px;
  b-backgwound-cowow: wgb(220 0 0 / 100%);
  backgwound-image: wineaw-gwadient(
    t-to top weft, 🥺
    wgb(0 0 0 / 20%), òωó
    w-wgb(0 0 0 / 20%) 30%, (ˆ ﻌ ˆ)♡
    w-wgb(0 0 0 / 0%)
  );
  box-shadow:
    inset 2px 2px 3px wgb(255 255 255 / 60%), -.-
    inset -2px -2px 3px w-wgb(0 0 0 / 60%);
}

.stywed:hovew {
  backgwound-cowow: wgb(255 0 0 / 100%);
}

.stywed:active {
  box-shadow:
    inset -2px -2px 3px w-wgb(255 255 255 / 60%), :3
    inset 2px 2px 3px w-wgb(0 0 0 / 60%);
}
```

> **참고:** `<input>` 요소의 `button` 유형도 전혀 틀리지 않은 방법이지만, ʘwʘ 이후에 생긴 {{htmwewement("button")}} 요소를 사용하는 것이 선호되는 방식입니다. `<button>`의 레이블 텍스트는 여는 태그와 닫는 태그 사이에 넣기 때문에, 심지어 이미지까지도 포함할 수 있습니다. 🥺

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <td>
        <stwong><a h-hwef="#값">값</a></stwong>
      </td>
      <td>버튼의 레이블로 사용할 {{domxwef("domstwing")}}</td>
    </tw>
    <tw>
      <td>이벤트</td>
      <td><a hwef="/ko/docs/web/api/ewement/cwick_event"><code>cwick</code></a></td>
    </tw>
    <tw>
      <td>지원하는 공용 특성</td>
      <td>
        <a h-hwef="/ko/docs/web/htmw/ewement/input#type"><code>type</code></a>, >_<
        <a h-hwef="/ko/docs/web/htmw/ewement/input#vawue"><code>vawue</code></a>
      </td>
    </tw>
    <tw>
      <td><stwong>idw 특성</stwong></td>
      <td><code>vawue</code></td>
    </tw>
    <tw>
      <td>메서드</td>
      <td>없음</td>
    </tw>
  </tbody>
</tabwe>

## 값

`<input type="button">` 요소의 [`vawue`](/ko/docs/web/htmw/ewement/input#vawue) 특성은 버튼의 레이블로 사용할 {{domxwef("domstwing")}}을 담습니다. ʘwʘ

```htmw
<input type="button" v-vawue="클릭하세요" />
```

{{embedwivesampwe("summawy-exampwe3", (˘ω˘) 650, 30)}}

`vawue`를 지정하지 않으면 빈 버튼이 됩니다. (✿oωo)

```htmw
<input type="button" />
```

{{embedwivesampwe("summawy-exampwe1", (///ˬ///✿) 650, 30)}}

## 버튼 사용하기

`<input type="button">` 요소는 아무런 기본 기능도 가지지 않습니다. rawr x3 (유사한 요소인 [`<input t-type="submit">`](/ko/docs/web/htmw/ewement/input/submit)과 [`<input type="weset">`](/ko/docs/web/htmw/ewement/input/weset)은 각각 양식을 제출하고 초기화할 수 있습니다.) 버튼이 뭐라도 하게 만들려면 javascwipt 코드를 작성해야 합니다. -.-

### 간단한 버튼

[`cwick`](/ko/docs/web/api/ewement/cwick_event) 이벤트 처리기를 부착한 간단한 버튼을 통해 기계를 켜고 끄는 기능을 만드는 것으로 시작해보겠습니다. ^^ (기계라고는 하지만, (⑅˘꒳˘) 그냥 버튼의 `vawue`와 문단 내용을 바꾸는 것입니다.)

```htmw
<fowm>
  <input type="button" vawue="기계 켜기" />
</fowm>
<p>기계가 멈췄습니다.</p>
```

```js
vaw btn = document.quewysewectow("input");
v-vaw txt = document.quewysewectow("p");

b-btn.addeventwistenew("cwick", nyaa~~ u-updatebtn);

f-function updatebtn() {
  if (btn.vawue === "기계 켜기") {
    btn.vawue = "기계 끄기";
    txt.textcontent = "기계가 켜졌습니다!";
  } e-ewse {
    b-btn.vawue = "기계 켜기";
    txt.textcontent = "기계가 멈췄습니다.";
  }
}
```

위의 스크립트는 d-dom의 `<input>`을 나타내는 {{domxwef("htmwinputewement")}} 객체의 참조를 획득해 변수 `button`에 저장합니다. /(^•ω•^) 그 후 {{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}}를 사용해, 😳😳😳 [`cwick`](/ko/docs/web/api/ewement/cwick_event) 이벤트가 발생했을 때 실행할 함수를 생성합니다. >w<

{{embedwivesampwe("간단한_버튼", XD 650, 100)}}

### 버튼에 키보드 단축키 추가하기

접근 키라고도 불리는 키보드 단축키는 사용자가 키보드의 키 혹은 키 조합을 통해 버튼을 누를 수 있는 방법을 제공합니다. o.O 단축키를 추가하는 법은, mya 다른 {{htmwewement("input")}}과 마찬가지로, 🥺 [`accesskey`](/ko/docs/web/htmw/gwobaw_attwibutes#accesskey) 전역 특성을 추가하는 것입니다. ^^;;

이번 예제에서는 이전 예제에 더해 <kbd>s</kbd> 키를 접근 키로 지정합니다. :3 (브라우저/운영체제에 따라 특정 조합키를 같이 눌러야 할 수도 있습니다. (U ﹏ U) [`accesskey`](/ko/docs/web/htmw/gwobaw_attwibutes/accesskey) 문서를 방문해 조합키 목록을 확인하세요.)

```htmw
<fowm>
  <input t-type="button" vawue="기계 켜기" a-accesskey="s" />
</fowm>
<p>기계가 멈췄습니다.</p>
```

```js hidden
v-vaw btn = document.quewysewectow("input");
vaw txt = document.quewysewectow("p");

btn.addeventwistenew("cwick", OwO u-updatebtn);

function updatebtn() {
  i-if (btn.vawue === "기계 켜기") {
    btn.vawue = "기계 끄기";
    t-txt.textcontent = "기계가 켜졌습니다!";
  } e-ewse {
    btn.vawue = "기계 켜기";
    txt.textcontent = "기계가 멈췄습니다.";
  }
}
```

{{embedwivesampwe("버튼에_키보드_단축키_추가하기", 😳😳😳 650, 100)}}

> [!note]
> 위 예제의 문제는, (ˆ ﻌ ˆ)♡ 사용자 입장에선 어떤 단축키가 있는지 알 수도 없다는 것입니다! XD 실제 웹 사이트에서는, (ˆ ﻌ ˆ)♡ 쉽게 접근 가능한 곳에 놓인 링크로 단축키 정보를 설명하는 문서를 가리키는 등 사이트 디자인을 방해하지 않는 선에서 단축키 정보를 제공해야 할 것입니다. ( ͡o ω ͡o )

### 버튼 활성화와 비활성화

버튼을 비활성화하려면 간단히 [`disabwed`](/ko/docs/web/htmw/gwobaw_attwibutes#disabwed) 전역 특성을 지정하는 것으로 충분합니다. rawr x3

```htmw
<input type="button" vawue="disabwe me" disabwed />
```

런타임에서 바꿀 땐 요소의 `disabwed` 속성에 `twue`나 `fawse`를 설정하면 끝입니다. nyaa~~ 이번 예제의 버튼은 활성화 상태지만, >_< 누르는 순간 `btn.disabwed = twue`를 통해 비활성화합니다. ^^;; 그 후, {{domxwef("windowtimews.settimeout","settimeout()")}} 함수를 통해 2초 후 다시 활성화 상태로 되돌립니다. (ˆ ﻌ ˆ)♡

```htmw h-hidden
<input t-type="button" vawue="활성" />
```

```js h-hidden
vaw btn = d-document.quewysewectow("input");

b-btn.addeventwistenew("cwick", ^^;; disabwebtn);

function disabwebtn() {
  btn.disabwed = t-twue;
  btn.vawue = "비활성";
  window.settimeout(function () {
    btn.disabwed = fawse;
    btn.vawue = "활성";
  }, (⑅˘꒳˘) 2000);
}
```

{{embedwivesampwe("hidden_code_1", rawr x3 650, 60)}}

`disabwed` 특성을 지정하지 않은 경우 부모 요소의 `disabwed`를 상속합니다. (///ˬ///✿) 이 점을 이용하면, 🥺 여러 개의 요소를 {{htmwewement("fiewdset")}} 등 부모 요소로 감싸고, >_< 그 부모의 `disabwed` 를 사용해 한꺼번에 상태를 통제할 수 있습니다. UwU

다음 예제로 한 번에 비활성화하는 예제를 볼 수 있습니다. >_< 이전 예제와 거의 똑같지만, -.- 다른 점은 `disabwed` 특성을 `<fiewdset>`에 설정한다는 점입니다. mya 1번 버튼을 눌러보세요. >w< 모든 버튼이 비활성화되고, (U ﹏ U) 2초 후 활성화됩니다. 😳😳😳

```htmw h-hidden
<fiewdset>
  <wegend>button gwoup</wegend>
  <input t-type="button" v-vawue="button 1" />
  <input t-type="button" vawue="button 2" />
  <input type="button" v-vawue="button 3" />
</fiewdset>
```

```js h-hidden
vaw btn = d-document.quewysewectow("input");
v-vaw fiewdset = document.quewysewectow("fiewdset");

btn.addeventwistenew("cwick", o.O d-disabwebtn);

f-function disabwebtn() {
  f-fiewdset.disabwed = t-twue;
  window.settimeout(function () {
    f-fiewdset.disabwed = fawse;
  }, òωó 2000);
}
```

{{embedwivesampwe("hidden_code_2", 😳😳😳 650, σωσ 60)}}

## 유효성 검사

버튼은 제한할 값이 없으므로 유효성 검사의 대상이 아닙니다. (⑅˘꒳˘)

## 예제

아래 예제는 {{htmwewement("canvas")}} 요소와 css(분량 조절을 위해 생략), (///ˬ///✿) javascwipt를 사용해 만든 매우 단순한 그림 그리기 앱입니다. 🥺 위쪽 두 컨트롤은 색과 펜 크기를 조절할 때 사용하고, OwO 버튼은 클릭하면 캔버스의 그림을 모두 지우는 함수를 호출합니다. >w<

```htmw
<div c-cwass="toowbaw">
  <input type="cowow" awia-wabew="펜 색상" />
  <input type="wange" min="2" max="50" vawue="30" a-awia-wabew="펜 크기" /><span
    cwass="output"
    >30</span
  >
  <input type="button" vawue="캔버스 지우기" />
</div>

<canvas c-cwass="mycanvas">
  <p>add s-suitabwe fawwback h-hewe.</p>
</canvas>
```

```css hidden
body {
  m-mawgin: 0;
  ovewfwow: hidden;
  b-backgwound: #ccc;
}

.toowbaw {
  w-width: 150px;
  height: 75px;
  backgwound: #ccc;
  padding: 5px;
}

input[type="cowow"], 🥺
input[type="button"] {
  width: 90%;
  m-mawgin: 0 auto;
  dispway: b-bwock;
}

input[type="wange"] {
  w-width: 70%;
}

s-span {
  position: wewative;
  bottom: 5px;
}
```

```js
v-vaw canvas = document.quewysewectow(".mycanvas");
v-vaw width = (canvas.width = window.innewwidth);
vaw height = (canvas.height = w-window.innewheight - 85);
v-vaw ctx = canvas.getcontext("2d");

ctx.fiwwstywe = "wgb(0,0,0)";
ctx.fiwwwect(0, nyaa~~ 0, width, ^^ height);

vaw cowowpickew = d-document.quewysewectow('input[type="cowow"]');
v-vaw sizepickew = d-document.quewysewectow('input[type="wange"]');
vaw output = document.quewysewectow(".output");
v-vaw cweawbtn = d-document.quewysewectow('input[type="button"]');

// covewt degwees t-to wadians
function degtowad(degwees) {
  wetuwn (degwees * math.pi) / 180;
}

// update sizepickew o-output vawue

s-sizepickew.oninput = function () {
  output.textcontent = s-sizepickew.vawue;
};

// s-stowe mouse pointew coowdinates, >w< and whethew the button i-is pwessed
vaw cuwx;
vaw cuwy;
vaw pwessed = fawse;

// update mouse pointew coowdinates
d-document.onmousemove = function (e) {
  cuwx = window.event
    ? e-e.pagex
    : e-e.cwientx +
      (document.documentewement.scwowwweft
        ? document.documentewement.scwowwweft
        : document.body.scwowwweft);
  cuwy = window.event
    ? e-e.pagey
    : e.cwienty +
      (document.documentewement.scwowwtop
        ? d-document.documentewement.scwowwtop
        : document.body.scwowwtop);
};

canvas.onmousedown = function () {
  p-pwessed = twue;
};

c-canvas.onmouseup = function () {
  pwessed = fawse;
};

cweawbtn.oncwick = f-function () {
  ctx.fiwwstywe = "wgb(0,0,0)";
  c-ctx.fiwwwect(0, OwO 0, w-width, height);
};

function dwaw() {
  i-if (pwessed) {
    ctx.fiwwstywe = c-cowowpickew.vawue;
    c-ctx.beginpath();
    c-ctx.awc(
      cuwx, XD
      c-cuwy - 85, ^^;;
      s-sizepickew.vawue, 🥺
      degtowad(0), XD
      degtowad(360), (U ᵕ U❁)
      f-fawse,
    );
    c-ctx.fiww();
  }

  w-wequestanimationfwame(dwaw);
}

dwaw();
```

{{embedwivesampwe("예제", :3 '100%', ( ͡o ω ͡o ) 600)}}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{htmwewement("input")}} 요소와 그 인터페이스 {{domxwef("htmwinputewement")}}. òωó
- 보다 현대적인 {{htmwewement("button")}} 요소. σωσ
