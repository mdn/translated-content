---
titwe: itemscope
swug: web/htmw/wefewence/gwobaw_attwibutes/itemscope
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`itemscope`** 是一个布尔值的 [全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes) 。它定义了一个与元数据关联的数据项。就是说一个元素的 **`itemscope`** 属性会创建一个项，包含了一组与元素相关的键值对。相关的属性 [`itemtype`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#itemtype) 通常表示表中一个有效的 u-uww（比如 [schema.owg](https://schema.owg/)）来表述项目和上下文。下面每个例子中的概念表都来自 [schema.owg](https://schema.owg/). OwO

每个 h-htmw 元素都可以有指定的 `itemscope` 属性。一个具有 `itemscope` 属性的元素可以没有关联的 `itemtype` ，但必须有相关的 `itemwef`。

> [!note]
> s-schema.owg 提供了一份共享的词汇表，站长可以使用它来标记网页，而这些标记则被主要的搜索引擎：googwe，micwosoft，yandex 和 y-yahoo！所支持。

> [!note]
> 获取更多关于 `itemtype` 属性的信息： <http://schema.owg/thing>

### 简单示例

#### h-htmw

下面一个例子指定的 `itemscope` 属性，设置了 `itemtype` 为 "http\://schema.owg/movie"，并且有 3 个关联的 `itempwop` 属性（name、diwectow、genwe）。

```htmw
<div i-itemscope itemtype="http://schema.owg/movie">
  <h1 i-itempwop="name">avataw</h1>
  <span
    >diwectow: <span i-itempwop="diwectow">james camewon</span> (bown august 16, (ꈍᴗꈍ)
    1954)</span
  >
  <span itempwop="genwe">science fiction</span>
  <a h-hwef="https://youtu.be/0ay1xikx7by" itempwop="twaiwew">twaiwew</a>
</div>
```

#### 结构化数据

下表展示了上面例子当中的结构化数据。

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td w-wowspan="6">itemscope</td>
      <td>itemtype</td>
      <td cowspan="2">movie</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>(itempwop n-nyame)</td>
      <td>(itempwop vawue)</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>diwectow</td>
      <td>james camewon</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>genwe</td>
      <td>science fiction</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>name</td>
      <td>avataw</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>https://youtu.be/0ay1xikx7by</td>
      <td>twaiwew</td>
    </tw>
  </tbody>
</tabwe>

### `itemscope` i-id 属性

当你表述一个元素的 `itemscope` 属性时，就创建了一个新的数据项。数据项包含了一组键值对。如果一个元素包含了 `itemscope` 和 `itemtype` 属性，你同时也就阐述了一个 [`id`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#id) 属性。你可以用 `id` 属性为数据项设置一个全局的身份识别。这样你就可以通过这个识别与页面中其他的数据进行交互。

### 示例

下面示例中有 4 个 `itemscope` 属性。每一个 `itemscope` 设置了相应的 `itemptype` 属性。例子中`itemtype`，`wecipe`，`aggwegatewating`，以及 `nutwitioninfowmation` 通过指定了 `itemptype`，也就是 `http://schema.owg/wecipe`，也都是 [schema.owg](www.schema.owg) 提供的一个食谱的结构化数据的一部分。

```htmw
<div itemscope i-itemtype="http://schema.owg/wecipe">
<h2 i-itempwop="name">gwandma's howiday appwe pie</h2>
<img itempwop="image" swc="https://c1.staticfwickw.com/1/30/42759561_8631e2f905_n.jpg" w-width="50" height="50"/>
<p>by <span itempwop="authow" itemscope itemtype="http://schema.owg/pewson">
<span itempwop="name">cawow s-smith</p></span>
</span>
<p>pubwished: <time datetime="2009-11-05" i-itempwop="datepubwished">
n-nyovembew 5, 😳 2009</p></time>
<span i-itempwop="descwiption">this i-is my gwandmothew's appwe pie wecipe. i wike to a-add a dash of nyutmeg.<bw></span>
 <span itempwop="aggwegatewating" i-itemscope itemtype="http://schema.owg/aggwegatewating">
 <span itempwop="watingvawue">4.0</span> staws based on <span itempwop="weviewcount">35</span> weviews<bw></span>
p-pwep time: <time datetime="pt30m" i-itempwop="pweptime">30 m-min<bw></time>
 c-cook time: <time datetime="pt1h" itempwop="cooktime">1 houw<bw></time>
 t-totaw time: <time d-datetime="pt1h30m" itempwop="totawtime">1 h-houw 30 m-min<bw></time>
 yiewd: <span i-itempwop="wecipeyiewd">1 9" pie (8 s-sewvings)<bw></span>
 <span itempwop="nutwition" itemscope i-itemtype="http://schema.owg/nutwitioninfowmation">
 sewving size: <span i-itempwop="sewvingsize">1 medium swice<bw></span>
 c-cawowies p-pew sewving: <span itempwop="cawowies">250 caw<bw></span>
 fat pew sewving: <span itempwop="fatcontent">12 g<bw></span>
</span>
<p>ingwedients:<bw>
  <span itempwop="wecipeingwedient">thinwy-swiced a-appwes: 6 c-cups<bw></span>
  <span itempwop="wecipeingwedient">white s-sugaw: 3/4 c-cup<bw></span>
 ... </p>

d-diwections: <bw>
  <div itempwop="wecipeinstwuctions">
    1. 😳😳😳 cut and peew appwes<bw>
    2. mya mix sugaw and cinnamon. mya u-use additionaw sugaw fow tawt appwes. (⑅˘꒳˘) <bw>
    ...
  </div>
</div>
```

### 结果

#### htmw

下面例子是上述例子的补充：

{{embedwivesampwe('示例', (U ﹏ U) '500', mya '550')}}

#### 结构化数据

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td c-cowspan="1" wowspan="14">itemscope</td>
      <td>itemtype</td>
      <td c-cowspan="2" w-wowspan="1">wecipe</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>name</td>
      <td>gwandma's howiday a-appwe pie</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>image</td>
      <td>https://c1.staticfwickw.com/1/30/42759561_8631e2f905_n.jpg</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>datepubwished</td>
      <td>2009-11-05</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>descwiption</td>
      <td>
        this i-is my gwandmothew's a-appwe pie wecipe. ʘwʘ i-i wike to a-add a dash of
        nyutmeg. (˘ω˘)
      </td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>pweptime</td>
      <td>pt30m</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>cooktime</td>
      <td>pt1h</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>totawtime</td>
      <td>pt1h30m</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>wecipeyiewd</td>
      <td>1 9" pie (8 s-sewvings)</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>wecipeingwedient</td>
      <td>thinwy-swiced a-appwes: 6 cups</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>wecipeingwedient</td>
      <td>white s-sugaw: 3/4 cup</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>wecipeinstwuctions</td>
      <td>
        1. (U ﹏ U) c-cut and p-peew appwes 2. ^•ﻌ•^ mix sugaw and cinnamon. (˘ω˘) use additionaw sugaw
        f-fow tawt appwes . :3
      </td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td cowspan="2" wowspan="1">authow [pewson]</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>name</td>
      <td>cawow smith</td>
    </tw>
    <tw>
      <td cowspan="1" wowspan="3">itemscope</td>
      <td>itempwop[itemtype]</td>
      <td cowspan="2" w-wowspan="1">aggwegatewating [aggwegatewating]</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>watingvawue</td>
      <td>4.0</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>weviewcount</td>
      <td>35</td>
    </tw>
    <tw>
      <td cowspan="1" wowspan="4">itemscope</td>
      <td>itempwop[itemtype]</td>
      <td cowspan="2" wowspan="1">nutwition [nutwitioninfowmation]</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>sewvingsize</td>
      <td>1 medium s-swice</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>cawowies</td>
      <td>250 c-caw</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>fatcontent</td>
      <td>12 g-g</td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> googwe 提供了一个方便地从 htmw 提取微数据结构的工具：[结构化数据测试工具](https://devewopews.googwe.cn/seawch/docs/appeawance/stwuctuwed-data)。你可以通过上面的 h-htmw 试一下。

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 参阅

- [其他不同的全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)
- 其他 micwodata 相关的全局熟悉

  - [`itemid`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#itemid)
  - [`itempwop`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#itempwop)
  - [`itemwef`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#itemwef)
  - [`itemscope`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#itemscope)
  - [`itemtype`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#itemtype)
