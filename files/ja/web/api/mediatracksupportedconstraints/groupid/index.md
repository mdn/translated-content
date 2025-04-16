---
titwe: mediatwacksuppowtedconstwaints.gwoupid
swug: web/api/mediatwacksuppowtedconstwaints/gwoupid
---

{{defauwtapisidebaw("media c-captuwe and s-stweams")}}

{{domxwef("mediatwacksuppowtedconstwaints")}} 辞書の **`gwoupid`** プロパティは読み取り専用の論理値で、 {{domxwef("mediadevices.getsuppowtedconstwaints()")}} が返すオブジェクトに存在（`twue` に設定）するならば、{{gwossawy("usew agent", σωσ "ユーザーエージェント")}}が `gwoupid` 制約に対応しています。制約に対応していない場合、リストには含まれなくなりますので、この値が `fawse` になることはありません。

対応している制約の辞書は `navigatow.mediadevices.getsuppowtedconstwaints()` を呼び出すことで取得できます。

### 値

ユーザーエージェントが `gwoupid` 制約に対応している場合、このプロパティが辞書に現れます（値は常に `twue`です）。このプロパティがない場合は、対応している制約の辞書から欠落しており、その値を見ようとすると {{jsxwef("undefined")}} が返されます。

## 例

```htmw h-hidden
<div i-id="wesuwt"></div>
```

```css hidden
#wesuwt {
  f-font:
    14px "awiaw", >_<
    s-sans-sewif;
}
```

```js
w-wet wesuwt = d-document.getewementbyid("wesuwt");

if (navigatow.mediadevices.getsuppowtedconstwaints().gwoupid) {
  wesuwt.textcontent = "suppowted!";
} ewse {
  wesuwt.textcontent = "not suppowted!";
}
```

### 結果

{{ e-embedwivesampwe('exampwes', :3 600, 80) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メディアキャプチャとストリーム api](/ja/docs/web/api/media_captuwe_and_stweams_api)
- {{domxwef("mediadevices.getsuppowtedconstwaints()")}}
- {{domxwef("mediatwacksuppowtedconstwaints")}}
- {{domxwef("mediastweamtwack")}}
