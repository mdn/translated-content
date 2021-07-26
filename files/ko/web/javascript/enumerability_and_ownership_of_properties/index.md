---
title: Enumerability and ownership of properties
slug: Web/JavaScript/Enumerability_and_ownership_of_properties
tags:
  - Guide
  - JavaScript
translation_of: Web/JavaScript/Enumerability_and_ownership_of_properties
---
{{JsSidebar("More")}}

'Enumerable properties'(열거 가능한 속성)는 내부 열거 형 플래그가 true로 설정된 property로, 이는 간단한 할당 또는 property initializer ([Object.defineProperty](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty)를 통해 정의 된 특성 및 이러한 기본 열거 형을 false로 정의한 특성)를 통해 작성된 property의 기본값입니다. 

등록 정보의 키가 [Symbol](/ko/docs/Web/JavaScript/Reference/Global_Objects/Symbol)이 아니면 열거 가능한 등록 정보가 [for...in](/ko/docs/Web/JavaScript/Reference/Statements/for...in) 루프에 표시됩니다. 'Ownership of properties' (속성의 소유권)은 속성이 프로토 타입 체인이 아닌 개체에 직접 속하는지 여부에 따라 결정됩니다. 객체의 속성도 전체적으로 검색 할 수 있습니다. 개체 속성을 감지, 반복 / 열거 및 검색하는 여러 가지 기본 제공 방법이 있으며 아래 표와 같이 사용할 수 있습니다. 누락 된 범주를 얻는 방법을 보여주는 샘플 코드는 다음과 같습니다.

## 객체 속성 감지, 검색 및 열거

개체 속성을 감지, 반복/열거 및 검색하는 여러 가지 기본 제공 수단이 있습니다. 아래 표에 요약되어 있습니다.

### Detection

<table>
  <thead>
    <tr>
      <th></th>
      <th>Own object</th>
      <th>Own object and prototype chain</th>
      <th>Prototype chain only</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Enumerable</th>
      <td>
        <p>
          <code
            ><a
              href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
              >propertyIsEnumerable</a
            ></code
          >
        </p>
        <p>
          <code
            ><a
              href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
              >hasOwnProperty</a
            ></code
          >
        </p>
      </td>
      <td>Not available without extra code</td>
      <td>Not available without extra code</td>
    </tr>
    <tr>
      <th>Nonenumerable</th>
      <td>
        <p>
          <code
            ><a
              href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
              >hasOwnProperty</a
            ></code
          >
          – filtered to exclude enumerables using
          <code
            ><a
              href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
              >propertyIsEnumerable</a
            ></code
          >
        </p>
      </td>
      <td>Not available without extra code</td>
      <td>Not available without extra code</td>
    </tr>
    <tr>
      <th>Enumerable and Nonenumerable</th>
      <td>
        <p>
          <code
            ><a
              href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwnProperty"
              >hasOwnProperty</a
            ></code
          >
        </p>
      </td>
      <td>
        <code
          ><a href="/ko/docs/Web/JavaScript/Reference/Operators/in"
            >in</a
          ></code
        >
      </td>
      <td>Not available without extra code</td>
    </tr>
  </tbody>
</table>

### Retrieval

<table>
  <thead>
    <tr>
      <th></th>
      <th>Own object</th>
      <th>Own object and prototype chain</th>
      <th>Prototype chain only</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Enumerable</th>
      <td>
        <p>
          <code
            ><a
              href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
              >Object.keys</a
            ></code
          >
        </p>
        <p>
          <code
            ><a
              href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
              >getOwnPropertyNames</a
            ></code
          > 
        </p>
        <p>
          <code
            ><a
              href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
              >getOwnPropertySymbols</a
            ></code
          >
        </p>
      </td>
      <td>Not available without extra code</td>
      <td>Not available without extra code</td>
    </tr>
    <tr>
      <th>Nonenumerable</th>
      <td>
        <code
          ><a
            href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
            >getOwnPropertyNames</a
          ></code
        >,
        <code
          ><a
            href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
            >getOwnPropertySymbols</a
          ></code
        >
        – filtered to exclude enumerables using <code
          ><a
            href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
            >propertyIsEnumerable</a
          ></code
        >
      </td>
      <td>Not available without extra code</td>
      <td>Not available without extra code</td>
    </tr>
    <tr>
      <th>Enumerable and Nonenumerable</th>
      <td>
        <p>
          <code
            ><a
              href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
              >getOwnPropertyNames</a
            ></code
          >
        </p>
        <p>
          <code
            ><a
              href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
              >getOwnPropertySymbols</a
            ></code
          >
        </p>
      </td>
      <td>Not available without extra code</td>
      <td>Not available without extra code</td>
    </tr>
  </tbody>
</table>

### Iteration

<table>
  <thead>
    <tr>
      <th></th>
      <th>Own object</th>
      <th>Own object and prototype chain</th>
      <th>Prototype chain only</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Enumerable</th>
      <td>
        <p>
          <code
            ><a
              href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/keys"
              >Object.keys</a
            ></code
          >
        </p>
        <p>
          <code
            ><a
              href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
              >getOwnPropertyNames</a
            ></code
          > 
        </p>
        <p>
          <code
            ><a
              href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
              >getOwnPropertySymbols</a
            ></code
          >
        </p>
      </td>
      <td>
        <p>
          <code
            ><a href="/ko/docs/Web/JavaScript/Reference/Statements/for...in"
              >for..in</a
            ></code
          >
        </p>
        <p>(excluding symbols)</p>
      </td>
      <td>Not available without extra code</td>
    </tr>
    <tr>
      <th>Nonenumerable</th>
      <td>
        <code
          ><a
            href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
            >getOwnPropertyNames</a
          ></code
        >,
        <code
          ><a
            href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
            >getOwnPropertySymbols</a
          ></code
        >
        – filtered to exclude enumerables using <code
          ><a
            href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/propertyIsEnumerable"
            >propertyIsEnumerable</a
          ></code
        >
      </td>
      <td>Not available without extra code</td>
      <td>Not available without extra code</td>
    </tr>
    <tr>
      <th>Enumerable and Nonenumerable</th>
      <td>
        <p>
          <code
            ><a
              href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertyNames"
              >getOwnPropertyNames</a
            ></code
          >
        </p>
        <p>
          <code
            ><a
              href="/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/getOwnPropertySymbols"
              >getOwnPropertySymbols</a
            ></code
          >
        </p>
      </td>
      <td>Not available without extra code</td>
      <td>Not available without extra code</td>
    </tr>
  </tbody>
</table>

## Obtaining properties by enumerability/ownership

아래는 모든 경우에 가장 효율적인 알고리즘은 아니지만 빠르게 코드를 작성하여 확인하기 좋습니다.

- Detection can occur by `SimplePropertyRetriever.theGetMethodYouWant(obj).indexOf(prop) > -1`
- Iteration can occur by `SimplePropertyRetriever.theGetMethodYouWant(obj).forEach(function (value, prop) {});` (or use` filter()`, `map()`, etc.)

```js
var SimplePropertyRetriever = {
    getOwnEnumerables: function(obj) {
        return this._getPropertyNames(obj, true, false, this._enumerable);
         // Or could use for..in filtered with hasOwnProperty or just this: return Object.keys(obj);
    },
    getOwnNonenumerables: function(obj) {
        return this._getPropertyNames(obj, true, false, this._notEnumerable);
    },
    getOwnEnumerablesAndNonenumerables: function(obj) {
        return this._getPropertyNames(obj, true, false, this._enumerableAndNotEnumerable);
        // Or just use: return Object.getOwnPropertyNames(obj);
    },
    getPrototypeEnumerables: function(obj) {
        return this._getPropertyNames(obj, false, true, this._enumerable);
    },
    getPrototypeNonenumerables: function(obj) {
        return this._getPropertyNames(obj, false, true, this._notEnumerable);
    },
    getPrototypeEnumerablesAndNonenumerables: function(obj) {
        return this._getPropertyNames(obj, false, true, this._enumerableAndNotEnumerable);
    },
    getOwnAndPrototypeEnumerables: function(obj) {
        return this._getPropertyNames(obj, true, true, this._enumerable);
        // Or could use unfiltered for..in
    },
    getOwnAndPrototypeNonenumerables: function(obj) {
        return this._getPropertyNames(obj, true, true, this._notEnumerable);
    },
    getOwnAndPrototypeEnumerablesAndNonenumerables: function(obj) {
        return this._getPropertyNames(obj, true, true, this._enumerableAndNotEnumerable);
    },
    // Private static property checker callbacks
    _enumerable: function(obj, prop) {
        return obj.propertyIsEnumerable(prop);
    },
    _notEnumerable: function(obj, prop) {
        return !obj.propertyIsEnumerable(prop);
    },
    _enumerableAndNotEnumerable: function(obj, prop) {
        return true;
    },
    // Inspired by http://stackoverflow.com/a/8024294/271577
    _getPropertyNames: function getAllPropertyNames(obj, iterateSelfBool, iteratePrototypeBool, includePropCb) {
        var props = [];

        do {
            if (iterateSelfBool) {
                Object.getOwnPropertyNames(obj).forEach(function(prop) {
                    if (props.indexOf(prop) === -1 && includePropCb(obj, prop)) {
                        props.push(prop);
                    }
                });
            }
            if (!iteratePrototypeBool) {
                break;
            }
            iterateSelfBool = true;
        } while (obj = Object.getPrototypeOf(obj));

        return props;
    }
};
```

## Detection Table

<table>
  <thead>
    <tr>
      <th></th>
      <th>Enumerable</th>
      <th>Nonenumerable</th>
      <th>Symbols keys</th>
      <th>Inherited Enumerable</th>
      <th>Inherited Nonenumerable</th>
      <th>Inherited Symbols keys</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th><code>in</code></th>
      <td>true</td>
      <td>true</td>
      <td>true</td>
      <td>true</td>
      <td>true</td>
      <td>true</td>
    </tr>
    <tr>
      <th><code>for..in</code></th>
      <td>true</td>
      <td>false</td>
      <td>false</td>
      <td>true</td>
      <td>false</td>
      <td>false</td>
    </tr>
    <tr>
      <th><code>obj.hasOwnProperty</code></th>
      <td>true</td>
      <td>true</td>
      <td>true</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
    </tr>
    <tr>
      <th><code>obj.propertyIsEnumerable</code></th>
      <td>true</td>
      <td>false</td>
      <td>true</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
    </tr>
    <tr>
      <th><code>Object.keys</code></th>
      <td>true</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
    </tr>
    <tr>
      <th><code>Object.getOwnPropertyNames</code></th>
      <td>true</td>
      <td>true</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
    </tr>
    <tr>
      <th><code>Object.getOwnPropertyDescriptors</code></th>
      <td>true</td>
      <td>true</td>
      <td>true</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
    </tr>
    <tr>
      <th><code>Reflect.ownKeys()</code></th>
      <td>true</td>
      <td>true</td>
      <td>true</td>
      <td>false</td>
      <td>false</td>
      <td>false</td>
    </tr>
  </tbody>
</table>

## 같이보기

- [`in`](/ko/docs/Web/JavaScript/Reference/Operators/in)
- [`for..in`](/ko/docs/Web/JavaScript/Reference/Statements/for...in)
- {{jsxref("Object.hasOwnProperty()")}}
- {{jsxref("Object.propertyIsEnumerable()")}}
- {{jsxref("Object.getOwnPropertyNames()")}}
- {{jsxref("Object.keys()")}}
- {{jsxref("Object.getOwnPropertyDescriptors()")}}
