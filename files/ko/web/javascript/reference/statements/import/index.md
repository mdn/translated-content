---
title: import
slug: Web/JavaScript/Reference/Statements/import
---

{{jsSidebar("Statements")}}

정적 **`import`** 문은 다른 모듈에서 내보낸 바인딩을 가져올 때 사용합니다.

가져오는 모듈은 `"use strict"`의 존재 유무와 상관없이 무조건 [엄격 모드](/ko/docs/Web/JavaScript/Reference/Strict_mode)입니다. HTML 안에 작성한 스크립트에서는 `import`를 사용할 수 없습니다.

함수형 구문을 가진 동적 **`import()`**도 있으며, `type="module"`을 필요로 하지 않습니다.

{{htmlelement("script")}} 태그의 `nomodule` 속성을 사용해 하위호환성을 유지할 수 있습니다.

동적 가져오기는 모듈을 조건적으로 가져오고 싶거나, 필요할 때에만 가져올 때 유용합니다. 반면 초기 의존성을 불러올 때엔 정적 가져오기가 더 좋고, 정적 코드 분석 도구와 {{glossary("Tree shaking", "트리 셰이킹")}}을 적용하기 쉽습니다.

## 구문

```js
    import defaultExport from "module-name";
    import * as name from "module-name";
    import { export1 } from "module-name";
    import { export1 as alias1 } from "module-name";
    import { export1 , export2 } from "module-name";
    import { foo , bar } from "module-name/path/to/specific/un-exported/file";
    import { export1 , export2 as alias2 , [...] } from "module-name";
    import defaultExport, { export1 [ , [...] ] } from "module-name";
    import defaultExport, * as name from "module-name";
    import "module-name";
    var promise = import("module-name");
```

- `defaultExport`
  - : 모듈에서 가져온 기본 내보내기를 가리킬 이름.
- `module-name`
  - : 가져올 대상 모듈. 보통, 모듈을 담은 `.js` 파일로의 절대 또는 상대 경로입니다. 번들러에 따라 확장자를 허용하거나, 필요로 할 수도 있으므로 작업 환경을 확인하세요. 따옴표와 쌍따옴표 문자열만 사용 가능합니다.
- `name`
  - : 가져온 대상에 접근할 때 일종의 이름공간으로 사용할, 모듈 객체의 이름.
- `exportN`
  - : 내보낸 대상 중 가져올 것의 이름.
- `aliasN`
  - : 가져온 유명 내보내기를 가리킬 이름.

## 설명

`name` 파라미터는 export 되는 멤버를 받을 오브젝트의 이름입니다. `member` 파라미터는 각각의 멤버를 지정하지만, `name` 파라미터는 모두를 가져옵니다. 모듈에서 name 은 멤버 대신 하나의 default 파라미터를 통해 export 하는 경우에도 동작할 수 있습니다. 다음의 명확한 예제 문법을 살펴봅시다.

모듈 전체를 가져옵니다. export 한 모든 것들을 현재 범위(스크립트 파일 하나로 구분되는 모듈 범위) 내에 `myModule` 로 바인딩되어 들어갑니다.

```js
import * as myModule from "my-module.js";
```

모듈에서 하나의 멤버만 가져옵니다. 현재 범위 내에 `myMember` 이 들어갑니다.

```js
import { myMember } from "my-module.js";
```

모듈에서 여러 멤버들을 가져옵니다. 현재 범위 내에 `foo` 와 `bar` 이 들어갑니다.

```js
import { foo, bar } from "my-module.js";
```

멤버를 가져올 때 좀 더 편리한 별명을 지정해줍니다. 현재 범위 내에 `shortName` 이 들어갑니다.

```js
import { reallyReallyLongModuleMemberName as shortName } from "my-module.js";
```

모듈에서 여러 멤버들을 편리한 별명을 지정하며 가져옵니다.

```js
import {
  reallyReallyLongModuleMemberName as shortName,
  anotherLongModuleName as short,
} from "my-module.js";
```

어떠한 바인딩 없이 모듈 전체의 사이드 이펙트만 가져옵니다.

```js
import "my-module.js";
```

### 기본값 가져오기

default export 를 통해 내보낸 것을 기본값으로 가져올 수 있습니다. (object, function, class 등). export 와 상반된 `import` 명령어를 통해 기본값을 가져오는 것이 가능합니다.

기본값으로 바로 가져오는 가장 간단한 버전:

```js
import myModule from "my-module.js";
```

위와 함께 기본 구문도 같이 사용할 수 있습니다 (namespace 가져오기 또는 이름 지정하여 가져오기). 이러한 경우, 기본값 가져오는 부분을 먼저 선언해야 할 것입니다. 예를 들어:

```js
import myDefault, * as myModule from "my-module.js";
// myModule used as a namespace
```

또는

```js
import myDefault, { foo, bar } from "my-module.js";
// specific, named imports
```

## 예제

AJAX JSON 리퀘스트 처리를 돕는 보조 파일을 가져옵니다.

```js
// --file.js--
function getJSON(url, callback) {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    callback(this.responseText);
  };
  xhr.open("GET", url, true);
  xhr.send();
}

export function getUsefulContents(url, callback) {
  getJSON(url, (data) => callback(JSON.parse(data)));
}

// --main.js--
import { getUsefulContents } from "file.js";
getUsefulContents("http://www.example.com", (data) => {
  doSomethingUseful(data);
});
```

## 명세서

{{Specifications}}

## 브라우저 호환성

{{Compat}}

## 같이 보기

- {{jsxref("Statements/export", "export")}}
- [Previewing ES6 Modules and more from ES2015, ES2016 and beyond](https://blogs.windows.com/msedgedev/2016/05/17/es6-modules-and-beyond/)
- [ES6 in Depth: Modules](https://hacks.mozilla.org/2015/08/es6-in-depth-modules/), Hacks blog post by Jason Orendorff
- [Axel Rauschmayer's book: "Exploring JS: Modules"](http://exploringjs.com/es6/ch_modules.html)
