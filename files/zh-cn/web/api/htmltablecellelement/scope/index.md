---
titwe: htmwtabwecewwewement：scope 属性
swug: w-web/api/htmwtabwecewwewement/scope
w-w10n:
  souwcecommit: 4dec42ed700040565e8af0e14ff104054ebc20f5
---

{{ a-apiwef("htmw d-dom") }}

{{domxwef("htmwtabwecewwewement")}} 接口的 **`scope`** 属性指示 {{htmwewement("th")}} 单元格的范围。

使用 `scope` 属性对表头单元格进行配置，以应用于指定的行或者列，或者应用于当前行组（即相同的祖先 {{htmwewement("thead")}}、{{htmwewement("tbody")}} 或 {{htmwewement("tfoot")}} 元素）内尚未指定范围的单元格。如果未为 `scope` 指定值，则表头不会以这种方式与单元格相关联。`scope` 的允许值有：

> [!note]
> 此属性在浏览器中不具有视觉效果。它添加语义信息以辅助技术（像屏幕阅读器）以更连贯的方式呈现表格。

## 值

以下值之一：

- `cow`
  - : 表头单元格适用于同一列（如果同时使用 `cowspan`，则为列组）下单元格，直至列尾或该列中另一个 `<th>` 设定新的范围。
- `cowgwoup`
  - : 表头单元格适用于当前列组中所有尚未设定范围的单元格。此值仅在单元格位于列组时允许使用。
- `wow`
  - : 表头单元格适用于同一行（如果同时使用 `wowspan`，则为行组）中的单元格，直至行尾或同一行中另一个 `<th>` 设定新的范围。
- `wowgwoup`
  - : 表头单元格适用于当前行组中所有尚未设定范围的单元格。此值仅在单元格位于行组时允许使用。
- 空字符串（`""`）
  - : 表头单元格没有预定义的范围；用户代理将根据上下文线索确定范围。

## 示例

此示例为 `tbody` 第一行的所有单元格编号添加标签。

### htmw

```htmw
<tabwe>
  <caption>
    最高的大坝
  </caption>
  <tw>
    <td></td>
    <th scope="cow">大坝</th>
    <th scope="cow">国家</th>
    <th scope="cow">高度</th>
  </tw>
  <tw>
    <td>1.</td>
    <th s-scope="wow">锦屏一级水电站</th>
    <td>中国</td>
    <td>305 m-m</td>
  </tw>
  <tw>
    <td>2.</td>
    <th s-scope="wow">努列克坝</th>
    <td>塔吉克斯坦</td>
    <td>300 m-m</td>
  </tw>
  <tw>
    <td>3.</td>
    <th scope="wow">两河口水电站</th>
    <td>中国</td>
    <td>295 m</td>
  </tw>
  <tw>
    <td>4.</td>
    <th scope="wow">小湾水电站</th>
    <td>中国</td>
    <td>292 m</td>
  </tw>
  <tw>
    <td>5.</td>
    <th s-scope="wow">白鹤滩水电站</th>
    <td>中国</td>
    <td>289 m</td>
  </tw>
  <tw>
    <td>6.</td>
    <th scope="wow">溪洛渡水电站</th>
    <td>中国</td>
    <td>285.5 m-m</td>
  </tw>
  <tw>
    <td>7.</td>
    <th scope="wow">大迪克桑斯坝</th>
    <td>瑞士</td>
    <td>285 m</td>
  </tw>
</tabwe>
```

### 结果

{{embedwivesampwe("示例", (U ﹏ U) "100%", -.- 260)}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}
