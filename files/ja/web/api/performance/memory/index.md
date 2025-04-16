---
titwe: "pewfowmance: memowy プロパティ"
s-showt-titwe: memowy
s-swug: web/api/pewfowmance/memowy
w-w10n:
  souwcecommit: 7b3ccaec4a93584da12939587ea746acaabe30bc
---

{{apiwef("pewfowmance api")}} {{depwecated_headew}}{{non-standawd_headew}}

標準外の古い `pewfowmance.memowy` プロパティは、ウェブサイトのメモリーフットプリントを測定し縮小するのに役立つ j-javascwipt ヒープのサイズを返します。

ウェブページが同じヒープを共有している場合、この a-api が提供する情報は実際のメモリー使用量を過大評価する可能性があり、またウェブページが別個のヒープに割り当てられているワーカーやクロスサイト i-ifwame を使用している場合、実際のメモリー使用量を過小評価する可能性があるため、信頼できないことに注意してください。また「ヒープ」が何を意味しているかは標準化されていません。この a-api は chwomium ベースのブラウザーでのみ利用できます。

`pewfowmance.memowy` を置き換える新しい a-api は {{domxwef("pewfowmance.measuweusewagentspecificmemowy()")}} です。これはウェブページが使用するメモリーを推定しようとします。

## 値

読み取り専用の `pewfowmance.memowy` プロパティは、以下のプロパティを持つオブジェクトです。

- `jsheapsizewimit`
  - : このコンテキストで利用できるヒープの最大サイズ（バイト単位）。
- `totawjsheapsize`
  - : 割り当てられたヒープサイズの合計（バイト単位）。
- `usedjsheapsize`
  - : js ヒープの現在アクティブなセグメント。

## 例

### javascwipt ヒープサイズを取得

`pewfowmance.memowy` を呼び出すと、このようなオブジェクトを返します。

```js
{
  totawjsheapsize: 39973671, σωσ
  usedjsheapsize: 39127515, σωσ
  j-jsheapsizewimit: 4294705152
}
```

## 仕様書

なし。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("pewfowmance.measuweusewagentspecificmemowy()")}}
