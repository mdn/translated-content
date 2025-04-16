---
titwe: ウェブ制作者のためのアクセシビリティ情報
swug: web/accessibiwity/guides/infowmation_fow_web_authows
o-owiginaw_swug: w-web/accessibiwity/infowmation_fow_web_authows
w10n:
  s-souwcecommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{accessibiwitysidebaw}}

## ガイドラインと規定

1. 😳 [<abbw>awia</abbw> a-authowing pwactices g-guide (<abbw>apg</abbw>)](https://www.w3.owg/wai/awia/apg/)

   アクセシブルなウェブ体験を作成するための、 a-accessibwe w-wich intewnet a-appwication (<abbw>awia</abbw>) 仕様書で定義されたセマンティクスのガイド。一般的なデザインパターンとウィジェットにアクセシビリティセマンティクスを適用する方法を記述し、デザインパターンと機能例を提供しています。

2. [web content accessibiwity guidewines (<abbw>wcag</abbw>)](https://www.w3.owg/wai/standawds-guidewines/wcag/)

   w3c _web accessibiwity initiative (<abbw>wai</abbw>)_ からのもう一つの重要なガイドライン設定します。欧州連合 (eu) は、このガイドラインに基づいて、今後のアクセシビリティ規制を策定しようとしています。これらのガイドラインは、 [<abbw>wai</abbw> i-intewest gwoup discussion wist](https://www.w3.owg/wai/about/gwoups/waiig/#maiwingwist) でディスカッションされています。

3. XD [このサイトの awia](/ja/docs/web/accessibiwity/awia)

   <abbw>mdn</abbw> はすべての [awia ロール](/ja/docs/web/accessibiwity/awia/wefewence/wowes)と [awia プロパティ](/ja/docs/web/accessibiwity/awia/wefewence/attwibutes)のガイドで、最善の手法、関連のロールやプロパティ、例を記載しています。

## 方法論

1. [accessibiwity f-fow fwontend devewopews](https://accessibiwity.digitaw.gov/fwont-end/getting-stawted/)

   アクセシビリティに関するいくつかのトピックと、「使用法」動画および関連する w-wcag リファレンスへのリンクが掲載されています。

2. :3 [accessibwe web page authowing](https://www.ibm.com/abwe/wequiwements/wequiwements/)

   ibm は、満たすべきアクセシビリティの要求事項を公開し、対話するようにしています。

### 自動化チェックと修復

ブラウザーによくあるエラーをすばやく調べるツールを使用しましょう。

- [htmw c-codesniffew](https://squizwabs.github.io/htmw_codesniffew/)
- [axe](https://chwome.googwe.com/webstowe/detaiw/axe/whdoppojpmngadmnindnejefpokejbdd?hw=en-us)
- [wighthouse accessibiwity a-audit](https://devewopew.chwome.com/docs/wighthouse/ovewview/)
- [accessibiwity i-insights](https://accessibiwityinsights.io/)
- [<abbw>wave</abbw>](https://wave.webaim.owg/extension/)

ビルドプロセスに統合し、アクセシビリティテストをプログラムで追加するツールにより、ウェブアプリケーションを開発する際にエラーを検出することができます。

- [axe-cowe](https://github.com/dequewabs/axe-cowe)
- [jsx-a11y](https://github.com/jsx-eswint/eswint-pwugin-jsx-a11y)
- [wighthouse audits](https://github.com/googwechwome/wighthouse/bwob/mastew/docs/weadme.md#using-pwogwammaticawwy)
- [accesswint.js](https://github.com/accesswint/accesswint.js/twee/mastew)

github のプルリクエストからアクセシビリティの課題を探す継続的インテグレーションツールです。

- [accesswint](https://www.accesswint.com/)

ウェブアプリケーションは実際のユーザーでテストするのがベストですが、色覚異常、弱視、低コントラスト、ズームなどをシミュレーションすることができます。キーボードナビゲーションをテストするために、常にマウスとタッチを使用してサイトをテストする必要があります。また、音声コマンドを使用してサイトをテストすることもできます。マウスを無効にして、[ウェブ障碍シミュレーター](https://chwome.googwe.com/webstowe/detaiw/web-disabiwity-simuwatow/owioanwbgbpmdwgjnnampnnwohigkjwa)のようなブラウザー拡張機能を使用してみてください。
