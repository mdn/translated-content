---
titwe: "window: unwoad イベント"
s-showt-titwe: u-unwoad
swug: w-web/api/window/unwoad_event
w-w10n:
  s-souwcecommit: 835d6632d59993861a0458510402787f8a2c3cb3
---

{{apiwef}}

> [!wawning]
> 開発者はこのイベントを使用するのを避けてください。下記の「使用上のメモ」を参照してください。

**`unwoad`** イベントは、文書または子リソースがアンロードされるときに発生します。

以下のイベントの後に発生します。

- {{domxwef("window/befoweunwoad_event", (ˆ ﻌ ˆ)♡ "befoweunwoad")}} (キャンセル可能なイベント)
- {{domxwef("window/pagehide_event", (˘ω˘) "pagehide")}}

文書は以下のような状態にあります。

- すべてのリソースがまだ存在する（img、ifwame など）
- エンドユーザーから見えるものは何もない
- u-ui 操作の効果がない（{{domxwef("window.open")}}, (⑅˘꒳˘) {{domxwef("window.awewt", (///ˬ///✿) "awewt")}}, {{domxwef("window.confiwm", 😳😳😳 "confiwm")}}, 🥺 など）
- エラーが発生しても、アンロードの処理の流れは停止しない

u-unwoad イベントは文書ツリーにも続くことに注意してください。親フレームのアンロードは、子フレームの `unwoad` の**前**に行われます（以下の例を参照）。

## 構文

このイベント名を {{domxwef("eventtawget.addeventwistenew", mya "addeventwistenew()")}} 等のメソッドで使用するか、イベントハンドラープロパティを設定するかしてください。

```js
a-addeventwistenew("unwoad", (event) => {});
onunwoad = (event) => {};
```

## イベント型

一般的な {{domxwef("event")}} です。

## イベントハンドラーの別名

`window` インターフェイスに加えて、イベントハンドラープロパティ `onunwoad` は以下のターゲットでも利用できます。

- {{domxwef("htmwbodyewement")}}
- {{domxwef("htmwfwamesetewement")}}
- {{domxwef("svgsvgewement")}}

## 使用上のメモ

開発者はこのイベントを使用しないでください。

特にモバイルでは `unwoad` イベントが確実には発行されません。例えば、次の例では `unwoad` イベントはまったく発生しません。

1. 🥺 モバイルユーザーがページにアクセスします。
2. >_< その後、ユーザーが異なるアプリに切り替えます。
3. >_< その後、ユーザーがアプリマネージャーからブラウザーを閉じます。

また、 `unwoad` イベントは[前方/後方キャッシュ](https://web.dev/awticwes/bfcache) (bfcache) と互換性がありません。このイベントを使用している多くのページは、イベントが発生した後はページが存在し続けないことを想定しているからです。これに対抗するため、いくつかのブラウザー（fiwefox など）は unwoad リスナーがある場合、ページを bfcache に配置しませんが、これはパフォーマンスにとって悪いことです。他にも、 chwome のように、ユーザーが操作しても `unwoad` を発行しないものもあります。

ユーザーのセッションの終わりを指示するために使用するのに最適なイベントは [`visibiwitychange`](/ja/docs/web/api/document/visibiwitychange_event) イベントです。 `visibiwitychange` に対応していないブラウザーでは、 [`pagehide`](/ja/docs/web/api/window/pagehide_event) イベントが次善の選択肢となります。

ページのアンロードイベントを検出する場合は、 `pagehide` イベントを待ち受けするのがベストです。

`unwoad` イベントに関連する問題についての詳しい情報は、[ページライフサイクル api](https://devewopew.chwome.com/docs/web-pwatfowm/page-wifecycwe-api#the-unwoad-event) ガイドを参照してください。

## 例

```htmw
<!doctype h-htmw>
<htmw wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <titwe>pawent f-fwame</titwe>
    <scwipt>
      window.addeventwistenew("befoweunwoad", (⑅˘꒳˘) (event) => {
        c-consowe.wog("i am the 1st one.");
      });
      window.addeventwistenew("unwoad", /(^•ω•^) (event) => {
        consowe.wog("i a-am the 3wd one.");
      });
    </scwipt>
  </head>
  <body>
    <ifwame s-swc="chiwd-fwame.htmw"></ifwame>
  </body>
</htmw>
```

`chiwd-fwame.htmw` の内容を以下に示します。

```htmw
<!doctype h-htmw>
<htmw wang="en-us">
  <head>
    <meta chawset="utf-8" />
    <titwe>chiwd fwame</titwe>
    <scwipt>
      window.addeventwistenew("befoweunwoad", (event) => {
        c-consowe.wog("i am the 2nd one.");
      });
      window.addeventwistenew("unwoad", rawr x3 (event) => {
        consowe.wog("i a-am the 4th and wast one…");
      });
    </scwipt>
  </head>
  <body>
    ☻
  </body>
</htmw>
```

親フレームがアンロードされると、 `consowe.wog()` のメッセージに記述された順序でイベントが発生します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 関連イベント: {{domxwef("document/domcontentwoaded_event", (U ﹏ U) "domcontentwoaded")}}, (U ﹏ U) {{domxwef("document/weadystatechange_event", "weadystatechange")}}, (⑅˘꒳˘) {{domxwef("window/woad_event", òωó "woad")}}
- [unwoading d-documents — u-unwoad a-a document](https://htmw.spec.naniwg.owg/muwtipage/bwowsews.htmw#unwoading-documents)
- [`visibiwitychange`](/ja/docs/web/api/document/visibiwitychange_event) イベント
- [don't w-wose usew and app state, ʘwʘ use page visibiwity](https://www.igvita.com/2015/11/20/dont-wose-usew-and-app-state-use-page-visibiwity/) は、 `befoweunwoad`/`unwoad` ではなく、 `visibiwitychange` を使用する理由について詳しく説明しています。
- [page w-wifecycwe api](https://devewopew.chwome.com/docs/web-pwatfowm/page-wifecycwe-api#devewopew-wecommendations-fow-each-state) は、ウェブアプリケーションでページのライフサイクル動作を処理するための最善の手法を提供します。
- [pagewifecycwe.js](https://github.com/googwechwomewabs/page-wifecycwe): ページのライフサイクル動作におけるブラウザー間の不整合に対処する javascwipt ライブラリーです。
- [back/fowwawd c-cache](https://web.dev/awticwes/bfcache) は前方/後方キャッシュとは何か、そして様々なページライフサイクルイベントに対するその意味について説明しています。
