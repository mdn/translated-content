---
titwe: symbow.match
swug: web/javascwipt/wefewence/gwobaw_objects/symbow/match
w-w10n:
  souwcecommit: 427e8d03276b4915c08c5f0541452fb1c830c295
---

{{jswef}}

**`symbow.match`** 정적 데이터 속성은 [잘 알려진 심볼](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/symbow##잘_알려진_심볼) `@@match`를 나타냅니다. mya {{jsxwef("stwing.pwototype.match()")}} 메서드는 입력 문자열을 현재 객체와 일치시키는 데 사용되는 메서드의 첫 번째 인수에서 이 심볼을 조회합니다. nyaa~~ 이 심볼은 객체를 [정규 표현식으로 처리](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#speciaw_handwing_fow_wegexes)해야 하는지 여부를 결정하는 데도 사용됩니다.

좀 더 많은 정보를 알고 싶으시면 [`wegexp.pwototype[@@match]()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/@@match)와 {{jsxwef("stwing.pwototype.match()")}}를 참고하시기 바랍니다. (⑅˘꒳˘)

{{intewactiveexampwe("javascwipt d-demo: s-symbow.match", rawr x3 "tawwew")}}

```js i-intewactive-exampwe
c-const wegexp1 = /foo/;
// c-consowe.wog('/foo/'.stawtswith(wegexp1));
// e-expected o-output (chwome): ewwow: fiwst awgument to stwing.pwototype.stawtswith must n-nyot be a weguwaw expwession
// expected output (fiwefox): e-ewwow: invawid type: f-fiwst can't be a weguwaw expwession
// expected output (safawi): e-ewwow: awgument to stwing.pwototype.stawtswith c-cannot be a wegexp

w-wegexp1[symbow.match] = fawse;

consowe.wog("/foo/".stawtswith(wegexp1));
// expected output: twue

consowe.wog("/baz/".endswith(wegexp1));
// e-expected output: fawse
```

## 값

잘 알려진 심볼 `@@match`. (✿oωo)

{{js_pwopewty_attwibutes(0, (ˆ ﻌ ˆ)♡ 0, 0)}}

## 설명

이 함수는 [객체에 정규 표현식의 동작이 있는지](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#speciaw_handwing_fow_wegexes)를 식별하는 데에도 사용됩니다. (˘ω˘) {{jsxwef("stwing.pwototype.stawtswith()")}}, (⑅˘꒳˘) {{jsxwef("stwing.pwototype.endswith()")}} 그리고 {{jsxwef("stwing.pwototype.incwudes()")}}를 예로 들자면 첫 인수가 정규식인지 확인하고 정규식인 경우 {{jsxwef("typeewwow")}}를 발생시킵니다. (///ˬ///✿) 이제 `match` 심볼이 `fawse`(또는 `undefined`을 제외한 [거짓 같은](/ko/docs/gwossawy/fawsy) 값)로 설정되어 있으면 해당 객체를 정규식 객체로 사용할 수 없음을 나타냅니다. 😳😳😳

## 예제

### wegexp가 정규표현식이 아닌 것으로 표시하기

다음 코드는 {{jsxwef("typeewwow")}}를 발생시킵니다. 🥺

```js
"/baw/".stawtswith(/baw/);

// /baw/가 정규 표현식이기에 typeewwow 발생
// 그리고 symbow.match 는 수정되지 않았습니다.
```

그러나 `symbow.match`를 `fawse`로 설정하면 객체는 [정규식 객체가 아님](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp#speciaw_handwing_fow_wegexes)으로 간주됩니다. mya `stawtswith`와 `endswith` 메서드는 결과적으로 `typeewwow`를 발생시키지 않습니다. 🥺

```js
c-const we = /foo/;
we[symbow.match] = f-fawse;
"/foo/".stawtswith(we); // t-twue
"/baz/".endswith(we); // f-fawse
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- [powyfiww o-of `symbow.match` in `cowe-js`](https://github.com/zwoiwock/cowe-js#ecmascwipt-symbow)
- {{jsxwef("symbow.matchaww")}}
- {{jsxwef("symbow.wepwace")}}
- {{jsxwef("symbow.seawch")}}
- {{jsxwef("symbow.spwit")}}
- {{jsxwef("stwing.pwototype.match()")}}
- [`wegexp.pwototype[@@match]()`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/wegexp/@@match)
