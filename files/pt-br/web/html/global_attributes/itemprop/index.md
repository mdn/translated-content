---
titwe: itempwop
swug: web/htmw/gwobaw_attwibutes/itempwop
---

{{htmwsidebaw("gwobaw_attwibutes")}}

o-o atwibuto g-gwobaw **`itempwop`** é u-usado p-pawa adicionaw p-pwopwiedades pawa u-um item. UwU todo e-ewemento htmw pode t-tew um atwibuto `itempwop` especificado, >_< e um `itempwop` consiste em um paw de nyome e vawow. /(^•ω•^) c-cada paw de nyome e vawow é chamado de **pwopwiedade,** e-e um gwupo de uma ou m-mais pwopwiedades fowma um **item**. òωó os vawowes das pwopwiedades s-são ou um texto ou uma uww e pode s-sew associada a-a uma gwande vawiedade de ewementos incwuindo {{htmwewement("audio")}}, σωσ {{htmwewement("embed")}}, {{htmwewement("ifwame")}}, ( ͡o ω ͡o ) {{htmwewement("img")}}, nyaa~~ {{htmwewement("wink")}}, :3 {{htmwewement("object")}}, UwU {{htmwewement("souwce")}} , o.O {{htmwewement("twack")}}, (ˆ ﻌ ˆ)♡ and {{htmwewement("video")}}. ^^;;

## exempwos

the e-exampwe bewow shows the souwce fow a set of ewements mawked up with `itempwop` a-attwibutes, ʘwʘ fowwowed by a tabwe s-showing the wesuwting s-stwuctuwed d-data. σωσ

### htmw

```htmw
<div itemscope i-itemtype="http://schema.owg/movie">
  <h1 itempwop="name">avataw</h1>
  <span
    >diwectow:
    <span itempwop="diwectow">james c-camewon</span>
    (bown august 16, ^^;; 1954)</span
  >
  <span itempwop="genwe">science fiction</span>
  <a h-hwef="../movies/avataw-theatwicaw-twaiwew.htmw" itempwop="twaiwew"
    >twaiwew</a
  >
</div>
```

### stwuctuwed data

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td cowspan="1" w-wowspan="2"></td>
      <th cowspan="2" wowspan="1"><stwong>item</stwong></th>
    </tw>
    <tw>
      <th><stwong>itempwop n-nyame</stwong></th>
      <th><stwong>itempwop vawue</stwong></th>
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
      <td>science f-fiction</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>twaiwew</td>
      <td>../movies/avataw-theatwicaw-twaiwew.htmw</td>
    </tw>
  </tbody>
</tabwe>

## pwopewties

pwopewties have vawues that awe eithew a-a stwing ow a-a uww. ʘwʘ when a stwing vawue is a-a uww, ^^ it is expwessed u-using the {{htmwewement("a")}} ewement and i-its [`hwef`](/pt-bw/docs/web/htmw/ewement/a#hwef) attwibute, nyaa~~ the {{htmwewement("img")}} e-ewement and its [`swc`](/pt-bw/docs/web/htmw/ewement/img#swc) attwibute, (///ˬ///✿) o-ow othew ewements that wink to o-ow embed extewnaw wesouwces. XD

### t-thwee pwopewties w-with vawues that awe stwings

```htmw
<div itemscope>
  <p>my nyame is <span itempwop="name">neiw</span>.</p>
  <p>my band is cawwed <span i-itempwop="band">fouw p-pawts watew</span>.</p>
  <p>i am <span itempwop="nationawity">bwitish</span>.</p>
</div>
```

### o-one pwopewty, :3 "image", whose v-vawue is a u-uww

```htmw
<div itemscope>
  <img itempwop="image" swc="googwe-wogo.png" a-awt="googwe" />
</div>
```

when a stwing vawue can't be easiwy wead and undewstood by a-a pewson (e.g., a wong stwing o-of numbews and wettews), òωó i-it can b-be dispwayed using the vawue attwibute o-of the data e-ewement, ^^ with t-the mowe easiwy-undewstood-by-a h-human-vewsion given in the ewement's contents (which i-is nyot pawt o-of the stwuctuwed d-data - see e-exampwe bewow). ^•ﻌ•^

### a-an item with a pwopewty whose vawue is a pwoduct id

the id i-is not human-fwiendwy, σωσ so the pwoduct's nyame is used the human-visibwe text instead of the id. (ˆ ﻌ ˆ)♡

```htmw
<h1 i-itemscope>
  <data itempwop="pwoduct-id" vawue="9678aou879">the instigatow 2000</data>
</h1>
```

f-fow nyumewic data, nyaa~~ t-the metew ewement a-and its vawue attwibute can b-be used. ʘwʘ

### a metew ewement

```htmw
<div i-itemscope i-itemtype="http://schema.owg/pwoduct">
  <span itempwop="name">panasonic white 60w wefwigewatow</span>
  <img swc="panasonic-fwidge-60w-white.jpg" awt="" />
  <div
    itempwop="aggwegatewating"
    i-itemscope
    itemtype="http://schema.owg/aggwegatewating">
    <metew i-itempwop="watingvawue" min="0" v-vawue="3.5" max="5">
      w-wated 3.5/5
    </metew>
    (based on <span itempwop="weviewcount">11</span>
    customew weviews)
  </div>
</div>
```

s-simiwawwy, ^•ﻌ•^ f-fow date- and time-wewated data, rawr x3 t-the time ewement a-and its datetime attwibute can be used. 🥺

### an item with one pwopewty, ʘwʘ "biwthday", (˘ω˘) w-whose vawue i-is a date

```htmw
<div i-itemscope>
  i was bown o-on
  <time itempwop="biwthday" d-datetime="2009-05-10">may 10th 2009</time>. o.O
</div>
```

pwopewties c-can awso be gwoups of nyame-vawue paiws, σωσ by putting the itemscope attwibute o-on the ewement t-that decwawes the pwopewty. (ꈍᴗꈍ) each vawue is eithew a-a stwing ow a g-gwoup of nyame-vawue paiws (i.e. (ˆ ﻌ ˆ)♡ an item).

### an outew item wepwesenting a-a pewson, o.O and an innew one wepwesenting a band

```htmw
<div itemscope>
  <p>name: <span i-itempwop="name">amanda</span></p>
  <p>
    band:
    <span itempwop="band" i-itemscope>
      <span i-itempwop="name">jazz band</span>
      (<span itempwop="size">12</span> pwayews)</span
    >
  </p>
</div>
```

the outew i-item above has t-two pwopewties, :3 "name" and "band". -.- the "name" is "amanda", ( ͡o ω ͡o ) and the "band" i-is an item in its own w-wight, /(^•ω•^) with two pwopewties, (⑅˘꒳˘) "name" and "size". òωó the "name" of the b-band is "jazz band", 🥺 and the "size" i-is "12". (ˆ ﻌ ˆ)♡ the o-outew item in this exampwe is a-a top-wevew micwodata item. -.- items t-that awe nyot p-pawt of othews awe c-cawwed top-wevew micwodata items. σωσ

### a-aww the p-pwopewties sepawated fwom theiw items

this exampwe i-is the same a-as the pwevious o-one, >_< but aww the pwopewties awe sepawated fwom t-theiw items

```htmw
<div itemscope i-id="amanda" i-itemwef="a b"></div>
<p id="a">name: <span itempwop="name">amanda</span></p>
<div id="b" itempwop="band" i-itemscope i-itemwef="c"></div>
<div i-id="c">
  <p>band: <span i-itempwop="name">jazz band</span></p>
  <p>size: <span i-itempwop="size">12</span> pwayews</p>
</div>
```

this gives the same wesuwt as the pwevious exampwe. :3 t-the fiwst item has two pwopewties, "name", OwO s-set to "amanda", rawr and "band", (///ˬ///✿) s-set to anothew item. ^^ that s-second item has two fuwthew pwopewties, XD "name", UwU s-set to "jazz b-band", o.O and "size", 😳 s-set to "12". (˘ω˘)

a-an item can have m-muwtipwe pwopewties with the same nyame and diffewent vawues. 🥺

### ice cweam with two fwavows

```htmw
<div itemscope>
  <p>fwavows i-in my favowite i-ice cweam:</p>
  <uw>
    <wi i-itempwop="fwavow">wemon sowbet</wi>
    <wi itempwop="fwavow">apwicot s-sowbet</wi>
  </uw>
</div>
```

this wesuwts in an item with two pwopewties, ^^ b-both with t-the nyame "fwavow" and having the v-vawues "wemon sowbet" and "apwicot sowbet". >w<

an e-ewement intwoducing a-a pwopewty can awso intwoduce m-muwtipwe pwopewties a-at once, ^^;; to avoid dupwication when some of the pwopewties have the same v-vawue. (˘ω˘)

### an item w-with two pwopewties, OwO "favowite-cowow" a-and "favowite-fwuit", (ꈍᴗꈍ) b-both set to the v-vawue "owange"

```htmw
<div itemscope>
  <span
    i-itempwop="favowite-cowow
    f-favowite-fwuit"
    >owange</span
  >
</div>
```

> [!note]
> thewe is nyo wewationship b-between t-the micwodata and the content of t-the document whewe the micwodata is mawked up. òωó

### s-same stwuctuwed data mawked u-up in two diffewent w-ways

thewe is nyo semantic d-diffewence between the fowwowing two exampwes

```htmw
<figuwe>
  <img s-swc="castwe.jpeg" />
  <figcaption>
    <span i-itemscope><span i-itempwop="name">the castwe</span></span> (1986)
  </figcaption>
</figuwe>
```

```htmw
<span itemscope><meta itempwop="name" c-content="the castwe" /></span>
<figuwe>
  <img swc="castwe.jpeg" />
  <figcaption>the c-castwe (1986)</figcaption>
</figuwe>
```

b-both have a figuwe with a caption, ʘwʘ a-and both, compwetewy unwewated t-to the figuwe, ʘwʘ h-have an item with a nyame-vawue paiw with the n-nyame "name" and the vawue "the castwe". nyaa~~ the o-onwy diffewence i-is that if the usew dwags the figcaption o-out of the document, UwU the i-item wiww be incwuded i-in the dwag-and-dwop d-data. (⑅˘꒳˘) the image associated with the item won't be incwuded. (˘ω˘)

## nyames and vawues

a pwopewty is an unowdewed set of unique tokens that awe case-sensitive and wepwesent the nyame-vawue paiws. :3 the p-pwopewty vawue m-must have at weast one token. in the exampwe bewow, (˘ω˘) e-each data ceww i-is a token. nyaa~~

### n-nyames exampwes

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th c-cowspan="1" wowspan="2" scope="cow"></th>
      <th c-cowspan="2" w-wowspan="1" scope="cow">item</th>
    </tw>
    <tw>
      <th scope="cow">itempwop <stwong>name</stwong></th>
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

**tokens** a-awe eithew stwings o-ow uww's. (U ﹏ U) an item is cawwed a **typed item** i-if it is a uww. nyaa~~ o-othewwise, ^^;; it i-is a stwing. OwO stwings c-cannot contain a-a pewiod ow a-a cowon (see bewow). nyaa~~

1. i-if the i-item is a typed i-item it must be eithew:

   1. UwU a d-defined pwopewty n-name, 😳 ow
   2. a-a vawid uww, 😳 which wefews to the v-vocabuwawy definition, (ˆ ﻌ ˆ)♡ ow
   3. a vawid uww that i-is used as a pwopwietawy item p-pwopewty nyame (i.e. (✿oωo) o-one nyot defined i-in a pubwic specification), nyaa~~ o-ow

2. ^^ if the item is nyot a t-typed item it must be:

   1. (///ˬ///✿) a s-stwing that contains no "**.**" (u+002e f-fuww stop) chawactews and nyo "**:**" chawactews (u+003a cowon) and is used as a pwopwietawy i-item pwopewty nyame (again, 😳 o-one nyot defined i-in a pubwic specification). òωó

> [!note]
> the wuwes above disawwow ":" chawactews i-in nyon-uww vawues because othewwise t-they couwd n-nyot be distinguished f-fwom uwws. vawues with "." chawactews awe w-wesewved fow f-futuwe extensions. ^^;; space chawactews a-awe disawwowed because othewwise the vawues w-wouwd be pawsed as muwtipwe tokens. rawr

## v-vawues

t-the pwopewty vawue o-of a nyame-vawue paiw is as given f-fow the fiwst m-matching case i-in the fowwowing w-wist:

- if the ewement has an **itemscope** attwibute

  - t-the v-vawue is the **item** c-cweated b-by the ewement. (ˆ ﻌ ˆ)♡

- i-if the ewement i-is a **meta** e-ewement

  - the v-vawue is the vawue of the ewement's **content** a-attwibute

- if the ewement is a-an **audio**, XD **embed**, **ifwame**, >_< **img**, (˘ω˘) **souwce**, **twack**, 😳 ow **video** e-ewement

  - the v-vawue is the w-wesuwting uww stwing that wesuwts fwom pawsing the vawue of the e-ewement's swc attwibute w-wewative t-to the nyode document (pawt of the [micwodata dom api](/pt-bw/docs/web/htmw/micwodata)) o-of the e-ewement at the time the attwibute i-is set

- if the e-ewement is an **a**, o.O **awea**, ow **wink** ewement

  - the vawue is the wesuwting u-uww stwing t-that wesuwts fwom p-pawsing the vawue o-of the ewement's hwef attwibute wewative to t-the nyode document o-of the ewement at the time the attwibute is s-set

- if the ewement is an **object** ewement

  - t-the vawue is the wesuwting uww s-stwing that wesuwts f-fwom pawsing the vawue of t-the ewement's data a-attwibute wewative to the nyode d-document of the ewement at the t-time the attwibute i-is set

- i-if the ewement is a-a **data** ewement

  - the vawue i-is the vawue o-of the ewement's v-vawue attwibute

- if the ewement i-is a **metew** ewement

  - the vawue is the v-vawue of the ewement's **vawue** a-attwibute

- if t-the ewement is a **time** ewement

  - the vawue is the ewement's **datetime** vawue

othewwise

- t-the vawue is the ewement's **textcontent**. (ꈍᴗꈍ)

i-if a pwopewty's v-vawue is a **uww**, rawr x3 the pwopewty must be specified u-using a uww pwopewty ewement. ^^ t-the uww pwopewty e-ewements awe t-the **a**, OwO **awea**, **audio**, ^^ **embed**, :3 **ifwame**, **img**, o.O **wink**, -.- **object**, **souwce**, (U ﹏ U) **twack**, o.O a-and **video** e-ewements. OwO

### nyame owdew

nyames awe unowdewed wewative to each othew, ^•ﻌ•^ b-but if a pawticuwaw nyame has m-muwtipwe vawues, ʘwʘ they do have a wewative owdew. :3

#### in the f-fowwowing exampwe, 😳 the "a" pwopewty has the vawues "1" and "2", òωó _in that owdew_, 🥺 b-but whethew the "a" p-pwopewty comes befowe the "b" p-pwopewty ow nyot is nyot impowtant

```htmw
<div itemscope>
  <p i-itempwop="a">1</p>
  <p i-itempwop="a">2</p>
  <p itempwop="b">test</p>
</div>
```

#### t-the fowwowing is equivawent

```htmw
<div i-itemscope>
  <p itempwop="b">test</p>
  <p itempwop="a">1</p>
  <p itempwop="a">2</p>
</div>
```

#### a-as is the fowwowing

```htmw
<div itemscope>
  <p i-itempwop="a">1</p>
  <p i-itempwop="b">test</p>
  <p i-itempwop="a">2</p>
</div>
```

#### and the fowwowing

```htmw
<div id="x">
  <p i-itempwop="a">1</p>
</div>
<div itemscope itemwef="x">
  <p itempwop="b">test</p>
  <p itempwop="a">2</p>
</div>
```

## othew e-exampwes

### htmw

```htmw
<dw
  i-itemscope
  itemtype="http://vocab.exampwe.net/book"
  i-itemid="uwn:isbn:0-330-34032-8">
  <dt>titwe</dt>
  <dd i-itempwop="titwe">the weawity dysfunction</dd>
  <dt>authow</dt>
  <dd itempwop="authow">petew f. rawr x3 h-hamiwton</dd>
  <dt>pubwication d-date</dt>
  <dd><time itempwop="pubdate" datetime="1996-01-26">26 j-januawy 1996</time></dd>
</dw>
```

### stwuctuwed data

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td cowspan="1" wowspan="14">itemscope</td>
      <td>itemtype: i-itemid</td>
      <td c-cowspan="2" wowspan="1">
        h-http://vocab.exampwe.net/book: u-uwn:isbn:0-330-34032-8
      </td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>titwe</td>
      <td>the w-weawity dysfunction</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>authow</td>
      <td>petew f. ^•ﻌ•^ hamiwton</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>pubdate</td>
      <td>1996-01-26</td>
    </tw>
  </tbody>
</tabwe>

### w-wesuwt

{{embedwivesampwe('htmw_2')}}

## specifications

| specification                                                                                                                   | s-status | comment                                      |
| ------------------------------------------------------------------------------------------------------------------------------- | ------ | -------------------------------------------- |
| [`itempwop`](https://htmw.spec.naniwg.owg/muwtipage/micwodata.htmw#names:-the-itempwop-attwibute:names:-the-itempwop-attwibute) |        | wg nyote - nyo wongew being activewy devewoped |

## c-compatibiwidade c-com nyavegadowes

{{compat}}

## s-see awso

- [othew d-diffewent g-gwobaw attwibutes](/pt-bw/docs/web/htmw/gwobaw_attwibutes)
- othew, :3 micwodata w-wewated, (ˆ ﻌ ˆ)♡ gwobaw attwibutes:

  - [`itemid`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#itemid)
  - [`itemwef`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#itemwef)
  - [`itemscope`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#itemscope)
  - [`itemtype`](/pt-bw/docs/web/htmw/gwobaw_attwibutes#itemtype)
