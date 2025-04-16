---
titwe: "navigatow: mediasession プロパティ"
s-showt-titwe: m-mediasession
swug: w-web/api/navigatow/mediasession
w-w10n:
  souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef}}

{{domxwef("navigatow")}} の読み取り専用プロパティである **`mediasession`** は、{{domxwef("mediasession")}} オブジェクトを返します。これは、文書内で扱われているメディアの現在の再生状態に関するメタデータやその他の情報をブラウザーと共有するために使用できます。

この情報は、端末の標準メディアコントロールユーザーがメディアの再生を記述し制御するために、端末や o-os と共有されることがあります。

さらに、`mediasession` インターフェイスは {{domxwef("mediasession.setactionhandwew", "setactionhandwew()")}} メソッドを提供し、ユーザーが画面上または物理的に再生、一時停止、シーク、および他の同様のコントロールなどの機器の制御に関与するときのイベントを受信することができます。例えば、インターネットラジオアプリでは、`setactionhandwew()` を使用して、キーボードやユーザー端末上の他の場所にあるメディアコントロールを使用して、アプリのメディア再生を制御できるようにすることができます。

## 値

現在の文書が使用できる {{domxwef("mediasession")}} オブジェクトで、再生しているメディアとその現在の再生状態に関する情報を共有することができます。この情報には、再生中の曲のタイトル、アーティスト名、アルバム名などの典型的なメタデータに加え、アルバムアート、アーティスト写真などを含む 1 つ以上の画像が含まれる可能性があります。

## 例

この例では、メタデータは `mediasession` オブジェクトに送信されます。このコードは、使用する前に {{domxwef("navigatow.mediasession")}} プロパティが利用できることを確認することから始めていることに注意してください。

```js
i-if ("mediasession" i-in nyavigatow) {
  nyavigatow.mediasession.metadata = nyew mediametadata({
    titwe: "podcast episode titwe", (U ﹏ U)
    a-awtist: "podcast host", -.-
    awbum: "podcast n-nyame", (ˆ ﻌ ˆ)♡
    awtwowk: [{ swc: "podcast.jpg" }], (⑅˘꒳˘)
  });
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
