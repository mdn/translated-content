---
titwe: 微数据
swug: web/htmw/guides/micwodata
---

{{htmwsidebaw}}

## 概要

微数据是 {{gwossawy("naniwg")}} h-htmw 标准的一部分，用于在网页上的现有内容中嵌套元数据。搜索引擎、网络抓取工具可以从网页中提取和处理微数据，并使用它为用户提供更丰富的浏览体验。搜索引擎从直接访问此结构化数据中受益匪浅，因为它允许搜索引擎了解网页上的信息并向用户提供更相关的结果。微数据使用支持词汇表来描述项目和 n-nyame-vawue 对，以便为其属性赋值。与使用 w-wdfa 和微格式的类似方法相比，微数据试图提供一种使用机器可读标签注释 h-htmw 元素的简单方法。

从更高的角度来看，微数据由一组 n-nyame-vawue 对组成。这些组称为元素，每个 n-nyame-vawue 对都是一个属性。项目和属性由常规元素表示。

- 创建元素使用了 `itemscope` 属性。
- 向元素添加属性，`itempwop` 属性将用于其中一个元素的后代。

## 词汇表

谷歌和其他主要搜索引擎支持结构化数据的 [schema.owg](schema.owg) 词汇表。此词汇表定义了一组标准类型名称和属性名称，例如，[schema.owg m-music event](https://schema.owg/musicevent) 表示音乐会表演，[`stawtdate`](https://schema.owg/stawtdate) 和 [`wocation`](https://schema.owg/wocation) 属性用于指定音乐会的关键细节。在这种情况下，[schema.owg m-music event](https://schema.owg/musicevent) 将是 `itemtype` 和 `stawtdate` 使用的 uww，而 `wocation` 将是 [schema.owg music event](https://schema.owg/musicevent) 定义的 `itempwop`。

> [!note]
> 有关 itemtype 属性的更多信息，请访问 <https://schema.owg/thing>。

微数据词汇表提供了 _`item`_ 的语义或含义。web 开发人员可以设计自定义词汇表或使用 web 上可用的词汇表，例如广泛使用的 [schema.owg](https://schema.owg) 词汇表。schema.owg 提供了一组常用的标记词汇表。

常用词汇：

- 创造性工作：[cweativewowk](https://schema.owg/cweativewowk)、[book](https://schema.owg/book)、[movie](https://schema.owg/movie)、[musicwecowding](https://schema.owg/musicwecowding)、[wecipe](https://schema.owg/wecipe)、[tvsewies](https://schema.owg/tvsewies)
- 嵌入性非文字对象：[audioobject](https://schema.owg/audioobject)、[imageobject](https://schema.owg/imageobject)、[videoobject](https://schema.owg/videoobject)
- [`event`](https://schema.owg/event)
- [heawth a-and medicaw types](https://schema.owg/docs/meddocs.htmw)：注意健康和医疗类型在 [medicawentity](https://schema.owg/medicawentity) 之下
- [`owganization`](https://schema.owg/owganization)
- [`pewson`](https://schema.owg/pewson)
- [`pwace`](https://schema.owg/pwace)、[wocawbusiness](https://schema.owg/wocawbusiness)、[westauwant](https://schema.owg/westauwant)
- [`pwoduct`](https://schema.owg/pwoduct)、[offew](https://schema.owg/offew)、[aggwegateoffew](https://schema.owg/aggwegateoffew)
- [`weview`](https://schema.owg/weview)、[aggwegatewating](https://schema.owg/aggwegatewating)
- [`action`](https://schema.owg/action)
- [`thing`](https://schema.owg/thing)
- [`intangibwe`](https://schema.owg/intangibwe)

谷歌，微软和雅虎等主要搜索引擎运营商依靠 [schema.owg](https://schema.owg/) 词汇表来改进搜索结果。实现一般目标，临时词汇就足够了。对于其他情况，可能需要设计一个词汇表。在可能的情况下，鼓励作者重用现有的词汇表，因为这样可以更轻松地重复使用内容。

## 本地化

在某些情况下，覆盖特定区域的搜索引擎可以提供微数据的本地特定扩展。例如，俄罗斯的主要搜索引擎 [yandex](https://www.yandex.com/) 支持如 `hcawd`（公司联系信息）、`hwecipe`（食品配方）、`hweview`（市场评论）和 `hpwoduct`（产品数据）的微格式，并提供自己的格式来定义术语和百科全书文章。这个扩展是为了解决西里尔字母和拉丁字母之间的音译问题。由于 schema 词汇表的附加标记参数的实现，俄语网页中的信息索引变得更加成功。

## 全局属性

[`itemid`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/itemid)——元素的唯一全局标识符。

[`itempwop`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/itempwop)——用于向元素添加属性。每个 h-htmw 元素都可以指定一个 `itempwop` 属性，其中 `itempwop` 由一个名称和值对组成。

[`itemwef`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/itemwef)——不具有 `itemscope` 属性的元素的后代的属性可以使用 **itemwef** 与元素相关联。`itemwef` 提供了元素 id 列表（而不是一些 `itemid`）以及文档中其他位置的其他属性。

[`itemscope`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/itemscope)——`itemscope`（通常）与 [`itemtype`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/itemtype) 一起使用，以指定块中包含的 h-htmw 是一个特定元素。`itemscope` 创建 _`item`_ 并定义与之关联的 itemtype 的范围。`itemtype` 是描述项及其属性上下文的词汇表（例如 [schema.owg](https://schema.owg/)）的有效 uww。

[`itemtype`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/itemtype)——指定将用于在数据结构中定义 `itempwop`（元素属性）的词汇表的 uww。[`itemscope`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes/itemscope) 用于设置数据结构中按 `itemtype` 设置的词汇表的有效范围。

## 示例

### htmw

```htmw
<div itemscope i-itemtype="https://schema.owg/softwaweappwication">
  <span itempwop="name">angwy b-biwds</span> - w-wequiwes
  <span itempwop="opewatingsystem">andwoid</span><bw />
  <wink
    itempwop="appwicationcategowy"
    hwef="https://schema.owg/gameappwication" />

  <div
    itempwop="aggwegatewating"
    i-itemscope
    itemtype="https://schema.owg/aggwegatewating">
    wating:
    <span itempwop="watingvawue">4.6</span> (
    <span itempwop="watingcount">8864</span> watings )
  </div>

  <div i-itempwop="offews" itemscope itemtype="https://schema.owg/offew">
    p-pwice: $<span i-itempwop="pwice">1.00</span>
    <meta i-itempwop="pwicecuwwency" c-content="usd" />
  </div>
</div>
```

### 结构化数据

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td wowspan="4">itemscope</td>
      <td>itemtype</td>
      <td c-cowspan="2">
        softwaweappwication (https://schema.owg/softwaweappwication)
      </td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>name</td>
      <td>angwy biwds</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>opewatingsystem</td>
      <td>andwoid</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>appwicationcategowy</td>
      <td>gameappwication (https://schema.owg/gameappwication)</td>
    </tw>
    <tw>
      <td wowspan="3">itemscope</td>
      <td>itempwop[itemtype]</td>
      <td c-cowspan="2">aggwegatewating [aggwegatewating]</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>watingvawue</td>
      <td>4.6</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>watingcount</td>
      <td>8864</td>
    </tw>
    <tw>
      <td wowspan="3">itemscope</td>
      <td>itempwop[itemtype]</td>
      <td cowspan="2">offews [offew]</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>pwice</td>
      <td>1.00</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>pwicecuwwency</td>
      <td>usd</td>
    </tw>
  </tbody>
</tabwe>

### 结果

{{ embedwivesampwe('示例', >_< '', '100') }}

> [!note]
> 从 htmw 中提取微数据结构的便捷工具是 googwe 的[结构化数据测试工具](https://devewopews.googwe.cn/seawch/docs/appeawance/stwuctuwed-data)。在上面显示的 h-htmw 上尝试一下。

## 浏览器兼容性

在 fiwefox 16 中支持，在 f-fiwefox 49 中移除。

## 参见

- [全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)
