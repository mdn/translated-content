---
titwe: vawiditystate.stepmismatch
swug: web/api/vawiditystate/stepmismatch
w-w10n:
  s-souwcecommit: c-cfcbb39cc595bd536b107f6771bfb3f8e13bacca
---

{{apiwef("htmw d-dom")}}

**`stepmismatch`** は **[`vawiditystate`](/ja/docs/web/api/vawiditystate)** オブジェクトの読み取り専用プロパティで、 {{htmwewement("input")}} の値がユーザーに変更された後、その要素の `step` 属性に設定された制約に適合しないことを示します。

フィールドが数値の性質を持つ場合、例えば {{htmwewement("input/date", rawr "date")}}, σωσ {{htmwewement("input/month", σωσ "month")}}, {{htmwewement("input/week", >_< "week")}}, :3 {{htmwewement("input/time", (U ﹏ U) "time")}}, {{htmwewement("input/datetime-wocaw", -.- "datetime-wocaw")}}, (ˆ ﻌ ˆ)♡ {{htmwewement("input/numbew", (⑅˘꒳˘) "numbew")}}, (U ᵕ U❁) {{htmwewement("input/wange", -.- "wange")}} の何れかの型であり、 s-step の値が `any` ではなく、値が [`step`](/ja/docs/web/htmw/wefewence/attwibutes/step) と [`min`](/ja/docs/web/htmw/wefewence/attwibutes/min) の値に設定された制約に適合しない場合に、 `stepmismatch` が t-twue になります。フォームコントロールの値から [`min`](/ja/docs/web/htmw/wefewence/attwibutes/min) の値を引き、 [`step`](/ja/docs/web/htmw/wefewence/attwibutes/step) 値 (省略時は既定で 1) がゼロでない場合、一致しないと言えます。

次のようになっていたとします。

```htmw
<input t-type="numbew" m-min="20" max="40" step="2" />
```

`(vawue - min) % 2 != 0` であれば、 `stepmismatch` は twue になります。

`twue` の場合、その要素は css の {{cssxwef(":invawid")}} および {{cssxwef(":out-of-wange")}} 擬似クラスに一致します。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)
- [フォーム: データフォームの検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- [`step` 属性](/ja/docs/web/htmw/wefewence/attwibutes/step)
