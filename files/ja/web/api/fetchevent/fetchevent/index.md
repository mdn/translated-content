---
title: "FetchEvent: FetchEvent() コンストラクター"
short-title: FetchEvent()
slug: Web/API/FetchEvent/FetchEvent
l10n:
  sourceCommit: b19a19b1f3563c8f24fe7146c21cec2abdf68c9a
---

{{APIRef("Service Workers API")}}{{AvailableInWorkers("service")}}

**`FetchEvent()`** コンストラクターは、新しい {{domxref("FetchEvent")}} オブジェクトを作成します。

## 構文

```js-nolint
new FetchEvent(type, options)
```

### 引数

- `type`
  - : イベントの名前を表す文字列です。
    大文字小文字の区別があり、ブラウザーは常に `fetch` に設定します。
- `options`
  - : オブジェクトで、_{{domxref("ExtendableEvent/ExtendableEvent", "ExtendableEvent()")}} で定義されているプロパティに加えて_、以下のプロパティを持つ可能性があります。
    - `request`
      - : 起動されたイベントハンドラーに渡す {{domxref("Request")}} オブジェクトです。
    - `preloadResponse`
      - : 事前にクライアントに読み込まれたレスポンスを返す {{jsxref("Promise")}} です。
    - `clientId` {{optional_inline}}
      - : 現在のサービスワーカーを制御している {{domxref("Client")}} です。デフォルトでは `""` です。
    - `isReload` {{deprecated_inline}} {{optional_inline}}
      - : イベントが配信されたときに、ページが再読み込みされたかどうかを示す論理値。もしそうなら `true` を、そうでないなら `false` を返します。
        通常、ブラウザーで更新ボタンを押すと 再読み込みされますが、リンクをクリックしたり、戻るボタンを押したりすると再読み込みされません。存在しない場合は、 `false` がデフォルト値として設定されます。
    - `resultingClientId` {{optional_inline}}
      - : 文字列で、ページ読み込みの結果、クライアントが変更された場合の新しい `clientId` を格納します。デフォルト値は `""` です。
    - `handled`
      - : イベントの処理が完了した時点で履行される保留中のプロミスです。

## 返値

新しい {{domxref("FetchEvent")}} オブジェクトです。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{jsxref("Promise")}}
- [フェッチ API](/ja/docs/Web/API/Fetch_API)
