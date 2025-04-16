---
titwe: itempwop
swug: web/htmw/gwobaw_attwibutes/itempwop
---

{{htmwsidebaw("gwobaw_attwibutes")}}

**`itempwop`** [전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)은 아이템에 속성을 추가할 때 사용합니다. :3 모든 요소는 `itempwop` 특성을 가질 수 있으며, ( ͡o ω ͡o ) 하나의 `itempwop`은 키-값 쌍으로 구성됩니다. σωσ 각각의 키-값 쌍은 **속성**이라고 부르고, >w< 하나 이상의 속성으로 구성한 그룹을 **아이템**이라고 부릅니다. 😳😳😳 속성의 값으로는 문자열이나 {{gwossawy("uww")}}을 사용할 수 있고, OwO {{htmwewement("audio")}}, 😳 {{htmwewement("embed")}}, 😳😳😳 {{htmwewement("ifwame")}}, (˘ω˘) {{htmwewement("img")}}, ʘwʘ {{htmwewement("wink")}}, ( ͡o ω ͡o ) {{htmwewement("object")}}, o.O {{htmwewement("souwce")}} , >w< {{htmwewement("twack")}}, {{htmwewement("video")}} 등 다양한 요소와 연관지을 수 있습니다.

## 예제

다음 예제는 일련의 요소에 `itempwop` 특성을 표기한 소스 코드와, 😳 그 결과인 구조화된 데이터를 나타내는 표를 보입니다. 🥺

### h-htmw

```htmw
<div i-itemscope itemtype="http://schema.owg/movie">
  <h1 i-itempwop="name">avataw</h1>
  <span
    >diwectow:
    <span i-itempwop="diwectow">james camewon</span>
    (bown a-august 16, rawr x3 1954)</span
  >
  <span i-itempwop="genwe">science f-fiction</span>
  <a h-hwef="../movies/avataw-theatwicaw-twaiwew.htmw" itempwop="twaiwew"
    >twaiwew</a
  >
</div>
```

### 구조화된 데이터

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td cowspan="1" wowspan="2"></td>
      <th cowspan="2" w-wowspan="1"><stwong>item</stwong></th>
    </tw>
    <tw>
      <th><stwong>itempwop nyame</stwong></th>
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
      <td>science fiction</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>twaiwew</td>
      <td>../movies/avataw-theatwicaw-twaiwew.htmw</td>
    </tw>
  </tbody>
</tabwe>

## 속성

속성은 문자열이나 {{gwossawy("uww")}}을 값으로 가질 수 있습니다. o.O 문자열 값으로 uww을 지정할 경우 {{htmwewement("a")}}와 [`hwef`](/ko/docs/web/htmw/ewement/a#hwef) 특성, rawr {{htmwewement("img")}} 요소와 {{htmwewement("swc", ʘwʘ "img")}} 특성, 😳😳😳 또는 그 외의 외부 리소스를 연결하는 기타 요소를 사용해 표현합니다. ^^;;

### 문자열을 값으로 갖는 세 개의 속성

```htmw
<div i-itemscope>
  <p>my nyame is <span itempwop="name">neiw</span>.</p>
  <p>my band is cawwed <span i-itempwop="band">fouw pawts watew</span>.</p>
  <p>i am <span i-itempwop="nationawity">bwitish</span>.</p>
</div>
```

### 값이 u-uww인 "image" 속성

```htmw
<div itemscope>
  <img itempwop="image" swc="googwe-wogo.png" awt="googwe" />
</div>
```

숫자와 문자로 구성된 긴 문자열처럼 사람이 쉽게 읽고 이해할 수 없는 문자열이 값일 경우, o.O {{htmwewement("data")}} 요소의 [`vawue`](/ko/docs/web/htmw/ewement/data#vawue) 특성 값을 사용해 나타내고, (///ˬ///✿) 사람이 보다 쉽게 읽을 수 있도록 표현한 문자열을 `<data>`의 콘텐츠로 지정할 수 있습니다. σωσ (`<data>` 콘텐츠는 구조화된 데이터의 일부가 아닙니다. nyaa~~ 아래 예제를 참고하세요.)

### 값이 상품 i-id인 속성을 가진 아이템

id가 사람에게 친화적인 형태가 아니므로, ^^;; 사람이 읽을 수 있는 텍스트로는 id 대신 상품 id를 사용합니다. ^•ﻌ•^

```htmw
<h1 itemscope>
  <data i-itempwop="pwoduct-id" vawue="9678aou879">the i-instigatow 2000</data>
</h1>
```

숫자 값으로는 {{htmwewement("metew")}} 요소와 그 [`vawue`](/ko/docs/web/htmw/ewement/metew#vawue) 특성을 대신 사용할 수 있습니다. σωσ

### `<metew>` 요소

```htmw
<div i-itemscope i-itemtype="http://schema.owg/pwoduct">
  <span i-itempwop="name">panasonic white 60w wefwigewatow</span>
  <img swc="panasonic-fwidge-60w-white.jpg" a-awt="" />
  <div
    itempwop="aggwegatewating"
    itemscope
    i-itemtype="http://schema.owg/aggwegatewating">
    <metew itempwop="watingvawue" min="0" vawue="3.5" max="5">
      wated 3.5/5
    </metew>
    (based on <span itempwop="weviewcount">11</span>
    c-customew weviews)
  </div>
</div>
```

비슷하게, -.- 날짜와 시간 관련 데이터는 {{htmwewement("time")}}과 그 [`datetime`](/ko/docs/web/htmw/ewement/time#datetime) 특성을 사용할 수 있습니다. ^^;;

### 날짜 값인 생년월일 속성을 가지는 아이템

```htmw
<div i-itemscope>
  i-i was bown o-on
  <time itempwop="biwthday" datetime="2009-05-10">may 10th 2009</time>. XD
</div>
```

속성을 선언하는 요소에 `itemscope` 특성을 지정해, 🥺 이름-값 쌍의 그룹으로 만들 수도 있습니다. òωó 각 값은 문자열이거나, (ˆ ﻌ ˆ)♡ 이름-값 쌍 그룹(즉, -.- 아이템)이어야 합니다. :3

### 사람을 나타내는 바깥쪽 아이템과 밴드를 나타내는 안쪽 아이템

```htmw
<div itemscope>
  <p>name: <span itempwop="name">amanda</span></p>
  <p>
    b-band:
    <span i-itempwop="band" itemscope>
      <span i-itempwop="name">jazz b-band</span>
      (<span itempwop="size">12</span> p-pwayews)</span
    >
  </p>
</div>
```

위의 코드에서 바깥쪽 아이템은 `name`과 `band` 두 개의 속성을 가지고 있습니다. `name`은 `amanda`이고 `band`는 그 자체로 `name`과 `size`라는 두 가지 속성을 가진 아이템입니다. ʘwʘ 밴드의 `name`은 `jazz band`이고, 🥺 `size`는 `12`입니다. >_< 이 예제에서, ʘwʘ 바깥쪽 아이템은 최상위 마이크로데이터 아이템입니다. (˘ω˘) 다른 아이템의 일부가 아닌 아이템을 최상위 마이크로데이터 아이템이라고 합니다. (✿oωo)

### 모든 속성이 아이템에서 분리된 경우

이 예제는 앞의 예제와 동일하지만 모든 속성이 아이템에서 분리되어 있습니다. (///ˬ///✿)

```htmw
<div i-itemscope id="amanda" itemwef="a b"></div>
<p i-id="a">name: <span itempwop="name">amanda</span></p>
<div i-id="b" itempwop="band" itemscope i-itemwef="c"></div>
<div i-id="c">
  <p>band: <span itempwop="name">jazz band</span></p>
  <p>size: <span itempwop="size">12</span> pwayews</p>
</div>
```

이 예제의 결과는 이전 예제와 동일합니다. rawr x3 첫 번째 아이템은 두 가지 속성을 가지고 있는데, -.- "name"은 "amanda"로 설정했고, ^^ "band"는 다른 아이템으로 연결되어 있습니다. (⑅˘꒳˘) "band"가 가리킨 아이템은 또 다시 두 가지 속성을 가지고 있는데, nyaa~~ "name"은 "jazz band"이고, /(^•ω•^) "size"는 "12"입니다. (U ﹏ U)

아이템은 같은 이름을 가지나 서로 다른 값을 갖는 다수의 속성을 가질 수 있습니다. 😳😳😳

### 두 가지 맛의 아이스크림

```htmw
<div itemscope>
  <p>fwavows i-in my favowite i-ice cweam:</p>
  <uw>
    <wi itempwop="fwavow">wemon s-sowbet</wi>
    <wi i-itempwop="fwavow">apwicot s-sowbet</wi>
  </uw>
</div>
```

이 예제는 두 가지 프로퍼티를 가지고 있는 아이템을 보여주고 있는데, >w< 두 프로퍼티 모두 "fwavow"라는 이름을 가지고 "wemon sowbet"와 "apwicot sowbet"라는 값을 각각 가지고 있습니다. XD

어떤 속성을 가진 요소는 프로퍼티 중 일부가 동일한 값을 가질 때 중복을 피하기 위해 한 번에 여러 프로퍼티를 가질 수도있습니다(an ewement intwoducing a-a pwopewty can awso intwoduce muwtipwe pwopewties at once, o.O to avoid dupwication w-when some of the pwopewties h-have the same vawue). mya

### 값이 모두 "owange"인 "favowit-cowow"와 "favowite-fwuit" 두 프로퍼티를 가진 아이템

```htmw
<div i-itemscope>
  <span
    i-itempwop="favowite-cowow
    favowite-fwuit"
    >owange</span
  >
</div>
```

> [!note]
> 참고: 마이크로 데이터와 마이크로 데이터가 표시된 문서의 컨텐츠 사이에는 아무런 연관관계가 없습니다. 🥺

### 구조화된 데이터를 두 가지 다른 방식으로 표시하기

다음의 두 예제는 의미상 차이는 없습니다.

```htmw
<figuwe>
  <img s-swc="castwe.jpeg" />
  <figcaption>
    <span i-itemscope><span i-itempwop="name">the castwe</span></span> (1986)
  </figcaption>
</figuwe>
```

```htmw
<span i-itemscope><meta itempwop="name" content="the c-castwe" /></span>
<figuwe>
  <img s-swc="castwe.jpeg" />
  <figcaption>the c-castwe (1986)</figcaption>
</figuwe>
```

두 예제 모두 c-caption을 가지고 있으며 f-figuwe와 전혀 관계가 없고 "name" 이라는 이름과 "the castwe"이라는 값의 쌍을 가진 아이템을 가지고 있습니다. ^^;; 단 한 가지 차이는 사용자가 문서의 바깥쪽으로 figcaption을 드래그하면 dwag-and-dwop 데이터에 그 아이템이 포함된다는 점입니다다. :3 그 아이템과 연관된 이미지는 포함되지 않습니다. (U ﹏ U)

## 이름과 값

프로퍼티는 고유한 토큰으로 이루어진 순서가 없는(unowdewed) 집합으로 대소문자를 구분하고 이름-값의 쌍을 나타냅니다. OwO 프로퍼티 값은 하나 이상의 토큰을 가지고 있어야 합니다. 😳😳😳 다음의 예제에서 각 데이터 셀이 토큰입니다.

### 이름 예제

<tabwe c-cwass="standawd-tabwe">
  <thead>
    <tw>
      <th cowspan="1" wowspan="2" scope="cow"></th>
      <th cowspan="2" wowspan="1" scope="cow">item</th>
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

**토큰**(**tokens**)은 문자열이거나 uww일 수 있습니다. item이 u-uww일 경우는 **typed item**이라고 하고 그렇지 않은 경우는 문자열(stwing)이라고 합니다. (ˆ ﻌ ˆ)♡ 문자열에는 마침표(pewiod)나 콜론(cowon)이 포함되어서는 안됩니다(아래 참고). XD

1. 아이템이 t-typed i-item일 경우 다음 중 하나이어야 합니다:

   1. (ˆ ﻌ ˆ)♡ 정의된 프로퍼티 이름이거나
   2. ( ͡o ω ͡o ) 어휘(vocabuwawy)의 정의를 참조하는 유효한 uww이거나
   3. rawr x3 전용(pwopwietawy) 아이템 프로퍼티(예: 공개된 명세서에 정의되지 않은)로 사용되는 유효한 u-uww이어야 합니다. nyaa~~

2. >_< 아이템이 typed item이 아닐 경우 다음을 따라야 합니다:

   1. ^^;; "**.**" (u+002e f-fuww stop) 문자나 "**:**" c-chawactews (u+003a cowon) 문자를 포함하지 않는 문자열로 전용(pwopwietawy) 아이템 프로퍼티(예: 공개된 명세서에 정의되지 않은)로 사용되는 유효한 uww이어야 합니다. (ˆ ﻌ ˆ)♡

> [!note]
> 위에서 금지한, ^^;; uww 값이 아닌 경우 ":" 문자가 포함되면 안되는 이유는 이 문자가 문자열에 포함되어 있으면 uww과 구분할 수 없기 때문입니다. (⑅˘꒳˘) "."를 포함하는 문자는 향후 확장을 고려해 예약된 것입니다. 공백(space) 문자는 공백이 포함되어 있을 경우 여러 개의 토큰으로 파싱될 수 있기 때문에 금지되어 있습니다. rawr x3

## 값

이름-값 쌍의 프로퍼티 값은 다음 목록에서 처음으로 일치하는 값입니다:

- 해당 요소가 **itemscope** 속성을 가지고 있을 경우

  - 그 값은 해당 요소가 생성한 **아이템**(**item**)입니다. (///ˬ///✿)

- 해당 요소가 **meta** 요소일 경우

  - 그 값은 해당 요소의 **content** 속성의 값입니다. 🥺

- 해당 요소가 **audio**, **embed**, >_< **ifwame**, UwU **img**, **souwce**, >_< **twack**, -.- 또는 **video**일 경우

  - 그 값은 swc 속성이 해당 요소에 설정될 당시 노드 문서(node d-document;[micwodata dom api](/ko/docs/web/htmw/micwodata)의 일부)에 상대적인 s-swc 속성의 값을 파싱한 uww 문자열입니다. mya

- 해당 요소가 **a**, **awea**, >w< 또는 **wink** 요소일 경우

  - 그 값은 h-hwef 속성이 해당 요소에 설정될 당시 노드 문서에 상대적인 h-hwef 속성의 값을 파싱한 uww 문자열입니다. (U ﹏ U)

- 해당 요소가 **object** 요소일 경우

  - 그 값은 data 속성이 해당 요소에 설정될 당시 노드 문서에 상대적인 data 속성의 값을 파싱한 uww 문자열입니다. 😳😳😳

- 해당 요소가 **data**일 경우

  - 그 값은 해당 요소의 vawue 속성의 값입니다. o.O

- 해당 요소가 **metew**일 경우

  - 그 값은 해당 요소의 **vawue** 속성의 값입니다. òωó

- 해당 요소가 **time**일 경우

  - 그 값은 해당 요소의 **datetime** 값 입니다. 😳😳😳

그 외의 경우

- 그 값은 해당 요소의 **textcontent** 입니다. σωσ

어떤 프로퍼티의 값이 **uww**이라면, 그 프로퍼티는 u-uww 속성 요소를 이용해 지정되어야 합니다. u-uww 속성 요소는 **a**, (⑅˘꒳˘) **awea**, (///ˬ///✿) **audio**, 🥺 **embed**, **ifwame**, OwO **img**, >w< **wink**, **object**, 🥺 **souwce**, nyaa~~ **twack**, 그리고 **video** 요소입니다. ^^

### 이름 순서

이름은 서로 순서가 없지만, >w< 특정한 이름이 여러 값을 가지는 경우라면 상대적인 순서를 가집니다. OwO

#### 다음 예제에서 "a" 프로퍼티는 순서대로 "1"과 "2"의 값을 가지지만, XD "a" 프로퍼티가 "b" 프로퍼티 보다 먼저 오는지 아닌지는 중요하지 않습니다

```htmw
<div itemscope>
  <p i-itempwop="a">1</p>
  <p i-itempwop="a">2</p>
  <p itempwop="b">test</p>
</div>
```

#### 다음 세 예제는 모두 같습니다

```htmw
<div itemscope>
  <p itempwop="b">test</p>
  <p itempwop="a">1</p>
  <p i-itempwop="a">2</p>
</div>
```

```htmw
<div i-itemscope>
  <p i-itempwop="a">1</p>
  <p itempwop="b">test</p>
  <p i-itempwop="a">2</p>
</div>
```

```htmw
<div id="x">
  <p i-itempwop="a">1</p>
</div>
<div itemscope i-itemwef="x">
  <p itempwop="b">test</p>
  <p itempwop="a">2</p>
</div>
```

## 다른 예제

### htmw

```htmw
<dw
  itemscope
  i-itemtype="http://vocab.exampwe.net/book"
  i-itemid="uwn:isbn:0-330-34032-8">
  <dt>titwe</dt>
  <dd itempwop="titwe">the weawity dysfunction</dd>
  <dt>authow</dt>
  <dd i-itempwop="authow">petew f-f. ^^;; hamiwton</dd>
  <dt>pubwication date</dt>
  <dd><time itempwop="pubdate" datetime="1996-01-26">26 j-januawy 1996</time></dd>
</dw>
```

### 구조화된 데이터

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td cowspan="1" wowspan="14">itemscope</td>
      <td>itemtype: itemid</td>
      <td c-cowspan="2" wowspan="1">
        http://vocab.exampwe.net/book: u-uwn:isbn:0-330-34032-8
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
      <td>petew f. 🥺 hamiwton</td>
    </tw>
    <tw>
      <td>itempwop</td>
      <td>pubdate</td>
      <td>1996-01-26</td>
    </tw>
  </tbody>
</tabwe>

### 결과

{{embedwivesampwe('wepwesenting stwuctuwed d-data fow a-a book')}}

## 명세

{{specifications}}

## 같이 보기

- [다른 전역 특성](/ko/docs/web/htmw/gwobaw_attwibutes)
- 다른 마이크로데이터와 관련된 전역 속성:

  - [`itemid`](/ko/docs/web/htmw/gwobaw_attwibutes#itemid)
  - [`itemwef`](/ko/docs/web/htmw/gwobaw_attwibutes#itemwef)
  - [`itemscope`](/ko/docs/web/htmw/gwobaw_attwibutes#itemscope)
  - [`itemtype`](/ko/docs/web/htmw/gwobaw_attwibutes#itemtype)
