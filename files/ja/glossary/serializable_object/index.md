---
title: Serializable object （シリアライズ可能オブジェクト）
slug: Glossary/Serializable_object
l10n:
  sourceCommit: ada5fa5ef15eadd44b549ecf906423b4a2092f34
---

{{GlossarySidebar}}

**シリアライズ可能オブジェクト**は、どのような JavaScript 環境 ("realm") でもシリアライズし、後でデシリアライズすることができるオブジェクトです。
これは例えば、ディスクに格納し後から復元したり、{{domxref("structuredClone()")}} で複製したり、{{domxref("DedicatedWorkerGlobalScope.postMessage()")}} を使用してワーカー間で共有したりすることができます。

シリアライズは、元のオブジェクトのすべてのプロパティや、その他の一部を含まないことがあります。
例えば、{{domxref("DOMException")}} のシリアライズには `name` および `message` プロパティは必ず含まれますが、他のプロパティが含まれるかどうかは実装に依存します。
結果的に、デシリアライズされたオブジェクトは元オブジェクトと同一のクローン/複製とは限りません。
しかし、デシリアライズされた新しいオブジェクトは{{glossary("deep copy", "ディープコピー")}}になるので、元のオブジェクトからシリアライズされ、新しいオブジェクトにデシリアライズされたプロパティは、元のオブジェクトと参照することはありません。

オブジェクトをシリアライズしたりデシリアライズしたりするときに、コピーを作成するよりもリソースを移譲したほうが理にかなっている場合があります。
移譲可能なオブジェクトは[移譲可能オブジェクト](/ja/docs/Web/API/Web_Workers_API/Transferable_objects)と呼ばれます。

## 対応しているオブジェクト

すべてのプリミティブ値は、シリアライズ可能です。
すべてのオブジェクトが、シリアライズ可能なオブジェクトとは限りません。
シリアライズ可能なオブジェクトについては、[構造化複製アルゴリズム > 対応済みの型](/ja/docs/Web/API/Web_Workers_API/Structured_clone_algorithm#対応済みの型)に一覧があります。

> **メモ:** シリアライズ可能なオブジェクトは、[Web IDL ファイル](https://github.com/w3c/webref/tree/main/ed/idl) に `[Serializable]` 属性で示されています。
