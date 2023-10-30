---
title: pointer-events
slug: Web/CSS/pointer-events
---

{{CSSRef}}

**`pointer-events`** は [CSS](/ja/docs/Web/CSS) のプロパティで、特定のグラフィック要素がポインターイベントの[対象](/ja/docs/Web/API/Event/target)になる可能性のある環境 (存在する場合) を設定します。

{{EmbedInteractiveExample("pages/css/pointer-events.html")}}

## 構文

```css
/* キーワード値 */
pointer-events: auto;
pointer-events: none;
pointer-events: visiblePainted; /* SVG のみ */
pointer-events: visibleFill; /* SVG のみ */
pointer-events: visibleStroke; /* SVG のみ */
pointer-events: visible; /* SVG のみ */
pointer-events: painted; /* SVG のみ */
pointer-events: fill; /* SVG のみ */
pointer-events: stroke; /* SVG のみ */
pointer-events: all; /* SVG のみ */

/* グローバル値 */
pointer-events: inherit;
pointer-events: initial;
pointer-events: unset;
```

`pointer-events` プロパティは、以下の値の一覧から選択した単一のキーワードとして指定します。

### 値

- `auto`
  - : 要素は、 `pointer-events` プロパティが指定されていないときと同様にふるまいます。SVG コンテンツ内では `visiblePainted` を指定したときと同じ効果になります。
- `none`
  - : 要素がポインターイベントの[対象](/ja/docs/Web/API/Event/target)になることはありません。しかし、子孫要素が `pointer-events` の別の値をセットされていた場合は、その子孫要素自体はポインターイベントのターゲットとなりえます。その場合、ポインターイベントはイベントキャプチャ/[バブリング](/ja/docs/Web/API/Event/bubbles)の過程で必要に応じて親要素のイベントリスナーをトリガーします。

#### SVG のみ(HTML では実験的)

- `visiblePainted`
  - : SVG の場合のみ (HTML では実験的) の値です。要素の `visibility` プロパティに `visible` が設定されていて、かつ、例えば `fill` プロパティに `none` 以外の値が設定されている時の塗り (`fill`)、もしくは `stroke` プロパティが `none` 以外の時の線 (`stroke`) の上にマウスカーソルがある場合のみ、要素がポインターイベントのターゲットになりえます。
- `visibleFill`
  - : SVG の場合のみの値です。 `visibility` プロパティが `visible` にセットされていて、塗り (`fill`) の上にマウスカーソルがある場合にのみ、要素がポインターイベントのターゲットになりえます。 `fill` プロパティの値でイベント処理が変化することはありません。
- `visibleStroke`
  - : SVG の場合のみの値です。 `visibility` プロパティが `visible` にセットされていて、線 (`stroke`) の上にマウスカーソルがある場合にのみ、要素がポインターイベントのターゲットになりえます。 `stroke` プロパティの値でイベント処理が変化することはありません。
- `visible`
  - : SVG の場合のみ (HTML では実験的) の値です。 `visibility` プロパティが `visible` にセットされていて、塗り (`fill`) か線 (`stroke`) の上にマウスカーソルがある場合にのみ要素がポインターイベントのターゲットになりえます。 `fill` プロパティや `stroke` プロパティの値でイベント処理が変化することはありません。
- `painted`
  - : SVG の場合のみ (HTML では実験的) の値です。 `fill` プロパティが `none` 以外にセットされている塗りの（すなわち `fill` ）要素、もしくは `stroke` のプロパティが `none` 以外にセットされている線の（すなわち `stroke` ）要素の上にマウスカーソルがいる場合にのみ要素がポインターイベントのターゲットになりえます。 `visibility` プロパティの値はイベントプロセスに影響を与えません。
- `fill`
  - : SVG の場合のみの値です。塗り (`fill`) の上にマウスカーソルがある場合にのみ要素がポインターイベントのターゲットになりえます。 `fill` プロパティや `visibility` プロパティの値でイベント処理が変化することはありません。
- `stroke`
  - : SVG の場合のみの値です。線 (`stroke`) の上にマウスカーソルがある場合にのみ要素がポインターイベントのターゲットになりえます。 `stroke` プロパティや `visibility` の値でイベント処理が変化することはありません。
- `all`
  - : SVG の場合のみ (HTML では実験的) の値です。塗り (`fill`) と線 (`stroke`) の上にマウスカーソルがある場合にのみ要素がポインターイベントのターゲットになりえます。 `fill` や `stroke` や `visibility` の値でイベント処理が変化することはありません。

## 解説

このプロパティが指定されないと、 `visiblePainted` の値の同じ性質が SVG コンテンツに適用されます。

値を `none` に設定すると、要素がポインターイベントのターゲットではないことを示すのに加え、ポインターイベントが要素を「通過」して、代わりに要素の「下」をターゲットにすることを指示します。

`pointer-events` を使用して要素がポインターイベントのターゲットとなることを防止するということは、必ずしもその要素のイベントリスナーが起動されない、することができないという意味ではありません。仮に要素の子要素のひとつで、 `pointer-events` がポインターイベントのターゲットになるよう明示的に設定されていた場合、その子要素をターゲットにするどのようなイベントも親要素を通過し、その際に親要素に設定されたイベントリスナーを起動します。もちろん、これらの子要素に触れず親要素にだけ触れるマウスの動きは、子要素と親要素のどちらにも捕まえられることはありません (親要素を「通過」し、その下にあるものがターゲットになります)。

`pointer-events: none` を持った要素は、 <kbd>Tab</kbd> キーを使用したキーボードナビゲーションによってフォーカスを受け取ります。

私たちは HTML で、どのような要素が、どんな時に、ポインターイベントを「捕まえる」かを (`auto` と `none` だけではなく) より細かく制御できるようにしたいと思っています。今後の HTML で `pointer-events` をどのように拡張すべきかを決めるうえで、このプロパティで実現したい具体例があれば、[この wiki ページ](https://wiki.mozilla.org/SVG:pointer-events)の Use Cases セクションに記入してください (きれいに整理してからなどと気にしなくても大丈夫です)。

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
a[href="http://example.com"]
{
  pointer-events: none;
}
```

#### 結果

{{EmbedLiveSample("Disabling_links", "500", "100")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat("css.properties.pointer-events")}}

## 関連情報

- SVG 属性 {{SVGAttr("pointer-events")}}
- SVG 属性 {{SVGAttr("visibility")}}
- (X)HTML で使うことを踏まえた [WebKit の PointerEventsProperty の仕様書](http://webkit.org/specs/PointerEventsProperty.html)
- {{cssxref("user-select")}} - ユーザーがテキストを選択できるかどうかの制御
