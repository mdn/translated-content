---
title: API メソッドサブページのテンプレート
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_method_subpage_template
tags:
  - API
  - Method
  - Template
  - method subpage
  - reference page
translation_of: MDN/Structures/Page_types/API_method_subpage_template
original_slug: MDN/Structures/Page_types/API_method_subpage_template
---
{{MDNSidebar}}

> **Note:** ## 公開前に削除してください### タイトルとスラッグ API メソッドサブページの*タイトル*は、_インターフェイス名_ + "." + _メソッド名_ + "()" としてください。例えば、 [IDBIndex](/ja/docs/Web/API/IDBIndex) インターフェイスの [count()](/ja/docs/Web/API/IDBIndex/count) メソッドの*タイトル* は "IDBIndex.count()" です。_スラッグ_ (URL の最後の部分) は、*メソッド名*を括弧なして記述してください。ですから `count()` のスラッグは "count" です。### 先頭で使用するマクロ既定では、テンプレートの先頭に 4 つのマクロ呼び出しがあります。以下のアドバイスに従って、更新や削除をしてください。\* \\{{APIRef("<em>GroupDataName</em>")}} — this generates the left hand reference sidebar showing quick reference links related to the current page. For example, every page in the [WebVR API](/ja/docs/Web/API/WebVR_API) has the same sidebar, which points to the other pages in the API. To generate the correct sidebar for your API, you need to add a GroupData entry to our KumaScript GitHub repo, and include the entry's name inside the macro call in place of _GroupDataName_. See our [API reference sidebars](/ja/docs/MDN/Contribute/Structures/API_references/API_reference_sidebars) guide for information on how to do this.
>
> - \\{{SeeCompatTable}} — this generates a **This is an experimental technology** banner that indicates the technology is [experimental](/ja/docs/MDN/Contribute/Guidelines/Conventions_definitions#Experimental)). If the technology you are documenting is not experimental, you can remove this. If it is experimental, and the technology is hidden behind a pref in Firefox, you should also fill in an entry for it in the [Experimental features in Firefox](/ja/docs/Mozilla/Firefox/Experimental_features) page.
> - \\{{SecureContext_Header}} — this generates a **Secure context** banner that indicates the technology is only available in a [secure context](/ja/docs/Web/Security/Secure_Contexts). If it isn't, then you can remove the macro call. If it is, then you should also fill in an entry for it in the [Features restricted to secure contexts](/ja/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) page.
> - \\{{Deprecated_Header}} — this generates a **Deprecated** banner that indicates the technology is [deprecated](/ja/docs/MDN/Contribute/Guidelines/Conventions_definitions#Deprecated_and_obsolete). If it isn't, then you can remove the macro call.### タグ In an API method subpage, you need to include the following tags (see the _Tags_ section at the bottom of the editor UI): **API**, **Reference**, **Method**, _the name of the API_ (e.g. **WebVR**), the name of the parent interface (e.g. **IDBIndex**), the name of the method (e.g. **count()**), **Experimental** (if the technology is [experimental](/ja/docs/MDN/Contribute/Guidelines/Conventions_definitions#Experimental)), **Secure context** (if it is available in a secure context only), and **Deprecated** (if it is [deprecated](/ja/docs/MDN/Contribute/Guidelines/Conventions_definitions#Deprecated_and_obsolete)).Optionally, you can elect to include some other tags that effective represent terms people might search for when looking for information on that technology. For example on WebVR interface pages we include **VR** and **Virtual reality**.### ブラウザーの互換性 To fill in the browser compat data, you first need to fill in an entry for the API into our [Browser compat data repo](https://github.com/mdn/browser-compat-data) — see our [guide on how to do this](/ja/docs/MDN/Contribute/Structures/Compatibility_tables#The_new_way_The_browser_compat_data_repo_and_dynamic_tables).Once that is done, you can show the compat data for the method with a \\{{Compat()}} macro call.

{{APIRef("GroupDataName")}}{{SeeCompatTable}}{{SecureContext_header}}{{Deprecated_Header}}

The summary paragraph — start by naming the method, saying what interface it is part of, and saying what it does. This should ideally be 1 or 2 short sentences. You could copy most of this from the method's summary on the corresponding API reference page.

## 構文

    Fill in a syntax box, according to the guidance in our syntax sections article.

### 引数

- parameter1{{Optional_Inline}}
  - : Include a brief description of the parameter and what it does here. Include one term and definition for each parameter. If the parameter is not optional, remove the \\{{optional_inline}} macro call.
- parameter2
  - : etc.

### 返値

Include a description of the method's return value, including data type and what it represents. If the method doesn't return anything, just put "Void".

### 例外

- Exception1
  - : Include a list of all the exceptions that the method can raise, along with descriptions of how that exception is raised. Include one term and definition for each exception.
- Exception2
  - : etc.

## 例

Fill in a simple example that nicely shows a typical usage of the method, then perhaps some more complex examples (see our guide on how to add [code examples](/ja/docs/MDN/Contribute/Structures/Code_examples) for more information).

```js
my code block
```

And/or include a list of links to useful code samples that live elsewhere:

- x
- y
- z

## 仕様書

| 仕様書                                                                                                                                                                   | 状態                                                     | 備考     |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------- | -------- |
| {{SpecName("NameOfSpecificationfromSpecName", "#document-fragment-linking-directly-to-method-definition", "NameOfTheMethod")}} | {{Spec2("NameOfSpecificationFromSpec2")}} | 初回定義 |

## ブラウザーの互換性

{{Compat("path.to.feature.NameOfTheMethod")}}

## 関連情報

- Include list of
- other links related to
- this API that might
- be useful
