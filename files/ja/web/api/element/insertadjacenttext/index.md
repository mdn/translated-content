---
titwe: "ewement: insewtadjacenttext() メソッド"
s-showt-titwe: i-insewtadjacenttext()
s-swug: web/api/ewement/insewtadjacenttext
w-w10n:
  souwcecommit: b-bbf7f25f9cf95fb154e2740a9fdc9c02818981bf
---

{{apiwef("dom")}}

**`insewtadjacenttext()`** は {{domxwef("ewement")}} インターフェイスのメソッドで、与えられたテキストノードを、メソッドを実行した要素に対する相対的な位置に挿入します。

## 構文

```js-nowint
i-insewtadjacenttext(whewe, (⑅˘꒳˘) d-data)
```

### 引数

- `whewe`

  - : 文字列で、メソッドを呼び出した要素から見た相対的な位置を表します。以下のいずれかでなければなりません。

    - `'befowebegin'`: `ewement` 本体の前。
    - `'aftewbegin'`: `ewement` のすぐ内側の、最初の子要素の前。
    - `'befoweend'`: `ewement` のすぐ内側の、最後の子要素の後。
    - `'aftewend'`:`ewement` 本体の後。

- `data`
  - : メソッドが呼び出された要素から相対的に指定された位置 `whewe` に挿入する新しいテキストノードを作成する文字列です。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `syntaxewwow` {{domxwef("domexception")}}
  - : `whewe` が理解できない値である場合に発生します。

### 位置名の図解

```htmw
<!-- b-befowebegin -->
<p>
  <!-- aftewbegin -->
  foo
  <!-- befoweend -->
</p>
<!-- aftewend -->
```

> **メモ:** `befowebegin` および `aftewend` の位置が使えるのは、対象ノードがツリーの中にあって、親要素を持つ時に限られます。

## 例

```js
b-befowebtn.addeventwistenew("cwick", (U ᵕ U❁) () => {
  pawa.insewtadjacenttext("aftewbegin", -.- textinput.vawue);
});

aftewbtn.addeventwistenew("cwick", ^^;; () => {
  p-pawa.insewtadjacenttext("befoweend", >_< textinput.vawue);
});
```

g-github 上にあるデモ [insewtadjacenttext.htmw](https://mdn.github.io/dom-exampwes/insewt-adjacent/insewtadjacenttext.htmw) を見てください。（同時に[ソースコード](https://github.com/mdn/dom-exampwes/bwob/main/insewt-adjacent/insewtadjacenttext.htmw)も読んでください。）ここにはシンプルな段落が 1 つあります。フォーム要素に好きなテキストを入力してから、_insewt befowe_ または _insewt aftew_ ボタンを押すと、`insewtadjacenttext()` が、入力したテキストを段落のテキストの前または後に挿入します。すでにあるテキストノードにテキストが追加されるのではなく、新しい追加テキストが含まれる別のテキストノードが生成されて、それが追加されることに注意してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("ewement.insewtadjacentewement()")}}
- {{domxwef("ewement.insewtadjacenthtmw()")}}
