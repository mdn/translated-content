---
title: Firefox における実験的機能
slug: Mozilla/Firefox/Experimental_features
tags:
  - 実験的
  - Firefox
  - 設定
  - 機能
translation_of: Mozilla/Firefox/Experimental_features
---
{{FirefoxSidebar}}

このページでは、提案されているまたは最先端のウェブプラットフォーム標準を含む、 Firefox の実験的かつ部分的に実装された機能を一覧にしています。また、それらの機能が搭載されているビルドの情報、「既定で」有効になっているかどうか、有効または無効にするためにどの*環境設定*を使用すべきかについても説明しています。
これにより、機能がリリースされる前に、その機能をテストすることができます。

新機能は、最初に [Firefox Nightly](https://www.mozilla.org/ja/firefox/channel/desktop/) ビルドに登場し、多くの場合、既定で有効化されます。
その後、 [Firefox Developer Edition](https://www.mozilla.org/ja/firefox/developer/) に引き継がれ、最終的にはリリースビルドになります。
リリースビルドにおいて既定で有効化された機能は、もはや実験的なものではないので、このトピックから削除してください。

実験的な機能は、 [Firefox 設定エディター](https://support.mozilla.org/ja/kb/about-config-editor-firefox) (Firefox のアドレスバーに `about:config` と入力) を使って、以下に示す関連する*設定*を変更することで、有効または無効にすることができます。

> **Note:** 編集者の方へ - これらの表に機能を追加する際には、 [`bug`](https://github.com/mdn/yari/blob/main/kumascript/macros/bug.ejs) マクロ `\{{bug(<em>バグ番号</em>)}}` を使って関連するバグへのリンクを含めるようにしてください。

## HTML

### inert 属性

{{domxref("HTMLElement")}} の {{DOMxRef("HTMLElement.inert")}} プロパティは論理値で、存在する場合、ブラウザーが支援技術、ページ検索、テキスト選択から要素を「無視」するようになります。この機能の状態についての詳細は、 {{bug(1655722)}} を参照してください。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>81</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>81</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>81</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>81</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>html5.inert.enabled</code></td>
    </tr>
  </tbody>
</table>

### input type="search" のレイアウト

`input type="search"` のレイアウトが更新されました。これにより、何らかの入力を始めたときに、他のブラウザーの実装と同様にクリアアイコンが現れるようになります。 (詳しくは {{bug(558594)}} を参照してください。)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>81</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>81</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>81</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>81</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.forms.input-type-search.enabled</code></td>
    </tr>
  </tbody>
</table>

### パスワード表示のトグル切り替え

HTML のパスワード入力要素 ([`<input type="password">`](/ja/docs/Web/HTML/Element/input/password)) に「目」のアイコンが入り、パスワードのテキストを表示したり隠したりすることができるようになります ({{bug(502258)}})。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>96</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>96</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>96</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>96</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.forms.input-type-show-password-button.enabled</code></td>
    </tr>
  </tbody>
</table>

## CSS

### CSS の迷子の制御文字を 16 進数のボックスで表示する

この機能は、予期せずタブ (U+0009)、行送り (U+000A)、ページ送り (U+000C)、復改 (U+000D) 以外の制御文字 (Unicode の Cc カテゴリー) が現れていない場合に 16 進数で表示します。 (詳細は {{bug(1099557)}} を参照してください)。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>43</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>43</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>43</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>43</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
        <code>layout.css.control-characters.enabled</code> or
        <code>layout.css.control-characters.visible</code>
      </td>
    </tr>
  </tbody>
</table>

### initial-letter プロパティ

CSS の {{cssxref("initial-letter")}} プロパティは、 [CSS インラインレイアウト](https://drafts.csswg.org/css-inline/)仕様書に含まれており、先頭文字の表示方法を dropped, raise, sunken から指定することができます。 (詳細は {{bug(1223880)}} を参照してください。)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>50</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>50</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>50</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>50</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.initial-letter.enabled</code></td>
    </tr>
  </tbody>
</table>

### メディアクエリーで縦横比として 1 つの数値を使用

[メディアクエリー](/ja/docs/Web/CSS/Media_queries)で縦横比を指定する際に、 1 つの {{cssxref("number")}} を {{cssxref("ratio")}} として使用できるようになりました。 (詳細は {{bug(1565562)}} を参照してください。)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>70</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>70</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>70</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>70</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.aspect-ratio-number.enabled</code></td>
    </tr>
  </tbody>
</table>

### backdrop-filter プロパティ

{{cssxref("backdrop-filter")}} プロパティは、要素の背後の領域にフィルター効果を適用します。 (詳しくは {{bug(1178765)}} を参照してください。)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>70</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>70</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>70</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>70</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.backdrop-filter.enabled</code></td>
    </tr>
  </tbody>
</table>

### fit-content() 関数の width など大きさを指定するプロパティでの使用

{{cssxref("fit-content_function", "fit-content()")}} 関数は {{cssxref("width")}} やその他の寸法のプロパティに適用します。この関数は、 CSS グリッドレイアウトのトラックのサイズ調整ですでに十分対応しています。(詳細は {{bug(1312588)}} を参照してください。)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>91</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>91</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>91</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>91</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.fit-content-function.enabled</code></td>
    </tr>
  </tbody>
</table>

### グリッド: メイソンリーレイアウト

グリッドレイアウトをベースにした[メイソンスタイルレイアウト](/ja/docs/Web/CSS/CSS_Grid_Layout/Masonry_Layout)を追加しました。メイソンリーレイアウトスタイルレイアウトは、一方の軸がメイソンリーレイアウトスタイル、もう一方の軸が通常のグリッドレイアウトです。これにより、開発者は Pinterest のようなギャラリースタイルのレイアウトを簡単に作成できるようになります。詳しくは {{bug(1607954)}} を参照してください。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>77</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>77</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>77</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>77</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
        <code>layout.css.grid-template-masonry-value.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### math-style プロパティ

{{cssxref("math-style")}} プロパティは、 MathML の数式の高さを通常にするかコンパクトにするかを示します。 (詳しくは {{bug(1665975)}} を参照してください。)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>83</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>83</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>83</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>83</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.math-style.enabled</code></td>
    </tr>
  </tbody>
</table>

### スクロール連動レイアウト

{{cssxref('@scroll-timeline')}} アットルールと {{cssxref('animation-timeline')}} プロパティで、（時間ではなく）コンテナーのスクロール進行に連動するアニメーションを定義することができます。
指定されたスクロールタイムラインは、 [CSS アニメーション](/ja/docs/Web/CSS/CSS_Animations) に `animation-timeline` プロパティを用いて関連付けられます。
詳しくは {{bug(1676791)}} と {{bug(1676782)}} を参照してください。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>97</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>97</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>97</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>97</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.scroll-linked-animations.enabled</code></td>
    </tr>
  </tbody>
</table>

## SVG

### SVGPathSeg API

SVGPathSeg API はアンシッピングされ、設定に隠されて配置されています。
これには `SVGPathSegList`, [SVGPathElement.getPathSegAtLength()](/ja/docs/Web/API/SVGPathElement), `SVGAnimatedPathData` が含まれます。
（詳しくは {{bug(1388931)}} を参照してください）。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version removed</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>97</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>97</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>97</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>97</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.svg.pathSeg.enabled</code></td>
    </tr>
  </tbody>
</table>

## JavaScript

### 配列のグループ化メソッド

jsxref("Array.prototype.groupBy()")}} と {{jsxref("Array.prototype.groupByToMap()")}} メソッドは、それぞれテスト関数が返す文字列や値を使って配列の要素をグループ化するために使用されます。
文字列で要素のグループを表現できる場合は `groupBy` メソッドを使用し、値をキーとして使用することが理にかなっている場合は `groupByToMap()` を使用する必要があります。
（詳しくは {{bug(1739648)}} を参照してください。）

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version removed</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>98</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>98</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>98</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>98</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">None</td>
    </tr>
  </tbody>
</table>

## API

### グラフィック: Canvas, WebGL, WebGPU

### OffscreenCanvas インターフェイス

{{domxref("OffscreenCanvas")}} インターフェイスは、画面外で描画できるキャンバスを提供します。これは、ウィンドウと[ワーカー](/ja/docs/Web/API/Web_Workers_API)の両方のコンテキストで利用できます。（詳細は {{bug(1390089)}} を参照してください。）

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>44</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>44</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>44</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>44</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>gfx.offscreencanvas.enabled</code></td>
    </tr>
  </tbody>
</table>

#### ヒット領域

マウスの座標がキャンバス上の特定の領域内にあるかどう かは、解決すべき一般的な問題です。ヒット領域 API を使用すると、キャンバスの領域を定義することができ、キャンバス上のインタラクティブコンテンツをアクセシビリティ ツールに公開する別の可能性が生まれます。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>30</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>30</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>30</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>30</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>canvas.hitregions.enabled</code></td>
    </tr>
  </tbody>
</table>

#### WebGL: ドラフト拡張

この設定を有効にすると、現在 "draft" ステータスでテスト中の WebGL 拡張機能が使用可能になります。現在、 Firefox でテスト中の WebGL 拡張機能はありません。

#### WebGPU API

これは新しい API で、ユーザーの端末やコンピューターの GPU (Graphics Processing Unit) を使用して、計算やグラフィックのレンダリングを行うための低レベルのサポートを提供します。この[仕様](https://gpuweb.github.io/gpuweb/)はまだ完成していません。この API の進捗状況については、 {{bug(1602129)}} を参照してください。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>73</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>73</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>73</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>73</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.webgpu.enabled</code></td>
    </tr>
  </tbody>
</table>

### Audio Output API

#### MediaDevices.selectAudioOutput()

{{domxref("MediaDevices.selectAudioOutput()")}} は、ユーザーが希望する音声出力を選択できるようにプロンプトを表示します。 {{bug(1699026)}} を参照してください。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>88</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>88</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>88</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>88</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>media.setsinkid.enabled</code></td>
    </tr>
  </tbody>
</table>

### WebRTC とメディア

[WebRTC API](/ja/docs/Web/API/WebRTC_API)、[Web Audio API](/ja/docs/Web/API/Web_Audio_API)、[Media Source Extensions API](/ja/docs/Web/API/Media_Source_Extensions_API)、[Encrypted Media Extensions API](/ja/docs/Web/API/Encrypted_Media_Extensions_API)、[Media Capture and Streams API](/ja/docs/Web/API/Media_Streams_API) にある以下の機能は実験的なものです。

非同期の SourceBuffer の追加と削除

これにより、メディアソースバッファを追加および削除するためのプロミスベースのメソッド {{domxref("SourceBuffer.appendBufferAsync", "appendBufferAsync()")}} および {{domxref("SourceBuffer.removeAsync", "removeAsync()")}} が {{domxref("SourceBuffer")}} インターフェイスに追加されます。詳細については、 {{bug(1280613)}} および {{bug(778617)}} を参照してください。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>62</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>62</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>62</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>62</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>media.mediasource.experimental.enabled</code></td>
    </tr>
  </tbody>
</table>

#### AVIF 準拠の厳格性

`image.avif.compliance_strictness` 環境設定は [AVIF](/ja/docs/Web/Media/Formats/Image_types#avif_image) 画像を処理するときに適用する _厳格性_ を制御するために使うことができます。
これにより、 Firefox ユーザーは、他のいくつかのブラウザーでレンダリングされる画像を、たとえ厳密に準拠していなくても表示することができます。

許可される値は以下の通りです。

- `0`: 推奨 (「should」言語) と要求 (「shall」言語) の両方で仕様違反のある画像でも、安全に、あるいは曖昧さを排除して解釈できるのであれば、受け付けます。
- 1` (デフォルト): 1` (デフォルト): 要件違反は却下し、勧告違反は許可する。
- `2`: 厳格。要件や推奨事項の違反は一切認めない。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Default value</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>92</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>92</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>92</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>92</td>
      <td>1</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>image.avif.compliance_strictness</code></td>
    </tr>
  </tbody>
</table>

#### Android 版 Firefox の AV1 対応

Android 版 Firefox で、 [AV1 形式のメディア](/ja/docs/Web/Media/Formats/Video_codecs#av1)を利用できるようになります。この機能は、 Android 版 Firefox 81 以降で有効な Nightly ビルドで利用できます。既定では有効になっています。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>81</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">—</td>
    </tr>
  </tbody>
</table>

#### JPEG XL 対応

この機能を有効にすると、 Firefox は [JPEG XL](https://jpeg.org/jpegxl/) 画像に対応します。詳細は {{bug(1539075)}} を参照してください。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>90</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>90</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>90</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>image.jxl.enabled</code></td>
    </tr>
  </tbody>
</table>

#### Streams API: TransformStreams

[変換ストリーム](/ja/docs/Web/API/Streams_API#transform_streams) に対応し、クラス [`TransformStream`](/ja/docs/Web/API/TransformStream) と [`TransformStreamDefaultController`](/ja/docs/Web/API/TransformStreamDefaultController) およびメソッド [`ReadableStream.pipeThrough()`](/ja/docs/Web/API/ReadableStream/pipeThrough) を追加しました。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>101</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>101</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>101</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>—</td>
      <td>—</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.streams.transform_streams.enabled</code></td>
    </tr>
  </tbody>
</table>

### サービスワーカー

#### ナビゲーション時のサービスワーカーリソースの先読み

{{domxref("NavigationPreloadManager")}} インターフェイスを使用すると、ページに移動するときにリソースの先読みを有効にすることができます。
先読みはワーカーの起動と並行して行われ、ナビゲーションの開始からリソースがフェッチされるまでの合計時間を短縮します。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>99</td>
      <td>yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>97</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>97</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>97</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.serviceWorkers.navigationPreload.enabled</code></td>
    </tr>
  </tbody>
</table>

### WebVR API

#### WebVR API （無効化）

非推奨化された [WebVR API](/ja/docs/Web/API/WebVR_API) は削除途上にあります。
これは既定ですべてのビルドで無効化されています {{bug(1750902)}}。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version removed</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>98</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>98</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>98</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>98</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.vr.enabled</code></td>
    </tr>
  </tbody>
</table>

### HTML DOM API

#### HTMLMediaElement の setSinkId() メソッド

{{domxref("HTMLMediaElement.setSinkId()")}} は、 {{domxref("HTMLMediaElement")}} に音声出力機器のシンク ID を設定することで、音声の出力先を変更することができます。詳細は {{bug(934425)}} を参照してください。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>64</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>64</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>64</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>64</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>media.setsinkid.enabled</code></td>
    </tr>
  </tbody>
</table>

#### HTMLMediaElement の audioTracks および videoTracks プロパティ

この機能を有効にすると、 HTML のすべてのメディア要素に {{domxref("HTMLMediaElement.audioTracks")}} および {{domxref("HTMLMediaElement.videoTracks")}} プロパティが追加されます。しかし、 Firefox は現在、複数の音声トラックや動画トラックに対応していないため、これらのプロパティの最も一般的な使用例は機能せず、既定では両方とも無効になっています。詳細については {{bug(1057233)}} を参照してください。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>33</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>33</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>33</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>33</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>media.track.enabled</code></td>
    </tr>
  </tbody>
</table>

#### ClipboardItem

{{domxref('Clipboard API')}} の {{domxref('ClipboardItem')}} インターフェイスに対応し、 {{domxref('Clipboard.write()')}} は{{domxref('ClipboardItem','クリップボードアイテム')}}の並びを、以前に実装されていた {{domxref('DataTransfer','dataTransfer オブジェクト')}} の代わりに受け入れます。これは、以前は `dom.events.asyncClipboard.dataTransfer` であった `dom.events.asyncClipboard.clipboardItem` を設定することで利用可能です。詳細については、 {{bug('1619947')}} を参照してください。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>87</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>87</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>87</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>87</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.events.asyncClipboard.clipboardItem</code></td>
    </tr>
  </tbody>
</table>

#### ClipboardRead

クリップボードインターフェイスの [Clipboard.read()](/ja/docs/Web/API/Clipboard/read) メソッドは、以前は `dom.events.asyncClipboard.clipboardItem` の下にあったものが、 `dom.events.asyncClipboard.read` の環境設定の下でも利用できるようになりました。(詳細は ({{bug(1701512)}}) を参照してください。)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>90</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>90</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>90</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>90</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.events.asyncClipboard.read</code></td>
    </tr>
  </tbody>
</table>

#### HTML Sanitizer API

{{domxref('HTML Sanitizer API')}} は、開発者が信頼できない HTML 文字列を受け取り、文書の DOM に安全に挿入するためにそれらをサニタイズすることを可能にします。各設定プロパティ内の既定の要素 (サニタイズされる要素) はまだ検討中です。このため、 config 引数は実装されていません (詳しくは{{domxref('Sanitizer.sanitizer()', 'コンストラクター', '', 1)}}を参照してください)。詳細は、 {{bug('1673309')}} を参照してください。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>84</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>84</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>84</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>84</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.security.sanitizer.enabled</code></td>
    </tr>
  </tbody>
</table>

#### Document の autoplayPolicy プロパティ

{{domxref("document")}} の {{domxref("Document.autoplayPolicy", "autoplayPolicy")}} プロパティは、 (メディア要素の {{domxref("HTMLMediaElement.autoplay", "autoplay")}} プロパティを使用するか、または JavaScript コードから再生を開始させようとする) メディアの自動再生のリクエストをブラウザーがどのように処理するかを示す文字列を返します。この API の仕様はまだ作成中です。この値は、ユーザーが何をしているか、ユーザーの好み、およびブラウザ全体の状態に応じて、時間とともに変化します。想定される値としては、 `allowed` (自動再生は現在許可されている)、 `allowed-muted` (自動再生は許可されているが、音声がないかミュートされている場合のみ)、`disallowed` (自動再生は現在許可されていない) などがあります。詳細は、 {{bug(1506289)}} を参照してください。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>66</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>66</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>66</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>66</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.media.autoplay.autoplay-policy-api</code></td>
    </tr>
  </tbody>
</table>

#### GeometryUtils の convertPointFromNode(), convertRectFromNode(), convertQuadFromNode() メソッド

`GeometryUtils` の `convertPointFromNode()`、`convertRectFromNode()`、`convertQuadFromNode()` の各メソッドは、指定された点、矩形、または四角形を、呼び出されたノードから別のノードにマッピングします。 (詳細は {{bug(918189)}} を参照してください。)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>31</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>31</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>31</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>31</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.getBoxQuads.enabled</code></td>
    </tr>
  </tbody>
</table>

#### GeometryUtils の getBoxQuads() メソッド

`GeometryUtils` の `getBoxQuads()` メソッドは、他のノードやビューポートとの相対的な {{domxref("Node")}} の CSS ボックスを返します。(詳細は {{bug(917755)}} を参照してください。)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>31</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>31</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>31</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>31</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>layout.css.convertFromNode.enable</code></td>
    </tr>
  </tbody>
</table>

#### ElementInternals: フォームに関連するカスタム要素のメソッドとプロパティ

新しい {{domxref("ElementInternals")}} プロパティとメソッドで、カスタム要素がフォームと相互作用できるようにします。

- {{domxref("ElementInternals.form", "form")}} プロパティは要素に関連付けられたフォームを取得します。
- {{domxref("ElementInternals.labels", "labels")}} プロパティは要素に関連付けられたラベルのリストを取得します。
- {{domxref("ElementInternals.willValidate", "willValidate")}} プロパティははカスタムフォーム要素が検証されるかどうかをチェックします。
- {{domxref("ElementInternals.setFormValue()", "setFormValue()")}} メソッドは、必要に応じてサニタイズ値とユーザー入力データをセットします。

詳しくはこれらのバグを参照してください。{{bug(1556362)}}, {{bug(1556373)}}, {{bug(1556365)}}, {{bug(1556449)}} をご覧下さい。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>95</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>95</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>95</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>95</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.webcomponents.formAssociatedCustomElement.enabled</code></td>
    </tr>
  </tbody>
</table>

### 支払いリクエスト API

#### 主要な支払いの扱い

[支払いリクエスト API](/ja/docs/Web/API/Payment_Request_API) は、ウェブコンテンツやアプリ内でウェブベースの支払いを処理するためのサポートを提供します。ユーザーインターフェイスのテスト中にバグが発生したため、 API の変更を検討している間、この API の出荷を延期することにしました。作業は継続中です。(詳細は {{bug(1318984)}} をご参照ください。)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>55</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>55</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>55</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>55</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
        <code>dom.payments.request.enabled</code> and<br /><code
          >dom.payments.request.supportedRegions</code
        >
      </td>
    </tr>
  </tbody>
</table>

### WebShare API

[ウェブ共有 API](/ja/docs/Web/API/Web_Share_API) は、サイトのファイル、URL、その他のデータを共有することができます。
この機能は、 Android ではすべてのビルドで有効になっていますが、デスクトップでは（以下で指定されていない限り）設定で隠されています。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version changed</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>71</td>
      <td>No (default). Yes (Windows from version 92)</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>71</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>71</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>71</td>
      <td>No (Desktop). Yes (Android).</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.webshare.enabled</code></td>
    </tr>
  </tbody>
</table>

### Screen Orientation API

#### ScreenOrientation.lock()

{{domxref("ScreenOrientation.lock()")}} メソッドは、端末が対応しており、ブラウザーの事前ロック要件で許可されていれば、端末を特定の向きにロックすることを可能にします。
一般的に、向きのロックは、文書が全画面で表示されているモバイル端末でのみ許可されます。
詳しくは {{bug(1697647)}} を参照してください。

画面の向きをロックすることはデスクトップシステムでは通常サポートされていないため、Android 用の Firefox Nightly ビルドを使用して `about:config` で設定を有効にする必要があることに注意してください。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version changed</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>97</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>97</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>97</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>97</td>
      <td>No.</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>dom.screenorientation.allow-lock</code></td>
    </tr>
  </tbody>
</table>

## セキュリティとプライバシー

### 暗号化されたページ上の Flash からのプレーンテキストのリクエストをブロックする

暗号化されたページ上の Flash コンテンツによって引き起こされる中間者攻撃 (MitM) を軽減するために、 `OBJECT_SUBREQUEST` をアクティブなコンテンツとして扱う設定が追加されました。詳細については、 {{bug(1190623)}} を参照してください。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>59</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>59</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>59</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>59</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
        <code>security.mixed_content.block_object_subrequest</code>
      </td>
    </tr>
  </tbody>
</table>

### 安全でないページのラベル付け

この 2 つの環境設定では、安全でない方法でページが読み込まれた場合 ({{Glossary("HTTPS")}} ではなく {{Glossary("HTTP")}} を使用した場合) に、従来のロックアイコンの隣に「Not secure」というテキストラベルがアドレスバーに追加されます。詳細については、 {{bug(1335970)}} を参照してください。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>60</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>60</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>60</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>60</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
        <code>security.insecure_connection_text.enabled</code> for normal
        browsing mode;
        <code>security.insecure_connection_text.pbmode.enabled</code> for
        private browsing mode
      </td>
    </tr>
  </tbody>
</table>

### 混合表示コンテンツのアップグレード

この設定を有効にすると、 Firefox は安全なページでメディアコンテンツへの要求を HTTP から HTTPS に自動的にアップグレードします。これは、一部のコンテンツが安全に読み込まれる一方で、他のコンテンツが安全でないという混合コンテンツの状態を防ぐことを目的としています。(メディアのホストが HTTPS に対応していないために) アップグレードが失敗した場合、そのメディアは読み込まれません。(詳細については、 {{bug(1435733)}} を参照してください。)

これはコンソールの警告も変更します。アップグレードが成功した場合、警告ではなく、リクエストがアップグレードされたことを示すメッセージを表示します。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>84</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>60</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>60</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>60</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
        <code>security.mixed_content.upgrade_display_content</code>
      </td>
    </tr>
  </tbody>
</table>

### 機能ポリシー

[機能ポリシー](/ja/docs/Web/HTTP/Feature_Policy)は、ウェブ開発者がブラウザーの特定の機能や API の動作を選択的に有効化、無効化、変更することを可能にします。 CSP と似ていますが、セキュリティの動作ではなく機能を制御します。

> **Note:** `Feature-Policy` ヘッダーは、仕様書では `Permissions-Policy` に名称が変更されており、本記事もいずれその変更を反映して更新される予定です。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>65</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>65</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>65</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>65</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
        <code>dom.security.featurePolicy.header.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

### Clear-Site-Data の "cache" ディレクティブ

[`Clear-Site-Data`](/ja/docs/Web/HTTP/Headers/Clear-Site-Data) HTTP レスポンスヘッダーの `cache` ディレクティブは、リクエストしているウェブサイトのブラウザーキャッシュをクリアします。

> **Note:** これは元々既定で有効でしたが、バージョン 9 4で優先順位が付けられました ({{bug(1729291)}})。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>63</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>63</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>63</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>63</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
        <code>privacy.clearsitedata.cache.enabled</code>
      </td>
    </tr>
  </tbody>
</table>

## 開発ツール

Mozilla の開発者向けツールは常に進化しています。私たちは新しいアイディアを試し、新しい機能を追加し、Nightly や Developer Edition のチャンネルでテストしてから、ベータ版やリリースに移行しています。以下の機能は、現在の実験的な開発者ツールの機能の一部です。

### 実行コンテキストセレクター

この機能では、コンソールのコマンドラインにボタンが表示され、入力した式が実行されるコンテキストを変更することができます。(詳細は、 {{bug(1605154)}} および {{bug(1605153)}} を参照してください。)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>75</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>75</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>75</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>75</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2"><code>devtools.webconsole.input.context</code></td>
    </tr>
  </tbody>
</table>

### レスポンシブデザインモードでのモバイルジェスチャーのサポート

マウスジェスチャーを使用して、スワイプ/スクロール、ダブルタップやピンチズーム、長押しによるコンテキストメニューの選択/オープンなどのモバイルジェスチャーをシミュレートすることができます。 (詳細については {{bug(1621781)}}、{{bug(1245183)}}、{{bug(1401304)}} を参照してください。)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>76<sup>[1]</sup></td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>76<sup>[1]</sup></td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>76<sup>[1]</sup></td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>76<sup>[1]</sup></td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">n/a</td>
    </tr>
  </tbody>
</table>

[1] ダブルタップのジェスチャーによるズームの対応は Firefox 76 で追加されました。他のジェスチャーは Firefox 79 で追加されました。

### ネットワークモニターにおけるサーバー送信イベント

ネットワークモニターが[サーバー送信](/ja/docs/Web/API/Server-sent_events)イベントについての情報を表示する機能です。 (詳細については {{bug(1405706)}} を参照してください。)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>80</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>80</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>80</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>80</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
        <code>devtools.netmonitor.features.serverSentEvents</code>
      </td>
    </tr>
  </tbody>
</table>

### CSS のブラウザー互換性ツールチップ

CSS ルールビューでは、既知の問題がある CSS プロパティの隣にブラウザーの互換性ツールチップを表示させることができます。詳しい情報は [HTML の調査と編集 > ブラウザー互換性の警告](https://firefox-source-docs.mozilla.org/devtools-user/page_inspector/how_to/examine_and_edit_css/index.html#browser-compat-warnings)を参照してください。

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>81</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>81</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>81</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>81</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
        <code
          >devtools.inspector.ruleview.inline-compatibility-warning.enabled</code
        >
      </td>
    </tr>
  </tbody>
</table>

## UI

### デスクトップ版のズーム

この機能により、デスクトップ PC では、モバイル端末のようにレイアウトの変更をすることなく、スムーズなピンチズームが可能になります。(詳細は {{bug(1245183)}} および {{bug(1620055)}} を参照してください。)

<table>
  <thead>
    <tr>
      <th>Release channel</th>
      <th>Version added</th>
      <th>Enabled by default?</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>Nightly</th>
      <td>42</td>
      <td>Yes</td>
    </tr>
    <tr>
      <th>Developer Edition</th>
      <td>42</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Beta</th>
      <td>42</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Release</th>
      <td>42</td>
      <td>No</td>
    </tr>
    <tr>
      <th>Preference name</th>
      <td colspan="2">
        <code>apz.allow_zooming</code> and (on Windows)
        <code>apz.windows.use_direct_manipulation</code>
      </td>
    </tr>
  </tbody>
</table>

## 関連情報

- [Firefox 開発者リリースノート](/ja/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.mozilla.org/en-US/firefox/channel/desktop/)
- [Firefox Developer Edition](https://www.mozilla.org/ja/firefox/developer/)
