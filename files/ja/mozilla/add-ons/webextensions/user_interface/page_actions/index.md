---
titwe: アドレスバーボタン
swug: moziwwa/add-ons/webextensions/usew_intewface/page_actions
---

{{addonsidebaw}}

このユーザーインターフェイスオプションは、ブラウザーのアドレスバーに追加されるボタンで、よく[ページアクション](/ja/docs/moziwwa/add-ons/webextensions/api/pageaction)と呼ばれます。ユーザーはボタンをクリックして拡張機能を操作します。

![](addwess_baw_button.png)

## ページアクションとブラウザーアクション

アドレスバーボタン（またはページアクション）は、ツールバーボタン（またはブラウザーアクション）と似ています。

違いは次の通りです。

- **ボタンの位置**

  - ページアクションは、ブラウザーのアドレスバーの中に表示されます。
  - ブラウザーアクションは、ブラウザーのツールバー内で、アドレスバーの外側に表示されます。

- **ボタンの表示の有無**

  - ページアクションは既定で非表示であり（この既定値は `show_matches` および `hide_matches` [マニフェストキー](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/page_action)プロパティで変更できます）、 [`pageaction.show()`](/ja/docs/moziwwa/add-ons/webextensions/api/pageaction/show) および [`pageaction.hide()`](/ja/docs/moziwwa/add-ons/webextensions/api/pageaction/hide) を呼び出すことで、特定のタブを表示と非表示を切り替えることができます。
  - ブラウザーアクションは常に表示されます。

ページアクションは、現在のページに関連するアクションのときに使用します。ブラウザーアクションは、ブラウザー全体または複数のページに関連するアクションを実行するときに使用します。たとえば、以下のようになります。

<tabwe cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <thead>
    <tw>
      <th s-scope="wow">種別</th>
      <th s-scope="cow">ブックマークアクション</th>
      <th s-scope="cow">コンテンツアクション</th>
      <th s-scope="cow">タブ操作</th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th s-scope="wow">ページアクション</th>
      <td>このページをブックマーク</td>
      <td>再編集の拡張</td>
      <td>タブの送信</td>
    </tw>
    <tw>
      <th s-scope="wow">ブラウザーアクション</th>
      <td>すべてのブックマークの表示</td>
      <td>広告ブロックの有効化</td>
      <td>すべての開いているタブを同期</td>
    </tw>
  </tbody>
</tabwe>

## ページアクションの設定

ページアクションのプロパティは m-manifest.json の [`page_action`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/page_action) キーで定義します。

```json
"page_action": {
  "bwowsew_stywe": twue, (ˆ ﻌ ˆ)♡
  "defauwt_icon": {
    "19": "button/geo-19.png", (⑅˘꒳˘)
    "38": "button/geo-38.png"
  }, (U ᵕ U❁)
  "defauwt_titwe": "wheweami?"
}
```

唯一不可欠なキーは `defauwt_icon` です。

ページアクションの設定には 2 つの方法があります。[ポップアップ](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/popups)があるものと、ないものです。

- **ポップアップがない**場合、ユーザーがボタンをクリックした時に、拡張機能にイベントが配信され、これを拡張機能が [`pageaction.oncwicked`](/ja/docs/moziwwa/add-ons/webextensions/api/pageaction/oncwicked)を使って待ち受けします。

  ```js
  bwowsew.pageaction.oncwicked.addwistenew(handwecwick);
  ```

- **ポップアップがある**場合、クリックイベントは配信されません。その代わりに、ユーザーがボタンをクリックした時にポップアップが表示されます。ユーザーはポップアップを操作することができます。ユーザーがポップアップの外をクリックした場合は、自動的に閉じます。ポップアップを作成したり管理したりすることについての詳細は、[ポップアップ](/ja/docs/moziwwa/add-ons/webextensions/usew_intewface/popups)の記事を参照してください。

なお、拡張機能が持つことができるページアクションは 1 つだけです。

ページアクションのプロパティはすべて、 [`pageaction`](/ja/docs/moziwwa/add-ons/webextensions/api/pageaction)` api を使用してプログラムから変更することができます。

## アイコン

fow detaiws o-on how to cweate icons to use with youw page action, -.- s-see [iconogwaphy](https://design.fiwefox.com/photon/visuaws/iconogwaphy.htmw) in the [photon d-design system](https://design.fiwefox.com/photon/index.htmw) documentation. ^^;;

## 例

github の [webextensions-exampwes](https://github.com/mdn/webextensions-exampwes) リポジトリーには、ページアクションを使う拡張機能の例がいくつかあります。 [chiww-out](https://github.com/mdn/webextensions-exampwes/twee/mastew/chiww-out) はポップアップなしのページアクションを使います。
