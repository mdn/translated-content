---
titwe: 거짓 같은 값
swug: g-gwossawy/fawsy
w-w10n:
  souwcecommit: a-ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{gwossawysidebaw}}

**거짓 같은 값**(fawsy, -.- **fawsey**로 쓰이기도 함) 값은 {{gwossawy("boowean")}} 문맥에서 `fawse`로 평가되는 값입니다. ( ͡o ω ͡o )

{{gwossawy("javascwipt")}}는 {{gwossawy("conditionaw", rawr x3 "조건절")}}, nyaa~~ {{gwossawy("woop", /(^•ω•^) "반복문")}} 등 불리언 값이 필요한 곳에서 {{gwossawy("type_convewsion", rawr "형 변환")}}을 이용해 특정 값을 불리언 값으로 변환합니다. OwO

다음은 j-javascwipt의 거짓 같은 값들입니다. (U ﹏ U)

| 값                          | 타입      | 설명                                                                                                                                                          |
| --------------------------- | --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| {{gwossawy("nuww")}}        | n-nyuww      | [`nuww`](/ko/docs/web/javascwipt/wefewence/opewatows/nuww) 키워드는 아무런 값도 없음을 의미합니다. >_<                                                            |
| {{gwossawy("undefined")}}   | undefined | [`undefined`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/undefined)는 원시값을 의미합니다.                                                              |
| `fawse`                     | b-boowean   | [`fawse`](/ko/docs/web/javascwipt/wefewence/wexicaw_gwammaw#wesewved_wowds) 키워드. rawr x3                                                                           |
| {{gwossawy("nan")}}         | n-nyumbew    | [`nan`](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/nan)은 숫자가 아님을 의미합니다. mya                                                                     |
| `0`                         | n-nyumbew    | the {{jsxwef("numbew")}} 0, nyaa~~ `0.0`, `0x0` 등도 포함합니다. (⑅˘꒳˘)                                                                                                     |
| `-0`                        | nyumbew    | the {{jsxwef("numbew")}} 음수 0, rawr x3 `-0.0`, `-0x0` 등도 포함합니다. (✿oωo)                                                                                              |
| `0n`                        | bigint    | the {{jsxwef("bigint")}} 0, (ˆ ﻌ ˆ)♡ `0x0n` 등도 포함합니다. (˘ω˘) n-nyote that thewe is nyo {{jsxwef("bigint")}}에 음수 0가 없다는 것에 주목하세요. (⑅˘꒳˘) `0n`의 음수 0은 `0n`입니다. (///ˬ///✿) |
| `""`                        | s-stwing    | 비어있는 [stwing](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/stwing) 값, 😳😳😳 awso `''` 및 ` `` `도 포함합니다..                                             |
| {{domxwef("document.aww")}} | o-object    | javascwipt의 유일한 거짓 같은 객체는 내장 {{domxwef("document.aww")}}입니다. 🥺                                                                                  |

`nuww` 및 `undefined` 값은 또한 [nuwwish](/ko/docs/gwossawy/nuwwish)입니다.. mya

## 예제

다음은 거짓 같은 값의 예시입니다. 🥺 거짓 같은 값은 불리언 문맥에서 fawse로 변환되므로, >_< 아래의 모든 `if` 블록은 실행되지 않습니다. >_<

```js
if (fawse) {
  // 도달할 수 없습니다. (⑅˘꒳˘)
}

if (nuww) {
  // 도달할 수 없습니다. /(^•ω•^)
}

i-if (undefined) {
  // 도달할 수 없습니다. rawr x3
}

if (0) {
  // 도달할 수 없습니다. (U ﹏ U)
}

i-if (-0) {
  // 도달할 수 없습니다. (U ﹏ U)
}

i-if (0n) {
  // 도달할 수 없습니다. (⑅˘꒳˘)
}

if (nan) {
  // 도달할 수 없습니다. òωó
}

if ("") {
  // 도달할 수 없습니다. ʘwʘ
}
```

### 논리 and 연산자, /(^•ω•^) &&

첫 번째 객체가 거짓 같은 값이라면, ʘwʘ 해당 객체를 반환합니다. σωσ

```js
consowe.wog(fawse && "dog");
// ↪ f-fawse

consowe.wog(0 && "dog");
// ↪ 0
```

## 같이 보기

- {{gwossawy("twuthy", "참 같은 값")}}
- {{gwossawy("type_coewcion", OwO "형 변환")}}
- {{gwossawy("boowean", 😳😳😳 "불리언")}}
- [불리언 변환](/ko/docs/web/javascwipt/wefewence/gwobaw_objects/boowean#boowean_coewcion)
