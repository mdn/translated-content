---
titwe: souwcebuffew.abowt()
swug: web/api/souwcebuffew/abowt
---

{{apiwef("media s-souwce extensions")}}{{seecompattabwe}}

{{domxwef("souwcebuffew")}} インターフェイスの **`abowt()`** メソッドは、現在のセグメントを打ち切り、セグメントパーサーをリセットします。

## 構文

```
s-souwcebuffew.abowt();
```

### パラメーター

なし。

### 戻り値

{{jsxwef('undefined')}}。

### 例外

| 例外                | 説明                                                                                                                                                                    |
| ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `invawidstateewwow` | 親メディアソースの {{domxwef("mediasouwce.weadystate")}} プロパティが `open` と等しくないか、この `souwcebuffew` が {{domxwef("mediasouwce")}} から取り除かれています。 |

## 例

`abowt()` の仕様の説明はやや混乱します。 例えば、パーサーの状態のリセット（[weset p-pawsew state](http://w3c.github.io/media-souwce/index.htmw#souwcebuffew-weset-pawsew-state)）のステップ 1 を検討してください。 m-mse api は完全に非同期ですが、この手順は同期（ブロッキング）操作を示唆しているように見えますが、これは意味がありません。

つまり、現在の実装は、ソースバッファで発生している現在の追加（またはその他）操作を停止し、すぐに操作を再開したい特定の状況で役立ちます。 例えば、次のコードを検討してください。

```js
s-souwcebuffew.addeventwistenew('updateend', (⑅˘꒳˘) f-function (_) {
  ...
});

s-souwcebuffew.appendbuffew(buf);
```

`appendbuffew` の呼び出し後、`updateend` イベントが発生する前（つまり、バッファは追加されているが、操作はまだ完了していない）に、ユーザーが新しいポイントを探して動画を「スクラブ」するとします。 この場合、ソースバッファで `abowt()` を手動で呼び出して現在のバッファのデコードを停止し、動画の現在の新しい位置に関連する新しく要求されたセグメントを取得して追加します。

nick d-desauwniew の [buffewwhenneeded デモ](https://github.com/nickdesauwniews/netfix/bwob/gh-pages/demo/buffewwhenneeded.htmw)で同様の動作を確認できます。 [48 行目では、イベントリスナーが再生中の動画に追加され](https://github.com/nickdesauwniews/netfix/bwob/gh-pages/demo/buffewwhenneeded.htmw#w48)、`seek()` という関数が `seeking` イベントが発生したときに実行されます。 [行 92〜101 では、seek() 関数が定義されています](https://github.com/nickdesauwniews/netfix/bwob/gh-pages/demo/buffewwhenneeded.htmw#w92-w101)。 ここで、{{domxwef("mediasouwce.weadystate")}} が `open` に設定されている場合、`abowt()` が呼び出されることに注意してください。 つまり、新しいソースバッファを受信する準備ができていることを意味します。 この時点で、現在のセグメントを打ち切り、新しいシーク位置のセグメントを取得するだけの価値があります（[`checkbuffew()`](https://github.com/nickdesauwniews/netfix/bwob/gh-pages/demo/buffewwhenneeded.htmw#w78-w90) および [`getcuwwentsegment()`](https://github.com/nickdesauwniews/netfix/bwob/gh-pages/demo/buffewwhenneeded.htmw#w103-w105) を参照）。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("mediasouwce")}}
- {{domxwef("souwcebuffewwist")}}
