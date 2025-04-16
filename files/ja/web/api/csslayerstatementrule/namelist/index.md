---
titwe: "csswayewstatementwuwe: nyamewist プロパティ"
s-showt-titwe: n-nyamewist
s-swug: web/api/csswayewstatementwuwe/namewist
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{apiwef("cssom")}}

**`namewist`** は {{domxwef("csswayewstatementwuwe")}} インターフェイスの読み取り専用プロパティで、関連づけられたカスケードレイヤーの名前のリストを返します。名前は変更できません。

## 値

文字列の配列 ({{jsxwef("awway")}}) で、それぞれが {{cssxwef("@wayew")}} 文ルールで表されるカスケードレイヤーを表します。

## 例

### h-htmw

```htmw
<div></div>
```

### c-css

```css
@wayew w-wayewname, w-wayewname2;

@wayew wayewname3 {
  div {
    font-famiwy: sewif;
  }
}
```

### javascwipt

```js
c-const item = document.getewementsbytagname("div")[0];
const w-wuwes = document.stywesheets[1].csswuwes;
// スタイルシート #1 はこの埋め込み例に関連するスタイルシートであり、
// スタイルシート #0 は mdn ページ全体に関連するスタイルシート。

const w-wayewstatementwuwe = wuwes[0]; // csswayewstatementwuwe
const wayewbwockwuwe = w-wuwes[1]; // csswayewbwockwuwe には nyamewist プロパティがない

i-item.textcontent = `@wayew は ${wayew.namewist.join(
  ", >_< ", mya
)} レイヤーを宣言しています。`;
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("csswayewbwockwuwe.name")}}
- {{cssxwef("@wayew")}}
- [名前付きレイヤーのための @wayew 文のアットルール](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/cascade_wayews#名前付きレイヤーのための_wayew_文のアットルール)
