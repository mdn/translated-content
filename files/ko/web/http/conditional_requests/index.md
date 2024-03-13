---
title: HTTP 조건부 요청
slug: Web/HTTP/Conditional_requests
---

{{HTTPSidebar}}

영향을 받는 리소스들을 _검사기_ 값을 이용해 비교함으로써, HTTP는, 성공인 경우라도, 요청의 결과가 변경될 수 있는 *조건부 요청*의 컨셉을 가지고 있습니다. 그런 요청들은 캐시 컨텐츠와 쓸모없는 컨트롤 회피를 검증하고, 다운로드를 이어서 하거나 서버 상의 문서를 업로드 또는 수정할 때 수정된 내용을 잃지 않도록 할 때처럼, 문서의 무결성을 확증하는데 유용할 수 있습니다.

## 원칙

HTTP 조건부 요청은 특정 헤더 값에 의존하여 기존과는 다르게 실행되는 요청입니다. 이 헤더들은 전제 조건을 정의하고 있으며 요청의 결과는 그 전제 조건이 일치하는지 아닌지에 따라 달라질 것입니다.

그런 다른 동작들은 요청 메서드 그리고 전제 조건을 위해 사용되는 헤더 집합에 의해 정의됩니다:

- 보통 문서를 가져오려고 하는 {{HTTPMethod("GET")}}와 같은 {{glossary("safe")}} 메서드들의 경우, 오직 연관되어 있는 경우에 조건부 요청이 회신하는데 사용될 수 있으므로 대역폭을 아끼게 됩니다.
- 보통 문서를 업로드하는 {{HTTPMethod("PUT")}}와 같은 {{glossary("safe", "unsafe")}} 메서드들의 경우, 그 요청의 원본 문서가 서버에 저장되어 있는 것과 동일한 경우에만 조건부 요청이 문서 업로드에 사용될 수 있습니다.

## 검사기

모든 조건부 요청들은 서버 상에 저장되어 있는 리소스가 특정 버전과 일치하는지를 검사하려고 합니다. 이를 이루기 위해, 조건부 요청은 리소스의 버전을 명시할 필요가 있습니다. 전체 리소스를 바이트 대 바이트로 비교하는 것은 불가능하므로(그리고 항상 그러길 원하는 것은 아닐테니!), 요청은 버전을 뜻하는 값을 함께 전송합니다: 그런 값들을 *검사기*라고 부르며 다음의 두 종류가 존재합니다:

- _last-modified_ 날짜로, 문서의 최종 수정 일자를 말합니다.
- _entity tag_ 혹은 *etag*라고 부르는 각 버전을 고유하게 나타내는 읽을 수 없는 문자열이 있습니다.

동일 리소스의 버전 비교는 약간 교모합니다: 컨텍스트에 의존하여 두 종류의 동질성 검사를 합니다. 바이트 대 바이트의 동일성을 원한다면 *강한 검사기*가 사용되는데, 예를 들어 다운로드를 이어할 때 사용됩니다. 사용자 에이전트가 두 리소스가 동일한 컨텐츠를 가지고 있는지만 알아내면 되는 경우에는 *약한 검사기*가 사용되는데, (다른 광고, 혹은 다른 날짜의 푸터와 같은) 덜 중요한 차이가 나는 경우에도 해당됩니다.

검사의 종류는 사용되는 검사기에 따라 달라집니다; {{HTTPHeader("Last-Modified")}}와 {{HTTPHeader("ETag")}} 모두 서버 상에서 검사기를 구현하는 복잡도가 매우 다양함에도 불구하고 검사의 두 종류를 모두 지원합니다. HTTP는 기본적으로 강한 검사를 사용하며, 약한 검사기가 사용될 수 있는 경우에는 이를 명시합니다.

### 강한 검사

강한 검사하는 리소스가 비교하려는 다른 리소스와 바이트 대 바이트로 동일한지를 보장하는데 그 특징이 있습니다. 이것은 조건부 헤더에 대해서 의무적이며, 다른 헤더들에 대해서는 기본값입니다. 강한 검사는 매우 엄격하고 서버 레벨에서 보장하기는 매우 어려울 수도 있으나, 때로는 성능의 손실을 감수하더라도 어떤 경우에도 데이터 무손실을 보장합니다.

{{HTTPHeader("Last-Modified")}}를 이용해 강력한 검사를 위한 유일한 식별자를 갖는 것은 꽤 어렵습니다. 종종 이것은 리소스의 MD5 해시(혹은 유도물)를 가지고 {{HTTPHeader("ETag")}}를 사용하여 이루어집니다.

### 약한 검사

약한 검사는 문서의 내용이 유사한 경우 두 문서의 버전이 동일하다고 간주하는데에 강한 검사와의 차이가 있습니다. 예를 들어, 기존의 페이지와 푸터 내의 날짜 혹은 광고만 다른 페이지가 있다고 가정할 때, 그 페이지는 강한 검사에서는 다르다고 판단할 수 있지만, 약한 검사 내에서는 기존의 페이지와 동일하다고 간주될 수 있습니다. 약한 검사를 만들어내는 etag 체계를 세우는 것은 페이지의 다른 요소들의 중요성 인지를 끌어들이는 순간부터 복잡해질 수 있으나, 그것은 캐싱 성능을 최적화하는데 매우 유용할 것입니다.

## 조건부 헤더

조건부 헤더라고 불리는, 몇몇 HTTP 헤더들은 조건부 요청을 이끌어 냅니다. 그들은 다음과 같습니다:

- {{HTTPHeader("If-Match")}}
  - : 원격지 리소스의 {{HTTPHeader("ETag")}}가 이 헤더에 나열된 것과 일치한다면 성공입니다. 기본적으로, etag에 `'W/'`가 접두사로 붙지 않았다면, 강한 검사가 실행될 것입니다.
- {{HTTPHeader("If-None-Match")}}
  - : 원격지 리소스의 {{HTTPHeader("ETag")}}가 이 헤더에 나열된 것들과 일치하는 것이 없다면 성공입니다. 기본적으로, etag에 `'W/'`가 접두사로 붙지 않았다면, 강한 검사가 실행될 것입니다.
- {{HTTPHeader("If-Modified-Since")}}
  - : 원격지의 리소스의 {{HTTPHeader("Last-Modified")}} 날짜가 이 헤더 내에 주어진 것보다 좀 더 최근인 경우 성공입니다.
- {{HTTPHeader("If-Unmodified-Since")}}
  - : 원격지 리소스의 {{HTTPHeader("Last-Modified")}}가 이 헤더에 주어진 것보다 더 오래됐거나 같다면 성공입니다.
- {{HTTPHeader("If-Range")}}
  - : {{HTTPHeader("If-Match")}} 혹은 {{HTTPHeader("If-Unmodified-Since")}}와 유사하지만, 하나의 단일 etag 혹은 하나의 날짜만을 가질 수 있습니다. 만약 실패한다면, 범위 요청이 실패하고, {{HTTPStatus("206")}} `Partial Content` 응답 대신에, {{HTTPStatus("200")}} `OK`가 완전한 리소스와 함께 전송될 것입니다.

## 유스 케이스

### 캐시 갱신

조건부 요청의 가장 일반적인 유스 케이스는 캐시를 갱신하는 것입니다. 비어 있는 캐시를 가지고 있거나 혹은 캐시를 가지고 있지 않은 경우, 요청된 리소스는 {{HTTPStatus("200")}} `OK`의 상태로 회신됩니다.

![The request issued when the cache is empty triggers the resource to be downloaded, with both validator value sent as headers. The cache is then filled.](cache1.png)

리소스와 함께, 검사기가 헤더 내에 전송됩니다. 예를 들어, {{HTTPHeader("Last-Modified")}}와 {{HTTPHeader("ETag")}}가 전송되지만, 그들 중 하나만 전송될 수도 있습니다. 이 검사기들은 (모든 헤더처럼) 해당 리소스와 함께 캐시되며 캐시가 더 이상 신선하지 않게 됐을 때 조건부 요청을 만들어 내는데 사용될 것입니다.

캐시가 신선한 동안에는, 어떤 요청도 결코 발급되지 않습니다. 그러나 신선하지 않게 된다면, 대부분 {{HTTPHeader("Cache-Control")}} 헤더에 의해 제어되며, 클라이언트는 캐시된 값을 직접 사용하지 않으며 {{HTTPHeader("If-Modified-Since")}}와 {{HTTPHeader("If-Match")}} 헤더의 파라메터로써 사용되는 검사기 값을 이용해 *조건부 요청*을 전송하게 됩니다.

리소스가 변경되지 않았다면, 서버는 {{HTTPStatus("304")}} `Not Modified` 응답을 회신하게 되는데, 이는 캐시를 다시 신선한 것으로 만들어주며 클라이언트는 그 캐시된 리소스를 사용하게 됩니다. 비록 어떤 리소스를 소비하는 응답/요청 라운드 트립이 있다고 하더라도, 연결을 통해 다시 전체 리소스를 전송하는 것보다는 더 효율적입니다.

![With a stale cache, the conditional request is sent. The server can determine if the resource changed, and, as in this case, decide not to send it again as it is the same.](httpcache2.png)

리소스가 변경되었다면, 요청이 조건부가 아니었고 클라이언트가 이 새로운 리소스를 사용하는(그리고 그것을 캐시하는) 경우처럼, 서버는 리소스의 새로운 버전과 함께, {{HTTPStatus("200")}} `OK` 응답을 회신합니다.

![In the case where the resource was changed, it is sent back as if the request wasn't conditional.](httpcache3.png)

서버 측에서 검사기를 설정하는 것외에도, 이 메커니즘은 투명합니다: 모든 브라우저가 캐시를 관리하고 있으며 그런 조건부 요청을 웹 개발자가 해야할 특별한 조치없이 보내게 됩니다.

### 부분 다운로드의 통합

파일들의 부분적인 다운로드는 이전 동작을 계속하게 이어주는 HTTP의 기능으로, 이미 받아놓은 정보를 유지함으로써 대역폭과 시간을 절약해줍니다.

![A download has been stopped and only partial content has been retrieved.](httpresume1.png)

부분적인 다운로드를 지원하는 서버는 {{HTTPHeader("Accept-Ranges")}} 헤더를 보냄으로써 이를 알립니다. 그렇게 되면, 클라이언트는 아직 전송받지 못한 범위와 함께 {{HTTPHeader("Ranges")}}을 전송하여 다운로드를 이어나갈 수 있습니다.

![The client resumes the requests by indicating the range he needs and preconditions checking the validators of the partially obtained request.](httpresume2.png)

이 원칙은 간단한데, 한 가지 잠재적인 문제점이 있습니다: 다운로드된 리소스가 두 개의 다운로드 사이에 수정될 경우, 수신받던 범위는 리소스의 두 개의 서로 다른 버전과 상응하게 될 것이며 최종적인 문서는 오염되게 될 것입니다.

이것은 방지하기 위해, 조건부 요청이 사용됩니다. 범위에 대해, 이를 할 수 있는 두 가지 방법이 존재합니다. 좀 더 유연한 방법은 {{HTTPHeader("If-Modified-Since")}}과 {{HTTPHeader("If-Match")}}을 사용하는 것이며 서버는 전제 조건이 실패할 경우 오류를 반환하게 됩니다; 그러면 클라이언트는 다운로드를 처음부터 다시 시작하게 되는 것이죠.

![When the partially downloaded resource has been modified, the preconditions will fail and the resource will have to be downloaded again completely.](httpresume3.png)

이 방법이 동작하긴 하지만, 문서가 변경된 경우 추가적인 응답/요청 교환을 필요로 합니다. 이것은 성능을 감소시키는데 HTTP는 이것을 피하기 위한 특별한 헤더를 가지고 있습니다: 바로 {{HTTPHeader("If-Range")}}이죠.

![The If-Range headers allows the server to directly send back the complete resource if it has been modified, no need to send a 412 error and wait for the client to re-initiate the download.](httpresume4.png)

이 해결책이 좀 더 효과적이긴 한데 약간은 덜 유연하여(오로지 하나의 etag만이 조건 내에서 사용될 수 있습니다), 추가적인 유연성이 필요한 경우가 아주 드물게 있기도 합니다.

### 최적화된 잠금으로 업데이트 손실 문제 피하기

웹 애플리케이션에서 일반적인 동작은 원격 문서를 *갱신*하는 것입니다. 이것은 어떤 파일 시스템 혹은 소스 제어 애플리케이션에서든 매우 흔한 일인데, 원격 리소스 저장을 허용하는 어떤 애플리케이션이든 그러한 메커니즘을 필요로 합니다. 유사하게, 위키나 다른 CMS와 같은 일반적인 웹 사이트들도 그런 요구사항을 지니고 있습니다.

{{HTTPMethod("PUT")}} 메서드를 이용해 당신은 이러한 것을 구현할 수 있습니다. 먼저 클라이언트는 원본 파일을 읽어들인 후 그것을 수정하고 최종적으로 서버로 수정된 파일을 내보냅니다.

![Updating a file with a PUT is very simple when concurrency is not involved.](httplock1.png)

불행하게도, 계정의 동시실행 내로 들어가자마자 약간 예상치 못한 결과를 맞이하게 될 겁니다. 하나의 클라이언트가 리소스의 새로운 복사본을 지역적으로 수정하고 있는 동안에도, 두번째 클라이언트가 동일한 리소스를 내려받고 자신의 영역 내에서 동일한 작업을 할 수 있습니다. 그렇게 되면 매우 유감스러운 일이 발생하게 됩니다: 그들이 다시 커밋하게 됐을 때, 전송할 첫번째 클라이언트의 수정본은 다음의 전송에 의해 폐기되는데, 이는 두번째 클라이언트가 새로운 변경 사항을 알고 있지 못하기 때문입니다. 어떤 것이 받아들여질지에 대한 결정은 다른 쪽에게 알려지지 않겠지만, 어떤 클라이언트의 변경 사항이 유지될 지는 그들이 커밋하는 시점, 클라이언트 그리고 서버의 성능에 의해서도 달리지며, 클라이언트에서 문서를 수정하는 속도에 의해서도 달라지게 될 겁니다: 받아들여진 클라이언트의 변경 사항으로 모두 변경될 것입니다. 이것을 {{glossary("경쟁 상태")}}라고 하며 감지하고 디버깅하기 어려운 불확실한 동작을 유발합니다.

![When several clients update the same resource in parallel, we are facing a race condition: the slowest win, and the others don't even know they lost. Problematic!](httplock2.png)

두 클라이언트 중 하나를 불편하게 만들지 않고는 이를 해결할 수 있는 방법은 없습니다. 그러나 업데이트 손실과 경쟁 상태는 피하게 됩니다: 우리는 예측 가능한 결과와 클라이언트의 변경 사항이 거절된 경우 클라이언트가 그것을 알 수 있길 원합니다.

조건부 요청은 (대부분의 위키 혹은 소스 제어 시스템에 의해 사용되는) *최적화 잠금 알고리즘*을 구현할 수 있도록 합니다. 이런 아이디어는 모든 클라이언트들이 리소스의 복사본들을 갖고 로컬에서 그것을 수정하며 첫번째 클라이언트가 그 수정된 내용을 성공적으로 제출하고 나서 이제는 이전 버전이 된 리소스가 거절되도록 하여 모든 업데이트가 순차적으로 이루어질 수 있도록 하여 동시성을 제어할 수 있도록 해줍니다.

![Conditional requests allow to implement optimistic locking: now the quickest wins, and the others get an error.](httplock3.png)

이것은 {{HTTPHeader("If-Match")}} 혹은 {{HTTPHeader("If-Unmodified-Since")}} 헤더를 사용해 구현하게 됩니다. etag가 원본 파일과 일치하지 않거나 혹은 파일을 수신한 이후에 파일이 수정된 경우, 해당 변경 사항은 단순히 {{HTTPStatus("412")}} `Precondition Failed` 오류와 함께 거절될 것입니다. 그런 뒤에 오류를 다루는 것은 클라이언트에게 달려있므며, 현재 가장 최신의 버전으로부터 다시 시작하도록 사람에게 알려주는 방법 혹은 "diff"를 보여주고 변경된 내용을 유지하도록 선택할 수 있게 사람에게 도움을 주는 방법 등을 이용하도록 할 수 있습니다.

### 리소스의 첫번째 업로드 다루기

리소스의 첫번째 업로드는 이전 예제의 엣지 케이스입니다: 리소스 업데이트의 어떤 경우든지, 두 클라이언트가 업데이트를 동시에(혹은 거의 같은 시점에) 실행하려고 하는 경우는 경쟁 상태의 대상입니다. 이를 방지하기 위해, 조건부 요청을 사용할 수 있습니다: 어떤 etag든지 나타내는 `'*'`라고 하는 특별한 값을 {{HTTPHeader("If-None-Match")}}에 추가하여, 리소스가 이전에 존재하지 않은 경우에만 요청이 성공하게 할 수 있습니다.

![Like for a regular upload, the first upload of a resource is subject to a race condition: If-None-Match can prevent it.](httpfirst.png)

`If-None-Match` 는 HTTP/1.1 호환 (혹은 그 이상의) 서버에서만 동작할 겁니다. 서버가 호환되는지 아닌지를 모르는 경우라면, 이를 확인하기 위해 리소스에 {{HTTPMethod("HEAD")}} 요청을 해보는 것이 우선적으로 필요합니다.

## 결론

조건부 요청은 HTTP의 주요 특징이며 효율적이고 복잡한 애플리케이션을 만드는데 도움을 줍니다. 캐싱 혹은 다운로드 이어하기를 위해, 웹 마스터에게 요청해야 할 유일한 일은 서버를 정확하게 구성하도록 하는 것(어떤 환경 내에서 정확한 etag를 설정하는 것은 애매모호할 수 있습니다)이며, 웹 개발자는 브라우저가 올바른 조건부 요청을 서버하게 되므로 해야할 것이 아무것도 없습니다.

잠금 메커니즘에 대해서는, 반대로, 웹 개발자가 알맞은 헤더로 요청을 전송하도록 하는 일이 필요하며, 웹 마스터는 대부분의 경우 그것들을 검사하도록 하는 신뢰할 수 있는 애플리케이션을 만들어야 합니다.

두 경우 모두에 있어, 조건부 요청은 웹의 필수적인 기능입니다.
