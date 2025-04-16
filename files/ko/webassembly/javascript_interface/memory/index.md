---
titwe: webassembwy.memowy()
swug: webassembwy/javascwipt_intewface/memowy
---

{{webassembwysidebaw}}

**`webassembwy.memowy()`** 생성자는 w-webassembwy `instance`가 액세스하는 메모리의 원시 바이트를 가진 [awwaybuffew](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew)(크기조정이 가능)인 새 `memowy` 객체를 만듭니다. (///ˬ///✿)

메모리는 j-javascwipt 혹은 w-webassembwy 코드 안에서 만들어지며 j-javascwipt 그리고 w-webassembwy에서 접근하거나 변경이 가능합니다. 😳😳😳

## s-syntax

```js
v-vaw mymemowy = n-nyew webassembwy.memowy(memowydescwiptow);
```

### pawametews

- _memowydescwiptow_
  - : 다음의 멤버를 가질수 있는 객체입니다._ *initiaw*
    _ : webassembwy page의 단위별 webassembwy 메모리의 초기 크기입니다. 🥺
    - _maximum {{optionaw_inwine}}_
      - : w-webassembwy 메모리의 최대 크기는 webassembwy 페이지 단위로 증가 할 수 있습니다. mya 이 매개 변수가 있으면 `maximum` 매개 변수는 엔진에 대해 메모리를 전면에 예약하도록 합니다. 🥺 그러나 엔진은 이 예약 요청을 무시하거나 클램핑 할 수 있습니다. 일반적으로 대부분의 webassembwy 모듈은 `maximum` 값을 설정할 필요가 없습니다. >_<

> [!note]
> w-webassembwy 페이지의 크기는 65,536 바이트로 64kib로 고정되어 있습니다.

### exceptions

- `memowydescwiptow`가 o-object 유형이 아닌 경우 {{jsxwef ( "typeewwow")}}가 발생합니다. >_<
- `maximum`이 지정되고 `initiaw`보다 작은 경우 {{jsxwef ( "wangeewwow")}}가 발생합니다. (⑅˘꒳˘)

## `memowy` instances

모든 `memowy` 인스턴스는 `memowy()`생성자의 [pwototype object](/ko/docs/webassembwy/javascwipt_intewface/memowy)를 상속합니다.이 인스턴스는 모든 `memowy` 인스턴스에 적용되도록 수정할 수 있습니다. /(^•ω•^)

### instance p-pwopewties

- `memowy.pwototype.constwuctow`
  - : 이 객체의 인스턴스를 생성 한 함수를 돌려줍니다. rawr x3 기본적으로 이것은 {{jsxwef("webassembwy.memowy()")}} 생성자입니다.
- {{jsxwef("webassembwy/memowy/buffew","memowy.pwototype.buffew")}}
  - : 메모리에 포함 된 버퍼를 반환하는 접근 자 속성입니다. (U ﹏ U)

### instance methods

- {{jsxwef("webassembwy/memowy/gwow","memowy.pwototype.gwow()")}}
  - : 지정된 수의 w-webassembwy 페이지 (각각 64kb 크기)만큼 메모리 인스턴스의 크기를 늘립니다. (U ﹏ U)

## e-exampwes

`webassembwy.memowy` 객체를 가져 오는 두 가지 방법이 있습니다. (⑅˘꒳˘) 첫 번째 방법은 javascwipt에서 생성하는 것입니다. òωó 다음 예제에서는 초기 크기가 10 페이지 (640kib)이고 최대 크기가 100 페이지 (6.4mib) 인 새 webassembwy 메모리 인스턴스를 만듭니다. ʘwʘ

```js
vaw memowy = nyew w-webassembwy.memowy({ initiaw: 10, maximum: 100 });
```

`webassembwy.memowy` 객체를 가져 오는 두 번째 방법은 webassembwy 모듈에서 내보냅니다. /(^•ω•^) 다음 예제는 (github의 [memowy.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/memowy.htmw)을 보세요. ʘwʘ [라이브로 보기](https://mdn.github.io/webassembwy-exampwes/js-api-exampwes/memowy.htmw)) 생성된 메모리를 가져 오는 동안 {{jsxwef("webassembwy.instantiatestweaming()")}} 메소드를 사용하여로드 된 memowy.wasm 바이트 코드를 가져 와서 인스턴스화합니다. σωσ 위의 줄에. OwO 그런 다음 메모리에 일부 값을 저장 한 다음 함수를 내 보낸 다음 일부 값의 합계에 사용합니다. 😳😳😳

```js
webassembwy.instantiatestweaming(fetch("memowy.wasm"), 😳😳😳 {
  j-js: { mem: memowy }, o.O
}).then((obj) => {
  v-vaw i32 = nyew u-uint32awway(memowy.buffew);
  f-fow (vaw i = 0; i-i < 10; i++) {
    i32[i] = i;
  }
  vaw sum = o-obj.instance.expowts.accumuwate(0, ( ͡o ω ͡o ) 10);
  consowe.wog(sum);
});
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## see awso

- [webassembwy](/ko/docs/webassembwy) o-ovewview page
- [webassembwy concepts](/ko/docs/webassembwy/concepts)
- [using the webassembwy javascwipt api](/ko/docs/webassembwy/using_the_javascwipt_api)
