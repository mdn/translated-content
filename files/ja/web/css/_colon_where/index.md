---
title: ":where()"
slug: Web/CSS/:where
---

{{CSSRef}}

**`:where()`** は [CSS](/ja/docs/Web/CSS) の[擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)関数で、セレクターリストを引数として取り、列挙されたセレクターのうちの何れかに当てはまるすべての要素を選択します。

```css
/* ヘッダー、メイン、フッターの何れかの中にある段落に
   カーソルをかざしたときに選択 */
:where(header, main, footer) p:hover {
  color: red;
  cursor: pointer;
}

/* 上記のものは下記のものと同等です。 */
header p:hover,
main p:hover,
footer p:hover {
  color: red;
  cursor: pointer;
}
```

`:where()` と {{CSSxRef(":is", ":is()")}} の違いは、 `:where()` は[詳細度](/ja/docs/Web/CSS/Specificity)が常に 0 であるのに対して、 `:is()` は引数内で最も詳細度の高いセレクターの詳細度を取ります。

### 寛容なセレクター解釈

仕様では、`:is()` と `:where()` が[寛容なセレクターリスト](https://drafts.csswg.org/selectors-4/#typedef-forgiving-selector-list)を受け入れると定義されています。

CSS では、セレクターリストを使用する場合、いずれかのセレクターが無効であれば、リスト全体が無効であると判断されます。 `is()` や `:where()` を使用する場合、 1 つでも解釈に失敗するとセレクターリスト全体が無効とみなされるのではなく、不正確または対応していないセレクターは無視され、他のものが使用されます。

```css
:where(:valid, :unsupported) {
  ...
}
```

は `:unsupported` の部分に対応していないブラウザーでも `:valid` の部分が有効となり正しく解釈されます。一方で

```css
:valid, :unsupported {
  ...
}
```

では、`:unsupported` に対応していないブラウザーでは、`:valid` に対応している場合でも全体が無視されます。

## 例

### :where() と :is() の比較

この例では `:where()` がどのように作用するのかを示し、 `:where()` と `:is()` の違いも説明しています。

以下のような HTML を想定してください。

```html
<article>
  <h2>:is() でスタイル付けしたリンク</h2>
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
  <h2>:where() でスタイル付けしたリンク</h2>
  <section class="where-styling">
    <p>
      こちらがメインコンテンツです。これは<a href="https://mozilla.org"
        >リンクを含んでいます</a
      >.
    </p>
  </section>

  <aside class="where-styling">
    <p>
      こちらが脇コンテンツです。これは<a href="https://developer.mozilla.org"
        >リンクを含んでいます</a
      >.
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

> **メモ:** この例は GitHub からも見ることができます。 [is-where](https://mdn.github.io/css-examples/is-where/) を参照してください。

{{EmbedLiveSample('Examples', '100%', 600)}}

## 構文

```
:where( <complex-selector-list> )
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{CSSxRef(":is", ":is()")}}
- [セレクターリスト](/ja/docs/Web/CSS/Selector_list)
- [ウェブコンポーネント](/ja/docs/Web/Web_Components)
