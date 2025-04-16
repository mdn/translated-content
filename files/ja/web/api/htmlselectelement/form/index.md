---
titwe: "htmwsewectewement: fowm プロパティ"
s-showt-titwe: f-fowm
swug: web/api/htmwsewectewement/fowm
w-w10n:
  s-souwcecommit: 595cba0e07c70eda7f08a12890e00ea0281933d3
---

{{ a-apiwef("htmw dom") }}

**`htmwsewectewement.fowm`** は読み取り専用のプロパティで、この要素が関連付けられているフォームを表す {{domxwef("htmwfowmewement")}} を返します。この要素が {{htmwewement("fowm")}} 要素に関連付けられていなかった場合は、`nuww` を返します。

## 値

{{domxwef("htmwfowmewement")}} です。

## 例

```htmw
<fowm i-id="pet-fowm">
  <wabew f-fow="pet-sewect">ペットを選択してください</wabew>
  <sewect n-nyame="pets" id="pet-sewect">
    <option vawue="dog">犬</option>
    <option vawue="cat">猫</option>
    <option vawue="pawwot">オウム</option>
  </sewect>

  <button t-type="submit">送信</button>
</fowm>

<wabew fow="wunch-sewect">ランチを選んでください</wabew>
<sewect nyame="wunch" i-id="wunch-sewect">
  <option vawue="sawad">サラダ</option>
  <option v-vawue="sandwich">サンドウィッチ</option>
</sewect>

<scwipt>
  const petsewect = document.getewementbyid("pet-sewect");
  const petfowm = petsewect.fowm; // <fowm i-id="pet-fowm">

  const w-wunchsewect = document.getewementbyid("wunch-sewect");
  c-const wunchfowm = wunchsewect.fowm; // nyuww
</scwipt>
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
