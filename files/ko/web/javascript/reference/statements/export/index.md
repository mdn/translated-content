---
title: export
slug: Web/JavaScript/Reference/Statements/export
---

{{jsSidebar("Statements")}}

**`export`** 문은 JavaScript 모듈에서 함수, 객체, 원시 값을 내보낼 때 사용합니다. 내보낸 값은 다른 프로그램에서 {{jsxref("Statements/import", "import")}} 문으로 가져가 사용할 수 있습니다.

내보내는 모듈은 `"use strict"`의 존재 유무와 상관없이 무조건 [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)입니다. `export` 문은 HTML 안에 작성한 스크립트에서는 사용할 수 없습니다.

## 구문

```js
    // 하나씩 내보내기
    export let name1, name2, …, nameN; // var, const도 동일
    export let name1 = …, name2 = …, …, nameN; // var, const도 동일
    export function functionName(){...}
    export class ClassName {...}

    // 목록으로 내보내기
    export { name1, name2, …, nameN };

    // 내보내면서 이름 바꾸기
    export { variable1 as name1, variable2 as name2, …, nameN };

    // 비구조화로 내보내기
    export const { name1, name2: bar } = o;

    // 기본 내보내기
    export default expression;
    export default function (…) { … } // also class, function*
    export default function name1(…) { … } // also class, function*
    export { name1 as default, … };

    // 모듈 조합
    export * from …; // does not set the default export
    export * as name1 from …;
    export { name1, name2, …, nameN } from …;
    export { import1 as name1, import2 as name2, …, nameN } from …;
    export { default } from …;
```

- `nameN`
  - : 내보낼 식별자 이름. {{jsxref("Statements/import", "import")}}를 사용해 다른 스크립트에서 가져갈 수 있습니다.

## 설명

내보내기에는 두 종류, **유명**(named)과 **기본**(default) 내보내기가 있습니다. 모듈 하나에서, 유명 내보내기는 여러 개 존재할 수 있지만 기본 내보내기는 하나만 가능합니다. 각 종류는 위의 구문 중 하나와 대응합니다.

- 유명 내보내기

  ```js
  // 먼저 선언한 식별자 내보내기
  export { myFunction, myVariable };

  // 각각의 식별자 내보내기
  // (변수, 상수, 함수, 클래스)
  export let myVariable = Math.sqrt(2);
  export function myFunction() { ... };
  ```

- 기본 내보내기

  ```js
  // 먼저 선언한 식별자 내보내기
  export { myFunction as default };

  // 각각의 식별자 내보내기
  export default function () { ... };
  export default class { ... }
  ```

유명 내보내기는 여러 값을 내보낼 때 유용합니다. 가져갈 때는 내보낸 이름과 동일한 이름을 사용해야 합니다.

반면 기본 내보내기는 어떤 이름으로도 가져올 수 있습니다.

```js
// test.js
let k;
export default k = 12;
```

```js
// 임의의 다른 파일
import m from "./test"; // k가 기본 내보내기이므로, 가져오는 이름으로 k 대신 m을 사용해도 문제 없음
console.log(m); // 12 기록
```

식별자 충돌을 피하기 위해 유명 내보내기 중 이름을 바꿔줄 수도 있습니다.

```js
export { myFunction as function1, myVariable as variable };
```

### 다시 내보내기 / 조합

부모 모듈이 자식 모듈을 가져와서 다시 내보낼 수도 있습니다. 즉, 여러 개의 모듈을 모아놓을 하나의 모듈을 만들 수 있습니다.

```js
export foo from "bar.js";
```

위 구문은 아래와 동일합니다.

```js
import foo from 'bar.js';
export foo;
```

## 예제

### 유명 내보내기 사용

어떤 모듈에서 다음과 같은 코드를 가진다고 해보겠습니다.

```js
// module "my-module.js"
function cube(x) {
  return x * x * x;
}
const foo = Math.PI + Math.SQRT2;
var graph = {
  options: {
    color: "white",
    thickness: "2px",
  },
  draw: function () {
    console.log("From graph draw function");
  },
};
export { cube, foo, graph };
```

다른 스크립트에서는 아래와 같이 사용할 수 있습니다.

```js
// You should use this script in html with the type module.
// For example:
//   <script type="module" src="./demo.js"></script>
//
// Open the page in a http server, otherwise there will be a CORS policy error.
//
// script demo.js

import { cube, foo, graph } from "my-module";
graph.options = {
  color: "blue",
  thickness: "3px",
};
graph.draw();
console.log(cube(3)); // 27
console.log(foo); // 4.555806215962888
```

### 기본 내보내기 사용

단일 값을 내보낼 때나 모듈의 폴백 값이 필요할 땐 기본 내보내기를 사용할 수 있습니다.

```js
// module "my-module.js"
export default function cube(x) {
  return x * x * x;
}
```

그런 다음, 다른 스크립트에서 가져오는건 간단합니다:

```js
import cube from "./my-module.js";
console.log(cube(3)); // 27
```

`export default`를 사용할 때 `var`, `let`, `const`는 사용하지 못합니다.

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Statements/import", "import")}}
- [JavaScript 모듈](/ko/docs/Web/JavaScript/Guide/Modules) 안내서
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), Hacks blog post by Jason Orendorff
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/), Hacks blog post by Lin Clark
- [Axel Rauschmayer's book: "Exploring JS: Modules"](http://exploringjs.com/es6/ch_modules.html)
