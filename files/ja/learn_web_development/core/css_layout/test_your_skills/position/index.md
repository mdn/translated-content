---
title: "確認テスト: 位置指定"
short-title: "テスト: 位置指定"
slug: Learn_web_development/Core/CSS_layout/Test_your_skills/Position
l10n:
  sourceCommit: 953bce9928ec0693e419f7c0e1c786f29a7570e9
---

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout")}}

この確認テストの目的は、CSS の {{CSSxRef("position")}} プロパティと値を使用した [CSS の位置指定](/ja/docs/Learn_web_development/Core/CSS_layout/Positioning)を理解しているかどうかを評価することです。今までに学んだ素材の様々な要素を使用する、2 つの小さな課題を行っていただきます。

> [!NOTE]
> 手助けが必要な場合は、[確認テスト](/ja/docs/Learn_web_development#確認テスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

## 課題 1

この課題では、5px のグレーの境界線があるコンテナーの上と右に、`target` というクラスを持つアイテムを配置します。

最終的にはこの完成例のようになっているはずです。

{{EmbedLiveSample("position1-finish", "", "250px")}}

**ボーナス問題:** target をテキストの下に表示するように変更できますか？

```html live-sample___position1-start live-sample___position1-finish
<div class="container">
  <p>
    Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion
    daikon amaranth tatsoi tomatillo melon azuki bean garlic.
  </p>
  <div class="target">Target</div>
  <p>
    Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
    tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
    Dandelion cucumber earthnut pea peanut soko zucchini.
  </p>
</div>
```

```css live-sample___position1-start live-sample___position1-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

* {
  box-sizing: border-box;
}

.container {
  padding: 0.5em;
  border: 5px solid #cccccc;
}

.target {
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: #663398;
  padding: 1em;
  color: white;
}

.container {
  /* ここにスタイルを追加 */
}

.target {
  /* ここにスタイルを追加 */
}
```

これが課題の開始状態です。

{{EmbedLiveSample("position1-start", "", "400px")}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

これには、`position: relative` と `position: absolute` が必要であり、相対位置指定の観点から、新しい位置指定コンテキストにおいて、両者がどのように関連しているかを理解する必要があります。
よくある問題は、子要素に `position: absolute` を追加していても、コンテナーに `position: relative` を適用していないということでしょう。その場合、 target はビューポートから相対的に位置指定されることになります。

```css live-sample___position1-finish
.container {
  position: relative;
}

.target {
  position: absolute;
  top: 0;
  right: 0;
}
```

ボーナス問題では、 target 要素に `z-index` の負の値を追加する必要があります。例えば `z-index: -2` です。

</details>

## 課題 2

この課題の開始状態では、コンテンツをスクロールすると、サイドバーがコンテンツと一緒にスクロールします。この完成例のように、サイドバーが配置されたまま、コンテンツだけがスクロールするように変更してください。

{{EmbedLiveSample("position2-finish", "", "400px")}}

```html live-sample___position2-start live-sample___position2-finish
<div class="container">
  <div class="sidebar">
    <p>
      これはサイドバーです。コンテンツがスクロールしても位置を保つ必要があります。
    </p>
  </div>
  <div class="content">
    <p>
      Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh
      onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.
    </p>
    <p>
      Gumbo beet greens corn soko endive gumbo gourd. Parsley shallot courgette
      tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato.
      Dandelion cucumber earthnut pea peanut soko zucchini.
    </p>
    <p>
      Turnip greens yarrow ricebean rutabaga endive cauliflower sea lettuce
      kohlrabi amaranth water spinach avocado daikon napa cabbage asparagus
      winter purslane kale. Celery potato scallion desert raisin horseradish
      spinach carrot soko. Lotus root water spinach fennel kombu maize bamboo
      shoot green bean swiss chard seakale pumpkin onion chickpea gram corn pea.
      Brussels sprout coriander water chestnut gourd swiss chard wakame kohlrabi
      beetroot carrot watercress. Corn amaranth salsify bunya nuts nori azuki
      bean chickweed potato bell pepper artichoke.
    </p>
  </div>
</div>
```

```css live-sample___position2-start live-sample___position2-finish
body {
  font: 1.2em / 1.5 sans-serif;
}

* {
  box-sizing: border-box;
}

.container {
  height: 400px;
  padding: 0.5em;
  border: 5px solid #cccccc;
  overflow: auto;
}

.sidebar {
  color: white;
  background-color: #663398;
  padding: 1em;
  float: left;
  width: 150px;
}

.content {
  padding: 1em;
  margin-left: 160px;
}

.sidebar {
  /* ここにスタイルを追加 */
}
```

これが課題の開始状態です。

{{EmbedLiveSample("position2-start", "", "400px")}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成したサイドバーの CSS は次のようになります。

```css live-sample___position2-finish
.sidebar {
  position: fixed;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/CSS_layout/Positioning", "Learn_web_development/Core/CSS_layout/Flexbox", "Learn_web_development/Core/CSS_layout")}}
