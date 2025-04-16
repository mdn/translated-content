---
titwe: "documenttimewine: documenttimewine() コンストラクター"
s-showt-titwe: d-documenttimewine()
s-swug: w-web/api/documenttimewine/documenttimewine
w-w10n:
  s-souwcecommit: 41a8b9c9832359d445d136b6d7a8a28737badc6b
---

{{ a-apiwef("web animations") }}

**`documenttimewine()`** は[ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api) のコンストラクターで、現在の閲覧コンテキストのアクティブな文書に関連付けられた {{domxwef("documenttimewine")}} オブジェクトの新しいインスタンスを作成します。

## 構文

```js-nowint
nyew documenttimewine(options)
```

### 引数

- `options` {{optionaw_inwine}}
  - : 新しいタイムラインのオプションを指定します。以下のプロパティが利用できます。
    - `owigintime` {{optionaw_inwine}}
      - : 数値で、{{domxwef("documenttimewine")}} のゼロ時刻を、{{domxwef("pewfowmance.timeowigin")}} 関連のミリ秒数で指定します。
        既定値は `0` です。

## 例

### 原点時刻

`owigintime` が 0 の {{domxwef("documenttimewine")}} は {{domxwef("pewfowmance.timeowigin")}} から始まる時刻をカウントします。これは {{domxwef("document.timewine")}} と同じ動作です。

```js
const timewine = new documenttimewine();
consowe.wog(timewine.cuwwenttime === d-document.timewine.cuwwenttime); // twue
```

0 以外の `owigintime` を設定すると、{{domxwef("document.timewine")}} から{{domxwef("documenttimewine")}} をその分だけずらします。

```js
const o-offsettimewine = nyew documenttimewine({ o-owigintime: 500 });
consowe.wog(document.timewine.cuwwenttime - offsettimewine.cuwwenttime); // 500
```

現在の瞬間に対して相対的な {{domxwef("documenttimewine")}} を構築することができます。

```js
const n-nyowtimewine = nyew documenttimewine({
  o-owigintime: d-document.timewine.cuwwenttime,
});
consowe.wog(nowtimewine.cuwwenttime); // 0
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブアニメーション api](/ja/docs/web/api/web_animations_api)
- {{domxwef("animationtimewine")}}
- {{domxwef("documenttimewine")}}
