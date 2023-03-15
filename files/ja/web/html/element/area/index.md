---
title: <area>
slug: Web/HTML/Element/area
---

{{HTMLSidebar}}

**HTML の `<area>` 要素**は、イメージマップの中でクリック可能な領域をあらかじめ定義します。*イメージマップ*では、画像上の幾何学的な領域を{{Glossary("Hyperlink", "ハイパーテキストリンク")}}と関連付けすることができます。

この要素は {{HTMLElement("map")}} 要素内だけで使用します。

{{EmbedInteractiveExample("pages/tabbed/area.html", "tabbed-taller")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、<a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        なし。これは{{Glossary("empty element", "空要素")}}です。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>開始タグは必須。終了タグを記述してはなりません。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >を受け入れるすべての要素。 <code>&#x3C;area></code> 要素は祖先が
        {{HTMLElement("map")}}
        でなければなりませんが、直接の親要素である必要はありません。
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        {{htmlattrxref("href", "area")}} 属性がある場合は
        <code><a href="/ja/docs/Web/Accessibility/ARIA/Roles/link_role">link</a></code>、そうでなければ<a
          href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
          >対応するロールなし</a
        >
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLAreaElement")}}</td>
    </tr>
  </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- {{htmlattrdef("alt")}}
  - : 画像を表示しないブラウザーが代わりに表示するテキスト文字列です。テキストの内容は、代替テキストを表示しない場合に画像が提供する選択肢と同じものをユーザーに与えるような表現にすべきです。この属性は {{htmlattrxref("href", "area")}} 属性が使用されている場合のみ必要です。

<!---->

- {{htmlattrdef("coords")}}

  - : code>coords 属性は `<area>` の寸法、形状、配置における [`shape`](#attr-shape) 属性の座標を詳述します。

    - `rect`: 値は `x1,y1,x2,y2` です。値は長方形の左上と右下の座標を指定します。
      例: `<area shape="rect" coords="0,0,253,27" href="#" target="_blank" alt="Mozilla">` この例では長方形の左上の隅が 0,0、右下の隅が 253,27 になります。
    - `circle`: 値は `x,y,radius` です。値は円の中央の座標と半径を指定します。
      例: `<area shape="circle" coords="130,136,60" href="#" target="_blank" alt="MDN">`
    - `poly`: 値は `x1,y1,x2,y2,..,xn,yn` です。値は多角形の角の座標を指定します。先頭と末尾の座標が同じではない場合、ブラウザーは最後に座標を追加して多角形を閉じます。
    - `default`: 領域全体を定義します。

    値は CSS ピクセルの数です。

- {{htmlattrdef("download")}}
  - : この属性がある場合は、作者はハイパーリンクをリソースのダウンロードに使用すると考えていることを示します。{{htmlattrxref("download", "a")}} 属性の詳しい説明は {{HTMLElement("a")}} をご覧ください。
- {{htmlattrdef("href")}}
  - : この領域のハイパーリンクの宛先です。この値は有効な URL です。この属性は省略可能です。その場合、その `<area>` 要素はハイパーリンクを提供しません。
- {{htmlattrdef("hreflang")}}
  - : リンク先のリソースの言語を示します。許容される値は [BCP47](https://www.ietf.org/rfc/bcp/bcp47.txt) で定めています。この属性は、 {{htmlattrxref("href", "area")}} 属性を与える場合にのみ使用してください。
- {{htmlattrdef("ping")}}
  - : ハイパーリンクがフォローされたときに、ブラウザーから {{HTTPMethod("POST")}} リクエストが本文を `PING` として (バックグラウンドで) 送信する URL を空白で区切ったリストで記述します。ふつうはトラッキング用に使用します。
- {{htmlattrdef("referrerpolicy")}} {{experimental_inline}}

  - : リソースを読み込む際にどのリファラーを使用するかを示す文字列です:

    - "`no-referrer`" は、`Referer:` ヘッダーを送信しないことを表します。
    - "`no-referrer-when-downgrade`" は、TLS (HTTPS) を使用せずに生成元へナビゲートする場合は `Referer:` ヘッダーを送信しないことを表します。これは他にポリシーが定められていない場合の、ユーザーエージェントの既定の動作です。
    - "`origin`" は、ページの生成元 (大まかにいえばスキーム、ホスト、ポート) をリファラーとすることを表します。
    - "`origin-when-cross-origin`" は、異なる生成元へのナビゲートではリファラーをスキーム、ホスト、ポートに制限します。同一生成元へのナビゲートでは、リファラーのパスも含めます。
    - "`unsafe-url`" は、リファラーに生成元とパスを含めることを表します (ただし、フラグメント、パスワード、ユーザー名は含めません)。これは生成元やパスの情報が TLS で保護されたリソースからセキュアでない生成元へ漏えいしますので、安全ではありません。

- {{htmlattrdef("rel")}}
  - : {{htmlattrxref("href", "area")}} 属性を含むアンカーで、この属性は、対象オブジェクトとリンクオブジェクトの関係を指定します。属性値は、空白で区切られた[リンク種別の値](/ja/docs/Web/HTML/Link_types)のリストです。値とその意味は、文書作成者にとって意味を持つかもしれない何らかの権威によって登録されています。他に何も与えられていない場合の既定の関係は void です。この属性は {{htmlattrxref("href", "area")}} 属性が存在する場合にのみ使用してください。
- {{htmlattrdef("shape")}}

  - : 関連づけたホットスポットの形状です。 HTML の仕様書では、長方形の領域を定義する値 `rect`、円形の領域を定義する値 `circle`、多角形を定義する値 `poly`、定義済みの領域以外のすべての領域を示す値 `default` を定めています。

    多くのブラウザー、特に Internet Explorer 4 以降では `circ`, `polygon`, `rectangle` を {{htmlattrxref("shape", "area")}} の有効な値として対応していますが、これらの値は標準外です。

- {{htmlattrdef("target")}}

  - : キーワードまたは作成者が定義した名前で、リンクされたリソースを表示する{{Glossary("browsing context", "閲覧コンテキスト")}}です。

    以下のキーワードは特別な意味を持っています。

    - `_self` (既定値): 現在の閲覧コンテキストのリソースを表します。
    - `_blank`: 新しい名前の付けられていない閲覧コンテキストのリソースを表します。
    - `_parent`: 現在のページがフレーム内にある場合は、現在の親の閲覧コンテキストのリソースを表します。親要素がない場合、 `_self` と同じ動作をします。
    - `_top`: 最上位の閲覧コンテキストのリソースを表します (現在の閲覧コンテキストの祖先にあたり、それ以上親のない要素です)。親要素がない場合、 `_self` と同じ動作をします。

    この属性は {{htmlattrxref("href", "area")}} 属性が存在する場合にのみ使用してください。

    > **メモ:** 新しいブラウザー (例えば Firefox 79 以降) では、 `target="_blank"` を `<area>` 要素に設定すると、暗黙に同じ動作をする `rel` を `rel="noopener"` と設定します。

### 非推奨の属性

- {{htmlattrdef("name")}} {{deprecated_inline}}
  - : 古いブラウザーでスクリプトから使用できるようにするため、クリッカブル領域に名前を定義します。
- {{htmlattrdef("nohref")}} {{deprecated_inline}}

  - : 関連づけた領域にハイパーリンクがないことを示します。

    > **メモ:** HTML5 では `href` 属性を省略すれば十分です。

- {{htmlattrdef("tabindex")}} {{deprecated_inline}}
  - : ブラウザーのタブオーダーにおける、定義した領域の位置を示す数値です。この属性は HTML5 のグローバル属性です。
- {{htmlattrdef("type")}} {{deprecated_inline}}
  - : この属性は使用しないでください。ブラウザーは無視します (HTML 仕様書の W3C 5.3 では有効なものとして定義していますが、[正規の HTML 仕様書](https://html.spec.whatwg.org/multipage/#the-area-element)では定義していておらず、どのユーザーエージェントでも効果がありません。)

## 例

```html
<map name="primary">
  <area shape="circle" coords="75,75,75" href="left.html" alt="Click to go Left">
  <area shape="circle" coords="275,75,75" href="right.html" alt="Click to go Right">
</map>
<img usemap="#primary" src="https://via.placeholder.com/350x150" alt="350 x 150 pic">
```

### 結果

{{ EmbedLiveSample('Examples', 360, 160) }}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
