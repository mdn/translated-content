---
title: import.meta
slug: Web/JavaScript/Reference/Operators/import.meta
---

{{jsSidebar("Operators")}}

**`import.meta`** 속성은 모듈의 메타 데이터를 JavaScript 모듈에 노출합니다. 여기에는 URL과 같은 모듈에 대한 정보가 포함됩니다.

## 구문

```js-nolint
import.meta
```

### 값

`import.meta` 객체는 호스트 환경(브라우저 또는 Node.js 등)에서 모든 속성을 쓰기 가능하고(writable), 구성할 수 있으며(configurable), 열거할 수 있는(enumerable) 확장 가능한(extensible) [`null`-prototype](/ko/docs/Web/JavaScript/Reference/Global_Objects/Object#null-prototype_objects) 객체로 만들어집니다. 사양에는 이 객체에 정의할 속성이 명시되어 있지 않지만, 호스트는 일반적으로 다음과 같은 속성을 구현합니다:

- `url`
  - : 모듈에 대한 전체 URL입니다. 이는 쿼리 매개변수(`?`) 또는 해시(`#`)를 포함합니다. 브라우저에서는 스크립트를 가져온 URL(외부 스크립트의 경우)이거나 포함된 문서의 URL(인라인 스크립트의 경우)입니다. Node.js에서는 `file://`와 같은 프로토콜을 포함한 파일 경로입니다.
- [`resolve`](/ko/docs/Web/JavaScript/Reference/Operators/import.meta/resolve)
  - : 현재 모듈의 URL을 기본으로 사용하여 모듈 지정자를 URL로 해석합니다.

## 설명

`import.meta` 구문은 키워드 `import`, 점(`.`), 식별자로 구성됩니다. `import`는 식별자가 아닌 [예약어](/ko/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words)이므로 [속성 접근자](/ko/docs/Web/JavaScript/Reference/Operators/Property_accessors)가 아니라 특수 표현식 구문입니다.

`import.meta` 속성은 JavaScript 모듈에서 사용할 수 있으며, 모듈 외부에서 `import.meta`를 사용하거나 모듈 내에서 직접 [eval()](/ko/docs/Web/JavaScript/Reference/Global_Objects/eval)을 사용하는 경우, 구문 오류가 발생합니다.

## 예제

### 쿼리 매개변수 전달

`import` 지정자에 쿼리 매개변수를 사용하면 모듈별 인자를 전달할 수 있으며, 이는 애플리케이션 전체에서 매개변수를 읽는 것과 상호보완적일 수 있습니다.(브라우저의 경우 [`window.location`](/ko/docs/Web/API/Window/location), Node.js의 경우 `process.argv`). 예를 들면 다음 HTML이 있습니다:

```html
<script type="module">
  import "./index.mjs?someURLInfo=5";
</script>
```

`index.mjs` 모듈은 `import.meta`를 통해 `someURLInfo` 매개변수를 검색할 수 있습니다:

```js
// index.mjs
new URL(import.meta.url).searchParams.get("someURLInfo"); // 5
```

모듈이 다른 모듈을 가져올 때도 마찬가지입니다:

```js
// index.mjs
import "./index2.mjs?someURLInfo=5";

// index2.mjs
new URL(import.meta.url).searchParams.get("someURLInfo"); // 5
```

Node.js의 ES modules 구현은 두 번째 예시(`index2.mjs`)와 같이 쿼리 매개변수(또는 해시)가 포함된 모듈 지정자 접근을 지원합니다.

그러나, Node.js의 CLI 명령(예: `node index.mjs?someURLInfo=5`)을 통해 모듈을 지정한 경우 쿼리(`?`) 또는 해시(`#`)를 사용할 수 없습니다. CLI 엔트리포인트는 CommonJS와 유사한 모듈 해석을 사용하기 때문에 경로를 URL이 아닌 파일 경로로 취급하기 때문입니다. 엔트리포인트 모듈에 매개변수를 전달하려면 CLI 인수를 사용하고 대신 `process.argv`를 통해 매개변수를 읽어야 합니다(예: `node index.mjs --someURLInfo=5`).

### 현재 파일을 기준으로 파일 확인하기

Node.js CommonJS 모듈에는 현재 모듈이 포함된 폴더의 절대 경로를 포함하는 `__dirname` 변수가 있으며, 이는 상대 경로를 절대 경로로 치환하는 데 유용합니다. 그러나 ES modules은 `import.meta`를 제외하고는 컨텍스트 변수를 가질 수 없습니다. 따라서 파일의 위치를 절대 경로로 치환할 때 `import.meta.url`을 사용할 수 있습니다. 이 경우 파일 시스템 경로가 아닌 URL을 사용한다는 점에 유의하세요.

이전 (CommonJS):

```js
const fs = require("fs/promises");
const path = require("path");

const filePath = path.join(__dirname, "someFile.txt");
fs.readFile(filePath, "utf8").then(console.log);
```

이후 (ES modules):

```js
import fs from "node:fs/promises";

const fileURL = new URL("./someFile.txt", import.meta.url);
fs.readFile(fileURL, "utf8").then(console.log);
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Statements/import", "import")}}
- {{jsxref("Statements/export", "export")}}
