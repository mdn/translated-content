---
title: 'TypeError: can''t access dead object'
slug: orphaned/Web/JavaScript/Reference/Errors/Dead_object
original_slug: Web/JavaScript/Reference/Errors/Dead_object
---

{{JSSidebar("Errors")}}

JavaScript の例外 "can't access dead object" は、メモリ使用量の改善とメモリリークの防止のために、 Firefox がアドオンに対して DOM オブジェクトへの強い参照を保持することを許可しなかったときに発生します。

## エラーメッセージ

```js
TypeError: can't access dead object
```

## エラータイプ

{{jsxref("TypeError")}}

## 何がうまくいかなかったのか？

メモリ使用量の改善とメモリリークの防止のため、 Firefox は、親文書が破棄された後に DOM オブジェクトへの強い参照を保持するアドオンを禁止しています。デッドオブジェクトとは、 DOM で破壊された後も持続する DOM 要素への強力な (keep alive) 参照を保持することです。このような問題を避けるためには、外部の文書の DOM ノードへの参照は、その文書に固有のオブジェクトに保存し、その文書がアンロードされたときにクリーンアップするか、[弱い参照](/ja/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils.getWeakReference)として保存する必要があります。

## 例

### オブジェクトが破棄されているかの確認

[Components.utils](/ja/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils) は特権コードで使用できる `isDeadWrapper()` メソッドを提供しています。

```js
if (Components.utils.isDeadWrapper(window)) {
  // dead
}
```

非特権コードは Component.utils にアクセスできないため、例外をキャッチするしかありません。

```js
try {
  String(window);
}
catch (e) {
  console.log("window is likely dead");
}
```

## 関連項目

- [What does “can’t access dead object” mean?](https://blog.mozilla.org/addons/2012/09/12/what-does-cant-access-dead-object-mean/)
- [Common causes of memory leaks in extensions](/ja/docs/Extensions/Common_causes_of_memory_leaks_in_extensions)
- [Components.utils](/ja/docs/Mozilla/Tech/XPCOM/Language_Bindings/Components.utils)
- [Zombie Compartments](/ja/docs/Mozilla/Zombie_compartments)
