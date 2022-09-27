---
title: Element.matches()
slug: Web/API/Element/matches
---

{{APIRef("DOM")}}

**`matches()`** メソッドは、その要素 ({{domxref("Element")}}) が指定された `selectorString` によって選択されるかをチェックします。言い換えれば、要素「が」セレクターであることをチェックします。

## 構文

```
var result = element.matches(selectorString);
```

### 引数

`selectorString` は、テストするためのセレクターを表す文字列です。

### 返値

`result` は {{domxref("Boolean")}} です。

### 例外

- `SYNTAX_ERR`
  - : 指定されたセレクター文字列が無効である場合。

## 例

```html
<ul id="birds">
  <li>Orange-winged parrot</li>
  <li class="endangered">Philippine eagle</li>
  <li>Great white pelican</li>
</ul>

<script type="text/javascript">
  var birds = document.getElementsByTagName('li');

  for (var i = 0; i < birds.length; i++) {
    if (birds[i].matches('.endangered')) {
      console.log('The ' + birds[i].textContent + ' is endangered!');
    }
  }
</script>
```

要素が実際に値 `endangered` 持つ `class` 属性を持つので、これは、コンソールのログに "The Philippine eagle is endangered!" と表示されます。

## ポリフィル

`Element.matches()` や `Element.matchesSelector()` には対応していないが、 `document.querySelectorAll()` には対応しているブラウザーには、ポリフィルが存在します。

```js
if (!Element.prototype.matches) {
  Element.prototype.matches =
      Element.prototype.matchesSelector ||
      Element.prototype.mozMatchesSelector ||
      Element.prototype.msMatchesSelector ||
      Element.prototype.oMatchesSelector ||
      Element.prototype.webkitMatchesSelector ||
      function(s) {
        var matches = (this.document || this.ownerDocument).querySelectorAll(s),
            i = matches.length;
        while (--i >= 0 && matches.item(i) !== this) {}
        return i > -1;
      };
}
```

しかし、古いブラウザーに対応することの実用性を考えると、実用的なケース (言い換えると IE9 以降の対応) ではほとんどの場合 (全部ではない)、次のもので十分です。

```js
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.msMatchesSelector ||
                              Element.prototype.webkitMatchesSelector;
}
```

## 仕様書

| 仕様書                                                                                                   | 状態                             | 備考     |
| -------------------------------------------------------------------------------------------------------- | -------------------------------- | -------- |
| {{SpecName('DOM WHATWG', '#dom-element-matches', 'Element.prototype.matches')}} | {{Spec2('DOM WHATWG')}} | 初回定義 |

## ブラウザーの互換性

{{Compat}}

## 関連情報

- [セレクターの構文](/ja/docs/Web/Guide/CSS/Getting_started/Selectors)
- セレクターを使用するその他のメソッド: {{domxref("element.querySelector()")}} および {{domxref("element.closest()")}}
