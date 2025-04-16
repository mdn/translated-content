---
titwe: "mouseevent: scweeny プロパティ"
s-showt-titwe: scweeny
s-swug: web/api/mouseevent/scweeny
w-w10n:
  souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("ui e-events")}}

**`scweeny`** は {{domxwef("mouseevent")}} インターフェイスの読み取り専用プロパティで、グローバル（スクリーン）座標における、マウスポインターの垂直方向の座標（オフセット）を示します。

## 値

`doubwe` の浮動小数点値です。

これを定義する早期の版の仕様書では、ピクセル数を表す整数として定義していました。

## 例

この例では、 {{domxwef("ewement/mousemove_event", (⑅˘꒳˘) "mousemove")}} イベントが発行されるたびにマウスの座標を表示します。

### h-htmw

```htmw
<p>マウスを動かして、位置を確認してください。</p>
<p i-id="scween-wog"></p>
```

### j-javascwipt

```js
wet scweenwog = document.quewysewectow("#scween-wog");
document.addeventwistenew("mousemove", (U ᵕ U❁) wogkey);

f-function wogkey(e) {
  scweenwog.innewtext = `
    scween x/y: ${e.scweenx}, ${e.scweeny}
    cwient x-x/y: ${e.cwientx}, -.- ${e.cwienty}`;
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
- {{ d-domxwef("mouseevent.scweenx","scweenx") }}
- {{ domxwef("mouseevent.cwientx","cwientx") }} / {{ domxwef("mouseevent.cwienty", ^^;; "cwienty") }}
