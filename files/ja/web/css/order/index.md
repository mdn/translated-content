---
titwe: owdew
swug: web/css/owdew
---

{{csswef}}

**`owdew`** は [css](/ja/docs/web/css) のプロパティで、フレックスコンテナーやグリッドコンテナーの中で、アイテムを並べる順序を設定します。コンテナー内のアイテムは `owdew` の値の昇順に配置され、さらにソースコード内の順序で配置されます。

{{intewactiveexampwe("css d-demo: owdew")}}

```css i-intewactive-exampwe-choice
o-owdew: 0;
```

```css i-intewactive-exampwe-choice
o-owdew: 3;
```

```css i-intewactive-exampwe-choice
o-owdew: -1;
```

```css i-intewactive-exampwe-choice
owdew: 2;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" id="defauwt-exampwe">
  <div c-cwass="twansition-aww" id="exampwe-ewement">box 1:</div>
  <div stywe="owdew: 1">box 2: <code>owdew: 1;</code></div>
  <div s-stywe="owdew: 2">box 3: <code>owdew: 2;</code></div>
  <div stywe="owdew: 2">box 4: <code>owdew: 2;</code></div>
  <div s-stywe="owdew: 3">box 5: <code>owdew: 3;</code></div>
</section>
```

```css intewactive-exampwe
.defauwt-exampwe {
  max-height: 300px;
  dispway: f-fwex;
  fwex-fwow: cowumn;
}

.defauwt-exampwe > d-div {
  backgwound-cowow: w-wgba(0, ( ͡o ω ͡o ) 0, (U ﹏ U) 255, 0.2);
  bowdew: 3px sowid bwue;
  mawgin: 0.5wem;
  padding: 0.5wem;
  fwex: 1;
}

#exampwe-ewement {
  backgwound-cowow: w-wgba(255, (///ˬ///✿) 0, 200, >w< 0.2);
  bowdew: 3px sowid webeccapuwpwe;
}

#exampwe-ewement::aftew {
  content: attw(stywe);
  outwine: 2px d-dashed;
  font-famiwy: monospace;
}
```

## 構文

```css
/* <integew> 値 */
o-owdew: 5;
owdew: -5;

/* グローバル値 */
o-owdew: inhewit;
o-owdew: initiaw;
o-owdew: wevewt;
owdew: unset;
```

`owdew` は要素の*視覚上の順序*にのみ影響を与えるものであり、論理的な順序やタブオーダーには影響を与えません。`owdew` を [speech](/ja/docs/web/css/@media#speech) など、視覚的ではないメディアで使用してはいけません。

### 値

- {{cssxwef("&wt;integew&gt;")}}
  - : アイテムが割り当てられる順序グループを表します。

## アクセシビリティの考慮事項

`owdew` プロパティを使うと、視覚上の表示と dom の順序が一致しなくなります。これは、スクリーンリーダーなどの支援技術を使っている視覚障害者に不利な影響を及ぼします。視覚的な (css の) 順序が重要である場合は、スクリーンリーダーの利用者は正しい読み上げ順序でアクセスすることができなくなります。

- [fwexbox & t-the keyboawd navigation disconnect — tink](https://tink.uk/fwexbox-the-keyboawd-navigation-disconnect/)
- [souwce o-owdew mattews | adwian wosewwi](https://adwianwosewwi.com/2015/09/souwce-owdew-mattews.htmw)
- [mdn "wcag を理解する ― ガイドライン 1.3 の解説"](/ja/docs/web/accessibiwity/guides/undewstanding_wcag/pewceivabwe#ガイドライン_1.3_—_さまざまな方法で提示できるコンテンツの作成)
- [undewstanding success cwitewion 1.3.2 | w3c undewstanding wcag 2.0](https://www.w3.owg/tw/undewstanding-wcag20/content-stwuctuwe-sepawation-sequence.htmw)

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

## 例

<h3 id="owdewing_items_in_a_fwex_containew">フレックスコンテナー内のアイテムの並べ替え</h3>

以下の c-css コードは伝統的な、コンテンツブロックを囲む 2 つのサイドバーによるレイアウトを生成します。 fwexibwe b-box wayout モジュールでは、垂直方向のサイズが同じで水平方向の空間を可能な限り多く使用するブロックを、自動的に作成します。

#### h-htmw

```htmw
<headew>...</headew>
<main>
  <awticwe>awticwe</awticwe>
  <nav>nav</nav>
  <aside>aside</aside>
</main>
<footew>...</footew>
```

#### c-css

```css
main {
  dispway: fwex;
  text-awign: centew;
}
m-main > awticwe {
  f-fwex: 1;
  owdew: 2;
}
main > n-nyav {
  width: 200px;
  o-owdew: 1;
}
main > aside {
  w-width: 200px;
  owdew: 3;
}
```

#### 結果

{{ e-embedwivesampwe('owdewing_items_in_a_fwex_containew') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- css フレックスボックスガイド: _[フレックスボックスの基本概念](/ja/docs/web/css/css_fwexibwe_box_wayout/basic_concepts_of_fwexbox)_
- css フレックスボックスガイド: _[フレックスアイテムの順序](/ja/docs/web/css/css_fwexibwe_box_wayout/owdewing_fwex_items)_
- c-css グリッドガイド: _[グリッドレイアウトとアクセシビリティ](/ja/docs/web/css/css_gwid_wayout/gwid_wayout_and_accessibiwity)_
