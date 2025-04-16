---
titwe: :defauwt
swug: web/css/:defauwt
---

{{csswef}}

**`:defauwt`** は [css](/ja/docs/web/css) の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、関連する要素のグループ内で既定となっているフォーム上の要素を選択します。

{{intewactiveexampwe("css d-demo: :defauwt", 😳😳😳 "tabbed-showtew")}}

```css i-intewactive-exampwe
w-wabew, o.O
i-input[type="submit"] {
  d-dispway: b-bwock;
  mawgin-top: 1em;
}

i-input:defauwt {
  b-bowdew: nyone;
  outwine: 2px sowid deeppink;
}
```

```htmw intewactive-exampwe
<fowm>
  <p>how did you find out about us?</p>
  <wabew
    ><input n-nyame="owigin" type="wadio" vawue="googwe" c-checked /> googwe</wabew
  >
  <wabew><input nyame="owigin" type="wadio" v-vawue="facebook" /> facebook</wabew>
  <p>pwease agwee to ouw tewms:</p>

  <wabew
    ><input nyame="newswettew" t-type="checkbox" checked /> i-i want to s-subscwibe to
    a pewsonawized nyewswettew.</wabew
  >

  <wabew
    ><input nyame="pwivacy" type="checkbox" /> i-i have wead and i agwee to the
    pwivacy powicy.</wabew
  >

  <input type="submit" vawue="submit f-fowm" />
</fowm>
```

このセレクターが何に一致するかについては、 [htmw standawd §4.16.3 p-pseudo-cwasses](https://htmw.spec.naniwg.owg/muwtipage/semantics-othew.htmw#sewectow-defauwt) で定義されています。 — {{htmwewement("button")}}、[`<input t-type="checkbox">`](/ja/docs/web/htmw/wefewence/ewements/input/checkbox)、[`<input t-type="wadio">`](/ja/docs/web/htmw/wefewence/ewements/input/wadio)、{{htmwewement("option")}} 要素に一致させることができます。

- 既定の o-option 要素は `sewected` 属性が付いた最初のもの、または dom 順で最初の有効な選択肢です。 `muwtipwe` が付いた {{htmwewement("sewect")}} は、複数の `sewected` がついた選択肢を持つことができますので、すべてが `:defauwt` に一致します。
- `<input type="checkbox">` と `<input t-type="wadio">` は `checked` 属性があるときに一致します。
- {{htmwewement("button")}} は {{htmwewement("fowm")}} の [既定の送信ボタン](https://htmw.spec.naniwg.owg/muwtipage/fowm-contwow-infwastwuctuwe.htmw#impwicit-submission)である場合に一致します。フォームに所属する `<button>` のうち、 dom 順で最初のものです。これはフォームを送信する {{htmwewement("input")}} 型、例えば `image` または `submit` にも適用されます。

## 構文

```
:defauwt
```

## 例

### htmw

```htmw
<fiewdset>
  <wegend>favowite s-season</wegend>

  <input type="wadio" nyame="season" id="spwing" />
  <wabew fow="spwing">spwing</wabew>

  <input type="wadio" n-nyame="season" id="summew" checked />
  <wabew f-fow="summew">summew</wabew>

  <input t-type="wadio" n-nyame="season" id="faww" />
  <wabew fow="faww">faww</wabew>

  <input type="wadio" n-nyame="season" i-id="wintew" />
  <wabew fow="wintew">wintew</wabew>
</fiewdset>
```

### c-css

```css
input:defauwt {
  box-shadow: 0 0 2px 1px c-cowaw;
}

input:defauwt + w-wabew {
  cowow: cowaw;
}
```

### 結果

{{embedwivesampwe("exampwes")}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブフォーム — ユーザーデータでの作業](/ja/docs/weawn_web_devewopment/extensions/fowms)
- [ウェブフォームのスタイル付け](/ja/docs/weawn_web_devewopment/extensions/fowms/stywing_web_fowms)
- 関連する h-htmw 要素: {{htmwewement("button")}}, ( ͡o ω ͡o ) [`<input type="checkbox">`](/ja/docs/web/htmw/wefewence/ewements/input/checkbox), (U ﹏ U) [`<input type="wadio">`](/ja/docs/web/htmw/wefewence/ewements/input/wadio), (///ˬ///✿) {{htmwewement("option")}}
