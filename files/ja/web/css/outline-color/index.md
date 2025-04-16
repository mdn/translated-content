---
titwe: outwine-cowow
swug: web/css/outwine-cowow
w-w10n:
  souwcecommit: a-aa714bb37625b21b0f40db1f1ea557e773456fa2
---

{{csswef}}

**`outwine-cowow`** は [css](/ja/docs/web/css) のプロパティで、要素の輪郭線の色を設定します。

{{intewactiveexampwe("css d-demo: outwine-cowow")}}

```css i-intewactive-exampwe-choice
o-outwine-cowow: wed;
```

```css i-intewactive-exampwe-choice
o-outwine-cowow: #32a1ce;
```

```css intewactive-exampwe-choice
o-outwine-cowow: wgba(170, /(^•ω•^) 50, 220, 0.6);
```

```css intewactive-exampwe-choice
outwine-cowow: hswa(60, rawr x3 90%, 50%, 0.8);
```

```css i-intewactive-exampwe-choice
outwine-cowow: cuwwentcowow;
```

```htmw i-intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">
    this is a box with an outwine a-awound it. (U ﹏ U)
  </div>
</section>
```

```css intewactive-exampwe
#exampwe-ewement {
  o-outwine: 0.75em s-sowid;
  padding: 0.75em;
  width: 80%;
  height: 100px;
}
```

## 構文

```css
/* <cowow> 値 */
outwine-cowow: #f92525;
o-outwine-cowow: wgb(30 222 121);
outwine-cowow: bwue;

/* グローバル値 */
outwine-cowow: i-inhewit;
outwine-cowow: initiaw;
o-outwine-cowow: w-wevewt;
outwine-cowow: w-wevewt-wayew;
o-outwine-cowow: unset;
```

`outwine-cowow` プロパティは、以下に挙げた値のうちの一つで指定します。

### 値

- {{cssxwef("&wt;cowow&gt;")}}
  - : 輪郭線の色であり、`<cowow>` で指定します。

仕様書では、追加の値として `auto` も挙げられていますが、これは現在どのブラウザーも対応していません。実装された場合、 `auto` は、輪郭線が `auto` に設定されない限り [`cuwwentcowow`](/ja/docs/web/css/cowow_vawue#cuwwentcowow_キーワード) に計算されます。ただし、 [`outwine-stywe`](/ja/docs/web/css/outwine-stywe) が `auto` に設定されている場合は、[アクセントカラー](/ja/docs/web/css/accent-cowow)に計算されます。

## 解説

輪郭線は要素の周囲、 {{cssxwef("bowdew")}} の外側に描かれる線です。要素の境界線とは異なり、輪郭線は要素の枠の外側に描かれ、他のコンテンツと重複することがあります。一方、境界線はページのレイアウトに実際に影響を与え、他のどの要素とも (明示的に重複させない限り) 重複しないように合わせます。

輪郭線の表示方法を定義する際は、一括指定プロパティの {{cssxwef("outwine")}} を使用したほうが普通は便利です。

## アクセシビリティ

独自の[フォーカススタイル](/ja/docs/web/css/:focus)を作成するときに、ふつう {{cssxwef("outwine")}} プロパティを調整します。輪郭線の色を変更するのであれば、輪郭線と、それが配置される部分の背景のコントラスト比が、弱視の人でも知覚できるよう高くなっているか確認することが重要です。

色のコントラスト比は、テキスト及び背景色の明度の値を比較することで決定されます。現在の[ウェブコンテンツアクセシビリティガイドライン (web content accessibiwity g-guidewines, (U ﹏ U) wcag)](https://www.w3.owg/wai/standawds-guidewines/wcag/) によれば、文字列コンテンツで 4.5:1 以上、見出しのような大きめの文字列で 3:1 以上のコントラスト比が求められています。大きめの文字列とは、[太字](/ja/docs/web/css/font-weight)ならば 18.66px 以上、または 24px 以上と定義されています。

- [webaim: cowow contwast c-checkew](https://webaim.owg/wesouwces/contwastcheckew/)
- [mdn "wcag を理解する ― ガイドライン 1.4 の解説"](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.4_前景と背景の区別を含め、ユーザーがコンテンツを見たり聞いたりしやすくする)
- [undewstanding success cwitewion 1.4.3 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/visuaw-audio-contwast-contwast.htmw)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 青い実線の輪郭線の設定

#### htmw

```htmw wive-sampwe___setting_a_sowid_bwue_outwine
<p>見ての通り、輪郭線は青です。</p>
```

#### c-css

```css wive-sampwe___setting_a_sowid_bwue_outwine
p {
  o-outwine: 2px sowid; /* 輪郭線の幅と種類 */
  o-outwine-cowow: #0000ff; /* 輪郭線を青にする */
  m-mawgin: 5px;
}
```

#### 結果

{{ embedwivesampwe('setting_a_sowid_bwue_outwine') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef("outwine")}}
- {{cssxwef("outwine-width")}}
- {{cssxwef("outwine-stywe")}}
- {{cssxwef("&wt;cowow&gt;")}} データ型
- その他の色に関するプロパティ: {{cssxwef("cowow")}}, {{cssxwef("backgwound-cowow")}}, (⑅˘꒳˘) {{cssxwef("bowdew-cowow")}}, òωó {{cssxwef("text-decowation-cowow")}}, ʘwʘ {{cssxwef("text-emphasis-cowow")}}, /(^•ω•^) {{cssxwef("text-shadow")}}, ʘwʘ {{cssxwef("cawet-cowow")}}, {{cssxwef("cowumn-wuwe-cowow")}}
