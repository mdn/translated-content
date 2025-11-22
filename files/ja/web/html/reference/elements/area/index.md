---
title: "<area>: イメージマップ領域要素"
slug: Web/HTML/Reference/Elements/area
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

**`<area>`** は [HTML](/ja/docs/Web/HTML) の要素で、イメージマップの中でクリック可能な領域をあらかじめ定義します。イメージマップでは、画像上の幾何学的な領域を{{Glossary("Hyperlink", "ハイパーテキストリンク")}}と関連付けすることができます。

この要素は {{HTMLElement("map")}} 要素内だけで使用します。

{{InteractiveExample("HTML デモ: &lt;area&gt;", "tabbed-taller")}}

```html interactive-example
<map name="infographic">
  <area
    shape="poly"
    coords="129,0,260,95,129,138"
    href="https://developer.mozilla.org/docs/Web/HTTP"
    alt="HTTP" />
  <area
    shape="poly"
    coords="260,96,209,249,130,138"
    href="https://developer.mozilla.org/docs/Web/HTML"
    alt="HTML" />
  <area
    shape="poly"
    coords="209,249,49,249,130,139"
    href="https://developer.mozilla.org/docs/Web/JavaScript"
    alt="JavaScript" />
  <area
    shape="poly"
    coords="48,249,0,96,129,138"
    href="https://developer.mozilla.org/docs/Web/API"
    alt="Web APIs" />
  <area
    shape="poly"
    coords="0,95,128,0,128,137"
    href="https://developer.mozilla.org/docs/Web/CSS"
    alt="CSS" />
</map>
<img
  usemap="#infographic"
  src="/shared-assets/images/examples/mdn-info.png"
  alt="MDN インフォグラフィック" />
```

```css interactive-example
img {
  display: block;
  margin: 0 auto;
  width: 260px;
  height: 260px;
}
```

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- `alt`
  - : 画像を表示しないブラウザーが代わりに表示するテキスト文字列です。
    テキストの内容は、代替テキストを表示しない場合に画像が提供する選択肢と同じものをユーザーに与えるような表現にすべきです。
    この属性は [`href`](#href) 属性が使用されている場合のみ必要です。
- `coords`
  - : `coords` 属性は、 [`shape`](#shape) 属性の座標を寸法、形状、`<area>` の配置について詳述します。
    この属性は `shape` が `default` に設定されていた場合は使用してはいけません。
    - `rect`: 値は `x1,y1,x2,y2` です。
      値は長方形の左上と右下の座標を指定します。
      例: `<area shape="rect" coords="0,0,253,27" href="#" target="_blank" alt="Mozilla">` では座標は `0,0` と `253,27` であり、それぞれ長方形の左上と右下の角を示します。
    - `circle`: 値は `x,y,radius` です。値は円の中央の座標と半径を指定します。
      例: `<area shape="circle" coords="130,136,60" href="#" target="_blank" alt="MDN">`
    - `poly`: 値は `x1,y1,x2,y2,..,xn,yn` です。値は多角形の角の座標を指定します。
      先頭と末尾の座標が同じではない場合、ブラウザーは最後に座標を追加して多角形を閉じます。

    値は CSS ピクセルの数です。

- `download`
  - : この属性がある場合は、作者はハイパーリンクをリソースのダウンロードに使用すると考えていることを示します。
    [`download`](/ja/docs/Web/HTML/Reference/Elements/a#download) 属性の詳しい説明は {{HTMLElement("a")}} をご覧ください。
- `href`
  - : この領域のハイパーリンクの宛先です。
    この値は有効な URL です。
    この属性は省略可能です。その場合、その `<area>` 要素はハイパーリンクを提供しません。
- `ping`
  - : ハイパーリンクに進んだとき、ブラウザーから {{HTTPMethod("POST")}} リクエストが本文を `PING` として（バックグラウンドで）送信する URL を空白で区切ったリストで記述します。
    ふつうはトラッキング用に使用します。
- `referrerpolicy`
  - : リソースを読み込む際にどのリファラーを使用するかを示す文字列です。
    - `no-referrer`: {{HTTPHeader("Referer")}} ヘッダーを送信しません。
    - `no-referrer-when-downgrade`: {{HTTPHeader("Referer")}} ヘッダーを{{Glossary("origin", "オリジン")}}に {{Glossary("TLS")}} ({{Glossary("HTTPS")}}) がない場合は送信しません。
    - `origin`: 送信されるリファラーは、参照元ページのオリジンのみに限定されます。すなわち[スキーム](/ja/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)、{{Glossary("host", "ホスト名")}}、{{Glossary("port", "ポート番号")}}です。
    - `origin-when-cross-origin`: 他のオリジンに送信されるリファラーは、スキーム、ホスト名、ポート番号に限定されます。同一オリジン内での移動の場合はパスが含まれます。
    - `same-origin`: リファラーは{{Glossary("Same-origin policy", "同一オリジン")}}には送られますが、オリジン間リクエストではリファラー情報が含まれません。
    - `strict-origin`: プロトコルのセキュリティ水準が同じである場合 (HTTPS→HTTPS) は、文書のオリジンのみが送信されますが、安全性が下がる移動先 (HTTPS→HTTP) には送信しません。
    - `strict-origin-when-cross-origin` (default): 同一オリジンへのリクエストを行う際には URL 全体が送信され、プロトコルのセキュリティ水準が同じである場合 (HTTPS→HTTPS) はオリジンのみが送信されますが、安全性が下がる移動先 (HTTPS→HTTP) には送信されません。
    - `unsafe-url`: リファラーにはオリジン*および*パスが含まれます（ただし[フラグメント](/ja/docs/Web/API/HTMLAnchorElement/hash)、[パスワード](/ja/docs/Web/API/HTMLAnchorElement/password)、[ユーザー名](/ja/docs/Web/API/HTMLAnchorElement/username)は含まれません）。
      **この値は安全ではありません**。オリジンとパスを TLS で保護されたリソースから安全ではないオリジンに漏洩させるからです。

- `rel`
  - : [`href`](#href) 属性を含むアンカーで、この属性は、対象オブジェクトとリンクオブジェクトの関係を指定します。
    属性値は、空白で区切られたリンク種別のリストです。
    値とその意味は、文書作成者にとって意味を持つかもしれない何らかの権威によって登録されています。
    他に何も与えられていない場合の既定の関係は void です。この属性は [`href`](#href) 属性が存在する場合にのみ使用してください。
- `shape`
  - : 関連づけたホットスポットの形状です。HTML の仕様書では、長方形の領域を定義する値 `rect`、円形の領域を定義する値 `circle`、多角形を定義する値 `poly`、定義済みの領域以外のすべての領域を示す値 `default` を定めています。
- `target`
  - : キーワードまたは作成者が定義した名前で、リンクされたリソースを表示する{{Glossary("browsing context", "閲覧コンテキスト")}}です。
    以下のキーワードは特別な意味を持っています。
    - `_self` （既定値）: 現在の閲覧コンテキストのリソースを表します。
    - `_blank`: 新しい名前の付けられていない閲覧コンテキストのリソースを表します。
    - `_parent`: 現在のページがフレーム内にある場合は、現在の親の閲覧コンテキストのリソースを表します。
      親要素がない場合、 `_self` と同じ動作をします。
    - `_top`: 最上位の閲覧コンテキストのリソースを表します (現在の閲覧コンテキストの祖先にあたり、それ以上親のない要素です)。
      親要素がない場合、 `_self` と同じ動作をします。

    この属性は [`href`](#href) 属性が存在する場合にのみ使用してください。

    > [!NOTE]
    > `target="_blank"` を `<area>` 要素に設定すると、暗黙に `rel` に [`rel="noopener"`](/ja/docs/Web/HTML/Reference/Attributes/rel/noopener) を設定し、`window.opener` が設定されていないのと同じように動作します。対応状況は[ブラウザーの互換性](#ブラウザーの互換性)を参照してください。

## 例

```html
<map name="primary">
  <area
    shape="circle"
    coords="75,75,75"
    href="left.html"
    alt="Click to go Left" />
  <area
    shape="circle"
    coords="275,75,75"
    href="right.html"
    alt="Click to go Right" />
</map>
<img
  usemap="#primary"
  src="https://dummyimage.com/350x150"
  alt="350 x 150 pic" />
```

### 結果

{{ EmbedLiveSample('Examples', 360, 160) }}

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、<a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>なし。これは{{Glossary("void element", "空要素")}}です。</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>開始タグは必須。終了タグを記述してはなりません。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ">記述コンテンツ</a>を受け入れるすべての要素。 <code>&#x3C;area></code> 要素は祖先が {{HTMLElement("map")}} でなければなりませんが、直接の親要素である必要はありません。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="/ja/docs/Web/HTML/Reference/Elements/area#href"><code>href</code></a> 属性がある場合は
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a>、そうでなければ
        <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/generic_role"><code>generic</code></a>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>許可されている <code>role</code> なし。</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLAreaElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
