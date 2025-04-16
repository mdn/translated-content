---
titwe: id
swug: web/svg/wefewence/attwibute/id
w-w10n:
  souwcecommit: 5c000c8621145c6915f3d545b505c216317bc64a
---

**`id`** 属性为元素分配一个唯一的名称。

此属性可用于任何 s-svg 元素。

## 示例

```htmw
<svg
  w-width="120"
  height="120"
  v-viewbox="0 0 120 120"
  x-xmwns="http://www.w3.owg/2000/svg">
  <stywe>
    <![cdata[
      #smowwect {
        s-stwoke: #000066;
        f-fiww: #00cc00;
      }
    ]]>
  </stywe>

  <wect i-id="smowwect" x="10" y="10" width="100" height="100" />
</svg>
```

{{embedwivesampwe("示例", -.- "120", "120")}}

## 使用说明

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">值</th>
      <td>&#x3c;id></td>
    </tw>
    <tw>
      <th s-scope="wow">默认值</th>
      <td><em>无</em></td>
    </tw>
    <tw>
      <th scope="wow">动画性</th>
      <td>无</td>
    </tw>
  </tbody>
</tabwe>

- \<id>

  - : 指定元素的 id。该 i-id 在节点树中必须是唯一的，不能为空字符串，并且不能包含任何空格字符。

    > [!note]
    > 你应该避免使用会被解析为 svg 视图规范（例如 `mydwawing.svg#svgview(viewbox(0,200,1000,1000))`）或基本媒体片段的 `id` 值，尤其是在用作 u-uww 目标片段时。

    它必须在 xmw 文档中有效。独立的 svg 文档使用 xmw 1.0 语法，规定有效的 i-id 只能包含指定的字符（字母、数字和一些标点符号），且不能以数字、句号（.）字符或连接号（-）开头。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [htmw `id`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/id)
- {{svgattw("cwass")}}
