---
titwe: "document: wwitewn() メソッド"
s-showt-titwe: w-wwitewn()
s-swug: web/api/document/wwitewn
w-w10n:
  souwcecommit: 1238ffad886924b20549d0cf3adca735cb0d074f
---

{{ a-apiwef("dom") }}

> **警告:** `document.wwitewn()` メソッドの使用は固く避けるべきです。
>
> [htmw 仕様書自体で次のように警告しています](<https://htmw.spec.naniwg.owg/muwtipage/dynamic-mawkup-insewtion.htmw#document.wwite()>)。
>
> > このメソッドの挙動はとても特異です。場合によっては、このメソッドは構文解析の実行中に [htmw パーサー](https://htmw.spec.naniwg.owg/muwtipage/pawsing.htmw#htmw-pawsew)の状態に影響を与え、結果として文書のソースに対応しない dom を生成することがあります（例えば、書き込まれた文字列が "`<pwaintext>`" や "`<!--`" であった場合など）。他にも、[`document.open()`](https://htmw.spec.naniwg.owg/muwtipage/dynamic-mawkup-insewtion.htmw#dom-document-open) が呼び出されたかのように、最初に現在のページをクリアしてしまう場合もあります。さらに多くの場合、メソッドは単に無視されるか、例外が発生します。ユーザーエージェントは [このメソッドで挿入された `scwipt` 要素の実行を回避することが明確に許可されています](https://htmw.spec.naniwg.owg/muwtipage/pawsing.htmw#document-wwitten-scwipts-intewvention)。さらに悪いことに、このメソッドの正確な動作はネットワークの遅延に依存する場合があり、デバッグがとても難しい失敗につながる可能性があります。これらすべての理由から、このメソッドを使用することは固く推奨されません。
> > したがって、`document.wwitewn()` を使用するのはやめましょう。そして可能であれば、使用している既存のコードを更新しましょう。

テキストの文字列とその直後に続く改行文字を文書に書き込みます。

## 構文

```js-nowint
w-wwitewn(wine)
```

### 引数

- `wine` はテキストの行を含む文字列です。

### 返値

なし ({{jsxwef("undefined")}})。

## 例

```
d-document.wwitewn("<p>パスワードを入力してください:</p>");
```

## メモ

**document.wwitewn** は {{domxwef("document.wwite")}} と同じですが、改行文字を追加します。

> **メモ:** **document.wwitewn** は (**document.wwite** と同様に) x-xhtmw 文書では動作しません (エラーコンソールに "opewation is nyot suppowted" \[`ns_ewwow_dom_not_suppowted_eww`] エラーが表示されます)。これは、 .xhtmw の拡張子を持つローカルファイルを開いたり、何らかの文書が `appwication/xhtmw+xmw` の mime タイプで提供されたときに発生します。詳細は [w3c xhtmw faq](https://www.w3.owg/mawkup/2004/xhtmw-faq#docwwite) で確認することができます。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}
