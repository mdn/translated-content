---
title: 初めての拡張機能
slug: Mozilla/Add-ons/WebExtensions/Your_first_WebExtension
---

{{AddonSidebar}}

この記事では、Firefox 用の拡張機能をどのように作ればよいのか、その初めから最後までを一通り説明します。この拡張機能は "mozilla.org" とそのサブドメインから読み込まれたページに赤い枠を付けるだけです。

このサンプルのソースコードは GitHub で公開しています（<https://github.com/mdn/webextensions-examples/tree/master/borderify>）。

これ以降は、バージョン 45 以降の Firefox が必要となります。

## 拡張機能を書く

新しいディレクトリーを作成し、そのディレクトリーに移動します。例えば、コマンドライン/ターミナルでは次のようにできます:

```bash
mkdir borderify
cd borderify
```

### manifest.json

それでは、"borderify" ディレクトリー配下に新しいファイル "manifest.json" を作成します。以下の内容を書き込んで保存してください。

```json
{
  "manifest_version": 2,
  "name": "Borderify",
  "version": "1.0",

  "description": "Adds a solid red border to all webpages matching mozilla.org.",

  "icons": {
    "48": "icons/border-48.png"
  },

  "content_scripts": [
    {
      "matches": ["*://*.mozilla.org/*"],
      "js": ["borderify.js"]
    }
  ]
}
```

- 最初の 3 つのキー [`manifest_version`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/manifest_version)、[`name`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/name)、[`version`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/version) は必須であり、拡張機能の基本的なメタデータを指定します。
- [`description`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/description) は省略可能ですが、設定しておくことをお勧めします。この値はアドオンマネージャーに表示されます。
- [`icons`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons) は省略可能ですが、設定しておくことをお勧めします。この値は拡張機能のアイコンを指定するものであり、アイコンはアドオンマネージャーに表示されます。

ここで最も興味深いキーは [`content_scripts`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts) です。このキーは、指定したパターンにマッチする URL のウェブページにスクリプトを読み込ませるよう Firefox に指示するものです。今回は、"borderify.js" というスクリプトを "mozilla.org" とそのサブドメインの HTTP / HTTPS ページすべてに読み込ませるように指定しています。

- [コンテンツスクリプト関する詳細](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)
- [マッチパターンに関する詳細](/ja/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)

> [!WARNING]
> [時折、あなたの拡張機能用に ID を指定する必要があります](/ja/docs/Mozilla/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID#when_do_you_need_an_add-on_id)。アドオンの ID が必要なとき、`manifest.json` 内に [`applications`](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/browser_specific_settings) キーを入れて `gecko.id` プロパティをセットします:
>
> ```json
> "applications": {
>   "gecko": {
>     "id": "borderify@example.com"
>   }
> }
> ```

### icons/border-48.png

拡張機能にはアイコンを用意すると良いでしょう。このアイコンは、アドオンマネージャーでアドオンのリスト横に表示されます。今回の manifest.json では "icons/border-48.png" を用意していると宣言しています。

まずは "borderify" ディレクトリーの下に "icons" ディレクトリーを作成します。次に、アイコンを "border-48.png" という名前で "icons" ディレクトリー内に保存します。必要であれば [サンプルで使用しているアイコン](https://github.com/mdn/webextensions-examples/blob/master/borderify/icons/border-48.png) を利用しても構いません（このアイコンは Google Material Design iconset から引用したものであり、[Creative Commons Attribution-ShareAlike](https://creativecommons.org/licenses/by-sa/3.0/) ライセンスの下で使用しています）。

ここでアイコンを自分で用意する場合は 48x48 ピクセルのサイズにする必要があります。高解像度のディスプレイには 96x96 ピクセルのアイコンを表示させたい場合は、manifest.json の `icons` オブジェクトに `96` というプロパティで設定してください。

```json
"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}
```

他の方法として、SVG ファイルを指定すれば正しく拡大・縮小されて表示されます。(しかし、SVG にテキストが含んだアイコンを使っている場合、SVG エディターの "convert to path" ツールでテキストを展開し、適切なサイズ/位置に拡大/縮小したくなるかもしれません。)

- [アイコンを指定する方法に関する詳細](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/icons)

### borderify.js

最後に、"borderify" ディレクトリーの下に "borderify.js" というファイルを作成します。次の内容を書き込んで保存してください。

```js
document.body.style.border = "5px solid red";
```

このスクリプトは、manifest.json の `content_scripts` キーで指定したパターンにマッチするページに読み込まれます。読み込まれたスクリプトは、そのページ自身のスクリプトと同じようにドキュメントへ直接アクセスします。

- [コンテンツスクリプトに関する詳細](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)

## 動かしてみよう

ここで、必要なファイルが正しい場所に保存されているか再確認してください。

```
borderify/
    icons/
        border-48.png
    borderify.js
    manifest.json
```

### インストール

Firefox の場合: [about:debugging](https://firefox-source-docs.mozilla.org/devtools-user/about_colon_debugging/index.html) ページを開いて、"この Firefox" (Firefox の新しいバージョンで)をクリックし、"一時的なアドオンを読み込む" をクリックし、アドオンのディレクトリーにあるファイルをどれか 1 つ選択します。

ここでインストールされたアドオンは Firefox を再起動するまで有効です。

あるいは、[web-ext](https://extensionworkshop.com/documentation/develop/getting-started-with-web-ext/) ツールを使ってコマンドラインから拡張機能を実行することもできます。

### テスト

> [!NOTE]
> デフォルトでは、[拡張機能はプライベートブラウジングでは動作しません](https://support.mozilla.org/ja/kb/extensions-private-browsing)。拡張機能をプライベートブラウジングでテストしたい場合は、 `about:addons` を開き、対象の拡張機能をクリックして、「プライベートウィンドウでの実行」を許可するラジオボタンを選択してください。

それでは "mozilla.org" 配下のページを開いてみましょう。ページが赤い枠で囲まれていることを確認できるはずです。

![mozilla.org に表示される赤い枠](border_on_mozilla_org.png)

> [!NOTE]
> ただ addons.mozilla.org では試さないで! このドメインでは現在、コンテンツスクリプトがブロックされています。

もう少し実験をします。コンテンツスクリプトを編集して、枠線の色を変更したり、ページのコンテンツに何か他の操作を加えてみましょう。コンテンツスクリプトを保存し、"about:debugging"の"再読み込み"ボタンをクリックして拡張機能ファイルを再読み込みすると、加えた変更がすぐに反映されているはずです。

- [拡張機能の読み込みに関する詳細](/ja/docs/Mozilla/Add-ons/WebExtensions/Packaging_and_installation#loading_from_disk)

## パッケージ化と公開

自分が作ったアドオンを他の人にも使ってもらうには、アドオンをパッケージとしてまとめた後、署名するために Mozilla へ送信する必要があります。詳細は[拡張機能の公開](https://extensionworkshop.com/documentation/publish/package-your-extension/)を参照してください。

## 次のステップ

これで Firefox 用 WebExtension の開発手順について概念を学ぶことが出来ました。それでは次のステップに進みましょう。

- [拡張機能の中身を詳しく学ぶ](/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [より複雑な拡張機能を書いてみる](/ja/docs/Mozilla/Add-ons/WebExtensions/Your_second_WebExtension)
- [拡張機能で利用できる JavaScript API を詳しく調べる](/ja/docs/Mozilla/Add-ons/WebExtensions/API)
