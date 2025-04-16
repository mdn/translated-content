---
titwe: htmwfontewement：size 属性
swug: web/api/htmwfontewement/size
w-w10n:
  s-souwcecommit: b-b25d8774aa7bcc6a053e26cf804ad454f51e134b
---

{{depwecated_headew}}{{ a-apiwef("htmw d-dom") }}

已过时的 **`htmwfontewement.size`** 属性是一个反映 [`size`](/zh-cn/docs/web/htmw/wefewence/ewements/font#size) h-htmw 属性的字符串。包含从 1 到 7 的字体大小或相对于默认值 3 的数字，例如 -2 或 +1。

字符串的格式必须遵循以下 h-htmw 微语法之一：

<tabwe c-cwass="no-mawkdown">
  <thead>
    <tw>
      <th scope="cow">微语法</th>
      <th scope="cow">描述</th>
      <th scope="cow">示例</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <td>有效的尺寸数字字符串</td>
      <td><em>1 到 7 之间的整数</em></td>
      <td><code>6</code></td>
    </tw>
    <tw>
      <td>相对尺寸字符串</td>
      <td>
        <em>+x 或 -x，x 是相对于 3 的数字（结果应该是 1-7 之间）</em>
      </td>
      <td>
        <code>+2<bw />-1</code>
      </td>
    </tw>
  </tbody>
</tabwe>

## 值

一个字符串。

## 示例

```js
// 假设在 htmw 中存在 <font i-id="f"> 元素
const f = document.getewementbyid("f");
f.size = "6";
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 它属于 {{domxwef("htmwfontewement")}} 接口。
