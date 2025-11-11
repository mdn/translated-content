---
title: Intl.Locale.prototype.region
slug: Web/JavaScript/Reference/Global_Objects/Intl/Locale/region
l10n:
  sourceCommit: b68d6456477c19b1fed8fc6bc99eff8972b1af29
---

{{JSRef}}

{{jsxref("Intl.Locale")}} 인스턴스의 **`region`** 접근자 속성은 이 로케일과 연관된 세계의 지역(보통은 국가)를 반환합니다.

## 설명

지역은 로케일의 핵심 속성 중 하나입니다. 예를 들어 여러 국가에서 같은 언어를 사용하지만 서로 다른 언어 사이의 차이점을 선택할 수 있습니다. 예를 들어, 영국과 미국에서는 영어를 사용하지만 두 국가 간에는 철자법 및 기타 언어 규칙에 차이가 있습니다. 로케일의 지역을 알면 JavaScript 프로그래머는 사이트 및 애플리케이션 콘텐츠가 전 세계 다른 지역에서 볼 때 올바르게 표시되는지 확인할 수 있습니다. `region` 속성 값은 로케일 식별자의 `region` 하위 태그(`script`가 있는 경우 세 번째 부분, 그렇지 않으면 두 번째 부분)를 통해 또는 {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} 생성자의 `region` 옵션을 통해 구성 시점에 설정됩니다. 둘 다 있는 경우 후자가 우선권을 가지며, 둘 다 없는 경우 속성의 값은 `undefined`입니다.

`region`의 설정 접근자는 `undefined`입ㄴ디ㅏ. 이 속성을 직접 변경할 수 없습니다.

## 예제

다른 로케일 하위 태그와 마찬가지로 로케일 문자열 또는 생성자에 대한 구성 객체 인수를 통해 {{jsxref("Intl.Locale")}} 객체에 지역을 추가할 수 있습니다.

### 로케일 문자열을 통한 지역 추가하기

지역은 (존재할 경우)유효한 유니코드 언어 식별자 문자열의 세 번째 부분(`script`가 있는 경우, 그렇지 않은 경우 두 번째 부분)이며 {{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} 생성자에 전달되는 초기 로케일 식별자 문자열에 추가할 수 있습니다. 지역은 로케일 식별자의 필수 부분이 아니라는 점을 명심하시기 바랍니다.

```js
const locale = new Intl.Locale("en-Latn-US");
console.log(locale.region); // Prints "US"
```

### 설정 객체 인수를 통한 지역 추가하기

{{jsxref("Intl/Locale/Locale", "Intl.Locale()")}} 생성자는 선택적 구성 객체 인수를 가집니다. 원하는 지역을 구성 객체의 `region`속성에 설정한 후 생성자에 전달합니다.

```js
const locale = new Intl.Locale("fr-Latn", { region: "FR" });
console.log(locale.region); // Prints "FR"
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Intl.Locale")}}
- [유니코드 지역 차트](https://unicode-org.github.io/cldr-staging/charts/latest/supplemental/territory_containment_un_m_49.html)
