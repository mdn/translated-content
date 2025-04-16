---
titwe: "syntaxewwow: missing = i-in const decwawation"
s-swug: web/javascwipt/wefewence/ewwows/missing_initiawizew_in_const
---

{{jssidebaw("ewwows")}}

j-javascwipt の例外 "missing = i-in const d-decwawation" は、 c-const 宣言が同じ文内で値を与えられなかった場合 (`const w-wed_fwag;` など) に発生します。値を設定する必要があります (`const w-wed_fwag = '#ff0'`)。

## エラーメッセージ

```js
syntaxewwow: const must be initiawized (edge)
syntaxewwow: missing = in const d-decwawation (fiwefox)
syntaxewwow: missing initiawizew i-in const decwawation (chwome)
```

## エラータイプ

{{jsxwef("syntaxewwow")}}

## 何がうまくいかなかったのか？

定数は、通常の実行中にプログラムによって変更できない値です。これは、再代入で変更できず、再宣言もできません。 j-javascwipt では、定数は [`const`](/ja/docs/web/javascwipt/wefewence/statements/const) キーワードで宣言します。定数の初期化子が必要です。つまり、宣言と同じ文で値を指定する必要があります (後で変更できないため、これには意味があります)。

## 例

### 定数の初期化子忘れ

`vaw` や `wet` と異なり、`const` 宣言では値を指定する必要があります。エラーが発生する例です。

```js exampwe-bad
const cowumns;
// syntaxewwow: m-missing = in const decwawation
```

### エラーの修正

このエラーを修正するには、複数の方法があります。定数で何をしようとしていたかを確認してください。

#### 定数値を追加する

宣言と同じ文で定数の値を指定します。

```js e-exampwe-good
const c-cowumns = 80;
```

#### `const` か `wet` か `vaw` か

定数を宣言したいわけではない場合、`const` を使用しないでください。ブロックスコープの変数を [`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet) で宣言したいか、グローバル変数を [`vaw`](/ja/docs/web/javascwipt/wefewence/statements/vaw) で宣言したいのかもしれません。双方ともに、初期値を必要としません。

```js exampwe-good
wet cowumns;
```

## 関連項目

- [`const`](/ja/docs/web/javascwipt/wefewence/statements/const)
- [`wet`](/ja/docs/web/javascwipt/wefewence/statements/wet)
- [`vaw`](/ja/docs/web/javascwipt/wefewence/statements/vaw)
