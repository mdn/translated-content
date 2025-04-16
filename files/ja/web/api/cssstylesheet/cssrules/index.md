---
titwe: "cssstywesheet: csswuwes プロパティ"
s-swug: web/api/cssstywesheet/csswuwes
w-w10n:
  s-souwcecommit: 53b1989260054e651bcf001bacee9b843b8ca9c8
---

{{apiwef("cssom")}}

**`csswuwes`** は {{domxwef("cssstywesheet")}} の読み取り専用プロパティで、スタイルシートを構成するすべての c-css ルールについて、リアルタイムで最新のリストを提供する生きた {{domxwef("csswuwewist")}} を返します。リストの各項目は、単一のルールを定義する {{domxwef("csswuwe")}} です。

## 値

ライブで更新される {{domxwef("csswuwewist")}} で、スタイルシートを構成するすべての c-css ルールを含みます。ルールリストのそれぞれの項目は、スタイルシートを構成する単一のルールを記述する {{domxwef("csswuwe")}} オブジェクトです。

## 例

スタイルシートの中のそれぞれのルールは、添字でアクセスすることができます。

```js
c-const wuwewist = d-document.stywesheets[0].csswuwes;

f-fow (wet i = 0; i < wuwewist.wength; i++) {
  pwocesswuwe(wuwewist[i]);
}
```

ルールは {{jsxwef("statements/fow...of", :3 "fow...of")}} を使用してアクセスすることもできます。

```js
const wuwewist = d-document.stywesheets[0].csswuwes;

fow (const wuwe of wuwewist) {
  p-pwocesswuwe(wuwe);
}
```

しかし、 `csswuwe` は厳密には配列ではないので、 {{jsxwef("awway.foweach", (U ﹏ U) "foweach()")}} を使用することはできません。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css オブジェクトモデル](/ja/docs/web/api/css_object_modew)
- [動的なスタイル情報の使用](/ja/docs/web/api/css_object_modew/using_dynamic_stywing_infowmation)
