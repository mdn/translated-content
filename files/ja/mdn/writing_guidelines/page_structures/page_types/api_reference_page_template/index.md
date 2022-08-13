---
title: API reference page template
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_reference_page_template
tags:
  - API
  - Template
  - reference page
translation_of: MDN/Structures/Page_types/API_reference_page_template
original_slug: MDN/Structures/Page_types/API_reference_page_template
---
{{MDNSidebar}}

> **Note:** ## 公開前に削除してください### タイトルとスラッグ API リファレンスページでは、*そのページで説明しているインターフェイスの名前*を*タイトル*にしてください。例えば、 [Request](/ja/docs/Web/API/Request) インターフェイスのページでは、_タイトル_ を _Request_ にしてください。_スラッグ_ (URL の最後の部分) も、*そのページで説明しているインターフェイスの名前*にしてください。したがって、 `Request` のスラッグは _Request_ です。これはふつう、自動的に設定されます。### 先頭で使用するマクロ既定では、テンプレートの先頭に 4 つのマクロ呼び出しがあります。以下のアドバイスに従って、更新や削除をしてください。\* \\{{APIRef("<em>グループデータ名</em>")}} — これは左端にあるサイドバーを生成し、現在のページに関連するクイックリファレンスのリンクを表示します。例えば、 [WebVR API](/ja/docs/Web/API/WebVR_API) の中の各ページは同じサイドバーを持ち、この API 内の他のページを指します。 API で正しいサイドバーを生成するには、 KumaScript の GitHub リポジトリにグループデータの項目を追加し、マクロ呼び出しの中で*グループデータ名*のところに項目名を入れる必要があります。これを行う方法についてのガイドは [API リファレンスサイドバー](/ja/docs/MDN/Contribute/Howto/Write_an_API_reference/Sidebars)を参照してください。
>
> - \\{{SeeCompatTable}} — これは、 **This is an experimental technology** バナーを生成して、技術が[実験的](/ja/docs/MDN/Guidelines/Conventions_definitions#experimental)であることを示します。文書化しようとしている技術が実験的でない場合は、これを削除することができます。実験的な技術であり、その技術が Firefox のプレハブに隠されている場合は、 [Firefox における試験的機能](/ja/docs/Mozilla/Firefox/Experimental_features)のページにそのための項目を記入する必要があります。
> - \\{{SecureContext_Header}} — これは **Secure context** バナーを生成し、その技術が[安全なコンテキスト](/ja/docs/Web/Security/Secure_Contexts)でのみ利用可能であることを示します。そうでない場合、マクロ呼び出しを削除することができます。存在する場合は、[安全なコンテキストに制限されている機能](/ja/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts)ページにも項目を記入してください。
> - \\{{Deprecated_Header}} — これは **Deprecated** バナーを生成し、その技術が[非推奨](/ja/docs/MDN/Guidelines/Conventions_definitions#deprecated_and_obsolete)であることを示します。そうでない場合は、このマクロを削除することができます。
> - \\{{Interface_Overview("<em>GroupDataName</em>")}} {{Experimental_Inline}} — これはページの本文 (コンストラクター、プロパティ、メソッド、イベント) を生成します。### タグ In an API reference page, you need to include the following tags (see the _Tags_ section at the bottom of the editor UI): **API**, **Reference**, **Interface**, _the name of the API_ (e.g. **WebVR**), the name of the interface (e.g. **Request**), **Experimental** (if the technology is [experimental](/ja/docs/MDN/Guidelines/Conventions_definitions#experimental)), **Secure context** (if it is available in a secure context only), and **Deprecated** (if it is [deprecated](/ja/docs/MDN/Guidelines/Conventions_definitions#deprecated_and_obsolete)).Optionally, you can elect to include some other tags that effective represent terms people might search for when looking for information on that technology. For example on WebVR interface pages we include **VR** and **Virtual reality**.### ブラウザーの互換性 To fill in the browser compat data, you first need to fill in an entry for the API into our [Browser compat data repo](https://github.com/mdn/browser-compat-data) — see our [guide on how to do this](/ja/docs/MDN/Structures/Compatibility_tables#the_new_way_the_browser_compat_data_repo_and_dynamic_tables).Once that is done, you can show the compat data for the interface with a \\{{Compat(…)}} macro call.

{{APIRef("GroupDataName")}}{{SeeCompatTable}}{{SecureContext_Header}}{{Deprecated_Header}}

The summary paragraph — start by naming the interface, saying what API it is part of, and saying what it does. This should ideally be 1 or 2 short sentences. You could copy most of this from the Interface's summary on the corresponding API landing page.

{{InheritanceDiagram}}

## コンストラクター

- {{DOMxRef("NameOfTheInterface.NameOfTheInterface")}}
  - : Creates a new instance of the {{DOMxRef("NameOfTheInterface")}} object.

## プロパティ

_Also inherits properties from its parent interface, {{DOMxRef("NameOfParentInterface")}}._ (Note: If the interface doesn't inherit from another interface, remove this whole line.)

- {{DOMxRef("NameOfTheInterface.property1")}}{{ReadOnlyInline}} {{Deprecated_Inline}}
  - : Include a brief description of the property and what it does here. Include one term and definition for each property. If the property is not readonly/experimental/deprecated, remove the relevant macro calls.
- {{DOMxRef("NameOfTheInterface.property2")}}
  - : etc.

## メソッド

_Also inherits methods from its parent interface, {{DOMxRef("NameOfParentInterface")}}._ (Note: If the interface doesn't inherit from another interface, remove this whole line.)

- {{DOMxRef("NameOfTheInterface.method1()")}} {{Experimental_Inline}} {{Deprecated_Inline}}
  - : Include a brief description of the method and what it does here. Include one term and definition for each method. If the method is not experimental/deprecated, remove the relevant macro calls.
- {{DOMxRef("NameOfTheInterface.method2()")}}
  - : etc.

## イベント

Listen to these events using [`addEventListener()`](/ja/docs/Web/API/EventTarget/addEventListener) or by assigning an event listener to the `oneventname` property of this interface.

- [`eventname1`](#)
  - : Fired when ... include description of when event fires
    Also available via the [`oneventname1`](#) property.
- [`eventname2`](#)
  - : Fired when ... include description of when event fires
    Also available via the [`oneventname2`](#) property.
- etc.
  - : Fired when ...

## 例

Fill in a simple example that nicely shows a typical usage of the interfaces, then perhaps some more complex examples (see our guide on how to add [code examples](/ja/docs/MDN/Structures/Code_examples) for more information).

```js
my code block
```

And/or include a list of links to useful code samples that live elsewhere:

- x
- y
- z

## 仕様書

| 仕様書                                                                                                                                                           | 状態                                             | 備考                                                                                                                       |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------------------------------------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| {{SpecName("NameOfOtherSpecification", "#document-fragment-linking-directly-to-feature-definition", "NameOfTheFeature")}} | {{Spec2("NameOfOtherSpecification")}} | Defines blah blah feature. If no other specs define specific subfeatures of this interface, you can delete this table row. |
| {{SpecName("NameOfSpecification", "#document-fragment-linking-directly-to-interface-definition", "NameOfTheInterface")}} | {{Spec2("NameOfSpecification")}}     | 初回定義                                                                                                                   |

## ブラウザーの互換性

{{Compat("path.to.feature.NameOfTheInterface")}}

## 関連情報

- Include list of
- other links related to
- this API that might
- be useful
