---
title: description
slug: Web/Manifest/description
tags:
  - マニフェスト
  - ウェブ
  - description
browser-compat: html.manifest.description
translation_of: Web/Manifest/description
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

_`description`_ メンバーは、何をするアプリケーションなのかを開発者が説明することができる文字列です。 `description` には書字方向を設定することができ、マニフェストメンバーの [`dir`](/ja/docs/Web/Manifest/dir) と [`lang`](/ja/docs/Web/Manifest/lang) の値に基づいて左書きまたは右書きで表示することができます。

## 例

左書き言語用の単純な `description` です。

```json
"description": "Awesome application that will help you achieve your dreams."
```

アラビア語の `description` で、右書きで表示されます。

```json
"dir": "rtl",
"lang": "ar",
"description": ".تطبيق رائع سيساعدك على تحقيق أحلامك"
```

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
