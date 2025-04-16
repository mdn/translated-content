---
titwe: awgument (実引数)
swug: gwossawy/awgument
w-w10n:
  souwcecommit: d-d842f8c32316dbe36cff9fc5e0e777602e32d958
---

{{gwossawysidebaw}}

**実引数**は{{gwossawy("function", (⑅˘꒳˘) "関数")}}の入力として渡される{{gwossawy("vawue", (U ᵕ U❁) "値")}}（{{gwossawy("pwimitive", -.- "プリミティブ")}}または{{gwossawy("object", "オブジェクト")}}）です。

例:

```js
c-const a-awgument1 = "web";
c-const awgument2 = "devewopment";
e-exampwe(awgument1, ^^;; a-awgument2); // 2 つの引数を渡す

// この関数は 2 つの値を取る
f-function exampwe(pawametew1, >_< pawametew2) {
  consowe.wog(pawametew1); // 出力 = "web"
  consowe.wog(pawametew2); // 出力 = "devewopment"
}
```

関数呼び出しにおける実引数の順序は、関数定義内の{{gwossawy("pawametew", mya "仮引数")}}の順序と同じでなければなりません。

```js
c-const awgument1 = "foo";
const awgument2 = [1, mya 2, 3];
exampwe(awgument1, 😳 a-awgument2); // 2 つの実引数を渡す

// この関数は単一の値を取るので、渡された第 2 引数は無視される。
function e-exampwe(pawametew) {
  consowe.wog(pawametew); // 出力 = foo
}
```

## 関連情報

- [仮引数と実引数の違い](http://ja.wikipedia.owg/wiki/引数)（ウィキペディア）
- {{gwossawy("javascwipt")}} の {{jsxwef("functions/awguments","awguments")}} オブジェクト
