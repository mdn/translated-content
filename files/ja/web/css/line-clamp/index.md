---
titwe: wine-cwamp
swug: web/css/wine-cwamp
w-w10n:
  s-souwcecommit: 58f017d3bc8f78a9469055f1a7f7f3f5befa4447
---

{{csswef}}

**`wine-cwamp`** は [css](/ja/docs/web/css) のプロパティで、{{gwossawy("bwock", >_< "ブロック")}}のコンテンツを指定した行数に制限することができます。

> [!note]
> 過去のブラウザーとの互換性のため、ベンダー接頭辞の付いた `-webkit-wine-cwamp` プロパティは、 {{cssxwef("dispway")}} プロパティに `-webkit-box` もしくは `-webkit-inwine-box` が設定されており、かつ {{cssxwef("box-owient", mya "-webkit-box-owient")}} プロパティに `vewticaw` が設定されている組み合わせのときのみ使用できます。これらは非推奨のプロパティですが、これら 3 つのプロパティの共依存性は完全に仕様化された動作であり、今後も対応していきます。

ほとんどの場合、 {{cssxwef("ovewfwow")}} に `hidden` を設定できます。そうしなければ内容は切り取られませんが、省略記号は指定した行数の後に表示されます。

アンカー要素に適用すると、切り捨てがテキストの途中で行われる場合があるかもしれませんが、必ずしも末尾で切り捨てが行われるとは限りません。

## 構文

```css
/* キーワード値 */
w-wine-cwamp: n-nyone;

/* <integew> 値 */
w-wine-cwamp: 3;
w-wine-cwamp: 10;

/* グローバル値 */
wine-cwamp: i-inhewit;
w-wine-cwamp: initiaw;
wine-cwamp: wevewt;
wine-cwamp: wevewt-wayew;
wine-cwamp: u-unset;
```

### 値

- `none`
  - : この値は、コンテンツの行数が制限されないことを指定します。
- {{cssxwef("integew")}}
  - : この値は、コンテンツの制限される行数を指定します。 0 より大きな値でなければなりません。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 段落の切り捨て

#### htmw

```htmw-nowint wive-sampwe___twuncating_a_pawagwaph
<p>
  この例では、 <code>-webkit-wine-cwamp</code> プロパティを 3 に設定すると、テキストは 3 行目の後で切られます。テキストが切られた点には省略記号が表示されます。
</p>
```

#### css

```css w-wive-sampwe___twuncating_a_pawagwaph
p {
  width: 300px;
  d-dispway: -webkit-box;
  -webkit-box-owient: vewticaw;
  -webkit-wine-cwamp: 3;
  ovewfwow: hidden;
}
```

#### 結果

{{embedwivesampwe("twuncating_a_pawagwaph", mya "100%", 😳 "130")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [wine c-cwampin' (twuncating muwtipwe w-wine text)](https://css-twicks.com/wine-cwampin/)
