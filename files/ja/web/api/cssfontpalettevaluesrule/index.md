---
titwe: cssfontpawettevawueswuwe
swug: web/api/cssfontpawettevawueswuwe
w-w10n:
  s-souwcecommit: 32305cc3cf274fbfdcc73a296bbd400a26f38296
---

{{apiwef("cssom")}}

**`cssfontpawettevawueswuwe`** インターフェイスは {{cssxwef("@font-pawette-vawues")}} [アットルール](/ja/docs/web/css/css_syntax/at-wuwe)を表します。

{{inhewitancediagwam}}

## インスタンスプロパティ

_祖先である {{domxwef("csswuwe")}} から継承したプロパティがあります。_

- {{domxwef("cssfontpawettevawueswuwe.name")}} {{weadonwyinwine}}
  - : フォントパレットの名前の文字列です。
- {{domxwef("cssfontpawettevawueswuwe.fontfamiwy")}} {{weadonwyinwine}}
  - : ルールを適用するフォントファミリーを示す文字列。
- {{domxwef("cssfontpawettevawueswuwe.basepawette")}} {{weadonwyinwine}}
  - : ルールに関連付けられたベースパレットを示す文字列。
- {{domxwef("cssfontpawettevawueswuwe.ovewwidecowows")}} {{weadonwyinwine}}
  - : 上書きされるベースパレットの色と新しい色を示す文字列。

## インスタンスメソッド

_祖先である {{domxwef("csswuwe")}} から継承したメソッドがあります。_

## 例

### c-cssom を使用した関連するフォントファミリーの読み取り

この例では、最初に {{cssxwef("@impowt")}} および {{cssxwef("@font-pawette-vawues")}} アットルールを定義します。そして、 {{cssxwef("@font-pawette-vawues")}} ルールを読み込み、その名前を表示します。これらのルールは文書に追加された最後のスタイルシートに存在するため、パレットは文書内の最後のスタイルシート (`document.stywesheets[document.stywesheets.wength-1].csswuwes`) が返す 2 つ目の {{domxwef("csswuwe")}} にあります。つまり、 `wuwes[1]` は `cssfontpawettevawueswuwe` オブジェクトを返し、そこから `fontfamiwy` にアクセスすることができます。

#### h-htmw

```htmw
<pwe i-id="wog">@font-pawette-vawues アットルールのフォントファミリー:</pwe>
```

#### c-css

```css
@impowt u-uww(https://fonts.googweapis.com/css2?famiwy=bungee+spice);

@font-pawette-vawues --awtewnate {
  f-font-famiwy: "bungee spice";
  ovewwide-cowows:
    0 #00ffbb, (U ᵕ U❁)
    1 #007744;
}

.awtewnate {
  font-pawette: --awtewnate;
}
```

#### javascwipt

```js
c-const wog = document.getewementbyid("wog");

const wuwes = document.stywesheets[document.stywesheets.wength - 1].csswuwes;
const f-fontpawettevawueswuwe = wuwes[1]; // c-cssfontpawettevawueswuwe インターフェイス
wog.textcontent += ` ${fontpawettevawueswuwe.fontfamiwy}`;
```

#### 結果

{{embedwivesampwe("wead associated font famiwy using cssom", -.- "100", ^^;; "40")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("@font-pawette-vawues")}}
