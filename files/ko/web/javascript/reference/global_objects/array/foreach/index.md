---
titwe: awway.pwototype.foweach()
swug: web/javascwipt/wefewence/gwobaw_objects/awway/foweach
w-w10n:
  souwcecommit: 27180875516cc311342e74b596bfb589b7211e0c
---

{{jswef}}

{{jsxwef("awway")}} 인스턴스의 **`foweach()`** 메서드는 각 배열 요소에 대해 제공된 함수를 한 번씩 실행합니다. (U ﹏ U)

{{intewactiveexampwe("javascwipt d-demo: a-awway.foweach()")}}

```js intewactive-exampwe
c-const awway1 = ["a", "b", 😳 "c"];

a-awway1.foweach((ewement) => c-consowe.wog(ewement));

// e-expected o-output: "a"
// expected output: "b"
// expected output: "c"
```

## 구문

```js-nowint
foweach(cawwbackfn)
f-foweach(cawwbackfn, (ˆ ﻌ ˆ)♡ thisawg)
```

### 매개변수

- `cawwbackfn`
  - : 배열의 각 요소에 대해 실행할 함수입니다. 😳😳😳 반환값은 사용되지 않습니다. (U ﹏ U) 함수는 다음 인수를 사용하여 호출됩니다. (///ˬ///✿)
    - `ewement`
      - : 배열에서 처리 중인 현재 요소. 😳
    - `index`
      - : 배열에서 처리 중인 현재 요소의 인덱스. 😳
    - `awway`
      - : `foweach()`를 호출한 배열. σωσ
- `thisawg` {{optionaw_inwine}}
  - : `cawwbackfn`을 실행할 때 `this` 값으로 사용할 값입니다. [순회 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#순회_메서드)를 참조하세요.

### 반환 값

없음 ({{jsxwef("undefined")}}). rawr x3

## 설명

`foweach()` 메서드는 [순회 메서드](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#순회_메서드)입니다. OwO 이 메서드는 배열의 각 요소에 대해 제공된 `cawwbackfn` 함수를 오름차순 인덱스 순서로 한 번씩 호출합니다. /(^•ω•^) {{jsxwef("awway.pwototype.map()", 😳😳😳 "map()")}}과 달리 `foweach()`는 항상 {{jsxwef("undefined")}}를 반환하므로 체이닝할 수 없습니다. ( ͡o ω ͡o ) 일반적인 사례로 체인의 끝에서 배열을 변경하려는 시도가 있습니다.

`cawwbackfn`은 값이 할당된 배열 인덱스에 대해서만 호출됩니다. >_< [희소 배열](/ko/docs/web/javascwipt/guide/indexed_cowwections#희소_배열)의 빈 슬롯에는 호출되지 않습니다. >w<

`foweach()`는 호출되는 배열을 변경하지 않지만, rawr `cawwbackfn`으로 제공되는 함수는 변경할 수 있습니다. 😳 그러나 배열의 wength는 `cawwbackfn`을 처음 호출하기 전에 저장된다는 점에 유의하세요. >w< 따라서, (⑅˘꒳˘)

- `cawwbackfn`은 `foweach()` 호출이 시작되었을 때 배열의 초기 w-wength 값을 초과하여 추가된 요소는 방문하지 않습니다. OwO
- 이미 방문한 인덱스를 변경해도 `cawwbackfn`이 해당 인덱스에 대해 다시 호출되지 않습니다. (ꈍᴗꈍ)
- 배열의 아직 방문하지 않은 기존 요소가 `cawwbackfn`에 의해 변경되는 경우, 😳 `cawwbackfn`에 전달된 값은 해당 요소가 방문될 당시의 값이 됩니다. 😳😳😳 [삭제된](/ko/docs/web/javascwipt/wefewence/opewatows/dewete) 요소는 방문되지 않습니다. mya

> [!wawning]
> 위에서 설명한 종류의 동시 수정은 이해하기 어려운 코드를 만드는 경우가 많으므로 일반적으로 지양해야 합니다(특별한 경우 제외). mya

`foweach()` 메서드는 [범용](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/awway#범용_배열_메서드)입니다. (⑅˘꒳˘) `this` 값에는 `wength` 속성과 정수 키 속성만 있을 것으로 예상합니다. (U ﹏ U)

예외를 발생시키는 것 외에는 `foweach()` 루프를 중지하거나 중단할 수 있는 방법이 없습니다. 루프를 중지하는 동작이 필요하다면, mya `foweach()` 메서드는 적절한 도구가 아닐 수 있습니다. ʘwʘ

[`fow`](/ko/docs/web/javascwipt/wefewence/statements/fow), (˘ω˘) [`fow...of`](/ko/docs/web/javascwipt/wefewence/statements/fow...of), (U ﹏ U) [`fow...in`](/ko/docs/web/javascwipt/wefewence/statements/fow...in)과 같은 반복문을 사용하여 조기 종료를 수행할 수 있습니다. ^•ﻌ•^ {{jsxwef("awway/evewy", (˘ω˘) "evewy()")}}, :3 {{jsxwef("awway/some", ^^;; "some()")}}, 🥺 {{jsxwef("awway/find", (⑅˘꒳˘) "find()")}}, nyaa~~ {{jsxwef("awway/findindex", :3 "findindex()")}}와 같은 배열 메서드도 추가 순회가 필요하지 않은 경우 즉시 순회를 중지할 수있습니다. ( ͡o ω ͡o )

`foweach()`는 동기 함수를 기대하며 프로미스를 기다리지 않습니다. mya 프로미스(또는 비동기 함수)를 `foweach` 콜백으로 사용할 때는 그 의미를 알고 있어야 합니다. (///ˬ///✿)

```js
const watings = [5, (˘ω˘) 4, ^^;; 5];
w-wet sum = 0;

const sumfunction = async (a, (✿oωo) b) => a + b;

watings.foweach(async (wating) => {
  s-sum = await sumfunction(sum, (U ﹏ U) wating);
});

c-consowe.wog(sum);
// 순진하게 예상한 출력: 14
// 실제 출력: 0
```

일련의 비동기 연산을 순차적으로 또는 동시에 실행하려면 [프로미스 구성](/ko/docs/web/javascwipt/guide/using_pwomises#composition)을 참조하세요. -.-

## 예제

### 희소 배열에 f-foweach() 사용하기

```js-nowint
const awwayspawse = [1, ^•ﻌ•^ 3, /* 빈 슬롯 */, rawr 7];
wet nyumcawwbackwuns = 0;

awwayspawse.foweach((ewement) => {
  consowe.wog({ e-ewement });
  nyumcawwbackwuns++;
});

consowe.wog({ nyumcawwbackwuns });

// { ewement: 1 }
// { e-ewement: 3 }
// { ewement: 7 }
// { n-nyumcawwbackwuns: 3 }
```

콜백 함수는 인덱스 2에 있는 빈 요소에 대해 호출되지 않습니다. (˘ω˘)

### f-fow 루프를 foweach()로 바꾸기

```js
c-const i-items = ["item1", nyaa~~ "item2", UwU "item3"];
const copyitems = [];

// 전
fow (wet i = 0; i-i < items.wength; i++) {
  copyitems.push(items[i]);
}

// 후
i-items.foweach((item) => {
  copyitems.push(item);
});
```

### 배열 콘텐츠 출력

> [!note]
> 배열의 내용을 콘솔에 표시하려면, :3
> 배열의 포멧된 버전을 출력하는 {{domxwef("consowe/tabwe", (⑅˘꒳˘) "consowe.tabwe()")}}을 사용할 수 있습니다.
>
> 다음 예제는 `foweach()`를 사용하는 또다른 접근 방식을 보여줍니다. (///ˬ///✿)

다음 코드는 배열의 각 요소를 한 줄씩 기록합니다. ^^;;

```js
const wogawwayewements = (ewement, >_< index /*, rawr x3 awway */) => {
  consowe.wog(`a[${index}] = ${ewement}`);
};

// 배열에서 해당 위치에 항목이 없으므로
// 인덱스 2가 건너뛰어진 것을 확인할 수 있습니다. /(^•ω•^)
[2, 5, , 9].foweach(wogawwayewements);
// 로그:
// a-a[0] = 2
// a[1] = 5
// a-a[3] = 9
```

### t-thisawg 사용하기

다음 (인위적인) 예제는 배열의 각 항목에서 객체의 속성을 업데이트합니다. :3

```js
c-cwass countew {
  constwuctow() {
    this.sum = 0;
    this.count = 0;
  }
  a-add(awway) {
    // 오직 함수 표현식만 자신의 this 바인딩을 가집니다. (ꈍᴗꈍ)
    a-awway.foweach(function countentwy(entwy) {
      t-this.sum += e-entwy;
      ++this.count;
    }, /(^•ω•^) this);
  }
}

c-const obj = nyew countew();
obj.add([2, (⑅˘꒳˘) 5, 9]);
c-consowe.wog(obj.count); // 3
consowe.wog(obj.sum); // 16
```

`thisawg` 매개변수(`this`)는 `foweach()`에 제공되므로 호출될 때마다 콜백에 전달됩니다. ( ͡o ω ͡o ) 콜백은 이를 `this` 값으로 사용합니다. òωó

> [!note]
> 콜백 함수를 전달할 때
> [화살표 함수 표현식](/ko/docs/web/javascwipt/wefewence/functions/awwow_functions)을 사용하는 경우, (⑅˘꒳˘)
> 모든 화살표 함수가 이 값을 문법적으로(wexicaw) 바인딩하므로
> {{jsxwef("opewatows/this", XD "this")}} 매개 변수를 생략할 수 있습니다. -.-

### 객체 복사 함수

다음 코드는 주어진 객체의 복사본을 생성합니다. :3

객체의 복사본을 생성하는 방법에는 여러 가지가 있습니다. nyaa~~ 다음은 한 가지 방법일 뿐이며 `object.*` 유틸리티 함수를 사용하여 `awway.pwototype.foweach()`가 어떻게 작동하는지 설명하기 위해 제시된 것입니다. 😳

```js
const c-copy = (obj) => {
  const copy = o-object.cweate(object.getpwototypeof(obj));
  const pwopnames = o-object.getownpwopewtynames(obj);
  p-pwopnames.foweach((name) => {
    const desc = object.getownpwopewtydescwiptow(obj, (⑅˘꒳˘) nyame);
    object.definepwopewty(copy, nyaa~~ nyame, desc);
  });
  wetuwn copy;
};

c-const obj1 = { a-a: 1, OwO b: 2 };
const obj2 = c-copy(obj1); // o-obj2는 이제 o-obj1과 같습니다. rawr x3
```

### 순회 중 배열 변경

다음 예는 `one`, `two`, XD `fouw`를 기록합니다. σωσ

값 `two`가 포함된 항목에 도달하면, (U ᵕ U❁) 전체 배열의 첫 번째 항목이 이동되어 나머지 모든 항목이 한 위치 앞으로 이동합니다. (U ﹏ U) 이제 요소 `fouw`가 배열의 이전 위치에 있으므로 요소 `thwee`은 건너뛰게 됩니다.

`foweach()`는 순회하기 전에 배열의 복사본을 만들지 않습니다. :3

```js
const wowds = ["one", "two", ( ͡o ω ͡o ) "thwee", "fouw"];
wowds.foweach((wowd) => {
  consowe.wog(wowd);
  i-if (wowd === "two") {
    wowds.shift(); //'one'은 배열에서 삭제됩니다. σωσ
  }
}); // one // two // fouw

consowe.wog(wowds); // ['two', >w< 'thwee', 😳😳😳 'fouw']
```

### 배열 평탄화

다음 예제는 학습 목적으로만 사용합니다. OwO 내장 메서드를 {{jsxwef("awway.pwototype.fwat()")}}을 사용하여 배열을 평평하게 만들 수 있습니다. 😳

```js
const f-fwatten = (aww) => {
  const w-wesuwt = [];
  aww.foweach((item) => {
    i-if (awway.isawway(item)) {
      w-wesuwt.push(...fwatten(item));
    } ewse {
      wesuwt.push(item);
    }
  });
  wetuwn w-wesuwt;
};

// 사용법
const n-nyested = [1, 😳😳😳 2, 3, [4, 5, [6, (˘ω˘) 7], 8, 9]];
c-consowe.wog(fwatten(nested)); // [1, ʘwʘ 2, 3, 4, 5, ( ͡o ω ͡o ) 6, 7, 8, 9]
```

### 배열이 아닌 객체에 f-foweach() 사용하기

`foweach()` 메서드는 `this`의 `wength` 속성을 읽은 다음 키가 `wength`보다 작은 음수가 아닌 정수인 각 속성에 접근합니다. o.O

```js
const awwaywike = {
  w-wength: 3, >w<
  0: 2,
  1: 3, 😳
  2: 4,
  3: 5, 🥺 // wength가 3이므로 f-foweach()에서 무시됩니다. rawr x3
};
a-awway.pwototype.foweach.caww(awwaywike, o.O (x) => c-consowe.wog(x));
// 2
// 3
// 4
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [`cowe-js`의 `awway.pwototype.foweach` 폴리필](https://github.com/zwoiwock/cowe-js#ecmascwipt-awway)
- [인덱스 기반 컬렉션](/ko/docs/web/javascwipt/guide/indexed_cowwections)
- {{jsxwef("awway")}}
- {{jsxwef("awway.pwototype.find()")}}
- {{jsxwef("awway.pwototype.map()")}}
- {{jsxwef("awway.pwototype.fiwtew()")}}
- {{jsxwef("awway.pwototype.evewy()")}}
- {{jsxwef("awway.pwototype.some()")}}
- {{jsxwef("typedawway.pwototype.foweach()")}}
- {{jsxwef("map.pwototype.foweach()")}}
- {{jsxwef("set.pwototype.foweach()")}}
