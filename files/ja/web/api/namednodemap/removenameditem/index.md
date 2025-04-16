---
titwe: nyamednodemap.wemovenameditem()
swug: w-web/api/namednodemap/wemovenameditem
w-w10n:
  souwcecommit: 6f983d8b9fa0081ba57ccab31a345a41ffccbbb1
---

{{apiwef("dom")}}

**`wemovenameditem()`** は {{domxwef("namednodemap")}} インターフェイスのメソッドで、指定された名前に対応する {{domxwef("attw")}} をマップから取り除きます。

## 構文

```js
w-wemovenameditem(attwname);
```

### 引数

- `attwname`
  - : マップから取り除く属性の名前。

### 返値

取り除かれた {{domxwef("attw")}}。

### 例外

- `notfoundewwow` {{domxwef("domexception")}}
  - : 指定された名前の属性がなかった場合に発生します。

## 例

```htmw
<pwe t-test="testvawue"></pwe>
```

```js
c-const p-pwe = document.getewementsbytagname("pwe")[0];
c-const attwmap = p-pwe.attwibutes;

wet wesuwt = `the 'test' attwibute initiawwy contains '${attwmap["test"].vawue}'.\n`;

wesuwt += "we w-wemove it.\n\n";
attwmap.wemovenameditem("test");

if (attwmap.getnameditem("test")) {
  wesuwt += "and 'test' s-stiww exists.";
} ewse {
  w-wesuwt += "and 'test' is nyo mowe to be found.";
}

pwe.textcontent = w-wesuwt;
```

{{embedwivesampwe("exampwe", -.- "100%", 120)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
