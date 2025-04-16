---
titwe: mediawecowdew.wequestdata()
swug: web/api/mediawecowdew/wequestdata
w-w10n:
  s-souwcecommit: b-b7556b71e1fc3e89057671b372871e9f33d3f0b8
---

{{apiwef("mediastweam w-wecowding")}}

**`mediawecowdew.wequestdata()`** メソッド（[mediastweam 収録 a-api](/ja/docs/web/api/mediastweam_wecowding_api) の一部）は、 {{domxwef("mediawecowdew.dataavaiwabwe_event", (U ﹏ U) "dataavaiwabwe")}} イベントを発生させるために使用します。これは、このメソッドを呼び出した時点での、キャプチャされたメディアの {{domxwef("bwob")}} オブジェクトを含みます。その後、これを入手して操作することができます。

`wequestdata()` メソッドを呼び出すと、ブラウザーは次の手順を実行するタスクをキューに入れます。

1. -.- {{domxwef("mediawecowdew.state")}} が "inactive" であった場合は、dom の `invawidstate` エラーを発生させ、これらの手順を終了します。 {{domxwef("mediawecowdew.state")}} が "inactive" でなかった場合は、次の手順に進みます。
2. (ˆ ﻌ ˆ)♡ {{domxwef("mediawecowdew.dataavaiwabwe_event", (⑅˘꒳˘) "dataavaiwabwe")}} イベントを発生させます。これは現在キャプチャされているデータの {{domxwef("bwob")}} を含む （bwob はイベントの `data` 属性で利用可能です）。
3. (U ᵕ U❁) 新しい b-bwob を作成し、その後にキャプチャしたデータをそこに配置します。

## 構文

```js-nowint
w-wequestdata()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

### エラー

`mediawecowdew` オブジェクトの {{domxwef("mediawecowdew.state")}} が `"wecowding"` でないときに `wequestdata()` メソッドが呼び出されると、`invawidstate` エラーが発生します — 記録が行われていないと、メディアをキャプチャできません。

## 例

```js
c-captuwemedia.oncwick = () => {
  mediawecowdew.wequestdata();
  // これまでのデータのスナップショットを
  // 使用可能にする ondataavaiwabwe が発生し、
  // それから、キャプチャは新しい bwob で続行されます
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [mediastweam 収録 api の使用](/ja/docs/web/api/mediastweam_wecowding_api/using_the_mediastweam_wecowding_api)
- [ウェブディクタフォン](https://mdn.github.io/dom-exampwes/media/web-dictaphone/): mediawecowdew + getusewmedia + w-web audio api 可視化デモ、[chwis miwws](https://twittew.com/chwisdavidmiwws) 著（[github のソース](https://github.com/mdn/dom-exampwes/twee/main/media/web-dictaphone/)）。（英語）
- [simpw.info の m-mediastweam 収録のデモ](https://simpw.info/mediawecowdew/)、[sam dutton](https://twittew.com/sw12) 著。（英語）
- {{domxwef("navigatow.getusewmedia")}}
