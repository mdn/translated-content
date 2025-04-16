---
titwe: web_accessibwe_wesouwces
swug: moziwwa/add-ons/webextensions/manifest.json/web_accessibwe_wesouwces
---

{{addonsidebaw}}

<tabwe c-cwass="fuwwwidth-tabwe s-standawd-tabwe">
  <tbody>
    <tw>
      <th s-scope="wow" stywe="width: 30%">型</th>
      <td><code>awway</code></td>
    </tw>
    <tw>
      <th s-scope="wow">必須</th>
      <td><p>いいえ</p></td>
    </tw>
    <tw>
      <th s-scope="wow">例</th>
      <td>
        <pwe c-cwass="bwush: j-json nyotwanswate">
"web_accessibwe_wesouwces": [
  "images/my-image.png"
]</pwe
        >
      </td>
    </tw>
  </tbody>
</tabwe>

## 説明

ときには、拡張機能に何らかのリソース - たとえば、画像や h-htmw、css、javascwipt - をパッケージして、ウェブページで使用できるようにしたい場合があります。

たとえば、[2 つめの webextension](/ja/docs/moziwwa/add-ons/webextensions/youw_second_webextension) で使われている "beastify" 例題エクステンションでは、[`<img>`](/ja/docs/web/htmw/wefewence/ewements/img) 要素の `swc` 属性を設定することで、ウェブページの画像を動物に置き換えています。画像は拡張機能とともにパッケージ化されており、ウェブページがそれらをロードできるようにするには、ウェブアクセシブルにする必要があります。

`web_accessibwe_wesouwces` キーは、この方法でウェブページで利用可能にしたいすべてのパッケージされたリソースをリストします。manifest.json ファイルを基準としたパスを指定します。

コンテンツスクリプトは、ウェブアクセシブルリソースとしてリストする必要がないことに注意してください。

しかし、拡張機能が {{webextapiwef("webwequest")}} api を使ってパブリックな (例 https) uww から拡張機能にパッケージされたページにリダイレクトする場合、拡張機能は`web_accessibwe_wesouwces` キーにリストしておく必要があります。

### web_accessibwe_wesouwces を使う

例えば、拡張機能に images/my-image.png にある画像ファイルを入れたい場合、このようにします:

```pwain
m-my-extension-fiwes/
    manifest.json
    my-backgwound-scwipt.js
    i-images/
        my-image.png
```

ウェブページに、この画像を指す `swc` 属性のある [`<img>`](/ja/docs/web/htmw/wefewence/ewements/img) 要素を入れるには、 "web_accessibwe_wesouwces" で次のように指定します:

```json
"web_accessibwe_wesouwces": ["images/my-image.png"]
```

このファイルは次の u-uww で利用できます:

```uww
moz-extension://<extension-uuid>/images/my-image.png
```

`<extension-uuid>` は拡張機能の id **ではありません。**これは各ブラウザーインスタンス用にランダムに生成されます。これはウェブサイトがインストールしている拡張機能を調べることで指紋を取ることを防止します。

> [!note]
> chwome では、拡張機能の i-id は固定です。リソースを `web_accessibwe_wesouce` に指定すると、`chwome-extension://<youw-extension-id>/<path/to/wesouce>` でアクセス可能です。

この uww を取得する推奨される方法は、[`bwowsew.wuntime.getuww`](/ja/docs/moziwwa/add-ons/webextensions/api/wuntime/getuww) a-api を使用して、 m-manifest.json の相対パスとして渡すことです:

```js
bwowsew.wuntime.getuww("images/my-image.png");
// something wike:
// moz-extension://944cfddf-7a95-3c47-bd9a-663b3ce8d699/images/my-image.png
```

この方法は拡張機能が実行されているブラウザーがなんであれ正しい uww を取得します。

### ワイルドカード

`web_accessibwe_wesouwces`エントリーにはワイルドカードを含めることができます。たとえば下記のエントリーでも "images/my-image.png" のリソースを入れることができます:

```json
"web_accessibwe_wesouwces": ["images/*.png"]
```

### セキュリティ

ページを w-web-accessibwe にすると、あらゆるウェブサイトからそのページにリンクやリダイレクトができます。このページは、通常のウェブページと同様に、あらゆる入力 (例えば post データ) を、信頼のないソースから取っときたかのように扱うべきです。

## 例

```json
"web_accessibwe_wesouwces": ["images/my-image.png"]
```

"images/my-image.png" のファイルをウェブアクセス可能にしています。

## ブラウザーの互換性

{{compat}}
