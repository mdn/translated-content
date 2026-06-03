---
title: ビューポートセグメント API の使用
slug: Web/API/Viewport_segments_API/Using
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{DefaultAPISidebar("Viewport Segments API")}}

この記事では、[ビューポートセグメント API](/ja/docs/Web/API/Viewport_segments_API) を使用して、異なるビューポートセグメントのサイズや配置に最適化されたレスポンシブデザインを作成する方法について説明します。

## 折り曲げ可能端末の問題点

折り曲げ可能端末には、スマートフォン、タブレット、ノートパソコンが挙げられます。画面が端末内部に折りたたまれる内折りタイプと、画面が端末を包み込むように外側に折りたたまれる外折りタイプがあります。折り曲げ可能端末には様々な形態があり、実際に折りたたみ可能な画面を備えたものもあれば、物理的な蝶番で接続された別々の画面を持つものもあります。横向きで使用すると画面が横に並列に配置され、縦向きで使用すると上下に画面が配置されます。

いずれにせよ、折り曲げ型端末の画面は同一表示面の異なるセグメントとして機能するよう意図されています。ある人の折り曲げ型端末は、継ぎ目なく完全な平面で使用され、単一セグメントのビューポートのように現れる一方、別の端末では明らかな継ぎ目があり、完全に開いた平面画面よりも浅い角度で使用される場合があります。これはいくつかの固有の課題が存在します。画面を単一の実体としてレイアウトを最適化することは可能ですが、デザイン要素が異なるセグメントにぴったり収まり、二つに分割されないようにするにはどうすればよいでしょうか？また、物理的な折り目/接合部によってコンテンツが隠れてしまうのをどう防げばよいでしょうか？

ビューポートセグメント API は、ユーザーの端末画面に折り目や継ぎ目があるかどうか、各セグメントのサイズ、サイズが同一かどうか、方向（横並びまたは縦並び）を（CSS および JavaScript で）検出する機能を提供します。以下のセクションでこれらの機能を紹介し、完全なサンプルを通じて実際の動作を解説します。

## ビューポートセグメントのメディア特性

端末が横方向または縦方向に特定の数のビューポートセグメントを持っているかどうかを検査できる 2 つの[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries)特性があります。これらは次のようになります。

```css
/* 横に配置されたセグメント */
@media (horizontal-viewport-segments: 2) {
  .wrapper {
    flex-direction: row;
  }

  /* ... */
}

/* 縦に配置されたセグメント */
@media (vertical-viewport-segments: 2) {
  .wrapper {
    flex-direction: column;
  }

  /* ... */
}
```

{{cssxref("@media/horizontal-viewport-segments")}} メディア特性は、端末が横方向に並べられた特定数のビューポートセグメントを持っているかどうかを検出します。一方、{{cssxref("@media/vertical-viewport-segments")}} メディア特性は、端末が縦方向に並べられた特定数のビューポートセグメントを持っているかどうかを検出します。

## ビューポートセグメント環境変数

利用可能なビューポートセグメントにレイアウトを正確に収めるため、[ビューポートセグメント環境変数](/ja/docs/Web/CSS/Reference/Values/env#viewport-segment-width) により、それぞれのセグメントのサイズとビューポート全体内での配置にアクセスできます。ブラウザーは、それぞれのセグメントの幅と高さ、および上端・右端・下端・左端のオフセット位置にアクセスすることができる[環境変数]を提供します。

- `viewport-segment-width`
- `viewport-segment-height`
- `viewport-segment-top`
- `viewport-segment-right`
- `viewport-segment-bottom`
- `viewport-segment-left`

これらの変数にアクセスするために {{cssxref("env()")}} 関数が使用され、変数名と、値を返すセグメントのインデックスを表す 2 つの整数を引数として取ります。例を示します。

```css
/* 左/上のセグメントの幅を返す */
env(viewport-segment-width 0 0)

/* 右のセグメントの幅を返す */
env(viewport-segment-width 1 0)

/* 下のセグメントの幅を返す */
env(viewport-segment-width 0 1)
```

両方のインデックスは `0` 以上の整数です。まず最初の値はセグメントの水平方向のインデックス値を表し、2 つ目のはセグメントの垂直方向のインデックス値を表します。

![2 つの端末セグメントレイアウト。横レイアウトでは、0 0 が最初のセグメント、1 0 が 2 つ目となる。縦レイアウトでは、インデックスは 0 0 と 0 1 となる。](env-var-indices.png)

- 水平方向に横に並んでいるレイアウトでは、左側のセグメントは `0 0` で表し、右側のセグメントは `1 0` で表します。
- 垂直方向の上から下へのレイアウトでは、上のセグメントは `0 0` で表し、下のセグメントは `0 1` で表します。

レイアウトでは、これらの変数を使用して、コンテナーを利用できるセグメントにきれいに収まるように設定することができます。例を示します。

```css
@media (horizontal-viewport-segments: 2) {
  .wrapper {
    display: grid;
    grid-template: "left fold right";
    grid-column: env(viewport-segment-width 0 0) env(viewport-segment-width 1 0);
  }
  .firstSection {
    grid-area: left;
  }
  .secondSection {
    grid-area: right;
  }
}

@media (vertical-viewport-segments: 2) {
  .wrapper {
    display: grid;
    grid-template:
      "top"
      "bottom";
    grid-row: env(viewport-segment-height 0 1) env(viewport-segment-width 0 0);
  }
  .firstSection {
    grid-area: top;
  }
  .secondSection {
    grid-area: bottom;
  }
}
```

ここでは、ビューポートセグメントが横方向または縦方向にレイアウトされるかどうかに基づき、外側のラッパーを水平または垂直のグリッドレイアウトに設定します。次に、左側と上部のセルをまず最初のセグメントに設定し、2 つ目となるセクションを右側または下部のグリッドセルに配置します。
コンテンツが折り目によって隠されるのを防ぐため、空の中央「折り目」セルを追加できます。その太さは、ビューポート全体のサイズから両側の合計幅または高さを差し引くことで計算されます。または、中央セルを `1fr` に設定します。

```css
@media (horizontal-viewport-segments: 2) {
  .wrapper {
    grid-template: "left fold right";
    grid-column: env(viewport-segment-width 0 0)
      calc(
        100vw -
          (env(viewport-segment-width 0 0) + env(viewport-segment-width 1 0))
      )
      env(viewport-segment-width 1 0);
  }
}

@media (vertical-viewport-segments: 2) {
  .wrapper {
    grid-template:
      "top"
      "fold"
      "bottom";
    grid-row: env(viewport-segment-height 0 1) 1fr
      env(viewport-segment-width 0 0);
  }
}
```

## JavaScript でのセグメント情報へのアクセス

JavaScript で、{{domxref("Viewport.segments", "window.viewport.segments")}} プロパティを使用してセグメント情報にアクセスできます。このプロパティは、それぞれのセグメントの全体ビューポート内での `x` および `y` 座標、ならびに `width` と `height` へのアクセスを提供する {{domxref("DOMRect")}} オブジェクトの配列を返します。

例えば、このスニペットはビューポート内のそれぞれのセグメントをループ処理し、インデックス番号、幅、高さを詳細に記述した文字列をコンソールにログ出力します。

```js
const segments = window.viewport.segments;

segments.forEach((segment) =>
  console.log(
    `セグメント ${segments.indexOf(segment)} は ${segment.width}px x ${segment.height}px`,
  ),
);
```

## 完全な例

実際の例でビューポートセグメント API の機能を見ていきましょう。デモは [Viewport segment API demo](https://mdn.github.io/dom-examples/viewport-segments-api/) でライブ動作を確認できます（完全な[ソースコード](https://github.com/mdn/dom-examples/tree/main/viewport-segments-api)も参照）。場合によっては、実際の折りたたみ端末でデモをご覧ください。折りたたみ式端末の複数のセグメントを視覚的にエミュレートすることができるブラウザ開発者ツールは、一般的に物理的な分割のエミュレーションを含んでいません。

> [!NOTE]
> この例は、Alexis Menard 氏および Thomas Steiner 氏による「[折りたたみ可能な API の Origin トライアル](https://developer.chrome.com/blog/foldable-apis-ot)」を改編したものです。この例は、2024 年に `developer.chrome.com` で [クリエイティブ・コモンズ・アトリビューション 4.0 ライセンス](https://creativecommons.org/licenses/by/4.0/) で公開されたものです。

次の節でソースコードを順を追って説明します。

### HTML 構造

このマークアップは、基本的なリストビューと詳細ビューを表す 2 つの {{htmlelement("section")}} 要素が含まれているラッパー {{htmlelement("div")}} と、折り曲げ式端末上の 2 つのセグメント間の折り目を表す折り目の `<div>` で構成されています。

```html
<div class="wrapper">
  <section class="list-view">
    <!-- ... -->
  </section>
  <div class="fold"></div>
  <section class="detail-view">
    <!-- ... -->
  </section>
</div>
```

### 様々なセグメントの方向に対してレイアウトを選択的に適用

CSS では、メディアクエリーと環境変数を組み合わせて、利用できる領域に快適に収まるレスポンシブレイアウトを作成します。

まず、{{cssxref("@media/orientation", "orientation")}} メディアクエリーテストを使用して、それぞれの表示状態（横方向のビューポートには `row`、縦方向のビューポートには `column`）でラッパー `<div>`の子要素に適切なフレックスボックスレイアウトを設定します。同時に、これらの場合では折り目の `<div>` を細い帯状に設定し、2つのコンテンツコンテナー間の仕切りとして機能させています。`landscape` レイアウトでは幅 `20px`、`portrait` レイアウトでは高さ `20px` です。

```css
.wrapper {
  height: 100%;
  display: flex;
}

@media (orientation: landscape) {
  .wrapper {
    flex-direction: row;
  }

  .list-view,
  .detail-view {
    flex: 1;
  }

  .fold {
    height: 100%;
    width: 20px;
  }
}

@media (orientation: portrait) {
  .wrapper {
    flex-direction: column;
  }

  .list-view,
  .detail-view {
    flex: 1;
  }

  .fold {
    height: 20px;
  }
}
```

次に、折り曲げ型端末でセグメントが横に並んでいる場合を処理するため、{{cssxref("@media/horizontal-viewport-segments")}} メディアクエリーを使用します。

ビューポートセグメントが水平方向にレイアウトされる場合、外側のラッパーに水平方向のフレックスボックスレイアウトを設定します。左側のコンテナーには左セグメントの幅 (`env(viewport-segment-width 0 0)`) を、右側のコンテナーには右セグメントの幅 (`env(viewport-segment-width 1 0)`) を設定します。折り曲げ領域が両セグメント間に占める幅が計算されます。左コンテナーの右端オフセットから右コンテナーの左端オフセットを差し引きます (`calc(env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0));`)。

```css
@media (horizontal-viewport-segments: 2) {
  .wrapper {
    flex-direction: row;
  }

  .list-view {
    width: env(viewport-segment-width 0 0);
  }

  .fold {
    width: calc(
      env(viewport-segment-left 1 0) - env(viewport-segment-right 0 0)
    );
    background-color: black;
    height: 100%;
  }

  .detail-view {
    width: env(viewport-segment-width 1 0);
  }
}
```

最後に、折り曲げ型端末でセグメントが上下方向になる場合を処理するため、{{cssxref("@media/vertical-viewport-segments")}} メディアクエリーを使用します。これは前回のコードスニペットと同じ手法ですが、幅ではなく高さを設定し、必要な返値を返すために高さ/上端/下端の環境変数を使用している点が異なります。

```css
@media (vertical-viewport-segments: 2) {
  .wrapper {
    flex-direction: column;
  }

  .list-view {
    height: env(viewport-segment-height 0 0);
  }

  .fold {
    width: 100%;
    height: calc(
      env(viewport-segment-top 0 1) - env(viewport-segment-bottom 0 0)
    );
    background-color: black;
  }

  .detail-view {
    height: env(viewport-segment-height 0 1);
  }
}
```

### JavaScript を使用したセグメントサイズの報告

同時に、画面のサイズや[端末形態](/ja/docs/Web/API/Device_Posture_API)、方向などが変更された際に、それぞれのセグメントのサイズを報告します。

まず、ラッパーとなる `<div>` 要素とその子要素である 2 つの `<section>` 要素（これらは CSS で 2 つのセグメント内に配置した 2 つのコンテナーです）への参照を取得します。

```js
const wrapperElem = document.querySelector(".wrapper");
const listViewElem = document.querySelector(".list-view");
const detailViewElem = document.querySelector(".detail-view");
```

次に、`addSegmentOutput()` 関数を定義します。この関数は引数として `segments` 配列、インデックス番号、および要素参照を取ります。この関数は、参照された要素にセグメント出力 `<div>` を追加します。出力には、ビューポートセグメントのインデックス番号と、そのセグメントのサイズを含む見出しが含まれます。

```js
function addSegmentOutput(segments, i, elem) {
  const segment = segments[i];

  const divElem = document.createElement("div");
  divElem.className = "segment-output";

  elem.appendChild(divElem);

  divElem.innerHTML = `<h2>Viewport segment ${i}</h2>
  <p>${segment.width}px x ${segment.height}px</p>`;
}
```

次に、`reportSegments()` 関数を定義します。この関数は、以前に追加されたセグメント出力 `<div>` 要素をすべて除去し、`<div>` をクリアします。その後、前回定義した `addSegmentOutput()` 関数を、 {{domxref("Viewport.segments", "window.viewport.segments")}} を使用して取得した端末のセグメント配列に基づき呼び出します。存在するセグメントの数を確認します。

- セグメントが 1 つしか存在しない場合、`addSegmentOutput()` を 1 回実行し、ラッパー `<div>` にセグメント出力 `<div>` を追加します。これにより、ビューポート全体のサイズを報告します。
- 2 つのセグメントが存在する場合、`addSegmentOutput()` を 2 回実行し、それぞれの `<section>` 要素にセグメント出力 `<div>` を追加します。これらは、それぞれのセグメント出力 `<div>` の親セグメントのサイズを報告します。

```js
function reportSegments() {
  // 追加する前に、前回のセグメント出力要素をすべて除去
  document.querySelectorAll(".segment-output").forEach((elem) => elem.remove());

  const segments = window.viewport.segments;

  if (segments.length === 1) {
    addSegmentOutput(segments, 0, wrapperElem);
  } else {
    addSegmentOutput(segments, 0, listViewElem);
    addSegmentOutput(segments, 1, detailViewElem);
  }
}
```

最後に、`reportSegments()` 関数を呼び出し、いくつかの異なるコンテキストで実行するためのイベントリスナーを追加します。

- ページ読み込み時にセグメント報告がページに追加されるよう、グローバルスコープで一度だけ実行します。
- ウィンドウのサイズ変更時（方向変更を含む）にセグメント報告を更新するため、[`resize`](/ja/docs/Web/API/Window/resize_event) イベントに基づいてこれを実行します。
  - `DevicePosture` の [`change`](/ja/docs/Web/API/DevicePosture/change_event) イベントに基づいてこれを実行し、端末の形態が変更された際にセグメント報告を更新します。

```js
reportSegments();
window.addEventListener("resize", reportSegments);
navigator.devicePosture.addEventListener("change", reportSegments);
```

## 関連情報

- [端末形態 API](/ja/docs/Web/API/Device_Posture_API)
