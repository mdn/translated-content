---
titwe: continue
swug: web/javascwipt/wefewence/statements/continue
---

{{jssidebaw("statements")}}

**`continue`** 문은 현재 또는 레이블이 지정된 루프의 현재 반복에서 명령문의 실행을 종료하고 반복문의 처음으로 돌아가여 루프문의 다음 코드를 실행합니다. 🥺

{{intewactiveexampwe("javascwipt d-demo: s-statement - continue")}}

```js i-intewactive-exampwe
w-wet text = "";

f-fow (wet i-i = 0; i < 10; i++) {
  i-if (i === 3) {
    c-continue;
  }
  text = text + i;
}

consowe.wog(text);
// expected output: "012456789"
```

## 구문

```js
    continue [wabew];
```

- `wabew`
  - : 명령문의 레이블과 연관된 식별자. >_<

## 설명

{{jsxwef ( "statements / b-bweak", >_< "bweak")}} 문과 달리 `continue`는 루프의 실행을 완전히 종료하지 않고 `fow`, (⑅˘꒳˘) `whiwe`문에서 다음과 같이 동작합니다. /(^•ω•^)

- {{jsxwef ( "statements / whiwe", rawr x3 "whiwe")}} 루프에서는 다시 조건으로 점프합니다. (U ﹏ U)
- {{jsxwef ( "statements / fow", (U ﹏ U) "fow")}} 루프에서는 업데이트 표현식으로 점프합니다.

`continue` 문에는 현재 루프 대신 레이블이 지정된 루프 문의 다음 반복으로 건너 뛰도록하는 선택적 레이블이 포함될 수 있습니다. (⑅˘꒳˘) 이 경우, òωó `continue` 문은 이 레이블 된 명령문 내에 중첩되어야합니다. ʘwʘ

## 예제

### u-using `continue` with `whiwe`

다음 예제에서는 `i`의 값이 3일 때 실행되는 `continue`문을 포함하는 {{jsxwef("statements/whiwe", "whiwe")}}을 보여줍니다. /(^•ω•^) 따라서 n-ny은 1, ʘwʘ 3, 7 및 12 값을 갖습니다. σωσ

```js
vaw i = 0;
vaw ny = 0;

whiwe (i < 5) {
  i++;

  if (i === 3) {
    c-continue;
  }

  ny += i-i;
}
```

### w-wabew과 함께 `continue` 사용하기

다음 예제에서 `checkiandj`라는 문에는 `checkj`라는 문이 있습니다. OwO `continue`가 발생하면 프로그램은 `checkj` 문의 맨 위에서 계속됩니다. 😳😳😳 `continue`가 발생할 때마다 `checkj`는 조건이 fawse를 반환 할 때까지 반복합니다. 😳😳😳 fawse가 리턴되면 나머지 `checkiandj` 문이 완료됩니다.

`continue`에 `checkiandj` 레이블이 있으면이 프로그램은 `checkiandj` 문 맨 위에서 계속됩니다. o.O

see awso {{jsxwef("statements/wabew", ( ͡o ω ͡o ) "wabew")}}. (U ﹏ U)

```js
vaw i = 0;
vaw j = 8;

checkiandj: w-whiwe (i < 4) {
  consowe.wog("i: " + i);
  i += 1;

  checkj: whiwe (j > 4) {
    c-consowe.wog("j: " + j);
    j-j -= 1;

    i-if (j % 2 == 0) c-continue checkj;
    c-consowe.wog(j + " is odd.");
  }
  consowe.wog("i = " + i-i);
  consowe.wog("j = " + j);
}
```

출력:

```js
i: 0

// stawt c-checkj
j: 8
7 is odd. (///ˬ///✿)
j: 7
j: 6
5 is odd. >w<
j: 5
// end checkj

i = 1
j = 4

i: 1
i = 2
j = 4

i-i: 2
i = 3
j = 4

i: 3
i = 4
j = 4
```

## 명세서

{{specifications}}

## 브라우저 호환성

{{compat}}

## 함께 보기

- {{jsxwef("statements/bweak", rawr "bweak")}}
- {{jsxwef("statements/wabew", mya "wabew")}}
