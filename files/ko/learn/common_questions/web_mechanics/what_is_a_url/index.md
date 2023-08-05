---
title: URL이란?
slug: Learn/Common_questions/Web_mechanics/What_is_a_URL
l10n:
  sourceCommit: 8e2641ebe076ab89299c77a51ece882de4ba5efb
---

{{QuicklinksWithSubPages("Learn/Common_questions")}}

이 문서에서는 URL(Uniform Resource Locator)이 무엇이며 어떻게 구성되어 있는지 설명합니다.

<table>
  <tbody>
    <tr>
      <th scope="row">사전 지식</th>
      <td>
        먼저
        <a href="/ko/docs/Learn/Common_questions/Web_mechanics/How_does_the_Internet_work"
          >인터넷은 어떻게 동작하는 방법</a
        >,
        <a href="/ko/docs/Learn/Common_questions/Web_mechanics/What_is_a_web_server"
          >웹 서버</a
        >
        그리고
        <a href="/ko/docs/Learn/Common_questions/Web_mechanics/What_are_hyperlinks"
          >웹 링크 뒤에 있는 개념</a
        >을 알아야 합니다.
      </td>
    </tr>
    <tr>
      <th scope="row">목표</th>
      <td>URL이 무엇이며 웹에서 어떻게 작동하는지 배웁니다.</td>
    </tr>
  </tbody>
</table>

## 요약

{{Glossary("Hypertext", "하이퍼텍스트")}}와 {{Glossary("HTTP")}}에서 **_URL_**은 웹의 핵심 개념 중 하나입니다. URL은 웹에 게시된 리소스를 검색하기 위해 {{Glossary("Browser","브라우저")}}에서 사용하는 메커니즘입니다.

**URL**은 *Uniform Resource Locator*의 약자입니다. URL은 웹에서 주어진 고유 리소스 주소에 지나지 않습니다. 이론적으로 각각의 유효한 URL은 고유한 리소스를 가리킵니다. 이러한 리소스는 HTML 페이지, CSS 문서, 이미지 등이 될 수 있습니다. 실제로는 몇 가지 예외가 있으며 가장 일반적인 예외는 더 이상 존재하지 않거나 이동된 리소스를 가리키는 URL입니다. URL로 표시되는 리소스와 URL 자체는 웹 서버에서 처리되므로 해당 리소스와 관련 URL을 신중하게 관리하는 것은 웹 서버 소유자에게 달려 있습니다.

## 기본: URL 분석

다음은 URL의 몇 가지 예시입니다.

```
https://developer.mozilla.org
https://developer.mozilla.org/ko/docs/Learn/
https://developer.mozilla.org/en-US/search?q=URL
```

해당 URL 중 하나를 브라우저의 주소창에 입력하면 연결된 페이지(리소스)를 로드할 수 있습니다.

URL은 여러 부분으로 구성되며 일부는 필수이고 일부는 선택 사항입니다. 가장 중요한 부분은 아래 URL에 강조표시되어 있습니다(자세한 내용은 다음 섹션에서 다룸).

![전체 URL](mdn-url-all.png)

> **참고:** URL은 일반 우편 주소와 비슷하다고 생각할 수 있습니다. _scheme_(스키마)는 사용하려는 우편 서비스, _domain name_(도메인 이름)은 시 또는 마을, _port_(포트)는 우편 번호, _path_(경로)는 메일이 배달되어야 하는 건물, _parameters_(매개변수)는 건물의 아파트 번호와 같은 추가 정보, 마지막으로 _anchor_(앵커)는 메일을 보낸 실제 사람을 나타냅니다.

> **참고:** URL과 관련하여 [몇 가지 추가 부분과 추가 규칙](https://en.wikipedia.org/wiki/Uniform_Resource_Locator)이 있지만 일반 사용자 또는 웹 개발자와는 관련이 없습니다. 이건 걱정하지 않아도 괜찮습니다. 완전히 작동하는 URL을 구축하고 사용하기 위해 이것을 알 필요는 없습니다.

## 스키마

![스키마](mdn-url-protocol@x2_update.png)

URL의 첫 번째 부분은 브라우저가 리소스를 요청하는 데 사용해야 하는 프로토콜을 나타냅니다.(프로토콜은 컴퓨터 네트워크에서 데이터를 교환하거나 전송하기 위한 설정 방법입니다). 일반적으로 웹사이트의 경우 프로토콜은 HTTPS 또는 HTTP(보안되지 않은 버전)입니다. 웹 페이지의 주소를 지정하려면 이 두 가지 중 하나가 필요하지만 브라우저는 `mailto:` (메일 클라이언트를 열기 위해)와 같은 다른 체계를 처리하는 방법도 알고 있으므로 다른 프로토콜이 보이더라도 놀라지 마세요.

## 권한

![권한](mdn-url-authority.png)

그 다음에는 권한(authority)이 뒤따르며 문자 패턴 `://`에 의해 스키마와 구분됩니다. 만약 존재한다면 권한에는 콜론으로 구분된 도메인(예: `www.example.com`)과 포트(`80`)가 모두 포함됩니다.

- 도메인은 요청하는 웹 서버를 나타냅니다. 도메인은 일반적으로 [도메인 이름](/ko/docs/Learn/Common_questions/Web_mechanics/What_is_a_domain_name)이지만 IP 주소도 사용될 수 있습니다. (그러나 이것은 훨씬 불편하기 때문에 자주 사용하지 않습니다.)
- 포트는 웹 서버의 리소스에 접근하는 데 사용되는 기술적인 "게이트"를 나타냅니다. 웹 서버가 리소스에 대한 액세스 권한을 부여하기 위해 HTTP 프로토콜의 표준 포트(HTTP의 경우 80, HTTPS의 경우 443)를 사용하는 경우엔 일반적으로 생략합니다. 그렇지 않으면 필수입니다.

> **참고:** 스키마와 권한 사이의 구분 기호는 `://`입니다. 콜론은 스키마를 URL의 다음 부분과 구분하고 `//`는 URL의 다음 부분이 권한임을 나타냅니다.
>
> 권한을 사용하지 않는 URL의 한 예시는 메일 클라이언트(`mailto:foobar`)입니다. 스키마는 포함하지만 권한 구성 요소는 사용하지 않습니다. 따라서 콜론 뒤에 두 개의 슬래시가 오지 않고 콜론은 스키마와 메일 주소 사이의 구분 기호 역할만 합니다.

## 리소스 경로

![파일 경로](mdn-url-path@x2.png)

`/path/to/myfile.html`은 웹 서버에 있는 리소스의 경로입니다. 웹 초기에는 이와 같은 경로가 웹 서버의 실제 파일 위치를 나타냈습니다. 요즘에는 대부분 물리적 실체가 없는 웹 서버가 추상적으로 처리합니다.

## 매개변수

![매개변수](mdn-url-parameters@x2.png)

`?key1=value1&key2=value2`는 웹 서버에 제공되는 추가 매개변수입니다. 이러한 매개변수는 `&` 기호로 구분된 키/값 쌍 목록입니다. 웹 서버는 리소스를 반환하기 전에 이러한 매개변수를 사용하여 추가 작업을 수행할 수 있습니다. 각 웹 서버에는 매개변수에 관한 고유한 규칙이 있으며 특정 웹 서버가 매개변수를 처리하는지 알 수 있는 신뢰할 수 있는 유일한 방법은 웹 서버 소유자에게 물어보는 것입니다.

## 앵커

![앵커](mdn-url-anchor@x2.png)

`#SomewhereInTheDocument`는 리소스 자체의 어떤 부분에 대한 앵커입니다. 앵커는 리소스 내부에서 일종의 "책갈피" 역할을 하며, 브라우저에 해당 "책갈피" 지점의 콘텐츠를 표시하도록 지시합니다. 예를 들어 HTML 문서에서는 브라우저가 앵커가 정의된 지점으로 스크롤합니다. 비디오 또는 오디오 문서에서 브라우저는 앵커가 나타내는 시간으로 이동하려고 시도합니다. **프래그먼트 식별자**라고도 하는 `#` 뒤의 부분은 요청과 함께 서버로 전송되지 않는다는 점은 주목할 가치가 있습니다.

## URL을 사용하는 법

어떤 URL이든 브라우저의 주소 표시줄에 직접 입력면 리소스에 액세스할 수 있습니다. 그러나 이것은 빙산의 일각에 불과합니다!

[다음에 설명할](/ko/docs/Learn/HTML/Introduction_to_HTML) HTML 언어는 URL을 광범위하게 사용합니다.

- {{HTMLElement("a")}} 요소를 사용하여 다른 문서에 대한 링크를 생성합니다.
- {{HTMLElement("link")}} 또는 {{HTMLElement("script")}}와 같은 다양한 요소를 통해 문서와 관련 리소스를 연결합니다.
- 이미지({{HTMLElement("img")}} 요소), 비디오({{HTMLElement("video")}} 요소), 사운드 및 음악({{HTMLElement("audio")}} 요소) 등과 같은 미디어를 표시합니다.
- {{HTMLElement("iframe")}} 요소로 다른 HTML 문서를 표시합니다.

> **참고:** 페이지의 일부로 로드할 리소스의 URL을 지정할 땐(예: `<script>`, `<audio>`, `<img>`, `<video>`등을 사용할 때) 몇 가지 예외가 있지만(주목할 만한 것 중 하나는 `data:`입니다. [데이터 URL](/ko/docs/Web/HTTP/Basics_of_HTTP/Data_URLs) 참조) 일반적으로 HTTP와 HTTPS URL만 사용해야 합니다. 예를 들어 FTP 사용은 안전하지 않으며 최신 브라우저에서 더 이상 지원되지 않습니다.

{{Glossary("CSS")}} 또는 {{Glossary("JavaScript")}}와 같은 다른 기술은 URL을 광범위하게 사용하며 이것은 실제로 웹의 핵심입니다.

## 절대 URL vs 상대 URL

앞서 본 URL을 절대 URL이라고 하지만 상대 URL이라는 것도 있습니다. [URL 표준](https://url.spec.whatwg.org/#absolute-url-string)은 [URL 객체](https://url.spec.whatwg.org/#url)(URL의 메모리 내 표현)와 구별하기 위해 [절대 URL 문자열](https://url.spec.whatwg.org/#absolute-url-string)과 [상대 URL 문자열](https://url.spec.whatwg.org/#relative-url-string)이라는 용어를 사용하지만 둘 다 정의합니다.

URL의 맥락에서 절대와 상대의 차이가 무엇을 의미하는지 살펴보겠습니다.

URL의 필수 부분은 URL이 사용되는 컨텍스트에 따라 크게 달라집니다. 브라우저의 주소 표시줄에서 URL에는 아무 맥락이 없으므로 위에서 본 것과 같은 전체(또는 절대) URL을 제공해야 합니다. 프로토콜(브라우저는 기본적으로 HTTP를 사용함)이나 포트(대상 웹 서버가 비정상적인 포트를 사용하는 경우에만 필요함)를 포함할 필요는 없지만 URL의 다른 모든 부분은 필요합니다.

URL이 HTML 페이지와 같은 문서 내에서 사용되는 경우, 상황이 약간 다릅니다. 브라우저에는 이미 문서 고유의 URL이 있기 때문에 이 정보를 사용하여 해당 문서 내에서 사용할 수 있는 URL의 누락된 부분을 채울 수 있습니다. URL의 경로 부분만 보면 절대 URL과 상대 URL을 구별할 수 있습니다. URL의 경로 부분이 "`/`" 문자로 시작하는 경우 브라우저는 현재 문서에서 제공하는 맥락을 참조하지 않고 서버의 최상위 루트에서 해당 리소스를 가져옵니다.

명확히 이해하기 위해 몇 가지 예를 살펴보겠습니다.

### 절대 URL의 예

<table>
  <tbody>
    <tr>
      <td>전체 URL(앞서 사용한 것과 동일)</td>
      <td><pre>https://developer.mozilla.org/ko/docs/Learn</pre></td>
    </tr>
    <tr>
      <td>암시적 프로토콜</td>
      <td>
        <pre>//developer.mozilla.org/ko/docs/Learn</pre>
        <p>
          이 경우 브라우저는 해당 URL을 호스팅하는 문서를 로드하는 데 사용된 것과 동일한 프로토콜로 해당 URL을 호출합니다.
        </p>
      </td>
    </tr>
    <tr>
      <td>암시적 도메인 이름</td>
      <td>
        <pre>/ko/docs/Learn</pre>
        <p>
          HTML 문서 내 절대 URL의 가장 일반적인 사용 사례입니다. 브라우저는 해당 URL을 호스팅하는 문서를 로드하는 데 사용된 것과 동일한 프로토콜과 동일한 도메인 이름을 사용합니다. <strong>참고:</strong> 프로토콜도 생략하지 않고 도메인 이름만 생략할 수 없습니다.
        </p>
      </td>
    </tr>
  </tbody>
</table>

### 상대 URL의 예

다음 예제를 더 잘 이해하기 위해 다음 URL에 있는 문서 내에서 URL이 호출된다고 가정해 보겠습니다. `https://developer.mozilla.org/ko/docs/Learn`

<table>
  <tbody>
    <tr>
      <td>하위 리소스</td>
      <td>
        <pre>Skills/Infrastructure/Understanding_URLs</pre>
        <p>
          URL이 <code>/</code>로 시작하지 않기 때문에 브라우저는 현재 리소스가 포함된 하위 디렉터리에서 문서를 찾으려고 시도합니다. 따라서 이 예시에서는 https://developer.mozilla.org/ko/docs/Learn/Skills/Infrastructure/Understanding_URLs URL에 도달하려고 합니다.
        </p>
      </td>
    </tr>
    <tr>
      <td>디렉터리 트리로 돌아가기</td>
      <td>
        <pre>../CSS/display</pre>
        <p>
          이 경우 UNIX 파일 시스템 세계에서 가져온 <code>../</code> 작성 규칙을 사용하여 브라우저에 한 디렉토리에서 위로 이동하고 싶다고 알립니다. 여기서는 https://developer.mozilla.org/ko/docs/Learn/../CSS/display URL에 도달하려고 합고, https://developer.mozilla.org/ko/docs/CSS/display으로 단순화될 수 있습니다.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## 시맨틱 URL

매우 기술적인 특징에도 불구하고 URL은 사람이 읽을 수 있는 웹 사이트 진입점을 나타냅니다. 기억할 수 있으며 누구나 브라우저의 주소 표시줄에 입력할 수 있습니다. 사람은 웹의 핵심이므로 시맨틱 URL이라고 하는 것을 구축하는 것이 모범 사례로 간주됩니다. [시맨틱 URL](https://en.wikipedia.org/wiki/Semantic_URL)은 기술적 노하우와 상관없이 누구나 이해할 수 있는 고유의 의미를 가진 단어를 사용합니다.

언어 의미론은 물론 컴퓨터와 관련이 없습니다. 임의 문자로 이루어진 URL을 자주 보셨을 것입니다. 그러나 사람이 읽을 수 있는 URL을 만들면 많은 이점이 있습니다.

- URL을 쉽게 조작할 수 있습니다.
- 사용자가 어디에 있는지, 무엇을 하고 있는지, 웹에서 무엇을 읽거나 상호 작용하는지에 대해 사용자에게 명확하게 설명합니다.
- 일부 검색 엔진은 이러한 의미 체계를 사용하여 관련 페이지의 분류를 개선할 수 있습니다.

## 같이 보기

[데이터 URL](/ko/docs/Web/HTTP/Basics_of_HTTP/Data_URLs): `data:` 스키마가 접두사로 붙은 URL은 콘텐츠 작성자가 문서에 작은 파일을 인라인으로 포함할 수 있도록 합니다.
