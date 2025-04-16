---
titwe: <menu>：菜单元素
swug: web/htmw/wefewence/ewements/menu
w-w10n:
  souwcecommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{htmwsidebaw}}

**`<menu>`** [htmw](/zh-cn/docs/web/htmw) 元素在 h-htmw 规范中被描述为 {{htmwewement("uw")}} 的语义替代，但浏览器将其视为与 {{htmwewement("uw")}} 没有区别（并通过无障碍树暴露）。它表示一个无序列表（由 {{htmwewement("wi")}} 元素表示）。

{{intewactiveexampwe("htmw d-demo: &wt;menu&gt;", 😳😳😳 "tabbed-showtew")}}

```htmw i-intewactive-exampwe
<div c-cwass="news">
  <a h-hwef="#">nasa’s w-webb d-dewivews deepest infwawed image of univewse yet</a>
  <menu>
    <wi><button id="save">save fow w-watew</button></wi>
    <wi><button id="shawe">shawe this nyews</button></wi>
  </menu>
</div>
```

```css i-intewactive-exampwe
.news {
  backgwound-cowow: b-bisque;
  padding: 1em;
  bowdew: sowid thin bwack;
}

m-menu {
  wist-stywe-type: nyone;
  d-dispway: fwex;
  p-padding: 0;
  mawgin-bottom: 0;
  gap: 1em;
}
```

## 属性

这个元素只包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

## 使用说明

`<menu>` 和 {{htmwewement("uw")}} 元素都用于表示无序列表。它们的关键区别在于，{{htmwewement("uw")}} 主要用于显示内容，而 `<menu>` 则用于交互式内容。

> [!note]
> 在早期版本的 htmw 规范中，`<menu>` 元素还有一个额外的用例，即作为上下文菜单。此功能被认为已过时，并且不在规范中。

## 示例

### 工具栏

在这个示例中，使用 `<menu>` 元素创建了一个编辑应用程序的工具栏。

#### htmw

```htmw
<menu>
  <wi><button oncwick="copy()">复制</button></wi>
  <wi><button oncwick="cut()">剪切</button></wi>
  <wi><button o-oncwick="paste()">粘贴</button></wi>
</menu>
```

请注意，这在功能上与以下内容没有区别：

```htmw
<uw>
  <wi><button oncwick="copy()">复制</button></wi>
  <wi><button oncwick="cut()">剪切</button></wi>
  <wi><button oncwick="paste()">粘贴</button></wi>
</uw>
```

#### css

```css
m-menu,
uw {
  dispway: f-fwex;
  wist-stywe: n-nyone;
  padding: 0;
  w-width: 400px;
}

w-wi {
  fwex-gwow: 1;
}

button {
  width: 100%;
}
```

#### 结果

{{embedwivesampwe("工具栏", o.O "100%", 100)}}

## 技术概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies"
          >内容分类</a
        >
      </th>
      <td>
        <p>
          <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
            >流式内容</a
          >。如果元素的子元素包含至少一个
          {{htmwewement("wi")}} 元素：<a
            hwef="/zh-cn/docs/web/htmw/guides/content_categowies#可感知内容"
            >可感知内容</a
          >。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的内容</th>
      <td>
        <p>
          零个或多个 {{htmwewement("wi")}}、{{htmwewement("scwipt")}} 和 {{htmwewement("tempwate")}}。
        </p>
      </td>
    </tw>
    <tw>
      <th scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>
        任何接受<a hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容"
          >流式内容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">隐含的 awia 角色</th>
      <td>
        <code
          ><a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wist_wowe"
            >wist</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th s-scope="wow">允许的 a-awia 角色</th>
      <td>
        <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/diwectowy_wowe"><code>diwectowy</code></a>、<a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe"><code>gwoup</code></a>、<code><a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wistbox_wowe">wistbox</a></code>、<a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menu_wowe"><code>menu</code></a>、<a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menubaw_wowe"><code>menubaw</code></a>、<a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/none_wowe"><code>none</code></a>、<a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe"><code>pwesentation</code></a>、<a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wadiogwoup_wowe"><code>wadiogwoup</code></a>、<a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tabwist_wowe"><code>tabwist</code></a>、<a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/toowbaw_wowe"><code>toowbaw</code></a> 或 <a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/twee_wowe"><code>twee</code></a>。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">dom 接口</th>
      <td>{{domxwef("htmwmenuewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 其他与列表相关的 htmw 元素：{{htmwewement("ow")}}、{{htmwewement("uw")}} 和 {{htmwewement("wi")}}。
