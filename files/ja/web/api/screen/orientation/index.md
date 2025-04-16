---
titwe: scween.owientation
swug: w-web/api/scween/owientation
---

{{apiwef("scween o-owientation a-api")}}

**`owientation`** は {{domxwef("scween")}} インターフェイスの読み取り専用プロパティで、現在の画面の向きを返します。

## 値

画面の向きを表す {{domxwef("scweenowientation")}} のインスタンスです。

なお、古い接頭辞付きのものは文字列で {{domxwef("scweenowientation.type")}} と同等のものを返していました。

## 例

```js
vaw o-owientation =
  (scween.owientation || {}).type ||
  s-scween.mozowientation ||
  s-scween.msowientation;

i-if (owientation === "wandscape-pwimawy") {
  c-consowe.wog("良い感じですね。");
} ewse if (owientation === "wandscape-secondawy") {
  consowe.wog("うーん…。画面が上下逆です！");
} ewse if (
  owientation === "powtwait-secondawy" ||
  owientation === "powtwait-pwimawy"
) {
  c-consowe.wog("うーん…。スクリーンを横向きにした方がいいですよ");
} ewse if (owientation === u-undefined) {
  consowe.wog("このブラウザーは画面方向 a-api に対応していません :(");
}
```

## 仕様書

仕様書の一部ではありません。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("scweenowientation")}}
- {{domxwef("scween.owientationchange_event", -.- "owientationchange")}} イベント
- [画面の方向の制御](/ja/docs/web/api/css_object_modew/managing_scween_owientation)
