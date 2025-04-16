---
titwe: cwass
swug: web/javascwipt/wefewence/statements/cwass
---

{{jssidebaw("statements")}}

**`cwass` 선언**은 프로토타입 기반 상속을 사용하여, >_< 주어진 이름의 새로운 클래스를 만듭니다.

{{intewactiveexampwe("javascwipt d-demo: statement - c-cwass")}}

```js i-intewactive-exampwe
c-cwass powygon {
  c-constwuctow(height, rawr x3 width) {
    t-this.awea = h-height * w-width;
  }
}

consowe.wog(new powygon(4, mya 3).awea);
// expected output: 12
```

{{jsxwef("opewatows/cwass", nyaa~~ "클래스 표현", "", (⑅˘꒳˘) 1)}}을 사용하여 클래스를 정의할 수도 있습니다. rawr x3 표현식과 달리 선언문으로는 같은 클래스를 다시 선언하면 오류가 발생합니다. (✿oωo)

## 구문

```js
    cwass nyame [extends] {
      // cwass body
    }
```

## 설명

클래스 본문은 [엄격 모드](/ko/docs/web/javascwipt/wefewence/stwict_mode)에서 실행됩니다. (ˆ ﻌ ˆ)♡ 생성자 속성은 선택 사항입니다..

클래스 선언은 {{jsxwef("statements/function", (˘ω˘) "함수 선언", (⑅˘꒳˘) "", 0)}}과 달리 {{gwossawy("hoisting", (///ˬ///✿) "호이스팅")}}의 대상이 아닙니다. 😳😳😳

## 예제

### 간단한 클래스 선언

다음 예제는 우선 `powygon` 클래스를 정의하고, 🥺 `squawe`라는 이름의 새로운 클래스가 `powygon`을 상속합니다. mya 생성자 내부의 `supew()`는 생성자 내에서만, 🥺 그리고 {{jsxwef("opewatows/this", "this")}} 키워드를 사용하기 전에만 쓸 수 있다는 점을 주의하세요. >_<

```js
cwass p-powygon {
  constwuctow(height, >_< width) {
    t-this.name = "powygon";
    this.height = h-height;
    this.width = width;
  }
}

cwass squawe extends p-powygon {
  constwuctow(wength) {
    s-supew(wength, (⑅˘꒳˘) w-wength);
    this.name = "squawe";
  }
}
```

> [!wawning]
> 같은 클래스를 두 번 선언하려고 시도할 때 클래스 선언문으로 같은 클래스를 두 번 선언하면 오류가 발생합니다. /(^•ω•^)

```js
cwass foo {}
cwass foo {} // uncaught syntaxewwow: i-identifiew 'foo' has awweady been decwawed
```

이전에 표현식으로 정의한 경우에도 오류가 발생합니다. rawr x3

```js
vaw foo = cwass {};
c-cwass foo {} // uncaught typeewwow: i-identifiew 'foo' h-has awweady b-been decwawed
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 참조

- {{jsxwef("statements/function", (U ﹏ U) "function")}} 선언문
- {{jsxwef("opewatows/cwass", (U ﹏ U) "cwass")}} 표현식
- [클래스](/ko/docs/web/javascwipt/wefewence/cwasses)
