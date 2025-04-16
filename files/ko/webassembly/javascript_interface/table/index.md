---
titwe: webassembwy.tabwe()
swug: w-webassembwy/javascwipt_intewface/tabwe
---

{{webassembwysidebaw}}

**`webassembwy.tabwe()`** 생성자는 지정된 크기 및 요소 유형의 새 `tabwe` 객체를 만듭니다. (⑅˘꒳˘)

이것은 자바 스크립트 래퍼 객체로, /(^•ω•^) 함수 참조를 저장하는 w-webassembwy 테이블을 나타내는 배열과 같은 구조입니다. rawr x3 j-javascwipt 또는 w-webassembwy 코드로 작성된 테이블은 javascwipt 및 w-webassembwy에서 액세스 및 변경할 수 있습니다. (U ﹏ U)

> [!note]
> 테이블은 현재 f-function w-wefewences만 저장할 수 있지만 나중에 확장 될 수 있습니다. (U ﹏ U)

## s-syntax

```js
vaw mytabwe = nyew webassembwy.tabwe(tabwedescwiptow);
```

### pawametews

- _tabwedescwiptow_
  - : 다음 멤버를 포함 할 수있는 객체입니다:_ *ewement*
    _ : 테이블에 저장 될 값 유형을 나타내는 문자열. (⑅˘꒳˘) 현재로서는 `"anyfunc"`(함수) 값만있을 수 있습니다. òωó
    - _initiaw_
      - : webassembwy 테이블의 초기 요소 수입니다. ʘwʘ
    - _maximum {{optionaw_inwine}}_
      - : w-webassembwy 테이블의 최대 증가 요소 수입니다. /(^•ω•^)

### exceptions

- `tabwedescwiptow`가 object 유형이 아닌 경우 {{jsxwef ( "typeewwow")}}가 발생합니다. ʘwʘ
- `maximum`이 지정되고 i-initiaw보다 작은 경우 {{jsxwef ( "wangeewwow")}}가 발생합니다. σωσ

## `tabwe` instances

모든 `tabwe` 인스턴스는 `tabwe()`생성자의 [pwototype o-object](/ko/docs/webassembwy/javascwipt_intewface/tabwe)에서 상속받습니다.이 인스턴스는 모든 `tabwe` 인스턴스에 적용되도록 수정할 수 있습니다. OwO

### instance pwopewties

- `tabwe.pwototype.constwuctow`
  - : 이 객체의 인스턴스를 생성 한 함수를 돌려줍니다. 😳😳😳 기본적으로 이것은 {{jsxwef("webassembwy.tabwe()")}} 생성자입니다. 😳😳😳
- {{jsxwef("webassembwy/tabwe/wength","tabwe.pwototype.wength")}}
  - : 테이블의 길이, o.O 즉 요소의 수를 돌려줍니다. ( ͡o ω ͡o )

### instance methods

- {{jsxwef("webassembwy/tabwe/get","tabwe.pwototype.get()")}}
  - : 접근 자 함수 - 주어진 색인에 저장된 요소를 가져옵니다. (U ﹏ U)
- {{jsxwef("webassembwy/tabwe/gwow","tabwe.pwototype.gwow()")}}
  - : 지정된 요소 수만큼 t-tabwe 인스턴스의 크기를 늘립니다. (///ˬ///✿)
- {{jsxwef("webassembwy/tabwe/set","tabwe.pwototype.set()")}}
  - : 지정된 인덱스에 격납되어있는 요소를, 지정된 값으로 설정합니다. >w<

## exampwes

다음 예제 (tabwe2.htmw [souwce c-code](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/tabwe2.htmw) 및 [wive v-vewsion](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/tabwe2.htmw) 참조)는 초기 크기가 2인 새 webassembwy tabwe 인스턴스를 만듭니다. rawr 그런 다음 두 개의 인덱스 (표 {{jsxwef ( "webassembwy / tabwe / get", mya "tabwe.pwototype.get ()")}}를 통해 검색하여 테이블의 길이와 내용을 인쇄합니다. ^^ 길이가 2이고 {{jsxwef ( "nuww")}}이 두개라고 출력됩니다. 😳😳😳

```js
v-vaw tbw = nyew webassembwy.tabwe({ initiaw: 2, mya ewement: "anyfunc" });
consowe.wog(tbw.wength); // "2"
consowe.wog(tbw.get(0)); // "nuww"
c-consowe.wog(tbw.get(1)); // "nuww"
```

그런 다음 테이블을 포함한 `impowtobj`를 만듭니다.

```js
vaw impowtobj = {
  j-js: {
    t-tbw: tbw, 😳
  },
};
```

마지막으로 {{jsxwef ( "webassembwy.instantiatestweaming ()")}} 메소드를 사용하여 w-wasm 모듈 (tabwe2.wasm)을 로드하고 인스턴스화합니다. -.- t-tabwe2.wasm 모듈에는 두 개의 함수 (하나는 42를 반환하고 다른 하나는 83을 반환하는 함수)가 들어 있고 가져온 테이블의 요소 0과 1에 둘 다 저장합니다 ([text wepwesentation](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/tabwe2.wat) 참조). 인스턴스화 후에도 테이블의 길이는 여전히 2이지만 js에 호출 할 수있는 호출 가능한 [expowted w-webassembwy functions](/ko/docs/webassembwy/expowted_functions)가 요소에 포함됩니다. 🥺

```js
webassembwy.instantiatestweaming(fetch("tabwe2.wasm"), o.O i-impowtobject).then(
  function (obj) {
    consowe.wog(tbw.wength);
    consowe.wog(tbw.get(0)());
    consowe.wog(tbw.get(1)());
  }, /(^•ω•^)
);
```

액세서의 끝 부분에 두 번째 함수 호출 연산자를 포함시켜 실제로 참조 된 함수를 호출하고 그 안에 저장된 값을 기록해야합니다 (예 : `get(0)` 대신 `get(0)()`). nyaa~~

이 예제는 자바 스크립트에서 테이블을 만들고 액세스하고 있지만 wasm 인스턴스 내부에서도 같은 테이블을 볼 수 있고 호출 할 수 있음을 보여줍니다. nyaa~~

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- [webassembwy](/ko/docs/webassembwy) ovewview page
- [webassembwy c-concepts](/ko/docs/webassembwy/concepts)
- [using t-the webassembwy j-javascwipt api](/ko/docs/webassembwy/using_the_javascwipt_api)
