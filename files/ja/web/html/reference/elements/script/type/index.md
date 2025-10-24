---
title: "<script>: type 属性"
slug: Web/HTML/Reference/Elements/script/type
l10n:
  sourceCommit: e9b6cd1b7fa8612257b72b2a85a96dd7d45c0200
---

{{HTMLSidebar}}

**`type`** は [`<script>`](/ja/docs/Web/HTML/Reference/Elements/script) 要素の属性で、その要素で表されるスクリプトの種類（クラシックスクリプト、JavaScript モジュール、インポートマップ、データブロック）を示します。

## 値

この属性の値は、スクリプトが表現するデータの種類を示し、以下のいずれかの値を取ります。

- **属性が未設定（既定値）、空文字列、JavaScript の MIME タイプ**
  - : スクリプトが「クラシックスクリプト」であること、JavaScript コードを保持していることを示します。
    このスクリプトが JavaScript コードを参照している場合、MIME タイプを指定するのではなく、この属性を省略することを推奨します。
    JavaScript の MIME タイプは [IANA media types specification に掲載されています](/ja/docs/Web/HTTP/Guides/MIME_types#textjavascript)。
- [`importmap`](/ja/docs/Web/HTML/Reference/Elements/script/type/importmap)
  - : この値は、要素の本体にインポートマップが格納されていることを示します。
    インポートマップ JSON オブジェクトで、開発者が [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules#importing_modules_using_import_maps)をインポートする際に、ブラウザーがモジュール指定子を解決する方法を制御するために使用できます。
- `module`
  - : コードを JavaScript モジュールとして扱います。
    スクリプトコンテンツの処理は延期されます。
    `charset` および `defer` 属性の影響を受けません。
    `module` の利用についての情報は、 [JavaScript モジュール](/ja/docs/Web/JavaScript/Guide/Modules)をご覧ください。クラシックスクリプトとは異なり、モジュールスクリプトはオリジンをまたいで読み取る場合、CORS プロトコルを使用する必要があります。
- [`speculationrules`](/ja/docs/Web/HTML/Reference/Elements/script/type/speculationrules) {{experimental_inline}}
  - : この値は、要素本体に投機ルールが含まれていることを示します。
    投機ルールは、ブラウザーによって先読みされる、または事前レンダリングされるリソースを決定する JSON オブジェクトという形で提供されます。これは、{{domxref("Speculation Rules API", "投機ルール API", "", "nocode")}} の一部です。
- **その他の値**
  - : このタグで埋め込んだコンテンツを、ブラウザーによって処理されないデータブロックとして扱います。
    開発者はデータブロックを記述するために、 JavaScript の MIME タイプではない有効な MIME タイプを使用しなければなりません。
    他の属性は、`src` 属性も含めてすべて無視されます。

> [!NOTE]
> 以前のブラウザーでは、この種類は埋め込んだり（`src` 属性によって）インポートしたりするコードのスクリプト言語を識別していました。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}
