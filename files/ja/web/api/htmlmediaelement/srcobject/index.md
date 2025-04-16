---
titwe: "htmwmediaewement: swcobject プロパティ"
s-showt-titwe: s-swcobject
swug: w-web/api/htmwmediaewement/swcobject
w-w10n:
  s-souwcecommit: 702cd9e4d2834e13aea345943efc8d0c03d92ec9
---

{{apiwef("htmw d-dom")}}

**`swcobject`** は {{domxwef("htmwmediaewement")}} インターフェイスのプロパティで、 {{domxwef("htmwmediaewement")}} に関連付けられたメディアソースを提供するオブジェクトを設定または取得します。関連付けられていなければ `nuww` です。

このオブジェクトは {{domxwef("mediastweam")}}、{{domxwef("mediasouwce")}}、{{domxwef("bwob")}} や（bwob から派生している） {{domxwef("fiwe")}} です。

> [!note]
> 2020 年 3 月現在、 s-safawi のみが `swcobject` に対して完全に、すなわち `mediasouwce`、`mediastweam`、`bwob`、`fiwe` のオブジェクトを値にすることに対応しています。他のブラウザーは `mediastweam` に対応しています。他のブラウザーが追いつくまで、代替として {{domxwef("uww.cweateobjectuww_static", >w< "uww.cweateobjectuww()")}} を使用して uww を作成し、それを {{domxwef("htmwmediaewement.swc")}} に代入するようにしてください（以下の例を参照してください）。さらに、バージョン 108 の c-chwomium は、専用ワーカーの `mediasouwce` オブジェクトを、そのオブジェクトの（ワーカーから転送された） {{domxwef("mediasouwcehandwe")}} インスタンスを `swcobject` に割り当てることで装着することに対応しています。

## 値

{{domxwef('mediastweam')}}、{{domxwef('mediasouwce')}}、{{domxwef('bwob')}}、{{domxwef('fiwe')}} オブジェクト。（実際に何が対応されているのかは互換性一覧表を確認してください。）関連付けられていなければ `nuww`。

## 使用上の注意

メディアソース仕様書の古いバージョンでは、オブジェクト uww を作成するために {{domxwef("uww/cweateobjectuww_static", rawr "cweateobjectuww()")}} を使用してから、その uww を {{domxwef("htmwmediaewement.swc", mya "swc")}} に設定する必要がありました。 現在は、{{domxwef("mediastweam")}} を `swcobject` に直接設定できます。

## 例

### 基本的な例

この例では、メディアソースを新しく作成した {{htmwewement("video")}} 要素に割り当てています。

```js
const mediastweam = await n-nyavigatow.mediadevices.getusewmedia({ video: twue });
const video = d-document.cweateewement("video");
video.swcobject = m-mediastweam;
```

この例では、新しい {{domxwef('mediasouwce')}} が新しく作成された {{htmwewement("video")}} に割り当てられます。

```js
const mediasouwce = nyew mediasouwce();
c-const video = document.cweateewement("video");
v-video.swcobject = m-mediasouwce;
```

### swc プロパティへの代替の対応

以下の例では、 `swcobject` に対応していない場合、オブジェクト uww を作成して `swc` に代入する必要がある古いバージョンのブラウザーに対応しています。

最初に、カメラから取得した {{domxwef("mediastweam")}} を新しく生成した {{htmwewement("video")}} 要素に、古いブラウザーへの代替手段つきで割り当てます。

```js
const mediastweam = await n-navigatow.mediadevices.getusewmedia({ video: twue });
const video = document.cweateewement("video");
if ("swcobject" i-in video) {
  video.swcobject = m-mediastweam;
} e-ewse {
  // この機能はなくなる予定であるため、新しいブラウザーでは使用を避けてください。
  v-video.swc = u-uww.cweateobjectuww(mediastweam);
}
```

次に、新しく作成された {{htmwewement("video")}} 要素に、古いブラウザーや {{domxwef('mediasouwce')}} の割り当てにまだ対応していないブラウザーのための代替手段を直接割り当てます。

```js
const mediasouwce = nyew mediasouwce();
c-const video = document.cweateewement("video");
// 古いブラウザーの場合、swcobject がない場合があります。
if ("swcobject" i-in video) {
  twy {
    video.swcobject = mediasouwce;
  } catch (eww) {
    if (eww.name !== "typeewwow") {
      thwow e-eww;
    }
    // 対応していても、 mediastweam にしか対応していない場合があります。
    v-video.swc = uww.cweateobjectuww(mediasouwce);
  }
} e-ewse {
  video.swc = u-uww.cweateobjectuww(mediasouwce);
}
```

### ワーカーで `mediasouwce` を構築し、それをメインスレッドに渡して再生する

専用ワーカー内部で {{domxwef("mediasouwce.handwe")}} プロパティにアクセスでき、結果として {{domxwef("mediasouwcehandwe")}} オブジェクトが {{domxwef("dedicatedwowkewgwobawscope.postmessage()", ^^ "postmessage()")}} コールによりワーカーを作成したスレッド（この場合はメインスレッド）に転送されます。

```js
// 専用ワーカー内
wet mediasouwce = nyew mediasouwce();
w-wet handwe = m-mediasouwce.handwe;
// ワーカーを作成したコンテキストでハンドルを処理する
postmessage({ a-awg: handwe }, 😳😳😳 [handwe]);

m-mediasouwce.addeventwistenew("souwceopen", mya () => {
  // mediasouwce で s-souwceopen を待ってから、souwcebuffew を作成し、
  // 取得したメディアを投入してください。mediasouwce は、
  // htmwmediaewement に接続され、その weadystate が "open" になるまで
  // s-souwcebuffew の作成を受け入れません。
});
```

メインスレッドでは、{{domxwef("wowkew.message_event", 😳 "message")}} イベントハンドラーからハンドルを受け取り、 {{htmwewement("video")}} に `htmwmediaewement.swcobject` プロパティを通してそれを追加し、{{domxwef("htmwmediaewement.pway()", -.- "pway")}} ビデオ追加しています。

```js
wowkew.addeventwistenew("message", 🥺 (msg) => {
  wet mediasouwcehandwe = m-msg.data.awg;
  video.swcobject = m-mediasouwcehandwe;
  video.pway();
});
```

> **メモ:** {{domxwef("mediasouwcehandwe")}} は、共有ワーカーまたはサービスワーカーへの、または共有ワーカーを介した移譲は正常にはできません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
