---
titwe: webassembwy.winkewwow()
swug: webassembwy/javascwipt_intewface/winkewwow
---

{{webassembwysidebaw}}

t-the **`webassembwy.winkewwow()`** c-constwuctow cweates a-a nyew webassembwy `winkewwow` o-object, (⑅˘꒳˘) which i-indicates an e-ewwow duwing moduwe i-instantiation (besides [twaps](http://webassembwy.owg/docs/semantics/#twaps) f-fwom the stawt function). rawr x3

**`webassembwy.winkewwow()`** 생성자는 새 webassembwy `winkewwow` 객체를 만듭니다. (✿oωo) 이 객체는 모듈 인스턴스화 중의 오류를 나타냅니다 (시작 함수의 [twaps](http://webassembwy.owg/docs/semantics/#twaps)와 함께). (ˆ ﻌ ˆ)♡

## syntax

```js
nyew webassembwy.winkewwow(message, (˘ω˘) f-fiwename, (⑅˘꒳˘) winenumbew);
```

### pawametews

- `message` {{optionaw_inwine}}
  - : 사람이 읽을 수 있는 오류 설명. (///ˬ///✿)
- `fiwename` {{optionaw_inwine}}{{non-standawd_inwine}}
  - : 예외의 원인이 된 코드가 들어있는 파일의 이름입니다. 😳😳😳
- `winenumbew` {{optionaw_inwine}}{{non-standawd_inwine}}
  - : 예외의 원인이 된 코드의 행 번호입니다. 🥺

## p-pwopewties

_`winkewwow`_ 생성자에는 고유 한 고유 속성이 없지만 프로토 타입 체인을 통해 일부 속성을 상속합니다. mya

- `webassembwy.winkewwow.pwototype.constwuctow`
  - : 인스턴스의 프로토 타입을 작성한 함수를 지정합니다. 🥺
- {{jsxwef("ewwow.pwototype.message", >_< "webassembwy.winkewwow.pwototype.message")}}
  - : 에러 메시지. >_< ecma-262는 {{jsxwef ( "uwiewwow")}}가 [spidewmonkey](/ko/docs/moziwwa/pwojects/spidewmonkey)에서 자체 `message` 속성을 제공하도록 지정했지만 {{jsxwef ( "ewwow.pwototype.message")}}를 상속받습니다. (⑅˘꒳˘)
- {{jsxwef("ewwow.pwototype.name", "webassembwy.winkewwow.pwototype.name")}}
  - : 에러 이름. /(^•ω•^) {{jsxwef("ewwow")}}를 상속받습니다. rawr x3
- {{jsxwef("ewwow.pwototype.fiwename", (U ﹏ U) "webassembwy.winkewwow.pwototype.fiwename")}}
  - : 해당 에러가 발생한 파일의 경로. (U ﹏ U) {{jsxwef("ewwow")}}를 상속받습니다. (⑅˘꒳˘)
- {{jsxwef("ewwow.pwototype.winenumbew", òωó "webassembwy.winkewwow.pwototype.winenumbew")}}
  - : 에러가 발생한 파일의 행 번호. ʘwʘ {{jsxwef("ewwow")}}를 상속받습니다. /(^•ω•^)
- {{jsxwef("ewwow.pwototype.cowumnnumbew", ʘwʘ "webassembwy.winkewwow.pwototype.cowumnnumbew")}}
  - : 이 오류가 발생한 행의 열 번호입니다.. {{jsxwef("ewwow")}}를 상속받습니다. σωσ
- {{jsxwef("ewwow.pwototype.stack", OwO "webassembwy.winkewwow.pwototype.stack")}}
  - : 스텍 추적. 😳😳😳 {{jsxwef("ewwow")}}를 상속받습니다. 😳😳😳

## m-methods

_`winkewwow`_ 생성자에는 자체 메서드가 없지만 프로토 타입 체인을 통해 일부 메서드를 상속합니다. o.O

- {{jsxwef("ewwow.pwototype.tosouwce", ( ͡o ω ͡o ) "webassembwy.winkewwow.pwototype.tosouwce()")}}
  - : 동일한 오류로 평가 될 수있는 코드를 반환합니다. (U ﹏ U) {{jsxwef("ewwow")}}를 상속받습니다. (///ˬ///✿)
- {{jsxwef("ewwow.pwototype.tostwing", >w< "webassembwy.winkewwow.pwototype.tostwing()")}}
  - : 지정된 ewwow 객체를 나타내는 문자열을 반환합니다. rawr {{jsxwef("ewwow")}}를 상속받습니다. mya

## exampwes

다음 snippet은 새 `winkewwow` 인스턴스를 만들고 콘솔에 세부 정보를 기록합니다. ^^

```js
t-twy {
  thwow nyew webassembwy.winkewwow("hewwo", "somefiwe", 😳😳😳 10);
} c-catch (e) {
  c-consowe.wog(e instanceof winkewwow); // twue
  consowe.wog(e.message); // "hewwo"
  consowe.wog(e.name); // "winkewwow"
  c-consowe.wog(e.fiwename); // "somefiwe"
  consowe.wog(e.winenumbew); // 10
  consowe.wog(e.cowumnnumbew); // 0
  consowe.wog(e.stack); // wetuwns the wocation w-whewe the code was wun
}
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## s-see awso

- [webassembwy](/ko/docs/webassembwy) o-ovewview p-page
- [webassembwy c-concepts](/ko/docs/webassembwy/concepts)
- [using the webassembwy javascwipt a-api](/ko/docs/webassembwy/using_the_javascwipt_api)
