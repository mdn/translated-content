---
title: "確認テスト: カスケード"
short-title: "試験: カスケード"
slug: Learn_web_development/Core/Styling_basics/Test_your_skills/Cascade
l10n:
  sourceCommit: 2f16610802bfbdf6394ca919557a4369b1236e10
---

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics")}}

この確認テストの目的は、 [CSS における継承の制御](/ja/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)の全般的なプロパティ値を理解しているかどうかを評価することです。

> [!NOTE]
> 手助けが必要な場合は、[確認テスト](/ja/docs/Learn_web_development#確認テスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

## カスケード 1

この課題では、[継承の制御](/ja/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts#継承の制御)の節で見てきた特別な値の 1 つを使用します。

この課題を完了するには、実際の色の値を使用せずに背景色を白にリセットする宣言を新しいルールに記述しましょう。

この課題の出発点は次のようなものです。

{{EmbedLiveSample("cascade1-start", "100%", "110px")}}

基盤となる出発点のコードは次の通りです。

```html live-sample___cascade1-start live-sample___cascade1-finish
<div class="container" id="outer">
  <div class="container" id="inner">
    <ul>
      <li class="nav"><a href="#">One</a></li>
      <li class="nav"><a href="#">Two</a></li>
    </ul>
  </div>
</div>
```

```css live-sample___cascade1-start live-sample___cascade1-finish
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

スタイル設定を更新すると、このようになります。

{{EmbedLiveSample("cascade1-finish", "100%", "110px")}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

可能な解決策の一つは次の通りです。

```css live-sample___cascade1-finish
#outer #inner a {
  background-color: inherit;
}
```

この課題では、 2 つのことを行う必要があります。最初の作業は、背景をパウダーブルーにするために使用したセレクターよりも特定の `a` 要素のセレクターを書くことです。この解決策では、非常に高い詳細度を保有する `id` セレクターを使用することで、これを実現します。

次に、すべてのプロパティに特別なキーワード値があることを覚えておく必要があります。この場合、`inherit`を使用すると、背景色は親要素と同じ色に設定されます。

</details>

## カスケード 2

この課題を完了するには、カスケードレイヤーの順序を操作して、リンクの色を `rebeccapurple` に変更してください。 `lightgreen` の宣言は編集しないでください。

この課題は、[競合の処理](/ja/docs/Learn_web_development/Core/Styling_basics/Handling_conflicts)記事では取り上げていない、カスケードレイヤーに関する知識が要求される、やや難しい課題です。この課題に挑戦するために必要な情報は、[カスケードレイヤー > レイヤーの順序に基づく優先順位の決定](/ja/docs/Learn_web_development/Core/Styling_basics/Cascade_layers#レイヤーの順番に応じた優先順位の決定)で探すことができます。

この課題の出発点は次のようなものです。

{{EmbedLiveSample("cascade2-start", "100%", "110px")}}

基盤となる出発点のコードは次の通りです。

```html live-sample___cascade2-start live-sample___cascade2-finish
<div class="container" id="outer">
  <div class="container" id="inner">
    <ul>
      <li class="nav"><a href="#">One</a></li>
      <li class="nav"><a href="#">Two</a></li>
    </ul>
  </div>
</div>
```

```css live-sample___cascade2-start
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

スタイル設定を更新すると、このようになります。

{{EmbedLiveSample("cascade2-finish", "100%", "110px")}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

可能な解決策の一つは次の通りです。

```css live-sample___cascade2-finish
@layer yellow, green, purple;
```

```css hidden live-sample___cascade2-finish
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

この課題で必要なことは 1 つだけです。優先順位を変更して、希望する色の宣言が最後に宣言されたレイヤーになるようにすることです。これが彼の解決策が示す内容です。

レイヤーのない通常のスタイルは、レイヤーのある通常のスタイルよりも優先されることを覚えておく必要があります。しかし、この課題のように、スタイルがすべてレイヤー内に収められている場合は、後で宣言されたレイヤーのスタイルが、先に宣言されたレイヤーのスタイルよりも優先されます。紫のレイヤーを最後に移動すると、緑と黄色のレイヤーよりも優先されるということになります。

</details>

{{PreviousMenuNext("Learn_web_development/Core/Styling_basics/Handling_conflicts", "Learn_web_development/Core/Styling_basics/Fixing_blog_styles", "Learn_web_development/Core/Styling_basics")}}
