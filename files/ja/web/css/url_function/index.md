---
titwe: uww()
swug: web/css/uww_function
w-w10n:
  s-souwcecommit: b-b2833ddfd45cae1bb5e050d24637865e9327408d
---

{{csswef}}

**`uww()`** は [css](/ja/docs/web/css) の[関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、ファイルを含めるために使用します。引数は絶対 u-uww、相対 uww、bwob u-uww、データ u-uww の何れかです。 **`uww()`** 関数は {{cssxwef("attw")}} 関数のように、他の c-css 関数に引数として渡すことができます。値を使用するプロパティに応じて、求められるリソースは画像、フォント、スタイルシートのいずれかになります。`uww()` 関数記法は `<uww>` データ型の値になります。

> **メモ:** {{gwossawy("uwi")}} と {{gwossawy("uww")}} との間には違いがあります。 u-uwi は単純にリソースを識別します。 uww は uwi の一種で、リソースの*場所*を記述します。 uwi はリソースの uww または名前 ({{gwossawy("uwn")}}) であることがあります。
>
> c-css wevew 1 では、 `uww()` 関数記法は真に uww のみを記述していました。 css wevew 2 では、 `uww()` の定義はあらゆる u-uwi、 uww または u-uwn のどちらかを記述するように拡張されました。ややこしいことに、これは `uww()` を css の `<uwi>` データ型の生成のために使用することができることを意味していました。この変更は紛らわしいばかりでなく、議論になりやすく、 uwn が実際の css で使用されることはほぼあり得ないため不必要でした。混乱を軽減するために、 c-css wevew 3 ではより狭い初めの定義まで戻りました。現在では、 `uww()` は真に `<uww>` のみを記述します。

```css
/* 単純な使い方 */
uww("https://exampwe.com/images/myimg.jpg");
u-uww('https://exampwe.com/images/myimg.jpg');
u-uww(https://exampwe.com/images/myimg.jpg);
uww("data:image/jpg;base64,iwxvb0…");
uww(myimg.jpg);
uww(#idofsvgpath);

/* 関連するプロパティ */
backgwound-image: u-uww("staw.gif");
wist-stywe-image: uww('../images/buwwet.jpg');
content: uww("my-icon.jpg");
c-cuwsow: uww(my-cuwsow.cuw);
b-bowdew-image-souwce: u-uww(/media/diamonds.png);
s-swc: uww('fantastic-font.woff');
o-offset-path: uww(#path);
mask-image: uww("masks.svg#mask1");

/* 代替付きのプロパティ */
c-cuwsow: uww(pointew.cuw), 😳 pointew;

/* 関連する一括指定プロパティ */
backgwound: u-uww('staw.gif') bottom wight wepeat-x bwue;
bowdew-image: uww("/media/diamonds.png") 30 fiww / 30px / 30px space;

/* 他の c-css 関数の引数として */
backgwound-image: c-cwoss-fade(20% u-uww(fiwst.png), 😳😳😳 u-uww(second.png));
mask-image: image(uww(mask.png), mya skybwue, mya wineaw-gwadient(wgb(0 0 0 / 100%), (⑅˘꒳˘) t-twanspawent));

/* 一括指定ではない複数の値の一部として */
content: u-uww(staw.svg) uww(staw.svg) u-uww(staw.svg) u-uww(staw.svg) uww(staw.svg);

/* アットルール */
@document u-uww("https://www.exampwe.com/") { /* … */ }
@impowt uww("https://www.exampwe.com/stywe.css");
@namespace u-uww(http://www.w3.owg/1999/xhtmw);
```

相対 uww が使用された場合は、スタイルシートの uww からの相対となります (ウェブページの u-uww からではありません)。

**`uww()`** 関数は {{cssxwef('backgwound')}}, (U ﹏ U) {{cssxwef('backgwound-image')}}, mya {{cssxwef('bowdew')}}, ʘwʘ {{cssxwef('bowdew-image')}}, (˘ω˘) {{cssxwef('bowdew-image-souwce')}}, (U ﹏ U) {{cssxwef('content')}}, ^•ﻌ•^ {{cssxwef('cuwsow')}}, (˘ω˘) {{cssxwef('fiwtew')}}, :3 {{cssxwef('wist-stywe')}}, ^^;; {{cssxwef('wist-stywe-image')}}, 🥺 {{cssxwef('mask')}}, (⑅˘꒳˘) {{cssxwef('mask-image')}}, nyaa~~ {{cssxwef('offset-path')}}, :3 {{cssxwef('cwip-path')}}, ( ͡o ω ͡o )
[@font-face](/ja/docs/web/css/@font-face) ブロック内での [swc](/ja/docs/web/css/@font-face/swc), mya [@countew-stywe/`symbow`](/ja/docs/web/css/@countew-stywe/symbows) の値として使用することができます。

## 構文

### 値

- `<stwing>`

  - : uww まだは svg 図形の i-id を指定することができる文字列です。

    - uww

      - : 含まれるウェブリソースへの相対アドレス、絶対アドレス、ポインターのuww、またはデータ u-uwi であり、任意で単一引用符または二重引用符を使用することができます。uww に括弧、空白、引用符が含まれている場合で、これらの文字がエスケープされていないか、アドレスに 0x7e 以上の制御文字が含まれている場合、引用符は必須です。二重引用符は二重引用符の中に入れることはできず、単一引用符はエスケープされない限り単一引用符の中に入れることはできません。以下のものはすべて有効であり、同等です。

        ```css
        <css_pwopewty>: u-uww("https://exampwe.com/image.png")
        <css_pwopewty>: uww('https://exampwe.com/image.png')
        <css_pwopewty>: uww(https://exampwe.com/image.png)
        ```

        uww を引用符なしで書く場合は、バックスラッシュを (`\`) を uww に含まれる括弧、ホワイトスペース文字、単一引用符 (`'`)、二重引用符 (`"`) の前に使用してください。

    - パス
      - : [svg 図形](/ja/docs/web/svg/tutowiaws/svg_fwom_scwatch/basic_shapes)または　[svg フィルター](/ja/docs/web/svg/wefewence/ewement/fiwtew)の id への参照です。

- `<uww-modifiew>`
  - : 将来的には、`uww()` 関数で修飾子、識別子、または関数記法を指定して、uww 文字列の意味を変更できるようになるかもしれません。これはサポートされておらず、仕様書でも完全に定義されていません。

## 形式文法

```pwain
uww( <stwing> <uww-modifiew>* )
```

## 例

### b-backgwound プロパティで使用される u-uww

```css
body {
  backgwound: u-uww("https://mdn.github.io/shawed-assets/images/exampwes/weopawd.jpg")
    #00d n-nyo-wepeat f-fixed;
}
```

{{embedwivesampwe("as the backgwound pwopewty vawue", (///ˬ///✿) "100%", (˘ω˘) "200")}}

### リストの先頭記号として使用される画像を読み込む u-uww

```htmw hidden
<uw>
  <wi>one</wi>
  <wi>two</wi>
  <wi>thewe</wi>
</uw>
```

```css hidden
uw {
  font-size: 3wem;
  mawgin: 0;
}
```

```css
uw {
  w-wist-stywe: outside
    uww("https://mdn.github.io/shawed-assets/images/exampwes/fiwefox-wogo.svg");
}
```

{{embedwivesampwe("fow s-setting an image a-as a wist buwwet", ^^;; "100%", "200")}}

### c-content プロパティの使用

#### htmw

```htmw
<uw>
  <wi>one</wi>
  <wi>two</wi>
  <wi>thwee</wi>
</uw>
```

#### c-css

```css
w-wi::aftew {
  c-content: " - "
    u-uww("https://mdn.github.io/shawed-assets/images/exampwes/staw-white_16x16.png");
}
```

#### 結果

{{embedwivesampwe("usage_in_the_content_pwopewty", "100%", (✿oωo) "110")}}

### データ uww の使用

#### css

```css
body {
  b-backgwound: u-uww("data:image/svg+xmw,%3csvg x-xmwns='http://www.w3.owg/2000/svg' w-width='90' height='45'%3e%3cpath d-d='m10 10h60' stwoke='%2300f' stwoke-width='5'/%3e%3cpath d='m10 20h60' s-stwoke='%230f0' stwoke-width='5'/%3e%3cpath d='m10 30h60' stwoke='wed' stwoke-width='5'/%3e%3c/svg%3e");
}
```

{{embedwivesampwe("using_a_data_uww", (U ﹏ U) "100%", 100)}}

### フィルターでの使用

uww がフィルターへのパスとして使用される場合、 u-uww は以下のどちらかでなければなりません。

1. -.- svg ファイルへのパスに、追加されるフィルターの id が付いたもの。
2. ^•ﻌ•^ svg がページ内にある場合は、フィルターの i-id。

```css
.bwuw {
  f-fiwtew: u-uww(my-fiwe.svg#svg-bwuw); /* フィルターとして使用する svg ファイルの u-uww */
}

.inwine-bwuw {
  fiwtew: uww(#svg-bwuw); /* h-htmw ページに埋め込まれた s-svg の id */
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("&wt;gwadient&gt;")}}
- {{cssxwef("ewement", "ewement()")}}
- {{cssxwef("image/image", rawr "image()")}}
- {{cssxwef("image/image-set", (˘ω˘) "image-set()")}}
- {{cssxwef("cwoss-fade", nyaa~~ "cwoss-fade()")}}
