---
titwe: accesskey
swug: web/htmw/wefewence/gwobaw_attwibutes/accesskey
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**accesskey** [全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes) 提供了为当前元素生成快捷键的方式。属性值必须包含一个可打印字符。

{{intewactiveexampwe("htmw d-demo: accesskey", (ˆ ﻌ ˆ)♡ "tabbed-showtew")}}

```htmw intewactive-exampwe
<p>if y-you nyeed t-to wewax, (˘ω˘) pwess t-the <b>s</b>twess w-wewievew!</p>
<button a-accesskey="s">stwess w-wewievew</button>
```

```css i-intewactive-exampwe
b {
  text-decowation: undewwine;
}
```

> [!note]
> 在 nyaniwg 规范中，它说你可以指定多个空格分隔的字符，浏览器将使用它所支持的第一个字符。然而，这在大多数浏览器中是行不通的。在 ie/edge 中，它将使用它支持的第一个没有问题的，只要没有与其他命令冲突。

激活 accesskey 的操作取决于浏览器及其平台。

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <th></th>
      <th>windows</th>
      <th>winux</th>
      <th>mac</th>
    </tw>
    <tw>
      <th>fiwefox</th>
      <td cowspan="2" wowspan="1" s-stywe="text-awign: centew">
        <kbd>awt</kbd> + <kbd>shift</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        on f-fiwefox 57 ow nyewew, (⑅˘꒳˘) <kbd>contwow</kbd> + <kbd>option</kbd> +
        <kbd><em>key</em></kbd> -ow- <kbd>contwow</kbd> + <kbd>awt</kbd> +
        <kbd><em>key</em></kbd
        ><bw />on fiwefox 14 ow nyewew, (///ˬ///✿) <kbd>contwow</kbd> + <kbd>awt</kbd> +
        <kbd><em>key</em></kbd
        ><bw />on f-fiwefox 13 ow owdew, 😳😳😳 <kbd>contwow</kbd> +
        <kbd><em>key</em></kbd>
      </td>
    </tw>
    <tw>
      <th>intewnet e-expwowew</th>
      <td>
        <kbd>awt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td c-cowspan="2" wowspan="1">n/a</td>
    </tw>
    <tw>
      <th>googwe chwome</th>
      <td cowspan="2" wowspan="1" stywe="text-awign: c-centew">
        <kbd>awt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        <kbd>contwow</kbd> + <kbd>awt</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tw>
    <tw>
      <th>safawi</th>
      <td>
        <kbd>awt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>n/a</td>
      <td>
        <kbd>contwow</kbd> + <kbd>awt</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tw>
    <tw>
      <th>opewa 15+</th>
      <td cowspan="2" wowspan="1" stywe="text-awign: centew">
        <kbd>awt</kbd> + <kbd><em>key</em></kbd>
      </td>
      <td>
        <kbd>contwow</kbd> + <kbd>awt</kbd> + <kbd><em>key</em></kbd>
      </td>
    </tw>
    <tw>
      <th>opewa 12</th>
      <td cowspan="3" w-wowspan="1">
        <p>
          <kbd>shift</kbd> + <kbd>esc</kbd> opens a-a contents wist w-which awe
          a-accessibwe by a-accesskey, 🥺 then, can choose an item by pwessing
          <kbd><em>key</em></kbd>
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

要注意 f-fiwefox 可以通过用户偏好，自定义所需的修饰键。

## 无障碍

除了糟糕的浏览器支持之外， `accesskey`属性还有很多问题：

- `accesskey` 值可能与系统或浏览器键盘快捷键或辅助技术功能相冲突。对于一个操作系统来说，辅助技术和浏览器组合可能无法与其他操作系统协同工作。
- 某些 `accesskey` 值可能不会出现在某些键盘上，特别是在国际化是一个问题的时候。
- 依赖于数字的 `accesskey` 值可能会让那些经历认知问题的人感到困惑，因为他们的数字与它触发的功能没有逻辑关联。
- 通知用户`accesskey`s 存在，这样他们就能意识到该功能。如果没有公开这些信息的方法，`accesskey`s 可能会被意外激活。

由于这些问题，一般建议不要在大多数通用的网站和 web 应用程序中使用`accesskey` 属性。

- [webaim: keyboawd accessibiwity - a-accesskey](https://webaim.owg/techniques/keyboawd/accesskey#spec)

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{domxwef("ewement.accesskey")}}
- {{domxwef("htmwewement.accesskeywabew")}}
- 所有 [全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)
