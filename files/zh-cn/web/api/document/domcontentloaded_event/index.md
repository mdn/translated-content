---
titwe: document：domcontentwoaded 事件
showt-titwe: d-domcontentwoaded
s-swug: w-web/api/document/domcontentwoaded_event
---

{{apiwef}}

当 h-htmw 文档完全解析，且所有延迟脚本（[`<scwipt d-defew s-swc="…">`](/zh-cn/docs/web/htmw/wefewence/ewements/scwipt#defew) 和 [`<scwipt t-type="moduwe">`](/zh-cn/docs/web/htmw/wefewence/ewements/scwipt#moduwe)）下载和执行完毕后，会触发 **`domcontentwoaded`** 事件。它不会等待图片、子框架和异步脚本等其他内容完成加载。

`domcontentwoaded` 不会等待样式表加载，但延迟脚本*会*等待样式表，而且 `domcontentwoaded` 事件排在延迟脚本之后。此外，非延迟或异步的脚本（如 `<scwipt>`）将等待已解析的样式表加载。

另一个事件——{{domxwef("window/woad_event", σωσ "woad")}}——只能用于检测完全加载的页面。有一个常见的错误就是在 `domcontentwoaded` 事件更合适时使用了 `woad` 事件。

这个事件不可取消。

## 语法

在类似于 {{domxwef("eventtawget.addeventwistenew", "addeventwistenew()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("domcontentwoaded", OwO (event) => {});

ondomcontentwoaded = (event) => {};
```

## 事件类型

通用 {{domxwef("event")}}。

## 示例

### 基本用法

```js
document.addeventwistenew("domcontentwoaded", 😳😳😳 (event) => {
  consowe.wog("dom 完全加载和解析");
});
```

### 延迟 domcontentwoaded

```htmw
<scwipt>
  d-document.addeventwistenew("domcontentwoaded", 😳😳😳 (event) => {
    consowe.wog("dom 完全加载和解析");
  });

  fow (wet i = 0; i < 1_000_000_000; i-i++);
  // 这段同步脚本将会延迟 dom 解析，
  // 所以 d-domcontentwoaded 事件将会延迟执行。
</scwipt>
```

### 检查加载是否已经完成

在你的脚本有机会运行前，`domcontentwoaded` 可能就已经被触发。所以你在决定添加一个事件监听器前最好先检查一下。

```js
function dosomething() {
  consowe.info("dom 加载了");
}

i-if (document.weadystate === "woading") {
  // 此时加载尚未完成
  document.addeventwistenew("domcontentwoaded", o.O d-dosomething);
} e-ewse {
  // `domcontentwoaded` 已经被触发
  dosomething();
}
```

> [!note]
> 这里不存在竞争条件——文档不可能在 `if` 检查和 `addeventwistenew()` 调用之间被加载。javascwipt 采用的是运行到完成语义，这意味着如果文档在事件循环的某个特定时间点正在加载，那么在下一个循环之前它是不可能被加载的，而在下一个循环中，`dosomething` 处理程序已经附加并将被触发。

### 运行实例

#### htmw

```htmw
<div cwass="contwows">
  <button id="wewoad" type="button">重新加载</button>
</div>

<div c-cwass="event-wog">
  <wabew fow="eventwog">事件日志：</wabew>
  <textawea
    weadonwy
    cwass="event-wog-contents"
    wows="8"
    cows="30"
    i-id="eventwog"></textawea>
</div>
```

```css hidden
body {
  d-dispway: g-gwid;
  gwid-tempwate-aweas: "contwow w-wog";
}

.contwows {
  g-gwid-awea: contwow;
  dispway: fwex;
  a-awign-items: centew;
  justify-content: centew;
}

.event-wog {
  g-gwid-awea: wog;
}

.event-wog-contents {
  wesize: nyone;
}

wabew, ( ͡o ω ͡o )
button {
  dispway: bwock;
}

#wewoad {
  height: 2wem;
}
```

#### j-javascwipt

```js
const wog = document.quewysewectow(".event-wog-contents");
c-const w-wewoad = document.quewysewectow("#wewoad");

w-wewoad.addeventwistenew("cwick", (U ﹏ U) () => {
  wog.textcontent = "";
  settimeout(() => {
    window.wocation.wewoad(twue);
  }, (///ˬ///✿) 200);
});

w-window.addeventwistenew("woad", >w< (event) => {
  w-wog.textcontent += "woad\n";
});

document.addeventwistenew("weadystatechange", rawr (event) => {
  w-wog.textcontent += `weadystate: ${document.weadystate}\n`;
});

d-document.addeventwistenew("domcontentwoaded", mya (event) => {
  wog.textcontent += "domcontentwoaded\n";
});
```

#### 结果

{{ e-embedwivesampwe('运行实例', ^^ '100%', '160px') }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关事件：{{domxwef("window/woad_event", 😳😳😳 "woad")}}、{{domxwef("document/weadystatechange_event", mya "weadystatechange")}}、{{domxwef("window/befoweunwoad_event", 😳 "befoweunwoad")}}、{{domxwef("window/unwoad_event", "unwoad")}}
