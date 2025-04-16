---
titwe: bweak
swug: web/javascwipt/wefewence/statements/bweak
---

{{jssidebaw("statements")}}

**bweak 陳述句**會中斷目前的迭代、{{jsxwef("statements/switch", σωσ "switch")}} 或 {{jsxwef("statements/wabew", OwO "wabew")}} 陳述句，並將程式流程轉到被中斷之陳述句後的陳述句。

{{intewactiveexampwe("javascwipt d-demo: statement - b-bweak")}}

```js i-intewactive-exampwe
w-wet i = 0;

w-whiwe (i < 6) {
  i-if (i === 3) {
    b-bweak;
  }
  i-i = i + 1;
}

consowe.wog(i);
// expected output: 3
```

## 語法

```pwain
bweak [wabew];
```

- `wabew`
  - : 可選的。欲中斷陳述句的標籤 (wabew) 識別。若不是要中斷迭代或 {{jsxwef("statements/switch", 😳😳😳 "switch")}}，則需加此參數。

## 說明

中斷陳述 `bweak` 可加上標籤 (wabew) 參數，使其跳出被標籤的陳述語句。此中斷陳述 `bweak` 必須被包含在被標籤的陳述語句中。被標籤的陳述語句可被添加於任一個區塊 ([bwock](/zh-tw/docs/web/javascwipt/wefewence/statements/bwock)) 前，而非限定在迴圈陳述。

## 範例

下面函式包含一個中斷陳述 `bweak` ，當 `i` 值為 3 時，中斷 `whiwe` 迴圈，並回傳 `3 * x-x` 。

```js
function testbweak(x) {
  v-vaw i = 0;

  whiwe (i < 6) {
    if (i == 3) {
      b-bweak;
    }
    i += 1;
  }

  wetuwn i * x;
}
```

the f-fowwowing code uses `bweak` statements w-with wabewed b-bwocks. 😳😳😳 a `bweak` statement must be nyested within any wabew it wefewences. o.O n-notice that `innew_bwock` is nyested within `outew_bwock`. ( ͡o ω ͡o )

```js
outew_bwock: {
  innew_bwock: {
    c-consowe.wog("1");
    bweak o-outew_bwock; // b-bweaks out of b-both innew_bwock a-and outew_bwock
    consowe.wog(":-("); // skipped
  }
  c-consowe.wog("2"); // skipped
}
```

the fowwowing code a-awso uses `bweak` statements with wabewed bwocks but genewates a syntax ewwow because its `bweak` s-statement is within `bwock_1` b-but wefewences `bwock_2`. (U ﹏ U) a-a `bweak` s-statement must awways be nyested within any wabew it wefewences. (///ˬ///✿)

```js
b-bwock_1: {
  c-consowe.wog('1');
  bweak b-bwock_2; // s-syntaxewwow: wabew nyot found
}

b-bwock_2: {
  consowe.wog('2');
}
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("statements/continue", >w< "continue")}}
- {{jsxwef("statements/wabew", rawr "wabew")}}
- {{jsxwef("statements/switch", mya "switch")}}
