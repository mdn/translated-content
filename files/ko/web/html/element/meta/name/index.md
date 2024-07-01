---
title: 표준 메타데이터 이름
slug: Web/HTML/Element/meta/name
---

{{HTMLSidebar}}

{{htmlelement("meta")}} 요소는 [`name`](/ko/docs/Web/HTML/Element/meta#name) 특성을 메타데이터 이름으로, [`content`](/ko/docs/Web/HTML/Element/meta#content) 특성을 값으로 하여 문서 메타데이터를 이름-값 쌍의 형태로 제공할 때 사용할 수 있습니다.

### HTML 명세가 정의하는 표준 메타데이터 이름

HTML 명세는 다음과 같은 표준 메타데이터 이름을 정의하고 있습니다.

- `application-name`: 웹 페이지에서 구동 중인 애플리케이션의 이름.

  > **참고:**- 브라우저가 이 값을 사용해 애플리케이션을 식별할 수 있습니다. {{htmlelement("title")}} 요소 역시 보통 애플리케이션 이름을 포함하지만, `application-name`과는 달리 문서 이름이나 상태 등 다른 정보도 존재할 수 있다는 점에서 차이가 있습니다.
  >
  > - 단순한 웹 페이지에서는 `application-name`을 지정하지 말아야 합니다.

- `author`: 문서 저작자.
- `description`: 페이지에 대한 짧고 정확한 요약. Firefox, Opera 등 여러 브라우저는 즐겨찾기 페이지의 기본 설명 값으로 `description` 메타데이터를 사용합니다.
- `generator`: 페이지를 생성한 소프트웨어의 식별자.
- `keywords`: 페이지의 콘텐츠와 관련된, 쉼표로 구분한 키워드 목록.
- `referrer`: 문서에서 시작하는 요청의 HTTP {{httpheader("Referer")}} 헤더를 아래 표와 같이 통제합니다.

  | `no-referrer`                     | HTTP {{httpheader("Referer")}} 헤더를 전송하지 않습니다.                                                                                                                                                            |
  | --------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `origin`                          | 문서의 {{glossary("origin", "출처")}}를 전송합니다.                                                                                                                                                                 |
  | `no-referrer-when-downgrade`      | 목적지가 현재 문서와 동일하거나 더 높은(HTTP(S)→HTTPS) 보안 수준을 가진 경우 전체 URL을 전송하고, 더 취약(HTTPS→HTTP)한 경우 전송하지 않습니다. 기본 동작 방식입니다.                                               |
  | `origin-when-cross-origin`        | 동일 출처 요청에는 매개변수를 제거한 전체 URL을 전송합니다. 교차 출처 요청에는 출처만 전송합니다.                                                                                                                   |
  | `same-origin`                     | 동일 출처 요청에는 매개변수를 제거한 전체 URL을 전송합니다. 교차 출처 요청에는 아무 레퍼러 정보도 보내지 않습니다.                                                                                                  |
  | `strict-origin`                   | 목적지가 현재 문서와 동일하거나 더 높은(HTTP(S)→HTTPS) 보안 수준을 가진 경우 출처를 전송하고, 더 취약(HTTPS→HTTP)한 경우 전송하지 않습니다.                                                                         |
  | `strict-origin-when-cross-origin` | 동일 출처 요청에는 매개변수를 제거한 전체 URL을 전송합니다. 목적지가 현재 문서와 동일하거나 더 높은 보안 수준(HTTP(S)→HTTPS)을 가진 경우 자신의 출처를 전송합니다. 그 외의 경우 아무 레퍼러 정보도 보내지 않습니다. |
  | `unsafe-URL`                      | 동일 출처와 교차 출처 요청 모두에 대해서 전체 URL을 전송합니다.                                                                                                                                                     |

  > **참고:**- `<meta name="referrer">`의 값을 {{domxref("Document.write", "document.write()")}} 또는 {{domxref("Node.appendChild", "appendChild()")}}를 사용해 동적으로 삽입할 경우 레퍼러 동작을 예측할 수 없습니다.
  >
  > - 여러 정책이 서로 충돌할 경우에는 `no-referrer` 정책을 사용합니다.

- [`theme-color`](/ko/docs/Web/HTML/Element/meta/name/theme-color): 사용자 에이전트가 페이지 혹은 주위의 사용자 인터페이스를 표시할 때 사용해야 할 색상에 대한 힌트. `content` 특성은 유효한 CSS {{cssxref("&lt;color&gt;")}} 색상을 포함해야 합니다.

### 다른 명세가 정의하는 표준 메타데이터 이름

CSS Color Adjustment 명세는 다음과 같은 메타데이터 이름을 정의합니다.

- `color-scheme`: 문서와 호환되는 하나 이상의 색채 조합.

  브라우저는 이 정보에 더해 자신과 장치의 사용자 설정을 함께 사용해 배경, 전경, 양식 컨트롤, 스크롤 바 등 대부분의 색상을 결정합니다. `<meta name="color-scheme">`의 주 용도는 문서의 "다크 모드"와 "라이트 모드"중 호환 가능한 조합 및 둘 중 선호하는 쪽을 나타내는 것입니다.

  `color-scheme`과 사용 가능한 [`content`](/ko/docs/Web/HTML/Element/meta#content) 특성의 값은 다음과 같습니다.

  - `normal`
    - : 문서가 특별한 색채 조합을 알지 못합니다. 렌더링 시 기본 색상 팔레트를 사용해야 합니다.
  - \[`light` | `dark`]+
    - : 문서와 호환되는 하나 이상의 색채 조합. 동일한 색채 조합을 여러 번 지정하더라도 한 번 지정한 것과 다르지 않습니다. 여러 색채 조합을 명시하는 경우 문서는 맨 앞 항목을 선호하지만, 사용자가 원할 경우 다른 조합도 사용할 수 있음을 나타냅니다.
  - `only light`
    - : 문서가 오직 라이트 모드, 즉 밝은 배경과 어두운 전경색만 지원함을 나타냅니다. 명세에 따라 `only dark`는 유효하지 않습니다. 완전히 호환되지 않음에도 불구하고 문서를 다크 모드로만 렌더링 할 경우 콘텐츠를 읽을 수 없기 때문입니다. 지정하지 않은 경우, 모든 주요 브라우저는 라이트 모드를 기본값으로 사용합니다.

  예를 들어, 문서가 다크 모드를 선호하나 라이트 모드도 지원 가능하다는 것을 알리려면 다음과 같이 작성하세요.

  ```html
  <meta name="color-scheme" content="dark light" />
  ```

  `name="color-scheme"`은 문서 전체의 선호 및 가능한 색채 조합을 지정한다면, CSS {{cssxref("color-scheme")}} 속성은 개별 요소 단위로 지정합니다. CSS {{cssxref("@media/prefers-color-scheme", "prefers-color-scheme")}} 미디어 기능을 사용하면 스타일이 현재 색채 조합에 적응하도록 작성할 수도 있습니다.

CSS Device Adaptation 명세는 다음과 같은 메타데이터 이름을 정의합니다.

- `viewport`: {{glossary("viewport", "뷰포트")}}의 초기 사이즈에 대한 힌트. 모바일 장치에서만 사용합니다.

  | 값              | 가능한 하위 값                 | 설명                                                                                                                                                                                                                                                                                                                                                                          |
  | --------------- | ------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `width`         | 양의 정수 또는 `device-width`  | 웹 사이트를 렌더링 하고자 하는 뷰포트 너비를 정의합니다.                                                                                                                                                                                                                                                                                                                      |
  | `height`        | 양의 정수 또는 `device-height` | 웹 사이트를 렌더링 하고자 하는 뷰포트 높이를 정의합니다.                                                                                                                                                                                                                                                                                                                      |
  | `initial-scale` | `0.0`과 `10.0` 사이의 수       | 장치 너비(세로 모드에서는 `device-width`, 가로 모드에서는 `device-height`)와 뷰포트 너비의 비율을 정의합니다.                                                                                                                                                                                                                                                                 |
  | `maximum-scale` | `0.0`과 `10.0` 사이의 수       | 가능한 최대 확대 비율을 정의합니다. `minimum-scale` 이상이어야 하며, 미만으로 지정한 경우의 동작은 정의되지 않았습니다. 브라우저 설정에 따라 무시할 수 있고, iOS10 이상은 기본값으로 무시합니다.                                                                                                                                                                              |
  | `minimum-scale` | `0.0`과 `10.0` 사이의 수       | 가능한 최소 확대 비율을 정의합니다. `maximum-scale` 이하여야 하며, 초과한 값을 지정한 경우의 동작은 정의되지 않았습니다. 브라우저 설정에 따라 무시할 수 있고, iOS10 이상은 기본값으로 무시합니다.                                                                                                                                                                             |
  | `user-scalable` | `yes` 또는 `no`                | `no`인 경우 사용자가 웹 페이지를 확대할 수 없습니다. 기본값은 `yes`입니다. 브라우저 설정에 따라 무시할 수 있고, iOS10 이상은 기본값으로 무시합니다.                                                                                                                                                                                                                           |
  | `viewport-fit`  | `auto`, `contain`, `cover`     | `auto` 값은 초기 뷰포트 레이아웃에 영향을 주지 않으며, 전체 웹 페이지를 볼 수 있습니다.`contain` 값은 디스플레이 내에 맞출 수 있는 가장 큰 사각형에 맞춰 뷰포트의 크기를 조절합니다.`cover` 값은 뷰포트의 크기를 조절해 디스플레이 전체를 채웁니다. [안전 영역](/ko/docs/Web/CSS/env) 환경 변수를 사용해 중요한 콘텐츠가 화면 밖에 놓이는 불상사가 없도록 하는 것이 좋습니다. |

  > **참고:**- 비록 표준은 아니지만, `viewport`의 사실상 표준적인 위치로 인해 대부분의 모바일 브라우저가 선언을 준수합니다.
  >
  > - 장치와 브라우저마다 기본값이 다를 수 있습니다.

##### Accessibility concerns with viewport scaling

`user-scalable` 을 `no` 로 지정해 확대 기능을 비활성화하면 저시력 사용자가 페이지의 내용을 읽고 이해하는 것을 방해합니다.

- [MDN Understanding WCAG, Guideline 1.4 explanations](/ko/docs/Web/Accessibility/Understanding_WCAG/Perceivable#Guideline_1.4_Make_it_easier_for_users_to_see_and_hear_content_including_separating_foreground_from_background)
- [Understanding Success Criterion 1.4.4 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-scale.html)

### 다른 메타데이터 이름

[WHATWG Wiki MetaExtensions 페이지](https://wiki.whatwg.org/wiki/MetaExtensions)는 거대한 수의 비표준 메타데이터 목록을 포함합니다. 그러나 다음 메타데이터 이름을 포함한 일부 항목은 실제로도 꽤 자주 사용하고 있습니다.

- `creator`: 단체, 협회 등 문서 저작자의 이름. 다수의 저작자가 존재할 경우 다수의 {{HTMLElement("meta")}} 요소를 사용해야 합니다.
- `googlebot`은 `robots`의 동의어로, Googlebot(Google의 색인 크롤러)만 준수합니다..
- `publisher`: 문서를 출판한 자의 이름.
- `robots`: 협조적인 크롤러, 또는 "로봇"의 동작을 지정합니다. 아래 표의 항목을 쉼표로 구분한 목록을 값으로 사용합니다

  | 값             | 설명                                                     | 사용처                                                                                                                                                                                                                       |
  | -------------- | -------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
  | `index`        | 크롤러가 페이지를 색인할 수 있습니다. (기본값)           | 모두                                                                                                                                                                                                                         |
  | `noindex`      | 크롤러가 페이지를 색인하지 않도록 요청합니다.            | 모두                                                                                                                                                                                                                         |
  | `follow`       | 크롤러가 페이지 내의 링크를 따라갈 수 있습니다. (기본값) | 모두                                                                                                                                                                                                                         |
  | `nofollow`     | 크롤러가 페이지 내의 링크를 따라가지 않도록 요청합니다.  | 모두                                                                                                                                                                                                                         |
  | `all`          | `index, follow`와 동일합니다.                            | [Google](https://support.google.com/webmasters/answer/79812)                                                                                                                                                                 |
  | `none`         | `noindex, nofollow`와 동일합니다.                        | [Google](https://support.google.com/webmasters/answer/79812)                                                                                                                                                                 |
  | `noarchive`    | 크롤러가 페이지를 캐시에 포함하지 않도록 요청합니다.     | [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives), [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240) |
  | `nosnippet`    | 검색 엔진 결과에 어떤 설명도 표시하지 않도록 지정합니다. | [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives), [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240) |
  | `noimageindex` | 크롤러가 페이지 이미지를 색인하지 않도록 요청합니다.     | [Google](https://developers.google.com/webmasters/control-crawl-index/docs/robots_meta_tag#valid-indexing--serving-directives)                                                                                               |
  | `nocache`      | `noarchive`와 동일합니다.                                | [Bing](https://www.bing.com/webmaster/help/which-robots-metatags-does-bing-support-5198d240)                                                                                                                                 |

  > **참고:**- 협조적인 크롤러만 규칙을 존중합니다. 이메일 주소 수집기가 요청을 따를 것이라고 기대하지 마세요.
  >
  > - 메타 태그의 규칙을 읽기 위해선 크롤러가 페이지에 접근을 하긴 해야 합니다. 대역폭을 아끼려면 {{glossary("robots.txt")}}를 사용하세요.
  > - 이미 등록된 페이지를 검색 결과에서 제거할 수단으로 `noindex`를 사용하는 것도 가능하지만, 수정 후 크롤러가 페이지에 재방문해야만 반영되므로 `robots.txt` 파일이 방문을 방지하고 있지는 않은지 확인하세요.
  > - `index`와 `noindex`, `follow`와 `nofollow`처럼 특정 값은 서로 배타적입니다. 그러나 같은 페이지에서 동시에 사용한 경우 크롤러의 행동은 정의되지 않았으며 둘 중 어느 것이라도 취할 수 있습니다.
  > - Google과 Bing 등 일부 크롤러는 위의 값을 HTTP `X-Robot-Tags` 헤더에 추가해도 인식하므로, 이미지처럼 HTML이 아닌 문서에서도 동일한 설정을 적용할 수 있습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}
