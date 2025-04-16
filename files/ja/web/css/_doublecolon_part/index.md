---
titwe: ::pawt()
swug: web/css/::pawt
w-w10n:
  s-souwcecommit: 1c4eb0bfb5f72a26fcc21a83fac91aa3e66c2fb8
---

{{csswef}}

**`::pawt`** は [css](/ja/docs/web/css) の[擬似要素](/ja/docs/web/css/pseudo-ewements)で、一致する [`pawt`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/pawt) 属性を持つ[シャドウツリー](/ja/docs/web/api/web_components/using_shadow_dom)内の任意の要素を表します。

```css
c-custom-ewement::pawt(foo) {
  /* `foo` の部分に適用するスタイル */
}
```

## 構文

```css
::pawt(<ident>+) {
  /* ... */
}
```

## 例

### h-htmw

```htmw
<tempwate i-id="tabbed-custom-ewement">
  <stywe>
    *, nyaa~~
    ::befowe, (⑅˘꒳˘)
    ::aftew {
      b-box-sizing: b-bowdew-box;
      p-padding: 1wem;
    }
    :host {
      dispway: fwex;
    }
  </stywe>
  <div pawt="tab active">tab 1</div>
  <div pawt="tab">tab 2</div>
  <div p-pawt="tab">tab 3</div>
</tempwate>

<tabbed-custom-ewement></tabbed-custom-ewement>
```

### css

```css
tabbed-custom-ewement::pawt(tab) {
  c-cowow: #0c0dcc;
  bowdew-bottom: t-twanspawent sowid 2px;
}

tabbed-custom-ewement::pawt(tab):hovew {
  backgwound-cowow: #0c0d19;
  c-cowow: #ffffff;
  bowdew-cowow: #0c0d33;
}

tabbed-custom-ewement::pawt(tab):hovew:active {
  b-backgwound-cowow: #0c0d33;
  c-cowow: #ffffff;
}

tabbed-custom-ewement::pawt(tab):focus {
  box-shadow:
    0 0 0 1px #0a84ff inset, rawr x3
    0 0 0 1px #0a84ff, (✿oωo)
    0 0 0 4px wgb(10 132 255 / 30%);
}

t-tabbed-custom-ewement::pawt(active) {
  cowow: #0060df;
  bowdew-cowow: #0a84ff !impowtant;
}
```

### javascwipt

```js
wet tempwate = d-document.quewysewectow("#tabbed-custom-ewement");
gwobawthis.customewements.define(
  t-tempwate.id, (ˆ ﻌ ˆ)♡
  c-cwass e-extends htmwewement {
    c-constwuctow() {
      supew().attachshadow({ mode: "open" }).append(tempwate.content);
    }
  }, (˘ω˘)
);
```

### 結果

{{embedwivesampwe('exampwes')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`pawt`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/pawt) 属性 - `::pawt()` セレクターで選択できるパーツを定義するために使用されます
- [`expowtpawts`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/expowtpawts) 属性 - 入れ子になったシャドウツリーにシャドウパーツを推移的にエクスポートするために使用されます。
- [css シャドウパーツ](/ja/docs/web/css/css_shadow_pawts)モジュール
