---
title: "確認テスト: WAI-ARIA"
short-title: "テスト: WAI-ARIA"
slug: Learn_web_development/Core/Accessibility/Test_your_skills/WAI-ARIA
l10n:
  sourceCommit: 2bda943b59604eb44f5d759708845c5f56970635
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/WAI-ARIA_basics","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}

この確認テストの目的は、あなたが [WAI-ARIA の基本](/ja/docs/Learn_web_development/Core/Accessibility/WAI-ARIA_basics)の記事を理解したかどうかを評価することです。

> [!NOTE]
> 手助けが必要な場合は、[確認テスト](/ja/docs/Learn_web_development#確認テスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

## WAI-ARIA 1

最初の ARIA の課題では、明らかにリストであることを意味している、意味づけされていないマークアップのセクションがあります。使用する要素を変更することができないと想定して、スクリーンリーダーのユーザーにこれをリストとして認識させるにはどうすればよいでしょうか。

この課題を完了するには、スクリーンリーダーが `<div>` 要素を順序なしリストとして認識できるように、WAI-ARIA の意味情報を追加してください。

この課題の出発点は次のようなものです。

{{ EmbedLiveSample("aria-1", "100%", 250) }}

この出発点の基盤となるコードは次の通りです。

<!-- 各例で共有されるコード -->

```css hidden live-sample___aria-1 live-sample___aria-2 live-sample___aria-3
body {
  background-color: white;
  color: #333333;
  font:
    1em / 1.4 "Helvetica Neue",
    "Helvetica",
    "Arial",
    sans-serif;
  padding: 1em;
  margin: 0;
}

* {
  box-sizing: border-box;
}
```

<!-- 例に固有のコード -->

```html live-sample___aria-1
<p>好きな動物</p>

<div>
  <div>ブタ</div>
  <div>ガゼル</div>
  <div>ラマ</div>
  <div>神々しいヘラジカ</div>
  <div>ハリネズミ</div>
</div>
```

```css live-sample___aria-1
div > div {
  padding-left: 20px;
  position: relative;
}

div > div::before {
  content: " ";
  width: 8px;
  height: 8px;
  background-color: black;
  border-radius: 50%;
  position: absolute;
  left: 0;
  top: 8px;
}
```

この課題については、見た目が出発点と変わらないため、完成したコンテンツは用意していません。

<details>
<summary>ここをクリックすると、模範解答を表示します</summary>

完成した HTML は、次のようなものになるはずです。

```html
<p>好きな動物</p>

<div role="list">
  <div role="listitem">ブタ</div>
  <div role="listitem">ガゼル</div>
  <div role="listitem">ラマ</div>
  <div role="listitem">神々しいヘラジカ</div>
  <div role="listitem">ハリネズミ</div>
</div>
```

</details>

## WAI-ARIA 2

2 つ目の WAI-ARIA の課題では、単純な検索形式を表示していますが、アクセシビリティを改善するためにいくつかの WAI-ARIA の機能を追加してください。

課題を完了させるには、次のようにします。

1. スクリーンリーダーが検索フォームをページ上の独立したランドマークとして読み上げられるように属性を追加し、見つけやすくしてください。
2. 検索入力欄に適切なラベルを付けますが、DOM に目に見えるテキストラベルを明示的に追加はしません。

この課題の出発点は次のようなものです。

{{ EmbedLiveSample("aria-2", "100%", 100) }}

この出発点の基盤となるコードは次の通りです。

```html live-sample___aria-2
<form>
  <input type="search" name="search" />
</form>
```

この課題について、外見が出発点の状態と大きく変わらないため、完成したコンテンツは提供していません。

<details>
<summary>ここをクリックすると、模範解答を表示します</summary>

完成した HTML は、次のようなものになるはずです。

```html
<form role="search">
  <input
    type="search"
    name="search"
    aria-label="このサイトでお気に入りのコンテンツを検索してください" />
</form>
```

</details>

## WAI-ARIA 3

最後の WAI-ARIA の課題では、前回の [CSS と JavaScript の確認テスト](/ja/docs/Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript)で見た例を返します。
前回と同様に、動物の名前のリストを表示する単純なアプリがあります。動物の名前を 1 つクリックすると、その動物の詳細な説明がリスト以下のボックスに現れます。ここでは、マウスとキーボードでアクセスできるバージョンから始めています。

ここでの問題は、 DOM が新しい説明を表示させるために変更されたとき、スクリーンリーダーは何が変更されたのかわからないということです。説明の変更がスクリーンリーダーによってアナウンスされるように更新することはできますか。

この課題の出発点は次のようなものです。

{{ EmbedLiveSample("aria-3", "100%", 400) }}

この出発点の基盤となるコードは次の通りです。

```html live-sample___aria-3
<section class="preview">
  <div class="animal-list">
    <h1>動物の概要</h1>

    <p>
      以下の動物の一覧をクリックすると、その動物の説明が表示されます。
    </p>

    <ul>
      <li
        tabindex="0"
        data-description="大きな反り返った角を持つ野生の山羊の一種で、ユーラシア、北アフリカ、東アフリカに生息しています。">
        アイベックス
      </li>
      <li
        tabindex="0"
        data-description="マナティーに似ていますが、イルカのような尾びれを持つ中型の海洋哺乳類です。">
        ジュゴン
      </li>
      <li
        tabindex="0"
        data-description="体長約 50 ～ 75 センチメートルで、まるで小さなカンガルーのような姿をした珍しい有袋類です。">
        クオッカ
      </li>
    </ul>
  </div>

  <div class="animal-description">
    <h2></h2>

    <p></p>
  </div>
</section>
```

```css hidden live-sample___aria-3
p {
  color: purple;
  margin: 0.5em 0;
}

* {
  box-sizing: border-box;
}

li {
  cursor: pointer;
}
```

```js hidden live-sample___aria-3
const listItems = document.querySelectorAll("li");
const descHeading = document.querySelector(".animal-description h2");
const descPara = document.querySelector(".animal-description p");

listItems.forEach((item) => {
  item.addEventListener("mouseup", handleSelection);
  item.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      handleSelection(e);
    }
  });
});

function handleSelection(e) {
  const heading = e.target.textContent;
  const description = e.target.getAttribute("data-description");
  descHeading.textContent = heading;
  descPara.textContent = description;
}
```

この課題については、見た目が出発点と変わらないため、完成したコンテンツは用意していません。

<details>
<summary>ここをクリックすると、模範解答を表示します</summary>

この課題で提示された問題を解決するには、2 つの方法があります。

- `aria-live=""` 属性を animal-description の `<div>` 要素に追加して、これをライブリージョンにします。これにより、コンテンツが変更された際に、更新された内容がスクリーンリーダーによって読み上げられます。最適な値はおそらく `assertive` でしょう。これを選択すると、コンテンツが変更されるやいなや、スクリーンリーダーが更新された内容を読み上げます。`polite` を選択すると、スクリーンリーダーは他の説明の読み上げが終わるまで待機し、その後で変更された内容の読み上げを開始します。
- `role="alert"` 属性を animal-description の `<div>` 要素に追加し、アラートボックスの意味付けを持たせます。これは、スクリーンリーダーに対して、`aria-live="assertive"` を設定した場合と同じ効果をもたらします。

</details>

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/WAI-ARIA_basics","Learn_web_development/Core/Accessibility/Multimedia", "Learn_web_development/Core/Accessibility")}}
