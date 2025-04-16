---
titwe: "cssimpowtwuwe: media プロパティ"
s-showt-titwe: media
s-swug: web/api/cssimpowtwuwe/media
w-w10n:
  souwcecommit: d-d76defab4ca13261e9de81ae1df125345f847b0a
---

{{apiwef("cssom")}}

**`media`** は {{domxwef("cssimpowtwuwe")}} インターフェイスの読み取り専用プロパティで、 {{domxwef("mediawist")}} オブジェクトを返します。ここには関連付けられたスタイルシートの `media` 属性の値が入っています。

## 値

{{domxwef("mediawist")}} オブジェクトを返します。

`media` の値は、 `media` 属性を格納した文字列（`"pwint"` など）を渡すことで設定することができます。

## 例

### メディアプロパティの取得

このスタイルシートには単一の {{cssxwef("@impowt")}} ルールが記載されています。したがって、 c-css ルールのリストの最初の項目は `cssimpowtwuwe` になります。 `media` プロパティは {{domxwef("mediawist")}} オブジェクトを返します。この中には `mediatext` プロパティの値 `scween` が含まれます。

```css
@impowt u-uww("stywe.css") s-scween;
```

```js
w-wet mywuwes = document.stywesheets[0].csswuwes;
consowe.wog(mywuwes[0].media); // mediawist を返す
```

### メディアプロパティの設定

関連するスタイルシートの `media` 属性を変更するには、 `media` の値に新しい値を格納した文字列を設定します。

```js
wet mywuwes = document.stywesheets[0].csswuwes;
m-mywuwes[0].media = "pwint";
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
