---
title: "Document: parseHTMLUnsafe() 静的メソッド"
short-title: parseHTMLUnsafe()
slug: Web/API/Document/parseHTMLUnsafe_static
l10n:
  sourceCommit: cda9415220ba812ba2ee24e0af1c8e8001ab9924
---

{{APIRef("DOM")}}

> [!WARNING]
> このメソッドは、入力を HTML として構文解析し、DOM に書き込みます。
> このような API は[インジェクションシンク](/ja/docs/Web/API/Trusted_Types_API#概念と使い方)と呼ばれ、入力が攻撃者から来たものであれば、[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS)攻撃の経路となる可能性があります。
>
> このリスクを軽減するには、文字列の代わりに常に `TrustedHTML` オブジェクトを割り当て、[信頼型を強制する](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)ようにしてください。
> 詳しくは[セキュリティの注意事項](#セキュリティの注意事項)を参照してください。

> [!NOTE]
> このメソッドの代わりには、対応しているブラウザーでは、ほぼ常に {{domxref("Document/parseHTML_static", "Document.parseHTML()")}} を使用しましょう。なぜなら、このメソッドは常に XSS のリスクがある HTML エンティティを除去するからです。

**`parseHTMLUnsafe()`** は {{domxref("Document")}} オブジェクトの静的メソッドで、HTML 入力を構文解析し、オプションで不要な HTML 要素や属性を除外して、新しい {{domxref("Document")}} インスタンスを生成するために使用されます。

## 構文

```js-nolint
Document.parseHTMLUnsafe(input)
Document.parseHTMLUnsafe(input, options)
```

### 引数

- `input`
  - : 構文解析する HTML を定義する {{domxref("TrustedHTML")}} インスタンスまたは文字列です。
- `options` {{optional_inline}}
  - : 以下のオプション引数を持ったオプションオブジェクトです。
    - `sanitizer` {{optional_inline}}
      - : 入力のどの要素を許可することができるかまたは除去されるかを定義する、{{domxref("Sanitizer")}} または {{domxref("SanitizerConfig")}} オブジェクトです。
        これは、値が `"default"` の文字列でもよく、その場合は（XSS 対策済みの）[デフォルトのサニタイザー設定](/ja/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration)を持つ `Sanitizer` が適用されます。
        指定がない場合は、サニタイザーは使用されません。

        なお、同じ設定を複数回使用する場合は、`Sanitizer` を使用し、必要に応じてそれを変更する方が効率的であると考えられます。

### 返値

{{domxref("Document")}} です。

### 例外

- `TypeError`
  - : これは次の場合に発生します。
    - `html` が文字列で渡された場合（[信頼型](/ja/docs/Web/API/Trusted_Types_API)が[CSP によって強制](/ja/docs/Web/API/Trusted_Types_API#using_a_csp_to_enforce_trusted_types)されており、デフォルトポリシーが定義されていない場合）。
    - `options.sanitizer` に次のいずれかが渡された場合。
      - {{domxref("SanitizerConfig")}} が[有効](/ja/docs/Web/API/SanitizerConfig#valid_configuration)でないもの。
        例えば、"allowed" と "removed" の両方の設定項目を含む構成などです。
      - `"default"` 以外の値の文字列。
      - {{domxref("Sanitizer")}}、{{domxref("SanitizerConfig")}}、文字列のいずれでもない値。

## 解説

**`parseHTMLUnsafe()`** 静的メソッドを使用すると、新しい {{domxref("Document")}} インスタンスを生成し、必要に応じて不要な要素や属性をフィルタリングすることができます。
生成される `Document` の[コンテンツタイプ](/ja/docs/Web/API/Document/contentType)は "text/html"、[文字セット](/ja/docs/Web/API/Document/characterSet) は UTF-8、URL は "about:blank" となります。

入力 HTML には、[宣言型シャドウルート](/ja/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom)が含まれている場合があります。
HTML の文字列が具体的なシャドウホスト内で複数の[宣言型シャドウルート](/ja/docs/Web/HTML/Reference/Elements/template#declarative_shadow_dom)を定義している場合、最初の{{domxref("ShadowRoot")}}のみが生成されます。それ以降の宣言は、そのシャドウルート内の{{htmlelement("template")}}要素として構文解析されます。

`parseHTMLUnsafe()` は、デフォルトで無害化処理を行いません。
サニタイザーが引数として渡されなかった場合、入力に含まれるすべての HTML エンティティが挿入されます。

### セキュリティの注意事項

メソッド名の接尾辞 "Unsafe" は、このメソッドがすべての XSS リスクのある HTML エンティティの除去を強制しないことを示しています（{{domxref("Document/parseHTML_static", "Document.parseHTML()")}}とは異なります）。
適切なサニタイザーと併用すればそのように動作させることができますが、効果的なサニタイザーを保有する必要はなく、サニタイザー自体を使用しなくてもよいのです！
したがって、このメソッドは、ユーザーから指定された潜在的に安全でない文字列が、先に無害化されることなく DOM に注入される、[クロスサイトスクリプティング (XSS)](/ja/docs/Web/Security/Attacks/XSS)攻撃の攻撃経路となり得ます。

このリスクを軽減するには、文字列の代わりに常に {{domxref("TrustedHTML")}} オブジェクトを渡すようにし、CSP の [`require-trusted-types-for`](/ja/docs/Web/HTTP/Reference/Headers/Content-Security-Policy/require-trusted-types-for) ディレクティブを使用して[信頼型を強制](/ja/docs/Web/API/Trusted_Types_API#csp_を使用した信頼型の強制)することで、このリスクを軽減する必要があります。
これにより、入力は変換関数を通過することになり、挿入される前に入力を[無害化](/ja/docs/Web/Security/Attacks/XSS#sanitization)して、潜在的に危険なマークアップ（{{htmlelement("script")}} 要素やイベントハンドラー属性など）を除去することが可能になります。

`TrustedHTML` を使用することで、無害化処理のコードが有効であるかどうかを、すべてのインジェクション・シンクに散在させるのではなく、わずかな場所だけで監査・検査することができます。
`TrustedHTML` を使用する場合、メソッドに無害化処理関数を渡す必要はありません。

何らかの理由で `TrustedHTML` （あるいは、さらに望ましいのは `setHTML()`）を使用できない場合は、次に安全な選択肢として、XSS 対策済みの [デフォルトのサニタイザー設定](/ja/docs/Web/API/HTML_Sanitizer_API/Default_sanitizer_configuration) とともに `setHTMLUnsafe()` を使用することをお勧めします。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{domxref("Document.parseHTML_static", "Document.parseHTML()")}}
- {{domxref("Element.setHTML()")}} および {{domxref("Element.setHTMLUnsafe()")}}
- {{domxref("ShadowRoot.setHTML()")}} および {{domxref("ShadowRoot.setHTMLUnsafe()")}}
- {{domxref("DOMParser.parseFromString()")}}: HTML または XML を DOM ツリーに入れる
- [HTML 無害化 API](/ja/docs/Web/API/HTML_Sanitizer_API)
