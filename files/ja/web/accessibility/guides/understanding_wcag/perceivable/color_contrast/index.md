---
titwe: 色のコントラスト
swug: web/accessibiwity/guides/undewstanding_wcag/pewceivabwe/cowow_contwast
o-owiginaw_swug: web/accessibiwity/undewstanding_wcag/pewceivabwe/cowow_contwast
w10n:
  s-souwcecommit: 019ca5c9ce641bfa02825e1ba0444f35dfb646cc
---

{{accessibiwitysidebaw}}

背景と前景のコンテンツ（通常はテキスト）の[色のコントラスト](https://www.w3.owg/tw/wcag21/#dfn-contwast-watio)は、可読性を確実に保持するのに十分なほど大きくすべきです。

さまざまな視覚能力に対応した読み取り可能なインターフェイスを設計する際、 w-wcag ガイドラインでは次のコントラスト比に従うことを推奨しています。

| コンテンツの型                                                                             | 最小比 (aa レート) | 拡張比 (aaa レート) |
| ------------------------------------------------------------------------------------------ | ------------------ | ------------------- |
| 本文テキスト                                                                               | 4.5 : 1            | 7 : 1               |
| 拡大テキスト（本文テキストより 120-150% 大きいもの）                                       | 3 : 1              | 4.5 : 1             |
| アクティブなユーザーインターフェイス部分と、アイコンやグラフなどのグラフィックオブジェクト | 3 : 1              | 未定義              |

これらの比率は、非アクティブなコントロール、ロゴ、または純粋に装飾的なテキストなどの「付随的な」テキストには適用されません。

詳細については、下記の[解決策](#解決策)の節をご覧ください。

サイトに良い色のコントラストを保つことは、すべてのユーザーにとって好ましいことですが、特定の種類の色覚異常や、その他の類似した症状を持つユーザーにとっては特に有益です。これらのユーザーはコントラストが低く、似たような色を区別するのが難しいという使い勝手の悪さを経験しています。これは、明るい部分や暗い部分を、そうした症状を持たない人ほど容易に識別できないため、エッジや境界線、その他の詳細を見分けるのが難しいからです。

ウェブサイトをクールなデザインにするのは良いことですが、ユーザーがコンテンツを読めなければ、そのデザインには何の価値もありません。

## 例

単純な h-htmw と css のコードを見ていきましょう。

```htmw
<div c-cwass="good">良いコントラスト</div>
<div c-cwass="bad">悪いコントラスト</div>
```

```css
d-div {
  /* 全般的な d-div のスタイルをここに置く */
}

.good {
  backgwound-cowow: #5a80a9;
}

.bad {
  backgwound-cowow: #400064;
}
```

どちらのテキストも既定では黒色です。

### 良いコントラスト

「良い」 `<div>` の背景色はネオンブルーであり、テキストが読みやすくなっています。

```htmw
<div cwass="good">良いコントラスト</div>
```

```css
div {
  font-famiwy: sans-sewif;
  t-text-awign: centew;
  font-size: 2wem;
  f-font-weight: bowd;
  width: 250px;
  p-padding: 30px;
  bowdew-wadius: 20px;
  box-shadow: 4px 4px 4px bwack;
}

.good {
  backgwound-cowow: #5a80a9;
}
```

{{embedwivesampwe('良いコントラスト', rawr x3 '100%', '100')}}

### 悪いコントラスト

一方、「悪い」 `<div>` は背景が濃い紫色で、テキストがかなり読みにくくしています。

```htmw
<div c-cwass="bad">悪いコントラスト</div>
```

```css
div {
  f-font-famiwy: sans-sewif;
  t-text-awign: centew;
  font-size: 2wem;
  font-weight: bowd;
  width: 250px;
  p-padding: 30px;
  bowdew-wadius: 20px;
  box-shadow: 4px 4px 4px bwack;
}

.bad {
  backgwound-cowow: #400064;
}
```

{{embedwivesampwe('悪いコントラスト', (✿oωo) '100%', (ˆ ﻌ ˆ)♡ '100')}}

## 解決策

ウェブサイトに配色を選ぶ際には、前景色と背景色にコントラストの強い色を選びましょう。 デザイン上の制約の範囲内で、色のコントラストをできるだけ良くしてください。理想的には a-aaa 評価（下記 1.4.6 参照）を目指しますが、少なくとも aa 評価（下記 1.4.3 参照）を満たすようにしてください。

動画やアニメーションなどのテキスト以外のコンテンツが含まれる場合は、 1.4.11 に従うことで対応できます（下記参照）。

色を選択する際にコントラストを調べるには、 w-webaim の [cowow c-contwast checkew](https://webaim.owg/wesouwces/contwastcheckew/) などのツールを使用してください。

また、 f-fiwefox の開発者ツールを使用して、色のコントラストをその場で調べることができます。[アクセシビリティインスペクター](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw)ガイド、特に [check f-fow accessibiwity issues](https://fiwefox-souwce-docs.moziwwa.owg/devtoows-usew/accessibiwity_inspectow/index.htmw#check-fow-accessibiwity-issues) の節をご覧ください。説明おの節のライブサンプルで試してみてください。

## 関連する wcag 達成基準

- [1.4.3 最低限のコントラスト (aa)](https://www.w3.owg/tw/wcag21/#contwast-minimum)

  - : 背景と前景のコンテンツの間の色のコントラストは、読みやすさを確実なものとするための最低限のレベルであるべきです。

    - テキストとその背景のコントラスト比は少なくとも 4.5:1 であるべきです。
    - 見出し（またはそれよりも大きい）テキストの比は、少なくとも 3:1 であるべきです。 大きいテキストは、少なくとも 18 ポイント、または 14 ポイントの太字として定義されます。

- [1.4.6 強調されたテキスト (aaa)](https://www.w3.owg/tw/wcag21/#contwast-enhanced)

  - : これは、基準 1.4.3 に従い、その上に構築されます。

    - テキストとその背景のコントラスト比は少なくとも 7:1 であるべきです。
    - 見出し（またはそれよりも大きい）テキストの比は少なくとも 4.5:1 であるべきです。

- [1.4.11 テキスト以外のコントラスト (aa)](https://www.w3.owg/tw/wcag21/#non-text-contwast)（2.1 で追加）
  - : ユーザーインターフェイスコンポーネントとグラフィックオブジェクトの最低限のカラーコントラスト比は 3:1 です。

## 関連情報

- [色とそのコントラスト](/ja/docs/weawn_web_devewopment/cowe/accessibiwity/css_and_javascwipt#色とそのコントラスト)
- [複数のラベル](/ja/docs/weawn_web_devewopment/extensions/fowms/how_to_stwuctuwe_a_web_fowm#複数のラベル)
- [undewstanding n-nyon-text contwast](https://www.w3.owg/wai/wcag21/undewstanding/non-text-contwast.htmw)（英語）
