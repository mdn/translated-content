---
title: "確認テスト: HTML のアクセシビリティ"
short-title: "テスト: HTML のアクセシビリティ"
slug: Learn_web_development/Core/Accessibility/Test_your_skills/HTML
l10n:
  sourceCommit: 2bda943b59604eb44f5d759708845c5f56970635
---

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/HTML","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}

この確認テストの目的は、 [HTML: アクセシビリティの良き基本](/ja/docs/Learn_web_development/Core/Accessibility/HTML)の記事を理解したかどうかを評価することです。

> [!NOTE]
> 手助けが必要な場合は、[確認テスト](/ja/docs/Learn_web_development#確認テスト)使用ガイドをお読みください。また、[コミュニケーションチャネル](/ja/docs/MDN/Community/Communication_channels)のいずれかを使用して、私たちに連絡することもできます。

## HTML アクセシビリティ 1

この課題では、意味付けされた HTML についての理解度と、それがアクセシビリティの観点からなぜ重要なのかをテストします。提示されたテキストはアクションボタン付きの案内パネルですが、その HTML は実にひどいものです。

この課題を完了するには、適切な意味づけされた HTML を使用するようにマークアップを更新してください。意味づけが適切であれば、見た目のデザインや文字サイズを_完全に_再現することについては、あまり気にする必要はありません。

<!-- 各例で共有されるコード -->

```css hidden live-sample___html-ally-1 live-sample___html-ally-2 live-sample___html-ally-3 live-sample___html-ally-4 live-sample___html-ally-2-finish
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

<!-- Example-specific code -->

この課題の出発点は次のようなものです。

{{ EmbedLiveSample("html-ally-1", "100%", 630) }}

この出発点の基盤となるコードは次の通りです。

```html live-sample___html-ally-1
<font size="7">お困りですか？</font> <br /><br />
弊社製品に関して何かお困りのことがございましたら、サポートセンターが以下のいずれのご要望にもお応えいたします。
<br /><br />
1. 新製品の選び方のアドバイス
<br />
2. 既存製品のテクニカルサポート
<br />
3. 返金およびキャンセルに関するご案内
<br /><br />
<font size="5">お問い合わせください</font>
<br /><br />
ヘルプセンターでは、ライブチャット、メールアドレス、電話番号をご利用いただけます。
<br /><br />
<div class="button">連絡先を参照</div>
<br />
<font size="5">答えを探す</font>
<br /><br />
「フォーラム」コーナーには、検索可能な過去の質問が多数掲載されたナレッジベースが用意されています。もしお探しの答えが見つからない場合は、いつでも新しい質問を投稿することができます。
<br /><br />
<div class="button">フォーラムへアクセス</div>
```

```css live-sample___html-ally-1
.button {
  color: white;
  background-color: blue;
  border-radius: 10px;
  width: 170px;
  padding: 10px;
  text-align: center;
}
```

この課題について、開始時と大きく異なる点が見当たらないため、完成したコンテンツは提供しておりません。

<details>
<summary>ここをクリックすると、模範解答を表示します</summary>

完成した HTML は、次のようなものになるはずです。

```html
<h2>お困りですか？</h2>

<p>
  弊社製品に関して何かお困りのことがございましたら、サポートセンターが以下のいずれのご要望にもお応えいたします。
</p>

<ul>
  <li>新製品の選び方のアドバイス</li>
  <li>既存製品のテクニカルサポート</li>
  <li>返金およびキャンセルに関するご案内</li>
</ul>

<h3>お問い合わせください</h3>

<p>ヘルプセンターでは、ライブチャット、メールアドレス、電話番号をご利用いただけます。</p>

<button>連絡先を参照</button>

<h3>答えを探す</h3>

<p>
  「フォーラム」コーナーには、検索可能な過去の質問が多数掲載されたナレッジベースが用意されています。もしお探しの答えが見つからない場合は、いつでも新しい質問を投稿することができます。
</p>

<button>フォーラムへアクセス</button>
```

次のものはボーナスポイントです。

- 単に `<button>` を使用し、`<button class="button">` は使用しません（意味を重複させる必要はありません）。また、CSS セレクターを更新して、ボタンにスタイルが正しく適用されるようにします。
- 順序付きリストではなく、順序なしリストを使用する――項目の順序は特に重要ではないためです。。

</details>

## HTML アクセシビリティ 2

2 つ目の課題では、 3 つの入力フィールドを含むフォームがあります。

課題を完成させるには、次のようにします。

1. 入力フィールドとそのラベルを意味づけしてください。
2. これらの入力フィールドはより大きなフォームの一部になることを想定し、それらをすべて単一の関連グループとして関連付ける要素で囲んでください。
3. グループに、個人データとしての情報をすべて要約する説明/タイトルを設定してください。

この課題の出発点は次のようなものです。

{{ EmbedLiveSample("html-ally-2", "100%", 200) }}

この出発点の基盤となるコードは次の通りです。

```html live-sample___html-ally-2
<form>
  <ul>
    <li>
      名前
      <input type="text" name="name" />
    </li>
    <li>
      年齢
      <input type="number" name="age" />
    </li>
    <li>
      メールアドレス
      <input type="email" name="email" />
    </li>
  </ul>
</form>
```

```css live-sample___html-ally-2 live-sample___html-ally-2-finish
form {
  width: 400px;
}

li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}
```

更新されたフォームは、次のようになるはずです。

{{ EmbedLiveSample("html-ally-2-finish", "100%", 220) }}

<details>
<summary>ここをクリックすると、模範解答を表示します</summary>

完成した HTML は、次のようなものになるはずです。

```html live-sample___html-ally-2-finish
<form>
  <fieldset>
    <legend>個人データ</legend>
    <ul>
      <li>
        <label for="name">名前</label>
        <input type="text" name="name" id="name" />
      </li>
      <li>
        <label for="age">年齢</label>
        <input type="number" name="age" id="age" />
      </li>
      <li>
        <label for="email">メールアドレス</label>
        <input type="email" name="email" id="email" />
      </li>
    </ul>
  </fieldset>
</form>
```

</details>

## HTML アクセシビリティ 3

この課題では、段落内の情報リンクをすべてアクセシビリティのある良いリンクに変えてください。

- 最初の 2 つのリンクは、通常のウェブページへのリンクです。
- 3 つ目は PDF へのリンクで、 8MB と大きいものです。
- 4 番目のリンクは Word 文書に飛ぶので、ユーザーはそれを処理する何らかのアプリケーションをインストールする必要があります。

この課題を完了するには、上記の説明に従ってリンクを適切に更新してください。

この課題の出発点は次のようなものです。

{{ EmbedLiveSample("html-ally-3", "100%", 140) }}

この出発点の基盤となるコードは次の通りです。

```html-nolint live-sample___html-ally-3
<p>
  私たちの活動に関する詳細については、資金調達ページ（<a href="/fundraising" target="_blank">ここをクリック</a>）、教育ページ（<a href="/education" target="_blank">ここをクリック</a>）、スポンサーシップ・パック（<a href="/resources/sponsorship.pdf" target="_blank">ここをクリック</a>）、評価シート（<a href="/resources/assessments.docx" target="_blank">ここをクリック</a>）をご覧ください。
</p>
```

> [!NOTE]
> サンプルコード内のリンクには `target="_blank"` 属性が設定されています。これにより、リンクをクリックした際に、同じタブではなく新しいタブでリンク先のページが開くようになっています。これは厳密には最善の方法ではありませんが、MDN Playground の出力ページの `<iframe>` でページが開いてしまい、その過程であなたのサンプルコードが消えてしまうのを防ぐために、ここではこのようにしています！

この課題については、解答が分かってしまうため、完成したコンテンツは提供していません。

<details>
<summary>ここをクリックすると、模範解答を表示します</summary>

完成した HTML は、次のようなものになるはずです。

```html
<p>
  私たちの活動に関する詳細については、<a href="/fundraising" target="_blank">資金調達ページ</a>、<a href="/education" target="_blank">教育ページ</a>、 <a href="/resources/sponsorship.pdf" target="_blank">スポンサーシップ・パック（PDF、8MB）</a>、<a href="/resources/assessments.docx" target="_blank">評価シート（Word 文書）</a>をご覧ください。
</p>
```

</details>

## HTML アクセシビリティ 4

最後の HTML アクセシビリティの課題では、アクセシビリティ上の問題がある単純な画像ギャラリーがあります。修正することができますか？

- ヘッダー画像はアクセシビリティの課題があり、ギャラリー画像も同様です。
- - ヘッダー画像をさらに改善し、アクセシビリティの向上を図るために CSS を使って実装することも可能です。そのような解決策をどのように作成するでしょうか？

上記の問題を修正するために、コードを更新してください。

この課題の出発点は次のようなものです。

{{ EmbedLiveSample("html-ally-4", "100%", 400) }}

この出発点の基盤となるコードは次の通りです。

```html live-sample___html-ally-4
<header>
  <img
    src="https://mdn.github.io/shared-assets/images/examples/star-pink_32x32.png"
    alt="ページを飾るために使っている星" />
  <h1>素敵な画像</h1>
</header>
<main>
  <img
    src="https://mdn.github.io/shared-assets/images/examples/ballon-portrait.jpg" />
  <img
    src="https://mdn.github.io/shared-assets/images/examples/grapefruit-slice.jpg" />
</main>
```

```css live-sample___html-ally-4
body {
  width: 400px;
  margin: 0 auto;
}

main img {
  display: block;
  width: 250px;
  margin: 20px auto;
  box-shadow: 5px 5px 0 black;
}

header {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
```

このタスクについては、開始時点の状態と見た目が変わらないため、完成したコンテンツは用意していません。

<details>
<summary>ここをクリックすると、模範解答を表示します</summary>

アクセシビリティの問題点は次のとおりです。

1. ヘッダー画像は装飾用であるため、alt テキストは必要ありません。装飾用のHTML画像を使用する場合、最善の方法は `alt=""` を設定することです。そうすれば、スクリーンリーダーは説明文や画像ファイル名ではなく、何も読み上げません。これはコンテンツの一部ではないからです。
2. ギャラリーの画像には代替テキストが必要であり、それらはコンテンツの一部です。

更新後の HTML は、次のようなものになるでしょう。

```html
<header>
  <img
    src="https://mdn.github.io/shared-assets/images/examples/star-pink_32x32.png"
    alt="" />
  <h1>素敵な画像</h1>
</header>
<main>
  <img
    src="https://mdn.github.io/shared-assets/images/examples/ballon-portrait.jpg"
    alt="青と白の市松模様が施された熱気球" />
  <img
    src="https://mdn.github.io/shared-assets/images/examples/grapefruit-slice.jpg"
    alt="ピンクグレープフルーツの中央部分の断面" />
</main>
```

背景のヘッダー画像は、CSS の背景画像を使って実装したほうが良いと言えるでしょう。そのためには、マークアップから最初の `<img>` 要素を削除し、CSS に次のようなルールを追加します。

```css
h1 {
  background: url("https://mdn.github.io/shared-assets/images/examples/star-pink_32x32.png")
    no-repeat left;
  padding-left: 50px;
}
```

</details>

{{PreviousMenuNext("Learn_web_development/Core/Accessibility/HTML","Learn_web_development/Core/Accessibility/CSS_and_JavaScript", "Learn_web_development/Core/Accessibility")}}
