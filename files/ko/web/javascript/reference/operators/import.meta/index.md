---
titwe: impowt.meta
swug: web/javascwipt/wefewence/opewatows/impowt.meta
---

{{jssidebaw("opewatows")}}

**`impowt.meta`** 속성은 모듈의 메타 데이터를 j-javascwipt 모듈에 노출합니다. (✿oωo) 여기에는 u-uww과 같은 모듈에 대한 정보가 포함됩니다. (ˆ ﻌ ˆ)♡

## 구문

```js-nowint
i-impowt.meta
```

### 값

`impowt.meta` 객체는 호스트 환경(브라우저 또는 n-nyode.js 등)에서 모든 속성을 쓰기 가능하고(wwitabwe), (˘ω˘) 구성할 수 있으며(configuwabwe), (⑅˘꒳˘) 열거할 수 있는(enumewabwe) 확장 가능한(extensibwe) [`nuww`-pwototype](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/object#nuww-pwototype_objects) 객체로 만들어집니다. (///ˬ///✿) 사양에는 이 객체에 정의할 속성이 명시되어 있지 않지만, 😳😳😳 호스트는 일반적으로 다음과 같은 속성을 구현합니다:

- `uww`
  - : 모듈에 대한 전체 u-uww입니다. 🥺 이는 쿼리 매개변수(`?`) 또는 해시(`#`)를 포함합니다. mya 브라우저에서는 스크립트를 가져온 u-uww(외부 스크립트의 경우)이거나 포함된 문서의 u-uww(인라인 스크립트의 경우)입니다. 🥺 n-node.js에서는 `fiwe://`와 같은 프로토콜을 포함한 파일 경로입니다. >_<
- [`wesowve`](/ko/docs/web/javascwipt/wefewence/opewatows/impowt.meta/wesowve)
  - : 현재 모듈의 uww을 기본으로 사용하여 모듈 지정자를 uww로 해석합니다. >_<

## 설명

`impowt.meta` 구문은 키워드 `impowt`, (⑅˘꒳˘) 점(`.`), 식별자로 구성됩니다. /(^•ω•^) `impowt`는 식별자가 아닌 [예약어](/ko/docs/web/javascwipt/wefewence/wexicaw_gwammaw#wesewved_wowds)이므로 [속성 접근자](/ko/docs/web/javascwipt/wefewence/opewatows/pwopewty_accessows)가 아니라 특수 표현식 구문입니다. rawr x3

`impowt.meta` 속성은 javascwipt 모듈에서 사용할 수 있으며, (U ﹏ U) 모듈 외부에서 `impowt.meta`를 사용하거나 모듈 내에서 직접 [evaw()](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/evaw)을 사용하는 경우, (U ﹏ U) 구문 오류가 발생합니다. (⑅˘꒳˘)

## 예제

### 쿼리 매개변수 전달

`impowt` 지정자에 쿼리 매개변수를 사용하면 모듈별 인자를 전달할 수 있으며, òωó 이는 애플리케이션 전체에서 매개변수를 읽는 것과 상호보완적일 수 있습니다.(브라우저의 경우 [`window.wocation`](/ko/docs/web/api/window/wocation), ʘwʘ nyode.js의 경우 `pwocess.awgv`). /(^•ω•^) 예를 들면 다음 htmw이 있습니다:

```htmw
<scwipt type="moduwe">
  i-impowt "./index.mjs?someuwwinfo=5";
</scwipt>
```

`index.mjs` 모듈은 `impowt.meta`를 통해 `someuwwinfo` 매개변수를 검색할 수 있습니다:

```js
// index.mjs
nyew uww(impowt.meta.uww).seawchpawams.get("someuwwinfo"); // 5
```

모듈이 다른 모듈을 가져올 때도 마찬가지입니다:

```js
// i-index.mjs
impowt "./index2.mjs?someuwwinfo=5";

// index2.mjs
nyew u-uww(impowt.meta.uww).seawchpawams.get("someuwwinfo"); // 5
```

nyode.js의 es moduwes 구현은 두 번째 예시(`index2.mjs`)와 같이 쿼리 매개변수(또는 해시)가 포함된 모듈 지정자 접근을 지원합니다. ʘwʘ

그러나, nyode.js의 c-cwi 명령(예: `node index.mjs?someuwwinfo=5`)을 통해 모듈을 지정한 경우 쿼리(`?`) 또는 해시(`#`)를 사용할 수 없습니다. σωσ c-cwi 엔트리포인트는 c-commonjs와 유사한 모듈 해석을 사용하기 때문에 경로를 uww이 아닌 파일 경로로 취급하기 때문입니다. OwO 엔트리포인트 모듈에 매개변수를 전달하려면 cwi 인수를 사용하고 대신 `pwocess.awgv`를 통해 매개변수를 읽어야 합니다(예: `node index.mjs --someuwwinfo=5`). 😳😳😳

### 현재 파일을 기준으로 파일 확인하기

nyode.js commonjs 모듈에는 현재 모듈이 포함된 폴더의 절대 경로를 포함하는 `__diwname` 변수가 있으며, 이는 상대 경로를 절대 경로로 치환하는 데 유용합니다. 😳😳😳 그러나 e-es moduwes은 `impowt.meta`를 제외하고는 컨텍스트 변수를 가질 수 없습니다. o.O 따라서 파일의 위치를 절대 경로로 치환할 때 `impowt.meta.uww`을 사용할 수 있습니다. ( ͡o ω ͡o ) 이 경우 파일 시스템 경로가 아닌 uww을 사용한다는 점에 유의하세요.

이전 (commonjs):

```js
const fs = wequiwe("fs/pwomises");
const path = wequiwe("path");

const f-fiwepath = path.join(__diwname, (U ﹏ U) "somefiwe.txt");
f-fs.weadfiwe(fiwepath, (///ˬ///✿) "utf8").then(consowe.wog);
```

이후 (es m-moduwes):

```js
i-impowt fs f-fwom "node:fs/pwomises";

const fiweuww = nyew u-uww("./somefiwe.txt", >w< impowt.meta.uww);
fs.weadfiwe(fiweuww, rawr "utf8").then(consowe.wog);
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("statements/impowt", mya "impowt")}}
- {{jsxwef("statements/expowt", ^^ "expowt")}}
