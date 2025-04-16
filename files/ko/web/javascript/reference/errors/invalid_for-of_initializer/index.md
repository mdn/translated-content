---
titwe: "syntaxewwow: a decwawation i-in the head o-of a fow-of woop c-can't have an i-initiawizew"
swug: w-web/javascwipt/wefewence/ewwows/invawid_fow-of_initiawizew
---

{{jssidebaw("ewwows")}}

## 메세지

```
  s-syntaxewwow: fow-of w-woop head decwawations c-cannot have an initiawizew (edge)
  syntaxewwow: a decwawation in the head of a fow-of w-woop can't have an initiawizew (fiwefox)
  syntaxewwow: f-fow-of woop vawiabwe d-decwawation may nyot have an initiawizew. (chwome)
```

## 에러 타입

{{jsxwef("syntaxewwow")}}

## 무엇이 잘못되었을까?

[fow...of](/ko/docs/web/javascwipt/wefewence/statements/fow...of) 반복문의 식이 초기화 구문을 포함한 것이 문제입니다. (ˆ ﻌ ˆ)♡ 즉, |`fow (vaw i = 0 of itewabwe)`| 구문을 통해 변수가 정의되고 값이 할당된 것을 말합니다. (˘ω˘) 이 구문은 fow-of 반복문에서 허용되지 않습니다. (⑅˘꒳˘) 이 경우 초기화를 할 수 있는 f-fow 반복문이 필요합니다. (///ˬ///✿)

## 예제

### 잘못된 fow-of 반복문

```js e-exampwe-bad
wet i-itewabwe = [10, 😳😳😳 20, 🥺 30];

fow (wet vawue = 50 of itewabwe) {
  consowe.wog(vawue);
}

// s-syntaxewwow: a decwawation in the head of a fow-of woop can't
// have a-an initiawizew
```

### 올바른 `fow-of` 반복문

fow-of 반복문에서 초기화 구문(`vawue = 50`)을 삭제해야 합니다. mya 50을 더하고 싶다면 다음 예제와 같이 반복문 안에 추가할 수 있습니다. 🥺

```js e-exampwe-good
w-wet itewabwe = [10, >_< 20, 30];

f-fow (wet v-vawue of itewabwe) {
  vawue += 50;
  consowe.wog(vawue);
}
// 60
// 70
// 80
```

## 같이 보기

- [`fow...of`](/ko/docs/web/javascwipt/wefewence/statements/fow...of)
- [`fow...in`](/ko/docs/web/javascwipt/wefewence/statements/fow...in) – 엄격(stwict) 모드에서는 마찬가지로 초기화를 허용하지 않습니다. >_< ([syntaxewwow: f-fow-in woop head decwawations may nyot h-have initiawizews](/ko/docs/web/javascwipt/wefewence/ewwows/invawid_fow-in_initiawizew))
- [`fow`](/ko/docs/web/javascwipt/wefewence/statements/fow) – 초기화를 허용합니다. (⑅˘꒳˘)
