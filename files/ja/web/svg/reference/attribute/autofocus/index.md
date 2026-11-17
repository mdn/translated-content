---
title: autofocus
slug: Web/SVG/Reference/Attribute/autofocus
l10n:
  sourceCommit: f806e0ff9b3ef7f633533b4c6c1657e9430e2f06
---

**`autofocus`** はグローバル SVG 属性で、文書に接続された後にフォーカスを受け取る要素を指定します。この属性は、その要素がすでにフォーカス可能でない場合は効果がありません。

`autofocus` 属性には、HTML 側にも対応する [`autofocus`](/ja/docs/Web/HTML/Reference/Global_attributes/autofocus) 属性があります。文書内で `autofocus` 属性を持てる要素は 1 つだけです。複数の要素に指定した場合は、最初の要素がフォーカスを受け取ります。

## 使用上のメモ

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">値</th>
      <td>
        <code><a href="/ja/docs/Glossary/Boolean/HTML">論理属性</a></code>
      </td>
    </tr>
    <tr>
      <th scope="row">デフォルト値</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">アニメーション</th>
      <td>不可</td>
    </tr>
  </tbody>
</table>

値については、HTML の [`autofocus`](/ja/docs/Web/HTML/Reference/Global_attributes/autofocus) 属性の説明を参照してください。

## アクセシビリティの注意事項

SVG 要素に自動でフォーカスを当てると、スクリーンリーダーを使う視覚障碍のある人や認知障碍のある人を混乱させることがあります。`autofocus` が設定されると、スクリーンリーダーは事前に警告することなく、利用者をフォーカス可能な要素へ「テレポート」させます。

`autofocus` 属性を使用する際は、アクセシビリティへの影響を慎重に検討してください。要素に自動でフォーカスを当てると、ページの読み込み時にスクロールが発生することがあります。また、一部のタッチデバイスでは、フォーカスによってソフトウェアキーボードが表示されることもあります。スクリーンリーダーは、フォーカスを受け取る要素の{{glossary("accessible name", "アクセシブル名")}}を読み上げますが、その要素より前にある、より多くの文脈を与えるコンテンツは読み上げません。同様に、小さなデバイスで画面を見る利用者も、先行するコンテンツが与える文脈を見落としてしまいます。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- SVG {{SVGAttr("tabindex")}} 属性
- HTML の [`autofocus`](/ja/docs/Web/HTML/Reference/Global_attributes/autofocus) 属性
- {{domxref("SVGElement.autofocus")}}
