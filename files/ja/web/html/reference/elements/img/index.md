---
title: "<img>: 画像埋め込み要素"
slug: Web/HTML/Reference/Elements/img
l10n:
  sourceCommit: 493802c1d8ada608700ba664a45bbca5127b913c
---

**`<img>`** は [HTML](/ja/docs/Web/HTML) の要素で、文書に画像を埋め込みます。

{{InteractiveExample("HTML デモ: &lt;img&gt;", "tabbed-standard")}}

```html interactive-example
<img
  class="fit-picture"
  src="/shared-assets/images/examples/grapefruit-slice.jpg"
  alt="グレープフルーツのスライスが他のスライス山盛りの上に載っている" />
```

```css interactive-example
.fit-picture {
  width: 250px;
}
```

上記の例では、 `<img>` 要素の使い方を示しています。

- `src` 属性は、埋め込みたい画像へのパスを保持します。[`srcset`](/ja/docs/Web/API/HTMLImageElement/srcset) 属性が利用できる場合、`src` 属性は必須ではありません。ただし、`src` 属性または `srcset` 属性の少なくとも一方は指定しなければなりません。
- `alt` 属性は、この画像のテキストによる代替情報を保持します。これは必須であり、アクセシビリティに**非常に役立つ**ものです。スクリーンリーダーは、この属性値をユーザーに読み上げるので、画像の意味が分かります。また、ネットワークエラーやコンテンツのブロック、リンク切れ等の理由で画像が読み込めなかった場合にも代替テキストが表示されます。

他にも、様々な目的で指定できる属性がたくさんあります。

- セキュリティとプライバシーのための[リファラー](/ja/docs/Web/HTTP/Reference/Headers/Referrer-Policy)/{{glossary("CORS")}} 制御。 [`crossorigin`](#crossorigin) および [`referrerpolicy`](#referrerpolicy) を参照してください。
- [`width`](#width) と [`height`](#height) の両方を使用して画像の固有の寸法を設定すると、画像を読み込む前に場所を確保し、コンテンツのレイアウトが移動することを防ぐことができます。
- [`sizes`](#sizes) および [`srcset`](#srcset) を使用したレスポンシブ画像のヒント ({{htmlelement("picture")}} 要素と[レスポンシブ画像](/ja/docs/Web/HTML/Guides/Responsive_images)のチュートリアルもご覧ください)。

## 対応している画像形式

HTML 標準では、対応する画像形式を指定していないので、{{glossary("user agent", "ユーザーエージェント")}}によって対応する画像形式は異なります。

> [!NOTE]
> [画像ファイルの種類と形式ガイド](/ja/docs/Web/Media/Guides/Formats/Image_types) には、画像ファイルとウェブブラウザーの対応に関する包括的な情報があります。
> この節は概要のみです。

ウェブで最もよく使われる画像ファイル形式は、以下の通りです。

- [APNG (Animated Portable Network Graphics)](/ja/docs/Web/Media/Guides/Formats/Image_types#apng_animated_portable_network_graphics) — 可逆性のあるアニメーションシーケンスに適しています（GIF はパフォーマンスが劣る）
- [AVIF (AV1 Image File Format)](/ja/docs/Web/Media/Guides/Formats/Image_types#avif_画像) — 高い性能により、画像とアニメーションの両方に適しています。
- [GIF (Graphics Interchange Format)](/ja/docs/Web/Media/Guides/Formats/Image_types#gif_graphics_interchange_format) — シンプルな画像やアニメーションに適しています。
- [JPEG (Joint Photographic Expert Group image)](/ja/docs/Web/Media/Guides/Formats/Image_types#jpeg_joint_photographic_experts_group_image) — 静止画の非可逆圧縮に適しています（現在最も普及しています）。
- [PNG (Portable Network Graphics)](/ja/docs/Web/Media/Guides/Formats/Image_types#png_portable_network_graphics) — 静止画の可逆圧縮に適しています（JPEG より若干画質が良い）。
- [SVG (Scalable Vector Graphics)](/ja/docs/Web/Media/Guides/Formats/Image_types#svg_scalable_vector_graphics) — ベクター画像形式。異なるサイズでも正確に描画する必要がある画像に使用します。
- [WebP (Web Picture format)](/ja/docs/Web/Media/Guides/Formats/Image_types#webp_画像) — 画像とアニメーションの両方に優れた選択です。

[WebP](/ja/docs/Web/Media/Guides/Formats/Image_types#webp_画像) や [AVIF](/ja/docs/Web/Media/Guides/Formats/Image_types#avif_画像) などは、PNG、JPEG、GIF よりはるかに性能が良く、静止画と動画の両方で使えるのでおすすめします。

SVG は、異なるサイズでも正確に描画する必要がある画像に推奨される形式であることに変わりはありません。

## 画像読み込みエラー

画像の読み込みまたは描画の間にエラーが発生した場合で、かつ `onerror` イベントハンドラーが {{domxref("HTMLElement/error_event", "error")}} イベントを扱うよう設定されていた場合は、イベントハンドラーが呼び出されます。これは例えば次のように、様々な状況で発生します。

- `src` または `srcset` 属性が空 (`""`) または `null` である。
- 指定された `src` の {{glossary("URL")}} が現在ユーザーがいるページの URL と同じである。
- 指定された画像が何らかの理由で読み込みが妨害され、中止された。
- 指定された画像のメタデータが、寸法を受け取ることができないなどの理由で読み込みが中止され、かつ `<img>` 要素の属性に寸法が指定されていなかった場合。
- 指定された画像が、{{glossary("user agent", "ユーザーエージェント")}}が対応している形式ではない場合。

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)があります。

- [`alt`](/ja/docs/Web/API/HTMLImageElement/alt#usage_notes)
  - : ページ内の画像を置き換えることができるテキストを定義します。

    > [!NOTE]
    > ブラウザーは常に画像を表示するわけではありません。ブラウザーが画像を表示しない状況はいくつかがあります。
    >
    > - 視覚ブラウザー以外のブラウザー（視覚障碍者向けのものを含む）で閲覧された場合
    > - ユーザーが画像を非表示に設定している場合（帯域の節約、プライバシー上の理由）
    > - 画像が無効であったり[未対応の画像形式](#対応している画像形式)であったりした場合
    >
    > このような場合、ブラウザーは、画像をこの要素の `alt` 属性で定義された文字列に置き換えます。このような理由から、 `alt` には可能な限り役に立つ値を指定するべきです。

    この属性に空文字列を設定すると (`alt=""`)、この画像がコンテンツにおいて重要な箇所*ではない*ことを示し、視覚ブラウザーではない場合は{{glossary("Engine/Rendering", "レンダリング")}}を省略することがあります。視覚ブラウザーでは、 `alt` 属性が空欄で、画像の表示に失敗した場合は、壊れた画像のアイコンの表示が省略される場合もあります。

    この属性は画像をテキストにコピー＆ペーストした場合や、リンクされた画像をブックマークに保存したときにも使用されます。

- `attributionsrc` {{experimental_inline}}
  - : ブラウザーに画像リクエストとともに {{httpheader("Attribution-Reporting-Eligible")}} ヘッダーを送信するように指定します。

    サーバー側では、この機能を使用して、{{httpheader("Attribution-Reporting-Register-Source")}} または {{httpheader("Attribution-Reporting-Register-Trigger")}} ヘッダーをレスポンスで送信し、それぞれ画像ベースの[帰属ソース](/ja/docs/Web/API/Attribution_Reporting_API/Registering_sources#html-based_event_sources)または[帰属トリガー](/ja/docs/Web/API/Attribution_Reporting_API/Registering_triggers#html-based_attribution_triggers)を登録します。どのレスポンスヘッダーを送り返すべきかは、登録をトリガーした `Attribution-Reporting-Eligible` ヘッダーの値によって異なります。

    ブラウザーが画像ファイルを含むレスポンスを受信すると、対応するソースまたはトリガーイベントがオフになります。

    > [!NOTE]
    > 詳しくは[帰属レポート API](/ja/docs/Web/API/Attribution_Reporting_API) を参照してください。

    この属性には、設定できるバージョンが 2 つあります。
    - 論理属性、すなわち `attributionsrc` 名のみ。これは、{{httpheader("Attribution-Reporting-Eligible")}} ヘッダーが `src` 属性が指し示すのと同じサーバーに送信されることを指定します。これは、帰属元やトリガー登録を同じサーバーで処理する場合に適しています。帰属トリガーを登録する場合、このプロパティは任意であり、省略した場合は論理値が使用されます。
    - 1 つ以上の URL を含む値、例えば次のようなものです。

    ```html
    <img
      src="image-file.png"
      alt="My image file description"
      attributionsrc="https://a.example/register-source
                         https://b.example/register-source" />
    ```

    これは、リクエストされたリソースが管理下のサーバーにない場合や、別のサーバーでの帰属元の登録を処理したい場合に便利です。この場合、`attributionSrc` の値として1つまたは複数のURLを指定することができます。リソースへのリクエストが発生すると、 {{httpheader("Attribution-Reporting-Eligible")}} ヘッダーが、リソースのオリジンに加えて、`attributionSrc` で指定された URL に送信されます。これらの URL は、登録を完了するために、{{httpheader("Attribution-Reporting-Register-Source")}} または {{httpheader("Attribution-Reporting-Register-Trigger")}} ヘッダーを適切に返すことができます。

    > [!NOTE]
    > 複数の URL を指定すると、同じ機能に複数の帰属元を登録することができます。例えば、成功を測定しようとしている異なるキャンペーンがあり、異なるデータについて異なるレポートを生成する必要がある場合などです。

- [`crossorigin`](/ja/docs/Web/HTML/Reference/Attributes/crossorigin)
  - : 画像を取得する際に {{glossary("CORS")}} を使用しなければならないかどうかを示します。 CORS リクエストから返された[CORS が有効な画像](/ja/docs/Web/HTML/How_to/CORS_enabled_image)は、 {{HTMLElement("canvas")}} 要素で「[汚染](/ja/docs/Web/HTML/How_to/CORS_enabled_image#セキュリティと汚染されたキャンバス)」されることなく再利用することができます。

    `crossorigin` 属性が指定されて*いない*場合は、 ({{httpheader("Origin")}} リクエストヘッダーがない) CORS 以外のリクエストが送信され、ブラウザーは画像が汚染されたものとしてマークし、その画像データへのアクセスを制限して、 {{HTMLElement("canvas")}} 要素での使用を防ぎます。

    `crossorigin` 属性が指定されて*いる*場合は、({{httpheader("Origin")}} リクエストヘッダーを伴う) CORS リクエストが送信されます。しかし、サーバーがオリジンのサイトによる画像データへのオリジン間アクセスを許可することをオプトインしない場合 ({{httpheader("Access-Control-Allow-Origin")}} レスポンスヘッダーが一切送信されていないか、送信された {{httpheader("Access-Control-Allow-Origin")}} レスポンスヘッダーにサイトのオリジンが含まれていない場合)、ブラウザーは画像を読み込むことをブロックし、開発ツールのコンソールに CORS エラーを記録します。

    許可されている値:
    - `anonymous`
      - : CORS リクエストは、資格情報を省略して (つまり、{{glossary("cookie", "クッキー")}}、[X.509 証明書](https://datatracker.ietf.org/doc/html/rfc5280)、 {{httpheader("Authorization")}} リクエストヘッダーなしで) 送信されます。
    - `use-credentials`
      - : CORS リクエストは、資格情報 (つまり、Cookie、X.509 証明書、 `Authorization` リクエストヘッダー) が含まれた状態で送信されます。サーバーが元のサイトとの資格情報の共有を選択する (`Access-Control-Allow-Credentials: true` レスポンスヘッダーを送り返す) ことをしなかった場合、ブラウザーは画像を汚染されたものとしてマークし、その画像データへのアクセスを制限します。

    この属性の値が無効である場合は、列挙型のキーワードに `anonymous` が指定されたものとして扱われます。詳しくは[CORS 設定属性](/ja/docs/Web/HTML/Reference/Attributes/crossorigin)を参照してください。

- `decoding`
  - : この属性は、ブラウザーが画像のデコードを他の DOM コンテンツのレンダリングと一緒に行い、より「正しく」見えるようにするのか (`sync`)、それとも他の DOM コンテンツを先にレンダリングして表示し、画像をデコードして後で表示するのか (`async`) のヒントを提供します。実際には、`async` は次の描画が画像のデコードを待たないことを意味します。

    静的な `<img>` 要素に `decoding` を使用した場合、顕著な効果を認識することは困難です。画像ファイルが（ネットワークやキャッシュから）取得される間、最初は空の画像としてレンダリングされ、その後は独立して処理されるため、コンテンツの更新の「同期」はあまり意識されません。しかし、デコード中にレンダリングがブロックされることは、非常に小さいことが多いものの、計測可能です。より詳細な分析については、[画像デコード属性は実際に何をしているのか](https://www.tunetheweb.com/blog/what-does-the-image-decoding-attribute-actually-do/) を参照してください (tunetheweb.com, 2023)。

    異なる `decoding` タイプを使用すると、 JavaScript を使って動的に `<img>` 要素を DOM に挿入する際に、より顕著な違いが生じます - 詳しくは {{domxref("HTMLImageElement.decoding")}} を参照してください。

    許可されている値は次の通りです。
    - `sync`
      - : 他の DOM コンテンツのレンダリングと同期して画像をデコードし、すべてを一緒に表示します。
    - `async`
      - : 他の DOM コンテンツをレンダリングして表示した後、非同期に画像をデコードします。
    - `auto`
      - : デコードモードの優先順位はありません。ブラウザーがユーザーにとって最適なものを決定します。これは既定値です。

- [`elementtiming`](/ja/docs/Web/HTML/Reference/Attributes/elementtiming)
  - : {{domxref("PerformanceElementTiming")}} API による監視のために画像をマークします。指定された値は、監視される画像要素の識別子になります。[`elementtiming`](/ja/docs/Web/HTML/Reference/Attributes/elementtiming) 属性のページも参照してください。

- `fetchpriority`
  - : 画像を取得する際に使用する相対的な優先順位のヒントを提供します。許可されている値は次の通りです。
    - `high`
      - : 他の画像と比較して高い優先度で読み取ります。
    - `low`
      - : 他の画像と比較して低い優先度で読み取ります。
    - `auto`
      - : フェッチ優先度に優先順位を設定しないでください。
        これが既定値です。
        値がない場合や無効な値が設定されている場合に使用されます。

    詳しくは {{domxref("HTMLImageElement.fetchPriority")}} を参照してください。

- `height`
  - : 画像固有の高さをピクセル値で指定します。単位のない整数でなければなりません。

    > [!NOTE]
    > `height` と [`width`](#width) を記載することで、画像を読み込む前にブラウザーが画像の{{glossary("aspect ratio", "アスペクト比")}}を計算することができるようになります。このアスペクト比は、画像を表示するために必要な空間を確保するために使用され、画像をダウンロードして画面に表示したときのレイアウトのずれを縮小したり、防止したりすることができます。レイアウトのずれを縮小することは、良い使い勝手とウェブパフォーマンスの主要な構成要素です。

- `ismap`
  - : 論理属性で、この画像が[サーバーサイドマップ](https://en.wikipedia.org/wiki/Image_map#Server-side)の一部であるかを示します。そうである場合は、クリック位置の正確な座標をサーバーに送信します。

    > [!NOTE]
    > この属性は `<img>` 要素が、有効な [`href`](/ja/docs/Web/HTML/Reference/Elements/a#href) 属性を持つ {{htmlelement("a")}} 要素の子孫である場合に限り許可されます。これにより、ポインティングデバイスを持たないユーザーのフォールバック先を提供します。

- `loading`
  - : ブラウザーがどのように画像を読み込むかを示します。
    - `eager`
      - : 画像が現在可視ビューポートに入っているかどうかにかかわらず、直ちに画像を読み込みます (これが既定値です)。
    - `lazy`
      - : 画像がブラウザーで定義されたビューポートからの距離に達するまで、画像の読み込みを遅延させます。これは、画像が必要とされるのが合理的に確実になるまで、処理に必要なネットワークやストレージの帯域幅を使用しないようにするためです。これは一般的に、ほとんどの典型的な使用法において、コンテンツの性能を向上させることができます。

    > [!NOTE]
    > 読み込みが延期されるのは JavaScript が有効になっているときだけです。これはトラッキング対策であり、スクリプトが無効になっているときにユーザーエージェントが遅延読み込みに対応している場合でも、サーバーがいつ何枚の画像が要求されたかを追跡できるようにページのマークアップに画像を戦略的に配置することで、サイトがセッション全体を通してユーザーのおおよそのスクロール位置を追跡することが可能になるからです。

    > [!NOTE]
    > 画像の `loading` が `lazy` に設定されていると、たとえ読み込みによって表示が変更されるとしても、可視要素と交差しない場合は決して読み込まれません。未読み込みの画像は `width` および `height` が `0` であるためです。遅延読み込みの画像に `width` および `height` を設定すると、この問題が解決され、[仕様で推奨](https://html.spec.whatwg.org/multipage/embedded-content.html#the-img-element)されているベストプラクティスとなります。また、レイアウトのずれを防ぐことにも役立ちます。

- `referrerpolicy`
  - : リソースを読み込む際に、どのリファラーを使用するかを示す文字列です。
    - `no-referrer`: {{HTTPHeader("Referer")}} ヘッダーを送信しないことを表します。
    - `no-referrer-when-downgrade`: ある{{glossary("origin", "オリジン")}}へ{{glossary("TLS")}} ({{glossary("HTTPS")}}) を使用せずに移動した場合に、 {{HTTPHeader("Referer")}} ヘッダーを送信しないことを表します。
    - `origin`: 送られるリファラーは、参照しているページページのオリジン、すなわち[スキーム](/ja/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL)、{{Glossary("host", "ホスト名")}}、{{Glossary("port", "ポート番号")}}のみとなります。
    - `origin-when-cross-origin`: 異なるオリジンへの移動では、リファラーをスキーム、ホスト、ポートのみに制限します。同一のオリジンへの移動では、リファラーのフルパスを含めます。
    - `same-origin`: リファラーは{{glossary("Same-origin policy", "同じオリジン")}}に対しては送信されますが、オリジン間リクエストではリファラー情報が入りません。
    - `strict-origin`: プロトコルのセキュリティレベルが同等 (HTTPS→HTTPS) である場合は、リファラーとしてこの文書のオリジンが送信されますが、安全性の低い宛先 (HTTPS→HTTP) には送信されません。
    - `strict-origin-when-cross-origin`（既定値）: 同一オリジンリクエストを行う際には完全な URL を送信し、セキュリティレベルが同等 (HTTPS→HTTPS) の場合はオリジンのみを送信し、安全性の低い宛先 (HTTPS→HTTP) にはヘッダーを送信しません。
    - `unsafe-url`: リファラーにはオリジンとパスを含めることを表します（ただし、フラグメント、パスワード、ユーザー名は含めません）。**この値は安全ではありません**。オリジンやパスの情報が TLS で保護されたリソースから安全でないオリジンへ漏えいするからです。

- `sizes`
  - : ソースのサイズのセットを示す、カンマ区切りの文字列を1個以上並べたリストです。

    **ソースサイズ**は次のものから構成されます。
    1. [メディア条件](/ja/docs/Web/CSS/Guides/Media_queries/Using#構文)で、リストの最後のアイテムでは省略されます。
    2. ソースサイズ値。

    メディア条件は**ビューポート**の特性を記述するものであり、**画像**の特性ではありません。例えば、`(height <= 500px) 1000px` は、ビューポートの高さが 500px 以下の場合に幅 1000px の画像ソースを使用することを提案します。ソースサイズ記述子はレイアウト時に使用する画像の幅を指定しますため、メディア条件は通常（必ずしもそうとは限らないが） [width](/ja/docs/Web/CSS/Reference/At-rules/@media/width) に基づいています。

    ソースサイズ値は、画像の表示サイズを指定するものです。{{glossary("User agent", "ユーザーエージェント")}}は `srcset` 属性で与えられたソースからひとつを選択するために、現在のソースサイズを使用します。そのとき、ソースは幅記述子 ('`w`') を使用して説明します。選択したソースサイズは画像の{{glossary("intrinsic size", "固有の寸法")}}（{{glossary("CSS")}} スタイルが適用されていない場合の、画像の表示サイズ）に影響します。`srcset` 属性がない場合、あるいは幅記述子 (`w`) を持つ値がない場合は、`sizes` 属性の効果はありません。

    ソースサイズの値は、非負の任意の[長さ](/ja/docs/Web/CSS/Reference/Values/length)でなければなりません。また、[数学関数](/ja/docs/Web/CSS/Reference/Values/Functions#math_functions)以外の CSS 関数を使用してはなりません。単位は[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)と同様に解釈されます。つまり、すべての相対長の単位は `<img>` 要素ではなく文書ルートを基準とします。例えば `em` 値は画像のフォントサイズではなく、ルートフォントサイズを基準とします。[パーセント値](/ja/docs/Web/CSS/Reference/Values/percentage) は使用できません。

    `auto` キーワードは、サイズの一覧全体または一覧の最初の項目を置き換えることができます。これは `loading="lazy"` と組み合わせてのみ有効であり、画像の[具体的なサイズ](/ja/docs/Web/CSS/Reference/Values/image)に解決されます。画像の内在サイズは未確定であるため、ブラウザが既定の幅 300px を想定しないよう、`width` および `height` 属性（または CSS の同等プロパティ）も同時に指定してください。
    `auto` に対応していないブラウザーとの後方互換性を高めるため、`sizes` 属性内で `auto` の後に代替サイズを記載することができます。

    ```html
    <img
      loading="lazy"
      width="200"
      height="200"
      sizes="auto, (max-width: 30em) 100vw, (max-width: 50em) 50vw, calc(33vw - 100px)"
      srcset="
        swing-200.jpg   200w,
        swing-400.jpg   400w,
        swing-800.jpg   800w,
        swing-1600.jpg 1600w
      "
      src="swing-400.jpg"
      alt="Kettlebell Swing" />
    ```

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

    ユーザーエージェントには、利用可能なソースからひとつを選択する裁量があります。これは、ユーザー設定や{{glossary("bandwidth", "帯域幅")}}の条件などに基づいて選択を適合させるような、かなりの裁量が与えられています。例としては[レスポンシブ画像](/ja/docs/Web/HTML/Guides/Responsive_images)のチュートリアルをご覧ください。

- `width`
  - : 画像固有の幅をピクセル値で指定します。単位のない整数でなければなりません。
- `usemap`
  - : 要素に関連づけられた[イメージマップ](/ja/docs/Web/HTML/Reference/Elements/map)の部分的な（'`#` で始まる） {{glossary("URL")}} です。

    > [!NOTE]
    > この属性は、`<img>` 要素が {{htmlelement("a")}} または {{HTMLElement("button")}} 要素の子孫である場合に使用することはできません。

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
  - : 画像の詳細な説明へのリンクです。有効な値は、 {{glossary("URL")}} または要素の [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) です。

    > [!NOTE]
    > この属性は、[HTML 仕様書](https://html.spec.whatwg.org/multipage/obsolete.html#element-attrdef-img-longdesc)では古いものとみなされています。将来が不確実なので、代わりに {{glossary("WAI")}}-{{glossary("ARIA")}} の代替手段、たとえば [`aria-describedby`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-describedby) や [`aria-details`](/ja/docs/Web/Accessibility/ARIA/Reference/Attributes/aria-details) を使用してください。

- `name` {{deprecated_inline}}
  - : 要素の名前です。代わりに [`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) 属性を使用してください。
- `vspace` {{deprecated_inline}}
  - : 画像の上下に挿入する空間の幅をピクセル単位で指定します。代わりに CSS の {{cssxref('margin')}} プロパティを使用してください。

## CSS でのスタイル設定

`<img>` は{{ glossary("replaced elements", "置換要素")}}です。 {{cssxref("display")}} の値が既定で `inline` ですが、既定の寸法は埋め込まれた画像の内部的な値で定義されます。画像には {{cssxref("border")}}/{{cssxref("border-radius")}}, {{cssxref("padding")}}/{{cssxref("margin")}}, {{cssxref("width")}}, {{cssxref("height")}}, などのプロパティを設定することができます。

`<img>` にはベースラインがありません。つまり {{cssxref("vertical-align", "vertical-align: baseline")}} を伴うインライン整形コンテキスト内で使用したときに、画像の下端はコンテナーのベースラインに揃えられます。

{{cssxref("object-position")}} プロパティを使用して、要素ボックス内の画像の位置を指定したり、 {{cssxref("object-fit")}} プロパティを使用して、ボックス内の画像の寸法を調整したり（例えば、クリッピングが必要な時に画像をボックスに合わせるか埋めるか）することができます。

画像の種類に応じて、固有の寸法を持つことができます。ただし、固有の寸法が必須ではない画像形式があります。例えば {{glossary("SVG")}} 画像は、固有の寸法を持ちません。つまり、 SVG 画像には {{SVGElement("svg")}} 要素に `width` または `height` が設定されていない限り、固有の寸法はありません。

## アクセシビリティ

### 意味のある代替説明を書く

`alt` 属性の値は明確で簡潔に画像の内容を説明するものにしてください。画像そのもの存在を説明するものであったり、画像のファイル名であったりするべきではありません。画像が言葉で説明できるものではなく、 `alt` 属性を意図的に省略する場合は、画像が伝えようとしていることの内容を他の方法で表すように考慮してください。

#### 悪い例

```html example-bad
<img alt="画像" src="penguin.jpg" />
```

#### 良い例

```html example-good
<img alt="海岸に立っているイワトビペンギン" src="penguin.jpg" />
```

重要なアクセシビリティのテストとして、`alt` 属性の内容を、その前後のテキストコンテンツと併せて読み、画像と同じ意味が伝わるかどうかを確認してください。例えば、画像の前に「旅行中、小さくてかわいい動物を見つけました。」という文がある場合、「悪い例」ではスクリーンリーダーによって「旅行中、小さくてかわいい動物を見つけました。画像」と読み上げられますが、これは意味をなしません。一方、「よい例」ではスクリーンリーダーによって「旅行中、小さくてかわいい動物を見つけました。海岸に立っているイワトビペンギン」と読み上げられ、意味をなします。<!-- 原文の "preceding textual content" を、日本語と英語の文構造の違いを意識し、「その前後のテキストコンテンツ」と意訳しています。 -->

例えば、アクションを起動するために使用される画像（{{htmlelement("a")}} や {{htmlelement("button")}} 要素内にネストされた画像）については、`alt` 属性値内に起動されるアクションを記述することを考えてください。例えば、`alt="右向き矢印"` の代わりに `alt="次のページ"` と記述できます。また、`title` 属性内に任意でさらに詳しい説明を追加することも検討できます。これは、ユーザーが要求した場合にスクリーンリーダーによって読み上げられる場合があります。

画像に `alt` 属性が指定されていない場合、一部のスクリーンリーダーでは代わりに画像のファイル名が読み上げられることがあります。ファイル名が画像の内容を適切に表していない場合、混乱を招く可能性があります。

- [An alt Decision Tree • Images • WAI Web Accessibility Tutorials](https://www.w3.org/WAI/tutorials/images/decision-tree/)
- [Alt-texts: The Ultimate Guide — Axess Lab](https://axesslab.com/alt-texts/)
- [How to Design Great Alt Text: An Introduction | Deque](https://www.deque.com/blog/great-alt-text-introduction/)
- [MDN "WCAG を理解する ― ガイドライン 1.1 の解説"](/ja/docs/Web/Accessibility/Guides/Understanding_WCAG/Perceivable#ガイドライン_1.1_—_非テキストコンテンツのための代替テキストの提供)
- [Understanding Success Criterion 1.1.1 | W3C Understanding WCAG 2.0](https://www.w3.org/TR/UNDERSTANDING-WCAG20/text-equiv-all.html)

### SVG を画像として識別

[VoiceOver のバグ](https://webkit.org/b/216364)により、VoiceOver は SVG 画像を画像として正しくアナウンスしません。SVG のソースファイルを持つすべての `<img>` 要素に [`role="img"`](/ja/docs/Web/Accessibility/ARIA/Reference/Roles/img_role) を記載し、支援技術が SVG を画像コンテンツとして正しくアナウンスするようにしてください。

```html
<img src="mdn.svg" alt="MDN" role="img" />
```

### title 属性

[`title`](/ja/docs/Web/HTML/Reference/Global_attributes/title) 属性を `alt` 属性の代わりに利用することはできません。加えて、 `alt` 属性の値を同じ画像の `title` 属性に複製して宣言することは避けてください。このようにすると、スクリーンリーダーが説明を 2 回読み上げ、操作を混乱させる可能性があります。

`title` 属性は、画像の `alt` の説明と組み合わせた補助的な説明として使用するべきでもありません。画像にキャプションが必要であれば、 [`figure`](/ja/docs/Web/HTML/Reference/Elements/figure) および [`figcaption`](/ja/docs/Web/HTML/Reference/Elements/figcaption) 要素と組み合わせて使用してください。

`title` 属性の値は、よくツールチップとして、画像の上でカーソルを停止させた後で間もなく表示されます。これはユーザーに追加の情報を提供する*ことができます*が、ユーザーが必ず見ると仮定してはいけません。ユーザーはキーボードやタッチパネルしか持っていないかもしれません。ユーザーが見ることが特に重要または有益である情報があるのであれば、上記の `title` を使用するのではなく、何らかの方法で行内に表示するべきです。

- [Using the HTML title attribute – updated | The Paciello Group](https://www.tpgi.com/using-the-html-title-attribute-updated/)

## 例

### 代替テキスト

以下の簡単な例では、ページに画像を埋め込み、アクセシビリティを向上させるために代替テキストを含めています。

```html
<img src="/shared-assets/images/examples/favicon144.png" alt="MDN" />
```

{{ EmbedLiveSample('Alternative_text', '100%', '160') }}

### 画像リンク

この例は前回のを土台に、画像をリンクにする方法を示しています。これを行うのはとても単純です。 `<img>` タグを {{HTMLElement("a")}} の中に組み込むだけです。一つの考慮事項として、リンクが指すリソースを説明する代替テキストを作成するようにしてください。

```html
<a href="https://developer.mozilla.org">
  <img
    src="/shared-assets/images/examples/favicon144.png"
    alt="MDN サイトにおいでください" />
</a>
```

{{ EmbedLiveSample('Image_link', '100%', '160') }}

### srcset 属性の使用

この例では、 `srcset` 属性によって高解像度版のロゴの参照を指定しています。これで、高解像度の端末では `src` 画像の代わりにこちらが読み込まれます。 `src` で参照される画像は、 `srcset` に対応している{{glossary("User agent", "ユーザーエージェント")}}では、 `1x` の候補としてカウントされます。

```html
<img
  src="/shared-assets/images/examples/favicon72.png"
  alt="MDN ロゴ"
  srcset="/shared-assets/images/examples/favicon144.png 2x" />
```

{{EmbedLiveSample("Using_the_srcset_attribute", "100%", "160")}}

### srcset および sizes 属性の使用

`src` 属性は、 `srcset` に対応している{{glossary("User agent", "ユーザーエージェント")}}で '`w`' 記述子を使用している場合は無視されます。 `(width <= 600px)` のメディア条件に一致すると、 200px の幅の画像（200px にもっと近いもの）が読み込まれ、そうでなければ他の画像が読み込まれます。

```html
<img
  src="clock-demo-200px.png"
  alt="いま 12:45 です。"
  srcset="clock-demo-200px.png 200w, clock-demo-400px.png 400w"
  sizes="(width <= 600px) 200px, 50vw" />
```

{{EmbedLiveSample("Using_the_srcset_and_sizes_attributes", "100%", 350)}}

> [!NOTE]
> その場で大きさを変更してみるには、{{LiveSampleLink('Using_the_srcset_and_sizes_attributes', 'この例を別なページで表示')}}させる必要があり、そうすればコンテンツ領域の大きさを実際に使用することができます。

## セキュリティとプライバシーの考慮事項

`<img>` 要素の多くは無害な使用ですが、ユーザーのセキュリティとプライバシーに望ましくない結果をもたらす可能性もあります。詳細情報と緩和策については [Referer ヘッダー: プライバシーとセキュリティの考慮事項](/ja/docs/Web/Privacy/Guides/Referer_header:_privacy_and_security_concerns)を参照してください。

## 技術的概要

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">
        <a href="/ja/docs/Web/HTML/Guides/Content_categories"
          >コンテンツカテゴリー</a
        >
      </th>
      <td>
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#フローコンテンツ"
          >フローコンテンツ</a
        >、
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#記述コンテンツ"
          >記述コンテンツ</a
        >、
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#埋め込みコンテンツ"
          >埋め込みコンテンツ</a
        >、
        <a href="/ja/docs/Web/HTML/Guides/Content_categories#知覚可能コンテンツ"
          >知覚可能コンテンツ</a
        >。要素が <code>usemap</code> 属性を持つ場合は、対話型コンテンツのカテゴリーの一角にもなります。
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
      <td>埋め込みコンテンツを受け入れるすべての要素。</td>
    </tr>
    <tr>
      <th scope="row">暗黙の ARIA ロール</th>
      <td>
        <ul>
          <li>
            空ではない <code>alt</code> がある場合や <code>alt</code> 属性がない場合:
            <code
              ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/img_role"
                ><code>img</code></a
              ></code
            >
          </li>
          <li>
            空の <code>alt</code> 属性がある場合:
            <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"
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
                    href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/button_role"
                    >button</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a
                    href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/checkbox_role"
                    >checkbox</a
                  ></code
                >
              </li>
              <li><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/link_role"><code>link</code></a></li>
              <li><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitem_role"><code>menuitem</code></a></li>
              <li><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemcheckbox_role"><code>menuitemcheckbox</code></a></li>
              <li><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/menuitemradio_role"><code>menuitemradio</code></a></li>
              <li><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/option_role"><code>option</code></a></li>
              <li><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/progressbar_role"><code>progressbar</code></a></li>
              <li><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/scrollbar_role"><code>scrollbar</code></a></li>
              <li><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/separator_role"><code>separator</code></a></li>
              <li><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/slider_role"><code>slider</code></a></li>
              <li>
                <code
                  ><a
                    href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/switch_role"
                    >switch</a
                  ></code
                >
              </li>
              <li>
                <code
                  ><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/tab_role"
                    >tab</a
                  ></code
                >
              </li>
              <li><a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/treeitem_role"><code>treeitem</code></a></li>
            </ul>
          </li>
          <li>
            空の <code>alt</code> 属性がある場合、 <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/none_role"><code>none</code></a>
            または <a href="/ja/docs/Web/Accessibility/ARIA/Reference/Roles/presentation_role"><code>presentation</code></a>
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

- {{HTMLElement("picture")}}, {{HTMLElement("object")}}, {{HTMLElement("embed")}} 要素
- その他の画像に関する CSS プロパティ: {{cssxref("object-fit")}}, {{cssxref("object-position")}}, {{cssxref("image-orientation")}}, {{cssxref("image-rendering")}}, {{cssxref("image-resolution")}}
- この要素の {{domxref("HTMLImageElement")}} インターフェイス
- [HTML の画像](/ja/docs/Learn_web_development/Core/Structuring_content/HTML_images)
- [画像のファイル形式のガイド](/ja/docs/Web/Media/Guides/Formats/Image_types)
- [レスポンシブ画像](/ja/docs/Web/HTML/Guides/Responsive_images)
