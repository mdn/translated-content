---
title: API イベントサブページのテンプレート
slug: MDN/Writing_guidelines/Page_structures/Page_types/API_event_subpage_template
tags:
  - API
  - Event
  - Event subpage
  - Template
  - reference page
translation_of: MDN/Structures/Page_types/API_event_subpage_template
original_slug: MDN/Structures/Page_types/API_event_subpage_template
---
{{MDNSidebar}}

> **Note:** ## 公開前に削除してください### タイトルとスラッグ API イベントサブページの*タイトル*は、 *所属するインターフェイス名 + ": " + イベント名 + " イベント"*としてください。例えば、 [vrdisplaypresentchange](/ja/docs/Web/API/Window/vrdisplaypresentchange_event) イベントが [Window](/ja/docs/Web/API/Window) インターフェイスに所属している場合は、*タイトル*は *Window: vrdisplaypresentchange イベント*となります。_スラッグ_ (URL の最後の部分) は、_イベント名 + "\_event"_ としてください。したがって、 `vrdisplaypresentchange` のスラッグは _vrdisplaypresentchange_event_ です。### 先頭で使用するマクロ既定では、テンプレートの先頭に 4 つのマクロ呼び出しがあります。以下のアドバイスに従って、更新や削除をしてください。\* \\{{SeeCompatTable}} — this generates a **This is an experimental technology** banner that indicates the technology is [experimental](/ja/docs/MDN/Contribute/Guidelines/Conventions_definitions#Experimental)). If the technology you are documenting is not experimental, you can remove this. If it is experimental, and the technology is hidden behind a pref in Firefox, you should also fill in an entry for it in the [Experimental features in Firefox](/ja/docs/Mozilla/Firefox/Experimental_features) page.
>
> - \\{{securecontext_header}} — this generates a **Secure context** banner that indicates the technology is only available in a [secure context](/ja/docs/Web/Security/Secure_Contexts). If it isn't, then you can remove the macro call. If it is, then you should also fill in an entry for it in the [Features restricted to secure contexts](/ja/docs/Web/Security/Secure_Contexts/features_restricted_to_secure_contexts) page.
> - \\{{deprecated_header}} — this generates a **Deprecated** banner that indicates the technology is [deprecated](/ja/docs/MDN/Contribute/Guidelines/Conventions_definitions#Deprecated_and_obsolete). If it isn't, then you can remove the macro call.
> - \\{{APIRef("<em>GroupDataName</em>")}} — this generates the left hand reference sidebar showing quick reference links related to the current page. For example, every page in the [WebVR API](/ja/docs/Web/API/WebVR_API) has the same sidebar, which points to the other pages in the API. To generate the correct sidebar for your API, you need to add a GroupData entry to our KumaScript GitHub repo, and include the entry's name inside the macro call in place of _GroupDataName_. See our [API reference sidebars](/ja/docs/MDN/Contribute/Structures/API_references/API_reference_sidebars) guide for information on how to do this.### タグ In an API event subpage, you need to include the following tags (see the _Tags_ section at the bottom of the editor UI): **API**, **Reference**, **Event**, _the name of the API_ (e.g. **WebVR**), the name of the parent interface (e.g. **Window**), **Experimental** (if the technology is [experimental](/ja/docs/MDN/Contribute/Guidelines/Conventions_definitions#Experimental)), **Secure context** (if it is available in a secure context only), and **Deprecated** (if it is [deprecated](/ja/docs/MDN/Contribute/Guidelines/Conventions_definitions#Deprecated_and_obsolete)).Optionally, you can elect to include some other tags that effective represent terms people might search for when looking for information on that technology. For example on WebVR interface pages we include **VR** and **Virtual reality**.### ブラウザーの互換性 To fill in the browser compat data, you first need to fill in an entry for the API into our [Browser compat data repo](https://github.com/mdn/browser-compat-data) — see our [guide on how to do this](/ja/docs/MDN/Contribute/Structures/Compatibility_tables#The_new_way_The_browser_compat_data_repo_and_dynamic_tables).Once that is done, you can show the compat data for the method with a \\{{Compat()}} macro call.

{{SeeCompatTable}}{{securecontext_header}}{{deprecated_header}}{{APIRef("GroupDataName")}}

The summary paragraph — start by naming the event, saying what interface it is part of, and saying what it does. This should ideally be 1 or 2 short sentences. You could copy most of this from the property's summary on the corresponding API reference page.

| バブリング                   | あり/なし                                                                                                                                                                 |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| キャンセル                   | 可/不可                                                                                                                                                                   |
| インターフェイス             | イベントが発生する親インターフェイスへのリンクです。例えば {{domxref("VRDisplayEvent")}}                                                                       |
| イベントハンドラープロパティ | イベントに対応するイベントハンドラープロパティへのリンクです。例えば {{domxref("Window/onvrdisplaypresentchange", "onvrdisplaypresentchange")}} |

## 例

Fill in a simple example that nicely shows a typical usage of the event, then perhaps some more complex examples (see our guide on how to add [code examples](/ja/docs/MDN/Contribute/Structures/Code_examples) for more information).

```js
my code block
```

And/or include a list of links to useful code samples that live elsewhere:

- x
- y
- z

## 仕様書

| 仕様書                                                                                                                                                               | 状態                                                     | 備考     |
| -------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------- | -------- |
| {{SpecName("NameOfSpecificationfromSpecName","#document-fragment-linking-directly-to-event-definition","NameOfTheEvent")}} | {{Spec2('NameOfSpecificationFromSpec2')}} | 初回定義 |

## ブラウザーの互換性

{{Compat("path.to.feature.NameOfTheEvent_event")}}

## 関連情報

- Include list of
- other links related to
- this API that might
- be useful
