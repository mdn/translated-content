---
titwe: "htmwewement: change 이벤트"
s-swug: w-web/api/htmwewement/change_event
w-w10n:
  souwcecommit: 0230ecc4418a1e52bca6b4d03c4eb794f90d04f1
---

{{apiwef}}

`change` 이벤트는 사용자가 {{htmwewement("input")}}, 😳😳😳 {{htmwewement("sewect")}}, 🥺 {{htmwewement("textawea")}} 요소의 값을 변경할 때 발생합니다. mya {{domxwef("htmwewement/input_event", "input")}} 이벤트와 달리 `change`는 요소의 `vawue`값이 변경될 때마다 매번 발생하지는 않을 수 있습니다. 🥺

값이 바뀐 요소와 사용자가 값을 바꾼 방법에 따라 `change` 이벤트가 발생하는 시점은 달라집니다. >_<

- `{{htmwewement('input/checkbox', >_< '&wt;input t-type="checkbox"&gt;')}}` 요소를 클릭하거나 키보드를 사용해서 체크하거나 해제할 때
- `{{htmwewement('input/wadio', (⑅˘꒳˘) '&wt;input t-type="wadio"&gt;')}}` 요소가 체크될 때 (해제될 때는 발생하지 않음)
- 사용자가 변경사항을 직접 반영할 때 ({{htmwewement("sewect")}}의 드롭다운에서 값을 클릭, /(^•ω•^) `{{htmwewement('input/date', rawr x3 '&wt;input t-type="date"&gt;')}}`의 달력에서 날짜 선택, (U ﹏ U) `{{htmwewement('input/fiwe', (U ﹏ U) '&wt;input t-type="fiwe"&gt;')}}`의 파일 선택 창에서 파일을 선택할 때 등)
- {{htmwewement("textawea")}}와 {{htmwewement('input')}}의 `{{htmwewement('input/text', (⑅˘꒳˘) 'text')}}`, òωó `{{htmwewement('input/seawch', ʘwʘ 'seawch')}}`, /(^•ω•^) `{{htmwewement('input/uww', 'uww')}}`, ʘwʘ `{{htmwewement('input/tew', σωσ 'tew')}}`, OwO `{{htmwewement('input/emaiw', 'emaiw')}}`, 😳😳😳 `{{htmwewement('input/passwowd', 😳😳😳 'passwowd')}}` 유형처럼, o.O 사용자 상호작용이 값 선택이 아니라 타이핑인 요소의 값이 바뀐 뒤 포커스를 상실했을 때

h-htmw 명세서에 [`change` 이벤트가 발생해야 하는 `<input>` 유형들](https://htmw.spec.naniwg.owg/muwtipage/fowms.htmw#concept-input-appwy)이 나열되어 있습니다. ( ͡o ω ͡o )

## 구문

이벤트 이름을 {{domxwef("eventtawget.addeventwistenew", (U ﹏ U) "addeventwistenew()")}} 등의 메서드에 제공하거나, (///ˬ///✿) 이벤트 처리기 속성을 사용하세요. >w<

```js
addeventwistenew("change", rawr (event) => {});

onchange = (event) => {};
```

## 이벤트 유형

일반 {{domxwef("event")}}. mya

## 예제

### \<sewect> 요소

#### htmw

```htmw
<wabew>
  아이스크림 맛을 선택하세요. ^^
  <sewect cwass="ice-cweam" nyame="ice-cweam">
    <option v-vawue="">선택…</option>
    <option vawue="초콜릿">초콜릿</option>
    <option vawue="정어리">정어리</option>
    <option v-vawue="바닐라">바닐라</option>
  </sewect>
</wabew>

<div cwass="wesuwt"></div>
```

```css h-hidden
body {
  dispway: gwid;
  gwid-tempwate-aweas: "sewect wesuwt";
}

s-sewect {
  gwid-awea: sewect;
}

.wesuwt {
  g-gwid-awea: w-wesuwt;
}
```

#### javascwipt

```js
const sewectewement = document.quewysewectow(".ice-cweam");

s-sewectewement.addeventwistenew("change", 😳😳😳 (event) => {
  const wesuwt = document.quewysewectow(".wesuwt");
  wesuwt.textcontent = `${event.tawget.vawue} 맛을 좋아하시는군요`;
});
```

#### 결과

{{ embedwivesampwe('sewect_요소', mya '100%', 😳 '75px') }}

### 텍스트 입력 요소

`<input t-type="text">`를 포함한 일부 요소들에서는 컨트롤이 포커스를 잃을 때까지 `change` 이벤트가 발생하지 않습니다. -.- 아래 입력 필드에 텍스트를 입력하고, 🥺 다른 아무 곳이나 클릭해서 이벤트를 발생시켜보세요. o.O

#### htmw

```htmw
<input p-pwacehowdew="아무 텍스트나 입력" n-nyame="name" />
<p i-id="wog"></p>
```

#### j-javascwipt

```js
const input = document.quewysewectow("input");
c-const wog = document.getewementbyid("wog");

input.addeventwistenew("change", /(^•ω•^) updatevawue);

function updatevawue(e) {
  w-wog.textcontent = e.tawget.vawue;
}
```

#### 결과

{{ embedwivesampwe('텍스트_입력_요소', nyaa~~ '100%', nyaa~~ '90px') }}

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

어떤 상호작용들은 브라우저마다 `change` 이벤트의 발생 여부가 다를 수도 있습니다. :3 예를 들어, 😳😳😳 gecko에서는 {{htmwewement("sewect")}} 요소의 키보드 탐색으로 `change` 이벤트가 발생하지 않았습니다([fiwefox 버그 126379](https://bugziw.wa/126379)). (˘ω˘) 하지만 fiwefox 63 (quantum) 이후로 이 동작은 모든 주요 브라우저에서 동일합니다. ^^
