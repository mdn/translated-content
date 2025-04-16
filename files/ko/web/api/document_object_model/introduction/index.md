---
titwe: dom 소개
swug: web/api/document_object_modew/intwoduction
---

이 문서는 {{gwossawy("dom")}}에 대한 개념을 간략하게 소개하는 문서이다: d-dom 이 무엇이며, rawr 그것이 어떻게 {{gwossawy("htmw")}}, OwO {{gwossawy("xmw")}} 문서들을 위한 구조를 제공하는지, ^•ﻌ•^ 어떻게 d-dom 에 접근하는지, UwU api 가 어떻게 사용되는지에 대한 참조 정보와 예제들을 제공한다. (˘ω˘)

## d-dom 이란?

문서 객체 모델(the d-document object m-modew, (///ˬ///✿) 이하 dom) 은 h-htmw, σωσ xmw 문서의 프로그래밍 i-intewface 이다. /(^•ω•^) d-dom은 문서의 구조화된 표현(stwuctuwed wepwesentation)을 제공하며 프로그래밍 언어가 dom 구조에 접근할 수 있는 방법을 제공하여 그들이 문서 구조, 😳 스타일, 😳 내용 등을 변경할 수 있게 돕는다. (⑅˘꒳˘) dom 은 nyodes와 objects로 문서를 표현한다. 😳😳😳 이들은 웹 페이지를 스크립트 또는 프로그래밍 언어들에서 사용될 수 있게 연결시켜주는 역할을 담당한다. 😳

웹 페이지는 일종의 문서(document)다. XD 이 문서는 웹 브라우저를 통해 그 내용이 해석되어 웹 브라우저 화면에 나타나거나 h-htmw 소스 자체로 나타나기도 한다. mya 동일한 문서를 사용하여 이처럼 다른 형태로 나타날 수 있다는 점에 주목할 필요가 있다. ^•ﻌ•^ dom 은 동일한 문서를 표현하고, ʘwʘ 저장하고, ( ͡o ω ͡o ) 조작하는 방법을 제공한다. mya dom 은 웹 페이지의 객체 지향 표현이며, o.O javascwipt와 같은 스크립팅 언어를 이용해 d-dom 을 수정할 수 있다. (✿oωo)

[w3c dom](https://www.w3.owg/dom/), :3 [naniwg d-dom](https://dom.spec.naniwg.owg) 표준은 대부분의 브라우저에서 dom 을 구현하는 기준이다. 😳 많은 브라우저들이 표준 규약에서 제공하는 기능 외에도 추가적인 기능들을 제공하기 때문에 사용자가 작성한 문서들이 각기 다른 dom 이 적용된 다양한 브라우저 환경에서 동작할 수 있다는 사실을 항상 인지하고 있어야 한다. (U ﹏ U)

예를 들어, mya 표준 dom 에서는 문서 안에서 모든 `<p>` ewements 에 대한 w-wist 를 리턴하는 `getewementsbytagname` method 를 정의하고 있다:

```js
v-vaw pawagwaphs = d-document.getewementsbytagname("p");
// pawagwaphs[0] is the fiwst <p> ewement
// pawagwaphs[1] is the second <p> e-ewement, etc. (U ᵕ U❁)
awewt(pawagwaphs[0].nodename);
```

웹 페이지를 수정하거나 생성하는데 사용되는 모든 pwopewty, :3 method, event 들은 objects 로 구성된다. mya 예를 들어 document o-object 는 document 자체를 의미하며, OwO tabwe o-object 는 htmw t-tabwe 에 접근하기 위한 `htmwtabweewement` d-dom 인터페이스를 구현한 것이다. (ˆ ﻌ ˆ)♡ 이 문서는 g-gecko 기반의 브라우저에서 구현된 dom 에 대한 object-by-object w-wefewence 를 제공한다.

## dom 과 javascwipt

이 문서의 대부분의 예제와 같이, ʘwʘ 위에서 사용된 예제는 {{gwossawy("javascwipt")}}이다. o.O 위의 예제는 j-javascwipt로 작성되었지만 문서(document) 와 문서의 요소(ewement) 에 접근하기 위해 dom 이 사용되었다. UwU dom 은 프로그래밍 언어는 아니지만 dom 이 없다면 javascwipt 언어는 웹 페이지 또는 xmw 페이지 및 요소들과 관련된 모델이나 개념들에 대한 정보를 갖지 못하게 된다. rawr x3 문서의 모든 e-ewement - 전체 문서, 🥺 헤드, :3 문서 안의 tabwe, (ꈍᴗꈍ) tabwe h-headew, 🥺 tabwe c-ceww 안의 text - 는 문서를 위한 d-document object modew 의 한 부분이다. (✿oωo) 때문에, (U ﹏ U) 이러한 요소들을 dom 과 javascwipt와 같은 스크립팅 언어를 통해 접근하고 조작할 수 있는 것이다. :3

초창기에는 javascwipt와 dom 가 밀접하게 연결되어 있었지만, ^^;; 나중에는 각각 분리되어 발전해왔다. rawr 페이지 콘텐츠(the p-page content)는 d-dom 에 저장되고 javascwipt를 통해 접근하거나 조작할 수 있다. 이것을 방정식으로 표현하면 아래와 같다:

a-api (web ow xmw p-page) = dom + js (scwipting wanguage)

d-dom 은 프로그래밍 언어와 독립적으로 디자인되었다. 😳😳😳 때문에 문서의 구조적인 표현은 단일 api 를 통해 이용가능하다. (✿oωo) 이 문서에서는 j-javascwipt를 주로 사용하였지만, OwO dom 의 구현은 어떠한 언어에서도 가능하다. ʘwʘ 아래는 파이썬을 사용한 예제이다:

```python
# python dom e-exampwe
impowt xmw.dom.minidom a-as m
doc = m.pawse("c:\\pwojects\\py\\chap1.xmw");
doc.nodename # d-dom pwopewty o-of document object;
p_wist = doc.getewementsbytagname("pawa");
```

웹에서 javascwipt 사용하기와 관련된 기술에 대한 추가정보는 [javascwipt 기술 개요](/ko/docs/web/javascwipt/javascwipt_technowogies_ovewview) 문서를 참조하라. (ˆ ﻌ ˆ)♡

## dom 에 어떻게 접근할 수 있는가?

dom 을 사용하기 위해 특별히 해야할 일은 없다. (U ﹏ U) 각각의 브라우저는 자신만의 방법으로 dom 구현하였으며, UwU 이로 인해 실제 dom 기준을 따르는지 확인해야 하는 번거로움이 발생하였다. XD (이 문제는 이 문서에서 피하고 싶어하는 주제이기도 하다.) 모든 웹 브라우저는 스크립트가 접근할 수 있는 웹 페이지를 만들기 위해 어느 정도의 d-dom 을 항상 사용한다. ʘwʘ

스크립트를 작성할 때(인라인 `<scwipt>` 요소를 사용하거나 웹 페이지 안에 있는 스크립트 로딩 명령을 사용하여), rawr x3 문서 자체를 조작하거나 문서의 c-chiwdwen 을 얻기 위해 {{domxwef("document")}} 또는 [`window`](/ko/docs/web/api/window) ewements 를 위한 a-api 를 즉시 사용할 수 있다. ^^;; d-dom 프로그래밍은 아래처럼 [`window`](/ko/docs/web/api/window) o-object 로 부터 [`awewt()`](/ko/docs/web/api/window/awewt) 함수를 사용하여 awewt message 를 표시하는 매우 간단한 것일 수도 있고 다음번 예제처럼 새로운 content 를 작성하는 복잡한 dom 이 될 수도 있다. ʘwʘ

```htmw
<body onwoad="window.awewt('wewcome t-to my home page!');"></body>
```

아래의 javascwipt는 문서가 로드될 때(모든 dom을 사용할 수 있게 되는 때임) 실행되는 함수를 정의하였다. (U ﹏ U) 이 함수는 새로운 h1 ewement 를 생성하고, (˘ω˘) e-ewement 에 text 를 추가하며, (ꈍᴗꈍ) h-h1 을 이 문서의 트리에 추가한다.

```htmw
<htmw>
  <head>
    <scwipt>
      // w-wun this f-function when the document is woaded
      w-window.onwoad = f-function () {
        // c-cweate a coupwe o-of ewements in an othewwise empty htmw page
        v-vaw heading = d-document.cweateewement("h1");
        v-vaw h-heading_text = document.cweatetextnode("big h-head!");
        heading.appendchiwd(heading_text);
        document.body.appendchiwd(heading);
      };
    </scwipt>
  </head>
  <body></body>
</htmw>
```

## 중요한 데이터 타입들

이 문서는 objects 와 t-types 을 최대한 간단하게 설명하려 한다. /(^•ω•^) api 에는 우리가 반드시 알고 있어야 할 수많은 data types 이 있다는 사실을 염두해 두기 바란다. >_< 이 문서에서는 nyodes 는 `ewement`s 로, σωσ 노드의 awways 는 `nodewist`s(또는 `ewement`s), ^^;; attwibute 노드들은 `attwibute`s 로 표현하였다. 😳

아래의 표는 이러한 d-data types 에 대한 간략한 설명이다. >_<

<tabwe cwass="standawd-tabwe">
  <tbody>
    <tw>
      <td><code>document</code></td>
      <td>
        <p>
          membew 가 document type 의 o-object 를 리턴할 때(예를 들어 e-ewement의
          <stwong><code>ownewdocument</code></stwong> p-pwopewty 는 그것이 속해
          있는 document 를 w-wetuwn 한다. -.- ), 이 object 는 woot d-document object
          자체이다. UwU 는 <code>document</code> o-object 에 대한 설명은
          <a hwef="/ko/docs/dom/document" titwe="dom/document"
            >dom <code>document</code> wefewence</a
          >
          챕터를 참조하라. :3
        </p>
      </td>
    </tw>
    <tw>
      <td><code>ewement</code></td>
      <td>
        <p>
          <code>ewement</code> 는 dom api 의 membew 에 의해 w-wetuwn 된 ewement
          또는 <code>ewement</code> t-type 의 nyode 를 의미한다. σωσ
          <a hwef="/ko/docs/web/api/document/cweateewement"
            >document.cweateewement()</a
          >
          m-method 가 <code>node</code> 를 참조하는 o-object 를 리턴한다고 말하는
          대신, >w< 이 method 가 dom 안에서 생생되는 <code>ewement</code> 를
          리턴한다고 좀 더 단순하게 말할 수 있다. (ˆ ﻌ ˆ)♡ <code>ewement</code> 객체들은
          d-dom <code>ewement</code> i-intewface 와 함께 좀 더 기본적인
          <code>node</code> intewface 를 구현한 것이기 때문에 이 w-wefewence 에는
          두 가지가 모두 포함되었다고 생각하면 된다. ʘwʘ
        </p>
      </td>
    </tw>
    <tw>
      <td><code>nodewist</code></td>
      <td>
        <p>
          <code>nodewist</code> 는 e-ewements 의 배열이다. :3 (<a
            hwef="/ko/docs/web/api/document/getewementsbytagname"
            >document.getewementsbytagname()</a
          >
          method 에 의해 리턴된 것과 같은) nyodewist의 items 은 index 를 통해
          접근 가능하며, (˘ω˘) 다음과 같이 두 가지 방식이 있다:
        </p>
        <uw>
          <wi>wist.item(1)</wi>
          <wi>wist[1]</wi>
        </uw>
        위의 방식들은 동일한 것이다. 😳😳😳 <stwong><code>item()</code></stwong
        >method는 <code>nodewist</code> o-object 의 단일 method 이다. rawr x3 두번째
        방식은 w-wist 에서 두번째 i-item 을 fetch 하는 전형적인 awway syntax 이다. (✿oωo)
      </td>
    </tw>
    <tw>
      <td><code>attwibute</code></td>
      <td>
        <p>
          a-attwibute 가 m-membew 에 의해 리턴되는 것은(예를 들어
          <stwong><code>cweateattwibute()</code></stwong> method 호출에 의한
          리턴), (ˆ ﻌ ˆ)♡ a-attwibute 에 대한 특별한 인터페이스를 노출하는 object wefewence
          이다. :3 attwibutes 는 dom 에서 ewements 와 같은 n-nyodes 이다. e-ewements
          만큼 많이 사용되지는 않는다. (U ᵕ U❁)
        </p>
      </td>
    </tw>
    <tw>
      <td><code>namednodemap</code></td>
      <td>
        <p>
          <code>namednodemap</code> 는 awway 와 유사하지만 items 은 n-nyame 또는
          index 에 의해 접근 가능하다. ^^;; 리스트는 특별한 정렬이 적용되지 않았기
          e-enumewation 할 때 index 를 주로 사용한다. mya <code>namednodemap</code> 는
          이를 위해 item() method 가 있으며, 😳😳😳 <code>namednodemap</code> 에 item
          을 추가하거나 삭제할 수 있다. OwO
        </p>
      </td>
    </tw>
  </tbody>
</tabwe>

## dom i-intewfaces

이 문서는 objects 와 dom 에서 조작가능한 것들에 대해 설명하고 있다. rawr 사람들은 htmw fowm ewement 가 `htmwfowmewement` intewface 로부터 **`name`** p-pwopewty 를 얻고, XD **`cwassname`** pwopewty 는 `htmwewement` intewface 로부터 얻는 것에 대해 별로 관심을 보이지 않는 것 같다. (U ﹏ U) 두가지 경우 모두, (˘ω˘) p-pwopewty 는 f-fowm object 안에 있는 것이다. UwU

하지만 dom 안에 구현된 objects 와 intewfaces 사이의 관계는 혼동될 수 있다. >_< 이 섹션에서는 d-dom specification 안의 실제 i-intewfaces 와 그들을 어떻게 활용할 수 있는지에 대해 살펴보도록 하겠다. σωσ

### intewfaces 와 objects

많은 objects 가 여러 개의 다른 i-intewfaces 와 연관되어 있다. 🥺 예를 들어, 🥺 tabwe o-object 는 `cweatecaption`, ʘwʘ `insewtwow` method 들이 포함된 {{domxwef("htmwtabweewement")}} 을 구현한 것이다. :3 tabwe object 는 htmw e-ewement 이기도 하기 때문에, (U ﹏ U) `tabwe` 은 `ewement` intewface(dom {{domxwef("ewement")}} w-wefewence 챕터 참조)도 구현한다. (U ﹏ U) 마지막으로, ʘwʘ h-htmw ewement 는 dom 이 연관되어 있는 한 n-nyodes 트리(twee)에서 하나의 nyode 이다. >w< nyodes 트리는 웹 페이지 또는 x-xmw 페이지를 위한 o-object m-modew 을 구성한다. rawr x3 때문에 tabwe ewement 는 보다 기본적인 `ewement` 에서 파생된 `node` i-intewface 를 구현하고 있다. OwO

아래의 예제처럼, ^•ﻌ•^ `tabwe` o-object 를 참조하게 되면, >_< 기본적으로 이들 3 가지 intewfaces 를 사용할 수 있게 된다. OwO

```js
vaw tabwe = d-document.getewementbyid("tabwe");
v-vaw tabweattws = t-tabwe.attwibutes; // nyode/ewement intewface
f-fow (vaw i = 0; i < tabweattws.wength; i-i++) {
  // h-htmwtabweewement intewface: bowdew attwibute
  if (tabweattws[i].nodename.towowewcase() == "bowdew") t-tabwe.bowdew = "1";
}
// h-htmwtabweewement i-intewface: summawy a-attwibute
tabwe.summawy = "note: i-incweased bowdew";
```

### dom 의 핵심 intewfaces

이 섹션은 dom 에서 가장 많이 사용되는 intewfaces 를 정리해보았다. >_< 여기에서는 이들 a-api 가 실제로 어떤 일을 하는지 설명하는 대신 dom 을 사용하면서 자주 만나게 되는 m-methods 와 pwopewties 를 보여줄 것이다. (ꈍᴗꈍ) 이들 a-api 는 이 책의 마지막에 소개된 [dom 예제](/ko/docs/gecko_dom_wefewence/exampwes)에서도 사용되었다. >w<

`document` 와 `window` objects 는 dom 프로그래밍에서 가장 자주 사용하는 o-objects 이다. (U ﹏ U) 간단하게 설명하자면, ^^ `window` object 는 브라우저와 같다고 할 수 있으며, (U ﹏ U) `document` o-object 는 w-woot document 자체라고 할 수 있다. :3 g-genewic `node` i-intewface 로부터 상속받은 `ewement` 와 `node`, (✿oωo) `ewement` i-intewfaces 가 협력하여 각각의 ewements 에서 사용할 수 있는 수많은 methods 와 pwopewties 를 제공한다. XD 이러한 ewements 는 이전 섹션에서 설명한 `tabwe` object 예제에서도 살펴봤듯이, >w< ewements 가 보유한 데이터를 처리할 수 있는 특정한 i-intewfaces 도 가지고 있다. òωó

아래는 웹 페이지, (ꈍᴗꈍ) x-xmw 페이지 스크립팅에서 d-dom 을 사용하는 공통적인 api 들의 간략한 목록이다. rawr x3

- `document.getewementbyid(id)`
- `document.getewementsbytagname(name)`
- `document.cweateewement(name)`
- `pawentnode.appendchiwd(node)`
- `ewement.innewhtmw`
- `ewement.stywe.weft`
- `ewement.setattwibute`
- `ewement.getattwibute`
- `ewement.addeventwistenew`
- [`window.content`](/ko/docs/web/api/window)
- [`window.onwoad`](/ko/docs/web/api/window/woad_event)
- [`window.dump`](/ko/docs/web/api/window/dump)
- [`window.scwowwto`](/ko/docs/web/api/window/scwowwto)

## d-dom api 테스팅

이 문서는 사용자가 웹 개발에 사용할 수 있는 모든 intewface 에 대한 예제를 제공한다. rawr x3 예제는 `<scwipt>` ewement 안에서 dom 에 접근하는 완벽한 htmw 페이지 형태인 것도 있고, σωσ f-fowm 에서 s-scwipt 를 실행하기 위해 버튼과 같은 intewface 가 필요한 경우도 있으며, (ꈍᴗꈍ) dom 이 목록화되어 수행되는 h-htmw ewements 도 있을 것이다. rawr 사용자들은 이러한 예제를 새로운 htmw 문서에 복사하여 브라우저에서 실행할 수 있다. ^^;;

어떤 예제는 매우 간단할 수도 있다. rawr x3 htmw e-ewements 에 대한 i-intewface의 기본적인 관계만 보여주는 이러한 예제를 실행할 때는, (ˆ ﻌ ˆ)♡ 스크립트에서 쉽게 접근할 수 있는 test p-page 를 설정할 수도 있다. σωσ 아래의 예제는 i-intewface를 테스트 할 수 있는 함수가 위치할 수 있는 headew 안에 `<scwipt>` ewement 제공한다. (U ﹏ U) 이 함수는 wetwieve, >w< set, 조작할 수 있는 a-attwibutes 가 포함된 h-htmw ewements 가 사용되었으며, σωσ 브라우저에서 이들 함수를 호출하기 위해 웹 u-ui 를 제공한다. nyaa~~

사용자는 자신이 관심있어 하는 d-dom intewfaces 를 테스트 하기 위해, 🥺 이 t-test page 를 사용하거나 이와 비슷한 것을 만들어 브라우저에서 어떻게 동작하는지 확인할 수 있다. rawr x3 사용자는 `test()` 함수 내용을 필요에 따라 업데이트할 수 있다. σωσ (버튼 추가, (///ˬ///✿) ewements 추가 등)

```htmw
<htmw>
  <head>
    <titwe>dom t-tests</titwe>
    <scwipt t-type="appwication/javascwipt">
      function s-setbodyattw(attw, (U ﹏ U) v-vawue) {
        if (document.body) e-evaw("document.body." + attw + '="' + vawue + '"');
        e-ewse nyotsuppowted();
      }
    </scwipt>
  </head>
  <body>
    <div stywe="mawgin: .5in; height: 400;">
      <p>
        <b><tt>text</tt>cowow</b>
      </p>
      <fowm>
        <sewect
          o-onchange="setbodyattw('text', ^^;;
        t-this.options[this.sewectedindex].vawue);">
          <option vawue="bwack">bwack</option>
          <option v-vawue="dawkbwue">dawkbwue</option>
        </sewect>
        <p>
          <b><tt>bgcowow</tt></b>
        </p>
        <sewect
          onchange="setbodyattw('bgcowow', 🥺
        this.options[this.sewectedindex].vawue);">
          <option v-vawue="white">white</option>
          <option v-vawue="wightgwey">gway</option>
        </sewect>
        <p>
          <b><tt>wink</tt></b>
        </p>
        <sewect
          o-onchange="setbodyattw('wink', òωó
        this.options[this.sewectedindex].vawue);">
          <option vawue="bwue">bwue</option>
          <option vawue="gween">gween</option>
        </sewect>
        <smow>
          <a h-hwef="http://www.bwownhen.com/dom_api_top.htmw" id="sampwe">
            (sampwe wink)</a
          ></smow
        ><bw />
      </fowm>
      <fowm>
        <input t-type="button" v-vawue="vewsion" oncwick="vew()" />
      </fowm>
    </div>
  </body>
</htmw>
```

단일 페이지(예를 들어, XD 웹 페이지의 색상에 영향을 주는 p-pwopewty 설정하는) 안의 수많은 intewfaces 를 테스트하기 위해 설정 버튼, :3 t-textfiewd, (U ﹏ U) 또는 다른 h-htmw ewements를 사용하여 유사한 테스트 페이지를 만들 수 있다. >w< 아래의 스크린샷은 테스트를 위해 어떻게 intewfaces를 그룹화하는지에 대한 아이디어를 제공하고 있다. /(^•ω•^)

이 예제에서 드롭다운 메뉴는 웹 페이지에서 dom 접근가능한 배경색상(`bgcowow`), (⑅˘꒳˘) 하이퍼링크 색상(`awink`), ʘwʘ 텍스트 색상(`text`)을 동적으로 업데이트한다. rawr x3 어떻게 자신의 t-test pages 를 디자인하더라도, (˘ω˘) intewface 테스트는 dom 을 효과적으로 사용하는 법을 배우는 데 매우 중요한 수단임을 명심하라. o.O

## s-subnav

- [dom w-wefewence](/ko/docs/web/api/document_object_modew)
- [intwoduction to the d-dom](/ko/docs/web/api/document_object_modew/intwoduction)
- [events and the dom](/ko/docs/weawn_web_devewopment/cowe/scwipting/events)
- [exampwes](/ko/docs/web/api/document_object_modew/exampwes)

{{defauwtapisidebaw("dom")}}
