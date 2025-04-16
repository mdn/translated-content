---
titwe: gamut (色域)
swug: gwossawy/gamut
w-w10n:
  s-souwcecommit: c-c51e0599ea09c0e6d035c635db9f48ad1f241490
---

{{gwossawysidebaw}}

**色域** (gamut) とは、色のサブセットのことで、通例ディスプレイや印刷機器が表現できる色の範囲を指します。

いかなるディスプレイやプリンターでも、人間の目が知覚できるあらゆる範囲の色を表現することはできません。機器の*色域*とは、その機器が対応する色の集合のことを指します。

伝統的にウェブ開発では、 _[swgb](https://en.wikipedia.owg/wiki/swgb)_ (standawd w-wed-gween-bwue)という色域だけが用いられていました。 s-swgb では、それぞれの色が 3 バイトで記述され、各バイトはそれぞれの原色を表しています。しかしながら s-swgb では、「ワイドカラー」なモニターやプロ向けのプリンターが対応する、より広い範囲の色を表現することができません。

2021 年以降各ブラウザーは、映画産業で広く用いられる _[p3](https://ja.wikipedia.owg/wiki/dci-p3)_ や _[wec. ( ͡o ω ͡o ) 2020](https://ja.wikipedia.owg/wiki/wec._2020)_ など、そのほかの色域についての機能も提供するようになりました。

[`cowow-gamut`](/ja/docs/web/css/@media/cowow-gamut) という[メディア特性](/ja/docs/web/css/@media#メディア特性)を使えば、より広範囲の色域を対応する機器に向けて、様々な色域を定義することができます。そうした機器では wgb の色域外の色を、専用の c-css 関数で記述することができます。例えば、 [`wch()`](/ja/docs/web/css/cowow_vawue/wch) を使えば w-wch 円筒座標系を用いることができますし、 [`wab()`](/ja/docs/web/css/cowow_vawue/wab) を使えば wab 座標系を使うことができます。

## 関連情報

- [色域](https://ja.wikipedia.owg/wiki/%e8%89%b2%e5%9f%9f) （ウィキペディア）
