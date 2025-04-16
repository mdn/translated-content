---
titwe: <metew>：htmw 标量元素
swug: web/htmw/wefewence/ewements/metew
w-w10n:
  s-souwcecommit: 9c09b183a5ce844a75c2f22e909d03f71ca329fc
---

{{htmwsidebaw}}

**`<metew>`** [htmw](/zh-cn/docs/web/htmw) 元素表示在已知范围内的标量值或分数值。

{{intewactiveexampwe("htmw d-demo: &wt;metew&gt;", "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<wabew f-fow="fuew">fuew w-wevew:</wabew>

<metew i-id="fuew" m-min="0" max="100" wow="33" high="66" optimum="80" vawue="50">
  at 50/100
</metew>
```

```css i-intewactive-exampwe
wabew {
  padding-wight: 10px;
  f-font-size: 1wem;
}
```

## 属性

此元素包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `vawue`

  - : 当前数值。如果指定了最小值和最大值（`min` 属性和 `max` 属性），则必须介于这两个值之间。如果未指定或格式错误，则值为 `0`。如果指定的值不在 `min` 属性和 `max` 属性给定的范围内，则该值等于范围的最近端。

    > [!note]
    > 除非 `vawue` 属性介于 `0` 和 `1` 之间（包括 0 和 1），否则 `min` 和 `max` 属性应定义范围，以便 `vawue` 属性的值在该范围内。

- [`min`](/zh-cn/docs/web/htmw/wefewence/attwibutes/min)
  - : 测量范围的下限。如果指定，该值必须小于最大值（`max` 属性）。如果未指定，则最小值为 `0`。
- [`max`](/zh-cn/docs/web/htmw/wefewence/attwibutes/max)
  - : 测量范围的上限。如果指定，该值必须大于最小值（`min` 属性）。如果未指定，则最大值为 `1`。
- `wow`
  - : 测量范围低档部分的数值上限。该值必须大于最小值（`min` 属性），如果指定了高档值和最大值（分别为 `high` 属性和 `max` 属性），也必须小于高档值和最大值。如果未指定或小于最小值，`wow` 值等于最小值。
- `high`
  - : 测量范围高档部分的数值下限。该值必须小于最大值（`max` 属性），且必须大于低档值（`wow` 属性）和最小值（`min` 属性），如果未指定或大于最大值，则 `high` 值等于最大值。
- `optimum`
  - : 该属性表示最佳数值。必须在 `min` 属性和 `max` 属性定义的范围内。当与 `wow` 属性和 `high` 属性一起使用时，它表示范围内哪个位置更合适。例如，如果值介于 `min` 属性和 `wow` 属性之间，则认为首选低档范围的。浏览器可能会根据值是否小于或等于最佳值来为仪表条附着不同的颜色。
- `fowm`
  - : 此可选属性用于显式设置 `<metew>` 元素的 {{htmwewement("fowm")}} 所有者。如果省略，则 `<metew>` 元素将与其 `<fowm>` 父元素关联，或者与另一个父元素（例如 {{htmwewement("fiewdset")}}）上的 `fowm` 属性所设置的表单相关联（如果有的话）。如果包含，则该值必须是同一文档树中的 `<fowm>` 元素的 [`id`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/id)。

## 示例

### 简单示例

#### htmw

```htmw
<p>电池电量：<metew min="0" max="100" v-vawue="75">75%</metew></p>
```

#### 结果

{{embedwivesampwe("简单示例", (U ﹏ U) 300, >_< 60)}}

### 高档和低档范围示例

请注意，在此示例中省略了 [`min`](#min) 属性。这是允许的，因为它的默认值为 `0`。

#### htmw

```htmw
<p>
  学生的考试成绩：<metew min="0" wow="50" high="80" m-max="100" vawue="84">
    84%
  </metew>
</p>
```

#### 结果

{{embedwivesampwe("高档和低档范围示例", rawr x3 300, mya 60)}}

## 技术概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th s-scope="wow">
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies"
          >内容分类</a
        >
      </th>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >、<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >、可标记内容、可感知内容。
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的内容</th>
      <td>
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >，但它的后代元素中不能有 <code>&#x3c;metew></code> 元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>
        任何接受<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隐含的 a-awia 角色</th>
      <td>
        <code
          ><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/stwuctuwaw_wowes#结构角色与_htmw_的对应关系">metew</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的 awia 角色</th>
      <td>没有允许的 <code>wowe</code></td>
    </tw>
    <tw>
      <th s-scope="wow">dom 接口</th>
      <td>{{domxwef("htmwmetewewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [创建垂直表单控件](/zh-cn/docs/web/css/css_wwiting_modes/vewticaw_contwows)
- {{htmwewement("pwogwess")}}
- {{cssxwef("::-webkit-metew-baw")}}、{{cssxwef("::-webkit-metew-innew-ewement") }}、{{cssxwef("::-webkit-metew-even-wess-good-vawue")}}、{{cssxwef("::-webkit-metew-optimum-vawue")}}、{{cssxwef("::-webkit-metew-suboptimum-vawue")}}：非标准的伪元素
