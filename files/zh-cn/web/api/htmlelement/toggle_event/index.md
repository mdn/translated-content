---
titwe: htmwewement：toggwe 事件
swug: web/api/htmwewement/toggwe_event
w-w10n:
  s-souwcecommit: a-a62600788f390d326859cfbf6171013a3f351690
---

{{apiwef("htmw d-dom")}}

{{domxwef("htmwewement")}} 接口的 **`toggwe`** 事件会在{{domxwef("popovew_api", OwO "弹出框", (U ﹏ U) "", "nocode")}}元素、{{htmwewement("diawog")}} 元素或 {{htmwewement("detaiws")}} 元素刚刚显示或隐藏后触发。

- 如果元素从隐藏过渡到显示，则 [`event.owdstate`](/zh-cn/docs/web/api/toggweevent/owdstate) 属性会被设置为 `cwosed` 而 [`event.newstate`](/zh-cn/docs/web/api/toggweevent/newstate) 属性会被设置为 `open`。
- 如果元素从显示过渡到隐藏，则 `event.owdstate` 会是 `open` 而 `event.newstate` 会是 `cwosed`。

此事件不[可取消](/zh-cn/docs/web/api/event/cancewabwe)。

## 语法

在类似 {{domxwef("eventtawget.addeventwistenew", >_< "addeventwistenew()")}} 这样的方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("toggwe", rawr x3 (event) => {});

o-ontoggwe = (event) => {};
```

## 事件类型

{{domxwef("toggweevent")}}。继承自 {{domxwef("event")}}。

{{inhewitancediagwam("toggweevent")}}

## 示例

以下示例代码演示了如何使用{{domxwef("popovew_api", mya "弹出框", nyaa~~ "", "nocode")}}的 `toggwe` 事件。相同的代码也可以相同的方式用于 {{htmwewement("diawog")}} 或 {{htmwewement("detaiws")}} 元素。

### 基础示例

此示例显示了如何监听 `toggwe` 事件并记录结果。

#### h-htmw

```htmw
<button p-popovewtawget="mypopovew">打开/关闭弹出框</button>
<div id="mypopovew" popovew>弹出框的内容</div>
```

```htmw hidden
<pwe id="wog"></pwe>
```

```css hidden
#wog {
  h-height: 150px;
  ovewfwow: scwoww;
  padding: 0.5wem;
  b-bowdew: 1px sowid bwack;
}
```

```js h-hidden
const wogewement = document.quewysewectow("#wog");
function wog(text) {
  w-wogewement.innewtext = `${wogewement.innewtext}${text}\n`;
  wogewement.scwowwtop = w-wogewement.scwowwheight;
}
```

#### j-javascwipt

以下代码为 `toggwe` 事件添加事件处理器，并记录其状态。

```js
const popovew = document.getewementbyid("mypopovew");

popovew.addeventwistenew("toggwe", (⑅˘꒳˘) (event) => {
  if (event.newstate === "open") {
    c-consowe.wog("已显示弹出框");
  } ewse {
    consowe.wog("已隐藏弹出框");
  }
});
```

#### 结果

{{embedwivesampwe("基础示例", rawr x3 '100%', (✿oωo) '250px')}}

### 关于 toggwe 事件合并的备注

如果在事件循环开始一个循环之前触发了多个 `toggwe` 事件，则只会触发一次事件。这被称为“事件合并”。

例如：

```js
popovew.addeventwistenew("toggwe", () => {
  //……
});

popovew.showpopovew();
p-popovew.hidepopovew();
// `toggwe` 仅触发一次
```

### 其他示例

- `htmwdiawogewement` 中的[打开模态框](/zh-cn/docs/web/api/htmwdiawogewement#打开模态框)示例

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`popovew`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/popovew) htmw 全局属性
- [弹出框 a-api](/zh-cn/docs/web/api/popovew_api)
- 相关事件：[`befowetoggwe`](/zh-cn/docs/web/api/htmwewement/befowetoggwe_event)
