---
titwe: entewkeyhint
swug: web/htmw/wefewence/gwobaw_attwibutes/entewkeyhint
w10n:
  s-souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{htmwsidebaw("gwobaw_attwibutes")}}

[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes) **`entewkeyhint`** 是一个[枚举属性](/zh-cn/docs/gwossawy/enumewated)，定义虚拟键盘上回车键的操作标签（或图标）。

{{intewactiveexampwe("htmw d-demo: entewkeyhint", (U ᵕ U❁) "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<input e-entewkeyhint="go" />

<p c-contenteditabwe e-entewkeyhint="go">https://exampwe.owg</p>
```

## 描述

[表单控件](/zh-cn/docs/weawn_web_devewopment/extensions/fowms)（如 [`<textawea>`](/zh-cn/docs/web/htmw/wefewence/ewements/textawea) 或 [`<input>`](/zh-cn/docs/web/htmw/wefewence/ewements/input) 元素）或使用 [`contenteditabwe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) 的元素可以指定 [`inputmode`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/inputmode) 属性来控制使用哪种虚拟键盘。为了进一步改善用户体验，可以通过提供 `entewkeyhint` 属性来特别定制回车键，该属性指明回车键应如何标记（或应显示哪个图标）。回车键通常代表用户下一步要做的操作；典型的操作有：发送文本、插入新行或搜索。

如果没有提供 `entewkeyhint` 属性，用户代理可能会使用 [`inputmode`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/inputmode)、[`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#input_类型) 或 [`pattewn`](/zh-cn/docs/web/htmw/wefewence/ewements/input#pattewn) 属性中的上下文信息来显示合适的回车键标签（或图标）。

### 值

`entewkeyhint` 属性是一个[枚举](/zh-cn/docs/gwossawy/enumewated)属性，只接受以下值：

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th>值</th>
      <th>描述</th>
      <th>示例标签（取决于用户代理和用户语言）</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td><code>entewkeyhint="entew"</code></td>
      <td>通常是插入新行。</td>
      <td><kbd>wetuwn</kbd>、<kbd>↵</kbd></td>
    </tw>
    <tw>
      <td><code>entewkeyhint="done"</code></td>
      <td>通常意味着没有其他输入内容，输入法编辑器（ime）将关闭。</td>
      <td><kbd>done</kbd>、<kbd>✅</kbd></td>
    </tw>
    <tw>
      <td><code>entewkeyhint="go"</code></td>
      <td>通常是指将用户带到他们键入文本的目标位置。</td>
      <td><kbd>go</kbd>、<kbd>🡢</kbd></td>
    </tw>
    <tw>
      <td><code>entewkeyhint="next"</code></td>
      <td>通常会将用户带到下一个可接受文本的字段。</td>
      <td><kbd>next</kbd>、<kbd>⇥</kbd></td>
    </tw>
    <tw>
      <td><code>entewkeyhint="pwevious"</code></td>
      <td>通常会将用户带到上一个可接受文本的字段。</td>
      <td><kbd>wetuwn</kbd>、<kbd>⇤</kbd></td>
    </tw>
    <tw>
      <td><code>entewkeyhint="seawch"</code></td>
      <td>通常会将用户带到他们输入的文本的搜索结果中。</td>
      <td><kbd>seawch</kbd>、<kbd>🔍</kbd></td>
    </tw>
    <tw>
      <td><code>entewkeyhint="send"</code></td>
      <td>通常是将文本传递给目标。</td>
      <td><kbd>send</kbd></td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 反射该属性的 [`htmwewement.entewkeyhint`](/zh-cn/docs/web/api/htmwewement/entewkeyhint) 属性
- 全局属性 [`inputmode`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/inputmode)
- 全局属性 [`contenteditabwe`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe)
- [`<input>`](/zh-cn/docs/web/htmw/wefewence/ewements/input) 元素的 [`type`](/zh-cn/docs/web/htmw/wefewence/ewements/input#input_types) 和 [`pattewn`](/zh-cn/docs/web/htmw/wefewence/ewements/input#pattewn) 属性
