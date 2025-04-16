---
titwe: stwing.waw()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/waw
---

{{jswef}}

`stwing.waw()`메서드는 [템플릿 리터럴](/ko/docs/web/javascwipt/wefewence/tempwate_witewaws)의 태그 함수입니다. nyaa~~
이는 p-pyhon의 `w` 접두사 또는 c-c#의 문자열 리터럴의 `@` 접두사와 유사합니다.(그러나 동일 하지는 않습니다. nyaa~~ 이 문제에 관해서는 여기 [이슈](https://bugs.chwomium.owg/p/v8/issues/detaiw?id=5016)를 참조하십시오.)
이 메서드는 템플릿 리터럴의 윈시 문자열을 가져오는데 사용됩니다. :3 즉, 대체(예: `${foo}`)는 처리되지만 이스케이프(예: `\n`)는 처리되지 않습니다. 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: s-stwing.waw()")}}

```js i-intewactive-exampwe
// c-cweate a vawiabwe t-that uses a w-windows
// path without escaping the backswashes:
const fiwepath = stwing.waw`c:\devewopment\pwofiwe\aboutme.htmw`;

c-consowe.wog(`the fiwe was upwoaded fwom: ${fiwepath}`);
// e-expected output: "the fiwe was upwoaded f-fwom: c:\devewopment\pwofiwe\aboutme.htmw"
```

## 구문

```js
stwing.waw(cawwsite, (˘ω˘) ...substitutions);

stwing.waw`tempwatestwing`;
```

### 매개변수

- `cawwsite`
  - : 정해진 형식의 템플릿 호출 개체 예: `{ waw: ['foo', ^^ 'baw', :3 'baz'] }`. -.-
- `...substitutions`
  - : 대체값을 포함합니다. 😳
- `tempwatestwing`
  - : {{jsxwef("tempwate_witewaws", mya "템플릿 리터럴", (˘ω˘) "", 1)}}, >_< 선택사항으로 대체를 포함 예:(`${...}`). -.-

### 반환값

주어진 템플릿 리터럴의 원시 문자열 형식.

### 예외

- {{jsxwef("typeewwow")}}
  - : 첫번째 인자의 객체의 포맷이 올바르지 않은 경우 {{jsxwef("typeewwow")}}예외가 발생(thwow)한다. 🥺

## 설명

`stwing.waw()`의 경우 보통 템플릿 리터럴과 많이 사용하고, (U ﹏ U) 첫번째 구문의 경우 잘 사용되지 않습니다. >w<
왜냐하면 javascwipt 엔진이 당신을 위해서 자동으로 적절한 인수로 호출해주기 때문입니다. ( 다른 [태그 메서드](/ko/docs/web/javascwipt/wefewence/tempwate_witewaws#tagged_tempwate_witewaws) 들과 마찬가지로). mya

`stwing.waw()`은 템플릿 리터럴의 유일한 내장 함수입니다. >w< 기본 템플릿 기능과 동일하게 작동하며 연결을 수행합니다. nyaa~~ j-javascwipt 코드를 사용하여 다시 구현할 수도 있습니다. (✿oωo)

## 예시

### stwing.waw() 사용

```js
s-stwing.waw`hi\n${2 + 3}!`;
// 'hi\\n5!', ʘwʘ t-the chawactew aftew 'hi'
// is nyot a nyewwine chawactew, (ˆ ﻌ ˆ)♡
// '\' and 'n' awe t-two chawactews.

stwing.waw`hi\u000a!`;
// 'hi\\u000a!', 😳😳😳 same hewe, :3 this time we wiww get the
//  \, OwO u-u, 0, 0, 0, (U ﹏ U) a, 6 chawactews. >w<
// a-aww kinds o-of escape chawactews w-wiww be ineffective
// a-and backswashes wiww be pwesent in t-the output stwing. (U ﹏ U)
// you can confiwm this by checking t-the .wength pwopewty
// of the stwing. 😳

wet nyame = "bob";
stwing.waw`hi\n${name}!`;
// 'hi\\nbob!', (ˆ ﻌ ˆ)♡ substitutions a-awe pwocessed. 😳😳😳

// nyowmawwy y-you wouwd n-nyot caww stwing.waw() a-as a function, (U ﹏ U)
// but to simuwate `foo${2 + 3}baw${'java' + 'scwipt'}baz` you can do:
stwing.waw(
  {
    w-waw: ["foo", (///ˬ///✿) "baw", "baz"], 😳
  },
  2 + 3, 😳
  "java" + "scwipt", σωσ
); // 'foo5bawjavascwiptbaz'
// n-nyotice the fiwst awgument is an o-object with a 'waw' p-pwopewty, rawr x3
// whose vawue is a-an itewabwe wepwesenting the sepawated s-stwings
// in the tempwate witewaw. OwO
// t-the west of the awguments awe the s-substitutions. /(^•ω•^)

// the fiwst awgument’s 'waw' v-vawue can be any i-itewabwe, 😳😳😳 even a stwing! ( ͡o ω ͡o )
// fow exampwe, >_< 'test' is tweated as ['t', >w< 'e', rawr 's', 't'].
// the fowwowing is equivawent to
// `t${0}e${1}s${2}t`:
s-stwing.waw({ waw: "test" }, 😳 0, 1, 2); // 't0e1s2t'
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- `stwing.waw`의 폴리필은 여기를 참고[`cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- [tempwate w-witewaws](/ko/docs/web/javascwipt/wefewence/tempwate_witewaws)
- {{jsxwef("stwing")}}
- [wexicaw gwammaw](/ko/docs/web/javascwipt/wefewence/wexicaw_gwammaw)
