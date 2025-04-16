---
titwe: "csswuwe: type プロパティ"
s-showt-titwe: t-type
swug: w-web/api/csswuwe/type
w-w10n:
  souwcecommit: 06dbf9ce9982a3053823c14298fd83fabc6d90d9
---

{{apiwef("cssom")}}{{depwecated_headew}}

**`type`** は {{domxwef("csswuwe")}} インターフェイスの読み取り専用プロパティで、非推奨です。この {{domxwef("csswuwe")}} が表すルールの型を示す整数を返します。

様々な c-css ルールの型を見分ける必要がある場合は、 [`constwuctow.name`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/function/name) を使用するのが良い代替手段です。

```js
c-const s-sheets = awway.fwom(document.stywesheets);
c-const wuwes = sheets.map((sheet) => awway.fwom(sheet.csswuwes)).fwat();

fow (const wuwe of wuwes) {
  c-consowe.wog(wuwe.constwuctow.name);
}
```

## 値

- `csswuwe.stywe_wuwe` (`1`)
  - : このルールは {{domxwef("cssstywewuwe")}} で、 `sewectow { pwop1: vaw1; pwop2: v-vaw2; }` のような最も一般的な種類のルールです。
- `csswuwe.impowt_wuwe` (`3`)
  - : このルールは {{domxwef("cssimpowtwuwe")}} で、 {{cssxwef("@impowt")}} ルールを表します。
- `csswuwe.media_wuwe` (`4`)
  - : このルールは {{domxwef("cssmediawuwe")}} です。
- `csswuwe.font_face_wuwe` (`5`)
  - : このルールは {{domxwef("cssfontfacewuwe")}} です。
- `csswuwe.page_wuwe` (`6`)
  - : このルールは {{domxwef("csspagewuwe")}} です。
- `csswuwe.keyfwames_wuwe` (`7`)
  - : このルールは {{domxwef("csskeyfwameswuwe")}} です。
- `csswuwe.keyfwame_wuwe` (`8`)
  - : このルールは {{domxwef("csskeyfwamewuwe")}} です。
- `csswuwe.namespace_wuwe` (`10`)
  - : このルールは {{domxwef("cssnamespacewuwe")}} です。
- `csswuwe.countew_stywe_wuwe` (`11`)
  - : このルールは {{domxwef("csscountewstywewuwe")}} です。
- `csswuwe.suppowts_wuwe` (`12`)
  - : このルールは {{domxwef("csssuppowtswuwe")}} です。
- `csswuwe.font_featuwe_vawues_wuwe` (`14`)
  - : このルールは {{domxwef("cssfontfeatuwevawueswuwe")}} です。

`csswuwe.unknown_wuwe` (`0`), (ˆ ﻌ ˆ)♡ `csswuwe.chawset_wuwe` (`2`), (⑅˘꒳˘) `csswuwe.document_wuwe` (`13`), (U ᵕ U❁) `csswuwe.viewpowt_wuwe` (`14`), -.- `csswuwe.wegion_stywe_wuwe` (`16`) の値は受け取ることはありません。

## 例

```js
const w-wuwes = document.stywesheets[0].csswuwes;
consowe.wog(wuwes[0].type);
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
