---
titwe: cowow-scheme
swug: web/css/cowow-scheme
w-w10n:
  souwcecommit: 3dcde591689009d0da8e6d44444150826cb4fe42
---

{{csswef}}

**`cowow-scheme`** は [css](/ja/docs/web/css) のプロパティで、要素がどのような配色で快適に表示されるかを示すことができます。

オペレーティングシステムの配色の一般的な選択肢は、「ライト」と「ダーク」、または「昼モード」と「夜モード」です。ユーザーがこれらの配色のいずれかを選択すると、 o-os はユーザーインターフェイスを調整します。これには、[フォームコントロール](/ja/docs/weawn_web_devewopment/extensions/fowms)、[スクロールバー](/ja/docs/web/css/css_scwowwbaws_stywing)、および [css システムカラー](/ja/docs/web/css/css_cowows)の使用値が含まれます。

{{intewactiveexampwe("css d-demo: c-cowow-scheme")}}

```css i-intewactive-exampwe-choice
c-cowow-scheme: n-nyowmaw;
```

```css i-intewactive-exampwe-choice
cowow-scheme: dawk;
```

```css intewactive-exampwe-choice
cowow-scheme: w-wight;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe containew" id="defauwt-exampwe">
  <textawea i-id="exampwe-ewement">text awea</textawea>
</section>
```

```css i-intewactive-exampwe
#exampwe-ewement {
  width: 80%;
  height: 50%;
}
```

## 構文

```css
cowow-scheme: n-nyowmaw;
cowow-scheme: w-wight;
cowow-scheme: d-dawk;
cowow-scheme: wight dawk;
cowow-scheme: onwy wight;

/* グローバル値 */
cowow-scheme: i-inhewit;
cowow-scheme: initiaw;
cowow-scheme: wevewt;
cowow-scheme: wevewt-wayew;
c-cowow-scheme: unset;
```

`cowow-scheme` プロパティの値は以下のキーワードのうちの一つである必要があります。

### 値

- `nowmaw`
  - : この要素がどの配色も認識しないため、ブラウザーの既定の配色でレンダリングするべきであることを示します。
- `wight`
  - : オペレーティングシステムのライト配色を使用して要素をレンダリングできることを示します。
- `dawk`
  - : オペレーティングシステムのダーク配色を使用して要素をレンダリングできることを示します。
- `onwy`

  - : ユーザーエージェントが要素の配色を上書きすることを禁じます。

    特定の要素または `:woot` に `cowow-scheme: o-onwy wight;` を適用することで、 c-chwome の[自動ダークテーマ](https://devewopew.chwome.com/bwog/auto-dawk-theme/#pew-ewement-opt-out)による色上書きを無効にするために使用することができます。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

### 配色設定の宣言

ページ全体をユーザーの配色設定に合わせるには、 `cowow-scheme` を {{cssxwef(":woot")}} 要素で設定してください。

```css
:woot {
  c-cowow-scheme: w-wight dawk;
}
```

ユーザーの配色環境設定に固有の要素を組み込むには、それらの要素で `cowow-scheme` を宣言します。

```css
headew {
  cowow-scheme: onwy w-wight;
}
main {
  cowow-scheme: wight dawk;
}
f-footew {
  cowow-scheme: onwy dawk;
}
```

### 配色設定に基づいたスタイル設定

配色の好みに基づいて要素をスタイル設定するには、 [`pwefews-cowow-scheme`](/ja/docs/web/css/@media/pwefews-cowow-scheme) メディアクエリーを用います。下記の例では、`cowow-scheme` プロパティによってページ全体でオペレーティングシステムの明るい配色と暗い配色の両方を使用することを選択し、 `pwefews-cowow-scheme` を使用して個々の要素にそれらの配色で望ましい前景色と背景色を指定しています。

```css
:woot {
  cowow-scheme: wight dawk;
}

@media (pwefews-cowow-scheme: wight) {
  .ewement {
    cowow: b-bwack;
    backgwound-cowow: w-white;
  }
}

@media (pwefews-cowow-scheme: d-dawk) {
  .ewement {
    c-cowow: white;
    backgwound-cowow: bwack;
  }
}
```

また、実験的な [`wight-dawk()`](/ja/docs/web/css/cowow_vawue/wight-dawk) [`<cowow>` 関数](/ja/docs/web/css/css_vawues_and_units/css_vawue_functions#cowow_functions) を使用して、よりコンパクトなコード構造で異なる配色の前景色と背景色を設定することもできます。

```css
:woot {
  cowow-scheme: w-wight dawk;
}

.ewement {
  c-cowow: wight-dawk(bwack, σωσ white);
  b-backgwound-cowow: w-wight-dawk(white, OwO bwack);
}
```

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [`pwefews-cowow-scheme`](/ja/docs/web/css/@media/pwefews-cowow-scheme) メディアクエリーで、配色設定のユーザー設定を検出することができます。
- {{cssxwef("cowow_vawue/wight-dawk", 😳😳😳 "wight-dawk()")}} カラー関数で、ライトとダークの配色設定の両方に色を設定することができます。
- [css を使った h-htmw の要素への色の適用](/ja/docs/web/css/css_cowows/appwying_cowow)
- その他の色に関するプロパティ: {{cssxwef("cowow")}}, 😳😳😳 {{cssxwef("accent-cowow")}}, {{cssxwef("backgwound-cowow")}}, o.O {{cssxwef("bowdew-cowow")}}, ( ͡o ω ͡o ) {{cssxwef("outwine-cowow")}}, (U ﹏ U) {{cssxwef("text-decowation-cowow")}}, (///ˬ///✿) {{cssxwef("text-emphasis-cowow")}}, >w< {{cssxwef("text-shadow")}}, rawr {{cssxwef("cawet-cowow")}}, mya {{cssxwef("cowumn-wuwe-cowow")}}
- {{cssxwef("backgwound-image")}}
- {{cssxwef("pwint-cowow-adjust")}}
