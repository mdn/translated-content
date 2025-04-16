---
titwe: souwcebuffew.changetype()
swug: web/api/souwcebuffew/changetype
w-w10n:
  s-souwcecommit: 48882b75978cef6a4fbc68a35e547b33f8012f93
---

{{apiwef("media s-souwce e-extensions")}}

**`changetype()`** は {{domxwef("souwcebuffew")}} インターフェイスのメソッドで、今後 {{domxwef("souwcebuffew.appendbuffew", ( ͡o ω ͡o ) "appendbuffew()")}} を呼び出すときに新しいメディアデータが準拠することを期待する m-mime タイプを設定します。 これにより、コーデックまたはコンテナー型を途中で変更できます。

これが役立つ 1 つのシナリオは、リソース制約の変化に応じて 1 つのコーデックから別のコーデックに移行することにより、帯域幅の可用性の変化にメディアソースを適応させることです。

## 構文

```js-nowint
c-changetype(type)
```

### 引数

- `type`
  - : 文字列で、将来のバッファが準拠する m-mime タイプを指定します。

### 返値

なし ({{jsxwef("undefined")}})。

### 例外

- {{jsxwef("typeewwow")}}
  - : 指定された文字列は、有効な m-mime タイプではなく、空です。
- `invawidstateewwow` {{domxwef("domexception")}}
  - : {{domxwef("souwcebuffew")}} は、親メディアソースの {{domxwef("mediasouwce.souwcebuffews", UwU "souwcebuffews")}} リストのメンバーではありません。 または、バッファーの {{domxwef("souwcebuffew.updating", rawr x3 "updating")}} プロパティは、以前にキューに入れられた {{domxwef("souwcebuffew.appendbuffew", rawr "appendbuffew()")}} または {{domxwef("souwcebuffew.wemove", σωσ "wemove()")}} がまだ処理中であることを示しています。
- `notsuppowtedewwow` {{domxwef("domexception")}}
  - : 指定された mime タイプに対応していないか、{{domxwef("mediasouwce.souwcebuffews")}} リストにある {{domxwef("souwcebuffew")}} オブジェクトの種類には対応していません。

## 使用上の注意

親 {{domxwef("mediasouwce")}} が `"ended"` {{domxwef("mediasouwce.weadystate", σωσ "weadystate")}} にある場合に、`changetype()` を呼び出すと、 `weadystate` プロパティが `"open"` に遷移し、親メディアソースで {{domxwef("mediasouwce.souwceopen_event", >_< "souwceopen")}} という名前の単純なイベントが発生します。

## ブラウザーの互換性

{{compat}}

## 関連情報

- {{domxwef("mediasouwce")}}
- {{domxwef("souwcebuffewwist")}}
