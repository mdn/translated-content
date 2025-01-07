---
title: ":target"
slug: Web/CSS/:target
l10n:
  sourceCommit: 259a7061abfce122ff8bb3a6687b02509263ef38
---

{{CSSRef}}

**`:target`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)で、 URL のフラグメントに一致する [`id`](/ja/docs/Web/HTML/Global_attributes#id) を持つ固有の要素（_ターゲット要素_）を表します。

```css
/* 現在の URL のフラグメントに一致する ID を持つ要素を選択 */
:target {
  border: 2px solid black;
}
```

例えば、以下の URL には `section2` と呼ばれる要素を指すフラグメント（_#_ 記号で記述）があります。

```
http://www.example.com/index.html#section2
```

現在の URL が上記の通りの場合、以下の要素が `:target` セレクターで選択されます。

```html
<section id="section2">Example</section>
```

## 構文

```css
:target {
  /* ... */
}
```

> **メモ:** [CSS 仕様書のバグの可能性](https://discourse.wicg.io/t/target-css-does-not-work-because-shadowroot-does-not-set-a-target-element/2070)がありますが、`:target` は[ウェブコンポーネント](/ja/docs/Web/API/Web_components)内では動作しません。[シャドウルート](/ja/docs/Web/API/ShadowRoot)がターゲット要素をシャドウツリーに渡さないためです。

## 例

### 目次

`:target` 擬似クラスは、目次を構成するためにリンクされたページの部分を強調表示するために使うことができます。

#### HTML

```html-nolint
<h3>目次</h3>
<ol>
  <li><a href="#p1">第 1 段落にジャンプ！</a></li>
  <li><a href="#p2">第 2 段落にジャンプ！</a></li>
  <li>
    <a href="#nowhere">このリンクは対象がないので、どこにも行きません。</a>
  </li>
</ol>

<h3>面白い記事</h3>
<p id="p1">
  URL フラグメントを使うと<i>この段落</i>をターゲットにすることができます。上記のリンクをクリックして試してみてください。
</p>
<p id="p2">
  これは<i>別な段落</i>であり、やはり上記のリンクからアクセスできます。喜ばしいことだと思いませんか。
</p>
```

#### CSS

```css
p:target {
  background-color: gold;
}

/* 対象要素に擬似要素を追加 */
p:target::before {
  font: 70% sans-serif;
  content: "►";
  color: limegreen;
  margin-right: 0.25em;
}

/* 対象要素の中の i 要素にスタイルを適用 */
p:target i {
  color: red;
}
```

#### 結果

{{EmbedLiveSample('A_table_of_contents', 500, 300)}}

### 純粋な CSS のライトボックス

`:target` 擬似クラスを使用して JavaScript を使わずにライトボックスを作成することができます。このテクニックはページ内の最初は非表示の要素にリンクを作ることができることを利用しています。いったん対象となれば、 CSS で `display` を変更して表示させます。

> **メモ:** `:target` 擬似クラスを使用した純粋な CSS のライトボックスのもっと完全な版は、 [GitHub で利用できます](https://github.com/madmurphy/takefive.css/) ([デモ](https://madmurphy.github.io/takefive.css/))。

#### HTML

```html
<ul>
  <li><a href="#example1">例 1 を開く</a></li>
  <li><a href="#example2">例 2 を開く</a></li>
</ul>

<div class="lightbox" id="example1">
  <figure>
    <a href="#" class="close"></a>
    <figcaption>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec felis enim,
      placerat id eleifend eu, semper vel sem.
    </figcaption>
  </figure>
</div>

<div class="lightbox" id="example2">
  <figure>
    <a href="#" class="close"></a>
    <figcaption>
      Cras risus odio, pharetra nec ultricies et, mollis ac augue. Nunc et diam
      quis sapien dignissim auctor. Quisque quis neque arcu, nec gravida magna.
    </figcaption>
  </figure>
</div>
```

#### CSS

```css
/* 開いていないライトボックス */
.lightbox {
  display: none;
}

/* 開いたライトボックス */
.lightbox:target {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ライトボックスの中身 */
.lightbox figcaption {
  width: 25rem;
  position: relative;
  padding: 1.5em;
  background-color: lightpink;
}

/* 閉じるボタン */
.lightbox .close {
  position: relative;
  display: block;
}

.lightbox .close::after {
  right: -1rem;
  top: -1rem;
  width: 2rem;
  height: 2rem;
  position: absolute;
  display: flex;
  z-index: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  border-radius: 50%;
  color: white;
  content: "×";
  cursor: pointer;
}

/* ライトボックスのオーバーレイ */
.lightbox .close::before {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background-color: rgba(0, 0, 0, 0.7);
  content: "";
  cursor: default;
}
```

#### 結果

{{EmbedLiveSample('Pure-CSS_lightbox', 500, 220)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [セレクターでの :target 擬似クラスの利用](/ja/docs/Web/CSS/CSS_selectors/Using_the_:target_pseudo-class_in_selectors)
