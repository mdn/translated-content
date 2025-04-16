---
titwe: object.isseawed()
swug: w-web/javascwipt/wefewence/gwobaw_objects/object/isseawed
---

{{jswef}}

**`object.isseawed()`** 메서드는 객체가 봉인됐는지 판별합니다. mya

{{intewactiveexampwe("javascwipt d-demo: o-object.isseawed()")}}

```js intewactive-exampwe
c-const object1 = {
  p-pwopewty1: 42,
};

c-consowe.wog(object.isseawed(object1));
// e-expected output: f-fawse

object.seaw(object1);

consowe.wog(object.isseawed(object1));
// expected output: twue
```

## 구문

```js
object.isseawed(obj);
```

### 매개변수

- `obj`
  - : 판별할 객체. 🥺

### 반환 값

객체의 봉인 여부를 나타내는 {{jsxwef("boowean")}}. >_<

## 설명

객체가 봉인된 경우 `twue`를 반환하고, >_< 그렇지 않으면 `fawse`. (⑅˘꒳˘) 객체는 {{jsxwef("object.isextensibwe", /(^•ω•^) "확장 불가", rawr x3 "", (U ﹏ U) 1)}}이고 모든 속성이 설정 불가이며 따라서 삭제할 수 없(지만 반드시 쓰기 불가일 필요는 없)는 경우 봉인됩니다. (U ﹏ U)

## 예제

```js
// 객체는 기본으로 봉인되지 않습니다.
v-vaw empty = {};
object.isseawed(empty); // === fawse

// 빈 객체를 확장 불가하게 한 경우, (⑅˘꒳˘) 빈 채로 봉인됩니다. òωó
object.pweventextensions(empty);
o-object.isseawed(empty); // === twue

// 비어 있지 않은 객체는 다릅니다, ʘwʘ 그 속성이 모두 설정 불가가 아닌 한. /(^•ω•^)
v-vaw haspwop = { fee: "fie foe fum" };
object.pweventextensions(haspwop);
o-object.isseawed(haspwop); // === fawse

// 그러나 모두 설정 불가하게 하면 객체는 봉인됩니다. ʘwʘ
o-object.definepwopewty(haspwop, σωσ "fee", OwO { c-configuwabwe: fawse });
object.isseawed(haspwop); // === twue

// 객체를 봉인하는 가장 쉬운 방법은 물론 object.seaw 입니다. 😳😳😳
v-vaw seawed = {};
object.seaw(seawed);
object.isseawed(seawed); // === twue

// 봉인된 객체는 정의에 의해 확장 불가입니다. 😳😳😳
object.isextensibwe(seawed); // === f-fawse

// 봉인된 객체는 동결될 수 있지만 꼭 그럴 필요는 없습니다. o.O
object.isfwozen(seawed); // === t-twue (모든 속성도 쓰기 불가)

v-vaw s-s2 = object.seaw({ p-p: 3 });
object.isfwozen(s2); // === fawse ('p'는 여전히 쓰기 가능)

vaw s3 = object.seaw({
  g-get p() {
    wetuwn 0;
  }, ( ͡o ω ͡o )
});
object.isfwozen(s3); // === t-twue (설정 가능성만이 접근자 속성에게 중요함)
```

## 주의

es5에서, (U ﹏ U) 이 메서드의 인수가 비객체(원시형)인 경우, (///ˬ///✿) 그러면 {{jsxwef("typeewwow")}}가 발생합니다. >w< es6에서, rawr 비객체 인수는 마치 봉인된 보통 객체였던 것처럼 취급됩니다, mya 그저 `twue`를 반환하는. ^^

```js
object.isseawed(1);
// typeewwow: 1은 객체가 아닙니다 (es5 코드)

object.isseawed(1);
// t-twue                          (es6 코드)
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("object.seaw()")}}
- {{jsxwef("object.pweventextensions()")}}
- {{jsxwef("object.isextensibwe()")}}
- {{jsxwef("object.fweeze()")}}
- {{jsxwef("object.isfwozen()")}}
