---
title: "確認テスト: CSS と JavaScript のアクセシビリティ"
short-title: "テスト: CSS/JS のアクセシビリティ"
slug: Learn_web_development/Core/Accessibility/Test_your_skills/CSS_and_JavaScript
l10n:
  sourceCommit: 2bda943b59604eb44f5d759708845c5f56970635
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/WAI-ARIA_basics", "Learn_web_development/Core/Accessibility")}}

この確認テストの目的は、あなたが [CSS と JavaScript のアクセシビリティのベストプラクティス](/ja/docs/Learn_web_development/Core/Accessibility/CSS_and_JavaScript)の記事を理解したかどうかを評価することです。

> [!NOTE]
> 手助けが必要な場合は、[確認テスト](/ja/docs/Learn_web_development#確認テスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

## CSS アクセシビリティ 1

最初の課題では、リンクのリストが表示されています。しかし、そのアクセシビリティはかなり悪いものです。これらがリンクであるかどうか、あるいはユーザーがどの要素にフォーカスを合わせているかを、確実に判断する方法はありません。`a` セレクターを含む既存のルールセットは、何らかの CMS によって提供されているものとして、変更できないものと考えてください。

この課題を完了するには、リンクがリンクらしく見え、リンクとして機能するように新しいルールを作成し、ユーザーがリスト内のどのリンクにフォーカスが当たっているかを判別できるようにしてください。

<!-- 各例で共有されるコード -->

```css hidden live-sample___css-js-ally-1 live-sample___css-js-ally-2 live-sample___css-js-ally-3 live-sample___css-js-ally-1-finish live-sample___css-js-ally-2-finish
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

この課題の出発点は次のようなものです。

{{ EmbedLiveSample("css-js-ally-1", "100%", 200) }}

この出発点の基盤となるコードは次の通りです。

```html live-sample___css-js-ally-1 live-sample___css-js-ally-1-finish
<ul>
  <li><a href="">動物</a></li>
  <li><a href="">コンピューター</a></li>
  <li><a href="">多様性と包容性</a></li>
  <li><a href="">食べ物</a></li>
  <li><a href="">薬品</a></li>
  <li><a href="">音楽</a></li>
</ul>
```

```css live-sample___css-js-ally-1
a {
  text-decoration: none;
  color: #666666;
  outline: none;
}

/* 上記のコードは編集しないでください。 */

/* ここにコードを追加 */
```

この課題を完成させると、リンクは次のように見えるでしょう。

{{ EmbedLiveSample("css-js-ally-1-finish", "100%", 200) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した CSS は、次のような感じになるでしょう。

```css
/* ... */
/* 上記のコードは編集しないでください。 */

li a {
  text-decoration: underline;
  color: rgb(150 0 0);
}

li a:hover,
li a:focus {
  text-decoration: none;
  color: red;
}
```

```css hidden live-sample___css-js-ally-1-finish
a {
  text-decoration: none;
  color: #666666;
  outline: none;
}

li a {
  text-decoration: underline;
  color: rgb(150 0 0);
}

li a:hover,
li a:focus {
  text-decoration: none;
  color: red;
}
```

</details>

## CSS アクセシビリティ 2

次の課題では、見出しと段落だけで構成されたシンプルなコンテンツが与えられています。テキストの色やサイズにアクセシビリティ上の問題があるため、それらを修正してください。

この課題を完了するには、次のようにします。

1. どのような問題があるのか、また色やサイズに関する許容値がどのガイドラインに定められているのかを考えてみてください。
2. CSS の色とフォントサイズの値を新しい値に更新して、この問題を解決してください。
3. コードを実行して、問題が解決したか確認してください。新しい値の選定やコードのテストにどのようなツールや手法を用いたか説明してください。

この課題の出発点は次のようなものです。

{{ EmbedLiveSample("css-js-ally-2", "100%", 240) }}

この出発点の基盤となるコードは次の通りです。

<!-- spellchecker: disable -->

```html live-sample___css-js-ally-2 live-sample___css-js-ally-2-finish
<main>
  <h1>I am the eggman</h1>

  <p>
    Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm.
    Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm
    hempen halter furl.
  </p>

  <h2>They are the eggman</h2>

  <p>
    Swab barque interloper chantey doubloon starboard grog black jack gangway
    rutters.
  </p>

  <h2>I am the walrus</h2>

  <p>
    Deadlights jack lad schooner scallywag dance the hempen jig carouser
    broadside cable strike colors.
  </p>
</main>
```

<!-- spellchecker: enable -->

```css live-sample___css-js-ally-2
/* CSS を編集してアクセシビリティの問題を修正してください */

main {
  padding: 20px;
  background-color: red;
}

h1,
h2,
p {
  color: #999999;
}

h1 {
  font-size: 2vw;
}

h2 {
  font-size: 1.5vw;
}

p {
  font-size: 1.2vw;
}
```

更新されたコンテンツは、次のように見えるでしょう。

{{ EmbedLiveSample("css-js-ally-2-finish", "100%", 600) }}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

1. 問題は次の通りです。
   - WCAG 基準 [1.4.3 (AA)](https://w3c.github.io/wcag/guidelines/22/#contrast-minimum) および [1.4.6 (AAA)](https://w3c.github.io/wcag/guidelines/22/#contrast-enhanced) によれば、色のコントラストが許容範囲外です。
   - テキストのサイズが `vw` 単位で指定されているため、ほとんどのブラウザーで拡大・縮小できません。[WCAG 1.4.4 (AA)](https://w3c.github.io/wcag/guidelines/22/#resize-text) では、テキストはサイズ変更可能であるべきであると規定されています。
2. コードを修正するには、次の操作が必要です。
   - 背景色と前景色のコントラストがより鮮明な組み合わせを選んでください。
   - テキストのサイズ設定には、`rem` や `px` など別の単位を使用するか、サイズ変更が可能でありながらビューポートのサイズに相対的な状態を維持したい場合は、`vw` と他の単位を組み合わせた方法を実装してもよいでしょう。
3. 検査について
   - [aXe](https://www.deque.com/axe/) などのツールを使って色のコントラストを検査できます。[Firefox アクセシビリティインスペクター](https://firefox-source-docs.mozilla.org/devtools-user/accessibility_inspector/)や、[WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/) のようなシンプルなスタンドアロンのウェブページツールでも確認できます。
   - テキストのサイズ変更については、ブラウザーでサンプルを読み込み、実際にサイズ変更を試してみてください。`vw` 単位で指定されたテキストのサイズ変更は、Safari では機能しますが、Firefox や Chromium ベースのブラウザーでは機能しません。

更新されたコードでは、次のような変更を加えることで色のコントラストが改善されるはずです。

```css live-sample___css-js-ally-2-finish
main {
  padding: 20px;
  background-color: red;
}

h1,
h2,
p {
  color: black;
}
```

フォントサイズの調整には、次のような方法が有効です。

```css live-sample___css-js-ally-2-finish
h1 {
  font-size: 2.5rem;
}

h2 {
  font-size: 2rem;
}

p {
  font-size: 1.2rem;
}
```

あるいは、ビューポートのサイズに合わせてテキストのサイズが調整される、もう少し洗練された方法を使いたい場合は、次のようにします。

```css
h1 {
  font-size: calc(1.5vw + 1rem);
}

h2 {
  font-size: calc(1.2vw + 0.7rem);
}

p {
  font-size: calc(1vw + 0.4rem);
}
```

</details>

## JavaScript アクセシビリティ 1

最後の課題では、作業対象となる多少の JavaScript 処理があります。動物の名前のリストを表示している単純なアプリがあります。動物の名前の一つをクリックすると、その動物の詳細な説明がリストの下のボックスに現れます。

しかし、このアプリはとてもアクセシビリティが悪く、今の状態ではマウスでしか操作することができません。 HTML と JavaScript でキーボードからもアクセスできるように追加してほしいのです。

この課題の出発点は次のようなものです。

{{ EmbedLiveSample("css-js-ally-3", "100%", 400) }}

この出発点の基盤となるコードは次の通りです。

```html live-sample___css-js-ally-3
<section class="preview">
  <div class="animal-list">
    <h1>動物の概要</h1>

    <p>
      以下の動物の一覧をクリックすると、その動物の説明が表示されます。
    </p>

    <ul>
      <li
        data-description="大きな反り返った角を持つ野生の山羊の一種で、ユーラシア、北アフリカ、東アフリカに生息している。">
        アイベックス
      </li>
      <li
        data-description="マナティーに似た中型の海洋哺乳類だが、尾びれはイルカのような形をしている。">
        ジュゴン
      </li>
      <li
        data-description="体長約 50～75 センチメートルで、まるで小さなカンガルーのような姿をした珍しい有袋類です。">
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

```css hidden live-sample___css-js-ally-3
p {
  color: purple;
  margin: 0.5em 0;
}

li {
  cursor: pointer;
}
```

```js live-sample___css-js-ally-3
const listItems = document.querySelectorAll("li");
const descHeading = document.querySelector(".animal-description h2");
const descPara = document.querySelector(".animal-description p");

listItems.forEach((item) => {
  item.addEventListener("mouseup", handleSelection);
});

function handleSelection(e) {
  const heading = e.target.textContent;
  const description = e.target.getAttribute("data-description");
  descHeading.textContent = heading;
  descPara.textContent = description;
}
```

このタスクについては、完成版のコンテンツは出発点と変わらないため、提供していません。

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

1. まず、キーボードからフォーカスを合わせられるように、リスト項目に `tabindex="0"` を追加する必要があります。
2. 次に、`forEach()` ループ内に別のイベントリスナーを追加し、リストアイテムが選択されている間にキーが押された際にコードが反応するようにする必要があります。おそらく、「Enter」キーなどの特定のキーに反応するようにするのが良いでしょう。その場合、次のようなコードで問題ないでしょう。

```js
item.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    handleSelection(e);
  }
});
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/CSS_and_JavaScript","Learn_web_development/Core/Accessibility/WAI-ARIA_basics", "Learn_web_development/Core/Accessibility")}}
