---
title: BackgroundFetchUpdateUIEvent.updateUI()
slug: Web/API/BackgroundFetchUpdateUIEvent/updateUI
l10n:
  sourceCommit: 418f9cf461de0c7845665c0c677ad0667740f52a
---

{{APIRef("Background Fetch API")}}{{SeeCompatTable}}

{{domxref("BackgroundFetchUpdateUIEvent")}} インターフェイスの **`updateUI()`** メソッドは、 UI 上のタイトルとアイコンを更新し、バックグラウンドのフェッチの成否を表示します。

このメソッドは一度だけ実行され、フェッチの成否をユーザーに通知することができます。

## 構文

```js-nolint
updateUI(options)
```

### 引数

- `options` {{optional_inline}}
  - : 下記のいずれかを含むオブジェクト。
    - `icons` {{optional_inline}}
      - : UI で用いるアイコンを含む、 1 枚以上の画像リソースのリストです。画像リソースは下記の情報を持つオブジェクトです。
        - `src`
          - : 画像のURL文字列。
        - `sizes` {{optional_inline}}
          - : {{htmlelement("link")}} `sizes` 属性と同じ意味を持つ文字列。
        - `type` {{optional_inline}}
          - : 画像の MIME タイプを含む文字列。
        - `label` {{optional_inline}}
          - : 画像の名前を指定する文字列。

    - `title` {{optional_inline}}
      - : UI の新しいタイトルを指定する文字列。

### 返値

{{jsxref("Promise")}} 。

### 例外

- `InvalidStateError` {{domxref("DOMException")}}
  - : 以下のいずれかに当てはまるとき、発生します。
    - {{domxref("Event.isTrusted","isTrusted")}} プロパティが `false` のとき。
    - {{domxref("BackgroundFetchUpdateUIEvent")}} UI 更新のフラグがすでにセットされている、すなわち、すでに `updateUI()` メソッドが呼ばれたあとであるとき。
    - {{domxref("BackgroundFetchUpdateUIEvent")}} がアクティブではないとき。

## 例

以下の例では、フェッチ成功時に UI のタイトルとアイコン画像を更新しています。

```js
addEventListener("backgroundfetchsuccess", (event) => {
  event.updateUI({
    title: "Episode 5 ready to listen!",
    icon: {
      src: "path/to/success.ico",
      sizes: "16x16 32x32 64x64",
    },
  });
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
