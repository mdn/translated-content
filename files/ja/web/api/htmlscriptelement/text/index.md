---
title: "HTMLScriptElement: text プロパティ"
short-title: text
slug: Web/API/HTMLScriptElement/text
l10n:
  sourceCommit: 65cbd4ff030e6763d6868917137d728c3ec29288
---

{{APIRef("HTML DOM")}}

> [!WARNING]
> このプロパティは、スクリプト要素のテキストコンテンツを表します。スクリプトの型によっては、このテキストが実行可能となる場合があります。
> この API は[インジェクションシンク](/ja/docs/Web/API/Trusted_Types_API#概念と使い方)と呼ばれ、[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS) 攻撃の攻撃経路となる可能性があります。
>
> このリスクを軽減するには、文字列の代わりに常に {{domxref("TrustedScript")}} オブジェクトを割り当て、[信頼型の適用](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)を行うようにしてください。
> 詳しくは、[セキュリティの注意事項](#セキュリティの注意事項)を参照してください。

**`innerText`** は {{domxref("HTMLScriptElement")}} インターフェイスのプロパティで、{{HTMLElement("script")}} 要素のインラインテキストコンテンツを表します。
その動作は、{{domxref("HTMLScriptElement.textContent","textContent")}} および {{domxref("HTMLScriptElement.innerText","innerText")}} プロパティと同様です。

## 値

このプロパティを取得すると、スクリプトのテキストが含まれている文字列が返されます。

このプロパティを設定するときは、{{domxref("TrustedScript")}} オブジェクトまたは文字列のいずれかを受け入れることができます。

### 例外

- `TypeError`
  - : [信頼型](/ja/docs/Web/API/Trusted_Types_API)が [CSP によって強制されている](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)場合で、かつデフォルトのポリシーが定義されていないときに、プロパティが文字列に設定されると、この例外が発生します。

## Description

**`text`** は {{domxref("HTMLScriptElement")}} インターフェイスのプロパティで、{{HTMLElement("script")}} 要素内のテキストコンテンツを表します。

実行可能なスクリプト（つまり、{{domxref('HTMLScriptElement/type','type')}} によってモジュールまたはクラシックスクリプトであることが示されているスクリプト）の場合、このテキストはインラインで実行可能なコードとなります。
その他の型の場合、インポートマップ、投機ルール、またはその他の種類のデータブロックを表します。

なお、{{domxref('HTMLScriptElement/src','src')}} プロパティが設定されている場合、`text` プロパティのコンテンツは無視されることに注意してください。

### セキュリティの注意事項

{{domxref("HTMLScriptElement.textContent")}} の[セキュリティの注意事項](/ja/docs/Web/API/HTMLScriptElement/textContent#セキュリティの注意事項)を参照してください（この注意事項は `text`, `textContent`, `innerText` の各プロパティで共通です）。

## 例

{{domxref("HTMLScriptElement.textContent")}} の[例](/ja/docs/Web/API/HTMLScriptElement/textContent#例)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("HTMLScriptElement.textContent")}}
- {{domxref("HTMLScriptElement.innerText")}}
