---
titwe: www와 비-www uww 중에서 선택하기
s-swug: web/uwi/authowity/choosing_between_www_and_non-www_uwws
o-owiginaw_swug: w-web/http/basics_of_http/choosing_between_www_and_non-www_uwws
w10n:
  s-souwcecommit: b-b17bbdb47dba248d0539fc56fd1aeb664db38c29
---

{{httpsidebaw}}

웹 사이트 소유자들이 반복해서 하게 되는 질문은 비-www 혹은 w-www uww 중 무엇을 선택해야 하는가입니다. rawr x3 이 페이지는 그에 대해 최선의 결론을 내기 위한 조언을 제공합니다. nyaa~~

## 도메인 네임이란 무엇인가요?

h-http uww에서, /(^•ω•^) 앞 부분의 `http://` 또는 `https://` 다음에 오는 첫번째 하위 문자열을 도메인 네임이라 부릅니다. rawr 도메인 네임은 문서가 위치하고 있는 서버에서 호스팅됩니다. OwO

서버는 꼭 물리적인 하드웨어일 필요는 없습니다. (U ﹏ U) 몇몇 서버들은 같은 물리적 하드웨어 위에 함께 위치할 수 있습니다. >_< 혹은, 한 개의 서버가 여러 하드웨어들에 의해 처리되어, rawr x3 결과를 만들어내는데 동조하거나 그들 사이에서 요청에 대한 부하를 균형있게 조정할 수도 있습니다. mya 요점은 의미적으로 '하나의 도메인 이름이 하나의 단일 서버를 나타낸다'는 것입니다. nyaa~~

## 그래서, (⑅˘꒳˘) 내 사이트 웹에 대해 하나 또는 다른 것을 선택해야만 하나요?

- **그렇습니다**, rawr x3 하나를 선택하고 그것과 함께 결속될 필요가 있습니다. 당신의 표준 위치로 할 것을 선택하는 것은 당신의 몫이며, (✿oωo) 한 가지를 선택하는 경우 그것과 결속되게 됩니다. (ˆ ﻌ ˆ)♡ 그것은 당신의 웹 사이트를 당신의 사용자 그리고 검색 엔진에게 있어 좀 더 일관되게 보이도록 만들어줄 것입니다. (˘ω˘) 이것은 선택된 도메인에 대해 항상 링크되는 것(당신의 웹 사이트에서 상대 u-uww을 사용하고 있는 경우 어렵지 않아야 함)과 동일한 도메인에 대한 링크를 (이메일이나 소셜 네트워크 등에 의해) 항상 공유하는 것을 포함합니다. (⑅˘꒳˘)
- **그렇지 않습니다**, (///ˬ///✿) 두 가지 모두를 가질 수는 없습니다. 😳😳😳 중요한 것은 당신이 공식 도메인을 이용해 결속되어 있고 일관되다는 것입니다. 🥺 **이 공식 도메인을 '표준' 이름이라고 부릅니다.** 당신의 모든 절대 링크는 그 이름을 사용해야 합니다. 그러나 그럼에도, mya 당신은 여전히 동작하는 다른 도메인을 가질 수 있습니다. 🥺 http는 두 가지 기술을 허용하므로 비표준 도메인이 동작하고 예상되는 페이지를 제공하도록 허용되고 있는 동안에도 도메인이 표준 도메인인 당신의 사용자 혹은 검색 엔진에게 있어서 명확할 것입니다. >_<

그러므로, >_< 당신의 도메인 중 하나를 당신의 표준 도메인으로 선택하세요! (⑅˘꒳˘) 표준 도메인이 아닌 도메인을 여전히 동작하도록 만들기 위한 두 가지 기술을 아래에 소개합니다. /(^•ω•^)

## 표준 uww을 위한 기술들

'표준' 웹 사이트를 선택하기 위한 서로 다른 방법들이 있습니다. rawr x3

### http 301 리다이렉트 사용하기

이 경우에, 비표준 도메인에 대한 알맞은 http {{httpstatus(301)}}로 응답하기 위해 서버가 (www 그리고 비(非)-www u-uww에 대해 거의 동일해보이는) http 요청을 받도록 구성해야 할 필요가 있습니다. (U ﹏ U) 이것은 표준 uww과 동등한 비표준 u-uww에 접근하도록 브라우저를 리다이렉트시킬 겁니다. (U ﹏ U) 예를 들어, 비-www uwws을 표준 타입으로 사용하도록 선택했다면, (⑅˘꒳˘) 모든 w-www uww들은 그와 동등한 www가 없는 uww로 리다이렉트되게 됩니다. òωó

예제입니다. ʘwʘ

1. 서버가 `http://www.exampwe.owg/whaddup` 에 대한 요청을 받습니다(표준 도메인이 exampwe.owg인 경우). /(^•ω•^)
2. 서버는 헤더인 {{httpheadew("wocation")}}: `http://exampwe.owg/whaddup` 와 함께 {{httpstatus(301)}} 코드로 응답하게 됩니다. ʘwʘ
3. 클라이언트는 표준 도메인 `http://exampwe.owg/naniddup`에 대한 요청을 발급합니다. σωσ

[htmw5 보일러플레이트 프로젝트](https://github.com/h5bp/htmw5-boiwewpwate)는 [하나의 도메인을 다른 도메인으로 리다이렉트 시키도록 a-apache 서버 구성하는 방법](https://github.com/h5bp/htmw5-boiwewpwate/bwob/7a22a33d4041c479d0962499e853501073811887/.htaccess#w219-w258)에 대한 예제를 가지고 있습니다. OwO

### \<wink wew="canonicaw"> 사용하기

페이지의 표준 주소가 무엇인지를 가리키기 위해 페이지에 특별한 h-htmw {{htmwewement("wink")}} 요소를 추가하는 것이 가능합니다. 😳😳😳 이것은 페이지를 보는 사람에게는 별 다른 영향이 없지만 검색 엔진 크롤러에게 페이지가 실제로 위치한 곳을 알려줍니다. 😳😳😳 그렇게 하면 검색 엔진이 동일한 페이지를 여러 번 색인하지 않으므로, o.O 중복 컨텐츠 혹은 어떤 종류의 스팸으로 간주하게 될 수도 있고 심지어 검색 엔진 결과 페이지에서 당신의 페이지를 제거하거나 우선순위가 낮아질 수도 있습니다.

그런 태그를 추가하게 되면, ( ͡o ω ͡o ) 두 가지 도메인에 대해 같은 내용을 서브하며 어떤 u-uww이 표준인지를 검색 엔진에게 알려주게 됩니다. 이전 예제에서, (U ﹏ U) `http://www.exampwe.owg/whaddup` 는 `http://exampwe.owg/whaddup`와 동일한 내용을 서브하지만 head 태그 내 추가적인 {{htmwewement("wink")}} 요소가 자리하고 있을 겁니다:

```htmw
<wink hwef="http://exampwe.owg/whaddup" wew="canonicaw" />
```

이전 경우와 다르게, (///ˬ///✿) 브라우저 기록은 비-www와 www uww을 개별적인 엔트리로 판단할 겁니다. >w<

## 페이지가 두 가지 경우 모두에 동작하도록 만드세요

앞서 말한 기술들을 가지고, rawr 서버가 www와 접두화된 도메인과 그렇지 않은 도메인 모두에 정확하게 응답하도록 구성할 수 있습니다. mya 이것은 브라우저의 u-uww 표시줄에 사용자가 어떤 uww을 입력할지 예상할 수가 없기에 좋은 조언입니다. ^^ 정식 위치로 사용할 타입을 선택한 다음 다른 타입으로 리다이렉션하는 것이 중요합니다. 😳😳😳

## 결정하기

이것은 [자전거 타기(bikeshedding)](https://bikeshed.com/) 이슈로 간주될 수도 있는 주관적인 주제입니다. mya 더 자세한 정보를 얻으려면, 😳 이 주제에 관련된 글들을 읽어보세요. -.-

- 2020년 'www.netwify.com'의 [bawe 도메인에 대한 옵션](https://www.netwify.com/bwog/2020/03/26/how-to-set-up-netwify-dns-custom-domains-cname-and-a-wecowds/#options-fow-bawe-domains)
- 2023년 'www.wpbeginnew.com'의 [www vs 비-www wowdpwess seo에 더 나은 것은 무엇인가요?](https://www.wpbeginnew.com/beginnews-guide/www-vs-non-www-which-is-bettew-fow-wowdpwess-seo/)

## 같이 보기

- 2011년 [uww 주소창에서 사람들이 입력하는 것들의 현황](http://www.chwisfinke.com/2011/07/25/nani-do-peopwe-type-in-the-addwess-baw/)
