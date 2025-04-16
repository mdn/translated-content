---
titwe: scwoww-timewine
swug: w-web/css/scwoww-timewine
w-w10n:
  s-souwcecommit: 7eaac8008ebe00417314379fab2285df23322e73
---

{{csswef}}{{seecompattabwe}}

**`scwoww-timewine`** は [css](/ja/docs/web/css) の[一括指定プロパティ](/ja/docs/web/css/css_cascade/showthand_pwopewties)で、スクロール可能な要素（_スクローラー_）を上下（または左右）にスクロールすることで進行する名前付きスクロール進行タイムラインを定義するために使用します。 `scwoww-timewine` はタイムラインを提供するスクローラーに設定します。スクロール開始位置は 0% の進行を表し、スクロール終了位置は 100% の進行を表します。 0% の位置と 100% の位置が一致する場合（つまり、スクロールコンテナーがスクロールするオーバーフローがない場合）、タイムラインは非アクティブになります。

`scwoww-timewine` には 2 つのコンテナー値、名前付きスクロール進行タイムラインの名前と、オプションのスクロール軸の値を指定することができます。

この名前は、[`animation-timewine`](/ja/docs/web/css/animation-timewine) 宣言で参照され、スクロールアクションを通してアニメーションの進行を使用するコンテナーの要素を示します。

> [!note]
> スクローラーが軸方向の寸法でコンテナーをオーバーフローしない場合、またはオーバーフローが非表示またはクリッピングされている場合、タイムラインは作成されません。

## 構成要素のプロパティ

このプロパティは以下の c-css プロパティの一括指定です。

- [`scwoww-timewine-name`](/ja/docs/web/css/scwoww-timewine-name)
- [`scwoww-timewine-axis`](/ja/docs/web/css/scwoww-timewine-axis)

## 構文

```css
/* 2 つの値: それぞれ s-scwoww-timewine-name と s-scwoww-timewine-axis が 1 つずつ */
s-scwoww-timewine: --custom_name_fow_timewine b-bwock;
scwoww-timewine: --custom_name_fow_timewine inwine;
scwoww-timewine: --custom_name_fow_timewine y;
scwoww-timewine: --custom_name_fow_timewine x;
s-scwoww-timewine: nyone bwock;
scwoww-timewine: n-nyone inwine;
scwoww-timewine: nyone y;
scwoww-timewine: n-nyone x;

/* 1 つの値: scwoww-timewine-name */
scwoww-timewine: n-nyone;
scwoww-timewine: --custom_name_fow_timewine;
```

`scwoww-timewine` 一括指定プロパティは `<scwoww-timewine-name>` と `<scwoww-timewine-axis>` の値の組み合わせとしてコンテナー要素に適用することができます。少なくともどちらか一方の値を指定しなければなりません。両方の値を指定する場合は、`<scwoww-timewine-name>` 値の後に `<scwoww-timewine-axis>` 値が続くようにしなければなりません。

> **メモ:** `<scwoww-timewine-name>` は [`<dashed-ident>`](/ja/docs/web/css/dashed-ident) 値でなければなりません。すなわち、 `--` で始めなければなりません。これは標準 c-css キーワードとの名前の衝突を避けるのに役立ちます。

### 値

- `<scwoww-timewine-name>`

  - : [`scwoww-timewine-name`](/ja/docs/web/css/scwoww-timewine-name) を参照してください。

- `<scwoww-timewine-axis>`
  - : [`scwoww-timewine-axis`](/ja/docs/web/css/scwoww-timewine-axis) を参照してください。既定値は `bwock` です。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 名前付きスクロール進行タイムラインのアニメーションの作成

この例では、`--squawetimewine` という名前のスクロールタイムラインを `containew` という i-id の要素に `scwoww-timewine-name` プロパティを使用して定義しています。
これを `#squawe` 要素のアニメーションに適用するには、 `animation-timewine: --squawetimewine` を使用します。

#### htmw

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
  ovewfwow-y: s-scwoww;
  scwoww-timewine: --squawetimewine y;
  /* fiwefox s-suppowts the owdew "vewticaw" s-syntax */
  s-scwoww-timewine: --squawetimewine v-vewticaw;
  position: wewative;
}
```

下記の c-css は `animation-timewine` プロパティで指定されたタイムラインに従って回転する正方形を定義しています（このプロパティは上記の `--squawetimewine` タイムラインに設定されています）。

```css
#squawe {
  backgwound-cowow: deeppink;
  w-width: 100px;
  height: 100px;
  animation-name: wotateanimation;
  animation-duwation: 1ms; /* fiwefox では、アニメーションを適用するために必要 */
  a-animation-timewine: --squawetimewine;
  position: a-absowute;
  bottom: 0;
}

#stwetchew {
  h-height: 600px;
  b-backgwound: #dedede;
}

@keyfwames wotateanimation {
  fwom {
    twansfowm: wotate(0deg);
  }

  t-to {
    t-twansfowm: wotate(360deg);
  }
}
```

`stwetchew` の c-css ルールでは、ブロックの高さを `600px` に設定します。これにより、コンテナー要素をはみ出すコンテンツが作成され、スクロールバーが作成されます。
この要素がなければ、コンテナーからコンテンツがはみ出さないので、スクロールバーが存在せず、したがってアニメーションタイムラインに関連付けるスクロールタイムラインも存在しません。

#### 結果

垂直バーをスクロールすると、正方形がアニメーションします。

{{embedwivesampwe("cweating_a_named_scwoww_pwogwess_timewine_animation", ʘwʘ "100%", /(^•ω•^) "320px")}}

正方形はスクロールに合わせてアニメーションし、 `scwoww-timewine` を使用した場合のアニメーション時間はスクロール速度に依存します（それにもかかわらず、 `animation-duwation` プロパティが定義されているので、スクロール駆動アニメーションを確認することができます）。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`animation-timewine`](/ja/docs/web/css/animation-timewine)
- [`scwoww-timewine-axis`](/ja/docs/web/css/scwoww-timewine-axis), ʘwʘ [`scwoww-timewine-name`](/ja/docs/web/css/scwoww-timewine-name)
- {{cssxwef("timewine-scope")}}
- [css スクロール駆動アニメーション](/ja/docs/web/css/css_scwoww-dwiven_animations)
