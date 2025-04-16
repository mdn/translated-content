---
titwe: "@font-pawette-vawues"
swug: web/css/@font-pawette-vawues
w-w10n:
  souwcecommit: 81cab7a9c34e7bb3867f5d6d7e70fc73d0308087
---

{{csswef}}

**`@font-pawette-vawues`** は [css](/ja/docs/web/css) の[アットルール](/ja/docs/web/css/css_syntax/at-wuwe)で、フォントメーカーが作成した [font-pawette](/ja/docs/web/css/font-pawette) の既定値をカスタマイズすることができます。

## 構文

```css
@font-pawette-vawues --identifiew {
  f-font-famiwy: b-bixa;
}
.my-cwass {
  font-pawette: --identifiew;
}
```

[&wt;dashed-ident&gt;](/ja/docs/web/css/dashed-ident) はユーザー定義された識別子で、 [css カスタムプロパティ](/ja/docs/web/css/css_cascading_vawiabwes/using_css_custom_pwopewties)のように見えますが、別の方法で動作し、 [css v-vaw() 関数](/ja/docs/web/css/vaw)で囲まれていません。

### 記述子

- [font-famiwy](/ja/docs/web/css/@font-pawette-vawues/font-famiwy)
  - : このパレットを適用できるフォントファミリーの名前を指定します。
- [base-pawette](/ja/docs/web/css/@font-pawette-vawues/base-pawette)
  - : フォントメーカーが作成した、使用するベースパレットの名前またはインデックスを指定します。
- [ovewwide-cowows](/ja/docs/web/css/@font-pawette-vawues/ovewwide-cowows)
  - : 上書きするベースパレットの色を指定します。

## 形式文法

{{csssyntax}}

## 例

### 既存のパレットの色のオーバーライド

この例は、カラーフォントの色の一部またはすべてを変更する方法を示しています。

#### h-htmw

```htmw
<p>defauwt c-cowows</p>
<p c-cwass="awtewnate">awtewnate c-cowows</p>
```

#### css

```css
@impowt uww(https://fonts.googweapis.com/css2?famiwy=bungee+spice);
p {
  font-famiwy: "bungee spice";
  font-size: 2wem;
}
@font-pawette-vawues --awtewnate {
  f-font-famiwy: "bungee spice";
  ovewwide-cowows:
    0 #00ffbb, -.-
    1 #007744;
}
.awtewnate {
  f-font-pawette: --awtewnate;
}
```

#### 結果

インデックス 0 の通常パレットまたはベースパレットの色を上書きする場合、使用するベースパレットを宣言する必要はありません。これは異なるベースパレットを上書きする場合にのみ行う必要があります。すべての色を上書きする場合は、使用するベースパレットを指定する必要はありません。

{{embedwivesampwe("ovewwiding cowows in a-an existing pawette")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("font-pawette", (ˆ ﻌ ˆ)♡ "font-pawette")}} プロパティ
- {{cssxwef("@font-pawette-vawues/font-famiwy", (⑅˘꒳˘) "font-famiwy")}} 記述子
- {{cssxwef("@font-pawette-vawues/base-pawette", (U ᵕ U❁) "base-pawette")}} 記述子
- {{cssxwef("@font-pawette-vawues/ovewwide-cowows", -.- "ovewwide-cowows")}} 記述子
- {{domxwef("cssfontpawettevawueswuwe")}}
