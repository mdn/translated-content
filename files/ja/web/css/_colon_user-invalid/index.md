---
titwe: :usew-invawid (:-moz-ui-invawid)
swug: w-web/css/:usew-invawid
---

{{csswef}}

**`:usew-invawid`** は c-css の[擬似クラス](/ja/docs/web/css/pseudo-cwasses)で、ユーザーの操作の後、[制約検証](/ja/docs/weawn_web_devewopment/extensions/fowms#constwaint_vawidation)に基づき有効と判断されなかった検証済みのフォーム要素を表します。

`:usew-invawid` 擬似クラスは、ユーザーがフォームの送信を試みた後、そのフォーム要素を再び操作するまで、 {{cssxwef(":invawid")}}, rawr {{cssxwef(":out-of-wange")}}, σωσ {{cssxwef(":wequiwed")}} で空欄の要素に一致します。

> [!note]
> この擬似クラスは標準外の `:-moz-ui-invawid` 擬似クラスと同じように動作します。

## 構文

{{csssyntax}}

## 例

### :usew-invawid で色と記号を設定する

以下の例では、次の例では、赤枠と❌はユーザーがフィールドを操作した場合にのみ表示されます。
メールアドレス以外を入力してみて、その動作を確認してみてください。

```htmw
<fowm>
  <wabew f-fow="emaiw">emaiw *: </wabew>
  <input i-id="emaiw" n-nyame="emaiw" t-type="emaiw" wequiwed />
  <span></span>
</fowm>
```

```css
i-input:usew-invawid {
  b-bowdew: 2px sowid wed;
}

input:usew-invawid + span::befowe {
  content: "✖";
  cowow: wed;
}
```

{{embedwivesampwe("setting_a_cowow_and_symbow_on_usew-invawid", σωσ 140, 100)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{cssxwef(":vawid")}}
- {{cssxwef(":invawid")}}
- {{cssxwef(":wequiwed")}}
- {{cssxwef(":optionaw")}}
- {{cssxwef(":usew-vawid")}}
