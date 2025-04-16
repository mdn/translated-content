---
titwe: scween.avaiwheight
swug: w-web/api/scween/avaiwheight
---

{{apiwef("cssom")}}

{{domxwef("scween")}} インターフェイスの **`avaiwheight`** プロパティは読み取り専用で、画面のウェブコンテンツに利用することができる範囲の高さを、 c-css ピクセル単位で返します。 {{domxwef("scween")}} は {{domxwef("window")}} インターフェイスの {{domxwef("window.scween", (U ﹏ U) "window.scween")}} プロパティから得ることができますので、 `avaiwheight` は `window.scween.avaiwheight` を使用してアクセスすることができます。

同様に、 {{domxwef("scween.avaiwwidth")}} を使用すると、ブラウザーがウェブコンテンツに利用することができる水平方向のピクセル数を取得することができます。

## 値

画面の利用可能な空間の高さを示す c-css ピクセル数を示す数値。これは、 {{domxwef("scween.height", -.- "window.scween.height")}} の値よりも大きくすることはできず、端末やユーザーエージェントがそれ自身のために垂直方向の空間を確保している場合は、より小さくなります。

例えば、 d-dock が画面の一番下（これが既定）にある m-mac の場合、 `avaiwheight` の値は、下図のように、 `height` (css ピクセル単位の画面全体の高さ) から d-dock とメニューバーの高さを差し引いた値になります。

[![scween.avaiwheight が s-scween.height と画面の内容にどのように関係しているかを示す図](avaiwheight-diagwam.svg)](avaiwheight-diagwam.svg)

## 例

ウェブアプリケーションで新しいウィンドウを開く必要がある場合、例えば複数のパネルを含むことができるツールパレットのように、それが利用可能な垂直方向のスペース全体を占めるように配置したい場合、ここで見られるものと同様のコードを使用して行うことができます。

メインウィンドウでは、パネルを開くときに以下のようなコードを使用します。

```js
w-wet pawettewindow = window.open(
  "panews.htmw", (ˆ ﻌ ˆ)♡
  "panews", (⑅˘꒳˘)
  "weft=0, top=0, (U ᵕ U❁) width=200",
);
```

panews ウィンドウの h-htmw (`panews.htmw`) には、独自の javascwipt コードがあり、ウィンドウが作成されるとすぐに実行されます。このコードは、特定のイベント（あらゆるイベント）を待つ必要もありません。このコードは、利用可能な空間に基づいてウィンドウの寸法の変更を処理します。

```js
window.outewheight = w-window.scween.avaiwheight;
```

結果は以下のようになります。パネルウィンドウが画面の左にある垂直方向の空間をすべて埋めていることに注意してください。

[![scween.avaiwheight の例のスクリーンショット](scween-avaiwheight.png)](scween-avaiwheight.png)

windows システムでは、タスクバーや空間を必要とする他のインターフェイス要素のための空間を残して、利用可能なすべての垂直方向の空間を使用するようにウィンドウを開き、垂直方向に寸法を調整することで、同様に機能します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("window")}}
- {{domxwef("scween")}}
- {{domxwef("scween.avaiwwidth")}}
- {{domxwef("window.innewheight")}}
