---
title: "Window: matchMedia() メソッド"
short-title: matchMedia()
slug: Web/API/Window/matchMedia
l10n:
  sourceCommit: 85fccefc8066bd49af4ddafc12c77f35265c7e2d
---

{{APIRef}}

{{domxref("Window")}} インターフェイスの **`matchMedia()`** メソッドは、新しい {{domxref("MediaQueryList")}} オブジェクトを返します。このオブジェクトを使用すると、この文書 ({{domxref("document")}}) が[メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)文字列に一致するかどうかを判断できるほか、文書を監視して、そのメディアクエリーに一致した（または一致しなくなった）タイミングを検出することもできます。

## 構文

```js-nolint
matchMedia(mediaQueryString)
```

### 引数

- `mediaQueryString`
  - : {{domxref("MediaQueryList")}} に構文解析するメディアクエリーを指定する文字列です。

    CSS と同様に、式内ではすべての[メディア特性](/ja/docs/Web/CSS/Reference/At-rules/@media#メディア特性)を括弧で囲む必要があります。例えば、`matchMedia("(width <= 600px)")` や `matchMedia("(orientation: landscape)")` は動作しますが、`matchMedia("width < 600px")` や `matchMedia("orientation: landscape")` は動作しません。メディア種別（`all`、`print`、`screen`）および論理演算子（`and`、`or`、`not`、`only`）は、括弧で囲む必要はありません。

### 返値

メディアクエリー用の新しい {{domxref("MediaQueryList")}} オブジェクトです。このオブジェクトのプロパティやイベントを使用して、一致する条件を検出し、時間経過に伴うそれらの変化を監視します。

## 使用上の注意

返されたメディアクエリーを使用して、文書がメディアクエリーに一致するかどうかを、即時チェックおよびイベント駆動型のチェックの両方で行うことができます。

文書がメディアクエリーに一致するかどうかを一度だけ即座に確認するには、{{domxref("MediaQueryList.matches", "matches")}} プロパティの値を確認してください。文書がメディアクエリーの要件を満たしている場合、この値は `true` になります。

文書がメディアクエリーに一致する場合であれ一致しない場合であれ、常にその状態を把握しておく必要がある場合は、代わりに、オブジェクトに対して {{domxref("MediaQueryList.change_event", "change")}} イベントが配信されるのを監視するようにしてください。
[その良い例](/ja/docs/Web/API/Window/devicePixelRatio#画面解像度や拡大率の変化の監視)が、{{domxref("Window.devicePixelRatio")}} に関する記事にあります。

## 例

この例では、メディアクエリー `(width <= 600px)` を実行し、その結果として得られる `MediaQueryList` の `matches` プロパティの値を {{HTMLElement("span")}} 内に表示させます。その結果、ビューポートの幅が 600 ピクセル以下の場合は "true" と表示され、それより広い場合は "false" と表示されます。

### JavaScript

```js
let mql = window.matchMedia("(width <= 600px)");

document.querySelector(".mq-value").innerText = mql.matches;
```

この JavaScript コードは、照合対象のメディアクエリーを `matchMedia()` に渡してコンパイルし、`<span>` の {{domxref("HTMLElement.innerText", "innerText")}} に結果の {{domxref("MediaQueryList.matches", "matches")}} の値を代入します。これにより、ページが読み込まれた時点で、その文書がメディアクエリーに一致しているかどうかを示すようになります。

### HTML

```html
<span class="mq-value"></span>
```

単純な `<span>` で出力を受け取ります。

```css hidden
.mq-value {
  font:
    18px "Arial",
    sans-serif;
  font-weight: bold;
  color: #8888ff;
  padding: 0.4em;
  border: 1px solid #ddddee;
}
```

### 結果

{{EmbedLiveSample("Examples", "100%", "60")}}

他にも[プログラムでのメディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Testing)にいくつか例があります。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連記事

- [メディアクエリー](/ja/docs/Web/CSS/Guides/Media_queries/Using)
- [コード内でのメディアクエリーの使用](/ja/docs/Web/CSS/Guides/Media_queries/Testing)
- {{domxref("MediaQueryList")}}
