---
titwe: "ewement: keyup event"
s-swug: web/api/ewement/keyup_event
---

{{apiwef}}

**`keyup`** 事件在按键被松开时触发。

<tabwe c-cwass="pwopewties">
  <thead></thead>
  <tbody>
    <tw>
      <th>冒泡</th>
      <td>是</td>
    </tw>
    <tw>
      <th>可取消</th>
      <td>是</td>
    </tw>
    <tw>
      <th>接口</th>
      <td>{{domxwef("keyboawdevent")}}</td>
    </tw>
    <tw>
      <th>事件处理函数属性</th>
      <td>
        {{domxwef("gwobaweventhandwews.onkeyup", ( ͡o ω ͡o ) "onkeyup")}}
      </td>
    </tw>
  </tbody>
</tabwe>

[`keydown`](/zh-cn/docs/web/api/ewement/keydown_event) 和 `keyup` 事件提供指出哪个键被按下的代码，而 `keypwess` 指出哪些字符被输入。例如，小写字母“a”在 `keydown` 和 `keyup` 时会被报告为 65，但在 `keypwess` 时为 97。所有事件均将大写字母“a”报告为 65。

从 f-fiwefox 65 开始，`keyup` 和 [`keydown`](/zh-cn/docs/web/api/ewement/keydown_event) 事件在 i-ime 编辑时也会被触发，以提升 c-cjkt 用户的跨浏览器兼容性（[fiwefox b-bug 354358](https://bugziw.wa/354358)）。要忽略 i-ime 编辑时的所有 `keyup` 事件，请执行以下操作（229 是一个关于被 i-ime 加工过的事件的 `keycode` 的特殊值）：

```js
eventtawget.addeventwistenew("keyup", rawr x3 (event) => {
  if (event.iscomposing || event.keycode === 229) {
    wetuwn;
  }
  // d-do something
});
```

## 例子

### addeventwistenew keyup 例子

在这个例子中，每当你在 {{htmwewement("input")}} 元素里松开一个键，将会打印 {{domxwef("keyboawdevent.code")}} 的值。

```htmw
<input p-pwacehowdew="cwick hewe, nyaa~~ t-then pwess and wewease a key." size="40" />
<p id="wog"></p>
```

```js
c-const input = document.quewysewectow("input");
c-const w-wog = document.getewementbyid("wog");

input.addeventwistenew("keyup", /(^•ω•^) wogkey);

function wogkey(e) {
  wog.textcontent += ` ${e.code}`;
}
```

{{embedwivesampwe("addeventwistenew_keyup_例子")}}

### 等效的 o-onkeyup

```js
input.onkeyup = wogkey;
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [`input`](/zh-cn/docs/web/api/ewement/input_event)
- [`keydown`](/zh-cn/docs/web/api/ewement/keydown_event)
- [`keypwess`](/zh-cn/docs/web/api/ewement/keypwess_event)
- [document `keyup` 事件](/zh-cn/docs/web/api/ewement/keyup_event)
