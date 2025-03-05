---
title: content_scripts
slug: Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts
---

{{AddonSidebar}}

<table class="fullwidth-table standard-table">
  <tbody>
    <tr>
      <th scope="row" style="width: 50%"><p>タイプ</p></th>
      <td><code>Array</code></td>
    </tr>
    <tr>
      <th scope="row">必須か</th>
      <td>いいえ</td>
    </tr>
    <tr>
      <th scope="row">例</th>
      <td>
        <pre class="brush: json no-line-numbers language-json notranslate">
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["borderify.js"]
  }
]</pre
        >
      </td>
    </tr>
  </tbody>
</table>

与えられたパターンに URL がマッチしているページに[コンテンツスクリプト](/ja/docs/Mozilla/Add-ons/WebExtensions/Content_scripts)をロードすることをブラウザーに教えます。

このキーは配列です。それぞれのアイテムは以下の条件を満たすオブジェクトです:

- **必ず matches という名前のキー**を含まなければならず、これはスクリプトが読み込まれる URL パターンを指定します
- **`js`** と **`css`** というキーを入れても**よく**、それはマッチしたページに読み込まれるスクリプトを列挙します
- その他のプロパティを入れてもよく、それはコンテンツスクリプトがいつどのように読み込まれるか管理します

入れることのできるキーの詳細は下記の表にあります。

<table class="fullwidth-table standard-table">
  <thead>
    <tr>
      <th scope="col">名前</th>
      <th scope="col">型</th>
      <th scope="col">説明</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        <a id="all_frames"><code>all_frames</code></a>
      </td>
      <td><code>Boolean</code></td>
      <td>
        <p>
          <code>true</code>:
          <code
            ><a
              href="/ja/Add-ons/WebExtensions/manifest.json/content_scripts#js"
              >js</a
            ></code
          >
          と
          <code
            ><a
              href="/ja/Add-ons/WebExtensions/manifest.json/content_scripts#css"
              >css</a
            ></code
          >
          で指定されたすべてのスクリプトを、指定した
          URL要求にマッチするすべてのフレームに(タブの最上位フレームでなくても)挿入します。これは親のフレームだけが
          URL要求にマッチしている子フレームには挿入しません。URL
          要求は各フレームごとにチェックされます。
        </p>
        <p>
          <code>false</code>: タブの最上位フレームで
          URL要求にマッチしたフレームだけに挿入します。
        </p>
        <p>デフォルトは <code>false</code></p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="css"><code>css</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          manifest.json からの相対パスの配列で、マッチしたページに挿入される CSS
          ファイルを参照する。
        </p>
        <p>ファイルは指定した順で、DOM が読み込まれる前に挿入される。</p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="exclude_globs"><code>exclude_globs</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        ワイルドカードを含む文字配列。下記の
        <a
          href="/ja/Add-ons/WebExtensions/manifest.json/content_scripts#URL_パターンにマッチする"
          >URL パターンにマッチする</a
        >
        を見てください。
      </td>
    </tr>
    <tr>
      <td>
        <a id="exclude_matches"><code>exclude_matches</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <a href="/ja/Add-ons/WebExtensions/match_patterns">マッチパターン</a
        >の配列。下記の
        <a
          href="/ja/Add-ons/WebExtensions/manifest.json/content_scripts#URL_パターンにマッチする"
          >URL パターンにマッチする</a
        >を見てください。
      </td>
    </tr>
    <tr>
      <td>
        <a id="include_globs"><code>include_globs</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        ワイルドカードを含む文字配列。下記の
        <a
          href="/ja/Add-ons/WebExtensions/manifest.json/content_scripts#URL_パターンにマッチする"
          >URL パターンにマッチする</a
        >
        を見てください。
      </td>
    </tr>
    <tr>
      <td>
        <a id="js"><code>js</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          manifest.json からの相対パスの配列で、マッチしたページに挿入される
          JavaScript ファイルを参照する。
        </p>
        <p>
          ファイルは指定した順でに挿入される。つまり、例えば、ここで jQuery
          をインクルードしてから他のコンテンツスクリプトを読み込むには、このようにします:
        </p>
        <pre
          class="brush: json no-line-numbers notranslate"
        ><code>"js": ["jquery.js", "my-content-script.js"]</code></pre>
        <p>
          <code
            >こうすると <code>"my-content-script.js"</code> から jQuery
            を使えます。</code
          >
        </p>
        <p>
          <code
            >ファイルは
            <code
              ><a
                href="/ja/Add-ons/WebExtensions/manifest.json/content_scripts#run_at"
                >run_at</a
              ></code
            >
            で指定した時に挿入されます。</code
          >
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <code><a id="match_about_blank">match_about_blank</a></code>
      </td>
      <td><code>Boolean</code></td>
      <td>
        <p>
          コンテンツスクリプトを
          <code>"about:blank"</code>
          もしくは<code>"about:srcdoc"</code>のURLを持つページに挿入します。 if
          the URL of the page that opened or created this page
          <a
            href="/ja/Add-ons/WebExtensions/manifest.json/content_scripts#URL_パターンにマッチする"
            >matches the patterns</a
          >
          specified in the rest of the <code>content_scripts</code> key.
        </p>
        <p>
          This is especially useful to run scripts in empty iframes , whose URL
          is <code>"about:blank"</code>. To do this you should also set the
          <code>all_frames</code> key.
        </p>
        <p>
          例えば、 以下のような <code>content_scripts</code> キーがあるとします:
        </p>
        <pre class="brush: json no-line-numbers language-json notranslate">
"content_scripts": [
    {
      "js": ["my-script.js"],
      "matches": ["https://example.org/"],
      "match_about_blank": true,
      "all_frames": true
    }
  ]</pre
        >
        <p>
          ユーザーが<code>https://example.org/</code>をロードすると、ページに空のiframeが埋め込まれ、
          <code>"my-script.js"</code> がそのiframe内に読み込まれます。
        </p>
        <p>
          <code>match_about_blank</code> is supported in Firefox from version
          52. Note that in Firefox, content scripts won't be injected into empty
          iframes at <code>"document_start"</code> even if you specify that
          value in
          <code
            ><a
              href="/ja/Add-ons/WebExtensions/manifest.json/content_scripts#run_at"
              >run_at</a
            ></code
          >.
        </p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="matches"><code>matches</code></a>
      </td>
      <td><code>Array</code></td>
      <td>
        <p>
          <a href="/ja/docs/Mozilla/Add-ons/WebExtensions/Match_patterns"
            >マッチパターン</a
          >の配列。下記の
          <a
            href="/ja/Add-ons/WebExtensions/manifest.json/content_scripts#URL_パターンにマッチする"
            >URLパターンにマッチする</a
          >
          を見てください。
        </p>
        <p>これは唯一の必須なキーです。</p>
      </td>
    </tr>
    <tr>
      <td>
        <a id="run_at"><code>run_at</code></a>
      </td>
      <td><code>String</code></td>
      <td>
        <p>
          This option determines when the scripts specified in
          <code
            ><a
              href="/ja/Add-ons/WebExtensions/manifest.json/content_scripts#js"
              >js</a
            ></code
          >
          are injected. You can supply one of three strings here, each of which
          identifies a state in the process of loading a document. The states
          directly correspond to
          {{domxref("Document/readyState", "Document.readyState")}}:
        </p>
        <ul>
          <li>
            "<code>document_start</code>": corresponds to <code>loading</code>.
            The DOM is still loading.
          </li>
          <li>
            "<code>document_end</code>": corresponds to
            <code>interactive</code>. The DOM has finished loading, but
            resources such as scripts and images may still be loading.
          </li>
          <li>
            "<code>document_idle</code>": corresponds to <code>complete</code>.
            The document and all its resources have finished loading.
          </li>
        </ul>
        <p>The default value is <code>"document_idle"</code>.</p>
        <p>
          In all cases, files in
          <code
            ><a
              href="/ja/Add-ons/WebExtensions/manifest.json/content_scripts#js"
              >js</a
            ></code
          >
          are injected after files in
          <code
            ><a
              href="/ja/Add-ons/WebExtensions/manifest.json/content_scripts#css"
              >css</a
            ></code
          >.
        </p>
      </td>
    </tr>
  </tbody>
</table>

## URL パターンにマッチする

`"content_scripts"` キーは URL マッチングを元にしてコンテンツスクリプトをドキュメントに添付します: ドキュメントの URL がキーに指定されたものとマッチしたら、スクリプトは添付されます。`"content_scripts"` 内には指定に使える 4 つのキーワードがあります:

- `matches`: [マッチパターン](/ja/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)の配列
- `exclude_matches:` [マッチパターン](/ja/docs/Mozilla/Add-ons/WebExtensions/Match_patterns)の配列
- `include_globs`: [globs](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#globs) の配列
- `exclude_globs:` [globs](/ja/docs/Mozilla/Add-ons/WebExtensions/manifest.json/content_scripts#globs) の配列

これらのプロパティにマッチするには、URL は配列内で少なくとも 1 つの項目にマッチしなければなりません。例えばこのようなプロパティが与えられたら:

```json
"matches": ["*://*.example.org/*", "*://*.example.com/*"]
```

"http\://example.org/" と "http\://example.com/" の両方がマッチします。

`matches` は唯一必須のキーなため、その他の 3 つのキーはそれ以降のマッチ URL の制限に使われます。全体のキーにマッチするために、URL は下記のようでなければなりません:

1. `matches` プロパティにマッチしている
2. かつ、`include_globs` があれば、それにマッチする
3. かつ、`exclude_matches` があれば、それにマッチしない
4. かつ、`exclude_globs` があれば、それにマッチしない

### globs

glob は単にワイルドカードを含むことのある文字列です。ワイルドカードには 2 種類あって、glob 内に組み合わせることができます:

- "\*" は 0 個以上のキャラクターにマッチします
- "?" はちょうど 1 個のキャラクターにマッチします

例えば: `"*na?i"` は `"illuminati"` と `"annunaki"` にマッチし、`"sagnarelli"` にはマッチしません。

## 例

```json
"content_scripts": [
  {
    "matches": ["*://*.mozilla.org/*"],
    "js": ["borderify.js"]
  }
]
```

これは "borderify.js" という 1 つのコンテンツスクリプトを、HTTP か HTTPS のいずれかで配布される、"mozilla.org" かそのサブドメインのページに挿入します。

```json
"content_scripts": [
    {
      "exclude_matches": ["*://developer.mozilla.org/*"],
      "matches": ["*://*.mozilla.org/*"],
      "js": ["jquery.js", "borderify.js"]
    }
  ]
```

これは 2 つのコンテンツスクリプトを、HTTP か HTTPS のいずれかで配布される、 "mozilla.org" かそのサブドメイン(ただし "developer.mozilla.org" を除く)のページに挿入します。

コンテンツスクリプトは同じ DOM を見て、配列の順番どおりに挿入されます。よって "borderify.js" からは "jquery.js" によって追加されたグローバル変数が見えます。

## ブラウザーの互換性

{{Compat}}
