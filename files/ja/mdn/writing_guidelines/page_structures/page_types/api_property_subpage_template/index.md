---
title: API property subpage template
slug: >-
  MDN/Writing_guidelines/Page_structures/Page_types/API_property_subpage_template
tags:
  - API
  - Property
  - Template
  - property subpage
  - reference page
  - テンプレート
translation_of: MDN/Structures/Page_types/API_property_subpage_template
original_slug: MDN/Structures/Page_types/API_property_subpage_template
---
{{MDNSidebar}}

> **Note:** ## 公開前に削除してください### タイトルとスラッグ API プロパティサブページの*タイトル*は、_インターフェイス名_ + "." + *プロパティ名*としてください。例えば、 [VRDisplay](/ja/docs/Web/API/VRDisplay) インターフェイスの [capabilities](/ja/docs/Web/API/VRDisplay/capabilities) プロパティの*タイトル* は _VRDisplay.capabilities_ です。_スラッグ_ (URL の最後の部分) は、*プロパティ名*を記述してください。ですから `capabilities` のスラッグは _capabilities_ です。### 先頭で使用するマクロ既定では、テンプレートの先頭に 4 つのマクロ呼び出しがあります。以下のアドバイスに従って、更新や削除をしてください。\* \\{{APIRef("<em>グループデータ名</em>")}} — これは左端にあるサイドバーを生成し、現在のページに関連するクイックリファレンスのリンクを表示します。例えば、 [WebVR API](/ja/docs/Web/API/WebVR_API) の中の各ページは同じサイドバーを持ち、この API 内の他のページを指します。 API で正しいサイドバーを生成するには、 KumaScript の GitHub リポジトリにグループデータの項目を追加し、マクロ呼び出しの中で*グループデータ名*のところに項目名を入れる必要があります。これを行う方法についてのガイドは [API リファレンスサイドバー](/ja/docs/MDN/Contribute/Structures/API_references/API_reference_sidebars)を参照してください。
>
> - \\{{SeeCompatTable}} — this generates a **This is an experimental technology** banner that indicates the technology is [experimental](/ja/docs/MDN/Contribute/Guidelines/Conventions_definitions#Experimental)). If the technology you are documenting is not experimental, you can remove this. If it is experimental, and the technology is hidden behind a pref in Firefox, you should also fill in an entry for it in the [Experimental features in Firefox](/ja/docs/Mozilla/Firefox/Experimental_features) page.
> - \\{{SecureContext_Header}} — this generates a **Secure context** banner that indicates the technology is only available in a [secure context](/ja/docs/Web/Security/Secure_Contexts). If it isn't, then you can remove the macro call. If it is, then you should also fill in an entry for it in the [Features restricted to secure contexts](/ja/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) page.
> - \\{{Deprecated_Header}} — this generates a **Deprecated** banner that indicates the technology is [deprecated](/ja/docs/MDN/Contribute/Guidelines/Conventions_definitions#Deprecated_and_obsolete). If it isn't, then you can remove the macro call.### タグ In an API method subpage, you need to include the following tags (see the _Tags_ section at the bottom of the editor UI): **API**, **Reference**, **Property**, _the name of the API_ (e.g. **WebVR**), the name of the parent interface (e.g. **VRDisplay**), the name of the method (e.g. **capabilities**), **Experimental** (if the technology is [experimental](/ja/docs/MDN/Contribute/Guidelines/Conventions_definitions#Experimental)), **Secure context** (if it is available in a secure context only), and **Deprecated** (if it is [deprecated](/ja/docs/MDN/Contribute/Guidelines/Conventions_definitions#Deprecated_and_obsolete)).Optionally, you can elect to include some other tags that effective represent terms people might search for when looking for information on that technology. For example on WebVR interface pages we include **VR** and **Virtual reality**.### ブラウザーの互換性 To fill in the browser compat data, you first need to fill in an entry for the API into our [Browser compat data repo](https://github.com/mdn/browser-compat-data) — see our [guide on how to do this](/ja/docs/MDN/Contribute/Structures/Compatibility_tables#The_new_way_The_browser_compat_data_repo_and_dynamic_tables).Once that is done, you can show the compat data for the method with a \\{{Compat()}} macro call.

{{APIRef("GroupDataName")}}{{SeeCompatTable}}{{SecureContext_Header}}{{Deprecated_Header}}

The summary paragraph — start by naming the property, saying what interface it is part of, and saying what it does. This should ideally be 1 or 2 short sentences. You could copy most of this from the property's summary on the corresponding API reference page. Include whether it is read-only or not.

## 構文

    Fill in a syntax box, according to the guidance in our syntax sections article.

### 値

Include a description of the property's value, including data type and what it represents.

## 例

Fill in a simple example that nicely shows a typical usage of the property, then perhaps some more complex examples (see our guide on how to add [code examples](/ja/docs/MDN/Contribute/Structures/Code_examples) for more information).

```js
my code block
```

And/or include a list of links to useful code samples that live elsewhere:

- x
- y
- z

## 仕様書

| 仕様書                                                                                                                                                       | 状態                                         | 備考     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------- | -------- |
| {{SpecName("NameOfSpecification", "#document-fragment-linking-directly-to-property-definition", "NameOfTheProperty")}} | {{Spec2("NameOfSpecification")}} | 初回定義 |

## ブラウザーの互換性

{{Compat("path.to.feature.NameOfTheProperty")}}

## 関連情報

- Include list of
- other links related to
- this API that might
- be useful
