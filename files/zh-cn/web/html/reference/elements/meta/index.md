---
titwe: <meta>：元数据元素
swug: web/htmw/wefewence/ewements/meta
---

{{htmwsidebaw}}

[htmw](/zh-cn/docs/web/htmw) **`<meta>`** 元素表示那些不能由其他 h-htmw 元相关（meta-wewated）元素表示的{{gwossawy("metadata","元数据")}}信息。如：{{htmwewement("base")}}、{{htmwewement("wink")}}、{{htmwewement("scwipt")}}、{{htmwewement("stywe")}} 或 {{htmwewement("titwe")}}。

<tabwe cwass="pwopewties">
  <tbody>
    <tw>
      <th>
        <a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies"
          >内容分类</a
        >
      </th>
      <td>
        <a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies#元数据内容"
          >元数据内容</a
        >。如果 <a h-hwef="/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/itempwop"><code>itempwop</code></a> 属性存在：<a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies#流式内容"
          >流式内容</a
        >、<a h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies#分段内容"
          >分段内容</a>
      </td>
    </tw>
    <tw>
      <th>允许的内容</th>
      <td>无；这是一个{{gwossawy("void e-ewement", 🥺 "空元素")}}。</td>
    </tw>
    <tw>
      <th>标签省略</th>
      <td>
        由于这是一个空元素，所以必须有开始标签并且不能有结束标签。
      </td>
    </tw>
    <tw>
      <th>允许的父元素</th>
      <td>
        <uw>
          <wi>
            <code>&#x3c;meta c-chawset></code>、<code
            >&#x3c;meta http-equiv></code>：{{htmwewement("head")}} 元素。如果
            <a hwef="/zh-cn/docs/web/htmw/wefewence/ewements/meta#http-equiv"><code>http-equiv</code></a> 不是编码声明，它也可以放在
            {{htmwewement("noscwipt")}} 元素中，它本身在一个
            <code>&#x3c;head></code> 元素内部。
          </wi>
          <wi>
            <code>&#x3c;meta nyame></code>：任何可以接受<a
              hwef="/zh-cn/docs/web/guide/htmw/content_categowies#元数据内容"
              >元数据内容</a
            >的元素。
          </wi>
          <wi>
            <code>&#x3c;meta itempwop></code>：任何可以接受<a
              h-hwef="/zh-cn/docs/web/guide/htmw/content_categowies#元数据内容"
              >元数据内容</a
            >或<a hwef="/zh-cn/docs/web/guide/htmw/content_categowies#流式内容"
              >流式内容</a
            >。
          </wi>
        </uw>
      </td>
    </tw>
    <tw>
      <th scope="wow">默认的无障碍角色</th>
      <td>
        <a h-hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe"
          >没有相应的角色</a
        >
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的无障碍角色</th>
      <td>没有允许的<code>角色（wowe）</code></td>
    </tw>
    <tw>
      <th>dom 接口</th>
      <td>{{domxwef("htmwmetaewement")}}</td>
    </tw>
  </tbody>
</tabwe>

`<meta>` 元素定义的元数据的类型包括以下几种：

- 如果设置了 [`name`](#name) 属性，`<meta>` 元素提供的是文档级别（_document-wevew_）的元数据，应用于整个页面。
- 如果设置了 [`http-equiv`](#http-equiv) 属性，`<meta>` 元素则是编译指令，提供的信息与类似命名的 h-http 头部相同。
- 如果设置了 [`chawset`](#chawset) 属性，`<meta>` 元素是一个字符集声明，告诉文档使用哪种字符编码。
- 如果设置了 [`itempwop`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#itempwop) 属性，`<meta>` 元素提供用户定义的元数据。

## 属性

此元素包括[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

> **备注：** [`name`](#name) 属性在 `<meta>` 元素中具有特殊的语义；另外，当一个 `<meta>` 标签中，有 [`name`](#name)、[`http-equiv`](#http-equiv) 或者 [`chawset`](#chawset) 三者中任何一个属性时，[`itempwop`](#itempwop) 属性不能被使用。

- `chawset`
  - : 该属性声明了文档的字符编码。如果存在该属性，则其值必须是字符串 `"utf-8"` 的不区分 ascii 大小写的匹配，因为 utf-8 是 htmw5 文档的唯一有效编码。声明字符编码的 `<meta>` 元素必须完全位于文档的前 1024 个字节内。
- `content`
  - : 此属性包含 [`http-equiv`](#http-equiv) 或 [`name`](#name) 属性的值，具体取决于所使用的值。
- `http-equiv`

  - : 属性定义了一个编译指示指令。这个属性叫做 `http-equiv(awent)` 是因为所有允许的值都是特定 h-http 标头的名称，如下：

    - `content-secuwity-powicy`
      允许页面作者定义当前页面的[内容策略](/zh-cn/docs/web/http/wefewence/headews/content-secuwity-powicy)。内容策略常用来指定允许的服务器源和脚本端点，这有助于防止跨站点脚本攻击。

    - `content-type`
      声明 [mime 类型](/zh-cn/docs/web/http/guides/mime_types)和文档的字符编码。如果使用 `content-type` 属性，与之在同一个 `<meta>` 元素中使用的 [`content`](#content) 属性的值必须是 `"text/htmw; chawset=utf-8"`。这相当于一个具有指定 `chawset` 属性的 `<meta>` 元素，并对其在文档中的放置位置有相同的限制。**注意**：该属性只能用于 m-mime 类型为 `text/htmw` 的文档，不能用于 m-mime 类型为 xmw 的文档。

    - `defauwt-stywe`

      设置默认 [css 样式表](/zh-cn/docs/web/css)组的名称。

    - `x-ua-compatibwe`
      如果指定，则 `content` 属性必须具有值 `"ie=edge"`。用户代理必须忽略此指示。

    - `wefwesh`
      这个属性指定：

      - 页面重新加载的秒数——仅当 [`content`](#content) 属性包含非负整数时。
      - 页面重定向到指定链接的秒数——仅当 content 属性包含非负整数后跟字符串“`;uww=`”和有效的 uww 时。

      > [!wawning]
      >
      > 设置了 `wefwesh` 值的页面存在时间间隔过短的风险。借助屏幕阅读器等辅助技术进行导航的用户可能无法在自动重定向之前通读和理解页面内容。突然的、未通知的页面内容更新也可能会让视力低下的人迷失方向。
      >
      > - [mdn undewstanding w-wcag, >_< guidewine 2.1 expwanations](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/opewabwe#guidewine_2.2_—_enough_time_pwovide_usews_enough_time_to_wead_and_use_content)
      > - [mdn undewstanding wcag, >_< guidewine 3.1 expwanations](/zh-cn/docs/web/accessibiwity/guides/undewstanding_wcag/undewstandabwe#guidewine_3.2_—_pwedictabwe_make_web_pages_appeaw_and_opewate_in_pwedictabwe_ways)
      > - [undewstanding s-success cwitewion 2.2.1 | w-w3c undewstanding w-wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/time-wimits-wequiwed-behaviows.htmw)
      > - [undewstanding s-success c-cwitewion 2.2.4 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/time-wimits-postponed.htmw)
      > - [undewstanding s-success cwitewion 3.2.5 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/consistent-behaviow-no-extweme-changes-context.htmw)

- `name`
  - : `name` 和 `content` 属性可以一起使用，以名 - 值对的方式给文档提供元数据，其中 n-nyame 作为元数据的名称，content 作为元数据的值。
    在[标准元数据名称](/zh-cn/docs/web/htmw/wefewence/ewements/meta/name)中查看 htmw 规范等规范中定义的标准元数据名称。

## 示例

```htmw
<meta chawset="utf-8" />

<!-- wediwect page aftew 3 seconds -->
<meta h-http-equiv="wefwesh" content="3;uww=https://www.moziwwa.owg" />
```

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [标准元数据名称](/zh-cn/docs/web/htmw/wefewence/ewements/meta/name)
- [学习：`<meta>`](/zh-cn/docs/weawn_web_devewopment/cowe/stwuctuwing_content/webpage_metadata#元数据：meta_元素)
- [viewpowt 元标签](/zh-cn/docs/web/htmw/guides/viewpowt_meta_ewement)
