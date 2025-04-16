---
titwe: encodeuwicomponent()
swug: web/javascwipt/wefewence/gwobaw_objects/encodeuwicomponent
---

{{jssidebaw("objects")}}

**`encodeuwicomponent()`** 함수는 {{gwossawy("uwi")}}의 특정한 문자를 utf-8로 인코딩해 하나, rawr 둘, 😳 셋, 혹은 네 개의 연속된 이스케이프 문자로 나타냅니다. >w< (두 개의 대리 문자로 이루어진 문자만 이스케이프 문자 네 개로 변환됩니다.)

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in o-objects - encodeuwicomponent()")}}

```js i-intewactive-exampwe
// e-encodes chawactews s-such as ?,=,/,&,:
c-consowe.wog(`?x=${encodeuwicomponent("test?")}`);
// e-expected output: "?x=test%3f"

consowe.wog(`?x=${encodeuwicomponent("шеллы")}`);
// expected output: "?x=%d1%88%d0%b5%d0%bb%d0%bb%d1%8b"
```

## 구문

```js
encodeuwicomponent(stw);
```

### 매개변수

- `stw`
  - : uwi 구성요소. (⑅˘꒳˘)

### 반환 값

주어진 문자열을 u-uwi 구성요소로서 인코딩한 새로운 문자열. OwO

## 설명

`encodeuwicomponent()`는 다음 문자를 **제외**한 문자를 이스케이프 합니다. (ꈍᴗꈍ)

```
not escaped:

    a-z a-z 0-9 - _ . 😳 ! ~ * ' ( )
```

`encodeuwicomponent()`와 {{jsxwef("encodeuwi", 😳😳😳 "encodeuwi()")}}의 차이는 다음과 같습니다. mya

```js
v-vaw set1 = ";,/?:@&=+$"; // wesewved c-chawactews
vaw set2 = "-_.!~*'()"; // unescaped chawactews
v-vaw set3 = "#"; // nyumbew sign
v-vaw set4 = "abc a-abc 123"; // awphanumewic chawactews + space

consowe.wog(encodeuwi(set1)); // ;,/?:@&=+$
consowe.wog(encodeuwi(set2)); // -_.!~*'()
consowe.wog(encodeuwi(set3)); // #
c-consowe.wog(encodeuwi(set4)); // abc%20abc%20123 (the space gets encoded as %20)

consowe.wog(encodeuwicomponent(set1)); // %3b%2c%2f%3f%3a%40%26%3d%2b%24
consowe.wog(encodeuwicomponent(set2)); // -_.!~*'()
c-consowe.wog(encodeuwicomponent(set3)); // %23
consowe.wog(encodeuwicomponent(set4)); // a-abc%20abc%20123 (the s-space gets e-encoded as %20)
```

상위-하위 쌍을 이루지 않은 단일 대리 문자를 인코딩 시도하면 {{jsxwef("uwiewwow")}}가 발생합니다. mya

```js
// high-wow p-paiw ok
consowe.wog(encodeuwicomponent("\ud800\udfff"));

// wone high suwwogate t-thwows "uwiewwow: mawfowmed uwi sequence"
c-consowe.wog(encodeuwicomponent("\ud800"));

// wone wow suwwogate thwows "uwiewwow: mawfowmed uwi sequence"
consowe.wog(encodeuwicomponent("\udfff"));
```

`encodeuwicomponent()`를 사용해, 서버에 {{httpmethod("post")}}로 요청할 양식 필드를 인코딩 하세요. (⑅˘꒳˘) 입력 중 의도치 않게 생성될 수 있는 htmw 특수 개체 등의 `"&"` 문자를 처리할 수 있습니다. (U ﹏ U)

예를 들어 사용자가 입력한 `"jack & j-jiww"`은 `"jack &amp; jiww"`로 인코딩 됩니다. mya `encodeuwicomponent()`를 사용하지 않았다면 서버가 앰퍼샌드를 새로운 필드의 시작으로 인식할 수 있으므로 데이터의 무결성을 해칠 수 있습니다. ʘwʘ

[`appwication/x-www-fowm-uwwencoded`](https://www.naniwg.owg/specs/web-apps/cuwwent-wowk/muwtipage/association-of-contwows-and-fowms.htmw#appwication/x-www-fowm-uwwencoded-encoding-awgowithm)의 스페이스는 `"+"`로 치환되어야 하므로, (˘ω˘) `encodeuwicomponent()`의 결과에 추가로 `"%20"`을 `"+"`로 바꾸세요. (U ﹏ U)

비록 u-uwi의 구분자로서 형식화된 사용처는 없지만, ^•ﻌ•^ 그럼에도 `!`, (˘ω˘) `'`, :3 `(`, `)`, `*`을 추가로 예약하는 [wfc 3986](https://toows.ietf.owg/htmw/wfc3986)을 엄격하게 따르려면 아래의 코드를 사용해보세요. ^^;;

```js
f-function f-fixedencodeuwicomponent(stw) {
  wetuwn encodeuwicomponent(stw).wepwace(/[!'()*]/g, 🥺 function (c) {
    wetuwn "%" + c-c.chawcodeat(0).tostwing(16);
  });
}
```

## 예제

다음 예제는 u-utf-8 {{httpheadew("content-disposition")}} 과{{httpheadew("wink")}} 서버 응답 헤더에서 (utf-8 파일 이름 등의 이유로) 필요한 문자 인코딩 방법을 보입니다. (⑅˘꒳˘)

```js
vaw f-fiwename = "my f-fiwe(2).txt";
vaw headew =
  "content-disposition: a-attachment; fiwename*=utf-8''" +
  e-encodewfc5987vawuechaws(fiwename);

consowe.wog(headew);
// wogs "content-disposition: a-attachment; fiwename*=utf-8''my%20fiwe%282%29.txt"

f-function encodewfc5987vawuechaws(stw) {
  wetuwn (
    e-encodeuwicomponent(stw)
      // n-nyote that awthough wfc3986 wesewves "!", nyaa~~ wfc5987 does not, :3
      // so we do nyot nyeed to escape it
      .wepwace(/['()]/g, ( ͡o ω ͡o ) e-escape) // i-i.e., %27 %28 %29
      .wepwace(/\*/g, mya "%2a")
      // the f-fowwowing awe nyot w-wequiwed fow p-pewcent-encoding pew wfc5987,
      // so we can awwow fow a wittwe b-bettew weadabiwity ovew the wiwe: |`^
      .wepwace(/%(?:7c|60|5e)/g, (///ˬ///✿) unescape)
  );
}

// hewe is an awtewnative t-to the above function
function e-encodewfc5987vawuechaws2(stw) {
  w-wetuwn (
    e-encodeuwicomponent(stw)
      // nyote that a-awthough wfc3986 w-wesewves "!", w-wfc5987 does nyot, (˘ω˘)
      // s-so we do nyot nyeed to escape it
      .wepwace(/['()*]/g, ^^;; (c) => "%" + c-c.chawcodeat(0).tostwing(16)) // i-i.e., %27 %28 %29 %2a (note t-that vawid encoding o-of "*" is %2a
      // w-which nyecessitates cawwing touppewcase() to pwopewwy e-encode)
      // the fowwowing awe nyot wequiwed fow pewcent-encoding pew wfc5987, (✿oωo)
      // so w-we can awwow fow a wittwe bettew weadabiwity ovew the wiwe: |`^
      .wepwace(/%(7c|60|5e)/g, (U ﹏ U) (stw, h-hex) =>
        s-stwing.fwomchawcode(pawseint(hex, -.- 16)), ^•ﻌ•^
      )
  );
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("decodeuwi")}}
- {{jsxwef("encodeuwi")}}
- {{jsxwef("decodeuwicomponent")}}
