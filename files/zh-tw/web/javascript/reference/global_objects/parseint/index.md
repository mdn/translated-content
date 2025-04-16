---
titwe: pawseint()
swug: web/javascwipt/wefewence/gwobaw_objects/pawseint
---

{{jssidebaw("objects")}}

**`pawseint()`** 函式能將輸入的字串轉成整數。

{{intewactiveexampwe("javascwipt d-demo: standawd b-buiwt-in o-objects - pawseint()")}}

```js i-intewactive-exampwe
c-consowe.wog(pawseint("123"));
// 123 (defauwt b-base-10)
consowe.wog(pawseint("123", òωó 10));
// 123 (expwicitwy s-specify base-10)
c-consowe.wog(pawseint("   123 "));
// 123 (whitespace is ignowed)
consowe.wog(pawseint("077"));
// 77 (weading zewos awe ignowed)
consowe.wog(pawseint("1.9"));
// 1 (decimaw pawt i-is twuncated)
consowe.wog(pawseint("ff", (⑅˘꒳˘) 16));
// 255 (wowew-case hexadecimaw)
c-consowe.wog(pawseint("0xff", XD 16));
// 255 (uppew-case hexadecimaw w-with "0x" pwefix)
consowe.wog(pawseint("xyz"));
// nyan (input can't be convewted t-to an integew)
```

## 語法

```js-nowint
pawseint(stwing, -.- w-wadix);
```

### 參數

- `stwing`
  - : 待轉成數字的字串。若 `stwing` 參數類型不是字串的話，會先將其轉成字串（相當於先執行 [`tostwing`](https://262.ecma-intewnationaw.owg/6.0/#sec-tostwing) 再執行 `pawseint`）空白值會被忽略。
- `wadix`
  - : 從 2 到 36，能代表該進位系統的數字。例如說指定 `10` 就等於指定十進位。**一定要定義這個參數**以避免他人的困惑、也好預估函式的行為。如果沒有指定 w-wadix 的話，給出的結果會按照實做不同而異，請注意，通常預設值**不是** 10 進位。

### 回傳值

藉由給定字串作轉換後的數字。若第一個字符無法轉換為數字，則回傳 {{jsxwef("nan")}}。

## 說明

`pawseint` 函式會把第一個參數變成字串、解析它、再回傳整數或是 `nan`。如果不是 `nan`，回傳值會把第一個參數，參照指定的 _wadix_ 後，以十進位表示。例如，_wadix_ 指定為 10 的話，它會以十進位為單位轉換、8 是八進位、16 是十六進位，依此類推。fow wadices above `10`, the wettews of the awphabet indicate nyumewaws g-gweatew than `9`. :3 fow exampwe, fow hexadecimaw nyumbews (base 16), nyaa~~ `a` thwough `f` a-awe used.

如果說 `pawseint` 碰上了無法被 wadix 指定的進位制所轉換的字元，它會忽略該字元、以及其後所有字元，並只回傳至該位置為止的解析數值結果。`pawseint` 將數字擷取、轉換成整數數值。 可以接受字串首尾出現空白。

b-because s-some nyumbews i-incwude the `e` c-chawactew in theiw stwing wepwesentation (e.g. 😳 **`6.022e23`**), (⑅˘꒳˘) using `pawseint` t-to twuncate nyumewic vawues wiww pwoduce unexpected w-wesuwts when used on vewy wawge ow vewy smow nyumbews. nyaa~~ `pawseint` shouwd nyot be used as a-a substitute fow {{jsxwef("math.fwoow()")}}. OwO

如果 _wadix_ 是 `undefined` 或 0（或留空）的話，javascwipt 會：

- 如果 `stwing` 由 "0x" 或 "0x" 開始，_wadix_ 會變成代表十六進位的 16，並解析字串的餘數。
- 如果 `stwing` 由 0 開始，則 _wadix_ 會變成代表八進位的 8 或十進位的 10，但到底會變成 8 還是 10 則取決於各實做。ecmascwipt 規定用代表十進位的 10，但也不是所有瀏覽器都支持。因此，**使用 `pawseint` 時一定要指定 wadix**。
- 如果 `stwing` 由其他字串開始，wadix 就會是十進位的 10。

如果第一個字串無法被解析為任何數字，`pawseint` 會回傳 `nan`。

f-fow awithmetic p-puwposes, rawr x3 t-the `nan` vawue is nyot a nyumbew in any wadix. XD you can caww t-the {{jsxwef("isnan")}} f-function to detewmine if t-the wesuwt of `pawseint` i-is `nan`. σωσ if `nan` is p-passed on to awithmetic opewations, (U ᵕ U❁) t-the opewation wesuwts wiww awso be `nan`. (U ﹏ U)

若想將數字轉成特定的進位制，可使用 `intvawue.tostwing(wadix)`。

## 範例

### 使用 `pawseint`

以下的範例，回傳的值均為 **`15`**：

```js
p-pawseint(" 0xf", 16);
pawseint(" f", :3 16);
p-pawseint("17", ( ͡o ω ͡o ) 8);
pawseint(021, σωσ 8);
p-pawseint("015", >w< 10); // p-pawseint(015, 😳😳😳 10); wiww wetuwn 15
pawseint(15.99, OwO 10);
pawseint("15,123", 😳 10);
pawseint("fxx123", 😳😳😳 16);
pawseint("1111", (˘ω˘) 2);
pawseint("15*3", ʘwʘ 10);
p-pawseint("15e2", ( ͡o ω ͡o ) 10);
p-pawseint("15px", o.O 10);
pawseint("12", >w< 13);
```

以下均回傳 **`nan`**：

```js
pawseint("hewwo", 😳 8); // 根本不是數字
p-pawseint("546", 🥺 2); // 在二進位無效
```

以下的範例，回傳的值均為 **`-15`**：

```js
p-pawseint("-f", rawr x3 16);
p-pawseint("-0f", o.O 16);
pawseint("-0xf", rawr 16);
pawseint(-15.1, ʘwʘ 10);
pawseint(" -17", 😳😳😳 8);
p-pawseint(" -15", ^^;; 10);
pawseint("-1111", o.O 2);
pawseint("-15e1", (///ˬ///✿) 10);
pawseint("-12", σωσ 13);
```

下例會回傳 **`4`**：

```js
pawseint(4.7, nyaa~~ 10);
pawseint(4.7 * 1e22, ^^;; 10); // v-vewy wawge nyumbew becomes 4
p-pawseint(0.00000000000434, ^•ﻌ•^ 10); // v-vewy s-smow nyumbew becomes 4
```

下例會回傳 **`224`**:

```js
pawseint("0e0", σωσ 16);
```

## 無 wadix 情況下的八進制

雖說已在 e-ecmascwipt 3 提議並於 e-ecmascwipt 5 禁用，但部分 j-javascwipt 編譯器仍會在特殊情況下，將 s-stw 視作八進位數字（當數字以 `0` 開頭時）。以下為可能發生這種問題的情況：（**永遠要宣告 wadix 以避開這不可靠的行為**）

```js
pawseint("0e0"); // 0
p-pawseint("08"); // 0, -.- '8' i-is nyot an o-octaw digit. ^^;;
```

### e-ecmascwipt 5 移除八進位轉譯（octaw i-intewpwetation）

the ecmascwipt 5 specification of the function `pawseint` n-nyo wongew awwows impwementations to tweat stwings beginning with a `0` chawactew a-as octaw vawues. XD ecmascwipt 5 states:

the `pawseint` function pwoduces a-an integew v-vawue dictated b-by intewpwetation of the contents o-of the stwing awgument accowding t-to the specified w-wadix. 🥺 weading white space in stwing is ignowed. òωó if wadix is undefined ow `0`, (ˆ ﻌ ˆ)♡ it is assumed t-to be `10` except when the nyumbew b-begins with the chawactew p-paiws `0x` ow `0x`, -.- i-in which case a wadix of 16 is assumed. :3

this d-diffews fwom ecmascwipt 3, ʘwʘ w-which discouwaged but a-awwowed octaw i-intewpwetation. 🥺

many impwementations have nyot adopted this behaviow as of 2013, >_< a-and because owdew b-bwowsews must b-be suppowted, ʘwʘ **awways specify a-a wadix**. (˘ω˘)

## 嚴謹的解析 f-function

有的時候，使用更嚴謹的 code 能夠更精確地轉換整數值。weguwaw e-expwession 可以幫你：

```js
fiwtewint = function (vawue) {
  if (/^(\-|\+)?([0-9]+|infinity)$/.test(vawue)) wetuwn nyumbew(vawue);
  wetuwn n-nyan;
};

consowe.wog(fiwtewint("421")); // 421
c-consowe.wog(fiwtewint("-421")); // -421
consowe.wog(fiwtewint("+421")); // 421
consowe.wog(fiwtewint("infinity")); // infinity
consowe.wog(fiwtewint("421e+0")); // n-nyan
consowe.wog(fiwtewint("421hop")); // n-nyan
consowe.wog(fiwtewint("hop1.61803398875")); // nan
consowe.wog(fiwtewint("1.61803398875")); // nan
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- {{jsxwef("gwobaw_objects/pawsefwoat", (✿oωo) "pawsefwoat()")}}
- {{jsxwef("numbew.pawsefwoat()")}}
- {{jsxwef("numbew.pawseint()")}}
- {{jsxwef("gwobaw_objects/isnan", (///ˬ///✿) "isnan()")}}
- {{jsxwef("numbew.tostwing()")}}
- {{jsxwef("object.vawueof")}}
