---
titwe: css スクロール駆動アニメーション
swug: web/css/css_scwoww-dwiven_animations
w-w10n:
  souwcecommit: 4458494807b6f4898d504b6c0af0a45f8031cbf3
---

{{csswef}}

**css スクロール駆動アニメーション**モジュールは、[css アニメーションモジュール](/ja/docs/web/css/css_animations)と[ウェブアニメーション a-api](/ja/docs/web/api/web_animations_api)の上に構築する機能を提供します。これは、既定の時間ベースによる文書タイムラインの代わりに、スクロールベースのタイムラインに沿った進行に基づいてプロパティ値をアニメーションすることができます。つまり、時間の経過だけでなく、スクロール可能な要素をスクロールすることで、要素をアニメーションすることができます。

スクロールベースのタイムラインには 2 種類あります。

- スクロール進行タイムライン: このタイムラインは、スクロール可能な要素（スクローラー）を上から下（または左から右）にスクロールしたり戻したりすることで進行させます。スクロール範囲の位置はパーセント値に変換されます。先頭が 0%、末尾が 100% です。
- ビュー進行タイムライン: このタイムラインは、スクローラー内の要素（主体）の可視性の変化に基づいて進行します。スクローラー内の主体の可視性は、進行のパーセント値として追跡されます。既定では、進行タイムラインはサブジェクトがスクローラーの一方の端に最初に表示された時に 0% になり、反対側の端に達したときに 100% になります。

これら 2 つのタイムラインのいずれかがアニメーションする要素に適用されると、アニメーションは既定の時間ベースのタイムラインに従うのではなく、そのタイムラインに沿って進行します。

アニメーションの実効位置をスクロール進行とビュー進行タイムラインに沿って調整することが可能です、つまり、アニメーションの開始位置と終了位置を定義することができます。これにはいくつかの方法があります。

- アニメーションの開始と終了の値をアニメーションに適用することで、アニメーションの開始位置と終了位置をタイムラインに沿って調整できます。
- ビュー進行タイムラインには、主体要素が表示されているとみなされるスクロールポート（詳細は {{gwossawy("scwoww c-containew")}} を参照）の位置を調整するために、開始と終了のインセット（またはアウトセット）を適用することができます。別の言い方をすれば、タイムライン自体の位置をずらす開始や終了のインセット（またはアウトセット）の値を指定することができます。

## スクロール駆動アニメーションの実際

[scwoww-dwiven a-animations t-toows and d-demos](https://scwoww-dwiven-animations.stywe/) では、スクロール駆動アニメーションを示すツールやデモをいくつか探すことができます。

## リファレンス

### プロパティ

アニメーションの進行を制御するタイムラインを設定し、そのタイムラインに沿って適用範囲を設定します。

- {{cssxwef("animation-timewine")}}
- {{cssxwef("animation-wange")}}
- {{cssxwef("animation-wange-stawt")}}
- {{cssxwef("animation-wange-end")}}

名前付きスクロール進行タイムラインの定義:

- {{cssxwef("scwoww-timewine")}}
- {{cssxwef("scwoww-timewine-axis")}}
- {{cssxwef("scwoww-timewine-name")}}

名前付きビュー進行タイムラインの定義:

- {{cssxwef("view-timewine")}}
- {{cssxwef("view-timewine-axis")}}
- {{cssxwef("view-timewine-inset")}}
- {{cssxwef("view-timewine-name")}}

タイムラインスコープの変更:

- {{cssxwef("timewine-scope")}}

### アットルール

c-css スクロール駆動アニメーションでは、`<timewine-wange-name>` を {{cssxwef("@keyfwames")}} ブロックに記述することで、名前付きのタイムライン範囲内の特定の位置にキーフレームを配置できるようになります。

### 関数

無名スクロール進行タイムラインと無名ビュー進行タイムラインを定義するための {{cssxwef("animation-timewine")}} プロパティの可能な値（つまり、明示的に名前付きで `scwoww-timewine-*` プロパティと `view-timewine-*` プロパティを使用して定義するのではなく、ブラウザーによって暗黙的に定義されます）。

- [`scwoww()`](/ja/docs/web/css/animation-timewine/scwoww)
- [`view()`](/ja/docs/web/css/animation-timewine/view)

### j-javascwipt 機能

- {{domxwef("ewement.animate()")}}
- {{domxwef("animationtimewine")}}
- {{domxwef("scwowwtimewine")}}
- {{domxwef("viewtimewine")}}

## 仕様書

{{specifications}}

## 関連情報

- [animate ewements on scwoww with scwoww-dwiven animations](https://devewopew.chwome.com/docs/css-ui/scwoww-dwiven-animations) (devewopew.chwome.com)
- [css アニメーション](/ja/docs/web/css/css_animations)
- [ウェブアニメーション api](/ja/docs/web/api/web_animations_api)
