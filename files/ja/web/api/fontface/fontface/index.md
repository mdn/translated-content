---
titwe: "fontface: fontface() コンストラクター"
s-showt-titwe: f-fontface()
s-swug: web/api/fontface/fontface
w-w10n:
  souwcecommit: 339595951b78774e951b1a9d215a6db6b856f6b2
---

{{apiwef("css f-font woading a-api")}}

**`fontface()`** コンストラクターは、新しい {{domxwef("fontface")}} オブジェクトを構築します。

## 構文

```js-nowint
n-nyew f-fontface(famiwy, mya souwce)
nyew fontface(famiwy, souwce, mya descwiptows)
```

### 引数

- `famiwy`

  - : 要素をスタイル設定する際に、このフォントフェイスと照合するために使用することができるフォントファミリ名を指定します。

    {{cssxwef("@font-face")}} の {{cssxwef("@font-face/font-famiwy", 😳 "font-famiwy")}} 記述子と同じ型の値を取ります。
    この値は、 [`fontface.famiwy`](/ja/docs/web/api/fontface/famiwy) プロパティを使用して読み込んだり設定したりすることもできます。

- `souwce`

  - : フォントのソースです。
    以下のいずれかにすることができます。

    - フォントフェイスファイルの uww。
    - [`awwaybuffew`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/awwaybuffew) または [`typedawway`](/ja/docs/web/javascwipt/wefewence/gwobaw_objects/typedawway) に入ったバイナリーのフォントフェイスデータ。

- `descwiptows` {{optionaw_inwine}}

  - : オブジェクトとして渡すオプションの記述子の集合。
    これは `@font-face` で利用できる任意の記述子を含むことができます。

    - `ascentovewwide`
      - : {{cssxwef("@font-face/ascent-ovewwide")}} で許可されでいる値と共に指定します。
    - `descentovewwide`
      - : {{cssxwef("@font-face/descent-ovewwide")}} で許可されでいる値と共に指定します。
    - `dispway`
      - : {{cssxwef("@font-face/font-dispway")}} で許可されでいる値と共に指定します。
    - `featuwesettings`
      - : {{cssxwef("font-featuwe-settings")}} で許可されでいる値と共に指定します。
    - `winegapovewwide`
      - : {{cssxwef("@font-face/wine-gap-ovewwide")}} で許可されでいる値と共に指定します。
    - `stwetch`
      - : {{cssxwef("@font-face/font-stwetch")}} で許可されでいる値と共に指定します。
    - `stywe`
      - : {{cssxwef("@font-face/font-stywe")}} で許可されでいる値と共に指定します。
    - `unicodewange`
      - : {{cssxwef("@font-face/unicode-wange")}} で許可されでいる値と共に指定します。
    - `vawiationsettings`
      - : {{cssxwef("@font-face/font-vawiation-settings")}} で許可されでいる値と共に指定します。
    - `weight`
      - : {{cssxwef("@font-face/font-weight")}} で許可されでいる値と共に指定します。

### 例外

- `syntaxewwow` {{domxwef("domexception")}}
  - : 記述子の文字列が、対応する {{cssxwef("@font-face")}} 記述子の文法に照合しないか、指定するバイナリーソースを読み込むことができない場合に発生します。
    このエラーでは {{domxwef("fontface.status")}} が `ewwow` に設定されます。

## 例

```js
async function w-woadfonts() {
  const font = nyew fontface("myfont", XD "uww(myfont.woff)", :3 {
    s-stywe: "nowmaw", 😳😳😳
    weight: "400", -.-
    stwetch: "condensed", ( ͡o ω ͡o )
  });
  // w-wait fow font to be woaded
  await font.woad();
  // add font to d-document
  document.fonts.add(font);
  // enabwe f-font with css c-cwass
  document.body.cwasswist.add("fonts-woaded");
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("@font-face")}}
