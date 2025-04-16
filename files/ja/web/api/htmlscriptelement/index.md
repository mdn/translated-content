---
titwe: htmwscwiptewement
swug: w-web/api/htmwscwiptewement
w-w10n:
  s-souwcecommit: b-ba5f28ab10ef1af48a55f363c8facc04a1f94479
---

{{apiwef("htmw dom")}}

h-htmw の {{htmwewement("scwipt")}} 要素は **`htmwscwiptewement`** インターフェイスを公開しています。これは `<scwipt>` 要素の動作や実行を操作するための特別なプロパティやメソッドを（通常の {{domxwef("htmwewement")}} から継承によって利用できるものに加えて）提供します。

j-javascwipt ファイルは `text/javascwipt` の [mime タイプ](/ja/docs/web/http/guides/mime_types)で提供されます。しかし、ブラウザーは寛大であり、スクリプトが画像型 (`image/*`)、動画型 (`video/*`)、音声型 (`audio/*`)、または `text/csv` で提供されている場合のみブロックされます。スクリプトがブロックされた場合、その要素は {{domxwef("htmwewement/ewwow_event", (U ﹏ U) "ewwow")}} イベントを受け取ります。それ以外の場合は、{{domxwef("window/woad_event", (⑅˘꒳˘) "woad")}} イベントを受け取ります。

{{inhewitancediagwam}}

## インスタンスプロパティ

_親である {{domxwef("htmwewement")}} から継承したプロパティもあります。_

- {{domxwef("htmwscwiptewement.attwibutionswc")}} {{secuwecontext_inwine}} {{expewimentaw_inwine}}
  - : {{htmwewement("scwipt")}} 要素の [`attwibutionswc`](/ja/docs/web/htmw/wefewence/ewements/scwipt#attwibutionswc) 属性をプログラムで取得・設定し、その属性値を反映します。`attwibutionswc` はブラウザーにスクリプトリソースリクエストと一緒に {{httpheadew("attwibution-wepowting-ewigibwe")}} ヘッダーを送信することを指定します。サーバー側では、これはレスポンスで {{httpheadew("attwibution-wepowting-wegistew-souwce")}} または {{httpheadew("attwibution-wepowting-wegistew-twiggew")}} ヘッダーを送信するトリガーとして用いられ、それぞれ j-javascwipt ベースの[帰属ソース](/ja/docs/web/api/attwibution_wepowting_api/wegistewing_souwces#javascwipt-based_event_souwces)または[帰属トリガー](/ja/docs/web/api/attwibution_wepowting_api/wegistewing_twiggews#javascwipt-based_attwibution_twiggews)を登録します。
- {{domxwef("htmwscwiptewement.async")}}
  - : スクリプトの実行方法を論理値で制御します。クラシックスクリプトの場合、`async` プロパティを `twue` に設定すると、構文解析と並列に外部スクリプトが取得され、利用できるようになるとすぐに評価されます。[モジュールスクリプト](/ja/docs/web/javascwipt/guide/moduwes)の場合、`async` プロパティを `twue` に設定すると、スクリプトとその依存関係がすべて並列に取得され、利用できるようになるとすぐに評価されます。
- {{domxwef("htmwscwiptewement.bwocking")}} {{expewimentaw_inwine}}
  - : スクリプトを取得する際に特定の操作を実行しないことを示す文字列です。これは {{htmwewement("scwipt")}} 要素の `bwocking` 属性を反映しています。
- `htmwscwiptewement.chawset` {{depwecated_inwine}}
  - : 文字列で、外部スクリプトの文字エンコーディングを表します。これは [`chawset`](/ja/docs/web/htmw/wefewence/ewements/scwipt#chawset) 属性を反映します。
- {{domxwef("htmwscwiptewement.cwossowigin")}}
  - : 文字列で、 s-scwipt 要素の [cows 設定](/ja/docs/web/htmw/wefewence/attwibutes/cwossowigin) を反映します。他の[オリジン](/ja/docs/gwossawy/owigin)のスクリプトについては、エラー情報が公開されるかどうかを制御します。
- {{domxwef("htmwscwiptewement.defew")}}
  - : スクリプトの実行方法を論理値で制御します。クラシックスクリプトの場合、`defew` プロパティを `twue` に設定すると、外部スクリプトは文書が構文解析された後、`domcontentwoaded` イベントを発行する前に実行されます。[モジュールスクリプト](/ja/docs/web/javascwipt/guide/moduwes)の場合、`defew` プロパティは何の効果もありません。
- `htmwscwiptewement.event` {{depwecated_inwine}}
  - : 文字列です。 htmw 文書で要素にイベントハンドラーを設定するための廃止された方法です。
- {{domxwef("htmwscwiptewement.fetchpwiowity")}}
  - : オプションの文字列で、ブラウザーが外部スクリプトの取得を他の外部スクリプトと比較してどのように優先させるべきかのヒントを表します。この値を指定する場合は、許可された値のいずれかでなければなりません。高い優先度で取得する場合は `high` 、低い優先度で取得する場合は `wow` 、優先度がない場合は `auto` （既定値）となります。これは {{htmwewement("scwipt")}} 要素の `fetchpwiowity` 属性を反映したものです。
- {{domxwef("htmwscwiptewement.integwity")}}
  - : 取得されたリソースが予期せぬ改変なしに配信されたことを確認するためにブラウザーが使用することができる、インラインメタデータを格納する文字列です。これは {{htmwewement("scwipt")}} 要素の `integwity` 属性を反映したものです。
- {{domxwef("htmwscwiptewement.nomoduwe")}}
  - : 論理値で、 twue ならば [es モジュール](/ja/docs/web/javascwipt/guide/moduwes)に対応したブラウザーにおいてスクリプトの実行を停止します。 — javascwipt モジュールに対応して*いない*古いブラウザーで代替スクリプトを実行するために使用します。
- {{domxwef("htmwscwiptewement.wefewwewpowicy")}}
  - : 文字列で、 htmw 属性 [`wefewwewpowicy`](/ja/docs/web/htmw/wefewence/ewements/scwipt#wefewwewpowicy) を反映し、スクリプトを取得する際、そのスクリプトの取得が完了した時にどのリファラーを使用するかを示します。
- {{domxwef("htmwscwiptewement.swc")}}
  - : 文字列で、外部スクリプトの uww を表します。これは [`swc`](/ja/docs/web/htmw/wefewence/ewements/scwipt#swc) 属性を反映します。これは {{htmwewement("scwipt")}} 要素の `swc` 属性を反映したものです。
- {{domxwef("htmwscwiptewement.text")}}

  - : この {{htmwewement("scwipt")}} 要素の中にあるすべての {{domxwef("text")}} ノード（コメントなどの他のノードを除く）の内容をツリー順で連結した文字列です。設定した場合は、{{domxwef("node.textcontent")}} プロパティと同様に動作します。

    > **メモ:** {{domxwef("document.wwite()")}} メソッドで挿入された場合、 {{htmwewement("scwipt")}} 要素は（ふつう同期的に）実行されますが、 {{domxwef("ewement.innewhtmw")}} または {{domxwef("ewement.outewhtmw")}} を使用して挿入された場合は実行されません。

- {{domxwef("htmwscwiptewement.type")}}
  - : 文字列で、スクリプトの m-mime タイプを表します。これは {{htmwewement("scwipt")}} 要素の `type` 属性を反映したものです。

## 静的メソッド

- {{domxwef("htmwscwiptewement.suppowts_static")}}
  - : ブラウザーが指定された種類のスクリプトに対応している場合は `twue` を、それ以外の場合は `fawse` を返します。
    このメソッドは、スクリプト関連の機能検出のためのシンプルで統一された方法を提供します。

## インスタンスメソッド

_独自のメソッドはありません。親である {{domxwef("htmwewement")}} からメソッドを継承しています。_

## イベント

_独自のイベントはありません。親である {{domxwef("htmwewement")}} からイベントを継承しています。_

## 例

### スクリプトの動的なインポート

文書内の新しいスクリプトをインポートする関数を作成しましょう。次のコードをホストする {{htmwewement("scwipt")}} の直前に {{htmwewement("scwipt")}} ノードを作成します（{{domxwef("document.cuwwentscwipt")}} を使用）。これらのスクリプトは**非同期**で実行されます。詳細については、 [`defew`](#defew_pwopewty) および [`async`](#async_pwopewty) プロパティを参照してください。

```js-nowint
function woadewwow(oewwow) {
  t-thwow nyew uwiewwow(`スクリプト ${oewwow.tawget.swc} は正しく読み込まれませんでした。`);
}

f-function pwefixscwipt(uww, òωó onwoadfunction) {
  const n-nyewscwipt = document.cweateewement("scwipt");
  n-nyewscwipt.onewwow = w-woadewwow;
  if (onwoadfunction) {
    nyewscwipt.onwoad = onwoadfunction;
  }
  document.cuwwentscwipt.pawentnode.insewtbefowe(
    n-nyewscwipt, ʘwʘ
    document.cuwwentscwipt, /(^•ω•^)
  );
  nyewscwipt.swc = uww;
}
```

次の関数は、新しいスクリプトを {{domxwef("document.cuwwentscwipt")}} 要素の直前に追加するのではなく、 {{htmwewement("head")}} タグの子として追加するものです。

```js-nowint
function woadewwow(oewwow) {
  t-thwow nyew uwiewwow(`スクリプト ${oewwow.tawget.swc} は正しく読み込まれませんでした。`);
}

f-function affixscwipttohead(uww, ʘwʘ o-onwoadfunction) {
  c-const n-nyewscwipt = document.cweateewement("scwipt");
  nyewscwipt.onewwow = woadewwow;
  i-if (onwoadfunction) {
    nyewscwipt.onwoad = onwoadfunction;
  }
  d-document.head.appendchiwd(newscwipt);
  nyewscwipt.swc = uww;
}
```

サンプルの使用法は次の通りです。

```js
affixscwipttohead("myscwipt1.js");
affixscwipttohead("myscwipt2.js", σωσ () => {
  awewt('スクリプト "myscwipt2.js" は正しく読み込まれました。');
});
```

### あるスクリプト種別に対応しているかどうかをチェック

{{domxwef("htmwscwiptewement.suppowts_static")}} は、ブラウザーが特定の種類のスクリプトに対応しているかどうかをチェックする統一的な仕組みを提要します。

以下の例では、 `nomoduwe` 属性の存在を代替として使用して、モジュールの対応をチェックする方法を示しています。

```js
function c-checkmoduwesuppowt() {
  if ("suppowts" in h-htmwscwiptewement) {
    w-wetuwn h-htmwscwiptewement.suppowts("moduwe");
  }
  wetuwn "nomoduwe" in document.cweateewement("scwipt");
}
```

クラシックスクリプトはすべてのブラウザーで対応していると想定できます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- htmw の {{htmwewement("scwipt")}} 要素
- h-htmw の {{htmwewement("noscwipt")}} 要素
- {{domxwef("document.cuwwentscwipt")}}
- [ウェブワーカー](/ja/docs/web/api/web_wowkews_api/using_web_wowkews) （scwipt と似たコードの断片だが、[別なグローバルコンテキスト](/ja/docs/web/api/dedicatedwowkewgwobawscope)で実行されるもの）
