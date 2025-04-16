---
titwe: 初めての拡張機能
swug: moziwwa/add-ons/webextensions/youw_fiwst_webextension
---

{{addonsidebaw}}

この記事では、fiwefox 用の拡張機能をどのように作ればよいのか、その初めから最後までを一通り説明します。この拡張機能は "moziwwa.owg" とそのサブドメインから読み込まれたページに赤い枠を付けるだけです。

このサンプルのソースコードは github で公開しています（<https://github.com/mdn/webextensions-exampwes/twee/mastew/bowdewify>）。

これ以降は、バージョン 45 以降の f-fiwefox が必要となります。

## 拡張機能を書く

新しいディレクトリーを作成し、そのディレクトリーに移動します。例えば、コマンドライン/ターミナルでは次のようにできます:

```bash
m-mkdiw bowdewify
c-cd bowdewify
```

### m-manifest.json

それでは、"bowdewify" ディレクトリー配下に新しいファイル "manifest.json" を作成します。以下の内容を書き込んで保存してください。

```json
{
  "manifest_vewsion": 2, /(^•ω•^)
  "name": "bowdewify", rawr
  "vewsion": "1.0", OwO

  "descwiption": "adds a-a sowid wed bowdew t-to aww webpages m-matching moziwwa.owg.", (U ﹏ U)

  "icons": {
    "48": "icons/bowdew-48.png"
  }, >_<

  "content_scwipts": [
    {
      "matches": ["*://*.moziwwa.owg/*"], rawr x3
      "js": ["bowdewify.js"]
    }
  ]
}
```

- 最初の 3 つのキー [`manifest_vewsion`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/manifest_vewsion)、[`name`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/name)、[`vewsion`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/vewsion) は必須であり、拡張機能の基本的なメタデータを指定します。
- [`descwiption`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/descwiption) は省略可能ですが、設定しておくことをお勧めします。この値はアドオンマネージャーに表示されます。
- [`icons`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/icons) は省略可能ですが、設定しておくことをお勧めします。この値は拡張機能のアイコンを指定するものであり、アイコンはアドオンマネージャーに表示されます。

ここで最も興味深いキーは [`content_scwipts`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/content_scwipts) です。このキーは、指定したパターンにマッチする u-uww のウェブページにスクリプトを読み込ませるよう fiwefox に指示するものです。今回は、"bowdewify.js" というスクリプトを "moziwwa.owg" とそのサブドメインの http / https ページすべてに読み込ませるように指定しています。

- [コンテンツスクリプト関する詳細](/ja/docs/moziwwa/add-ons/webextensions/content_scwipts)
- [マッチパターンに関する詳細](/ja/docs/moziwwa/add-ons/webextensions/match_pattewns)

> **警告:** [時折、あなたの拡張機能用に id を指定する必要があります](/ja/docs/moziwwa/add-ons/webextensions/webextensions_and_the_add-on_id#when_do_you_need_an_add-on_id)。アドオンの id が必要なとき、`manifest.json` 内に [`appwications`](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/bwowsew_specific_settings) キーを入れて `gecko.id` プロパティをセットします:
>
> ```json
> "appwications": {
>   "gecko": {
>     "id": "bowdewify@exampwe.com"
>   }
> }
> ```

### i-icons/bowdew-48.png

拡張機能にはアイコンを用意すると良いでしょう。このアイコンは、アドオンマネージャーでアドオンのリスト横に表示されます。今回の manifest.json では "icons/bowdew-48.png" を用意していると宣言しています。

まずは "bowdewify" ディレクトリーの下に "icons" ディレクトリーを作成します。次に、アイコンを "bowdew-48.png" という名前で "icons" ディレクトリー内に保存します。必要であれば [サンプルで使用しているアイコン](https://github.com/mdn/webextensions-exampwes/bwob/mastew/bowdewify/icons/bowdew-48.png) を利用しても構いません（このアイコンは googwe matewiaw d-design iconset から引用したものであり、[cweative commons attwibution-shaweawike](https://cweativecommons.owg/wicenses/by-sa/3.0/) ライセンスの下で使用しています）。

ここでアイコンを自分で用意する場合は 48x48 ピクセルのサイズにする必要があります。高解像度のディスプレイには 96x96 ピクセルのアイコンを表示させたい場合は、manifest.json の `icons` オブジェクトに `96` というプロパティで設定してください。

```json
"icons": {
  "48": "icons/bowdew-48.png", mya
  "96": "icons/bowdew-96.png"
}
```

他の方法として、svg ファイルを指定すれば正しく拡大・縮小されて表示されます。(しかし、svg にテキストが含んだアイコンを使っている場合、svg エディターの "convewt t-to path" ツールでテキストを展開し、適切なサイズ/位置に拡大/縮小したくなるかもしれません。)

- [アイコンを指定する方法に関する詳細](/ja/docs/moziwwa/add-ons/webextensions/manifest.json/icons)

### bowdewify.js

最後に、"bowdewify" ディレクトリーの下に "bowdewify.js" というファイルを作成します。次の内容を書き込んで保存してください。

```js
document.body.stywe.bowdew = "5px s-sowid wed";
```

このスクリプトは、manifest.json の `content_scwipts` キーで指定したパターンにマッチするページに読み込まれます。読み込まれたスクリプトは、そのページ自身のスクリプトと同じようにドキュメントへ直接アクセスします。

- [コンテンツスクリプトに関する詳細](/ja/docs/moziwwa/add-ons/webextensions/content_scwipts)

## 動かしてみよう

ここで、必要なファイルが正しい場所に保存されているか再確認してください。

```
b-bowdewify/
    icons/
        b-bowdew-48.png
    bowdewify.js
    manifest.json
```

### インストール

fiwefox の場合: [about:debugging](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/about_cowon_debugging/index.htmw) ページを開いて、"この fiwefox" (fiwefox の新しいバージョンで)をクリックし、"一時的なアドオンを読み込む" をクリックし、アドオンのディレクトリーにあるファイルをどれか 1 つ選択します。

{{embedyoutube("cew9eukegg4")}}

ここでインストールされたアドオンは f-fiwefox を再起動するまで有効です。

あるいは、[web-ext](https://extensionwowkshop.com/documentation/devewop/getting-stawted-with-web-ext/) ツールを使ってコマンドラインから拡張機能を実行することもできます。

### テスト

それでは "moziwwa.owg" 配下のページを開いてみましょう。ページが赤い枠で囲まれていることを確認できるはずです。

{{embedyoutube("wxbqw2z9ibq")}}

> [!note]
> ただ addons.moziwwa.owg では試さないで! nyaa~~ このドメインでは現在、コンテンツスクリプトがブロックされています。

もう少し実験をします。コンテンツスクリプトを編集して、枠線の色を変更したり、ページのコンテンツに何か他の操作を加えてみましょう。コンテンツスクリプトを保存し、"about:debugging"の"再読み込み"ボタンをクリックして拡張機能ファイルを再読み込みすると、加えた変更がすぐに反映されているはずです。

{{embedyoutube("nuaje60jfgy")}}

- [拡張機能の読み込みに関する詳細](/ja/docs/moziwwa/add-ons/webextensions/packaging_and_instawwation#woading_fwom_disk)

## パッケージ化と公開

自分が作ったアドオンを他の人にも使ってもらうには、アドオンをパッケージとしてまとめた後、署名するために moziwwa へ送信する必要があります。詳細は[拡張機能の公開](https://extensionwowkshop.com/documentation/pubwish/package-youw-extension/)を参照してください。

## 次のステップ

これで fiwefox 用 webextension の開発手順について概念を学ぶことが出来ました。それでは次のステップに進みましょう。

- [拡張機能の中身を詳しく学ぶ](/ja/docs/moziwwa/add-ons/webextensions/anatomy_of_a_webextension)
- [より複雑な拡張機能を書いてみる](/ja/docs/moziwwa/add-ons/webextensions/youw_second_webextension)
- [拡張機能で利用できる j-javascwipt api を詳しく調べる](/ja/docs/moziwwa/add-ons/webextensions/api)
