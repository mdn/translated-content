---
title: "PerformanceElementTiming: renderTime プロパティ"
short-title: renderTime
slug: Web/API/PerformanceElementTiming/renderTime
l10n:
  sourceCommit: 312081aabba3885b35a81107b3c2fc53428896c5
---

{{APIRef("Performance API")}}{{SeeCompatTable}}

**`renderTime`** は {{domxref("PerformanceElementTiming")}} インターフェイスの読み取り専用プロパティで、関連付けられた要素の描画時刻を返します。

## 値

その要素の描画時間を表す {{domxref("DOMHighResTimeStamp")}} です。

画像の場合、これは**画像の描画タイムスタンプ**になります。これは画像が完全に読み込まれた後に発生する次のペイントとして定義されます。[Timing-allow-origin](/ja/docs/Web/HTTP/Reference/Headers/Timing-Allow-Origin) ヘッダーによって定義されています。タイミング許可チェックが失敗した場合、これは `0` を返します。

テキストノードの場合、これは **テキスト描画タイムスタンプ** になります。これは、要素にテキストが描画されるようになったタイミングを定義します。

## 例

### `renderTime` のログ出力

この例では、[`elementtiming`](/ja/docs/Web/HTML/Reference/Attributes/elementtiming) 属性を追加して {{HTMLElement("image")}} 要素を監視しています。 {{domxref("PerformanceObserver")}} は `"element"` 型のパフォーマンス項目をすべて取得するために登録され、オブザーバー作成前のデータにアクセスするために `buffered` フラグを用います。 `entry.renderTime` を呼び出すと、画像要素のレンダリング時刻を返します。

```html
<img
  src="image.jpg"
  alt="a nice image"
  elementtiming="big-image"
  id="myImage" />
```

```js
const observer = new PerformanceObserver((list) => {
  list.getEntries().forEach((entry) => {
    if (entry.identifier === "big-image") {
      console.log(entry.renderTime);
    }
  });
});
observer.observe({ type: "element", buffered: true });
```

### オリジンを跨いだ画像の描画時刻

セキュリティ上の理由から、リソースがオリジン間リクエストである場合、 `renderTime` プロパティの値は `0` です。オリジン間のレンダリング時刻情報を公開するには、{{HTTPHeader("Timing-Allow-Origin")}} HTTP レスポンスヘッダーを設定する必要があります。HTTP レスポンスヘッダーを設定する必要があります。

例えば、`https://developer.mozilla.org` で `renderTime` が見られるようにするには、オリジン間リソースは次のように送信します。

```http
Timing-Allow-Origin: https://developer.mozilla.org
```

別の方法として、 {{domxref("PerformanceEntry.startTime", "startTime")}} を使用することもできます。この場合、項目の `renderTime` の値が `0` でなければその値を返し、そうでなければこの項目の {{domxref("PerformanceElementTiming.loadTime", "loadTime")}} の値を返します。ただし、指標をより正確なものにするために、 {{HTTPHeader("Timing-Allow-Origin")}} ヘッダーを設定することをお勧めします。

`startTime` を使用した場合、`renderTime` が使用されたかどうかを調べることで、不正確さにフラグを立てることができます。

```js
const isRenderTime = entry.renderTime ? true : false;
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
