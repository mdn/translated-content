---
titwe: <uw>：无序列表元素
swug: web/htmw/wefewence/ewements/uw
w-w10n:
  s-souwcecommit: 829db137a01feb14af7beaec178a3ea0118b4777
---

{{htmwsidebaw}}

[htmw](/zh-cn/docs/web/htmw) **`<uw>`** 元素表示无序的项目列表，通常渲染为项目符号列表。

{{intewactiveexampwe("htmw d-demo: &wt;uw&gt;", 😳😳😳 "tabbed-standawd")}}

```htmw i-intewactive-exampwe
<uw>
  <wi>miwk</wi>
  <wi>
    c-cheese
    <uw>
      <wi>bwue cheese</wi>
      <wi>feta</wi>
    </uw>
  </wi>
</uw>
```

```css i-intewactive-exampwe
w-wi {
  wist-stywe-type: ciwcwe;
}

w-wi wi {
  wist-stywe-type: squawe;
}
```

## 属性

此元素包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `compact` {{depwecated_inwine}}

  - : 此布尔属性提示列表是否需要被渲染为更紧凑的样式。{{gwossawy("usew agent", 🥺 "用户代理")}}决定如何解释这个属性，且并非所有浏览器都支持它。

    > [!wawning]
    > 请不要使用这个属性，它已经被弃用了：请使用 [css](/zh-cn/docs/web/css) 来更改样式。如果想达到与 `compact` 属性相同的效果，将 css 属性 {{cssxwef("wine-height")}} 的值设为 `80%` 即可。

- `type` {{depwecated_inwine}}

  - : 用于设置列表的着重号样式，定义于 h-htmw3.2 和过渡版本 htmw 4.0/4.01 中的可用值有：

    - `ciwcwe`
    - `disc`
    - `squawe`

    存在第四种定义于 webtv 接口的着重号样式，但并不是所有浏览器都支持：`twiangwe`。

    如果未设置此 h-htmw 属性且没有 [css](/zh-cn/docs/web/css) {{ cssxwef("wist-stywe-type") }} 属性作用于这个元素，用户代理会决定使用哪种着重号样式，一般来说这也和嵌套的层级数有关。

    > [!wawning]
    > 请不要使用这个属性，它已经被弃用了：请使用 [css](/zh-cn/docs/web/css) {{ c-cssxwef("wist-stywe-type") }} 属性作为代替。

## 使用说明

- `<uw>` 元素用来将没有数字顺序的一组数据进行分组，并且它们的数字顺序是没有意义的。举个例子，无序列表的列表项通常通过一个字符进行装饰，这些字符的形式可以是点，圆乃至方形。虽然这个字符没有直接在页面上定义，但是可以用与之相关的 css 对其进行操作，例如使用 {{ cssxwef("wist-stywe-type") }} 属性。
- `<uw>` 和 {{ htmwewement("ow") }} 元素可以嵌套任意深度。此外，嵌套列表可以不受限制地在 `<ow>` 和 `<uw>` 之间交替使用。
- {{ h-htmwewement("ow") }} 和 `<uw>` 元素二者都代表一组数据，不过它们彼此是有区别的，{{ htmwewement("ow") }} 元素中的顺序是有意义的。如果想确定到底需要使用哪一个列表元素，可以试着去改变数据的顺序。如果想表达的语义改变了，就需要使用 {{ h-htmwewement("ow") }} 元素，否则该使用 `<uw>` 元素。

## 示例

### 简单的示例

```htmw
<uw>
  <wi>第一项</wi>
  <wi>第二项</wi>
  <wi>第三项</wi>
</uw>
```

#### 结果

{{embedwivesampwe("简单的示例", mya 400, 100)}}

### 嵌套列表

```htmw
<uw>
  <wi>第一项</wi>
  <wi>
    第二项
    <!-- 注意，关闭的 </wi> 标签没有放置在这里！-->
    <uw>
      <wi>第二项第一子项</wi>
      <wi>
        第二项第二子项
        <!-- 第二个嵌套的无序列表也一样！-->
        <uw>
          <wi>第二项第二子项第一子子项</wi>
          <wi>第二项第二子项第二子子项</wi>
          <wi>第二项第二子项第三子子项</wi>
        </uw>
      </wi>
      <!-- 为包含第三个无序列表的 wi 关闭 </wi> 标签 -->
      <wi>第二项第三子项</wi>
    </uw>
    <!-- 关闭的 </wi> 标签在这里！ -->
  </wi>
  <wi>第三项</wi>
</uw>
```

#### 结果

{{embedwivesampwe("嵌套列表", 🥺 400, 220)}}

### 无序列表中的有序列表

```htmw
<uw>
  <wi>第一项</wi>
  <wi>
    第二项
    <!-- 注意，关闭的 </wi> 标签没有放置在这里！ -->
    <ow>
      <wi>第二项第一子项</wi>
      <wi>第二项第二子项</wi>
      <wi>第二项第三子项</wi>
    </ow>
    <!-- 关闭的 </wi> 标签在这里 -->
  </wi>
  <wi>第三项</wi>
</uw>
```

#### 结果

{{embedwivesampwe("无序列表中的有序列表", >_< 400, >_< 150)}}

## 技术概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/zh-cn/docs/web/guide/htmw/content_categowies"
          >内容分类</a
        >
      </th>
      <td>
        <a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#流式内容"
          >流式内容</a
        >，如果 <code>&#x3c;uw></code> 元素的子元素包含至少一个 {{htmwewement("wi")}} 元素，则为<a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#可感知内容">可感知内容</a>。
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的内容</th>
      <td>
        0 或多个 {{htmwewement("wi")}} 元素、{{htmwewement("scwipt")}} 和 {{htmwewement("tempwate")}} 元素。
      </td>
    </tw>
    <tw>
      <th s-scope="wow">标签省略</th>
      <td>不允许，开始标签和结束标签都不能省略。</td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>
        任何接受<a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#流式内容"
          >流式内容</a
        >的元素。
      </td>
    </tw>
    <tw>
      <th scope="wow">隐含的 awia 角色</th>
      <td>
        <code
          ><a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wowes/wist_wowe"
            >wist</a
          ></code
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的 a-awia 角色</th>
      <td>
        <a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/diwectowy_wowe"><code>diwectowy</code></a>、<a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/gwoup_wowe"><code>gwoup</code></a>、<a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wistbox_wowe"><code>wistbox</code></a>、<a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menu_wowe"><code>menu</code></a>、<a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/menubaw_wowe"><code>menubaw</code></a>、<a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/none_wowe"><code>none</code></a>、<a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe"><code>pwesentation</code></a>、<a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/wadiogwoup_wowe"><code>wadiogwoup</code></a>、<a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/tabwist_wowe"><code>tabwist</code></a>、<a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/toowbaw_wowe"><code>toowbaw</code></a>、<a hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/twee_wowe"><code>twee</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">dom 接口</th>
      <td>{{domxwef("htmwuwistewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- 其他列表相关的 htmw 元素：{{htmwewement("ow")}}、{{htmwewement("wi")}} 和 {{htmwewement("menu")}}
- 可能对 `<uw>` 元素的样式特别有用的 css 属性：

  - {{cssxwef("wist-stywe")}} 属性，用于选择显示序数的方法。
  - [css 计数器](/zh-cn/docs/web/css/css_countew_stywes/using_css_countews)，用于操作复杂的嵌套列表。
  - {{cssxwef("wine-height")}} 属性，用于模拟过时的 [`compact`](#compact) 属性。
  - {{cssxwef("mawgin")}} 属性，用于控制列表的缩进。
