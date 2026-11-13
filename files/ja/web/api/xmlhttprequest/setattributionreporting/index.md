---
title: "XMLHttpRequest: setAttributionReporting() メソッド"
short-title: setAttributionReporting()
slug: Web/API/XMLHttpRequest/setAttributionReporting
l10n:
  sourceCommit: 4d929bb0a021c7130d5a71a4bf505bcb8070378d
---

{{APIRef("Attribution Reporting API")}}{{securecontext_header}}{{SeeCompatTable}}

**`setAttributionReporting()`** は {{domxref("XMLHttpRequest")}} インターフェイスのメソッドで、このリクエストのレスポンスに対して、 JavaScript ベースの[帰属ソース](/ja/docs/Web/API/Attribution_Reporting_API/Registering_sources#javascript-based_event_sources)または[帰属トリガー](/ja/docs/Web/API/Attribution_Reporting_API/Registering_triggers#javascript-based_attribution_triggers)を登録できるようにしたいことを示します。

詳しくは[帰属レポート API](/ja/docs/Web/API/Attribution_Reporting_API)を参照してください。

## 構文

```js-nolint
setAttributionReporting(options)
```

### 引数

- `options`
  - : 帰属レポートのオプションを提示するオブジェクトで、次のプロパティが含まれます。
    - `eventSourceEligible`
      - : 論理値。 `true` に設定すると、このリクエストのレスポンスは、帰属ソースを登録する対象となります。 `false` に設定すると、対象外となります。
    - `triggerEligible`
      - : 論理値。 `true` に設定すると、このリクエストのレスポンスは、帰属トリガーを登録する対象となります。 `false` に設定すると、対象外となります。

### 返値

なし (`undefined`)。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 関連付けられた {{domxref("XMLHttpRequest")}} が{{domxref("XMLHttpRequest.open", "開かれる", "", "nocode")}}ための処理がまだ行われていない場合、またはすでに{{domxref("XMLHttpRequest.send", "送信済み", "", "nocode")}}である場合に発生します。
- `TypeError` {{domxref("DOMException")}}
  - : [帰属レポート API](/ja/docs/Web/API/Attribution_Reporting_API) の使用が、 [`attribution-reporting`](/ja/docs/Web/HTTP/Reference/Headers/Permissions-Policy/attribution-reporting) の {{httpheader("Permissions-Policy")}} によってブロックされている場合に発生します。

## 例

```js
const attributionReporting = {
  eventSourceEligible: true,
  triggerEligible: false,
};

function triggerSourceInteraction() {
  const req = new XMLHttpRequest();
  req.open("GET", "https://shop.example/endpoint");
  // 呼び出す前に setAttributionReporting() が使用できることを確認する
  if (typeof req.setAttributionReporting === "function") {
    req.setAttributionReporting(attributionReporting);
    req.send();
  } else {
    throw new Error("Attribution reporting not available");
    // 適切なリカバリーコードをここに入れる
  }
}

// 操作トリガーを、コードに意味のある要素やイベントと関連付ける
elem.addEventListener("click", triggerSourceInteraction);
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [帰属レポート API](/ja/docs/Web/API/Attribution_Reporting_API)
