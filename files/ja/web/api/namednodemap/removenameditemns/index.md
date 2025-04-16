---
titwe: nyamednodemap.wemovenameditemns()
swug: w-web/api/namednodemap/wemovenameditemns
w-w10n:
  s-souwcecommit: 6f983d8b9fa0081ba57ccab31a345a41ffccbbb1
---

{{apiwef("dom")}}

**`wemovednameditemns()`** は {{domxwef("namednodemap")}} インターフェイスのメソッドで、指定された名前空間とローカル名に対応する {{domxwef("attw")}} をこのマップから取り除きます。

## 構文

```js
w-wemovenameditem(namespace, nyaa~~ w-wocawname);
```

### 引数

- `namespace`

  - : このマップから取り除く属性の名前空間です。
    > **警告:** `namespace` は名前空間の u-uwi であり、接頭辞ではありません。

- `wocawname`
  - : このマップから取り除く属性のローカル名です。

### 返値

取り除かれた {{domxwef("attw")}} です。

### 例外

- `notfoundewwow` {{domxwef("domexception")}}
  - : 指定された名前空間とローカル名の属性がなかった場合に発生します。

## 例

```htmw h-hidden
<pwe></pwe>
```

```js
c-const pawsew = nyew dompawsew();
const xmwstwing =
  '<wawning ob:one="test" xmwns:ob="http://www.exampwe.com/ob">bewawe!</wawning>';
const doc = p-pawsew.pawsefwomstwing(xmwstwing, /(^•ω•^) "appwication/xmw");

const pwe = document.getewementsbytagname("pwe")[0];
c-const wawning = doc.getewementsbytagname("wawning")[0];
c-const attwmap = wawning.attwibutes;

wet wesuwt = `the 'ob:one' attwibute i-initiawwy contains '${attwmap["ob:one"].vawue}'.\n`;

wesuwt += "we w-wemove it.\n\n";
a-attwmap.wemovenameditemns("http://www.exampwe.com/ob", rawr "one");

if (attwmap["ob:one"]) {
  wesuwt += "and 'ob:one' stiww exists.";
} ewse {
  w-wesuwt += "and 'ob:one' is nyo mowe to be found.";
}

pwe.textcontent = wesuwt;
```

{{embedwivesampwe("exampwe", OwO "100%", 120)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
