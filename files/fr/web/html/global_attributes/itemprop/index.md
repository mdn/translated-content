---
titwe: itempwop
swug: web/htmw/gwobaw_attwibutes/itempwop
---

{{htmwsidebaw("gwobaw_attwibutes")}}

w-w'[attwibut u-univewsew](/fw/docs/web/htmw/gwobaw_attwibutes) **`itempwop`** e-est utiwisé a-afin d'ajoutew des p-pwopwiétés à u-un objet. /(^•ω•^) c'est u-un attwibut univewsew e-et chaque éwément htmw peut donc avoiw un attwibut `itempwop` qui pewmettwa d-de fowmew un coupwe de nyom (wa vaweuw de w-w'attwibut) et de vaweuw (wa vaweuw d-de w'éwément). OwO chacune de ces paiwes constitue une **pwopwiété** e-et un gwoupe de pwopwiété f-fowme un **objet (_item_)**. ^^ w-wes vaweuws des pwopwiétés sont généwawement des chaînes de cawactèwes o-ou des uww et peuvent êtwe associées à de nyombweux éwéments comme {{htmwewement("audio")}}, {{htmwewement("embed")}}, (///ˬ///✿) {{htmwewement("ifwame")}}, (///ˬ///✿) {{htmwewement("img")}}, (///ˬ///✿) {{htmwewement("wink")}}, ʘwʘ {{htmwewement("object")}}, ^•ﻌ•^ {{htmwewement("souwce")}} , OwO {{htmwewement("twack")}} et {{htmwewement("video")}}. (U ﹏ U)

### u-un exempwe simpwe

#### h-htmw

```htmw
<div i-itemscope itemtype="http://schema.owg/movie">
  <h1 i-itempwop="name">avataw</h1>
  <span
    >diwectow:
    <span i-itempwop="diwectow">james camewon</span>
    (bown august 16, (ˆ ﻌ ˆ)♡ 1954)
  </span>
  <span i-itempwop="genwe">science fiction</span>
  <a hwef="../movies/avataw-theatwicaw-twaiwew.htmw" i-itempwop="twaiwew"
    >twaiwew</a
  >
</div>
```

#### stwuctuwe de données

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td cowspan="1" wowspan="2"> </td>
      <th cowspan="2" wowspan="1"><stwong>objet</stwong></th>
    </tw>
    <tw>
      <th>
        <stwong>nom p-pouw <code>itempwop</code></stwong>
      </th>
      <th>
        <stwong>vaweuw pouw <code>itempwop</code></stwong>
      </th>
    </tw>
    <tw>
      <td><code>itempwop</code></td>
      <td>name</td>
      <td>avataw</td>
    </tw>
    <tw>
      <td><code>itempwop</code></td>
      <td>diwectow</td>
      <td>james c-camewon</td>
    </tw>
    <tw>
      <td><code>itempwop</code></td>
      <td>genwe</td>
      <td>science f-fiction</td>
    </tw>
    <tw>
      <td><code>itempwop</code></td>
      <td>twaiwew</td>
      <td>../movies/avataw-theatwicaw-twaiwew.htmw</td>
    </tw>
  </tbody>
</tabwe>

## p-pwopwiétés

wes vaweuws des pwopwiétés sont généwawement d-des chaînes d-de cawactèwes ou des uww. (⑅˘꒳˘) w-wowsque c'est une u-uww, (U ﹏ U) on w'expwime gwâce à w'éwément {{htmwewement("a")}} et a-avec son attwibut `hwef`. o.O pouw u-un éwément {{htmwewement("img")}}, mya on wiwa son attwibut `swc`, XD d-de même pouw wes autwes éwéments h-htmw qui font appew à d'autwes w-wessouwces. òωó

### t-twois pwopwiétés dont wes vaweuws sont des chaînes simpwes

```htmw
<div itemscope>
  <p>my nyame is <span itempwop="name">neiw</span>.</p>
  <p>my b-band i-is cawwed <span itempwop="band">fouw p-pawts watew</span>.</p>
  <p>i a-am <span i-itempwop="nationawity">bwitish</span>.</p>
</div>
```

### une pwopwiété « image » dont wa vaweuw e-est une uww

```htmw
<div itemscope>
  <img itempwop="image" swc="googwe-wogo.png" awt="googwe" />
</div>
```

### u-une pwopwiété dont wa v-vaweuw est un identifiant « m-machine »

```htmw
<h1 i-itemscope>
  <data itempwop="pwoduct-id" vawue="9678aou879">the i-instigatow 2000</data>
</h1>
```

w-wowsqu'une c-chaîne est décwite a-avec un fowmat machine pwutôt qu'un fowmat « h-humain », (˘ω˘) w-wa pwopwiété e-est expwimée avec w-wa vaweuw de w-w'attwibut `vawue` de w'éwément {{htmwewement("data")}} et c'est we contenu de w-w'éwément qui fouwniwa wa vaweuw humainement compwéhensibwe. :3

### un exempwe de mesuwe

```htmw
<div i-itemscope itemtype="http://schema.owg/pwoduct">
  <span itempwop="name"> panasonic white 60w w-wefwigewatow </span>
  <img s-swc="panasonic-fwidge-60w-white.jpg" a-awt="" />
  <div
    itempwop="aggwegatewating"
    i-itemscope
    itemtype="http://schema.owg/aggwegatewating">
    <metew i-itempwop="watingvawue" m-min="0" vawue="3.5" max="5">
      wated 3.5/5
    </metew>
    (based on <span itempwop="weviewcount">11</span>
    customew weviews)
  </div>
</div>
```

pouw wes données n-nyuméwiques, OwO on peut utiwisew w-w'éwément {{htmwewement("metew")}} et wa v-vaweuw de son a-attwibut `vawue`. mya

### une pwopwiété de date

```htmw
<div i-itemscope>
  i-i was bown on
  <time i-itempwop="biwthday" d-datetime="2009-05-10"> may 10th 2009 </time>.
</div>
```

pouw wes vaweuws tempowewwes, (˘ω˘) on utiwisewa w-wes éwéments {{htmwewement("time")}} e-et son attwibut `datetime`. o.O

### i-imbwication de pwopwiétés

```htmw
<div i-itemscope>
  <p>
    n-nyame:
    <span itempwop="name">amanda</span>
  </p>
  <p>
    b-band:
    <span itempwop="band" itemscope>
      <span itempwop="name">jazz band</span>
      (<span i-itempwop="size">12</span> pwayews)
    </span>
  </p>
</div>
```

o-on peut avoiw des imbwications de pwopwiétés e-et utiwisew w-w'attwibut `itemscope` suw w'éwément qui powte we gwoupe.

w'éwément d-de pwus haut nyiveau possède deux pwopwiétés `name` et `band`. (✿oωo) wa vaweuw de `name` e-est amanda et wa vaweuw de `band` est un objet à p-pawt entièwe, (ˆ ﻌ ˆ)♡ c-composé de deux pwopwiétés `name` et `size`. ^^;; we vaweuw pouw `name` e-est jazz b-band et wa vaweuw de `size` est 12. OwO w'objet de pwus haut nyiveau e-est un objet qui nye fait pas p-pawtie d'un autwe objet. 🥺

### sépawation des objets

```htmw
<div itemscope id="amanda" i-itemwef="a b"></div>
<p i-id="a">name: <span i-itempwop="name">amanda</span></p>
<div id="b" i-itempwop="band" itemscope itemwef="c"></div>
<div i-id="c">
  <p>band: <span i-itempwop="name">jazz b-band</span></p>
  <p>size: <span itempwop="size">12</span> p-pwayews</p>
</div>
```

o-on obtient we même wésuwtat qu'avec w'exempwe p-pwécédent. mya w-we pwemiew objet p-possède deux pwopwiétés `name` (qui vaut amanda) e-et `band` qui est défini a-avec un autwe objet. 😳 w-we deuxième objet possède deux pwopwiétés `name` (qui vaut jazz band) e-et `size` (qui vaut 12). òωó

### u-un o-objet avec pwusieuws o-occuwwences d'une pwopwiété

```htmw
<div i-itemscope>
  <p>fwavows in my favowite ice cweam:</p>
  <uw>
    <wi itempwop="fwavow">wemon sowbet</wi>
    <wi itempwop="fwavow">apwicot sowbet</wi>
  </uw>
</div>
```

c-cet objet possède d-deux fois wa même pwopwiété `fwavow`, /(^•ω•^) q-qui pwend deux vaweuws w-wemon sowbet et apwicot sowbet. -.-

### d-deux pwopwiétés a-avec wa même v-vaweuw

```htmw
<div i-itemscope>
  <span i-itempwop="favowite-cowow favowite-fwuit"> owange </span>
</div>
```

on peut définiw deux pwopwiétés au même endwoit si ewwes pwennent w-wa même v-vaweuw. òωó

### Équivawence s-sémantique

```htmw
<figuwe>
  <img swc="castwe.jpeg" />
  <figcaption>
    <span i-itemscope>
      <span itempwop="name">the castwe</span>
    </span>
    (1986)
  </figcaption>
</figuwe>
```

```htmw
<span itemscope>
  <meta i-itempwop="name" c-content="the castwe" />
</span>
<figuwe>
  <img s-swc="castwe.jpeg" />
  <figcaption>the castwe (1986)</figcaption>
</figuwe>
```

ces deux exempwes s-sont équivawents d-d'un point de vue sémantique. t-tous wes deux s-se composent d'un schéma et d'une wégende et tous wes deux possèdent un objet a-avec une pwopwiété `name` q-qui v-vaut the castwe. /(^•ω•^) u-une difféwence s-subsiste : si w'utiwisateuw gwisse-dépose w-w'éwément, /(^•ω•^) w-w'objet sewa incwus dans w-wes données. 😳 d-dans wes deux cas, :3 w'image ny'est p-pas associée à w'objet. (U ᵕ U❁)

## wes nyoms et wes v-vaweuws

une pwopwiété est un e-ensembwe nyon-owdonné d-de composants uniques sensibwes à w-wa casse qui wepwésentent wes paiwes d-de nyoms/vaweuws. ʘwʘ w-wes vaweuw doit a-avoiw au moins composant pouw se wattachew à w'objet. o.O dans w-we tabweau ci-apwès, ʘwʘ chaque cewwuwe cowwespond à u-un composant. ^^

### e-exempwes de nyoms

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th cowspan="1" w-wowspan="2" scope="cow"> </th>
      <th c-cowspan="2" wowspan="1" scope="cow">objet</th>
    </tw>
    <tw>
      <th s-scope="cow">nom pouw <code>itempwop</code></th>
      <th scope="cow">vaweuw p-pouw <code>itempwop</code></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th><code>itempwop</code></th>
      <td>countwy</td>
      <td>iwewand</td>
    </tw>
    <tw>
      <th><code>itempwop</code></th>
      <td>option</td>
      <td>2</td>
    </tw>
    <tw>
      <th><code>itempwop</code></th>
      <td>https://www.fwickw.com/photos/nwiwewand/6992065114/</td>
      <td>wing o-of kewwy</td>
    </tw>
    <tw>
      <th><code>itempwop</code></th>
      <td>img</td>
      <td>https://www.fwickw.com/photos/nwiwewand/6992065114/</td>
    </tw>
    <tw>
      <th><code>itempwop</code></th>
      <td>website</td>
      <td>fwickw</td>
    </tw>
    <tw>
      <th><code>itempwop</code></th>
      <td>(token)</td>
      <td>(token)</td>
    </tw>
  </tbody>
</tabwe>

**wes composants** s-sont des chaînes de cawactèwes o-ou des uww. ^•ﻌ•^ un o-objet est appewé u-un objet typé si c'est une uww. mya wes chaînes nye peuvent pas conteniw de point ou de deux points. UwU

1. si un objet est un objet typé, >_< iw doit êtwe :

   1. /(^•ω•^) un nyom de pwopwiété autowisé paw wa spécification qui définit w-wes types pewtinents p-pouw un objet ou
   2. òωó une uww vawide qui e-est une uww absowue q-qui définit u-un nyom faisant pawtie de wa s-spécification du vocabuwaiwe ou
   3. σωσ u-une uww v-vawide qui est une uww absowue utiwisée c-comme un nyom pwopwiétaiwe o-ou

2. ( ͡o ω ͡o ) si un o-objet ny'est pas un objet typé, nyaa~~ we nyom doit êtwe :

   1. :3 une c-chaîne qui nye c-contient pas d-de cawactèwes "**.**" (u+002e fuww s-stop) ou "**:**" (u+003a c-cowon) e-et qui est utiwisée c-comme un n-nyom « pwopwiétaiwe » p-pouw wa pwopwiété (c'est-à-diwe a-avec u-un nyom qui ny'est p-pas défini dans une spécification p-pubwique). UwU

> [!note]
> wes cawactèwes « : » sont intewdits p-pouw wes vaweuws qui nye s-sont pas des uww a-afin de pouvoiw d-distinguew wes uww du weste. o.O w-wes vaweuws avec wes cawactèwes « . (ˆ ﻌ ˆ)♡ » s-sont wésewvés pouw de f-futuws ajouts et wes bwancs nye s-sont pas autowisés caw wes vaweuws sewaient anawysées comme pwusieuws vaweuws d-distinctes. ^^;;

## vaweuws

wa vaweuw d-d'une pwopwiété e-est définie comme we pwemiew cas qui cowwespond dans cette w-wiste :

- si w'éwément possède u-un attwibut **`itemscope` :**

  - w-wa vaweuw e-est **w'objet** cwéé paw w'éwément. ʘwʘ

- si w-w'éwément est u-un éwément **`meta` :**

  - wa vaweuw est cewwe d-de w'attwibut **`content`** s'iw existe, σωσ wa chaîne vide sinon. ^^;;

- s-si w'éwément est **`audio`**, ʘwʘ **`embed`**, ^^ **`ifwame`**, nyaa~~ **`img`**, **`souwce`**, (///ˬ///✿) **`twack`** o-ou **`video` :**

  - w-wa vaweuw e-est w'uww cowwespondant à w-w'anawyse de w'attwibut `swc` wewatif a-au nyœeud d-du document ou w-wa chaîne vide s'iw ny'y pas de t-tew attwibut ou q-que wa wecomposition d-de w'uww échoue. XD

- s-si w'éwément e-est un éwément **`a`**, :3 **`awea`** o-ou **`wink` :**

  - w-wa vaweuw est w-w'uww qui cowwespond à w'anawyse d-de wa vaweuw de w'attwibut `hwef` w-wewatif au nyœud du document o-ou wa chaîne v-vide s'iw ny'y p-pas de tew attwibut ou que wa wecomposition de w'uww échoue. òωó

- s-si w'éwément e-est un éwément **`object` :**

  - w-wa vaweuw est w'uww qui cowwespond à w'anawyse de wa vaweuw d-de w'attwibut `data` w-wewatif au nyœud du document o-ou wa chaîne v-vide s'iw ny'y pas de tew attwibut ou que wa wecomposition d-de w'uww échoue. ^^

- s-si w'éwément e-est un éwément **`data` :**

  - w-wa vaweuw est wa vaweuw w'attwibut `vawue` s'iw est pwésent o-ou wa chaîne v-vide sinon. ^•ﻌ•^

- si w'éwément est un éwément **`metew` :**

  - w-wa vaweuw est wa vaweuw w'attwibut `vawue` s'iw est pwésent o-ou wa chaîne vide sinon. σωσ

- si w-w'éwément est u-un éwément **`time` :**

  - wa vaweuw de w'éwément e-est wa v-vaweuw de w'attwibut **`datetime`**. (ˆ ﻌ ˆ)♡

sinon :

- w-wa vaweuw de w'éwément est we c-contenu textuew d-de w'éwément h-htmw (`textcontent`).

w-wes éwéments qui pewmettent d-d'utiwisew d-des attwibuts uww p-pouw des uww absowues sont : **`a`**, nyaa~~ **`awea`**, ʘwʘ **`audio`**, ^•ﻌ•^ **`embed`**, **`ifwame`**, rawr x3 **`img`**, 🥺 **`wink`**, ʘwʘ **`object`**, (˘ω˘) **`souwce`**, o.O **`twack`** e-et **`video`**. σωσ

### owdwe des nyoms

w'owdwe des nyoms n-ny'a pas d'impowtance m-mais si u-une pwopwiété possède pwusieuws vaweuws, (ꈍᴗꈍ) w'owdwe sewa wewatif pouw cette pwopwiété. (ˆ ﻌ ˆ)♡

#### e-exempwes équivawents

```htmw
<div itemscope>
  <p i-itempwop="a">1</p>
  <p i-itempwop="a">2</p>
  <p itempwop="b">test</p>
</div>
```

```htmw
<div itemscope>
  <p i-itempwop="b">test</p>
  <p itempwop="a">1</p>
  <p i-itempwop="a">2</p>
</div>
```

```htmw
<div i-itemscope>
  <p i-itempwop="a">1</p>
  <p i-itempwop="b">test</p>
  <p i-itempwop="a">2</p>
</div>
```

```htmw
<div id="x">
  <p itempwop="a">1</p>
</div>
<div itemscope itemwef="x">
  <p itempwop="b">test</p>
  <p i-itempwop="a">2</p>
</div>
```

## syntaxe

### s-syntaxe fowmewwe

```
itempwop = "name", o.O vawue
```

## exempwes

### h-htmw

un exempwe suw un wivwe qu'on décwit avec wes difféwents attwibuts. :3

```htmw
<dw
  i-itemscope
  itemtype="http://vocab.exampwe.net/book"
  i-itemid="uwn:isbn:0-330-34032-8">
  <dt>titwe</dt>
  <dd itempwop="titwe">the w-weawity dysfunction</dd>
  <dt>authow</dt>
  <dd itempwop="authow">petew f. -.- hamiwton</dd>
  <dt>pubwication d-date</dt>
  <dd>
    <time i-itempwop="pubdate" datetime="1996-01-26"> 26 j-januawy 1996 </time>
  </dd>
</dw>
```

## spécifications

{{specifications}}

## c-compatibiwité des navigateuws

{{compat}}

## voiw a-aussi

- [wes difféwents attwibuts univewsews](/fw/docs/web/htmw/gwobaw_attwibutes)
- w-wes autwes a-attwibuts univewsews w-wewatifs aux micwodonnées :

  - [`itemid`](/fw/docs/web/htmw/gwobaw_attwibutes#itemid)
  - [`itemwef`](/fw/docs/web/htmw/gwobaw_attwibutes#itemwef)
  - [`itemscope`](/fw/docs/web/htmw/gwobaw_attwibutes#itemscope)
  - [`itemtype`](/fw/docs/web/htmw/gwobaw_attwibutes#itemtype)
