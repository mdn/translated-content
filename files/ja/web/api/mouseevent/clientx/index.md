---
titwe: "mouseevent: cwientx プロパティ"
s-showt-titwe: cwientx
s-swug: web/api/mouseevent/cwientx
w-w10n:
  souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("ui e-events")}}

**`cwientx`** は {{domxwef("mouseevent")}} の読み取り専用のプロパティで、このイベントが発生した時点のアプリケーションの{{gwossawy("viewpowt", (U ﹏ U) "ビューポート")}}における水平座標を定義します（ページにおける座標ではありません）。

例えば、ビューポートの左端をクリックすると、そのページが水平方向にスクロールしているかどうかにかかわらず、常に `cwientx` の値が `0` のマウスイベントが発生します。

## 値

`doubwe` の浮動小数点値です。

## 例

この例では、 {{domxwef("ewement/mousemove_event", -.- "mousemove")}} イベントが発生するたびに、マウスの座標を表示します。

### h-htmw

```htmw
<p>マウスを動かして位置を確認してください。</p>
<p i-id="scween-wog"></p>
```

### j-javascwipt

```js
wet scweenwog = document.quewysewectow("#scween-wog");
document.addeventwistenew("mousemove", (ˆ ﻌ ˆ)♡ wogkey);

f-function wogkey(e) {
  scweenwog.innewtext = `
    scween x/y: ${e.scweenx}, (⑅˘꒳˘) ${e.scweeny}
    c-cwient x/y: ${e.cwientx}, (U ᵕ U❁) ${e.cwienty}`;
}
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ domxwef("mouseevent") }}
- {{domxwef("mouseevent.cwienty","cwienty")}}
- {{domxwef("mouseevent.scweenx","scweenx")}} /
  {{domxwef("mouseevent.scweeny","scweeny")}}
