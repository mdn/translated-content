---
title: :where()
slug: Web/CSS/Reference/Selectors/:where
original_slug: Web/CSS/:where
l10n:
  sourceCommit: 0cc9980e3b21c83d1800a428bc402ae1865326b2
---

**`:where()`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-classes)関数で、セレクターリストを引数として取り、列挙されたセレクターのうちの何れかに当てはまるすべての要素を選択します。

`:where()` と {{CSSxRef(":is", ":is()")}} の違いは、 `:where()` の[詳細度](/ja/docs/Web/CSS/Guides/Cascade/Specificity)が常に 0 であるのに対し、 `:is()` は引数の中で最も詳細度の高いセレクターの詳細度を継承する点です。

{{InteractiveExample("CSS デモ: :where", "tabbed-shorter")}}

```css interactive-example
ol {
  list-style-type: upper-alpha;
  color: darkblue;
}

/* 詳細度が低いため、ol には適用されない */
:where(ol, ul, menu:unsupported) :where(ol, ul) {
  color: green;
}

:where(ol, ul) :where(ol, ul) ol {
  list-style-type: lower-greek;
  color: chocolate;
}
```

```html interactive-example
<ol>
  <li>Saturn</li>
  <li>
    <ul>
      <li>Mimas</li>
      <li>Enceladus</li>
      <li>
        <ol>
          <li>Voyager</li>
          <li>Cassini</li>
        </ol>
      </li>
      <li>Tethys</li>
    </ul>
  </li>
  <li>Uranus</li>
  <li>
    <ol>
      <li>Titania</li>
      <li>Oberon</li>
    </ol>
  </li>
</ol>
```

## 構文

```css-nolint
:where(<complex-selector-list>) {
  /* ... */
}
```

### 引数

`:where()` 擬似クラスは引数として、 1 つ以上のセレクターをカンマで区切った[セレクターリスト](/ja/docs/Web/CSS/Guides/Selectors/Selector_structure#セレクターリスト)を必要とします。このリストには[擬似要素](/ja/docs/Web/CSS/Reference/Selectors/Pseudo-elements)を含めることはできませんが、その他の単純、複合、複雑セレクターは利用できます。

### 寛容なセレクター解釈

仕様では、`:is()` と `:where()` が[寛容なセレクターリスト](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list)を受け入れると定義されています。

CSS では、セレクターリストを使用する場合、いずれかのセレクターが無効であれば、リスト全体が無効であると判断されます。 `:is()` や `:where()` を使用する場合、 1 つでも解釈に失敗するとセレクターリスト全体が無効とみなされるのではなく、不正確または対応していないセレクターは無視され、他のものが使用されます。

```css
:where(:valid, :unsupported) {
  /* … */
}
```

は `:unsupported` の部分に対応していないブラウザーでも `:valid` の部分が有効となり正しく解釈されます。一方で

```css
:valid,
:unsupported {
  /* … */
}
```

では、`:unsupported` に対応していないブラウザーでは、`:valid` に対応している場合でも全体が無視されます。

## 例

### :where() と :is() の比較

この例では `:where()` がどのように作用するのかを示し、 `:where()` と `:is()` の違いも説明しています。

以下のような HTML を想定してください。

```html
<article>
  <h2>:is() でスタイル設定したリンク</h2>
  <section class="is-styling">
    <p>
      こちらがメインコンテンツです。これは<a href="https://mozilla.org"
        >リンクを含んでいます</a
      >。
    </p>
  </section>

  <aside class="is-styling">
    <p>
      こちらが脇コンテンツです。これも<a href="https://developer.mozilla.org"
        >リンクを含んでいます</a
      >。
    </p>
  </aside>

  <footer class="is-styling">
    <p>
      こちらがフッターです。これも<a href="https://github.com/mdn">リンク</a
      >を含んでいます。
    </p>
  </footer>
</article>

<article>
  <h2>:where() でスタイル設定したリンク</h2>
  <section class="where-styling">
    <p>
      こちらがメインコンテンツです。これは<a href="https://mozilla.org"
        >リンクを含んでいます</a
      >。
    </p>
  </section>

  <aside class="where-styling">
    <p>
      こちらが脇コンテンツです。これも<a href="https://developer.mozilla.org"
        >リンクを含んでいます</a
      >。
    </p>
  </aside>

  <footer class="where-styling">
    <p>
      こちらがフッターです。これも<a href="https://github.com/mdn">リンク</a
      >を含んでいます。
    </p>
  </footer>
</article>
```

このややわざとらしい例では、2 つの article 要素がそれぞれ section、aside、footer 要素を含んでいます。2つの article は、子要素をマークするために使われるクラスが異なります。

中のリンクの選択をより簡単にしながらも、区別できるようにするために、次のように `:is()` や `:where()` を使うことができます。

```css
html {
  font-family: sans-serif;
  font-size: 150%;
}

:is(section.is-styling, aside.is-styling, footer.is-styling) a {
  color: red;
}

:where(section.where-styling, aside.where-styling, footer.where-styling) a {
  color: orange;
}
```

しかし、後からシンプルなセレクターを使ってフッターのリンクの色を上書きしたい場合はどうすればいいのでしょうか？

```css
footer a {
  color: blue;
}
```

これは赤いリンクに作用しません。 `:is()` の中のセレクターは全体のセレクターの詳細度で算出され、クラスセレクターは要素セレクターよりも高い詳細度を持っているからです。

しかし、 `:where()` 内のセレクターは詳細度が 0 なので、オレンジ色のフッターリンクは単純セレクターによって上書きされます。

> [!NOTE]
> この例は GitHub でも見ることができます。 [is-where](https://mdn.github.io/css-examples/is-where/) を参照してください。

{{EmbedLiveSample('Examples', '100%', 600)}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef(":is", ":is()")}}
- [セレクターリスト](/ja/docs/Web/CSS/Reference/Selectors/Selector_list)
- [ウェブコンポーネント](/ja/docs/Web/API/Web_components)
