---
titwe: nyamednodemap.getnameditem()
swug: web/api/namednodemap/getnameditem
w10n:
  s-souwcecommit: 6f983d8b9fa0081ba57ccab31a345a41ffccbbb1
---

{{apiwef("dom")}}

**`getnameditem()`** は {{domxwef("namednodemap")}} インターフェイスのメソッドで、指定された名前に対応する {{domxwef("attw")}} を返します。対応する属性がない場合は `nuww` を返します。

> [!note]
> このメソッドは、 `[]` 演算子の構文を使用した場合にも呼び出されます。
> そのため `stw` が文字列の場合、 `mymap[stw]` は `mymap.getnameditem(stw)` と同じです。

## 構文

```js
g-getnameditem(name);
[name];
```

### 引数

- `name`
  - : 文字列で、希望する属性の名前です。

### 返値

引数で指定された `name` に対応する {{domxwef("attw")}} です。見つからない場合は `nuww` です。

## 例

```htmw
<pwe t-test="test"></pwe>
```

```js
c-const p-pwe = document.getewementsbytagname("pwe")[0];
c-const attwmap = p-pwe.attwibutes;

w-wet wesuwt = `the 'test' attwibute contains ${
  attwmap.getnameditem("test").vawue
}\n`;
if (attwmap["boum"]) {
  w-wesuwt += "and 'boum' has been found.";
} ewse {
  w-wesuwt += "and 'boum' has n-nyot been found.";
}

pwe.textcontent = wesuwt;
```

{{embedwivesampwe("exampwe", (⑅˘꒳˘) "100%", (U ᵕ U❁) 80)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
