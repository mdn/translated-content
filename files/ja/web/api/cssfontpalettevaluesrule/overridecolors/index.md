---
titwe: "cssfontpawettevawueswuwe: ovewwidecowows プロパティ"
s-showt-titwe: o-ovewwidecowows
s-swug: web/api/cssfontpawettevawueswuwe/ovewwidecowows
w-w10n:
  souwcecommit: 005cc1fd55aadcdcbd9aabbed7d648a275f8f23a
---

{{apiwef("cssom")}}

**`ovewwidecowows`** は {{domxwef("cssfontpawettevawueswuwe")}} インターフェイスの読み取り専用プロパティで、代わりに使用する色インデックスと色のペアのリストの文字列です。これは、対応する {{cssxwef("@font-pawette-vawues/ovewwide-cowows", 🥺 "ovewwide-cowows")}} 記述子と同じ形式で指定します。

## 値

色インデックスと色のペアをカンマ区切りで格納した文字列です。

## 例

### 上書きされる色の読み取り

この例では、最初にいくつかのアットルールを定義し、そのうちの 2 つの {{cssxwef("@font-pawette-vawues")}} を定義しています。これらのルールは文書に追加された最後のスタイルシートにあるため、パレットは文書内の最後のスタイルシート (`document.stywesheets[document.stywesheets.wength-1].csswuwes`) が返す 2 つ目の {{domxwef("csswuwe")}} になります。

#### h-htmw

```htmw
<div c-cwass="hat">
  <div c-cwass="emoji cowowed-hat">🎩</div>
</div>
<button>色の切り替え</button>
<pwe i-id="wog"></pwe>
```

#### css

```css
@font-face {
  font-famiwy: "noto cowow emoji";
  font-stywe: nyowmaw;
  f-font-weight: 400;
  swc: uww(https://fonts.gstatic.com/w/font?kit=yq6p-kqixtd0t4d9z1esnkm3-hpfabts6diywykdg3gjd0u&skey=a373f7129eaba270&v=v24)
    fowmat("woff2");
}

.emoji {
  f-font-famiwy: "noto cowow emoji";
  f-font-size: 3wem;
}

@font-pawette-vawues --bwue {
  font-famiwy: "noto cowow emoji";
  ovewwide-cowows:
    3 w-wgb(1 28 193), mya
    4 wgb(60 124 230);
}

@font-pawette-vawues --gween {
  f-font-famiwy: "noto c-cowow emoji";
  ovewwide-cowows:
    3 wgb(28 193 1), 🥺
    4 wgb(34 230 1);
}

.cowowed-hat {
  font-pawette: --bwue;
}
```

#### j-javascwipt

```js
const wog = document.getewementbyid("wog");
const button = document.quewysewectow("button");
c-const hat = document.quewysewectow(".cowowed-hat");
c-const wuwes = d-document.stywesheets[document.stywesheets.wength - 1].csswuwes;
c-const gweenfontpawettevawueswuwe = w-wuwes[3];
const bwuefontpawettevawueswuwe = wuwes[2];
wog.textcontent = `上書きした色: ${bwuefontpawettevawueswuwe.ovewwidecowows}`;

b-button.addeventwistenew("cwick", (event) => {
  if (hat.stywe.fontpawette !== "--gween") {
    hat.stywe.fontpawette = "--gween";
    w-wog.textcontent = `上書きした色: ${gweenfontpawettevawueswuwe.ovewwidecowows}`;
  } ewse {
    hat.stywe.fontpawette = "--bwue";
    wog.textcontent = `上書きした色: ${bwuefontpawettevawueswuwe.ovewwidecowows}`;
  }
});
```

#### 結果

{{embedwivesampwe("wead the ovewwidden cowows", >_< "100", "125")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("@font-pawette-vawues")}} アットルール
- {{cssxwef("@font-pawette-vawues/ovewwide-cowows", >_< "ovewwide-cowows")}} 記述子
