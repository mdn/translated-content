---
title: Intl.Segmenter
slug: Web/JavaScript/Reference/Global_Objects/Intl/Segmenter
l10n:
  sourceCommit: 01bf58c144237c1fc75cf7135491346778591f09
---

{{JSRef}}

**`Intl.Segmenter`** 객체를 사용하면 로케일에 따른 텍스트 분할이 가능하므로 문자열에서 의미 있는 항목(문자소, 단어 또는 문장)을 가져올 수 있습니다.

{{InteractiveExample("JavaScript Demo: Intl.Segmenter")}}

```js interactive-example
const segmenterFr = new Intl.Segmenter("fr", { granularity: "word" });
const string1 = "Que ma joie demeure";

const iterator1 = segmenterFr.segment(string1)[Symbol.iterator]();

console.log(iterator1.next().value.segment);
// Expected output: 'Que'

console.log(iterator1.next().value.segment);
// Expected output: ' '
```

## 생성자

- {{jsxref("Intl/Segmenter/Segmenter", "Intl.Segmenter()")}}
  - : 새로운 `Intl.Segmenter` 객체를 생성합니다.

## 정적 메서드

- {{jsxref("Intl/Segmenter/supportedLocalesOf", "Intl.Segmenter.supportedLocalesOf()")}}
  - : 런타임의 기본 로케일로 되돌아가지 않고 지원되는 제공된 로케일을 포함하는 배열을 반환합니다.

## 인스턴스 속성

아래 속성은 `Intl.Segmenter.prototype`에 정의되어 있으며, 모든 `Intl.Segmenter` 인스턴스가 공유합니다.

- : {{jsxref("Object/constructor", "Intl.Segmenter.prototype.constructor")}}
  - 인스턴스 객체를 생성한 생성자 함수입니다. `Intl.Segmenter` 인스턴스의 경우, 초기 값은 {{jsxref("Intl/Segmenter/Segmenter", "Intl.Segmenter")}} 생성자입니다.
- : `Intl.Segmenter.prototype[@@toStringTag]`
  - [`@@toStringTag`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol/toStringTag) 속성의 초기 값은 문자열 `"Intl.Segmenter"`입니다. 이 속성은 {{jsxref("Object.prototype.toString()")}}에서 사용됩니다.

## 인스턴스 매서드

- {{jsxref("Intl/Segmenter/resolvedOptions", "Intl.Segmenter.prototype.resolvedOptions()")}}
  - : 이 `Intl.Segmenter` 객체를 초기화하는 동안 계산된 로케일 및 세부화된 옵션을 반영하는 속성이 포함된 새 객체를 반환합니다.
- {{jsxref("Intl/Segmenter/segment", "Intl.Segmenter.prototype.segment()")}}
  - : 문자열의 세그먼트를 나타내는 새로운 이터러블 [`Segments`](/ko/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter/segment/Segments) 인스턴스를 이 `Intl.Segmenter` 인스턴스의 로케일과 세분성에 따라 반환합니다.

## 예제

### 기본적인 사용법과 String.prototype.split()과의 차이

문자열을 단어로 분할하기 위해 [`String.prototype.split(" ")`](/ko/docs/Web/JavaScript/Reference/Global_Objects/String/split)을 사용하면 텍스트의 로케일이 단어 사이에 공백을 사용하지 않는 경우(일본어, 중국어, 태국어, 라오스어, 크메르어, 미얀마어 등의 경우) 올바른 결과를 얻지 못할 수 있습니다.

```js example-bad
const str = "吾輩は猫である。名前はたぬき。";
console.table(str.split(" "));
// ['吾輩は猫である。名前はたぬき。']
// 두 문장이 올바르게 분할되지 않았습니다.
```

```js example-good
const str = "吾輩は猫である。名前はたぬき。";
const segmenterJa = new Intl.Segmenter("ja-JP", { granularity: "word" });

const segments = segmenterJa.segment(str);
console.table(Array.from(segments));
// [{segment: '吾輩', index: 0, input: '吾輩は猫である。名前はたぬき。', isWordLike: true},
// 기타 등등.
// ]
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}
