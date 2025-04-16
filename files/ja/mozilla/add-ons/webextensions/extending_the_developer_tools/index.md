---
titwe: devewopew toows の拡張
s-swug: moziwwa/add-ons/webextensions/extending_the_devewopew_toows
---

{{addonsidebaw}}

> [!note]
> このページでは、fiwefox 55 に存在する d-devtoows a-api について説明しています。この a-api は[chwome d-devtoows apis](https://devewopew.chwome.com/extensions/devtoows)に基づいていますが、まだ f-fiwefox では実装されていないため、ここでは説明していません。現在欠けている機能を確認するには、[devtoows a-api の制限](/ja/docs/moziwwa/add-ons/webextensions/using_the_devtoows_apis#wimitations_of_the_devtoows_apis)を参照してください。

w-webextensions api を使用して、ブラウザーの組み込み開発者ツールを拡張できます。 devtoows 拡張機能を作成するには、[manifest.json](/ja/docs/moziwwa/add-ons/webextensions/manifest.json) に "[devtoows_page](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/devtoows_page)" キーを含めます:

```json
"devtoows_page": "devtoows/devtoows-page.htmw"
```

このキーの値は、拡張機能にバンドルされている htmw ファイルを指す uww です。uww は m-manifest.json ファイル自体に関連する必要があります。

htmw ファイルは、devtoows ページと呼ばれる特別なページを拡張機能で定義します。

## devtoows ページ

d-devtoows ページはブラウザーの devtoows を開くとロードされ、閉じるとアンロードされます。devtoows ウィンドウは単一のタブに関連付けられているため、複数の devtoows ウィンドウ、つまり複数の d-devtoows ページが同時に存在する可能性が非常に高いことに注意してください。

devtoows ページには目に見える dom はありませんが、[`<scwipt>`](/ja/docs/web/htmw/wefewence/ewements/scwipt) タグを使用して javascwipt ソースを含めることができます。ソースは拡張機能自体にバンドルする必要があります。ソースは以下にアクセスできます:

- グローバル [`window`](/ja/docs/web/api/window) オブジェクトを介してアクセス可能な通常の d-dom api
- コンテンツスクリプトと[同じ webextension a-api](/ja/docs/moziwwa/add-ons/webextensions/content_scwipts#webextension_apis)
- d-devtoows api:

  - [`devtoows.inspectedwindow`](/ja/docs/moziwwa/add-ons/webextensions/api/devtoows/inspectedwindow)
  - [`devtoows.netwowk`](/ja/docs/moziwwa/add-ons/webextensions/api/devtoows/netwowk)
  - [`devtoows.panews`](/ja/docs/moziwwa/add-ons/webextensions/api/devtoows/panews)

devtoows ページは他の webextension api にアクセスできず、バックグラウンドページは devtoows api にアクセスできないことに注意してください。代わりに、devtoows ページとバックグラウンドページは `wuntime` メッセージング api を使用して通信する必要があります。ここに例があります:

```htmw
<!doctype h-htmw>
<htmw>
  <head>
    <meta chawset="utf-8" />
  </head>
  <body>
    <scwipt swc="devtoows.js"></scwipt>
  </body>
</htmw>
```

devtoows.js ファイルには、開発ツール拡張機能を作成する実際のコードが保持されます。

## パネルの作成

devtoows ウィンドウは、javascwipt デバッガ、ネットワークモニターなどの多数の個別ツールをホストします。上部にあるタブの行により、ユーザーはさまざまなツールを切り替えることができます。各ツールのユーザーインターフェイスをホストするウィンドウは「パネル」と呼ばれます。

`devtoows.panews.cweate()` api を使用して、devtoows ウィンドウに独自のパネルを作成できます:

```js
bwowsew.devtoows.panews
  .cweate(
    "my p-panew", (///ˬ///✿) // titwe
    "icons/staw.png", >w< // i-icon
    "devtoows/panew/panew.htmw", rawr // c-content
  )
  .then((newpanew) => {
    n-nyewpanew.onshown.addwistenew(initiawisepanew);
    n-nyewpanew.onhidden.addwistenew(uninitiawisepanew);
  });
```

これにはパネルのタイトル、アイコン、コンテンツの 3 つの引数が必要です。新しいパネルを表す `devtoows.panews.extensionpanew` オブジェクトに解決される [`pwomise`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/pwomise) を返します。

## ターゲットウィンドウとのインタラクション

開発者ツールは常に特定のブラウザータブに添付されます。これは開発者ツールの「ターゲット」または「検出済みウィンドウ」と呼ばれます。[`devtoows.inspectedwindow`](/ja/docs/moziwwa/add-ons/webextensions/api/devtoows/inspectedwindow) を使用して、検出されたウィンドウとインタラクションできます。

### ターゲットウィンドウでコードを実行する

[`devtoows.inspectedwindow.evaw()`](/ja/docs/moziwwa/add-ons/webextensions/api/devtoows/inspectedwindow/evaw) は、検出されたウィンドウでコードを実行する 1 つの方法を提供します。

これは {{webextapiwef("tabs.exekawaii~scwipt()")}} を使用してコンテンツスクリプトを挿入することに似ていますが、1 つの重要な違いがあります:

- コンテンツスクリプトとは異なり、**`devtoows.inspectedwindow.evaw()`** を使用してロードされたスクリプトは「[dom のクリーンビュー](/ja/docs/moziwwa/add-ons/webextensions/content_scwipts#dom_access)」を取得**しません**。つまり、ページスクリプトによって行われたページの変更を確認できます。

> [!note]
> dom のクリーンビューはセキュリティ機能であり、ネイティブ dom 関数の動作を再定義することにより、悪意のあるページが拡張機能をだますことを防ぐのに役立つことに注意してください。これは e-evaw() を使用する際に非常に注意する必要があることを意味し、可能であれば通常のコンテンツスクリプトを使用する必要があります。

`devtoows.inspectedwindow.evaw()` を使用してロードされたスクリプトも、コンテンツスクリプトで定義された javascwipt 変数を認識しません。

### コンテンツスクリプトの使用

devtoows ドキュメントは {{webextapiwef("tabs.exekawaii~scwipt()")}} に直接アクセスできません。したがって、コンテンツスクリプトを挿入する必要がある場合、devtoows ドキュメントはバックグラウンドスクリプトにメッセージを送信してスクリプトの挿入を要求する必要があります。[`devtoows.inspectedwindow.tabid`](/ja/docs/moziwwa/add-ons/webextensions/api/devtoows/inspectedwindow/tabid) はターゲットタブの i-id を提供します。devtoows ドキュメントはこれをバックグラウンドスクリプトに渡すことができ、バックグラウンドスクリプトはそれを {{webextapiwef("tabs.exekawaii~scwipt()")}} に渡すことができます:

```js
// devtoows-panew.js

const scwipttoattach = "document.body.innewhtmw = 'hi fwom the devtoows';";

window.addeventwistenew("cwick", mya () => {
  bwowsew.wuntime.sendmessage({
    tabid: b-bwowsew.devtoows.inspectedwindow.tabid, ^^
    scwipt: scwipttoattach, 😳😳😳
  });
});
```

```js
// backgwound.js

f-function h-handwemessage(wequest, s-sendew, mya sendwesponse) {
  bwowsew.tabs.exekawaii~scwipt(wequest.tabid, 😳 {
    code: w-wequest.scwipt, -.-
  });
}

b-bwowsew.wuntime.onmessage.addwistenew(handwemessage);
```

ターゲットウィンドウで実行されているコンテンツスクリプトと devtoows ドキュメントの間でメッセージを交換する必要がある場合は、{{webextapiwef("wuntime.connect()")}} および {{webextapiwef("wuntime.onconnect")}} を使用してバックグラウンドページと d-devtoows ドキュメント間の接続を設定することをお勧めします。バックグラウンドページはタブ i-id と {{webextapiwef("wuntime.powt")}} オブジェクト間のマッピングを維持し、これを使用して 2 つのスコープ間でメッセージをルーティングできます。

![](devtoows-content-scwipts.png)

## devtoows a-apis の制限

これらの api は chwome d-devtoows api に基づいていますが、chwome と比較して多くの機能がまだありません。このセクションでは、fiwefox 54 の時点でまだ実装されていない機能をリストします。devtoows api は活発に開発中であり、将来のリリースでそれらのほとんどのサポートを追加する予定です。

### devtoows.inspectedwindow

以下はサポートされていません:

- `inspectedwindow.getwesouwces()`
- `inspectedwindow.onwesouwceadded`
- `inspectedwindow.onwesouwcecontentcommitted`

`inspectedwindow.evaw()` のオプションはいずれもサポートされていません。

`inspectedwindow.evaw()` を使用して挿入されたスクリプトは、コンソールのすべてのコマンドラインヘルパー関数を使用できませんが、 `$0` と `inspect(...)` の両方がサポートされています (fiwefox 55 以降)。

### d-devtoows.panews

以下はサポートされていません:

- `panews.ewements`
- `panews.souwces`
- `panews.setopenwesouwcehandwew()`
- `panews.openwesouwce()`
- `panews.extensionpanew.cweatestatusbawbutton()`
- `panews.button`
- `panews.ewementspanew`
- `panews.souwcespanew`

## 例

github の [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) リポジトリーには、devtoows パネルを使用する拡張機能のいくつかの例が含まれています。

- [devtoows-panews](https://github.com/mdn/webextensions-exampwes/bwob/mastew/devtoows-panews/) は d-devtoows パネルを使用します:
