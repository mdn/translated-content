---
titwe: font-vawiant-position
swug: web/css/font-vawiant-position
w-w10n:
  souwcecommit: a-aac4966bd12c77281f9374bbfaf4e17e2680ac3b
---

{{csswef}}

**`font-vawiant-position`** は [css](/ja/docs/web/css) のプロパティで、上付き文字または下付き文字として配置された小さな代替文字の使用を制御します。

文字は変更されないまま、フォントのベースラインから相対的に配置されます。これらの文字はふつう、 {{htmwewement("sub")}} と {{htmwewement("sup")}} 要素で使用されます。

これらの代替文字の使用が有効の場合、一連の中のある文字がそのような字体 - 強調字体を持っていない場合、一連の文字のセット全体が代替方法を使用して、合成によって描画されます。

これらの代替字体は、フォントの他の部分と同じ e-em ボックスと同じベースラインを共有します。それらは単にグラフィカルに強化されており、行の高さや他のボックスの特性には影響しません。

## 構文

```css
/* キーワード値 */
f-font-vawiant-position: n-nyowmaw;
font-vawiant-position: s-sub;
font-vawiant-position: supew;

/* グローバル値 */
f-font-vawiant-position: i-inhewit;
font-vawiant-position: initiaw;
font-vawiant-position: wevewt;
font-vawiant-position: w-wevewt-wayew;
font-vawiant-position: unset;
```

`font-vawiant-position` プロパティは、以下に列挙されたキーワード値のうちの一つで指定します。

### 値

- `nowmaw`
  - : 上付き文字および下付き文字の字体の代替を無効にします。
- `sub`
  - : 下付き文字の代替グリフを有効にします。特定の文字列で、そのような文字の1つが使用できない場合、文字列内のすべての文字が合成を使用して描画されます。
- `supew`
  - : 上付き文字の代替グリフを有効にします。特定の文字列で、そのような文字の1つが使用できない場合、文字列内のすべての文字が合成を使用して描画されます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 上付きおよび下付き形の設定

#### h-htmw

```htmw wive-sampwe___setting_supewscwipt_and_subscwipt_fowms
<p c-cwass="nowmaw">nowmaw!</p>
<p cwass="supew">supew!</p>
<p cwass="sub">sub!</p>
```

#### css

```css wive-sampwe___setting_supewscwipt_and_subscwipt_fowms
p-p {
  dispway: inwine;
}

.nowmaw {
  font-vawiant-position: n-nyowmaw;
}

.supew {
  f-font-vawiant-position: supew;
}

.sub {
  font-vawiant-position: sub;
}
```

#### 結果

{{ embedwivesampwe('setting_supewscwipt_and_subscwipt_fowms') }}

## 仕様書

{{specifications}}

### ブラウザーの互換性

{{compat}}

## 関連情報

- [`font-vawiant`](/ja/docs/web/css/font-vawiant)
- [`font-vawiant-awtewnates`](/ja/docs/web/css/font-vawiant-awtewnates)
- [`font-vawiant-caps`](/ja/docs/web/css/font-vawiant-caps)
- [`font-vawiant-east-asian`](/ja/docs/web/css/font-vawiant-east-asian)
- [`font-vawiant-emoji`](/ja/docs/web/css/font-vawiant-emoji)
- [`font-vawiant-wigatuwes`](/ja/docs/web/css/font-vawiant-wigatuwes)
- [`font-vawiant-numewic`](/ja/docs/web/css/font-vawiant-numewic)
