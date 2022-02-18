---
title: 'セレクターでの :target 擬似クラスの利用'
slug: Web/CSS/CSS_Selectors/Using_the_:target_pseudo-class_in_selectors
tags:
  - ':target'
  - CSS
  - ガイド
  - リファレンス
  - セレクター
translation_of: Web/CSS/CSS_Selectors/Using_the_:target_pseudo-class_in_selectors
---
{{CSSRef}}

URL が文書の特定の部分を指している場合、ユーザーが気づきにくい場合があります。いくつかのシンプルな CSS を使用して URL の対象に注目させ、ユーザーの利便性を向上させる方法を確認しましょう。

## ターゲットの選択

{{cssxref(":target")}} [擬似クラス](/ja/docs/Web/CSS/Pseudo-classes)は、フラグメント識別子を含む URL のターゲット要素にスタイルを適用するために使用されます。例えば、 `http://developer.mozilla.org/ja/docs/Using_the_:target_selector#example` という URL はフラグメント識別子 `#example` を含んでいます。 HTML では、 `id` および `name` 属性が名前空間を共用しているので、識別子はどちらかの値として見つかります。従って、例の URL はこの文書の「例」の見出しを指すことになります。

おそらく URL のターゲットになる `h2` 要素をすべてスタイル付けしたいでしょうが、他の種類の要素がターゲットのスタイルになることは望まないでしょう。単にこれで十分です。

```css
h2:target { font-weight: bold; }
```

文書の特定のフラグメントに特化してスタイルを作成することもできます。これは URI に見られる値と同じ識別子を使用することで実現できます。つまり、 `#example` フラグメントに枠を追加するには、以下のように書きます。

```css
#example:target { border: 1px solid black; }
```

## すべての要素を対象にする

インテントを「ブランケット」スタイルで作成すれば、すべての対象となる要素に適用されますので、ユニバーサルセレクターの代わりになります。

```css
:target { color: red; }
```

## 例

以下の例には、同じ文書内で要素を指す五つのリンクがあります。例えば "First"のリンクを選択すると、 `<h1 id="one">` がターゲットの要素になります。なお、ターゲット要素は可能であればブラウザーウィンドウの先頭に配置されるため、文書は新しいスクロール位置へ移動する可能性があります。

```html
<h4 id="one">...</h4> <p id="two">...</p>
<div id="three">...</div> <a id="four">...</a> <em id="five">...</em>

<a href="#one">First</a>
<a href="#two">Second</a>
<a href="#three">Third</a>
<a href="#four">Fourth</a>
<a href="#five">Fifth</a>
```

## まとめ

フラグメント識別子が文書の一部を指している場合、文書のどの部分を読むことを想定しているのか、読み手が分からなくなることがあります。 URI の対象をスタイル付けすることで、読み手の混乱を縮小したり除いたりすることができます。

## 関連情報

- {{cssxref(":target")}}
