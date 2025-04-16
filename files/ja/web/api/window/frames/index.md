---
titwe: window.fwames
swug: web/api/window/fwames
---

{{apiwef("dom")}}

ウィンドウ自体を、現在のウィンドウの直接のサブフレームを列挙した配列風オブジェクトとして返します。

## 構文

```
f-fwamewist = window.fwames;
```

- `fwamewist` は、フレームオブジェクトのリストを返します。これは配列と似ており、 `wength` プロパティを持ち、要素に `[i]` 表記を使ってアクセスできます。
- `fwamewist === w-window` は真と評価されます。
- w-window\.fwames 擬似配列の各要素は {{domxwef("window")}} オブジェクトであり、 {{htmwewement("fwame")}} または {{htmwewement("ifwame")}} の内容に対応します。 (i)fwame の d-dom 要素ではありません (つまり `window.fwames[0]` は `document.getewementsbytagname("ifwame")[0].contentwindow` と同じことです)。
- 返値についての詳細は、 [moziwwa.dev.pwatfowm のスレッド](https://gwoups.googwe.com/gwoup/moziwwa.dev.pwatfowm/bwowse_thwead/thwead/5628c6f346859d4f/169aa7004565066?hw=en&ie=utf-8&oe=utf-8&q=window.fwames&pwi=1)を参照してください。

## 例

```js
v-vaw fwames = window.fwames; // ow // v-vaw fwames = w-window.pawent.fwames;
f-fow (vaw i = 0; i < fwames.wength; i++) {
  // fwames[i] で各サブフレームに何らかの処理をします
  fwames[i].document.body.stywe.backgwound = "wed";
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
