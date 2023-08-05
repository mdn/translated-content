---
title: ブラウザーの開発者ツールとは？
slug: Learn/Common_questions/Tools_and_setup/What_are_browser_developer_tools
---

近頃のブラウザーにはパワフルな開発者ツールが入っています。開発者ツールでは、現在の HTML や CSS、JavaScript の状態を検証したり、ページがどういった資産にアクセスし、どれだけ時間がかかったかといった多様なことができます。この記事ではブラウザーの開発者ツールの使い方について説明します。

> **メモ:** 下のサンプルを実行していく前に、[ウェブ入門](/ja/docs/Learn/Getting_started_with_the_web)の記事の中で作りあげる、[初心者向けウェブサイトの例](https://mdn.github.io/beginner-html-site-scripted/)を開いてください。後ほどこれを使って説明します。

## ブラウザーの開発者ツールの開き方

開発ツールは、使用するブラウザーによって異なりますが、おおよそ次のようなサブウインドウに表示されます。

![](devtools_63_inspector.png)

どのように開くのかというと、 3 つの方法があります。

- **_キーボード:_** _<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>I</kbd>_ ですが、以下のブラウザーでは異なります。

- **Internet Explorer および Edge:**

  <kbd>F12</kbd>

  - **macOS:** _<kbd>⌘</kbd> + <kbd>⌥</kbd> + <kbd>I</kbd>_

- **_メニューバー:_**

  - **Firefox:** ![](2014-01-10-13-08-08-f52b8c.png) メニュー ➤ ウェブ開発 ➤ 開発者ツールを開く
  - **Chrome:** その他のツール ➤ 開発者ツール
  - **Safari:** 開発 ➤ Web インスペクタ (もし、開発メニューが表示されていない場合は Safari ➤ 設定 ➤ 詳細 を開いて、メニューバーに[開発]メニューを表示 のチェックボックスをオンにします。)
  - **Opera** では 開発者用ツール ➤ Web インスペクタ

- **コンテキストメニュー:** ウェブページ上の項目で、長押しまたは右クリック (Mac では Ctrl + クリック) し、表示されたコンテキストメニューより**要素を調査**を選択してください（さらに、この方法では右クリックで選択した要素がハイライトされて表示されます）。

![](inspector_context.png)

## インスペクター: DOM の内容が見られる CSS エディター

開発者ツールはたいてい最初にインスペクターが開きます。インスペクターの見た目は下に示すスクリーンショットのような感じです。このツールは実行時/表示時に HTML の状態がどのようになっているか見せてくれます。また、CSS がどのようにページ内の要素に適用されているかも見られます。そして、 HTML と CSS をその場で簡単に編集し、ブラウザーのビューポートに表示されている結果に反映することができます。

![](inspector_highlighted.png)

もしインスペクターが表示されていない場合、

- インスペクタータブをタップまたはクリックしてください。
- Internet Explorer では、 DOM Explorer または <kbd>Ctrl</kbd> + <kbd>1</kbd> を押してください。
- Microsoft Edge や Opera では、要素をタップ／クリックしてください。
- Safari では、それに類するような名前はついていませんが、HTML が見えるでしょう。もし、画面に表示するように何も選択していなければ、スタイルボタンを押すことで CSS が見られます。

### DOM インスペクターについて詳しく知る

まずは、DOM インスペクター上の HTML の要素を右クリックして、コンテキストメニューを見てみましょう。メニューの表示はブラウザーによって異なりますが、重要な機能はほぼ同じです。

![](dom_inspector.png)

- **ノードを削除** (要素を削除の場合もあり) は現在選択中の要素を削除します。
- **HTML として編集** (属性を追加や、テキストの編集の場合もあり) はその場で HTML を編集し、結果を見ることができます。テストやデバッグの際にとても便利です。
- **hover / active / focus** 要素を強制的に選択した状態にトグルします。その状態での見た目を確認することができます。
- **コピー** 現在選択されている項目の HTML をコピーします。
- CSS パスをコピーする や、XPath をコピーする といったメニューがあるブラウザーもあります。これは CSS のセレクターや、現在の HTML要素への XPath 表現のコピーを可能とするものです。

それでは表示されている DOM を編集してみましょう。要素をダブルクリックしたり、右クリックして、HTML として編集を選んでみましょう。いろいろと変更してみても問題ありませんが、保存ができませんのでご注意を。

### CSS エディターについて詳しく知る

最初は CSS エディターは現在選択中の要素に適用されている CSS ルールを表示しています。

![](css_inspector.png)

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
- [Internet Explorer DOM エクスプローラー (英語)](<https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/dn255008(v=vs.85)>)
- [Chrome DOM インスペクタ](https://developer.chrome.com/docs/devtools/dom/) (Opera のインスペクタもこれと同じ動作です)
- [Safari DOM インスペクタおよびスタイルエクスプローラー (英語)](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/ResourcesandtheDOM/ResourcesandtheDOM.html#//apple_ref/doc/uid/TP40007874-CH3-SW1)

## JavaScript デバッガー

JavaScript デバッガーでは、変数の値を見たり、ブレークポイント（コードの中で実行を一時停止したい場所）を設定して、コードの正常な実行を妨げる問題を特定したりすることができます。

![](firefox_debugger.png)

デバッガーを起動するは、次のようにします。

**Firefox**: ![](2014-01-10-13-08-08-f52b8c.png) ➤ _ウェブ開発_ ➤ _デバッガー_ を選択するか、 <kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>S</kbd> を押すかして JavaScript デバッガーを開いてください。ツールが既に開いている場合は、**デバッガー**タブをクリックしてください。

**Chrome**: 開発者ツールを開き、**ソース**タブを選択します。（Operaも、これと同じ方法で動作します）。

**Edge および Internet Explorer 11**: <kbd>F12</kbd> を押してから <kbd>Ctrl</kbd> + <kbd>3</kbd> を押すか、 ツールがすでに表示されている場合は、デバッガータブをクリックしてください。

**Safari**: 「開発者ツール」を開き、「デバッガー」タブを選択します。

### デバッガーの探究

Firefox の JavaScript デバッガーには、 3 つのペインがあります。

#### ファイルリスト

左側の最初のペインには、デバッグしているページに関連するファイルのリストが表示されます。この一覧から、作業したいファイルを選択してください。ファイルをクリックすると、そのファイルが選択され、デバッガーの中央のペインにその内容が表示されます。

![](file_list.png)

#### ソースコード

実行を一時停止したい場所にブレークポイントを設定します。次の画像では、18 という数字が強調表示されていますが、これはその行にブレークポイントが設定されていることを示しています。

![](source_code.png)

#### ウォッチ式とブレークポイント

右側のペインには、追加したウォッチ式と設定したブレークポイントの一覧が表示されます。

画像では、最初のセクションの **Watch expressions** に、変数 listItems が追加されていることがわかります。リストを展開させると、配列内の数値が表示されます。

次のセクション、 **Breakpoints** では、ページ上に設定されたブレークポイントが一覧表示されます。 example.js では、 `listItems.push(inputNewItem.value);` という文にブレイクポイントが設定されています。

最後の 2 つのセクションは、コードを実行しているときのみ表示されます。

**Call stack** のセクションは、現在の行に返されるためにどのようなコードが実行されたかを示しています。マウスクリックを処理する関数内のコードであり、現在ブレークポイント上で一時停止していることがわかります。

最後のセクションである **Scopes** は、コード内のさまざまな点からどのような数値が見えるかを示しています。例えば、下の画像では、 addItemClick 関数内のコードで稼働可能なオブジェクトを見ることができます。

![](watch_items.png)

### もっと詳しく知る

さまざまなブラウザーでの JavaScript デバッガーについて詳しく知ることができます。

- [Firefox JavaScript Debugger](https://firefox-source-docs.mozilla.org/devtools-user/debugger/index.html))
- [Microsoft Edge Debugger](https://docs.microsoft.com/en-us/archive/microsoft-edge/legacy/developer/devtools-guide/debugger)
- [Chrome Debugger](https://developer.chrome.com/docs/devtools/javascript/)
- [Safari Debugger](https://developer.apple.com/safari/tools/)

## JavaScript コンソール

JavaScript コンソールは、期待通りに使用されていない JavaScript をデバッグするための非常に便利なツールです。ブラウザーに読み込まれたページに対して JavaScript を実行し、ブラウザーがコードを実行しようとしたときに発生したエラーを報告します。どのブラウザーでもコンソールにアクセスすることができます。

開発者ツールがすでに開いている場合は、「コンソール」タブをクリックまたは押します。

そうでない場合、Firefox では、<kbd>Ctrl</kbd> + <kbd>Shift</kbd> + <kbd>K</kbd> またはメニューコマンドを使用して、コンソールを直接開くことができます。メニュー ![](2014-01-10-13-08-08-f52b8c.png) \_➤ ウェブ開発者 ➤ ウェブコンソール、または \_ ツール ➤ ウェブコンソール\_ 他のブラウザーでは、開発者ツールを開き、コンソールタブをクリックしてください。

すると、次のようなウィンドウが表示されます。

![](console_only.png)

以下のコードをひとつずつコンソールに入力して（Enterキーを押して）、何が起こるか試してみてください。

```js
alert("hello!");
```

```js
document.querySelector("html").style.backgroundColor = "purple";
```

```js
const myWordmark = document.createElement("img");
myWordmark.setAttribute(
  "src",
  "https://blog.mozilla.org/press/wp-content/themes/OneMozilla/img/mozilla-wordmark.png",
);
document.querySelector("h1").appendChild(myWordmark);
```

では、次のような誤ったバージョンのコードを入力してみて、何が返されるかを見てみましょう。

```js example-bad
alert('hello!);
```

```js example-bad
document.cheeseSelector("html").style.backgroundColor = "purple";
```

```js example-bad
const myWordmark = document.createElement("img");
myBanana.setAttribute(
  "src",
  "https://blog.mozilla.org/press/wp-content/themes/OneMozilla/img/mozilla-wordmark.png",
);
document.querySelector("h1").appendChild(myWordmark);
```

ブラウザーが返すエラーの種類を見ることができるようになります。多くの場合、これらのエラーはかなり不可解ですが、これらの問題を解決するのはかなり簡単なはずです。

### もっと詳しく知る

様々なブラウザーでの JavaScript コンソールについて詳しく知ることができます。

- [Firefox Web Console](https://firefox-source-docs.mozilla.org/devtools-user/web_console/index.html)
- [IE JavaScript console](<https://docs.microsoft.com/en-us/previous-versions/windows/internet-explorer/ie-developer/samples/dn255006(v=vs.85)>)
- [Chrome JavaScript Console](https://developer.chrome.com/docs/devtools/console/) (Opera's inspector works the same as this)
- [Safari Console](https://developer.apple.com/library/archive/documentation/AppleApplications/Conceptual/Safari_Developer_Guide/Console/Console.html#//apple_ref/doc/uid/TP40007874-CH6-SW1)

## 関連情報

- [HTML のデバッグ](/ja/docs/Learn/HTML/Introduction_to_HTML/Debugging_HTML)
- [CSS のデバッグ](/ja/docs/Learn/CSS/Building_blocks/Debugging_CSS)
