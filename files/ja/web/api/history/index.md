---
title: History
slug: Web/API/History
tags:
  - API
  - HTML DOM
  - 履歴 API
  - インターフェイス
  - ウェブ
browser-compat: api.History
translation_of: Web/API/History
---
{{ APIRef("History API") }}

**`History`** インターフェイスで、ブラウザーの*セッション履歴*、つまり現在のページが読み込まれたタブまたはフレームで訪問したページを操作することができます。

## プロパティ

_`History` インターフェイスは何もプロパティを継承していません。_

- {{domxref("History.length","length")}} {{readOnlyInline}}
  - : 現在読み込まれているページを含むセッション履歴の要素数を表す `Integer` を返します。たとえば、新しいタブで読み込まれたページのこのプロパティは `1` を返します。
- {{domxref("History.scrollRestoration","scrollRestoration")}}
  - : ウェブアプリケーションが履歴の操作で既定のスクロール位置の復元を明示的に設定できるようにします。このプロパティは `auto` または `manual` を指定することができます。
- {{domxref("History.state","state")}} {{readOnlyInline}}
  - : 履歴スタックの最上位にある状態を表す `any` の値を返します。これは {{domxref("Window/popstate_event", "popstate")}} イベントを待たずに状態を確認する方法です。

## メソッド

_`History` インターフェイスは何もメソッドを継承していません。_

- {{domxref("History.back","back()")}}

  - : これは非同期メソッドであり、ユーザーがブラウザーの<kbd>戻る</kbd>ボタンをクリックしたときと同じく、セッション履歴の一つ前のページへ移動します。 `history.go(-1)` と同等です。

    このメソッドを呼び出して、セッション履歴の最初のページを超えて戻っても何の効果もなく、例外が発生することもありません。

- {{domxref("History.forward","forward()")}}

  - : これは非同期メソッドであり、ユーザーがブラウザーの<kbd>次へ</kbd>ボタンをクリックしたときと同じく、セッション履歴の一つ次のページへ移動します。これは `history.go(1)` と同等です。

    このメソッドを呼び出して、セッション履歴の直近のページを超えて進んでも何の効果もなく、例外が発生することもありません。

- {{domxref("History.go","go()")}}
  - : セッション履歴上で、現在のページからの相対位置で識別されるページを非同期に読み出します。たとえば、 `-1` は前のページで `1` は次のページです。範囲外の値を指定した場合 (例えば、セッション履歴に以前訪問したページがないときに `-1` を指定した場合)、このメソッドは暗黙に何もしません。 `go()` を引数なし、または `0` の値で呼び出すと、現在のページを再読み込みします。 Internet Explorer では数値の代わりに文字列を指定することで、履歴リストの中の指定した URL へ移動することができます。
- {{domxref("History.pushState","pushState()")}}
  - : 指定されたデータを指定されたタイトル (および、指定されていれば URL) でセッション履歴に追加します。このデータは DOM においては透過的でないものとして扱われます。シリアライズ可能な JavaScript を指定することができます。詳しくは、[履歴 API での作業](/ja/docs/Web/API/History_API/Working_with_the_History_API)を参照してください。
- {{domxref("History.replaceState","replaceState()")}}
  - : 履歴スタックの最新の項目が、指定したデータ、タイトル、指定されていれば URL になるよう更新します。データは DOM では透過的でないものとして扱われます。シリアライズ可能な JavaScript を指定することができます。なお、 Safari 以外のすべてのブラウザーが今のところ _title_ 引数を無視することに注意してください。詳しくは、 [履歴 API での作業](/ja/docs/Web/API/History_API/Working_with_the_History_API)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Window.history")}} プロパティは現在のセッションの履歴を返します。
