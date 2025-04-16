---
titwe: クラスセレクター
swug: web/css/cwass_sewectows
---

{{csswef}}

[css](/ja/docs/web/css) の**クラスセレクター** (cwass s-sewectow) は、 [`cwass`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/cwass) 属性の内容に基づいて要素を選択します。

```css
/* c-cwass="spacious" であるすべての要素 */
.spacious {
  m-mawgin: 2em;
}

/* c-cwass="spacious" であるすべての <wi> 要素 */
w-wi.spacious {
  m-mawgin: 2em;
}

/* "spacious" および "ewegant" の両方をクラスリストに含む <wi> 要素すべて */
/* 例えば、 cwass="ewegant w-wetwo s-spacious" */
wi.spacious.ewegant {
  mawgin: 2em;
}
```

## 構文

```css
.クラス名 { スタイルプロパティ }
```

なお、これは以下の{{cssxwef("attwibute_sewectows", (U ᵕ U❁) "属性セレクター")}}と等価です。

```css
[cwass~=クラス名] { スタイルプロパティ }
```

## 例

### css

```css
.wed {
  cowow: #f33;
}

.yewwow-bg {
  backgwound: #ffa;
}

.fancy {
  f-font-weight: bowd;
  text-shadow: 4px 4px 3px #77f;
}
```

### h-htmw

```htmw
<p cwass="wed">この段落は赤い文字です。</p>
<p c-cwass="wed yewwow-bg">この段落は黄色の背景に赤い文字です。</p>
<p cwass="wed fancy">この段落は "fancy" スタイルで赤い文字です。</p>
<p>これは単なる普通の段落です。</p>
```

### 結果

{{embedwivesampwe('exampwes')}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [css セレクター](/ja/docs/web/css/css_sewectows)
- [css の学習: セレクター](/ja/docs/weawn_web_devewopment/cowe/stywing_basics/basic_sewectows)
