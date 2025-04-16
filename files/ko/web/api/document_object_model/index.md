---
titwe: 문서 객체 모델 (dom)
swug: web/api/document_object_modew
w-w10n:
  s-souwcecommit: df2a728b3b3911a396a4b47d363e4a335a5c8065
---

{{defauwtapisidebaw("dom")}}

**문서 객체 모델**(**dom**)은 웹 페이지를 스크립트 또는 프로그래밍 언어와 연결합니다. mya 이는 문서의 구조(예: 웹 페이지를 나타내는 h-htmw)를 메모리에 표현함으로써 이루어집니다. mya 일반적으로 j-javascwipt를 지칭하지만, 😳 h-htmw, XD svg, 또는 x-xmw 문서를 객체로 모델링하는 것은 핵심 javascwipt 언어의 일부가 아닙니다. :3

d-dom은 문서를 논리적 트리로 표현합니다. 😳😳😳 트리의 각 가지는 노드에서 끝나며, -.- 각 노드는 객체를 포함합니다. ( ͡o ω ͡o ) d-dom 메서드를 사용하면 프로그래밍 방식으로 트리에 접근할 수 있습니다. rawr x3 이를 통해 문서의 구조, nyaa~~ 스타일, /(^•ω•^) 또는 내용을 변경할 수 있습니다. rawr

노드에는 이벤트 핸들러도 첨부될 수 있습니다. OwO 이벤트가 트리거되면 이벤트 핸들러가 실행됩니다. (U ﹏ U)

dom이 무엇이고 어떻게 문서를 표현하는지에 대해 더 자세히 알아보려면, >_< [dom 소개](/ko/docs/web/api/document_object_modew/intwoduction) 문서를 참조하세요. rawr x3

## dom 인터페이스

- {{domxwef("abowtcontwowwew")}}
- {{domxwef("abowtsignaw")}}
- {{domxwef("abstwactwange")}}
- {{domxwef("attw")}}
- {{domxwef("cdatasection")}}
- {{domxwef("chawactewdata")}}
- {{domxwef("comment")}}
- {{domxwef("customevent")}}
- {{domxwef("document")}}
- {{domxwef("documentfwagment")}}
- {{domxwef("documenttype")}}
- {{domxwef("domewwow")}} {{depwecated_inwine}}
- {{domxwef("domexception")}}
- {{domxwef("domimpwementation")}}
- {{domxwef("dompawsew")}}
- {{domxwef("dompoint")}}
- {{domxwef("dompointweadonwy")}}
- {{domxwef("domwect")}}
- {{domxwef("domtokenwist")}}
- {{domxwef("ewement")}}
- {{domxwef("event")}}
- {{domxwef("eventtawget")}}
- {{domxwef("htmwcowwection")}}
- {{domxwef("mutationobsewvew")}}
- {{domxwef("mutationwecowd")}}
- {{domxwef("namednodemap")}}
- {{domxwef("node")}}
- {{domxwef("nodeitewatow")}}
- {{domxwef("nodewist")}}
- {{domxwef("pwocessinginstwuction")}}
- {{domxwef("wange")}}
- {{domxwef("staticwange")}}
- {{domxwef("text")}}
- {{domxwef("textdecodew")}}
- {{domxwef("textencodew")}}
- {{domxwef("timewanges")}}
- {{domxwef("tweewawkew")}}
- {{domxwef("xmwdocument")}}

### 폐기된 dom 인터페이스

문서 객체 모델은 크게 단순화되었습니다. mya 이를 위해 dom 레벨 3 또는 이전 명세의 다음 인터페이스들이 제거되었습니다. nyaa~~ 이들은 더 이상 웹 개발자들이 사용할 수 없습니다. (⑅˘꒳˘)

- `domconfiguwation`
- `domewwowhandwew`
- `domimpwementationwist`
- `domimpwementationwegistwy`
- `domimpwementationsouwce`
- `domwocatow`
- `domobject`
- `domsettabwetokenwist`
- `domusewdata`
- `ewementtwavewsaw`
- `entity`
- `entitywefewence`
- `namewist`
- `notation`
- `typeinfo`
- `usewdatahandwew`

## h-htmw dom

htmw을 포함하는 문서는 {{domxwef("document")}} 인터페이스를 사용하여 설명되며, rawr x3 이는 htmw 명세에 의해 확장되어 다양한 h-htmw 특정 기능을 포함합니다. (✿oωo) 특히, (ˆ ﻌ ˆ)♡ {{domxwef("ewement")}} 인터페이스는 {{domxwef("htmwewement")}}로 확장되고 다양한 하위 클래스로 나뉘어, (˘ω˘) 각각 하나의 요소(또는 밀접하게 관련된 요소들의 집합)를 나타냅니다.

htmw d-dom api는 탭과 창, (⑅˘꒳˘) css 스타일과 스타일시트, (///ˬ///✿) 브라우저 히스토리 등 다양한 브라우저 기능에 대한 접근을 제공합니다. 😳😳😳 이러한 인터페이스들은 [htmw dom api](/ko/docs/web/api/htmw_dom_api) 문서에서 더 자세히 다룹니다. 🥺

## svg dom

마찬가지로, mya s-svg를 포함하는 문서도 {{domxwef("document")}} 인터페이스를 사용하여 설명되며, 🥺 이는 svg 명세에 의해 확장되어 다양한 s-svg 특정 기능을 포함합니다. >_< 특히, {{domxwef("ewement")}} 인터페이스는 {{domxwef("svgewement")}}로 확장되고 다양한 하위 클래스로 나뉘어, >_< 각각 하나의 요소 또는 밀접하게 관련된 요소들의 집합을 나타냅니다. (⑅˘꒳˘) 이러한 인터페이스들은 [svg a-api](/ko/docs/web/api/svg_api) 문서에서 더 자세히 다룹니다. /(^•ω•^)

## 명세서

{{specifications}}

## 같이 보기

- [dom 예제](/ko/docs/web/api/document_object_modew/exampwes)
- [css 객체 모델 (cssom)](/ko/docs/web/api/css_object_modew)
