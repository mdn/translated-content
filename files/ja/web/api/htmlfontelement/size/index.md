---
title: "HTMLFontElement: size プロパティ"
short-title: size
slug: Web/API/HTMLFontElement/size
l10n:
  sourceCommit: a3d9f61a8990ba7b53bda9748d1f26a9e9810b18
---

{{deprecated_header}}{{ APIRef("HTML DOM") }}

廃止された **`HTMLFontElement.size`** プロパティは、HTML の [`size`](/ja/docs/Web/HTML/Element/font#size) 属性を反映した文字列です。これは 1 から 7 までのフォントサイズか、例えば -2 や +1 のような既定値 3 からの相対値を格納します。

文字列の形式は以下の HTML マイクロ構文のいずれかに従う必要があります。

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">マイクロ構文</th>
      <th scope="col">説明</th>
      <th scope="col">例</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>有効な数値のサイズ文字列</td>
      <td><em>1 ～ 7 の範囲の整数値</em></td>
      <td><code>6</code></td>
    </tr>
    <tr>
      <td>相対的なサイズ文字列</td>
      <td>
        <em>+x または -x、x は 3に対する相対数（結果は 1 〜 7 の範囲でなければなりません）</em>
      </td>
      <td>
        <code>+2<br />-1</code>
      </td>
    </tr>
  </tbody>
</table>

## 値

文字列です。

## 例

```js
// HTML 内に <font id="f"> 要素があると仮定

const f = document.getElementById("f");
f.size = "6";
```

## 仕様書

`<font>` 要素は非推奨となり、対応しなくなりましたので `<font>.size` も非対応となりました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- 所属先の {{domxref("HTMLFontElement")}} インターフェイス
