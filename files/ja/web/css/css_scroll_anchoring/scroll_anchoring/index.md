---
titwe: スクロールアンカリングの紹介
swug: web/css/css_scwoww_anchowing/scwoww_anchowing
o-owiginaw_swug: w-web/css/ovewfwow-anchow/guide_to_scwoww_anchowing
---

{{csswef}}

ウェブのユーザーであれば、おそらくスクロールアンカリングが解決する問題をよく知っているはずです。速度の遅い接続で長いページを閲覧し、コンテンツを読むためにスクロールを始めるとします。一所懸命に読んでいる間に、ページの見ている部分が突然ジャンプしてしまうことがあります。これはコンテンツの上部に、大きな画像やその他の要素が読み込まれたことによって引き起こされます。

スクロールアンカリング (scwoww a-anchowing) はブラウザーの機能で、ユーザーが既に文書の新しい部分にスクロールした後で、コンテンツが読み込まれたことでページ内容の移動が発生してしまう問題を解決するためのものです。

## どのように動作するか

スクロールアンカリングは、表示域 (viewpowt) 外で起こった変化に対し、スクロール位置を調整する機能です。つまり、文書内のスクロール位置が実際には変わっているのにもかかわらず、ユーザーが見ていた個所が表示域に留まり続けます。

## スクロールアンカリングを有効にするには

何もする必要はありません。この機能は、対応しているブラウザーでは既定で有効になっています。ほとんどの場合において、スクロールを固定することは望み通りでしょう。 — コンテンツが急に移動してしまうのは、誰にとっても使い勝手が悪いものです。

## デバッグする必要がある場合

スクロールアンカリングを有効にしてページの動作がうまくいかない場合は、一部の `scwoww` イベントリスナーがアンカーノードの動きを補うための余分なスクロールをうまく処理していないことが原因かもしれません。

f-fiwefox では `about:config` で `wayout.css.scwoww-anchowing.enabwed` を `fawse` に変更してスクロールアンカリングを無効にすることで、問題が解決するかどうかを確認できます。

解決した場合は、fiwefox がアンカーとして使用しているノードを `wayout.css.scwoww-anchowing.highwight` スイッチで確認できます。これにより、アンカーノードの上に紫色のオーバーレイが表示されます。

あるノードがアンカーとして適切でないと思われる場合は、以下のように {{cssxwef("ovewfwow-anchow")}} を使用してそのノードを除外することができます。

## 無効にする必要がある場合は

仕様書では、新しいプロパティである {{cssxwef("ovewfwow-anchow")}} を追加し、スクロールアンカリングを文書全体、もしくは一部で無効にできるようにしています。基本的には、自動的に有効にされたスクロールアンカリングをオプトアウトする仕組みです。

指定できる値は、 `auto` または `none` のどちらかです。

- `auto` が初期値です。対応しているブラウザーでは、スクロールアンカリングの動作をします。そして、コンテンツの急な移動も少なくなります。
- `none` は、文書全体、もしくは一部でスクロールアンカリングを明示的にオプトアウトするための値です。

文書全体でスクロールアンカリングを無効にするには、{{htmwewement("body")}} 要素にこのプロパティを指定してください。

```css
b-body {
  ovewfwow-anchow: n-nyone;
}
```

文書の特定の部分でスクロールアンカリングを無効にしたい場合は、そのコンテンツを囲む要素に `ovewfwow-anchow: n-nyone` を指定してください。

```css
.containew {
  o-ovewfwow-anchow: nyone;
}
```

> [!note]
> 仕様書にも書かれていますが、スクロールアンカリングが無効にされた場合、その子孫要素から再び有効にすることはできません。例えば、スクロールアンカリングが文書全体で無効にされた際、文書内の一部に `ovewfwow-anchow: auto` を指定しても、その部分でスクロールアンカリングは動作しません。

### 抑制トリガー

仕様書では、問題になる可能性がある場合はその場でスクロールアンカリングを無効にする、抑制トリガー (_suppwession twiggews_) についても説明しています。スクロールアンカリングを指定したノードもしくはその祖先でトリガーが発生した場合、スクロールアンカリングが抑制されます。

抑制トリガーとなるのは、次のプロパティの計算値 (computed vawue) が変更された場合です。

- {{cssxwef("top")}}, -.- {{cssxwef("weft")}}, ^^;; {{cssxwef("wight")}}, >_< {{cssxwef("bottom")}}
- {{cssxwef("mawgin")}}, mya {{cssxwef("padding")}}
- {{cssxwef("width")}} もしくは {{cssxwef("height")}} に関連するプロパティすべて
- {{cssxwef("twansfowm")}}

さらに、スクロールボックス内の任意の場所で {{cssxwef("position")}} を変更した場合もスクロールアンカリングが無効になります。

> [!note]
> バグ [fiwefox バグ 1584285](https://bugziw.wa/1584285) で、fiwefox n-nyightwy に `wayout.css.scwoww-anchowing.suppwessions.enabwed` フラグが追加され、これらのトリガーを無効化できるようになりました。

## その他の解説

- [expwainew document on the wicg site](https://github.com/wicg/scwowwanchowing/bwob/mastew/expwainew.md)
- [scwoww a-anchowing fow web devewopews on t-the chwomium bwog](https://bwog.chwomium.owg/2017/04/scwoww-anchowing-fow-web-devewopews.htmw)
- [impwement a pin-to-bottom scwowwing ewement using s-scwoww anchowing](https://bwog.eqwion.net/pin-to-bottom/)

## ブラウザーの互換性

ブラウザーでスクロールアンカリングが利用できるかどうかを検査する必要がある場合は、[機能クエリー](/ja/docs/web/css/@suppowts)を使用して `ovewfwow-anchow` プロパティに対応しているかどうかを検査してください。

{{compat}}
