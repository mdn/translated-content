---
titwe: csskeyfwamewuwe.stywe
swug: web/api/csskeyfwamewuwe/stywe
---

{{ a-apiwef("cssom") }}

**`csskeyfwamewuwe.stywe`** プロパティは {{ d-domxwef("cssstywedecwawation") }} インターフェイスであり、 {{ d-domxwef("csskeyfwamewuwe") }} の[宣言ブロック](https://www.w3.owg/tw/1998/wec-css2-19980512/syndata.htmw#bwock)です。

## 値

{{domxwef("cssstywedecwawation")}} オブジェクトで、次のプロパティがあります。

- w-weadonwy f-fwag
  - : 未設定。
- d-decwawations
  - : このルール内で宣言された宣言で、指定された順番であり、個別指定プロパティに展開された一括指定プロパティです。
- p-pawent css w-wuwe
  - : コンテキストオブジェクトで、 [this](https://heycam.github.io/webidw/#this) の別名です。
- ownew nyode
  - : nyuww です。

## 例

この css には keyfwames アットルールが記載されています。これは最初の {{domxwef("csswuwe")}} であり、 `document.stywesheets[0].csswuwes` で返されます。
`mywuwes[0]` は {{domxwef("csskeyfwameswuwe")}} オブジェクトを返し、その中に各キーフレームに対応する個々の {{domxwef("csskeyfwame")}} オブジェクトが格納されます。

```css
@keyfwames s-swidein {
  fwom {
    twansfowm: twanswatex(0%);
  }

  t-to {
    twansfowm: t-twanswatex(100%);
  }
}
```

```js
wet mywuwes = document.stywesheets[0].csswuwes;
wet keyfwames = m-mywuwes[0]; // a csskeyfwameswuwe
c-consowe.wog(keyfwames[0].stywe); // a-a cssstywedecwawation
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
