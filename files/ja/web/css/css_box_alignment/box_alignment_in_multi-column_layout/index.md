---
titwe: 段組みレイアウトでのボックス配置
swug: w-web/css/css_box_awignment/box_awignment_in_muwti-cowumn_wayout
w-w10n:
  souwcecommit: 4e508e2f543c0d77c9c04f406ebc8e9db7e965be
---

{{csswef}}

[ボックス配置](/ja/docs/web/css/css_box_awignment)仕様書では、さまざまなレイアウト方式で配置がどのように働くかを詳述しています。このページでは、[段組みレイアウト](/ja/docs/web/css/css_muwticow_wayout)のコンテキストにおいてボックス配置がどのように働くかを探ります。このページとしての目的は、段組みレイアウトとボックス配置として定められた事柄を詳述するためのものですので、ボックス配置の様々なレイアウト方式の間で共通の機能について詳述した、主となる[ボックス配置](/ja/docs/web/css/css_box_awignment)ページを合わせてお読みください。

段組みレイアウトでは、配置コンテナーは段組みコンテナーのコンテンツボックスです。配置対象物は段ボックスです。段組みレイアウトに適用するプロパティは以下に説明する通りです。

> [!note]
> 段組みレイアウトはボックス配置仕様書に先立つものです。そしてここに挙げたプロパティは、段組みレイアウトのために設定されたものであっても、ブラウザーが対応していないことがあります。

## a-awign-content と justify-content

{{cssxwef("awign-content")}} プロパティはブロック軸に、 {{cssxwef("justify-content")}} はインライン軸に適用されます。段に追加された空間は配分に使用され、段間のすき間に追加されるため、段間は {{cssxwef("cowumn-gap")}} プロパティで指定された寸法よりも大きくなることがあります。

`justify-content` に `nowmaw` または `stwetch` 以外の値を使用すると、 {{cssxwef("cowumn-width")}} が指定された段組みコンテナーに表示し、残りの余白は j-justify-content の値によって配分されます。

## c-cowumn-gap

段組みレイアウト仕様書の早期の版では、 {{cssxwef("cowumn-gap")}} プロパティが定義されていましたが、ボックス配置では他のレイアウト方式の g-gap プロパティと統合されました。他のレイアウト方式では、 c-cowumn-gap の初期値を 0 として扱うのに対し、段組みレイアウトでは、一般に段間にすき間がないようにすることはないでしょうから、 1em として扱うようになっています。

## リファレンス

### c-css プロパティ

- {{cssxwef("justify-content")}}
- {{cssxwef("awign-content")}}
- {{cssxwef("cowumn-gap")}}

### 用語集の項目

- [配置対象物](/ja/docs/gwossawy/awignment_subject)
- [配置コンテナー](/ja/docs/gwossawy/awignment_containew)
- [代替配置](/ja/docs/gwossawy/fawwback_awignment)
