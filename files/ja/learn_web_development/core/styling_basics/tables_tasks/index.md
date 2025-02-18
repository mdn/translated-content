---
title: "スキルテスト: 表"
slug: Learn_web_development/Core/Styling_basics/Tables_tasks
l10n:
  sourceCommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{LearnSidebar}}

このスキルテストの目的は、 [CSS で HTML の表をスタイル設定](/ja/docs/Learn_web_development/Core/Styling_basics/Tables)する方法を理解しているかどうかを評価することです。

> [!NOTE]
> 以下のコードブロックで **"Play"** をクリックすると、 MDN Playground で例を編集することができます。
> コードをコピー（クリップボードアイコンをクリック）し、[CodePen](https://codepen.io/)、[JSFiddle](https://jsfiddle.net/)、[Glitch](https://glitch.com/) などのオンラインエディターに貼り付けることもできます。
> 行き詰まった場合は、[コミュニケーションチャンネル](/ja/docs/MDN/Community/Communication_channels)のいずれかに連絡してください。

## 課題

[表のスタイル設定](/ja/docs/Learn_web_development/Core/Styling_basics/Tables)のレッスンでは、かなり派手な方法で表をスタイル設定しました。この課題では、同じ表をスタイル設定しますが、外部記事 [Web Typography: designing tables to be read not looked at](https://alistapart.com/article/web-typography-tables/) で説明されているような、表デザインのグッドプラクティスを使用します。

完成した表は下記画像のようになります。これを実現する方法はいくつかありますが、チュートリアルを使用することと同様のパターンに従って、以下のことを行うことを提案します。

- 表の見出しとデータに `0.3em` のパディングを追加し、セルの一番上に配置します。
- 数字を格納する列の見出しとデータを右に配置します。
- テキストを格納する列の見出しとデータは左に配置します。
- 表のフッターの見出しは右に配置します。
- 表のフッターのデータは左に配置します。
- 16 進色 `#999` で上下に 1px の実線の境界線を追加します。
- フッターの上に、16 進色 `#999` で 1px の実線の境界線を追加します。
- 表要素の境界線間の既定の空間を除去し、期待通りの結果を取得します。
- 表本体の奇数行を 16 進数の色 `#eee` で縞模様にします。

![縞模様の列を持つ表。](mdn-table-bands.png)

**ボーナス問題:** 表のレイアウトをもう少し予測しやすいものにするにはどうしたらよいでしょうか。既定では表の段組みがどのようにサイズ調整されているか、そしてこの動作を見出しの幅に応じて列のサイズを調整するように変更する方法を考えてみましょう。

下記のライブコードを更新して、完成例を再現してみてください。

```html live-sample___table
<table>
  <caption>
    A summary of the UK's most famous punk bands
  </caption>
  <thead>
    <tr>
      <th scope="col">Band</th>
      <th scope="col">Year formed</th>
      <th scope="col">No. of Albums</th>
      <th scope="col">Most famous song</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Buzzcocks</th>
      <td>1976</td>
      <td>9</td>
      <td>Ever fallen in love (with someone you shouldn't've)</td>
    </tr>
    <tr>
      <th scope="row">The Clash</th>
      <td>1976</td>
      <td>6</td>
      <td>London Calling</td>
    </tr>
    <tr>
      <th scope="row">The Damned</th>
      <td>1976</td>
      <td>10</td>
      <td>Smash it up</td>
    </tr>
    <tr>
      <th scope="row">Sex Pistols</th>
      <td>1975</td>
      <td>1</td>
      <td>Anarchy in the UK</td>
    </tr>
    <tr>
      <th scope="row">Sham 69</th>
      <td>1976</td>
      <td>13</td>
      <td>If the kids are united</td>
    </tr>
    <tr>
      <th scope="row">Siouxsie and the Banshees</th>
      <td>1976</td>
      <td>11</td>
      <td>Hong Kong Garden</td>
    </tr>
    <tr>
      <th scope="row">Stiff Little Fingers</th>
      <td>1977</td>
      <td>10</td>
      <td>Suspect Device</td>
    </tr>
    <tr>
      <th scope="row">The Stranglers</th>
      <td>1974</td>
      <td>17</td>
      <td>No More Heroes</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <th colspan="2" scope="row">Total albums</th>
      <td colspan="2">77</td>
    </tr>
  </tfoot>
</table>
```

```css hidden live-sample___table
body {
  padding: 1em;
  font: 1.2em / 1.5 sans-serif;
  font-size: 80%;
}
```

```css live-sample___table
/* ここにスタイルを追加 */
```

{{EmbedLiveSample("table", "", "400px")}}

<details>
<summary>ここをクリックすると、解決策を表示します。</summary>

下記は、レッスンと同様のテクニックを使用して、最終的な結果を達成する方法の一例です。しかし、まだ他にも、おそらくは若干冗長的ではあるものの、完全に正しい方法がいくつかあります。

```css
table {
  border-top: 1px solid #999;
  border-bottom: 1px solid #999;
  border-collapse: collapse;
}

th,
td {
  vertical-align: top;
  padding: 0.3em;
}

tr :nth-child(2),
tr :nth-child(3) {
  text-align: right;
}

tr :nth-child(1),
tr :nth-child(4) {
  text-align: left;
}

tbody tr:nth-child(odd) {
  background-color: #eee;
}

tfoot {
  border-top: 1px solid #999;
}

tfoot tr :nth-child(1) {
  text-align: right;
}

tfoot tr :nth-child(2) {
  text-align: left;
}
```

ボーナス問題では、 {{cssxref("table-layout")}} を [`fixed`](/ja/docs/Web/CSS/table-layout#fixed) の値で、かつ明示的な `width` をい追加することで、表レイアウトをより予測可能なものにすることができます。

```css
table {
  table-layout: fixed;
  width: 100%;
}
```

</details>

## 関連情報

- [CSS によるスタイル設定の基本](/ja/docs/Learn_web_development/Core/Styling_basics)
- [Web Typography: Designing Tables to be Read, Not Looked At](https://alistapart.com/article/web-typography-tables) (alistapart.com, 2017)
