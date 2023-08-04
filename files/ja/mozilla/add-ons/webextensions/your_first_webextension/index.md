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

- 最初の 3 つのキー [`manifest_version`](/ja/Add-ons/WebExtensions/manifest.json/manifest_version)、[`name`](/ja/Add-ons/WebExtensions/manifest.json/name)、[`version`](/ja/Add-ons/WebExtensions/manifest.json/version) は必須であり、拡張機能の基本的なメタデータを指定します。
- [`description`](/ja/Add-ons/WebExtensions/manifest.json/description) は省略可能ですが、設定しておくことをお勧めします。この値はアドオンマネージャーに表示されます。
- [`icons`](/ja/Add-ons/WebExtensions/manifest.json/icons) は省略可能ですが、設定しておくことをお勧めします。この値は拡張機能のアイコンを指定するものであり、アイコンはアドオンマネージャーに表示されます。

ここで最も興味深いキーは [`content_scripts`](/ja/Add-ons/WebExtensions/manifest.json/content_scripts) です。このキーは、指定したパターンにマッチする URL のウェブページにスクリプトを読み込ませるよう Firefox に指示するものです。今回は、"borderify.js" というスクリプトを "mozilla.org" とそのサブドメインの HTTP / HTTPS ページすべてに読み込ませるように指定しています。

- [コンテンツスクリプト関する詳細](/ja/Add-ons/WebExtensions/Content_scripts)
- [マッチパターンに関する詳細](/ja/Add-ons/WebExtensions/Match_patterns)

> **警告:** [時折、あなたの拡張機能用に ID を指定する必要があります](/ja/Add-ons/WebExtensions/WebExtensions_and_the_Add-on_ID#When_do_you_need_an_Add-on_ID)。アドオンの ID が必要なとき、`manifest.json` 内に [`applications`](/ja/Add-ons/WebExtensions/manifest.json/applications) キーを入れて `gecko.id` プロパティをセットします:
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

まずは "borderify" ディレクトリーの下に "icons" ディレクトリーを作成します。次に、アイコンを "border-48.png" という名前で "icons" ディレクトリー内に保存します。必要であれば [サンプルで使用しているアイコン](https://github.com/mdn/webextensions-examples/blob/master/borderify/icons/border-48.png) を利用しても構いません（このアイコンは Google Material Design iconset から引用したものであり、[Creative Commons Attribution-ShareAlike](http://creativecommons.org/licenses/by-sa/3.0/) ライセンスの下で使用しています）。

ここでアイコンを自分で用意する場合は 48x48 ピクセルのサイズにする必要があります。高解像度のディスプレイには 96x96 ピクセルのアイコンを表示させたい場合は、manifest.json の `icons` オブジェクトに `96` というプロパティで設定してください。

```json
"icons": {
  "48": "icons/border-48.png",
  "96": "icons/border-96.png"
}
```

他の方法として、SVG ファイルを指定すれば正しく拡大・縮小されて表示されます。(しかし、SVG にテキストが含んだアイコンを使っている場合、SVG エディターの "convert to path" ツールでテキストを展開し、適切なサイズ/位置に拡大/縮小したくなるかもしれません。)

- [アイコンを指定する方法に関する詳細](/ja/Add-ons/WebExtensions/manifest.json/icons)

### borderify.js

最後に、"borderify" ディレクトリーの下に "borderify.js" というファイルを作成します。次の内容を書き込んで保存してください。

```js
document.body.style.border = "5px solid red";
```

このスクリプトは、manifest.json の `content_scripts` キーで指定したパターンにマッチするページに読み込まれます。読み込まれたスクリプトは、そのページ自身のスクリプトと同じようにドキュメントへ直接アクセスします。

- [コンテンツスクリプトに関する詳細](/ja/Add-ons/WebExtensions/Content_scripts)

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

Firefox の場合: [about:debugging](/ja/docs/Tools/about:debugging) ページを開いて、"この Firefox" (Firefox の新しいバージョンで)をクリックし、"一時的なアドオンを読み込む" をクリックし、アドオンのディレクトリーにあるファイルをどれか 1 つ選択します。

{{EmbedYouTube("cer9EUKegG4")}}

ここでインストールされたアドオンは Firefox を再起動するまで有効です。

あるいは、[web-ext](/ja/docs/Mozilla/Add-ons/WebExtensions/Getting_started_with_web-ext) ツールを使ってコマンドラインから拡張機能を実行することもできます。

### テスト

それでは "mozilla.org" 配下のページを開いてみましょう。ページが赤い枠で囲まれていることを確認できるはずです。

{{EmbedYouTube("rxBQl2Z9IBQ")}}

> **メモ:** ただ addons.mozilla.org では試さないで! このドメインでは現在、コンテンツスクリプトがブロックされています。

もう少し実験をします。コンテンツスクリプトを編集して、枠線の色を変更したり、ページのコンテンツに何か他の操作を加えてみましょう。コンテンツスクリプトを保存し、"about:debugging"の"再読み込み"ボタンをクリックして拡張機能ファイルを再読み込みすると、加えた変更がすぐに反映されているはずです。

{{EmbedYouTube("NuajE60jfGY")}}

- [拡張機能の読み込みに関する詳細](/ja/Add-ons/WebExtensions/Packaging_and_installation#Loading_from_disk)

## パッケージ化と公開

自分が作ったアドオンを他の人にも使ってもらうには、アドオンをパッケージとしてまとめた後、署名するために Mozilla へ送信する必要があります。詳細は[拡張機能の公開](/ja/docs/Mozilla/Add-ons/WebExtensions/Publishing_your_WebExtension)を参照してください。

## 次のステップ

これで Firefox 用 WebExtension の開発手順について概念を学ぶことが出来ました。それでは次のステップに進みましょう。

- [拡張機能の中身を詳しく学ぶ](/ja/Add-ons/WebExtensions/Anatomy_of_a_WebExtension)
- [より複雑な拡張機能を書いてみる](/ja/Add-ons/WebExtensions/Your_second_WebExtension)
- [拡張機能で利用できる JavaScript API を詳しく調べる](/ja/Add-ons/WebExtensions/API)
