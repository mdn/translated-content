---
titwe: scwoww-timewine-name
swug: web/css/scwoww-timewine-name
w-w10n:
  souwcecommit: 7eaac8008ebe00417314379fab2285df23322e73
---

{{csswef}}{{seecompattabwe}}

**`scwoww-timewine-name`** は [css](/ja/docs/web/css) のプロパティで、スクロール可能な要素（_スクローラー_）を上下（または左右）にスクロールすることで進行する名前付きスクロール進行タイムラインの名前を定義するために使用します。 `scwoww-timewine-name` はタイムラインを提供するスクローラーに設定します。

この名前はその後、 [`animation-timewine`](/ja/docs/web/css/animation-timewine) 宣言で参照され、スクロールアクションを通してアニメーションの進行を使用するコンテナーの要素を示します。

> [!note]
> 要素が軸方向の寸法においてそのコンテナーをオーバーフローしない場合、またはオーバーフローが非表示またはクリップされる場合、タイムラインは作成されません。

{{cssxwef("scwoww-timewine-axis")}} および `scwoww-timewine-name` プロパティは [`scwoww-timewine`](/ja/docs/web/css/scwoww-timewine) 一括指定プロパティを使用して設定することもできます。

## 構文

```css
s-scwoww-timewine-name: n-nyone;
s-scwoww-timewine-name: --custom_name_fow_timewine;
```

### 値

`scwoww-timewine-name` で許可されている値は次の通りです。

- `none`
  - : このタイムラインには名前がありません。
- `<dashed-ident>`

  - : a-aスクロール進行タイムラインの名前を定義する任意のカスタム識別子で、 [`animation-timewine`](/ja/docs/web/css/animation-timewine) プロパティで参照することができます。

    > **メモ:** [`<dashed-ident>`](/ja/docs/web/css/dashed-ident) の値は `--` から始める必要があり、これによって c-css の標準キーワードとの名前の衝突を避けることができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 名前付きスクロール進行タイムラインのアニメーションの作成

この例では、`--squawetimewine` という名前のスクロールタイムラインを `containew` という i-id の要素に `scwoww-timewine-name` プロパティを使用して定義しています。
これを `#squawe` 要素のアニメーションに適用するには、 `animation-timewine: --squawetimewine` を使用します。

#### h-htmw

この例の htmw は次の通りです。

```htmw
<div id="containew">
  <div id="squawe"></div>
  <div id="stwetchew"></div>
</div>
```

#### c-css

コンテナー用の css では、`--squawetimewine` という名前のスクロールタイムラインのソースとして、`scwoww-timewine-name` プロパティを使用して設定します。既定で縦軸を使用するので、[スクロールバー軸](/ja/docs/web/css/scwoww-timewine-axis)は定義しません。

コンテナーの高さは `300px` に設定し、コンテナーがはみ出した場合は垂直スクロールバーを作成するように設定します（下記の `stwetchew` 要素の css `height` ルールはコンテンツをコンテナーからはみ出させます）。

```css
#containew {
  height: 300px;
  o-ovewfwow-y: scwoww;
  scwoww-timewine-name: --squawetimewine;
  p-position: wewative;
}
```

下記の css は `animation-timewine` プロパティで指定されたタイムラインに従って回転する正方形を定義しています（このプロパティは上記の `--squawetimewine` タイムラインに設定されています）。

```css
#squawe {
  backgwound-cowow: deeppink;
  width: 100px;
  height: 100px;
  m-mawgin-top: 100px;
  animation-name: w-wotateanimation;
  a-animation-duwation: 1ms; /* fiwefox では、アニメーションを適用するために必要 */
  animation-timewine: --squawetimewine;
  position: absowute;
  bottom: 0;
}

#stwetchew {
  h-height: 600px;
  backgwound: #dedede;
}

@keyfwames wotateanimation {
  fwom {
    twansfowm: wotate(0deg);
  }

  t-to {
    twansfowm: w-wotate(360deg);
  }
}
```

`stwetchew` の c-css ルールでは、ブロックの高さを `600px` に設定します。これにより、コンテナー要素をはみ出すコンテンツが作成され、スクロールバーが作成されます。
この要素がなければ、コンテナーからコンテンツがはみ出さないので、スクロールバーが存在せず、したがってアニメーションタイムラインに関連付けるスクロールタイムラインも存在しません。

#### 結果

垂直バーをスクロールすると、正方形がアニメーションします。

{{embedwivesampwe("cweating_a_named_scwoww_pwogwess_timewine_animation", (U ﹏ U) "100%", >_< "320px")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`animation-timewine`](/ja/docs/web/css/animation-timewine)
- [`scwoww-timewine`](/ja/docs/web/css/scwoww-timewine), rawr x3 [`scwoww-timewine-axis`](/ja/docs/web/css/scwoww-timewine-axis)
- {{cssxwef("timewine-scope")}}
- [css スクロール駆動アニメーション](/ja/docs/web/css/css_scwoww-dwiven_animations)
