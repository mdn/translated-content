---
title: 엔터티 (Entity)
slug: Glossary/Entity
l10n:
  sourceCommit: acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{GlossarySidebar}}

{{glossary("HTML")}} **엔터티(Entity)**는 앰퍼샌드(`&`)로 시작하고 세미콜론(`;`)으로 끝나는 텍스트 조각('문자열')입니다. 엔터티는 예약된 문자(HTML 코드로 해석됨)와 보이지 않는 문자(예, 줄바꿈 없는 공백)를 표시하는 데 자주 사용됩니다. 표준 키보드로 입력하기 어려운 다른 문자 대신 사용할 수도 있습니다.

> [!NOTE]
> 대부분의 문자는 기억할만한 엔터티를 가지고 있습니다. 예를 들어, 저작권 기호의 엔터티 (`©`)는 `&copy;`입니다. `&#8212;`나 `&#x2014;` 처럼 기억에 남지 않는 문자들은, [참조 차트](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references) 또는 [디코더 도구](https://mothereff.in/html-entities)를 사용할 수 있습니다.

## 예약된 문자

일부 특수 문자는 HTML에서 사용하도록 예약되어 있습니다. 즉, 브라우저가 해당 문자를 HTML 코드로 구문 분석합니다. 예를 들어, 보다 작음 (`<`) 기호를 사용하는 경우, 브라우저는 뒤에 오는 모든 텍스트를 {{Glossary('tag', '태그')}}로 해석합니다.

이러한 문자를 텍스트로 표시하려면, 아래 표에 표시된 대로 해당 문자 엔터티로 변경해줍니다.

| 문자 | 엔터티    | 메모                                                             |
| ---- | --------- | ---------------------------------------------------------------- |
| &    | `&amp;`   | 엔터티 또는 문자 참조의 시작으로 해석됩니다.                     |
| <    | `&lt;`    | {{Glossary('tag', '태그')}}의 시작으로 해석됩니다.               |
| >    | `&gt;`    | {{Glossary('tag', '태그')}}의 끝으로 해석됩니다.                 |
| "    | `&quot;`  | {{Glossary('attribute', '특성')}} 값의 시작과 끝으로 해석됩니다. |
|      | `&nbsp;`  | 줄 바꿈 없는 공백으로 해석됩니다.                                |
| –    | `&ndash;` | 엔 대시 (em 단위 너비의 절반)로 해석됩니다.                      |
| —    | `&mdash;` | 앰 대시 ('m' 문자의 너비와 동일)로 해석됩니다.                   |
| ©   | `&copy;`  | 저작권 표시로 해석됩니다.                                        |
| ®   | `&reg;`   | 등록된 기호로 해석됩니다.                                        |
| ™   | `&trade;` | 상표 표시로 해석됩니다.                                          |
| ≈    | `&asymp;` | 등호와 거의 동일하다고 해석됩니다.                               |
| ≠    | `&ne;`    | 등호와 같지 않은 것으로 해석됩니다.                              |
| £    | `&pound;` | 파운드 기호로 해석됩니다.                                        |
| €    | `&euro;`  | 유로 기호로 해석됩니다.                                          |
| °    | `&deg;`   | 도 기호로 해석됩니다.                                            |

## 같이 보기

- [문자 엔터티의 공식 목록](https://html.spec.whatwg.org/multipage/named-characters.html#named-character-references)
