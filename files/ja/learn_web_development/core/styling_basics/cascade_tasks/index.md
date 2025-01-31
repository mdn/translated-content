---
title: "スキルテスト: カスケード"
slug: Learn_web_development/Core/Styling_basics/Cascade_tasks
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

このスキルテストの目的は、 [CSS における継承の制御](/ja/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)の全般的なプロパティ値を理解しているかどうかを評価することです。

> [!NOTE]
> 以下のコードブロックで **"Play"** をクリックすると、 MDN Playground で例を編集することができます。
> コードをコピー（クリップボードアイコンをクリック）し、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) などのオンラインエディターに貼り付けることもできます。
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## 課題 1

この課題では、[継承の制御](/ja/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#継承の制御)の節で見てきた特別な値の 1 つを使用します。実際の色値を用いずに、背景色を白に戻す宣言を新しいルールに書いてください。

最終結果は下記の画像のようになるはずです。

![白地に黄色のリンクがかろうじて見える程度。](mdn-cascade.png)

以下のライブコードを更新して、完成例を再現してみてください。

```html live-sample___cascade
<div class="container" id="outer">
  <div class="container" id="inner">
    <ul>
      <li class="nav"><a href="#">One</a></li>
      <li class="nav"><a href="#">Two</a></li>
    </ul>
  </div>
</div>
```

```css live-sample___cascade
#outer div ul .nav a {
  background-color: powderblue;
  padding: 5px;
  display: inline-block;
  margin-bottom: 10px;
}

div div li a {
  color: rebeccapurple;
}
```

{{EmbedLiveSample("cascade")}}

<details>
<summary>ここをクリックすると、解決策を表示します。</summary>

可能な解決策の一つは次の通りです。

```css
#outer #inner a {
  background-color: initial;
}
```

この課題では、 2 つのことを行う必要があります。最初の作業は、背景をパウダーブルーにするために使用したセレクターよりも特定の `a` 要素のセレクターを書くことです。この解決策では、非常に高い詳細度を保有する `id` セレクターを使用することで、これを実現します。

次に、すべてのプロパティに特別なキーワード値があることを覚えておく必要があります。この場合、`inherit`を使用すると、背景色は親要素と同じ色に設定されます。

</details>

## 課題 2

この課題では、[カスケードレイヤーの順序](/ja/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#order_of_cascade_layers)の節を活用して変更してください。リンクを rebeccapurple 色にするためにカスケードレイヤーの順序を使用して、 lightgreen の宣言に触れることなく、既存の宣言を編集してください。

最終結果は下記の画像のようになるはずです。

![白地に黄色のリンクがかろうじて見える程度。](mdn-cascade.png)

以下のライブコードを更新して、完成例を再現してみてください。

```html live-sample___cascade-layer
<div class="container" id="outer">
  <div class="container" id="inner">
    <ul>
      <li class="nav"><a href="#">One</a></li>
      <li class="nav"><a href="#">Two</a></li>
    </ul>
  </div>
</div>
```

```css live-sample___cascade-layer
@layer yellow, purple, green;

@layer yellow {
  #outer div ul .nav a {
    padding: 5px;
    display: inline-block;
    margin-bottom: 10px;
  }
}
@layer purple {
  div div li a {
    color: rebeccapurple;
  }
}
@layer green {
  a {
    color: lightgreen;
  }
}
```

{{EmbedLiveSample("cascade-layer")}}

<details>
<summary>ここをクリックすると、解決策を表示します。</summary>

可能な解決策の一つは次の通りです。

```css
@layer yellow, green, purple;
```

この課題で必要なことは 1 つだけです。優先順位を変更して、希望する色の宣言が最後に宣言されたレイヤーになるようにすることです。これが彼の解決策が示す内容です。

レイヤーのない通常のスタイルは、レイヤーのある通常のスタイルよりも優先されることを覚えておく必要があります。しかし、この課題のように、スタイルがすべてレイヤー内に収められている場合は、後で宣言されたレイヤーのスタイルが、先に宣言されたレイヤーのスタイルよりも優先されます。紫のレイヤーを最後に移動すると、緑と黄色のレイヤーよりも優先されるということになります。

</details>

## 関連情報

- [CSS によるスタイル設定の基本](/ja/docs/Learn_web_development/Core/Styling_basics)
