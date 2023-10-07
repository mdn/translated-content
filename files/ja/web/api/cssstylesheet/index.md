---
title: CSSStyleSheet
slug: Web/API/CSSStyleSheet
l10n:
  sourceCommit: b280ea1234452ff553caa466bf532a66ba51db01
---

{{APIRef("CSSOM")}}

**`CSSStyleSheet`** インターフェイスは、1 枚の [CSS](/ja/docs/Web/CSS) スタイルシートを表し、そのスタイルシートに含まれるルールのリストを調べたり変更したりすることができます。これは、その親の {{domxref("StyleSheet")}} からプロパティとメソッドを継承しています。

{{InheritanceDiagram}}

スタイルシートは、そのスタイルシート内のそれぞれのルールを表す一連の {{domxref("CSSRule")}} オブジェクトの集合から成ります。それらのルールには {{domxref("CSSRuleList")}} があり、これはそのスタイルシートの {{domxref("CSSStyleSheet.cssRules", "cssRules")}} プロパティから取得することができます。

例えば、1 つの {{domxref("CSSStyleRule")}} オブジェクトが保持するスタイルは次のようなものです。

```css
h1,
h2 {
  font-size: 16pt;
}
```

他にもアットルール、例えば {{cssxref("@import")}} や {{cssxref("@media")}} になることもあります。

[スタイルシートの取得](#スタイルシートの取得)の節で `CSSStyleSheet` オブジェクトを取得するための様々な方法について説明しています。`CSSStyleSheet` オブジェクトは直接構築することもできます。コンストラクターと {{domxref("CSSStyleSheet.replace()")}}, {{domxref("CSSStyleSheet.replaceSync()")}} メソッドは新しい追加仕様で、スタイルシートの構築を行うことができます。

## コンストラクター

- {{domxref("CSSStyleSheet.CSSStyleSheet()", "CSSStyleSheet()")}}
  - : 新しい `CSSStyleSheet` オブジェクトを生成します。

## インスタンスプロパティ

_親である {{domxref("StyleSheet")}} からプロパティを継承しています。_

- {{domxref("CSSStyleSheet.cssRules")}} {{ReadOnlyInline}}

  - : 生きた {{domxref("CSSRuleList")}} を返します。これは、スタイルシートを構成する {{domxref("CSSRule")}} オブジェクトの最新リストを維持します。

  > **メモ:** 一部のブラウザーでは、スタイルシートが異なるドメインから読み込まれた場合、`cssRules` にアクセスすると `SecurityError` が発生します。

- {{domxref("CSSStyleSheet.ownerRule")}} {{ReadOnlyInline}}
  - : これが {{cssxref("@import")}} ルールを使用して文書にインポートされたスタイルシートである場合、`ownerRule` は、その {{domxref("CSSImportRule")}} を返します。そうでない場合、`null` を返します。

## インスタンスメソッド

_親である {{domxref("Stylesheet")}} からメソッドを継承しています。_

- {{domxref("CSSStyleSheet.deleteRule()")}}
  - : スタイルシートから、指定した位置のルールを削除します。
- {{domxref("CSSStyleSheet.insertRule()")}}
  - : スタイルシート内の指定した位置に、テキスト表現で与えられた新しいルールを挿入します。
- {{domxref("CSSStyleSheet.replace()")}}
  - : 非同期にスタイルシートの内容を置き換え、更新された `CSSStyleSheet` で解決する {{jsxref("Promise")}} を返します。
- {{domxref("CSSStyleSheet.replaceSync()")}}
  - : 同期的にスタイルシートのコンテンツを置き換えます。

## 古いプロパティ

_これらのプロパティは、Microsoft が導入した古いプロパティで、既存のサイトとの互換性を保つために維持されています。_

- {{domxref("CSSStyleSheet.rules", "rules")}} {{ReadOnlyInline}} {{Deprecated_Inline}}
  - : `rules` プロパティは機能的に標準の {{domxref("CSSStyleSheet.cssRules", "cssRules")}} プロパティと同等です。生きた {{domxref("CSSRuleList")}} を返します。これは、スタイルシートを構成するすべてのルールの最新リストを維持します。

## 古いメソッド

_これらのメソッドは、Microsoft が導入した古いメソッドであり、既存のサイトとの互換性を保つために維持されています。_

- {{domxref("CSSStyleSheet.addRule", "addRule()")}} {{Deprecated_Inline}}

  - : スタイルシートに、スタイルが適用されるセレクターと、一致する要素に適用するスタイルブロックを指定して、新しいルールを追加します。

    これは、単一の文字列としてルール全体のテキスト表現を取る {{domxref("CSSStyleSheet.insertRule", "insertRule()")}} とは異なります。

- {{domxref("CSSStyleSheet.removeRule", "removeRule()")}} {{Deprecated_Inline}}
  - : 機能的には {{domxref("CSSStyleSheet.deleteRule", "deleteRule()")}} と等しく、このスタイルシートのルールリストから指定された位置のルールを削除します。

## スタイルシートの取得

スタイルシートは、多くても 1 つの {{domxref("Document")}} と関連付けられ、これに適用されます（{{domxref("StyleSheet.disabled", "disabled", "", 1)}} でない限り）。指定された文書の `CSSStyleSheet` オブジェクトのリストは、{{domxref("Document.styleSheets")}} プロパティを使用して取得できます。それぞれのスタイルシートは、もしあれば、そのオーナーオブジェクト（`Node` または `CSSImportRule`）からもアクセスできます。

`CSSStyleSheet` オブジェクトは、文書でスタイルシートが読み込まれた時に、ブラウザーによって自動的に作成され、その文書の {{domxref("Document.styleSheets")}} リストに挿入されます。

スタイルシートを文書と関連付ける方法のリスト（おそらく不完全）は次のとおりです。

<table class="no-markdown">
  <thead>
    <tr>
      <th scope="col">
        スタイルシートが文書と関連付けられる理由
      </th>
      <th scope="col">
        <code>document.<br />styleSheets</code> リストに出現
      </th>
      <th scope="col">
        指定されたスタイルシートオブジェクトのオーナー要素/ルールの取得
      </th>
      <th scope="col">オーナーオブジェクトのインターフェイス</th>
      <th scope="col">オーナーからの CSSStyleSheet オブジェクトの取得</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        文書内の {{HTMLElement("style")}} および {{HTMLElement("link")}} 要素
      </td>
      <td>はい</td>
      <td>{{domxref("StyleSheet.ownerNode", ".ownerNode")}}</td>
      <td>
        {{domxref("HTMLLinkElement")}}、<br />{{domxref("HTMLStyleElement")}}、<br />
        {{domxref("SVGStyleElement")}} の何れか
      </td>
      <td>
        {{domxref("HTMLLinkElement.sheet")}}、<br />{{domxref("HTMLStyleElement.sheet")}}、<br />
        {{domxref("SVGStyleElement.sheet")}} の何れか
      </td>
    </tr>
    <tr>
      <td>
        文書に適用された他のスタイルシート内の CSS {{cssxref("@import")}} ルール
        the document
      </td>
      <td>はい</td>
      <td>
        {{domxref("CSSStyleSheet.ownerRule", ".ownerRule")}}
      </td>
      <td>{{domxref("CSSImportRule")}}</td>
      <td>
        {{domxref("CSSImportRule.styleSheet", ".styleSheet")}}
      </td>
    </tr>
    <tr>
      <td>
        （HTML でない）文書の <code>&#x3C;?xml-stylesheet ?></code> 処理命令
      </td>
      <td>はい</td>
      <td>{{domxref("StyleSheet.ownerNode", ".ownerNode")}}</td>
      <td>{{domxref("ProcessingInstruction")}}</td>
      <td>
        {{domxref("ProcessingInstruction.sheet", ".sheet")}}
      </td>
    </tr>
    <tr>
      <td>HTTP の Link ヘッダー</td>
      <td>はい</td>
      <td><em>なし</em></td>
      <td>なし</td>
      <td>なし</td>
    </tr>
    <tr>
      <td>（既定の）ユーザーエージェントスタイルシート</td>
      <td>いいえ</td>
      <td>なし</td>
      <td>なし</td>
      <td>なし</td>
    </tr>
  </tbody>
</table>

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [CSS オブジェクトモデル](/ja/docs/Web/API/CSS_Object_Model)
- [動的なスタイル情報の利用](/ja/docs/Web/API/CSS_Object_Model/Using_dynamic_styling_information)
