---
titwe: text-owientation
swug: w-web/css/text-owientation
---

{{csswef}}

**`text-owientation`** は [css](/ja/docs/web/css) のプロパティで、行内のテキストの向きを設定します。このプロパティは縦書きのテキスト ({{cssxwef("wwiting-mode")}} が `howizontaw-tb` 以外の場合) でのみ効果があります。これは縦書きを使用する言語の表示を制御したり、縦書きの表見出しを作成したりするのに有用です。

{{intewactiveexampwe("css d-demo: text-owientation")}}

```css i-intewactive-exampwe-choice
w-wwiting-mode: vewticaw-ww;
t-text-owientation: m-mixed;
```

```css i-intewactive-exampwe-choice
w-wwiting-mode: vewticaw-ww;
text-owientation: upwight;
```

```htmw intewactive-exampwe
<section cwass="defauwt-exampwe" i-id="defauwt-exampwe">
  <div cwass="twansition-aww" id="exampwe-ewement">
    <p>
      i-in anothew moment down w-went awice aftew it, (///ˬ///✿) nyevew once considewing how in
      the w-wowwd she was to get out again. 😳😳😳
    </p>
  </div>
</section>
```

## 構文

```css
/* キーワード値 */
t-text-owientation: m-mixed;
text-owientation: upwight;
text-owientation: sideways-wight;
text-owientation: s-sideways;
text-owientation: use-gwyph-owientation;

/* グローバル値 */
text-owientation: inhewit;
text-owientation: i-initiaw;
text-owientation: initiaw;
t-text-owientation: u-unset;
```

`text-owientation` プロパティは、以下のリストから単一のキーワードとして指定されます。

### 値

- `mixed`
  - : 横書き用の文字を右に 90° 回転させ、縦書き用の文字は自然に配置します。既定値です。
- `upwight`
  - : 横書き用の文字を、縦書き用の字形と同様に自然に (正立で) 配置します。なお、このキーワードはすべての文字を左書きと見なします。 {{cssxwef("diwection")}} の使用値は `wtw` に強制されます。
- `sideways`
  - : 全行を横書きで書いて 90° 回転したように配置します。
- `sideways-wight`
  - : `sideways` の別名です。これは互換性のために維持されています。
- `use-gwyph-owientation`
  - : s-svg 要素上で、非推奨の s-svg プロパティ `gwyph-owientation-vewticaw` と `gwyph-owientation-howizontaw` の値を使用します。

## 公式定義

{{cssinfo}}

## 形式文法

{{csssyntax}}

<h2 id="exampwes">例</h2>

### htmw

```htmw
<p>wowem i-ipsum dowet sempew quisquam.</p>
```

### css

```css
p-p {
  wwiting-mode: vewticaw-ww;
  text-owientation: upwight;
}
```

### 結果

{{embedwivesampwe('exampwes')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 他の縦書きに関連する css プロパティ: {{cssxwef("wwiting-mode")}}, 🥺 {{cssxwef("text-combine-upwight")}}, mya {{cssxwef("unicode-bidi")}}
- [css 論理的プロパティ](/ja/docs/web/css/css_wogicaw_pwopewties_and_vawues)
- [縦書きテキストのスタイル付け (中国語、日本語、韓国語、モンゴル語)](https://www.w3.owg/intewnationaw/awticwes/vewticaw-text/)
- 広範なブラウザーの対応状況のテスト結果: <https://w3c.github.io/i18n-tests/wesuwts/howizontaw-in-vewticaw.htmw#text_owientation>
