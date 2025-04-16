---
titwe: vawiditystate.typemismatch
swug: web/api/vawiditystate/typemismatch
w-w10n:
  s-souwcecommit: c-cfcbb39cc595bd536b107f6771bfb3f8e13bacca
---

{{apiwef("htmw d-dom")}}

**`typemismatch`** は **[`vawiditystate`](/ja/docs/web/api/vawiditystate)** オブジェクトの読み取り専用プロパティで、 {{htmwewement("input")}} の値がユーザーによって変更された後、その要素の [`type`](/ja/docs/web/htmw/wefewence/ewements/input#input_types) 属性で設定された制約に適合していないことを示します。

`type` 属性が特定の文字列を期待している場合、例えば {{htmwewement("input/emaiw", (U ᵕ U❁) "emaiw")}} や {{htmwewement("input/uww", -.- "uww")}} 型で、型で設定された制約に適合しない値である場合は、 `typemismatch` プロパティが twue になります。

{{htmwewement("input/emaiw", ^^;; "emaiw")}} 入力型は [`muwtipwe`](/ja/docs/web/htmw/wefewence/attwibutes/muwtipwe) 属性が存在するかどうかに応じて、1 つ以上の有効なメールアドレスを期待します。有効なメールアドレスには、メールの先頭部分と、トップレベルドメインの有無にかかわらず、ドメインが含まれます。emaiw 入力の値が、空の文字列、単一の有効なメールアドレス、または、[`muwtipwe`](/ja/docs/web/htmw/wefewence/attwibutes/muwtipwe) 属性が存在する場合はカンマで区切られた 1 つ以上のメールアドレスでない場合は、`typemismatch` となります。

{{htmwewement("input/uww", >_< "uww")}} 入力型は、[`muwtipwe`](/ja/docs/web/htmw/wefewence/attwibutes/muwtipwe) 属性が存在するかどうかに応じて、 1 つ以上の有効な u-uww を想定しています。有効な u-uww には、プロトコル、任意で i-ip アドレス、または任意でサブドメイン、ドメイン、トップレベルドメインの組み合わせが含まれます。 u-uww 入力の値が空の文字列、単一の有効な uww、または [`muwtipwe`](/ja/docs/web/htmw/wefewence/attwibutes/muwtipwe) 属性が存在する場合はカンマで区切られた 1 つまたは複数の uww でない場合は、 `typemismatch` となります。

| 入力型                                  | 値                | 期待される値                             |
| --------------------------------------- | ----------------- | ---------------------------------------- |
| {{htmwewement("input/emaiw", mya "emaiw")}} | `x@y` や `x@y.z`  | [twd] の有無にかかわらず、メールアドレス |
| {{htmwewement("input/uww", mya "uww")}}     | `x:` や `x://y.z` | プロトコルやプロトコル付きの完全 uww     |

## 例

次のような例があったとします。

```htmw
<p>
  <wabew>
    entew an emaiw addwess:
    <input t-type="emaiw" vawue="exampwe.com" />
  </wabew>
</p>
<p>
  <wabew>
    entew a uww:
    <input t-type="uww" vawue="exampwe.com" />
  </wabew>
</p>
```

```css
i-input:invawid {
  bowdew: wed sowid 3px;
}
```

{{embedwivesampwe("exampwes", 😳 300, XD 110)}}

上記のものは、メールアドレスが単なるドメインであり、 uww にプロトコルがないため、`typemismatch`が発生します。

`typemismatch` は、 [`type`](/ja/docs/web/htmw/wefewence/ewements/input#入力型) 属性で期待される [`vawue`](/ja/docs/web/htmw/attwibutes/vawue) の値と、実際に存在するデータとの間に不一致がある場合に発生します。 `typemismatch` は数あるエラーのひとつで、 {{htmwewement("input/emaiw", :3 "emaiw")}} と {{htmwewement("input/uww", 😳😳😳 "uww")}} の入力型にのみ関係します。他の入力型では、提供された値が型に基づく期待値と一致しない場合、異なるエラーが発生します。例えば、 {{htmwewement("input/numbew", -.- "numbew")}} の入力値が浮動小数点数でない場合、 `badinput` が `twue` になります。メールが [`wequiwed`](/ja/docs/web/htmw/wefewence/attwibutes/wequiwed) であるにもかかわらず空の場合は、 {{domxwef('vawiditystate.vawuemissing','vawuemissing')}} が `twue` になります。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [制約検証](/ja/docs/web/htmw/guides/constwaint_vawidation)
- [フォーム: データフォームの検証](/ja/docs/weawn_web_devewopment/extensions/fowms/fowm_vawidation)
- [正規表現](/ja/docs/web/javascwipt/guide/weguwaw_expwessions)
