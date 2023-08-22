---
title: HTML autocomplete 특성
slug: Web/HTML/Attributes/autocomplete
---

{{HTMLSidebar("Global_attributes")}}

**`autocomplete`** 특성을 사용하면 {{glossary("user agent", "사용자 에이전트")}}의 자동완성을 허용할 양식 입력 필드를 지정할 수 있으며, 사용자 에이전트에게 어떤 정보에 대한 자동완성을 원하는지 안내할 수도 있습니다. HTML `autocomplete` 특성은 텍스트와 숫자를 허용하는 {{HTMLElement("input")}} 요소, {{HTMLElement("textarea")}} 요소, {{HTMLElement("select")}} 요소, {{HTMLElement("form")}} 요소에 사용할 수 있습니다.

자동완성으로 제안할 값의 출처는 대개 브라우저가 선택합니다. 사전 정의된 값을 사용할 수도 있으나 보통 과거에 사용자가 입력했던 값을 사용합니다. 예를 들어 사용자가 입력한 이름, 주소, 전화번호, 이메일 주소를 브라우저에 저장할 방법을 제공하기도 하고, 신용카드 정보를 미리 암호화해 저장하고 인증절차 후 자동완성 값으로 쓸 수도 있습니다.

{{HTMLElement("input")}}, {{HTMLElement("select")}}, {{HTMLElement("textarea")}} 요소에 `autocomplete` 특성을 지정하지 않은 경우, 브라우저는 요소의 양식 소유자, 즉 조상 {{HTMLElement("form")}} 요소 또는 [`form`](/ko/docs/Web/HTML/Element/input#form) 특성의 값을 `id` 특성으로 사용하는 `<form>` 요소의 `autocomplete` 특성을 사용합니다.

더 많은 정보는 {{HTMLElement("form")}} 요소의 [`autocomplete`](/ko/docs/Web/HTML/Element/form#autocomplete) 특성을 참고하세요.

> **참고:** `<input>`/`<select>`/`<textarea>` 요소가 다음 조건을 만족해야 사용자 에이전트가 자동완성을 제공할 수도 있습니다.
>
> 1. `name` 또는 `id` 특성 존재
> 2. `<form>` 요소의 자손일 것
> 3. 양식에 {{HTMLElement("input/submit", "제출")}} 버튼이 있을 것

## 값

- `off`

  - : 브라우저가 이 필드에 값을 자동으로 넣는 것을 금지합니다. 문서나 애플리케이션이 자신만의 자동완성 기능을 구현하거나, 보안상 문제로 자동완성을 사용하지 않아야 할 경우 지정할 수 있습니다.

    > **참고:** 대부분의 최신 브라우저에서는 `autocomplete`을 `off`로 지정하더라도 브라우저가 사용자에게 계정 이름과 비밀번호 저장 여부를 묻는 것을 막을 수 없으며, 저장한 값을 사용해 자동완성하는 것도 막을 수 없습니다. [The autocomplete attribute and login fields](/ko/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion#The_autocomplete_attribute_and_login_fields) 문서를 참고하세요.

- `on`
  - : 브라우저의 자동완성을 허용합니다. 아무런 안내 정보도 제공하지 않으므로, 브라우저가 스스로의 판단 하에 값을 결정합니다.
- `name`

  - : 사람의 전체 이름. 사람 이름 구조의 복잡함과 다양성으로 인해 보통 개별 이름 구성요소보다 `name`을 사용하는 것을 선호하지만, 하나씩 받아야 한다면 다음 `autocomplete` 값도 사용할 수 있습니다.

    - `honorific-prefix`
      - : 호칭. "Mrs.", "Mr.", "Miss", "Ms.", "Dr.", "Mlle." 등.
    - `family-name`
      - : 성.
    - `given-name`
      - : 이름.
    - `additional-name`
      - : 가운데 이름.
    - `honorific-suffix`
      - : 접미사. "Jr.", "B.Sc.", "PhD.", "MBASW", "IV" 등.
    - `nickname`
      - : 별명, 별칭.

- `email`
  - : 이메일 주소.
- `username`
  - : 사용자 또는 계정 이름.
- `new-password`
  - : 새로운 비밀번호. 계정을 생성할 때나 비밀번호를 변경할 때, new-password는 "새로운 비밀번호를 입력하세요" 또는 "비밀번호 확인"에 지정해야 합니다. 일반적인 비밀번호와 구분하는 이유는 브라우저가 기존 비밀번호를 자동완성으로 채우는 것을 피하기 위함이며, 안전한 무작위 비밀번호 생성을 제안할 곳을 결정할 때도 사용하기 때문입니다.
- `current-password`
  - : 사용자의 현재 비밀번호.
- `one-time-code`
  - : 사용자를 인증할 때 사용하는 1회성 코드.
- `organization-title`
  - : 직위. "사장", "매니저", "시니어 테크니컬 커뮤니케이터" 등.
- `organization`
  - : 회사 또는 조직명.
- `street-address`
  - : 도로 주소. 여러 줄의 텍스트도 가능하며 두 번째 행정구역(시/군/구) 내에서 구분할 수 있는 주소여야 하지만, 도시 이름, 우편번호, 국가 이름은 포함해선 안됩니다.
- `address-line1`, `address-line2`, `address-line3`
  - : 도로 주소의 각 줄. `street-address`가 존재하지 않는 경우에만 사용해야 합니다.
- `address-level4`
  - : 4단계 주소에서 가장 상세한 [행정구역](#주소의_행정_단계).
- `address-level3`
  - : 최소 3단계 주소에서의 3단계 [행정구역](#주소의_행정_단계).
- `address-level2`
  - : 최소 2단계 주소에서의 2단계 [행정구역](#주소의_행정_단계). 주소에 사용하는 행정구역을 두 단계로 분류하는 국가에서는 보통 도시, 마을 등입니다.
- `address-level1`
  - : 첫 번째 [행정구역](#주소의_행정_단계). 대한민국에서는 특별시·광역시·도, 미국에서는 주입니다.
- `country`
  - : 국가 코드.
- `country-name`
  - : 국가 이름.
- `postal-code`
  - : 우편번호.
- `cc-name`
  - : 신용카드 등 지불수단 소유자의 전체 이름. 보통 개별 이름 구성요소보다 이 쪽을 더 선호합니다.
- `cc-family-name`
  - : 지불수단 소유자의 성.
- `cc-given-name`
  - : 지불수단 소유자의 이름.
- `cc-additional-name`
  - : 지불수단 소유자의 가운데 이름.
- `cc-number`
  - : 신용카드 번호, 계좌번호 등 지불수단 식별 번호.
- `cc-exp`
  - : 지불수단 유효기간. 보통 MM/YY 또는 MM/YYYY의 형태입니다.
- `cc-exp-month`
  - : 지불수단 유효기간의 월.
- `cc-exp-year`
  - : 지불수단 유효기간의 연도.
- `cc-csc`
  - : 지불수단 보안 코드. 신용카드의 경우 뒷면의 세자리 숫자입니다.
- `cc-type`
  - : 지불수단 유형. "Visa", "Master Card" 등.
- `transaction-currency`
  - : 거래에 사용할 통화 단위.
- `transaction-amount`
  - : 결제 양식에 나타나는 거래량, 금액. 단위는 `transaction-currency`에 나타난 값을 사용합니다.
- `language`
  - : 선호 언어. [유효한 BCP 47 언어 태그](https://ko.wikipedia.org/wiki/IETF_%EC%96%B8%EC%96%B4_%ED%83%9C%EA%B7%B8)여야 합니다.
- `bday`
  - : 생년월일.
- `bday-day`
  - : 생일.
- `bday-month`
  - : 생월.
- `bday-year`
  - : 생년.
- `sex`
  - : 성별. "남성", "여성", "안드로진" 등 줄바꿈 없는 자유형식 텍스트입니다.
- `tel`

  - : 국가 코드를 포함한 전체 전화번호. 개별 전화번호 구성요소가 필요한 경우 다음 값을 사용할 수 있습니다.

    - `tel-country-code`
      - : 국가 코드. 1(북미), 82(대한민국) 등.
    - `tel-national`
      - : 국가 코드를 제외한 전체 전화번호. 지역번호도 포함합니다. 대한민국 전화번호 "82-2-555-6502"의 경우 "02-555-6502"가 됩니다.
    - `tel-area-code`
      - : 지역번호.
    - `tel-local`
      - : 국가 코드와 지역번호를 제외한 전화번호. 두 부분으로 나눌 수도 있으며, "555-6502"의 경우 `tel-local-prefix`는 "555", `tel-local-suffix`는 "6502"가 됩나다.

- `tel-extension`
  - : 내선번호.
- `impp`
  - : 인스턴트 메시지 프로토콜 엔드포인트의 URL. "xmpp:username\@example.net" 등.
- `url`
  - : URL. 홈페이지, 회사 웹 사이트 주소 등 양식의 맥락에 맞는 값입니다.
- `photo`
  - : 이미지 URL. 사람, 회사, 연락처 정보 등 양식의 맥락에 맞는 값입니다.

[WHATWG 표준](https://html.spec.whatwg.org/multipage/forms.html#autofill)을 방문해 더 많은 정보를 알아보세요.

## 예제

```html
<div>
  <label for="cc-number">Enter your credit card number</label>
  <input type="number" name="cc-number" id="cc-number" autocomplete="off" />
</div>
```

## 주소의 행정 단계

네 단계의 행정 단계(`address-level1`부터 `address-level4`까지)는 주소의 위치를 점차 좁아지는 범위로 나타냅니다. 각각의 국가는 서로 다른 행정구역 시스템을 사용하며 주소를 작성하는 순서도 다를 수 있습니다.

`address-level1`은 항상 제일 큰 단계이므로, 국가 이름을 제외한 주소에서 가장 넓은 범위를 나타냅니다.

### 유연한 양식 레이아웃

각각의 국가가 서로 다른 주소 형태를 사용하며, 구성요소의 위치는 물론 개수도 다를 수 있다는 점을 고려했을 때, 가능하다면 사용자가 입력하는 주소가 속한 국가에 따라서 양식의 형태를 바꾸는 것이 도움이 될 것입니다.

### 예제

행정구역 단위 사용법은 국가마다 다릅니다. 다음은 일부 예제로, 모든 상황을 포함하지는 않을 것입니다.

#### 대한민국

도로명주소는 다음과 같은 형태입니다.

- 서울특별시 종로구 세종로 1
- 경기도 수원시 팔달구 효원로 1
- 충청남도 홍성군 홍북읍 충남대로 21
- `address-level1`

  - : &#x20;

    시/도: "서울특별시", "경기도", "충청남도"

- `address-level2`
  - : 시/군/구: "수원시", "홍성군", "종로구"
- `address-level3`

  - : 구/읍/면: "팔달구", "홍북읍"

    > **참고:** 구/읍/면은 `address-level2`에 합쳐 "수원시 팔달구", "홍성군 홍북읍"의 형태로 작성하는 경우도 많습니다.

- `address-line1`
  - : 도로명, 건물번호: "세종로 1", "효원로 1", "충남대로 21"
- `address-line2`

  - : 상세주소. 아파트의 경우 동/호를 작성합니다.

    > **참고:** `street-address`를 사용하는 경우 도로명, 건물번호와 상세주소를 같이 작성합니다.

우편번호 찾기 기능을 사용하는 경우 행정구역과 도로명, 건물번호까지는 사용자가 직접 입력하지 않는 점도 유의하세요.

#### 미국

평범한 주소는 다음 형태입니다.

432 Anywhere St
Exampleville CA 95555

미국에서의 가장 큰 행정구역은 "주"로, 위 주소에서는 "CA"("캘리포니아"의 미국 우정청 공식 줄임말)입니다. 따라서 `address-level1`은 주, 즉 "CA"를 사용합니다.

두 번째 행정구역은 도시 혹은 마을 이름이므로 `adress-level2`는 "Examplevile"입니다.

미국 주소는 3단계 이상을 사용하지 않습니다.

## 명세

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{htmlelement("input")}} 요소.
- {{htmlelement("select")}} 요소.
- {{htmlelement("textarea")}} 요소.
- {{htmlelement("form")}} 요소.
- [HTML 양식](/ko/docs/Learn/HTML/Forms)
- 모든 [전역 특성](/ko/docs/Web/HTML/Global_attributes).
