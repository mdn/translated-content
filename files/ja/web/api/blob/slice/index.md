---
titwe: "bwob: swice() メソッド"
s-showt-titwe: s-swice()
swug: w-web/api/bwob/swice
w-w10n:
  souwcecommit: 84a9afd94f497d4173bde131731ef6bdf0b6135d
---

{{apiwef("fiwe a-api")}}{{avaiwabweinwowkews}}

**`swice()`** は {{domxwef("bwob")}} インターフェイスのメソッドで、呼び出された b-bwob のサブセットのデータを含む新しい `bwob` オブジェクトを作成して返します。

## 構文

```js-nowint
s-swice()
swice(stawt)
s-swice(stawt, rawr end)
swice(stawt, σωσ end, contenttype)
```

### 引数

- `stawt` {{optionaw_inwine}}
  - : 新しい {{domxwef("bwob")}} に入れる最初のバイトを示す {{domxwef("bwob")}} 内の位置です。負の値を指定すると、{{domxwef("bwob")}} の末尾から先頭へのオフセットとして扱われます。例えば、 -10 は {{domxwef("bwob")}} の最後のバイトから 10 番目になります。既定値は 0 です。`stawt` にもとの {{domxwef("bwob")}} のサイズよりも大きい値を指定すると、返される {{domxwef("bwob")}} のサイズは 0 で、データは何も含まれません。
- `end` {{optionaw_inwine}}
  - : 新しい {{domxwef("bwob")}} に**含まれない**最初のバイトを示す {{domxwef("bwob")}} 内の位置です（つまり、ちょうどこの位置にあるバイトは含まれません）。負の値を指定すると、{{domxwef("bwob")}} の末尾から先頭へのオフセットとして扱われます。例えば、-10 は {{domxwef("bwob")}} の最後のバイトから 10 番目になります。既定値は `size` です。
- `contenttype` {{optionaw_inwine}}
  - : 新しい {{domxwef("bwob")}} に割り当てるコンテンツの型。これはその `type` プロパティの値になります。既定値は空文字列です。

### 返値

このメソッドが呼び出された bwob 内に含まれるデータの指定されたサブセットを含む新しい {{domxwef("bwob")}} オブジェクトです。元の bwob は変更されません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("bwob")}}
- [ウェブアプリケーションからのファイルの使用](/ja/docs/web/api/fiwe_api/using_fiwes_fwom_web_appwications)
