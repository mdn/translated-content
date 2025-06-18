---
title: window.dump()
slug: Web/API/Window/dump
---

{{ ApiRef() }}

{{Non-standard_header}}

## 概要

(システムの) コンソールにメッセージを表示します。

## 構文

```
window.dump(message);

dump(message);
```

- `message` はログ出力するメッセージの文字列です。

## 注記

`dump`() の一般的な使い方は、JavaScript のデバッグです。Firefox のプロセスが `-console` オプション付きで開始された場合、`dump`() に渡されたメッセージは、システムコンソール (ネイティブのコンソール) に送信されます。`-console` オプションが指定されていない場合、stderr に出力されます。dump() からの出力は [ブラウザーコンソール](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) に送信されません。[ブラウザーコンソール](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) への出力は、[console.log()](/ja/docs/Web/API/console/log_static) を使用してください。特権コードは、[`Components.utils.reportError`](/ja/docs/Components.utils.reportError) と [`nsIConsoleService`](/ja/docs/XPCOM_Interface_Reference/nsIConsoleService) を使用してメッセージを [エラーコンソール](/ja/docs/Error_Console) / [ブラウザーコンソール](https://firefox-source-docs.mozilla.org/devtools-user/browser_console/index.html) にログ出力することもできます。

`dump`() は、JavaScript で実装された XPCOM コンポーネントでも使用できます。これは、{{domxref("window")}} がコンポーネント内のグローバルオブジェクトでなくても使えます。また、[sandboxes](/ja/docs/Components.utils.Sandbox#Methods_available_on_the_Sandbox_object) 内で明示的に使用可能にすることもできます。しかし、この `dump` の使用は、後述の設定に影響せず、常に表示されます。この設定を自分で確認するか、独自のデバッグ設定で、多くのデバッグコンテンツを、これらに興味のないユーザのコンソールに送信されないようにすることをおすすめします。ただし、XPCOM コンポーネントからの `dump` 出力は `stderr` へ送られますが、別の場所から呼び出された `dump` は `stdout` へ出力されるので注意してください。

[Gecko](/ja/docs/Gecko) の `dump()` は **既定で無効** です。実行しても何も起こらず、エラーも発生しません。`dump` 出力を見るには、[about:config](http://kb.mozillazine.org/About:config) ページか [user.js ファイル](http://kb.mozillazine.org/User.js_file) で、`browser.dom.window.dump.enabled` 設定の値を `true` にしなければなりません。注記: この設定は既定では `about:config` のリストに表示されないので、新たに作成してください (about:config ページのコンテンツ領域を右クリックし、"新規作成" から "真偽値" を選択します)。

Windows では、dump の出力を見るにはコンソールを開く必要があります。まだコンソールを開いていなければ、一旦アプリケーションを閉じ、コマンドライン引数に `-console` を追加して再度開いてください。アプリケーションと同時にコンソールが開きます。または、`-attach-console` を追加すると既存のコンソールを使用します。他のオペレーティングシステムでは、ターミナルからプリケーションを開くだけです。

コンソール出力をファイルへリダイレクトするには、Firefox を `-console` オプション*無し*で起動し、次のコマンドで stderr と stdout の出力をファイルへリダイレクトしてください:

```
firefox > console.txt 2>&1
```

> [!NOTE]
> コンソールメッセージを、アプリケーションを起動したコンソールに表示させたいときは、[Gecko Console Redirector](https://github.com/matthewkastor/Redirector) を使用してください。プリコンパイルされたバイナリが <https://github.com/matthewkastor/Redirector/archive/master.zip> の ZIP アーカイブ内の `Redirector-master\Gecko\Console Redirector\bin\Release` に含まれています。すべての dll ファイルと exe ファイルをお好みの場所にコピーしてください。次に、`Console Redirector.exe /?` を実行します。

## 仕様書

これは、どの仕様にも含まれません。
