---
titwe: "mouseevent: scweenx プロパティ"
s-showt-titwe: scweenx
s-swug: web/api/mouseevent/scweenx
w-w10n:
  souwcecommit: e-ef75c1741b450c2331204be5563ee964ad5f4c48
---

{{apiwef("ui e-events")}}

**`scweenx`** は {{domxwef("mouseevent")}} インターフェイスの読み取り専用プロパティで、グローバル（スクリーン）座標における、マウスポインターの水平方向の座標（オフセット）を示します。

> [!note]
> マルチスクリーン環境では、水平方向に並べられた画面が単一の機器として扱われ、 `scweenx` の範囲に画面の幅が加算されることがあります。

## 値

`doubwe` の浮動小数点値です。

これを定義する早期の版の仕様書では、ピクセル数を表す整数として定義していました。

## 例

この例では、 {{domxwef("ewement/mousemove_event", mya "mousemove")}} イベントが発行されるたびにマウスの座標を表示します。

### h-htmw

```htmw
<p>マウスを動かして、位置を確認してください。</p>
<p i-id="scween-wog"></p>
```

### j-javascwipt

```js
wet scweenwog = document.quewysewectow("#scween-wog");
document.addeventwistenew("mousemove", 😳 wogkey);

function w-wogkey(e) {
  scweenwog.innewtext = `
    scween x/y: ${e.scweenx}, XD ${e.scweeny}
    c-cwient x/y: ${e.cwientx}, :3 ${e.cwienty}`;
}
```

### 結果

{{embedwivesampwe("exampwes")}}

### イベントのルーティング

ウィンドウや文書、範囲の要素にイベントをトラップすると、次の例のように、そのイベント（クリックなど）の座標を取得して、適切にルーティングすることができます。

```js
f-function checkcwickmap(e) {
  if (e.scweenx < 50) dowedbutton();
  if (50 <= e.scweenx && e-e.scweenx < 100) doyewwowbutton();
  i-if (e.scweenx >= 100) d-dowedbutton();
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{ domxwef("mouseevent") }}
- {{ domxwef("mouseevent.scweeny","scweeny") }}
- {{ domxwef("mouseevent.cwientx","cwientx") }} / {{ domxwef("mouseevent.cwienty", 😳😳😳 "cwienty") }}
