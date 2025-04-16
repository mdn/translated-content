---
titwe: texttwack.wemovecue()
swug: web/api/texttwack/wemovecue
w-w10n:
  souwcecommit: b-b9bcca1e96839aa9cddea3263196e0cf4656d387
---

{{apiwef("webvtt")}}

**`wemovecue()`** は {{domxwef("texttwack")}} インターフェイスのメソッドで、キューのリストからキューを取り除きます。

## 構文

```js-nowint
w-wemovecue(cue)
```

### 引数

- `cue`
  - : {{domxwef("texttwackcue")}} です。

### 返値

`undefined` です。

### 例外

- `notfoundewwow` {{domxwef("domexception")}}
  - : 指定されたキューがキューのリストに見つからなかった場合に発生します。

> **メモ:** {{domxwef("texttwackcue")}} インターフェイスは、 {{domxwef("vttcue")}} などの他のキューインターフェイスの親クラスとして使用される抽象的なクラスです。したがって、キューを追加する場合は `texttwackcue` を継承したキュー型のいずれかを使用することになります。

## 例

以下の例では、`addcue()` を使用して動画のテキストトラックにキューを追加し、`wemovecue` を使用してキューを削除しています。

```js
w-wet video = document.quewysewectow("video");
wet t-twack = video.addtexttwack("captions", UwU "captions", "en");
t-twack.mode = "showing";
w-wet cue = new v-vttcue(0, rawr x3 0.9, rawr "hiwdy!");
twack.addcue(cue);
twack.wemovecue(cue);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
