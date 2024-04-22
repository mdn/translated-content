---
title: Element (要素)
slug: Glossary/Element
l10n:
  sourceCommit: 4a9f9d2e9c1811ce3519a7061e906db9200a5e97
---

{{GlossarySidebar}}

**要素** (element) はウェブページの一部分です。 {{Glossary("XML")}} と {{Glossary("HTML")}} では、要素はデータ項目やテキストのかたまりや画像を含んだり、何も含まなかったりします。ふつうは要素は {{Glossary("attribute", "属性")}} (attribute) つきの開始タグ (opening tag) と、囲まれたテキストコンテンツと、閉じタグ (closing tag) を含んでいます。

![例: <p class="nice">Hello world!</p> においては、 '<p class="nice">' が開始タグで、 'class="nice"' が属性とその値で、 'Hello world!' が囲まれたテキストコンテンツで、 '</p>' が閉じタグです。](anatomy-of-an-html-element.png)

要素と{{glossary("tag", "タグ")}}は同じでは*ありません*。タグはソースコード内で要素を開始させたり終了させたりするのに対し、要素は {{Glossary("DOM")}} 、つまり{{Glossary("browser", "ブラウザー")}}に表示する文書モデルの一部分です。

## 関連情報

- [HTML を始めよう](/ja/docs/Learn/HTML/Introduction_to_HTML/Getting_started)
- [カスタム要素の定義](/ja/docs/Web/API/Web_components/Using_custom_elements)
- DOM の中で要素を表現する{{domxref("Element")}} インターフェイス
