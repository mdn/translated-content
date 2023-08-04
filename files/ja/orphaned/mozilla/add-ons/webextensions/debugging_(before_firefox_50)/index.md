---
title: デバッグ (Firefox 50 より前)
slug: orphaned/Mozilla/Add-ons/WebExtensions/Debugging_(before_Firefox_50)
---

{{AddonSidebar}}

> **メモ:** この記事では Firefox バージョン 50 よりも前で WebExtension API を使った拡張機能のデバッグする方法を説明しています。
>
> Firefox 50 以降をお使いの場合、[メイン記事の拡張機能をデバッグする](https://extensionworkshop.com/documentation/develop/debugging/)を見てください。

この記事では、既定でインストールされている Firefox 開発ツールを使って、WebExtension API で開発された拡張機能をどのようにデバッグするか説明します。Add-on SDK で開発したアドオンをデバッグする場合は、[アドオンデバッガー](/ja/docs/Mozilla/Add-ons/Add-on_Debugger) の解説を参照してください。

## 簡単なサンプル: notify-link-clicks-i18n

デバッグツールへの接続方法を、簡単なサンプル拡張機能 "notify-link-clicks-i18n" を用いて説明します。このコードは [GitHub の Extensions examples リポジトリ](https://github.com/mdn/webextensions-examples/tree/master/notify-link-clicks-i18n) で公開されています。

この拡張機能は以下から構成されています。

- バックグラウンドスクリプト "background-script.js"
- コンテンツスクリプト "content-script.js" （全てのページに読み込まれるスクリプト）

ページ上のリンクをクリックするという動作は、コンテンツスクリプトがイベントとして感知します。リンクがクリックされた際、リンクを含んだメッセージがコンテンツスクリプトからバックグラウンドスクリプトに送られます。

バックグラウンドスクリプトがメッセージを受け取ると、リンクを含んだ通知画面が表示されます。

"content-script.js" は次の通りです。

```js
/*
リンクがクリックされた場合、バックグラウンドページにメッセージを送信する。
このメッセージにはリンクの URL が含まれている。
*/
function notifyExtension(e) {
  var target = e.target;
  while ((target.tagName != "A" || !target.href) && target.parentNode) {
    target = target.parentNode;
  }
  if (target.tagName != "A")
    return;

  console.log("content script sending message");
  chrome.runtime.sendMessage({"url": target.href});
}

/*
 クリックイベントのリスナー関数に notifyExtension() を追加する
*/
window.addEventListener("click", notifyExtension);
```

"background-script.js" は次の通りです。

```js
/*
 受信したメッセージを記録する。
 続いて通知画面を表示する。
 この通知画面には、メッセージから読み取った URL が含まれている。
*/
function notify(message) {
  console.log("background script received message");
  var title = chrome.i18n.getMessage("notificationTitle");
  var content = chrome.i18n.getMessage("notificationContent", message.url);
  chrome.notifications.create({
    "type": "basic",
    "iconUrl": chrome.extension.getURL("icons/link-48.png"),
    "title": title,
    "message": content
  });
}

/*
 content script からのメッセージを受信するリスナ関数に `notify()` を追加する
*/
chrome.runtime.onMessage.addListener(notify);
```

以下の手順を実際に試してみる際は、 [webextensions-examples](https://github.com/mdn/webextensions-examples) リポジトリからコードを clone し、"notify-link-clicks-i18n" を [インストールしてください](/ja/docs/orphaned/Mozilla/Add-ons/WebExtensions/Temporary_Installation_in_Firefox)。

## ブラウザーツールボックス

拡張機能をデバッグするには [ブラウザーツールボックス](/ja/docs/Tools/Browser_Toolbox) を使用します。

### 前提条件

ブラウザーツールボックスを使用する準備として、以下の手順を踏む必要があります。

- Firefox 開発ツールを開く (Shift+Ctrl+I / F12)
- [設定](/ja/docs/Tools/Settings) タブ（歯車のアイコン）を開く
- "詳細な設定" において下記の設定項目にチェックが入っているか確認する。

  - _ブラウザーとアドオンのデバッガーを有効_
  - _リモートデバッグを有効_

{{EmbedYouTube("LJAM2vXJ790")}}

### ブラウザーツールボックスを開く

次に、ブラウザーツールボックスを開きます。

- Firefox のウェブ開発者メニューを開き、「ブラウザーツールボックス」を選択してください。 (注: 「ブラウザーコンソール」では*ありません*。)
- 警告ダイアログが出るかもしれませんが OK を押してください。

ブラウザーツールボックスが新しいウインドウとして開きます。ここで Firefox のメインウィンドウが前面に表示された場合は、ブラウザーツールボックスが前に表示されるように画面をクリックしてください。

{{EmbedYouTube("fZ492zAAy3o")}}

Firefox における "ツールボックス" とは、下図のように複数のツールがタブで区切られているウインドウの名前です。

![](browser-toolbox.png)上記のツールボックスには 5 つのツール、"Inspector" / "Console" / "Debugger" / "Style Editor" / "Scratchpad" が含まれており、ウインドウの上部にあるタブで切り替えることができます。この記事では "Console（コンソール）" と "Debugger（デバッガー）" の 2 つのツールを使用します。

### ログの出力を見る

コンソールタブでログを見ることができます。ここに表示されるメッセージは以下から出力されたものです。

- バックグラウンドスクリプト
- ポップアップの中で動作しているスクリプト
- コンテンツスクリプト

このメッセージには、[Console API](/ja/docs/Web/API/console) を使用しているコードから出力されたログも含まれています。また、JavaScript エンジンからもエラーメッセージが出力されます。

それでは上記のサンプルを使って試してみましょう。ブラウザーツールボックスのコンソールタブを選択し、何かしらの Web ページを開き、リンクをクリックし、コンテンツスクリプトやバックグラウンドスクリプトからメッセージが記録されるのを確認してみましょう。

{{EmbedYouTube("Qpx0n8gP3Qw")}}

ただし、ブラウザーツールボックスはどんなメッセージも受け取るため、要らないメッセージも多く受け取ってしまう問題があります。この問題を解決するには[フィルタリングと検索](/ja/docs/Tools/Web_Console/Console_messages#filtering_and_searching)を参照してください。

### JavaScript をデバッグする

ブラウザーツールボックスを用いると、バックグラウンドスクリプトやブラウーザ上で動作しているスクリプト、ポップアップのページアクションで動作するスクリプトに対し、 JavaScript デバッガーでブレークポイントを設定することができます。

拡張機能がインストールされて有効になっていれば、デバッガーでバックグラウンドスクリプトにアクセスできます。ポップアップスクリプトは、ポップアップが表示されている間だけ見ることができます。ポップアップスクリプトが読み込まれた時点ですぐにデバッガーからアクセスしたい場合は、スクリプトの最初に [`debugger;`](/ja/docs/Web/JavaScript/Reference/Statements/debugger) 文を挿入してみてください。

JavaScript デバッガーを使用するには、まずはブラウザーツールボックスのデバッガータブを選択してください。そこにはブラウザーで動いている全てのソースコードが表示されていますので、[検索ボックスをクリックしてソースの名前を入力し](/ja/docs/Tools/Debugger/How_to/Search)、自分の拡張機能のコードを探してください。

自分のソースを見つかったら、ブレークポイントをコードに設定したり、コードをステップ実行したり、[他にもデバッガーに可能なことは何でも実行できます](/ja/docs/Tools/Debugger)。

{{EmbedYouTube("3edeJiG38ZA")}}

### JavaScript コマンドラインインタープリター

コンソールには [コマンドラインインタープリター](/ja/docs/Tools/Web_Console/The_command_line_interpreter) が含まれており、実行しているプログラムの状態を調べたり操作することができます。この機能はコンソールをウェブページに接続されている場合によく使いますが、ブラウザーツールボックスでは、コンソールのスコープが、デバッグしようとしている特定の拡張機能ではなく、ブラウザー全体になるため、一般的に使用することが難しくなります。

とはいえ、そんな時に役立つコツがあります。デバッガーがブレークポイントで一時停止している間、コンソールのスコープは、デバッガーが一時停止しているプログラムの位置でのスコープになります。そのため、拡張機能のコードでブレークポイントに当たると、拡張機能の関数を呼び出したり、変数の値を再設定したりといった具合に、拡張機能と直接やりとりすることができます。

この機能は特に、[分割コンソール](/ja/docs/Tools/Web_Console/Split_console)機能と組み合わせると役立ちます。これによってツールボックスを半分に分割することができます。半分はコンソールになり、もう半分は別なコンソールになります (この場合は JavaScript デバッガーです)。

{{EmbedYouTube("xprf58qOtLY")}}

### コンテンツスクリプトのデバッグ

ブラウザーツールボックスには大きな制約が 1 つあります。それは、[マルチプロセス Firefox](/ja/docs/Mozilla/Firefox/Multiprocess_Firefox) で開発している場合に、 JavaScript Debugger からコンテンツスクリプトにアタッチできない点です。

マルチプロセス Firefox では 2 つ (以上) のプロセスに分かれています。ブラウザー自身の UI やシステムコードを実行するプロセスと、ウェブページから読み込まれたスクリプトを実行する 1 つ (または複数) の*コンテンツプロセス*がです。ブラウザーツールボックスは、これらのプロセスのうち、最初のプロセスに接続されます。しかし、コンテンツスクリプトはコンテンツプロセスで実行されるため、ブラウザーツールボックスのソースリストには表示されません。

コンテンツスクリプトスクリプトをマルチプロセス Firefox でデバッグする場合は、 Browser Content Toolbox を使用してください。 Browser Content Toolbox はブラウザーツールボックスによく似ていますが、開発ツールをブラウザーのコンテンツプロセスにアタッチさせる点で異なり、コンテンツスクリプトにアクセスできるようになります。

コンテンツスクリプトは、ロードされるまでソースリストに表示されないことに注意してください。読み込み後すぐにアクセスする必要がある場合は、スクリプトの先頭に [`debugger;`](/ja/docs/Web/JavaScript/Reference/Statements/debugger) 文を追加してみてください。

> **メモ:** この Browser Content Toolbox は、マルチプロセス Firefox で開発している場合にのみ必要なものであり、またその場合のみ利用可能です。

> **警告:** ツールボックスのオプションでワーカーのデバッグを有効にすると、 Browser Content Toolbox でのデバッグができなくなります ([Bug 1236892](https://bugzilla.mozilla.org/show_bug.cgi?id=1236892))。

{{EmbedYouTube("xAt3Q0PgJP4")}}

### ポップアップのデバッグ

Firefox 47 の新機能

Firefox 47 から、ブラウザーツールボックスでポップアップの中身をデバッグできるようになりました。デバッグは 3 つの手順からなります。

- パネルの autohide を無効化する
- ポップアップを開く
- ポップアップを含んだ文書を選択する

{{EmbedYouTube("EEU4NeAS1s4")}}

#### autohide を無効化する

パネルのデバッグに関してありがちな問題は、パネルの外をクリックすると隠れてしまう点です。そのため、まず初めにこの動作を無効化しておきましょう。ブラウザーツールボックスで 4 つの小さい四角形からなるアイコンをクリックします。

![](disable-autohide.png)すると、 Esc キーを押した場合でもパネルが前面に表示されたままになるはずです。

> **メモ:** ここで設定した authohide の無効化は、拡張機能のポップアップだけでなく、 [ブラウザー本体のポップアップ](/ja/docs/Tools/Browser_Toolbox#debugging_popups) (ハンバーガーメニュー ![](hamburger.png) など) にも適用されます。
>
> また、この設定はブラウザーを再起動した後も引き継がれます。この件に関しては [bug 1251658](https://bugzilla.mozilla.org/show_bug.cgi?id=1251658) で修正中ですが、現時点ではブラウザーツールボックスを閉じる前に autohide を再び有効にしておくと良いでしょう。
>
> ブラウザーの内部構造的には、この autohide ボタンは `ui.popup.disable_autohide` の設定項目を切り替えるだけのものです。そのため、about:config において手動で切り替えることも可能です。

#### ポップアップを開く

次にポップアップを開きます。ここでブラウザーツールボックスに戻ると、パネルが開いたままになっているはずです。

#### ポップアップのフレームを選択する

ポップアップはそれ自身のフレームに読み込まれています。そのため、ブラウザーツールボックスの [フレーム選択ボタン](/ja/docs/Tools/Browser_Toolbox#targeting_a_document) でポップアップのドキュメントを選択します。![](frame-selection.png)このドキュメントは以下のような名前を持っています。

```
moz-extension://<some-uuid>/path/to/your-popup.html
```

{{EmbedYouTube("9jdHDCKIN-U")}}

こうしてツールボックスのスコープがポップアップに設定されました。インスペクタでポップアップの HTML や CSS の確認・変更が行えます。デバッガーでは、ポップアップに読み込まれているスクリプトを検索したり、スクリプトにブレークポイントを設定することができます。

## Add-on Debugger とは

Firefox での拡張機能のデバッグは、今後 [Add-on Debugger](/ja/docs/Mozilla/Add-ons/Add-on_Debugger) が用いられる予定になっています。

ブラウザーツールボックスと比較した際、 [Add-on Debugger](/ja/docs/Mozilla/Add-ons/Add-on_Debugger) は拡張機能ファイルのみを表示するため、容易にスクリプトを探すことができるという大きな利点があります。しかし今のところ、コンソールメッセージを拡張機能から Add-on Debugger へ表示させられないため、ブラウザーツールボックスのほうが便利です。
