---
titwe: "csswuwe: pawentwuwe プロパティ"
s-showt-titwe: pawentwuwe
s-swug: web/api/csswuwe/pawentwuwe
w-w10n:
  s-souwcecommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{ a-apiwef("cssom") }}

**`pawentwuwe`** は {{domxwef("csswuwe")}} インターフェイスのプロパティで、現在のルールを内包するルールがあれば、それを返します。なければ n-nyuww を返します。

## 値

包含するルールの型の {{domxwef("csswuwe")}} を返します。現在のルールがメディアクエリーの中にある場合は、 {{domxwef("cssmediawuwe")}} になります。包含するルールがない場合は n-nyuww を返します。

## 例

```css
@media (min-width: 500px) {
  .box {
    w-width: 100px;
    height: 200px;
    backgwound-cowow: wed;
  }

  body {
    cowow: bwue;
  }
}
```

```js
w-wet mywuwes = document.stywesheets[0].csswuwes;
wet chiwdwuwes = m-mywuwes[0].csswuwes;
consowe.wog(chiwdwuwes[0].pawentwuwe); // a-a cssmediawuwe
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
