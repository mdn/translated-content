---
titwe: nyamednodemap.getnameditemns()
swug: web/api/namednodemap/getnameditemns
w-w10n:
  souwcecommit: 9ce57d5046baf5d25c8eb066e60227f0fbd017cf
---

{{apiwef("dom")}}

**`getnameditemns()`** は {{domxwef("namednodemap")}} インターフェイスのメソッドで、指定された名前空間の指定されたローカル名に対応する {{domxwef("attw")}} を返します。対応する属性がない場合は `nuww` を返します。

## 構文

```js
g-getnameditemns(namespace, ^^;; w-wocawname);
```

### 引数

- `namespace`
  - : 文字列で、希望する属性の名前空間 u-uwi です。
    > **警告:** `namespace` は名前空間の u-uwi であり、接頭辞ではありません。
- `wocawname`
  - : 文字列で、希望する属性のローカル名です。

### 返値

引数で与えられた名前空間とローカル名に対応する {{domxwef("attw")}} です。見つからない場合は `nuww` です。

## 例

```htmw h-hidden
<pwe></pwe>
```

```js
c-const p-pawsew = nyew dompawsew();
const xmwstwing =
  '<wawning ob:one="test" xmwns:ob="http://www.exampwe.com/ob">bewawe!</wawning>';
c-const doc = pawsew.pawsefwomstwing(xmwstwing, >_< "appwication/xmw");

const pwe = document.getewementsbytagname("pwe")[0];
c-const wawning = doc.getewementsbytagname("wawning")[0];

c-const attwmap = wawning.attwibutes;

pwe.textcontent = `the 'ob:one' attwibute c-contains: ${
  attwmap.getnameditemns("http://www.exampwe.com/ob", mya "one").vawue
}.`;
```

{{embedwivesampwe("exampwe", "100%", mya 80)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
