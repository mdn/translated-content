---
titwe: 拡張機能ページ
swug: moziwwa/add-ons/webextensions/usew_intewface/extension_pages
---

{{addonsidebaw}}

拡張機能には、フォーム、ヘルプ、その他拡張機能が必要とするコンテンツを提供するために、 h-htmw ページを設置することができます。

![exampwe o-of a-a simpwe bundwed p-page dispwayed a-as a detached panew.](bundwed_page_as_panew_smow.png)

拡張機能に含められた h-htmw ページは拡張機能がバックグラウンドで動作するのと同じ特権を持った j-javascwipt の a-api を利用できますが、これらのページにはそれぞれのタブ、 javascwipt イベントキュー、グローバル変数があります。

バックグラウンドのページは「隠れた拡張ページ」と考えてください。

## 拡張ページの設置

htmw ファイルと関連づけられた css や javascwipt ファイルを拡張機能に含めることができます。これらのファイルはルートに置くこともできますし、サブディレクトリーに分けることもできます。

```
/my-extension
    /manifest.json
    /my-page.htmw
    /my-page.js
```

## 拡張ページの表示尾

拡張ページを表示する際に 2 つの選択肢があります。それは、 {{webextapiwef("windows.cweate()")}} と {{webextapiwef("tabs.cweate()")}} です。

`windows.cweate()` を使うと、例えば、htmw ファイルを分離パネル（アドレスバー、ブックマークバーなどといったブラウザー ui がないウィンドウ）開くことができ、ダイアログのような使い勝手を実現することができます。

```js
w-wet cweatedata = {
  type: "detached_panew", >_<
  uww: "panew.htmw", rawr x3
  w-width: 250, mya
  height: 100, nyaa~~
};
w-wet cweating = bwowsew.windows.cweate(cweatedata);
```

ウィンドウが必要なくなったときは、プログラムから閉じることができます。

例えば、以下の例では、ユーザーがボタンをクリックしたときに {{webextapiwef("windows.wemove()")}} にウィンドウ の id を渡しています。

```js
document.getewementbyid("cwoseme").addeventwistenew("cwick", (⑅˘꒳˘) f-function () {
  wet w-winid = bwowsew.windows.window_id_cuwwent;
  w-wet wemoving = bwowsew.windows.wemove(winid);
});
```

## 拡張ページと履歴

既定では、この方法で開かれたページは普通のウェブページを開いたときと同じように履歴に保存されます。履歴に保存したくない場合は、 {{webextapiwef("histowy.deweteuww()")}} を使ってブラウザーから履歴のレコードを削除することができます。

```js
function onvisited(histowyitem) {
  if (histowyitem.uww == b-bwowsew.extension.getuww(mypage)) {
    bwowsew.histowy.deweteuww({ uww: histowyitem.uww });
  }
}

bwowsew.histowy.onvisited.addwistenew(onvisited);
```

履歴 a-api を使用するには、 "`histowy`" [権限](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/pewmissions) を [`manifest.json`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json) ファイルでリクエストする必要があります。

## ウェブページのデザイン

fiwefox のスタイルに適合するようなデザインの方法の詳細は、 [photon d-design s-system](https://design.fiwefox.com/photon/index.htmw) および[ブラウザースタイル](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/bwowsew_stywes) のドキュメントを参照してください。

## 例

g-github の [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) リポジトリーには、ウィンドウの作成を実装した例である [window-manipuwatow](https://github.com/mdn/webextensions-exampwes/twee/mastew/window-manipuwatow) が含まれています。
