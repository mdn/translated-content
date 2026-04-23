---
title: HTML data-* グローバル属性
short-title: data-*
slug: Web/HTML/Reference/Global_attributes/data-*
l10n:
  sourceCommit: 0754cd805a8e010d2e3a2a065f634a3bcf358252
---

**`data-*`** [グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes) は**カスタムデータ属性**と呼ばれる種類の属性を作り、[HTML](/ja/docs/Web/HTML) と、スクリプトによる [DOM](/ja/docs/Web/API/Document_Object_Model) 表現との間で、固有の情報を交換できるようにします。

{{InteractiveExample("HTML デモ: data-*", "tabbed-standard")}}

```html interactive-example
<h1>Secret agents</h1>

<ul>
  <li data-id="10784">Jason Walters, 003: Found dead in "A View to a Kill".</li>
  <li data-id="97865">
    Alex Trevelyan, 006: Agent turned terrorist leader; James' nemesis in
    "Goldeneye".
  </li>
  <li data-id="45732">
    James Bond, 007: The main man; shaken but not stirred.
  </li>
</ul>
```

```css interactive-example
h1 {
  margin: 0;
}

ul {
  margin: 10px 0 0;
}

li {
  position: relative;
  width: 200px;
  padding-bottom: 10px;
}

li::after {
  content: "Data ID: " attr(data-id);
  position: absolute;
  top: -22px;
  left: 10px;
  background: black;
  color: white;
  padding: 2px;
  border: 1px solid #eee;
  opacity: 0;
  transition: 0.5s opacity;
}

li:hover::after {
  opacity: 1;
}
```

すべてのカスタムデータは、属性を設定した要素の {{domxref("HTMLElement")}} インターフェイスを通して使用できます。 {{domxref("HTMLElement.dataset")}} プロパティがそれらへのアクセス手段を提供します。
`*` は、 [XML 名の作成規則](https://www.w3.org/TR/xml/#NT-Name)に加えて以下の推奨事項に従う名前に置き換えることができます。

- 大文字小文字にかかわらず、名前を `xml` で始めてはならない（将来の XML 仕様で予約されているため）。
- 名前にコロン (`:`) を含めてはならない（XML ではそのような名前に意味を割り当てているため）。
- 名前に大文字を含めてはならない（XML はすべて小文字であるため）。

これらは推奨事項です。これらの命名に関する推奨事項に従わなくても、エラーは発生しません。属性は、CSS の[属性セレクター](/ja/docs/Web/CSS/Reference/Selectors/Attribute_selectors)を使用して照合され、属性は大文字と小文字を区別せず、属性値は区別されます。この 3 つの推奨事項に適合しない属性も、JavaScript の {{domxref("HTMLElement.dataset")}} プロパティによって認識され、ユーザーエージェントは、{{domxref("HTMLElement")}} のすべての独自のデータ属性を格納する {{domxref("DOMStringMap")}} にその属性を記載します。

{{domxref("HTMLElement.dataset")}} を使用する場合、`data-` に続く属性名には、JavaScript プロパティ名で使用できる文字（およびハイフン、これは除去されます）のみを含めることができます。属性名の `dataset` バージョンでは、 "data-" という接頭辞が除去され、残りの名前は{{Glossary("kebab_case", "ケバブケース")}}からキャメルケースに変換されます。例えば、 `element.getAttribute("data-test")` は `element.dataset.test` と同等であり、 `data-test-abc` は `HTMLElement.dataset.testAbc` （または `HTMLElement.dataset["testAbc"]`）としてアクセスできます。ハイフンの後にアルファベット以外の文字が続く `data-test-1` や `data--test` は、{{domxref("HTMLElement.dataset")}} によって認識されないため、避けるようにしてください。

### 使い方

`data-*` 属性を追加すると通常の HTML 要素でも、より複雑で強力なプログラムオブジェクトになります。例えばゲームで宇宙船の "[スプライト](<https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%97%E3%83%A9%E3%82%A4%E3%83%88_(%E6%98%A0%E5%83%8F%E6%8A%80%E8%A1%93)>)" を、単純な {{HTMLElement("img")}} 要素に [`class`](/ja/docs/Web/HTML/Reference/Global_attributes/class) 属性といくつかの `data-*` 属性を設定したもので表すことができるでしょう。

```html
<img
  class="spaceship cruiserX3"
  src="shipX3.png"
  data-ship-id="324"
  data-weapons="laserI laserII"
  data-shields="72%"
  data-x="414354"
  data-y="85160"
  data-z="31940" />
```

```js
function clickSpaceship() {
  spaceships[this.dataset.shipId].blasted();
}

document.querySelectorAll("img.spaceship").forEach((ship) => {
  ship.addEventListener("click", clickSpaceship);
});
```

もっと深い HTML のデータ属性の使用については、[データ属性の使用](/ja/docs/Web/HTML/How_to/Use_data_attributes)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/HTML/Reference/Global_attributes)
- これらの値を読み書きできる {{domxref("HTMLElement.dataset")}} プロパティ
- [データ属性の使用](/ja/docs/Web/HTML/How_to/Use_data_attributes)
