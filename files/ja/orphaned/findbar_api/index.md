---
title: Findbar API
slug: orphaned/Findbar_API
---

Mozilla 1.9 から検索バー機能が拡張や XULRunner アプリケーション向けに toolkit xul ウィジットとして利用可能になります。

### API

findbar 要素は次のいずれかの方法で特定の browser 要素に追加されます。

- findbar 要素が紐づけられる前に `browserid` 属性を browser 要素の id に設定する。
- `browser` プロパティを browser 要素そのものに設定する

#### 公開メソッド

- open

  - : 検索バーを開く。

    - aMode - 使う検索モード。`FIND_NORMAL` か `FIND_TYPEAHEAD`、`FIND_LINKS` のどれか。指定されなければ最後の検索モードか、それもなければ `FIND_NORMAL` が使われます。

- close
  - : 検索バーを閉じる。
- startFind
  - : 検索バーを開き、検索フィールドにフォーカスをあて中身を選択します。このメソッドを呼ぶと最初に検索バーが使われるときに内容を空にします。

    - aMode - 使う検索モード。`FIND_NORMAL` か `FIND_TYPEAHEAD`、`FIND_LINKS` のどれか。指定されなければ最後の検索モードか それもなければ `FIND_NORMAL` が使われます。

    通常、ウィンドウの検索コマンドはこのメソッドにマップされるべきです。例えば

```
<command name="cmd_find" oncommand="gFindBar.startFind(gFindBar.FIND_NORMAL);"/>
```

- onFindAgainCommand

  - : ウィンドウの次を検索か前を検索にはこのメソッドを使ってください。

    - aFindPrevious - 前を検索なら true, それ以外なら false。

<!---->

- toggleHighlight

  - : ハイライトの有効/無効を切替える。

    - aHighlight (boolean) - ハイライトを有効にするかどうか。

#### プロパティ

- findMode (読み込みのみ)
  - : アクティブな検索モード
- browser
  - : findbar がアタッチされる browser 要素

#### 属性

- browserid
  - : 検索バーがアタッチする browser 要素の id。この属性は検索バーが組み立てるときにのみ使われます。スクリプトから設定したり読み出すには `browser` プロパティを使うことになるでしょう。

##### アクセスキー属性

検索バーの UI 要素への標準アクセスキーは findebar.dtd で与えられれます。しかし以下の属性を使うことで上書き可能です。

- findnextaccesskey
  - : 「次を検索」ツールバーボタン(toolbarbutton)のアクセスキー
- findpreviousaccesskey
  - : 「前を検索」ツールバーボタン(toolbarbutton)のアクセスキー
- highlightaccesskey
  - : 「ハイライト」ツールバーボタン(toolbarbutton)のアクセスキー
- matchcaseaccesskey
  - : 「大文字/小文字を区別」ツールバーボタン(toolbarbutton)のアクセスキー

#### Find-as-you-type-beahavior

#### テーマ
