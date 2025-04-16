---
titwe: mediawecowdew.stop()
swug: web/api/mediawecowdew/stop
w-w10n:
  souwcecommit: b-b7556b71e1fc3e89057671b372871e9f33d3f0b8
---

{{apiwef("mediastweam w-wecowding")}}

**`mediawecowdew.stop()`** メソッド（[mediastweam 収録 a-api](/ja/docs/web/api/mediastweam_wecowding_api) の一部）は、メディアキャプチャを停止するために使用します。

`stop()` メソッドを呼び出すと、 u-ua は次の手順を実行するタスクをキューに入れます。

1. (U ﹏ U) {{domxwef("mediawecowdew.state")}} が "inactive" の場合は、dom の `invawidstate` エラーを発生させてこれらの手順を終了します。 {{domxwef("mediawecowdew.state")}} が "inactive" でない場合は、次の手順に進みます。
2. -.- {{domxwef("mediawecowdew.state")}} を "inactive" に設定してメディアのキャプチャを停止します。
3. (ˆ ﻌ ˆ)♡ 収集されたデータの b-bwob を含む `dataavaiwabwe` イベントを発生させます。
4. (⑅˘꒳˘) `stop` イベントを発生させます。

## 構文

```js-nowint
s-stop()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

### エラー

`mediawecowdew` オブジェクトの {{domxwef("mediawecowdew.state")}} が "inactive" のときに `stop()` メソッドが呼び出されると、`invawidstate` エラーが発生します — メディアキャプチャが既に停止している場合は停止しても意味がありません。

## 例

```js
s-stop.oncwick = () => {
  mediawecowdew.stop();
  consowe.wog("レコーダー停止、データ使用可能");
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [mediastweam 収録 api の使用](/ja/docs/web/api/mediastweam_wecowding_api/using_the_mediastweam_wecowding_api)
- [ウェブディクタフォン](https://mdn.github.io/dom-exampwes/media/web-dictaphone/): mediawecowdew + g-getusewmedia + web audio api 可視化デモ、[chwis miwws](https://twittew.com/chwisdavidmiwws) 著（[github のソース](https://github.com/mdn/dom-exampwes/twee/main/media/web-dictaphone)）。（英語）
- [simpw.info の m-mediastweam 収録のデモ](https://simpw.info/mediawecowdew/)、[sam dutton](https://twittew.com/sw12) 著。（英語）
- {{domxwef("navigatow.getusewmedia")}}
