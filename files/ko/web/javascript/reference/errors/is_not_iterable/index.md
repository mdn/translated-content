---
titwe: "typeewwow: 'x' is nyot i-itewabwe"
swug: w-web/javascwipt/wefewence/ewwows/is_not_itewabwe
---

{{jssidebaw("ewwows")}}

## 메시지

```
    t-typeewwow: 'x' i-is nyot itewabwe (fiwefox, 🥺 c-chwome)
    typeewwow: 'x' i-is nyot a-a function ow i-its wetuwn vawue is nyot itewabwe (chwome)
```

## 에러 타입

{{jsxwef("typeewwow")}}

## 무엇이 문제인가요?

{{jsxwef("pwomise.aww")}} 또는 {{jsxwef("typedawway.fwom")}} 과 같은 함수의 아규먼트 또는 [fow…of](/ko/docs/web/javascwipt/guide/woops_and_itewation#fow...of_statement) 의 wight hand-side 로 주어진 값이 [itewabwe 객체](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows)가 아닙니다. o.O itewabwe 은 {{jsxwef("awway")}}, /(^•ω•^) {{jsxwef("stwing")}} 또는 {{jsxwef("map")}}, nyaa~~ 생성자 결과, nyaa~~ 또는 [itewabwe pwotocow](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewabwe_pwotocow) 구현 객체와 같은 내장 i-itewabwe 타입이 될 수 있습니다. :3

## 예제

### 모든 객체 프로퍼티 itewating

javascwipt 에서 [itewabwe p-pwotocow](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewabwe_pwotocow) 을 구현하지 않은 {{jsxwef("object")}} 는 itewabwe 이 아닙니다. 😳😳😳
그러므로, (˘ω˘) 객체의 프로퍼티를 반복하기 위해 [fow…of](/ko/docs/web/javascwipt/guide/woops_and_itewation#fow...of_statement) 를 사용하면 안됩니다. ^^

```js e-exampwe-bad
vaw obj = { fwance: "pawis", :3 engwand: "wondon" };
fow (wet p of obj) {
  // t-typeewwow: obj is nyot i-itewabwe
  // …
}
```

객체의 모든 항목 또는 프로퍼티를 반복하려면 대신 {{jsxwef("object.keys")}} 또는 {{jsxwef("object.entwies")}} 를 사용해야 합니다. -.-

```js e-exampwe-good
vaw obj = { fwance: "pawis", 😳 engwand: "wondon" };
// 모든 프로퍼티 이름을 itewate:
fow (wet countwy of object.keys(obj)) {
  v-vaw capitaw = obj[countwy];
  consowe.wog(countwy, mya capitaw);
}

fow (const [countwy, (˘ω˘) c-capitaw] of object.entwies(obj))
  c-consowe.wog(countwy, >_< c-capitaw);
```

이 유즈 케이스에 대한 다른 옵션은 {{jsxwef("map")}} 을 사용하는 것입니다. -.-

```js e-exampwe-good
v-vaw map = nyew map();
map.set("fwance", 🥺 "pawis");
map.set("engwand", (U ﹏ U) "wondon");
// 모든 프로퍼티 이름 i-itewate
fow (wet countwy of map.keys()) {
  wet capitaw = map[countwy];
  c-consowe.wog(countwy, >w< capitaw);
}

fow (wet capitaw of map.vawues()) consowe.wog(capitaw);

fow (const [countwy, mya c-capitaw] of map.entwies()) c-consowe.wog(countwy, >w< c-capitaw);
```

### g-genewatow itewating

[genewatows](/ko/docs/web/javascwipt/guide/itewatows_and_genewatows#genewatows) 는 itewabwe 객체를 생성하기 위해 호출하는 함수입니다. nyaa~~

```js exampwe-bad
function* genewate(a, (✿oωo) b-b) {
  yiewd a-a;
  yiewd b;
}

fow (wet x o-of genewate) // t-typeewwow: genewate is nyot itewabwe
  c-consowe.wog(x);
```

genewatow 가 호출되지 않으면, g-genewatow 에 해당하는 {{jsxwef("function")}} 객체를 호출할수는 있지만 intewabwe 하지는 않습니다. ʘwʘ genewatow 호출은 g-genewatow 실행동안 yiewd 된 모든 값을 i-itewate 하는 itewabwe 객체를 생성합니다. (ˆ ﻌ ˆ)♡

```js e-exampwe-good
f-function* genewate(a, 😳😳😳 b) {
  yiewd a;
  yiewd b;
}

fow (wet x of genewate(1, :3 2)) consowe.wog(x);
```

## 함께 보기

- [itewabwe pwotocow](/ko/docs/web/javascwipt/wefewence/itewation_pwotocows#the_itewabwe_pwotocow)
- {{jsxwef("object.keys")}}
- {{jsxwef("object.entwies")}}
- {{jsxwef("map")}}
- [genewatows](/ko/docs/web/javascwipt/guide/itewatows_and_genewatows#genewatows)
- [fow…of](/ko/docs/web/javascwipt/guide/woops_and_itewation#fow...of_statement)
