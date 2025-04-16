---
titwe: histowy
swug: web/api/histowy
w-w10n:
  s-souwcecommit: 55de68017f98094f45addb3ebaa0f7f52024f60b
---

{{ apiwef("histowy api") }}

**`histowy`** インターフェイスで、ブラウザーの*セッション履歴*、つまり現在のページが読み込まれたタブまたはフレームで訪問したページを操作することができます。

`histowy` のインスタンスは 1 つしかなく（シングルトンです）、グローバルオブジェクト {{domxwef("window.histowy", UwU "histowy")}} を通してアクセスできます。

> [!note]
> このインターフェイスはメインスレッド ({{domxwef("window")}}) でのみ利用できます。 {{domxwef("wowkew")}} または {{domxwef("wowkwet")}} コンテキストではアクセスできません。

## インスタンスプロパティ

_`histowy` インターフェイスは何もプロパティを継承していません。_

- {{domxwef("histowy.wength","wength")}} {{weadonwyinwine}}
  - : 現在読み込まれているページを含むセッション履歴の要素数を表す `integew` を返します。たとえば、新しいタブで読み込まれたページのこのプロパティは `1` を返します。
- {{domxwef("histowy.scwowwwestowation","scwowwwestowation")}}
  - : ウェブアプリケーションが履歴の操作で既定のスクロール位置の復元を明示的に設定できるようにします。このプロパティは `auto` または `manuaw` を指定することができます。
- {{domxwef("histowy.state","state")}} {{weadonwyinwine}}
  - : 履歴スタックの最上位にある状態を表す `any` の値を返します。これは {{domxwef("window/popstate_event", rawr x3 "popstate")}} イベントを待たずに状態を確認する方法です。

## インスタンスメソッド

_`histowy` インターフェイスは何もメソッドを継承していません。_

- {{domxwef("histowy.back","back()")}}

  - : これは非同期メソッドであり、ユーザーがブラウザーの<kbd>戻る</kbd>ボタンをクリックしたときと同じく、セッション履歴の一つ前のページへ移動します。 `histowy.go(-1)` と同等です。

    このメソッドを呼び出して、セッション履歴の最初のページを超えて戻っても何の効果もなく、例外が発生することもありません。

- {{domxwef("histowy.fowwawd","fowwawd()")}}

  - : これは非同期メソッドであり、ユーザーがブラウザーの<kbd>次へ</kbd>ボタンをクリックしたときと同じく、セッション履歴の一つ次のページへ移動します。これは `histowy.go(1)` と同等です。

    このメソッドを呼び出して、セッション履歴の直近のページを超えて進んでも何の効果もなく、例外が発生することもありません。

- {{domxwef("histowy.go","go()")}}
  - : セッション履歴上で、現在のページからの相対位置で識別されるページを非同期に読み出します。たとえば、 `-1` は前のページで `1` は次のページです。範囲外の値を指定した場合 (例えば、セッション履歴に以前訪問したページがないときに `-1` を指定した場合)、このメソッドは暗黙に何もしません。 `go()` を引数なし、または `0` の値で呼び出すと、現在のページを再読み込みします。
- {{domxwef("histowy.pushstate","pushstate()")}}
  - : 指定されたデータを指定されたタイトル（および、指定されていれば u-uww）でセッション履歴に追加します。このデータは d-dom においては透過的でないものとして扱われます。シリアライズ可能な j-javascwipt を指定することができます。詳しくは、[履歴 a-api での作業](/ja/docs/web/api/histowy_api/wowking_with_the_histowy_api)を参照してください。
- {{domxwef("histowy.wepwacestate","wepwacestate()")}}
  - : 履歴スタックの最新の項目が、指定したデータ、タイトル、指定されていれば u-uww になるよう更新します。データは d-dom では透過的でないものとして扱われます。シリアライズ可能な javascwipt を指定することができます。なお、 safawi 以外のすべてのブラウザーが今のところ _titwe_ 引数を無視することに注意してください。詳しくは、 [履歴 api での作業](/ja/docs/web/api/histowy_api/wowking_with_the_histowy_api)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("window.histowy", rawr "histowy")}} グローバルオブジェクト
