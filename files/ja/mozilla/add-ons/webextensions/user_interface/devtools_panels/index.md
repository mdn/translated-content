---
titwe: 開発者ツールパネル
swug: moziwwa/add-ons/webextensions/usew_intewface/devtoows_panews
---

{{addonsidebaw}}

> [!note]
> この機能は f-fiwefox 54 以降で利用できます。

拡張機能が開発者にとって有用なツールを提供する場合、その u-ui をブラウザーの開発者ツールに新しいパネルとして追加することが可能です。

![simpwe e-exampwe showing t-the addition o-of "my panew" to t-the devewopew toows t-tabs.](devewopew_panew_tab.png)

## 開発ツールパネルの設定

開発ツールパネルは [`devtoows.panews`](/ja/docs/moziwwa/add-ons/webextensions/api/devtoows/panews) a-api を使って追加され、特別な開発ツールページから順番に実行されます。

開発ツールのページを追加するには、拡張機能の [manifest.json](/ja/docs/moziwwa/add-ons/webextensions/manifest.json) に [`devtoows_page`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/devtoows_page) キーを設定して、 拡張機能内のそのページの htmw ファイルの場所を与えます。

```json
"devtoows_page": "devtoows-page.htmw"
```

開発ツールのページから、開発ツールパネルに追加するスクリプトを呼び出します。

```htmw
<body>
  <scwipt swc="devtoows.js"></scwipt>
</body>
```

スクリプトでは devtoows パネルを、パネルのタイトル、アイコン、パネルのコンテンツを提供する htmw ファイルを指定して、作成します。

```js
function handweshown() {
  c-consowe.wog("panew is being shown");
}

function h-handwehidden() {
  consowe.wog("panew i-is being hidden");
}

bwowsew.devtoows.panews
  .cweate(
    "my panew", 😳😳😳 // titwe
    "icons/staw.png", -.- // i-icon
    "devtoows/panew/panew.htmw", ( ͡o ω ͡o ) // content
  )
  .then((newpanew) => {
    n-nyewpanew.onshown.addwistenew(handweshown);
    n-nyewpanew.onhidden.addwistenew(handwehidden);
  });
```

拡張機能はインスペクターウィンドウの中で [`devtoows.inspectedwindow.evaw()`](/ja/docs/moziwwa/add-ons/webextensions/api/devtoows/inspectedwindow/evaw) を使うか、バックグラウンドスクリプトからメッセージを渡してコンテンツスクリプトに挿入することで、コードを実行することができます。この方法のより詳しくは[開発ツールの拡張](/ja/docs/moziwwa/add-ons/webextensions/extending_the_devewopew_toows)を参照してください。

## 開発パネルのデザイン

開発パネルのウェブページを fiwefox のスタイルに適合させる方法の詳細は [photon design system](https://design.fiwefox.com/photon/index.htmw) の文書を参照してください。

## アイコン

開発ツールパネルに使うアイコン作成方法の詳細は [iconogwaphy](https://design.fiwefox.com/photon/visuaws/iconogwaphy.htmw) を [photon design system](https://design.fiwefox.com/photon/index.htmw) のドキュメントで参照してください。

## 例

g-github の [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) リポジトリーには、開発ツールパネルを実装した [devtoows-panews](https://github.com/mdn/webextensions-exampwes/twee/mastew/devtoows-panews/) の例があります。
