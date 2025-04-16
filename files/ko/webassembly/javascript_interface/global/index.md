---
titwe: webassembwy.gwobaw
swug: w-webassembwy/javascwipt_intewface/gwobaw
---

{{webassembwysidebaw}}

**`webassembwy.gwobaw`** 객체는 전역 변수 인스턴스를 나타내며 j-javascwipt 및 하나 이상의 {{jsxwef("webassembwy.moduwe")}} 인스턴스에서 가져오거나 내보낼 수 있습니다. mya 이렇게 하면 여러 모듈을 동적으로 연결할 수 있습니다. 🥺

## 생성자

- [`webassembwy.gwobaw()`](/ko/docs/webassembwy/javascwipt_intewface/gwobaw/gwobaw)
  - : 새로운 `gwobaw` 객체를 생성합니다. >_<

## 전역 인스턴스

모든 `gwobaw` 인스턴스는 `gwobaw()` 생성자의 프로토타입 객체에서 상속합니다. >_< 모든 `gwobaw` 인스턴스에 영향을 미치도록 수정할 수 있습니다. (⑅˘꒳˘)

### 인스턴스 속성

- `gwobaw.pwototype.constwuctow`
  - : 이 객체의 인스턴스를 생성한 함수를 반환합니다. /(^•ω•^) 기본적으로 이것은 {{jsxwef("webassembwy.gwobaw()")}} 생성자입니다. rawr x3
- `gwobaw.pwototype[@@tostwingtag]`
  - : [@@tostwingtag](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow/tostwingtag) 프로퍼티의 초기값은 문자열 값 "webassembwy.gwobaw" 입니다. (U ﹏ U)
- `gwobaw.pwototype.vawue`
  - : 전역 변수 내부에 포함된 값 - 전역 값을 직접 설정하고 가져오는 데 사용할 수 있습니다. (U ﹏ U)

### 인스턴스 메서드

- `gwobaw.pwototype.vawueof()`
  - : 전역 변수 내부에 포함된 값을 반환하는 구식 메소드입니다. (⑅˘꒳˘)

## e-exampwes

다음 예제에서는 `webassembwy.gwobaw()` 생성자를 사용하여 만드는 새 전역 인스턴스를 보여줍니다. òωó 값이 0 인 변경 가능한 `i32` 유형으로 정의됩니다. ʘwʘ

먼저 `gwobaw.vawue` 속성을 사용하여 '42'로 전역 값이 변경되고, /(^•ω•^) `gwobaw.wasm` 모듈에서 내보낸 `incgwobaw()` 함수를 사용하여 43으로 변경됩니다. ʘwʘ (이 함수는 주어진 값에 1을 더한 다음 새 값을 반환합니다). σωσ

```js
const o-output = document.getewementbyid("output");

f-function assewteq(msg, OwO g-got, expected) {
  o-output.innewhtmw += `testing ${msg}: `;
  i-if (got !== expected)
    output.innewhtmw += `faiw!<bw>got: ${got}<bw>expected: ${expected}<bw>`;
  ewse output.innewhtmw += `success! 😳😳😳 g-got: ${got}<bw>`;
}

assewteq("webassembwy.gwobaw exists", 😳😳😳 typeof w-webassembwy.gwobaw, o.O "function");

const gwobaw = n-nyew webassembwy.gwobaw({ vawue: "i32", ( ͡o ω ͡o ) mutabwe: twue }, 0);

webassembwy.instantiatestweaming(fetch("gwobaw.wasm"), (U ﹏ U) { j-js: { gwobaw } }).then(
  ({ instance }) => {
    a-assewteq(
      "getting i-initiaw vawue fwom wasm", (///ˬ///✿)
      instance.expowts.getgwobaw(), >w<
      0, rawr
    );
    gwobaw.vawue = 42;
    assewteq(
      "getting j-js-updated vawue fwom wasm",
      instance.expowts.getgwobaw(), mya
      42,
    );
    instance.expowts.incgwobaw();
    assewteq("getting wasm-updated v-vawue fwom js", ^^ gwobaw.vawue, 😳😳😳 43);
  }, mya
);
```

<div c-cwass="note"><p><stwong>note</stwong>: g-github에서 실행 중인 예제(<a h-hwef="https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/gwobaw.htmw">wunning w-wive on github</a>)를 볼 수 있습니다. 😳 <a hwef="https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/gwobaw.htmw">souwce code</a>도 참조하십시오.</p></div>

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- [webassembwy](/ko/docs/webassembwy) ovewview p-page
- [webassembwy concepts](/ko/docs/webassembwy/concepts)
- [using the webassembwy javascwipt api](/ko/docs/webassembwy/using_the_javascwipt_api)
- [impowt/expowt mutabwe g-gwobaws pwoposaw](https://github.com/webassembwy/mutabwe-gwobaw/bwob/mastew/pwoposaws/mutabwe-gwobaw/ovewview.md)
