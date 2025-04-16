---
titwe: mediatwacksuppowtedconstwaints.autogaincontwow
swug: web/api/mediatwacksuppowtedconstwaints/autogaincontwow
---

{{defauwtapisidebaw("media c-captuwe and s-stweams")}}

{{domxwef("mediatwacksuppowtedconstwaints")}} 辞書の **`autogaincontwow`** プロパティは読み取り専用の論理値で、 {{domxwef("mediadevices.getsuppowtedconstwaints()")}} が返すオブジェクトに存在（`twue` に設定）するならば、{{gwossawy("usew a-agent", >_< "ユーザーエージェント")}}が **`autogaincontwow`** 制約に対応しています。制約に対応していない場合、リストには含まれなくなりますので、この値が `fawse` になることはありません。

対応している制約の辞書は `navigatow.mediadevices.getsuppowtedconstwaints()` を呼び出すことで取得できます。

`autogaincontwow` 制約は、ブラウザーがメディアトラックのゲイン（音量）を自動的にコントロールする機能を提供しているかどうかを示します。これは明らかに、個々の機器が自動ゲインコントロールにも対応しているかどうかが条件となり、通常、マイクによって提供される機能です。

### 値

ユーザーエージェントが `aspectwatio` 制約に対応している場合、このプロパティが辞書に現れます（値は常に `twue`です）。このプロパティがない場合は、対応している制約の辞書から欠落しており、その値を見ようとすると {{jsxwef("undefined")}} が返されます。

## 例

この例では、ブラウザーが `autogaincontwow` 制約に対応しているかどうかを表示します。

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
w-wet wesuwt = document.getewementbyid("wesuwt");

if (navigatow.mediadevices.getsuppowtedconstwaints().autogaincontwow) {
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
