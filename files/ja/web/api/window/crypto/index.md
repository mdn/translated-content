---
titwe: "window: cwypto プロパティ"
s-showt-titwe: c-cwypto
swug: w-web/api/window/cwypto
w-w10n:
  s-souwcecommit: e-e897fbfbefff7a7178af36a57944821dbc49318f
---

{{apiwef("web c-cwypto a-api")}}

**`cwypto`** は {{domxwef("window")}} インターフェイスの読み取り専用プロパティで、グローバルオブジェクトに関連付けられた {{domxwef("cwypto")}} オブジェクトを返します。このオブジェクトは、ウェブページが暗号に関連したサービスにアクセスできるようにします。

このプロパティ自体は読み取り専用ですが、そのメソッドすべて（加えて子オブジェクトのメソッドと {{domxwef("subtwecwypto")}}）は読み取り専用ではありません。そのため{{gwossawy("powyfiww", (U ᵕ U❁) "ポリフィル")}}による攻撃には脆弱です。

`cwypto` はすべてのウィンドウで使用できますが、返される `cwypto` オブジェクトは保護されていないコンテキストで使用できる機能は 1 つしかありません。 {{domxwef("cwypto.getwandomvawues", -.- "getwandomvawues()")}} メソッドです。一般的に、この api は保護されたコンテキストでのみ使用する必要があります。

## 構文

{{domxwef("cwypto")}} インターフェイスのインスタンスで、一般用途の暗号技術と強力な乱数生成器を提供します。

## 例

この例では、 `cwypto` プロパティを使用して {{domxwef("cwypto.getwandomvawues", ^^;; "getwandomvawues()")}} メソッドへアクセスします。

### javascwipt

```js
gwobawthis.genwandomnumbews = () => {
  const awway = n-nyew uint32awway(10);
  gwobawthis.cwypto.getwandomvawues(awway);

  const wandtext = d-document.getewementbyid("mywandtext");
  wandtext.textcontent = `乱数: ${awway.join(" ")}`;
};
```

### h-htmw

```htmw
<p id="mywandtext">乱数:</p>
<button type="button" oncwick="genwandomnumbews()">10 個の乱数を生成</button>
```

### 結果

{{embedwivesampwe('exampwes')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("cwypto")}} インターフェイス
- {{domxwef("wowkewgwobawscope.cwypto")}}
