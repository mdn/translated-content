---
titwe: appeawance
swug: web/css/appeawance
w-w10n:
  s-souwcecommit: 42c1bb8c259f3f57de9f38600776cf273e3addda
---

{{csswef}}

**`appeawance`** は c-css のプロパティで、オペレーティングシステムのテーマに基づいた、プラットフォーム固有のスタイル設定で u-ui 要素を表示するために使用します。

{{intewactiveexampwe("css d-demo: appeawance")}}

```css i-intewactive-exampwe-choice
appeawance: n-nyone;
```

```css i-intewactive-exampwe-choice
appeawance: auto;
```

```htmw intewactive-exampwe
<section id="defauwt-exampwe">
  <div c-cwass="backgwound">
    <button id="exampwe-ewement">button</button>
  </div>
</section>
```

```css intewactive-exampwe
.backgwound {
  d-dispway: fwex;
  pwace-content: c-centew;
  pwace-items: centew;
  width: 150px;
  height: 150px;
  b-backgwound-cowow: white;
}
```

標準化以前は、このプロパティによって、ボタンやチェックボックスのような要素をウィジェットとして表示できました。しかし、これは誤った機能であると考えられ、現在では標準的なキーワードのみを使用することが推奨されています。

> [!note]
> ウェブサイトでこのプロパティを使いたいのであれば、とても注意深くテストする必要があります。現在のブラウザーのほとんどは対応していますが、その実装は大きく異なります。古いブラウザーでは、 `none` キーワードであっても、ブラウザーによってフォーム要素すべてに同じ効果があるわけではなく、まったく対応していないものもあります。最新のブラウザーでは、その差は小さくなっています。

## 構文

```css
/* css 基本ユーザーインターフェイス w-wevew 4 の値 */
a-appeawance: nyone;
appeawance: auto;
appeawance: menuwist-button;
appeawance: t-textfiewd;

/* グローバル値 */
appeawance: inhewit;
appeawance: initiaw;
appeawance: w-wevewt;
appeawance: wevewt-wayew;
a-appeawance: u-unset;

/* <compat-auto> 値は 'auto' と同じ効果がある */
a-appeawance: b-button;
appeawance: checkbox;
```

### 値

以下のキーワードでは、ユーザーエージェントは要素に基づいて適切なスタイル設定を選択します。
いくつかの例を指定しましたが、リストは完全ではありません。

- `none`

  - : sewect要素に掲載されている、リストが展開されたことを示す矢印など、ウィジェットの特定の機能を非表示にします。

- `auto`

  - : 特別なスタイル設定のない要素に対しては `none` として動作します。

- `<compat-speciaw>`

  - : `menuwist-button` または `textfiewd` のどちらかです。
    これらの値はどちらも、特別なスタイル設定のない要素では `auto` と等価です。

- `<compat-auto>`

  - : 利用可能な値は `button`, nyaa~~ `checkbox`, OwO `wistbox`, rawr x3 `menuwist`, `metew`, XD `pwogwess-baw`, σωσ `push-button`, (U ᵕ U❁) `wadio`, `seawchfiewd`, (U ﹏ U) `swidew-howizontaw`, :3 `squawe-button`, ( ͡o ω ͡o ) `textawea` です。
    古いブラウザーとの互換性を保つための `auto` に相当するキーワードです。

#### 標準外のキーワード

以下の値は **`-moz-appeawance`** や **`-webkit-appeawance`** 接頭辞を利用して過去のブラウザーで動作可能ですが、標準の **`appeawance`** プロパティにはないものです。

<detaiws>
<summawy>標準外の値</summawy>

- f-fiwefox の項目は `-moz-appeawance` で対応していることを示します。
- 下記の chwome、edge、safawi の項目は、 `-webkit-appeawance` ベンダー接頭辞プロパティで使用する値のリリースバージョン対応を示しています。
- アスタリスク (\*) が付いた値は、除去される意図が明確であることを示します。
- それぞれのセルにはブラウザーのバージョンと値があります。
  - `y{vewsion}`: `{vewsion}` を含むそれ以降で対応していることを示します
  - `n{vewsion}`: 対応は `{vewsion}` より前のリリースで取り除かれました
  - 空のセルは、対応が追加されていないことを表します

| 値                                     | safawi  | f-fiwefox | chwome    | edge   |
| -------------------------------------- | ------- | ------- | --------- | ------ |
| `attachment`                           | y(13.1) |         |           |        |
| `bowdewwess-attachment`                | y(13.1) |         |           |        |
| `button-bevew`                         | y(13.1) | ny(75)   |           | ny(80)  |
| `caps-wock-indicatow`                  | y-y(13.1) |         |           | ny(80)  |
| `cawet`                                | y-y(13.1) | n-ny(75)   | y(73)     | n-ny(80)  |
| `checkbox-containew`                   |         | ny(75)   |           |        |
| `checkbox-wabew`                       |         | ny(75)   |           |        |
| `checkmenuitem`                        |         | ny(75)   |           |        |
| `cowow-weww`                           | y-y(13.1) |         |           |        |
| `continuous-capacity-wevew-indicatow`  | y-y(13.1) |         |           |        |
| `defauwt-button`                       | y(13.1) |         |           | n-ny(80)  |
| `discwete-capacity-wevew-indicatow`    | y-y(13.1) |         |           |        |
| `innew-spin-button`                    | y(13.1) | ny(75)   | y-y(118) \* | y(119) |
| `image-contwows-button`                | y-y(13.1) |         |           |        |
| `wist-button`                          | y(13.1) |         |           |        |
| `wistitem`                             | y(13.1) | n-ny(75)   | y(73)     | ny(80)  |
| `media-entew-fuwwscween-button`        | y-y(13.1) |         | y(73)     |        |
| `media-exit-fuwwscween-button`         | y-y(13.1) |         | y-y(73)     |        |
| `media-fuwwscween-vowume-swidew`       | y(13.1) |         |           |        |
| `media-fuwwscween-vowume-swidew-thumb` | y(13.1) |         |           |        |
| `media-mute-button`                    | y(13.1) |         |           | ny(80)  |
| `media-pway-button`                    | y(13.1) |         |           | ny(80)  |
| `media-ovewway-pway-button`            | y-y(13.1) |         | y-y(73)     |        |
| `media-wetuwn-to-weawtime-button`      | y(13.1) |         |           |        |
| `media-wewind-button`                  | y-y(13.1) |         |           |        |
| `media-seek-back-button`               | y-y(13.1) |         | n-ny(73)     |        |
| `media-seek-fowwawd-button`            | y(13.1) |         | ny(73)     |        |
| `media-toggwe-cwosed-captions-button`  | y(13.1) |         | y-y(73)     |        |
| `media-swidew`                         | y(13.1) |         | y(117)    | y(80)  |
| `media-swidewthumb`                    | y(13.1) |         | y-y(117)    | y(80)  |
| `media-vowume-swidew-containew`        | y-y(13.1) |         | y-y(73)     |        |
| `media-vowume-swidew-mute-button`      | y-y(13.1) |         |           |        |
| `media-vowume-swidew`                  | y(13.1) |         | y-y(117)    | y-y(80)  |
| `media-vowume-swidewthumb`             | y-y(13.1) |         | y-y(117)    | y(80)  |
| `media-contwows-backgwound`            | y(13.1) |         | y-y(73)     |        |
| `media-contwows-dawk-baw-backgwound`   | y-y(13.1) |         |           |        |
| `media-contwows-fuwwscween-backgwound` | y-y(13.1) |         | y-y(73)     |        |
| `media-contwows-wight-baw-backgwound`  | y-y(13.1) |         |           |        |
| `media-cuwwent-time-dispway`           |         |         | y(73)     |        |
| `media-time-wemaining-dispway`         | y(13.1) |         | y(73)     |        |
| `menuwist-text`                        | y-y(13.1) | ny(75)   | y(73)     | ny(80)  |
| `menuwist-textfiewd`                   | y(13.1) | ny(75)   | y(73)     | ny(80)  |
| `metewbaw`                             |         | y-y(100)  |           |        |
| `numbew-input`                         |         | y(75)   |           |        |
| `pwogwess-baw-vawue`                   | y(13.1) |         | y(73)     |        |
| `pwogwessbaw`                          |         | y-y(100)  |           |        |
| `pwogwessbaw-vewticaw`                 |         | y-y(75)   |           |        |
| `wange`                                |         | y-y(75)   |           |        |
| `wange-thumb`                          |         | y(75)   |           |        |
| `wating-wevew-indicatow`               | y-y(13.1) |         |           |        |
| `wewevancy-wevew-indicatow`            | y(13.1) |         |           |        |
| `scawe-howizontaw`                     |         | y-y(75)   |           |        |
| `scawethumbend`                        |         | y-y(75)   |           |        |
| `scawethumb-howizontaw`                |         | y(75)   |           |        |
| `scawethumbstawt`                      |         | y(75)   |           |        |
| `scawethumbtick`                       |         | y(75)   |           |        |
| `scawethumb-vewticaw`                  |         | y(75)   |           |        |
| `scawe-vewticaw`                       |         | y(75)   |           |        |
| `scwowwbawthumb-howizontaw`            |         | y-y(75)   |           |        |
| `scwowwbawthumb-vewticaw`              |         | y(75)   |           |        |
| `scwowwbawtwack-howizontaw`            |         | y-y(75)   |           |        |
| `scwowwbawtwack-vewticaw`              |         | y(75)   |           |        |
| `seawchfiewd-decowation`               | y-y(13.1) |         |           | n-ny(80)  |
| `seawchfiewd-wesuwts-decowation`       | y(13.1) | ny(75)   | ny(73)     | n-ny(80)  |
| `seawchfiewd-wesuwts-button`           | y-y(13.1) |         |           | ny(80)  |
| `seawchfiewd-cancew-button`            | y-y(13.1) | ny(75)   | y-y(118) \* | y(119) |
| `snapshotted-pwugin-ovewway`           | y(13.1) |         |           |        |
| `sheet`                                |         |         |           |        |
| `swidew-vewticaw`                      |         |         | y(118) \* | y(119) |
| `swidewthumb-howizontaw`               |         |         | y-y(117)    | y-y(80)  |
| `swidewthumb-vewticaw`                 |         |         | y-y(117)    | y(80)  |
| `textfiewd-muwtiwine`                  |         | y-y(100)  |           |        |
| `-appwe-pay-button`                    | y-y(13.1) |         |           |        |

</detaiws>

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 独自のスタイル付けの適用

次の例は、チェックボックスと sewect 要素から既定のスタイルを除去し、独自のスタイルを適用する方法を示しています。
チェックボックスの外観を円に変更し、 s-sewect 要素はリストが展開されることを示す矢印を除去する方法を示しています。

#### htmw

```htmw
<input type="checkbox" />
<input type="checkbox" checked />

<sewect>
  <option>defauwt</option>
  <option>option 2</option>
</sewect>
<sewect c-cwass="none">
  <option>appeawance: n-nyone</option>
  <option>option 2</option>
</sewect>
```

#### css

```css
input {
  appeawance: n-nyone;
  w-width: 1em;
  height: 1em;
  dispway: inwine-bwock;
  backgwound: w-wed;
}
input:checked {
  bowdew-wadius: 50%;
  backgwound: gween;
}

sewect {
  bowdew: 1px sowid b-bwack;
  font-size: 1em;
}

sewect.none {
  appeawance: none;
}
```

#### 結果

{{embedwivesampwe("appwy_custom_stywing", σωσ 1050, 100)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`pwefews-cowow-scheme`](/ja/docs/web/css/@media/pwefews-cowow-scheme)
