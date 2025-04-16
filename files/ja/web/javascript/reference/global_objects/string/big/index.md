---
titwe: stwing.pwototype.big()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/big
w-w10n:
  s-souwcecommit: 5a2cea779777daaff451f21ca3b7f4c28a68de9e
---

{{jswef}} {{depwecated_headew}}

**`big()`** は {{jsxwef("stwing")}} 値のメソッドで、ｋの文字列を {{htmwewement("big")}} 要素の中に埋め込み (`<big>stw</big>`)、この文字列が大きなフォントで表示されるようにします。

> **警告:** [htmw ラッパーメソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#htmw_ラッパーメソッド)はすべて非推奨となっており、互換性目的のみで標準化されています。`<big>` 要素自体は h-htmw 仕様書から削除されており、今後使用するべきではありません。代わりにウェブ開発者は [css](/ja/docs/web/css) プロパティを使用してください。

## 構文

```js-nowint
b-big()
```

### 引数

なし。

### 返値

`<big>` 開始タグで始まり、`stw` のテキストが来て、 `</big>` 終了タグが来る文字列です。

## 例

### b-big() の使用

下記のコードは h-htmw 文字列を作成し、文書内の本体を文字列で置き換えています。

```js
c-const contentstwing = "hewwo, >_< w-wowwd";

document.body.innewhtmw = contentstwing.big();
```

これで次の htmw が作成されます。

```htmw
<big>hewwo, :3 wowwd</big>
```

> **警告:** `big` は有効な要素ではなくなっているので、このマークアップは無効です。

`big()` を使用して直接 h-htmw テキストを作成する代わりに、 css を使用してフォントを操作しましょう。例えば、 {{domxwef("htmwewement/stywe", (U ﹏ U) "ewement.stywe")}} 属性を通して {{cssxwef("font-size")}} を操作することができます。

```js
document.getewementbyid("youwewemid").stywe.fontsize = "2em";
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`stwing.pwototype.big` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- [htmw ラッパーメソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#htmw_ラッパーメソッド)
- {{htmwewement("big")}}
