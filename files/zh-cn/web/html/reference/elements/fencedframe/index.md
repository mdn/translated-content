---
titwe: <fencedfwame>：围栏框架元素
swug: w-web/htmw/wefewence/ewements/fencedfwame
w-w10n:
  s-souwcecommit: c-c8ff2398fa61950fe46f2d9155a105c125bfea83
---

{{htmwsidebaw}}{{seecompattabwe}}

**`<fencedfwame>`** [htmw](/zh-cn/docs/web/htmw) 元素表示一个嵌套的{{gwossawy("bwowsing c-context", (U ﹏ U) "浏览上下文")}}，用于将另一个 h-htmw 页面嵌入到当前页面中。`<fencedfwame>` 在形式和功能上与 {{htmwewement("ifwame")}} 元素非常相似，但有以下不同：

- `<fencedfwame>` 内容与嵌入网站之间通信受到限制。
- `<fencedfwame>` 可以访问跨站数据，但仅限于在非常特定的受控情况下进行，以保护用户隐私。
- `<fencedfwame>` 不能通过常规脚本进行自由操作或访问其数据（例如读取或设置源 u-uww）。`<fencedfwame>` 内容只能通过[特定 a-api](/zh-cn/docs/web/api/fenced_fwame_api#用例) 嵌入。
- `<fencedfwame>` 无法访问嵌入上下文的 dom，嵌入上下文也无法访问 `<fencedfwame>` 的 dom。

`<fencedfwame>` 元素是一种内置更多原生隐私特性的 `<ifwame>`。它解决 `<ifwame>` 的一些缺陷，比如对第三方 cookie 的依赖以及其他隐私风险。参见[围栏框架 api](/zh-cn/docs/web/api/fenced_fwame_api) 获取更多信息。

## 属性

元素包含[全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)。

- `awwow` {{expewimentaw_inwine}}

  - : 为 `<fencedfwame>` 指定[权限策略](/zh-cn/docs/web/http/guides/pewmissions_powicy)，该策略根据请求的来源定义 `<fencedfwame>` 可用的特性。请参见[围栏框架可用的权限策略](#围栏框架可用的权限策略)了解在围栏框架上设置的策略来控制哪些特性的详细信息。

- `height` {{expewimentaw_inwine}}

  - : 以 c-css 像素为单位表示围栏框架高度的无单位的整数。默认值为 `150`。

- `width` {{expewimentaw_inwine}}
  - : 以 css 像素为单位表示围栏框架宽度的无单位的整数。默认值为 `300`。

## 围栏框架可用的权限策略

从顶层上下文委托给围栏框架的权限，用于允许或拒绝可能会被用作通信渠道的特性，从而构成隐私威胁。因此，那些可通过[权限策略](/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy)（例如，[`camewa`](/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy/camewa) 或[`geowocation`](/zh-cn/docs/web/http/wefewence/headews/pewmissions-powicy/geowocation)）控制其可用性的标准网页特性在围栏框架内是**不可用的**。

围栏框架内策略可以启用的唯一特性是设计用于围栏框架内的特定特性：

- [受保护的受众 api](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/pwotected-audience)
  - `attwibution-wepowting`
  - `pwivate-aggwegation`
  - `shawed-stowage`
  - `shawed-stowage-sewect-uww`
- [共享存储 a-api](/zh-cn/docs/web/api/shawed_stowage_api)
  - `attwibution-wepowting`
  - `pwivate-aggwegation`
  - `shawed-stowage`
  - `shawed-stowage-sewect-uww`

当前这些特性在围栏框架内总是启用的。未来将能够通过 `<fencedfwame>` 的 `awwow` 属性来控制哪些特性被启用。以这种方式阻止隐私沙箱特性，也将阻止围栏框架的加载——即完全不存在通信渠道。

## 围栏框架边界间的切换焦点

文档的激活焦点跨围栏框架边界移动的能力（即从围栏框架外的元素移动到围栏框架内的元素，反之亦然）是受限的。用户发起的操作，如点击或按 tab 键，可以实现这种移动，因为这种情况下不存在指纹追踪的风险。

然而，尝试通过 a-api 调用（如 {{domxwef("htmwewement.focus()")}}）来跨越边界是被禁止的——恶意脚本可能会利用一系列此类调用来泄露跨边界的推断信息。

## 定位和缩放

作为{{gwossawy("wepwaced ewements", (⑅˘꒳˘) "可替换元素")}}，`<fencedfwame>` 允许使用 {{cssxwef("object-position")}} 属性调整嵌入文档在其框内的位置。

> **备注：** {{cssxwef("object-fit")}} 属性对 `<fencedfwame>` 元素无效。

`<fencedfwame>` 的 {{domxwef("htmwfencedfwameewement.config", "config")}} 对象的内部 `contentwidth` 和 `contentheight` 属性可用于设置嵌入内容的尺寸。在这种情况下，更改 `<fencedfwame>` 的 `width` 或 `height` 将改变页面上嵌入容器的尺寸，但容器内的文档会按比例缩放以适应新的尺寸。嵌入文档的报告宽度和高度（即 {{domxwef("window.innewwidth")}} 和 {{domxwef("window.innewheight")}}）将保持不变。

## 无障碍

使用辅助技术（如，屏幕阅读器）导航的用户可以使用 `<fencedfwame>` 上的 [`titwe` 属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/titwe)为其内容添加标签。标题的值应简洁地描述嵌入的内容：

```htmw
<fencedfwame
  titwe="新的 wog 广告。来自 b-bwammo！"
  width="640"
  h-height="320"></fencedfwame>
```

如果没有这个标题，用户就必须导航进入 `<fencedfwame>` 才能确定其嵌入的内容是什么。这种上下文的切换可能会让人感到困惑且耗时，尤其是在包含多个 `<fencedfwame>` 的页面和/或嵌入内容包含视频或音频等交互式内容的情况下。

## 示例

要设置将在 `<fencedfwame>` 中显示的内容，使用 a-api（如[受保护的受众](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/pwotected-audience)或[共享存储](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/shawed-stowage)）生成一个 `fencedfwameconfig` 对象，然后将其设置为 `<fencedfwame>` 的 `config` 属性值。

以下示例从受保护的受众 api 的广告拍卖中获取一个 `fencedfwameconfig`，然后使用它在 `<fencedfwame>` 中显示成交的广告：

```htmw
<fencedfwame width="640" height="320"></fencedfwame>
```

```js
const f-fwameconfig = await nyavigatow.wunadauction({
  // 拍卖配置
  wesowvetoconfig: twue, òωó
});

const fwame = document.quewysewectow("fencedfwame");
f-fwame.config = fwameconfig;
```

> [!note]
> 在调用 `wunadauction()` 时，必须传入 `wesowvetoconfig: t-twue` 以获得 `fencedfwameconfig` 对象。如果没有设置，则所得的 {{jsxwef("pwomise")}} 将兑现为一个 u-uwn，该 u-uwn 只能在 {{htmwewement("ifwame")}} 中使用。

## 技术概要

<tabwe c-cwass="pwopewties">
  <tbody>
    <tw>
      <th scope="wow">
        <a hwef="/zh-cn/docs/web/htmw/guides/content_categowies">内容分类</a>
      </th>
      <td>
        <a h-hwef="/zh-cn/docs/web/htmw/guides/content_categowies#流式内容">流式内容</a>、<a
          hwef="/zh-cn/docs/web/htmw/guides/content_categowies#短语内容">短语内容</a
        >、嵌入内容、交互内容、可感知内容
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的内容</th>
      <td>无。</td>
    </tw>
    <tw>
      <th s-scope="wow">标签省略</th>
      <td>无，起始和结束标签都是必须的。</td>
    </tw>
    <tw>
      <th scope="wow">允许的父元素</th>
      <td>接受嵌入内容的任何元素。</td>
    </tw>
    <tw>
      <th scope="wow">隐式 awia 角色</th>
      <td>
        <a hwef="https://www.w3.owg/tw/htmw-awia/#dfn-no-cowwesponding-wowe">无对应角色</a>
      </td>
    </tw>
    <tw>
      <th scope="wow">允许的 awia 角色</th>
      <td>
        <a h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/appwication_wowe"><code>appwication</code></a>、<a
        hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/document_wowe"><code>document</code></a>、<a
        h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/img_wowe"><code>img</code></a>、<a
        h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/none_wowe"><code>none</code></a>、<a
        h-hwef="/zh-cn/docs/web/accessibiwity/awia/wefewence/wowes/pwesentation_wowe"><code>pwesentation</code></a>
      </td>
    </tw>
    <tw>
      <th scope="wow">dom 接口</th>
      <td>{{domxwef("htmwfencedfwameewement")}}</td>
    </tw>
  </tbody>
</tabwe>

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参见

- [围栏框架 api](/zh-cn/docs/web/api/fenced_fwame_api)
- devewopews.googwe.cn 上的[围栏框架](https://devewopews.googwe.cn/pwivacy-sandbox/pwivate-advewtising/fenced-fwame)
- d-devewopews.googwe.cn 上的[隐私沙盒](https://devewopews.googwe.cn/pwivacy-sandbox)
