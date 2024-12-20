---
title: www와 비-www URL 중에서 선택하기
slug: Web/URI/Authority/Choosing_between_www_and_non-www_URLs
original_slug: Web/HTTP/Basics_of_HTTP/Choosing_between_www_and_non-www_URLs
l10n:
  sourceCommit: b17bbdb47dba248d0539fc56fd1aeb664db38c29
---

{{HTTPSidebar}}

웹 사이트 소유자들이 반복해서 하게 되는 질문은 비-www 혹은 www URL 중 무엇을 선택해야 하는가입니다. 이 페이지는 그에 대해 최선의 결론을 내기 위한 조언을 제공합니다.

## 도메인 네임이란 무엇인가요?

HTTP URL에서, 앞 부분의 `http://` 또는 `https://` 다음에 오는 첫번째 하위 문자열을 도메인 네임이라 부릅니다. 도메인 네임은 문서가 위치하고 있는 서버에서 호스팅됩니다.

서버는 꼭 물리적인 하드웨어일 필요는 없습니다. 몇몇 서버들은 같은 물리적 하드웨어 위에 함께 위치할 수 있습니다. 혹은, 한 개의 서버가 여러 하드웨어들에 의해 처리되어, 결과를 만들어내는데 동조하거나 그들 사이에서 요청에 대한 부하를 균형있게 조정할 수도 있습니다. 요점은 의미적으로 '하나의 도메인 이름이 하나의 단일 서버를 나타낸다'는 것입니다.

## 그래서, 내 사이트 웹에 대해 하나 또는 다른 것을 선택해야만 하나요?

- **그렇습니다**, 하나를 선택하고 그것과 함께 결속될 필요가 있습니다. 당신의 표준 위치로 할 것을 선택하는 것은 당신의 몫이며, 한 가지를 선택하는 경우 그것과 결속되게 됩니다. 그것은 당신의 웹 사이트를 당신의 사용자 그리고 검색 엔진에게 있어 좀 더 일관되게 보이도록 만들어줄 것입니다. 이것은 선택된 도메인에 대해 항상 링크되는 것(당신의 웹 사이트에서 상대 URL을 사용하고 있는 경우 어렵지 않아야 함)과 동일한 도메인에 대한 링크를 (이메일이나 소셜 네트워크 등에 의해) 항상 공유하는 것을 포함합니다.
- **그렇지 않습니다**, 두 가지 모두를 가질 수는 없습니다. 중요한 것은 당신이 공식 도메인을 이용해 결속되어 있고 일관되다는 것입니다. **이 공식 도메인을 '표준' 이름이라고 부릅니다.** 당신의 모든 절대 링크는 그 이름을 사용해야 합니다. 그러나 그럼에도, 당신은 여전히 동작하는 다른 도메인을 가질 수 있습니다. HTTP는 두 가지 기술을 허용하므로 비표준 도메인이 동작하고 예상되는 페이지를 제공하도록 허용되고 있는 동안에도 도메인이 표준 도메인인 당신의 사용자 혹은 검색 엔진에게 있어서 명확할 것입니다.

그러므로, 당신의 도메인 중 하나를 당신의 표준 도메인으로 선택하세요! 표준 도메인이 아닌 도메인을 여전히 동작하도록 만들기 위한 두 가지 기술을 아래에 소개합니다.

## 표준 URL을 위한 기술들

'표준' 웹 사이트를 선택하기 위한 서로 다른 방법들이 있습니다.

### HTTP 301 리다이렉트 사용하기

이 경우에, 비표준 도메인에 대한 알맞은 HTTP {{HTTPStatus(301)}}로 응답하기 위해 서버가 (www 그리고 비(非)-www URL에 대해 거의 동일해보이는) HTTP 요청을 받도록 구성해야 할 필요가 있습니다. 이것은 표준 URL과 동등한 비표준 URL에 접근하도록 브라우저를 리다이렉트시킬 겁니다. 예를 들어, 비-www URLs을 표준 타입으로 사용하도록 선택했다면, 모든 www URL들은 그와 동등한 www가 없는 URL로 리다이렉트되게 됩니다.

예제입니다.

1. 서버가 `http://www.example.org/whaddup` 에 대한 요청을 받습니다(표준 도메인이 example.org인 경우).
2. 서버는 헤더인 {{HTTPHeader("Location")}}: `http://example.org/whaddup` 와 함께 {{HTTPStatus(301)}} 코드로 응답하게 됩니다.
3. 클라이언트는 표준 도메인 `http://example.org/whatddup`에 대한 요청을 발급합니다.

[HTML5 보일러플레이트 프로젝트](https://github.com/h5bp/html5-boilerplate)는 [하나의 도메인을 다른 도메인으로 리다이렉트 시키도록 Apache 서버 구성하는 방법](https://github.com/h5bp/html5-boilerplate/blob/7a22a33d4041c479d0962499e853501073811887/.htaccess#L219-L258)에 대한 예제를 가지고 있습니다.

### \<link rel="canonical"> 사용하기

페이지의 표준 주소가 무엇인지를 가리키기 위해 페이지에 특별한 HTML {{HTMLElement("link")}} 요소를 추가하는 것이 가능합니다. 이것은 페이지를 보는 사람에게는 별 다른 영향이 없지만 검색 엔진 크롤러에게 페이지가 실제로 위치한 곳을 알려줍니다. 그렇게 하면 검색 엔진이 동일한 페이지를 여러 번 색인하지 않으므로, 중복 컨텐츠 혹은 어떤 종류의 스팸으로 간주하게 될 수도 있고 심지어 검색 엔진 결과 페이지에서 당신의 페이지를 제거하거나 우선순위가 낮아질 수도 있습니다.

그런 태그를 추가하게 되면, 두 가지 도메인에 대해 같은 내용을 서브하며 어떤 URL이 표준인지를 검색 엔진에게 알려주게 됩니다. 이전 예제에서, `http://www.example.org/whaddup` 는 `http://example.org/whaddup`와 동일한 내용을 서브하지만 head 태그 내 추가적인 {{htmlelement("link")}} 요소가 자리하고 있을 겁니다:

```html
<link href="http://example.org/whaddup" rel="canonical" />
```

이전 경우와 다르게, 브라우저 기록은 비-www와 www URL을 개별적인 엔트리로 판단할 겁니다.

## 페이지가 두 가지 경우 모두에 동작하도록 만드세요

앞서 말한 기술들을 가지고, 서버가 www와 접두화된 도메인과 그렇지 않은 도메인 모두에 정확하게 응답하도록 구성할 수 있습니다. 이것은 브라우저의 URL 표시줄에 사용자가 어떤 URL을 입력할지 예상할 수가 없기에 좋은 조언입니다. 정식 위치로 사용할 타입을 선택한 다음 다른 타입으로 리다이렉션하는 것이 중요합니다.

## 결정하기

이것은 [자전거 타기(bikeshedding)](https://bikeshed.com/) 이슈로 간주될 수도 있는 주관적인 주제입니다. 더 자세한 정보를 얻으려면, 이 주제에 관련된 글들을 읽어보세요.

- 2020년 'www.netlify.com'의 [bare 도메인에 대한 옵션](https://www.netlify.com/blog/2020/03/26/how-to-set-up-netlify-dns-custom-domains-cname-and-a-records/#options-for-bare-domains)
- 2023년 'www.wpbeginner.com'의 [www vs 비-www WordPress SEO에 더 나은 것은 무엇인가요?](https://www.wpbeginner.com/beginners-guide/www-vs-non-www-which-is-better-for-wordpress-seo/)

## 같이 보기

- 2011년 [URL 주소창에서 사람들이 입력하는 것들의 현황](http://www.chrisfinke.com/2011/07/25/what-do-people-type-in-the-address-bar/)
