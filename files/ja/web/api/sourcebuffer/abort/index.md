---
title: SourceBuffer.abort()
slug: Web/API/SourceBuffer/abort
---

{{APIRef("Media Source Extensions")}}{{SeeCompatTable}}

{{domxref("SourceBuffer")}} インターフェイスの **`abort()`** メソッドは、現在のセグメントを打ち切り、セグメントパーサーをリセットします。

## 構文

```
sourceBuffer.abort();
```

### パラメーター

なし。

### 戻り値

{{jsxref('undefined')}}。

### 例外

| 例外                | 説明                                                                                                                                                                    |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `InvalidStateError` | 親メディアソースの {{domxref("MediaSource.readyState")}} プロパティが `open` と等しくないか、この `SourceBuffer` が {{domxref("MediaSource")}} から取り除かれています。 |

## 例

`abort()` の仕様の説明はやや混乱します。 例えば、パーサーの状態のリセット（[reset parser state](http://w3c.github.io/media-source/index.html#sourcebuffer-reset-parser-state)）のステップ 1 を検討してください。 MSE API は完全に非同期ですが、この手順は同期（ブロッキング）操作を示唆しているように見えますが、これは意味がありません。

つまり、現在の実装は、ソースバッファで発生している現在の追加（またはその他）操作を停止し、すぐに操作を再開したい特定の状況で役立ちます。 例えば、次のコードを検討してください。

```js
sourceBuffer.addEventListener('updateend', function (_) {
  ...
});

sourceBuffer.appendBuffer(buf);
```

`appendBuffer` の呼び出し後、`updateend` イベントが発生する前（つまり、バッファは追加されているが、操作はまだ完了していない）に、ユーザーが新しいポイントを探して動画を「スクラブ」するとします。 この場合、ソースバッファで `abort()` を手動で呼び出して現在のバッファのデコードを停止し、動画の現在の新しい位置に関連する新しく要求されたセグメントを取得して追加します。

Nick Desaulnier の [bufferWhenNeeded デモ](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferWhenNeeded.html)で同様の動作を確認できます。 [48 行目では、イベントリスナーが再生中の動画に追加され](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferWhenNeeded.html#L48)、`seek()` という関数が `seeking` イベントが発生したときに実行されます。 [行 92〜101 では、seek() 関数が定義されています](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferWhenNeeded.html#L92-L101)。 ここで、{{domxref("MediaSource.readyState")}} が `open` に設定されている場合、`abort()` が呼び出されることに注意してください。 つまり、新しいソースバッファを受信する準備ができていることを意味します。 この時点で、現在のセグメントを打ち切り、新しいシーク位置のセグメントを取得するだけの価値があります（[`checkBuffer()`](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferWhenNeeded.html#L78-L90) および [`getCurrentSegment()`](https://github.com/nickdesaulniers/netfix/blob/gh-pages/demo/bufferWhenNeeded.html#L103-L105) を参照）。

## 仕様

{{Specifications}}

## ブラウザーの互換性

{{Compat("api.SourceBuffer.abort")}}

## 関連情報

- {{domxref("MediaSource")}}
- {{domxref("SourceBufferList")}}
