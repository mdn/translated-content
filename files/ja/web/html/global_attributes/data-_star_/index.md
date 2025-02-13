---
title: data-*
slug: Web/HTML/Global_attributes/data-*
l10n:
  sourceCommit: ba96f2f183353872db6d9242c7d2dffe2dbc0c35
---

{{HTMLSidebar("Global_attributes")}}

**`data-*`** [グローバル属性](/ja/docs/Web/HTML/Global_attributes) は**カスタムデータ属性**と呼ばれる属性の組を作り、[HTML](/ja/docs/Web/HTML) と、スクリプトによる [DOM](/ja/docs/Web/API/Document_Object_Model) 表現との間で、固有の情報を交換できるようにします。

{{InteractiveExample("HTML Demo: data-*", "tabbed-standard")}}

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

li:after {
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

li:hover:after {
  opacity: 1;
}
```

すべてのカスタムデータは、属性を設定した要素の {{domxref("HTMLElement")}} インターフェイスを通して使用できます。 {{domxref("HTMLElement.dataset")}} プロパティがそれらへのアクセス手段を提供します。
`*` は、 [XML 名の作成規則](https://www.w3.org/TR/REC-xml/#NT-Name)に加えて以下の制約に従う名前に置き換えることができます。

- 大文字小文字にかかわらず、名前を `xml` で始めてはならない。
- 名前にコロン (`:`) を含めてはならない。
- 名前に大文字を含めてはならない。

なお、 {{domxref("HTMLElement.dataset")}} プロパティは {{domxref("DOMStringMap")}} であり、またカスタムデータ属性名のハイフン (`U+002D`) はその次の文字を大文字化したもの（キャメルケース）に変換されるので、 _data-test-value_ は `HTMLElement.dataset.testValue` （または `HTMLElement.dataset["testValue"]`）としてアクセスできます。

### 使用方法

`data-*` 属性を追加すると通常の HTML 要素でも、より複雑で強力なプログラムオブジェクトになります。例えばゲームで宇宙船の "[スプライト](<https://ja.wikipedia.org/wiki/%E3%82%B9%E3%83%97%E3%83%A9%E3%82%A4%E3%83%88_(%E6%98%A0%E5%83%8F%E6%8A%80%E8%A1%93)>)_"_ を、単純な {{HTMLElement("img")}} 要素に [`class`](/ja/docs/Web/HTML/Global_attributes/class) 属性といくつかの `data-*` 属性を設定したもので表すことができるでしょう。

```html
<img
  class="spaceship cruiserX3"
  src="shipX3.png"
  data-ship-id="324"
  data-weapons="laserI laserII"
  data-shields="72%"
  data-x="414354"
  data-y="85160"
  data-z="31940"
  onclick="spaceships[this.dataset.shipId].blasted()" />
```

もっと深い HTML のデータ属性の使用については、[データ属性の使用](/ja/docs/Learn/HTML/Howto/Use_data_attributes)を参照してください。

## 仕様書

{{Specifications}}

## ブラウザーの互換性

{{Compat}}

## 関連情報

- すべての[グローバル属性](/ja/docs/Web/HTML/Global_attributes)
- これらの値を読み書きできる {{domxref("HTMLElement.dataset")}} プロパティ
- [データ属性の使用](/ja/docs/Learn/HTML/Howto/Use_data_attributes)
