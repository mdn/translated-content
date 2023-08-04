---
title: "CSP: plugin-types"
slug: Web/HTTP/Headers/Content-Security-Policy/plugin-types
l10n:
  sourceCommit: 45c7ae13178203b4ee58842efbe2a27deab274a6
---

{{HTTPSidebar}}{{deprecated_header}}{{Non-standard_header}}

HTTP の {{HTTPHeader("Content-Security-Policy")}} (CSP) における **`plugin-types`** ディレクティブは、文書に埋め込むことができるプラグインのセットを、読み込むことができるリソースの種類を制限することによって制限します。

{{HTMLElement("embed")}}, {{HTMLElement("object")}}, {{HTMLElement("applet")}} の各要素のインスタンス化は、次の場合に失敗します。

- 要素が妥当な MIME 型を宣言していなかった場合
- 宣言された型が `plugin-types` ディレクティブで指定されたもののいずれにも一致しなかった場合
- 読み込まれたリソースが宣言された型に一致しなかった場合

<table class="properties">
  <tbody>
    <tr>
      <th scope="row">CSP バージョン</th>
      <td>2</td>
    </tr>
    <tr>
      <th scope="row">ディレクティブ種別</th>
      <td>{{Glossary("Document directive", "文書ディレクティブ")}}</td>
    </tr>
    <tr>
      <th scope="row">{{CSP("default-src")}} による代替</th>
      <td>なし。これを設定しないと何でも許可される。</td>
    </tr>
  </tbody>
</table>

## 構文

1 つ以上の [MIME タイプ](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types)を `plugin-types` ポリシーに設定することができます。

```http
Content-Security-Policy: plugin-types <type>/<subtype>;
Content-Security-Policy: plugin-types <type>/<subtype> <type>/<subtype>;
```

- \<type>/\<subtype>
  - 妥当な [MIME タイプ](/ja/docs/Web/HTTP/Basics_of_HTTP/MIME_types/Common_types)。

## 例

### プラグインを不許可にする

全てのプラグインを不許可にするには、 {{CSP("object-src")}} ディレクティブを `'none'` に設定すればプラグインが不許可になります。 `plugin-types` ディレクティブは、 `object-src` でプラグインを許可している場合に限って使用することができます。

```html
<meta http-equiv="Content-Security-Policy" content="object-src 'none'" />
```

### Java アプレットの許可

{{HTMLElement("applet")}} を読み込むには、 `application/x-java-applet` を指定する必要があります。

```http
Content-Security-Policy: plugin-types application/x-java-applet
```

## 仕様書

現在のどの仕様にも属していません。以前は [CSP 2](https://www.w3.org/TR/CSP2/#directive-plugin-types) で定義されていました。

## ブラウザーの互換性

{{Compat}}

## 関連情報

- {{HTTPHeader("Content-Security-Policy")}}: {{CSP("object-src")}}
- {{HTMLElement("object")}}
- {{HTMLElement("embed")}}
- {{HTMLElement("applet")}}
- {{HTTPHeader("X-Content-Type-Options")}}
