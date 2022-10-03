---
title: '<source>: メディアまたは画像のソース要素'
slug: Web/HTML/Element/source
---

{{HTMLRef}}

**HTML の `<source>` 要素**は、 {{HTMLElement("picture")}} 要素、 {{HTMLElement("audio")}} 要素、 {{HTMLElement("video")}} 要素に対し、複数のメディアリソースを指定します。この要素は空要素であり、つまり中身も閉じタグもありません。[画像ファイル形式](/ja/docs/Web/Media/Formats/Image_types)や[メディアファイル形式](/ja/docs/Web/Media/Formats)の対応状況が様々であるブラウザーの幅広い互換性を確保するために、同じメディアコンテンツを複数のファイル形式で提供することはよくあることです。

{{EmbedInteractiveExample("pages/tabbed/source.html", "tabbed-standard")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリ</a>
      </th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>
        なし。この要素は{{Glossary("empty element", "空要素")}}です。
      </td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>開始タグは必須。終了タグを記述してはならない。</td>
    </tr>
    <tr>
      <th scope="row"><dfn>許可されている親要素</dfn></th>
      <td>
        <div>
          メディア要素（{{HTMLElement("audio")}} または
          {{HTMLelement("video")}}）の場合、どの
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

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- {{htmlattrdef("media")}}
  - : リソースの志向するメディアの[メディアクエリ](/ja/docs/Web/CSS/Media_queries)。この属性は {{HTMLElement("picture")}} 要素の内部でのみ使用します。
- {{htmlattrdef("sizes")}}

  - : ソースの寸法のリストで、そのソースが表す画像が最終的に表示される幅を表します。それぞれのソースの寸法、条件と長さの組をカンマ区切りで並べたものです。この情報は {{htmlattrxref("srcset", "source")}} で指定された画像を使用する際に、ページのレイアウトを行う前にブラウザーが使用します。なお、 `sizes` は `srcset` でピクセル倍率ではなく幅指定子が提供された時 (例えば 2x ではなく 200w の場合) のみ、効果があることに注意してください。

    `sizes` 属性は、 {{HTMLElement("source")}} 要素が {{HTMLElement("picture")}} 要素の子要素である場合にのみ効果があります。

- {{htmlattrdef("src")}}
  - : メディアのリソースの場所であり、 {{HTMLElement("audio")}} および {{HTMLElement("video")}} では必須です。 {{HTMLElement("picture")}} 要素の内部にある `<source>` 要素では、この値は無視されます。
- {{htmlattrdef("srcset")}}

  - : 1 つ以上の文字列をカンマ区切りで並べたリストであり、ブラウザーが使用できる画像のセットを示します。それぞれの文字列の構成は以下のとおりです。

    1. 画像を指定する URL を 1 つ
    2. 幅記述子。これは正の整数に `"w"` を付加した文字列で、例えば `300w` のようになります。指定しない場合の既定値は無限大です。
    3. 画素密度記述子。これは直後に `"x"` を付加した正の浮動小数点数です。指定しない場合の既定値は `1x` です。

    リスト内の各々の文字列は、少なくとも幅記述子か画素密度記述子がなければ不正な値になります。リスト内には、幅記述子と画素密度記述子の組が同じ値である文字列を複数置いてはなりません。ブラウザーは、表示する時点でもっとも適切な画像を選択します。

    `srcset` 属性は、 {{HTMLElement("source")}} 要素が {{HTMLElement("picture")}} 要素の子要素である場合にのみ効果があります。

- {{htmlattrdef("type")}}
  - : [リソースの MIME メディアタイプ](/ja/docs/Web/Media/Formats/Image_types) で、オプションで [`codecs` 引数](/ja/docs/Web/Media/Formats/codecs_parameter) を伴います。

`type` 属性が指定されていない場合は、サーバーからメディア形式を取得して、ユーザーエージェントが扱うことができるものであるかどうかを確認します。表示ができない場合は、次の `<source>` をチェックします。 `type` 属性が指定された場合、ユーザーエージェントが表示できる形式と比較し、扱えないものであれば、サーバーはクエリーさえ行わず、次の `<source>` 要素をチェックします。

`<picture>` コンテキストで使用された場合、ブラウザーは `<picture>` 要素の {{HTMLElement("img")}} 子要素で指定された画像は、それぞれの `<source>` を評価した後で合う画像がなかった場合に使用されます。

## 使用上のメモ

`<source>` 要素は**空要素**、すなわち内容がないだけでなく、終了タグもありません。すなわち、 "`</source>`" は HTML の中で決して使われません。

ウェブブラウザーが対応している画像形式の詳細と、使用する適切な形式を選択するためのガイダンスについては、ウェブ上で使用する[画像ファイルの種類と画像のガイド](/ja/docs/Web/Media/Formats/Image_types)を参照してください。使用できる動画・音声メディアの種類については、[ウェブ上で使用するメディアの種類と形式のガイド](/ja/docs/Web/Media/Formats)を参照してください。

## 例

### 動画の例

次の例は、 Ogg 形式に対応したブラウザーと QuickTime 動画形式を再生可能な環境を想定した記述例です。 `audio` 要素や `video` 要素に対応していない場合、代わりにメッセージが表示されます。 audio 要素や video 要素には対応していても指定した形式のすべてが再生不可である場合は、 `error` イベントが発生し、（もしあれば）既定のメディアコントロールがエラーを示します。使用できるメディアファイル形式や、ブラウザーが対応しているメディアファイル形式の詳細については、[ウェブ上のメディアの種類と形式についてのガイド](/ja/docs/Web/Media/Formats)を参照してください。

```html
<video controls>
  <source src="foo.webm" type="video/webm">
  <source src="foo.ogg" type="video/ogg">
  <source src="foo.mov" type="video/quicktime">
  I'm sorry; your browser doesn't support HTML5 video.
</video>
```

その他の例については、学習エリアの記事[動画と音声のコンテンツ](/ja/docs/Learn/HTML/Multimedia_and_embedding/Video_and_audio_content)にすばらしいリソースがあります。

### 図形の例

この例では、2 つの `<source>` 要素が {{HTMLElement("picture")}} 内に含まれており、利用可能な空間の大きさがある幅を超えた時に使用する画像のバージョンを提供します。利用可能な幅がこれらの幅よりも小さい場合、ユーザーエージェントは {{HTMLElement("img")}} 要素で指定された代替画像を表示します。

```html
<picture>
   <source srcset="mdn-logo-wide.png" media="(min-width: 800px)">
   <source srcset="mdn-logo-medium.png" media="(min-width: 600px)">
   <img src="mdn-logo-narrow.png" alt="MDN Web Docs">
</picture>
```

`<picture>` 要素では、常に一つの `<img>` 要素をフォールバック画像として、 `alt` 属性をアクセシビリティのためにつける必要があります。 (画像が関係のない背景の装飾的な画像でない限り)。

## 仕様書

| 仕様書                                                                                                                   | 状態                             | 備考 |
| ------------------------------------------------------------------------------------------------------------------------ | -------------------------------- | ---- |
| {{SpecName('HTML WHATWG', 'embedded-content.html#the-source-element', '&lt;source&gt;')}} | {{Spec2('HTML WHATWG')}} |      |

## ブラウザーの互換性

{{Compat("html.elements.source")}}

## 関連情報

- [ウェブ上のメディアの種類と形式のガイド](/ja/docs/Web/Media/Formats)
- [画像ファイルの型と形式のガイド](/ja/docs/Web/Media/Formats/Image_types)
- {{HTMLElement("picture")}} 要素
- {{HTMLElement("audio")}} 要素
- {{HTMLElement("video")}} 要素
- [ウェブパフォーマンス](/ja/docs/Learn/Performance)
