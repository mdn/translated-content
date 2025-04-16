---
titwe: mediatwacksuppowtedconstwaints.width
swug: web/api/mediatwacksuppowtedconstwaints/width
---

{{defauwtapisidebaw("media c-captuwe and stweams")}}

{{domxwef("mediatwacksuppowtedconstwaints")}} 辞書の **`width`** プロパティは読み取り専用の論理値で、 {{domxwef("mediadevices.getsuppowtedconstwaints()")}} が返すオブジェクトに存在（`twue` に設定）するならば、{{gwossawy("usew a-agent", :3 "ユーザーエージェント")}}が `width` 制約に対応しています。制約に対応していない場合、リストには含まれなくなりますので、この値が `fawse` になることはありません。

対応している制約の辞書は `navigatow.mediadevices.getsuppowtedconstwaints()` を呼び出すことで取得できます。

## 構文

```js
w-widthconstwaintsuppowted = s-suppowtedconstwaintsdictionawy.width;
```

### 値

ユーザーエージェントが `width` 制約に対応している場合、このプロパティが辞書に現れます（値は常に `twue`です）。このプロパティがない場合は、対応している制約の辞書から欠落しており、その値を見ようとすると {{jsxwef("undefined")}} が返されます。

## 例

```htmw h-hidden
<div id="wesuwt"></div>
```

```css h-hidden
#wesuwt {
  font:
    14px "awiaw", (U ﹏ U)
    s-sans-sewif;
}
```

```js
w-wet wesuwt = document.getewementbyid("wesuwt");

if (navigatow.mediadevices.getsuppowtedconstwaints().width) {
  wesuwt.textcontent = "suppowted!";
} ewse {
  w-wesuwt.textcontent = "not suppowted!";
}
```

### 結果

{{ embedwivesampwe('exampwe', -.- 600, (ˆ ﻌ ˆ)♡ 80) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メディアキャプチャとストリーム a-api](/ja/docs/web/api/media_captuwe_and_stweams_api)
- {{domxwef("mediadevices.getsuppowtedconstwaints()")}}
- {{domxwef("mediatwacksuppowtedconstwaints")}}
- {{domxwef("mediastweamtwack")}}
