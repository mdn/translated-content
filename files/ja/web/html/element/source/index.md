---
title: "<source>: メディアまたは画像のソース要素"
slug: Web/HTML/Element/source
l10n:
  sourceCommit: 0af6781c93ffe3d011a060b4e517187cf780e93a
---

{{HTMLSidebar}}

**`<source>`** は [HTML](/ja/docs/Web/HTML) の要素で、{{HTMLElement("picture")}}、{{HTMLElement("audio")}}、{{HTMLElement("video")}} の各要素に対し、複数のメディアリソースを指定します。この要素は{{glossary("void element", "空要素")}}であり、すなわち中身も閉じタグもありません。[画像ファイル形式](/ja/docs/Web/Media/Formats/Image_types)や[メディアファイル形式](/ja/docs/Web/Media/Formats)の対応状況が様々であるブラウザーの幅広い互換性を確保するために、同じメディアコンテンツを複数のファイル形式で提供することはよくあることです。

{{EmbedInteractiveExample("pages/tabbed/source.html", "tabbed-standard")}}

## 属性

この要素はすべての[グローバル属性](/ja/docs/Web/HTML/Global_attributes)をサポートし、加えて下記の属性を使うことができます。

- `type`

  - : [画像の MIME メディア型](/ja/docs/Web/Media/Formats/Image_types)または[その他のメディア型](/ja/docs/Web/Media/Formats/Containers)で、オプションで [`codecs` 引数](/ja/docs/Web/Media/Formats/codecs_parameter)を伴います。

- `src`

  - : メディアのリソースの URL です。この `source` 要素の親が {{HTMLElement("audio")}} および {{HTMLElement("video")}} 要素の場合は必須ですが、`source` 要素の親が {{HTMLElement("picture")}} 要素である場合は指定できません。

- `srcset`

  - : 1つ以上の画像のURLと記述子をカンマで区切ったリストです。この `source` 要素の親が {{HTMLElement("picture")}} 要素である場合は必須ですが、`source` 要素の親が {{HTMLElement("audio")}} または {{HTMLElement("video")}} 要素の場合は指定できません。

    文字列をカンマ区切りで並べたリストであり、ブラウザーが使用できる画像のセットを示します。それぞれの文字列の構成は以下のとおりです。

    1. 画像を指定する 1 つの URL
    2. 幅記述子。これは正の整数に `"w"` を付加した文字列で、例えば `300w` のようになります。
    3. 画素密度記述子。これは直後に `"x"` を付加した正の浮動小数点数で、例えば `2x` のようになります。

    有効であるためには、リスト内の各文字列は、少なくとも幅記述子またはピクセル密度記述子を持たなければなりません。2 種類の記述子が混在してはならず、リスト全体で一貫して一方のみを使用しなければなりません。リストの中で、各記述子の値は固有でなければなりません。ブラウザーは記述子を基に、指定された時点で表示するために最も適切な画像を選びます。記述子が存在しない場合の既定値は `1x` です。`sizes` 属性が存在する場合は、各文字列に対して幅の記述子を指定しなければなりません。ブラウザーが `srcset` に対応していない場合は、`src` が既定値として使用されます。

- `sizes`

  - : ソースの寸法のリストで、そのソースが表す画像が最終的に表示される幅を表します。この `source` 要素の親が {{HTMLElement("picture")}} 要素である場合は指定可能ですが、`source` 要素の親が {{HTMLElement("audio")}} または {{HTMLElement("video")}} 要素の場合は指定できません。

    リストはそれぞれのソースのサイズをカンマ区切りで並べたものです。サイズは、条件と長さの組です。この情報は [`srcset`](#srcset) で指定されたどの画像を使用するかを決めるため、ページのレイアウトを行う前にブラウザーが使用します。なお、 `sizes` は `srcset` でピクセル倍率ではなく幅指定子が提供された時（例えば 2x ではなく 200w の場合）のみ、効果があることに注意してください。

- `media`

  - : リソースの志向するメディアの[メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries)です。

- `height`

  - : 画像の本来の高さをピクセル単位で指定します。この `source` 要素の親が {{HTMLElement("picture")}} 要素である場合は指定可能ですが、`source` 要素の親が {{HTMLElement("audio")}} または {{HTMLElement("video")}} 要素の場合は指定できません。

    単位のない整数でなければなりません。

- `width`

  - : 画像の本来の幅をピクセル単位で指定します。この `source` 要素の親が {{HTMLElement("picture")}} 要素である場合は指定可能ですが、`source` 要素の親が {{HTMLElement("audio")}} または {{HTMLElement("video")}} 要素の場合は指定できません。

    単位のない整数でなければなりません。

## 使用上のメモ

`<source>` 要素は**空要素**です。すなわち内容がないだけでなく、終了タグもありません。すなわち、 "`</source>`" は HTML の中で決して使われません。

ブラウザーは `source` 要素のリストをたどり、サポートする形式を探します。最初に見つかった表示可能なのものを使います。それぞれの`source` 要素で、

- `type` 属性が指定されていない場合は、サーバーからメディア形式を取得して、表示可能なものかを確認します。表示できない場合は、次の `<source>` をチェックします。
- `type` 属性が指定された場合、表示できる形式と比較します。扱えないものであれば、サーバーへのクエリーをスキップし、次の `<source>` 要素をチェックします。

提供されたすべての `<source>` を調べても使用する適切な画像が見つからなかった場合、

- `<picture>` 要素で用いた場合は、`<picture>` 要素の子の {{HTMLElement("img")}} で指定した画像を代わりに使用します。
- `<audio>` または `<video>`要素で用いた場合は、代わりにブラウザーは開始タグと終了タグの間にある内容を表示します。

ウェブブラウザーが対応している画像形式の詳細と、使用する適切な形式を選択するためのガイダンスについては、ウェブ上で使用する[画像ファイルの種類と画像のガイド](/ja/docs/Web/Media/Formats/Image_types)を参照してください。使用できる動画・音声メディアの種類については、[ウェブ上で使用するメディアの種類と形式のガイド](/ja/docs/Web/Media/Formats)を参照してください。

## 例

### `video` で `type` 属性を使う例

次の例は、 異なる形式で動画を提供する記述方法です。Webm 形式をサポートするブラウザーと、Ogg 形式に対応した環境と QuickTime 動画形式を再生可能なブラウザーを想定した記述例です。 `audio` 要素や `video` 要素に対応していない場合、代わりに通知が表示されます。 audio 要素や video 要素には対応していても指定した形式のすべてが再生不可である場合は、 `error` イベントが発生し、（もしあれば）既定のメディアコントロールがエラーを示します。使用できるメディアファイル形式や、ブラウザーが対応しているメディアファイル形式の詳細については、[ウェブ上のメディアの種類と形式についてのガイド](/ja/docs/Web/Media/Formats)を参照してください。

```html
<video controls>
  <source src="foo.webm" type="video/webm" />
  <source src="foo.ogg" type="video/ogg" />
  <source src="foo.mov" type="video/quicktime" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

### `video` で `media` 属性を使う例

こので例は、上のビューポートである幅に合わせた代わりのソースを提供する方法を示します。ユーザーのブラウザー環境が指定された `media` 条件に合致するとき、関連付けられた `<source>` 要素が選ばれます。その `src` 属性の内容が要求され、表示されます。もし `media` 条件に合うものがなければ、ブラウザーはリストの次の `<source>` に進みます。下のコードの 2 つめの `<source>` は `media` 条件の指定がなく、1 番めの条件以外のすべての場合に選択されます。

```html
<video controls>
  <source src="foo-large.webm" media="(min-width: 800px)" />
  <source src="foo.webm" />
  I'm sorry; your browser doesn't support HTML video.
</video>
```

その他の例については、学習エリアの記事[動画と音声のコンテンツ](/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)にすばらしいリソースがあります。

### `picture` で `media` 属性を使う例

この例では、2 つの `<source>` 要素が {{HTMLElement("picture")}} 内に含まれており、利用可能な空間の大きさがある幅を超えた時に使用する画像のバージョンを提供します。利用可能な幅がこれらの幅よりも小さい場合、ユーザーエージェントは {{HTMLElement("img")}} 要素で指定された代替画像を表示します。

```html
<picture>
  <source srcset="mdn-logo-wide.png" media="(min-width: 800px)" />
  <source srcset="mdn-logo-medium.png" media="(min-width: 600px)" />
  <img src="mdn-logo-narrow.png" alt="MDN Web Docs" />
</picture>
```

`<picture>` 要素では、常に一つの `<img>` 要素をフォールバック画像として、 `alt` 属性をアクセシビリティのためにつける必要があります。 (画像が内容に関連のない純粋に装飾的な画像でない限り)。

### `picture` で `height` および `width` 属性を使う例

この例では、`height` と `width` 属性を持つ 3 つの`<source>`要素が、{{HTMLElement("picture")}} 要素に含まれています。
[メディアクエリー](/ja/docs/Web/CSS/CSS_media_queries/Using_media_queries)により、[ビューポート](/ja/docs/Glossary/Viewport)の寸法に基づいて、`height` および `width` 属性により表示すべき画像をブラウザーに選択させます。

```html
<picture>
  <source
    srcset="landscape.png"
    media="(min-width: 1000px)"
    width="1000"
    height="400" />
  <source
    srcset="square.png"
    media="(min-width: 800px)"
    width="800"
    height="800" />
  <source
    srcset="portrait.png"
    media="(min-width: 600px)"
    width="600"
    height="800" />
  <img
    src="fallback.png"
    alt="Image used when the browser does not support the sources"
    width="500"
    height="400" />
</picture>
```

## 技術的な詳細

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>なし。この要素は{{Glossary("void element", "空要素")}}です。</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>開始タグは必須。終了タグを記述してはならない。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <div>
          メディア要素（{{HTMLElement("audio")}} または
          {{HTMLElement("video")}}）の場合、どの
          <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ"
            >フローコンテンツ</a
          >または {{HTMLElement("track")}} 要素よりも前に配置する。
        </div>
        <div>
          {{HTMLElement("picture")}} 要素の場合、
          {{HTMLElement("img")}} 要素より前に配置する。
        </div>
      </td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <a href="https://www.w3.org/TR/html-aria/#dfn-no-corresponding-role"
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
      <td>{{domxref("HTMLSourceElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTMLElement("audio")}} 要素
- {{HTMLElement("picture")}} 要素
- {{HTMLElement("video")}} 要素
- [画像ファイルの型と形式のガイド](/ja/docs/Web/Media/Formats/Image_types)
- [ウェブ上のメディアの種類と形式のガイド](/ja/docs/Web/Media/Formats)
- [ウェブパフォーマンス](/ja/docs/Learn/Performance)
