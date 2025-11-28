---
title: pointer-events
slug: Web/CSS/Reference/Properties/pointer-events
original_slug: Web/CSS/pointer-events
l10n:
  sourceCommit: b2833ddfd45cae1bb5e050d24637865e9327408d
---

**`pointer-events`** は [CSS](/ja/docs/Web/CSS) のプロパティで、特定のグラフィック要素がポインターイベントの[対象](/ja/docs/Web/API/Event/target)になる可能性のある環境（存在する場合）を設定します。

{{InteractiveExample("CSS デモ: pointer-events")}}

```css interactive-example-choice
pointer-events: auto;
```

```css interactive-example-choice
pointer-events: none;
```

```css interactive-example-choice
pointer-events: stroke; /* SVG-only */
```

```css interactive-example-choice
pointer-events: fill; /* SVG-only */
```

```html interactive-example
<section class="flex-column" id="default-example">
  <div id="example-element">
    <p>
      <a href="#">example link</a>
    </p>
    <p>
      <svg viewbox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <a xlink:href="#">
          <circle
            cx="50"
            cy="50"
            fill="#3E6E84"
            r="40"
            stroke="#ffb500"
            stroke-width="5"></circle>
          <text fill="white" text-anchor="middle" x="50" y="55">SVG</text>
        </a>
      </svg>
    </p>
  </div>
</section>
```

```css interactive-example
#example-element {
  font-weight: bold;
}

#example-element a {
  color: #009e5f;
}

#example-element svg {
  width: 10em;
  height: 10em;
}
```

## 構文

```css
/* キーワード値 */
pointer-events: auto;
pointer-events: none;

/* SVG で使われる値 */
pointer-events: visiblePainted;
pointer-events: visibleFill;
pointer-events: visibleStroke;
pointer-events: visible;
pointer-events: painted;
pointer-events: fill;
pointer-events: stroke;
pointer-events: bounding-box;
pointer-events: all;

/* グローバル値 */
pointer-events: inherit;
pointer-events: initial;
pointer-events: revert;
pointer-events: revert-layer;
pointer-events: unset;
```

`pointer-events` プロパティは、以下の値の一覧から選択した単一のキーワードとして指定します。

### 値

- `auto`
  - : 要素は、 `pointer-events` プロパティが指定されていないときと同様にふるまいます。SVG コンテンツ内では `visiblePainted` を指定したときと同じ効果になります。
- `none`
  - : 要素がポインターイベントの[対象](/ja/docs/Web/API/Event/target)になることはありません。しかし、子孫要素が `pointer-events` の別の値をセットされていた場合は、その子孫要素自体はポインターイベントのターゲットとなりえます。その場合、ポインターイベントはイベントキャプチャ/[バブリング](/ja/docs/Web/API/Event/bubbles)の過程で必要に応じて親要素のイベントリスナーをトリガーします。

    > [!NOTE]
    > `pointerenter` イベントと `pointerleave` イベントは、ポインティングデバイスが要素またはその子孫の 1 つに移動されたときに発行されます。そのため、 `pointer-events: none` が親要素に設定され、子要素に設定されていない場合でも、ポインターが子要素に移動したり、子要素から離れたりすると、親要素でイベントが発生します。

#### SVG のみ（HTML では実験的）

- `visiblePainted`
  - : SVG の場合のみ（HTML では実験的）の値です。要素の `visibility` プロパティに `visible` が設定されていて、かつ、例えば `fill` プロパティに `none` 以外の値が設定されている時の塗り (`fill`)、もしくは `stroke` プロパティが `none` 以外の時の線 (`stroke`) の上にマウスカーソルがある場合のみ、要素がポインターイベントのターゲットになりえます。
- `visibleFill`
  - : SVG の場合のみの値です。 `visibility` プロパティが `visible` にセットされていて、塗り (`fill`) の上にマウスカーソルがある場合にのみ、要素がポインターイベントのターゲットになりえます。 `fill` プロパティの値でイベント処理が変化することはありません。
- `visibleStroke`
  - : SVG の場合のみの値です。 `visibility` プロパティが `visible` にセットされていて、線 (`stroke`) の上にマウスカーソルがある場合にのみ、要素がポインターイベントのターゲットになりえます。 `stroke` プロパティの値でイベント処理が変化することはありません。
- `visible`
  - : SVG の場合のみ（HTML では実験的）の値です。 `visibility` プロパティが `visible` にセットされていて、塗り (`fill`) か線 (`stroke`) の上にマウスカーソルがある場合にのみ要素がポインターイベントのターゲットになりえます。 `fill` プロパティや `stroke` プロパティの値でイベント処理が変化することはありません。
- `painted`
  - : SVG の場合のみ（HTML では実験的）の値です。 `fill` プロパティが `none` 以外にセットされている塗りの（すなわち `fill` ）要素、もしくは `stroke` のプロパティが `none` 以外にセットされている線の（すなわち `stroke` ）要素の上にマウスカーソルがいる場合にのみ要素がポインターイベントのターゲットになりえます。 `visibility` プロパティの値はイベントプロセスに影響を与えません。
- `fill`
  - : SVG の場合のみの値です。塗り (fill) の上にマウスカーソルがある場合にのみ要素がポインターイベントのターゲットになりえます。 `fill` プロパティや `visibility` プロパティの値でイベント処理が変化することはありません。
- `stroke`
  - : SVG の場合のみの値です。線 (stroke) の上にマウスカーソルがある場合にのみ要素がポインターイベントのターゲットになりえます。 `stroke` プロパティや `visibility` の値でイベント処理が変化することはありません。
- `bounding-box`
  - : SVG のみ。要素がポインターイベントの対象となるのは、ポインターが要素の[境界ボックス](/ja/docs/Glossary/Bounding_box)上にある場合のみです。
- `all`
  - : SVG の場合のみ（HTML では実験的）の値です。塗り (`fill`) と線 (`stroke`) の上にマウスカーソルがある場合にのみ要素がポインターイベントのターゲットになりえます。 `fill` や `stroke` や `visibility` の値でイベント処理が変化することはありません。

## 解説

このプロパティが指定されないと、 `visiblePainted` の値の同じ性質が SVG コンテンツに適用されます。

値を `none` に設定すると、要素がポインターイベントのターゲットではないことを示すのに加え、ポインターイベントが要素を「通過」して、代わりに要素の「下」をターゲットにすることを指示します。

`pointer-events` を使用して要素がポインターイベントのターゲットとなることを防止するということは、必ずしもその要素のイベントリスナーが起動されない、することができないという意味ではありません。仮に要素の子要素のひとつで、 `pointer-events` がポインターイベントのターゲットになるよう明示的に設定されていた場合、その子要素をターゲットにするどのようなイベントも親要素を通過し、その際に親要素に設定されたイベントリスナーを起動します。もちろん、これらの子要素に触れず親要素にだけ触れるマウスの動きは、子要素と親要素のどちらにも捕まえられることはありません (親要素を「通過」し、その下にあるものがターゲットになります)。

`pointer-events: none` を持った要素は、 <kbd>Tab</kbd> キーを使用したキーボードナビゲーションによってフォーカスを受け取ります。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 基本的な例

この例では、すべての画像のポインターイベント (クリック、ドラッグ、ホバー等) を無効にします。

```css
img {
  pointer-events: none;
}
```

### リンクの無効化

この例では、 `http://example.com` へのリンクのポインターイベントを無効にします。

#### HTML

```html
<ul>
  <li><a href="https://developer.mozilla.org">MDN</a></li>
  <li><a href="http://example.com">example.com</a></li>
</ul>
```

#### CSS

```css
a[href="http://example.com"] {
  pointer-events: none;
}
```

#### 結果

{{EmbedLiveSample("Disabling_pointer_events_on_a_single_link", "500", "100")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG 属性 {{SVGAttr("pointer-events")}}
- SVG 属性 {{SVGAttr("visibility")}}
- {{domxref("PointerEvent")}} API
- (X)HTML で使うことを踏まえた [WebKit の PointerEventsProperty の仕様書](https://webkit.org/specs/PointerEventsProperty.html)
- {{cssxref("user-select")}} - ユーザーがテキストを選択できるかどうかの制御
