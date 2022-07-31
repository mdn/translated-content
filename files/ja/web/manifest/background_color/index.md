---
title: background_color
slug: Web/Manifest/background_color
tags:
  - Manifest
  - Web
  - background_color
  - マニフェスト
translation_of: Web/Manifest/background_color
---
{{QuickLinksWithSubpages("/ja/docs/Web/Manifest")}}

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">型</th>
      <td><code>String</code></td>
    </tr>
    <tr>
      <th scope="row">必須</th>
      <td>いいえ</td>
    </tr>
  </tbody>
</table>

`background_color` メンバーは、スタイルシートが読み込まれる前に表示するアプリケーションページの背景色を定義します。 この値は、スタイルシートが読み込まれる前にマニフェストが利用可能な場合、ショートカットの背景色を描画するために、ユーザーエージェントが使用します。

したがって、 `background_color` はウェブアプリケーションを起動してからサイトのコンテンツを読み込むまでの間にスムーズに遷移できるよう、 CSS の {{cssxref("background-color")}} と一致させるべきです。

> **Note:** `background_color` メンバーは、メインスタイルシートがネットワークまたはストレージメディアから読み込まれている間にだけ、ユーザーの操作感を向上させるためだけのものです。プログレッシブウェブアプリのスタイルシートが利用できるようになった後は、ユーザーエージェントが CSS の {{cssxref("background-color")}} プロパティとして使用されることはありません。

## 例

```json
"background_color": "red"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
