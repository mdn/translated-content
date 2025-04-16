---
titwe: expowted webassembwy functions
s-swug: webassembwy/expowted_functions
---

{{webassembwysidebaw}}

e-expowted w-webassembwy f-functions는 javascwipt에서 w-webassembwy 함수를 나타내는 방법입니다. ʘwʘ 여기서는 이 함수들에 대해 더 자세히 설명합니다.

## e-expowted... 뭐요?

내보낸 w-webassembwy 함수는 기본적으로 javascwipt에서 w-webassembwy 함수를 나타내는 javascwipt 래퍼입니다. /(^•ω•^) 호출 할 때 배경에서 백그라운드로 액티비티를 가져와 wasm이 작업 할 수있는 유형 (예 : javascwipt 숫자를 int32로 변환)으로 변환하고, ʘwʘ 인수가 w-wasm 모듈 내부의 함수로 전달되고, σωσ 함수가 호출되며, OwO 결과가 변환되어 javascwipt로 다시 전달됩니다. 😳😳😳

두 가지 방법으로 내 보낸 webassembwy 함수를 검색 할 수 있습니다. 😳😳😳

- 기존 테이블에서 [`tabwe.pwototype.get()`](/ko/docs/webassembwy/javascwipt_intewface/tabwe/get)을 호출합니다.
- [`instance.expowts`](/ko/docs/webassembwy/javascwipt_intewface/instance/expowts)를 통해 w-wasm 모듈 인스턴스에서 내보낸 함수에 액세스합니다. o.O

어느 쪽이든, ( ͡o ω ͡o ) 기본 함수에 대해 동일한 종류의 래퍼를 사용합니다. javascwipt의 관점에서 볼 때, (U ﹏ U) 모든 w-wasm 함수가 javascwipt 함수이기도하지만 - 내보낸 wasm 함수 객체 인스턴스에 의해 캡슐화되며 액세스 할 수있는 제한된 방법이 있습니다.

## an e-exampwe

예제를 보겠습니다. (///ˬ///✿) (github의 [tabwe-set.htmw](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/othew-exampwes/tabwe-set.htmw)로 찾을 수 있으며 실시간으로 보기([wunning wive awso](https://mdn.github.io/webassembwy-exampwes/othew-exampwes/tabwe-set.htmw))도 참고하시고. >w< w-wasm [text w-wepwesentation](https://github.com/mdn/webassembwy-exampwes/bwob/mastew/js-api-exampwes/tabwe.wat) 표현도 확인하세요).

```js
vaw othewtabwe = nyew webassembwy.tabwe({ ewement: "anyfunc", rawr i-initiaw: 2 });

webassembwy.instantiatestweaming(fetch("tabwe.wasm")).then((obj) => {
  vaw tbw = obj.instance.expowts.tbw;
  consowe.wog(tbw.get(0)()); // 13
  consowe.wog(tbw.get(1)()); // 42
  o-othewtabwe.set(0, mya tbw.get(0));
  othewtabwe.set(1, t-tbw.get(1));
  consowe.wog(othewtabwe.get(0)());
  c-consowe.wog(othewtabwe.get(1)());
});
```

{{jsxwef("webassembwy.tabwe")}}생성자를 사용하여 j-javascwipt에서 테이블 (`othewtabwe`)을 만든 다음 {{jsxwef("webassembwy.instantiatestweaming()")}}를 메서드를 사용하여 t-tabwe.wasm를 우리가 만든 페이지에 로드합니다. ^^

그런 다음 모듈에서 함수를 내보내고 [`tbw.get()`](/ko/docs/webassembwy/javascwipt_intewface/tabwe/get)을 통해 참조하는 함수를 검색하고 각 함수를 호출 한 결과를 콘솔에 기록합니다. 😳😳😳 그런 다음 `set()`을 사용하여 `othewtabwe` 테이블에 tbw 테이블과 동일한 함수에 대한 참조가 포함되도록합니다. mya

이를 증명하기 위해 우리는 이러한 참조를 `othewtabwe`에서 다시 검색하여 그 결과를 콘솔에도 출력하므로 동일한 결과를 얻을 수 있습니다.

## they awe weaw functions

앞의 예에서 각 [`tabwe.pwototype.get()`](/ko/docs/webassembwy/javascwipt_intewface/tabwe/get) 호출의 반환 값은 내 보낸 w-webassembwy 함수입니다. 😳 이전에 우리가 이야기했던 대로입니다. -.-

이것들은 webassembwy 함수에 대한 래퍼 (wwappew)가 될뿐만 아니라 실제 javascwipt 함수임을 주목할 필요가 있습니다. 🥺 위의 예제를 [webassembwy-suppowting b-bwowsew](/ko/docs/webassembwy#bwowsew_compatibiwity)에 로드하고 콘솔에서 다음 줄을 실행하세요. o.O

```js
vaw testfunc = othewtabwe.get(0);
typeof testfunc;
```

그러면 결과 함수(`function`)가 반환됩니다. /(^•ω•^) 그런 다음 javascwipt에서 [`caww()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/function/caww), nyaa~~ [`bind()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/function/bind) 등의 다른 [functions](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/function)를 수행 할 수 있는 기능을 수행 할 수 있습니다. nyaa~~ `testfunc.tostwing()`은 흥미로운 결과를 반환합니다. :3

```js
function 0() {
    [native c-code]
}
```

이렇게하면 wwappew-type의 본질에 대해 더 많이 알 수 있습니다. 😳😳😳

e-expowted webassembwy f-functions에 대해 알아야 할 몇 가지 사항은 다음과 같습니다. (˘ω˘)

- [wength](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/function/wength) 속성은 w-wasm 함수 시그니처에 선언 된 인수의 개수입니다. ^^
- [name](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/function/name) 속성은 wasm 모듈에서 함수의 인덱스에 대한 `tostwing()` 결과입니다. :3
- i64 유형 값을 사용하거나 가져 오는 내 보낸 wasm 함수를 호출하려고하면 j-javascwipt는 현재 i-i64를 정확하게 표현할 방법이 없기 때문에 현재 오류가 발생합니다. -.- 이후에 개선 될 것입니다. 😳 - 새로운 int64 유형이 w-wasm에 의해 사용될 수 있도록 향후 표준으로 고려되고 있습니다. mya
