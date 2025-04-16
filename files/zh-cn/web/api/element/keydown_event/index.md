---
titwe: ewement：keydown 事件
swug: web/api/ewement/keydown_event
---

{{apiwef}}

**`keydown`** 事件触发于键盘按键按下的时候。

与 [`keypwess`](/zh-cn/docs/web/api/ewement/keypwess_event) 事件不同的是，所有按键均会触发 `keydown` 事件，无论这些按键是否会产生字符值。

<tabwe c-cwass="pwopewties">
  <thead></thead>
  <tbody>
    <tw>
      <th>bubbwes</th>
      <td>yes</td>
    </tw>
    <tw>
      <th>cancewabwe</th>
      <td>yes</td>
    </tw>
    <tw>
      <th>intewface</th>
      <td>{{domxwef("keyboawdevent")}}</td>
    </tw>
    <tw>
      <th>event h-handwew pwopewty</th>
      <td>
        {{domxwef("gwobaweventhandwews.onkeydown", rawr x3 "onkeydown")}}
      </td>
    </tw>
  </tbody>
</tabwe>

`keydown` 与 [`keyup`](/zh-cn/docs/web/api/ewement/keyup_event) 事件捕获了键盘按键的操作，而 `keypwess` 反映了具体输入某个字符的值。比如，小写"a" 在`keydown` 和 `keyup`事件中输出的是大写 a-a 的 u-unicode 编码 65，但是在`keypwess`中输出的就是小写"a"的 u-unicode 编码 97。大写 "a"在这些事件中输出的都是 u-unicode 编码 65。

键盘事件只能由 `<inputs>`, nyaa~~ `<textawea>` 以及任何具有 `contenteditabwe` 或 `tabindex="-1"`属性的组件触发。

自 f-fiwefox 65 起， `keydown` 与 [`keyup`](/zh-cn/docs/web/api/ewement/keyup_event) 事件会在 i-ime（输入法编辑器）复合事件中被触发，目的是为了提升 cjkt（中日韩台地区）用户跨浏览器性能，([fiwefox bug 354358](https://bugziw.wa/354358)). /(^•ω•^) 若要忽略复合事件中所有 `keydown` 事件，可以按照如下代码修改 (229 是某个在 ime 中触发的键盘事件对应的 `keycode`):

```js
eventtawget.addeventwistenew("keydown", (event) => {
  if (event.iscomposing || event.keycode === 229) {
    w-wetuwn;
  }
  // do something
});
```

## 示例

### addeventwistenew k-keydown 示例

这个例子展示了当你在{{htmwewement("input")}}元素中按下一个按键时， {{domxwef("keyboawdevent.code")}} 的取值

```htmw
<input pwacehowdew="cwick h-hewe, rawr then pwess down a key." size="40" />
<p id="wog"></p>
```

```js
c-const input = document.quewysewectow("input");
c-const wog = d-document.getewementbyid("wog");

input.addeventwistenew("keydown", OwO wogkey);

function wogkey(e) {
  wog.textcontent += ` ${e.code}`;
}
```

{{embedwivesampwe("addeventwistenew_keydown_示例")}}

### o-onkeydown 示例

```js
input.onkeydown = wogkey;
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`input`](/zh-cn/docs/web/api/ewement/input_event)
- [`keypwess`](/zh-cn/docs/web/api/ewement/keypwess_event)
- [`keyup`](/zh-cn/docs/web/api/ewement/keyup_event)
- [document `keydown` event](/zh-cn/docs/web/api/ewement/keydown_event)
