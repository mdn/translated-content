---
title: "課題: 画像ギャラリー"
slug: Learn_web_development/Core/Scripting/Image_gallery
l10n:
  sourceCommit: 50a1895c9c499b1b9207f7af945a0fe45de58cca
---

{{PreviousMenuNext("Learn_web_development/Core/Scripting/DOM_scripting","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}

この課題では、多くのウェブサイトでよく見かける、JavaScript を使った画像ギャラリーを作成してもらいます。その過程で、ループ、関数、条件分岐、イベント、DOM スクリプティング、およびオブジェクトの基礎に関する知識が試されます。

## 出発点

始めるには、下記コードサンプルパネルにある **Play** ボタンをクリックし、提供された本文テキストを MDN Playground で開いてください。[プロジェクト概要](#プロジェクト概要)の節の手順に従い、JavaScript の機能を完成させてください。

HTML は次のようになります。

```html-nolint live-sample___gallery-start live-sample___gallery-finish
<h1>画像ギャラリーの例</h1>

<div class="full-img">
  <img
    class="displayed-img"
    src="https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic1.jpg"
    alt="人間の目の拡大" />
  <div class="overlay"></div>
  <button class="dark">暗く</button>
</div>

<div class="thumb-bar"></div>
```

出発点の JavaScript はこのようになります。

```js live-sample___gallery-start
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");
```

{{EmbedLiveSample("gallery-start", "100%", 700)}}

```css hidden live-sample___gallery-start live-sample___gallery-finish
body {
  font-family: sans-serif;
  width: 640px;
  margin: 0 auto;
  background-color: lightgray;
}

h1 {
  text-align: center;
}

.full-img {
  position: relative;
  display: block;
  width: 640px;
  height: 480px;
  margin-bottom: 2px;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 640px;
  height: 480px;
}

button {
  background: rgb(150 150 150 / 0.6);
  border: 1px solid #999999;
  position: absolute;
  cursor: pointer;
  top: 2px;
  left: 2px;
}

button:hover,
button:focus {
  color: rgb(150 150 150 / 1);
  background-color: black;
}

.thumb-bar {
  display: flex;
  gap: 2px;
  cursor: pointer;
}

.thumb-bar img {
  display: block;
  width: 100px;
  flex: 1;
}

.thumb-bar img:hover,
.thumb-bar img:focus {
  outline: 2px solid blue;
}
```

簡潔にするため、このギャラリーの CSS は非表示にしていますが、このアプリを MDN Playground を表示すると見ることができます。

## プロジェクト概要

HTML と CSS と数行の JavaScript コードが提供されています。以下の指示に従い、これらを実際に動作する画像ギャラリーにするために必要な JavaScript を記述してください。

ギャラリーは、大きな画像とサムネイルの列で構成されます。サムネイルをクリックするか、タブキーで移動して <kbd>Enter</kbd>/<kbd>Return</kbd> キーを押すと、そのサムネイルが大きな画像として表示されるようになります。また、該当する `<img>` 要素も、`alt` テキストを正しく更新する必要があります。

左上隅にはボタンがあり、これを繰り返し押すと、大きな画像の上に重ねられた `<div>` 要素の透明度を変更することで、画像の色調を暗い色と明るい色の間で切り替えることができます。

例文に埋め込む必要のある画像と、必要な `alt` テキストは次のとおりです。

- [`pic1.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic1.jpg): "人間の目のクローズアップ"
- [`pic2.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic2.jpg): "波のような岩"
- [`pic3.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic3.jpg): "紫と白のパンジー"
- [`pic4.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic4.jpg): "ファラオの墓にある壁画"
- [`pic5.jpg`](https://mdn.github.io/shared-assets/images/examples/learn/gallery/pic5.jpg): "葉の上の大きな蛾"

### データオブジェクトの作成

まず、`images` という名前のオブジェクトの配列を宣言していただきます。各オブジェクトには、次の 2 つのプロパティを含める必要があります。

- `filename`: 画像ファイルの名前（完全 URL ではありません）。
- `alt`: 画像の `alt` テキスト。

### 画像をサムネイルバーに追加

次に、`images` をループ処理し、DOM スクリプトを使用して、`<img>` 要素を介してそれらをすべてページに埋め込んでください。これらは、`thumbBar` 定数ですでに参照している、クラス名 `thumb-bar` の `<div>` 要素の子要素として配置する必要があります。

1. `baseURL` という名前の定数を作成し、各画像ファイルのベース URL（ファイル名を除いた URL 全体）を格納します。
2. `for ... of` ループを作成し、`images` の中をループ処理します。
3. それぞれの画像に対して、新しい `<img>` 要素を作成します。
4. `<img>` のソースを画像の URL と等しくなるように設定します。これは `baseURL` と `filename` の組み合わせとします。さらに、`alt` 属性が `alt` テキストと等しくなるようにします。
5. もう一つ属性を追加して、`<img>` がキーボードからフォーカス設定できるようにします。
6. その `<img>` を `thumbBar` に追加します。
7. `click` イベントハンドラーを `<img>` に追加し、クリックされたときに `updateDisplayedImage()` という関数が実行され、クリックされた画像がフルサイズで表示されるようにします。この関数は後で作成します。
8. この `<img>` に、もう 1 つイベントハンドラーを追加します。これにより、キーボードでフォーカスが移動した後、<kbd>Enter</kbd>/<kbd>Return</kbd> キー（他のキーは除く）を押すことで、クリックされた画像をフルサイズで表示できるようにします。これは、実現には少し調査が必要な追加目標です。

### `updateDisplayedImage()` 関数の作成

それでは、選択されたサムネイルをフルサイズで表示する関数を作成しましょう。フルサイズの `<img>` 要素への参照は、`displayedImage` という定数に格納されています。

1. `updateDisplayedImage()` 関数を定義します。
2. 関数本体内で、`displayedImage` のソースを、アクティブになった `<img>` のソースと同じに設定します。
3. `displayedImage` の代替テキストを、アクティブになった `<img>` の代替テキストと同じに設定します。

### 暗く/明るくボタンに配線する

「暗く/明るく」の `<button>` への参照を `btn` 定数に、フルサイズの `<img>` の上に重ねた透明な `<div>` への参照を `overlay` 定数に保存しました。以下の作業を行ってください。

1. `click` イベントハンドラーを `<button>` に追加し、ハンドラー関数として無名関数を設定します。
2. 関数本体の中で、`<button>` 要素の `class` 属性に `dark` が設定されているかどうかを判定する条件分岐を追加してください。
3. クリックされた時に `<button>` 要素の `class` が `dark` になっている場合、そのテキストコンテンツを `明るく` に変更し、`overlay` 要素の背景色を `rgb(0 0 0 / 0.5)` に変更します。その後、`<button>` 要素の `dark`クラスを削除します。
4. クリックされた時に `<button>` 要素の `class` 属性に `dark` が設定されていない場合、そのテキストコンテンツを `暗く` に変更し、`overlay` 要素の背景色を `rgb(0 0 0 / 0)` に変更してください。また、`<button>` 要素に `dark` クラスを追加してください。
5. 条件分岐の後に、たった 1 行のコードを実行して `dark` クラスを切り替える方法は分かりますか？これもまた、少し難易度の高い目標ですが、ぜひ挑戦してみてください。

## ヒントとコツ

- HTML と CSS は全く編集する必要はありません。

## 例

完成したアプリは、次のライブ例のように動作するはずです。

{{EmbedLiveSample("gallery-finish", "100%", 700)}}

<details>
<summary>ここをクリックすると、模範解答を表示します。</summary>

完成した JavaScript はこのようになるはずです。

```js live-sample___gallery-finish
const displayedImage = document.querySelector(".displayed-img");
const thumbBar = document.querySelector(".thumb-bar");

const btn = document.querySelector("button");
const overlay = document.querySelector(".overlay");

// 模範解答: データオブジェクトの作成

const images = [
  { filename: "pic1.jpg", alt: "人間の目のクローズアップ" },
  { filename: "pic2.jpg", alt: "波のような岩" },
  { filename: "pic3.jpg", alt: "紫と白のパンジー" },
  { filename: "pic4.jpg", alt: "ファラオの墓にある壁画" },
  { filename: "pic5.jpg", alt: "葉の上の大きな蛾" },
];

// 模範解答: すべての画像を反復処理

// 画像のベース URL を含む baseURL 定数を作成
const baseURL =
  "https://mdn.github.io/shared-assets/images/examples/learn/gallery/";

// for...of ループを使用してすべての画像を反復処理
for (const image of images) {
  // 新しい画像要素を作成
  const newImage = document.createElement("img");
  // その画像のソースと代替テキストを設定
  newImage.src = `${baseURL}${image.filename}`;
  newImage.alt = image.alt;
  // 画像をキーボードからフォーカス設定できるようにする
  newImage.tabIndex = "0";
  // 画像を thumbBar の子として追加
  thumbBar.appendChild(newImage);
  // サムネイルをクリックした際に、画像をフルサイズで表示するように画面を更新
  newImage.addEventListener("click", updateDisplayedImage);
  // フォーカスが当たった状態で "Enter" キーが押された際、
  // 画像をフルサイズで表示するように画面を更新
  newImage.addEventListener("keydown", (e) => {
    if (e.code === "Enter") {
      updateDisplayedImage(e);
    }
  });
}

// 模範解答: updateDisplayedImage() 関数の作成

function updateDisplayedImage(e) {
  displayedImage.src = e.target.src;
  displayedImage.alt = e.target.alt;
}

// 模範解答: 暗く/明るくボタンに配線する

// ボタンに click イベントリスナーを追加
btn.addEventListener("click", () => {
  // ボタンに "dark" クラスが設定されていたら、
  // テキストを "明るく" に変更してオーバーレイを暗くする
  if (btn.classList.contains("dark")) {
    btn.textContent = "明るく";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0.5)";
  } else {
    // 送電返れば、テキストを "暗く" に変更して
    // オーバーレイを明るくする
    btn.textContent = "暗く";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0)";
  }
  // 次のボタンが押される準備としてクラスを切り替える
  btn.classList.toggle("dark");
});
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Scripting/DOM_scripting","Learn_web_development/Core/Scripting/Network_requests", "Learn_web_development/Core/Scripting")}}
