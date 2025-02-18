---
title: "スキルテスト: 位置指定"
slug: Learn_web_development/Core/CSS_layout/Position_skills
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

このスキルテストの目的は、CSS の {{CSSxRef("position")}} プロパティと値を使用した [CSS の位置指定](/ja/docs/Learn_web_development/Core/CSS_layout/Positioning)を理解しているかどうかを評価することです。今までに学んだ素材の様々な要素を使用する、2 つの小さな課題を行っていただきます。

> [!NOTE]
> 以下のコードブロックで **"Play"** をクリックすると、 MDN Playground で例を編集することができます。
> コードをコピー（クリップボードアイコンをクリック）し、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) などのオンラインエディターに貼り付けることもできます。
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## 課題 1

この課題では、5px のグレーの境界線があるコンテナーの上と右に、`target` というクラスを持つアイテムを配置します。

最終的には下記画像のようになっているはずです。

![緑色のボックスが灰色の枠で囲まれたコンテナーの右上にあります。](position-task1.png)

**ボーナス問題:** target をテキストの下に表示するように変更できますか？

下記のライブコードを更新して、完成例を再現してみてください。

```html live-sample___position1
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

```css hidden live-sample___position1
body {
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}

.container {
  padding: 0.5em;
  border: 5px solid #ccc;
}

.target {
  width: 150px;
  height: 150px;
  border-radius: 5px;
  background-color: #663398;
  padding: 1em;
  color: white;
}
```

```css live-sample___position1
.container {
}

.target {
}
```

{{EmbedLiveSample("position1", "", "400px")}}

<details>
<summary>ここをクリックすると、解決策を表示します。</summary>

これには、 `position: relative` と `position: absolute` が必要であり、相対位置指定の観点から、新しい位置指定コンテキストにおいて、両者がどのように関連しているかを理解する必要があります。
よくある問題は、子要素に `position: absolute` を追加していても、コンテナーに `position: relative` を適用していないということでしょう。その場合、 target はビューポートに従って位置指定されることになります。

```css
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

このタスクでは、下記の例でボックスをスクロールすると、サイドバーがコンテンツと一緒にスクロールします。サイドバーが配置されたまま、コンテンツだけがスクロールするように変更してください。

![コンテンツはスクロールしていますが、サイドバーはその場に留まります。](position-task2.png)

下記のライブコードを更新して、完成例を再現してみてください。

```html live-sample___position2
<div class="container">
  <div class="sidebar">
    <p>
      This is the sidebar. It should remain in position as the content scrolls.
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

```css hidden live-sample___position2
body {
  font: 1.2em / 1.5 sans-serif;
}
* {
  box-sizing: border-box;
}

.container {
  height: 400px;
  padding: 0.5em;
  border: 5px solid #ccc;
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
```

```css live-sample___position2
.container {
}

.sidebar {
}
```

{{EmbedLiveSample("position2", "", "400px")}}

<details>
<summary>ここをクリックすると、解決策を表示します。</summary>

ここでは学習素材とは少し異なる方法で、 `position: fixed` の理解をテストしています。

```css
.sidebar {
  position: fixed;
}
```

</details>

## 関連情報

- [CSS によるスタイル設定の基本](/ja/docs/Learn_web_development/Core/Styling_basics)
