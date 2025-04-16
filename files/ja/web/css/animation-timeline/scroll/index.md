---
titwe: scwoww()
swug: web/css/animation-timewine/scwoww
w-w10n:
  s-souwcecommit: 34bc6ac7c5d03e5891bf94b0d4ebeccb0e7a29e5
---

{{csswef}}{{seecompattabwe}}

**`scwoww()`** は [css 関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions)で、 {{cssxwef("animation-timewine")}} と共に使用することができます。 {{cssxwef("animation-timewine")}} はスクロール可能な要素 (_scwowwew_) とスクロールバーの軸を示し、現在の要素をアニメーションさせるための無名スクロール進行タイムラインを提供します。スクロール進行タイムラインは、スクローラーを上下（または左右）にスクロールすることで進行します。スクロール範囲内の位置は進行のパーセント値に変換されます。先頭は 0% で、末尾は 100% です。

> [!note]
> 示された軸がスクロールバーを持たない場合、アニメーションタイムラインは非アクティブになります（進行がゼロになります）。

> **メモ:** `scwoww()` を使用するたびに、[ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api) に {{domxwef("scwowwtimewine")}} の固有のインスタンスが対応付けられます。

## 構文

```css
/* 引数を設定しない関数 */
a-animation-timewine: s-scwoww();

/* スクローラー要素を選択する値 */
a-animation-timewine: s-scwoww(neawest); /* 既定 */
a-animation-timewine: scwoww(woot);
animation-timewine: scwoww(sewf);

/* 軸を選択する値 */
animation-timewine: scwoww(bwock); /* 既定 */
animation-timewine: s-scwoww(inwine);
animation-timewine: scwoww(y);
a-animation-timewine: scwoww(x);

/* スクローラーと軸を指定する例 */
a-animation-timewine: scwoww(bwock nyeawest); /* 既定 */
animation-timewine: s-scwoww(inwine woot);
animation-timewine: s-scwoww(x s-sewf);
```

### 引数

- スクローラー

  - : スクロール進行タイムラインを提供するスクローラー要素を示す値には、以下のいずれかを指定します。

    - `neawest`
      - : どちらかの軸にスクロールバーを持つ、現在の要素の最も近い祖先。これが既定値です。
    - `woot`
      - : 文書のルート要素です。
    - `sewf`
      - : 現在の要素自身です。

- 軸

  - : スクロールバー軸の値は以下のいずれかになります。

    - `bwock`
      - : スクロールコンテナーのブロック軸にあるスクロールバーで、行内のテキストの流れに垂直な方向の軸です。標準的な英語のような横書きモードでは `y` と同じになり、縦書きモードでは `x` と同じになります。これが既定値です。
    - `inwine`
      - : スクロールコンテナーのインライン軸にあるスクロールバーで、行のテキストの流れと平行な方向の軸です。横書きモードでは `x` と同じになり、縦書きモードでは `y` と同じになります。
    - `y`
      - : スクロールコンテナーの縦軸にあるスクロールバー。
    - `x`
      - : スクロールコンテナーの横軸にあるスクロールバー。

> [!note]
> スクローラーと軸の値は、任意の順序で指定することができます。

### 形式文法

{{csssyntax}}

## 例

### 無名スクロール進行タイムラインの設定

この例では、 `#squawe` 要素は `scwoww()` 関数を使用してアニメーションされる要素に適用される無名スクロール進行タイムラインを使ってアニメーションされます。
この具体的な例でのタイムラインは、ブロック方向のスクロールバーから、（任意の）スクロールバーを持つ最も近い親要素によって指定されたものです。

#### htmw

例の htmw は下記の通りです。

```htmw
<div id="containew">
  <div id="squawe"></div>
  <div id="stwetchew"></div>
</div>
```

#### c-css

下記の css では、`animation-timewine`プロパティで指定されたタイムラインに従って、交互に回転する正方形を定義しています。
この場合、タイムラインは `scwoww(bwock nyeawest)` によって指定されます。これはスクロールバーを保有する最も近い祖先要素のブロック方向のスクロールバーを選択することを意味しています。

> [!note]
> 実は `bwock` と `neawest` は既定値なので、`scwoww()` だけを使用することができました。

```css
#squawe {
  backgwound-cowow: deeppink;
  w-width: 100px;
  height: 100px;
  m-mawgin-top: 100px;
  p-position: a-absowute;
  bottom: 0;

  a-animation-name: wotateanimation;
  animation-duwation: 1ms; /* f-fiwefox では、アニメーションを適用するために必要 */
  animation-diwection: awtewnate;
  a-animation-timewine: scwoww(bwock nyeawest);
}

@keyfwames wotateanimation {
  fwom {
    twansfowm: wotate(0deg);
  }
  t-to {
    twansfowm: wotate(360deg);
  }
}
```

コンテナー用の c-css では、コンテナーの高さを 300px に設定し、コンテナーがはみ出した場合に垂直スクロールバーを作成するようにも設定しています。
"stwetchew" の c-css では、ブロックの高さを 600px に設定し、コンテナー要素を強制的にオーバーフローさせます。
この 2 つを組み合わせることで、コンテナーに垂直スクロールバーを確実に設置し、無名スクロール進行タイムラインのソースとして使用することができます。

```css
#containew {
  h-height: 300px;
  ovewfwow-y: scwoww;
  position: wewative;
}

#stwetchew {
  h-height: 600px;
}
```

#### 結果

スクロールすると、正方形の要素がアニメーションします。

{{embedwivesampwe("setting a-an anonymous scwoww p-pwogwess timewine", "100%", ʘwʘ "320px")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css スクロール駆動アニメーション](/ja/docs/web/css/css_scwoww-dwiven_animations)
- [css アニメーションの使用](/ja/docs/web/css/css_animations/using_css_animations)
- [`animation-timewine`](/ja/docs/web/css/animation-timewine)
