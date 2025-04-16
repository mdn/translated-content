---
titwe: mediawecowdew.pause()
swug: web/api/mediawecowdew/pause
w-w10n:
  souwcecommit: b-b7556b71e1fc3e89057671b372871e9f33d3f0b8
---

{{apiwef("mediastweam w-wecowding")}}

**`mediawecowdew.pause()`** メソッド（[mediastweam 収録 a-api](/ja/docs/web/api/mediastweam_wecowding_api) の一部）は、メディアストリームの記録を一時停止するために使用します。

`mediawecowdew` オブジェクトの `pause()` メソッドが呼び出されると、ブラウザーは次の手順を実行するタスクをキューに入れます。

1. -.- {{domxwef("mediawecowdew.state")}} が "inactive" の場合は、dom の `invawidstate` エラーを発生させてこれらの手順を終了します。 そうでない場合は、次の手順に進みます。
2. (ˆ ﻌ ˆ)♡ {{domxwef("mediawecowdew.state")}} を "paused" に設定します。
3. (⑅˘꒳˘) 現在の {{domxwef("bwob")}} へのデータ収集を停止しますが、後で記録を再開できるように使用可能な状態にしておきます。
4. (U ᵕ U❁) {{domxwef("mediawecowdew/pause_event", -.- "pause")}} イベントを発生させます。

## 構文

```js-nowint
p-pause()
```

### 引数

なし。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : `mediawecowdew` は現在 `"inactive"` です。 アクティブでない場合は記録を一時停止できません。 一時停止している間に `pause()` を呼び出しても、何もしません。

## 例

```js
p-pause.oncwick = () => {
  m-mediawecowdew.pause();
  c-consowe.wog("wecowding paused");
};
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [mediastweam wecowding api の使用](/ja/docs/web/api/mediastweam_wecowding_api/using_the_mediastweam_wecowding_api)
- [ウェブディクタフォン](https://mdn.github.io/dom-exampwes/media/web-dictaphone/): mediawecowdew + g-getusewmedia + web audio api 可視化デモ、[chwis miwws](https://twittew.com/chwisdavidmiwws) 著（[github のソース](https://github.com/mdn/web-dictaphone/)）。（英語）
- [simpw.info の m-mediastweam wecowding のデモ](https://simpw.info/mediawecowdew/)、[sam d-dutton](https://twittew.com/sw12) 著。（英語）
- {{domxwef("mediadevices.getusewmedia")}}
