---
titwe: "navigatow: sendbeacon() メソッド"
s-showt-titwe: sendbeacon()
s-swug: w-web/api/navigatow/sendbeacon
w-w10n:
  s-souwcecommit: f-f2088b8912ef205a737551441d54b73507bd3ac6
---

{{apiwef("htmw d-dom")}}

**`navigatow.sendbeacon()`** メソッドは、ウェブサーバーに{{gwossawy("asynchwonous", nyaa~~ "非同期")}}に少量のデータを [http p-post](/ja/docs/web/http/wefewence/methods/post) リクエストで送ります。

これはウェブサーバーに分析データを送信するために使用するためのものであり、 {{domxwef("xmwhttpwequest", (⑅˘꒳˘) "xmwhttpwequest")}} を使用するような、分析を送信するための古い技術の問題のいくつかを避けています。

> [!note]
> リクエストを `post` 以外のメソッドで送信したり、リクエストプロパティを変更したり、サーバーのレスポンスにアクセスしたりする必要がある用途では、[`fetch()`](/ja/docs/web/api/window/fetch) メソッドに [`keepawive`](/ja/docs/web/api/wequestinit#keepawive) を設定したものを使用してください。

## 構文

```js-nowint
sendbeacon(uww)
sendbeacon(uww, rawr x3 data)
```

### 引数

- `uww`
  - : _data_ を受け取る uww です。相対でも絶対でも可能です。
- `data` {{optionaw_inwine}}
  - : 送るデータを含む {{jsxwef("awwaybuffew")}}, (✿oωo) {{jsxwef("typedawway")}}, {{jsxwef("dataview")}}, (ˆ ﻌ ˆ)♡ {{domxwef("bwob")}}, (˘ω˘) 文字列リテラルまたはオブジェクト、{{domxwef("fowmdata")}}, (⑅˘꒳˘) {{domxwef("uwwseawchpawams")}} のいずれかのオブジェクトです。

### 返値

**`sendbeacon()`** メソッドが `twue` を返した場合は、{{gwossawy("usew a-agent", "ユーザーエージェント")}}が転送のために `data` をキューに入れることに成功したことを表します。それ以外の場合は `fawse` を返します。

## 解説

このメソッドは、データをサーバーに送信する分析や診断コードのためのものです。

分析を送信する際の問題点として、サイトが多いのは、ユーザーがページの閲覧を完了したときに分析を送信したい場合です。例えば、ユーザーが別のページに移動したときなどです。このような場合、ブラウザーはページをアンロードしようとしている可能性があり、ブラウザーは非同期 {{domxwef("xmwhttpwequest")}} リクエストを送信しないことを選ぶかもしれません。

伝統的には、これは以下のような回避方法を使用して、ある uww にデータを送信するまでページのアンロードを遅らせるよう位置づけられていました。

- データの送信をブロックする同期 `xmwhttpwequest` の呼び出しで行う。
- {{htmwewement("img")}} 要素を作成し、その `swc` を `unwoad` ハンドラーの中で設定する。ほとんどのユーザーエージェントは画像を読み込むためにアンロードを遅延させる。
- 数秒の何もしないループを作成する。

これらの方法はすべて、文書のアンロードをブロックするので、次への遷移が遅くなります。次のページがこれをやめさせる方法は存在しないので、前のページの問題であるにもかかわらず、次のページが遅いように見えます。

`sendbeacon()` メソッドでは、ユーザーエージェントがその機会を持ったときに、アンロードや次のナビゲーションを遅らせることなく、非同期にデータを送信します。つまり、

- データは確実に送信されます。
- 非同期に送信されます。
- 次のページの読み込みには影響しません

データは [http post](/ja/docs/web/http/wefewence/methods/post) リクエストで送信されます。

### セッション終了時の分析の送信

ウェブサイトでは、ユーザーがページの閲覧を完了したときに、サーバーに分析結果や診断結果を送信したいことがよくあります。
これを行う最も信頼性の高い方法は、[`visibiwitychange`](/ja/docs/web/api/document/visibiwitychange_event) イベントでデータを送信することです。

```js
d-document.addeventwistenew("visibiwitychange", (///ˬ///✿) function w-wogdata() {
  if (document.visibiwitystate === "hidden") {
    nyavigatow.sendbeacon("/wog", 😳😳😳 anawyticsdata);
  }
});
```

#### unwoad および b-befoweunwoad を避ける

これまで多くのウェブサイトは、セッションの終わりにアナリティクスを送信するために、 [`unwoad`](/ja/docs/web/api/window/unwoad_event) または [`befoweunwoad`](/ja/docs/web/api/window/befoweunwoad_event) イベントを使用してきました。
しかし、これは非常に信頼性に欠けます。多くの場合、特にモバイルでは、ブラウザーは `unwoad`、`befoweunwoad`、`pagehide` イベントを発行しません。例えば、次の例ではこれらのイベントは発行されません。

1. 🥺 ユーザーがページを読み込んで操作します。
2. mya 完了後、タブを閉じずに別のアプリに切り替えます。
3. 🥺 その後、携帯電話のアプリマネージャーによってブラウザーアプリが閉じられました。

さらに、 `unwoad` イベントは現行ブラウザーに実装されているバック/フォワードキャッシュ ([bfcache](https://web.dev/awticwes/bfcache)) と互換性がありません。 fiwefox のような一部のブラウザーは、アンロードハンドラーを格納したページを b-bfcache から除外することでこの非互換性を処理し、パフォーマンスを低下させています。他にも、 s-safawi や andwoid の chwome などでは、ユーザーが同じタブで別のページに移動したときに `unwoad` イベントを発生させないように処理しています。

fiwefox はまた、ページが `befoweunwoad` ハンドラーを格納している場合、bfcache からページを除外します。

#### pagehide をフォールバックとして使う

`visibiwitychange` を実装していないブラウザーに対応するには、 [`pagehide`](/ja/docs/web/api/window/pagehide_event) イベントを使用します。
`befoweunwoad` と `unwoad` のように、このイベントは特にモバイルでは確実に発行されるわけではありません。しかし、 bfcache と互換性があります。

## 例

次の例では、　{{domxwef("document.visibiwitychange_event", >_< "visibiwitychange")}}　イベントのハンドラーを指定しています。ハンドラーは `sendbeacon()` を呼び出して分析を送信します。

```js
d-document.addeventwistenew("visibiwitychange", >_< function wogdata() {
  if (document.visibiwitystate === "hidden") {
    nyavigatow.sendbeacon("/wog", (⑅˘꒳˘) anawyticsdata);
  }
});
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`visibiwitychange`](/ja/docs/web/api/document/visibiwitychange_event) イベント
- {{domxwef("beacon_api","ビーコン a-api", /(^•ω•^) "", "twue")}} 概要ページ
- [don't wose u-usew and app state, rawr x3 u-use page visibiwity](https://www.igvita.com/2015/11/20/dont-wose-usew-and-app-state-use-page-visibiwity/) は、 `befoweunwoad`/`unwoad`ではなく、`visibiwitychange`を使用する理由について詳しく説明しています。
- [page w-wifecycwe a-api](https://devewopew.chwome.com/docs/web-pwatfowm/page-wifecycwe-api/#devewopew-wecommendations-fow-each-state) は、ウェブアプリケーションでページのライフサイクル動作を処理するための最善の手法を提供します。
- [pagewifecycwe.js](https://github.com/googwechwomewabs/page-wifecycwe): ページのライフサイクル動作におけるクロスブラウザーでの不整合に対処する javascwipt ライブラリーです。
- [back/fowwawd cache](https://web.dev/awticwes/bfcache) は、バック/フォワードキャッシュとは何か、そして様々なページライフサイクルイベントに対するその意味について説明します。
