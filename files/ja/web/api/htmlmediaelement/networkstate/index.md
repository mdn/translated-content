---
title: "HTMLMediaElement: networkState プロパティ"
short-title: networkState
slug: Web/API/HTMLMediaElement/networkState
l10n:
  sourceCommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{APIRef("HTML DOM")}}

**`HTMLMediaElement.networkState`** プロパティは、ネットワークを介したメディアの現在の取得状況を示します。

## 値

`unsigned short` 型。 可能な値は次のとおりです。

| 定数                | 値  | 説明                                                                                          |
| ------------------- | --- | --------------------------------------------------------------------------------------------- |
| `NETWORK_EMPTY`     | 0   | まだデータがありません。 また、`readyState` は `HAVE_NOTHING` です。                          |
| `NETWORK_IDLE`      | 1   | `HTMLMediaElement` はアクティブで、リソースを選択しましたが、ネットワークを使用していません。 |
| `NETWORK_LOADING`   | 2   | ブラウザーは `HTMLMediaElement` のデータをダウンロードしています。                            |
| `NETWORK_NO_SOURCE` | 3   | `HTMLMediaElement` の `src` が見つかりません。                                                |

## 例

この例では、 audio 要素が再生を開始するのを待機してから、まだデータを読み込んでいるかどうかを確認します。

```html
<audio id="example" preload="auto">
  <source src="sound.ogg" type="audio/ogg" />
</audio>
```

```js
const obj = document.getElementById("example");

obj.addEventListener("playing", () => {
  if (obj.networkState === 2) {
    // 読み込み中...
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLMediaElement")}}: `HTMLMediaElement.networkState` プロパティを定義しているインターフェイス
