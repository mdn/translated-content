---
title: JavaScript modules
slug: Web/JavaScript/Guide/Modules
---

{{jsSidebar("JavaScript Guide")}}{{Previous("Web/JavaScript/Guide/Meta_programming")}}

이 가이드는 자바스크립트 모듈 구문을 시작하는데 필요한 모든 것을 제공합니다.

## A background on modules

자바스크립트 프로그램은 꽤 작게 시작되었습니다. 초기에 사용 된 대부분의 스크립트는 독립적인 작업을 수행하여, 필요한 경우 웹 페이지에 약간의 상호 작용을 제공하므로 일반적으로 큰 스크립트가 필요하지 않았습니다. 몇년 후 자바스크립트는 많은 브라우저에서 실행되고 있는 완전한 애플리케이션을 실행할 수 있을 뿐 아니라, 다른 컨텍스트에서 (예를들면 [Node.js](/ko/docs/Glossary/Node.js)) 자바스크립트를 사용하게 됩니다.

따라서 최근 몇 년 동안 자바스크립트 프로그램을 필요에 따라 가져올 수 있는, 별도의 모듈로 분할하기 위한 매커니즘을 제공하는 것에 대해 생각하기 시작했습니다. node.js는 오랫동안 이러한 능력을 가지고 있었고, 모듈 사용을 가능하게하는 많은 자바스크립트 라이브러리와 프레임워크가 있습니다. (예를들어 [RequireJS](https://requirejs.org/)와 같은 [CommonJS](https://en.wikipedia.org/wiki/CommonJS) 와 [AMD](https://github.com/amdjs/amdjs-api/blob/master/AMD.md)기반 모듈 시스템, 더 최근에는 [Webpack](https://webpack.github.io/)과 [Babel](https://babeljs.io/) 같은 모듈 기반 시스템이 있습니다.)

좋은 소식은 최신 브라우저가 기본적으로 모듈 기능을 지원하기 시작했으며, 이것이 이 기사의 전부입니다. 브라우저는 모듈의 로딩을 최적화 할 수 있기 때문에 라이브러리를 사용하는 것보다 더 효율적이며, 클라이언트 측에서의 추가 처리와 여분의 왕복을 모두 해야하는 것 보다 효율적입니다.

## 브라우저 호환성

{{Compat}}

## Introducing an example

모듈 사용법을 설명하기 위해 Github에 [간단한 예제 모음](https://github.com/mdn/js-examples/tree/master/module-examples)을 만들었습니다. 이 예제들은 웹 페이지에 {{htmlelement("canvas")}} 요소(element)를 만들고, 캔버스에 다양한 도형을 그리고, 그린것에 대한 정보를 보고하는 간단한 모듈 집합입니다.

이것들은 매우 사소한 것이지만, 모듈을 명확하게 설명하기 의해 의도적으로 단순하게 유지중입니다.

> **주의:** 예제를 다운로드하여 로컬에서 실행하려면, 로컬 웹 서버를 통해 예제를 실행해야 합니다.

## Basic example structure

첫 번째 예제([basic-modules](https://github.com/mdn/js-examples/tree/master/module-examples/basic-modules))를 보면 다음과 같은 파일 구조가 있습니다.

```
    index.html
    main.js
    modules/
        canvas.js
        square.js
```

> **주의:** 이 가이드의 모든 예제는 기본적으로 동일한 구조를 가집니다. 위의 내용에 익숙해지시는게 좋습니다.

modules 디렉토리의 두 모듈은 다음과 같습니다.

- `canvas.js` — 캔버스 설정과 관련된 기능을 포함합니다.

  - `create()` — 지정한 ID를 가진 래퍼 {{htmlelement("div")}} 안에, 지정한 `width` 와 `height` 를 가진 캔버스를 생성합니다. 지정한 ID(첫 번째 인자)는 지정한 부모 요소(두 번째 인자)안에 추가됩니다. 캔버스의 2D 컨텍스트와 래퍼(wrapper div)의 ID가 들어있는 객체를 반환합니다.
  - `createReportList()` — 데이터를 출력하는데 사용할 수 있는, 지정한 래퍼 요소(div) 안에 추가 된 정렬되지 않은 리스트(ul)를 만듭니다. 리스트의 ID를 반환합니다.

- `square.js` — 다음을 포함합니다.

  - `name` — 문자열 'square'를 담고있는 상수입니다.
  - `draw()` — 지정된 크기, 위치, 색상을 사용하여 지정된 캔버스에 사각형을 그립니다. 사각형의 크기, 위치, 색상을 포함하는 객체를 반환합니다.
  - `reportArea()` — 길이가 주어지면 사각형의 넓이를 지정한 보고서 리스트에 작성합니다.
  - `reportPerimeter()` — 길이가 주어지면 사각형의 둘레를 지정한 보고서 리스트에 작성합니다.

## Exporting module features

모듈 기능을 사용하려면 먼저 함수를 export 해야 합니다. 이 작업은 [`export`](/ko/docs/Web/JavaScript/Reference/Statements/export) 문(statement)을 사용하여 수행합니다.

이를 사용하는 가장 쉬운 방법은 모듈 밖으로 내보내려는 항목 앞에 (export를) 배치하는 것입니다. 예를들면 다음과 같습니다.

```js
export const name = "square";

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return {
    length: length,
    x: x,
    y: y,
    color: color,
  };
}
```

functions, `var`, `let`, `const`, class를 내보낼 수 있지만, 최상위 항목이어야 합니다. 예를들어, 함수 안에서 `export`를 사용할 수 없습니다.

여러 항목을 내보내는 더 편리한 방법은 모듈 파일 끝에 하나의 export 문을 사용하는 것입니다. 그 다음에 내보내려는 기능들을 쉼표로 구분하여 나열하고 중괄호로 묶습니다.

```js
export { name, draw, reportArea, reportPerimeter };
```

## Importing features into your script

모듈에서 일부 기능을 내보낸 후에는, 이를 사용할 수 있도록 우리가 사용할 스크립트로 가져와야 합니다. 가장 간단한 방법은 다음과 같습니다.

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
```

[`import`](/ko/docs/Web/JavaScript/Reference/Statements/import) 문(statement)을 사용하고, 가져올 목록을 쉼표로 구분하여 나열한 뒤 괄호로 묶습니다. 그 뒤에는 from을 쓰고 모듈 파일의 경로를 작성합니다. (사이트 루트에 연관된 경로로, 우리의 `basic-modules` 예제는 `/js-examples/modules/basic-modules` 입니다) [`main.js`](https://github.com/mdn/js-examples/blob/master/module-examples/basic-modules/main.js)에서 이러한 코드를 볼 수 있습니다.

그러나 우리는 경로를 조금 다르게 작성했습니다. 우리는 "현재 위치"를 의미하는 점(.) 구문을 사용하고 있으며, 그 다음에 찾고자하는 파일의 경로를 뒤에 써 줍니다. 이것은 상대적으로 전체 상대 경로를 작성하는 것보다 훨씬 빠르며, URL이 더 짧아 지므로 사이트 계층 구조의 다른 위치로 이동하더라도 이 예제가 계속 작동합니다.

예를들면,

```bash
    /js-examples/modules/basic-modules/modules/square.js
```

이렇게 쓸 수 있습니다.

```bash
    ./modules/square.js
```

[`main.js`](https://github.com/mdn/js-examples/blob/master/module-examples/basic-modules/main.js)에서 이러한 코드를 볼 수 있습니다.

> **주의:** 일부 모듈 시스템에서는 파일 확장명을 생략할 수 있습니다. (예: `'/modules/square'`). 이것은 네이티브 자바스크립트에서는 작동하지 않습니다. 또한 앞에 슬래시를 포함해야 합니다.

우리의 스크립트에 기능을 가져오면 동일한 파일 내에 정의한 것처럼 기능을 사용할 수 있습니다. 다음은 `main.js` 의 import 행 아래에 있습니다.

```js
let myCanvas = create("myCanvas", document.body, 480, 320);
let reportList = createReportList(myCanvas.id);

let square1 = draw(myCanvas.ctx, 50, 50, 100, "blue");
reportArea(square1.length, reportList);
reportPerimeter(square1.length, reportList);
```

## Applying the module to your HTML

이제 `main.js` 모듈을 HTML 페이지에 적용하면 됩니다. 이는 몇 가지 주목할만한 차이점을 제외하면 HTML페이지에 일반 스크립트를 적용하는것과 매우 유사합니다.

이 스크립트를 모듈로 선언하려면 {{htmlelement("script")}} 요소(element)에 `type="module"` 을 포함시켜야 합니다.

```js
<script type="module" src="main.js"></script>
```

기본적으로 모듈 기능을 가져오는 스크립트는 최상위 모듈로 작동합니다. 이를 생략하면 파이어폭스로 예를들면, "SyntaxError: import declarations may only appear at top level of a module"라는 오류를 줍니다.

`import` 와 `export` 문(statement)은 모듈 내에서만 사용할 수 있습니다. 정규 스크립트가 아닙니다.

> **주의:** `type="module"`을 포함하면 인터널 스크립트에서도 import 모듈을 사용할 수 있습니다. 예: `<script type="module"> /* 여기에 코드를 작성하세요 */ </script>`.

## Other differences between modules and standard scripts

- 로컬 테스트에서의 주의 사항 — HTML파일을 로컬(예를들어 `file://` URL)에서 로드하려고 하면, 자바스크립트 모듈 보안 요구 사항으로 인해 CORS오류가 발생합니다. 서버를 통해 테스트 해야 합니다.
- 표준 스크립트와 달리 모듈 내부에서 정의된 스크립트 섹션과는 다르게 동작할 수 있습니다. 이는 모듈이 자동적으로 [strict mode](/ko/docs/Web/JavaScript/Reference/Strict_mode)를 사용하기 때문입니다.
- 모듈 스크립트를 불러올 때 `defer` 속성([`<script>` attributes](/ko/docs/Web/HTML/Element/script#Attributes))를 사용할 필요가 없습니다. 모듈은 자동으로 defer됩니다.
- 마지막으로 모듈 기능을 단일 스크립트의 스코프로 가져왔음을 분명히 해야 합니다. — 전역 스코프에서는 사용할 수 없습니다. 따라서 import한 스크립트에서 가져온 기능에만 접근할 수 있습니다. 예를들어 자바스크립트 콘솔에서 접근할 수 없습니다. DevTools에 구문 오류가 표시되지만, 사용하려고 하는 디버깅 기술 중 일부는 사용할 수 없습니다.

## Default exports versus named exports

지금까지 우리가 export 한 기능은 **named exports** 로 구성되었습니다. 각 항목(function, `const` 등)은 export 할 때 이름으로 참조되었으며, import 할 때에 이 이름을 참조하여 사용합니다.

그 외에도 **default export** 라고 부르는 export 도 있습니다. 이것은 모듈이 제공하는 기본 기능을 쉽게 만들 수 있도록 설계되었습니다. 또한 자바스크립트 모듈을 기존의 CommonJS 와 AMD 모듈 시스템과 함께 사용(interpolate)하는데도 도움이 됩니다. (Jason Orendorff에 의해 작성된 [ES6 In Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/) 에 설명되어있습니다. "Default exports"를 검색해보세요)

예제를 가지고 어떻게 작동하는지 살펴보겠습니다. 예제 중 basic-modules 프로젝트의 `square.js` 파일에서 임의의 색상, 크기, 위치로 갖는 사각형을 만드는 `randomSquare()` 라는 함수를 찾을 수 있습니다. 이것을 기본값으로 export하려고 하므로, 파일의 맨 아래에 다음과 같이 씁니다.

```js
export default randomSquare;
```

중괄호가 없음에 주의하세요.

대신 함수 앞에 `export default` 를 추가하고, 다음과 같이 익명함수로 선언할 수 있습니다.

```js
export default function(ctx) {
  ...
}
```

`main.js` 파일에서 다음 코드처럼 사용하면, default function이 import 됩니다.

```js
import randomSquare from "./modules/square.js";
```

다시 말하지만, 중괄호가 없다는 점에 유의하세요. 하나의 모듈은 하나의 default export만 허용하기 때문에 우리는 `randomSquare` 가 해당 모듈임을 알 수 있습니다. 위의 코드는 아래의 코드를 단축하여 사용한 것입니다.

```js
import { default as randomSquare } from "./modules/square.js";
```

> **주의:** export한 항목의 이름을 바꾸는 구문은 [Renaming imports and exports](#renaming_imports_and_exports) 섹션에서 설명합니다.

## Avoiding naming conflicts

지금까지 우리의 캔버스 도형 그리기 모듈은 제대로 작동하는 것 같습니다. 원이나 삼각형처럼 다른 도형을 그리는 모듈을 추가하려고 하면 어떻게 될까요? 이 도형(shape)에는 아마도 `draw()`, `reportArea()` 등과 같은 관련 함수가 있을 것입니다. 동일한 이름의 여러 함수를 동일한 최상위 모듈로 가져오려고 하면, 충돌과 에러가 발생합니다.

다행스럽게도 이 문제를 해결할 수 있는 여러가지 방법이 있습니다. 다음 섹션에서 이 내용을 살펴보겠습니다.

## Renaming imports and exports

`import` 와 `export` 문(statement)의 중괄호 안에 `as` 키워드를 새 함수의 이름으로 함께 사용하여, 최상위 모듈 내부의 함수들을 식별 가능한 이름으로 변경할 수 있습니다.

예를들어 다음 두 가지 방법은 약간의 차이가 있지만, 두 방법 모두 동일한 작업을 수행하고 있습니다.

```js
// inside module.js
export { function1 as newFunctionName, function2 as anotherNewFunctionName };

// inside main.js
import { newFunctionName, anotherNewFunctionName } from "./modules/module.js";
```

```js
// inside module.js
export { function1, function2 };

// inside main.js
import {
  function1 as newFunctionName,
  function2 as anotherNewFunctionName,
} from "./modules/module.js";
```

실제 사례를 살펴보겠습니다. [renaming](https://github.com/mdn/js-examples/tree/master/module-examples/renaming) 디렉토리에서 원과 삼각형을 그리고 보고하기 위해 `circle.js` 와 `triangle.js` 모듈을 추가한다는 점만 제외하면, 앞의 예와 동일한 모듈 시스템을 볼 수 있습니다.

이 모듈듈 각각에는 내부적으로 동일한 이름의 기능이 있습니다. 따라서 각각 하단에 동일한 export 문(statement)이 있습니다.

```js
export { name, draw, reportArea, reportPerimeter };
```

이것들을 `main.js`에 가져올 때 우리는 다음과 같이 시도할 수 있습니다.

```js
import { name, draw, reportArea, reportPerimeter } from "./modules/square.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/circle.js";
import { name, draw, reportArea, reportPerimeter } from "./modules/triangle.js";
```

위와같이 적으면 브라우저에서 "SyntaxError: redeclaration of import name"과 같은 오류가 발생합니다. (Firefox).

대신 import가 고유하도록(식별 가능하도록) 이름을 변경해야 합니다.

```js
import {
  name as squareName,
  draw as drawSquare,
  reportArea as reportSquareArea,
  reportPerimeter as reportSquarePerimeter,
} from "./modules/square.js";

import {
  name as circleName,
  draw as drawCircle,
  reportArea as reportCircleArea,
  reportPerimeter as reportCirclePerimeter,
} from "./modules/circle.js";

import {
  name as triangleName,
  draw as drawTriangle,
  reportArea as reportTriangleArea,
  reportPerimeter as reportTrianglePerimeter,
} from "./modules/triangle.js";
```

다음과 같이 import하는 파일 대신 모듈 파일에서 문제를 해결할 수도 있습니다.

```js
// in square.js
export {
  name as squareName,
  draw as drawSquare,
  reportArea as reportSquareArea,
  reportPerimeter as reportSquarePerimeter,
};
```

```js
// in main.js
import {
  squareName,
  drawSquare,
  reportSquareArea,
  reportSquarePerimeter,
} from "./modules/square.js";
```

그리고 이것은 똑같이 작동 할 것입니다. 사용하는 스타일은 개인의 취향이지만, 모듈 코드를 그대로 두고 import 를 변경하는 것이 더 합리적입니다. 특히 제어 권한이 없는 써드 파티 모듈에서 import를 사용하는 경우에 특히 유용합니다.

## Creating a module object

위의 방법은 정상적으로 작동하지만, 다소 지저분하고 길어질 수 있습니다. 보다 나은 해결책은 각 모듈의 기능을 모듈 객체 내부로 가져오는 것입니다. 다음과 같은 구문을 사용합니다.

```js
import * as Module from "./modules/module.js";
```

이 모듈은 `module.js` 내에서 사용할 수 있는 모든 export를 가져옵니다. 그리고 그것들을 객체 `Module` 의 멤버로 만들고 우리 임의의 효과적인 네임스페이스를 제공합니다.

```js
Module.function1()
Module.function2()
etc.
```

다시 한 번 실제 사례를 살펴보겠습니다. [module-objects](https://github.com/mdn/js-examples/tree/master/module-examples/module-objects) 디렉토리로 가면 같은 예제를 볼 수 있지만, 새로운 구문을 이용하기 위해 다시 작성합니다. 모듈에서 export는 모두 다음과 같은 간단한 형식으로 이루어집니다.

```js
export { name, draw, reportArea, reportPerimeter };
```

반면에 import는 다음과 같습니다.

```js
import * as Canvas from "./modules/canvas.js";

import * as Square from "./modules/square.js";
import * as Circle from "./modules/circle.js";
import * as Triangle from "./modules/triangle.js";
```

각각의 경우에, 지정한 객체 이름 아래에 있는 모듈의 import에 접근할 수 있습니다. 다음은 그 예시입니다.

```js
let square1 = Square.draw(myCanvas.ctx, 50, 50, 100, "blue");
Square.reportArea(square1.length, reportList);
Square.reportPerimeter(square1.length, reportList);
```

따라서 이제는 이전과 똑같은 코드를 작성할 수 있습니다. (필요한 경우 객체 이름을 포함해야 합니다) import는 보다 깔끔해졌습니다.

## Modules and classes

이전에 암시 했듯이 class를 export하거나 import 할 수도 있습니다. 이것은 코드에서 충돌을 피하기 위한 또 다른 옵션으로, 모듈 코드가 이미 객체 지향 스타일로 작성된 경우에 특히 유용합니다.

우리의 [classes](https://github.com/mdn/js-examples/tree/master/module-examples/classes) 디렉토리에서 ES 클래스로 다시 작성된 도형 그리기 모듈의 예를 볼 수 있습니다. 예를들어 [`square.js`](https://github.com/mdn/js-examples/blob/master/module-examples/classes/modules/square.js) 파일에는 모든 기능이 단일 클래스에 포함되어 있습니다.

```js
class Square {
  constructor(ctx, listId, length, x, y, color) {
    ...
  }

  draw() {
    ...
  }

  ...
}
```

우리는 다음과 같이 export 합니다.

```js
export { Square };
```

[`main.js`](https://github.com/mdn/js-examples/blob/master/module-examples/classes/main.js) 에서 우리는 다음과 같이 import 합니다.

```js
import { Square } from "./modules/square.js";
```

그런다음 클래스를 이용하여 사각형을 그립니다.

```js
let square1 = new Square(myCanvas.ctx, myCanvas.listId, 50, 50, 100, "blue");
square1.draw();
square1.reportArea();
square1.reportPerimeter();
```

## Aggregating modules

모듈을 모아야 할 때가 있을 것입니다. 여러 서브 모듈을 하나의 부모 모듈로 결합하여 여러 단계의 종속성을 가질 수 있습니다. 상위 모듈에서 다음 양식의 export 구문을 사용하할 수 있습니다.

```js
export * from "x.js";
export { name } from "x.js";
```

<div class="blockIndicator note"><p><strong>주의</strong>: 이것은 실제로 import 의 줄임말이고, 그 뒤에 export가 옵니다. 예를들면, "나는 모듈 <code>x.js</code>를 가져온 다음, 일부 또는 전부를 export 하겠다" 라는 뜻입니다.</p></div>

예를들어 [module-aggregation](https://github.com/mdn/js-examples/tree/master/module-examples/module-aggregation) 디렉토리를 참조하겠습니다. 이 예제에서는 이전 클래스 예제를 기반으로 `circle.js`, `square.js`, `triangle.js` 의 모든 기능을 함께 모으는 `shapes.js`라는 추가 모듈이 있습니다. 또한 우리는 `shapes` 모듈 디렉토리 안에 있는 서브 디렉토리 내에서 서브 모듈을 이동 시켰습니다. 이제 모듈 구조는 다음과 같습니다.

```
    modules/
      canvas.js
      shapes.js
      shapes/
        circle.js
        square.js
        triangle.js
```

각 하위 모듈에서 export 형태는 같습니다. 예)

```js
export { Square };
```

다음은 집합(aggregation) 부분입니다. [`shapes.js`](https://github.com/mdn/js-examples/blob/master/module-examples/module-aggregation/modules/shapes.js) 안에는 다음과 같은 내용이 포함되어 있습니다.

```js
export { Square } from "./shapes/square.js";
export { Triangle } from "./shapes/triangle.js";
export { Circle } from "./shapes/circle.js";
```

이 모듈은 각각의 서브 모듈의 export를 가져와서 `shapes.js` 모듈에서 효과적으로 사용할 수 있도록 합니다.

> **주의:** `shapes.js` 에서 참조되는 export는 기본적으로 파일을 통해 리다이렉트 되고 실제로는 존재하지 않으므로, 같은 파일 내에 유용한 코드를 쓸 수 없습니다.

이제 `main.js` 파일에서 우리는 세 개의 모듈 클래스를 모두 대체할 수 있습니다.

```js
import { Square } from "./modules/square.js";
import { Circle } from "./modules/circle.js";
import { Triangle } from "./modules/triangle.js";
```

다음과 같은 한 줄로 작성할 수 있습니다.

```js
import {
  Square,
  Circle,
  Triangle,
} from "/js-examples/modules/module-aggregation/modules/shapes.js";
```

## Dynamic module loading

브라우저에서 사용할 수 있는 자바스크립트 모듈 기능의 최신 부분은 동적 모듈 로딩 입니다. 이렇게 하면 모든 것을 최상위에서 불러오지 않고, 필요할 때만 모듈을 동적으로 불러올 수 있습니다. 이것은 몇 가지 분명한 성능 이점이 있습니다. 계속 읽어보고 어떻게 작동하는지 살펴봅시다.

이 새로운 기능을 통해 `import()` 를 함수로 호출하여 모듈 경로를 매개 변수(parameter)로 전달할 수 있습니다. 모듈 객체([Creating a module object](#creating_a_module_object) 참조)를 사용하여 [promise](/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise)를 반환하면 해당 객체의 export에 접근할 수 있습니다.

```js
import("/modules/myModule.js").then((module) => {
  // Do something with the module.
});
```

예제를 보겠습니다. In the [dynamic-module-imports](https://github.com/mdn/js-examples/tree/master/module-examples/dynamic-module-imports) 디렉토리에는 classes 예제를 기반으로 한 또 다른 예제가 있습니다. 이번에는 예제가 로딩될 때 캔버스에 아무것도 그리지 않습니다. 대신 우리는 세 개의 버튼("Circle", "Square", "Triangle")이 포함되어 있습니다. 이 버튼을 누르면 필요한 모듈을 동적으로 불러온 다음, 이를 사용하여 연관된 도형을 그립니다.

이 예제에서 우리는 [index.html](https://github.com/mdn/js-examples/blob/master/module-examples/dynamic-module-imports/index.html) 파일과 [main.js](https://github.com/mdn/js-examples/blob/master/module-examples/dynamic-module-imports/main.js) 파일만 변경했습니다. 모듈 export는 이전과 동일하게 유지됩니다.

`main.js` 에서 [`document.querySelector()`](/ko/docs/Web/API/Document/querySelector) 를 사용하여 각 버튼에 대한 참조를 가져왔습니다. 예를들면 다음과 같습니다.

```js
let squareBtn = document.querySelector(".square");
```

그런 다음 각 버튼에 이벤트 리스너를 연결하여 해당 모듈을 누르면, 동적으로 로드되어 도형을 그리는데 사용됩니다.

```js
squareBtn.addEventListener("click", () => {
  import("/js-examples/modules/dynamic-module-imports/modules/square.js").then(
    (Module) => {
      let square1 = new Module.Square(
        myCanvas.ctx,
        myCanvas.listId,
        50,
        50,
        100,
        "blue",
      );
      square1.draw();
      square1.reportArea();
      square1.reportPerimeter();
    },
  );
});
```

Note that, promise fulfillment 가 모듈 객체를 반환하기 때문에 클래스는 객체의 하위 기능으로 만들어집니다. 따라서 이제 `Module` 을 사용하여 생성자(contructor)에 접근해야 합니다. 예를들어 `Module.Square( ... )` 와 같이 앞에 `Module`이 붙습니다.

## See also

- [Using JavaScript modules on the web](https://developers.google.com/web/fundamentals/primers/modules#mjs), by Addy Osmani and Mathias Bynens
- [ES modules: A cartoon deep-dive](https://hacks.mozilla.org/2018/03/es-modules-a-cartoon-deep-dive/), Hacks blog post by Lin Clark
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), Hacks blog post by Jason Orendorff
- Axel Rauschmayer's book [Exploring JS: Modules](http://exploringjs.com/es6/ch_modules.html)

{{Previous("Web/JavaScript/Guide/Meta_programming")}}
