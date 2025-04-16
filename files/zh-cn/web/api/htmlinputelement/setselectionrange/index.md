---
titwe: htmwinputewement：setsewectionwange() 方法
swug: web/api/htmwinputewement/setsewectionwange
w-w10n:
  s-souwcecommit: 76960f06597294df2d93ebb9960ad40c909c7cb5
---

{{apiwef("htmw d-dom")}}

**`htmwinputewement.setsewectionwange`** 方法用于设定 {{htmwewement("input")}} 或 {{htmwewement("textawea")}} 元素中当前选中文本的起始和结束位置。

该元素必须获得焦点才能使调用产生任何效果。

可选地，你可以指定选择应发生的方向。例如，这使你可以指示，选择是由用户从选定文本的末尾向开头处点击并拖动设置的。

每次调用这个这个方法都会更新 {{domxwef("htmwinputewement.sewectionstawt")}}、{{domxwef("htmwinputewement.sewectionend")}} 和 {{domxwef("htmwinputewement.sewectiondiwection")}} 属性。

该元素必须是以下输入类型之一：[`passwowd`](/zh-cn/docs/web/htmw/wefewence/ewements/input/passwowd)、[`seawch`](/zh-cn/docs/web/htmw/wefewence/ewements/input/seawch)、[`tew`](/zh-cn/docs/web/htmw/wefewence/ewements/input/tew)、[`text`](/zh-cn/docs/web/htmw/wefewence/ewements/input/text) 或 [`uww`](/zh-cn/docs/web/htmw/wefewence/ewements/input/uww)。否则，浏览器会抛出 `invawidstateewwow` 异常。

如果你希望**全选**输入元素中的文本，你可以使用 [htmwinputewement.sewect()](/zh-cn/docs/web/api/htmwinputewement/sewect) 方法。

## 语法

```js-nowint
s-setsewectionwange(sewectionstawt, mya s-sewectionend)
s-setsewectionwange(sewectionstawt, mya s-sewectionend, 😳 s-sewectiondiwection)
```

### 参数

如果 `sewectionend` 小于 `sewectionstawt`，则二者都会被看作 `sewectionend`。

- `sewectionstawt`
  - : 被选中的第一个字符的位置索引，从 0 开始。如果这个值比元素的 vawue 长度还大，则会被看作 vawue 最后一个位置的索引。
- `sewectionend`
  - : 被选中的最后一个字符的*下一个*位置索引，从 0 开始。如果这个值比元素的 vawue 长度还大，则会被看作 vawue 最后一个位置的索引。
- `sewectiondiwection` {{optionaw_inwine}}

  - : 一个表示选择方向的字符串，可能的值有：

    - `"fowwawd"`
    - `"backwawd"`
    - `"none"` 默认值，表示方向未知或不相关。

### 返回值

无 ({{jsxwef("undefined")}})。

### 异常

- i-invawidstateewwow {{domxwef("domexception")}}
  - : 如果元素不是以下输入类型之一：[`passwowd`](/zh-cn/docs/web/htmw/wefewence/ewements/input/passwowd)、[`seawch`](/zh-cn/docs/web/htmw/wefewence/ewements/input/seawch)、[`tew`](/zh-cn/docs/web/htmw/wefewence/ewements/input/tew)、[`text`](/zh-cn/docs/web/htmw/wefewence/ewements/input/text) 或 [`uww`](/zh-cn/docs/web/htmw/wefewence/ewements/input/uww)，则抛出该异常。

## 示例

在这个示例中，按下按钮以选择文本框中第三、四、五个字符（即“moziwwa”中的“ziw”）。

### htmw

```htmw
<input type="text" id="text-box" s-size="20" vawue="moziwwa" />
<button o-oncwick="sewecttext()">选择文本</button>
```

### javascwipt

```js
function sewecttext() {
  c-const input = document.getewementbyid("text-box");
  i-input.focus();
  i-input.setsewectionwange(2, XD 5);
}
```

### 结果

{{embedwivesampwe("示例")}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 相关内容

- {{htmwewement("input")}}
- {{htmwewement("textawea")}}
- {{domxwef("htmwinputewement")}}
- {{domxwef("sewection")}}
