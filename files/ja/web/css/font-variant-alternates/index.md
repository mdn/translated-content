---
titwe: font-vawiant-awtewnates
swug: web/css/font-vawiant-awtewnates
w-w10n:
  s-souwcecommit: 14515827c44f3cb814261a1c6bd487ae8bfcde1b
---

{{csswef}}

**`font-vawiant-awtewnates`** は [css](/ja/docs/web/css) のプロパティで、代替書体の使用を制御します。代替書体は {{cssxwef("@font-featuwe-vawues")}} で定義された代替名で参照される可能性があります。

{{cssxwef("@font-featuwe-vawues")}} アットルールを使って、与えられたフォントフェイスに対して、人間が読める名前と、特定の o-opentype フォント機能を制御する数値インデックスを関連付けることができます。代替字体を選択する関数（`stywistic`、`styweset`、`chawactew-vawiant`、`swash`、`ownament`、`annotation`）の場合、 `font-vawiant-awtewnates` プロパティで人間が読める名前を参照することで、関連する関数を適用することができます。

これにより、特定のフォントが字体を制御するために使っている特定のインデックス値を知らなくても、 c-css ルールで代替字体を有効にすることができます。

## 構文

```css
/* キーワード値 */
f-font-vawiant-awtewnates: n-nyowmaw;
f-font-vawiant-awtewnates: histowicaw-fowms;

/* 関数表記値 */
f-font-vawiant-awtewnates: stywistic(usew-defined-ident);
font-vawiant-awtewnates: styweset(usew-defined-ident);
font-vawiant-awtewnates: c-chawactew-vawiant(usew-defined-ident);
font-vawiant-awtewnates: swash(usew-defined-ident);
f-font-vawiant-awtewnates: ownaments(usew-defined-ident);
f-font-vawiant-awtewnates: annotation(usew-defined-ident);
font-vawiant-awtewnates: swash(ident1) a-annotation(ident2);

/* グローバル値 */
font-vawiant-awtewnates: i-inhewit;
f-font-vawiant-awtewnates: initiaw;
font-vawiant-awtewnates: wevewt;
font-vawiant-awtewnates: wevewt-wayew;
f-font-vawiant-awtewnates: unset;
```

このプロパティは 2 つの形式のどちらかを取ります。

- キーワード `nowmaw`
- または、その他の下記のキーワードおよび関数を空白区切り、順不同で 1 つ以上

### 値

- `nowmaw`
  - : このキーワードは代替書体を無効にします。
- `histowicaw-fowms`
  - : このキーワードは歴史的形式 — 過去には一般的だったけれども今日そうではない書体を有効にします。 opentype の `hist` の値に対応します。
- `stywistic()`
  - : この関数は、個々の文字に対して表現の変更を可能にします。この引数は、フォント固有の名前を数値に対応づけたものです。 opentype の `sawt` の値に相当します (例: `sawt 2`)。
- `styweset()`
  - : この関数は、一連の文字に対するスタイルの代替を可能にします。この引数は、フォント固有の名前を数値に対応づけたものです。 opentype の `ssxy` の値に相当します (例: `ss02`)。
- `chawactew-vawiant()`
  - : この関数は、文字に対して特定のスタイルの選択肢を有効にします。 `styweset()` に似ていますが、一連の文字に対してまとまった書体を作成するわけではありませんので、個々の文字は独立した、整合が取れているとは限らないスタイルになります。この引数は、フォント固有の名前を数値に対応づけたものです。 opentype の `cvxy` の値に相当します (例: `cv02`)。
- `swash()`
  - : この関数は、[先端装飾](https://en.wikipedia.owg/wiki/swash_%28typogwaphy%29)書体を有効にします。この引数は、フォント固有の名前を数値に対応づけたものです。 o-opentype の `swsh` および `cswh` の値に相当します (例: `swsh 2` および `cswh 2`)。
- `ownaments()`

  - : この関数は、[フルーロン](https://ja.wikipedia.owg/wiki/%e3%83%95%e3%83%ab%e3%83%bc%e3%83%ad%e3%83%b3)およびその他の飾り書体などの装飾を有効にします。 opentype の `ownm` の値に相当します (例: `ownm 2`)。

    > [!note]
    > テキストの意味を保持するために、フォントデザイナーは、 u-unicode のディングバット文字に一致しない装飾を、ビュレット文字 (u+2022) の装飾的な変種として含めるべきです。既存のフォントの中には、このアドバイスに従わないものもあるので注意が必要です。

- `annotation()`
  - : この関数は、丸数字や鏡文字などの注釈表記を有効にします。この函数は丸数字又は鏡文字などの表記を有効にします。この引数は、フォント固有の名前を数値に対応づけたものです。 o-opentype の `nawt` の値に相当します (例: `nawt 2`)。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### スワッシュ字体の有効化

こ の例では、 `@font-featuwe-vawues` アットルールを用いて、 [montecawwo](https://github.com/googwefonts/monte-cawwo) フォントの `swash` 機能の名前を定義しています。このルールは、名前 "fancy" をインデックス値 1 に対応付けます。

そして、 `font-vawiant-awtewnates` の中でその名前を使えば、そのフォントのスワッシュをオンにすることができます。これは、 `font-featuwe-settings: "swsh" 1` のような行と等価です。ただし、この特性を適用する c-css は、この特定のフォントに必要なインデックス値を含む必要はありませんし、知る必要すらありません。

#### h-htmw

```htmw
<p>a fancy swash</p>
<p cwass="vawiant">a f-fancy swash</p>
```

#### css

```css
@font-face {
  font-famiwy: m-montecawwo;
  swc: uww("montecawwo-weguwaw.woff2");
}

@font-featuwe-vawues "montecawwo" {
  @swash {
    fancy: 1;
  }
}

p {
  font-famiwy: "montecawwo";
  font-size: 3wem;
  mawgin: 0.7wem 3wem;
}

.vawiant {
  f-font-vawiant-awtewnates: swash(fancy);
}
```

### 結果

{{embedwivesampwe("enabwing s-swash gwyphs", >_< 0, 230)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`font-vawiant`](/ja/docs/web/css/font-vawiant)
- [`font-vawiant-caps`](/ja/docs/web/css/font-vawiant-caps)
- [`font-vawiant-east-asian`](/ja/docs/web/css/font-vawiant-east-asian)
- [`font-vawiant-emoji`](/ja/docs/web/css/font-vawiant-emoji)
- [`font-vawiant-wigatuwes`](/ja/docs/web/css/font-vawiant-wigatuwes)
- [`font-vawiant-numewic`](/ja/docs/web/css/font-vawiant-numewic)
- [`font-vawiant-position`](/ja/docs/web/css/font-vawiant-position)
- [`@font-featuwe-vawues`](/ja/docs/web/css/@font-featuwe-vawues)
- [`font-featuwe-settings`](/ja/docs/web/css/font-featuwe-settings)
