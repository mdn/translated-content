---
title: text-emphasis-position
slug: Web/CSS/Reference/Properties/text-emphasis-position
original_slug: Web/CSS/text-emphasis-position
l10n:
  sourceCommit: a7482281c4570bb7f932dce381f510d87ddf9924
---

**`text-emphasis-position`** は [CSS](/ja/docs/Web/CSS) のプロパティで、圏点が描かれる位置を設定します。 [`<ruby>`](/ja/docs/Web/HTML/Reference/Elements/ruby) 要素で描画されたテキストと同様、圏点のために十分な空間がない場合は、行の高さが広げられます。

{{InteractiveExample("CSS デモ: text-emphasis-position")}}

```css interactive-example-choice
text-emphasis-position: auto;
```

```css interactive-example-choice
text-emphasis-position: over right;
```

```css interactive-example-choice
text-emphasis-position: under right;
```

```css interactive-example-choice
text-emphasis-position: auto;
writing-mode: vertical-rl;
```

```css interactive-example-choice
text-emphasis-position: over left;
writing-mode: vertical-rl;
```

```css interactive-example-choice
text-emphasis-position: over right;
writing-mode: vertical-rl;
```

```html interactive-example
<section id="default-example">
  <p>
    I'd far rather be
    <span class="transition-all" id="example-element">happy than right</span>
    any day.
  </p>
</section>
```

```css interactive-example
p {
  font: 1.5em sans-serif;
}

#example-element {
  text-emphasis: filled double-circle #ffb703;
}
```

## 構文

```css
/* 初期値 */
text-emphasis-position: auto;

/* キーワード値 */
text-emphasis-position: over;
text-emphasis-position: under;

text-emphasis-position: over right;
text-emphasis-position: over left;
text-emphasis-position: under right;
text-emphasis-position: under left;

text-emphasis-position: left over;
text-emphasis-position: right over;
text-emphasis-position: right under;
text-emphasis-position: left under;

/* グローバル値 */
text-emphasis-position: inherit;
text-emphasis-position: initial;
text-emphasis-position: revert;
text-emphasis-position: revert-layer;
text-emphasis-position: unset;
```

### 値

このプロパティは 1 つまたは 2 つの値を受け入れます。

- 指定された値が 1 つだけの場合、`auto`、`over`、`under` のいずれかになります。`over` または `under` のみが使用される場合、 `right` が既定位置として想定されます。
- 2 つの値が指定された場合、 `over` か `under` のどちらかと `right` か `left` のどちらかが含まれていなければなりません。その順序は重要ではありません。

値には次のようなものがあります。

- `auto`
  - : 横書きモードではテキストの上に、縦書きモードではテキストの右に圏点を描きます。
- `over`
  - : 横書きモードでテキストの上に圏点を描きます。
- `under`
  - : 横書きモードでテキストの下に圏点を描きます。
- `right`
  - : 縦書きモードでテキストの右に圏点を描きます。
- `left`
  - : 縦書きモードでテキストの左に圏点を描きます。

## 解説

圏点の望ましい位置は言語に依存します。例えば日本語では、望ましい位置は `over right` です。一方、中国語では、望ましい位置は `under right` となります。下記の情報の表は、日本語、モンゴル語、中国語における望ましい圏点の位置をまとめたものです。

<table>
  <caption>
    望ましい圏点とルビの位置
  </caption>
  <thead>
    <tr>
      <th rowspan="2" scope="col">言語</th>
      <th colspan="2" scope="col">望ましい位置</th>
      <th colspan="2" rowspan="2" scope="col">図</th>
    </tr>
    <tr>
      <th>横書き</th>
      <th>縦書き</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>日本語</td>
      <td rowspan="3">over</td>
      <td rowspan="3">right</td>
      <td rowspan="3">
        <img
          alt="日本語の横書きテキストでは、圏点は強調される各文字の上に表示されます。"
          src="text-emphasis-ja.png"
          title="日本語のテキストの上に適用された圏点 (分かりやすいよう青で表示)"
        />
      </td>
      <td rowspan="4">
        <img
          alt="日本語の縦書きテキストでは、圏点が強調される各文字の右に表示されます。"
          src="text-emphasis-v.gif"
          title="日本語のテキストの右に適用された圏点"
        />
      </td>
    </tr>
    <tr>
      <td>韓国語</td>
    </tr>
    <tr>
      <td>モンゴル語</td>
    </tr>
    <tr>
      <td>中国語</td>
      <td>under</td>
      <td>right</td>
      <td>
        <img
          alt="中国語簡体字の横書きテキストでは、圏点は強調される各文字の下に表示されます。"
          src="text-emphasis-zh.gif"
          title="中国語のテキストの下に適用された圏点 (分かりやすいよう青で表示)"
        />
      </td>
    </tr>
  </tbody>
</table>

> [!NOTE]
> {{cssxref("text-emphasis")}} 一括指定プロパティを使用して、 `text-emphasis-position` を設定することはできず、また初期化されることもありません。

## 公式定義

{{CSSInfo}}

## 形式文法

{{csssyntax}}

## 例

### 圏点の位置を追加

ドロップダウンメニューを使用して、圏点の位置を変更します。この操作により、 `<section>` 要素のクラスが変更され、テキスト上の圏点の位置が更新されます。

#### HTML

```html hidden
<p class="unsupported">ブラウザーが <code>auto</code> の値に対応していません。</p>
<label for="position">圏点の位置:</position>
<select id="position">
  <option value="auto">auto</option>
  <option value="over-right">over right</option>
  <option value="over-left">over left</option>
  <option value="under-right">under right</option>
  <option value="under-left">under left</option>
  <option value="preferred">preferred</option>
</select>
```

```html
<section id="setting" class="auto">
  <p class="horizontal" lang="zh">你好世界</p>
  <!-- Hello World in Chinese -->
  <p class="vertical" lang="ja">世界、こんにちは。</p>
  <!-- Hello World in Japanese -->
</section>
```

#### CSS

```css hidden
.unsupported {
  color: red;
}
@supports (text-emphasis-position: auto) {
  .unsupported {
    display: none;
  }
}
.horizontal {
  writing-mode: horizontal-tb;
}
.vertical {
  writing-mode: vertical-rl;
}
section {
  display: flex;
  justify-content: space-around;
}
```

```css
section p {
  text-emphasis: filled circle tomato;
  text-emphasis-position: auto;
}
.over-right p,
.preferred p [lang="ja"] {
  text-emphasis-position: over right;
}
.over-left p {
  text-emphasis-position: over left;
}
.under-right p,
.preferred p [lang="zh"] {
  text-emphasis-position: under right;
}
.under-left p {
  text-emphasis-position: under left;
}
.preferred p [lang="ja"] {
}
```

```js hidden
const position = document.querySelector("#position");
const setting = document.querySelector("#setting");
const updateClass = () => {
  const currentClass = setting.classList;
  setting.classList.replace(currentClass, position.value);
};
position.addEventListener("change", updateClass);
```

#### 結果

「圏点の位置」のドロップダウンを使用して、強調マークの位置を選べます。ドロップダウンで `preferred` オプションは、[解説](#解説)の節で説明したように、優先位置を使用します。

{{EmbedLiveSample("Emphasis_mark_positions", 450, 250)}}

### ルビを圏点より優先させる場合

編集者によっては、ルビと競合する場合に圏点を隠すことを好みます。 HTML では、これは次のスタイルルールで実現できます。

```css
ruby {
  text-emphasis: none;
}
```

### 圏点よりルビを優先させる場合

編集者によっては、圏点と競合する場合にルビを隠すことを好みます。 HTML では、これは次のパターンで実現できます。

```css
em {
  text-emphasis: dot; /* text-emphasis を <em> 要素に設定 */
}

em rt {
  display: none; /* <em> 要素内のルビを隠す */
}
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{cssxref("text-underline-position")}}
- {{cssxref("text-emphasis-style")}}
- {{cssxref("text-emphasis-color")}}
- {{cssxref("text-emphasis")}} 一括指定プロパティ
- {{cssxref("writing-mode")}}
