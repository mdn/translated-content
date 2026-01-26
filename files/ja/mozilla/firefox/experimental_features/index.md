---
title: Firefox における実験的機能
short-title: 実験的機能
slug: Mozilla/Firefox/Experimental_features
l10n:
  sourceCommit: 3a9ace6da947246a1ea33a13a58410fe8fe04a73
---

このページには、Firefox の実験的機能および部分的に実装されている機能、および開発中または提案中のウェブプラットフォーム標準が記載されています。
以下の各項目には、その機能が含まれているビルド（Nightly、Beta、Developer Edition、Release）、その機能が既定で有効になっているかどうか、およびその機能を有効化または設定するために使用できる**環境設定**の名前に関する情報が記載されています。
それぞれの機能の説明には、その機能を実装または有効にする [Bugzilla のバグ](https://bugzilla.mozilla.org)へのリンクも記載されています。
この情報により、実験的な機能を試して、正式にリリースされる前にフィードバックを提供することができます。

ライフサイクルの観点では、新しい機能は通常、 [Firefox Nightly](https://www.mozilla.org/ja/firefox/channel/desktop/) で最初に現れます。ここでは、早期のフィードバックや検査のために、多くの場合、既定で有効になっています。
大きな問題が見当たらない場合、 [Beta](https://www.mozilla.org/ja/firefox/channel/desktop/#beta) および [Developer Edition](https://www.mozilla.org/ja/firefox/developer/) のプレリリースビルドに含められます。最後に、承認された機能は、 [stable Release](https://www.mozilla.org/ja/firefox/new/) チャネルで提供されます。
リリースビルドにおいて既定で有効化された機能は、もはや実験的なものではないので、このページから除去されます。

これらの機能を有効にするには、Firefox のアドレスバーに `about:config` と入力し、関連付けられた**環境設定**を検索してその値を変更します。通常、この値は `true` と `false` のどちらかです。
機能によっては、変更を有効にするためにブラウザーを再起動する必要がある場合があります。
Firefox の環境設定の管理に関する詳細については、[Firefox の設定エディター](https://support.mozilla.org/ja/kb/about-config-editor-firefox)に対応する記事をご覧ください。

## HTML

### input type="search" のレイアウト

`input type="search"` のレイアウトが更新されました。これにより、何らかの入力を始めたときに、他のブラウザーの実装と同様にクリアアイコンが現れるようになります。 (詳しくは [Firefox バグ 558594](https://bugzil.la/558594) を参照してください。)

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 81            | No                  |
| Developer Edition | 81            | No                  |
| Beta              | 81            | No                  |
| Release           | 81            | No                  |

- `layout.forms.input-type-search.enabled`
  - : `true` にすると有効になります。

### パスワード表示のトグル切り替え

HTML のパスワード入力要素 ([`<input type="password">`](/ja/docs/Web/HTML/Reference/Elements/input/password)) に「目」のアイコンが入り、パスワードのテキストを表示したり隠したりすることができるようになります ([Firefox バグ 502258](https://bugzil.la/502258))。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 96            | No                  |
| Developer Edition | 96            | No                  |
| Beta              | 96            | No                  |
| Release           | 96            | No                  |

- `layout.forms.reveal-password-button.enabled`
  - : `true` にすると有効になります。

## CSS

### 迷子の制御文字を表示するための 16 進ボックス

この機能は、予期せずタブ (`U+0009`)、行送り (`U+000A`)、ページ送り (`U+000C`)、復改 (`U+000D`) 以外の制御文字 (Unicode の Cc カテゴリー) が現れていない場合に 16 進数で表示します。 (詳細は [Firefox バグ 1099557](https://bugzil.la/1099557) を参照してください)。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 43            | Yes                 |
| Developer Edition | 43            | No                  |
| Beta              | 43            | No                  |
| Release           | 43            | No                  |

- `layout.css.control-characters.visible`
  - : `true` にすると有効になります。

### initial-letter プロパティ

CSS の {{cssxref("initial-letter")}} プロパティは、 [CSS インラインレイアウト](https://drafts.csswg.org/css-inline/)仕様書に含まれており、先頭文字の表示方法を dropped, raise, sunken から指定することができます。 (詳細は [Firefox バグ 1223880](https://bugzil.la/1223880) を参照してください。)

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 50            | No                  |
| Developer Edition | 50            | No                  |
| Beta              | 50            | No                  |
| Release           | 50            | No                  |

- `layout.css.initial-letter.enabled`
  - : `true` にすると有効になります。

### fit-content() 関数

{{cssxref("fit-content_function", "fit-content()")}} 関数は {{cssxref("width")}} やその他の寸法のプロパティに適用します。この関数は、 CSS グリッドレイアウトのトラックのサイズ調整ですでに十分対応しています。(詳細は [Firefox バグ 1312588](https://bugzil.la/1312588) を参照してください。)

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 91            | No                  |
| Developer Edition | 91            | No                  |
| Beta              | 91            | No                  |
| Release           | 91            | No                  |

- `layout.css.fit-content-function.enabled`
  - : `true` にすると有効になります。

### スクロール駆動アニメーション

以前は「スクロールリンクアニメーション」と呼ばれていた[スクロール駆動アニメーション](/ja/docs/Web/CSS/Guides/Scroll-driven_animations)は、時間やその他の次元ではなく、スクロールバーのスクロール位置に依存します。
{{cssxref('scroll-timeline-name')}} および {{cssxref('scroll-timeline-axis')}} プロパティ（および {{cssxref('scroll-timeline')}} 一括指定プロパティ）を使用すると、特定の名前付きコンテナー内の特定のスクロールバーを、スクロール駆動アニメーションのソースとして使用できることを指定できます。
スクロールタイムラインを[アニメーション](/ja/docs/Web/CSS/Guides/Animations)に関連付けするには、 {{cssxref('animation-timeline')}} プロパティを `scroll-timeline-name` で定義した名前の値に設定します。

{{cssxref('scroll-timeline')}} 一括指定プロパティを使用する場合、プロパティ値の順序は {{cssxref('scroll-timeline-name')}} の後に {{cssxref('scroll-timeline-axis')}} を指定する必要があります。
個別指定プロパティと一括指定プロパティは、設定で両方利用できます。
あるいは、 [`scroll()`](/ja/docs/Web/CSS/Reference/Properties/animation-timeline/scroll) 関数記法を {{cssxref('animation-timeline')}} で使用して、親要素のスクロールバー軸をタイムラインに使用することを指定することもできます。

詳細については、[Firefox バグ 1807685](https://bugzil.la/1807685)、[Firefox バグ 1804573](https://bugzil.la/1804573)、[Firefox バグ 1809005](https://bugzil.la/1809005)、[Firefox バグ 1676791](https://bugzil.la/1676791), [Firefox バグ 1754897](https://bugzil.la/1754897)、[Firefox バグ 1817303](https://bugzil.la/1817303)、[Firefox バグ 1737918](https://bugzil.la/1737918) を参照してください。

{{cssxref('timeline-scope')}}、{{cssxref('animation-range-start')}}、{{cssxref('animation-range-end')}} の各プロパティ（および {{cssxref('animation-range')}} 一括指定プロパティ）にはまだ対応していません。詳細については、[Firefox バグ 1676779](https://bugzil.la/1676779) を参照してください。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 136           | Yes                 |
| Developer Edition | 110           | No                  |
| Beta              | 110           | No                  |
| Release           | 110           | No                  |

- `layout.css.scroll-driven-animations.enabled`
  - : `true` にすると有効になります。

### @scope アットルール

[@scope](/ja/docs/Web/CSS/Reference/At-rules/@scope) は [CSS](/ja/docs/Web/CSS) の[アットルール](/ja/docs/Web/CSS/Guides/Syntax/At-rules)で、 CSS セレクターの詳細度を過度に上げることなく、特定の子要素を選択することができます（[Firefox バグ 1886441](https://bugzil.la/1886441)）。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 137           | Yes                 |
| Developer Edition | 128           | No                  |
| Beta              | 128           | No                  |
| Release           | 128           | No                  |

- `layout.css.at-scope.enabled`
  - : `true` にすると有効になります。

### font-variant-emoji プロパティ

CSS の [`font-variant-emoji`](/ja/docs/Web/CSS/Reference/Properties/font-variant-emoji) プロパティを使用すると、絵文字の表示の既定のスタイルを設定できます。
詳細については、[Firefox バグ 1461589](https://bugzil.la/1461589) を参照してください。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 108           | Yes                 |
| Developer Edition | 108           | No                  |
| Beta              | 108           | No                  |
| Release           | 108           | No                  |

- `layout.css.font-variant-emoji.enabled`
  - : `true` にすると有効になります。

### prefers-reduced-transparency メディア特性

CSS の [`prefers-reduced-transparency`](/ja/docs/Web/CSS/Reference/At-rules/@media/prefers-reduced-transparency) メディア機能を使用すると、ユーザーが端末で透明または半透明のレイヤー効果を最小限に抑える設定を有効にしているかどうかを検出できます。
詳細については、[Firefox バグ 1736914](https://bugzil.la/1736914) をご覧ください。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 113           | No                  |
| Developer Edition | 113           | No                  |
| Beta              | 113           | No                  |
| Release           | 113           | No                  |

- `layout.css.prefers-reduced-transparency.enabled`
  - : `true` にすると有効になります。

### inverted-colors メディア特性

CSS の [`inverted-colors`](/ja/docs/Web/CSS/Reference/At-rules/@media/inverted-colors) メディア特性を使用すると、ユーザーエージェントまたは基盤となるオペレーティングシステムが色を反転しているかどうかを検出できます。
詳しくは [Firefox バグ 1794628](https://bugzil.la/1794628) を参照してください。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 114           | No                  |
| Developer Edition | 114           | No                  |
| Beta              | 114           | No                  |
| Release           | 114           | No                  |

- `layout.css.inverted-colors.enabled`
  - : `true` にすると有効になります。

### 名前付きビュー進行タイムラインプロパティ

CSS の [`view-timeline-name`](/ja/docs/Web/CSS/Reference/Properties/view-timeline-name) プロパティを使用すると、特定の要素に名前を付け、その要素の親要素であるスクロール要素がビュー進行タイムラインのソースであることを識別することができます。
この名前は `animation-timeline` に代入することができ、これにより、関連付けられた要素は、その祖先のスクロールバーの表示領域内を移動する際にアニメーションします。
詳しくは [Firefox バグ 1737920](https://bugzil.la/1737920) を参照してください。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 114           | No                  |
| Developer Edition | 114           | No                  |
| Beta              | 114           | No                  |
| Release           | 114           | No                  |

- `layout.css.scroll-driven-animations.enabled`
  - : `true` にすると有効になります。

### 無名ビュー進行タイムライン関数

CSS の [`view()`](/ja/docs/Web/CSS/Reference/Properties/animation-timeline/view) 関数を使用すると、要素の `animation-timeline` をビュー進行タイムラインとして指定することができます。これにより、要素は、その親スクロールバーの表示領域内を移動するにつれてアニメーションします。
この関数は、アニメーションのタイムラインを提供する親要素の軸と、アニメーションの開始位置および開始する可視領域内のインセットを定義します。
詳しくは ([Firefox バグ 1808410](https://bugzil.la/1808410)) を参照してください。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 114           | No                  |
| Developer Edition | 114           | No                  |
| Beta              | 114           | No                  |
| Release           | 114           | No                  |

- `layout.css.scroll-driven-animations.enabled`
  - : `true` にすると有効になります。

### ベンダー接頭辞付き座標変換プロパティ

`-moz-` という接頭辞が付いた [CSS 座標変換](/ja/docs/Web/CSS/Guides/Transforms)プロパティは、環境設定の `layout.css.prefixes.transforms` を `false` に設定することで無効にすることができます。これは、標準の CSS の zoom プロパティが十分に対応されるようになった時点で、これらのプロパティを無効にするためです。（[Firefox バグ 1886134](https://bugzil.la/1886134)、[Firefox バグ 1855763](https://bugzil.la/1855763)）。

仕様上、この環境設定は、次の接頭辞が付いたプロパティを無効にします。

- `-moz-backface-visibility`
- `-moz-perspective`
- `-moz-perspective-origin`
- `-moz-transform`
- `-moz-transform-origin`
- `-moz-transform-style`

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 120           | Yes                 |
| Developer Edition | 120           | Yes                 |
| Beta              | 120           | Yes                 |
| Release           | 120           | Yes                 |

- `layout.css.prefixes.transforms`
  - : `true` にすると有効になります。

### `shape()` 関数

CSS の [`shape()`](/ja/docs/Web/CSS/basic-shape/shape) 関数は、[`<basic-shape>`](/ja/docs/Web/CSS/Reference/Values/basic-shape) データ型の一つで、 {{cssxref("clip-path")}} および {{cssxref("offset-path")}} プロパティで 1 つ以上の「シェイプコマンド」を使用して、シェイプを定義することができます。これらのコマンドは、 [SVG パスコマンド](/ja/docs/Web/SVG/Reference/Attribute/d#パスコマンド) とよく似ています。 `shape()` 関数は、いくつかの点で {{cssxref("basic-shape/path","path()")}} 関数と似ていますが、[SVG パス](/ja/docs/Web/SVG/Reference/Element/path)構文を使用する `path()` とは異なり、`shape()` は標準の CSS 構文を使用します。これにより、シェイプを簡単に作成および編集でき、　CSS 数学関数も使用できます。
詳細については、`clip-path` での `shape()` 関数の対応については [Firefox バグ 1823463](https://bugzil.la/1823463) を、 `offset-path` での関数の対応については [Firefox バグ 1884424](https://bugzil.la/1884424) を、補間処理への対応については [Firefox バグ 1884425](https://bugzil.la/1884425) を参照してください。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 126           | Yes                 |
| Developer Edition | 126           | No                  |
| Beta              | 126           | No                  |
| Release           | 126           | No                  |

- `layout.css.basic-shape-shape.enabled`
  - : `true` にすると有効になります。

### 対称的な `letter-spacing`

CSS の {{cssxref("letter-spacing")}} プロパティは、これで指定した文字間隔を各文字の両辺に均等に分割します。これは、主に片側に空白が追加される現在の動作とは異なります。この手法により、特に書字方向が混合したテキストで、テキストの間隔を改善することができます [Firefox バグ 1891446](https://bugzil.la/1891446)。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 128           | Yes                 |
| Developer Edition | 128           | Yes                 |
| Beta              | 127           | No                  |
| Release           | 127           | No                  |

- `layout.css.letter-spacing.model`
  - : `true` にすると有効になります。

### 相対色での `calc()` 色チャンネルの対応

CSS [`calc()`](/ja/docs/Web/CSS/Reference/Values/calc) 関数は、これで[相対色](/ja/docs/Web/CSS/Guides/Colors/Using_relative_colors#数学関数の使用)の色チャンネルを解釈できるようになり、異なる色空間や異なる関数記法を使用している場合でも、色の変化を正しく計算できるようになりました。[Firefox バグ 1889561](https://bugzil.la/1889561) を参照してください。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 127           | Yes                 |
| Developer Edition | 127           | No                  |
| Beta              | 127           | No                  |
| Release           | 127           | No                  |

- `layout.css.relative-color-syntax.enabled`
  - : `true` にすると有効になります。

### CSS アンカー位置指定

[CSS アンカー位置指定](/ja/docs/Web/CSS/Guides/Anchor_positioning)モジュールは、要素をアンカー要素として定義し、他の要素をアンカー要素に対して相対的に位置指定できるようにする一連の機能を定義しています。
これにより、例えば、ビューポートをスクロールすると、関連付けられたコンテンツの横にツールチップが表示され、ビューポートからあふれた場合は必要に応じて移動し、アンカーが画面外に移動すると消えるようになります。
この一連の機能は、環境設定（[Firefox バグ 1838746](https://bugzil.la/1838746)）により徐々に導入されています。実装されている部分には、[`CSSPositionTryRule`](/ja/docs/Web/API/CSSPositionTryRule) および [`CSSPositionTryDescriptors`](/ja/docs/Web/API/CSSPositionTryDescriptors) (Firefox 131) が含まれます。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 131           | No                  |
| Developer Edition | 131           | No                  |
| Beta              | 131           | No                  |
| Release           | 131           | No                  |

- `layout.css.anchor-positioning.enabled`
  - : `true` にすると有効になります。

### `::details-content` 擬似要素

CSS の {{cssxref("::details-content")}} 擬似要素を使用すると、{{htmlElement("details")}} 要素のコンテンツのスタイルを設定することができます（[Firefox バグ 1901037](https://bugzil.la/1901037)）。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 138           | No                  |
| Developer Edition | 138           | No                  |
| Beta              | 138           | No                  |
| Release           | 138           | No                  |

- `layout.css.details-content.enabled`
  - : `true` にすると有効になります。

### 要素に属する擬似要素の後に擬似要素を使用できるようにする

[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)（{{cssxref("::first-letter")}} や {{cssxref("::before")}} など）を、[要素に属する擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements#要素に属する擬似要素)に（{{cssxref("::details-content")}} や {{cssxref("::file-selector-button")}} など）追加できるようにする作業が始まりました。

これにより、例えば、 {{htmlElement("details")}} 要素の最初の文字のスタイルを設定するために CSS セレクター `::details-content::first-letter` を使用したり、 {{HTMLElement("input") }} の [`type="file"`](/ja/docs/Web/HTML/Reference/Elements/input/file) の前にコンテンツを追加するために CSS セレクター `::file-selector-button::before` を使用したりすることが可能になります。

現在、 `::details-content::first-letter` のみが `@supports(::details-content::first-letter)` を使用して解釈でき、これを検査するには [::details-content 擬似要素](#details-content_擬似要素)の環境設定を有効にする必要があります。擬似要素 `::file-selector-button` は、まだ要素ベースの擬似要素としてマークされていないため、これを検査する方法は現在ありません（[Firefox バグ 1953557](https://bugzil.la/1953557)）。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 138           | No                  |
| Developer Edition | 138           | No                  |
| Beta              | 138           | No                  |
| Release           | 138           | No                  |

- `layout.css.details-content.enabled`
  - : `true` にすると有効になります。

## SVG

**このリリースサイクルでは実験的機能はありません。**

## JavaScript

### Atomics.waitAsync()

{{jsxref("Atomics.waitAsync()")}} 静的メソッドは、共有メモリー位置で非同期的に待機し、操作の結果を表すオブジェクトを返します。
これはブロックされず、メインスレッドで使用できます（[Firefox バグ 1467846](https://bugzil.la/1467846)）。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 140           | No                  |
| Developer Edition | 140           | No                  |
| Beta              | 140           | No                  |
| Release           | 140           | No                  |

- `javascript.options.atomics_wait_async`
  - : `true` にすると有効になります。

## API

### CloseWatcher インターフェイス

モーダルダイアログやポップオーバーなど、「開く」および「閉じる」の意味づけを持つ組み込みのウェブコンポーネントは、端末固有の仕組みを使用して閉じることができます。
例えば Android では、戻るボタンを使用してダイアログを閉じることができます。
{{domxref("CloseWatcher")}} インターフェイスを使用すると、開発者は、同様にネイティブのメカニズムを使用して閉じることができる、独自のサイドバーなどの UI 要素を実装することができます。
([Firefox バグ 1888729](https://bugzil.la/1888729)).

| Release channel   | Version added | Enabled by default?          |
| ----------------- | ------------- | ---------------------------- |
| Nightly           | 140           | Yes (Desktop). No (Android). |
| Developer Edition | 132           | No                           |
| Beta              | 132           | No                           |
| Release           | 132           | No                           |

- `dom.closewatcher.enabled`
  - : `true` にすると有効になります。

### 信頼済み型 API

[信頼済み型 API](/ja/docs/Web/API/Trusted_Types_API) は、XSS 攻撃のベクトルとして使用される可能性のある関数が、検証またはサニタイズされたデータでのみ呼び出されるようにする仕組みを提供します。

> [!NOTE]
> この記事の執筆時点では、効果的にテストできるほど API が十分に実装されていません。
> このメモは準備が完了すると除去されます。

API のこのサブセットが実装されています。

- {{domxref("TrustedTypePolicyFactory")}}:
  - {{domxref("TrustedTypePolicyFactory/getAttributeType", "getAttributeType()")}} および {{domxref("TrustedTypePolicyFactory/getPropertyType", "getPropertyType()")}} （[Firefox バグ 1917783](https://bugzil.la/1917783), [Firefox バグ 1917784](https://bugzil.la/1917784)）
- {{domxref("Document")}} の {{domxref("Document.write()", "write()")}} および {{domxref("Document.writeln()","writeln()")}} メソッドは、文字列に加えて {{domxref("TrustedHTML")}} オブジェクトを引数として受け付けるようになりました。（[Firefox バグ 1906301](https://bugzil.la/1906301)）
- {{domxref("HTMLScriptElement")}} インターフェイスの {{domxref("HTMLScriptElement.text","text")}}、{{domxref("HTMLElement.innerText","innerText")}}、{{domxref("Node.textContent","textContent")}} の各プロパティは、 {{domxref("TrustedScript")}} オブジェクトを値として受け付けるようになり、 {{domxref("HTMLScriptElement.src", "src")}} は {{domxref("TrustedScriptURL")}} 値を受け入れるようになりました。（[Firefox バグ 1905706](https://bugzil.la/1905706)）。
- {{domxref("Window.setInterval()")}} および {{domxref("Window.setTimeout()")}} メソッドは {{domxref("TrustedScript")}} で呼び出すことができます。（[Firefox バグ 1931290](https://bugzil.la/1931290)）。
- グローバルの [`trustedTypes`](/ja/docs/Web/API/Window/trustedTypes) プロパティが、信頼済み型 API にアクセスするために利用できます。
- {{domxref("Element.innerHTML")}} および {{domxref("ShadowRoot.innerHTML")}} プロパティは、[信頼済み型](/ja/docs/Web/API/Trusted_Types_API)で呼び出すことができます。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 133           | No                  |
| Developer Edition | 133           | No                  |
| Beta              | 133           | No                  |
| Release           | 133           | No                  |

- `dom.security.trusted_types.enabled`
  - : `true` にすると有効になります。

#### HTML サニタイザー API

{{domxref('HTML Sanitizer API', "HTML サニタイザー API")}} は、開発者が信頼できない HTML 文字列を受け取り、文書の DOM に安全に挿入するためにそれらをサニタイズすることを可能にします。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 138           | No                  |
| Developer Edition | 138           | No                  |
| Beta              | 138           | No                  |
| Release           | 138           | No                  |

- `dom.security.sanitizer.enabled`
  - : `true` にすると有効になります。

### `<dialog>` の `closedBy` 属性

{{domxref("HTMLDialogElement")}} インターフェイスの {{domxref("HTMLDialogElement/closedBy", "closedBy")}} 属性、および {{htmlelement("dialog")}} 要素の対応する [`closedby`](/ja/docs/Web/HTML/Reference/Elements/dialog#closedby) 属性に対応しています。
これらは、ユーザーがダイアログ領域の外側をクリックしてダイアログを閉じることができるかどうか、あるいはダイアログをプログラムで閉じる必要があるかどうかなどを指定するために、開発者が使用できます。
（[Firefox バグ 1964077](https://bugzil.la/1964077)）。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 140           | Yes                 |
| Developer Edition | 140           | No                  |
| Beta              | 140           | No                  |
| Release           | 140           | No                  |

- `dom.dialog.light-dismiss.enabled`
  - : `true` にすると有効になります。

### `beforescriptexecute` および `afterscriptexecute` イベントの除去

標準外の [`beforescriptexecute`](/ja/docs/Web/API/Document/beforescriptexecute_event) および [`afterscriptexecute`](/ja/docs/Web/API/Document/afterscriptexecute_event) イベント（{{domxref("Document")}} インターフェイス）および [`afterscriptexecute`](/ja/docs/Web/API/Element/afterscriptexecute_event) および [`beforescriptexecute`](/ja/docs/Web/API/Element/beforescriptexecute_event) （{{domxref("Element")}} インターフェイス）は削除される予定です。これらは Nightly では無効になっています。（[Firefox バグ 1954685](https://bugzil.la/1954685)）。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 139           | No                  |
| Developer Edition | 139           | Yes                 |
| Beta              | 139           | Yes                 |
| Release           | 139           | Yes                 |

- `dom.events.script_execute.enable`
  - : `true` にすると有効になります。

### PerformanceEventTiming.interactionId

{{domxref("PerformanceEventTiming.interactionId")}} を使用すると、特定のユーザーの操作によって発生するイベントの遅延時間を測定することができます。（[Firefox バグ 1934683](https://bugzil.la/1934683)）。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 138           | No                  |
| Developer Edition | 138           | No                  |
| Beta              | 138           | No                  |
| Release           | 138           | No                  |

- `dom.performance.event_timing.enable_interactionid`
  - : `true` にすると有効になります。

### Notification の actions および maxActions プロパティ

{{domxref("Notification")}} インターフェイスの {{domxref("Notification/actions","actions")}} 読み取り専用プロパティおよび [`maxActions`](/ja/docs/Web/API/Notification/maxActions_static) 静的読み取り専用プロパティは、デスクトップ版の Nightly で対応しています。
これらは、 {{domxref("ServiceWorkerRegistration.showNotification()")}} で設定された通知アクション、および設定できるアクションの最大数をそれぞれ含んでいます。
（[Firefox バグ 1225110](https://bugzil.la/1225110), [Firefox バグ 1963263](https://bugzil.la/1963263)）。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 138           | Yes (desktop only)  |
| Developer Edition | 138           | No                  |
| Beta              | 138           | No                  |
| Release           | 138           | No                  |

- `dom.webnotifications.actions.enabled`
  - : `true` にすると有効になります。

### グラフィック: Canvas, WebGL, WebGPU

#### WebGL: ドラフト拡張

この設定を有効にすると、現在 "draft" ステータスでテスト中の WebGL 拡張機能が使用可能になります。現在、 Firefox でテスト中の WebGL 拡張機能はありません。

#### WebGPU API

[WebGPU API](/ja/docs/Web/API/WebGPU_API) は、ユーザーの端末やコンピューターの [Graphics Processing Unit](https://ja.wikipedia.org/wiki/Graphics_Processing_Unit) (GPU) を使用して、計算やグラフィックのレンダリングを行うための低レベルのサポートを提供します。この API の進捗状況については、 [Firefox バグ 1602129](https://bugzil.la/1602129) を参照してください。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 113           | Yes                 |
| Developer Edition | 73            | No                  |
| Beta              | 73            | No                  |
| Release           | 73            | No                  |

- `dom.webgpu.enabled`
  - : `true` にすると有効になります。

### レポート API の CSP 違反の対応

[レポート API](/ja/docs/Web/API/Reporting_API) は、[コンテンツセキュリティポリシー (CSP)](/ja/docs/Web/HTTP/Guides/CSP) 違反の報告に対応するようになりました。

{{domxref('Report')}} インスタンスは、{{domxref('ReportingObserver')}} インターフェイスによって返され、`type` 値が `"csp-violation"`、`body` プロパティが {{domxref('CSPViolationReportBody')}} インターフェイスのインスタンスを含むようになりました。
これにより、CSP 違反をウェブページ内で報告できるようになりました。

CSP 違反レポートは、CSP {{CSP("report-to")}} ディレクティブで名前で指定されたリモートエンドポイントにも送信できます。エンドポイント名と対応する URL は、最初に {{httpheader('Reporting-Endpoints')}} または {{httpheader('Report-To')}} HTTP レスポンスヘッダーで定義する必要があります。
レポートは、上記で記述した {{domxref('Report')}} オブジェクトのシリアライズで、`body` プロパティは {{domxref('CSPViolationReportBody')}} インスタンスのシリアライズです。

この違反レポートは、CSP の {{CSP("report-uri")}} ディレクティブを使用してレポートの送信先 URL を設定し、[CSP 独自の JSON 違反レポート形式](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/report-uri#違反レポートの構文)を採用している、CSP 独自の違反レポート送信メカニズムに代わるものです。
（[Firefox バグ 1391243](https://bugzil.la/1391243)）。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 130           | No                  |
| Developer Edition | 130           | No                  |
| Beta              | 130           | No                  |
| Release           | 130           | No                  |

- `dom.reporting.enabled`
  - : `true` にすると有効になります。

### WebRTC とメディア

[WebRTC API](/ja/docs/Web/API/WebRTC_API)、[Web Audio API](/ja/docs/Web/API/Web_Audio_API)、[Media Source Extensions API](/ja/docs/Web/API/Media_Source_Extensions_API)、[Encrypted Media Extensions API](/ja/docs/Web/API/Encrypted_Media_Extensions_API)、[Media Capture and Streams API](/ja/docs/Web/API/Media_Capture_and_Streams_API) にある以下の機能は実験的なものです。

#### 非同期の SourceBuffer の追加と削除

これにより、メディアソースバッファーを追加および削除するためのプロミスベースのメソッド {{domxref("SourceBuffer.appendBufferAsync", "appendBufferAsync()")}} および {{domxref("SourceBuffer.removeAsync", "removeAsync()")}} が {{domxref("SourceBuffer")}} インターフェイスに追加されます。詳細については、 [Firefox バグ 1280613](https://bugzil.la/1280613) および [Firefox バグ 778617](https://bugzil.la/778617) を参照してください。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 62            | No                  |
| Developer Edition | 62            | No                  |
| Beta              | 62            | No                  |
| Release           | 62            | No                  |

- `media.mediasource.experimental.enabled`
  - : `true` にすると有効になります。

#### AVIF 準拠の厳格性

`image.avif.compliance_strictness` 環境設定は [AVIF](/ja/docs/Web/Media/Guides/Formats/Image_types#avif_image) 画像を処理するときに適用する _厳格性_ を制御するために使うことができます。
これにより、 Firefox ユーザーは、他のいくつかのブラウザーでレンダリングされる画像を、たとえ厳密に準拠していなくても表示することができます。

| Release channel   | Version added | Default value |
| ----------------- | ------------- | ------------- |
| Nightly           | 92            | 1             |
| Developer Edition | 92            | 1             |
| Beta              | 92            | 1             |
| Release           | 92            | 1             |

- `image.avif.compliance_strictness`
  - : 厳格度レベルを示す数値。指定可能な値は次のとおりです。
    - `0`: 推奨 ("should" 言語) と要求 ("shall" 言語) の両方で仕様違反のある画像でも、安全に、あるいは曖昧さを排除して解釈できるのであれば、受け付けます。
    - `1` **（既定値）**: 要件違反は却下し、勧告違反は許可する。
    - `2`: 厳格。要件や推奨事項の違反は一切認めません。

#### JPEG XL 対応

この機能を有効にすると、 Firefox は [JPEG XL](https://jpeg.org/jpegxl/) 画像に対応します。
詳細は [Firefox バグ 1539075](https://bugzil.la/1539075) を参照してください。

下記に示すように、この機能は Nightly ビルドでのみ利用できます（環境設定が設定されているかどうかに関係なく）。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 90            | No                  |
| Developer Edition | —             | —                   |
| Beta              | —             | —                   |
| Release           | —             | —                   |

- `image.jxl.enabled`
  - : `true` にすると有効になります。

### WebVR API

#### WebVR API （無効化）

非推奨化された [WebVR API](/ja/docs/Web/API/WebVR_API) は削除途上にあります。
これは既定ですべてのビルドで無効化されています [Firefox バグ 1750902](https://bugzil.la/1750902)。

| Release channel   | Version removed | Enabled by default? |
| ----------------- | --------------- | ------------------- |
| Nightly           | 98              | No                  |
| Developer Edition | 98              | No                  |
| Beta              | 98              | No                  |
| Release           | 98              | No                  |

- `dom.vr.enabled`
  - : `true` にすると有効になります。

### HTML DOM API

#### シャドウ DOM 境界を越える選択

{{domxref("Selection.getComposedRanges()")}} メソッドを使用すると、現在選択されている範囲を表す {{domxref("StaticRange")}} オブジェクトの配列を取得することができます。
{{domxref("Selection.getRangeAt()")}} とは異なり、このメソッドは、シャドウ DOM 内のアンカーノードまたはフォーカスノードを含む範囲を返すことができますが、それは、それらのノードを含む {{domxref("ShadowRoot")}} オブジェクトが渡された場合に限ります。
それ以外の場合は、そのノードを含むシャドウルートのホストノードを含めるようにスコープが再設定された範囲を返します。
`Selection` の {{domxref("Selection.setBaseAndExtent()","setBaseAndExtent()")}}、{{domxref("Selection.collapse()","collapse()")}}、{{domxref("Selection.extend()","extend()")}} の各メソッドも、シャドウルート内のノードを受け入れるように変更されました。

マウスやキーボードなどによるユーザーの選択は、開いているシャドウツリーや閉じられたシャドウツリー内を含め、文書内のどこからでも開始および終了することができます。
（[Firefox バグ 1867058](https://bugzil.la/1867058)）。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 126           | Yes                 |
| Developer Edition | 126           | No                  |
| Beta              | 126           | No                  |
| Release           | 126           | No                  |

- `dom.shadowdom.selection_across_boundary.enabled`
  - : `true` にすると有効になります。

#### HTMLMediaElement の audioTracks および videoTracks プロパティ

この機能を有効にすると、 HTML のすべてのメディア要素に {{domxref("HTMLMediaElement.audioTracks")}} および {{domxref("HTMLMediaElement.videoTracks")}} プロパティが追加されます。しかし、 Firefox は現在、複数の音声トラックや動画トラックに対応していないため、これらのプロパティの最も一般的な使用例は機能せず、既定では両方とも無効になっています。詳細については [Firefox バグ 1057233](https://bugzil.la/1057233) を参照してください。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 33            | No                  |
| Developer Edition | 33            | No                  |
| Beta              | 33            | No                  |
| Release           | 33            | No                  |

- `media.track.enabled`
  - : `true` にすると有効になります。

#### GeometryUtils の convertPointFromNode(), convertRectFromNode(), convertQuadFromNode() メソッド

`GeometryUtils` の `convertPointFromNode()`、`convertRectFromNode()`、`convertQuadFromNode()` の各メソッドは、指定された点、矩形、または四角形を、呼び出された {{domxref("Node")}} から別のノードにマッピングします。 (詳細は [Firefox バグ 918189](https://bugzil.la/918189) を参照してください。)

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 31            | Yes                 |
| Developer Edition | 31            | No                  |
| Beta              | 31            | No                  |
| Release           | 31            | No                  |

- `layout.css.convertFromNode.enable`
  - : `true` にすると有効になります。

#### GeometryUtils の getBoxQuads() メソッド

`GeometryUtils` の `getBoxQuads()` メソッドは、他のノードやビューポートとの相対的な {{domxref("Node")}} の CSS ボックスを返します。(詳細は [Firefox バグ 917755](https://bugzil.la/917755) を参照してください。)

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 31            | Yes                 |
| Developer Edition | 31            | No                  |
| Beta              | 31            | No                  |
| Release           | 31            | No                  |

- `layout.css.getBoxQuads.enabled`
  - : `true` にすると有効になります。

### 決済リクエスト API

#### 主要な決済の扱い

[決済リクエスト API](/ja/docs/Web/API/Payment_Request_API) は、ウェブコンテンツやアプリ内でウェブベースの決済を処理するためのサポートを提供します。ユーザーインターフェイスのテスト中にバグが発生したため、 API の変更を検討している間、この API の出荷を延期することにしました。作業は継続中です。(詳細は [Firefox バグ 1318984](https://bugzil.la/1318984) をご参照ください。)

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 55            | No                  |
| Developer Edition | 55            | No                  |
| Beta              | 55            | No                  |
| Release           | 55            | No                  |

- `dom.payments.request.enabled`
  - : `true` にすると有効になります。
- `dom.payments.request.supportedRegions`
  - : カンマで区切られた領域の許可リストとしての国コード（例: `US,CA`）。

### WebShare API

[ウェブ共有 API](/ja/docs/Web/API/Web_Share_API) は、サイトのファイル、URL、その他のデータを共有することができます。
この機能は、 Android ではすべてのビルドで有効になっていますが、デスクトップでは（以下で指定されていない限り）設定で隠されています。

| Release channel   | Version changed | Enabled by default?                         |
| ----------------- | --------------- | ------------------------------------------- |
| Nightly           | 71              | No (default). Yes (Windows from version 92) |
| Developer Edition | 71              | No                                          |
| Beta              | 71              | No                                          |
| Release           | 71              | No (Desktop). Yes (Android).                |

- `dom.webshare.enabled`
  - : `true` にすると有効になります。

### 画面方向 API

#### ScreenOrientation.lock()

{{domxref("ScreenOrientation.lock()")}} メソッドは、端末が対応しており、ブラウザーの事前ロック要件で許可されていれば、端末を特定の向きにロックすることを可能にします。
一般的に、向きのロックは、文書が全画面で表示されているモバイル端末でのみ許可されます。
詳しくは [Firefox バグ 1697647](https://bugzil.la/1697647) を参照してください。

| Release channel   | Version changed | Enabled by default? |
| ----------------- | --------------- | ------------------- |
| Nightly           | 111             | Yes                 |
| Developer Edition | 97              | No                  |
| Beta              | 97              | No                  |
| Release           | 97              | No                  |

- `dom.screenorientation.allow-lock`
  - : `true` にすると有効になります。

### 優先度付きタスクスケジュール API

[優先度付きタスクスケジュール API](/ja/docs/Web/API/Prioritized_Task_Scheduling_API) は、ウェブサイト開発者のコードで定義されているか、サードパーティーのライブラリーやフレームワークで定義されているかに関係なく、アプリケーションに属するすべてのタスクに優先順位を付ける標準化された方法を提供します。
Firefox バージョン 140 以降、この API は機能が完全になり、Nightly リリースで有効になっています。
（[Firefox バグ 1734997](https://bugzil.la/1734997) and [Firefox バグ 1920115](https://bugzil.la/1920115)）

| Release channel   | Version changed | Enabled by default? |
| ----------------- | --------------- | ------------------- |
| Nightly           | 139             | Yes                 |
| Developer Edition | 101             | No                  |
| Beta              | 101             | No                  |
| Release           | 101             | No                  |

- `dom.enable_web_task_scheduling`
  - : `true` にすると有効になります。

### 通知 API

通知には、Windows システムおよび Nightly リリースでは、既定で [`requireInteraction`](/ja/docs/Web/API/Notification/requireInteraction) プロパティが true に設定されています。 ([Firefox バグ 1794475](https://bugzil.la/1794475)).

| Release channel   | Version changed | Enabled by default? |
| ----------------- | --------------- | ------------------- |
| Nightly           | 117             | Yes                 |
| Developer Edition | 117             | No                  |
| Beta              | 117             | No                  |
| Release           | 117             | Windows only        |

- `dom.webnotifications.requireinteraction.enabled`
  - : `true` にすると有効になります。

### ビュートランジション API

[ビュートランジション API](/ja/docs/Web/API/View_Transition_API) は、異なるウェブサイトのビュー間でアニメーションによる遷移を簡単に作成するためのメカニズムを提供します。これは、[SPA（単一ページアプリケーション）](/ja/docs/Glossary/SPA)で特に有益です。（[Firefox バグ 1950759](https://bugzil.la/1950759)）。

| Release channel   | Version changed | Enabled by default? |
| ----------------- | --------------- | ------------------- |
| Nightly           | 139             | Yes                 |
| Developer Edition | —               | No                  |
| Beta              | —               | No                  |
| Release           | —               | No                  |

- `dom.viewTransitions.enabled`
  - : `true` にすると有効になります。

## セキュリティとプライバシー

### 暗号化されたページ上の Flash からのプレーンテキストのリクエストをブロックする

暗号化されたページ上の Flash コンテンツによって引き起こされる中間者攻撃 (MitM) を軽減するために、 `OBJECT_SUBREQUEST` をアクティブなコンテンツとして扱う設定が追加されました。詳細については、 [Firefox バグ 1190623](https://bugzil.la/1190623) を参照してください。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 59            | No                  |
| Developer Edition | 59            | No                  |
| Beta              | 59            | No                  |
| Release           | 59            | No                  |

- `security.mixed_content.block_object_subrequest`
  - : `true` にすると有効になります。

### 保護されていないページのラベル付け

この 2 つの環境設定では、安全でない方法でページが読み込まれた場合 ({{Glossary("HTTPS")}} ではなく {{Glossary("HTTP")}} を使用した場合) に、従来のロックアイコンの隣に「Not secure」というテキストラベルがアドレスバーに追加されます。 `browser.urlbar.trimHttps` 環境設定は、アドレスバーの URL から `https:` という接頭辞を削除します。詳細については、 [Firefox バグ 1853418](https://bugzil.la/1853418) を参照してください。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 121           | Yes                 |
| Developer Edition | 60            | No                  |
| Beta              | 60            | No                  |
| Release           | 60            | No                  |

- `security.insecure_connection_text.enabled`
  - : 通常の閲覧モードでテキストラベルを有効にするには、`true` に設定します。
- `security.insecure_connection_text.pbmode.enabled`
  - : プライベートブラウジングモードのテキストラベルを有効にするには、`true` に設定します。
- `browser.urlbar.trimHttps`
  - : アドレスバーの URL から `https:` という接頭辞を削除するには、 `true` に設定します。

### 機能ポリシー/権限ポリシー

[権限ポリシー](/ja/docs/Web/HTTP/Guides/Permissions_Policy)は、ウェブ開発者がブラウザーの特定の機能や API の動作を選択的に有効化、無効化、変更することを可能にします。 CSP と似ていますが、セキュリティの動作ではなく機能を制御します。
これは、Firefox では、仕様の以前のバージョンで使用されていた名前である**機能ポリシー**として実装されています。

ユーザー環境設定が設定されていなくても、`<iframe>` 要素の [`allow`](/ja/docs/Web/HTML/Reference/Elements/iframe#allow) 属性で対応しているポリシーを設定できることに注意してください。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 65            | No                  |
| Developer Edition | 65            | No                  |
| Beta              | 65            | No                  |
| Release           | 65            | No                  |

- `dom.security.featurePolicy.header.enabled`
  - : `true` にすると有効になります。

### プライバシー保護の帰属 API (PPA)

[PPA API](https://support.mozilla.org/ja/kb/privacy-preserving-attribution) は、 `saveImpression()` および `measureConversion()` メソッドを備えた新しい `navigator.privateAttribution` オブジェクトを使用して、広告の属性情報を追跡する代替手段を提供します。 PPA の詳細については、[元の説明](https://github.com/mozilla/explainers/tree/main/archive/ppa-experiment)および[提案仕様](https://w3c.github.io/ppa/)をご覧ください。この実験は、 [origin trial](https://wiki.mozilla.org/Origin_Trials) またはブラウザーの環境設定を 1に設定することで、ウェブサイトで有効にすることができます。（[Firefox バグ 1900929](https://bugzil.la/1900929)）。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 128           | No                  |
| Developer Edition | 128           | No                  |
| Beta              | 128           | No                  |
| Release           | 128           | No                  |

- `dom.origin-trials.private-attribution.state`
  - : `true` にすると有効になります。

## HTTP

### MIME タイプ image/jxl の Accept ヘッダー

[既定のリクエストおよび画像リクエスト](/ja/docs/Web/HTTP/Guides/Content_negotiation/List_of_default_Accept_values)の HTTP [`Accept`](/ja/docs/Web/HTTP/Reference/Headers/Accept) ヘッダーは、`image/jxl` MIME タイプに対応していることをを示す環境設定で構成できます。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 128           | No                  |
| Developer Edition | 128           | No                  |
| Beta              | 128           | No                  |
| Release           | 128           | No                  |

- `image.jxl.enabled`
  - : `true` にすると有効になります。

### 既定で SameSite=Lax

[SameSite クッキー](/ja/docs/Web/HTTP/Reference/Headers/Set-Cookie#samesitesamesite-value)の既定値は Lax です。この設定では、クッキーは、ユーザーが元のサイトに移動する場合にのみ送信され、サードパーティのサイトに画像やフレームを読み込むためのサイト間サブリクエストなどには送信されません。
詳しくは、 [Firefox バグ 1617609](https://bugzil.la/1617609) を参照してください。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 69            | No                  |
| Developer Edition | 69            | No                  |
| Beta              | 69            | No                  |
| Release           | 69            | No                  |

- `network.cookie.sameSite.laxByDefault`
  - : `true` にすると有効になります。

### Access-Control-Allow-Headers のワイルドカードは Authorization を含めない

[`Access-Control-Allow-Headers`](/ja/docs/Web/HTTP/Reference/Headers/Access-Control-Allow-Headers) は、 [CORS プリフライトリクエスト](/ja/docs/Glossary/Preflight_request)に対するレスポンスヘッダーで、最終リクエストに含めることができるリクエストヘッダーを指定します。
レスポンスディレクティブには、ワイルドカード (`*`) を含めることができます。これは、最終リクエストに `Authorization` ヘッダーを除くすべてのヘッダーを含めることができることを示します。

既定では、Firefox は、 `Access-Control-Allow-Headers: *` という応答を受け取った後、最終リクエストに `Authorization` ヘッダーを含めます。
Firefox が `Authorization` ヘッダーを含めないようにするには、環境設定を `false` に設定してください。
詳しくは [Firefox バグ 1687364](https://bugzil.la/1687364) を参照してください。

| Release channel   | Version added | Enabled by default? |
| ----------------- | ------------- | ------------------- |
| Nightly           | 115           | Yes                 |
| Developer Edition | 115           | Yes                 |
| Beta              | 115           | Yes                 |
| Release           | 115           | Yes                 |

- `network.cors_preflight.authorization_covered_by_wildcard`
  - : `true` にすると有効になります。

## 開発者ツール

Mozilla の開発者向けツールは常に進化しています。私たちは新しいアイディアを試し、新しい機能を追加し、Nightly や Developer Edition のチャンネルでテストしてから、ベータ版やリリースに移行しています。以下の機能は、現在の実験的な開発者ツールの機能の一部です。

**このリリースサイクルでは実験的機能はありません。**

## 関連情報

- [Firefox 開発者リリースノート](/ja/docs/Mozilla/Firefox/Releases)
- [Firefox Nightly](https://www.mozilla.org/ja/firefox/channel/desktop/)
- [Firefox Developer Edition](https://www.mozilla.org/ja/firefox/developer/)
