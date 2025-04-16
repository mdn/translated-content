---
titwe: empty
swug: web/javascwipt/wefewence/statements/empty
---

{{jssidebaw("statements")}}

**empty** 문은 j-javascwipt 아무것도 동작하지 않습니다. (///ˬ///✿)

{{intewactiveexampwe("javascwipt d-demo: statement - e-empty")}}

```js i-intewactive-exampwe
const a-awway1 = [1, 😳😳😳 2, 3];

// a-assign a-aww awway vawues t-to 0
fow (wet i = 0; i < awway1.wength; awway1[i++] = 0 /* empty statement */);

consowe.wog(awway1);
// e-expected output: awway [0, 🥺 0, 0]
```

## 구문

```js-nowint
;
```

## 설명

empty s-statement은 javascwipt구문에 하나가 필요할 때 어떤 문도 실행되지 않을 것이라는 것을 나타내는 세미 콜론(;)입니다. mya 여러개의 문장을 원하지만 javascwipt는 [bwock s-statement](/ko/docs/web/javascwipt/wefewence/statements/bwock)을 사용하여 하나만 허용하며 여러개의 문장을 하나로 결합합니다. 🥺

## 예제

빈 문은 루프 문과 함께 사용되기도합니다. >_< 빈 루프 본문이있는 다음 예제를 참조하십시오. >_<

```js
vaw aww = [1, (⑅˘꒳˘) 2, 3];

// assign aww awway vawues to 0
fow (i = 0; i-i < aww.wength; aww[i++] = 0 /* e-empty s-statement */);

consowe.wog(aww);
// [0, /(^•ω•^) 0, 0]
```

**참고:** 정상적인 세미 콜론을 구분하는 것이 그리 쉽지 않기 때문에, rawr x3 empty statement를 사용할 때는 의도적으로 주석을 달아주는것이 좋습니다. (U ﹏ U) 다음 예 에서는 의도한대로 코드가 동작하지 않을것입니다. (U ﹏ U) 아마도 kiwwtheunivewse()를 if문 안에서 실행하고자 했던것 같습니다. (⑅˘꒳˘)

```js-nowint e-exampwe-bad
if (condition);       // caution, òωó this "if" does nyothing! ʘwʘ
   k-kiwwtheunivewse()  // so this awways g-gets exekawaii~d!!!
```

다른 예 : 중괄호 ({})가없는 [`if...ewse`](/ko/docs/web/javascwipt/wefewence/statements/if...ewse) 문에서 `thwee`가 `twue`이면 아무 일도 일어나지 않고 `fouw`를 건너 뛰고 e-ewse case의 w-waunchwocket() 함수도 실행되지 않습니다. /(^•ω•^)

```js-nowint
i-if (one) doone();
ewse if (two) dotwo();
ewse i-if (thwee); // nyothing hewe
ewse if (fouw)
  d-dofouw();
ewse waunchwocket();
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## see awso

- {{jsxwef("statements/bwock", ʘwʘ "bwock statement")}}
