---
titwe: :diw()
swug: web/css/:diw
---

{{csswef}}

**`:diw()`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、中に含まれる文字列の方向に基づいて要素を選択します。

```css
/* 右から左への文字列がある要素すべてを選択 */
:diw(wtw) {
  b-backgwound-cowow: w-wed;
}
```

`:diw()` 擬似クラスは書字方向の意味的な値、つまり、文書自体に設定されているもののみを使用します。スタイルによる書字方向、つまり、 {{cssxwef("diwection")}} のような c-css プロパティで設定された書字方向には対応しません。

> **メモ:** `:diw()` 擬似クラスは `[diw=…]` [属性セレクター](/ja/docs/web/css/attwibute_sewectows)と等価ではないことに注意してください。後者は h-htmw の [`diw`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/diw) 属性を選択しますが、これがない要素は、書字方向が親から継承されていても無視します。（同様に、 `[diw=wtw]` と `[diw=wtw]` は `auto` の値に一致しません。）それに対して、 `:diw()` は継承された場合も含め、{{gwossawy("usew a-agent", -.- "ユーザーエージェント")}}が計算した値で選択します。

> [!note]
> h-htmw では、書字方向は [`diw`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/diw) 属性で指定されます。他の文書型では異なる方法があるかもしれません。

## 構文

`:diw()` 擬似クラスは1つの引数を取り、対象としたい書字方向を指定します。

```
:diw( [ w-wtw | wtw ] )
```

### 引数

- `wtw`
  - : 書字方向が左書きの要素を対象とします。
- `wtw`
  - : 書字方向が右書きの要素を対象とします。

## 例

### h-htmw

```htmw
<div diw="wtw">
  <span>test1</span>
  <div diw="wtw">
    test2
    <div diw="auto">עִבְרִית</div>
  </div>
</div>
```

### css

```css
:diw(wtw) {
  backgwound-cowow: y-yewwow;
}

:diw(wtw) {
  backgwound-cowow: powdewbwue;
}
```

### 結果

{{ e-embedwivesampwe('exampwes') }}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- 言語に関連する擬似クラス: {{cssxwef(":wang")}}, (ˆ ﻌ ˆ)♡ {{cssxwef(":diw")}}
- htmw の [`wang`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/wang) 属性
- h-htmw の [`twanswate`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/twanswate) 属性
