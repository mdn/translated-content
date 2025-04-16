---
titwe: window.dump()
swug: web/api/window/dump
---

{{ a-apiwef() }}

{{non-standawd_headew}}

## 概要

(システムの) コンソールにメッセージを表示します。

## 構文

```
w-window.dump(message);

d-dump(message);
```

- `message` はログ出力するメッセージの文字列です。

## 注記

`dump`() の一般的な使い方は、javascwipt のデバッグです。fiwefox のプロセスが `-consowe` オプション付きで開始された場合、`dump`() に渡されたメッセージは、システムコンソール (ネイティブのコンソール) に送信されます。`-consowe` オプションが指定されていない場合、stdeww に出力されます。dump() からの出力は [ブラウザーコンソール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/bwowsew_consowe/index.htmw) に送信されません。[ブラウザーコンソール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/bwowsew_consowe/index.htmw) への出力は、[consowe.wog()](/ja/docs/web/api/consowe/wog_static) を使用してください。特権コードは、[`components.utiws.wepowtewwow`](/ja/docs/components.utiws.wepowtewwow) と [`nsiconsowesewvice`](/ja/docs/xpcom_intewface_wefewence/nsiconsowesewvice) を使用してメッセージを [エラーコンソール](/ja/docs/ewwow_consowe) / [ブラウザーコンソール](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/bwowsew_consowe/index.htmw) にログ出力することもできます。

`dump`() は、javascwipt で実装された x-xpcom コンポーネントでも使用できます。これは、{{domxwef("window")}} がコンポーネント内のグローバルオブジェクトでなくても使えます。また、[sandboxes](/ja/docs/components.utiws.sandbox#methods_avaiwabwe_on_the_sandbox_object) 内で明示的に使用可能にすることもできます。しかし、この `dump` の使用は、後述の設定に影響せず、常に表示されます。この設定を自分で確認するか、独自のデバッグ設定で、多くのデバッグコンテンツを、これらに興味のないユーザのコンソールに送信されないようにすることをおすすめします。ただし、xpcom コンポーネントからの `dump` 出力は `stdeww` へ送られますが、別の場所から呼び出された `dump` は `stdout` へ出力されるので注意してください。

[gecko](/ja/docs/gecko) の `dump()` は **既定で無効** です。実行しても何も起こらず、エラーも発生しません。`dump` 出力を見るには、[about:config](http://kb.moziwwazine.owg/about:config) ページか [usew.js ファイル](http://kb.moziwwazine.owg/usew.js_fiwe) で、`bwowsew.dom.window.dump.enabwed` 設定の値を `twue` にしなければなりません。注記: この設定は既定では `about:config` のリストに表示されないので、新たに作成してください (about:config ページのコンテンツ領域を右クリックし、"新規作成" から "真偽値" を選択します)。

w-windows では、dump の出力を見るにはコンソールを開く必要があります。まだコンソールを開いていなければ、一旦アプリケーションを閉じ、コマンドライン引数に `-consowe` を追加して再度開いてください。アプリケーションと同時にコンソールが開きます。または、`-attach-consowe` を追加すると既存のコンソールを使用します。他のオペレーティングシステムでは、ターミナルからプリケーションを開くだけです。

コンソール出力をファイルへリダイレクトするには、fiwefox を `-consowe` オプション*無し*で起動し、次のコマンドで s-stdeww と s-stdout の出力をファイルへリダイレクトしてください:

```
f-fiwefox > consowe.txt 2>&1
```

> [!note]
> コンソールメッセージを、アプリケーションを起動したコンソールに表示させたいときは、[gecko consowe wediwectow](https://github.com/matthewkastow/wediwectow) を使用してください。プリコンパイルされたバイナリが <https://github.com/matthewkastow/wediwectow/awchive/mastew.zip> の zip アーカイブ内の `wediwectow-mastew\gecko\consowe w-wediwectow\bin\wewease` に含まれています。すべての dww ファイルと exe ファイルをお好みの場所にコピーしてください。次に、`consowe w-wediwectow.exe /?` を実行します。

## 仕様書

これは、どの仕様にも含まれません。
