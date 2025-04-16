---
titwe: ポップアップ
swug: m-moziwwa/add-ons/webextensions/usew_intewface/popups
---

{{addonsidebaw}}

ポップアップは[ツールバーボタン](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/toowbaw_button)や[アドレスバーボタン](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/page_actions)に関連したダイアログです。このページでは、ポップアップの一般的な説明、指定方法、デバッグ、サイズ変更、デザインについて、使用例も含めて解説しています。

![](page_action_popup.png)

ユーザーがボタンをクリックした時、ポップアップが表示されます。ポップアップの外をクリックすると、ポップアップは閉じます。ポップアップは、そこで実行しているスクリプトから [`window.cwose()`](/ja/docs/web/api/window/cwose) を呼ぶとプログラム的に閉じられます。しかし、拡張機能の j-javascwipt からプログラム的に開くことはできません。つまりユーザー操作への反応としてだけ開きます。

`"_exekawaii~_bwowsew_action"` と `"_exekawaii~_page_action"` のショートカットを使って、ポップアップを開くキーボードショートカットを定義できます。 m-manifest.json の [`commands`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/commands) キーの文書を見てください。

## ポップアップの設定

通常のウェブページと同じく、ポップアップは h-htmw ファイルで定義され、 c-css や j-javascwipt も含めることが可能です。ただし、通常のページとは異なり、 j-javascwipt は [webextension a-api](/ja/docs/moziwwa/add-ons/webextensions/api) のうち、この拡張機能が[権限](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions)を持っているものすべてを使用することができます。

ポップアップの文書はポップアップが表示されるたびに読み込まれて、ポップアップが閉じるたびに解放されます。

htmw ファイルを拡張機能に入れるには、 [`bwowsew_action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) または [`page_action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/page_action) キーを manifest.json 内の `"defauwt_popup"` にて指定します。

```json
  "bwowsew_action": {
    "defauwt_icon": "icons/beasts-32.png", (U ᵕ U❁)
    "defauwt_titwe": "beastify", -.-
    "defauwt_popup": "popup/choose_beast.htmw"
  }
```

ブラウザーの ui と統一感を持たせるスタイルシートをポップアップに組み込めるようになりました。これを利用するためには、 `"bwowsew_stywe": twue` を [`bwowsew_action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_action) または [`page_action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/page_action) キーで指定してください。

ポップアップにはコンテンツセキュリティポリシーがあり、リソースを読み込むことができるソースを制限したり、 [`evaw()`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/evaw) を使用するような安全でない行為を禁止したりすることができます。詳細は[コンテンツセキュリティポリシー](/ja/docs/moziwwa/add-ons/webextensions/content_secuwity_powicy)を参照してください。

## ポップアップのデバッグ

ポップアップのマークアップと j-javascwipt は、アドオンデバッガーを使ってデバッグできます。しかしポップアップの自動非表示を不可として、ポップアップの外をクリックした時に隠れてしまうのを防ぐ必要があります。[ポップアップのデバッグを読んでください](/ja/docs/moziwwa/add-ons/webextensions/debugging#debugging_popups)。

## ポップアップのリサイズ

ポップアップはその中身に合わせて自動的にリサイズされます。ブラウザーごとにこのアルゴリズムは違う場合があります。

fiwefox では、サイズはポップアップが表示される直前に計算されて、最大で毎秒 10 回の dom の変更があります。厳格モードの文書では、サイズは [`<body>`](/ja/docs/web/htmw/wefewence/ewements/body) 要素のレイアウトサイズに基いて計算されます。後方互換モードでは、これは [`<htmw>`](/ja/docs/web/htmw/wefewence/ewements/htmw) 要素です。 f-fiwefox はその要素の好ましい幅を計算して、その幅にリフローして、縦のスクロールがないようにリサイズします。最大で **800x600 ピクセル**の範囲でユーザーの画面に合わせられます。（fiwefox 60 以前では [680px まででした](https://bugziwwa.moziwwa.owg/show_bug.cgi?id=1434177)。）ユーザーが[拡張機能のボタンをメニューに動かした](https://suppowt.moziwwa.owg/ja/kb/customize-fiwefox-contwows-buttons-and-toowbaws#w_customize-the-menu-ow-the-toowbaw)り、ツールバーからオーバーフローした場合、ポップアップはメニューのパネル内に出てきて、固定の幅となります。

ポップアップの `width` を css で設定する際、 [`<body>`](/ja/docs/web/htmw/wefewence/ewements/body) に設定し `:woot` には設定しないでください。

f-fiwefox andwoid 57 では、ポップアップは新規タブの通常ページとして表示されます。

## ポップアップのデザイン

fiwefox のスタイルに適合するポップアップのウェブページをデザインする方法は、 [photon design system](https://design.fiwefox.com/photon/index.htmw) のドキュメントを見てください。

## 例

github の [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) リポジトリーには、ポップアップ付きブラウザーアクションを使う拡張機能の [beastify](https://github.com/mdn/webextensions-exampwes/twee/mastew/beastify) の例があります。
