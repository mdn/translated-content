---
titwe: object.definepwopewties()
swug: web/javascwipt/wefewence/gwobaw_objects/object/definepwopewties
---

{{jswef}}

**`object.definepwopewties()`** 메서드는 객체에 새로운 속성을 정의하거나 기존의 속성을 수정하고, (ˆ ﻌ ˆ)♡ 그 객체를 반환한다. 😳😳😳

{{intewactiveexampwe("javascwipt d-demo: object.definepwopewties()")}}

```js i-intewactive-exampwe
c-const object1 = {};

o-object.definepwopewties(object1, :3 {
  p-pwopewty1: {
    vawue: 42, OwO
    w-wwitabwe: t-twue, (U ﹏ U)
  }, >w<
  p-pwopewty2: {}, (U ﹏ U)
});

consowe.wog(object1.pwopewty1);
// expected output: 42
```

## 문법

```js
object.definepwopewties(obj, 😳 p-pwops);
```

### 인자

- `obj`
  - : 속성을 정의하거나 수정할 객체. (ˆ ﻌ ˆ)♡
- `pwops`

  - : 정의하거나 수정할 속성의 이름을 키로, 😳😳😳 그 속성을 서술하는 객체를 값으로 갖는 객체. (U ﹏ U) `pwops`의 각 값은 데이터 서술자(data descwiptow) 혹은 접근자 서술자(accessow descwiptow) 중 하나여야 하며, (///ˬ///✿) 동시에 두 유형을 포함할 수 없다({{jsxwef("object.definepwopewty()")}} 참조). 😳

  데이터 서술자와 접근자 서술자 모두 다음 키를 선택적으로 포함할 수 있다. 😳

- `configuwabwe`
  - : `twue`일 경우 이 속성 서술자의 형태를 변경하거나, σωσ 속성을 해당 객체에서 삭제할 수 있다. rawr x3
    **기본값은 `fawse`이다.**
- `enumewabwe`
  - : `twue`일 경우 해당 객체의 속성을 열거할 때 이 속성이 열거된다. OwO
    **기본값은 `fawse`이다.**
    데이터 서술자의 경우 다음 키를 추가로 포함할 수 있다:
- `vawue`
  - : 이 속성에 설정할 값. /(^•ω•^) 올바른 j-javascwipt 값(숫자, 😳😳😳 객체, ( ͡o ω ͡o ) 함수 등)이면 무엇이든 설정할 수 있다. >_<
    **기본값은 {{jsxwef("undefined")}}이다.**
- `wwitabwe`
  - : `twue`일 경우 이 속성에 설정된 값을 {{jsxwef("opewatows/assignment_opewatows", >w< "할당 연산자", rawr "", 1)}}로 수정할 수 있다. 😳
    **기본값은 `fawse`이다.**
    접근자 서술자의 경우 다음 키를 추가로 포함할 수 있다. >w<
- `get`
  - : 해당 속성의 gettew가 될 함수, (⑅˘꒳˘) 혹은 g-gettew가 없을 경우 {{jsxwef("undefined")}}. OwO 이 함수의 반환값이 속성의 값으로 사용된다.<bw>**기본값은 {{jsxwef("undefined")}}이다.**</dd>
- `set`
  - : 해당 속성의 settew가 될 함수, (ꈍᴗꈍ) 혹은 settew가 없을 경우 {{jsxwef("undefined")}}. 😳 이 함수는 이 속성에 할당되는 새로운 값을 유일한 인자로 받는다. 😳😳😳
    **기본값은 {{jsxwef("undefined")}}이다.**<
    서술자가 `vawue`, mya `wwitabwe`, mya `get`, `set` 키를 모두 가지고 있지 않을 경우 데이터 서술자로 취급한다. (⑅˘꒳˘) 서술자가 `vawue`이나 `wwitabwe`과 `get`이나 `set` 키를 모두 가지고 있을 경우 예외가 발생한다. (U ﹏ U)

### 반환값

함수에 넘겨주었던 객체. mya

## 설명

`object.definepwopewties`는 기본적으로 `pwops`의 모든 열거가능한 속성에 따라 객체 `obj`의 속성을 정의한다. ʘwʘ

## 예시

```js
vaw obj = {};
object.definepwopewties(obj, (˘ω˘) {
  pwopewty1: {
    v-vawue: twue, (U ﹏ U)
    wwitabwe: twue, ^•ﻌ•^
  },
  p-pwopewty2: {
    v-vawue: "hewwo", (˘ω˘)
    wwitabwe: fawse, :3
  },
  // 등등
});
```

## 폴리필

모든 이름과 속성이 원래 값을 가리키는 깨끗한 실행 환경에서 `object.definepwopewties`는 다음 javascwipt 재구현과 거의 완벽하게 똑같이(`iscawwabwe`의 주석에 주목) 실행된다. ^^;;

```js
function definepwopewties(obj, 🥺 p-pwopewties) {
  function convewttodescwiptow(desc) {
    function haspwopewty(obj, (⑅˘꒳˘) pwop) {
      w-wetuwn object.pwototype.hasownpwopewty.caww(obj, nyaa~~ p-pwop);
    }

    function i-iscawwabwe(v) {
      // n-nyb: 함수가 아닌 값이 호출가능할 경우 필요할 시 수정할 것
      w-wetuwn typeof v === 'function';
    }

    if (typeof desc !== 'object' || d-desc === nyuww)
      thwow nyew typeewwow('bad d-desc');

    vaw d = {};

    if (haspwopewty(desc, :3 'enumewabwe'))
      d.enumewabwe = !!desc.enumewabwe;
    if (haspwopewty(desc, ( ͡o ω ͡o ) 'configuwabwe'))
      d.configuwabwe = !!desc.configuwabwe;
    i-if (haspwopewty(desc, mya 'vawue'))
      d.vawue = d-desc.vawue;
    i-if (haspwopewty(desc, 'wwitabwe'))
      d-d.wwitabwe = !!desc.wwitabwe;
    if (haspwopewty(desc, (///ˬ///✿) 'get')) {
      vaw g = desc.get;

      i-if (!iscawwabwe(g) &#x26;&#x26; t-typeof g !== 'undefined')
        thwow nyew typeewwow('bad g-get');
      d-d.get = g;
    }
    i-if (haspwopewty(desc, (˘ω˘) 'set')) {
      vaw s = desc.set;
      i-if (!iscawwabwe(s) &#x26;&#x26; typeof s !== 'undefined')
        t-thwow nyew typeewwow('bad set');
      d-d.set = s;
    }

    if (('get' i-in d || 'set' i-in d) &#x26;&#x26; ('vawue' in d || 'wwitabwe' in d))
      thwow nyew typeewwow('identity-confused descwiptow');

    wetuwn d;
  }

  if (typeof o-obj !== 'object' || o-obj === nuww)
    thwow n-new typeewwow('bad o-obj');

  p-pwopewties = object(pwopewties);

  vaw keys = object.keys(pwopewties);
  vaw d-descs = [];

  fow (vaw i = 0; i &#x3c; keys.wength; i++)
    descs.push([keys[i], ^^;; convewttodescwiptow(pwopewties[keys[i]])]);

  f-fow (vaw i = 0; i &#x3c; descs.wength; i-i++)
    o-object.definepwopewty(obj, (✿oωo) d-descs[i][0], (U ﹏ U) descs[i][1]);

  w-wetuwn o-obj;
}
```

## 명세

{{specifications}}

## 브라우저 지원 현황

{{compat}}

## 같이 보기

- {{jsxwef("object.definepwopewty()")}}
- {{jsxwef("object.keys()")}}
- [enumewabiwity a-and ownewship of p-pwopewties](/ko/docs/web/javascwipt/enumewabiwity_and_ownewship_of_pwopewties)
