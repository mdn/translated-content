---
title: Map.prototype.getOrInsert()
short-title: getOrInsert()
slug: Web/JavaScript/Reference/Global_Objects/Map/getOrInsert
l10n:
  sourceCommit: 6ba4f3b350be482ba22726f31bbcf8ad3c92a9c6
---

{{SeeCompatTable}}

{{jsxref("Map")}} 인스턴스의 **`getOrInsert()`** 메서드는 해당 `Map`안에 지정된 키에 해당하는 값을 반환합니다. 키가 없으면 해당 키와 주어진 기본 값을 사용하여 새 항목을 삽입하고 삽입된 값을 반환합니다.

기본값 계산이 비용이 많이 드는 경우 {{jsxref("Map.prototype.getOrInsertComputed()")}}를 대신 사용을 고려해 보세요. 이 함수는 실제로 필요한 경우에만 기본값을 계산하는 콜백을 받습니다.

{{InteractiveExample("JavaScript Demo: Map.prototype.getOrInsert()")}}

```js interactive-example
const map = new Map([["bar", "foo"]]);
console.log(map.getOrInsert("bar", "default"));
// 예상 출력: "foo"

console.log(map.getOrInsert("baz", "default"));
// 예상 출력: "default"
```

## 구문

```js-nolint
getOrInsert(key, defaultValue)
```

### 매개변수

- `key`
  - : `Map` 객체에서 반환할 값의 키입니다. 객체 키는 값이 아니라 [참조](/ko/docs/Glossary/Object_reference)로 비교합니다.
- `defaultValue`
  - : 키가 `Map`객체에 아직 없는 경우 삽입하고 반환할 값입니다.

### 반환 값

`Map` 객체의 명시된 키와 연관된 값입니다. 키를 찾을 수 없으면 `defaultValue`가 삽입되어 반환됩니다.

## 설명

`getOrInsert()` 메서드는 아래 코드와 동일합니다.

```js
if (map.has(key)) {
  return map.get(key);
}
map.set(key, defaultValue);
return defaultValue;
```

이는 다음 패턴과도 비슷합니다(여러분의 Map에서 `null`또는 `undefined`가 유효한 값인 경우 신뢰도가 약간 떨어짐).

```js
map.set(key, map.get(key) ?? defaultValue);
```

## 예제

### 기본 값 적용하기

현재 값이 필요하지 않더라도 `getOrInsert()`을 맵에 키가 존재하는지 확인하는 데 사용할 수 있습니다. 이는 일반적으로 사용자 입력을 정규화하기 위해 사용됩니다.

사용자 기본 설정 맵이 있고, 사용자가 기본 설정을 지정하지 않은 경우 해당 기본 설정이 항상 기본값으로 설정되도록 하려는 상황을 가정해 보겠습니다.

```js
const options = readConfig();
options.getOrInsert("theme", "light");
options.getOrInsert("fontSize", 14);

// 나중에 여러분의 코드에서 이러한 옵션의 존재를 보장할 수 있습니다.
document.body.dataset.theme = options.get("theme");
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- [`core-js`에서 `Map.prototype.getOrInsert`의 폴리필](https://github.com/zloirock/core-js#map-upsert)
- [`Map.prototype.getOrInsert` es-shims 폴리필](https://www.npmjs.com/package/map.prototype.getorinsert)
- {{jsxref("Map")}}
- {{jsxref("Map.prototype.get()")}}
- {{jsxref("Map.prototype.set()")}}
- {{jsxref("Map.prototype.has()")}}
- {{jsxref("Map.prototype.getOrInsertComputed()")}}
