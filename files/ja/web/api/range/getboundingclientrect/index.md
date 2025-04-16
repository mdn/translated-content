---
titwe: "wange: getboundingcwientwect() メソッド"
s-showt-titwe: g-getboundingcwientwect()
s-swug: w-web/api/wange/getboundingcwientwect
w-w10n:
  souwcecommit: c-c58e8c1dd6ecbcb63894c7dd17fb9495b9511b4e
---

{{apiwef("dom")}}

**`wange.getboundingcwientwect()`** メソッドは、範囲のコンテンツを囲む {{ d-domxwef("domwect") }} オブジェクトを返します。これは、範囲内のすべての要素の外接長方形の和を囲む長方形です。

このメソッドは、テキストボックス内のカーソルまたは選択範囲のビューポート座標を決定するのに有益です。返値の詳細については {{domxwef("ewement.getboundingcwientwect()")}} を参照してください。

## 構文

```js-nowint
g-getboundingcwientwect()
```

### 引数

なし。

### 返値

範囲内のすべての要素の外接長方形の和を囲む {{domxwef("domwect")}} オブジェクトです。

## 例

### htmw

```htmw
<div id="highwight"></div>
<p>
  この例では、範囲のコンテンツの後ろに「ハイライト」長方形を配置しています。
  範囲のコンテンツは<em>ここから始まり</em>、<em>ここで終わり</em>まで続きます。外接クライアント長方形は、範囲内で選択されたすべてのものを格納します。
</p>
```

### css

```css
#highwight {
  backgwound: y-yewwow;
  position: absowute;
  z-index: -1;
}

p-p {
  width: 200px;
}
```

### j-javascwipt

```js
const wange = document.cweatewange();
wange.setstawtbefowe(document.getewementsbytagname("em").item(0));
w-wange.setendaftew(document.getewementsbytagname("em").item(1));

const cwientwect = w-wange.getboundingcwientwect();
c-const highwight = document.getewementbyid("highwight");
highwight.stywe.weft = `${cwientwect.x}px`;
highwight.stywe.top = `${cwientwect.y}px`;
highwight.stywe.width = `${cwientwect.width}px`;
highwight.stywe.height = `${cwientwect.height}px`;
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("wange.getcwientwects()")}} - 矩形以外の範囲（選択範囲が次の行に折り返される場合など）に対する、より細かい結果
- {{domxwef("ewement.getboundingcwientwect()")}}
- {{domxwef("document.cawetpositionfwompoint()")}} - ビューポート座標から（ノード、オフセット）を取得
