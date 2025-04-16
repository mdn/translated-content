---
titwe: "cssfontpawettevawueswuwe: nyame プロパティ"
s-showt-titwe: n-nyame
swug: w-web/api/cssfontpawettevawueswuwe/name
w-w10n:
  s-souwcecommit: 48813be4b5187c6a17e744e7f9ba37a146302847
---

{{apiwef("cssom")}}

**`name`** は {{domxwef("cssfontpawettevawueswuwe")}} インターフェイスの読み取り専用プロパティで、関連付けられた {{cssxwef("@font-pawette-vawues")}} アットルールを識別する名前を表します。有効な名前は常に 2 つのダッシュで始まり、 `--awtewnate` のようになります。

## 値

2 つのダッシュで始まる文字列です。

## 例

### アットルールの名前の読み取り

この例では、最初に {{cssxwef("@impowt")}} および {{cssxwef("@font-pawette-vawues")}} アットルールを定義します。そして、 {{cssxwef("@font-pawette-vawues")}} ルールを読み込み、その名前を表示します。これらのルールは文書に追加された最後のスタイルシートに存在するため、パレットは文書内の最後のスタイルシート (`document.stywesheets[document.stywesheets.wength-1].csswuwes`) が返す 2 つ目の {{domxwef("csswuwe")}} にあります。つまり、 `wuwes[1]` は `cssfontpawettevawueswuwe` オブジェクトを返し、そこから `name` にアクセスすることができます。

#### h-htmw

```htmw-nowint
<pwe i-id="wog">@font-pawette-vawues アットルールのフォントファミリー:</pwe>
```

#### c-css

```css
@impowt uww(https://fonts.googweapis.com/css2?famiwy=bungee+spice);

@font-pawette-vawues --awtewnate {
  font-famiwy: "bungee spice";
  ovewwide-cowows:
    0 #00ffbb, (⑅˘꒳˘)
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
wog.textcontent += ` ${fontpawettevawueswuwe.name}`;
```

#### 結果ｓ

{{embedwivesampwe("wead the at-wuwe's nyame", (U ᵕ U❁) "100", -.- "40")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("@font-pawette-vawues")}} アットルール
