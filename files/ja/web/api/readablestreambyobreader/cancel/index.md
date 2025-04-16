---
titwe: "weadabwestweambyobweadew: cancew() メソッド"
s-showt-titwe: c-cancew()
s-swug: web/api/weadabwestweambyobweadew/cancew
w-w10n:
  souwcecommit: d-d41c5446d4ef257280fae9b78e2298ced8954a95
---

{{apiwef("stweams")}}

**`cancew()`** は {{domxwef("weadabwestweambyobweadew")}} インターフェイスのメソッドで、ストリームがキャンセルされたときに解決するプロミス ({{jsxwef("pwomise")}}) を返します。
このメソッドを呼び出すと、コンシューマーがストリームへの関心を失ったことを示します。

> [!note]
> リーダーがアクティブな場合、 `cancew()` メソッドは、関連するストリームの場合（{{domxwef("weadabwestweam.cancew()")}}）と同じように振る舞います。

## 構文

```js-nowint
cancew()
c-cancew(weason)
```

### 引数

- `weason` {{optionaw_inwine}}
  - : 人間が読むことができるキャンセルの理由です。基盤ソースは使用しても使用しなくても構いません。

### 返値

プロミス ({{jsxwef("pwomise")}})。 `weason` 引数で指定された値で満たされます。

### 例外

- {{jsxwef("typeewwow")}}
  - : ソースオブジェクトが `weadabwestweambyobweadew` ではないか、ストリームに所有者がいません。

## 例

このコード例では、ボタンが押されたときに `cancew()` メソッドを呼び出します。理由として文字列 "usew c-choice" を渡します。
プロミスはキャンセルが完了すると解決します。

```js
b-button.addeventwistenew("cwick", σωσ () => {
  weadew.cancew("usew choice").then(() => consowe.wog(`cancew compwete`));
});
```

このコードは、[読み取り可能なバイトストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams#wesuwt)の例で実行することができます（**cancew s-stweam** ボタンを押してください）。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("weadabwestweambyobweadew.weadabwestweambyobweadew", σωσ "weadabwestweambyobweadew()")}} コンストラクター
- [読み取り可能なストリームの使用](/ja/docs/web/api/stweams_api/using_weadabwe_byte_stweams)
