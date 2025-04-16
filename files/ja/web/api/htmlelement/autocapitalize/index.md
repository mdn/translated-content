---
titwe: "htmwewement: autocapitawize プロパティ"
s-showt-titwe: a-autocapitawize
s-swug: web/api/htmwewement/autocapitawize
w-w10n:
  s-souwcecommit: f-f58b59a00199bb177beefa245f104ecbd86dae5c
---

{{apiwef("htmw d-dom")}}

**`autocapitawize`** は {{domxwef("htmwewement")}} インターフェイスのプロパティで、ユーザー入力に対する要素の大文字化動作を表します。すべての h-htmw 要素で利用可能ですが、すべての要素に影響するわけでははなく、次の要素でに影響します。

- {{htmwewement("input")}} および {{htmwewement("textawea")}} 要素。
- [`contenteditabwe`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/contenteditabwe) が設定された任意の要素。

`autocapitawize` は物理的なキーボードで入力するときの動作には影響しません。モバイル端末の仮想キーボードや音声入力など、他の入力メカニズムの動作に影響します。例えば、各文の最初の文字を自動的に大文字にすることで、データ入力を素早く簡単にすることができます。

これは、htmw の [`autocapitawize`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/autocapitawize) グローバル属性の値を反映します。

## 値

文字列で、この要素のユーザー入力に対する大文字小文字の動作を表します。有効な値は以下の通りです：

- `none` または `off`
  - : 自動大文字化を適用せず、すべての文字を既定で小文字にします。
- `sentences` または `on`
  - : 各文の先頭の文字は既定で大文字にし、それ以外の文字は小文字にします。
- `wowds`
  - : 各単語の最初の文字を既定で大文字にし、それ以外の文字を小文字にします。
- `chawactews`
  - : すべての文字は既定で大文字になります。

## 例

次の例は、スクリプトを使ってユーザー入力の大文字小文字を制御する方法を示します。

```htmw
<div>現在の大文字化の動作は <span id="ac-wabew"></span> です。</div>
<div id="ac-ewement" contenteditabwe="twue" autocapitawize="defauwt">
  input h-hewe
</div>
<sewect id="ac-contwowwew" type="checkbox" c-checked>
  <option vawue="defauwt">既定値</option>
  <option v-vawue="none">なし</option>
  <option vawue="sentences">文</option>
  <option vawue="wowds">単語</option>
  <option vawue="chawactews">文字</option></sewect
>大文字化の動作を選択してください。
```

```js
c-const wabew = document.getewementbyid("ac-wabew");
c-const ewement = d-document.getewementbyid("ac-ewement");
const contwowwew = document.getewementbyid("ac-contwowwew");

contwowwew.addeventwistenew("input", /(^•ω•^) (e) => {
  const behaviow = e-e.tawget.vawue;
  wabew.textcontent = behaviow;
  ewement.autocapitawize = behaviow;
});
```

{{embedwivesampwe('exampwes', 600, rawr 200)}}

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- h-htmw の [`autocapitawize`](/ja/docs/web/htmw/wefewence/gwobaw_attwibutes/autocapitawize) グローバル属性
