---
title: 메타 프로그래밍
slug: Web/JavaScript/Guide/Meta_programming
original_slug: Web/JavaScript/Guide/메타_프로그래밍
---

{{jsSidebar("JavaScript Guide")}} {{Previous("Web/JavaScript/Guide/Iterators_and_Generators")}}

Starting with ECMAScript 2015, JavaScript gains support for the {{jsxref("Proxy")}} and {{jsxref("Reflect")}} objects allowing you to intercept and define custom behavior for fundamental language operations (e.g. property lookup, assignment, enumeration, function invocation, etc). With the help of these two objects you are able to program at the meta level of JavaScript.

## Proxies

ECMAScript 6에서 소개되었습니다, {{jsxref("Proxy")}} 객체는 특정 작업을 가로막는것과 사용자 정의 행위를 시행하는것을 허용합니다.예를 들면 객체가 속성을 가지는 것입니다:

```js
var handler = {
  get: function(target, name){
    return name in target ? target[name] : 42;
  }
};
var p = new Proxy({}, handler);
p.a = 1;
console.log(p.a, p.b); // 1, 42
```

The `Proxy` object defines a `target` (an empty object here) and a `handler` object in which a `get` _trap_ is implemented. Here, an object that is proxied will not return `undefined` when getting undefined properties, but will instead return the number 42.

Additional examples are available on the {{jsxref("Proxy")}} reference page.

### Terminology

The following terms are used when talking about the functionality of proxies.

- {{jsxref("Global_Objects/Proxy/handler","handler","","true")}}
  - : Placeholder object which contains traps.
- traps
  - : The methods that provide property access. This is analogous to the concept of traps in operating systems.
- target
  - : Object which the proxy virtualizes. It is often used as storage backend for the proxy. Invariants (semantics that remain unchanged) regarding object non-extensibility or non-configurable properties are verified against the target.
- invariants
  - : Semantics that remain unchanged when implementing custom operations are called _invariants_. If you violate the invariants of a handler, a {{jsxref("TypeError")}} will be thrown.

## Handlers and traps

The following table summarizes the available traps available to `Proxy` objects. See the [reference pages](/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler) for detailed explanations and examples.

<table>
  <thead>
    <tr>
      <th>Handler / trap</th>
      <th>Interceptions</th>
      <th>Invariants</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/getPrototypeOf", "handler.getPrototypeOf()")}}
      </td>
      <td>
        {{jsxref("Object.getPrototypeOf()")}}<br />{{jsxref("Reflect.getPrototypeOf()")}}<br />{{jsxref("Object/proto", "__proto__")}}<br />{{jsxref("Object.prototype.isPrototypeOf()")}}<br />{{jsxref("Operators/instanceof", "instanceof")}}
      </td>
      <td>
        <ul>
          <li>
            <code>getPrototypeOf</code> method must return an object or
            <code>null</code>.
          </li>
          <li>
            If <code>target</code> is not extensible,
            <code>Object.getPrototypeOf(proxy)</code> method must return the
            same value as <code>Object.getPrototypeOf(target)</code>.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/setPrototypeOf", "handler.setPrototypeOf()")}}
      </td>
      <td>
        {{jsxref("Object.setPrototypeOf()")}}<br />{{jsxref("Reflect.setPrototypeOf()")}}
      </td>
      <td>
        If <code>target</code> is not extensible, the
        <code>prototype</code> parameter must be the same value as
        <code>Object.getPrototypeOf(target)</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/isExtensible", "handler.isExtensible()")}}
      </td>
      <td>
        {{jsxref("Object.isExtensible()")}}<br />{{jsxref("Reflect.isExtensible()")}}
      </td>
      <td>
        <code>Object.isExtensible(proxy)</code> must return the same value as
        <code>Object.isExtensible(target)</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/preventExtensions", "handler.preventExtensions()")}}
      </td>
      <td>
        {{jsxref("Object.preventExtensions()")}}<br />{{jsxref("Reflect.preventExtensions()")}}
      </td>
      <td>
        <code>Object.preventExtensions(proxy)</code> only returns
        <code>true</code> if <code>Object.isExtensible(proxy)</code> is
        <code>false</code>.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/getOwnPropertyDescriptor", "handler.getOwnPropertyDescriptor()")}}
      </td>
      <td>
        {{jsxref("Object.getOwnPropertyDescriptor()")}}<br />{{jsxref("Reflect.getOwnPropertyDescriptor()")}}
      </td>
      <td>
        <ul>
          <li>
            <code>getOwnPropertyDescriptor</code> must return an object or
            <code>undefined</code>.
          </li>
          <li>
            A property cannot be reported as non-existent, if it exists as a
            non-configurable own property of the target object.
          </li>
          <li>
            A property cannot be reported as non-existent, if it exists as an
            own property of the target object and the target object is not
            extensible.
          </li>
          <li>
            A property cannot be reported as existent, if it does not exists as
            an own property of the target object and the target object is not
            extensible.
          </li>
          <li>
            A property cannot be reported as non-configurable, if it does not
            exists as an own property of the target object or if it exists as a
            configurable own property of the target object.
          </li>
          <li>
            The result of
            <code>Object.getOwnPropertyDescriptor(target)</code>can be applied
            to the target object using <code>Object.defineProperty</code> and
            will not throw an exception.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/defineProperty", "handler.defineProperty()")}}
      </td>
      <td>
        {{jsxref("Object.defineProperty()")}}<br />{{jsxref("Reflect.defineProperty()")}}
      </td>
      <td>
        <ul>
          <li>
            A property cannot be added, if the target object is not extensible.
          </li>
          <li>
            A property cannot be added as or modified to be non-configurable, if
            it does not exists as a non-configurable own property of the target
            object.
          </li>
          <li>
            A property may not be non-configurable, if a corresponding
            configurable property of the target object exists.
          </li>
          <li>
            If a property has a corresponding target object property then
            <code>Object.defineProperty(target, prop, descriptor)</code> will
            not throw an exception.
          </li>
          <li>
            In strict mode, a <code>false</code> return value from the
            <code>defineProperty</code> handler will throw a
            {{jsxref("TypeError")}} exception.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/has", "handler.has()")}}
      </td>
      <td>
        Property query: <code>foo in proxy</code><br />Inherited property query:
        <code>foo in Object.create(proxy)</code
        ><br />{{jsxref("Reflect.has()")}}
      </td>
      <td>
        <ul>
          <li>
            A property cannot be reported as non-existent, if it exists as a
            non-configurable own property of the target object.
          </li>
          <li>
            A property cannot be reported as non-existent, if it exists as an
            own property of the target object and the target object is not
            extensible.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/get", "handler.get()")}}
      </td>
      <td>
        <!-- markdownlint-disable MD011 -->
        Property access: <code>proxy[foo]</code>and <code>proxy.bar</code
        ><br />Inherited property access: <code>Object.create(proxy)[foo]</code
        ><br />{{jsxref("Reflect.get()")}}
      </td>
      <td>
        <ul>
          <li>
            The value reported for a property must be the same as the value of
            the corresponding target object property if the target object
            property is a non-writable, non-configurable data property.
          </li>
          <li>
            The value reported for a property must be undefined if the
            corresponding target object property is non-configurable accessor
            property that has undefined as its [[Get]] attribute.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/set", "handler.set()")}}
      </td>
      <td>
        Property assignment: <code>proxy[foo] = bar</code>and
        <code>proxy.foo = bar</code><br />Inherited property assignment:
        <code>Object.create(proxy)[foo] = bar</code
        ><br />{{jsxref("Reflect.set()")}}
      </td>
      <td>
        <ul>
          <li>
            Cannot change the value of a property to be different from the value
            of the corresponding target object property if the corresponding
            target object property is a non-writable, non-configurable data
            property.
          </li>
          <li>
            Cannot set the value of a property if the corresponding target
            object property is a non-configurable accessor property that has
            <code>undefined</code> as its [[Set]] attribute.
          </li>
          <li>
            In strict mode, a <code>false</code> return value from the
            <code>set</code>handler will throw a
            {{jsxref("TypeError")}} exception.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/deleteProperty", "handler.deleteProperty()")}}
      </td>
      <td>
        Property deletion: <code>delete proxy[foo]</code> and
        <code>delete proxy.foo</code
        ><br />{{jsxref("Reflect.deleteProperty()")}}
      </td>
      <td>
        A property cannot be deleted, if it exists as a non-configurable own
        property of the target object.
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/enumerate", "handler.enumerate()")}}
      </td>
      <td>
        Property enumeration / for...in:
        <code>for (var name in proxy) {...}</code
        ><br />{{jsxref("Reflect.enumerate()")}}
      </td>
      <td>The <code>enumerate</code> method must return an object.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/ownKeys", "handler.ownKeys()")}}
      </td>
      <td>
        {{jsxref("Object.getOwnPropertyNames()")}}<br />{{jsxref("Object.getOwnPropertySymbols()")}}<br />{{jsxref("Object.keys()")}}<br />{{jsxref("Reflect.ownKeys()")}}
      </td>
      <td>
        <ul>
          <li>The result of <code>ownKeys</code> is a List.</li>
          <li>
            The Type of each result List element is either
            {{jsxref("String")}} or {{jsxref("Symbol")}}.
          </li>
          <li>
            The result List must contain the keys of all non-configurable own
            properties of the target object.
          </li>
          <li>
            If the target object is not extensible, then the result List must
            contain all the keys of the own properties of the target object and
            no other values.
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/apply", "handler.apply()")}}
      </td>
      <td>
        <code>proxy(..args)</code
        ><br />{{jsxref("Function.prototype.apply()")}} and
        {{jsxref("Function.prototype.call()")}}<br />{{jsxref("Reflect.apply()")}}
      </td>
      <td>There are no invariants for the <code>handler.apply</code>method.</td>
    </tr>
    <tr>
      <td>
        {{jsxref("Global_Objects/Proxy/handler/construct", "handler.construct()")}}
      </td>
      <td>
        <code>new proxy(...args)</code
        ><br />{{jsxref("Reflect.construct()")}}
      </td>
      <td>The result must be an <code>Object</code>.</td>
    </tr>
  </tbody>
</table>

## Revocable `Proxy`

The {{jsxref("Proxy.revocable()")}} method is used to create a revocable `Proxy` object. This means that the proxy can be revoked via the function `revoke` and switches the proxy off. Afterwards, any operation on the proxy leads to a {{jsxref("TypeError")}}

```js
var revocable = Proxy.revocable({}, {
  get: function(target, name) {
    return '[[' + name + ']]';
  }
});
var proxy = revocable.proxy;
console.log(proxy.foo); // "[[foo]]"

revocable.revoke();

console.log(proxy.foo);  // TypeError is thrown
proxy.foo = 1;           // TypeError again
delete proxy.foo;        // still TypeError
typeof proxy;            // "object", typeof doesn't trigger any trap
```

## Reflection

{{jsxref("Reflect")}} is a built-in object that provides methods for interceptable JavaScript operations. The methods are the same as those of the {{jsxref("Global_Objects/Proxy/handler","proxy handlers","","true")}}. `Reflect` is not a function object.

`Reflect` helps with forwarding default operations from the handler to the target.

With {{jsxref("Reflect.has()")}} for example, you get the [`in` operator](/en-US/docs/Web/JavaScript/Reference/Operators/in) as a function:

```js
    Reflect.has(Object, 'assign'); // true
```

### A better `apply` function

In ES5, you typically use the {{jsxref("Function.prototype.apply()")}} method to call a function with a given `this` value and `arguments` provided as an array (or an [array-like object](/en-US/docs/Web/JavaScript/Guide/Indexed_collections#Working_with_array-like_objects)).

```js
    Function.prototype.apply.call(Math.floor, undefined, [1.75]);
```

With {{jsxref("Reflect.apply")}} this becomes less verbose and easier to understand:

```js
    Reflect.apply(Math.floor, undefined, [1.75]);
    // 1;

    Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
    // "hello"

    Reflect.apply(RegExp.prototype.exec, /ab/, ['confabulation']).index;
    // 4

    Reflect.apply(''.charAt, 'ponies', [3]);
    // "i"
```

### Checking if property definition has been successful

With {{jsxref("Object.defineProperty")}}, which returns an object if successful, or throws a {{jsxref("TypeError")}} otherwise, you would use a {{jsxref("Statements/try...catch","try...catch")}} block to catch any error that occurred while defining a property. Because {{jsxref("Reflect.defineProperty")}} returns a Boolean success status, you can just use an {{jsxref("Statements/if...else","if...else")}} block here:

```js
    if (Reflect.defineProperty(target, property, attributes)) {
      // success
    } else {
      // failure
    }
```

{{Previous("Web/JavaScript/Guide/Iterators_and_Generators")}}
