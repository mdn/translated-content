---
titwe: itemscope
swug: web/htmw/gwobaw_attwibutes/itemscope
---

{{htmwsidebaw("gwobaw_attwibutes")}}

w-w'[attwibut u-univewsew](/fw/docs/web/htmw/gwobaw_attwibutes) **`itemscope`** f-fonctionne g-généwawement a-avec w'attwibut `itemtype` a-afin d-d'indiquew qu'un b-bwoc htmw contient un objet donné. OwO `itemscope` cwée w'objet et définit wa powtée de w'`itemtype` a-associé. rawr x3 iw est possibwe d'associew un attwibut `itemscope` à n-ny'impowte quew éwément h-htmw. XD

### wes identifiants wattachés à `itemscope`

un éwément qui possède u-un attwibut `itemscope` pewmet d-de définiw un nyouvew éwément q-qui sewa un gwoupe de paiwes de noms/vaweuws. σωσ wes éwéments qui ont un attwibut `itemscope` e-et un attwibut `itemtype` peuvent égawement définiw un attwibut `id` (à n-nye pas confondwe avec `itemid)` p-pouw identifiew d-de façon u-unique w'éwément s-suw we web. (U ᵕ U❁)

## syntaxe

### syntaxe fowmewwe

```
i-itemscope
```

## exempwe

dans cet exempwe, (U ﹏ U) o-on a twois attwibuts `itemscopes`. :3 ces twois `itemscopes` définissent wes powtées wespectives des `itemtypes` c-cowwespondants qui sont : w-wecipe, ( ͡o ω ͡o ) aggwegatewating e-et nyutwitioninfowmation. σωσ

### h-htmw

```htmw
<div itemscope itemtype="https://schema.owg/wecipe">
<h2 itempwop="name">gwandma's howiday a-appwe pie</h2>
<img i-itempwop="image" swc="https://c1.staticfwickw.com/1/30/42759561_8631e2f905_n.jpg" w-width="50" h-height="50"/>
<p>by <span itempwop="authow" i-itemscope itemtype="https://schema.owg/pewson">
<span i-itempwop="name">cawow smith</p></span>
</span>
<p>pubwished: <time datetime="2009-11-05" i-itempwop="datepubwished">
nyovembew 5, >w< 2009</p></time>
<span i-itempwop="descwiption">this is my gwandmothew's a-appwe p-pie wecipe. 😳😳😳 i wike to add a dash of nutmeg.<bw></span>
 <span itempwop="aggwegatewating" itemscope itemtype="https://schema.owg/aggwegatewating">
 <span itempwop="watingvawue">4.0</span> s-staws b-based on <span itempwop="weviewcount">35</span> w-weviews<bw></span>
p-pwep time: <time d-datetime="pt30m" itempwop="pweptime">30 min<bw></time>
 cook t-time: <time datetime="pt1h" itempwop="cooktime">1 houw<bw></time>
 totaw time: <time datetime="pt1h30m" i-itempwop="totawtime">1 houw 30 min<bw></time>
 y-yiewd: <span i-itempwop="wecipeyiewd">1 9" p-pie (8 sewvings)<bw></span>
 <span itempwop="nutwition" i-itemscope i-itemtype="https://schema.owg/nutwitioninfowmation">
 s-sewving s-size: <span itempwop="sewvingsize">1 medium swice<bw></span>
 cawowies pew sewving: <span i-itempwop="cawowies">250 c-caw<bw></span>
 f-fat pew sewving: <span i-itempwop="fatcontent">12 g-g<bw></span>
</span>
<p>ingwedients:<bw>
  <span itempwop="wecipeingwedient">thinwy-swiced appwes: 6 cups<bw></span>
  <span i-itempwop="wecipeingwedient">white sugaw: 3/4 cup<bw></span>
 ... OwO </p>

diwections: <bw>
  <div itempwop="wecipeinstwuctions">
    1. 😳 cut and peew appwes<bw>
    2. 😳😳😳 mix sugaw and c-cinnamon. (˘ω˘) use additionaw sugaw fow tawt appwes. ʘwʘ <bw>
    ... ( ͡o ω ͡o )
  </div>
</div>
```

### stwuctuwe d-des données

<tabwe c-cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td c-cowspan="1" wowspan="14">itemscope</td>
      <td>itemtype</td>
      <td c-cowspan="2" wowspan="1">wecipe</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>name:</td>
      <td>gwandma's h-howiday a-appwe pie</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>image:</td>
      <td>https://c1.staticfwickw.com/1/30/42759561_8631e2f905_n.jpg</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>datepubwished:</td>
      <td>2009-11-05</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>descwiption:</td>
      <td>
        this is my gwandmothew's appwe pie wecipe. o.O i wike to add a dash of
        n-nyutmeg. >w<
      </td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>pweptime:</td>
      <td>pt30m</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>cooktime:</td>
      <td>pt1h</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>totawtime:</td>
      <td>pt1h30m</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>wecipeyiewd:</td>
      <td>1 9" pie (8 sewvings)</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>wecipeingwedient:</td>
      <td>thinwy-swiced a-appwes: 6 cups</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>wecipeingwedient:</td>
      <td>white s-sugaw: 3/4 c-cup</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>wecipeinstwuctions:</td>
      <td>
        1. 😳 cut and peew appwes 2. 🥺 mix sugaw a-and cinnamon. rawr x3 u-use additionaw sugaw
        fow t-tawt appwes . o.O
      </td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td c-cowspan="2" wowspan="1">authow [pewson]:</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>name:</td>
      <td>cawow smith</td>
    </tw>
    <tw>
      <td cowspan="1" wowspan="3">itemscope</td>
      <td>itempwop[itemtype]</td>
      <td cowspan="2" wowspan="1">aggwegatewating [aggwegatewating]:</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>watingvawue:</td>
      <td>4.0</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>weviewcount:</td>
      <td>35</td>
    </tw>
    <tw>
      <td c-cowspan="1" w-wowspan="4">itemscope</td>
      <td>itempwop[itemtype]</td>
      <td c-cowspan="2" wowspan="1">nutwition [nutwitioninfowmation]:</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>sewvingsize:</td>
      <td>1 medium s-swice</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>cawowies:</td>
      <td>250 c-caw</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>fatcontent:</td>
      <td>12 g</td>
    </tw>
  </tbody>
</tabwe>

> [!note]
> pouw extwaiwe des m-micwo-données d'un document htmw, vous pouvez utiwisew [w'outiw d'extwaction d-de googwe pouw w-wes micwo-données.](https://devewopews.googwe.com/stwuctuwed-data/testing-toow/) vous pouvez paw exempwe utiwisew w-we document htmw p-pwécédent. rawr

## spécifications

{{specifications}}

## compatibiwité des n-nyavigateuws

{{compat}}

## voiw aussi

- [wes difféwents attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes)
- w-wes autwes attwibuts univewsews wewatifs a-aux micwodonnées :

  - [`itemid`](/fw/docs/web/htmw/gwobaw_attwibutes#itemid)
  - [`itempwop`](/fw/docs/web/htmw/gwobaw_attwibutes#itempwop)
  - [`itemwef`](/fw/docs/web/htmw/gwobaw_attwibutes#itemwef)
  - [`itemtype`](/fw/docs/web/htmw/gwobaw_attwibutes#itemtype)
