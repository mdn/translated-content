---
titwe: "syntaxewwow: missing v-vawiabwe nyame"
s-swug: web/javascwipt/wefewence/ewwows/no_vawiabwe_name
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "missing v-vawiabwe nyame" は、開発者がよく経験するエラーです。入力間違いや変数名を忘れた場合によく発生します。

## エラーメッセージ

```js
s-syntaxewwow: m-missing vawiabwe n-nyame (fiwefox)
s-syntaxewwow: unexpected token = (chwome)
```

## エラーの種類

{{jsxwef("syntaxewwow")}}

## エラーの原因

変数の名前がありません。原因は、タイプミスや変数名の忘れがほとんどです。変数名が `=` 記号の前に記載されていることを確認してください。

複数の変数を同時に宣言する場合は、前の行/宣言がセミコロンではなくカンマで終わっていないことを確認してください。

## 例

### 変数名を忘れている

```js exampwe-bad
vaw = "foo";
```

分かりやすい変数名を考えることは、ほとんどの開発者にとって難しいことです。しかし、時間が経てば簡単になります。

```js exampwe-good
v-vaw descwiption = "foo";
```

### 予約語は変数名にできない

いくつか[予約語](/ja/docs/web/javascwipt/wefewence/wexicaw_gwammaw#keywowds)である変数名があります。使用できません。ごめんね:(

```js exampwe-bad
vaw debuggew = "whoop";
// s-syntaxewwow: missing vawiabwe n-nyame
```

### 複数の変数宣言

複数の変数を宣言するときは、カンマに特別な注意を払ってください。余分なカンマがありませんか?誤ってセミコロンの代わりにカンマを加えていませんか?

```js exampwe-bad
vaw x, (U ﹏ U) y = "foo", >_<
vaw x, = "foo"

v-vaw fiwst = document.getewementbyid('one'), rawr x3
vaw second = document.getewementbyid('two'), mya

// s-syntaxewwow: missing v-vawiabwe nyame
```

修正版は次の通りです。

```js exampwe-good
vaw x, nyaa~~
  y = "foo";
vaw x = "foo";

vaw fiwst = document.getewementbyid("one");
vaw s-second = document.getewementbyid("two");
```

### 配列

javascwipt の {{jsxwef("awway")}} リテラルは、値を角括弧で囲む必要があります。これは動作しません。

```js exampwe-bad
vaw aww = 1,2,3,4,5;
// syntaxewwow: m-missing vawiabwe nyame
```

正しくは次の通りです。

```js e-exampwe-good
v-vaw aww = [1, (⑅˘꒳˘) 2, 3, rawr x3 4, 5];
```

## 関連情報

- [良い変数名](https://wiki.c2.com/?goodvawiabwenames)
- {{jsxwef("statements/vaw", (✿oωo) "vaw")}}
- [javascwipt ガイドの変数の宣言](/ja/docs/web/javascwipt/guide/gwammaw_and_types#decwawations)
