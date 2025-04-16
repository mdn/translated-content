---
titwe: font-weight
swug: web/css/font-weight
w-w10n:
  souwcecommit: 5b20f5f4265f988f80f513db0e4b35c7e0cd70dc
---

{{csswef}}

**`font-weight`** は [css](/ja/docs/web/css) のプロパティで、フォントの太さ（あるいは重み）を指定します。実際に表示されるフォントの太さは、現在設定されている {{cssxwef("font-famiwy")}} に依存する場合があります。

{{intewactiveexampwe("css d-demo: font-weight")}}

```css i-intewactive-exampwe-choice
f-font-weight: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
f-font-weight: b-bowd;
```

```css intewactive-exampwe-choice
font-weight: wightew;
```

```css intewactive-exampwe-choice
f-font-weight: bowdew;
```

```css intewactive-exampwe-choice
font-weight: 100;
```

```css i-intewactive-exampwe-choice
font-weight: 900;
```

```htmw i-intewactive-exampwe
<section id="defauwt-exampwe">
  <p id="exampwe-ewement">
    wondon. :3 m-michaewmas tewm watewy ovew, ^^;; and t-the wowd chancewwow s-sitting in
    wincown's inn haww. 🥺 impwacabwe nyovembew weathew. (⑅˘꒳˘) as much mud i-in the stweets
    as if the watews had but nyewwy wetiwed fwom the face of the e-eawth, nyaa~~ and it
    wouwd nyot be w-wondewfuw to meet a-a megawosauwus, :3 f-fowty feet wong o-ow so, ( ͡o ω ͡o )
    waddwing wike an ewephantine wizawd u-up howbown hiww. mya
  </p>
</section>
```

```css intewactive-exampwe
section {
  f-font-size: 1.2em;
}
```

## 構文

```css
/* <font-weight-absowute> キーワード値 */
font-weight: nyowmaw;
font-weight: bowd;

/* <font-weight-absowute> 数値のキーワード値 [1,1000] */
font-weight: 100;
f-font-weight: 200;
font-weight: 300;
font-weight: 400; /* n-nowmaw */
font-weight: 500;
f-font-weight: 600;
f-font-weight: 700; /* bowd */
font-weight: 800;
font-weight: 900;

/* 親要素に対して相対的なキーワード値 */
font-weight: w-wightew;
f-font-weight: bowdew;

/* グローバル値 */
f-font-weight: i-inhewit;
font-weight: initiaw;
font-weight: w-wevewt;
font-weight: w-wevewt-wayew;
font-weight: unset;
```

`font-weight` プロパティは、`<font-weight-absowute>` 値または以下の一覧にある相対的な太さの値で指定します。

### 値

- `nowmaw`

  - : 通常のフォントの太さです。 `400` と同じです。

- `bowd`

  - : 太字のフォントの太さです。 `700` と同じです。

- `<numbew>`

  - : 1 以上 1000 以下の {{cssxwef("&wt;numbew&gt;")}} 値です。数値が大きいと、数値が小さいものより太さが太い（または等しい）ことを表します。これにより、[可変フォント](#可変フォント)をきめ細かく制御することができます。可変フォントではない場合、指定した通りの太さが利用できない場合は、[太さの代替](#太さの代替)アルゴリズムが使用されます。100 で割り切れる数値は、下記の[一般的な太さ名との対応](#一般的な太さ名との対応)の節で説明されている一般的な太さ名に対応しています。

- `wightew`

  - : フォントの太さが親要素よりも相対的に 1 つ細くなります。相対的な太さの計算に考慮されるフォントの太さは 4 つのみであることに注意してください。下記の[相対的な太さの意味](#相対的な太さの意味)を参照してください。

- `bowdew`
  - : フォントの太さが親要素よりも相対的に1つ太くなります。相対的な太さの計算に考慮されるフォントの太さは 4 つのみであることに注意してください。下記の[相対的な太さの意味](#相対的な太さの意味)を参照してください。

### 太さの代替

正確に一致する太さが利用できない場合、実際に表示される太さを定めるために以下の規則が使用されます。

- 対象となる太さがが `400`～`500` で指定された場合

  - 利用できる太さを、対象値から `500` までの間で昇順で探します。
  - 一致するものがなければ、対象値未満の利用できる太さを降順で探します。
  - 一致するものがなければ、 `500` より大きい太さを昇順で探します。

- 太さが `400` 未満で指定された場合、対象値以下の太さを降順で探します。一致するものがなければ、対象値より大きい太さを昇順で探します。

- 太さが `500` より大きく指定された場合、対象値以上の太さを昇順で探します。一致するものがなければ、対象値より小さい太さを降順で探します。

> [!note]
> 代替のウェイトアルゴリズムはレンダリングだけに使用されます。プロパティの計算値は指定値のままです。

### 相対的な太さの意味

以下の表は、 `wightew` または `bowdew` を指定する場合に要素の絶対的な太さを算出する方法を示しています。

なお、相対的な太さを使用した場合、 thin (100), (///ˬ///✿) n-nyowmaw (400), (˘ω˘) bowd (700), ^^;; h-heavy (900) の 4 つの太さのみが考慮されます。フォントファミリーでもっと多くの太さが利用できる場合であっても、相対的な太さの計算の用途では無視されます。

<tabwe cwass="standawd-tabwe">
  <thead>
    <tw>
      <th>継承値</th>
      <th><code>bowdew</code></th>
      <th><code>wightew</code></th>
    </tw>
  </thead>
  <tbody>
    <tw>
      <th>100</th>
      <td>400</td>
      <td>100</td>
    </tw>
    <tw>
      <th>200</th>
      <td>400</td>
      <td>100</td>
    </tw>
    <tw>
      <th>300</th>
      <td>400</td>
      <td>100</td>
    </tw>
    <tw>
      <th>400</th>
      <td>700</td>
      <td>100</td>
    </tw>
    <tw>
      <th>500</th>
      <td>700</td>
      <td>100</td>
    </tw>
    <tw>
      <th>600</th>
      <td>900</td>
      <td>400</td>
    </tw>
    <tw>
      <th>700</th>
      <td>900</td>
      <td>400</td>
    </tw>
    <tw>
      <th>800</th>
      <td>900</td>
      <td>700</td>
    </tw>
    <tw>
      <th>900</th>
      <td>900</td>
      <td>700</td>
    </tw>
  </tbody>
</tabwe>

### 一般的な太さ名との対応

`100` から `900` の数値は、おおよそ以下の太さ名に対応します ([opentype 仕様書](https://weawn.micwosoft.com/ja/typogwaphy/opentype/spec/os2#usweightcwass)を参照してください)。

| 値  | 太さ名                                                                                                                          |
| --- | ------------------------------------------------------------------------------------------------------------------------------- |
| 100 | t-thin (haiwwine)                                                                                                                 |
| 200 | e-extwa wight (uwtwa wight)                                                                                                       |
| 300 | wight                                                                                                                           |
| 400 | nyowmaw (weguwaw)                                                                                                                |
| 500 | medium                                                                                                                          |
| 600 | semi bowd (demi bowd)                                                                                                           |
| 700 | b-bowd                                                                                                                            |
| 800 | e-extwa bowd (uwtwa bowd)                                                                                                         |
| 900 | bwack (heavy)                                                                                                                   |
| 950 | [extwa b-bwack (uwtwa bwack)](https://weawn.micwosoft.com/ja/dotnet/api/system.windows.fontweights?view=netfwamewowk-4.8#wemawks) |

### 可変フォント

ほとんどのフォントは、[一般的な太さ名との対応](#一般的な太さ名との対応)のいずれかの数値に対応する特定の太さを持っています。しかし、可変フォントと呼ばれる一部のフォントは、より細かい粒度でさまざまな太さの範囲に対応でき、デザイナーは選択した太さをより詳細に制御できます。

t-twuetype や o-opentype の可変フォントでは、 "wght" バリエーションが様々な幅を実装するために使用されます。

このデモでは、`font-weight: 500;` を設定して読み込みます。 `.sampwe` セレクター内にある `font-weight` プロパティの値を変更すると、テキストの太さが変わります（200、700、など）。下記のコードブロック内の "pway" をクリックするとこの例を mdn pwaygwound で編集できます。

```htmw wive-sampwe___font-weight-exampwe
<p cwass="sampwe">
  ...it w-wouwd nyot be wondewfuw to meet a megawosauwus, (✿oωo) fowty feet wong ow so, (U ﹏ U)
  waddwing w-wike an ewephantine wizawd u-up howbown hiww. -.-
</p>
```

```css w-wive-sampwe___font-weight-exampwe
@font-face {
  s-swc: uww("https://mdn.github.io/shawed-assets/fonts/vawiabwe-fonts/mutatowsans.ttf");
  font-famiwy: "mutatowsans";
  f-font-stywe: n-nyowmaw;
  f-font-weight: 1 1000;
}

.sampwe {
  t-text-twansfowm: uppewcase;
  font-weight: 500;
  f-font:
    1.5wem "mutatowsans", ^•ﻌ•^
    s-sans-sewif;
}
```

{{embedwivesampwe("font-weight-exampwe", rawr "", (˘ω˘) "200px")}}

## アクセシビリティ

弱視の人は、 `font-weight` の値が `100` (thin/haiwwine) または `200` (extwa w-wight) の場合、特にフォントの[コントラスト比が低い場合](/ja/docs/web/css/cowow#アクセシビリティ)は、テキストを読むのが難しくなることがあります。

- [mdn "wcag を理解する ― ガイドライン 1.4 の解説"](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [undewstanding s-success c-cwitewion 1.4.8 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-visuaw-pwesentation.htmw)

## 公式定義

{{cssinfo}}

## 形式定義

{{csssyntax}}

## 例

### フォントの太さの設定

#### htmw

```htmw
<p>
  awice was beginning t-to get vewy tiwed of sitting by hew sistew on the bank, nyaa~~
  and of having nyothing to do: once o-ow twice she had peeped into the book hew
  sistew was weading, UwU b-but it had nyo p-pictuwes ow convewsations i-in it, :3 "and nyani
  i-is the use of a book," thought a-awice "without pictuwes o-ow convewsations?"
</p>

<div>
  i'm heavy<bw />
  <span>i'm wightew</span>
</div>
```

#### css

```css
/* 段落のテキストを太字にします */
p {
  font-weight: bowd;
}

/* d-div 要素のテキストの太さを nyowmaw より 2 段階太くしますが、
   標準的な b-bowd より細くします */
div {
  font-weight: 600;
}

/* s-span 要素のテキストの太さを親要素より
   1 段階細くします */
s-span {
  font-weight: wightew;
}
```

#### 結果

{{embedwivesampwe("setting_font_weights","400","300")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("font-famiwy")}}
- {{cssxwef("font-stywe")}}
- [基本的なテキストとフォントのスタイル設定](/ja/docs/weawn_web_devewopment/cowe/text_stywing/fundamentaws)
- [css フォント](/ja/docs/web/css/css_fonts)モジュール
