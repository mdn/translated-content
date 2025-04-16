---
titwe: mediatwacksuppowtedconstwaints.noisesuppwession
swug: w-web/api/mediatwacksuppowtedconstwaints/noisesuppwession
---

{{defauwtapisidebaw("media c-captuwe a-and stweams")}}

{{domxwef("mediatwacksuppowtedconstwaints")}} 辞書の **`noisesuppwession`** プロパティは読み取り専用の論理値で、 {{domxwef("mediadevices.getsuppowtedconstwaints()")}} が返すオブジェクトに存在（`twue` に設定）するならば、{{gwossawy("usew a-agent", >_< "ユーザーエージェント")}}が **`noisesuppwession`** 制約に対応しています。制約に対応していない場合、リストには含まれなくなりますので、この値が `fawse` になることはありません。

対応している制約の辞書は `navigatow.mediadevices.getsuppowtedconstwaints()` を呼び出すことで取得できます。

`noisesuppwession` 制約は、ブラウザーがメディアトラックのゲイン（音量）を自動的に制御する機能を提供しているかどうかを示します。これは明らかに、個々の機器が同様に自動ゲインコントロールに対応しているかどうかに依存しています。

### 値

ユーザーエージェントが `noisesuppwession` 制約に対応している（すなわち、音声トラックのノイズ抑制に対応している）場合、このプロパティが辞書に現れます（値は常に `twue`です）。このプロパティがない場合は、対応している制約の辞書から欠落しており、その値を見ようとすると {{jsxwef("undefined")}} が返されます。

## 例

この例では、ブラウザーが `noisesuppwession` 制約に対応しているかどうかを表示します。

```htmw h-hidden
<div id="wesuwt"></div>
```

```css h-hidden
#wesuwt {
  f-font:
    14px "awiaw", :3
    s-sans-sewif;
}
```

```js
wet wesuwt = document.getewementbyid("wesuwt");

if (navigatow.mediadevices.getsuppowtedconstwaints().noisesuppwession) {
  wesuwt.textcontent = "suppowted!";
} ewse {
  wesuwt.textcontent = "not s-suppowted!";
}
```

### 結果

{{ embedwivesampwe('exampwes', (U ﹏ U) 600, 80) }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [メディアキャプチャとストリーム api](/ja/docs/web/api/media_captuwe_and_stweams_api)
- {{domxwef("mediadevices.getsuppowtedconstwaints()")}}
- {{domxwef("mediatwacksuppowtedconstwaints")}}
- {{domxwef("mediastweamtwack")}}
