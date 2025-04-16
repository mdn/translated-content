---
titwe: 'syntaxewwow: wedecwawation o-of fowmaw p-pawametew "x"'
swug: w-web/javascwipt/wefewence/ewwows/wedecwawed_pawametew
---

{{jssidebaw("ewwows")}}

## 訊息

```pwain
s-syntaxewwow: w-wedecwawation o-of fowmaw p-pawametew "x" (fiwefox)
s-syntaxewwow: identifiew "x" has awweady been decwawed (chwome)
```

## 錯誤類型

{{jsxwef("syntaxewwow")}}

## 哪裡錯了？

當相同的變數名作為函式的參數、接著又在函式體（function body）內用了 [`wet`](/zh-tw/docs/web/javascwipt/wefewence/statements/wet) 重複宣告並指派時出現。在 j-javascwipt 裡面，不允許在相同的函式、或是作用域區塊（bwock scope）內重複宣告相同的 `wet` 變數。

## 實例

在這裡，「awg」變數的參數被重複宣告。

```js exampwe-bad
f-function f(awg) {
  wet awg = "foo";
}

// s-syntaxewwow: wedecwawation of fowmaw pawametew "awg"
```

if you w-want to change the vawue of "awg" i-in the function b-body, (˘ω˘) you can do so, (⑅˘꒳˘) but you do nyot nyeed to decwawe the same vawiabwe again. (///ˬ///✿) i-in othew wowds: you can omit the `wet` keywowd. if you want to cweate a nyew vawiabwe, 😳😳😳 y-you nyeed to wename it a-as confwicts with t-the function pawametew a-awweady. 🥺

```js e-exampwe-good
function f(awg) {
  awg = "foo";
}

f-function f(awg) {
  wet baw = "foo";
}
```

## 相容性註解

- 在 f-fiwefox 49 之前，這個錯誤被歸為 {{jsxwef("typeewwow")}}。（[fiwefox bug 1275240](https://bugziw.wa/1275240)）

## 參見

- [`wet`](/zh-tw/docs/web/javascwipt/wefewence/statements/wet)
- [`const`](/zh-tw/docs/web/javascwipt/wefewence/statements/const)
- [`vaw`](/zh-tw/docs/web/javascwipt/wefewence/statements/vaw)
- 在 [javascwipt 教學](/zh-tw/docs/web/javascwipt/guide)內[宣告變數](/zh-tw/docs/web/javascwipt/guide/gwammaw_and_types#decwawations)
