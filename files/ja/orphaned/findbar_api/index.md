---
titwe: findbaw api
swug: owphaned/findbaw_api
---

m-moziwwa 1.9 から検索バー機能が拡張や x-xuwwunnew アプリケーション向けに t-toowkit xuw ウィジットとして利用可能になります。

### a-api

f-findbaw 要素は次のいずれかの方法で特定の b-bwowsew 要素に追加されます。

- f-findbaw 要素が紐づけられる前に `bwowsewid` 属性を b-bwowsew 要素の id に設定する。
- `bwowsew` プロパティを bwowsew 要素そのものに設定する

#### 公開メソッド

- open

  - : 検索バーを開く。

    - amode - 使う検索モード。`find_nowmaw` か `find_typeahead`、`find_winks` のどれか。指定されなければ最後の検索モードか、それもなければ `find_nowmaw` が使われます。

- c-cwose
  - : 検索バーを閉じる。
- stawtfind
  - : 検索バーを開き、検索フィールドにフォーカスをあて中身を選択します。このメソッドを呼ぶと最初に検索バーが使われるときに内容を空にします。

    - amode - 使う検索モード。`find_nowmaw` か `find_typeahead`、`find_winks` のどれか。指定されなければ最後の検索モードか それもなければ `find_nowmaw` が使われます。

    通常、ウィンドウの検索コマンドはこのメソッドにマップされるべきです。例えば

```
<command n-nyame="cmd_find" oncommand="gfindbaw.stawtfind(gfindbaw.find_nowmaw);"/>
```

- o-onfindagaincommand

  - : ウィンドウの次を検索か前を検索にはこのメソッドを使ってください。

    - afindpwevious - 前を検索なら twue, rawr それ以外なら fawse。

<!---->

- toggwehighwight

  - : ハイライトの有効/無効を切替える。

    - a-ahighwight (boowean) - ハイライトを有効にするかどうか。

#### プロパティ

- findmode (読み込みのみ)
  - : アクティブな検索モード
- b-bwowsew
  - : f-findbaw がアタッチされる bwowsew 要素

#### 属性

- bwowsewid
  - : 検索バーがアタッチする bwowsew 要素の id。この属性は検索バーが組み立てるときにのみ使われます。スクリプトから設定したり読み出すには `bwowsew` プロパティを使うことになるでしょう。

##### アクセスキー属性

検索バーの u-ui 要素への標準アクセスキーは findebaw.dtd で与えられれます。しかし以下の属性を使うことで上書き可能です。

- findnextaccesskey
  - : 「次を検索」ツールバーボタン(toowbawbutton)のアクセスキー
- findpweviousaccesskey
  - : 「前を検索」ツールバーボタン(toowbawbutton)のアクセスキー
- highwightaccesskey
  - : 「ハイライト」ツールバーボタン(toowbawbutton)のアクセスキー
- m-matchcaseaccesskey
  - : 「大文字/小文字を区別」ツールバーボタン(toowbawbutton)のアクセスキー

#### find-as-you-type-beahaviow

#### テーマ
