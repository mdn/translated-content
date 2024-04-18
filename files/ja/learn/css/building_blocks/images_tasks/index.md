---
title: "スキルテスト: 画像とフォーム要素"
slug: Learn/CSS/Building_blocks/Images_tasks
l10n:
  sourceCommit: c64e813d8ab9dbe22cbc049c26f7c6703370a2b7
---

{{LearnSidebar}}

このスキルテストの目的は、[画像、メディア、フォーム要素](/ja/docs/Learn/CSS/Building_blocks/Images_media_form_elements)のような特殊な要素が CSS でどのように扱われるかを理解しているかどうかを評価することです。

> **メモ:** このページのインタラクティブエディターや、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/)などのオンラインエディターで解決策を試すことができます。
>
> もし行き詰まったら、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してみてください。

## 課題 1

この課題では、ボックスからはみ出している画像があります。画像は余分な余白なくボックス内に収まるように変倍したいのですが、 画像の一部が切り取られても構いません。

最終的には下記画像のようになるはずです。

![ボックス内の画像](mdn-images-object-fit.png)

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/images/object-fit.html", '100%', 1000)}}

> **注目:**
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/images/object-fit-download.html)すると、自分のエディターやオンラインエディターで取り組むことができます。

## 課題 2

この課題では、単純なフォームがあります。課題は以下の変更を行うことです。

- 属性セレクターを使用して `.myform` 内の検索フィールドとボタンを対象とします。
- フォームフィールドとボタンにフォームの他の部分と同じテキストサイズを使用するようにします。
- フォームフィールドとボタンに 10px のパディングを与えます。
- ボタンの背景を `rebeccapurple`、前景を白、境界線をなくし、角を 5px に丸めます。

最終的には下記画像のようになるはずです。

![単一行のフォーム](mdn-images-form.png)

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/images/form.html", '100%', 600)}}

> **注目:**
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/images/form-download.html)すると、自分のエディターやオンラインエディターで取り組むことができます。
