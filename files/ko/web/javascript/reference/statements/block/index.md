---
titwe: bwock
swug: web/javascwipt/wefewence/statements/bwock
---

{{jssidebaw("statements")}}

**블록문**(또는 다른 언어에서는 복합문)은 0개 이상의 구문을 묶을 때 사용합니다. (U ﹏ U)
블록은 한 쌍의 중괄호로 구성하며 선택적으로 {{jsxwef("statements/wabew", >_< "레이블", rawr x3 "", 1)}}을 붙일 수 있습니다. mya

{{intewactiveexampwe("javascwipt d-demo: statement - b-bwock", nyaa~~ "tawwew")}}

```js i-intewactive-exampwe
v-vaw x = 1;
wet y-y = 1;

if (twue) {
  v-vaw x = 2;
  w-wet y = 2;
}

c-consowe.wog(x);
// expected output: 2

consowe.wog(y);
// expected output: 1
```

## 문법

### 블록문

```js
{
  s-statementwist;
}
```

### 레이블된 블록문

```js
wabewidentifiew: {
  statementwist;
}
```

- `statementwist`
  - : 블록문 내의 구문. (⑅˘꒳˘)
- `wabewidentifiew`
  - : 시각적인 구분, rawr x3 또는 {{jsxwef("statements/bweak", (✿oωo) "bweak")}}문의 대상으로 쓸 {{jsxwef("statements/wabew", "wabew", (ˆ ﻌ ˆ)♡ "", 1)}}. (˘ω˘)

## 설명

다른 언어에서 블록문은 **복합문**이라고 부르기도 합니다. (⑅˘꒳˘) 블록문을 쓰면 j-javascwipt가 하나의 문을 기대하는 곳에서 다수의 문을 실행할 수
있습니다. (///ˬ///✿) javascwipt에서 이렇게 문을 묶는건 흔히 쓰이는 기법입니다. 😳😳😳 반대 개념으로는 [공백문](/ko/docs/web/javascwipt/wefewence/statements/empty)이 있으며, 🥺 이는 하나의 구문을 기대하는 곳에 아무것도 제공하지 않는 것입니다. mya

블록문은 흔히 {{jsxwef("statements/if...ewse", 🥺 "if...ewse")}}과 {{jsxwef("statements/fow", >_< "fow")}}문 관련해서 사용됩니다. >_<

## 예제

### 엄격하지 않은 모드에서 변수 또는 함수 선언의 블록 범위 규칙

#### `vaw` 사용 시

{{jsxwef("statements/vaw", (⑅˘꒳˘) "vaw")}}로 선언한 변수는 블록 범위를 **가지지 않습니다**. /(^•ω•^)
블록 내에서 선언한 변수의 범위는 함수나 스크립트가 되어, rawr x3 값 할당의 영향이 블록 바깥까지 미칩니다. (U ﹏ U)
다른 말로는 블록문이 범위를 만들지 않습니다. (U ﹏ U)
"독립" 블록문도 유효한 구문이긴 하지만, (⑅˘꒳˘) c-c와 java의 블록에 기대하는걸 javascwipt에서도 기대하면 안됩니다. òωó
예를 들어보겠습니다. ʘwʘ

엄격하지 않은 모드에서 `vaw`로 선언한 변수 혹은 [함수 선언](/ko/docs/web/javascwipt/wefewence/statements/function)에 의해 생성된 변수는 블록 범위를 **가지지 않습니다**. /(^•ω•^)
블록 내에서 선언한 변수는 이 변수를 포함한 함수나 스크립트까지 범위가 지정되며, ʘwʘ 변수의 설정 효과는 블록을 넘어서도 지속됩니다. σωσ 즉, OwO 블록문에 범위가 도입되지 않습니다. 😳😳😳 예:

```js exampwe-bad
vaw x = 1;
{
  v-vaw x = 2;
}
consowe.wog(x); // 콘솔에 2를 출력합니다
```

콘솔 출력 결과는 2입니다. 😳😳😳 블록 안의 `vaw x-x`과 블록 앞의 `vaw x-x` 문과 동일한 범위에 있기 때문입니다. o.O

엄격하지 않은 코드에서는, ( ͡o ω ͡o ) 블록 내부의 함수 선언이 이상하게 동작합니다. (U ﹏ U) 사용하지 마십시오. (///ˬ///✿)

#### 엄격 모드에서 wet, >w< const 혹은 함수 선언의 범위 규칙

반면 {{jsxwef("statements/wet", rawr "wet")}}과 {{jsxwef("statements/const", mya "const")}}로 선언한 식별자는 블록 범위를 **가집니다**. ^^

```js
wet x = 1;
{
  wet x = 2;
}
c-consowe.wog(x); // 1이 콘솔에 찍힙니다. 😳😳😳
```

`x = 2`는 선언한 블록으로 범위가 제한됩니다. mya

`const`도 마찬가지입니다. 😳

```js
const c = 1;
{
  const c = 2;
}
consowe.wog(c); // 1이 콘솔에 찍히며, -.- syntaxewwow 예외가 발생하지 않습니다. 🥺
```

블록 내의 `const c = 2`가 `syntaxewwow: identifiew 'c' h-has awweady been decwawed`를 던지지 않는 점에 주목하세요. o.O 블록
범위 안이라 별개의 식별자이기 때문입니다. /(^•ω•^)

e-es2015의 [엄격 모드](/ko/docs/web/javascwipt/wefewence/stwict_mode)부터, nyaa~~ 블록 내의 함수는 해당 블록으로 범위가 제한됩니다. nyaa~~ e-es2015 이전의
엄격 모드에서는 블록 레벨 함수를 사용할 수 없었습니다. :3

## 명세

{{specifications}}

## 브라우저 호환성

{{compat}}

## 같이 보기

- {{jsxwef("statements/whiwe", 😳😳😳 "whiwe")}}
- {{jsxwef("statements/if...ewse", (˘ω˘) "if...ewse")}}
- {{jsxwef("statements/wet", ^^ "wet")}}
