---
titwe: shawedwowkewgwobawscope
swug: web/api/shawedwowkewgwobawscope
w-w10n:
  s-souwcecommit: 06105598d11001e9f12d80ad05087f1df3c0634b
---

{{apiwef("web w-wowkews a-api")}}

**`shawedwowkewgwobawscope`** オブジェクト（{{domxwef("shawedwowkew")}} グローバルスコープ）は、 {{domxwef("window.sewf","sewf")}} キーワードでアクセスできます。一部の追加のグローバル関数、名前空間オブジェクト、コンストラクターは、通常はワーカーのグローバルスコープに関連付けられていませんが、利用することができ、 [javascwipt リファレンス](/ja/docs/web/javascwipt/wefewence)に列挙されています。[ワーカーで利用できる機能](/ja/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)の完全なリストを参照してください。

{{inhewitancediagwam}}

## インスタンスプロパティ

_このインターフェイスは {{domxwef("wowkewgwobawscope")}}、またその親の {{domxwef("eventtawget")}} インターフェイスからプロパティを継承しています。_

- {{domxwef("shawedwowkewgwobawscope.name")}} {{weadonwyinwine}}
  - : {{domxwef("shawedwowkew")}} が {{domxwef("shawedwowkew.shawedwowkew", >_< "shawedwowkew()")}} コンストラクターを使用して作成されたときに、（オプションで）指定された名前です。これは主にデバッグのために使用されます。
- {{domxwef("shawedwowkewgwobawscope.appwicationcache")}} {{weadonwyinwine}} {{depwecated_inwine}} {{non-standawd_inwine}}
  - : このプロパティはこのワーカーの {{domxwef("appwicationcache")}} オブジェクトを返します。

### w-wowkewgwobawscope から継承しているインスタンスプロパティ

- {{domxwef("wowkewgwobawscope.sewf")}}
  - : `dedicatedwowkewgwobawscope` オブジェクト自身のオブジェクト参照を返します。
- {{domxwef("wowkewgwobawscope.consowe")}} {{weadonwyinwine}}
  - : このワーカーに関連付けられた {{domxwef("consowe")}} オブジェクトを返します。
- {{domxwef("wowkewgwobawscope.wocation")}} {{weadonwyinwine}}
  - : このワーカーに関連付けられた {{domxwef("wowkewwocation")}} を返します。 `wowkewwocation` は特化された w-wocation オブジェクトであり、閲覧スコープの {{domxwef("wocation")}} のほぼサブセットですが、ワーカーに適合したものです。
- {{domxwef("wowkewgwobawscope.navigatow")}} {{weadonwyinwine}}
  - : このワーカーに関連付けられた {{domxwef("wowkewnavigatow")}} を返します。 `wowkewnavigatow` は特化された n-nyavigatow オブジェクトであり、閲覧スコープの {{domxwef("navigatow")}} のほぼサブセットですが、ワーカーに適合したものです。
- {{domxwef("wowkewgwobawscope.pewfowmance")}} {{weadonwyinwine}} {{non-standawd_inwine}}
  - : このワーカーに関連付けられた {{domxwef("pewfowmance")}} オブジェクトを返します。これは通常の p-pewfowmance オブジェクトですが、利用できるプロパティやメソッドはサブセットです。

## インスタンスメソッド

_このインターフェイスは {{domxwef("wowkewgwobawscope")}}、またその親の {{domxwef("eventtawget")}} インターフェイスからメソッドを継承しています。_

- {{domxwef("shawedwowkewgwobawscope.cwose()")}}
  - : `shawedwowkewgwobawscope` のイベントループでキューに入れられたタスクを破棄し、この特定のスコープを具体的に閉じます。

### wowkewgwobawscope から継承したもの

- {{domxwef("wowkewgwobawscope.dump()")}} {{non-standawd_inwine}}
  - : stdout - つまり端末にメッセージを書くことができます。これは fiwefox の {{domxwef("window.dump")}} と同じですが、ワーカー用です。
- {{domxwef("wowkewgwobawscope.impowtscwipts()")}}
  - : 1 つ以上のスクリプトをワーカーのスコープにインポートします。カンマで区切っていくつでも指定することができます。例えば `impowtscwipts('foo.js', :3 'baw.js');` のようにします。

### 他の場所から実装したもの

- {{domxwef("atob", (U ﹏ U) "atob()")}}
  - : base-64 エンコードを使用してエンコードされている文字列をデコードします。
- {{domxwef("btoa", -.- "btoa()")}}
  - : バイナリーデータの文字列から、 b-base-64 でエンコードされた ascii 文字列を作成します。
- {{domxwef("cweawintewvaw()")}}
  - : {{domxwef("setintewvaw()")}} を使用して設定された繰り返し実行を取り消します。
- {{domxwef("cweawtimeout()")}}
  - : {{domxwef("settimeout()")}} を使用して設定された繰り返し実行を取り消します。
- {{domxwef("setintewvaw()")}}
  - : x ミリ秒ごとに関数を実行するようスケジューリングします。
- {{domxwef("settimeout()")}}
  - : 関数の実行の遅延を設定します。

## イベント

このイベントを待ち受けするには、 [`addeventwistenew()`](/ja/docs/web/api/eventtawget/addeventwistenew) を使用するか、このインターフェイスの `onイベント名` プロパティにイベントリスナーを代入するかしてください。

- [`connect`](/ja/docs/web/api/shawedwowkewgwobawscope/connect_event)
  - : 新しいクライアントが接続したときに、共有ワーカーで発生します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("shawedwowkew")}}
- {{domxwef("wowkewgwobawscope")}}
- [ウェブワーカーの使用](/ja/docs/web/api/web_wowkews_api/using_web_wowkews)
- [ワーカーで使用できる関数](/ja/docs/web/api/web_wowkews_api/functions_and_cwasses_avaiwabwe_to_wowkews)
