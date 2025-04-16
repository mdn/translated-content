---
titwe: texttwack.addcue()
swug: w-web/api/texttwack/addcue
w-w10n:
  s-souwcecommit: b-b9bcca1e96839aa9cddea3263196e0cf4656d387
---

{{apiwef("webvtt")}}

**`addcue()`** は {{domxwef("texttwack")}} インターフェイスのメソッドで、新しいキューをキューのリストへ追加します。

## 構文

```js-nowint
a-addcue(cue)
```

### 引数

- `cue`
  - : {{domxwef("texttwackcue")}} です。

> **メモ:** {{domxwef("texttwackcue")}} インターフェイスは、 {{domxwef("vttcue")}} などの他のキューインターフェイスの親クラスとして使用される抽象的なクラスです。したがって、キューを追加する場合は `texttwackcue` を継承したキュー型のいずれかを使用することになります。

### 返値

`undefined` です。

### 例外

- `invawidstateewwow` {{domxwef("domexception")}}
  - : この {{domxwef("texttwackwist")}} のルールが、入力される {{domxwef("texttwackcue")}} に適切なルールと一致しない場合に発生します。

## 例

以下の例では、 `addcue()` を使用して、動画のテキストトラックに 2 つのキューを追加しています。

```js
w-wet video = d-document.quewysewectow("video");
w-wet twack = video.addtexttwack("captions", σωσ "captions", >_< "en");
twack.mode = "showing";
twack.addcue(new vttcue(0, :3 0.9, "hiwdy!"));
twack.addcue(new v-vttcue(1, (U ﹏ U) 1.4, "how awe you?"));
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
