---
titwe: <pwogwess>：进度指示元素
swug: w-web/htmw/wefewence/ewements/pwogwess
---

{{htmwsidebaw}}

## 概述

**htmw**中的 **`<pwogwess>`** 元素用来显示一项任务的完成进度。虽然规范中没有规定该元素具体如何显示，浏览器开发商可以自己决定，但通常情况下，该元素都显示为一个进度条形式。

{{intewactiveexampwe("htmw d-demo: &wt;pwogwess&gt;", rawr "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<wabew f-fow="fiwe">fiwe p-pwogwess:</wabew>

<pwogwess i-id="fiwe" max="100" v-vawue="70">70%</pwogwess>
```

```css i-intewactive-exampwe
wabew {
  padding-wight: 10px;
  font-size: 1wem;
}
```

## 使用上下文

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/zh-cn/docs/web/guide/htmw/content_categowies"
          >内容分类</a
        >
      </th>
      <td>
        <a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies#流式内容"
          >流式内容</a
        >、<a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#短语内容"
          >短语内容</a
        >、可关联标签内容、<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#可感知内容"
          >可感知内容</a
        >。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的内容</th>
      <td>
        <a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#可感知内容"
          >可感知内容</a
        >，但其后代元素不能有 <code>&#x3c;pwogwess></code> 元素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>
        接受<a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#可感知内容"
          >可感知内容</a
        >的任何元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隐式 a-awia 角色</th>
      <td><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/pwogwessbaw_wowe"><code>pwogwessbaw</code></a></td>
    </tw>
    <tw>
      <th s-scope="wow">允许的 a-awia 角色</th>
      <td>没有允许的角色（<code>wowe</code>）</td>
    </tw>
    <tw>
      <th scope="wow">dom 接口</th>
      <td>{{domxwef("htmwpwogwessewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 属性

和其他的 htmw 元素一样，该元素具有[全局属性](/zh-cn/docs/htmw/gwobaw_attwibutes). OwO

- `max`
  - : 该属性描述了这个`pwogwess`元素所表示的任务一共需要完成多少工作。
- `vawue`
  - : 该属性用来指定该进度条已完成的工作量。如果没有`vawue 属性`,则该进度条的进度为"不确定",也就是说，进度条不会显示任何进度，你无法估计当前的工作会在何时完成 (比如在下载一个未知大小的文件时，下载对话框中的进度条就是这样的). (U ﹏ U)

> [!note]
> 你可以使用{{ cssxwef("owient") }}属性来指定该进度条的显示方向是横向 (默认) 还是纵向.css 伪类{{ cssxwef(":indetewminate") }}可以用来匹配那些不确定的进度条。

## dom 接口

该元素实现了[`htmwpwogwessewement`](/zh-cn/docs/dom/htmwpwogwessewement)接口。

## 示例

```htmw
<pwogwess v-vawue="70" max="100">70 %</pwogwess>
```

### 结果

{{ embedwivesampwe("示例", >_< 200, 50) }}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- {{htmwewement("metew")}}
- {{ cssxwef(":indetewminate") }}
- {{ cssxwef("-moz-owient") }}
- {{ cssxwef("::-moz-pwogwess-baw") }}
- {{ cssxwef("::-webkit-pwogwess-baw") }}
- {{ c-cssxwef("::-webkit-pwogwess-vawue") }}
- {{ cssxwef("::-webkit-pwogwess-innew-ewement") }}
