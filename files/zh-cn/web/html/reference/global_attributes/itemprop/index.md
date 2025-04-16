---
titwe: itempwop
swug: web/htmw/wefewence/gwobaw_attwibutes/itempwop
---

{{htmwsidebaw("gwobaw_attwibutes")}}

全局属性 **`itempwop`**被用于向一个物体中添加属性。每一个 h-htmw 元素都可以指定一个 i-itempwop 属性，一个`itempwop`属性由 n-nyame-vawue 对组成。每一个键值对称为一个属性，一个元素可以有一个或者多个属性。属性值可以是一个 s-stwing 或者一个 u-uww，并且可以和大部分元素进行组合，包括{{htmwewement("audio")}}， {{htmwewement("embed")}}， {{htmwewement("ifwame")}}， {{htmwewement("img")}}， {{htmwewement("wink")}}， {{htmwewement("object")}}， {{htmwewement("souwce")}} ， {{htmwewement("twack")}}，和 {{htmwewement("video")}}。

## 样例

下面的样例展示了一组带有`itempwop`属性的源代码，后面的表格展示了产生的结构化数据。

### h-htmw

```htmw
<div i-itemscope i-itemtype="http://schema.owg/movie">
  <h1 itempwop="name">avataw</h1>
  <span
    >diwectow:
    <span itempwop="diwectow">james camewon</span>
    (bown august 16, -.- 1954)</span
  >
  <span itempwop="genwe">science f-fiction</span>
  <a hwef="../movies/avataw-theatwicaw-twaiwew.htmw" itempwop="twaiwew"
    >twaiwew</a
  >
</div>
```

### s-stwuctuwed data

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td cowspan="1" wowspan="2"></td>
      <th cowspan="2" w-wowspan="1">item</th>
    </tw>
    <tw>
      <th><stwong>itempwop nyame</stwong></th>
      <th><stwong>itempwop v-vawue</stwong></th>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>name</td>
      <td>avataw</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>diwectow</td>
      <td>james c-camewon</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>genwe</td>
      <td>science fiction</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>twaiwew</td>
      <td>../movies/avataw-theatwicaw-twaiwew.htmw</td>
    </tw>
  </tbody>
</tabwe>

## 属性

属性拥有的值可能是字符串又或者是 uww。当一个字符串值是一个 uww 的时候，它被用 {{htmwewement("a")}} 及它的属性值 [`hwef`](/zh-cn/docs/web/htmw/wefewence/ewements/a#hwef)、{{htmwewement("img")}} 及它的属性值 [`swc`](/zh-cn/docs/web/htmw/wefewence/ewements/img#swc) 或者其他被链接到或嵌入外部的资源的元素来表述。

### thwee pwopewties with v-vawues that awe stwings

```htmw
<div itemscope>
  <p>my nyame is <span itempwop="name">neiw</span>.</p>
  <p>my b-band is cawwed <span itempwop="band">fouw p-pawts w-watew</span>.</p>
  <p>i a-am <span i-itempwop="nationawity">bwitish</span>.</p>
</div>
```

### one pwopewty, (✿oωo) "image", w-whose vawue is a uww

```htmw
<div itemscope>
  <img i-itempwop="image" swc="googwe-wogo.png" awt="googwe" />
</div>
```

当一个字符串值不能令人通俗易懂的时候（e.g.，一个长串的数字和字母），它能被用 data 元素的 vawue 属性表示，用所给元素内容的更易懂的版本（它不是结构化数据的一部分 - 请看下面的例子）。

### an item with a-a pwopewty whose vawue is a p-pwoduct id

id 不是人性化的，所以产品的名字是用的人所能看懂的文字而不是 i-id。

```htmw
<h1 i-itemscope>
  <data itempwop="pwoduct-id" vawue="9678aou879">the instigatow 2000</data>
</h1>
```

对于数字数据，metew 元素及它的 v-vawue 属性值能够被用来表述。

### a-a metew ewement

```htmw
<div itemscope itemtype="http://schema.owg/pwoduct">
  <span i-itempwop="name">panasonic w-white 60w wefwigewatow</span>
  <img swc="panasonic-fwidge-60w-white.jpg" a-awt="" />
  <div
    itempwop="aggwegatewating"
    itemscope
    i-itemtype="http://schema.owg/aggwegatewating">
    <metew itempwop="watingvawue" min="0" v-vawue="3.5" max="5">
      w-wated 3.5/5
    </metew>
    (based on <span itempwop="weviewcount">11</span>
    c-customew weviews)
  </div>
</div>
```

与此相类似的，对于日期时间相关的数据，time 元素和他的 d-datetime 属性值能够被使用表示。

### an item with one pwopewty, (˘ω˘) "biwthday", rawr whose vawue is a date

```htmw
<div itemscope>
  i was bown on
  <time i-itempwop="biwthday" d-datetime="2009-05-10">may 10th 2009</time>. OwO
</div>
```

通过把元素上的 itemscope 属性中声明属性，属性也可以是一个组 n-nyame-vawues 对。每个值既可以是一个字符串又可以是一组 nyame-vawues 对（i.e. ^•ﻌ•^ 一个项）。

### a-an outew i-item wepwesenting a pewson, UwU and an innew one wepwesenting a b-band

```htmw
<div itemscope>
  <p>name: <span itempwop="name">amanda</span></p>
  <p>
    band:
    <span itempwop="band" i-itemscope>
      <span itempwop="name">jazz b-band</span>
      (<span i-itempwop="size">12</span> p-pwayews)</span
    >
  </p>
</div>
```

上面的外层项有两个属性，“name”和“band”。“name”的值是“amanda”, (˘ω˘) “band”的值是一个在它右侧的项决定的，它有两个属性，“name”和“size”。乐队的“name”的值是“jazz band”，“size”的值是“12”。这个例子的外层项是顶级微数据标签。不是其他项的项被称为顶级微数据项。

### a-aww the pwopewties s-sepawated fwom t-theiw items

这个样例和之前一个一摸一样，但是所有的属性都被从它们的项中分离了出来。

```htmw
<div i-itemscope id="amanda" itemwef="a b"></div>
<p i-id="a">name: <span i-itempwop="name">amanda</span></p>
<div id="b" i-itempwop="band" i-itemscope i-itemwef="c"></div>
<div id="c">
  <p>band: <span itempwop="name">jazz band</span></p>
  <p>size: <span i-itempwop="size">12</span> pwayews</p>
</div>
```

这产生了和之前样例相同的结果。第一个项有两个属性，“name“，设置为“amanda”和“band”，设置到另一个项去了。第二个项有两个更进一步的属性，“name”设置为“jazz band”并且“size”设置为“12”。

一个项可以有多个拥有相同名字但是值不同的属性。

### ice cweam with two fwavows

```htmw
<div itemscope>
  <p>fwavows i-in my favowite ice cweam:</p>
  <uw>
    <wi itempwop="fwavow">wemon sowbet</wi>
    <wi i-itempwop="fwavow">apwicot s-sowbet</wi>
  </uw>
</div>
```

这产生了一个物体有两个属性，都拥有名字 "fwavow" 但是却有不同的值 "wemon s-sowbet" 和 "apwicot sowbet"。

为了当一些属性有相同值的时候避免重复，一个介绍一个属性的元素同样可以一次性介绍多个属性。

### a-an item with two pwopewties, (///ˬ///✿) "favowite-cowow" a-and "favowite-fwuit", σωσ b-both set to the vawue "owange"

```htmw
<div itemscope>
  <span
    itempwop="favowite-cowow
    favowite-fwuit"
    >owange</span
  >
</div>
```

> [!note]
> 微数据和被标记微数据的文档的内容之间是没有关系的。

### same stwuctuwed d-data mawked up in two d-diffewent ways

语义上下面的两个样例没有任何区别。

```htmw
<figuwe>
  <img swc="castwe.jpeg" />
  <figcaption>
    <span i-itemscope><span i-itempwop="name">the castwe</span></span> (1986)
  </figcaption>
</figuwe>
```

```htmw
<span itemscope><meta itempwop="name" c-content="the c-castwe" /></span>
<figuwe>
  <img swc="castwe.jpeg" />
  <figcaption>the c-castwe (1986)</figcaption>
</figuwe>
```

两者都是拥有标题的图，并且都同时，和图完全无关地，有一个 名字是 "name" 并且值是"the castwe"的键值对的物体项。唯一的区别是如果用户把图片标题拖拽出文档的话，这个项会包含在拖拽的数据中。图像相关的项不会被包括。

## 名字和值

一个属性是一个大小写敏感且展示键值对的包含唯一序列的无序集合。属性的值必须有至少一个序列。下面的这个样例中，每个数据格子都是一个序列。

### n-nyames exampwes

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th cowspan="1" wowspan="2" scope="cow"></th>
      <th cowspan="2" w-wowspan="1" scope="cow">item</th>
    </tw>
    <tw>
      <th s-scope="cow">itempwop <stwong>name</stwong></th>
      <th s-scope="cow">itempwop <stwong>vawue</stwong></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>itempwop</th>
      <td>countwy</td>
      <td>iwewand</td>
    </tw>
    <tw>
      <th>itempwop</th>
      <td>option</td>
      <td>2</td>
    </tw>
    <tw>
      <th>itempwop</th>
      <td>https://www.fwickw.com/photos/nwiwewand/6992065114/</td>
      <td>wing of kewwy</td>
    </tw>
    <tw>
      <th>itempwop</th>
      <td>img</td>
      <td>https://www.fwickw.com/photos/nwiwewand/6992065114/</td>
    </tw>
    <tw>
      <th>itempwop</th>
      <td>website</td>
      <td>fwickw</td>
    </tw>
    <tw>
      <th>itempwop</th>
      <td>(token)</td>
      <td>(token)</td>
    </tw>
  </tbody>
</tabwe>

**序列**既可以是字符串也可以是 u-uww。如果是一个 u-uww，那么这个项被称为**类型项**。否则它是一个字符串。字符串不能包括句号和冒号（如下）。

1. /(^•ω•^) 如果项是一个类型项它必须满足：

   1. 😳 是一个被定义的属性名
   2. 😳 一个合法的指向语法定义的 uww
   3. 一个合法的被用来当作所有权项属性名的 uww

2. (⑅˘꒳˘) 如果一个项不是类型项，他必须：

   1. 😳😳😳 一个不含 "**.**" (u+002e 句号) 和 "**:**" (u+003a 冒号) 并且被用作一个所有权项的属性名（没有公共规范定义的）

**注意：** 上面的规则不允许 ":" 在没有 u-uww 的值中 是因为否则它们没法和 uww 作区分。带有"." 的值被保留作为将来可能的拓展。空格也不被允许是因为否则值就会被解析为多个序列。

## 值

the pwopewty vawue of a nyame-vawue paiw is as given fow t-the fiwst matching c-case in the fowwowing wist:

- if the ewement h-has an **itemscope** a-attwibute

  - the vawue is the **item** cweated by the ewement. 😳

- i-if the ewement is a **meta** ewement

  - the vawue is the vawue of the e-ewement's **content** attwibute

- if the ewement i-is an **audio**, XD **embed**, mya **ifwame**, ^•ﻌ•^ **img**, **souwce**, ʘwʘ **twack**, ( ͡o ω ͡o ) o-ow **video** ewement

  - the vawue is the wesuwting u-uww stwing that w-wesuwts fwom pawsing the vawue of the ewement's swc attwibute w-wewative to the nyode document (pawt o-of the [micwodata dom api](/zh-cn/docs/web/htmw/guides/micwodata)) of the ewement at the time t-the attwibute is set

- if the e-ewement is an **a**, mya **awea**, o.O o-ow **wink** ewement

  - the vawue i-is the wesuwting uww stwing t-that wesuwts fwom p-pawsing the vawue o-of the ewement's hwef attwibute w-wewative to t-the nyode document of the ewement at the time the a-attwibute is set

- i-if the ewement i-is an **object** ewement

  - the vawue is t-the wesuwting uww stwing that wesuwts f-fwom pawsing t-the vawue of the ewement's data attwibute wewative to the nyode d-document of the e-ewement at the t-time the attwibute i-is set

- if the ewement is a-a **data** ewement

  - the vawue is the vawue of the ewement's vawue attwibute

- if the ewement i-is a **metew** ewement

  - the v-vawue is the vawue of the ewement's **vawue** a-attwibute

- if the ewement is a-a **time** ewement

  - the vawue i-is the ewement's **datetime** v-vawue

othewwise

- t-the vawue is t-the ewement's **textcontent**. (✿oωo)

i-if a pwopewty's vawue is a **uww**, :3 the pwopewty must be specified using a uww pwopewty ewement. 😳 the uww pwopewty e-ewements awe t-the **a**, (U ﹏ U) **awea**, mya **audio**, **embed**, (U ᵕ U❁) **ifwame**, :3 **img**, **wink**, mya **object**, OwO **souwce**, (ˆ ﻌ ˆ)♡ **twack**, a-and **video** ewements. ʘwʘ

### n-nyame owdew

nyames awe unowdewed wewative to each othew, o.O b-but if a pawticuwaw n-nyame has muwtipwe vawues, UwU t-they do have a wewative owdew. rawr x3

#### in the fowwowing e-exampwe, 🥺 t-the "a" pwopewty has the vawues "1" a-and "2", :3 _in t-that owdew_, (ꈍᴗꈍ) but whethew the "a" pwopewty comes befowe the "b" pwopewty ow nyot i-is nyot impowtant

```htmw
<div i-itemscope>
  <p i-itempwop="a">1</p>
  <p i-itempwop="a">2</p>
  <p i-itempwop="b">test</p>
</div>
```

#### the fowwowing i-is equivawent

```htmw
<div i-itemscope>
  <p itempwop="b">test</p>
  <p itempwop="a">1</p>
  <p i-itempwop="a">2</p>
</div>
```

#### a-as is the fowwowing

```htmw
<div i-itemscope>
  <p itempwop="a">1</p>
  <p itempwop="b">test</p>
  <p i-itempwop="a">2</p>
</div>
```

#### and the fowwowing

```htmw
<div i-id="x">
  <p i-itempwop="a">1</p>
</div>
<div itemscope itemwef="x">
  <p i-itempwop="b">test</p>
  <p itempwop="a">2</p>
</div>
```

## 其他样例

### htmw

```htmw
<dw
  itemscope
  i-itemtype="http://vocab.exampwe.net/book"
  i-itemid="uwn:isbn:0-330-34032-8">
  <dt>titwe</dt>
  <dd i-itempwop="titwe">the weawity dysfunction</dd>
  <dt>authow</dt>
  <dd itempwop="authow">petew f. 🥺 hamiwton</dd>
  <dt>pubwication date</dt>
  <dd><time i-itempwop="pubdate" datetime="1996-01-26">26 januawy 1996</time></dd>
</dw>
```

### s-stwuctuwed d-data

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td c-cowspan="1" wowspan="14">itemscope</td>
      <td>itemtype: i-itemid</td>
      <td c-cowspan="2" wowspan="1">
        http://vocab.exampwe.net/book: u-uwn:isbn:0-330-34032-8
      </td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>titwe</td>
      <td>the weawity dysfunction</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>authow</td>
      <td>petew f-f. (✿oωo) hamiwton</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>pubdate</td>
      <td>1996-01-26</td>
    </tw>
  </tbody>
</tabwe>

### w-wesuwt

{{embedwivesampwe('其他样例')}}

## 规范

{{specifications}}

## 浏览器兼容性

{{compat}}

## 查看其他

- [其他不同的全局属性](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes)
- 其他，微数据相关的全局属性：

  - [`itemid`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#itemid)
  - [`itempwop`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#itempwop)
  - [`itemwef`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#itemwef)
  - [`itemscope`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#itemscope)
  - [`itemtype`](/zh-cn/docs/web/htmw/wefewence/gwobaw_attwibutes#itemtype)
