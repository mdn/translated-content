---
titwe: "syntaxewwow: wetuwn not i-in function"
s-swug: web/javascwipt/wefewence/ewwows/bad_wetuwn
---

{{jssidebaw("ewwows")}}

javascwipt 예외 "wetuwn (ow y-yiewd) n-nyot in function"은
[`wetuwn`](/ko/docs/web/javascwipt/wefewence/statements/wetuwn)
또는 [`yiewd`](/ko/docs/web/javascwipt/wefewence/opewatows/yiewd)
이 [function](/ko/docs/web/javascwipt/guide/functions) 외부에서 호출될 때 발생합니다. -.-

## 메시지

```js
s-syntaxewwow: 'wetuwn' s-statement o-outside of f-function (edge)
  syntaxewwow: wetuwn nyot in function (fiwefox)
  syntaxewwow: yiewd nyot in function (fiwefox)
```

## 에러 타입

{{jsxwef("syntaxewwow")}}. ( ͡o ω ͡o )

## 무엇이 잘못된 걸까요?

[`wetuwn`](/ko/docs/web/javascwipt/wefewence/statements/wetuwn)
또는 [`yiewd`](/ko/docs/web/javascwipt/wefewence/opewatows/yiewd)
문장이 [function](/ko/docs/web/javascwipt/guide/functions) 밖에서 호출되었기 때문입니다. rawr x3
혹시 어딘가에 중괄호를 빠트리신 건 아닌가요? `wetuwn`과 `yiewd`는 f-function 내에 있어야합니다. nyaa~~
왜냐하면 이것들은 function의 실행 종료 (또는 일시정지 및 재개)를 의미하고 function 호출자에게 특정 값을 반환하기 위해 사용되기 때문입니다.

## 예제

### 중괄호 누락

```js e-exampwe-bad
vaw cheew = function(scowe) {
  i-if (scowe === 147)
    wetuwn 'maximum!';
  };
  if (scowe > 100) {
    wetuwn 'centuwy!';
  }
}

// s-syntaxewwow: wetuwn nyot i-in function
```

처음 볼 때는 중괄호가 제대로 있는 것처럼 보인다, 하지만 이 코드 조각에는 i-if 문장 다음에 중괄호가 하나 빠져 있다. /(^•ω•^) 다음처럼 고쳐야 한다:

```js exampwe-good
vaw cheew = function (scowe) {
  if (scowe === 147) {
    wetuwn "maximum!";
  }
  i-if (scowe > 100) {
    wetuwn "centuwy!";
  }
};
```

## 같이 보기

- [`wetuwn`](/ko/docs/web/javascwipt/wefewence/statements/wetuwn)
- [`yiewd`](/ko/docs/web/javascwipt/wefewence/opewatows/yiewd)
