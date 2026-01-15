---
title: 메타프로그래밍
slug: Web/JavaScript/Guide/Meta_programming
l10n:
  sourceCommit: fad67be4431d8e6c2a89ac880735233aa76c41d4
---

{{jsxref("Proxy")}}와 {{jsxref("Reflect")}} 객체를 사용하면 기본 언어 동작(예: 속성 조회, 할당, 열거, 함수 호출 등)을 가로채고 사용자 정의 동작을 정의할 수 있습니다. 이 두 객체를 활용하면 JavaScript에서 메타프로그래밍을 할 수 있습니다.

## 프록시

{{jsxref("Proxy")}} 객체를 사용하면 특정 동작을 가로채고 사용자 정의 동작을 구현할 수 있습니다.

예를 들어 객체에서 속성을 가져오는 경우,

```js
const handler = {
  get(target, name) {
    return name in target ? target[name] : 42;
  },
};

const p = new Proxy({}, handler);
p.a = 1;
console.log(p.a, p.b); // 1, 42
```

`Proxy` 객체는 `target`(여기서는 빈 객체)과 `get` 함정이 구현된 `handler` 객체를 정의합니다. 여기서는 프록시된 객체가 정의되지 않은 속성을 가져올 때 `undefined`를 반환하지 않고 대신 숫자 `42`를 반환합니다.

추가 예제는 {{jsxref("Proxy")}} 참고 페이지에서 확인할 수 있습니다.

### 용어

프록시 기능을 설명할 때 다음 용어가 사용됩니다.

- {{jsxref("Proxy/Proxy", "handler", "", 1)}}
  - : 트랩을 포함하는 자리 표시자 객체입니다.
- traps
  - : 속성 접근과 같은 동작을 제공하는 메서드입니다. (운영체제의 '트랩' 개념과 유사합니다.)
- target
  - : 프록시가 가상화하는 객체입니다. 프록시의 저장소 백엔드로 자주 사용됩니다. 객체의 확장 불가 여부나 설정 불가 속성 관련 불변성(변경되지 않는 의미)은 target을 기준으로 검증됩니다.
- {{Glossary("invariant", "invariants")}}
  - : 사용자 정의 동작을 구현할 때 지켜야 하는 '불변성'을 의미합니다. 핸들러의 불변성을 위반하면 {{jsxref("TypeError")}}가 발생합니다.

## 핸들러와 트랩

다음 표는 `Proxy` 객체에서 사용할 수 있는 트랩을 요약한 것입니다. 자세한 설명과 예제는 [참조 페이지](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)를 확인하세요.

<table class="standard-table">
  <thead>
    <tr>
      <th>핸들러 / 트랩</th>
      <th>가로채기 대상</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/getPrototypeOf", "handler.getPrototypeOf()")}}
      </td>
      <td>
        {{jsxref("Object.getPrototypeOf()")}}<br />{{jsxref("Reflect.getPrototypeOf()")}}<br />{{jsxref("Object/proto", "__proto__")}}<br />{{jsxref("Object.prototype.isPrototypeOf()")}}<br />{{jsxref("Operators/instanceof", "instanceof")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/setPrototypeOf", "handler.setPrototypeOf()")}}
      </td>
      <td>
        {{jsxref("Object.setPrototypeOf()")}}<br />{{jsxref("Reflect.setPrototypeOf()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/isExtensible", "handler.isExtensible()")}}
      </td>
      <td>
        {{jsxref("Object.isExtensible()")}}<br />{{jsxref("Reflect.isExtensible()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/preventExtensions", "handler.preventExtensions()")}}
      </td>
      <td>
        {{jsxref("Object.preventExtensions()")}}<br />{{jsxref("Reflect.preventExtensions()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}
      </td>
      <td>
        {{jsxref("Object.getOwnPropertyDescriptor()")}}<br />{{jsxref("Reflect.getOwnPropertyDescriptor()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/defineProperty", "handler.defineProperty()")}}
      </td>
      <td>
        {{jsxref("Object.defineProperty()")}}<br />{{jsxref("Reflect.defineProperty()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/has", "handler.has()")}}
      </td>
      <td>
        <dl>
          <strong>속성 조회</strong>
          <dd><code>foo in proxy</code></dd>
          <strong>상속 속성 조회</strong>
          <dd>
            <code>foo in Object.create(<var>proxy</var>)</code
            ><br />{{jsxref("Reflect.has()")}}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/get", "handler.get()")}}
      </td>
      <td>
        <dl>
          <strong>속성 접근</strong>
          <dd>
            <code><var>proxy</var>[foo]</code><br /><code
              ><var>proxy</var>.bar</code
            >
          </dd>
          <strong>상속 속성 접근</strong>
          <dd>
            <code>Object.create(<var>proxy</var>)&#8203;[foo]</code
            ><br />{{jsxref("Reflect.get()")}}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/set", "handler.set()")}}
      </td>
      <td>
        <dl>
          <strong>속성 할당</strong>
          <dd>
            <code><var>proxy</var>[foo] = bar</code><br /><code
              ><var>proxy</var>.foo = bar</code
            >
          </dd>
          <strong>상속 속성 할당</strong>
          <dd>
            <code>Object.create(<var>proxy</var>)&#8203;[foo] = bar</code
            ><br />{{jsxref("Reflect.set()")}}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/deleteProperty", "handler.deleteProperty()")}}
      </td>
      <td>
        <dl>
          <strong>속성 삭제</strong>
          <dd>
            <code>delete <var>proxy</var>[foo]</code><br /><code
              >delete <var>proxy</var>.foo</code
            ><br />{{jsxref("Reflect.deleteProperty()")}}
          </dd>
        </dl>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/ownKeys", "handler.ownKeys()")}}
      </td>
      <td>
        {{jsxref("Object.getOwnPropertyNames()")}}<br />{{jsxref("Object.getOwnPropertySymbols()")}}<br />{{jsxref("Object.keys()")}}<br />{{jsxref("Reflect.ownKeys()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/apply", "handler.apply()")}}
      </td>
      <td>
        <code>proxy(..args)</code
        ><br />{{jsxref("Function.prototype.apply()")}} 및
        {{jsxref("Function.prototype.call()")}}<br />{{jsxref("Reflect.apply()")}}
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Proxy/Proxy/construct", "handler.construct()")}}
      </td>
      <td>
        <code>new proxy(...args)</code
        ><br />{{jsxref("Reflect.construct()")}}
      </td>
    </tr>
  </tbody>
</table>

## 취소 가능한 `Proxy`

{{jsxref("Proxy.revocable()")}} 메서드는 취소 가능한 `Proxy` 객체를 생성하는 데 사용됩니다. 이 경우 `revoke` 함수를 통해 프록시를 비활성화할 수 있습니다.

이후 프록시에 대한 모든 동작은 {{jsxref("TypeError")}}를 발생시킵니다.

```js
const revocable = Proxy.revocable(
  {},
  {
    get(target, name) {
      return `[[${name}]]`;
    },
  },
);
const proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"

revocable.revoke();

console.log(proxy.foo); // TypeError: 취소된 프록시에서 'get'을 수행할 수 없습니다
proxy.foo = 1; // TypeError: 취소된 프록시에서 'set'을 수행할 수 없습니다
delete proxy.foo; // TypeError: 취소된 프록시에서 'deleteProperty'를 수행할 수 없습니다
console.log(typeof proxy); // "object", typeof는 트랩을 실행하지 않습니다
```

## 리플렉션(Reflection)

{{jsxref("Reflect")}}는 자바스크립트에서 가로채기 가능한 연산을 수행할 수 있는 메서드를 제공하는 내장 객체입니다. 이 메서드들은 [프록시 핸들러](/ko/docs/Web/JavaScript/Reference/Global_Objects/Proxy/Proxy)의 메서드와 동일합니다.

`Reflect`는 함수 객체가 아닙니다.

`Reflect`는 기본 동작을 핸들러에서 `target`으로 전달할 때 유용하게 사용됩니다.

예를 들어, {{jsxref("Reflect.has()")}}를 사용하면 [`in` 연산자](/ko/docs/Web/JavaScript/Reference/Operators/in)를 함수처럼 사용할 수 있습니다:

```js
Reflect.has(Object, "assign"); // true
```

### 더 나은 apply() 함수

`Reflect`가 등장하기 전에는, 주어진 `this` 값과 배열(또는 [유사 배열 객체](/ko/docs/Web/JavaScript/Guide/Indexed_collections#working_with_array-like_objects))로 제공된 `arguments`를 사용하여 함수를 호출할 때 주로 {{jsxref("Function.prototype.apply()")}} 메서드를 사용했습니다.

```js
Function.prototype.apply.call(Math.floor, undefined, [1.75]);
```

하지만 {{jsxref("Reflect.apply")}}를 사용하면 더 간결하고 이해하기 쉬워집니다.

```js
Reflect.apply(Math.floor, undefined, [1.75]);
// 1

Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
// "hello"

Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index;
// 4

Reflect.apply("".charAt, "ponies", [3]);
// "i"
```

### 속성 정의 성공 여부 확인

{{jsxref("Object.defineProperty")}}는 속성 정의에 성공하면 객체를 반환하고, 실패하면 {{jsxref("TypeError")}}를 발생시킵니다. 따라서 속성을 정의하면서 오류가 발생했는지 확인하려면 {{jsxref("Statements/try...catch", "try...catch")}} 블록을 사용해야 합니다. 반면, {{jsxref("Reflect.defineProperty()")}}는 성공 여부를 불리언 값으로 반환하므로, 단순히 {{jsxref("Statements/if...else", "if...else")}} 블록으로 처리할 수 있습니다:

```js
if (Reflect.defineProperty(target, property, attributes)) {
  // 성공
} else {
  // 실패
}
```
