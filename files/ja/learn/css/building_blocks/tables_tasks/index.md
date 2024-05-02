---
title: "スキルテスト: 表"
slug: Learn/CSS/Building_blocks/Tables_tasks
l10n:
  sourceCommit: c64e813d8ab9dbe22cbc049c26f7c6703370a2b7
---

{{LearnSidebar}}

このスキルテストの目的は、 [CSS で HTML の表をスタイル設定](/ja/docs/Learn/CSS/Building_blocks/Images_media_form_elements)する方法を理解しているかどうかを評価することです。

> **メモ:** このページのインタラクティブエディターや、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/)などのオンラインエディターで解決策を試すことができます。
>
> もし行き詰まったら、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してみてください。

## 課題

[表のスタイル設定](/ja/docs/Learn/CSS/Building_blocks/Styling_tables)のレッスンでは、かなり派手な方法で表をスタイル設定しました。この課題では、同じ表をスタイル設定しますが、外部記事 [Web Typography: designing tables to be read not looked at](https://alistapart.com/article/web-typography-tables/) で説明されているような、表デザインのグッドプラクティスを使用します。

完成した表は下記画像のようになります。これを実現する方法はいくつかありますが、チュートリアルを使用することと同様のパターンに従って、以下のことを行うことを提案します。

- 表の見出しとデータに `0.3em` のパディングを追加し、セルの一番上に配置します。
- 数字を格納する列の見出しとデータを右に配置します。
- テキストを格納する段の見出しとデータは左に配置します。
- 16 進色 `#999` で上下に 1px の実線の境界線を追加し、フッターの上にも同じ色の 1px の実線の境界線を追加します。
- 表要素の境界線間の既定の空間を除去し、期待通りの結果を取得します。
- 表本体の奇数行を 16 進数の色 `#eee` で縞模様にします。

![縞模様の列を持つ表。](mdn-table-bands.png)

下記のライブコードを更新して、完成例を再現してみてください。

{{EmbedGHLiveSample("css-examples/learn/tasks/tables/table.html", '100%', 1000)}}

追加の課題です。

- 表のレイアウトをもう少し予測しやすいものにするにはどうしたらよいでしょうか。既定では表の段組みがどのようにサイズ調整されているか、そしてこの動作を見出しの幅に応じて列のサイズを調整するように変更する方法を考えてみましょう。

> **注目:**
>
> [この課題の最初の段階のファイルをダウンロード](https://github.com/mdn/css-examples/blob/main/learn/tasks/images/form-download.html)すると、自分のエディターやオンラインエディターで取り組むことができます。
