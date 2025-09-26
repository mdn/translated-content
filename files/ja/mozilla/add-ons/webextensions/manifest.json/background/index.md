---
title: background
slug: Mozilla/Add-ons/WebExtensions/manifest.json/background
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 30%">種類</th>
      <td><code>Object</code></td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">例</th>
      <td>
        <pre class="brush: json no-line-numbers">
"background": {
  "scripts": ["background.js"]
}</pre
        >
      </td>
    </tr>
  </tbody>
</table>

`background` を使って拡張機能に 1 つ以上のバックグラウンドスクリプトや、オプションとしてバックグラウンドページを含めます。

バックグラウンドスクリプトは、特定のウェブページやブラウザーウィンドウとは独立した、長い期間の状態や、長い期間の操作を維持する必要があるコードを置く場所です。

`persistent` が `false` と指定されている場合を除き、バックグラウンドスクリプトは拡張機能が読み込まれるとすぐに読み込まれて、拡張機能が無効化やアンインストールされるまで読み込まれたままになります。スクリプト内では、必要な [permissions](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/permissions) を要求している限り、あらゆる WebExtension APIs を使用できます

詳しくは [拡張機能の中身](/ja/docs/Mozilla/Add-ons/WebExtensions/Anatomy_of_a_WebExtension#background_pages)の「バックグラウンドページ」の節を見てください。

`background` キーは次の 2 つのプロパティ(両方ともオプションです)のうち 1 つを持つオブジェクトです:

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>"scripts"</code></td>
      <td>
        <p>
          文字列配列であり、各要素は JavaScript ファイルへのパスです。パスは
          manifest.json
          を基準にした相対パスです。これらは、拡張機能に含まれるバックグラウンドスクリプトです。
        </p>
        <p>
          これらのスクリプトは、同じグローバル
          <code>window</code> を共有します。
        </p>
        <p>これらのスクリプトは、配列内の出現順で読み込まれます。</p>
        <p>
          <code>"scripts"</code>
          を指定したときは、スクリプトを実行するための空のバックグラウンドページが作られます。
        </p>
        <div class="note">
          <p>
            <strong>注:</strong>
            <code>&#x3C;script></code>
            タグを使って外部からスクリプトを取り込む場合 (例:
            <code
              >&#x3C;script src =
              "https://code.jquery.com/jquery-1.7.1.min.js"></code
            >)、拡張機能の manifest.json で
            <code
              ><a
                href="/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_security_policy"
                >content_security_policy</a
              ></code
            >
            キーを変更する必要があります。
          </p>
        </div>
        <div class="note">
          <p>
            <strong>注:</strong> Firefox 50
            より前のバージョンにはこれに影響するバグがあることに注意してください。Firefox
            のデバッガーが開いているときは、必ずしも配列内の出現順でスクリプトが読み込まれるとは限りません。このバグに対処するには、<code
              >"page"</code
            >
            プロパティを使い、そのページから
            <code>&#x3C;script></code>
            タグによってバックグラウンドスクリプトを読み込んでください。このバグは
            Firefox 50
            で修正され、それ以降は常に配列内の出現順でスクリプトが読み込まれます。
          </p>
        </div>
      </td>
    </tr>
    <tr>
      <td><code>"page"</code></td>
      <td>
        <p>
          もしバックグラウンド ページに何か内容を持たせたい場合、そのページを
          <code>"page"</code> により指定することができます。 manifest.json
          から拡張機能の中に含まれるHTMLドキュメントを参照するためのパス文字列の
          <code>String</code> を指定します。
        </p>
        <p>
          このプロパティを使うときは、<code>"scripts"</code>
          を使ってバックグラウンドスクリプトを指定することはできませんが、通常のウェブページと同じように、バックグラウンドページ内からスクリプトを読み込むことができます。
        </p>
      </td>
    </tr>
  </tbody>
</table>

`background` は以下の追加のキーを含むこともできます:

<table class="standard-table">
  <tbody>
    <tr>
      <td><code>persistent</code></td>
      <td>
        <p><code>Boolean</code> の値。</p>
        <ul>
          <li>
            <code>true</code>
            を指定すると、拡張機能が読み込まれるかブラウザーが起動した時から、拡張機能の削除、無効化、もしくはブラウザーが終了するまでの間、バックグラウンドページがメモリー上に保持され続けます（つまり、バックグラウンドページが永続化されます）。
          </li>
          <li>
            <code>false</code>
            を指定すると、バックグラウンドページはアイドル状態の時にメモリー上からアンロードされ、必要に応じて再生成されます。このようなバックグラウンドページは、リスナーを登録したイベントを処理するためだけにメモリー上に読み込まれるため、イベントページとも呼ばれます。バックグラウンドページがメモリー上からアンロードされていても、リスナーの登録状態は永続化されますが、他の値は永続化されません。イベントページにおいてデータを永続化したい場合は、<a
              href="/ja/docs/Mozilla/Add-ons/WebExtensions/API/storage"
              >storage API</a
            >を使う必要があります。
          </li>
        </ul>
      </td>
    </tr>
  </tbody>
</table>

## 例

```json
  "background": {
    "scripts": ["jquery.js", "my-background.js"]
  }
```

２つのバックグラウンドスクリプトを読み込みます。

```json
  "background": {
    "page": "my-background.html"
  }
```

カスタムのバックグラウンドページを読み込みます。

## ブラウザーの互換性

{{Compat}}
