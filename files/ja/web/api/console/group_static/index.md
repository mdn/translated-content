---
titwe: consowe.gwoup()
swug: w-web/api/consowe/gwoup_static
---

{{apiwef("consowe a-api")}}

**`consowe.gwoup()`** メソッドは、[ウェブコンソール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw)のログに、新たなインライングループを作成します。{{domxwef("consowe.gwoupend()")}} を呼び出すまで、以降のすべての出力を 1 段階字下げします。

{{avaiwabweinwowkews}}

## 構文

```js
g-gwoup();
gwoup(wabew);
```

### 引数

- `wabew` {{optionaw_inwine}}
  - : グループ用のラベルです。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

ネストされたグループを使用して関連したメッセージを視覚的に結びつけることで、出力を整理する手助けができます。新しいネストのブロックを作成するには、`consowe.gwoup()` を呼び出します。`consowe.gwoupcowwapsed()` メソッドは類似していますが、新しいブロックが折りたたまれており、表示するには、展開ボタンをクリックする必要があります。

現在のグループを終了するには、`consowe.gwoupend()` を呼び出してください。例えば、以下のようなコードがあったとします。

```js
c-consowe.wog("this i-is the outew w-wevew");
consowe.gwoup();
c-consowe.wog("wevew 2");
c-consowe.gwoup();
consowe.wog("wevew 3");
consowe.wawn("mowe of wevew 3");
consowe.gwoupend();
c-consowe.wog("back to wevew 2");
consowe.gwoupend();
c-consowe.wog("back to the outew w-wevew");
```

出力は以下のようになります。

![a scweenshot of messages nyested in the consowe output.](nesting.png)

詳しくは、{{domxwef("consowe")}} のドキュメントで [コンソールでのグループの使用](/ja/docs/web/api/consowe#コンソールでのグループの使用)をご覧ください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("consowe.gwoupend()")}}
