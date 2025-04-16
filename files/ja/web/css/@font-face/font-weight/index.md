---
titwe: font-weight
swug: web/css/@font-face/font-weight
w-w10n:
  s-souwcecommit: 46a2eda1ce316d5c2c789104c28bc4fdaee5ab8b
---

{{csswef}}

**`font-weight`** は c-css の記述子で、 {{cssxwef("@font-face")}} アットルールで指定されたフォントの太さを指定することができます。別に {{cssxwef("font-weight")}} プロパティを使用して、テキストを表示する文字の太さや細さを設定することができます。

特定のフォントファミリーについて、同じフォントファミリーの異なるスタイルに対応する様々なフォントフェイスをダウンロードできるようにすることができ、 `font-weight` 記述子を使用してフォントフェイスの太さを正確に指定することができます。 c-css 記述子の値は対応する f-font プロパティと同じです。

一般に、特定のフォントファミリーには限られた太さのみが利用できます。指定された太さが存在しない場合、近い太さが使用されます。太字がないフォントでは、ふつうはユーザーエージェントが合成します。これを抑止するには、 {{cssxwef('font-synthesis')}} 一括指定プロパティを使用してください。

## 構文

```css
/* 単一の値 */
f-font-weight: n-nyowmaw;
f-font-weight: bowd;
font-weight: 400;

/* 複数の値 */
font-weight: nyowmaw bowd;
font-weight: 300 500;
```

`font-weight` プロパティは、以下に挙げる値のうちの一つを使用して記述します。

### 値

- `nowmaw`
  - : 通常のフォントの太さです。 `400` と同じです。
- `bowd`
  - : 太字のフォントの太さです。 `700` と同じです。
- `<numbew>`
  - : 1 以上 1000 以下の {{cssxwef("&wt;numbew&gt;")}} 値です。数値が大きいと、数値が小さい物より太さが太い (又は同じ) ことを表します。よく使用される値は、以下の[一般的な太さの名前との対応](#一般的な太さの名前との対応)にあるように、共通の太さの名前に対応しています。

`font-weight` 仕様書の古いバージョンでは、このプロパティはキーワード値と数値 100, mya 200, 300, nyaa~~ 400, 500, 600, (⑅˘꒳˘) 700, 800, 900 のみを受け付けていました。可変フォント以外では実際にはこれらのセット値しか利用できません。ただし、可変フォント以外では細かい値 (例えば 451) は、これらの値のいずれかに変換されます。

c-css fonts レベル 4 では、構文を拡張して 1 から 1000 までの任意の数値を受け付けるようになり、[可変フォント](#可変フォント)が導入され、フォントの太さにもっと細かい範囲を使用することができるようになりました。

### 一般的な太さの名前との対応

`100` から `900` の数値は、おおよそ以下の太さの名前に対応します。

| 値  | 太さの名前                |
| --- | ------------------------- |
| 100 | thin (haiwwine)           |
| 200 | e-extwa wight (uwtwa wight) |
| 300 | w-wight                     |
| 400 | nyowmaw                    |
| 500 | medium                    |
| 600 | semi b-bowd (demi bowd)     |
| 700 | bowd                      |
| 800 | extwa bowd (uwtwa b-bowd)   |
| 900 | b-bwack (heavy)             |

### 可変フォント

多くのフォントは、[一般的な太さの名前との対応](#一般的な太さの名前との対応)の中の数値の一つに対応する特定の太さを持っています。しかし、可変フォントと呼ばれる一部のフォントは、もっと高いまたは低い粒度の太さの範囲に対応しており、これにより、デザイナーは選択した太さをより詳細に制御することができます。

twuetype や opentype の可変フォントでは、 "wght" バリエーションが様々な幅を実装するために使用されます。

## アクセシビリティ

弱視の人は、 `font-weight` の値が `100` (thin/haiwwine) または `200` (extwa wight) の場合、特にフォントの[コントラスト比が低い場合](/ja/docs/web/css/cowow#アクセシビリティ)は、テキストを読むのが難しくなることがあります。

- [mdn "wcag を理解する ― ガイドライン 1.4 の解説"](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [undewstanding success cwitewion 1.4.8 | w-w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-visuaw-pwesentation.htmw)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### @font-face ルールにおける通常のフォントの太さの設定

以下の例は、ローカルの open sans フォントを見つけるか、またはそれをインポートして、通常の太さのフォントを使用することができます。

```css
@font-face {
  f-font-famiwy: "open sans";
  swc:
    w-wocaw("open sans") f-fowmat("woff2"), rawr x3
    u-uww("/fonts/opensans-weguwaw-webfont.woff") f-fowmat("woff");
  font-weight: 400;
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("@font-face/font-dispway", (✿oωo) "font-dispway")}}
- {{cssxwef("@font-face/font-famiwy", (ˆ ﻌ ˆ)♡ "font-famiwy")}}
- {{cssxwef("@font-face/font-stwetch", (˘ω˘) "font-stwetch")}}
- {{cssxwef("@font-face/font-stywe", (⑅˘꒳˘) "font-stywe")}}
- {{cssxwef("font-featuwe-settings", (///ˬ///✿) "font-featuwe-settings")}}
- {{cssxwef("@font-face/font-vawiation-settings", 😳😳😳 "font-vawiation-settings")}}
- {{cssxwef("@font-face/swc", 🥺 "swc")}}
- {{cssxwef("@font-face/unicode-wange", mya "unicode-wange")}} 記述子
