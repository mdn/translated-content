---
title: 初めての拡張機能
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
l10n:
  sourceCommit: c09f7c12c1c39924c492b63e5c284f64c2380b4a
---

この記事では、Firefox 用の拡張機能をどのように作ればよいのか、その初めから最後までを一通り説明します。この拡張機能は `mozilla.org` とそのサブドメインから読み込まれたページに赤い枠を付けるだけです。

この[サンプルのソースコードは GitHub で公開しています](https://github.com/mdn/webextensions-examples/tree/main/borderify)。

## 拡張機能を書く

「ドキュメント」フォルダーなど、適切な場所に "borderify" という名前付きのディレクトリーを作成し、そのディレクトリーに移動してください。この操作は、お使いのコンピューターのファイルエクスプローラーまたはコマンドラインターミナルを使用して行うことができます。

コマンドラインターミナルの使用方法を理解することは、ソフトウェア開発において役立つスキルです。ターミナルの使用に慣れていない場合は、[コマンドラインの短期集中講座](/ja/docs/Learn_web_development/Getting_started/Environment_setup/Command_line)を調べてください。

ターミナルを使用して、このようにディレクトリーを作成してください。

```bash
mkdir borderify
cd borderify
```

### manifest.json

適切な[エディター](/ja/docs/Learn_web_development/Howto/Tools_and_setup/Available_text_editors)を使用して、"borderify" ディレクトリー内に "manifest.json" という名前のファイルを作成してください。そのファイルには、以下の内容を記述してください。

```json
{
  "manifest_version": 3,
  "name": "Borderify",
  "version": "1.0",

  "description": "Adds a red border to all webpages matching mozilla.org.",

  "icons": {
    "48": "icons/border-48.png"
  },

  "browser_specific_settings": {
    "gecko": {
      "id": "borderify@mozilla.org",
      "data_collection_permissions": {
        "required": ["none"]
      }
    }
  },

  "content_scripts": [
    {
      "matches": ["*://*.mozilla.org/*"],
      "js": ["borderify.js"]
    }
  ]
}
```

- 最初の 3 つのキー（[`manifest_version`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version)、[`name`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name)、[`version`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version)）は必須であり、拡張機能の基本的なメタデータを指定します。
- [`description`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) は Safari では必須ですが、それ以外のブラウザーでは任意です。ただし、このプロパティはブラウザーの拡張機能マネージャー（例えば Firefox の `about:addons` など）に表示されるため、設定しておくことをお勧めします。
- [`icons`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) は省略可能ですが、設定しておくことをお勧めします。この値は拡張機能のアイコンを指定するものであり、アイコンはアドオンマネージャーに表示されます。
- [`browser_specific_settings`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) は Firefox で必須です。
  - `gecko` プロパティは、addons.mozilla.org および Firefox に、その拡張機能に関する追加の情報を提供します。
    - [`id`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#id) は、拡張機能の固有の識別子を定義します。addons.mozilla.org (AMO) に拡張機能を公開すべき場合は、このプロパティを宣言する必要があります。
    - [`data_collection_permissions`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings#data_collection_permissions) は、拡張機能が個人を特定できる情報を収集および送信するかどうかに関する情報を指定します。このプロパティは、addons.mozilla.org (AMO) に拡張機能を公開するために宣言する必要があります。この例では、いかなるデータも収集または送信しません。

これまで、これらの `manifest.json` キーは拡張機能に関する情報を提供してきました。次のキーである [`content_scripts`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) では、拡張機能の機能の定義が始まります。このキーは、指定したパターンに一致する URL のウェブページにスクリプトを読み込ませるよう Firefox に指示するものです。今回は、"borderify.js" というスクリプトを "mozilla.org" とそのサブドメインの HTTP / HTTPS ページすべてに読み込ませるように指定しています。

- [コンテンツスクリプト関する詳細](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [マッチパターンに関する詳細](/ja/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)

### icons/border-48.png

Firefox は、ツールバーやアドオンマネージャー (`about:addons`) など、インターフェースのさまざまな箇所にあるアイコンによって拡張機能を識別します。ユーザーがアイコンを指定しない限り、Firefox はデフォルトのアイコンを使用します。拡張機能を公開する際、アイコンはユーザーがあなたの拡張機能を識別するための役立つ手段となります。

この例の manifest.json では、アイコンが "icons/border-48.png" にあることを Firefox に指示します。

まずは "borderify" ディレクトリーの下に "icons" ディレクトリーを作成します。次に、アイコンを "border-48.png" という名前で "icons" ディレクトリー内に保存します。必要であれば [サンプルで使用しているアイコン](https://github.com/mdn/webextensions-examples/blob/master/borderify/icons/border-48.png) を利用しても構いません（このアイコンは Google Material Design iconset から引用したものであり、[Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/3.0/) ライセンスの下で使用しています）。

ここでアイコンを自分で用意する場合は 48x48 ピクセルのサイズにする必要があります。高解像度のディスプレイには 96x96 ピクセルのアイコンを表示させたい場合は、manifest.json の `icons` オブジェクトに `96` というプロパティで設定してください。

```json
"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}
```

他の方法として、SVG ファイルを指定すれば正しく拡大・縮小されて表示されます。(しかし、SVG にテキストが含んだアイコンを使っている場合、SVG エディターの "convert to path" ツールでテキストを展開し、適切なサイズ/位置に拡大/縮小したくなるかもしれません。)

[アイコンを指定する方法に関する詳細](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons)

### borderify.js

最後に、"borderify" ディレクトリーの下に "borderify.js" というファイルを作成します。次の内容を書き込んで保存してください。

```js
document.body.style.border = "5px solid red";
```

このスクリプトは、manifest.json の `content_scripts` キーで指定したパターンにマッチするページに読み込まれます。読み込まれたスクリプトは、そのページ自身のスクリプトと同じようにドキュメントへ直接アクセスします。

- [コンテンツスクリプトに関する詳細](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)

## 動かしてみよう

ここで、必要なファイルが正しい場所に保存されているか再確認してください。

```plain
borderify/
    icons/
        border-48.png
    borderify.js
    manifest.json
```

### インストール

Firefox の場合、[about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) ページを開いて、"この Firefox" (Firefox の新しいバージョンで)をクリックし、"一時的なアドオンを読み込む" をクリックし、アドオンのディレクトリーにあるファイルをどれか 1 つ選択します。

ここでインストールされたアドオンは Firefox を再起動するまで有効です。

あるいは、[web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) ツールを使ってコマンドラインから拡張機能を実行することもできます。

### テスト

> [!NOTE]
> デフォルトでは、[拡張機能はプライベートブラウジングでは動作しません](https://support.mozilla.org/ja/kb/extensions-private-browsing)。拡張機能をプライベートブラウジングでテストしたい場合は、 `about:addons` を開き、対象の拡張機能をクリックして、「プライベートウィンドウでの実行」を許可するラジオボタンを選択してください。

それでは `https://www.mozilla.org/ja/` 配下のページを開いてみましょう。ページが赤い枠で囲まれていることを確認できるはずです。

![mozilla.org に表示される赤い枠](border_on_mozilla_org.png)

> [!NOTE]
> ただ `addons.mozilla.org` では試さないで! このドメインでは現在、コンテンツスクリプトがブロックされています。

もう少し実験をします。コンテンツスクリプトを編集して、枠線の色を変更したり、ページのコンテンツに何か他の操作を加えてみましょう。コンテンツスクリプトを保存し、`about:debugging` の**再読み込み**ボタンをクリックして拡張機能ファイルを再読み込みすると、加えた変更がすぐに反映されているはずです。

[拡張機能の読み込みに関する詳細](https://extensionworkshop.com/documentation/develop/temporary-installation-in-firefox/)

## パッケージ化と公開

自分が作ったアドオンを他の人にも使ってもらうには、アドオンをパッケージとしてまとめた後、署名するために Mozilla へ送信する必要があります。詳細は[拡張機能の公開](https://extensionworkshop.com/documentation/publish/package-your-extension/)を参照してください。

## 次のステップ

これで Firefox 用 WebExtension の開発手順について概念を学ぶことが出来ました。それでは次のステップに進みましょう。

- [より複雑な拡張機能を書く](/ja/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension)
- [拡張機能の中身を詳しく学ぶ](/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [拡張機能の例](/ja/docs/Mozilla/Add-ons/WebExtensions/Examples)
- [次にどうするのか？](/ja/docs/Mozilla/Add-ons/WebExtensions/What_next)
- [学習体験を続ける](/ja/docs/Mozilla/Add-ons/WebExtensions/What_next#学習体験を続ける)
