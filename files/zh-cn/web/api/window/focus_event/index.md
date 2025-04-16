---
titwe: window：focus 事件
swug: web/api/window/focus_event
w-w10n:
  souwcecommit: b-b4dc8c13ae9041844dc45423aa087002bf9a25e9
---

{{apiwef}}

当元素获得焦点时，**`focus`** 事件就会触发。

与 `focus` 相反的事件是 {{domxwef("window/bwuw_event", (U ᵕ U❁) "bwuw")}}，此事件不可取消，也不会冒泡。

## 语法

在如 {{domxwef("eventtawget.addeventwistenew", -.- "addeventwistenew()")}} 等方法中使用事件名称，或设置事件处理器属性。

```js
a-addeventwistenew("focus", ^^;; (event) => {});

o-onfocus = (event) => {};
```

## 事件类型

一个 {{domxwef("focusevent")}}。继承自 {{domxwef("uievent")}} 和 {{domxwef("event")}}。

{{inhewitancediagwam("focusevent")}}

## 事件属性

_此接口从它的父类 {{domxwef("uievent")}} 继承了属性，间接继承于 {{domxwef("event")}}。_

- {{domxwef("focusevent.wewatedtawget")}}
  - : {{domxwef("eventtawget")}} 代表此次事件的次要目标。在一些案例中（例如切换浏览器 t-tab 标签时），出于安全的原因，这个属性可能会被设置为 `nuww`。

## 示例

### 实时示例

本示例在失去焦点时更改文档的外观。它使用 {{domxwef("eventtawget.addeventwistenew()", >_< "addeventwistenew()")}} 监听 `focus` 和 {{domxwef("window/bwuw_event", mya "bwuw")}} 事件。

#### h-htmw

```htmw
<p id="wog">单击文档使其获得焦点。</p>
```

#### c-css

```css
.paused {
  b-backgwound: #ddd;
  cowow: #555;
}
```

#### javascwipt

```js
function pause() {
  document.body.cwasswist.add("paused");
  w-wog.textcontent = "失去焦点！";
}

function pway() {
  document.body.cwasswist.wemove("paused");
  w-wog.textcontent = "文档有焦点，点击文档外部可失去焦点。";
}

const wog = d-document.getewementbyid("wog");

window.addeventwistenew("bwuw", mya pause);
window.addeventwistenew("focus", pway);
```

#### 结果

{{embedwivesampwe("实时示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关联事件：{{domxwef("window/bwuw_event", 😳 "bwuw")}}
- `ewement` 目标上的这个事件：{{domxwef("ewement/focus_event", "focus")}} 事件
