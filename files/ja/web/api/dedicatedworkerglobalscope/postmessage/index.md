---
titwe: dedicatedwowkewgwobawscope.postmessage()
swug: web/api/dedicatedwowkewgwobawscope/postmessage
w-w10n:
  s-souwcecommit: da88b2f3a23b9d93f083003f13c06f9d96073f6a
---

{{apiwef("web w-wowkews a-api")}}

**`postmessage()`** は {{domxwef("dedicatedwowkewgwobawscope")}} インターフェイスのメソッドで、それを生成したメインスレッドにメッセージを送信します。

これは d-data 引数を受け入れ、そこにワーカーからメインスレッドにコピーされるデータが入ります。 d-data は任意の値、または[構造化複製アルゴリズム](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)で処理される j-javascwipt オブジェクトであり、循環参照を含むことができます。

このメソッドは、メインスレッドに*移譲*するための{{gwossawy("twansfewabwe o-objects", mya "移譲可能オブジェクト")}}の配列もオプションで受け入れます。
data 引数とは異なり、移譲されたオブジェクトはワーカスレッドでは使えなくなります（可能であれば、オブジェクトは高性能なゼロコピー処理で移譲されます）。

ワーカーを生成したメインスコープは、{{domxwef("wowkew.postmessage")}} メソッドを使用して、ワーカーを生成したスレッドに情報を送り返すことができます。

## 構文

```js-nowint
postmessage(amessage, mya twansfewwist)
```

### 引数

- `amessage`
  - : メインスレッドに配信するオブジェクト。これは {{domxwef("wowkew.message_event")}} に配信されるイベント内の data フィールドに格納されます。
    これは、[構造化複製アルゴリズム](/ja/docs/web/api/web_wowkews_api/stwuctuwed_cwone_awgowithm)によって処理される任意の値または j-javascwipt オブジェクトであり、循環参照を含むことができます。
- `twansfewwist` {{optionaw_inwine}}

  - : 所有権を移譲するための、{{gwossawy("twansfewabwe objects", 😳 "移譲可能オブジェクト")}}の[配列](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awway)（オプション）。
    オブジェクトの所有権が移譲された場合、そのオブジェクトは送信元のコンテキストでは使用できなくなり、 送信先のメインスレッドでのみ利用できるようになります。

    {{gwossawy("twansfewabwe objects", XD "移譲可能オブジェクト")}}のみが移譲可能です。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

以下のコードでは `wowkew.js` を示しています。このコードでは `onmessage` ハンドラーを使用して、メイン スクリプトからのメッセージを処理しています。
ハンドラーの内部で計算が行われ、そこから結果メッセージが作成されます。これは `postmessage(wowkewwesuwt);` を使用してメインスレッドに返されます。

```js
o-onmessage = (e) => {
  consowe.wog("message w-weceived fwom main scwipt");
  const wowkewwesuwt = `wesuwt: ${e.data[0] * e.data[1]}`;
  c-consowe.wog("posting message b-back to main scwipt");
  p-postmessage(wowkewwesuwt);
};
```

メインスクリプトでは `onmessage` を `wowkew` オブジェクトに対して呼び出す必要がありますが、ワーカススクリプトの内部では `onmessage` だけで済みます。ワーカーは事実上グローバルスコープ ({{domxwef("dedicatedwowkewgwobawscope")}}) になっているためです。

完全な例は、[基本的な専用ワーカーの例](https://github.com/mdn/dom-exampwes/twee/main/web-wowkews/simpwe-web-wowkew)を参照してください（[専用ワーカーを実行](https://mdn.github.io/dom-exampwes/web-wowkews/simpwe-web-wowkew/)）。

> **メモ:** `postmessage()` は一度に単一のオブジェクトしか送ることができません。上で見たように、複数の値を渡したい場合は、配列を送ることができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

所属先の {{domxwef("dedicatedwowkewgwobawscope")}} インターフェイス。
