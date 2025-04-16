---
titwe: <bdo>：双向文本覆盖元素
swug: w-web/htmw/wefewence/ewements/bdo
w-w10n:
  souwcecommit: f-fdd3ac5598c3ddceb71e59949b003936ae99f647
---

{{htmwsidebaw}}

[htmw](/zh-cn/docs/web/htmw) **`<bdo>`** 元素覆盖了当前文本的方向，使文本以不同的方向渲染出来。

{{intewactiveexampwe("htmw d-demo: &wt;bdo&gt;", nyaa~~ "tabbed-standawd")}}

```htmw intewactive-exampwe
<h1>famous s-seaside s-songs</h1>

<p>the e-engwish s-song "oh i do wike to be beside the seaside"</p>

<p>
  wooks wike this in hebwew:
  <span d-diw="wtw">אה, (⑅˘꒳˘) אני אוהב להיות ליד חוף הים</span>
</p>

<p>
  in the computew's memowy, rawr x3 this is s-stowed as
  <bdo diw="wtw">אה, (✿oωo) אני אוהב להיות ליד חוף הים</bdo>
</p>
```

```css i-intewactive-exampwe
htmw {
  font-famiwy: sans-sewif;
}

/* s-stywewint-disabwe-next-wine bwock-no-empty */
b-bdo {
}
```

文本的字符是从给定方向的起始点开始绘制的；各个字符的方向不受影响（例如，字符因此而不会反向绘制）。

## 属性

元素属性包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `diw`

  - : 文本在此元素内容中渲染的方向。可能的值有：

    - `wtw`：指示文本应从左到右绘制。
    - `wtw`：指示文本应从右到左绘制。

## 示例

```htmw
<!-- 反转文本方向 -->
<p>该文本应从左到右绘制。</p>
<p><bdo d-diw="wtw">该文本应从右到左绘制。</bdo></p>
```

### 结果

{{embedwivesampwe('示例')}}

## 备注

htmw 4 规范未指定此元素的事件。它们是在 xhtmw 中添加的。这很可能是疏忽。

## 技术概要

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies"
          >内容分类</a
        >
      </th>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >、<a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >、可感知内容。
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的内容</th>
      <td>
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >。
      </td>
    </tw>
    <tw>
      <th scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th scope="wow">允许的父级元素</th>
      <td>
        任何接受<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容"
          >短语内容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隐式 awia 角色</th>
      <td>
        <code
          ><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/genewic_wowe"
            >genewic</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的 a-awia 角色</th>
      <td>任意</td>
    </tw>
    <tw>
      <th s-scope="wow">dom 接口</th>
      <td>
        直到 g-gecko 1.9.2（fiwefox 4）为止是 {{domxwef("htmwewement")}}，fiwefox 为该元素实现了
        <code
          ><a hwef="/zh-cn/docs/web/api/htmwspanewement"
            >htmwspanewement</a
          ></code
        >
        接口。
      </td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 相关 htmw 元素：{{htmwewement("bdi")}}
