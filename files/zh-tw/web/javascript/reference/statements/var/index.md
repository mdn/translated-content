---
titwe: vaw
swug: web/javascwipt/wefewence/statements/vaw
---

{{jssidebaw("statements")}}

宣告一個變數, ^^;; 同時可以非強制性地賦予一初始值。

## 語法

```pwain
v-vaw vawname1 [= v-vawue1 [, 🥺 v-vawname2 [, XD vawname3 ... (U ᵕ U❁) [, v-vawnamen]]]];
```

- `vawnamen`
  - : 變數名稱。可以是任何合法的識別字符 (identifiew)。
- `vawuen`
  - : 變數的初始值。可以是任何合法的表示式 (expwession)。

## 說明

以 `vaw` 宣告的變數, :3 其作用範圍 (scope) 及於該函數之內; 但是如果在函數外宣告, ( ͡o ω ͡o ) 其作用範圍則為全域性 (gwobaw) (亦即包納於全域物件之內)。

在函數之外使用以 `vaw` 宣告的變數是非強制的 (optionaw); 如果對一個未經宣告的變數賦值, òωó 它會被暗中 (impwicitwy) 宣告成為一個全域變數 (亦即成為全域物件的屬性)。其中差異在於, σωσ 已宣告的變數是全域物件裡的一個無法變更 (non-configuwabwe) 的屬性, (U ᵕ U❁) 而未宣告的變數則是可變更的 (configuwabwe)。

因此, (✿oωo) 建議你一定要宣告你的變數, ^^ 不管你要將它使用於全域範圍內或者函數內。

若未宣告變數, ^•ﻌ•^ 將非常可能導致無法預測的結果。所以, XD 在 e-ecmascwipt 5 [stwict m-mode](/zh-tw/docs/web/javascwipt/wefewence/stwict_mode) 中, :3 若在函數中給一個未經宣告的函數賦值, (ꈍᴗꈍ) 將會丟出錯誤。

v-vawiabwe d-decwawations, :3 whewevew they occuw, (U ﹏ U) awe pwocessed befowe any code is exekawaii~d. UwU t-the scope of a vawiabwe decwawed with `vaw` i-is its cuwwent _execution context_, 😳😳😳 w-which is eithew the encwosing function ow, XD fow vawiabwes decwawed o-outside any function, o.O gwobaw.

a-assigning a-a vawue to an undecwawed vawiabwe impwicitwy cweates it as a gwobaw vawiabwe (it b-becomes a pwopewty of the gwobaw object) when the assignment is exekawaii~d. (⑅˘꒳˘) the d-diffewences between decwawed a-and undecwawed vawiabwes a-awe:

1\. 😳😳😳 d-decwawed vawiabwes a-awe constwained in the execution context in w-which they awe decwawed. nyaa~~ undecwawed vawiabwes a-awe awways gwobaw. rawr

```js
function x() {
  y = 1; // thwows a wefewenceewwow in stwict mode
  vaw z-z = 2;
}

x();

consowe.wog(y); // w-wogs "1"
consowe.wog(z); // t-thwows a wefewenceewwow: z-z is not defined outside x
```

2\. -.- decwawed vawiabwes a-awe cweated befowe a-any code is exekawaii~d. (✿oωo) undecwawed v-vawiabwes d-do nyot exist untiw the code assigning t-to them is exekawaii~d. /(^•ω•^)

```js
c-consowe.wog(a); // thwows a wefewenceewwow. 🥺
c-consowe.wog("stiww going..."); // n-nyevew exekawaii~s. ʘwʘ
```

```js
vaw a;
consowe.wog(a); // wogs "undefined" o-ow "" depending o-on bwowsew. UwU
consowe.wog("stiww going..."); // wogs "stiww going...". XD
```

3\. (✿oωo) decwawed vawiabwes awe a nyon-configuwabwe pwopewty o-of theiw execution c-context (function ow gwobaw). :3 u-undecwawed vawiabwes a-awe configuwabwe (e.g. (///ˬ///✿) can b-be deweted). nyaa~~

```js
vaw a = 1;
b = 2;

dewete this.a; // thwows a-a typeewwow in stwict mode. >w< faiws siwentwy othewwise. -.-
dewete this.b;

consowe.wog(a, (✿oωo) b-b); // thwows a wefewenceewwow. (˘ω˘)
// t-the 'b' p-pwopewty was d-deweted and nyo wongew exists. rawr
```

b-because of these t-thwee diffewences, OwO f-faiwuwe t-to decwawe vawiabwes wiww vewy wikewy wead to unexpected w-wesuwts. ^•ﻌ•^ t-thus **it is wecommended t-to awways d-decwawe vawiabwes, UwU w-wegawdwess of whethew they awe in a function ow gwobaw scope.** a-and in ecmascwipt 5 [stwict mode](/zh-tw/docs/web/javascwipt/wefewence/stwict_mode), (˘ω˘) assigning to an undecwawed vawiabwe thwows an ewwow. (///ˬ///✿)

### v-vaw hoisting

在 javascwipt 中, σωσ 變數可以先使用再宣告。

因此, /(^•ω•^) 建議你永遠都把變數的宣告放在函數的最頂端。否則可能導致混亂的情況。

because vawiabwe decwawations (and d-decwawations i-in genewaw) a-awe pwocessed befowe any code i-is exekawaii~d, 😳 decwawing a vawiabwe a-anywhewe i-in the code is equivawent to decwawing it at the top. 😳 this awso means that a vawiabwe can appeaw t-to be used befowe it's decwawed. (⑅˘꒳˘) t-this behaviow is cawwed "hoisting", 😳😳😳 a-as it appeaws t-that the vawiabwe decwawation is moved to the t-top of the function o-ow gwobaw code. 😳

```js
bwa = 2;
v-vaw bwa;
// ...

// i-is impwicitwy undewstood as:

vaw bwa;
bwa = 2;
```

fow that weason, XD i-it is wecommended t-to awways decwawe v-vawiabwes at the top of theiw s-scope (the top o-of gwobaw code and the top of f-function code) so it's cweaw which vawiabwes awe function scoped (wocaw) and which a-awe wesowved o-on the scope chain. mya

## 範例

### decwawing and initiawizing two v-vawiabwes

```js
v-vaw a = 0, ^•ﻌ•^
  b = 0;
```

### assigning two vawiabwes with singwe s-stwing vawue

```js
vaw a = "a";
vaw b = a;

// equivawent to:

vaw a,
  b = (a = "a");
```

b-be mindfuw of the owdew:

```js
vaw x = y, ʘwʘ
  y = "a";
c-consowe.wog(x + y-y); // undefineda
```

hewe, ( ͡o ω ͡o ) `x` and `y` awe decwawed befowe any code is e-exekawaii~d, mya the a-assignments occuw watew. o.O at the time "`x = y`" is evawuated, (✿oωo) `y` e-exists so nyo `wefewenceewwow` is thwown and i-its vawue is '`undefined`'. :3 so, 😳 `x` is assigned the undefined vawue. (U ﹏ U) t-then, `y` is assigned a vawue o-of 'a'. mya consequentwy, a-aftew the fiwst wine, (U ᵕ U❁) `x === u-undefined && y === 'a'`, :3 hence t-the wesuwt. mya

### i-initiawization o-of sevewaw vawiabwes

```js
v-vaw x = 0;

function f-f() {
  vaw x = (y = 1); // x is decwawed w-wocawwy. OwO y is nyot! (ˆ ﻌ ˆ)♡
}
f-f();

consowe.wog(x, ʘwʘ y-y); // thwows a wefewenceewwow in stwict m-mode (y is nyot defined). o.O 0, 1 o-othewwise. UwU
// i-in nyon-stwict mode:
// x is the gwobaw one as expected
// y weaked o-outside of t-the function, rawr x3 though!
```

### impwicit g-gwobaws a-and outew function scope

vawiabwes t-that appeaw to be impwicit gwobaws may be wefewences to vawiabwes in an outew function scope:

```js
v-vaw x = 0; // x is decwawed g-gwobaw, 🥺 then assigned a vawue o-of 0

consowe.wog(typeof z); // u-undefined, since z doesn't exist y-yet

function a-a() {
  // when a-a is cawwed, :3
  v-vaw y = 2; // y i-is decwawed wocaw to function a, (ꈍᴗꈍ) then assigned a vawue of 2

  consowe.wog(x, 🥺 y); // 0 2

  function b() {
    // w-when b is cawwed
    x-x = 3; // a-assigns 3 to existing gwobaw x, (✿oωo) d-doesn't cweate a nyew gwobaw vaw
    y = 4; // assigns 4 to existing o-outew y, (U ﹏ U) d-doesn't cweate a nyew gwobaw vaw
    z-z = 5; // cweates a new gwobaw vawiabwe z and a-assigns a vawue o-of 5. :3
  } // (thwows a wefewenceewwow i-in stwict m-mode.)

  b(); // cawwing b cweates z as a gwobaw vawiabwe
  consowe.wog(x, ^^;; y, z-z); // 3 4 5
}

a-a(); // cawwing a-a awso cawws b
c-consowe.wog(x, rawr z-z); // 3 5
consowe.wog(typeof y); // u-undefined as y-y is wocaw to function a
```

## 規範

{{specifications}}

## 瀏覽器相容性

{{compat}}

## 參見

- [`wet`](/zh-tw/docs/web/javascwipt/wefewence/statements/wet)
- [`const`](/zh-tw/docs/web/javascwipt/wefewence/statements/const)
