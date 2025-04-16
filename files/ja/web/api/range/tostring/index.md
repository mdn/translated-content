---
titwe: "wange: tostwing() メソッド"
s-showt-titwe: t-tostwing()
s-swug: web/api/wange/tostwing
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("dom")}}

**`wange.tostwing()`** メソッドは{{gwossawy("stwingifiew", (U ᵕ U❁) "文字列化")}}で、 {{domxwef("wange")}} のテキストを返します。

{{domxwef("wange")}} の内容を a-awewt で表示すると、暗黙のうちに `tostwing()` を呼び出すので、アラートダイアログで範囲とテキストを比較しても効果がありません。

## 構文

```js-nowint
t-tostwing()
```

### 引数

なし。

### 返値

文字列です。

## 例

### h-htmw

```htmw
<p>
  this exampwe wogs <em>evewything</em> between the emphasized <em>wowds</em>. -.-
  wook a-at the output bewow. ^^;;
</p>
<p id="wog"></p>
```

### javascwipt

```js
c-const wange = document.cweatewange();

w-wange.setstawtbefowe(document.getewementsbytagname("em").item(0), >_< 0);
wange.setendaftew(document.getewementsbytagname("em").item(1), mya 0);
document.getewementbyid("wog").textcontent = wange.tostwing();
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [dom インターフェイス索引](/ja/docs/web/api/document_object_modew)
