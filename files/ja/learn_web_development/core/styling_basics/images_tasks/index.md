---
title: "スキルテスト: 画像とフォーム要素"
slug: Learn_web_development/Core/Styling_basics/Images_tasks
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

このスキルテストの目的は、[画像、メディア、フォーム要素](/ja/docs/Learn_web_development/Core/Styling_basics/Images_media_forms)のような特殊な要素が CSS でどのように扱われるかを理解しているかどうかを評価することです。

> [!NOTE]
> 以下のコードブロックで **"Play"** をクリックすると、 MDN Playground で例を編集することができます。
> コードをコピー（クリップボードアイコンをクリック）し、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) などのオンラインエディターに貼り付けることもできます。
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## 課題 1

この課題では、ボックスからはみ出している画像があります。画像は余分な余白なくボックス内に収まるように変倍したいのですが、 画像の一部が切り取られても構いません。

最終的には下記画像のようになるはずです。

![ボックス内の画像](mdn-images-object-fit.png)

下記のライブコードを更新して、画像がボックスからはみ出さない完成例を再現してみてください。

```html live-sample___object-fit
<div class="box">
  <img
    alt="Hot air balloons flying in clear sky, and a crowd of people in the foreground"
    src="https://mdn.github.io/shared-assets/images/examples/balloons.jpg" />
</div>
```

```css live-sample___object-fit
.box {
  border: 5px solid #000;
  width: 400px;
  height: 200px;
}

img {
  /* Add styles here */
}
```

{{EmbedLiveSample("object-fit", "", "400px")}}

<details>
<summary>ここをクリックすると、解決策を表示します。</summary>

画像の一部が切り取られても問題ありません。
`object-fit: cover` を用いるのが最善の選択ですが、幅と高さを `100%` に設定する必要があります。

```css
img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}
```

</details>

## 課題 2

この課題では、単純なフォームがあります。課題は以下の変更を行うことです。

- 属性セレクターを使用して `.myform` 内の検索フィールドとボタンを対象とします。
- フォームフィールドとボタンにフォームの他の部分と同じテキストサイズを使用するようにします。
- フォームフィールドとボタンに 10px のパディングを与えます。
- ボタンの背景を `rebeccapurple`、前景を白、境界線をなくし、角を 5px に丸めます。

最終的には下記画像のようになるはずです。

![単一行のフォーム](mdn-images-form.png)

下記のライブコードを更新して、完成例を再現してみてください。

```html live-sample___form
<form action="" class="my-form" method="post">
  <div>
    <label for="fldSearch">Keywords</label>
    <input id="fldSearch" name="keywords" type="search" />
    <input name="btnSubmit" type="submit" value="Search" />
  </div>
</form>
```

```css live-sample___form
body {
  font: 1.2em / 1.5 sans-serif;
}
.my-form {
  border: 2px solid #000;
  padding: 5px;
}
```

{{EmbedLiveSample("form")}}

<details>
<summary>ここをクリックすると、解決策を表示します。</summary>

この課題に対する解決策の例を以下に示します。

```css
.my-form {
  border: 2px solid #000;
  padding: 5px;
}

.my-form input[type="search"] {
  padding: 10px;
  font-size: inherit;
}

.my-form input[type="submit"] {
  padding: 10px;
  font-size: inherit;
  background-color: rebeccapurple;
  color: white;
  border: 0;
  border-radius: 5px;
}
```

</details>

## 関連情報

- [CSS によるスタイル設定の基本](/ja/docs/Learn_web_development/Core/Styling_basics)
