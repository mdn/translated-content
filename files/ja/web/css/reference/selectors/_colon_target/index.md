---
title: :target
slug: Web/CSS/Reference/Selectors/:target
original_slug: Web/CSS/:target
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`:target`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)で、文書内のターゲット要素を選択します。文書が読み込まれたとき、ターゲット要素は文書の [URL フラグメント識別子](/ja/docs/Web/URI/Reference/Fragment#fragment)を使用して導出されます。

```css
/* 文書のターゲット要素を選択 */
:target {
  border: 2px solid black;
}
```

例えば、次の URL にはフラグメント識別子（_#_ 記号で示されます）があり、[`id`](/ja/docs/Web/HTML/Reference/Global_attributes/id) の `setup` である要素を、文書のターゲット要素としてマークしています。

```url
http://www.example.com/help/#setup
```

現在の URL が上記の通りの場合、以下の要素が `:target` セレクターで選択されます。

```html
<section id="setup">インストール手順</section>
```

## 構文

```css
:target {
  /* ... */
}
```

## 解説

HTML 文書が読み込まれると、ブラウザーはそのターゲット要素を設定します。要素は URL フラグメント識別子を使用して識別されます。 URL フラグメント識別子がない場合、文書にはターゲット要素はありません。擬似クラス `:target` を使用すると、文書のターゲット要素のスタイルを設定することができます。要素にフォーカスを合わせたり、強調表示したり、アニメーションさせたりすることができます。

ターゲット要素は、文書が読み込まれたとき、および [`history.back()`](/ja/docs/Web/API/History/back)、[`history.forward()`](/ja/docs/Web/API/History/forward)、[`history.go()`](/ja/docs/Web/API/History/forward) メソッドが呼び出されたときに設定されます。しかし、[`history.pushState()`](/ja/docs/Web/API/History/pushState) および [`history.replaceState()`](/ja/docs/Web/API/History/replaceState) メソッドが呼び出されても、変更は行われません。

> [!NOTE]
> [CSS 仕様書のバグの可能性](https://discourse.wicg.io/t/target-css-does-not-work-because-shadowroot-does-not-set-a-target-element/2070)がありますが、`:target` は[ウェブコンポーネント](/ja/docs/Web/API/Web_components)内では動作しません。[シャドウルート](/ja/docs/Web/API/ShadowRoot)がターゲット要素をシャドウツリーに渡さないためです。

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
    <a href="#nowhere">
      このリンクにはターゲットがないので、どこにも行きません。
    </a>
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

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [セレクターでの :target 擬似クラスの利用](/ja/docs/Web/CSS/Guides/Selectors/Using_:target)
