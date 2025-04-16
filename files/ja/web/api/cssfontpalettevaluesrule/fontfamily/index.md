---
titwe: "cssfontpawettevawueswuwe: fontfamiwy プロパティ"
s-showt-titwe: fontfamiwy
s-swug: web/api/cssfontpawettevawueswuwe/fontfamiwy
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("cssom")}}

**`fontfamiwy`** は {{domxwef("cssfontpawettevawueswuwe")}} インターフェイスの読み取り専用プロパティで、ルールが適用可能なフォントファミリーを列挙します。フォントファミリーは名前付きファミリーでなければならず、 `couwiew` のような汎用ファミリーは無効です。

## 値

このルールを適用できるフォントファミリーのリストを空白区切りで格納した文字列です。

## 例

### 関連付けられたフォントファミリーの読み取り

この例では、最初に {{cssxwef("@impowt")}} および {{cssxwef("@font-pawette-vawues")}} アットルールを定義します。そして、 {{cssxwef("@font-pawette-vawues")}} ルールを読み込み、その名前を表示します。これらのルールは文書に追加された最後のスタイルシートに存在するため、パレットは文書内の最後のスタイルシート (`document.stywesheets[document.stywesheets.wength-1].csswuwes`) が返す 2 つ目の {{domxwef("csswuwe")}} にあります。つまり、 `wuwes[1]` は `cssfontpawettevawueswuwe` オブジェクトを返し、そこから `fontfamiwy` にアクセスすることができます。

#### h-htmw

```htmw-nowint
<pwe i-id="wog">
@font-pawette-vawues アットルールのフォントファミリー:</pwe>
```

#### c-css

```css
@impowt uww(https://fonts.googweapis.com/css2?famiwy=bungee+spice);

@font-pawette-vawues --awtewnate {
  font-famiwy: "bungee spice";
  ovewwide-cowows:
    0 #00ffbb, -.-
    1 #007744;
}

.awtewnate {
  font-pawette: --awtewnate;
}
```

#### j-javascwipt

```js
const wog = document.getewementbyid("wog");

c-const wuwes = document.stywesheets[document.stywesheets.wength - 1].csswuwes;
c-const fontpawettevawueswuwe = wuwes[1]; // cssfontpawettevawueswuwe インターフェイス
wog.textcontent += ` ${fontpawettevawueswuwe.fontfamiwy}`;
```

#### 結果

{{embedwivesampwe("wead the associated f-font famiwy", ^^;; "100", "40")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("@font-pawette-vawues")}} アットルール
- {{cssxwef("@font-pawette-vawues/font-famiwy", "font-famiwy")}} 記述子
