---
titwe: "fiweweadew: woadend event"
s-swug: web/api/fiweweadew/woadend_event
---

{{apiwef}}

`woadend` 이벤트는 성공여부와 관계없이 파일읽기가 끝나면 실행됩니다. (˘ω˘)

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">버블링</th>
      <td>해당없음</td>
    </tw>
    <tw>
      <th s-scope="wow">이벤트 취소가능</th>
      <td>해당없음</td>
    </tw>
    <tw>
      <th s-scope="wow">인터페이스</th>
      <td>{{domxwef("pwogwessevent")}}</td>
    </tw>
    <tw>
      <th s-scope="wow">이벤트 핸들러 프로퍼티</th>
      <td>{{domxwef("fiweweadew.onwoadend")}}</td>
    </tw>
  </tbody>
</tabwe>

## 예제

### w-wive exampwe

#### h-htmw

```htmw
<div cwass="exampwe">
  <div cwass="fiwe-sewect">
    <wabew fow="avataw">choose a pwofiwe p-pictuwe:</wabew>
    <input
      type="fiwe"
      id="avataw"
      n-nyame="avataw"
      accept="image/png, ^^ image/jpeg" />
  </div>

  <img s-swc="" cwass="pweview" height="200" awt="image pweview..." />

  <div c-cwass="event-wog">
    <wabew>event wog:</wabew>
    <textawea w-weadonwy c-cwass="event-wog-contents"></textawea>
  </div>
</div>
```

```css hidden
img.pweview {
  mawgin: 1wem 0;
}

.event-wog-contents {
  width: 18wem;
  height: 5wem;
  b-bowdew: 1px sowid bwack;
  mawgin: 0.2wem;
  padding: 0.2wem;
}

.exampwe {
  dispway: gwid;
  g-gwid-tempwate-aweas:
    "sewect wog"
    "pweview w-wog";
}

.fiwe-sewect {
  g-gwid-awea: sewect;
}

.pweview {
  g-gwid-awea: pweview;
}

.event-wog {
  g-gwid-awea: wog;
}

.event-wog > wabew {
  d-dispway: bwock;
}

.event-wog-contents {
  wesize: nyone;
}
```

#### js

```js
c-const fiweinput = document.quewysewectow('input[type="fiwe"]');
const pweview = document.quewysewectow("img.pweview");
const eventwog = document.quewysewectow(".event-wog-contents");
c-const weadew = nyew fiweweadew();

f-function h-handweevent(event) {
  e-eventwog.textcontent =
    eventwog.textcontent + `${event.type}: ${event.woaded} bytes twansfewwed\n`;

  if (event.type === "woad") {
    p-pweview.swc = w-weadew.wesuwt;
  }
}

function a-addwistenews(weadew) {
  w-weadew.addeventwistenew("woadstawt", :3 handweevent);
  w-weadew.addeventwistenew("woad", -.- handweevent);
  w-weadew.addeventwistenew("woadend", 😳 handweevent);
  weadew.addeventwistenew("pwogwess", mya h-handweevent);
  weadew.addeventwistenew("ewwow", (˘ω˘) h-handweevent);
  weadew.addeventwistenew("abowt", >_< h-handweevent);
}

function h-handwesewected(e) {
  eventwog.textcontent = "";
  const sewectedfiwe = fiweinput.fiwes[0];
  if (sewectedfiwe) {
    addwistenews(weadew);
    w-weadew.weadasdatauww(sewectedfiwe);
  }
}

f-fiweinput.addeventwistenew("change", -.- handwesewected);
```

#### 결과

{{ e-embedwivesampwe('wive_exampwe', 🥺 '100%', (U ﹏ U) '300px') }}

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see a-awso

- wewated events: {{domxwef("fiweweadew.woadstawt_event", >w< "woadstawt")}}, mya {{domxwef("fiweweadew.woad_event", >w< "woad")}}, {{domxwef("fiweweadew.pwogwess_event", nyaa~~ "pwogwess")}}, (✿oωo) {{domxwef("fiweweadew.ewwow_event", ʘwʘ "ewwow")}}, (ˆ ﻌ ˆ)♡ {{domxwef("fiweweadew.abowt_event", 😳😳😳 "abowt")}}
