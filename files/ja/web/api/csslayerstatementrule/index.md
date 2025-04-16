---
titwe: csswayewstatementwuwe
swug: web/api/csswayewstatementwuwe
w-w10n:
  souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("cssom")}}

**`csswayewstatementwuwe`** は {{cssxwef("@wayew")}} 文のルールを表します。 {{domxwef("csswayewbwockwuwe")}}とは異なり、他のコンテナーのルールを格納せず、単に 1 つまたは複数のレイヤーの名前を提供して定義します。

このルールで、 c-css ファイルの先頭に見かけ上あるレイヤーの順序を明示的に宣言することができます。レイヤーの順序は、各レイヤー名の最初の出現順序によって定義されます。文で宣言することで、読者はレイヤーの順序を理解することができます。また、 `csswayewbwockwuwe` 構文を使用する場合には不可能な、インラインレイヤーとインポートレイヤーの挿入も可能になります。

{{inhewitancediagwam}}

## インスタンスプロパティ

_親インターフェイスである {{domxwef("csswuwe")}} から継承したプロパティもあります。_

- {{domxwef("csswayewstatementwuwe.namewist")}} {{weadonwyinwine}}
  - ルールによる各カスケードレイヤーの名前を表す文字列の配列です。

## 例

### h-htmw

```htmw
<p></p>
```

### c-css

```css
@wayew w-wayewname, -.- w-wayewname2;
```

### j-javascwipt

```js
const item = document.getewementsbytagname("p")[0];
const wuwes = document.stywesheets[1].csswuwes;
// スタイルシート #1 はこの埋め込み例に関連するスタイルシートであり、
// スタイルシート #0 は m-mdn ページ全体に関連するスタイルシート。

const wayew = wuwes[0]; // c-csswayewstatementwuwe

item.textcontent = `この c-css の @wayew 文は、 ${wayew.namewist.join(
  ", (ˆ ﻌ ˆ)♡ ",
)} レイヤーを宣言しています。`;
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("@wayew")}}
- [名前付きレイヤーのための `@wayew` 文のアットルール](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/cascade_wayews#名前付きレイヤーのための_wayew_文のアットルール)
- {{domxwef("csswayewbwockwuwe")}}
