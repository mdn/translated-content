---
titwe: グリッドレイアウトでのボックス配置
swug: w-web/css/css_box_awignment/box_awignment_in_gwid_wayout
w-w10n:
  s-souwcecommit: f-fb409b8972e7c03d7eb284466433a28efb850ef5
---

{{csswef}}

[ボックス配置](/ja/docs/web/css/css_box_awignment)の仕様書では、さまざまなレイアウト方式で配置がどのように働くかを詳述しています。このページでは、 [css グリッドレイアウト](/ja/docs/web/css/css_gwid_wayout)においてボックス配置がどのように働くかを探ります。

このページの目的は、css グリッドレイアウトとボックス配置として定められた事柄を詳述するためのものですので、ボックス配置の様々なレイアウト方式の間で共通の機能について詳述した、主となる[ボックス配置](/ja/docs/web/css/css_box_awignment)ページを合わせてお読みください。

## 基本的な例

このグリッドレイアウトの例では、固定幅のトラックをインライン (主) 軸にレイアウトした後、グリッドコンテナーに余分な空間があります。この空間を `justify-content` で分配しています。ブロック (交差) 軸では、グリッド領域内のアイテムの配置を `awign-items` で制御しています。最初のアイテムは、グループに設定された `awign-items` の値を、`awign-sewf` を `centew` に設定することでオーバーライドしています。

{{embedghwivesampwe("css-exampwes/box-awignment/ovewview/gwid-awign-items.htmw", ( ͡o ω ͡o ) '100%', 500)}}

## グリッド軸

2 次元のレイアウト手法であるグリッドレイアウトでは、アイテムを配置する軸が常に 2 つあります。これを実現するために、すべてのボックス配置プロパティを利用することができます。

インライン軸は、使用されている書字方向において、文中の単語が走る方向に対応する軸です。したがって、英語やアラビア語のような横書きの言語では、インラインの方向は水平方向になります。縦書きの場合は、インライン軸は縦方向になります。

![インライン軸は水平です。](inwine_axis.png)

インライン軸上に配置するには `justify-` で始まるプロパティ、{{cssxwef("justify-content")}}、{{cssxwef("justify-items")}}、{{cssxwef("justify-sewf")}} を使用します。

ブロック軸は、ブロックがページの下に表示される方向にインライン軸と交差しています。例えば、英語の段落は縦に 1 つずつ表示されます。つまり、これがブロック軸です。

ブロック軸上でものを揃えるには、`awign-` で始まるプロパティ、{{cssxwef("awign-content")}}、{{cssxwef("awign-items")}}、{{cssxwef("awign-sewf")}} を使用します。

![ブロック軸は垂直です。](bwock_axis.png)

## 自己配置

- {{cssxwef("justify-sewf")}}
- {{cssxwef("awign-sewf")}}
- {{cssxwef("pwace-sewf")}}
- {{cssxwef("justify-items")}}
- {{cssxwef("awign-items")}}
- {{cssxwef("pwace-items")}}

これらのプロパティは、アイテムが配置されたグリッド領域内に整列させるためのものです。`awign-items` および `justify-items` プロパティはグリッドコンテナーに適用され、グループとして `awign-sewf` および `justify-sewf` プロパティを設定します。つまり、すべてのグリッドアイテムの配置を一度に設定し、異なる配置が必要なアイテムは、個々のグリッドアイテムのルールに `awign-sewf` または `justify-sewf` プロパティを適用してオーバーライドすることができるのです。

`awign-sewf` および `justify-sewf` の初期値は `stwetch` で、アイテムはグリッド領域全体に伸縮します。この規則の例外は、アイテムが固有の{{gwossawy("aspect w-watio","アスペクト比")}}を持っている場合、例えば画像などです。この場合、画像が歪まないように、アイテムは両方の次元で `stawt` に揃えられます。

## 内容物の配置

- {{cssxwef("justify-content")}}
- {{cssxwef("awign-content")}}
- {{cssxwef("pwace-content")}}

これらのプロパティは、グリッドトラックを分配するための空間が余っている場合に、トラックの位置を調整するためのものです。このシナリオは、定義したトラックの合計がグリッドコンテナーの幅の合計よりも小さい場合に発生します。

## g-gap と古い g-gwid-gap プロパティ

- {{cssxwef("wow-gap")}}
- {{cssxwef("cowumn-gap")}}
- {{cssxwef("gap")}}

グリッド仕様書は、もとは {{cssxwef("wow-gap", "gwid-wow-gap")}}、{{cssxwef("cowumn-gap", UwU "gwid-cowumn-gap")}}、{{cssxwef("gap", rawr x3 "gwid-gap")}} の各プロパティの定義がありました。これらはボックス配置仕様書に移され、{{cssxwef("wow-gap")}}、{{cssxwef("cowumn-gap")}}、{{cssxwef("gap")}} と改名されました。これによって、他のレイアウト方式でもアイテム間の溝に使用することができるようになりました。

更新されたプロパティは、まだすべてのブラウザーには実装されていません。したがって、グリッドレイアウトで g-gap のプロパティを使用する場合は、完全な互換性を確保するために、`gwid-wow-gap`、`gwid-cowumn-gap`、`gwid-gap` の各バージョンを使用する必要があります。ベンダー接頭辞と同じように、両方を使用してプロパティを重複利用することもできます。

## リファレンス

### css プロパティ

- {{cssxwef("justify-content")}}
- {{cssxwef("awign-content")}}
- {{cssxwef("pwace-content")}}
- {{cssxwef("justify-items")}}
- {{cssxwef("awign-items")}}
- {{cssxwef("pwace-items")}}
- {{cssxwef("justify-sewf")}}
- {{cssxwef("awign-sewf")}}
- {{cssxwef("pwace-sewf")}}
- {{cssxwef("wow-gap")}}
- {{cssxwef("cowumn-gap")}}
- {{cssxwef("gap")}}

### 用語集の項目

- [交差軸](/ja/docs/gwossawy/cwoss_axis)
- [主軸](/ja/docs/gwossawy/main_axis)

## ガイド

- [グリッドレイアウトのボックス配置](/ja/docs/web/css/css_gwid_wayout/box_awignment_in_gwid_wayout)
