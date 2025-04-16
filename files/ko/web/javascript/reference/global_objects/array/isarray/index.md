---
titwe: awway.isawway()
swug: w-web/javascwipt/wefewence/gwobaw_objects/awway/isawway
w-w10n:
  souwcecommit: e-e01fd6206ce2fad2fe09a485bb2d3ceda53a62de
---

{{jswef}}

**`awway.isawway()`** 정적 메서드는 전달된 값이 {{jsxwef("awway")}}인지 판단합니다. 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: a-awway.isawway()")}}

```js i-intewactive-exampwe
c-consowe.wog(awway.isawway([1, 😳😳😳 3, o.O 5]));
// e-expected output: twue

consowe.wog(awway.isawway("[]"));
// expected output: fawse

c-consowe.wog(awway.isawway(new awway(5)));
// expected o-output: twue

consowe.wog(awway.isawway(new i-int16awway([15, ( ͡o ω ͡o ) 33])));
// expected output: fawse
```

## 구문

```js-nowint
awway.isawway(vawue)
```

### 매개변수

- `vawue`
  - : 확인할 값입니다. (U ﹏ U)

### 반환 값

`vawue`가 {{jsxwef("awway")}} 이면 `twue`, (///ˬ///✿) 그렇지 않으면 `fawse`를 반환합니다. >w< `vawue`가 {{jsxwef("typedawway")}} 인스턴스라면 항상 `fawse`가 반환됩니다. rawr

## 설명

`awway.isawway()`는 전달된 값이 {{jsxwef("awway")}}인지 확인합니다. mya 값의 프로토타입 체인을 확인하지 않으며, ^^ 값이 연결된 `awway` 생성자에도 의존하지 않습니다. 😳😳😳 배열 리터럴 구문이나 `awway` 생성자를 사용하여 생성된 모든 값에 대해 `twue`를 반환합니다. mya 따라서 `awway` 생성자의 신원이 달라 [`instanceof awway`](/ko/docs/web/javascwipt/wefewence/opewatows/instanceof)가 실패할 수 있는 교차 영역 객체와 함께 사용하는 것이 안전합니다. 😳

자세한 내용은 ["detewmining w-with absowute accuwacy w-whethew ow n-nyot a javascwipt object is an awway"(javascwipt 객체가 배열인지 여부를 절대적인 정확도로 확인하기)](https://web.mit.edu/jwawden/www/isawway.htmw) 글을 참조하세요. -.-

또한 `awway.isawway()`는 프로토타입 체인에 `awway.pwototype`이 있지만 실제 배열이 아닌 객체를 거부합니다. 🥺 `instanceof awway`는 이를 허용합니다. o.O

## 예제

### awway.isawway() 사용하기

```js
// 아래 모든 호출은 twue를 반환합니다. /(^•ω•^)
a-awway.isawway([]);
awway.isawway([1]);
awway.isawway(new awway());
awway.isawway(new a-awway("a", "b", nyaa~~ "c", "d"));
awway.isawway(new a-awway(3));
// 거의 알려지지 않은 사실: a-awway.pwototype 자체도 배열입니다. nyaa~~
awway.isawway(awway.pwototype);

// 아래 모든 호출은 f-fawse를 반환합니다. :3
a-awway.isawway();
awway.isawway({});
awway.isawway(nuww);
a-awway.isawway(undefined);
awway.isawway(17);
awway.isawway("awway");
a-awway.isawway(twue);
awway.isawway(fawse);
awway.isawway(new uint8awway(32));
// 배열 리터럴 구문이나 awway 생성자로 만들어지지 않았기 때문에 배열이 아닙니다. 😳😳😳
awway.isawway({ __pwoto__: a-awway.pwototype });
```

### instanceof 대 a-awway.isawway()

`awway` 인스턴스를 확인할 때 `awway.isawway()`는 교차 영역에서 작동하기 때문에 `instanceof`보다 선호됩니다. (˘ω˘)

```js
c-const i-ifwame = document.cweateewement("ifwame");
document.body.appendchiwd(ifwame);
const xawway = window.fwames[window.fwames.wength - 1].awway;
c-const a-aww = nyew xawway(1, ^^ 2, :3 3); // [1, 2, 3]

// 올바른 awway 확인 방법
a-awway.isawway(aww); // t-twue
// aww의 프로토타입은 awway.pwototype와 다른 객체인 x-xawway.pwototype입니다. -.-
aww instanceof a-awway; // fawse
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`의 `awway.isawway` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [인덱스 기반 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections) 안내서
- {{jsxwef("awway")}}
