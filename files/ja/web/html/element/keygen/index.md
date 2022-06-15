---
title: <keygen>
slug: Web/HTML/Element/keygen
tags:
  - 非推奨
  - 要素
  - HTML
  - HTML5
  - 非推奨
  - リファレンス
  - ウェブ
browser-compat: html.elements.keygen
translation_of: Web/HTML/Element/keygen
---

{{HTMLRef}}{{deprecated_header}}

**`<keygen>`** は [HTML](/ja/docs/Web/HTML) の要素で、鍵の材料の生成を容易にするため、および [HTML フォーム](/ja/docs/Learn/Forms)の一部として公開鍵を送信するための要素です。この仕組みは、ウェブベースの資格情報管理システムと合わせて使用するものとして設計されています。証明書の要求に必要な他の情報を伴う HTML フォームで `<keygen>` 要素を使用して、その処理結果が署名済み資格情報になることを想定しています。

<table class="properties">
  <tbody>
    <tr>
      <th scope="row"><a href="/ja/docs/Web/HTML/Content_categories">コンテンツカテゴリー</a></th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#Flow_content">フローコンテンツ</a>,
        <a href="/ja/docs/Web/HTML/Content_categories#Phrasing_content">記述コンテンツ</a>, 対話型コンテンツ,
        <a href="/ja/docs/Web/HTML/Content_categories#Form_listed">リスト化</a>,
        <a href="/ja/docs/Web/HTML/Content_categories#Form_labelable">ラベル付け可能</a>,
        <a href="/ja/docs/Web/HTML/Content_categories#Form_submittable">サブミット可能</a>,
        <a href="/ja/docs/Web/HTML/Content_categories#Form_resettable">リセット可能</a>な<a href="/ja/docs/Web/HTML/Content_categories#Form-associated_content">フォーム関連要素</a>,
        知覚可能コンテンツ
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている内容</th>
      <td>なし。これは{{Glossary("empty element", "空要素")}}です。</td>
    </tr>
    <tr>
      <th scope="row">タグの省略</th>
      <td>開始タグは必須。終了タグを記述してはなりません。</td>
    </tr>
    <tr>
      <th scope="row">許可されている親要素</th>
      <td>
        <a href="/ja/docs/Web/HTML/Content_categories#phrasing_content">記述コンテンツ</a>を受け入れるすべての要素
      </td>
    </tr>
    <tr>
      <th scope="row">許可されている ARIA ロール</th>
      <td>なし</td>
    </tr>
    <tr>
      <th scope="row">DOM インターフェイス</th>
      <td>{{DOMxRef("HTMLKeygenElement")}}</td>
    </tr>
    </tbody>
</table>

## 属性

この要素には[グローバル属性](/ja/docs/Web/HTML/Global_attributes)があります。

- {{HTMLAttrDef("autofocus")}}
  - : この論理属性で、ユーザーが別のコントロールに入力するなどして変更しない限り、ページ読み込み時にこのコントロールがフォーカスを持つべきであることを指定できます。文書内のフォーム要素でひとつだけが `autofocus` 属性を持つことができ、これは真偽値です。
- {{HTMLAttrDef("challenge")}}
  - : 公開鍵とともに送信するチャレンジ文字列です。指定しない場合の既定値は空文字列です。
- {{HTMLAttrDef("disabled")}}
  - : この論理属性は、フォームコントロールと対話できないことを示します。
- {{HTMLAttrDef("form")}}
  - : この要素が関連づけられた form 要素 (*フォームオーナー*)。属性の値は同一文書内の {{HTMLElement("form")}} 要素の `id` 属性の値でなければなりません。この属性を指定しない場合、この要素は {{HTMLElement("form")}} 要素の子孫要素として配置しなければなりません。この属性は `<keygen>` 要素を form 要素の子孫としてだけでなく、文書内のどこにでも配置することを可能にします。
- {{HTMLAttrDef("keytype")}}
  - : 生成する鍵の種類。既定値は `RSA` です。
- {{HTMLAttrDef("name")}}
  - : コントロールの名前であり、フォームデータとともに送信されます。

この要素は以下のように記述します。

```html
<keygen name="name" challenge="challenge string" keytype="type"
        keyparams="pqg-params">
```

`keytype` 引数は、生成する鍵の種類を指定します。有効な値は "`RSA`" (既定値)、"`DSA`"、"`EC`" です。`name` 属性と `challenge` 属性はすべての場合で必要です。`keytype` 属性は RSA 鍵の生成では省略可、DSA 鍵および EC 鍵の生成では必須です。`keyparams` 属性は DSA 鍵および EC 鍵の生成では必須、RSA 鍵の生成では無視されます。`PQG` は、`keyparams` の同意語です。つまり、`keyparams="pqg-params"` または `pqg="pqg-params"` と指定できます。

RSA 鍵では、`keyparams` 引数を使用しません (指定しても無視されます)。ユーザーは RSA 鍵の強度を選択できます。現在、ユーザーは "高" 強度 (2048 ビット) または "中" 強度 (1024 ビット) を選択できます。

DSA 鍵では `keyparams` 引数で、鍵の生成処理で使用する DSA PQG 引数を指定します。`pqg` 引数の値は、IETF [RFC 3279](https://datatracker.ietf.org/doc/html/rfc3279) で定めている DSS 引数を DER で符号化したものを、BASE64 で符号化したものです。ユーザーは DSA 鍵のサイズを、DSA 標準で定義されているサイズから1つ選択できます。

EC 鍵では `keyparams` 引数で、鍵が生成される楕円曲線の名前を指定します。これは通常、 [RFC 5480, section 2.1.1.1](https://datatracker.ietf.org/doc/html/rfc5480#section-2.1.1.1) 内のリストにある文字列です。(ここに名前がある曲線の一部だけが、実際に個々のブラウザーが対応している可能性がある点に注意してください) `keyparams` 引数文字列が認識できない曲線名である場合は、ユーザーが選択した鍵強度 (低、中、高) に基づいて曲線が選択されます。高強度は "`secp384r1`"、中強度は "`secp256r1`" です。(注記: 鍵強度の種類数の選択、各強度の既定値、ユーザーに選択肢を提示する UI は仕様の範囲外です)

`<keygen>` 要素は、HTML フォーム内のみで有効です。この要素は、ユーザーが鍵のサイズを選択するために提示するいくつかの選択肢をもたらします。選択の UI はメニュー、ラジオボタン、あるいは他に利用可能な何かになるでしょう。ブラウザーは、使用可能な鍵強度をいくつか提示します。現在は、強と中の 2 種類の強度を提供しています。ユーザーのブラウザーが暗号処理ハードウェア (例えば "スマートカード") をサポートするように設定されている場合は、どこへ鍵を生成するか (例えばスマートカードに、あるいはソフトウェアで生成してディスクへ保存) の選択肢も与えられるかもしれません。

送信ボタンが押下されると、選択したサイズの鍵ペアを生成します。秘密鍵は暗号化されて、ローカルの鍵データベースに保管されます。

```
PublicKeyAndChallenge ::= SEQUENCE {
    spki SubjectPublicKeyInfo,
    challenge IA5STRING
}
SignedPublicKeyAndChallenge ::= SEQUENCE {
    publicKeyAndChallenge PublicKeyAndChallenge,
    signatureAlgorithm AlgorithmIdentifier,
    signature BIT STRING
}
```

公開鍵とチャレンジ文字列は DER で `PublicKeyAndChallenge` として符号化され、`SignedPublicKeyAndChallenge` を生成するために秘密鍵でデジタル署名が施されます。`SignedPublicKeyAndChallenge` は {{Glossary("Base64")}} で符号化され、最終的に ASCII データがフォームの name/value のペアとしてサーバーに送信されます。name は、`keygen` 要素の `name` 属性で指定した<var>名前</var>です。チャレンジ文字列が提供されない場合は、長さが 0 の `IA5STRING` として符号化されます。

以下は、HTTP サーバーから CGI プログラムに提供されるフォーム送信内容の例です。

```
commonname=John+Doe&email=doe@foo.com&org=Foobar+Computing+Corp.&
orgunit=Bureau+of+Bureaucracy&locality=Anytown&state=California&country=US&
key=MIHFMHEwXDANBgkqhkiG9w0BAQEFAANLADBIAkEAnX0TILJrOMUue%2BPtwBRE6XfV%0AWtKQbsshxk5ZhcUwcwyvcnIq9b82QhJdoACdD34rqfCAIND46fXKQUnb0mvKzQID%0AAQABFhFNb3ppbGxhSXNNeUZyaWVuZDANBgkqhkiG9w0BAQQFAANBAAKv2Eex2n%2FS%0Ar%2F7iJNroWlSzSMtTiQTEB%2BADWHGj9u1xrUrOilq%2Fo2cuQxIfZcNZkYAkWP4DubqW%0Ai0%2F%2FrgBvmco%3D
```

## 仕様書

現在の仕様書には含まれていません。

## ブラウザーの互換性

{{Compat}}
