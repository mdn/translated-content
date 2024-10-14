---
title: "Navigator: sendBeacon() メソッド"
short-title: sendBeacon()
slug: Web/API/Navigator/sendBeacon
l10n:
  sourceCommit: f2088b8912ef205a737551441d54b73507bd3ac6
---

{{APIRef("HTML DOM")}}

**`navigator.sendBeacon()`** メソッドは、ウェブサーバーに{{glossary("Asynchronous", "非同期")}}に少量のデータを [HTTP POST](/ja/docs/Web/HTTP/Methods/POST) リクエストで送ります。

これはウェブサーバーに分析データを送信するために使用するためのものであり、 {{domxref("XMLHttpRequest", "XMLHttpRequest")}} を使用するような、分析を送信するための古い技術の問題のいくつかを避けています。

> [!NOTE]
> リクエストを `POST` 以外のメソッドで送信したり、リクエストプロパティを変更したり、サーバーのレスポンスにアクセスしたりする必要がある用途では、[`fetch()`](/ja/docs/Web/API/Window/fetch) メソッドに [`keepalive`](/ja/docs/Web/API/RequestInit#keepalive) を設定したものを使用してください。

## 構文

```js-nolint
sendBeacon(url)
sendBeacon(url, data)
```

### 引数

- `url`
  - : _data_ を受け取る URL です。相対でも絶対でも可能です。
- `data` {{Optional_inline}}
  - : 送るデータを含む {{jsxref("ArrayBuffer")}}, {{jsxref("TypedArray")}}, {{jsxref("DataView")}}, {{domxref("Blob")}}, 文字列リテラルまたはオブジェクト、{{domxref("FormData")}}, {{domxref("URLSearchParams")}} のいずれかのオブジェクトです。

### 返値

**`sendBeacon()`** メソッドが `true` を返した場合は、{{glossary("user agent", "ユーザーエージェント")}}が転送のために `data` をキューに入れることに成功したことを表します。それ以外の場合は `false` を返します。

## 解説

このメソッドは、データをサーバーに送信する分析や診断コードのためのものです。

分析を送信する際の問題点として、サイトが多いのは、ユーザーがページの閲覧を完了したときに分析を送信したい場合です。例えば、ユーザーが別のページに移動したときなどです。このような場合、ブラウザーはページをアンロードしようとしている可能性があり、ブラウザーは非同期 {{domxref("XMLHttpRequest")}} リクエストを送信しないことを選ぶかもしれません。

伝統的には、これは以下のような回避方法を使用して、ある URL にデータを送信するまでページのアンロードを遅らせるよう位置づけられていました。

- データの送信をブロックする同期 `XMLHttpRequest` の呼び出しで行う。
- {{HTMLElement("img")}} 要素を作成し、その `src` を `unload` ハンドラーの中で設定する。ほとんどのユーザーエージェントは画像を読み込むためにアンロードを遅延させる。
- 数秒の何もしないループを作成する。

これらの方法はすべて、文書のアンロードをブロックするので、次への遷移が遅くなります。次のページがこれをやめさせる方法は存在しないので、前のページの問題であるにもかかわらず、次のページが遅いように見えます。

`sendBeacon()` メソッドでは、ユーザーエージェントがその機会を持ったときに、アンロードや次のナビゲーションを遅らせることなく、非同期にデータを送信します。つまり、

- データは確実に送信されます。
- 非同期に送信されます。
- 次のページの読み込みには影響しません

データは [HTTP POST](/ja/docs/Web/HTTP/Methods/POST) リクエストで送信されます。

### セッション終了時の分析の送信

ウェブサイトでは、ユーザーがページの閲覧を完了したときに、サーバーに分析結果や診断結果を送信したいことがよくあります。
これを行う最も信頼性の高い方法は、[`visibilitychange`](/ja/docs/Web/API/Document/visibilitychange_event) イベントでデータを送信することです。

```js
document.addEventListener("visibilitychange", function logData() {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
});
```

#### unload および beforeunload を避ける

これまで多くのウェブサイトは、セッションの終わりにアナリティクスを送信するために、 [`unload`](/ja/docs/Web/API/Window/unload_event) または [`beforeunload`](/ja/docs/Web/API/Window/beforeunload_event) イベントを使用してきました。
しかし、これは非常に信頼性に欠けます。多くの場合、特にモバイルでは、ブラウザーは `unload`、`beforeunload`、`pagehide` イベントを発行しません。例えば、次の例ではこれらのイベントは発行されません。

1. ユーザーがページを読み込んで操作します。
2. 完了語、タブを閉じずに別のアプリに切り替えます。
3. その後、携帯電話のアプリマネージャーによってブラウザーアプリが閉じられました。

さらに、 `unload` イベントは現行ブラウザーに実装されているバック/フォワードキャッシュ ([bfcache](https://web.dev/articles/bfcache)) と互換性がありません。 Firefox のような一部のブラウザーは、アンロードハンドラーを格納したページを bfcache から除外することでこの非互換性を処理し、パフォーマンスを低下させています。他にも、 Safari や Android の Chrome などでは、ユーザーが同じタブで別のページに移動したときに `unload` イベントを発生させないように処理しています。

Firefox はまた、ページが `beforeunload` ハンドラーを格納している場合、bfcache からページを除外します。

#### pagehide をフォールバックとして使う

`visibilitychange` を実装していないブラウザーに対応するには、 [`pagehide`](/ja/docs/Web/API/Window/pagehide_event) イベントを使用します。
`beforeunload` と `unload` のように、このイベントは特にモバイルでは確実に発行されるわけではありません。しかし、 bfcache と互換性があります。

## 例

次の例では、　{{domxref("document.visibilitychange_event", "visibilitychange")}}　イベントのハンドラーを指定しています。ハンドラーは `sendBeacon()` を呼び出して分析を送信します。

```js
document.addEventListener("visibilitychange", function logData() {
  if (document.visibilityState === "hidden") {
    navigator.sendBeacon("/log", analyticsData);
  }
});
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [`visibilitychange`](/ja/docs/Web/API/Document/visibilitychange_event) イベント
- {{domxref("Beacon_API","ビーコン API", "", "true")}} 概要ページ
- [Don't lose user and app state, use Page Visibility](https://www.igvita.com/2015/11/20/dont-lose-user-and-app-state-use-page-visibility/) は、 `beforeunload`/`unload`ではなく、`visibilitychange`を使用する理由について詳しく説明しています。
- [Page Lifecycle API](https://developer.chrome.com/docs/web-platform/page-lifecycle-api/#developer-recommendations-for-each-state) は、ウェブアプリケーションでページのライフサイクル動作を処理するための最善の手法を提供します。
- [PageLifecycle.js](https://github.com/GoogleChromeLabs/page-lifecycle): ページのライフサイクル動作におけるクロスブラウザーでの不整合に対処する JavaScript ライブラリーです。
- [Back/forward cache](https://web.dev/articles/bfcache) は、バック/フォワードキャッシュとは何か、そして様々なページライフサイクルイベントに対するその意味について説明します。
