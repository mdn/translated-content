---
title: ブラウザーの開発者ツールとは
slug: Learn_web_development/Howto/Tools_and_setup/What_are_browser_developer_tools
original_slug: Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools
l10n:
  sourceCommit: 6635942cfb4f8949f7b707a24cf428c57750a96d
---

{{QuicklinksWithSubPages("/ja/Learn/Common_questions")}}

最近のブラウザーにはパワフルな開発者ツールが入っています。開発者ツールでは、現在の HTML や CSS、JavaScript の状態を検証したり、ページがどういった資産にアクセスし、どれだけ時間がかかったかといった多様なことができます。この記事ではブラウザーの開発者ツールの使い方について説明します。

> [!NOTE]
> 下のサンプルを実行していく前に、[ウェブ入門](/ja/docs/Learn/Getting_started_with_the_web)の記事の中で作りあげる、[初心者向けウェブサイトの例](https://mdn.github.io/beginner-html-site-scripted/)を開いてください。後ほどこれを使って説明します。

## ブラウザーの開発者ツールの開き方

開発ツールは、使用するブラウザーによって異なりますが、おおよそ次のようなサブウインドウに表示されます。

![開発者ツールを開くためのブラウザーに表示された画面。ウェブページはブラウザー上半分に表示され、開発者ツールは下半分を占めています。開発者ツールを開くためのパネルが 3 つあります。 HTML は本体要素を選択した状態で、 CSS パネルはハイライトされた本体を対象とするスタイルブロックを示し、計算スタイルパネルは作成者スタイルをすべて示しています。ブラウザースタイルチェックボックスはチェックされていません。](devtools_63_inspector.png)

どのように開くのかというと、 3 つの方法があります。

- **_キーボード:_**

  - **Windows:** _<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>_ または <kbd>F12</kbd>

  - **macOS:** _<kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>I</kbd>_

- **_メニューバー:_**

  - **Firefox:** メニュー ![Firefox のハンバーガーメニューアイコンで、 Firefox をカスタマイズしたり制御したりするためのオプションがあります。](2014-01-10-13-08-08-f52b8c.png) ➤ ウェブ開発 ➤ 開発者ツールを開く
  - **Chrome:** その他のツール ➤ 開発者ツール
  - **Safari:** 開発 ➤ Web インスペクタ (もし、開発メニューが表示されていない場合は Safari ➤ 設定 ➤ 詳細 を開いて、メニューバーに[開発]メニューを表示 のチェックボックスをオンにします。)
  - **Opera** では 開発者用ツール ➤ Web インスペクタ

- **コンテキストメニュー:** ウェブページ上の項目で、長押しまたは右クリック (Mac では Ctrl + クリック) し、表示されたコンテキストメニューより**要素を調査**を選択してください。（さらに、この方法では右クリックで選択した要素がハイライトされて表示されます。）

![コンテキストメニューを表示させたウェブサイト（例）の DOM 要素としての Firefox ロゴ。ウェブページ上の項目を右クリックすると、コンテキストメニューが現れます。最後のメニューは「要素の検査」です。](inspector_context.png)

## インスペクター: DOM エクスプローラーと CSS エディター

開発者ツールはたいてい最初にインスペクターが開きます。インスペクターの見た目は下に示すスクリーンショットのような感じです。このツールは実行時/表示時に HTML の状態がどのようになっているか見せてくれます。また、CSS がどのようにページ内の要素に適用されているかも見られます。そして、 HTML と CSS をその場で簡単に編集し、ブラウザーのビューポートに表示されている結果に反映することができます。

![ブラウザーでテストウェブサイトをタブで開きます。ブラウザー開発者ツールのサブウィンドウが開いています。開発者ツールを開発するにはいくつかのタブがあります。インスペクターはそのうちの 1 つです。インスペクタータブには、ウェブサイトの HTML コードが表示されます。 HTML コードから画像タグを選択します。その結果、ウェブサイト内の選択されたタグに対応する画像がハイライト表示されます。](inspector_highlighted.png)

もしインスペクターが表示されていない場合、

- インスペクタータブをタップまたはクリックしてください。
- Chrome、Microsoft Edge、Opera では、要素をタップ／クリックしてください。
- Safari では、それに類するような名前はついていませんが、HTML が見えるでしょう。もし、画面に表示するように何も選択していなければ、スタイルボタンを押すことで CSS が見られます。

### DOM インスペクターについて詳しく知る

まずは、DOM インスペクター上の HTML の要素を右クリック（Ctrl + クリック）して、コンテキストメニューを見てみましょう。メニューの表示はブラウザーによって異なりますが、重要な機能はほぼ同じです。

![ブラウザー開発者ツールサブウィンドウを開きます。「インスペクター」タブが選択されています。「インスペクター」タブで利用できる HTML コードからリンク要素を右クリックします。コンテキストメニューが現れます。利用できるメニューオプションはブラウザーによって異なりますが、重要なものはほとんどのブラウザーで同じです。](dom_inspector.png)

- **ノードを削除** (要素を削除の場合もあり) は現在選択中の要素を削除します。
- **HTML として編集** (属性を追加や、テキストの編集の場合もあり) はその場で HTML を編集し、結果を見ることができます。テストやデバッグの際にとても便利です。
- **hover / active / focus** 要素を強制的に選択した状態に切り替えます。その状態での見た目を確認することができます。
- **コピー** 現在選択されている項目の HTML をコピーします。
- CSS パスをコピーする や、XPath をコピーする といったメニューがあるブラウザーもあります。これは CSS のセレクターや、現在の HTML要素への XPath 表現のコピーを可能とするものです。

それでは表示されている DOM を編集してみましょう。要素をダブルクリックしたり、右クリックして、HTML として編集を選んでみましょう。いろいろと変更してみても問題ありませんが、保存ができませんのでご注意を。

### CSS エディターについて詳しく知る

最初は CSS エディターは現在選択中の要素に適用されている CSS ルールを表示しています。

![ブラウザー開発者ツールで HTML エディターに隣接して表示される CSS パネルとレイアウトパネルのスニペット。既定では、 CSS エディターには、 HTML エディターで現在選択されている要素に適用されている CSS ルールが表示されます。レイアウトパネルは、選択された要素のボックスモデルプロパティを表示します。](css_inspector.png)

以下の機能は特に便利です。

- 現在の要素に適用されている CSS ルールが詳細度の高い順に表示されています。
- それぞれの宣言の隣にあるチェックボックスをクリックして、その宣言が消されるとどうなるかを試すことができます。
- 一括指定プロパティの隣にある矢印を開くと、それぞれの個別指定プロパティに対応する現在の値が表示されます。
- 各プロパティの名前か値をクリックすると、テキストボックスが表示され、変更することで、見た目のプレビューをその場で確認することができます。
- 各宣言の隣には、その宣言が書かれているファイル名と行数が表示されています。ほとんどの場合、クリックすると開発ツールのその場所にジャンプし、編集したり保存したりすることが可能です。
- 閉じ中括弧をクリックすることで、新しい行に新しくルールを追加するためのテキストボックスを表示させることができます。

CSS ビューアーの一番上にいくつかのタブメニューがあることに気づいたでしょうか。

- **計算済み**: このタブはブラウザーによって求められた、現在選択中の要素に適用されている設定値が見られます。
- **レイアウト**: Firefox では、この領域には 2 つの部分があります。

  - **ボックスモデル**: このタブは現在選択中の要素に適用されているボックスモデルがどれだけの大きさになっているかが一覧できます。
  - **グリッド**: 閲覧しているページが CSS グリッドを使用している場合、この部分でグリッドの詳細を確認することができます。

- **フォント**: Firefox ではこのタブに現在選択中の要素のフォント設定が表示されます。

### もっと詳しく知る

各ブラウザーのインスペクターの詳細については以下をご覧ください。

- [Firefox インスペクター](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/index.html)
- [Chrome DOM インスペクター](https://developer.chrome.com/docs/devtools/dom/) (Opera のインスペクターもこれと同じ動作です)
- [Safari DOM インスペクタおよびスタイルエクスプローラー (英語)](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/ResourcesandtheDOM/ResourcesandtheDOM.html#//apple_ref/doc/uid/TP40007874-CH3-SW1)

## JavaScript デバッガー

JavaScript デバッガーでは、変数の値を見たり、ブレークポイント（コードの中で実行を一時停止したい場所）を設定して、コードの正常な実行を妨げる問題を特定したりすることができます。

![ポート 8080 でローカルに提供されるテストウェブサイト。開発者ツールサブウィンドウを開きます。 JavaScript デバッガータブが選択されています。変数の値を見たり、ブレークポイントを設定したりできます。ソースペインからファイル名 'example.js' を選択します。ファイルの行番号 18 にブレークポイントを設定します。](firefox_debugger.png)

デバッガーを起動するは、次のようにします。

**Firefox**: ![Firefox をカスタマイズし、制御するためのより多くのオプションがある Firefox メニューアイコン](2014-01-10-13-08-08-f52b8c.png) ➤ _ウェブ開発_ ➤ _デバッガー_ を選択するか、 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> を押すかして JavaScript デバッガーを開いてください。ツールが既に開いている場合は、**デバッガー**タブをクリックしてください。

**Chrome**: 開発者ツールを開き、**ソース**タブを選択します。（Opera も、これと同じ方法で動作します）。

**Safari**: 「開発者ツール」を開き、「デバッガー」タブを選択します。

### デバッガーの探究

Firefox の JavaScript デバッガーには、 3 つのペインがあります。

#### ファイルリスト

左側の最初のペインには、デバッグしているページに関連するファイルのリストが表示されます。この一覧から、作業したいファイルを選択してください。ファイルをクリックすると、そのファイルが選択され、デバッガーの中央のペインにその内容が表示されます。

![ブラウザー開発者ツールのデバッガータブのソースペインのスニペット。デバッグしている現在のページに関連するファイルは、現在のブラウザータブで開くためのサイトの URL と同じ名前のフォルダー内に表示されます。](file_list.png)

#### ソースコード

実行を一時停止したい場所にブレークポイントを設定します。次の画像では、18 という数字が強調表示されていますが、これはその行にブレークポイントが設定されていることを示しています。

![18 行目のブレークポイントがハイライトされた開発者ツールデバッガーパネルのスニペット。](source_code.png)

#### ウォッチ式とブレークポイント

右側のペインには、追加したウォッチ式と設定したブレークポイントの一覧が表示されます。

画像では、最初のセクションの **ウォッチ式** に、変数 listItems が追加されていることがわかります。リストを展開させると、配列内の数値が表示されます。

次のセクション、 **Breakpoints** では、ページ上に設定されたブレークポイントが一覧表示されます。 example.js では、 `listItems.push(inputNewItem.value);` という文にブレイクポイントが設定されています。

最後の 2 つのセクションは、コードを実行しているときのみ表示されます。

**コールスタック**のセクションは、現在の行に返されるためにどのようなコードが実行されたかを示しています。マウスクリックを処理する関数内のコードであり、現在ブレークポイント上で一時停止していることがわかります。

最後のセクションである**スコープ**は、コード内のさまざまな点からどのような数値が見えるかを示しています。例えば、下の画像では、 addItemClick 関数内のコードで稼働可能なオブジェクトを見ることができます。

![ブラウザー開発者ツールのデバッガータブのソースペインのスニペット。コールスタックでは、 18 行目で呼び出される関数が表示され、この行にブレークポイントが設定されていることが強調され、スコープが示されています。](watch_items.png)

### もっと詳しく知る

さまざまなブラウザーでの JavaScript デバッガーについて詳しく知ることができます。

- [Firefox JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html)
- [Microsoft Edge Debugger](https://docs.microsoft.com/archive/microsoft-edge/legacy/developer/devtools-guide/debugger)
- [Chrome Debugger](https://developer.chrome.com/docs/devtools/javascript/)
- [Safari Debugger](https://developer.apple.com/safari/tools/)

## JavaScript コンソール

JavaScript コンソールは、期待通りに使用されていない JavaScript をデバッグするための非常に便利なツールです。ブラウザーに読み込まれたページに対して JavaScript を実行し、ブラウザーがコードを実行しようとしたときに発生したエラーを報告します。どのブラウザーでもコンソールにアクセスすることができます。

開発者ツールがすでに開いている場合は、「コンソール」タブをクリックまたは押します。

そうでない場合、 Firefox では、<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd> またはメニューコマンドを使用して、コンソールを直接開くことができます。メニュー ![](2014-01-10-13-08-08-f52b8c.png) ➤ ウェブ開発者 ➤ ウェブコンソール、または ツール ➤ ウェブコンソール です。他のブラウザーでは、開発者ツールを開き、コンソールタブをクリックしてください。

すると、次のようなウィンドウが表示されます。

![ブラウザー開発者ツールのコンソールタブ。コンソールで 2 つの JavaScript 関数が実行されました。ユーザーは関数を入力し、コンソールは返値を表示しています。](console_only.png)

以下のコードをひとつずつコンソールに入力して（Enter キーを押して）、何が起こるか試してみてください。

```js
alert("hello!");
```

```js
document.querySelector("html").style.backgroundColor = "purple";
```

```js
const loginImage = document.createElement("img");
loginImage.setAttribute(
  "src",
  "https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png",
);
document.querySelector("h1").appendChild(loginImage);
```

では、次のような誤ったバージョンのコードを入力してみて、何が返されるかを見てみましょう。

```js-nolint example-bad
alert("hello!);
```

```js example-bad
document.cheeseSelector("html").style.backgroundColor = "purple";
```

```js example-bad
const loginImage = document.createElement("img");
banana.setAttribute(
  "src",
  "https://raw.githubusercontent.com/mdn/learning-area/master/html/forms/image-type-example/login.png",
);
document.querySelector("h1").appendChild(loginImage);
```

ブラウザーが返すエラーの種類を見ることができるようになります。多くの場合、これらのエラーはかなり不可解ですが、これらの問題を解決するのはかなり簡単なはずです。

### もっと詳しく知る

様々なブラウザーでの JavaScript コンソールについて詳しく知ることができます。

- [Firefox ウェブコンソール](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
- [Chrome JavaScript コンソール](https://developer.chrome.com/docs/devtools/console/) (Opera のインスペクターはこれと同様に動作します)
- [Safari コンソール](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html#//apple_ref/doc/uid/TP40007874-CH6-SW1)

## 関連情報

- [HTML のデバッグ](/ja/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
- [CSS のデバッグ](/ja/docs/Learn/CSS/Building_blocks/Debugging_CSS)
