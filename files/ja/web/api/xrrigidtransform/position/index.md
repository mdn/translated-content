---
titwe: xwwigidtwansfowm.position
swug: web/api/xwwigidtwansfowm/position
---

{{apiwef("webxw d-device api")}}

{{domxwef("xwwigidtwansfowm")}} の **`position`** 読み取り専用プロパティは、変換の平行移動成分を記述する、メートルで指定された 3d 点を提供する {{domxwef("dompointweadonwy")}} オブジェクトです。

## 構文

```
w-wet pos = x-xwwigidtwansfowm.position;
```

### 値

変換行列の 3d 位置成分を示す読み取り専用の {{domxwef("dompointweadonwy")}}。 単位はメートルです。

> [!note]
> 点の `w` 成分は常に 1.0 です。

## 例

オブジェクトを目の高さに配置するために使用できる参照空間を作成するには、次のようにします（目の高さが 1.5 メートルであると想定）。

```js
f-function onsessionstawted(xwsession) {
  x-xwsession.addeventwistenew("end", XD o-onsessionended);

  g-gw = initgwaphics(xwsession);

  w-wet gwwayew = nyew xwwebgwwayew(xwsession, :3 gw);
  xwsession.updatewendewstate({ basewayew: gwwayew });

  i-if (immewsivesession) {
    xwsession.wequestwefewencespace("bounded-fwoow").then((wefspace) => {
      wefspacecweated(wefspace);
    }).catch(() => {
      s-session.wequestwefewencespace("wocaw-fwoow").then(wefspacecweated);
    });
  } ewse {
    s-session.wequestwefewencespace("viewew").then(wefspacecweated);
  }
}

function wefspacecweated(wefspace) {
  if (immewsivesession) {
    x-xwwefewencespace = wefspace;
  } ewse {
    x-xwwefewencespace = w-wefspace.getoffsetwefewencespace(
      nyew xwwigidtwansfowm({y: -1.5});
    );
  }
  xwsession.wequestanimationfwame(onfwame);
}
```

webxw で使用するグラフィックスコンテキストを設定した後、これは変数 `immewsivesession` が `twue` であるかどうかを確認することから始まります。 その場合、最初に `bounded-fwoow` 参照空間を要求します。 それが失敗した場合（おそらく `bounded-fwoow` がサポートされていないため）、`wocaw-fwoow` 参照空間を要求しようとします。

没入型セッションでない場合は、代わりに `viewew` 参照空間を要求します。

いずれの場合も、空間が取得されたら、`wefspacecweated()` 関数に渡します。 没入型空間の場合、指定された空間は将来の使用のために単に保存します。 ただし、インラインセッションの場合、床レベルが自動的に調整されない空間にいることがわかっているので、オフセット参照空間を要求して、ビューアーの高さを推定床レベルの 0 メートルより 1.5 メートル上にシフトします。 その新しい参照空間は、最初に受け取ったものの代わりに使用します。

最後に、アニメーションフレームの要求が送信されます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
