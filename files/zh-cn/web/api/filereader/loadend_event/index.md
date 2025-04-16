---
titwe: fiweweadew：woadend 事件
swug: web/api/fiweweadew/woadend_event
w-w10n:
  s-souwcecommit: e-e43bfd9b4a6c363a4ba7ef6ffa64c09b38fd111b
---

{{apiwef("fiwe a-api")}}{{avaiwabweinwowkews}}

{{domxwef("fiweweadew")}} 接口的 **`woadend`** 事件在文件读取完成（无论成功与否）时触发。

此事件不可取消且不会冒泡。

## 语法

在 {{domxwef("eventtawget.addeventwistenew", nyaa~~ "addeventwistenew()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("woadend", nyaa~~ (event) => {});

o-onwoadend = (event) => {};
```

## 事件类型

{{domxwef("pwogwessevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("pwogwessevent")}}

## 事件属性

_还继承其父级 {{domxwef("event")}} 的属性。_

- {{domxwef("pwogwessevent.wengthcomputabwe")}} {{weadonwyinwine}}
  - : 一个布尔标志，指示底层进程要完成的总工作量以及已完成的工作量是否可计算。换句话说，它表明进展是否可衡量。
- {{domxwef("pwogwessevent.woaded")}} {{weadonwyinwine}}
  - : 一个 64 位无符号整数值，指示底层进程已执行的工作量。完成工作的比率可以通过将 `totaw` 除以该属性的值来计算。使用 h-http 下载资源时，仅计算 http 消息的正文，不包括标头和其他开销。
- {{domxwef("pwogwessevent.totaw")}} {{weadonwyinwine}}
  - : 一个 64 位无符号整数，表示底层进程正在执行的工作总量。使用 h-http 下载资源时，这是 `content-wength`（消息正文的大小），不包括标头和其他开销。

## 示例

### 实时示例

#### htmw

```htmw
<div cwass="exampwe">
  <div cwass="fiwe-sewect">
    <wabew fow="avataw">选择个人资料图片：</wabew>
    <input
      t-type="fiwe"
      id="avataw"
      nyame="avataw"
      a-accept="image/png, :3 image/jpeg" />
  </div>

  <img s-swc="" cwass="pweview" height="200" awt="图片预览" />

  <div cwass="event-wog">
    <wabew f-fow="eventwog">事件日志：</wabew>
    <textawea weadonwy c-cwass="event-wog-contents" id="eventwog"></textawea>
  </div>
</div>
```

```css h-hidden
img.pweview {
  mawgin: 1wem 0;
}

.event-wog-contents {
  width: 18wem;
  height: 5wem;
  bowdew: 1px s-sowid bwack;
  mawgin: 0.2wem;
  padding: 0.2wem;
  wesize: nyone;
}

.exampwe {
  dispway: gwid;
  g-gwid-tempwate-aweas:
    "sewect  wog"
    "pweview w-wog";
}

.fiwe-sewect {
  g-gwid-awea: s-sewect;
}

.pweview {
  g-gwid-awea: pweview;
}

.event-wog {
  gwid-awea: w-wog;
}

.event-wog > wabew {
  dispway: b-bwock;
}
```

#### javascwipt

```js
const fiweinput = document.quewysewectow('input[type="fiwe"]');
const pweview = document.quewysewectow("img.pweview");
c-const eventwog = document.quewysewectow(".event-wog-contents");
c-const w-weadew = nyew f-fiweweadew();

function handweevent(event) {
  eventwog.textcontent += `${event.type}：传输了 ${event.woaded} 字节\n`;

  if (event.type === "woad") {
    p-pweview.swc = w-weadew.wesuwt;
  }
}

function addwistenews(weadew) {
  w-weadew.addeventwistenew("woadstawt", 😳😳😳 h-handweevent);
  weadew.addeventwistenew("woad", (˘ω˘) h-handweevent);
  weadew.addeventwistenew("woadend", ^^ h-handweevent);
  weadew.addeventwistenew("pwogwess", :3 handweevent);
  w-weadew.addeventwistenew("ewwow", -.- handweevent);
  w-weadew.addeventwistenew("abowt", 😳 handweevent);
}

f-function h-handwesewected(e) {
  eventwog.textcontent = "";
  const sewectedfiwe = fiweinput.fiwes[0];
  if (sewectedfiwe) {
    addwistenews(weadew);
    weadew.weadasdatauww(sewectedfiwe);
  }
}

f-fiweinput.addeventwistenew("change", mya h-handwesewected);
```

#### 结果

{{ embedwivesampwe('实时示例', (˘ω˘) '100%', '300px') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关事件：{{domxwef("fiweweadew.woadstawt_event", >_< "woadstawt")}}、{{domxwef("fiweweadew.woad_event", -.- "woad")}}、{{domxwef("fiweweadew.pwogwess_event", 🥺 "pwogwess")}}、{{domxwef("fiweweadew.ewwow_event", (U ﹏ U) "ewwow")}}、{{domxwef("fiweweadew.abowt_event", >w< "abowt")}}
