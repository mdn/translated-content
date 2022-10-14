---
title: HTML インポート
slug: conflicting/Web/Web_Components
original_slug: Web/Web_Components/HTML_Imports
---

{{DefaultAPISidebar("Web Components")}}

<div class="blockIndicator obsolete"><p><strong>Google Chrome 73 で廃止</strong><br>この機能は廃止されました。まだいくつかのブラウザーで動作するかもしれませんが、いつ削除されてもおかしくないので、使わないようにしましょう。</p></div>

> **警告:** Firefox はこの形式の _HTML インポート_ は提供していません。詳細は[状況更新](https://hacks.mozilla.org/2015/06/the-state-of-web-components/)を参照してください。標準化への同意が集まるか、代替機構が発表されるまで、Google の [`webcomponents.js`](https://github.com/webcomponents/webcomponentsjs) などのポリフィルを使用することができます。

_HTML インポート_ は [Web Components](/ja/docs/Web/Web_Components) のパッケージング機構として使用されることを意図していますが、単独で使用することもできます。

以下のように、HTML 文書中で [`<link>`](/ja/docs/Web/HTML/Element/link) タグを使用してインポートします。

```
<link rel="import" href="myfile.html">
```

リンク種別 `import` は新設です。

## 仕様

<table class="spec-table standard-table">
  <tbody>
    <tr>
      <th scope="col">仕様</th>
      <th scope="col">状態</th>
      <th scope="col">備考</th>
    </tr>
    <tr>
      <td>{{SpecName("HTML Imports")}}</td>
      <td>{{Spec2("HTML Imports")}}</td>
      <td>初回定義。</td>
    </tr>
  </tbody>
</table>

## ブラウザーの互換性

{{Compat("html.elements.link.rel.import")}}
