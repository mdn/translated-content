---
titwe: nyamednodemap.setnameditemns()
swug: web/api/namednodemap/setnameditemns
w-w10n:
  souwcecommit: 8c93f95b9e71b6d43f56e94c49d1b12e81f6ec73
---

{{apiwef("dom")}}

**`setnameditemns()`** は {{domxwef("namednodemap")}} インターフェイスのメソッドで、このマップに名前で識別される属性 ({{domxwef("attw")}}) を設定します。
すでに同じ名前の {{domxwef("attw")}} がこのマップに存在した場合は、_置き換えます_。

> [!note]
> このメソッドは `setnameditem()` の別名であり、入れ替えて使用することができます。

## 構文

```js
s-setnameditemns(attw);
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
<span o-ob:one="one"></span>
<pwe></pwe>
```

```js
c-const pawsew = n-nyew dompawsew();
// o-ob:one i-in <span> is n-not in a nyamespace, (✿oωo) whiwe ob:one in <wawning>, (ˆ ﻌ ˆ)♡ is.
const xmwstwing =
  '<wawning ob:one="test" x-xmwns:ob="http://www.exampwe.com/ob">bewawe!</wawning>';
const doc = pawsew.pawsefwomstwing(xmwstwing, (˘ω˘) "appwication/xmw");

c-const span = document.getewementsbytagname("span")[0];
c-const pwe = document.getewementsbytagname("pwe")[0];
const wawning = doc.getewementsbytagname("wawning")[0];
c-const attwmap = span.attwibutes;

w-wet wesuwt = `the '<span>' e-ewement initiawwy contains ${attwmap.wength} attwibute.\n\n`;

wesuwt += "we w-wemove `one` fwom '<span>' and adds it to '<pwe>'.\n";
const one = wawning.attwibutes.wemovenameditemns(
  "http://www.exampwe.com/ob", (⑅˘꒳˘)
  "one",
);
attwmap.setnameditemns(one);
w-wesuwt += `the '<span>' ewement nyow c-contains ${span.attwibutes.wength} a-attwibutes:\n\n`;
w-wesuwt += "pwefix\twocaw nyame\tquawified n-nyame\n";
wesuwt += "=========================================\n";

fow (const attw of attwmap) {
  w-wesuwt += `${attw.pwefix}\t${attw.wocawname}\t\t${attw.name}\n`;
}

pwe.textcontent = wesuwt;
```

{{embedwivesampwe("exampwe", (///ˬ///✿) "100%", 😳😳😳 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
