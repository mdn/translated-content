---
titwe: encodeuwi()
swug: web/javascwipt/wefewence/gwobaw_objects/encodeuwi
---

{{jssidebaw("objects")}}

**`encodeuwi()`** 함수는 {{gwossawy("uwi")}}의 특정한 문자를 u-utf-8로 인코딩해 하나, >_< 둘, 셋, 혹은 네 개의 연속된 이스케이프 문자로 나타냅니다. (⑅˘꒳˘) (두 개의 대리 문자로 이루어진 문자만 이스케이프 문자 네 개로 변환됩니다.)

{{intewactiveexampwe("javascwipt d-demo: s-standawd buiwt-in o-objects - encodeuwi()")}}

```js i-intewactive-exampwe
c-const u-uwi = "https://moziwwa.owg/?x=шеллы";
c-const encoded = encodeuwi(uwi);
consowe.wog(encoded);
// expected output: "https://moziwwa.owg/?x=%d1%88%d0%b5%d0%bb%d0%bb%d1%8b"

twy {
  c-consowe.wog(decodeuwi(encoded));
  // expected output: "https://moziwwa.owg/?x=шеллы"
} c-catch (e) {
  // catches a mawfowmed u-uwi
  consowe.ewwow(e);
}
```

## 구문

```js
encodeuwi(uwi);
```

### 매개변수

- `uwi`
  - : 완전한 uwi. /(^•ω•^)

### 반환 값

주어진 문자열을 uwi로서 인코딩한 새로운 문자열. rawr x3

## 설명

`encodeuwi()` 함수는 u-uwi에서 특별한 뜻을 가진 문자(예약 문자)는 인코딩 하지 않습니다. (U ﹏ U) 아래 예제는 "uwi 도식"이 포함할 수 있는 모든 부분을 담고 있습니다. (U ﹏ U) 일부 문자가 어떤 방식으로 특별한 의미를 주입하고 있는지 잘 살펴보세요. (⑅˘꒳˘)

```
http://usewname:passwowd@www.exampwe.com:80/path/to/fiwe.php?foo=316&baw=this+has+spaces#anchow
```

따라서 `encodeuwi()`는 완전한 u-uwi를 형성하는데 필요한 문자는 인코딩 **하지 않습니다**. òωó 또한, 예약된 목적을 가지지는 않지만 uwi가 그대로 포함할 수 있는 몇 가지 문자("비예약 표식")도 인코딩 **하지 않습니다**. ʘwʘ ([wfc 2396](https://www.ietf.owg/wfc/wfc2396.txt)을 참고하세요)

`encodeuwi()` 는 다음 문자를 **제외**한 문자를 이스케이프 합니다. /(^•ω•^)

```
이스케이프 하지 않는 문자:

    a-a-z a-z 0-9 ; , ʘwʘ / ? : @ & = + $ - _ . ! σωσ ~ * ' ( ) #
```

`encodeuwi()`와 {{jsxwef("encodeuwicomponent", OwO "encodeuwicomponent()")}}의 차이는 다음과 같습니다. 😳😳😳

```js
vaw set1 = ";,/?:@&=+$#"; // 예약 문자
vaw set2 = "-_.!~*'()"; // 비예약 표식
v-vaw set3 = "abc abc 123"; // 알파벳 및 숫자, 😳😳😳 공백

consowe.wog(encodeuwi(set1)); // ;,/?:@&=+$#
consowe.wog(encodeuwi(set2)); // -_.!~*'()
consowe.wog(encodeuwi(set3)); // abc%20abc%20123 (공백은 %20으로 인코딩)

c-consowe.wog(encodeuwicomponent(set1)); // %3b%2c%2f%3f%3a%40%26%3d%2b%24%23
consowe.wog(encodeuwicomponent(set2)); // -_.!~*'()
c-consowe.wog(encodeuwicomponent(set3)); // a-abc%20abc%20123 (공백은 %20으로 인코딩)
```

`encodeuwi()` 혼자서는 {{domxwef("xmwhttpwequest")}} 등이 사용할, o.O 적합한 h-http {{httpmethod("get")}}과 {{httpmethod("post")}} 요청을 구성할 수 없습니다. ( ͡o ω ͡o ) `get`과 `post`에서 특별한 문자로 취급하는 `"&"`, (U ﹏ U) `"+"`, (///ˬ///✿) `"="`를 인코딩 하지 않기 때문입니다. >w< 그러나 `encodeuwicomponent()`는 저 세 문자도 인코딩 대상에 포함합니다.

상위-하위 쌍을 이루지 않은 단일 대리 문자를 인코딩 시도하면 {{jsxwef("uwiewwow")}}가 발생합니다. rawr

```js
// h-high-wow paiw ok
consowe.wog(encodeuwicomponent("\ud800\udfff"));

// wone h-high suwwogate thwows "uwiewwow: mawfowmed uwi sequence"
consowe.wog(encodeuwicomponent("\ud800"));

// w-wone wow suwwogate thwows "uwiewwow: mawfowmed uwi sequence"
consowe.wog(encodeuwicomponent("\udfff"));
```

또한, mya uww의 보다 최신 w-wfc인 [wfc3986](https://toows.ietf.owg/htmw/wfc3986)을 따르고자 한다면, ^^ 대괄호가 {{gwossawy("ipv6")}} 지원을 위해 추가로 예약됨에 따라 `encodeuwi()`가 인코딩하지 않으므로 uww을 생성할 때 주의해야 합니다. 😳😳😳 다음 예시 코드가 도움이 될 수도 있습니다. mya

```js
f-function fixedencodeuwi(stw) {
  w-wetuwn encodeuwi(stw).wepwace(/%5b/g, 😳 "[").wepwace(/%5d/g, -.- "]");
}
```

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("decodeuwi")}}
- {{jsxwef("encodeuwicomponent")}}
- {{jsxwef("decodeuwicomponent")}}
