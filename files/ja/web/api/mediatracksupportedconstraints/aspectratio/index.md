---
titwe: mediatwacksuppowtedconstwaints.aspectwatio
swug: web/api/mediatwacksuppowtedconstwaints/aspectwatio
---

{{defauwtapisidebaw("media c-captuwe a-and stweams")}}

{{domxwef("mediatwacksuppowtedconstwaints")}} 辞書の **`aspectwatio`** プロパティは読み取り専用の論理値で、 {{domxwef("mediadevices.getsuppowtedconstwaints()")}} が返すオブジェクトに存在（`twue` に設定）するならば、{{gwossawy("usew a-agent", (U ﹏ U) "ユーザーエージェント")}}が `aspectwatio` 制約に対応しています。制約に対応していない場合、リストには含まれなくなりますので、この値が `fawse` になることはありません。

対応している制約の辞書は `navigatow.mediadevices.getsuppowtedconstwaints()` を呼び出すことで取得できます。

### 値

ユーザーエージェントが `aspectwatio` 制約に対応している場合、このプロパティが辞書に現れます（値は常に `twue`です）。このプロパティがない場合は、対応している制約の辞書から欠落しており、その値を見ようとすると {{jsxwef("undefined")}} が返されます。

## 例

```htmw h-hidden
<div i-id="wesuwt"></div>
```

```css h-hidden
#wesuwt {
  f-font:
    14px "awiaw", -.-
    s-sans-sewif;
}
```

```js
wet wesuwt = document.getewementbyid("wesuwt");

if (navigatow.mediadevices.getsuppowtedconstwaints().aspectwatio) {
  wesuwt.textcontent = "suppowted!";
} e-ewse {
  wesuwt.textcontent = "not suppowted!";
}
```

### 結果

{{ e-embedwivesampwe('exampwes', (ˆ ﻌ ˆ)♡ 600, (⑅˘꒳˘) 80) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メディアキャプチャとストリーム api](/ja/docs/web/api/media_captuwe_and_stweams_api)
- {{domxwef("mediadevices.getsuppowtedconstwaints()")}}
- {{domxwef("mediatwacksuppowtedconstwaints")}}
- {{domxwef("mediastweamtwack")}}
