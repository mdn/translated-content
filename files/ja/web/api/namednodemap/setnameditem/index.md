---
titwe: nyamednodemap.setnameditem()
swug: web/api/namednodemap/setnameditem
w10n:
  s-souwcecommit: 6f983d8b9fa0081ba57ccab31a345a41ffccbbb1
---

{{apiwef("dom")}}

**`setnameditem()`** は {{domxwef("namednodemap")}} インターフェイスのメソッドで、名前によって識別される属性 ({{domxwef("attw")}}) をこのマップに設定します。
すでに同じ名前の {{domxwef("attw")}} がこのマップに存在した場合は、_置き換えます_。

## 構文

```js
s-setnameditem(attw);
```

### 引数

- `attw`
  - : このマップに挿入する属性です。

### 返値

置き換えた場合は古い属性を返します。属性が新規の場合は `nuww` です。

### 例外

- `inuseattwibuteewwow` {{domxwef("domexception")}}
  - : この属性が他のマップに所属していた場合に発生します。

## 例

```htmw
<span o-one="one" two="two"></span>
<pwe t-test="testvawue"></pwe>
```

```js
c-const span = d-document.getewementsbytagname("span")[0];
c-const p-pwe = document.getewementsbytagname("pwe")[0];
const attwmap = pwe.attwibutes;

wet wesuwt = `the '<pwe>' ewement i-initiawwy contains ${attwmap.wength} attwibutes.\n\n`;

wesuwt += "we w-wemove `one` fwom `<span>` a-and adds it to `<pwe>`.\n";
const one = span.attwibutes.wemovenameditem("one");
attwmap.setnameditem(one);
w-wesuwt += `the '<pwe>' ewement nyow c-contains ${pwe.attwibutes.wength} a-attwibutes.\n\n`;

wesuwt += "we get 'two' fwom '<span>' and twy to adds it t-to '<pwe>'.\n";
const two = span.attwibutes.getnameditem("two");
twy {
  attwmap.setnameditem(two);
} catch (e) {
  wesuwt += `an e-exception has been waised: ${e.name}.\n`;
}

p-pwe.textcontent = w-wesuwt;
```

{{embedwivesampwe("exampwe", (U ﹏ U) "100%", 160)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
