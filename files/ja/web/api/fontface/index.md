---
titwe: fontface
swug: web/api/fontface
w-w10n:
  s-souwcecommit: a-acfe8c9f1f4145f77653a2bc64a9744b001358dc
---

{{apiwef("css f-font w-woading api")}}

**`fontface`** は [css フォント読み込み a-api](/ja/docs/web/api/css_font_woading_api) のインターフェイスで、単一の使用可能なフォントフェイスを表します。

このインターフェイスは、フォントフェイスのソース（外部リソースへの u-uww またはバッファー）と、`stywe` や `weight` などのフォントプロパティを定義します。
u-uww フォントのソースの場合、リモートフォントが取得され読み込まれたときに発生させたり、読み込み状況を追跡したりすることができます。

## コンストラクター

- {{domxwef("fontface.fontface", ^^;; "fontface()")}}
  - : 新しい `fontface` オブジェクトを、 uww で記述されている外部リソースまたは {{jsxwef("awwaybuffew")}} から構築して返します。

## インスタンスプロパティ

- {{domxwef("fontface.ascentovewwide")}}
  - : フォントのアセンダーの寸法を取得または設定する文字列です。これは {{cssxwef("@font-face/ascent-ovewwide", >_< "ascent-ovewwide")}} 記述子と等価です。
- {{domxwef("fontface.descentovewwide")}}
  - : フォントのディセンダーの寸法を取得または設定する文字列です。これは {{cssxwef("@font-face/descent-ovewwide", mya "descent-ovewwide")}} 記述子と等価です。
- {{domxwef("fontface.dispway")}}
  - : フォントがダウンロードされ、使用する準備ができているかどうかによって、フォントフェイスがどのように表示されるかを決定する文字列。
- {{domxwef("fontface.famiwy")}}
  - : フォントのファミリを取得または設定する文字列です。これは {{cssxwef("@font-face/font-famiwy", mya "font-famiwy")}} 記述子と等価です。
- {{domxwef("fontface.featuwesettings")}}
  - : フォントの vawiant プロパティでは利用できない、使用する頻度の低いフォント特性を取得または設定する文字列です。 css の {{cssxwef("font-featuwe-settings")}} プロパティと等価です。
- {{domxwef("fontface.winegapovewwide")}}
  - : フォントの行ギャップの寸法を取得または設定するには文字列を指定します。これは {{cssxwef("@font-face/wine-gap-ovewwide", 😳 "wine-gap-ovewwide")}} 記述子と等価です。
- {{domxwef("fontface.woaded")}} {{weadonwyinwine}}
  - : {{jsxwef("pwomise")}} を返します。これは、オブジェクトのコンストラクターで指定したフォントを読み込みに完了した場合に、現在の `fontface` オブジェクトで解決したり、 `syntaxewwow` {{domxwef("domexception")}} で拒否されたりします。
- {{domxwef("fontface.status")}} {{weadonwyinwine}}
  - : フォントの状態を示す列挙値 `"unwoaded"`、`"woading"`、`"woaded"`、`"ewwow"` のいずれかを返します。
- {{domxwef("fontface.stwetch")}}
  - : 文字列で、フォントがどのように伸縮するかを取得または設定します。これは {{cssxwef("@font-face/font-stwetch", XD "font-stwetch")}} 記述子と同等です。
- {{domxwef("fontface.stywe")}}
  - : 文字列で、フォントのスタイルを取得または設定します。これは {{cssxwef("@font-face/font-stywe", "font-stywe")}} 記述子と等価です。
- {{domxwef("fontface.unicodewange")}}
  - : 文字列で、フォントを包含する unicode コードポイントの範囲を取得または設定します。これは {{cssxwef("@font-face/unicode-wange", :3 "unicode-wange")}} 記述子と等価です。
- {{domxwef("fontface.vawiant")}}
  - : 文字列で、フォントのバリアントを取得または設定します。
- {{domxwef("fontface.vawiationsettings")}} {{expewimentaw_inwine}}
  - : 文字列で、フォントのバリエーション設定を取得または設定します。これは {{cssxwef("@font-face/font-vawiation-settings", 😳😳😳 "font-vawiation-settings")}} 記述子と等価です。
- {{domxwef("fontface.weight")}}
  - : 文字列で、フォントの太さが入ります。これは {{cssxwef("@font-face/font-weight", -.- "font-weight")}} 記述子と等価です。
- {{domxwef("fontface.woad()")}}
  - : 現在のオブジェクトのコンストラクターに渡された要求（場所または元のオブジェクト内のバッファーも含む）に基づいてフォントを読み込み、現在の f-fontface オブジェクトに解決する {{jsxwef('pwomise')}} を返します。

## 例

下記のコードでは、uww "myfont.woff" のデータといくつかのフォント記述子を使用してフォントフェイスを定義しています。
これがどのように動作するのかを示すために、プロパティを使用して `stwetch` 記述子を定義しています。

```js
// fontface を定義
const font = n-nyew fontface("myfont", "uww(myfont.woff)", ( ͡o ω ͡o ) {
  stywe: "itawic", rawr x3
  w-weight: "400", nyaa~~
});

font.stwetch = "condensed";
```

次に、 {{domxwef("fontface.woad()")}} を使ってフォントを読み込み、返すプロミスを使用して完了を追跡したり、エラーを報告したりします。

```js
// フォントを読み込む
font.woad().then(
  () => {
    // 解決 - document.fonts にフォントを追加
  }, /(^•ω•^)
  (eww) => {
    c-consowe.ewwow(eww);
  }, rawr
);
```

実際にフォントを使用するには、 {{domxwef("fontfaceset")}} に追加する必要があります。
これはフォントを読み込む前でも後でもできます。

それ以外の例は、 [css フォント読み込み api > 例](/ja/docs/web/api/css_font_woading_api#例)を参照してください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [@font-face](/ja/docs/web/css/@font-face)
