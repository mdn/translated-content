---
title: "<img>: 画像埋め込み要素"
slug: Web/HTML/Element/img
l10n:
  sourceCommit: fa8a44b8bff24a4032181c4fd155c459c0dc9161
---

{{HTMLSidebar}}

**`<img>`** は [HTML](/ja/docs/Web/HTML) の要素で、文書に画像を埋め込みます。

{{EmbedInteractiveExample("pages/tabbed/img.html", "tabbed-standard")}}

上記の例では、 `<img>` 要素の使い方を示しています。

- `src` 属性は**必須**で、埋め込みたい画像へのパスを入れます。
- `alt` 属性は画像のテキストによる説明で、必須ではありませんがアクセシビリティのために**非常に有用**です。 — スクリーンリーダーがこの説明を読み上げることで、画像が何を表すかをユーザーが知ることができます。また、ネットワークエラーやコンテンツのブロック、リンク切れ等の理由で画像が読み込めなかった場合にも代替テキストが表示されます。

他にも、様々な目的で指定できる属性がたくさんあります。

- セキュリティとプライバシーのための[リファラー](/ja/docs/Web/HTTP/Headers/Referrer-Policy)/{{glossary("CORS")}} 制御。 [`crossorigin`](#crossorigin) および [`referrerpolicy`](#referrerpolicy) を参照してください。
- [`width`](#width) と [`height`](#height) の両方を使用して画像の固有の寸法を設定すると、画像を読み込む前に場所を確保し、コンテンツのレイアウトが移動することを防ぐことができます。
- [`sizes`](#sizes) および [`srcset`](#srcset) を使用したレスポンシブ画像のヒント ({{htmlelement("picture")}} 要素と[レスポンシブ画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)のチュートリアルもご覧ください)。

## 対応している画像形式

HTML 標準では、対応する画像形式を指定していないので、{{glossary("user agent", "ユーザーエージェント")}}によって対応する画像形式は異なります。

> **メモ:** [画像ファイルの種類と形式ガイド](/ja/docs/Web/Media/Formats/Image_types) には、画像ファイルとウェブブラウザーの対応に関する包括的な情報があります。
> この節は概要のみです。

ウェブで最もよく使われる画像ファイル形式は、以下の通りです。

- [APNG (Animated Portable Network Graphics)](/ja/docs/Web/Media/Formats/Image_types#apng_animated_portable_network_graphics) — 可逆性のあるアニメーションシーケンスに適しています（GIF はパフォーマンスが劣る）
- [AVIF (AV1 Image File Format)](/ja/docs/Web/Media/Formats/Image_types#avif_image) — 高い性能により、画像とアニメーションの両方に適しています。
- [GIF (Graphics Interchange Format)](/ja/docs/Web/Media/Formats/Image_types#gif_graphics_interchange_format) — シンプルな画像やアニメーションに適しています。
- [JPEG (Joint Photographic Expert Group image)](/ja/docs/Web/Media/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — 静止画の非可逆圧縮に適しています（現在最も普及しています）。
- [PNG (Portable Network Graphics)](/ja/docs/Web/Media/Formats/Image_types#png_portable_network_graphics) — 静止画の可逆圧縮に適しています（JPEG より若干画質が良い）。
- [SVG (Scalable Vector Graphics)](/ja/docs/Web/Media/Formats/Image_types#svg_scalable_vector_graphics) — ベクター画像形式。異なるサイズでも正確に描画する必要がある画像に使用します。
- [WebP (Web Picture format)](/ja/docs/Web/Media/Formats/Image_types#webp_image) — 画像とアニメーションの両方に優れた選択です。

[WebP](/ja/docs/Web/Media/Formats/Image_types#webp_image) や [AVIF](/ja/docs/Web/Media/Formats/Image_types#avif_image) などは、PNG、JPEG、GIF よりはるかに性能が良く、静止画と動画の両方で使えるのでおすすめします。 WebP は広く対応されていますが、 AVIF は Edge での対応が不足しています。

SVG は、異なるサイズでも正確に描画する必要がある画像に推奨される形式であることに変わりはありません。

## 画像読み込みエラー

画像の読み込みまたは描画の間にエラーが発生した場合で、かつ `onerror` イベントハンドラーが {{domxref("Element/error_event", "error")}} イベントを扱うよう設定されていた場合は、イベントハンドラーが呼び出されます。これは例えば次のように、様々な状況で発生します。

- `src` 属性が空 (`""`) または `null` である。
- 指定された `src` の {{glossary("URL")}} が現在ユーザーがいるページの URL と同じである。
- 指定された画像が何らかの理由で読み込みが妨害され、中止された。
- 指定された画像のメタデータが、寸法を受け取ることができないなどの理由で読み込みが中止され、かつ `<img>` 要素の属性に寸法が指定されていなかった場合。
- 指定された画像が、{{glossary("user agent", "ユーザーエージェント")}}が対応している形式ではない場合。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- `alt`

  - : この属性は、画像を説明する代替文字列を定義します。

    > **メモ:** ブラウザーは常に画像を表示するわけではありません。ブラウザーが画像を表示しない状況はいくつかがあります。
    >
    > - 視覚ブラウザー以外のブラウザー（視覚障碍者向けのものを含む）で閲覧された場合
    > - ユーザーが画像を非表示に設定している場合（帯域の節約、プライバシー上の理由）
    > - 画像が無効であったり[未対応の画像形式](#対応している画像形式)であったりした場合
    >
    > このような場合、ブラウザーは、画像をこの要素の `alt` 属性で定義された文字列に置き換えます。このような理由から、 `alt` には可能な限り役に立つ値を指定するべきです。

    この属性に空文字列を設定すると (`alt=""`)、この画像がコンテンツにおいて重要な箇所*ではない*ことを示し、視覚ブラウザーではない場合は{{glossary("Rendering engine", "レンダリング")}}を省略することがあります。視覚ブラウザーでは、 `alt` が空欄で画像の表示に失敗した場合は、壊れた画像のアイコンの表示が省略される場合もあります。

    この属性は画像をテキストにコピー＆ペーストした場合や、リンクされた画像をブックマークに保存したときにも使用されます。

- `crossorigin`

  - : 関連する画像の取得の際に {{glossary("CORS")}} を使用しなければならないかどうかを示します。 CORS リクエストから返された[CORS が有効な画像](/ja/docs/Web/HTML/CORS_enabled_image)は、 {{HTMLElement("canvas")}} 要素で「[汚染](/ja/docs/Web/HTML/CORS_enabled_image#what_is_a_tainted_canvas)」されることなく再利用することができます。

    `crossorigin` 属性が指定されて*いない*場合は、 ({{httpheader("Origin")}} リクエストヘッダーがない) CORS 以外のリクエストが送信され、ブラウザーは画像が汚染されたものとしてマークし、その画像データへのアクセスを制限して、 {{HTMLElement("canvas")}} 要素での使用を防ぎます。

    `crossorigin` 属性が指定されて*いる*場合は、({{httpheader("Origin")}} リクエストヘッダーを伴う) CORS リクエストが送信されます。しかし、サーバーがオリジンのサイトによる画像データへのオリジン間アクセスを許可することをオプトインしない場合 ({{httpheader("Access-Control-Allow-Origin")}} レスポンスヘッダーが一切送信されていないか、送信された {{httpheader("Access-Control-Allow-Origin")}} レスポンスヘッダーにサイトのオリジンが含まれていない場合)、ブラウザーは画像を読み込むことをブロックし、開発ツールのコンソールに CORS エラーを記録します。

    許可されている値:

    - `anonymous`
      - : CORS リクエストは、資格情報を省略して (つまり、{{glossary("cookie", "クッキー")}}、[X.509 証明書](https://datatracker.ietf.org/doc/html/rfc5280)、 {{httpheader("Authorization")}} リクエストヘッダーなしで) 送信されます。
    - `use-credentials`
      - : CORS リクエストは、資格情報 (つまり、Cookie、X.509 証明書、 `Authorization` リクエストヘッダー) が含まれた状態で送信されます。サーバーが元のサイトとの資格情報の共有を選択する (`Access-Control-Allow-Credentials: true` レスポンスヘッダーを送り返す) ことをしなかった場合、ブラウザーは画像を汚染されたものとしてマークし、その画像データへのアクセスを制限します。

    この属性の値が無効である場合は、列挙型のキーワードに `anonymous` が指定されたものとして扱われます。詳しくは[CORS 設定属性](/ja/docs/Web/HTML/Attributes/crossorigin)を参照してください。

- `decoding`

  - : ブラウザーに画像のデコードのヒントを提供します。次のような値が使用できます。

    - `sync`
      - : 他のコンテンツと不可分の表示として、画像を同期的にデコードします。
    - `async`
      - : 他のコンテンツの表示が遅れないように、画像を非同期的にデコードします。
    - `auto`
      - : 既定のモードで、デコード方式を指定しません。ブラウザーはユーザーのために最良の方法を選択します。

- `elementtiming`

  - : {{domxref("PerformanceElementTiming")}} API による監視のために画像をマークします。指定された値は、監視される画像要素の識別子になります。[`elementtiming`](/ja/docs/Web/HTML/Attributes/elementtiming) 属性のページも参照してください。

- `fetchpriority` {{experimental_inline}}

  - : 画像を取得する際に使用する相対的な優先順位のヒントを提供します。許可されている値は次の通りです。

    - `high`
      - : 他の画像と比較して読み込みの優先度が高いことを示します。
    - `low`
      - : 他の画像と比較して読み込みの優先度が低いことを示します。
    - `auto`
      - : 既定値。他の画像との相対的な読み込みの優先順位を自動的に決定することを指示します。

- `height`

  - : 画像固有の高さをピクセル値で指定します。単位のない整数でなければなりません。

    > **メモ:** `height` と [`width`](#width) を記載することで、画像を読み込む前にブラウザーが画像の縦横比を計算することができるようになります。このアスペクト比は、画像を表示するために必要な空間を確保するために使用され、画像をダウンロードして画面に表示したときのレイアウトのずれを縮小したり、防止したりすることができます。レイアウトのずれを縮小することは、良い使い勝手とウェブパフォーマンスの主要な構成要素です。

- `ismap`

  - : 論理属性で、この画像が[サーバーサイドマップ](https://en.wikipedia.org/wiki/Image_map#Server-side)の一部であるかを示します。そうである場合は、クリック位置の正確な座標をサーバーに送信します。

    > **メモ:** この属性は `<img>` 要素が、有効な [`href`](/ja/docs/Web/HTML/Element/a#href) 属性を持つ {{htmlelement("a")}} 要素の子孫である場合に限り許可されます。これにより、ポインティングデバイスを持たないユーザーのフォールバック先を提供します。

- `loading`

  - : ブラウザーがどのように画像を読み込むかを示します。

    - `eager`
      - : 画像が現在可視ビューポートに入っているかどうかにかかわらず、直ちに画像を読み込みます (これが既定値です)。
    - `lazy`
      - : 画像がブラウザーで定義されたビューポートからの距離に達するまで、画像の読み込みを遅延させます。これは、画像が必要とされるのが合理的に確実になるまで、処理に必要なネットワークやストレージの帯域幅を使用しないようにするためです。これは一般的に、ほとんどの典型的な使用法において、コンテンツの性能を向上させることができます。

      > **メモ:** 読み込みが延期されるのは JavaScript が有効になっているときだけです。これはトラッキング対策であり、スクリプトが無効になっているときにユーザーエージェントが遅延読み込みに対応している場合でも、サーバーがいつ何枚の画像が要求されたかを追跡できるようにページのマークアップに画像を戦略的に配置することで、サイトがセッション全体を通してユーザーのおおよそのスクロール位置を追跡することが可能になるからです。

- `referrerpolicy`

  - : リソースを読み込む際に、どのリファラーを使用するかを示す文字列です。

    - `no-referrer`: {{HTTPHeader("Referer")}} ヘッダーを送信しないことを表します。
    - `no-referrer-when-downgrade`: ある{{glossary("origin", "オリジン")}}へ{{glossary("TLS")}} ({{glossary("HTTPS")}}) を使用せずに移動した場合に、 {{HTTPHeader("Referer")}} ヘッダーを送信しないことを表します。
    - `origin`: 送られるリファラーは、参照しているページページのオリジン、すなわち[スキーム](/ja/docs/Learn/Common_questions/Web_mechanics/What_is_a_URL)、{{glossary("host", "ホスト名")}}、{{glossary("port", "ポート番号")}}のみとなります。
    - `origin-when-cross-origin`: 異なるオリジンへの移動では、リファラーをスキーム、ホスト、ポートのみに制限します。同一のオリジンへの移動では、リファラーのフルパスを含めます。
    - `same-origin`: リファラーは{{glossary("Same-origin policy", "同じオリジン")}}に対しては送信されますが、オリジン間リクエストではリファラー情報が入りません。
    - `strict-origin`: プロトコルのセキュリティレベルが同等 (HTTPS→HTTPS) である場合は、リファラーとしてこの文書のオリジンが送信されますが、安全性の低い宛先 (HTTPS→HTTP) には送信されません。
    - `strict-origin-when-cross-origin`（既定値）: 同一オリジンリクエストを行う際には完全な URL を送信し、セキュリティレベルが同等 (HTTPS→HTTPS) の場合はオリジンのみを送信し、安全性の低い宛先 (HTTPS→HTTP) にはヘッダーを送信しません。
    - `unsafe-url`: リファラーにはオリジンとパスを含めることを表します（ただし、フラグメント、パスワード、ユーザー名は含めません）。**この値は安全ではありません**。オリジンやパスの情報が TLS で保護されたリソースから安全でないオリジンへ漏えいするからです。

- `sizes`

  - : ソースのサイズのセットを示す、カンマ区切りの文字列を1個以上並べたリストです。それぞれのソースサイズの構成は以下のとおりです。

    1. [メディア条件](/ja/docs/Web/CSS/Media_Queries/Using_media_queries#構文)。リスト内の最後のアイテムでは省略しなければなりません。
    2. ソースサイズ値。

    メディアの状態は*ビューポート*のプロパティで記述するものであり、*画像*のプロパティではありません。例えば、 `(max-height: 500px) 1000px` は、*ビューポート*の高さが 500px 以下であれば 1000px 幅のソースを使用することを提案します。

    ソースサイズ値は、画像の表示サイズを指定するものです。{{glossary("User agent", "ユーザーエージェント")}}は `srcset` 属性で与えられたソースからひとつを選択するために、現在のソースサイズを使用します。そのとき、ソースは幅記述子 ('`w`') を使用して説明します。選択したソースサイズは画像の{{glossary("intrinsic size", "固有の寸法")}}（{{glossary("CSS")}} スタイルが適用されていない場合の、画像の表示サイズ）に影響します。`srcset` 属性がない場合、あるいは幅記述子 (`w`) を持つ値がない場合は、`sizes` 属性の効果はありません。

- `src`
  - : 画像の {{glossary("URL")}} です。 `<img>` 要素に必須です。 `srcset` に対応する{{glossary("Browser", "ブラウザー")}}では `src` を、画素密度記述子 `1x` の候補画像であるように扱います。ただし、この画素密度記述子が `srcset` で定義済みである、または `srcset` に '`w`' 記述子が含まれている場合を除きます。
- `srcset`

  - : {{glossary("user agent", "ユーザーエージェント")}}が使用可能なソース画像のセットを示す、カンマ区切りで文字列を 1 個以上並べたリストです。各々の文字列の構成は以下のとおりです。

    1. 画像の {{glossary("URL")}}
    2. 任意で、ホワイトスペースの後に以下のいずれかを記述します。

       - 幅記述子（正の整数の直後に `w` を付加したもの）。幅記述子は実際の画素密度を計算するために、`sizes` 属性で与えられたソースサイズで割られます。
       - 画素密度記述子（正の浮動小数点数の直後に `x` を付加したもの）。

    記述子を指定しない場合は、ソースを既定の記述子 `1x` に割り当てます。

    幅記述子と画素密度記述子を同一の `srcset` 属性に混在させると無効になります。重複した記述子（例えばひとつの `srcset` に2つのソースがあり、どちらも '`2x`' とする）も無効になります。

    `srcset` 属性が幅の記述子を使用した場合、 `sizes` 属性も指定しなければなりません。そうでなければ、 `srcset` 自体が無視されます。

    ユーザーエージェントには、利用可能なソースからひとつを選択する裁量があります。これは、ユーザー設定や{{glossary("bandwidth", "帯域幅")}}の条件などに基づいて選択を適合させるような、かなりの裁量が与えられています。例としては[レスポンシブ画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)のチュートリアルをご覧ください。

- `width`
  - : 画像固有の幅をピクセル値で指定します。単位のない整数でなければなりません。
- `usemap`

  - : 要素に関連づけられた[イメージマップ](/ja/docs/Web/HTML/Element/map)の部分的な {{glossary("URL")}} ('`#`' で始まる) です。

    > **メモ:** `<img>` 要素が {{htmlelement("a")}} または {{HTMLElement("button")}} 要素の子孫である場合は、この属性を使用することはできません。

### 非推奨の属性

- `align` {{deprecated_inline}}

  - : 周囲のコンテキストに対する画像の配置を指定します。代わりに {{glossary("CSS")}} の {{cssxref('float')}} プロパティや {{cssxref('vertical-align')}} プロパティを使用してください。使用できる値は次の通りです。

    - `top`
      - : `vertical-align: top;` または `vertical-align: text-top;` と等価です。
    - `middle`
      - : `vertical-align: -moz-middle-with-baseline;` と等価です。
    - `bottom`
      - : 値の既定値はなく `vertical-align: unset;` または `vertical-align: initial;` と等価です。
    - `left`
      - : `float: left;` と等価です。
    - `right`
      - : `float: right;` と等価です。

- `border` {{deprecated_inline}}
  - : 画像の周りの境界線の幅を指定します。代わりに {{glossary("CSS")}} の {{cssxref('border')}} プロパティを使用してください。
- `hspace` {{deprecated_inline}}
  - : 画像の左右に挿入する空間の幅をピクセル単位で指定します。代わりに CSS の {{cssxref('margin')}} プロパティを使用してください。
- `longdesc` {{deprecated_inline}}

  - : 画像の詳細な説明へのリンクです。有効な値は、 {{glossary("URL")}} または要素の [`id`](/ja/docs/Web/HTML/Global_attributes#id) です。

    > **メモ:** この属性は、最新の {{glossary("W3C")}} のバージョンである [HTML 5.2](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc) でも言及されていますが、 {{glossary("WHATWG")}} の [HTML Living Standard](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element) では完全に削除されています。将来が不確実なので、代わりに、[`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby) または[`aria-details`](https://www.w3.org/TR/wai-aria-1.1/#aria-details) のような {{glossary("WAI")}}-{{glossary("ARIA")}} の代替手段を使用してください。

- `name` {{deprecated_inline}}
  - : 要素の名前です。代わりに [`id`](/ja/docs/Web/HTML/Global_attributes#id) 属性を使用してください。
- `vspace` {{deprecated_inline}}
  - : 画像の上下に挿入する空間の幅をピクセル単位で指定します。HTML5 では、代わりに CSS の {{cssxref('margin')}} プロパティを使用してください。

## CSS でのスタイル付け

`<img>` は[置換要素](/ja/docs/Web/CSS/Replaced_element)です。 {{cssxref("display")}} の値が既定で `inline` ですが、既定の寸法は埋め込まれた画像の内部的な値で定義されます。画像には {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}}, などのプロパティを設定することができます。

`<img>` にはベースラインがありません。つまり {{cssxref("vertical-align")}}`: baseline` を伴うインライン整形コンテキスト内で使用したときに、画像の下端はコンテナーのベースラインに揃えられます。

{{cssxref("object-position")}} プロパティを使用して、要素ボックス内の画像の位置を指定したり、 {{cssxref("object-fit")}} プロパティを使用して、ボックス内の画像の寸法を調整したり（例えば、クリッピングが必要な時に画像をボックスに合わせるか埋めるか）することができます。

画像の種類に応じて、固有の寸法を持つことができます。ただし、固有の寸法が必須ではない画像形式があります。例えば {{glossary("SVG")}} 画像は、固有の寸法を持ちません。つまり、 SVG 画像には {{SVGElement("svg")}} 要素に `width` または `height` が設定されていない限り、固有の寸法はありません。

## 例

### 代替テキスト

以下の簡単な例では、ページに画像を埋め込み、アクセシビリティを向上させるために代替テキストを含めています。

```html
<img src="favicon144.png" alt="MDN ロゴ" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### 画像リンク

この例は前回のを土台に、画像をリンクにする方法を示しています。これを行うのはとても単純です。 — `<img>` タグを {{HTMLElement("a")}} の中に組み込むだけです。一つの考慮事項として、リンクが指すリソースを説明する代替テキストを作成するようにしてください。

```html
<a href="https://developer.mozilla.org">
  <img src="favicon144.png" alt="MDN サイトにおいでください" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### srcset 属性の使用

この例では、 `srcset` 属性によって高解像度版のロゴの参照を指定しています。これで、高解像度の端末では `src` 画像の代わりにこちらが読み込まれます。 `src` で参照される画像は、 `srcset` に対応している{{glossary("User agent", "ユーザーエージェント")}}では、 `1x` の候補としてカウントされます。

```html
<img src="favicon72.png" alt="MDN ロゴ" srcset="favicon144.png 2x">
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### srcset および sizes 属性の使用

`src` 属性は、 `srcset` に対応している{{glossary("User agent", "ユーザーエージェント")}}で '`w`' 記述子を使用している場合は無視されます。 `(max-width: 600px)` のメディア条件に一致すると、 200px の幅の画像 (200px にもっと近いもの) が読み込まれ、そうでなければ他の画像が読み込まれます。

```html
<img
  src="clock-demo-200px.png"
  alt="時計"
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(max-width: 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> **メモ:** その場で大きさを変更してみるには、{{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'この例を別なページで表示')}}させる必要があり、そうすればコンテンツ領域の大きさを実際に使用することができます。

## セキュリティとプライバシーの考慮事項

`<img>` 要素の多くは無害な使用ですが、ユーザーのセキュリティとプライバシーに望ましくない結果をもたらす可能性もあります。詳細情報と緩和策については [Referer ヘッダー: プライバシーとセキュリティの考慮事項](/ja/docs/Web/Security/Referer_header:_privacy_and_security_concerns)を参照してください。

## アクセシビリティの考慮

### 意味のある代替説明を書く

`alt` 属性の値は明確で簡潔に画像の内容を説明するものにしてください。画像そのもの存在を説明するものであったり、画像のファイル名であったりするべきではありません。画像が言葉で説明できるものではなく、 `alt` 属性を意図的に省略する場合は、画像が伝えようとしていることの内容を他の方法で表すように考慮してください。

#### 悪い例

```html example-bad
<img alt="image" src="penguin.jpg" />
```

#### 良い例

```html example-good
<img alt="海岸に立っているイワトビペンギン" src="penguin.jpg" />
```

`alt` 属性が画像にない場合、読み上げソフトによっては代わりに画像のファイル名を読み上げることがあります。ファイル名が画像の内容を表していない場合、これが操作を混乱させる可能性があります。

- [An alt Decision Tree • Images • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-texts: The Ultimate Guide — Axess Lab](https://axesslab.com/alt-texts/)
- [How to Design Great Alt Text: An Introduction | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN "WCAG を理解する ― ガイドライン 1.1 の解説"](/ja/docs/Web/Accessibility/Understanding_WCAG/Perceivable#guideline_1.1_—_providing_text_alternatives_for_non-text_content)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG を画像として識別

[VoiceOver のバグ](https://webkit.org/b/216364)により、VoiceOver は SVG 画像を画像として正しくアナウンスしません。SVG のソースファイルを持つすべての `<img>` 要素に [`role="img"`](/ja/docs/Web/Accessibility/ARIA/Roles/img_role) を記載し、支援技術が SVG を画像コンテンツとして正しくアナウンスするようにしてください。

```html
<img src="mdn.svg" alt="MDN logo" role="img" />
```

### title 属性

[`title`](/ja/docs/Web/HTML/Global_attributes#title) 属性を `alt` 属性の代わりに利用することはできません。加えて、 `alt` 属性の値を同じ画像の `title` 属性に複製して宣言することは避けてください。このようにすると、読み上げソフトが説明を二回読み上げ、操作を混乱させる可能性があります。

`title` 属性は、画像の `alt` の説明と組み合わせた補助的な説明として使用するべきでもありません。画像にキャプションが必要であれば、 [`figure`](/ja/docs/Web/HTML/Element/figure) および [`figcaption`](/ja/docs/Web/HTML/Element/figcaption) 要素と組み合わせて使用してください。

`title` 属性の値は、よくツールチップとして、画像の上でカーソルを停止させた後で間もなく表示されます。これはユーザーに追加の情報を提供する*ことができます*が、ユーザーが必ず見ると仮定してはいけません。ユーザーが見ることが特に重要または有益である情報があるのであれば、上記の `title` を使用するのではなく、何らかの方法で行内に表示するべきです。

- [Using the HTML title attribute – updated | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a>
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#フローコンテンツ">フローコンテンツ</a>、
        <a href="/ja/docs/Web/HTML/Content_categories#記述コンテンツ">記述コンテンツ</a>、
        <a href="/ja/docs/Web/HTML/Content_categories#埋め込みコンテンツ">埋め込みコンテンツ</a>、
        <a href="/ja/docs/Web/HTML/Content_categories#知覚可能コンテンツ">知覚可能コンテンツ</a>。要素が <code>usemap</code> 属性を持つ場合は、対話型コンテンツのカテゴリーの一角にもなります。
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>なし。これは{{glossary("void element", "空要素")}}です。</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>開始タグは必須。終了タグを記述してはなりません。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>埋め込みコンテンツを受け入れるすべての要素。</td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <ul>
          <li>
            空ではない <code>alt</code> がある場合や <code>alt</code> 属性がない場合:
            <code
              ><a href="/ja/docs/Web/Accessibility/ARIA/Roles/img_role"
                ><code>img</code></a
              ></code
            >
          </li>
          <li>
            空の <code>alt</code> 属性がある場合:
            <a href="/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role"
              ><code>presentation</code></a
            >
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>
        <ul>
          <li>
            空ではない <code>alt</code> がある場合:
            <ul>
              <li>
                <code
                  ><a
                    href="/ja/docs/Web/Accessibility/ARIA/Roles/button_role"
                    >button</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a
                    href="/ja/docs/Web/Accessibility/ARIA/Roles/checkbox_role"
                    >checkbox</a
                  ></code
                >
              </li>
              <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/link_role"><code>link</code></a></li>
              <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/menuitem_role"><code>menuitem</code></a></li>
              <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a></li>
              <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/menuitemradio_role"><code>menuitemradio</code></a></li>
              <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/option_role"><code>option</code></a></li>
              <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/progressbar_role"><code>progressbar</code></a></li>
              <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/scrollbar_role"><code>scrollbar</code></a></li>
              <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/separator_role"><code>separator</code></a></li>
              <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/slider_role"><code>slider</code></a></li>
              <li>
                <code
                  ><a
                    href="/ja/docs/Web/Accessibility/ARIA/Roles/Switch_role"
                    >switch</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a href="/ja/docs/Web/Accessibility/ARIA/Roles/Tab_Role"
                    >tab</a
                  ></code
                >
              </li>
              <li><a href="/ja/docs/Web/Accessibility/ARIA/Roles/treeitem_role"><code>treeitem</code></a></li>
            </ul>
          </li>
          <li>
            空の <code>alt</code> 属性がある場合、 <a href="/ja/docs/Web/Accessibility/ARIA/Roles/none_role"><code>none</code></a>
            または <a href="/ja/docs/Web/Accessibility/ARIA/Roles/presentation_role"><code>presentation</code></a>
          </li>
          <li>
            <code>alt</code> 属性がない場合、許可されている <code>role</code> なし
          </li>
        </ul>
      </td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{domxref("HTMLImageElement")}}</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [HTML の画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Images_in_HTML)
- [画像のファイル形式のガイド](/ja/docs/Web/Media/Formats/Image_types)
- [レスポンシブ画像](/ja/docs/Learn/HTML/Multimedia_and_embedding/Responsive_images)
- {{HTMLElement("picture")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}} 要素
- その他の画像に関する CSS プロパティ: {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}
