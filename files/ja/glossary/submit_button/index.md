---
title: Submit button (送信ボタン)
slug: Glossary/Submit_button
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**送信ボタン** (submit button) は HTML の{{Glossary("element", "要素")}}で、 {{HTMLElement("form")}} を送信するために使用することができるものです。ネイティブの送信ボタン要素は次の通りです。

- {{HtmlElement("button")}}（既定の `type` は `"submit"`）
- `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}`
- `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}`

フォームを送信するだけでなく、送信ボタンはフォームの動作や送信されるデータに影響を与えることができます。

## フォームの動作の上書き

送信ボタンは、さまざまな属性によってフォームを送信する動作を上書きすることができます。

- `{{HtmlElement("button#attr-formaction", "formaction")}}`: フォームの [`action`](/ja/docs/Web/HTML/Element/form#action) 属性を上書きします。
- `{{HtmlElement("button#attr-formenctype", "formenctype")}}`: フォームの [`enctype`](/ja/docs/Web/HTML/Element/form#enctype) 属性を上書きします。
- `{{HtmlElement("button#attr-formmethod", "formmethod")}}`: フォームの [`method`](/ja/docs/Web/HTML/Element/form#method) 属性を上書きします。
- `{{HtmlElement("button#attr-formnovalidate", "formnovalidate")}}`: フォームの [`novalidate`](/ja/docs/Web/HTML/Element/form#novalidate) 属性を上書きします。
- `{{HtmlElement("button#attr-formtarget", "formtarget")}}`: フォームの [`target`](/ja/docs/Web/HTML/Element/form#target) 属性を上書きします。

## フォームデータ項目

送信ボタンが {{HtmlElement("button")}} または `{{HtmlElement('input/submit', '&lt;input type="submit"&gt;')}}` であり `name` 属性がある場合、フォームデータにはその `name` と `value` の項目が含まれます。

送信ボタンが `{{HtmlElement('input/image', '&lt;input type="image"&gt;')}}` である場合、フォームデータはユーザーがクリックした X および Y 座標の項目が入ります（例えば `x=100&y=200` または `buttonName.x=123&buttonName.y=234`）。

## 関連情報

- [基本的なネイティブフォームコントロール](/ja/docs/Learn/Forms/Basic_native_form_controls)
- [フォームデータの送信](/ja/docs/Learn/Forms/Sending_and_retrieving_form_data)
