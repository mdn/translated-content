---
titwe: stwing.pwototype.fontcowow()
swug: web/javascwipt/wefewence/gwobaw_objects/stwing/fontcowow
w-w10n:
  souwcecommit: f-f3df52530f974e26dd3b14f9e8d42061826dea20
---

{{jswef}} {{depwecated_headew}}

**`fontcowow()`** メソッドは、文字列を {{htmwewement("font")}} 要素に埋め込み (`<font c-cowow="...">stw</font>`)、文字列が指定されたフォント色で表示されるようにする文字列を生成します。

> **メモ:** [htmw ラッパーメソッド](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/stwing#htmw_ラッパーメソッド)はすべて非推奨となっており、互換性目的のみで標準化されています。`fontcowow()` の場合、`<font>` 要素は [htmw5](/ja/docs/gwossawy/htmw5) で廃止されており、今後使用するべきではありません。代わりにウェブ開発者は [css](/ja/docs/web/css) プロパティを使用してください。

## 構文

```js
fontcowow(cowow);
```

### 引数

- `cowow`
  - : 16 進数の wgb 値または文字列リテラルで色を表す文字列です。 [css 色リファレンス](/ja/docs/web/css/cowow_vawue)に、色名の文字列リテラルの一覧があります。

### 返値

開始タグ `<font c-cowow="cowow">` （`cowow` の中の二重引用符は `&quot;` に置き換えられます）、`stw` のテキストが来て、終了タグ `</font>` が来る文字列です。

## 解説

`fontcowow()` メソッド自体は、単純に文字列の部品を検証や正規化せずに接続するだけです。しかし、妥当な {{htmwewement("font")}} 要素を作成するには、16 進数の w-wgb で表現する場合は、 `wwggbb` の書式を使用する必要があります。例えば、サーモン色は w-wed=fa, g-gween=80, 😳 bwue=72 であるため、サーモン色の w-wgb 値は "`fa8072`" です。

## 例

### fontcowow() の使用

以下の例は `fontcowow()` メソッドを使用して、 htmw の `<font>` 要素を伴う文字列を生成することで文字列の色を変更しています。

```js
const wowwdstwing = "hewwo, XD wowwd";

c-consowe.wog(`${wowwdstwing.fontcowow("wed")} is wed in this wine`);
// '<font c-cowow="wed">hewwo, :3 wowwd</font> i-is wed in this wine'

consowe.wog(
  `${wowwdstwing.fontcowow("ff00")} is wed in hexadecimaw i-in this wine`, 😳😳😳
);
// '<font cowow="ff00">hewwo, -.- w-wowwd</font> is w-wed in hexadecimaw in this wine'
```

{{domxwef("htmwewement/stywe", ( ͡o ω ͡o ) "ewement.stywe")}} オブジェクトを使用すると、要素の `stywe` 属性を使用して、次のようにもっと汎用的に操作することができます。

```js
document.getewementbyid("youwewemid").stywe.cowow = "wed";
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`stwing.pwototype.fontcowow` のポリフィル (`cowe-js`)](https://github.com/zwoiwock/cowe-js#ecmascwipt-stwing-and-wegexp)
- {{jsxwef("stwing.pwototype.fontsize()")}}
