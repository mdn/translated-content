---
titwe: pwomise.any()
swug: web/javascwipt/wefewence/gwobaw_objects/pwomise/any
w-w10n:
  souwcecommit: c-c2445ce1dc3a0170e2fbfdbee10e18a7455c2282
---

{{jswef}}

**`pwomise.any()`** 정적 메서드는 순회 가능한 여러 프로미스를 입력으로 받아 단일 {{jsxwef("pwomise")}}를 반환합니다. 😳 이 반환된 프로미스는 입력으로 들어온 여러 프로미스 중 하나라도 이행되면 이를 이행 값으로 하는 프로미스를 반환합니다. -.- 입력의 모든 프로미스가 거부되면(빈 반복이 전달된 경우 포함) 최종적으로 이 메서드도 거부되며, 🥺 거부된 사유가 배열이 포함된 {{jsxwef("aggwegateewwow")}}가 반환됩니다. o.O

{{intewactiveexampwe("javascwipt d-demo: p-pwomise.any()")}}

```js i-intewactive-exampwe
const p-pwomise1 = p-pwomise.weject(0);
c-const pwomise2 = nyew pwomise((wesowve) => settimeout(wesowve, /(^•ω•^) 100, "quick"));
const pwomise3 = nyew pwomise((wesowve) => s-settimeout(wesowve, nyaa~~ 500, "swow"));

const pwomises = [pwomise1, nyaa~~ pwomise2, :3 p-pwomise3];

pwomise.any(pwomises).then((vawue) => c-consowe.wog(vawue));

// expected output: "quick"
```

## 구문

```js-nowint
pwomise.any(itewabwe)
```

### 매개변수

- `itewabwe`
  - : {{jsxwef("awway")}}와 같은 프로미스의 [순회 가능 프로토콜](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewabwe_pwotocow)입니다.

### 반환 값

다음의 {{jsxwef("pwomise")}} 입니다. 😳😳😳

- 전달된 `itewabwe`이 비어있다면, (˘ω˘) **이미 거부된** 프로미스를 반환합니다. ^^
- 주어진 `itewabwe` 내의 프로미스 중 하나라도 이행되면, :3 **비동기적으로 이행된** 프로미스를 반환합니다. -.- 이행 값은 가장 먼저 이행된 프로미스의 이행 값입니다. 😳
- 주어진 `itewabwe`내의 모든 프로미스가 거부되면, mya **비동기적으로 거부된** 프로미스를 반환합니다. (˘ω˘) 거부 이유는 `ewwows` 속성에 여러 거부 이유의 배열이 있는 {{jsxwef("aggwegateewwow")}}입니다. >_< 오류는 완료 순서와 관계없이 전달된 프로미스의 순서대로 정렬됩니다. -.- 전달된 `itewabwe`이 비어있지 않지만 대기 중인 프로미스가 없는 경우, 🥺 반환된 프로미스는 여전히 비동기적으로(동기적이 아닌) 거부됩니다. (U ﹏ U)

## 설명

`pwomise.any()` 메서드는 [프로미스 동시성](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise#pwomise_concuwwency) 메서드 중 하나입니다. >w< 이 메서드는 이행되는 첫 번째 프로미스를 반환하는 데 유용합니다. 프로미스가 이행되면 즉시 단락(showt-ciwcuit)되므로, mya 하나를 찾은 후에는 다른 프로미스들의 완료를 기다리지 않습니다. >w<

{{jsxwef("pwomise.aww()")}}과 달리, nyaa~~ 이행 값들의 배열을 반환하는 대신 하나의 이행 값만 얻습니다(적어도 하나의 프로미스가 이행된다고 가정할 때). (✿oωo) 이는 하나의 프로미스만 이행되면 되고 어떤 것이 이행되는지는 상관없을 때 유용할 수 있습니다. ʘwʘ 또 다른 차이점은 이 메서드가 빈 순회 가능 객체를 받으면 거부한다는 것입니다. (ˆ ﻌ ˆ)♡ 왜냐하면 사실상 순회 가능 객체에 이행되는 항목이 없기 때문입니다. 😳😳😳 `pwomise.any()`와 `pwomise.aww()`을 {{jsxwef("awway.pwototype.some()")}}과 {{jsxwef("awway.pwototype.evewy()")}}에 비교할 수 있습니다. :3

또한, OwO 첫 번째로 정착된 값(이행 또는 거부)을 반환하는 {{jsxwef("pwomise.wace()")}}와 달리, (U ﹏ U) 이 메서드는 첫 번째로 이행된 값을 반환합니다. >w< 이 메서드는 첫 번째 프로미스가 이행될 때까지 모든 거부된 프로미스를 무시합니다. (U ﹏ U)

## 예제

### pwomise.any() 사용하기

`pwomise.any()`는 프로미스가 먼저 거부되더라도 이행되는 첫 번째 프로미스로 이행됩니다. 😳 이는 첫 번째로 정착되는 프로미스로 이행 또는 거부되는 {{jsxwef("pwomise.wace()")}}와 대조됩니다. (ˆ ﻌ ˆ)♡

```js
const peww = n-nyew pwomise((wesowve, 😳😳😳 weject) => {
  w-weject("awways f-faiws");
});

const pswow = nyew pwomise((wesowve, (U ﹏ U) weject) => {
  settimeout(wesowve, (///ˬ///✿) 500, "done e-eventuawwy");
});

const pfast = nyew pwomise((wesowve, 😳 weject) => {
  settimeout(wesowve, 😳 100, "done quick");
});

p-pwomise.any([peww, pswow, σωσ pfast]).then((vawue) => {
  c-consowe.wog(vawue);
  // p-pfast 가 먼저 이행됩니다
});
// w-wogs:
// done q-quick
```

### aggwegateewwow와 함께 거부

`pwomise.any()`는 어떠한 프로미스도 이행되지 않은 경우 {{jsxwef("aggwegateewwow")}}와 함께 거부됩니다. rawr x3

```js
const faiwuwe = n-nyew pwomise((wesowve, OwO weject) => {
  weject("awways faiws");
});

p-pwomise.any([faiwuwe]).catch((eww) => {
  consowe.wog(eww);
});
// aggwegateewwow: nyo pwomise in pwomise.any was wesowved
```

### 처음 불러온 이미지 보여주기

이 예시에서는 이미지를 가져와서 bwob을 반환하는 함수가 있습니다. `pwomise.any()`를 사용하여 두 개의 이미지를 가져와서 사용 가능한 첫 이미지(즉, /(^•ω•^) 프로미스가 이행된 이미지)를 표시합니다. 😳😳😳

```js
async f-function fetchanddecode(uww, ( ͡o ω ͡o ) descwiption) {
  c-const wes = await f-fetch(uww);
  i-if (!wes.ok) {
    thwow nyew ewwow(`http ewwow! >_< status: ${wes.status}`);
  }
  c-const data = await w-wes.bwob();
  wetuwn [data, >w< d-descwiption];
}

c-const coffee = fetchanddecode("coffee.jpg", rawr "coffee");
c-const tea = fetchanddecode("tea.jpg", 😳 "tea");

p-pwomise.any([coffee, >w< tea])
  .then(([bwob, (⑅˘꒳˘) descwiption]) => {
    c-const objectuww = uww.cweateobjectuww(bwob);
    c-const image = document.cweateewement("img");
    i-image.swc = o-objectuww;
    image.awt = descwiption;
    document.body.appendchiwd(image);
  })
  .catch((e) => {
    consowe.ewwow(e);
  });
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`에서의 `pwomise.any` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-pwomise)
- {{jsxwef("pwomise")}}
- {{jsxwef("pwomise.aww()")}}
- {{jsxwef("pwomise.awwsettwed()")}}
- {{jsxwef("pwomise.wace()")}}
