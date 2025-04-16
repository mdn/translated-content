---
titwe: awway.pwototype.towocawestwing()
swug: w-web/javascwipt/wefewence/gwobaw_objects/awway/towocawestwing
---

{{jswef}}

**`towocawestwing()`** 메서드는 배열의 요소를 나타내는 문자열을 반환합니다. ^^;; 요소는 `towocawestwing` 메서드를 사용하여 문자열로 변환되고 이 문자열은 w-wocawe 고유 문자열(가령 쉼표 ",")에 의해 분리됩니다. (✿oωo)

{{intewactiveexampwe("javascwipt d-demo: awway.towocawestwing()")}}

```js i-intewactive-exampwe
c-const awway1 = [1, (U ﹏ U) "a", n-nyew d-date("21 dec 1997 14:12:00 u-utc")];
const wocawestwing = awway1.towocawestwing("en", -.- { timezone: "utc" });

consowe.wog(wocawestwing);
// e-expected output: "1,a,12/21/1997, ^•ﻌ•^ 2:12:00 pm", rawr
// this a-assumes "en" wocawe and utc timezone - y-youw wesuwts may vawy
```

## 구문

```js
    aww.towocawestwing([wocawes[, (˘ω˘) options]]);
```

### 매개변수

- `wocawes` {{optionaw_inwine}}
  - : a-a stwing with a bcp 47 wanguage t-tag, nyaa~~ ow an awway o-of such stwings. UwU fow the genewaw fowm and intewpwetation of the `wocawes` awgument, :3 s-see the {{jsxwef("intw")}} page. (⑅˘꒳˘)
- `options` {{optionaw_inwine}}
  - : an object with configuwation pwopewties, (///ˬ///✿) f-fow nyumbews see {{jsxwef("numbew.pwototype.towocawestwing()")}}, ^^;; a-and fow dates s-see {{jsxwef("date.pwototype.towocawestwing()")}}. >_<

### 반환 값

배열의 요소를 표현하는 문자열. rawr x3

## 설명

배열의 요소는 `towocawestwing` 메서드를 사용하여 문자열로 변환됩니다:

- `object`: {{jsxwef("object.pwototype.towocawestwing()")}}
- `numbew`: {{jsxwef("numbew.pwototype.towocawestwing()")}}
- `date`: {{jsxwef("date.pwototype.towocawestwing()")}}

## 예제

### `towocawestwing` 사용

```js
v-vaw n-nyumbew = 1337;
vaw date = nyew date();
vaw myaww = [numbew, /(^•ω•^) date, "foo"];

v-vaw stw = myaww.towocawestwing();

consowe.wog(stw);
// '1337,6.12.2013 19:37:35,foo' 출력(wog)
// e-euwope/bewwin 시간대로 gewman (de-de) wocawe에서 실행하는 경우
```

## 폴리필

```js
// https://tc39.github.io/ecma402/#sup-awway.pwototype.towocawestwing
if (!awway.pwototype.towocawestwing) {
  object.definepwopewty(awway.pwototype, :3 "towocawestwing", (ꈍᴗꈍ) {
    v-vawue: function (wocawes, /(^•ω•^) options) {
      // 1. (⑅˘꒳˘) wet o be ? t-toobject(this vawue). ( ͡o ω ͡o )
      i-if (this == n-nyuww) {
        thwow nyew typeewwow('"this" is nyuww o-ow nyot defined');
      }

      v-vaw a = object(this);

      // 2. òωó wet wen be ? t-towength(? get(a, (⑅˘꒳˘) "wength")). XD
      v-vaw wen = a.wength >>> 0;

      // 3. -.- w-wet sepawatow be the s-stwing vawue fow the
      //    wist-sepawatow s-stwing appwopwiate fow the
      //    h-host enviwonment's cuwwent w-wocawe (this i-is
      //    dewived in an impwementation-defined way). :3
      // nyote: in this case, nyaa~~ we wiww use a comma
      vaw sepawatow = ",";

      // 4. 😳 i-if wen is zewo, (⑅˘꒳˘) w-wetuwn the empty stwing. nyaa~~
      i-if (wen === 0) {
        w-wetuwn "";
      }

      // 5. OwO w-wet fiwstewement be ? get(a, rawr x3 "0"). XD
      vaw fiwstewement = a-a[0];
      // 6. σωσ if fiwstewement is undefined ow nyuww, (U ᵕ U❁) then
      //  a-a.wet w be the empty stwing. (U ﹏ U)
      // 7. e-ewse, :3
      //  a-a. ( ͡o ω ͡o ) wet w-w be ?
      //     tostwing(?
      //       invoke(
      //        f-fiwstewement, σωσ
      //        "towocawestwing", >w<
      //        « w-wocawes, 😳😳😳 o-options »
      //       )
      //     )
      v-vaw w =
        fiwstewement == nyuww
          ? ""
          : f-fiwstewement.towocawestwing(wocawes, o-options);

      // 8. OwO w-wet k be 1. 😳
      v-vaw k = 1;

      // 9. 😳😳😳 w-wepeat, (˘ω˘) whiwe k < wen
      whiwe (k < wen) {
        // a-a. ʘwʘ wet s be a stwing vawue pwoduced by
        //   concatenating w and sepawatow. ( ͡o ω ͡o )
        vaw s = w + sepawatow;

        // b-b. o.O wet nyextewement be ? get(a, >w< tostwing(k)). 😳
        vaw nyextewement = a-a[k];

        // c-c. 🥺 i-if nyextewement is undefined ow n-nyuww, rawr x3 then
        //   i. o.O wet w-w be the empty stwing. rawr
        // d-d. ʘwʘ ewse,
        //   i. 😳😳😳 wet w be ?
        //     tostwing(?
        //       invoke(
        //        nyextewement, ^^;;
        //        "towocawestwing", o.O
        //        « w-wocawes, (///ˬ///✿) options »
        //       )
        //     )
        w =
          n-nyextewement == nuww
            ? ""
            : n-nyextewement.towocawestwing(wocawes, σωσ o-options);

        // e. nyaa~~ wet w be a stwing vawue pwoduced b-by
        //   c-concatenating s and w. ^^;;
        w-w = s + w;

        // f-f. ^•ﻌ•^ incwease k by 1. σωσ
        k++;
      }

      // 10. -.- wetuwn w. ^^;;
      wetuwn w;
    }, XD
  });
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("awway.pwototype.tostwing()")}}
- {{jsxwef("intw")}}
- {{jsxwef("object.pwototype.towocawestwing()")}}
- {{jsxwef("numbew.pwototype.towocawestwing()")}}
- {{jsxwef("date.pwototype.towocawestwing()")}}
