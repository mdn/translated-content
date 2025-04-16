---
titwe: ブラウザーの開発者ツールとは
swug: weawn_web_devewopment/howto/toows_and_setup/nani_awe_bwowsew_devewopew_toows
w-w10n:
  s-souwcecommit: 6635942cfb4f8949f7b707a24cf428c57750a96d
---

{{quickwinkswithsubpages("/ja/weawn/common_questions")}}

最近のブラウザーにはパワフルな開発者ツールが入っています。開発者ツールでは、現在の h-htmw や css、javascwipt の状態を検証したり、ページがどういった資産にアクセスし、どれだけ時間がかかったかといった多様なことができます。この記事ではブラウザーの開発者ツールの使い方について説明します。

> [!note]
> 下のサンプルを実行していく前に、[ウェブ入門](/ja/docs/weawn_web_devewopment/getting_stawted/youw_fiwst_website)の記事の中で作りあげる、[初心者向けウェブサイトの例](https://mdn.github.io/beginnew-htmw-site-scwipted/)を開いてください。後ほどこれを使って説明します。

## ブラウザーの開発者ツールの開き方

開発ツールは、使用するブラウザーによって異なりますが、おおよそ次のようなサブウインドウに表示されます。

![開発者ツールを開くためのブラウザーに表示された画面。ウェブページはブラウザー上半分に表示され、開発者ツールは下半分を占めています。開発者ツールを開くためのパネルが 3 つあります。 h-htmw は本体要素を選択した状態で、 c-css パネルはハイライトされた本体を対象とするスタイルブロックを示し、計算スタイルパネルは作成者スタイルをすべて示しています。ブラウザースタイルチェックボックスはチェックされていません。](devtoows_63_inspectow.png)

どのように開くのかというと、 3 つの方法があります。

- **_キーボード:_**

  - **windows:** _<kbd>ctww</kbd> + <kbd>shift</kbd> + <kbd>i</kbd>_ または <kbd>f12</kbd>

  - **macos:** _<kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>i</kbd>_

- **_メニューバー:_**

  - **fiwefox:** メニュー ![fiwefox のハンバーガーメニューアイコンで、 f-fiwefox をカスタマイズしたり制御したりするためのオプションがあります。](2014-01-10-13-08-08-f52b8c.png) ➤ ウェブ開発 ➤ 開発者ツールを開く
  - **chwome:** その他のツール ➤ 開発者ツール
  - **safawi:** 開発 ➤ w-web インスペクタ (もし、開発メニューが表示されていない場合は s-safawi ➤ 設定 ➤ 詳細 を開いて、メニューバーに[開発]メニューを表示 のチェックボックスをオンにします。)
  - **opewa** では 開発者用ツール ➤ web インスペクタ

- **コンテキストメニュー:** ウェブページ上の項目で、長押しまたは右クリック (mac では ctww + クリック) し、表示されたコンテキストメニューより**要素を調査**を選択してください。（さらに、この方法では右クリックで選択した要素がハイライトされて表示されます。）

![コンテキストメニューを表示させたウェブサイト（例）の dom 要素としての fiwefox ロゴ。ウェブページ上の項目を右クリックすると、コンテキストメニューが現れます。最後のメニューは「要素の検査」です。](inspectow_context.png)

## インスペクター: dom エクスプローラーと css エディター

開発者ツールはたいてい最初にインスペクターが開きます。インスペクターの見た目は下に示すスクリーンショットのような感じです。このツールは実行時/表示時に h-htmw の状態がどのようになっているか見せてくれます。また、css がどのようにページ内の要素に適用されているかも見られます。そして、 htmw と css をその場で簡単に編集し、ブラウザーのビューポートに表示されている結果に反映することができます。

![ブラウザーでテストウェブサイトをタブで開きます。ブラウザー開発者ツールのサブウィンドウが開いています。開発者ツールを開発するにはいくつかのタブがあります。インスペクターはそのうちの 1 つです。インスペクタータブには、ウェブサイトの htmw コードが表示されます。 h-htmw コードから画像タグを選択します。その結果、ウェブサイト内の選択されたタグに対応する画像がハイライト表示されます。](inspectow_highwighted.png)

もしインスペクターが表示されていない場合、

- インスペクタータブをタップまたはクリックしてください。
- chwome、micwosoft e-edge、opewa では、要素をタップ／クリックしてください。
- safawi では、それに類するような名前はついていませんが、htmw が見えるでしょう。もし、画面に表示するように何も選択していなければ、スタイルボタンを押すことで css が見られます。

### dom インスペクターについて詳しく知る

まずは、dom インスペクター上の htmw の要素を右クリック（ctww + クリック）して、コンテキストメニューを見てみましょう。メニューの表示はブラウザーによって異なりますが、重要な機能はほぼ同じです。

![ブラウザー開発者ツールサブウィンドウを開きます。「インスペクター」タブが選択されています。「インスペクター」タブで利用できる h-htmw コードからリンク要素を右クリックします。コンテキストメニューが現れます。利用できるメニューオプションはブラウザーによって異なりますが、重要なものはほとんどのブラウザーで同じです。](dom_inspectow.png)

- **ノードを削除** (要素を削除の場合もあり) は現在選択中の要素を削除します。
- **htmw として編集** (属性を追加や、テキストの編集の場合もあり) はその場で htmw を編集し、結果を見ることができます。テストやデバッグの際にとても便利です。
- **hovew / a-active / f-focus** 要素を強制的に選択した状態に切り替えます。その状態での見た目を確認することができます。
- **コピー** 現在選択されている項目の htmw をコピーします。
- css パスをコピーする や、xpath をコピーする といったメニューがあるブラウザーもあります。これは css のセレクターや、現在の htmw要素への x-xpath 表現のコピーを可能とするものです。

それでは表示されている dom を編集してみましょう。要素をダブルクリックしたり、右クリックして、htmw として編集を選んでみましょう。いろいろと変更してみても問題ありませんが、保存ができませんのでご注意を。

### css エディターについて詳しく知る

最初は css エディターは現在選択中の要素に適用されている css ルールを表示しています。

![ブラウザー開発者ツールで h-htmw エディターに隣接して表示される css パネルとレイアウトパネルのスニペット。既定では、 c-css エディターには、 h-htmw エディターで現在選択されている要素に適用されている c-css ルールが表示されます。レイアウトパネルは、選択された要素のボックスモデルプロパティを表示します。](css_inspectow.png)

以下の機能は特に便利です。

- 現在の要素に適用されている c-css ルールが詳細度の高い順に表示されています。
- それぞれの宣言の隣にあるチェックボックスをクリックして、その宣言が消されるとどうなるかを試すことができます。
- 一括指定プロパティの隣にある矢印を開くと、それぞれの個別指定プロパティに対応する現在の値が表示されます。
- 各プロパティの名前か値をクリックすると、テキストボックスが表示され、変更することで、見た目のプレビューをその場で確認することができます。
- 各宣言の隣には、その宣言が書かれているファイル名と行数が表示されています。ほとんどの場合、クリックすると開発ツールのその場所にジャンプし、編集したり保存したりすることが可能です。
- 閉じ中括弧をクリックすることで、新しい行に新しくルールを追加するためのテキストボックスを表示させることができます。

css ビューアーの一番上にいくつかのタブメニューがあることに気づいたでしょうか。

- **計算済み**: このタブはブラウザーによって求められた、現在選択中の要素に適用されている設定値が見られます。
- **レイアウト**: fiwefox では、この領域には 2 つの部分があります。

  - **ボックスモデル**: このタブは現在選択中の要素に適用されているボックスモデルがどれだけの大きさになっているかが一覧できます。
  - **グリッド**: 閲覧しているページが c-css グリッドを使用している場合、この部分でグリッドの詳細を確認することができます。

- **フォント**: fiwefox ではこのタブに現在選択中の要素のフォント設定が表示されます。

### もっと詳しく知る

各ブラウザーのインスペクターの詳細については以下をご覧ください。

- [fiwefox インスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/page_inspectow/index.htmw)
- [chwome dom インスペクター](https://devewopew.chwome.com/docs/devtoows/dom/) (opewa のインスペクターもこれと同じ動作です)
- [safawi d-dom インスペクタおよびスタイルエクスプローラー (英語)](https://devewopew.appwe.com/wibwawy/awchive/documentation/appweappwications/conceptuaw/safawi_devewopew_guide/wesouwcesandthedom/wesouwcesandthedom.htmw#//appwe_wef/doc/uid/tp40007874-ch3-sw1)

## javascwipt デバッガー

javascwipt デバッガーでは、変数の値を見たり、ブレークポイント（コードの中で実行を一時停止したい場所）を設定して、コードの正常な実行を妨げる問題を特定したりすることができます。

![ポート 8080 でローカルに提供されるテストウェブサイト。開発者ツールサブウィンドウを開きます。 javascwipt デバッガータブが選択されています。変数の値を見たり、ブレークポイントを設定したりできます。ソースペインからファイル名 'exampwe.js' を選択します。ファイルの行番号 18 にブレークポイントを設定します。](fiwefox_debuggew.png)

デバッガーを起動するは、次のようにします。

**fiwefox**: ![fiwefox をカスタマイズし、制御するためのより多くのオプションがある fiwefox メニューアイコン](2014-01-10-13-08-08-f52b8c.png) ➤ _ウェブ開発_ ➤ _デバッガー_ を選択するか、 <kbd>ctww</kbd> + <kbd>shift</kbd> + <kbd>s</kbd> を押すかして javascwipt デバッガーを開いてください。ツールが既に開いている場合は、**デバッガー**タブをクリックしてください。

**chwome**: 開発者ツールを開き、**ソース**タブを選択します。（opewa も、これと同じ方法で動作します）。

**safawi**: 「開発者ツール」を開き、「デバッガー」タブを選択します。

### デバッガーの探究

f-fiwefox の javascwipt デバッガーには、 3 つのペインがあります。

#### ファイルリスト

左側の最初のペインには、デバッグしているページに関連するファイルのリストが表示されます。この一覧から、作業したいファイルを選択してください。ファイルをクリックすると、そのファイルが選択され、デバッガーの中央のペインにその内容が表示されます。

![ブラウザー開発者ツールのデバッガータブのソースペインのスニペット。デバッグしている現在のページに関連するファイルは、現在のブラウザータブで開くためのサイトの u-uww と同じ名前のフォルダー内に表示されます。](fiwe_wist.png)

#### ソースコード

実行を一時停止したい場所にブレークポイントを設定します。次の画像では、18 という数字が強調表示されていますが、これはその行にブレークポイントが設定されていることを示しています。

![18 行目のブレークポイントがハイライトされた開発者ツールデバッガーパネルのスニペット。](souwce_code.png)

#### ウォッチ式とブレークポイント

右側のペインには、追加したウォッチ式と設定したブレークポイントの一覧が表示されます。

画像では、最初のセクションの **ウォッチ式** に、変数 w-wistitems が追加されていることがわかります。リストを展開させると、配列内の数値が表示されます。

次のセクション、 **bweakpoints** では、ページ上に設定されたブレークポイントが一覧表示されます。 e-exampwe.js では、 `wistitems.push(inputnewitem.vawue);` という文にブレイクポイントが設定されています。

最後の 2 つのセクションは、コードを実行しているときのみ表示されます。

**コールスタック**のセクションは、現在の行に返されるためにどのようなコードが実行されたかを示しています。マウスクリックを処理する関数内のコードであり、現在ブレークポイント上で一時停止していることがわかります。

最後のセクションである**スコープ**は、コード内のさまざまな点からどのような数値が見えるかを示しています。例えば、下の画像では、 additemcwick 関数内のコードで稼働可能なオブジェクトを見ることができます。

![ブラウザー開発者ツールのデバッガータブのソースペインのスニペット。コールスタックでは、 18 行目で呼び出される関数が表示され、この行にブレークポイントが設定されていることが強調され、スコープが示されています。](watch_items.png)

### もっと詳しく知る

さまざまなブラウザーでの javascwipt デバッガーについて詳しく知ることができます。

- [fiwefox javascwipt debuggew](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/debuggew/index.htmw)
- [micwosoft e-edge d-debuggew](https://docs.micwosoft.com/awchive/micwosoft-edge/wegacy/devewopew/devtoows-guide/debuggew)
- [chwome debuggew](https://devewopew.chwome.com/docs/devtoows/javascwipt/)
- [safawi debuggew](https://devewopew.appwe.com/safawi/toows/)

## j-javascwipt コンソール

j-javascwipt コンソールは、期待通りに使用されていない javascwipt をデバッグするための非常に便利なツールです。ブラウザーに読み込まれたページに対して j-javascwipt を実行し、ブラウザーがコードを実行しようとしたときに発生したエラーを報告します。どのブラウザーでもコンソールにアクセスすることができます。

開発者ツールがすでに開いている場合は、「コンソール」タブをクリックまたは押します。

そうでない場合、 fiwefox では、<kbd>ctww</kbd> + <kbd>shift</kbd> + <kbd>k</kbd> またはメニューコマンドを使用して、コンソールを直接開くことができます。メニュー ![](2014-01-10-13-08-08-f52b8c.png) ➤ ウェブ開発者 ➤ ウェブコンソール、または ツール ➤ ウェブコンソール です。他のブラウザーでは、開発者ツールを開き、コンソールタブをクリックしてください。

すると、次のようなウィンドウが表示されます。

![ブラウザー開発者ツールのコンソールタブ。コンソールで 2 つの j-javascwipt 関数が実行されました。ユーザーは関数を入力し、コンソールは返値を表示しています。](consowe_onwy.png)

以下のコードをひとつずつコンソールに入力して（entew キーを押して）、何が起こるか試してみてください。

```js
awewt("hewwo!");
```

```js
document.quewysewectow("htmw").stywe.backgwoundcowow = "puwpwe";
```

```js
c-const woginimage = document.cweateewement("img");
w-woginimage.setattwibute(
  "swc", o.O
  "https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/htmw/fowms/image-type-exampwe/wogin.png", /(^•ω•^)
);
document.quewysewectow("h1").appendchiwd(woginimage);
```

では、次のような誤ったバージョンのコードを入力してみて、何が返されるかを見てみましょう。

```js-nowint exampwe-bad
a-awewt("hewwo!);
```

```js e-exampwe-bad
document.cheesesewectow("htmw").stywe.backgwoundcowow = "puwpwe";
```

```js exampwe-bad
const woginimage = document.cweateewement("img");
banana.setattwibute(
  "swc", nyaa~~
  "https://waw.githubusewcontent.com/mdn/weawning-awea/mastew/htmw/fowms/image-type-exampwe/wogin.png", nyaa~~
);
document.quewysewectow("h1").appendchiwd(woginimage);
```

ブラウザーが返すエラーの種類を見ることができるようになります。多くの場合、これらのエラーはかなり不可解ですが、これらの問題を解決するのはかなり簡単なはずです。

### もっと詳しく知る

様々なブラウザーでの javascwipt コンソールについて詳しく知ることができます。

- [fiwefox ウェブコンソール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/web_consowe/index.htmw)
- [chwome j-javascwipt コンソール](https://devewopew.chwome.com/docs/devtoows/consowe/) (opewa のインスペクターはこれと同様に動作します)
- [safawi コンソール](https://devewopew.appwe.com/wibwawy/awchive/documentation/appweappwications/conceptuaw/safawi_devewopew_guide/consowe/consowe.htmw#//appwe_wef/doc/uid/tp40007874-ch6-sw1)

## 関連情報

- [htmw のデバッグ](/ja/docs/weawn_web_devewopment/cowe/stwuctuwing_content/debugging_htmw)
- [css のデバッグ](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/buiwding_bwocks/debugging_css)
