---
title: "Selection: rangeCount プロパティ"
short-title: rangeCount
slug: Web/API/Selection/rangeCount
l10n:
  sourceCommit: 0b5859108411e47d228a4bb9f30a5556ab17f63c
---

{{ ApiRef("DOM") }}

**`Selection.rangeCount`** は読み取り専用のプロパティで、選択範囲に含まれる範囲の数を返します。

ユーザーが読み込まれたばかりのページをクリックする前は、`rangeCount` は `0` です。ユーザーがページをクリックすると、たとえ選択範囲が表示されていなくても、`rangeCount` は `1` になります。

通常、ユーザーは一度に 1 つの範囲しか選択できないため、`rangeCount` は通常 `1` になります。スクリプトを使用すれば、選択範囲を複数に設定することも可能です。

Gecko ベースのブラウザーでは、表のセルをまたいで複数の範囲を選択することができます。Firefox では、Ctrl キーを押しながらクリックすることで、文書内から複数の範囲を選択することができます（ただし、`display: table-cell` という CSS プロパティが設定されている要素内でクリックした場合は除きます）。

## 値

数値です。

## 例

次の例では、1 秒ごとに `rangeCount` が表示されます。ブラウザーでテキストを選択すると、その値が変化するのが確認できます。

### HTML

```html
<table>
  <tbody>
    <tr>
      <td>a.1</td>
      <td>a.2</td>
    </tr>
    <tr>
      <td>b.1</td>
      <td>b.2</td>
    </tr>
    <tr>
      <td>c.1</td>
      <td>c.2</td>
    </tr>
  </tbody>
</table>
```

### JavaScript

```js
setInterval(() => {
  console.log(window.getSelection().rangeCount);
}, 1000);
```

### 結果

コンソールを開いて、選択範囲がいくつあるかを確認してください。Gecko ベースのブラウザーでは、<kbd>Ctrl</kbd> キー（macOS の場合は <kbd>Cmd</kbd> キー）を押したままマウスでドラッグすると、テーブルのセルをまたいで複数の範囲を選択できます。

{{EmbedLiveSample("Examples")}}

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先のインターフェイスである {{domxref("Selection")}}
