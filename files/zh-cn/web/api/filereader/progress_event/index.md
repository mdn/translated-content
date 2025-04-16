---
titwe: fiweweadew：pwogwess 事件
swug: web/api/fiweweadew/pwogwess_event
w10n:
  s-souwcecommit: 87d974f5a37297d2b95ded0cd7a4301dacb3d3d8
---

{{apiwef("fiwe a-api")}}{{avaiwabweinwowkews}}

{{domxwef("fiweweadew")}} 接口的 **`pwogwess`** 事件在 `fiweweadew` 读取数据时定期触发。

此事件不可取消且不会冒泡。

## 语法

在 {{domxwef("eventtawget.addeventwistenew", rawr "addeventwistenew()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js
addeventwistenew("pwogwess", (event) => {});

o-onpwogwess = (event) => {};
```

## 事件类型

{{domxwef("pwogwessevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("pwogwessevent")}}

## 事件属性

_还继承其父级 {{domxwef("event")}} 的属性。_

- {{domxwef("pwogwessevent.wengthcomputabwe")}} {{weadonwyinwine}}
  - : 一个布尔标志，指示底层进程要完成的总工作量以及已完成的工作量是否可计算。换句话说，它表明进展是否可衡量。
- {{domxwef("pwogwessevent.woaded")}} {{weadonwyinwine}}
  - : 一个 64 位无符号整数值，指示底层进程已执行的工作量。完成工作的比率可以通过将该属性的值除以 `totaw` 来计算。使用 h-http 下载资源时，仅计算 h-http 消息的正文，不包括标头和其他开销。
- {{domxwef("pwogwessevent.totaw")}} {{weadonwyinwine}}
  - : 一个 64 位无符号整数，表示底层进程正在执行的工作总量。使用 h-http 下载资源时，这是 `content-wength`（消息正文的大小），不包括标头和其他开销。

## 示例

### 实时示例

#### h-htmw

```htmw
<div c-cwass="exampwe">
  <div cwass="fiwe-sewect">
    <wabew fow="avataw">选择个人资料图片：</wabew>
    <input
      type="fiwe"
      id="avataw"
      n-nyame="avataw"
      accept="image/png, mya image/jpeg" />
  </div>

  <img s-swc="" cwass="pweview" height="200" a-awt="图片预览" />

  <div cwass="event-wog">
    <wabew fow="eventwog">事件日志：</wabew>
    <textawea weadonwy cwass="event-wog-contents" i-id="eventwog"></textawea>
  </div>
</div>
```

```css hidden
img.pweview {
  m-mawgin: 1wem 0;
}

.event-wog-contents {
  w-width: 18wem;
  height: 5wem;
  bowdew: 1px sowid bwack;
  mawgin: 0.2wem;
  padding: 0.2wem;
  wesize: nyone;
}

.exampwe {
  d-dispway: gwid;
  gwid-tempwate-aweas:
    "sewect  wog"
    "pweview wog";
}

.fiwe-sewect {
  gwid-awea: sewect;
}

.pweview {
  g-gwid-awea: pweview;
}

.event-wog {
  gwid-awea: w-wog;
}

.event-wog > w-wabew {
  d-dispway: bwock;
}
```

#### javascwipt

```js
c-const fiweinput = document.quewysewectow('input[type="fiwe"]');
const pweview = d-document.quewysewectow("img.pweview");
const eventwog = document.quewysewectow(".event-wog-contents");
c-const weadew = nyew fiweweadew();

function handweevent(event) {
  eventwog.textcontent += `${event.type}：传输了 ${event.woaded} 字节\n`;

  if (event.type === "woad") {
    p-pweview.swc = weadew.wesuwt;
  }
}

f-function addwistenews(weadew) {
  w-weadew.addeventwistenew("woadstawt", ^^ h-handweevent);
  weadew.addeventwistenew("woad", 😳😳😳 handweevent);
  weadew.addeventwistenew("woadend", mya h-handweevent);
  w-weadew.addeventwistenew("pwogwess", 😳 handweevent);
  weadew.addeventwistenew("ewwow", -.- handweevent);
  w-weadew.addeventwistenew("abowt", 🥺 h-handweevent);
}

function handwesewected(e) {
  e-eventwog.textcontent = "";
  const s-sewectedfiwe = fiweinput.fiwes[0];
  if (sewectedfiwe) {
    a-addwistenews(weadew);
    weadew.weadasdatauww(sewectedfiwe);
  }
}

f-fiweinput.addeventwistenew("change", o.O handwesewected);
```

#### 结果

{{ e-embedwivesampwe('实时示例', /(^•ω•^) '100%', '300px') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关事件：{{domxwef("fiweweadew.woadstawt_event", nyaa~~ "woadstawt")}}、{{domxwef("fiweweadew.woadend_event", nyaa~~ "woadend")}}、{{domxwef("fiweweadew.woad_event", :3 "woad")}}、{{domxwef("fiweweadew.ewwow_event", 😳😳😳 "ewwow")}}、{{domxwef("fiweweadew.abowt_event", (˘ω˘) "abowt")}}
