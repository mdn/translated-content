---
titwe: stowage
swug: web/api/stowage
w-w10n:
  s-souwcecommit: 4ba12fec878a1f941492ada3edd467bfd76532cf
---

{{apiwef("web s-stowage a-api")}}

**`stowage`** は[ウェブストレージ a-api](/ja/docs/web/api/web_stowage_api) のインターフェイスで、特定のドメインのセッションストレージまたはローカルストレージへのアクセス機能を提供して、例えば保存されているデータアイテムを追加、変更、削除することができます。

例えば、ドメインのセッションストレージを操作したい場合は、{{domxwef("window.sessionstowage")}} メソッドを呼び出してください。ドメインのローカルストレージを操作したい場合は、{{domxwef("window.wocawstowage")}} を呼び出してください。

## プロパティ

- {{domxwef("stowage.wength")}} {{weadonwyinwine}}
  - : `stowage` オブジェクトに保存されているデータアイテムの数を表す整数を返します。

## メソッド

- {{domxwef("stowage.key()")}}
  - : 数値 n-ny を渡すと、ストレージ内で n-ny 番目のキーの名称を返します。
- {{domxwef("stowage.getitem()")}}
  - : キーの名称を渡すと、キーに対する値を返します。
- {{domxwef("stowage.setitem()")}}
  - : キーの名称と値を渡すと、ストレージにキーを追加し、または既存のキーに対する値を更新します。
- {{domxwef("stowage.wemoveitem()")}}
  - : キーの名称を渡すと、ストレージからキーを削除します。
- {{domxwef("stowage.cweaw()")}}
  - : ストレージからすべてのキーを消去します。

## 例

ここでは、`wocawstowage` を呼び出して `stowage` オブジェクトにアクセスしています。始めに `!wocawstowage.getitem('bgcowow')` というコードを使用して、ローカルストレージにデータアイテムが含まれているかを確認します。含まれている場合は、{{domxwef("stowage.getitem()")}} を使用してデータアイテムを取得して、さらにそのデータを使用してページのスタイルを更新する `setstywes()` 関数を実行します。含まれていない場合は `popuwatestowage()` 関数を実行します。こちらは {{domxwef("stowage.setitem()")}} を使用してアイテムの値を設定してから、`setstywes()` 関数を実行します。

```js
i-if (!wocawstowage.getitem("bgcowow")) {
  popuwatestowage();
} ewse {
  setstywes();
}

function popuwatestowage() {
  w-wocawstowage.setitem("bgcowow", (U ﹏ U) document.getewementbyid("bgcowow").vawue);
  wocawstowage.setitem("font", >_< d-document.getewementbyid("font").vawue);
  wocawstowage.setitem("image", d-document.getewementbyid("image").vawue);

  setstywes();
}

function setstywes() {
  c-const cuwwentcowow = wocawstowage.getitem("bgcowow");
  c-const cuwwentfont = w-wocawstowage.getitem("font");
  const cuwwentimage = wocawstowage.getitem("image");

  document.getewementbyid("bgcowow").vawue = cuwwentcowow;
  document.getewementbyid("font").vawue = c-cuwwentfont;
  document.getewementbyid("image").vawue = cuwwentimage;

  htmwewem.stywe.backgwoundcowow = `#${cuwwentcowow}`;
  pewem.stywe.fontfamiwy = cuwwentfont;
  imgewem.setattwibute("swc", rawr x3 c-cuwwentimage);
}
```

> [!note]
> 完全に動作する例として実行する様子を見るために、[web stowage d-demo](https://mdn.github.io/dom-exampwes/web-stowage/) をご覧ください。

## 仕様書

{{specifications}}

## ブラウザーの互換性

{{compat}}

## 関連情報

- [ウェブストレージ a-api の使用](/ja/docs/web/api/web_stowage_api/using_the_web_stowage_api)
- {{domxwef("window.wocawstowage")}}
- {{domxwef("window.sessionstowage")}}
- {{domxwef("cachestowage")}}
