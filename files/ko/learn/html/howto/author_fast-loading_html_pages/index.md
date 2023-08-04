---
title: Tips for Authoring Fast-loading HTML Pages
slug: Learn/HTML/Howto/Author_fast-loading_HTML_pages
---

Summary: Learn common-sense tips for producing HTML pages which load quickly and provide visitor satisfaction. 여기에 나온 팁들은 상식과 실험에 바탕을 두고 있습니다. 만약 당신이 페이지 불러오기 성능을 향상시킬 수 있는 팁을 알고 있다면 이 글의 토론 페이지에 조언해 주시기 바랍니다.

최적화된 웹 페이지는 사이트 방문자들에게 즉각적인 응답을 해줄 뿐만 아니라, 웹 서버의 부담을 덜어주고 인터넷 연결의 부하를 줄여줍니다. 이것은 커다란 사이트나 뉴스 속보와 같은 특별한 상황에서 트래픽이 급격히 증가하는 사이트에 있어서 아주 중요합니다.

페이지 불러오기 성능을 최적화하는 것이 저대역폭 방문자를 위한 컨텐츠에만 해당하는 것은 아닙니다. 이것은 고대역폭 컨텐츠에도 똑같이 중요하며 고속 인터넷 사용자들에게도 상당한 성능 향상을 기대할 수 있습니다.

### Tips

#### 페이지 무게를 줄여라

페이지 무게는 지금까지 페이지 불러오기 성능의 가장 중요한 요소이다.

불필요한 공백, 주석을 없애고 인라인 스크립트와 CSS를 외부파일로 옮기면 페이지 구조의 변화를 최소화하면서 다운로드 성능을 향상시킬 수 있다

[HTML Tidy](http://tidy.sourceforge.net/)등의 도구를 사용, 바른 HTML 소스로부터 첫 공백과 여분의 빈라인을 자동으로 줄일 수 있다. 다른 도구는 재형식화하거나 긴 식별자를 짧은 버전으로 줄여 JavaScript를 압축할 수 있다.

#### 파일 수를 최소화하라

웹 페이지에서 참조하는 파일의 수를 줄이면 페이지를 다운로드하는데 필요한 HTTP 접속 횟수가 감소합니다.

브라우저의 캐시 설정에 따라서, 브라우저는 각각의 CSS와 JavaScript, 그림 파일에 대해서 마지막으로 다운로드한 이후로 해당 파일이 변경되었는지 확인하기 위해 `If-Modified-Since` 요청을 웹 서버로 보내게 됩니다.

웹 페이지에서 참조하는 파일의 수를 줄이면, 이러한 요청을 보내고 그에 해당하는 응답이 도착하는데 필요한 시간을 줄일 수 있습니다.

브라우저는 페이지를 표시하기 전에 각각의 CSS와 JavaScript 파일의 변경시간을 반드시 확인해야 합니다. 따라서 웹 페이지에서 참조하는 파일들에 대한 마지막 변경시간을 확인하는데 너무 많은 시간을 소비하면 웹 페이지의 초기 표시 시간이 오래 걸릴 수 있습니다.

#### 도메인 검색을 줄이라

각각의 도메인은 DNS 검색에 시간을 소비하기 때문에, CSS와 JavaScript 및 이미지를 참조하는데 사용되는 도메인 수를 줄이면 페이지를 불러오는 시간이 단축됩니다.

이것이 항상 실현가능한 것이 아닐지라도, 가능한한 최소한의 도메인을 사용하도록 주의해야 합니다.

#### 재사용되는 내용을 캐시하라

캐시가능한 내용이 적절한 만료시간으로 캐시되었는지 확인해야 합니다.

특히 `Last-Modified` 헤더에 신경써야 합니다. 이것은 페이지의 효율적인 캐싱을 가능케 합니다. 이것에 의해 브라우저가 읽어들이고자 하는 파일이 마지막으로 변경된 시간에 대한 정보가 전달됩니다. 정적인 페이지(예를 들면, `.html`, `.css`)는 대부분의 웹 서버가 파일 시스템에 저장된 마지막 변경시간을 토대로 자동적으로 `Last-Modified` 헤더를 추가합니다. 동적인 페이지(예를 들면, `.php`, `.aspx`)는 물론 불가능합니다.

그러므로, 특히 동적으로 생성되는 페이지들에 대한 이 부분의 연구가 중요합니다. 이것은 조금 복잡하지만, 정상적으로 캐시 불가능한 페이지들에 대한 페이지 요청을 대폭 줄일 수 있게 합니다.

추가 정보:

1. [RSS 해커들을 위한 HTTP 조건부 GET](http://fishbowl.pastiche.org/2002/10/21/http_conditional_get_for_rss_hackers)
2. [HTTP 304: Not Modified](http://annevankesteren.nl/archives/2005/05/http-304)
3. [On HTTP Last-Modified and ETag](http://www.cmlenz.net/blog/2005/05/on_http_lastmod.html)

#### 페이지 컴포넌트의 순서를 최적화

사용자가 페이지를 읽어들일 때 페이지의 내용 요소를 가장 먼저 다운로드하면 가장 빠른 응답시간을 얻을 수 있습니다.

페이지의 내용 요소는 페이지의 표시를 위해 필요한 모든 CSS 및 JavaScript와 함께 가장 먼저 다운로드되어야 합니다. 이러한 내용 요소들은 일반적으로 텍스트로 되어 있고 모뎀상에서 텍스트 압축효과를 얻을 수 있기에 사용자에게 가장 빠른 응답 시간을 제공합니다.

페이지를 모두 읽어들인 후에야 사용가능한 모든 DHTML 기능들은 초기에는 사용하지 못하게 설정되어 있어야 하며 페이지 불러오기가 끝난 후에만 사용가능해야 합니다. 이것은 페이지의 내용 요소를 먼저 읽어들인 다음에 DHTML JavaScript를 읽어들이게 하여 전체적인 페이지 불러오기 성능을 향상시킵니다.

#### inline script 수를 최소화

inline script는 페이지 구조를 바꿀 수 있다는 것을 파서가 가정해야 하므로 페이지 불러오기에 비용이 많이 들 수 있다. 일반적으로 inline script 사용을 줄이고 내용을 출력하기 위해 `document.write()`의 사용을 줄여 전체페이지의 불러오는 시간을 향상시킬 수 있다. `document.write()`에 기반한 오래된 방식 대신 현대의 W3C DOM방법을 사용하여 페이지 내용을 다루라.

#### 최신 CSS와 올바른 markup을 사용하라

최신 CSS는 markup의 양을 줄여주며, 레이아웃 측면에서 그림의 사용을 줄여줍니다. 또한 다양한 방법으로 텍스트를 나타내는 그림의 사용을 줄여줍니다. 텍스트를 나타내는 그림을 사용하면 텍스트와 CSS를 사용할 때보다 부하가 큽니다.

올바른 markup을 사용하는 것에는 추가적인 장점이 있습니다. 브라우저가 HTML을 처리할 때 "오류 정정"을 하지 않아도 될 뿐만 아니라, 웹 페이지를
_전처리(pre-process)_
할 수 있는 다른 도구들을 마음대로 사용할 수 있습니다. 예를 들면, [HTML Tidy](http://tidy.sourceforge.net/)는 웹 페이지상의 공백과 불필요한 종료 태그들을 삭제해 줍니다. 그러나 웹 페이지에 심각한 markup 오류가 있다면 이 도구는 사용할 수 없습니다.

#### 내용을 조각내라

table기반의 레이아웃을 `<div>`를 쓰거나 table을 작은 table로 나누면 전체 페이지 내용을 내려받지 않고 표시할 수 있다.

아래와 같이 깊게 중첩된 table 대신

```html
<table>
  <table>
    <table>
      ...
    </table>
  </table>
</table>
```

중첩되지 않은 table 또는 div를 쓰라

```html
<table>
  ...
</table>
<table>
  ...
</table>
<table>
  ...
</table>
```

#### 그림과 표의 크기를 명시하라

브라우저가 그림과 표의 크기를 바로 알아낼 수 있다면, 내용을 바꾸지 않고도 웹 페이지를 표시하는게 가능합니다. 이것은 페이지를 표시하는 속도를 빠르게 할 뿐만 아니라 페이지 불러오기가 끝났을 때 페이지의 배치가 바뀌는 것을 막아줍니다. 그런 이유로, 가능하면 그림의 `height`와 `width`가 명시되어야 합니다.

표는 CSS 선택자:속성 조합이다.

```css
table-layout: fixed;
```

그리고 `COL`과 `COLGROUP` 태그를 사용하여 열(column)의 넓이를 명시해야 합니다.

#### 사용자 에이전트의 요구사항을 적절하게 선택하라

웹 페이지의 디자인 향상을 위해서는 사용자 에이전트의 요구사항을 적절하게 선택해야 합니다. 모든 브라우저, 특히 저사양의 브라우저에서까지 웹 페이지의 내용이 픽셀 하나하나까지 완벽하게 표현되기를 원하지는 않습니까?

이상적으로, 기본적인 최소 요구사항은 관련된 표준을 지원하는 현대적인 브라우저를 기준으로 해야 합니다. 이것은 모든 플랫폼 상의 Netscape 7/Gecko 1.0.2+, Windows의 Internet Explorer 5.5+, Windows의 Opera 7+, Mac OS X의 Safari에 해당합니다.

그러나 여기에 나와있는 대부분의 팁들은 사용자 에이전트 요구사항과 관계 없이 모든 사용자 에이전트와 웹 페이지에 해당하는 일반적인 내용임을 알아두시기 바랍니다.

### 페이지 구조 예

- `{{htmlelement('html')}}`

  - `{{htmlelement('head')}}`

    - `{{htmlelement('link')}}`

      페이지의 표시를 위해 CSS 파일이 필요하다. 유지보수를 위해 관련되지 않은 CSS 파일을 분리하고 성능을 위해 파일 수를 최소화하라.

    - `{{htmlelement('script')}}`

      JavaScript 파일은 페이지를 불러들일 때 필요하지만 DHTML은 페이지 불러오기가 끝난 후에만 동작합니다.

      유지보수를 위해 관련되지 않은 JavaScript를 별도의 파일로 분리하고 성능을 위해 파일 수를 최소화하세요.

  - `{{htmlelement('body')}}`

    User visible page content in small chunks (`{{htmlelement('header')}}`/ `{{htmlelement('main')}}/` `{{htmlelement('table')}}`) that can be displayed without waiting for the full page to download.

    - `{{htmlelement('script')}}`

      DHTML을 위해 어떠한 스크립트라도 사용될 수 있습니다. 일반적으로 DHTML 스크립트는 페이지 불러오기가 완전히 끝나고 필요한 객체들이 모두 초기화된 후에만 동작합니다. 따라서 페이지 내용을 불러오기 전에 이러한 스크립트들을 먼저 읽어들일 필요가 없습니다. 오직 페이지 로딩시간을 증가시킬 뿐입니다.

      유지보수를 위해 관련되지 않은 JavaScript를 별도의 파일로 분리하고 성능을 위해 파일 수를 최소화하세요.

      만약 롤오버 효과를 위해 사용되는 그림이 있다면, 페이지 내용을 읽어들인 후에 그 그림을 미리 읽어들여야 합니다.

### 관련 링크

- 책: ["Speed Up Your Site" by Andy King](http://www.websiteoptimization.com/)
- [Site Optimization Tutorial](http://webmonkey.wired.com/webmonkey/design/site_building/tutorials/tutorial2.html) (WebMonkey)

### 원문 정보

- 저자: Bob Clary, Technology Evangelist, Netscape Communications
- 최종 갱신일: Published 04 Apr 2003
- 저작권 정보: Copyright © 2001-2003 Netscape. All rights reserved.
- 알림: 이 문서는 본래 DevEdge 사이트의 일부분이었습니다.
