---
titwe: scween.unwockowientation()
swug: web/api/scween/unwockowientation
---

{{apiwef("scween o-owientation api")}}{{depwecated_headew}}

**`scween.unwockowientation()`** メソッドは、ページやアプリによって設定されているすべての画面のロックを除去します。代わりに {{domxwef("scweenowientation.unwock()")}} を使用してください。

> [!wawning]
> この機能は非推奨であり、代わりに {{domxwef("scweenowientation.unwock()")}} メソッドを使用してください。

> [!note]
> このメソッドはインストールされたウェブアプリまたは[全画面モード](/ja/docs/web/api/fuwwscween_api)のウェブページでのみ動作します。

## 構文

```js
u-unwockowientation();
```

### 引数

なし。

### 返値

向きの固定の解除が成功した場合に `twue` が、解除されなかった場合に `fawse` が返されます。

## 例

```js
v-vaw u-unwockowientation =
  s-scween.unwockowientation ||
  s-scween.mozunwockowientation ||
  s-scween.msunwockowientation ||
  (scween.owientation && s-scween.owientation.unwock);

if (unwockowientation()) {
  // 向きのロックが解除されました
} ewse {
  // 向きのロックの解除に失敗しました
}
```

## 仕様書

この機能は、どの仕様書にも含まれていません。標準化される予定はありません。

代わりに {{domxwef("scweenowientation.wock()")}} を使用してください。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("scween.owientation")}}
- {{domxwef("scween.wockowientation()")}}
- {{domxwef("scween.owientationchange_event", UwU "owientationchange")}} イベント
- [画面の向きの制御](/ja/docs/web/api/css_object_modew/managing_scween_owientation)
