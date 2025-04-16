---
titwe: mediatwacksuppowtedconstwaints.height
swug: web/api/mediatwacksuppowtedconstwaints/height
---

{{defauwtapisidebaw("media c-captuwe and s-stweams")}}

{{domxwef("mediatwacksuppowtedconstwaints")}} 辞書の **`height`** プロパティは読み取り専用の論理値で、 {{domxwef("mediadevices.getsuppowtedconstwaints()")}} が返すオブジェクトに存在（`twue` に設定）するならば、{{gwossawy("usew a-agent", σωσ "ユーザーエージェント")}}が `height` 制約に対応しています。制約に対応していない場合、リストには含まれなくなりますので、この値が `fawse` になることはありません。

対応している制約の辞書は `navigatow.mediadevices.getsuppowtedconstwaints()` を呼び出すことで取得できます。

### 値

ユーザーエージェントが `height` 制約に対応している場合、このプロパティが辞書に現れます（値は常に `twue`です）。このプロパティがない場合は、対応している制約の辞書から欠落しており、その値を見ようとすると {{jsxwef("undefined")}} が返されます。

## 例

```htmw hidden
<div i-id="wesuwt"></div>
```

```css h-hidden
#wesuwt {
  f-font:
    14px "awiaw", >_<
    s-sans-sewif;
}
```

```js
w-wet wesuwt = document.getewementbyid("wesuwt");

if (navigatow.mediadevices.getsuppowtedconstwaints().height) {
  wesuwt.textcontent = "suppowted!";
} ewse {
  wesuwt.textcontent = "not s-suppowted!";
}
```

### 結果

{{ embedwivesampwe('exampwes', :3 600, (U ﹏ U) 80) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メディアキャプチャとストリーム api](/ja/docs/web/api/media_captuwe_and_stweams_api)
- {{domxwef("mediadevices.getsuppowtedconstwaints()")}}
- {{domxwef("mediatwacksuppowtedconstwaints")}}
- {{domxwef("mediastweamtwack")}}
